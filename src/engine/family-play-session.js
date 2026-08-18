import { createSeededRandom, shuffle } from './learning-engine.js';

function takeItems(items, count, random) {
  return shuffle(items, random).slice(0, Math.min(count, items.length));
}

export function buildFamilyPlaySteps(lesson, topic, sessionId) {
  const random = createSeededRandom(`${sessionId}:${lesson.id}:family-full-session`);
  const practiceItems = takeItems(topic?.items || [], 10, random);
  const quizItems = takeItems(topic?.items || [], 6, random);
  const conversationItems = takeItems(topic?.items || [], 6, random);

  const steps = [
    { type: 'ready', title: 'Is everyone ready?', subtitle: 'Join on each device before setting sail together.' },
    { type: 'family-flashcards', title: 'Discover Together', subtitle: `Learn ${practiceItems.length} words as a family`, items: practiceItems },
    { type: 'family-match', title: 'Match as a Crew', subtitle: 'Take turns connecting each word to its meaning', items: practiceItems.slice(0, 6) },
    ...quizItems.map((item, index) => ({
      type: 'family-quiz', title: `Family Quiz · ${index + 1} of ${quizItems.length}`,
      subtitle: 'Choose an answer together, then reveal it', item,
      options: shuffle([item, ...takeItems((topic?.items || []).filter(candidate => candidate.id !== item.id), 3, random)], random),
    })),
    ...conversationItems.map((item, index) => ({
      type: 'family-conversation', title: `Talk Together · Round ${index + 1}`,
      subtitle: 'Ask, answer, and make the phrase your own', item,
    })),
    { type: 'family-reflection', title: 'Bring It Home', subtitle: 'Everyone completes one final speaking challenge', items: conversationItems },
  ];
  return steps;
}
