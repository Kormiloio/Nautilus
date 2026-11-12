import { describe, expect, it } from 'vitest';
import { getFamilyMatchColor, getFamilyQuizFeedback, renderLessonRecap } from '../family-play-view.js';

const step = {
  item: { id: 'ne', targetText: 'Ne', supportText: 'No' },
};

describe('Focused lesson recap', () => {
  it('shows repeated words as practice without claiming they are new or first words', () => {
    const html = renderLessonRecap({ focused: true, newItems: [], recalledItems: [{ targetText: 'naručiti', supportText: 'to order' }] });
    expect(html).toContain('Practiced again');
    expect(html).toContain('naručiti');
    expect(html).not.toContain('New today');
    expect(html).not.toContain('Your first words');
  });

  it('keeps both introductions and familiar vocabulary visible on bridge days', () => {
    const html = renderLessonRecap({ focused: true, newItems: [{ targetText: 'new', supportText: 'new meaning' }], recalledItems: [{ targetText: 'familiar', supportText: 'familiar meaning' }] });
    expect(html).toContain('New today');
    expect(html).toContain('Practiced again');
    expect(html).not.toContain('Your first words');
  });
});

describe('Family Play quiz feedback', () => {
  it('reveals the current learner’s incorrect answer immediately', () => {
    expect(getFamilyQuizFeedback(step, {
      expected: 3,
      answers: [{ answerId: 'ne' }, { answerId: 'hvala' }],
      currentAnswer: { answerId: 'hvala' },
    })).toMatchObject({ allLocked: false, hasCurrentAnswer: true, currentCorrect: false, correctAnswer: 'Ne' });
  });

  it('reveals the current learner’s correct answer immediately', () => {
    expect(getFamilyQuizFeedback(step, {
      expected: 3,
      answers: [{ answerId: 'ne' }],
      currentAnswer: { answerId: 'ne' },
    })).toMatchObject({ allLocked: false, hasCurrentAnswer: true, currentCorrect: true, correctAnswer: 'Ne' });
  });

  it('reveals an incorrect current answer after everyone locks in', () => {
    expect(getFamilyQuizFeedback(step, {
      expected: 3,
      answers: [{ answerId: 'ne' }, { answerId: 'hvala' }, { answerId: 'ne' }],
      currentAnswer: { answerId: 'hvala' },
    })).toMatchObject({ allLocked: true, currentCorrect: false, correctAnswer: 'Ne' });
  });

  it('reveals a correct current answer after everyone locks in', () => {
    expect(getFamilyQuizFeedback(step, {
      expected: 3,
      answers: [{ answerId: 'ne' }, { answerId: 'ne' }, { answerId: 'hvala' }],
      currentAnswer: { answerId: 'ne' },
    })).toMatchObject({ allLocked: true, currentCorrect: true, correctAnswer: 'Ne' });
  });
});

describe('Family Play matching colors', () => {
  it('assigns a distinct repeatable hue to each of the six pairs', () => {
    const colors = Array.from({ length: 6 }, (_, index) => getFamilyMatchColor(index));
    expect(new Set(colors)).toHaveLength(6);
    expect(getFamilyMatchColor(0)).toBe('lime');
    expect(getFamilyMatchColor(6)).toBe('lime');
  });
});
