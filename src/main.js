import {
  getActiveProfile,
  loadProfileData,
  setActiveProfile,
  completeVoyageLesson,
  completeTopic,
  awardStars,
  recordActivity,
  incrementDialogues,
  syncCloudDataToLocal,
  triggerSync
} from './engine/progress-store.js';

import { buildMatch, buildQuiz, getTopic, VOYAGE_LESSONS } from './engine/learning-engine.js';
import { onAuthStateChange, getSession, isConfigured } from './engine/supabase-client.js';

// Import views
import { renderProfileSelect } from './components/profile-select.js';
import { renderDashboard } from './components/dashboard.js';
import { renderCalendar } from './components/calendar.js';
import { renderTopicView } from './components/topic-view.js';
import { renderSessionView } from './components/session-view.js';
import { renderCurriculum } from './components/curriculum-view.js';

// Global state
const state = {
  profile: null,
  isGuide: false,
  screen: 'profile-select', // 'profile-select', 'dashboard', 'topic', 'session', 'curriculum'
  sessionUser: null, // Tracks Supabase authenticated user

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
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  const lang = 'hr-HR'; // regional fallback voice
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

// Router actions
const actions = {
  goDashboard: () => {
    state.screen = 'dashboard';
    cleanupSessionState();
    rerender();
  },

  goCurriculum: () => {
    state.screen = 'curriculum';
    cleanupSessionState();
    rerender();
  },

  goProfileSelect: () => {
    state.screen = 'profile-select';
    state.profile = null;
    cleanupSessionState();
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

// Global Rerender Controller
function rerender() {
  appContainer.innerHTML = '';

  if (!state.profile) {
    state.screen = 'profile-select';
    renderProfileSelect(appContainer, state, actions);
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
          await syncCloudDataToLocal();
          await triggerSync();
        } catch (e) {
          console.error('Error syncing cloud data on auth event:', e);
        }
      }

      const activeUser = getActiveProfile();
      if (activeUser) {
        state.profile = activeUser;
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
        await syncCloudDataToLocal();
        await triggerSync();
      } catch (e) {
        console.error('Error syncing initial cloud data:', e);
      }
    }
  }

  const activeUser = getActiveProfile();
  if (activeUser) {
    state.profile = activeUser;
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
