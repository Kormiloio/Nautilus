import montenegrin from '../content/topics.json';
import albanian from '../content/albanian.js';

export const LANGUAGE_PACKS = new Map([
  [montenegrin.languagePack.id, montenegrin],
  [albanian.languagePack.id, albanian],
]);

let content = montenegrin;
export let LANGUAGE_PACK = content.languagePack;
export let TOPICS = content.topics;
export let BONUS_TOPICS = content.bonusTopics;
export let ALL_TOPICS = [...TOPICS, ...BONUS_TOPICS];

export const MONTH_NAMES = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
export const START_DATE = new Date(2026, 7, 10); // August 10, 2026

// Thirty core topics make up the ten-month voyage. The remaining three stay
// available in free practice as optional advanced/capstone material.
export let CURRICULUM_TOPIC_IDS = content.curriculum.months;
export let EXTRA_TOPIC_IDS = content.curriculum.extras;
let CURRICULUM_MONTH_BY_ID = new Map(
  CURRICULUM_TOPIC_IDS.flatMap((ids, monthIdx) => ids.map(id => [id, monthIdx + 1]))
);

export const LESSON_KINDS = [
  { type: 'discover', name: 'Discover', detail: 'Meet new words and hear them aloud' },
  { type: 'recall', name: 'Recall', detail: 'Bring yesterday’s language back' },
  { type: 'build', name: 'Build', detail: 'Put words into useful patterns' },
  { type: 'use', name: 'Use', detail: 'Speak, listen, and role-play' },
  { type: 'checkpoint', name: 'Checkpoint', detail: 'Show what you remember' },
];

export function getAvailableLanguagePacks() {
  return [...LANGUAGE_PACKS.values()].map(pack => pack.languagePack);
}

export function setActiveLanguagePack(packId) {
  const next = LANGUAGE_PACKS.get(packId);
  if (!next) throw new Error(`Unknown language pack: ${packId}`);
  content = next;
  LANGUAGE_PACK = content.languagePack;
  TOPICS = content.topics;
  BONUS_TOPICS = content.bonusTopics;
  ALL_TOPICS = [...TOPICS, ...BONUS_TOPICS];
  CURRICULUM_TOPIC_IDS = content.curriculum.months;
  EXTRA_TOPIC_IDS = content.curriculum.extras;
  CURRICULUM_MONTH_BY_ID = new Map(
    CURRICULUM_TOPIC_IDS.flatMap((ids, monthIdx) => ids.map(id => [id, monthIdx + 1]))
  );
  VOYAGE_LESSONS = buildVoyageLessons();
}

export function getTopics() {
  return TOPICS;
}

export function getBonusTopics() {
  return BONUS_TOPICS;
}

export function getCoreTopics() {
  return CURRICULUM_TOPIC_IDS.flat().map(getTopic).filter(Boolean);
}

export function getExtraTopics() {
  return EXTRA_TOPIC_IDS.map(getTopic).filter(Boolean);
}

export function getCurriculumMonth(topicId) {
  return CURRICULUM_MONTH_BY_ID.get(topicId) || null;
}

export function getTopic(id) {
  return ALL_TOPICS.find(t => t.id === id);
}

// Generate the 200 voyage lessons from topics
function buildVoyageLessons() {
  const lessons = [];
  let lessonNum = 1;

  for (let monthIdx = 0; monthIdx < 10; monthIdx++) {
    // 3 topic weeks, 1 integration week per month
    const monthTopics = CURRICULUM_TOPIC_IDS[monthIdx].map(getTopic);

    for (let weekInMonth = 0; weekInMonth < 4; weekInMonth++) {
      const weekNum = monthIdx * 4 + weekInMonth + 1;

      if (weekInMonth < 3) {
        // Topic Week: map to Topic A, B, or C
        const topic = monthTopics[weekInMonth];

        for (let dayIdx = 0; dayIdx < 5; dayIdx++) {
          const kind = LESSON_KINDS[dayIdx];
          lessons.push({
            id: `voyage-${lessonNum}`,
            number: lessonNum,
            month: monthIdx,
            week: weekNum,
            dayOfWeek: dayIdx + 1,
            topicId: topic.id,
            type: kind.type,
            title: `${topic.title}: ${kind.name}`,
            detail: kind.detail,
          });
          lessonNum++;
        }
      } else {
        // Integration Week (Week 4 of the month)
        for (let dayIdx = 0; dayIdx < 5; dayIdx++) {
          const kind = LESSON_KINDS[dayIdx];
          lessons.push({
            id: `voyage-${lessonNum}`,
            number: lessonNum,
            month: monthIdx,
            week: weekNum,
            dayOfWeek: dayIdx + 1,
            topicId: null, // mixed
            type: `integration-${kind.type}`,
            title: `Integration: ${kind.name}`,
            detail: `Review topics from Month ${monthIdx + 1}`,
          });
          lessonNum++;
        }
      }
    }
  }
  return lessons;
}

export let VOYAGE_LESSONS = buildVoyageLessons();

// Assign voyage lessons to local calendar dates skipping weekends
export function getLessonForDate(date) {
  const key = dateKey(date);
  return getVoyageSchedule().find(s => s.dateKey === key)?.lesson || null;
}

export function dateKey(date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function addDays(date, days) {
  const r = new Date(date);
  r.setDate(r.getDate() + days);
  return r;
}

// Map the 200 lessons to calendar weekdays starting at START_DATE
export function getVoyageSchedule() {
  const schedule = [];
  let currentDate = new Date(START_DATE);

  for (let i = 0; i < VOYAGE_LESSONS.length; i++) {
    // Skip weekends (Saturday=6, Sunday=0)
    while (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
      currentDate.setDate(currentDate.getDate() + 1);
    }

    schedule.push({
      dateKey: dateKey(currentDate),
      date: new Date(currentDate),
      lesson: VOYAGE_LESSONS[i],
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return schedule;
}

// Helpers for activity building
export function shuffle(arr, random = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildMatch(items, pairsCount = 6, random = Math.random) {
  const n = Math.min(pairsCount, items.length);
  const chosen = shuffle(items, random).slice(0, n);
  const tiles = [];
  chosen.forEach((it, i) => {
    tiles.push({ id: `target-${i}`, pairId: i, text: it.targetText, kind: 'target' });
    tiles.push({ id: `support-${i}`, pairId: i, text: it.supportText, kind: 'support' });
  });
  return { tiles: shuffle(tiles, random), selectedIds: [], matchedIds: [] };
}

export function buildQuiz(items, quizLength = 8, random = Math.random) {
  const count = Math.min(quizLength, items.length);
  const order = shuffle(items, random).slice(0, count);
  const questions = order.map(correct => {
    const distractorPool = items.filter(it => it.targetText !== correct.targetText);
    const distractors = shuffle(distractorPool, random).slice(0, Math.min(3, distractorPool.length));
    const options = shuffle([correct.targetText, ...distractors.map(d => d.targetText)], random);
    return {
      promptText: correct.supportText,
      correctAnswer: correct.targetText,
      options,
    };
  });
  return { questions, qIdx: 0, score: 0, selected: null, answered: false };
}

// Builds the session steps dynamically based on the lesson
export function createSeededRandom(seedText) {
  let seed = [...String(seedText)].reduce((value, char) => ((value * 31) + char.charCodeAt(0)) >>> 0, 2166136261);
  return () => {
    seed = (seed + 0x6D2B79F5) >>> 0;
    let value = seed;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function generateSession(lesson, completedTopicIds, options = {}) {
  const steps = [];
  const random = options.random || Math.random;

  if (lesson.topicId) {
    const topic = getTopic(lesson.topicId);
    const prevTopic = TOPICS[TOPICS.indexOf(topic) - 1] || null;

    // Step 0: Warmup (if previous topic exists)
    if (prevTopic) {
      steps.push({
        type: 'warmup',
        title: 'Warmup',
        subtitle: `Quick practice from ${prevTopic.title}`,
        items: prevTopic.items.slice(0, 5),
      });
    }

    if (lesson.type === 'discover') {
      // Discover Cycle: Flashcards -> Match
      steps.push({
        type: 'discover',
        title: 'New Vocabulary',
        subtitle: `Discover words for ${topic.title}`,
        items: topic.items,
      });
      steps.push({
        type: 'match',
        title: 'Recall Match',
        subtitle: 'Connect the translations',
        match: buildMatch(topic.items, 4, random),
      });
    } else if (lesson.type === 'recall') {
      // Recall Cycle: Flashcard review -> Quiz
      steps.push({
        type: 'recall-flash',
        title: 'Vocabulary Recall',
        subtitle: 'Self-assess your memory',
        items: shuffle(topic.items, random),
      });
      steps.push({
        type: 'quiz',
        title: 'Quick Quiz',
        subtitle: 'Test your understanding',
        quiz: buildQuiz(topic.items, 5, random),
      });
    } else if (lesson.type === 'build') {
      // Build Cycle: Notes -> Build quiz (sentence completion)
      steps.push({
        type: 'note',
        title: 'Sentence Pattern',
        subtitle: 'How sentences are structured',
        note: topic.note || 'Practice assembling phrases in this topic.',
      });
      steps.push({
        type: 'quiz',
        title: 'Pattern Practice',
        subtitle: 'Complete the sentences correctly',
        quiz: buildQuiz(topic.items, 6, random),
      });
    } else if (lesson.type === 'use') {
      // Use Cycle: Role-play Dialogue (if exists) or Listen & Repeat
      if (topic.dialogue) {
        steps.push({
          type: 'dialogue',
          title: 'Dialogue Practice',
          subtitle: 'Read the roles out loud',
          dialogue: topic.dialogue,
        });
      } else {
        steps.push({
          type: 'listen',
          title: 'Listen & Repeat',
          subtitle: 'Practice your pronunciation',
          items: topic.items,
        });
      }
    } else if (lesson.type === 'checkpoint') {
      // Checkpoint Cycle: Full Quiz -> Match
      steps.push({
        type: 'quiz',
        title: 'Topic Quiz',
        subtitle: 'Show what you remember',
        quiz: buildQuiz(topic.items, 8, random),
      });
      steps.push({
        type: 'match',
        title: 'Vocabulary Match',
        subtitle: 'Match all pairs to complete the topic',
        match: buildMatch(topic.items, 6, random),
      });
    }
  } else {
    // Integration Week Session
    // Pull items from topics in the current month
    const monthTopics = CURRICULUM_TOPIC_IDS[lesson.month].map(getTopic);
    const pool = monthTopics.flatMap(t => t.items);

    steps.push({
      type: 'quiz',
      title: 'Integration Quiz',
      subtitle: `Review from Month ${lesson.month + 1}`,
      quiz: buildQuiz(pool, 8, random),
    });
    steps.push({
      type: 'match',
      title: 'Integration Match',
      subtitle: 'Connect the words quickly',
      match: buildMatch(pool, 8, random),
    });
  }

  // Final step is always "done"
  steps.push({
    type: 'done',
    title: 'Completed!',
    subtitle: 'Awesome job!',
  });

  return steps;
}
