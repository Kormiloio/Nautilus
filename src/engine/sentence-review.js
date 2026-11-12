import { createSeededRandom, shuffle } from './learning-engine.js';

const DAY = 24 * 60 * 60 * 1000;
const keyFor = (userId, packId) => `nautilus:sentence-review:v1:${encodeURIComponent(userId)}:${encodeURIComponent(packId)}`;

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
