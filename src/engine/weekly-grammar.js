// Weekly grammar missions reuse language-pack reviewed topics. The mission
// grows from sentence frames into questions, plans, past, and future talk.
const WEEKLY_GRAMMAR_TOPICS = [
  'verbs1', 'questionwords', 'smalltalk', 'plans', 'aboutme',
  'emotions', 'pasttense', 'futuretense', 'shopping', 'restaurant',
];

export function getWeeklyGrammarWeek(lessonId, familyId) {
  const day = Number(String(lessonId || '').replace('voyage-', ''));
  if (!Number.isInteger(day) || day < 1) return 1;
  // Camaj Family joins the grammar track at week 4 on day 27.
  if (familyId === 'ae060d7c-8c44-49f3-b825-54e5f8a84946' && day >= 27) return Math.min(10, Math.max(4, Math.ceil(day / 7)));
  return Math.min(10, Math.max(1, Math.ceil(day / 7)));
}

export function getWeeklyGrammarTopicId(lessonId, familyId) {
  return WEEKLY_GRAMMAR_TOPICS[getWeeklyGrammarWeek(lessonId, familyId) - 1];
}

