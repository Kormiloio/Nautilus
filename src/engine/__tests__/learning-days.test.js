import { describe, expect, it } from 'vitest';
import { buildDayPassport, getLearningDayCount, getLearningDayPosition, uniqueLearningDates } from '../learning-days.js';

describe('learning day progress', () => {
  it('counts one calendar date once regardless of activities completed', () => {
    const repeatedDate = Array(8).fill('2026-08-10');
    expect(uniqueLearningDates(repeatedDate)).toEqual(['2026-08-10']);
    expect(getLearningDayCount(repeatedDate)).toBe(1);
    expect(getLearningDayPosition(repeatedDate)).toMatchObject({ completedDays: 1, nextDay: 2, percent: 1 });
  });

  it('builds passport progress from unique learning dates', () => {
    const dates = Array.from({ length: 20 }, (_, index) => `2026-08-${String(index + 1).padStart(2, '0')}`);
    dates.push('2026-08-20');
    expect(buildDayPassport(dates)[0]).toMatchObject({ completedDays: 20, earned: true });
  });
});
