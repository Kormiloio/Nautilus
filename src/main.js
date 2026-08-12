import {
  getActiveProfile,
  getProfiles,
  getSelectedPackId,
  loadProfileData,
  saveSelectedPackId,
  setActiveProfile,
  setActiveProgressPack,
  completeVoyageLesson,
  completeTopic,
  awardStars,
  recordActivity,
  incrementDialogues,
  syncCloudDataToLocal,
  triggerSync
} from './engine/progress-store.js';

import {
  buildMatch,
  buildQuiz,
  getAvailableLanguagePacks,
  getTopic,
  LANGUAGE_PACK,
  setActiveLanguagePack,
  VOYAGE_LESSONS,
} from './engine/learning-engine.js';
import { onAuthStateChange, getSession, isConfigured } from './engine/supabase-client.js';
import { speakWithBestDeviceVoice } from './engine/speech-engine.js';
import {
  acceptFamilyInvitation,
  completeFamilyPlay,
  claimFamilyPlayController,
  controlFamilyPlay,
  createFamily,
  getFamilyPlayState,
  getFamilyOverview,
  getFamilyProgressDashboard,
  handoffFamilyPlayController,
  heartbeatFamilyPlay,
  inviteFamilyMember,
  inviteLearnerProfile,
  joinFamilyPlay,
  linkFamilyLearnerAccount,
  listFamilies,
  startFamilyPlay,
  startFamilyReview,
  subscribeToFamilyPlay,
} from './engine/family-service.js';

// Import views
import { renderProfileSelect } from './components/profile-select.js';
import { renderDashboard } from './components/dashboard.js';
import { renderCalendar } from './components/calendar.js';
import { renderTopicView } from './components/topic-view.js';
import { renderSessionView } from './components/session-view.js';
import { renderCurriculum } from './components/curriculum-view.js';
import { renderFamilyOverview } from './components/family-overview.js';
import { renderFamilyPlayView } from './components/family-play-view.js';

// Global state
const state = {
  profile: null,
  isGuide: false,
  screen: 'profile-select', // 'profile-select', 'dashboard', 'topic', 'session', 'curriculum'
  sessionUser: null, // Tracks Supabase authenticated user
  families: null,
  familyError: null,
  familyNotice: null,
  familyOverview: null,
  familyOverviewLoading: false,
  familyPlayState: null,
  familyProgress: null,
  linkedLearnerProfileId: null,
  activePackId: 'montenegrin-en',
  languagePacks: getAvailableLanguagePacks(),

  // Scored state
  stars: 0,
  streakDays: 0,
  completedTopicIds: [],
  completedLessons: [],
  activityDates: [],
  dialoguesDone: 0,

  // Navigation detail
  topicId: null,
  activity: 'flashcards',
  calendarMonth: 0, // 0 to 9 representing Aug to May

  // Active session context
  activeLesson: null,
  session: null, // Holds active session steps and indexes

  // Card states
  flash: { order: null, idx: 0, flipped: false },
  match: { tiles: [], selectedIds: [], matchedIds: [] },
  quiz: { questions: [], qIdx: 0, score: 0, selected: null, answered: false },
  listen: { order: null, idx: 0, revealed: false },
  dialogue: { readAs: null, showEn: false },
  recording: { status: 'idle', url: null, error: null, chunks: [], recorder: null },
};

const appContainer = document.getElementById('app');

// Speech synthesis handler
function showAudioDeviceNotice(message) {
  let notice = document.getElementById('audio-device-notice');
  if (!notice) {
    notice = document.createElement('div');
    notice.id = 'audio-device-notice';
    notice.className = 'audio-device-notice';
    notice.setAttribute('role', 'status');
    document.body.appendChild(notice);
  }
  notice.textContent = message;
  notice.classList.add('visible');
  clearTimeout(showAudioDeviceNotice.timer);
  showAudioDeviceNotice.timer = setTimeout(() => notice.classList.remove('visible'), 9000);
}

function speak(text) {
  if (!('speechSynthesis' in window)) {
    showAudioDeviceNotice('Speech playback is not supported by this browser.');
    return;
  }
  const languageCode = LANGUAGE_PACK.targetLanguage.code;
  const result = speakWithBestDeviceVoice(text, languageCode, window.speechSynthesis, window.SpeechSynthesisUtterance);
  if (!result.spoken && result.reason === 'voice-missing') {
    const language = languageCode === 'sq' ? 'Albanian' : 'Croatian';
    const deviceHelp = /iPad|iPhone|iPod/.test(navigator.userAgent)
      ? `On this iPhone or iPad, open Settings → Accessibility → Read & Speak → Voices and download a ${language} voice.`
      : `Install or enable a ${language} speech voice in this device's accessibility or speech settings.`;
    showAudioDeviceNotice(`Nautilus stopped an incorrect English pronunciation. ${deviceHelp}`);
  }
}

// Router actions
const actions = {
  selectLanguage: async (packId) => {
    if (!state.profile) return;
    activatePackForProfile(state.profile, packId);
    if (state.sessionUser) {
      try {
        await syncCloudDataToLocal();
      } catch (error) {
        state.familyError = error.message;
      }
    }
    loadProfileState(state.profile);
    if (state.sessionUser) {
      try {
        await loadFamilyPlayState();
      } catch (error) {
        state.familyError = error.message;
      }
    }
    state.screen = 'dashboard';
    cleanupSessionState();
    rerender();
  },
  createFamily: async (name) => {
    state.familyError = null;
    try {
      await createFamily(name);
      state.families = await listFamilies();
      await syncCloudDataToLocal();
      rerender();
    } catch (error) {
      state.familyError = error.message;
      rerender();
    }
  },

  invitePartner: async (email, returnToOverview = false) => {
    const familyId = state.families?.[0]?.family_id;
    if (!familyId) return;
    state.familyError = null;
    state.familyNotice = null;
    try {
      const token = await inviteFamilyMember(familyId, email, 'adult_guide');
      const inviteUrl = new URL(`${window.location.origin}${window.location.pathname}`);
      inviteUrl.searchParams.set('invite', token);
      try {
        await navigator.clipboard.writeText(inviteUrl.toString());
      } catch {
        window.prompt('Copy this invitation link:', inviteUrl.toString());
      }
      state.familyNotice = `Partner invitation copied. Send the link to ${email}; it expires in 7 days.`;
    } catch (error) {
      state.familyError = error.message;
    }
    if (returnToOverview) await actions.goFamilyOverview();
    else rerender();
  },

  inviteLearner: async (profileId, learnerName, email) => {
    state.familyError = null;
    state.familyNotice = null;
    try {
      const token = await inviteLearnerProfile(profileId, email);
      const inviteUrl = new URL(`${window.location.origin}${window.location.pathname}`);
      inviteUrl.searchParams.set('invite', token);
      try {
        await navigator.clipboard.writeText(inviteUrl.toString());
      } catch {
        window.prompt('Copy this invitation link:', inviteUrl.toString());
      }
      state.familyNotice = `${learnerName}'s sign-in invitation was copied. Send it to ${email}; it expires in 7 days.`;
    } catch (error) {
      state.familyError = error.message;
    }
    rerender();
  },

  repairLearnerSignIn: async (profileId, learnerName, email) => {
    state.familyError = null;
    state.familyNotice = null;
    try {
      await linkFamilyLearnerAccount(profileId, email);
      state.familyNotice = `${learnerName} is now linked to ${email} as a learner.`;
      state.families = await listFamilies();
      state.familyOverview = await getFamilyOverview(state.families?.[0]?.family_id);
    } catch (error) {
      state.familyError = error.message;
    }
    rerender();
  },

  goDashboard: () => {
    state.screen = 'dashboard';
    cleanupSessionState();
    rerender();
    window.scrollTo({ top: 0, behavior: 'auto' });
  },

  goCurriculum: () => {
    state.screen = 'curriculum';
    cleanupSessionState();
    rerender();
    window.scrollTo({ top: 0, behavior: 'auto' });
  },

  goProfileSelect: () => {
    state.screen = 'profile-select';
    state.profile = null;
    cleanupSessionState();
    rerender();
  },

  goFamilyOverview: async () => {
    state.profile = null;
    state.screen = 'family-overview';
    state.familyOverviewLoading = true;
    state.familyError = null;
    rerender();
    try {
      const familyId = state.families?.[0]?.family_id;
      state.familyOverview = await getFamilyOverview(familyId);
      state.familyPlayState = await getFamilyPlayState(familyId, state.activePackId);
      state.familyProgress = await getFamilyProgressDashboard(familyId, state.activePackId);
    } catch (error) {
      state.familyError = error.message;
    } finally {
      state.familyOverviewLoading = false;
      rerender();
    }
  },

  startFamilySession: async (participantProfileIds) => {
    const familyId = state.families?.[0]?.family_id;
    const pack = state.languagePacks.find(item => item.id === state.activePackId);
    const completedDays = state.familyPlayState?.completedDays || 0;
    const lesson = VOYAGE_LESSONS[Math.min(completedDays, 199)];
    state.familyError = null;
    try {
      await startFamilyPlay({
        familyId,
        packId: pack.id,
        packVersion: pack.version,
        lessonId: lesson.id,
        voyageDay: completedDays + 1,
        participantProfileIds,
      });
      await loadFamilyPlayState();
      state.activeLesson = lesson;
      state.screen = 'family-play';
    } catch (error) {
      state.familyError = error.message;
    }
    rerender();
  },

  openFamilySession: async () => {
    const active = state.familyPlayState?.activeSession;
    if (!active) return;
    state.familyError = null;
    try {
      const isLinkedLearner = Boolean(state.linkedLearnerProfileId);
      if (!isLinkedLearner && state.families?.[0]?.role !== 'learner' && !state.familyOverview) {
        state.familyOverview = await getFamilyOverview(state.families?.[0]?.family_id);
      }
      if (isLinkedLearner || state.families?.[0]?.role === 'learner') await joinFamilyPlay(active.id);
      else if (active.canTakeControl) await claimFamilyPlayController(active.id);
      await loadFamilyPlayState();
      state.activeLesson = VOYAGE_LESSONS.find(lesson => lesson.id === active.lessonId) || VOYAGE_LESSONS[active.voyageDay - 1];
      state.screen = 'family-play';
    } catch (error) {
      state.familyError = error.message;
    }
    rerender();
  },

  claimFamilyController: async () => {
    const sessionId = state.familyPlayState?.activeSession?.id;
    if (!sessionId) return;
    try {
      await claimFamilyPlayController(sessionId);
      await loadFamilyPlayState();
    } catch (error) { state.familyError = error.message; }
    rerender();
  },

  handoffFamilyController: async (nextAdultId) => {
    const sessionId = state.familyPlayState?.activeSession?.id;
    if (!sessionId) return;
    try {
      await handoffFamilyPlayController(sessionId, nextAdultId);
      await loadFamilyPlayState();
    } catch (error) { state.familyError = error.message; }
    rerender();
  },

  reviewFamilySession: async (sourceSessionId) => {
    const participants = state.familyOverview?.learners?.map(learner => learner.id) || [];
    try {
      await startFamilyReview(sourceSessionId, participants);
      await loadFamilyPlayState();
      await actions.openFamilySession();
    } catch (error) { state.familyError = error.message; rerender(); }
  },

  controlFamilySession: async (status, segment) => {
    const sessionId = state.familyPlayState?.activeSession?.id;
    if (!sessionId) return;
    try {
      await controlFamilyPlay(sessionId, status, segment);
      await loadFamilyPlayState();
    } catch (error) {
      state.familyError = error.message;
    }
    rerender();
  },

  completeFamilySession: async () => {
    const sessionId = state.familyPlayState?.activeSession?.id;
    if (!sessionId) return;
    try {
      await completeFamilyPlay(sessionId);
      await loadFamilyPlayState();
      state.screen = 'family-overview';
      state.activeLesson = null;
      state.familyNotice = 'Family voyage day completed together.';
      state.familyOverview = await getFamilyOverview(state.families?.[0]?.family_id);
      state.familyProgress = await getFamilyProgressDashboard(state.families?.[0]?.family_id, state.activePackId);
    } catch (error) {
      state.familyError = error.message;
    }
    rerender();
  },

  refresh: () => {
    if (state.profile) {
      loadProfileState(state.profile);
    }
    rerender();
  },

  switchProfile: (name) => {
    setActiveProfile(name);
    state.profile = name;
    activatePackForProfile(name);
    loadProfileState(name);
    state.screen = 'dashboard';
    cleanupSessionState();

    // Auto-navigate calendar to current lesson's month
    const nextLesson = VOYAGE_LESSONS.find(l => !state.completedLessons.includes(l.id));
    if (nextLesson) {
      state.calendarMonth = nextLesson.month;
    }

    rerender();
  },

  openTopic: (id) => {
    state.topicId = id;
    state.screen = 'topic';
    state.activity = 'flashcards';
    state.flash = { order: null, idx: 0, flipped: false };
    state.match = { tiles: [], selectedIds: [], matchedIds: [] };
    state.quiz = { questions: [], qIdx: 0, score: 0, selected: null, answered: false };
    state.listen = { order: null, idx: 0, revealed: false };
    state.dialogue = { readAs: null, showEn: true };
    rerender();
  },

  setActivity: (activityId) => {
    state.activity = activityId;
    state.flash = { order: null, idx: 0, flipped: false };
    state.match = { tiles: [], selectedIds: [], matchedIds: [] };
    state.quiz = { questions: [], qIdx: 0, score: 0, selected: null, answered: false };
    state.listen = { order: null, idx: 0, revealed: false };
    state.dialogue = { readAs: null, showEn: true };
    rerender();
  },

  startSession: (lesson) => {
    state.activeLesson = lesson;
    state.screen = 'session';
    state.session = null; // Forces dynamic steps generation in session view
    rerender();
  },

  nextSessionStep: () => {
    if (state.session) {
      state.session.stepIdx++;

      // Reset step sub-states
      state.session.flash = { idx: 0, flipped: false };
      state.session.quiz = null;
      state.session.match = null;

      rerender();
    }
  },

  completeLesson: (lessonId) => {
    completeVoyageLesson(state.profile, lessonId);

    // Auto-complete the associated topic if this is a checkpoint day
    const topicId = state.activeLesson.topicId;
    if (topicId && state.activeLesson.type === 'checkpoint') {
      completeTopic(state.profile, topicId);
    }

    loadProfileState(state.profile);
    actions.goDashboard();
  },

  markTopicCompleted: (topicId) => {
    completeTopic(state.profile, topicId);
    loadProfileState(state.profile);
  },

  awardStars: (count) => {
    awardStars(state.profile, count);
    loadProfileState(state.profile);
  },

  incrementDialogues: () => {
    incrementDialogues(state.profile);
    loadProfileState(state.profile);
  },

  speak,

  startMixedReview: () => {
    // Generate an ad-hoc session representing mixed review
    const unlocked = state.completedTopicIds.map(id => getTopic(id)).filter(Boolean);
    const pool = unlocked.flatMap(t => t.items);

    if (pool.length === 0) return;

    state.activeLesson = {
      id: 'mixed-review',
      title: 'Mixed Review',
      detail: 'Practice from all completed topics',
      topicId: null,
      month: 0,
    };

    state.screen = 'session';

    // Set custom session steps for mixed review
    state.session = {
      lessonId: 'mixed-review',
      stepIdx: 0,
      steps: [
        {
          type: 'quiz',
          title: 'Review Quiz',
          subtitle: 'Test your retention',
          quiz: buildQuiz(pool, 8)
        },
        {
          type: 'match',
          title: 'Review Match',
          subtitle: 'Match terms quickly',
          match: buildMatch(pool, 8)
        },
        {
          type: 'done',
          title: 'Review Finished!',
          subtitle: 'You completed your mixed review!'
        }
      ],
      flash: { idx: 0, flipped: false },
      quiz: null,
      match: null,
      dialogue: { readAs: null, showEn: true },
    };
    rerender();
  }
};

function cleanupSessionState() {
  state.activeLesson = null;
  state.session = null;
}

function loadProfileState(name) {
  const data = loadProfileData(name);
  if (data) {
    state.stars = data.stars;
    state.streakDays = data.streakDays;
    state.completedTopicIds = data.completedTopicIds;
    state.completedLessons = data.completedLessons;
    state.activityDates = data.activityDates;
    state.dialoguesDone = data.dialoguesDone;
    state.isGuide = data.isGuide;
  }
}

function activatePackForProfile(profileName, requestedPackId = null) {
  const packId = requestedPackId || getSelectedPackId(profileName);
  const available = state.languagePacks.some(pack => pack.id === packId);
  const selected = available ? packId : 'montenegrin-en';
  setActiveLanguagePack(selected);
  setActiveProgressPack();
  saveSelectedPackId(profileName, selected);
  state.activePackId = selected;
}

function selectLinkedLearnerProfile() {
  const linkedProfiles = getProfiles().filter(
    profile => profile.linkedUserId === state.sessionUser?.id
  );
  state.linkedLearnerProfileId = linkedProfiles.length === 1 ? linkedProfiles[0].id : null;
  if (linkedProfiles.length === 1) setActiveProfile(linkedProfiles[0].name);
}

let stopFamilyPlaySubscription = null;

async function loadFamilyPlayState() {
  const familyId = state.families?.[0]?.family_id;
  if (!familyId || !state.sessionUser) {
    state.familyPlayState = null;
    return;
  }
  state.familyPlayState = await getFamilyPlayState(familyId, state.activePackId);
}

let familyHeartbeatTimer = null;
let familyPlayRefreshTimer = null;
let familyPlayRefreshSessionId = null;

function syncFamilyHeartbeat() {
  clearInterval(familyHeartbeatTimer);
  familyHeartbeatTimer = null;
  const active = state.familyPlayState?.activeSession;
  if (!active || active.controllingAdult !== state.sessionUser?.id || state.screen !== 'family-play') return;
  familyHeartbeatTimer = setInterval(() => heartbeatFamilyPlay(active.id).catch(() => {}), 45_000);
}

function syncFamilyPlayRefresh() {
  const activeSessionId = state.familyPlayState?.activeSession?.id;
  if (state.screen !== 'family-play' || !activeSessionId) {
    clearInterval(familyPlayRefreshTimer);
    familyPlayRefreshTimer = null;
    familyPlayRefreshSessionId = null;
    return;
  }
  if (familyPlayRefreshTimer && familyPlayRefreshSessionId === activeSessionId) return;
  clearInterval(familyPlayRefreshTimer);
  familyPlayRefreshSessionId = activeSessionId;
  familyPlayRefreshTimer = setInterval(async () => {
    try {
      await loadFamilyPlayState();
      if (state.screen === 'family-play') rerender();
    } catch {
      // Realtime remains primary; the poll is recovery for missed events.
    }
  }, 5_000);
}

function watchFamilyPlay() {
  stopFamilyPlaySubscription?.();
  stopFamilyPlaySubscription = null;
  const familyId = state.families?.[0]?.family_id;
  if (!familyId || !state.sessionUser) return;
  stopFamilyPlaySubscription = subscribeToFamilyPlay(familyId, async () => {
    try {
      await loadFamilyPlayState();
      rerender();
    } catch (error) {
      state.familyError = error.message;
    }
  });
}

// Global Rerender Controller
function rerender() {
  appContainer.innerHTML = '';

  if (state.screen === 'family-play') {
    syncFamilyHeartbeat();
    syncFamilyPlayRefresh();
    renderFamilyPlayView(appContainer, state, actions);
    return;
  }
  clearInterval(familyHeartbeatTimer);
  familyHeartbeatTimer = null;
  syncFamilyPlayRefresh();

  if (!state.profile) {
    if (state.screen === 'family-overview') renderFamilyOverview(appContainer, state, actions);
    else {
      state.screen = 'profile-select';
      renderProfileSelect(appContainer, state, actions);
    }
    return;
  }

  if (state.screen === 'dashboard') {
    renderDashboard(appContainer, state, actions);

    // Mount sub-component: Calendar
    const calMount = appContainer.querySelector('#calendar-mount');
    if (calMount) {
      renderCalendar(
        calMount,
        state,
        () => {
          state.calendarMonth = Math.max(0, state.calendarMonth - 1);
          rerender();
        },
        () => {
          state.calendarMonth = Math.min(9, state.calendarMonth + 1);
          rerender();
        }
      );
    }
  } else if (state.screen === 'topic') {
    renderTopicView(appContainer, state, actions);
  } else if (state.screen === 'session') {
    renderSessionView(appContainer, state, actions);
  } else if (state.screen === 'curriculum') {
    renderCurriculum(appContainer, state, actions);
  }
}

// App Initialization
async function init() {
  // Safari and some mobile browsers populate their voice list asynchronously.
  window.speechSynthesis?.getVoices();
  // Listen for online status to flush pending offline transactions
  window.addEventListener('online', () => {
    triggerSync();
    rerender();
  });
  window.addEventListener('offline', () => {
    rerender();
  });

  if (isConfigured) {
    // Listen for auth state changes
    onAuthStateChange(async (event, session) => {
      state.sessionUser = session?.user || null;
      if (session) {
        try {
          state.families = await listFamilies();
          await syncCloudDataToLocal();
          selectLinkedLearnerProfile();
          await loadFamilyPlayState();
          watchFamilyPlay();
          await triggerSync();
        } catch (e) {
          console.error('Error syncing cloud data on auth event:', e);
          state.familyError = e.message;
        }
      } else {
        state.families = null;
        state.familyPlayState = null;
        state.linkedLearnerProfileId = null;
        stopFamilyPlaySubscription?.();
        stopFamilyPlaySubscription = null;
        setActiveProfile(null);
        state.profile = null;
      }

      const activeUser = getActiveProfile();
      if (activeUser) {
        state.profile = activeUser;
        activatePackForProfile(activeUser);
        loadProfileState(activeUser);
      } else {
        state.screen = 'profile-select';
        state.profile = null;
      }
      rerender();
    });

    // Check initial session
    const session = await getSession();
    state.sessionUser = session?.user || null;
    if (session) {
      try {
        const inviteToken = new URLSearchParams(window.location.search).get('invite');
        if (inviteToken) {
          await acceptFamilyInvitation(inviteToken);
          const cleanUrl = new URL(window.location.href);
          cleanUrl.searchParams.delete('invite');
          window.history.replaceState({}, '', cleanUrl);
          state.familyNotice = 'Family invitation accepted.';
        }
        state.families = await listFamilies();
        await syncCloudDataToLocal();
        selectLinkedLearnerProfile();
        await loadFamilyPlayState();
        watchFamilyPlay();
        await triggerSync();
      } catch (e) {
        console.error('Error syncing initial cloud data:', e);
        state.familyError = e.message;
      }
    }
  }

  // A hosted/cloud-configured app must never bypass authentication because an
  // older build left a local active-profile value in this browser.
  const activeUser = !isConfigured || state.sessionUser ? getActiveProfile() : null;
  if (activeUser) {
    state.profile = activeUser;
    activatePackForProfile(activeUser);
    loadProfileState(activeUser);
    state.screen = 'dashboard';

    // Auto-navigate calendar to current lesson's month
    const nextLesson = VOYAGE_LESSONS.find(l => !state.completedLessons.includes(l.id));
    state.calendarMonth = nextLesson ? nextLesson.month : 0;
  } else {
    state.screen = 'profile-select';
  }

  rerender();
}

window.addEventListener('DOMContentLoaded', init);
