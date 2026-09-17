import { describe, it, expect } from 'vitest';
import { validateDailyPlan, dailyVocabularySteps } from '../daily-vocabulary.js';
import { buildMatch, buildQuiz, shuffle, createSeededRandom } from '../learning-engine.js';
import { toVerifiedExercises } from '../verified-curriculum.js';
function fixture() {
  return { version: 1, wordsPerDay: 4,
    vocabulary: Array.from({ length: 10 }, (_, i) => ({ id: `w${i}`, targetText: `word${i}`, supportText: `meaning${i}`, kind: 'word', reviewStatus: 'approved', reviewer: 'Test fixture only', reviewedAt: '2026-09-17' })),
    lessons: [ { id: 'day1', newWordIds: ['w0','w1','w2','w3'], reviewWordIds: [] }, { id: 'checkpoint', newWordIds: ['w4','w5'], reviewWordIds: ['w0','w1'] } ] };
}
const ids = ['day1', 'checkpoint'];
describe('Daily net-new vocabulary contract', () => {
  it('requires half new even on a checkpoint, while permitting an all-new first day', () => {
    expect(validateDailyPlan(fixture(), ids).get('checkpoint').newItems).toHaveLength(2);
  });
  it.each([
    ['reintroduced word', p => { p.lessons[1].newWordIds = ['w0','w5']; p.lessons[1].reviewWordIds = ['w2','w3']; }],
    ['less than half new', p => { p.lessons[1].newWordIds = ['w4']; p.lessons[1].reviewWordIds = ['w0','w1','w2']; }],
    ['unseen review', p => { p.lessons[1].reviewWordIds = ['w8','w9']; }],
    ['duplicate ID in lesson', p => { p.lessons[1].newWordIds = ['w4','w4']; }],
    ['duplicate display form', p => { p.vocabulary[4].targetText = ' WORD0 '; }],
    ['sentence posing as vocabulary', p => { p.vocabulary[4].kind = 'sentence'; }],
    ['unreviewed content', p => { p.vocabulary[4].reviewStatus = 'draft'; }],
    ['missing lesson', p => { p.lessons.pop(); }],
    ['wrong order', p => { p.lessons.reverse(); }],
    ['unknown word', p => { p.lessons[1].newWordIds[0] = 'missing'; }],
  ])('rejects %s', (_, change) => { const plan = fixture(); change(plan); expect(() => validateDailyPlan(plan, ids)).toThrow(); });
  it('teaches identical new vocabulary first in both modes and serializes through verified grading', () => {
    const allocation = validateDailyPlan(fixture(), ids).get('checkpoint');
    const helpers = { buildMatch, buildQuiz, shuffle, random: createSeededRandom('daily-test') };
    const individual = dailyVocabularySteps(allocation, helpers);
    const family = dailyVocabularySteps(allocation, helpers, true);
    expect(individual[0].items).toEqual(family[1].items);
    for (const steps of [individual, family]) {
      const exercises = toVerifiedExercises(steps);
      const quizzes = exercises.filter(exercise => exercise.kind === 'quiz');
      expect(new Set(quizzes.map(q => q.answer))).toEqual(new Set(['word4','word5','word0','word1']));
      expect(exercises.some(exercise => exercise.kind === 'match')).toBe(true);
    }
  });
});
