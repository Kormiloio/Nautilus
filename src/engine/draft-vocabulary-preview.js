import { DRAFT_DAILY_PLANS } from '../content/draft-daily-plans.js';
import { validateDailyPlan } from './daily-vocabulary.js';

export function getDraftVocabularyLessons(packId) {
  return DRAFT_DAILY_PLANS[packId]?.lessons || [];
}

export function getDraftVocabularyPreview(packId, lessonId) {
  const plan = DRAFT_DAILY_PLANS[packId];
  if (!plan || !lessonId) return null;
  const lesson = plan.lessons.find(candidate => candidate.id === lessonId);
  if (!lesson) throw new Error('Unknown draft vocabulary day');
  const allocation = validateDailyPlan(plan, plan.lessons.map(candidate => candidate.id), { requireReview: false }).get(lessonId);
  return { topic: { id: lesson.id, title: `Day ${lesson.id.replace('voyage-', '')}: ${lesson.title}` },
    items: [...allocation.newItems, ...allocation.reviewItems], newWordIds: lesson.newWordIds,
    sentence: null, draft: true, lessonId };
}
