import { dateKey } from './learning-engine.js';

export const LEARNERS = ['Mia', 'Jake'];
export const GUIDES = ['Mario', 'Kristina'];
export const ALL_PROFILES = [...LEARNERS, ...GUIDES];

export function getActiveProfile() {
  return localStorage.getItem('mn_active_profile') || null;
}

export function setActiveProfile(name) {
  if (name) {
    localStorage.setItem('mn_active_profile', name);
  } else {
    localStorage.removeItem('mn_active_profile');
  }
}

export function loadProfileData(name) {
  if (!name) return null;

  const stars = parseInt(localStorage.getItem(`mn_${name}_stars`) || '0', 10) || 0;

  let completedTopicIds = [];
  try {
    completedTopicIds = JSON.parse(localStorage.getItem(`mn_${name}_completed`) || '[]');
  } catch (e) {}

  let completedLessons = [];
  try {
    completedLessons = JSON.parse(localStorage.getItem(`mn_${name}_voyage_lessons`) || '[]');
  } catch (e) {}

  let activityDates = [];
  try {
    activityDates = JSON.parse(localStorage.getItem(`mn_${name}_activity_dates`) || '[]');
  } catch (e) {}

  const dialoguesDone = parseInt(localStorage.getItem(`mn_${name}_dialogues`) || '0', 10) || 0;

  // Calculate streak based on activity dates
  const streakDays = calculateStreak(activityDates);

  return {
    profile: name,
    stars,
    streakDays,
    completedTopicIds,
    completedLessons,
    activityDates,
    dialoguesDone,
    isGuide: GUIDES.includes(name),
  };
}

export function calculateStreak(activityDates) {
  if (!activityDates || activityDates.length === 0) return 0;

  const activeSet = new Set(activityDates);
  let streak = 0;
  let cursor = new Date();

  // Set time to midnight for simple comparisons
  cursor.setHours(0, 0, 0, 0);

  const todayStr = dateKey(cursor);
  cursor.setDate(cursor.getDate() - 1);
  const yesterdayStr = dateKey(cursor);

  // If there's no activity today and no activity yesterday, streak is 0
  if (!activeSet.has(todayStr) && !activeSet.has(yesterdayStr)) {
    return 0;
  }

  // Start checking from the most recent active day
  let checkDate = activeSet.has(todayStr) ? new Date() : cursor;
  checkDate.setHours(0, 0, 0, 0);

  while (activeSet.has(dateKey(checkDate))) {
    streak++;
    checkDate.setDate(checkDate.getDate() - 1);
  }

  return streak;
}

export function saveStars(name, stars) {
  localStorage.setItem(`mn_${name}_stars`, String(stars));
}

export function saveCompletedTopics(name, topicIds) {
  localStorage.setItem(`mn_${name}_completed`, JSON.stringify(topicIds));
}

export function saveCompletedLessons(name, lessonIds) {
  localStorage.setItem(`mn_${name}_voyage_lessons`, JSON.stringify(lessonIds));
}

export function saveActivityDates(name, dates) {
  localStorage.setItem(`mn_${name}_activity_dates`, JSON.stringify(dates));
}

export function saveDialoguesDone(name, count) {
  localStorage.setItem(`mn_${name}_dialogues`, String(count));
}

// Scored actions that handle rules correctly
export function awardStars(name, count) {
  if (GUIDES.includes(name)) return;
  const data = loadProfileData(name);
  const newStars = data.stars + count;
  saveStars(name, newStars);
  recordActivity(name);
}

export function recordActivity(name) {
  if (GUIDES.includes(name)) return;
  const data = loadProfileData(name);
  const today = dateKey(new Date());

  if (!data.activityDates.includes(today)) {
    const newDates = [...data.activityDates, today];
    saveActivityDates(name, newDates);
  }
}

export function completeVoyageLesson(name, lessonId) {
  if (GUIDES.includes(name)) return;
  const data = loadProfileData(name);

  if (!data.completedLessons.includes(lessonId)) {
    const newLessons = [...data.completedLessons, lessonId];
    saveCompletedLessons(name, newLessons);
    recordActivity(name);
  }
}

export function completeTopic(name, topicId) {
  if (GUIDES.includes(name)) return;
  const data = loadProfileData(name);

  if (!data.completedTopicIds.includes(topicId)) {
    const newTopics = [...data.completedTopicIds, topicId];
    saveCompletedTopics(name, newTopics);
  }
}

export function incrementDialogues(name) {
  if (GUIDES.includes(name)) return;
  const data = loadProfileData(name);
  const count = data.dialoguesDone + 1;
  saveDialoguesDone(name, count);
}

export function getGuidesProgress() {
  return LEARNERS.map(name => {
    const data = loadProfileData(name);
    return {
      name,
      stars: data.stars,
      streak: data.streakDays,
      completed: data.completedTopicIds.length,
    };
  });
}
