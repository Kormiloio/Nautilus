import { describe, expect, it } from 'vitest';
import { getEarnedCompanions, getPassportStamps, getVoyageStage } from '../voyage-map.js';

describe('learner voyage experience', () => {
  it('maps the 200 lessons onto five nautical stages', () => {
    expect(getVoyageStage(0).label).toBe('Anchors Aweigh');
    expect(getVoyageStage(50).label).toBe('Making Headway');
    expect(getVoyageStage(100).label).toBe('Rounding the Mark');
    expect(getVoyageStage(150).label).toBe('Flying Colors');
    expect(getVoyageStage(200).label).toBe('Shipshape · Moored');
  });

  it('awards companions only at completed voyage milestones', () => {
    expect(getEarnedCompanions(0)).toHaveLength(0);
    expect(getEarnedCompanions(25).map(friend => friend.name)).toEqual(['Reef Scout', 'Bright Dolphin']);
    expect(getEarnedCompanions(200)).toHaveLength(4);
  });

  it('earns one passport stamp for each complete 20-lesson month', () => {
    const lessons = Array.from({ length: 21 }, (_, index) => `voyage-${index + 1}`);
    const stamps = getPassportStamps(lessons);
    expect(stamps).toHaveLength(10);
    expect(stamps[0]).toMatchObject({ completedLessons: 20, earned: true });
    expect(stamps[1]).toMatchObject({ completedLessons: 1, earned: false });
  });
});
