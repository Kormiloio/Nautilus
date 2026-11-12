import { createSeededRandom, shuffle } from './learning-engine.js';

const DAY = 24 * 60 * 60 * 1000;
const scope = (userId, packId) => `${encodeURIComponent(userId)}:${encodeURIComponent(packId)}`;
const keyFor = (userId, packId) => `nautilus:sentence-review:v1:${scope(userId, packId)}`;
// Offline queue of server operations; localStorage stays the render cache.
const opsKeyFor = (userId, packId) => `nautilus:sentence-review-ops:v1:${scope(userId, packId)}`;
const legacyKeyFor = (userId, packId) => `nautilus:sentence-review-uploaded:v1:${scope(userId, packId)}`;
const newOpId = () => globalThis.crypto?.randomUUID?.() || `op-${Date.now()}-${Math.random().toString(36).slice(2)}`;

function readOps(userId, packId) {
  try { const ops = JSON.parse(localStorage.getItem(opsKeyFor(userId, packId)) || '[]'); return Array.isArray(ops) ? ops : []; }
  catch { return []; }
}
function writeOps(userId, packId, ops) { localStorage.setItem(opsKeyFor(userId, packId), JSON.stringify(ops.slice(-500))); }
function enqueue(userId, packId, op) { writeOps(userId, packId, [...readOps(userId, packId), op]); }
export function getPendingSentenceReviewOps(userId, packId) { return readOps(userId, packId); }

export function getSentenceReviews(userId, packId, { now = Date.now(), dueOnly = false } = {}) {
  if (!userId || !packId) return [];
  try {
    const saved = JSON.parse(localStorage.getItem(keyFor(userId, packId)) || '[]');
    if (!Array.isArray(saved)) return [];
    return saved.filter(item => typeof item?.id === 'string' && typeof item.targetText === 'string'
      && typeof item.supportText === 'string' && Number.isFinite(item.dueAt) && !item.mastered
      && (!dueOnly || item.dueAt <= now))
      .sort((a, b) => a.dueAt - b.dueAt || b.misses - a.misses);
  } catch { return []; }
}

function save(userId, packId, reviews) {
  localStorage.setItem(keyFor(userId, packId), JSON.stringify(reviews.sort((a, b) => b.lastMissedAt - a.lastMissedAt).slice(0, 100)));
}

export function recordSentenceMistake(userId, packId, { targetText, supportText, kind, eventId }, now = Date.now()) {
  if (!userId || !packId || !targetText?.trim() || !supportText?.trim()) return;
  const text = targetText.normalize('NFKC').trim().replace(/\s+/g, ' ');
  if (text.split(' ').length < 2) return;
  const reviews = getSentenceReviews(userId, packId);
  let item = reviews.find(review => review.id === text);
  if (item?.events?.includes(eventId)) return;
  if (!item) { item = { id: text, targetText: text, supportText, misses: 0, streak: 0, events: [] }; reviews.push(item); }
  Object.assign(item, { misses: item.misses + 1, streak: 0, dueAt: now, lastMissedAt: now, sourceKind: kind });
  if (eventId) item.events = [...(item.events || []), eventId].slice(-20);
  save(userId, packId, reviews);
  enqueue(userId, packId, { type: 'mistake', eventId: eventId || newOpId(), targetText: text, supportText: supportText.trim(), kind });
}

export function submitSentenceReview(userId, packId, id, response, now = Date.now()) {
  const reviews = getSentenceReviews(userId, packId);
  const item = reviews.find(review => review.id === id && review.dueAt <= now);
  if (!item) throw new Error('This sentence is not due for review.');
  const correct = Array.isArray(response) && response.join(' ') === item.targetText;
  item.streak = correct ? item.streak + 1 : 0;
  item.dueAt = now + (correct ? DAY : 10 * 60 * 1000);
  item.mastered = item.streak >= 2;
  item.lastReviewedAt = now;
  if (!correct) item.misses++;
  save(userId, packId, reviews);
  enqueue(userId, packId, { type: 'review', opId: newOpId(), id, response: [...response] });
  return { correct, targetText: item.targetText, mastered: item.mastered };
}

export function buildSentenceReviewStep(review) {
  const answer = review.targetText.split(' ');
  const random = createSeededRandom(`review:${review.id}:${review.streak}:${review.lastMissedAt}`);
  const completion = (review.sourceKind === 'sentence_builder') !== Boolean(review.streak % 2);
  if (completion) {
    const blankIndex = Math.max(0, answer.length - 2);
    return { type: 'family-sentence-completion', title: 'Choose the missing word', completion: {
      prompt: review.supportText, blankIndex, answer: answer[blankIndex], completedSentence: answer,
      displayTokens: answer.map((token, index) => index === blankIndex ? '____' : token),
      choices: shuffle([...new Set([answer[blankIndex], ...answer])].slice(0, 4), random),
    } };
  }
  let tokens = shuffle(answer, random);
  if (tokens.join(' ') === review.targetText) tokens = [...tokens.slice(1), tokens[0]];
  return { type: 'family-sentence-builder', title: 'Build the sentence', items: [{ ...review, tokens }] };
}

export function sentenceMistakeFromExercise(exercise, receipt) {
  if (!exercise || receipt?.correct !== false) return null;
  if (exercise.kind === 'sentence_builder' && Array.isArray(receipt.correctAnswer))
    return { targetText: receipt.correctAnswer.join(' '), supportText: exercise.prompt, kind: exercise.kind };
  if (exercise.kind === 'sentence_completion' && Array.isArray(receipt.completedSentence))
    return { targetText: receipt.completedSentence.join(' '), supportText: exercise.prompt, kind: exercise.kind };
  if (exercise.kind === 'quiz' && typeof receipt.correctAnswer === 'string')
    return { targetText: receipt.correctAnswer, supportText: exercise.prompt, kind: exercise.kind };
  return null;
}

export function sentenceMistakeFromFamilyStep(step) {
  if (step.type === 'family-sentence-builder') return { ...step.items[0], kind: 'sentence_builder' };
  if (step.type === 'family-sentence-completion') return {
    targetText: step.completion.completedSentence.join(' '), supportText: step.completion.prompt, kind: 'sentence_completion',
  };
  if (step.type === 'family-quiz') return { ...step.item, kind: 'quiz' };
  return null;
}

const REVIEW_KINDS = new Set(['sentence_builder', 'sentence_completion', 'quiz']);
const inFlight = new Map();

// Push queued operations in order, then replace the local cache with the server queue.
// Network/auth/missing-RPC errors keep the queue; a server validation error (P0001) drops that op.
export function syncSentenceReviews(userId, packId, client) {
  if (!userId || !packId || !client?.rpc) return Promise.resolve({ synced: false });
  if (globalThis.navigator?.onLine === false) return Promise.resolve({ synced: false, offline: true });
  const key = scope(userId, packId);
  if (inFlight.has(key)) return inFlight.get(key);
  const run = (async () => {
    if (!localStorage.getItem(legacyKeyFor(userId, packId))) {
      const legacy = getSentenceReviews(userId, packId).map(item => ({
        type: 'mistake', eventId: `legacy:${item.id}`, targetText: item.targetText, supportText: item.supportText,
        kind: REVIEW_KINDS.has(item.sourceKind) ? item.sourceKind : 'quiz',
      }));
      const queued = new Set(readOps(userId, packId).filter(op => op.type === 'mistake').map(op => op.targetText));
      writeOps(userId, packId, [...legacy.filter(op => !queued.has(op.targetText)), ...readOps(userId, packId)]);
      localStorage.setItem(legacyKeyFor(userId, packId), '1');
    }
    let ops = readOps(userId, packId);
    while (ops.length) {
      const op = ops[0];
      const { error } = op.type === 'review'
        ? await client.rpc('submit_sentence_review', { target_pack: packId, target_review: op.id, response: op.response, target_op: op.opId })
        : await client.rpc('record_sentence_mistake', { target_pack: packId, target_event: op.eventId, target_sentence: op.targetText,
          target_support: op.supportText, target_kind: REVIEW_KINDS.has(op.kind) ? op.kind : 'quiz' });
      if (error && error.code !== 'P0001') { writeOps(userId, packId, ops); return { synced: false, error: error.message }; }
      ops = ops.slice(1);
      writeOps(userId, packId, ops);
    }
    const { data, error } = await client.rpc('list_sentence_reviews', { target_pack: packId });
    if (error || !Array.isArray(data)) return { synced: false, error: error?.message || 'Unexpected review list' };
    if (readOps(userId, packId).length) return { synced: false, pending: true };
    save(userId, packId, data.map(item => ({
      id: item.id, targetText: item.targetText, supportText: item.supportText, sourceKind: item.sourceKind,
      misses: item.misses, streak: item.streak, dueAt: Date.parse(item.dueAt), lastMissedAt: Date.parse(item.lastMissedAt),
      ...(item.lastReviewedAt ? { lastReviewedAt: Date.parse(item.lastReviewedAt) } : {}), events: [],
    })));
    return { synced: true, count: data.length };
  })().finally(() => inFlight.delete(key));
  inFlight.set(key, run);
  return run;
}
