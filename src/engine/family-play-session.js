import { VOYAGE_LESSONS, createSeededRandom, getTopic, shuffle } from './learning-engine.js';

function takeItems(items, count, random) {
  return shuffle(items, random).slice(0, Math.min(count, items.length));
}

function uniqueItems(items) {
  return [...new Map(items.filter(Boolean).map(item => [item.id, item])).values()];
}

const LESSON_MIX = {
  discover: { current: 8, review: 2, connection: 0, title: 'Discover Together', subtitle: 'Meet new words and reconnect them to your voyage' },
  recall: { current: 5, review: 5, connection: 1, title: 'Retrieve the Route', subtitle: 'Bring back recent language before adding more' },
  build: { current: 4, review: 3, connection: 5, title: 'Build Across Lessons', subtitle: 'Combine today’s words with language you already know' },
  use: { current: 3, review: 3, connection: 6, title: 'Use It Together', subtitle: 'Turn familiar words into useful family sentences' },
  checkpoint: { current: 5, review: 5, connection: 2, title: 'Voyage Checkpoint', subtitle: 'Mix new and older language without studying one list again' },
};

export function getSpiralReviewTopics(lesson, random = Math.random, limit = 4) {
  const lessonIndex = VOYAGE_LESSONS.findIndex(candidate => candidate.id === lesson.id);
  if (lessonIndex < 1) return [];
  const ids = [];
  for (let index = lessonIndex - 1; index >= 0; index -= 1) {
    const topicId = VOYAGE_LESSONS[index].topicId;
    if (topicId && topicId !== lesson.topicId && !ids.includes(topicId)) ids.push(topicId);
  }
  const recent = ids.slice(0, Math.min(2, limit));
  const older = takeItems(ids.slice(recent.length), Math.max(0, limit - recent.length), random);
  return [...recent, ...older].map(getTopic).filter(Boolean);
}

export function getAvailableConnectionItems(topic, learnedTopicIds = []) {
  const learned = new Set(learnedTopicIds);
  return (topic?.connections || [])
    .filter(connection => connection.requiresTopicIds.every(topicId => learned.has(topicId)))
    .flatMap(connection => connection.items || []);
}

export function buildFamilyPlaySteps(lesson, topic, sessionId) {
  const random = createSeededRandom(`${sessionId}:${lesson.id}:family-full-session`);
  const lessonKind = String(lesson.type || 'discover').replace('integration-', '');
  const mix = LESSON_MIX[lessonKind] || LESSON_MIX.discover;
  const reviewTopics = getSpiralReviewTopics(lesson, random);
  const reviewPool = reviewTopics.flatMap(reviewTopic => reviewTopic.items || []);
  const connectionPool = getAvailableConnectionItems(topic, reviewTopics.map(reviewTopic => reviewTopic.id));
  const currentItems = takeItems(topic?.items || [], mix.current, random);
  const reviewItems = takeItems(reviewPool, mix.review, random);
  const connectionItems = takeItems(connectionPool, mix.connection, random);
  const practiceItems = uniqueItems([...connectionItems, ...currentItems, ...reviewItems]);
  const fallbackPool = uniqueItems([...(topic?.items || []), ...reviewPool, ...connectionPool]);
  const completePool = practiceItems.length >= 6 ? practiceItems : uniqueItems([...practiceItems, ...takeItems(fallbackPool, 10, random)]);
  const quizItems = takeItems(completePool, 6, random);
  const conversationItems = takeItems(uniqueItems([...connectionItems, ...reviewItems, ...currentItems]), 6, random);

  const steps = [
    { type: 'ready', title: 'Is everyone ready?', subtitle: 'Join on each device before setting sail together.' },
    { type: 'family-flashcards', title: mix.title, subtitle: mix.subtitle, items: completePool, reviewCount: reviewItems.length, connectionCount: connectionItems.length },
    (() => {
      const matchItems = completePool.slice(0, 6);
      return {
        type: 'family-match', title: lessonKind === 'discover' ? 'Match as a Crew' : 'Connect Old and New', subtitle: 'Take turns connecting current and earlier language to its meaning',
        items: matchItems,
        targetItems: shuffle(matchItems, random),
        supportItems: shuffle(matchItems, random),
      };
    })(),
    ...quizItems.map((item, index) => ({
      type: 'family-quiz', title: `Family Quiz · ${index + 1} of ${quizItems.length}`,
      subtitle: 'Choose an answer together, then reveal it', item,
      options: shuffle([item, ...takeItems(completePool.filter(candidate => candidate.id !== item.id), 3, random)], random),
    })),
    ...conversationItems.map((item, index) => ({
      type: 'family-conversation', title: `Talk Together · Round ${index + 1}`,
      subtitle: 'Ask, answer, and make the phrase your own', item,
    })),
    { type: 'family-reflection', title: 'Bring It Home', subtitle: 'Everyone completes one final speaking challenge', items: conversationItems },
  ];
  return steps;
}
