import { describe, expect, it } from 'vitest';
import { getSideQuestForProgress } from '../side-quests.js';

describe('five-lesson side quests', () => {
  it('keeps the first mystery locked until five lessons are complete', () => {
    expect(getSideQuestForProgress('montenegrin-en', 4)).toMatchObject({ locked:true, nextAt:5, remaining:1 });
  });

  it('unlocks Sailor Talk at lesson five with contextual strength labels', () => {
    const quest = getSideQuestForProgress('montenegrin-en', 5);
    expect(quest).toMatchObject({ locked:false, milestone:5, id:'sailor-talk', title:'Sailor Talk' });
    expect(quest.items).toHaveLength(6);
    expect(quest.items.find(item => item.targetText === 'Jebi se')).toMatchObject({ supportText:'Fuck yourself', strength:'Very strong' });
  });

  it('changes the surprise at each subsequent five-lesson milestone', () => {
    const ids = [5,10,15,20,25].map(count => getSideQuestForProgress('montenegrin-en', count).id);
    expect(new Set(ids)).toHaveLength(5);
  });

  it('does not leak Montenegrin side quests into other language packs', () => {
    expect(getSideQuestForProgress('albanian-en', 10)).toBeNull();
  });
});
