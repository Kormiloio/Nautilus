import { describe, it, expect } from 'vitest';
import {
  VOYAGE_LESSONS,
  getVoyageSchedule,
  getTopic,
  generateSession,
  CURRICULUM_TOPIC_IDS,
  EXTRA_TOPIC_IDS,
  getTopics,
  getCoreTopics,
  getExtraTopics,
} from '../learning-engine.js';
import { calculateStreak } from '../progress-store.js';

describe('Learning Engine', () => {
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
