/**
 * Per-learner vocabulary exposure and catch-up planning.
 *
 * Exposure is recorded only after an activity has actually displayed or
 * played an item. Curriculum membership is deliberately not treated as
 * learner exposure: two children can be on the same day and have different
 * histories.
 */

export function recordVocabularyExposure(history, items, occurredAt = new Date().toISOString()) {
  const next = { ...(history || {}) };
  for (const item of items || []) {
    if (!item?.id) continue;
    const previous = next[item.id];
    next[item.id] = {
      firstSeenAt: previous?.firstSeenAt || occurredAt,
      lastSeenAt: occurredAt,
      timesSeen: (previous?.timesSeen || 0) + 1,
      target: item.target,
      translation: item.translation,
    };
  }
  return next;
}

export function getUnseenVocabulary(items, history) {
  return (items || []).filter((item) => !history?.[item.id]);
}

/** Build a catch-up set before introducing the regular day plan. */
export function buildCatchUpPlan({ items, history, limit = 10 } = {}) {
  const unseen = getUnseenVocabulary(items, history);
  return {
    items: unseen.slice(0, limit),
    remaining: Math.max(0, unseen.length - limit),
    totalUnseen: unseen.length,
  };
}

