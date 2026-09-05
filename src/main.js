import { beginVerifiedLesson, getVerifiedAttempt, getVerifiedFamilyAttempt, submitVerifiedExercise } from './engine/verified-learning-service.js';
import { renderVerifiedLessonView } from './components/verified-lesson-view.js';
import { advanceDetectiveCase, createDetectiveGame, earnSideQuestBadge, lockDetectiveAnswer, selectDetectiveAnswer } from './engine/side-quest-game.js';
import { advanceFamilySideQuest, getFamilySideQuestState, startFamilySideQuest, submitFamilySideQuestAnswer, subscribeToFamilySideQuest } from './engine/side-quest-service.js';
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
import { applyDocumentLanguage } from './engine/language-runs.js';
import {
  acceptFamilyInvitation,
  controlFamilyPlay,
  createFamily,
  getFamilyPlayState,
  getFamilySessionStatus,
  getFamilyOverview,
  getFamilyProgressDashboard,
  heartbeatFamilyPlay,
  inviteFamilyMember,
  inviteLearnerProfile,
  joinFamilyPlay,
  linkFamilyLearnerAccount,
  listFamilies,
  startFamilyPlay,
  startFamilyReview,
  subscribeToFamilyPlay,
  touchFamilyPlay,
} from './engine/family-service.js';

// Import views
import { renderProfileSelect } from './components/profile-select.js';
import { renderDashboard } from './components/dashboard.js';
import { renderCalendar } from './components/calendar.js';
import { renderTopicView } from './components/topic-view.js';
import { renderSessionView } from './components/session-view.js';
import { renderCurriculum } from './components/curriculum-view.js';
import { renderFamilyOverview } from './components/family-overview.js';
import { renderSideQuestView } from './components/side-quest-view.js';
import { AdminDashboardComponent } from './components/admin-dashboard.js';

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
  sideQuest: null,
  sideQuestGame: null,
  familySideQuestState: null,
  sideQuestSelection: null,
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
  if (LANGUAGE_PACK.audio?.delivery === 'none') {
    showAudioDeviceNotice(`${LANGUAGE_PACK.targetLanguage.name} audio is not available in this pilot. Nautilus will not substitute an Arabic, English, or generic device voice.`);
    return;
  }
  if (!('speechSynthesis' in window)) {
    showAudioDeviceNotice('Speech playback is not supported by this browser.');
    return;
  }
  const languageCode = LANGUAGE_PACK.targetLanguage.code;
  const result = speakWithBestDeviceVoice(text, languageCode, window.speechSynthesis, window.SpeechSynthesisUtterance);
  if (!result.spoken && result.reason === 'voice-missing') {
    const language = ({
      sq: 'Albanian', ar: 'Iraqi Arabic', es: 'Spanish (Spain)',
      it: 'Italian', fr: 'French (France)', cnr: 'Croatian',
    })[languageCode] || LANGUAGE_PACK.targetLanguage.name;
    const deviceHelp = /iPad|iPhone|iPod/.test(navigator.userAgent)
      ? `On this iPhone or iPad, open Settings → Accessibility → Read & Speak → Voices and download a ${language} voice.`
      : `Install or enable a ${language} speech voice in this device's accessibility or speech settings.`;
    showAudioDeviceNotice(`Nautilus stopped an incorrect English pronunciation. ${deviceHelp}`);
  }
}

// Router actions
const actions = {
  selectFamily: async (familyId) => {
    if (!state.sessionUser || !state.families?.some(f => f.family_id === familyId)) return;
    localStorage.setItem('nautilus:family:' + state.sessionUser.id, familyId);
    state.profile = null;
    setActiveProfile(null);
    state.familyOverview = null;
    state.familyProgress = null;
    state.familyPlayState = null;
    state.familyError = null;
    cleanupSessionState();
    state.screen = 'profile-select';
    try {
      state.families = await listFamilies();
      await syncCloudDataToLocal();
      selectLinkedLearnerProfile();
      await loadFamilyPlayState();
      watchFamilyPlay();
    } catch (error) { state.familyError = error.message; }
    rerender();
  },
  selectLanguage: async (packId) => {
    if (!state.profile) return;
    const requestedPack = state.languagePacks.find(pack => pack.id === packId);
    if (requestedPack?.status === 'pilot') {
      const consentKey = `nautilus-pilot-consent:${requestedPack.id}:${requestedPack.version}`;
      if (localStorage.getItem(consentKey) !== 'accepted') {
        const accepted = window.confirm(
          `${requestedPack.targetLanguage.name} is an early family pilot. ` +
          'Its wording, transliteration, pronunciation, and cultural material have not completed community review. ' +
          'Use it for testing and report corrections; do not treat it as an authoritative course yet. Continue?'
        );
        if (!accepted) {
          rerender();
          return;
        }
        localStorage.setItem(consentKey, 'accepted');
      }
    }
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

  openSideQuest: async (quest) => {
    if (!quest || quest.locked) return;
    state.sideQuest = quest;
    state.sideQuestSelection = null;
    if (quest.game === "detective" && state.sessionUser && state.families?.[0]?.family_id) {
      try {
        await loadFamilySideQuestState();
        if (!state.familySideQuestState || state.familySideQuestState.status !== "active") {
          if (!["owner", "adult_guide"].includes(state.families[0].role)) throw new Error("Ask your parent or guide to open this side quest for the family.");
          state.familyOverview ||= await getFamilyOverview(state.families[0].family_id);
          const participants = (state.familyOverview?.learners || []).filter(p => p.linked).map(p => p.id);
          await startFamilySideQuest({ familyId: state.families[0].family_id, packId: state.activePackId, packVersion: LANGUAGE_PACK.version, questId: quest.id, milestone: quest.milestone, participantProfileIds: participants });
          await loadFamilySideQuestState();
        }
        watchFamilySideQuest();
        state.sideQuestGame = null;
      } catch (error) { state.familyError = error.message; actions.goDashboard(); return; }
    } else if (quest.game === "detective") {
      state.familySideQuestState = null;
      state.sideQuestGame = createDetectiveGame(quest, [state.profile || "Detective"]);
    } else state.sideQuestGame = null;
    state.screen = "side-quest";
    cleanupSessionState();
    rerender();
    window.scrollTo({ top: 0, behavior: "auto" });
  },

  selectSideQuestAnswer: answerId => {
    if (state.familySideQuestState) state.sideQuestSelection = answerId;
    else state.sideQuestGame = selectDetectiveAnswer(state.sideQuestGame, answerId);
    rerender();
  },
  lockSideQuestAnswer: async () => {
    if (state.familySideQuestState) {
      try { await submitFamilySideQuestAnswer(state.familySideQuestState.id, state.familySideQuestState.currentCase, state.sideQuestSelection); state.sideQuestSelection = null; await loadFamilySideQuestState(); }
      catch (error) { state.familyError = error.message; }
      rerender(); return;
    }
    state.sideQuestGame = lockDetectiveAnswer(state.sideQuestGame); rerender();
  },
  nextSideQuestCase: async () => {
    if (state.familySideQuestState) {
      try { await advanceFamilySideQuest(state.familySideQuestState.id); await loadFamilySideQuestState(); }
      catch (error) { state.familyError = error.message; }
      rerender(); return;
    }
    state.sideQuestGame = advanceDetectiveCase(state.sideQuestGame, state.sideQuest.cases.length); rerender();
  },
  replaySideQuest: () => { state.sideQuestGame = createDetectiveGame(state.sideQuest, [state.profile || "Detective"]); rerender(); },
  finishSideQuest: () => {
    earnSideQuestBadge(state.activePackId, state.profile || 'family', state.sideQuest.id);
    actions.goDashboard();
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
      await loadFamilyPlayState();
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
      hydrateVerifiedAttempt(await getVerifiedFamilyAttempt(state.familyPlayState.activeSession.id));
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
      // Verified rosters are pinned; taking over requires an explicit restart.
      await loadFamilyPlayState();
      state.activeLesson = VOYAGE_LESSONS.find(lesson => lesson.id === active.lessonId) || VOYAGE_LESSONS[active.voyageDay - 1];
      state.screen = 'family-play';
    } catch (error) {
      state.familyError = error.message;
    }
    rerender();
  },

  refreshFamilySession: async () => {
    try {
      await maintainLearnerPresence();
      await loadFamilyPlayState();
      state.familyNotice = 'Connection status refreshed.';
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

  refresh: () => {
    if (state.profile) {
      loadProfileState(state.profile);
    }
    rerender();
  },

  switchProfile: async (name) => {
    setActiveProfile(name);
    state.profile = name;
    activatePackForProfile(name);
    if (state.sessionUser) {
      try {
        await syncCloudDataToLocal();
      } catch (error) {
        state.familyError = error.message;
      }
    }
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

  openTopic: async (id) => {
    state.topicId = id;
    if (state.sessionUser) {
      await openVerifiedLesson({id:'practice:'+id+':flashcards',topicId:id,title:getTopic(id)?.title});
      return;
    }
    state.screen = 'topic';
    state.activity = 'flashcards';
    state.flash = { order: null, idx: 0, flipped: false };
    state.match = { tiles: [], selectedIds: [], matchedIds: [] };
    state.quiz = { questions: [], qIdx: 0, score: 0, selected: null, answered: false };
    state.listen = { order: null, idx: 0, revealed: false };
    state.dialogue = { readAs: null, showEn: true };
    rerender();
  },

  setActivity: async (activityId) => {
    if (state.sessionUser) {
      await openVerifiedLesson({id:'practice:'+state.topicId+':'+activityId,topicId:state.topicId,title:getTopic(state.topicId)?.title});
      return;
    }
    state.activity = activityId;
    state.flash = { order: null, idx: 0, flipped: false };
    state.match = { tiles: [], selectedIds: [], matchedIds: [] };
    state.quiz = { questions: [], qIdx: 0, score: 0, selected: null, answered: false };
    state.listen = { order: null, idx: 0, revealed: false };
    state.dialogue = { readAs: null, showEn: true };
    rerender();
  },


  exitVerifiedLesson: async () => {
    verifiedOpenGeneration++;state.verifiedLoading=false;state.verifiedAttempt=null; state.verifiedFeedback=null; state.verifiedError=null; state.verifiedPending=null;
    await actions.goDashboard();
  },
  continueVerifiedLesson: () => {
    state.verifiedFeedback=null;
    rerender();
  },
  submitVerifiedAnswer: async (index,response) => {
    const attempt=state.verifiedAttempt;
    if (!attempt || state.verifiedBusy) return;
    const key=verifiedPendingKey(attempt.id,index);
    state.verifiedBusy=true;state.verifiedError=null;
    const pending=state.verifiedPending;
    if (pending?.attemptId===attempt.id && pending.index===index) response=pending.response;
    localStorage.setItem(key,JSON.stringify({attemptId:attempt.id,index,response}));
    state.verifiedPending={attemptId:attempt.id,index,response};
    rerender();
    try {
      const result=await submitVerifiedExercise(attempt.id,index,response);
      const fresh=await getVerifiedAttempt(attempt.id);
      localStorage.removeItem(key);
      if(state.verifiedAttempt?.id!==attempt.id) return;
      state.verifiedPending=null;hydrateVerifiedAttempt(fresh);
      if(result.retry) {
        state.verifiedError='Not quite—check your pairs and try again.';
      } else if(attempt.exercises[index].kind!=='self_report') {
        const receipt=fresh.receipts.find(r=>r.index===index);
        state.verifiedFeedback={attemptId:attempt.id,index,answer:response,correct:result.correct,
          correctAnswer:result.correctAnswer??receipt?.correctAnswer};
        if(state.screen==='family-play') setTimeout(()=>{
          if(state.verifiedFeedback?.attemptId===attempt.id&&state.verifiedFeedback.index===index){state.verifiedFeedback=null;rerender();}
        },2500);
      }
      if(result.completed) {
        await syncCloudDataToLocal();
        if(state.profile) loadProfileState(state.profile);
        if(state.screen==='family-play') {await loadFamilyPlayState();await handleFamilyCompletion(attempt.familySessionId);}
      }
    } catch(error) {
      if(state.verifiedAttempt?.id===attempt.id) state.verifiedError='Could not confirm this answer: '+error.message+'. Retry to check the same answer safely.';
    } finally {state.verifiedBusy=false;rerender();}
  },

  startSession: async (lesson) => {
    if (state.sessionUser) {
      await openVerifiedLesson(lesson);
      return;
    }
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

  startMixedReview: async () => {
    if (state.sessionUser) {
      const lesson=VOYAGE_LESSONS.find(l=>state.completedLessons.includes(l.id)&&l.type==='checkpoint') || VOYAGE_LESSONS.find(l=>state.completedLessons.includes(l.id));
      if (lesson) await openVerifiedLesson(lesson);
      return;
    }
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

function verifiedPendingKey(id,index) { return 'nautilus:verified-response:'+state.sessionUser?.id+':'+id+':'+index; }
function hydrateVerifiedAttempt(attempt) {
  if(state.verifiedAttempt?.id!==attempt?.id) {state.verifiedFeedback=null;state.verifiedError=null;state.verifiedPending=null;}
  state.verifiedAttempt=attempt;
  if(attempt) {
    const prefix='nautilus:verified-response:'+state.sessionUser?.id+':'+attempt.id+':';
    state.verifiedPending=null;
    for(let i=localStorage.length-1;i>=0;i--) {
      const key=localStorage.key(i);if(!key?.startsWith(prefix))continue;
      try {
        const pending=JSON.parse(localStorage.getItem(key));
        const receipt=attempt.receipts.find(r=>r.index===pending.index);
        if(receipt) {
          localStorage.removeItem(key);
          if(attempt.exercises[pending.index]?.kind!=='self_report')state.verifiedFeedback={attemptId:attempt.id,index:pending.index,answer:receipt.answer,correct:receipt.correct,correctAnswer:receipt.correctAnswer};
        } else state.verifiedPending=pending;
      } catch {state.verifiedError='A saved response could not be read. Keep browser data so it can be reviewed.';}
    }
  }
}
let verifiedOpenGeneration=0;
async function openVerifiedLesson(lesson) {
  const generation=++verifiedOpenGeneration;
  state.familyError=null;state.verifiedLoading=true;state.verifiedAttempt=null;state.verifiedFeedback=null;state.verifiedPending=null;state.verifiedError=null;state.screen='verified';rerender();
  try {
    const profile=getProfiles().find(p=>p.name===state.profile);
    if(!profile || String(profile.id).startsWith('local-')) throw new Error('Select a linked learner profile first.');
    const attempt=await beginVerifiedLesson({packId:LANGUAGE_PACK.id,packVersion:LANGUAGE_PACK.version,lessonId:lesson.id,profileId:profile.id});
    if(generation!==verifiedOpenGeneration) return;
    state.activeLesson=lesson;hydrateVerifiedAttempt(attempt);state.screen='verified';
  } catch(error) {if(generation===verifiedOpenGeneration){state.familyError=error.message;state.verifiedError=error.message;}}
  finally {if(generation===verifiedOpenGeneration)state.verifiedLoading=false;}
  rerender();
}

const completionRefreshes = new Map();
function handleFamilyCompletion(sessionId) {
  if (completionRefreshes.has(sessionId)) return completionRefreshes.get(sessionId);
  const refresh = (async () => {
    await syncCloudDataToLocal();
    if (state.profile) loadProfileState(state.profile);
    if (state.screen === 'family-play') {
      state.activeLesson = null;
      state.screen = state.profile ? 'dashboard' : 'profile-select';
    }
    state.familyNotice = 'Everyone finished—the family voyage lesson is complete.';
  })().catch(error => { completionRefreshes.delete(sessionId); throw error; });
  completionRefreshes.set(sessionId, refresh);
  return refresh;
}

async function loadFamilySideQuestState() {
  const familyId = state.families?.[0]?.family_id;
  if (!familyId || !state.sessionUser) { state.familySideQuestState = null; return; }
  state.familySideQuestState = await getFamilySideQuestState(familyId, state.activePackId);
}

let stopFamilySideQuestSubscription = null;
function watchFamilySideQuest() {
  stopFamilySideQuestSubscription?.();
  stopFamilySideQuestSubscription = null;
  const familyId = state.families?.[0]?.family_id;
  if (!familyId || !state.sessionUser) return;
  stopFamilySideQuestSubscription = subscribeToFamilySideQuest(familyId, async () => {
    try { await loadFamilySideQuestState(); rerender(); } catch (error) { state.familyError = error.message; rerender(); }
  });
}

async function loadFamilyPlayState() {
  const familyId = state.families?.[0]?.family_id;
  if (!familyId || !state.sessionUser) {
    state.familyPlayState = null;
    return;
  }
  const previousSession = state.familyPlayState?.activeSession;
  state.familyPlayState = await getFamilyPlayState(familyId, state.activePackId);
  if (state.screen==='family-play' && state.familyPlayState?.activeSession) {
    hydrateVerifiedAttempt(await getVerifiedFamilyAttempt(state.familyPlayState.activeSession.id));
  }
  if (previousSession && previousSession.id !== state.familyPlayState?.activeSession?.id
      && await getFamilySessionStatus(previousSession.id) === 'completed') {
    await handleFamilyCompletion(previousSession.id);
  }
}

let familyHeartbeatTimer = null;
let familyHeartbeatSessionId = null;
let learnerPresenceTimer = null;
let learnerPresenceSessionId = null;
let familyPlayRefreshTimer = null;
let familyPlayRefreshSessionId = null;
let lastRenderedFamilyStage = null;

function syncFamilyHeartbeat() {
  const active = state.familyPlayState?.activeSession;
  if (!active || active.controllingAdult !== state.sessionUser?.id || state.screen !== 'family-play') {
    clearInterval(familyHeartbeatTimer);
    familyHeartbeatTimer = null;
    familyHeartbeatSessionId = null;
    return;
  }
  if (familyHeartbeatTimer && familyHeartbeatSessionId === active.id) return;
  clearInterval(familyHeartbeatTimer);
  familyHeartbeatSessionId = active.id;
  familyHeartbeatTimer = setInterval(() => heartbeatFamilyPlay(active.id).catch(() => {}), 45_000);
}

async function maintainLearnerPresence() {
  const active = state.familyPlayState?.activeSession;
  const isLearner = Boolean(state.linkedLearnerProfileId) || state.families?.[0]?.role === 'learner';
  if (!active || !isLearner || state.screen !== 'family-play') return;
  await touchFamilyPlay(active.id);
}

function syncLearnerPresence() {
  const active = state.familyPlayState?.activeSession;
  const isLearner = Boolean(state.linkedLearnerProfileId) || state.families?.[0]?.role === 'learner';
  if (!active || !isLearner || state.screen !== 'family-play') {
    clearInterval(learnerPresenceTimer);
    learnerPresenceTimer = null;
    learnerPresenceSessionId = null;
    return;
  }
  if (learnerPresenceTimer && learnerPresenceSessionId === active.id) return;
  clearInterval(learnerPresenceTimer);
  learnerPresenceSessionId = active.id;
  maintainLearnerPresence().then(loadFamilyPlayState).then(rerender).catch(error => {
    state.familyError = `Reconnecting to Family Play: ${error.message}`;
    rerender();
  });
  learnerPresenceTimer = setInterval(() => maintainLearnerPresence().catch(() => {}), 20_000);
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
      rerender();
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
function mountFamilySelector() {
  if (!state.sessionUser || (state.families?.length || 0) < 2) return;
  const label = document.createElement('label');
  label.className = 'container';
  label.textContent = 'Family workspace ';
  const select = document.createElement('select');
  select.className = 'badge-pill';
  select.setAttribute('aria-label', 'Family workspace');
  for (const family of state.families) {
    const option = document.createElement('option');
    option.value = family.family_id;
    option.textContent = family.families?.name || 'Family';
    select.append(option);
  }
  select.addEventListener('change', () => actions.selectFamily(select.value));
  label.append(select);
  appContainer.prepend(label);
}

function rerender() {
  applyDocumentLanguage(LANGUAGE_PACK);
  const activeBeforeRender = state.familyPlayState?.activeSession;
  const nextFamilyStage = activeBeforeRender ? `${activeBeforeRender.id}:${activeBeforeRender.currentSegment}` : null;
  const existingFamilyPanel = appContainer.querySelector('.family-play-panel');
  const preservedPanelScroll = existingFamilyPanel?.scrollTop || 0;
  const preserveFamilyPosition = state.screen === 'family-play' && nextFamilyStage === lastRenderedFamilyStage;
  // Each view owns its DOM replacement; Family Play captures interaction state first.

  if (state.screen === 'family-play') {
    syncFamilyHeartbeat();
    syncLearnerPresence();
    syncFamilyPlayRefresh();
    renderVerifiedLessonView(appContainer, state, actions);
    const renderedPanel = appContainer.querySelector('.family-play-panel');
    if (renderedPanel) renderedPanel.scrollTop = preserveFamilyPosition ? preservedPanelScroll : 0;
    lastRenderedFamilyStage = nextFamilyStage;
    return;
  }
  lastRenderedFamilyStage = null;
  clearInterval(familyHeartbeatTimer);
  familyHeartbeatTimer = null;
  syncLearnerPresence();
  syncFamilyPlayRefresh();

  // Family Overview is an account-level screen. A parent can arrive here
  // while a learner profile is still active (notably after completing Family
  // Play), so route it before the profile-dependent learning screens.
  if (state.screen === 'family-overview') {
    renderFamilyOverview(appContainer, state, actions);
    mountFamilySelector();
    return;
  }

  if (!state.profile) {
    state.screen = 'profile-select';
    renderProfileSelect(appContainer, state, actions);
    mountFamilySelector();
    return;
  }

  if (state.screen === 'dashboard') {
    renderDashboard(appContainer, state, actions);
    mountFamilySelector();

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
  } else if (state.screen === 'verified') {
    renderVerifiedLessonView(appContainer,state,actions);
  } else if (state.screen === 'session') {
    renderSessionView(appContainer, state, actions);
  } else if (state.screen === 'curriculum') {
    renderCurriculum(appContainer, state, actions);
  } else if (state.screen === 'side-quest') {
    renderSideQuestView(appContainer, state, actions);
  } else if (state.screen === 'admin-dashboard') {
    const adminComp = new AdminDashboardComponent(appContainer);
    adminComp.loadData();
  }
}

// App Initialization
async function init() {
  // Service Worker Registration for Offline PWA Support (FR-13)
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    navigator.serviceWorker.register('./sw.js').catch((err) => {
      console.warn('PWA ServiceWorker registration skipped:', err);
    });
  }

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
          await loadFamilySideQuestState();
          watchFamilyPlay();
          watchFamilySideQuest();
          await triggerSync();
        } catch (e) {
          console.error('Error syncing cloud data on auth event:', e);
          state.familyError = e.message;
        }
      } else {
        state.families = null;
        state.familyPlayState = null;
        state.familySideQuestState = null;
        stopFamilySideQuestSubscription?.();
        stopFamilySideQuestSubscription = null;
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
        await loadFamilySideQuestState();
        watchFamilyPlay();
        watchFamilySideQuest();
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
