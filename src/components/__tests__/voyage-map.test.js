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
      profile: 'Lena', streakDays: 0, stars: 0,
    });
    expect(html).toContain(`${import.meta.env.BASE_URL}assets/illustrations/nautilus-voyage-panorama-v3.jpg`);
    expect(html).toContain(`${import.meta.env.BASE_URL}assets/illustrations/friends-of-the-sea.jpg`);
    expect(html.match(/class="destination-poster /g)).toHaveLength(11);
    expect(html).toContain('Posters from your voyage');
    expect(html).toContain('1 of 11 discovered');
    expect(html).toContain('poster-echo-arch-v1.jpg');
    expect(html).toContain('Charts open day 200');
  });

  it('unlocks a destination poster every 20 completed family lessons', () => {
    const html = renderVoyageExperience({
      activityDates: [], familyPlayState: { completedDays: 200 },
      languagePacks: [], activePackId: 'montenegrin-en', profile: 'Lena', streakDays: 0, stars: 0,
    });
    expect(html).toContain('11 of 11 discovered');
    expect(html).toContain('Homecoming Harbor');
    expect(html).not.toContain('Charts open day');
  });

  it('does not reuse Montenegrin imagery for the Iraqi Arabic pilot', () => {
    const state = {
      activityDates: [], activePackId: 'iraqi-arabic-en', profile: 'Lena',
      streakDays: 0, stars: 0,
      languagePacks: [{ id: 'iraqi-arabic-en', targetLanguage: { name: 'Iraqi Arabic' } }],
    };
    const dashboard = renderVoyageExperience(state);
    const curriculum = renderImmersiveVoyageHero(state);
    expect(dashboard).toContain('Rivers of Mesopotamia');
    expect(curriculum).toContain('Family River Journey');
    expect(dashboard).not.toContain('Montenegro');
    expect(curriculum).not.toContain('nautilus-voyage-panorama');
    expect(dashboard).toContain('river-journey-panorama-v1.jpg');
  });

  it('uses the same culturally distinct river theme for the Mandaic pilot', () => {
    const state = {
      activityDates: [], activePackId: 'mandaic-en', profile: 'Lena', streakDays: 0, stars: 0,
      languagePacks: [{ id: 'mandaic-en', targetLanguage: { name: 'Mandaic · Script Pilot' }, journeyThemeId: 'rivers-of-mesopotamia@0.1.0' }],
    };
    expect(renderVoyageExperience(state)).toContain('river-journey-panorama-v1.jpg');
    expect(renderImmersiveVoyageHero(state)).toContain('Mandaic · Script Pilot');
  });

  it('uses separate Spain and Albania journey worlds', () => {
    const spanish = { activityDates: [], activePackId:'spanish-spain-en', profile:'Lena', streakDays:0, stars:0, languagePacks:[{id:'spanish-spain-en',targetLanguage:{name:'Spanish · Spain'},journeyThemeId:'iberian-journey@0.1.0'}] };
    const albanian = { activityDates: [], activePackId:'albanian-en', profile:'Lena', streakDays:0, stars:0, languagePacks:[{id:'albanian-en',targetLanguage:{name:'Albanian'},journeyThemeId:'albania-mountain-to-sea@0.1.0'}] };
    expect(renderVoyageExperience(spanish)).toContain('iberian-journey-panorama-v1.jpg');
    expect(renderImmersiveVoyageHero(spanish)).toContain('Across Spain');
    expect(renderVoyageExperience(albanian)).toContain('albania-journey-panorama-v1.jpg');
    expect(renderImmersiveVoyageHero(albanian)).toContain('Across Albania');
    expect(renderVoyageExperience(spanish)).not.toContain('albania-journey-panorama');
  });

  it('uses separate Italy and France journey worlds', () => {
    const italian = { activityDates:[], activePackId:'italian-en', profile:'Lena', streakDays:0, stars:0, languagePacks:[{id:'italian-en',targetLanguage:{name:'Italian'},journeyThemeId:'italy-alps-to-sea@0.1.0'}] };
    const french = { activityDates:[], activePackId:'french-france-en', profile:'Lena', streakDays:0, stars:0, languagePacks:[{id:'french-france-en',targetLanguage:{name:'French · France'},journeyThemeId:'france-atlantic-to-mediterranean@0.1.0'}] };
    expect(renderVoyageExperience(italian)).toContain('italy-journey-panorama-v1.jpg');
    expect(renderImmersiveVoyageHero(italian)).toContain('Across Italy');
    expect(renderVoyageExperience(french)).toContain('france-journey-panorama-v1.jpg');
    expect(renderImmersiveVoyageHero(french)).toContain('Across France');
    expect(renderVoyageExperience(italian)).not.toContain('france-journey-panorama');
  });

  it('renders the immersive route with ten accessible ports and a progress-positioned vessel', () => {
    const html = renderImmersiveVoyageHero({
      activityDates: [], familyPlayState: { completedDays: 42 },
    });
    expect(html).toContain('nautilus-voyage-panorama-v3.jpg');
    expect(html.match(/class="voyage-landmark /g)).toHaveLength(10);
    expect(html).toContain('Port 3: Echo Arch');
    expect(html).toContain('--voyage-progress:21%');
    expect(html).toContain('class="immersive-voyage__vessel"');
  });
});
