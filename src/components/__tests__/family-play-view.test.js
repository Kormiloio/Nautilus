import { describe, expect, it } from 'vitest';
import { getFamilyMatchColor, getFamilyQuizFeedback } from '../family-play-view.js';

const step = {
  item: { id: 'ne', targetText: 'Ne', supportText: 'No' },
};

describe('Family Play quiz feedback', () => {
  it('does not reveal correctness before everyone locks in', () => {
    expect(getFamilyQuizFeedback(step, {
      expected: 3,
      answers: [{ answerId: 'ne' }, { answerId: 'hvala' }],
      currentAnswer: { answerId: 'hvala' },
    })).toMatchObject({ allLocked: false, currentCorrect: false, correctAnswer: 'Ne' });
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
