import { describe, expect, it } from 'vitest';
import { getEarnedCompanions, getVoyageStage, renderImmersiveVoyageHero, renderVoyageExperience } from '../voyage-map.js';
import { buildDayPassport } from '../../engine/learning-days.js';

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

  it('earns one passport stamp for each complete 20-day month', () => {
    const dates = Array.from({ length: 21 }, (_, index) => `2026-08-${String(index + 1).padStart(2, '0')}`);
    const stamps = buildDayPassport(dates);
    expect(stamps).toHaveLength(10);
    expect(stamps[0]).toMatchObject({ completedDays: 20, earned: true });
    expect(stamps[1]).toMatchObject({ completedDays: 1, earned: false });
  });

  it('renders illustrations beneath the configured application base URL', () => {
    const html = renderVoyageExperience({
      completedLessons: [], activityDates: [], languagePacks: [], activePackId: 'montenegrin-en',
      profile: 'Mia', streakDays: 0, stars: 0,
    });
    expect(html).toContain(`${import.meta.env.BASE_URL}assets/illustrations/nautilus-voyage-map.jpg`);
    expect(html).toContain(`${import.meta.env.BASE_URL}assets/illustrations/friends-of-the-sea.jpg`);
  });

  it('renders the immersive route with ten accessible ports and a progress-positioned vessel', () => {
    const html = renderImmersiveVoyageHero({
      activityDates: [], familyPlayState: { completedDays: 42 },
    });
    expect(html).toContain('nautilus-voyage-panorama-v2.jpg');
    expect(html.match(/class="voyage-landmark /g)).toHaveLength(10);
    expect(html).toContain('Port 3: Echo Arch');
    expect(html).toContain('--voyage-progress:21%');
    expect(html).toContain('class="immersive-voyage__vessel"');
  });
});
