import { describe, it, expect, afterEach } from 'vitest';
import full from '../../content/daily-vocabulary/montenegrin-full-200.json';
import { validateDailyPlan } from '../daily-vocabulary.js';
import { setActiveLanguagePack, VOYAGE_LESSONS, getTopic, generateSession, getDailyVocabularyAllocation } from '../learning-engine.js';
import { buildFamilyPlaySteps } from '../family-play-session.js';
afterEach(() => setActiveLanguagePack('montenegrin-en'));
describe('Live continuation rollout and full-course draft', () => {
  it('authors 200 full days with 2,010 unique lexical entries', () => {
    expect(full.vocabulary).toHaveLength(2010);
    const allocations = validateDailyPlan(full, Array.from({length:200},(_,i)=>`voyage-${i+1}`), { requireReview:false });
    expect(allocations.size).toBe(200);
    expect(allocations.get('voyage-1').newItems).toHaveLength(20);
    expect(new Set(full.lessons.flatMap(lesson => lesson.newWordIds)).size).toBe(2010);
    for (const item of full.vocabulary) {
      expect(item.targetText).not.toMatch(/\s|[^\p{Script=Latin}\p{M}-]/u);
      expect(item.reviewStatus).toBe('draft');
    }
    expect(() => validateDailyPlan(full, full.lessons.map(lesson=>lesson.id))).toThrow(/review/);
  });
  it('activates only the registered pilot range in actual individual and family lessons', () => {
    setActiveLanguagePack('montenegrin-en');
    for (let day=24;day<=200;day++) {
      const lesson=VOYAGE_LESSONS[day-1];
      const individual=generateSession(lesson,[]);
      const family=buildFamilyPlaySteps(lesson,getTopic(lesson.topicId),'same-session',{catalogRevision:6});
      expect(individual[0].items).toHaveLength(10);
      expect(family[1].items.map(item=>item.id)).toEqual(individual[0].items.map(item=>item.id));
      expect(family[1].subtitle).toContain('pilot');
      expect(family.filter(step=>step.type==='family-quiz')).toHaveLength(20);
      expect(family[2].reviewCount).toBe(10);
    }
    expect(getDailyVocabularyAllocation(VOYAGE_LESSONS[22])).toBeNull();
    expect(getDailyVocabularyAllocation({id:'voyage-201'})).toBeNull();
  });
  it('keeps revision-5 family sessions on the original generator', () => {
    setActiveLanguagePack('montenegrin-en');
    const lesson=VOYAGE_LESSONS[23];
    const old=buildFamilyPlaySteps(lesson,getTopic(lesson.topicId),'old-session',{catalogRevision:5});
    expect(old.filter(step=>step.type==='family-quiz')).toHaveLength(6);
    expect(old.find(step=>step.type==='family-flashcards').title).not.toContain('10 new');
  });
  it('does not change another language pack', () => {
    setActiveLanguagePack('albanian-en');
    expect(getDailyVocabularyAllocation(VOYAGE_LESSONS[23])).toBeNull();
  });
});
