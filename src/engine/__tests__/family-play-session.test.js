import { describe, expect, it } from 'vitest';
import { buildFamilyPlaySteps } from '../family-play-session.js';

const topic = { items: Array.from({ length: 12 }, (_, index) => ({ id: `word-${index}`, targetText: `target ${index}`, supportText: `meaning ${index}` })) };
const lesson = { id: 'voyage-3', topicId: 'family', title: 'Family: Build' };

describe('full Family Play session', () => {
  it('contains learning, matching, quiz, conversation, and reflection rounds', () => {
    const steps = buildFamilyPlaySteps(lesson, topic, 'session-1');
    expect(steps.map(step => step.type)).toEqual(expect.arrayContaining([
      'ready', 'family-flashcards', 'family-match', 'family-quiz', 'family-conversation', 'family-reflection',
    ]));
    expect(steps.length).toBeGreaterThanOrEqual(12);
    expect(steps.at(-1).items.length).toBeGreaterThan(0);
  });

  it('is deterministic for every device in the shared session', () => {
    expect(buildFamilyPlaySteps(lesson, topic, 'session-1')).toEqual(buildFamilyPlaySteps(lesson, topic, 'session-1'));
  });
});
