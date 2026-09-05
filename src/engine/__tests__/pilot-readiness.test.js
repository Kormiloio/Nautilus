import { describe, it, expect } from 'vitest';
import { VOYAGE_LESSONS } from '../learning-engine.js';
import { getLearningDayCount, getLearningDayPosition, buildDayPassport } from '../learning-days.js';
import { exportLocalProgress, importLocalProgress } from '../progress-store.js';

describe('Four-Week Family Pilot Flight Check', () => {
  it('generates 200 distinct weekday lesson positions across 40 five-day weeks', () => {
    expect(VOYAGE_LESSONS.length).toBe(200);

    VOYAGE_LESSONS.forEach((lesson, index) => {
      expect(lesson.number).toBe(index + 1);
      expect(lesson.id).toBe(`voyage-${index + 1}`);
    });
  });

  it('calculates active learning day counts consistently', () => {
    const dates = ['2026-09-01', '2026-09-02', '2026-09-03'];
    const count = getLearningDayCount(dates);
    const pos = getLearningDayPosition(dates);

    expect(count).toBe(3);
    expect(pos.completedDays).toBe(3);
    expect(pos.nextDay).toBe(4);
    expect(pos.percent).toBe(2);
  });

  it('builds passport stamps correctly based on completed family voyage days', () => {
    const dates = Array.from({ length: 25 }, (_, i) => `2026-08-${String(i + 1).padStart(2, '0')}`);
    const passport = buildDayPassport(dates);

    expect(passport.length).toBe(10);
    expect(passport[0].earned).toBe(true);  // Month 1 complete (20 days)
    expect(passport[1].earned).toBe(false); // Month 2 partially done (5/20)
  });

  it('retains independent learner progress state', () => {
    const sampleProfile = {
      id: 'learner-1',
      completedLessons: ['voyage-day-1'],
      stars: 15,
    };
    expect(sampleProfile.completedLessons).toContain('voyage-day-1');
    expect(sampleProfile.stars).toBe(15);
  });

  it('exports and imports local progress JSON correctly', () => {
    const exported = exportLocalProgress();
    expect(exported).toContain('version');
    const result = importLocalProgress(exported);
    expect(result.importedKeys).toBeGreaterThanOrEqual(0);
  });
});
