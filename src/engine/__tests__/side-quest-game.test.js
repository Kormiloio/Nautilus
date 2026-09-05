import { beforeEach, describe, expect, it, vi } from 'vitest';
import { advanceDetectiveCase, createDetectiveGame, detectiveScore, earnSideQuestBadge, hasSideQuestBadge, lockDetectiveAnswer, selectDetectiveAnswer } from '../side-quest-game.js';

const quest={id:'false-friend-detective',milestone:10,cases:[{answerId:'hail'},{answerId:'hair'}]};

describe('False-Friend Detective solo fallback',()=>{
  beforeEach(()=>{const values=new Map();vi.stubGlobal('localStorage',{getItem:k=>values.get(k)??null,setItem:(k,v)=>values.set(k,String(v))})});
  it('reveals a solo answer immediately without a device-passing phase',()=>{
    let game=createDetectiveGame(quest,['Jake','Mia']);
    game=lockDetectiveAnswer(selectDetectiveAnswer(game,'hail'));
    expect(game).toMatchObject({phase:'reveal',selected:null,guesses:{Jake:'hail'},detectives:['Jake']});
  });
  it('keeps case history and calculates the final badge score',()=>{
    let game=createDetectiveGame(quest,['Jake']);
    game=advanceDetectiveCase(lockDetectiveAnswer(selectDetectiveAnswer(game,'hail')),2);
    game=advanceDetectiveCase(lockDetectiveAnswer(selectDetectiveAnswer(game,'hair')),2);
    expect(game.phase).toBe('complete');
    expect(detectiveScore(game,quest)).toEqual([{name:'Jake',correct:2}]);
  });
  it('persists the non-credit badge independently from stars',()=>{
    expect(hasSideQuestBadge('montenegrin-en','Jake',quest.id)).toBe(false);
    earnSideQuestBadge('montenegrin-en','Jake',quest.id);
    expect(hasSideQuestBadge('montenegrin-en','Jake',quest.id)).toBe(true);
  });
});
