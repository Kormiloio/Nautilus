// Weekly grammar missions reuse language-pack reviewed topics. The mission
// grows from sentence frames into questions, plans, past, and future talk.
const WEEKLY_GRAMMAR_TOPICS = [
  'verbs1', 'questionwords', 'smalltalk', 'plans', 'aboutme',
  'emotions', 'pasttense', 'futuretense', 'shopping', 'restaurant',
];
const WEEKLY_GRAMMAR_GAMES = [
  'Point to the person, act it out, and say the answer together.',
  'Take turns asking a question and answering it.',
  'Role-play a tiny conversation with a partner.',
  'Plan a pretend family outing and agree together.',
  'Tell three facts about yourself using the pattern.',
  'Use faces and gestures to show the feeling, then say it.',
  'Tell a three-card story about what happened.',
  'Make a three-card plan for tomorrow.',
  'Act out a shop and ask for what you need.',
  'Act out a restaurant order from greeting to goodbye.',
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

export function getWeeklyGrammarGame(lessonId, familyId) {
  return WEEKLY_GRAMMAR_GAMES[getWeeklyGrammarWeek(lessonId, familyId) - 1];
}
