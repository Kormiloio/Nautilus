import { describe, it, expect } from 'vitest';
import plan from '../../content/daily-vocabulary/montenegrin-days-24-40.json';
import legacy from '../../content/topics.json';
import { validateDailyPlan, dailyVocabularySteps } from '../daily-vocabulary.js';
import { getDraftVocabularyLessons, getDraftVocabularyPreview } from '../draft-vocabulary-preview.js';
import { buildMatch, buildQuiz, shuffle, createSeededRandom } from '../learning-engine.js';
import { toVerifiedExercises } from '../verified-curriculum.js';
import { DAILY_PLANS } from '../../content/daily-plans.js';
const ids = plan.lessons.map(lesson => lesson.id);
const normalize = text => text.normalize('NFKC').toLocaleLowerCase();
describe('Montenegrin vocabulary expansion', () => {
  it('supplies 170 new words across days 24–40 with ten new and ten review every day', () => {
    const allocations = validateDailyPlan(plan, ids, { requireReview: false });
    expect(ids).toEqual(Array.from({ length: 17 }, (_, i) => `voyage-${24 + i}`));
    const introduced = ids.flatMap(id => allocations.get(id).newItems.map(item => item.id));
    expect(introduced).toHaveLength(170);
    expect(new Set(introduced).size).toBe(170);
    for (const allocation of allocations.values()) {
      expect(allocation.newItems).toHaveLength(10);
      expect(allocation.reviewItems).toHaveLength(10);
    }
  });
  it('does not re-label words, recorded aliases, or tokens already in legacy content as new', () => {
    const topics = [...legacy.topics, ...legacy.bonusTopics];
    const records = topics.flatMap(topic => [...topic.items, ...(topic.dialogue?.lines || []), ...(topic.connections || []).flatMap(connection => connection.items)]);
    const tokens = new Set(records.flatMap(item => normalize(item.targetText).match(/[\p{L}]+/gu) || []));
    const priorIds = new Set(plan.priorWordIds);
    for (const item of plan.vocabulary.filter(item => !priorIds.has(item.id))) {
      for (const form of [item.targetText, ...(item.legacyAliases || [])]) expect(tokens.has(normalize(form)), `${item.id}: ${form} already appears in legacy content`).toBe(false);
    }
  });
  it('seeds review from actual first-23-day source records', () => {
    const source = legacy.topics.filter(topic => ['family','numbers','colors'].includes(topic.id)).flatMap(topic => topic.items);
    for (const id of plan.priorWordIds) {
      const item = plan.vocabulary.find(word => word.id === id);
      expect(source.find(word => word.id === item.sourceItemId)?.targetText).toBe(item.targetText);
    }
    const changed = structuredClone(plan);
    changed.lessons[0].newWordIds[0] = plan.priorWordIds[20];
    expect(() => validateDailyPlan(changed, ids, { requireReview: false })).toThrow(/already introduced/);
  });
  it('keeps draft content out of the published registry and rejects publication', () => {
    expect(DAILY_PLANS['montenegrin-en']).toBeUndefined();
    expect(() => validateDailyPlan(plan, ids)).toThrow(/review/);
    expect(plan.vocabulary.every(word => word.reviewStatus === 'draft' && !word.reviewer)).toBe(true);
  });
  it('makes every day available to preview with no invented sentence', () => {
    expect(getDraftVocabularyLessons('montenegrin-en')).toHaveLength(17);
    expect(getDraftVocabularyLessons('albanian-en')).toEqual([]);
    expect(getDraftVocabularyPreview('albanian-en', 'voyage-24')).toBeNull();
    for (const id of ids) {
      const preview = getDraftVocabularyPreview('montenegrin-en', id);
      expect(preview.items).toHaveLength(20);
      expect(preview.sentence).toBeNull();
      expect(preview.draft).toBe(true);
      expect(preview.newWordIds).toHaveLength(10);
    }
    expect(() => getDraftVocabularyPreview('montenegrin-en', 'voyage-99')).toThrow();
  });
  it('builds gradeable exercises in both modes with only allocated words', () => {
    const allocations = validateDailyPlan(plan, ids, { requireReview: false });
    for (const [id, allocation] of allocations) for (const family of [false, true]) {
      const steps = dailyVocabularySteps(allocation, { buildMatch, buildQuiz, shuffle, random: createSeededRandom(id) }, family);
      const exercises = toVerifiedExercises(steps);
      const quizzes = exercises.filter(exercise => exercise.kind === 'quiz');
      expect(quizzes).toHaveLength(20);
      expect(new Set(quizzes.map(q => q.answer))).toEqual(new Set([...allocation.newItems, ...allocation.reviewItems].map(item => item.targetText)));
      expect(exercises.filter(exercise => exercise.kind === 'match').every(exercise => exercise.targets.length <= 5)).toBe(true);
    }
  });
});
