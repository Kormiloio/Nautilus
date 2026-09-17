// Canonical lexical identities are authored by language reviewers, never tokenized from phrases.
export function validateDailyPlan(plan, lessonIds, { requireReview = true } = {}) {
  const fail = message => { throw new Error(`Daily vocabulary: ${message}`); };
  if (!plan || plan.version !== 1) fail('missing version 1 daily plan');
  const size = plan.wordsPerDay ?? 20;
  if (!Number.isInteger(size) || size < 2) fail('wordsPerDay must be an integer >= 2');
  if (!Array.isArray(plan.vocabulary) || !Array.isArray(plan.lessons)) fail('inventory and lessons are required');
  const inventory = new Map(), forms = new Set();
  for (const item of plan.vocabulary) {
    if (!item.id || inventory.has(item.id)) fail(`duplicate or missing lexical ID ${item.id}`);
    if (!item.targetText?.trim() || !item.supportText?.trim()) fail(`missing text for ${item.id}`);
    const form = item.targetText.normalize('NFKC').trim().toLocaleLowerCase().replace(/\s+/g, ' ');
    if (forms.has(form)) fail(`duplicate target form ${item.targetText}; use one canonical lexical ID`);
    if (item.kind !== 'word') fail(`${item.id} must be a canonical word, not a phrase or sentence`);
    if (requireReview && (item.reviewStatus !== 'approved' || !item.reviewer?.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(item.reviewedAt || ''))) fail(`${item.id} needs named language review and date`);
    inventory.set(item.id, item); forms.add(form);
  }
  if (plan.lessons.length !== lessonIds.length) fail(`expected ${lessonIds.length} ordered allocations, found ${plan.lessons.length}`);
  const priorIds = plan.priorWordIds || [];
  if (!Array.isArray(priorIds) || new Set(priorIds).size !== priorIds.length) fail('prior vocabulary must contain unique IDs');
  if (priorIds.length && (!Number.isInteger(plan.startDay) || plan.startDay < 2 || lessonIds[0] !== `voyage-${plan.startDay}`)) fail('prior vocabulary requires an explicit continuation start day');
  for (const id of priorIds) if (!inventory.has(id)) fail(`unknown prior lexical ID ${id}`);
  const seen = new Set(priorIds), allocations = new Map();
  plan.lessons.forEach((lesson, index) => {
    if (lesson.id !== lessonIds[index] || allocations.has(lesson.id)) fail(`lesson order mismatch at ${index + 1}`);
    if (!Array.isArray(lesson.newWordIds) || !Array.isArray(lesson.reviewWordIds)) fail(`${lesson.id} needs new and review lists`);
    const ids = [...lesson.newWordIds, ...lesson.reviewWordIds];
    if (ids.length !== size || new Set(ids).size !== size) fail(`${lesson.id} needs ${size} distinct words`);
    if (lesson.newWordIds.length < Math.ceil(size / 2)) fail(`${lesson.id} has less than 50% net-new vocabulary`);
    for (const id of ids) if (!inventory.has(id)) fail(`${lesson.id}: unknown lexical ID ${id}`);
    for (const id of lesson.newWordIds) if (seen.has(id)) fail(`${lesson.id}: ${id} was already introduced`);
    for (const id of lesson.reviewWordIds) if (!seen.has(id)) fail(`${lesson.id}: review word ${id} has not been introduced`);
    lesson.newWordIds.forEach(id => seen.add(id));
    allocations.set(lesson.id, { newItems: lesson.newWordIds.map(id => inventory.get(id)), reviewItems: lesson.reviewWordIds.map(id => inventory.get(id)) });
  });
  return allocations;
}

export function dailyVocabularySteps(allocation, helpers, family = false) {
  const { buildQuiz, buildMatch, shuffle, random } = helpers;
  const { newItems, reviewItems } = allocation;
  const items = [...newItems, ...reviewItems];
  const title = `${newItems.length} new words · ${reviewItems.length} review words`;
  const introduction = allocation.pilot ? 'Family pilot · language review pending. Learn today’s new vocabulary.' : 'Learn today’s new vocabulary before practicing it';
  const batches = [];
  for (let i = 0; i < newItems.length; i += 5) batches.push(newItems.slice(i, i + 5));
  if (!family) return [
    { type: 'discover', title, subtitle: introduction, items: newItems },
    ...(reviewItems.length ? [{ type: 'recall-flash', title: 'Bring back earlier words', reviewCount: reviewItems.length, items: reviewItems }] : []),
    ...batches.map(batch => ({ type: 'match', title: 'Connect today’s new words', match: buildMatch(batch, batch.length, random) })),
    { type: 'quiz', title: 'Recall today’s vocabulary', quiz: buildQuiz(items, items.length, random) },
    { type: 'done', title: 'Completed!', subtitle: title },
  ];
  return [
    { type: 'ready', title: 'Is everyone ready?' },
    { type: 'family-flashcards', title, subtitle: introduction, items: newItems },
    ...(reviewItems.length ? [{ type: 'family-flashcards', title: 'Bring back earlier words', reviewCount: reviewItems.length, items: reviewItems }] : []),
    ...batches.map(batch => ({ type: 'family-match', title: 'Connect today’s new words', items: batch, targetItems: shuffle(batch, random), supportItems: shuffle(batch, random) })),
    ...shuffle(items, random).map(item => ({ type: 'family-quiz', title: 'Recall today’s vocabulary', item, options: shuffle([item, ...shuffle(items.filter(other => other.id !== item.id), random).slice(0, 3)], random) })),
    { type: 'family-reflection', title: 'Bring It Home', subtitle: 'Use today’s new words together', items: newItems, recap: { newItems: newItems.slice(0, 1), recalledItems: reviewItems.slice(0, 2), connection: null } },
  ];
}
