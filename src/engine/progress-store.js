import { dateKey, LANGUAGE_PACK } from './learning-engine.js';
import { supabase, isConfigured } from './supabase-client.js';

export let ACTIVE_PACK_ID = LANGUAGE_PACK.id;
export let ACTIVE_PACK_VERSION = LANGUAGE_PACK.version;

export function setActiveProgressPack() {
  ACTIVE_PACK_ID = LANGUAGE_PACK.id;
  ACTIVE_PACK_VERSION = LANGUAGE_PACK.version;
}

export function getSelectedPackId(profileName) {
  return localStorage.getItem(`nautilus:${profileName}:active-pack`) || 'montenegrin-en';
}

export function saveSelectedPackId(profileName, packId) {
  localStorage.setItem(`nautilus:${profileName}:active-pack`, packId);
}

function progressKey(profileName, suffix, packId = ACTIVE_PACK_ID) {
  return `nautilus:${packId}:${profileName}:${suffix}`;
}

function legacyProgressKey(profileName, suffix) {
  const legacy = {
    stars: `mn_${profileName}_stars`,
    topics: `mn_${profileName}_completed`,
    lessons: `mn_${profileName}_voyage_lessons`,
    activity: `mn_${profileName}_activity_dates`,
    dialogues: `mn_${profileName}_dialogues`,
  };
  return legacy[suffix];
}

function readProgressValue(profileName, suffix, fallback) {
  const scopedKey = progressKey(profileName, suffix);
  const scoped = localStorage.getItem(scopedKey);
  if (scoped !== null) return scoped;

  // One-time compatibility read for the original Montenegrin local keys.
  const legacyKey = legacyProgressKey(profileName, suffix);
  const legacy = legacyKey ? localStorage.getItem(legacyKey) : null;
  if (legacy !== null) {
    localStorage.setItem(scopedKey, legacy);
    return legacy;
  }
  return fallback;
}

// Initialize and fetch profiles list
export function getProfiles() {
  const stored = localStorage.getItem('mn_profiles');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {}
  }
  return [];
}

export function saveProfiles(profiles) {
  localStorage.setItem('mn_profiles', JSON.stringify(profiles));
}

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

// Loads profile data from localStorage cache (always synchronous for instant UX)
export function loadProfileData(name) {
  if (!name) return null;

  const profiles = getProfiles();
  const prof = profiles.find(p => p.name === name) || { id: `local-${name}`, name, isGuide: false };

  const stars = parseInt(readProgressValue(name, 'stars', '0'), 10) || 0;

  let completedTopicIds = [];
  try {
    completedTopicIds = JSON.parse(readProgressValue(name, 'topics', '[]'));
  } catch (e) {}

  let completedLessons = [];
  try {
    completedLessons = JSON.parse(readProgressValue(name, 'lessons', '[]'));
  } catch (e) {}

  let activityDates = [];
  try {
    activityDates = JSON.parse(readProgressValue(name, 'activity', '[]'));
  } catch (e) {}

  const dialoguesDone = parseInt(readProgressValue(name, 'dialogues', '0'), 10) || 0;

  // Calculate streak based on activity dates
  const streakDays = calculateStreak(activityDates);

  return {
    id: prof.id,
    profile: name,
    stars,
    streakDays,
    completedTopicIds,
    completedLessons,
    activityDates,
    dialoguesDone,
    isGuide: prof.isGuide,
    packId: ACTIVE_PACK_ID,
    packVersion: ACTIVE_PACK_VERSION,
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

// Writes to localStorage cache
export function saveStars(name, stars) {
  localStorage.setItem(progressKey(name, 'stars'), String(stars));
}

export function saveCompletedTopics(name, topicIds) {
  localStorage.setItem(progressKey(name, 'topics'), JSON.stringify(topicIds));
}

export function saveCompletedLessons(name, lessonIds) {
  localStorage.setItem(progressKey(name, 'lessons'), JSON.stringify(lessonIds));
}

export function saveActivityDates(name, dates) {
  localStorage.setItem(progressKey(name, 'activity'), JSON.stringify(dates));
}

export function saveDialoguesDone(name, count) {
  localStorage.setItem(progressKey(name, 'dialogues'), String(count));
}

// Scored actions
export function awardStars(name, count) {
  const data = loadProfileData(name);
  if (data.isGuide) return;
  const newStars = data.stars + count;
  saveStars(name, newStars);
  recordActivity(name);

  // Queue to cloud
  enqueueTransaction(data.id, 'awardStars', { name, stars: newStars });
}

export function recordActivity(name) {
  const data = loadProfileData(name);
  if (data.isGuide) return;
  const today = dateKey(new Date());

  if (!data.activityDates.includes(today)) {
    const newDates = [...data.activityDates, today];
    saveActivityDates(name, newDates);

    // Queue to cloud
    enqueueTransaction(data.id, 'recordActivity', { name, dateKey: today });
  }
}

export function completeVoyageLesson(name, lessonId) {
  const data = loadProfileData(name);
  if (data.isGuide) return;

  if (!data.completedLessons.includes(lessonId)) {
    const newLessons = [...data.completedLessons, lessonId];
    saveCompletedLessons(name, newLessons);
    recordActivity(name);

    // Queue to cloud
    enqueueTransaction(data.id, 'completeLesson', { name, lessonId });
  }
}

export function completeTopic(name, topicId) {
  const data = loadProfileData(name);
  if (data.isGuide) return;

  if (!data.completedTopicIds.includes(topicId)) {
    const newTopics = [...data.completedTopicIds, topicId];
    saveCompletedTopics(name, newTopics);

    // Queue to cloud
    enqueueTransaction(data.id, 'completeTopic', { name, topicId });
  }
}

export function incrementDialogues(name) {
  const data = loadProfileData(name);
  if (data.isGuide) return;
  const count = data.dialoguesDone + 1;
  saveDialoguesDone(name, count);

  // Queue to cloud
  enqueueTransaction(data.id, 'incrementDialogues', { name, dialoguesDone: count });
}

export function getGuidesProgress() {
  const profiles = getProfiles();
  const learners = profiles.filter(p => !p.isGuide);
  return learners.map(p => {
    const data = loadProfileData(p.name);
    return {
      name: p.name,
      stars: data.stars,
      streak: data.streakDays,
      completed: data.completedTopicIds.length,
    };
  });
}

// Add a custom profile under the family
export async function addLearnerProfile(name, isGuide) {
  const profiles = getProfiles();
  if (profiles.some(p => p.name.toLowerCase() === name.toLowerCase())) {
    throw new Error('Profile name already exists');
  }

  const session = isConfigured ? await supabase.auth.getSession() : null;
  const loggedIn = !!session?.data?.session;

  if (loggedIn) {
    const user = session.data.session.user;
    const { data: membership, error: membershipError } = await supabase
      .from('family_memberships')
      .select('family_id')
      .order('joined_at', { ascending: true })
      .limit(1)
      .maybeSingle();

    if (membershipError) throw membershipError;
    if (!membership?.family_id || isGuide) {
      // Adult/guide identity is a family membership in the new model. Until the
      // workspace UI ships, retain guide-only additions locally.
      const id = `local-${name}`;
      saveProfiles([...profiles, { id, name, isGuide }]);
      return;
    }

    const { data, error } = await supabase
      .from('learner_profiles')
      .insert({
        family_id: membership.family_id,
        display_name: name,
        created_by: user.id,
      })
      .select()
      .single();

    if (error) throw error;

    const newProfiles = [...profiles, { id: data.id, name: data.display_name, isGuide: false }];
    saveProfiles(newProfiles);
  } else {
    // Offline local-only profile creation
    const id = `local-${name}`;
    const newProfiles = [...profiles, { id, name, isGuide }];
    saveProfiles(newProfiles);
  }
}

// -------------------------------------------------------------
// Offline Sync Queue & Cloud Sync Logic
// -------------------------------------------------------------

function getTransactionQueue() {
  try {
    return JSON.parse(localStorage.getItem('mn_sync_queue') || '[]');
  } catch (e) {
    return [];
  }
}

function saveTransactionQueue(queue) {
  localStorage.setItem('mn_sync_queue', JSON.stringify(queue));
}

export function enqueueTransaction(profileId, type, payload) {
  // If the profile ID is a local mock ID, we don't write to Supabase
  if (String(profileId).startsWith('local-')) return;

  const queue = getTransactionQueue();
  const operationId = globalThis.crypto?.randomUUID?.()
    || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  queue.push({
    operationId,
    profileId,
    packId: ACTIVE_PACK_ID,
    packVersion: ACTIVE_PACK_VERSION,
    type,
    payload,
    timestamp: Date.now(),
  });
  saveTransactionQueue(queue);
  triggerSync();
}

let isSyncing = false;

export async function triggerSync() {
  if (isSyncing || !isConfigured) return;
  const session = await supabase.auth.getSession();
  if (!session?.data?.session) return; // Not signed in

  isSyncing = true;
  const queue = getTransactionQueue();

  try {
    while (queue.length > 0) {
      if (!navigator.onLine) break;

      const tx = queue[0];
      let success = false;

      try {
        if (tx.type === 'awardStars') {
          const { error } = await supabase
            .from('learner_language_progress')
            .upsert({
              profile_id: tx.profileId,
              pack_id: tx.packId,
              pack_version: tx.packVersion,
              stars: tx.payload.stars,
              updated_at: new Date().toISOString(),
            }, { onConflict: 'profile_id,pack_id' });
          if (!error) success = true;
        } else if (tx.type === 'incrementDialogues') {
          const { error } = await supabase
            .from('learner_language_progress')
            .upsert({
              profile_id: tx.profileId,
              pack_id: tx.packId,
              pack_version: tx.packVersion,
              dialogues_done: tx.payload.dialoguesDone,
              updated_at: new Date().toISOString(),
            }, { onConflict: 'profile_id,pack_id' });
          if (!error) success = true;
        } else if (tx.type === 'recordActivity') {
          const { error } = await supabase
            .from('activity_history')
            .insert({
              profile_id: tx.profileId,
              pack_id: tx.packId,
              pack_version: tx.packVersion,
              local_date: tx.payload.dateKey,
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
              operation_id: tx.operationId,
            });
          // If row exists, insert might fail on primary key, which is acceptable
          if (!error || error.code === '23505') success = true;
        } else if (tx.type === 'completeLesson') {
          const { error } = await supabase
            .from('completed_lessons')
            .insert({
              profile_id: tx.profileId,
              pack_id: tx.packId,
              pack_version: tx.packVersion,
              lesson_id: tx.payload.lessonId,
              operation_id: tx.operationId,
            });
          if (!error || error.code === '23505') success = true;
        } else if (tx.type === 'completeTopic') {
          const { error } = await supabase
            .from('completed_topics')
            .insert({
              profile_id: tx.profileId,
              pack_id: tx.packId,
              pack_version: tx.packVersion,
              topic_id: tx.payload.topicId,
              operation_id: tx.operationId,
            });
          if (!error || error.code === '23505') success = true;
        }
      } catch (err) {
        console.error('Database write error during transaction processing:', err);
      }

      if (success) {
        queue.shift();
        saveTransactionQueue(queue);
      } else {
        // Stop on first failure (network issue, server error) and retry later
        break;
      }
    }
  } finally {
    isSyncing = false;
  }
}

// Fetch the first available family workspace. A workspace-selection screen will
// replace this deterministic family-alpha fallback when multi-family UI ships.
export async function syncCloudDataToLocal() {
  if (!isConfigured) return;
  const session = await supabase.auth.getSession();
  if (!session?.data?.session) return;

  const { data: memberships, error: membershipError } = await supabase
    .from('family_memberships')
    .select('family_id, role, joined_at')
    .order('joined_at', { ascending: true })
    .limit(1);

  if (membershipError) throw membershipError;
  const familyId = memberships?.[0]?.family_id;
  if (!familyId) return;

  const { data: cloudProfiles, error } = await supabase
    .from('learner_profiles')
    .select('*')
    .eq('family_id', familyId);

  if (error) throw error;
  if (!cloudProfiles?.length) return;

  // Write mapped profiles to cache
  const mappedProfiles = cloudProfiles.map(p => ({
    id: p.id,
    name: p.display_name,
    isGuide: false,
    linkedUserId: p.linked_user_id,
    familyId,
  }));
  saveProfiles(mappedProfiles);

  // 2. Refresh details for each profile from cloud and update local storage cache
  for (const p of cloudProfiles) {
    const { data: summary } = await supabase
      .from('learner_language_progress')
      .select('stars, dialogues_done')
      .eq('profile_id', p.id)
      .eq('pack_id', ACTIVE_PACK_ID)
      .maybeSingle();

    saveStars(p.display_name, summary?.stars || 0);
    saveDialoguesDone(p.display_name, summary?.dialogues_done || 0);

    const [lessonsRes, topicsRes, activityRes] = await Promise.all([
      supabase.from('completed_lessons').select('lesson_id').eq('profile_id', p.id).eq('pack_id', ACTIVE_PACK_ID),
      supabase.from('completed_topics').select('topic_id').eq('profile_id', p.id).eq('pack_id', ACTIVE_PACK_ID),
      supabase.from('activity_history').select('local_date').eq('profile_id', p.id).eq('pack_id', ACTIVE_PACK_ID)
    ]);

    if (!lessonsRes.error) {
      saveCompletedLessons(p.display_name, lessonsRes.data.map(r => r.lesson_id));
    }
    if (!topicsRes.error) {
      saveCompletedTopics(p.display_name, topicsRes.data.map(r => r.topic_id));
    }
    if (!activityRes.error) {
      saveActivityDates(p.display_name, activityRes.data.map(r => r.local_date));
    }
  }
}
