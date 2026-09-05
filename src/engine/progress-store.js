import { dateKey, LANGUAGE_PACK } from './learning-engine.js';
import { supabase, isConfigured } from './supabase-client.js';
import { listFamilies } from './family-service.js';

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
  const legacyKey = ACTIVE_PACK_ID === 'montenegrin-en' ? legacyProgressKey(profileName, suffix) : null;
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
      const profiles = JSON.parse(stored);
      // Every UUID-backed record in this cache originates from
      // learner_profiles. Adult access is represented by family membership,
      // never by a learner profile flag. Normalize legacy cached values that
      // incorrectly marked all profiles as guides for an adult viewer.
      return profiles.map(profile => String(profile.id).startsWith('local-')
        ? profile
        : { ...profile, isGuide: false });
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
  if (!String(data.id).startsWith('local-')) return; // Cloud credit is server-owned.
  if (data.isGuide) return;
  const newStars = data.stars + count;
  saveStars(name, newStars);
  recordActivity(name);

  // Queue to cloud
  enqueueTransaction(data.id, 'awardStars', { name, delta: count });
}

export function recordActivity(name) {
  const data = loadProfileData(name);
  if (!String(data.id).startsWith('local-')) return; // Cloud credit is server-owned.
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
  if (!String(data.id).startsWith('local-')) return; // Cloud credit is server-owned.
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
  if (!String(data.id).startsWith('local-')) return; // Cloud credit is server-owned.
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
  if (!String(data.id).startsWith('local-')) return; // Cloud credit is server-owned.
  if (data.isGuide) return;
  const count = data.dialoguesDone + 1;
  saveDialoguesDone(name, count);

  // Queue to cloud
  enqueueTransaction(data.id, 'incrementDialogues', { name, delta: 1 });
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
    const [membership] = await listFamilies();
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

const QUEUE_PREFIX = 'nautilus:sync-operation:';

function storageKeys(prefix) {
  return Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i))
    .filter(key => key?.startsWith(prefix));
}

export function getPendingProgressTransactions() {
  // Convert the old shared array into independently acknowledged operations.
  // Concurrent migrations may repeat inserts, but IDs make server retries safe.
  const legacy = localStorage.getItem('mn_sync_queue');
  if (legacy) {
    const entries = JSON.parse(legacy);
    for (const tx of entries) localStorage.setItem(QUEUE_PREFIX + tx.operationId, JSON.stringify(tx));
    localStorage.removeItem('mn_sync_queue');
  }
  return storageKeys(QUEUE_PREFIX)
    .map(key => JSON.parse(localStorage.getItem(key)))
    .filter(Boolean).sort((a,b) => a.timestamp - b.timestamp || a.operationId.localeCompare(b.operationId));
}

const getTransactionQueue = getPendingProgressTransactions;

export function enqueueTransaction(profileId, type, payload) {
  // If the profile ID is a local mock ID, we don't write to Supabase
  if (String(profileId).startsWith('local-')) return;

  const operationId = globalThis.crypto?.randomUUID?.()
    || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const tx = {
    operationId,
    profileId,
    packId: ACTIVE_PACK_ID,
    packVersion: ACTIVE_PACK_VERSION,
    type,
    payload,
    timestamp: Date.now(),
  };
  localStorage.setItem(QUEUE_PREFIX + operationId, JSON.stringify(tx));
  triggerSync();
}

function quarantineTransaction(tx, reason) {
  // One key per operation avoids concurrent tabs overwriting the recovery log.
  localStorage.setItem('nautilus:sync-recovery:' + tx.operationId,
    JSON.stringify({ ...tx, reason, quarantinedAt: Date.now() }));
}

export function getSyncRecoveryItems() {
  return storageKeys('nautilus:sync-recovery:')
    .flatMap(key => {
      try { return [JSON.parse(localStorage.getItem(key))]; } catch { return []; }
    });
}

let syncPromise = null;

export function triggerSync() {
  if (!isConfigured) return Promise.resolve();
  if (!syncPromise) {
    syncPromise = drainQueue().finally(() => { syncPromise = null; });
  }
  return syncPromise;
}

async function drainQueue() {
  const session = await supabase.auth.getSession();
  if (!session?.data?.session) return; // Not signed in

  while (true) {
    if (!navigator.onLine) break;
    const queue = getTransactionQueue();
    if (!queue.length) break;
    const tx = queue[0];
    let success = false;

    try {
      // Legacy queue entries have no verified exercise evidence. Preserve them
      // visibly for reconciliation; never resubmit them to revoked credit APIs.
      quarantineTransaction(tx, 'unverified_legacy_progress');
      success = true;

    } catch (err) {
      console.error('Database write error during transaction processing:', err);
    }

    if (success) {
      // Acknowledge only this operation; new actions can arrive while awaiting IO.
      localStorage.removeItem(QUEUE_PREFIX + tx.operationId);
    } else {
      // Stop on first failure (network issue, server error) and retry later
      break;
    }
  }
}

// Refresh the explicitly selected family (first membership is the default until selected).
export async function syncCloudDataToLocal() {
  if (!isConfigured) return;
  const session = await supabase.auth.getSession();
  if (!session?.data?.session) return;

  await triggerSync();
  const packId = ACTIVE_PACK_ID;
  const memberships = await listFamilies();
  const familyId = memberships?.[0]?.family_id;
  if (!familyId) { saveProfiles([]); return; }

  const { data: cloudProfiles, error } = await supabase
    .from('learner_profiles')
    .select('*')
    .eq('family_id', familyId);

  if (error) throw error;
  if (!cloudProfiles?.length) { saveProfiles([]); return; }

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
    const { data: summary, error: summaryError } = await supabase
      .from('learner_language_progress')
      .select('stars, dialogues_done')
      .eq('profile_id', p.id)
      .eq('pack_id', packId)
      .maybeSingle();

    const pending = getTransactionQueue().some(tx => tx.profileId === p.id && tx.packId === packId);
    if (pending) continue; // Keep optimistic offline progress until its writes settle.
    if (!summaryError) {
      localStorage.setItem(progressKey(p.display_name, 'stars', packId), String(summary?.stars || 0));
      localStorage.setItem(progressKey(p.display_name, 'dialogues', packId), String(summary?.dialogues_done || 0));
    }

    const [lessonsRes, topicsRes, activityRes] = await Promise.all([
      supabase.from('completed_lessons').select('lesson_id').eq('profile_id', p.id).eq('pack_id', packId),
      supabase.from('completed_topics').select('topic_id').eq('profile_id', p.id).eq('pack_id', packId),
      supabase.from('activity_history').select('local_date').eq('profile_id', p.id).eq('pack_id', packId)
    ]);

    if (!lessonsRes.error) {
      localStorage.setItem(progressKey(p.display_name, 'lessons', packId), JSON.stringify(lessonsRes.data.map(r => r.lesson_id)));
    }
    if (!topicsRes.error) {
      localStorage.setItem(progressKey(p.display_name, 'topics', packId), JSON.stringify(topicsRes.data.map(r => r.topic_id)));
    }
    if (!activityRes.error) {
      localStorage.setItem(progressKey(p.display_name, 'activity', packId), JSON.stringify(activityRes.data.map(r => r.local_date)));
    }
  }
}

function getStorage() {
  try {
    if (typeof localStorage !== 'undefined' && localStorage) return localStorage;
  } catch {
    // Storage restricted or unavailable
  }
  return null;
}

export function exportLocalProgress() {
  const storage = getStorage();
  const exportData = {
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    items: {},
  };
  if (!storage) return JSON.stringify(exportData, null, 2);

  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    if (key && key.startsWith('nautilus:')) {
      exportData.items[key] = storage.getItem(key);
    }
  }
  return JSON.stringify(exportData, null, 2);
}

export function importLocalProgress(jsonString) {
  let parsed;
  try {
    parsed = JSON.parse(jsonString);
  } catch {
    throw new Error('Invalid JSON format.');
  }

  if (!parsed || typeof parsed.items !== 'object') {
    throw new Error('Invalid Nautilus progress backup structure.');
  }

  const storage = getStorage();
  let count = 0;
  if (storage) {
    for (const [key, value] of Object.entries(parsed.items)) {
      if (key.startsWith('nautilus:') && typeof value === 'string') {
        storage.setItem(key, value);
        count++;
      }
    }
  }
  return { importedKeys: count, exportedAt: parsed.exportedAt };
}
