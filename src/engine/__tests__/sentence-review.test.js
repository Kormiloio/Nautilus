import { beforeEach, describe, expect, it, vi } from 'vitest';
import { buildSentenceReviewStep, getSentenceReviews, recordSentenceMistake, sentenceMistakeFromExercise, submitSentenceReview } from '../sentence-review.js';

const storage = new Map();
const now = 1800000000000;
const day = 86400000;
const mistake = { targetText: 'Imam dva brata.', supportText: 'I have two brothers.', kind: 'sentence_builder', eventId: 'session:4' };
beforeEach(() => {
  storage.clear();
  vi.stubGlobal('localStorage', { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) });
});

describe('Personal sentence mistake review', () => {
  it('keeps learner accounts and language packs separate and ignores isolated words', () => {
    recordSentenceMistake('jake', 'cnr', mistake, now);
    expect(getSentenceReviews('jake', 'cnr')).toHaveLength(1);
    expect(getSentenceReviews('mia', 'cnr')).toEqual([]);
    expect(getSentenceReviews('jake', 'sq')).toEqual([]);
    recordSentenceMistake('jake', 'cnr', { ...mistake, targetText: 'voda' }, now);
    recordSentenceMistake(null, 'cnr', mistake, now);
    expect(getSentenceReviews('jake', 'cnr')).toHaveLength(1);
  });

  it('deduplicates repeated callbacks while preserving distinct mistakes', () => {
    recordSentenceMistake('jake', 'cnr', mistake, now);
    recordSentenceMistake('jake', 'cnr', mistake, now + 1);
    expect(getSentenceReviews('jake', 'cnr')[0].misses).toBe(1);
    recordSentenceMistake('jake', 'cnr', { ...mistake, eventId: 'session:5' }, now + 2);
    expect(getSentenceReviews('jake', 'cnr')[0].misses).toBe(2);
  });

  it('requires two spaced successful reviews before retiring a sentence', () => {
    recordSentenceMistake('jake', 'cnr', mistake, now);
    const id = getSentenceReviews('jake', 'cnr')[0].id;
    expect(submitSentenceReview('jake', 'cnr', id, ['Imam', 'dva', 'brata.'], now).correct).toBe(true);
    expect(getSentenceReviews('jake', 'cnr', { dueOnly: true, now })).toEqual([]);
    expect(() => submitSentenceReview('jake', 'cnr', id, ['Imam', 'dva', 'brata.'], now + 1)).toThrow('not due');
    expect(submitSentenceReview('jake', 'cnr', id, ['Imam', 'dva', 'brata.'], now + day).mastered).toBe(true);
    expect(getSentenceReviews('jake', 'cnr')).toEqual([]);
    recordSentenceMistake('jake', 'cnr', { ...mistake, eventId: 'later' }, now + 2 * day);
    expect(getSentenceReviews('jake', 'cnr')).toHaveLength(1);
  });

  it('brings a failed review back after ten minutes and does not let another account submit it', () => {
    recordSentenceMistake('jake', 'cnr', mistake, now);
    const id = getSentenceReviews('jake', 'cnr')[0].id;
    expect(() => submitSentenceReview('mia', 'cnr', id, [], now)).toThrow();
    expect(submitSentenceReview('jake', 'cnr', id, ['wrong'], now).correct).toBe(false);
    expect(getSentenceReviews('jake', 'cnr', { dueOnly: true, now: now + 599999 })).toEqual([]);
    expect(getSentenceReviews('jake', 'cnr', { dueOnly: true, now: now + 600000 })).toHaveLength(1);
  });

  it('changes exercise format and never supplies an already solved word order', () => {
    const review = { id: mistake.targetText, ...mistake, sourceKind: 'sentence_builder', streak: 0 };
    const completion = buildSentenceReviewStep(review);
    expect(completion.type).toBe('family-sentence-completion');
    expect(completion.completion.choices).toContain(completion.completion.answer);
    const builder = buildSentenceReviewStep({ ...review, sourceKind: 'sentence_completion' });
    expect(builder.type).toBe('family-sentence-builder');
    expect(builder.items[0].tokens.join(' ')).not.toBe(mistake.targetText);
    expect([...builder.items[0].tokens].sort()).toEqual(mistake.targetText.split(' ').sort());
  });

  it('extracts only incorrect graded sentence answers from verified feedback', () => {
    expect(sentenceMistakeFromExercise({ kind: 'sentence_builder', prompt: mistake.supportText }, { correct: false, correctAnswer: ['Imam', 'dva', 'brata.'] }))
      .toMatchObject({ targetText: mistake.targetText, kind: 'sentence_builder' });
    expect(sentenceMistakeFromExercise({ kind: 'sentence_completion', prompt: mistake.supportText }, { correct: false, completedSentence: ['Imam', 'dva', 'brata.'] }))
      .toMatchObject({ targetText: mistake.targetText });
    expect(sentenceMistakeFromExercise({ kind: 'sentence_builder' }, { correct: true })).toBeNull();
    expect(sentenceMistakeFromExercise({ kind: 'self_report' }, { correct: false })).toBeNull();
  });

  it('recovers from malformed device storage and keeps the newest mistakes when full', () => {
    recordSentenceMistake('jake', 'cnr', mistake, now);
    const key = [...storage.keys()][0];
    storage.set(key, '{broken');
    expect(getSentenceReviews('jake', 'cnr')).toEqual([]);
    for (let i = 0; i < 101; i++) recordSentenceMistake('jake', 'cnr', { ...mistake, targetText: `Sentence number ${i}.`, eventId: `e${i}` }, now + i);
    expect(getSentenceReviews('jake', 'cnr')).toHaveLength(100);
    expect(getSentenceReviews('jake', 'cnr').some(item => item.targetText === 'Sentence number 100.')).toBe(true);
  });
});
