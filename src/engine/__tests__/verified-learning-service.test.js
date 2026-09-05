import {beforeEach,describe,it,expect,vi} from 'vitest';
const mocks=vi.hoisted(()=>({rpc:vi.fn(),from:vi.fn()}));
vi.mock('../supabase-client.js',()=>({isConfigured:true,supabase:mocks}));
import {beginVerifiedLesson,submitVerifiedExercise} from '../verified-learning-service.js';
beforeEach(()=>{mocks.rpc.mockReset();mocks.from.mockReset();});
describe('Verified client contract',()=>{
  it('submits only an attempt ID, stage index and answer, never reward totals',async()=>{
    mocks.rpc.mockResolvedValue({data:{correct:false,reward:0},error:null});
    expect(await submitVerifiedExercise('attempt',0,'wrong')).toEqual({correct:false,reward:0});
    expect(mocks.rpc).toHaveBeenCalledWith('submit_verified_exercise',{target_attempt:'attempt',target_index:0,response:'wrong'});
  });
  it('propagates rejected grading instead of claiming success locally',async()=>{
    const error={message:'Finish the current exercise together first'};
    mocks.rpc.mockResolvedValue({error});
    await expect(submitVerifiedExercise('attempt',9,true)).rejects.toBe(error);
  });
  it('does not fall back to unverified credit when a definition is missing',async()=>{
    const query={select:vi.fn(),eq:vi.fn(),order:vi.fn(),limit:vi.fn(),maybeSingle:vi.fn().mockResolvedValue({data:null})};
    for(const name of ['select','eq','order','limit']) query[name].mockReturnValue(query);
    mocks.from.mockReturnValue(query);
    await expect(beginVerifiedLesson({packId:'montenegrin-en',packVersion:'0.1.0',lessonId:'voyage-1'})).rejects.toThrow('not been published');
    expect(mocks.rpc).not.toHaveBeenCalled();
  });
});
