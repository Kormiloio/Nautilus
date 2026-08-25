import { describe, it, expect } from 'vitest';
import {
  VOYAGE_LESSONS,
  getVoyageSchedule,
  getTopic,
  generateSession,
  createSeededRandom,
  CURRICULUM_TOPIC_IDS,
  EXTRA_TOPIC_IDS,
  getTopics,
  getCoreTopics,
  getExtraTopics,
  LANGUAGE_PACK,
  ALL_TOPICS,
  setActiveLanguagePack,
} from '../learning-engine.js';
import { calculateStreak } from '../progress-store.js';

describe('Learning Engine', () => {
  it('should expose a versioned Montenegrin pack with stable language-neutral items', () => {
    expect(LANGUAGE_PACK.id).toBe('montenegrin-en');
    expect(LANGUAGE_PACK.targetLanguage.code).toBe('cnr');

    const records = ALL_TOPICS.flatMap(topic => [
      ...topic.items,
      ...(topic.dialogue?.lines || []),
    ]);
    const ids = records.map(item => item.id);

    expect(new Set(ids).size).toBe(ids.length);
    records.forEach(item => {
      expect(item.targetText).toBeTruthy();
      expect(item.supportText).toBeTruthy();
      expect(item).not.toHaveProperty('mn');
      expect(item).not.toHaveProperty('en');
    });
  });

  it('should generate exactly 200 voyage lessons', () => {
    expect(VOYAGE_LESSONS).toHaveLength(200);
  });

  it('should group lessons into 10 months and 40 weeks', () => {
    const lastLesson = VOYAGE_LESSONS[199];
    expect(lastLesson.month).toBe(9); // 0-indexed (Month 10)
    expect(lastLesson.week).toBe(40);
  });

  it('should map exactly 30 distinct core topics and preserve three extras', () => {
    const coreIds = CURRICULUM_TOPIC_IDS.flat();
    const allMappedIds = [...coreIds, ...EXTRA_TOPIC_IDS];

    expect(coreIds).toHaveLength(30);
    expect(new Set(coreIds).size).toBe(30);
    expect(EXTRA_TOPIC_IDS).toHaveLength(3);
    expect(new Set(allMappedIds).size).toBe(33);
    expect(new Set(allMappedIds)).toEqual(new Set(getTopics().map(t => t.id)));
    expect(getCoreTopics()).toHaveLength(30);
    expect(getExtraTopics()).toHaveLength(3);
  });

  it('should give every core topic one five-day topic week', () => {
    const topicWeeks = VOYAGE_LESSONS.filter(l => l.topicId);
    const counts = topicWeeks.reduce((result, lesson) => {
      result[lesson.topicId] = (result[lesson.topicId] || 0) + 1;
      return result;
    }, {});

    expect(Object.keys(counts)).toHaveLength(30);
    Object.values(counts).forEach(count => expect(count).toBe(5));
  });

  it('should reserve Week 4 of each month for integration', () => {
    // Week 4 (lessons 16-20)
    const week4Lessons = VOYAGE_LESSONS.slice(15, 20);
    week4Lessons.forEach(l => {
      expect(l.type).toContain('integration');
      expect(l.topicId).toBeNull();
    });

    // Week 1 (lessons 1-5) should be topic-specific
    const week1Lessons = VOYAGE_LESSONS.slice(0, 5);
    week1Lessons.forEach(l => {
      expect(l.type).not.toContain('integration');
      expect(l.topicId).not.toBeNull();
    });
  });

  it('should schedule lessons on weekdays only', () => {
    const schedule = getVoyageSchedule();
    expect(schedule).toHaveLength(200);

    schedule.forEach(item => {
      const day = item.date.getDay();
      expect(day).not.toBe(0); // Not Sunday
      expect(day).not.toBe(6); // Not Saturday
    });
  });

  it('should generate distinct steps for topic lesson cycles', () => {
    const completedTopics = [];

    // Discover lesson session
    const discoverLesson = VOYAGE_LESSONS.find(l => l.type === 'discover');
    const discoverSteps = generateSession(discoverLesson, completedTopics);
    expect(discoverSteps.map(s => s.type)).toContain('discover');
    expect(discoverSteps.map(s => s.type)).toContain('match');

    // Recall lesson session
    const recallLesson = VOYAGE_LESSONS.find(l => l.type === 'recall');
    const recallSteps = generateSession(recallLesson, completedTopics);
    expect(recallSteps.map(s => s.type)).toContain('recall-flash');
    expect(recallSteps.map(s => s.type)).toContain('quiz');
  });

  it('should generate identical Family Play content from the same session seed', () => {
    const lesson = VOYAGE_LESSONS.find(l => l.type === 'checkpoint');
    const first = generateSession(lesson, [], { random: createSeededRandom('family-session-1') });
    const second = generateSession(lesson, [], { random: createSeededRandom('family-session-1') });
    expect(second).toEqual(first);
  });

  it('should expose a complete selectable Albanian voyage pack', () => {
    setActiveLanguagePack('albanian-en');
    try {
      expect(LANGUAGE_PACK.targetLanguage.code).toBe('sq');
      expect(VOYAGE_LESSONS).toHaveLength(200);
      expect(getTopics()).toHaveLength(33);
      expect(getTopic('greetings').items[0].targetText).toBe('Përshëndetje!');
      expect(getTopic('greetings').items.length).toBeGreaterThanOrEqual(9);
      expect(getTopic('greetings').dialogue.lines).toHaveLength(4);
      expect(LANGUAGE_PACK.audio).toMatchObject({ locale: 'sq-AL', reviewStatus: 'draft' });
    } finally {
      setActiveLanguagePack('montenegrin-en');
    }
  });

  it('should expose an explicitly gated RTL Iraqi Arabic pilot', () => {
    setActiveLanguagePack('iraqi-arabic-en');
    try {
      expect(LANGUAGE_PACK).toMatchObject({
        status: 'pilot',
        direction: 'rtl',
        defaultScript: 'Arab',
        locale: 'ar-IQ',
      });
      expect(VOYAGE_LESSONS).toHaveLength(200);
      expect(getTopics()).toHaveLength(30);
      expect(getExtraTopics()).toHaveLength(3);
      expect(getTopic('greetings').items[0]).toMatchObject({
        targetText: 'مرحبا',
        direction: 'rtl',
        script: 'Arab',
        reviewStatus: 'draft',
      });
      expect(getTopic('greetings').items[0].transliteration).toBeTruthy();
      expect(LANGUAGE_PACK.audio).toMatchObject({ locale: 'ar-IQ', reviewStatus: 'draft' });
    } finally {
      setActiveLanguagePack('montenegrin-en');
    }
  });

  it('should expose a script-only Mandaic pilot without substitute audio', () => {
    setActiveLanguagePack('mandaic-en');
    try {
      expect(LANGUAGE_PACK).toMatchObject({
        status: 'pilot', direction: 'rtl', defaultScript: 'Mand', locale: 'mid',
        tracks: ['heritage-classical', 'conversation-neo'],
        audio: { delivery: 'none' },
      });
      expect(VOYAGE_LESSONS).toHaveLength(200);
      expect(getTopics()).toHaveLength(30);
      expect(getExtraTopics()).toHaveLength(3);
      expect(getTopic('script-01').items[0]).toMatchObject({
        targetText: 'ࡀ', script: 'Mand', direction: 'rtl',
        track: 'heritage-classical', reviewStatus: 'draft',
      });
      expect(getTopics().flatMap(topic => topic.items).every(item => item.track === 'heritage-classical')).toBe(true);
    } finally {
      setActiveLanguagePack('montenegrin-en');
    }
  });

  it('should expose a complete Castilian Spanish pilot with Spain-scoped metadata', () => {
    setActiveLanguagePack('spanish-spain-en');
    try {
      expect(LANGUAGE_PACK).toMatchObject({
        status: 'pilot', locale: 'es-ES', defaultScript: 'Latn',
        journeyThemeId: 'iberian-journey@0.1.0',
        audio: { locale: 'es-ES', reviewStatus: 'draft' },
      });
      expect(VOYAGE_LESSONS).toHaveLength(200);
      expect(getTopics()).toHaveLength(30);
      expect(getExtraTopics()).toHaveLength(3);
      expect(getTopic('cafe').items.some(item => item.targetText === '¿Tenéis té?')).toBe(true);
      expect(getTopic('plans').items.some(item => item.targetText === '¡Vale!')).toBe(true);
    } finally {
      setActiveLanguagePack('montenegrin-en');
    }
  });

  it.each([
    ['italian-en', 'it-IT', 'italy-alps-to-sea@0.1.0', 'cafe', 'Un caffè, per favore'],
    ['french-france-en', 'fr-FR', 'france-atlantic-to-mediterranean@0.1.0', 'cafe', 'Un café, s’il vous plaît'],
  ])('should expose a complete %s structural pilot', (packId, locale, journeyThemeId, topicId, expectedText) => {
    setActiveLanguagePack(packId);
    try {
      expect(LANGUAGE_PACK).toMatchObject({ status:'pilot', locale, journeyThemeId, audio:{ locale, reviewStatus:'draft' } });
      expect(VOYAGE_LESSONS).toHaveLength(200);
      expect(getTopics()).toHaveLength(30);
      expect(getExtraTopics()).toHaveLength(3);
      expect(getTopic(topicId).items.some(item => item.targetText === expectedText)).toBe(true);
    } finally {
      setActiveLanguagePack('montenegrin-en');
    }
  });
});

describe('Progress Store', () => {
  it('should return 0 streak for empty activity list', () => {
    expect(calculateStreak([])).toBe(0);
  });

  it('should calculate streak correctly with contiguous practice', () => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const formatDate = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

    const dates = [formatDate(today), formatDate(yesterday)];
    expect(calculateStreak(dates)).toBe(2);
  });

  it('should handle streak when practiced yesterday but not yet today', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dayBefore = new Date();
    dayBefore.setDate(dayBefore.getDate() - 2);

    const formatDate = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

    const dates = [formatDate(yesterday), formatDate(dayBefore)];
    expect(calculateStreak(dates)).toBe(2);
  });

  it('should break streak when there is a gap', () => {
    const today = new Date();
    const dayBeforeYesterday = new Date();
    dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);

    const formatDate = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

    const dates = [formatDate(today), formatDate(dayBeforeYesterday)];
    expect(calculateStreak(dates)).toBe(1); // Streak reset to 1 because yesterday is missing
  });
});
