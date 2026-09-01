import { describe, expect, it } from 'vitest';
import { buildFamilyPlaySteps, getAvailableConnectionItems } from '../family-play-session.js';
import { getTopic } from '../learning-engine.js';

const topic = { items: Array.from({ length: 12 }, (_, index) => ({ id: `word-${index}`, targetText: `target ${index}`, supportText: `meaning ${index}` })) };
const lesson = { id: 'voyage-3', topicId: 'family', title: 'Family: Build' };

describe('full Family Play session', () => {
  it('contains learning, matching, quiz, conversation, and reflection rounds', () => {
    const steps = buildFamilyPlaySteps(lesson, topic, 'session-1');
    expect(steps.map(step => step.type)).toEqual(expect.arrayContaining([
      'ready', 'family-flashcards', 'family-match', 'family-quiz', 'family-conversation', 'family-reflection',
    ]));
    expect(steps.length).toBeGreaterThanOrEqual(16);
    expect(steps.at(-1).items.length).toBeGreaterThan(0);
  });

  it('is deterministic for every device in the shared session', () => {
    expect(buildFamilyPlaySteps(lesson, topic, 'session-1')).toEqual(buildFamilyPlaySteps(lesson, topic, 'session-1'));
  });

  it('loads authored cross-topic connections only after every prerequisite was learned', () => {
    const connectedTopic = { connections: [{
      id: 'weather-travel-connection',
      requiresTopicIds: ['travel'],
      items: [{ id: 'weather-travel-001', targetText: 'fixture target', supportText: 'fixture meaning' }],
    }] };
    expect(getAvailableConnectionItems(connectedTopic, [])).toEqual([]);
    expect(getAvailableConnectionItems(connectedTopic, ['travel'])).toEqual([
      expect.objectContaining({ targetText: 'fixture target' }),
    ]);
  });

  it('keeps language examples in content rather than hard-coding topic pairs in the engine', () => {
    expect(getAvailableConnectionItems(getTopic('numbers'), ['family'])).toEqual(expect.arrayContaining([
      expect.objectContaining({ targetText:'Imam četiri brata.', supportText:'I have four brothers.' }),
      expect.objectContaining({ targetText:'Imam pet sestara.', supportText:'I have five sisters.' }),
    ]));
  });

  it('makes a Numbers Build lesson cumulative instead of repeating a numbers-only list', () => {
    const numbers = getTopic('numbers');
    const buildLesson = { id:'voyage-13', topicId:'numbers', title:'Numbers: Build', type:'build' };
    const steps = buildFamilyPlaySteps(buildLesson, numbers, 'session-spiral');
    const flashcards = steps.find(step => step.type === 'family-flashcards');
    expect(flashcards.title).toBe('Build Across Lessons');
    expect(flashcards.connectionCount).toBeGreaterThan(0);
    expect(flashcards.items.some(item => item.targetText === 'Imam četiri brata.')).toBe(true);
    expect(flashcards.reviewCount).toBeGreaterThan(0);
  });
});
