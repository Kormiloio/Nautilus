import { beforeEach, describe, expect, it, vi } from 'vitest';
import fs from 'node:fs';
import vm from 'node:vm';

const mocks = vi.hoisted(() => ({ from: vi.fn(), rpc: vi.fn(), getSession: vi.fn() }));
vi.mock('../supabase-client.js', () => ({
  isConfigured: true,
  supabase: { rpc: mocks.rpc, from: mocks.from, auth: { getSession: mocks.getSession } },
}));
import { enqueueTransaction, triggerSync, getPendingProgressTransactions, getSyncRecoveryItems, loadProfileData, setActiveProgressPack } from '../progress-store.js';
import { listFamilies } from '../family-service.js';
import { setActiveLanguagePack } from '../learning-engine.js';
import { renderProfilePill } from '../../components/dashboard.js';

const values = new Map();
beforeEach(async () => {
  await triggerSync();
  values.clear();
  vi.stubGlobal('localStorage', {
    get length() { return values.size; },
    key: index => [...values.keys()][index] ?? null,
    removeItem: key => values.delete(key),
    getItem: key => values.get(key) ?? null,
    setItem: (key,value) => values.set(key,String(value)),
  });
  vi.stubGlobal('navigator', { onLine: true });
  mocks.getSession.mockResolvedValue({data:{session:{user:{id:'current-user'}}}});
  mocks.from.mockReset();
  mocks.rpc.mockReset();
  setActiveLanguagePack('montenegrin-en');
  setActiveProgressPack();
});

describe('Code review regressions', () => {
  it('preserves every legacy credit operation without calling revoked APIs',async()=>{
    for(const type of ['awardStars','incrementDialogues','completeLesson','completeTopic','recordActivity'])
      enqueueTransaction('profile-1',type,{legacy:true});
    await triggerSync();
    expect(getPendingProgressTransactions()).toEqual([]);
    expect(getSyncRecoveryItems()).toHaveLength(5);
    expect(getSyncRecoveryItems().every(tx=>tx.reason==='unverified_legacy_progress')).toBe(true);
    expect(mocks.rpc).not.toHaveBeenCalled();
    expect(mocks.from).not.toHaveBeenCalled();
  });
  it('keeps independently stored actions from another tab during legacy recovery',async()=>{
    let release;
    mocks.getSession.mockReturnValueOnce(new Promise(resolve=>{release=resolve;}));
    enqueueTransaction('profile-1','completeLesson',{lessonId:'voyage-1'});
    values.set('nautilus:sync-operation:other-tab',JSON.stringify({operationId:'other-tab',profileId:'profile-1',type:'awardStars',payload:{delta:1},timestamp:Date.now()}));
    release({data:{session:{user:{id:'current-user'}}}});
    await triggerSync();
    expect(getSyncRecoveryItems()).toHaveLength(2);
    expect(getPendingProgressTransactions()).toEqual([]);
  });
  it('filters membership by the current account and prioritizes the selected workspace', async () => {
    const order = vi.fn().mockResolvedValue({data:[{family_id:'a',role:'learner'},{family_id:'b',role:'owner'}],error:null});
    const eq = vi.fn(() => ({order}));
    mocks.from.mockReturnValue({select:vi.fn(() => ({eq}))});
    values.set('nautilus:family:current-user','b');
    expect((await listFamilies()).map(f => f.family_id)).toEqual(['b','a']);
    expect(eq).toHaveBeenCalledWith('user_id','current-user');
  });

  it('does not import legacy Montenegrin progress into another pack', () => {
    values.set('mn_Lena_stars','80');
    setActiveLanguagePack('albanian-en');
    setActiveProgressPack();
    expect(loadProfileData('Lena').stars).toBe(0);
  });

  it('escapes profile names in text and attributes', () => {
    const html = renderProfilePill({name:'"><img src=x onerror=alert(1)>'}, 'Lena');
    expect(html).not.toContain('<img');
    expect(html).toContain('&quot;&gt;&lt;img');
  });

  it('does not starve the controller heartbeat during five-second refreshes', () => {
    vi.useFakeTimers();
    try {
      const main = fs.readFileSync(new URL('../../main.js', import.meta.url),'utf8');
      const start = main.indexOf('function syncFamilyHeartbeat()');
      const end = main.indexOf('async function maintainLearnerPresence()',start);
      const heartbeat = vi.fn().mockResolvedValue(null);
      const context = {
        state:{screen:'family-play',sessionUser:{id:'adult'},familyPlayState:{activeSession:{id:'session',controllingAdult:'adult'}}},
        familyHeartbeatTimer:null, familyHeartbeatSessionId:null,
        heartbeatFamilyPlay:heartbeat, setInterval, clearInterval,
      };
      vm.createContext(context);
      vm.runInContext(main.slice(start,end),context);
      context.syncFamilyHeartbeat();
      for(let i=0;i<10;i++) { vi.advanceTimersByTime(5000); context.syncFamilyHeartbeat(); }
      expect(heartbeat).toHaveBeenCalledTimes(1);
      expect(heartbeat).toHaveBeenCalledWith('session');
      context.state.screen='dashboard';
      context.syncFamilyHeartbeat();
      vi.advanceTimersByTime(50000);
      expect(heartbeat).toHaveBeenCalledTimes(1);
    } finally { vi.useRealTimers(); }
  });

  it('refreshes completion on follower devices when the active session disappears', async () => {
    const main = fs.readFileSync(new URL('../../main.js', import.meta.url),'utf8');
    const start = main.indexOf('async function loadFamilyPlayState()');
    const end = main.indexOf('let familyHeartbeatTimer',start);
    const complete = vi.fn().mockResolvedValue(null);
    const context = {
      state:{families:[{family_id:'family'}],sessionUser:{id:'child'},activePackId:'montenegrin-en',familyPlayState:{activeSession:{id:'session'}}},
      getFamilyPlayState:vi.fn().mockResolvedValue({activeSession:null}),
      getFamilySessionStatus:vi.fn().mockResolvedValue('completed'),
      handleFamilyCompletion:complete,
    };
    vm.createContext(context);
    vm.runInContext(main.slice(start,end),context);
    await context.loadFamilyPlayState();
    expect(complete).toHaveBeenCalledWith('session');
    context.state.familyPlayState={activeSession:{id:'cancelled'}};
    context.getFamilySessionStatus.mockResolvedValue('cancelled');
    await context.loadFamilyPlayState();
    expect(complete).toHaveBeenCalledTimes(1);
  });

  it('keeps a tracked foundation snapshot identical to the original schema', () => {
    const root = new URL('../../../', import.meta.url);
    expect(fs.readFileSync(new URL('supabase/migrations/20260810000000_nautilus_foundation.sql',root),'utf8'))
      .toBe(fs.readFileSync(new URL('supabase/migration.sql',root),'utf8'));
  });
});
