import { describe, it, expect, beforeEach, vi } from 'vitest';

// Stub localStorage globally before importing progress-store to avoid undefined reference crashes
const store = {};
const mockLocalStorage = {
  get length() { return Object.keys(store).length; },
  key: index => Object.keys(store)[index] ?? null,
  getItem: vi.fn((key) => store[key] || null),
  setItem: vi.fn((key, value) => { store[key] = String(value); }),
  removeItem: vi.fn((key) => { delete store[key]; }),
  clear: vi.fn(() => { Object.keys(store).forEach(key => delete store[key]); })
};
vi.stubGlobal('localStorage', mockLocalStorage);

import {
  ACTIVE_PACK_ID,
  ACTIVE_PACK_VERSION,
  enqueueTransaction,
  getPendingProgressTransactions,
  triggerSync,
  awardStars,
  completeVoyageLesson,
  getProfiles,
  loadProfileData,
  setActiveProgressPack,
} from '../progress-store.js';
import { setActiveLanguagePack } from '../learning-engine.js';

// Mock the supabase client module
vi.mock('../supabase-client.js', () => {
  return {
    isConfigured: true,
    supabase: {
      auth: {
        getSession: vi.fn().mockResolvedValue({
          data: { session: { user: { id: 'mock-user-123' } } }
        })
      },
      rpc: vi.fn().mockResolvedValue({ error: null }),
      from: vi.fn().mockReturnValue({
        upsert: vi.fn().mockResolvedValue({ error: null }),
        update: vi.fn().mockReturnValue({
          eq: vi.fn().mockResolvedValue({ error: null })
        }),
        insert: vi.fn().mockResolvedValue({ error: null })
      })
    }
  };
});

describe('Offline Sync Queue', () => {
  beforeEach(() => {
    setActiveLanguagePack('montenegrin-en');
    setActiveProgressPack();
    localStorage.clear();
    vi.clearAllMocks();

    // Setup online navigator mock
    vi.stubGlobal('navigator', { onLine: true });
  });

  it('does not fabricate cloud progress through old reward helpers',()=>{
    localStorage.setItem('mn_profiles',JSON.stringify([{id:'db-profile-uuid',name:'Lena',isGuide:false}]));
    awardStars('Lena',10);completeVoyageLesson('Lena','voyage-199');
    expect(getPendingProgressTransactions()).toEqual([]);
    expect(loadProfileData('Lena').stars).toBe(0);
    expect(loadProfileData('Lena').completedLessons).toEqual([]);
  });
  it('should not enqueue transaction to local queue when profile is local-only', () => {
    const profiles = [{ id: 'local-Lena', name: 'Lena', isGuide: false }];
    localStorage.setItem('mn_profiles', JSON.stringify(profiles));

    awardStars('Lena', 10);

    const queue = getPendingProgressTransactions();
    expect(queue).toHaveLength(0); // local-only profiles are bypassed in cloud sync
  });

  it('should successfully drain the transaction queue when online and authenticated', async () => {
    const profiles = [{ id: 'db-profile-uuid', name: 'Lena', isGuide: false }];
    localStorage.setItem('mn_profiles', JSON.stringify(profiles));

    // Queue up transactions
    enqueueTransaction('db-profile-uuid', 'completeLesson', { name: 'Lena', lessonId: 'voyage-1' });
    expect(getPendingProgressTransactions()).toHaveLength(1);

    await triggerSync();

    // The queue should now be empty after syncing
    expect(getPendingProgressTransactions()).toHaveLength(0);
  });

  it('should preserve queue if navigator is offline', async () => {
    vi.stubGlobal('navigator', { onLine: false });

    const profiles = [{ id: 'db-profile-uuid', name: 'Lena', isGuide: false }];
    localStorage.setItem('mn_profiles', JSON.stringify(profiles));

    enqueueTransaction('db-profile-uuid', 'completeLesson', { name: 'Lena', lessonId: 'voyage-1' });
    expect(getPendingProgressTransactions()).toHaveLength(1);

    await triggerSync();

    // The queue should remain intact because navigator is offline
    expect(getPendingProgressTransactions()).toHaveLength(1);
  });

  it('should isolate learner progress by selected language pack', () => {
    const profiles = [{ id: 'local-Lena', name: 'Lena', isGuide: false }];
    localStorage.setItem('mn_profiles', JSON.stringify(profiles));

    awardStars('Lena', 5);
    expect(loadProfileData('Lena').stars).toBe(5);

    setActiveLanguagePack('albanian-en');
    setActiveProgressPack();
    expect(loadProfileData('Lena').stars).toBe(0);
    awardStars('Lena', 3);
    expect(loadProfileData('Lena').stars).toBe(3);

    setActiveLanguagePack('montenegrin-en');
    setActiveProgressPack();
    expect(loadProfileData('Lena').stars).toBe(5);
  });

  it('should normalize legacy cloud profiles that were cached as guides', () => {
    localStorage.setItem('mn_profiles', JSON.stringify([
      { id: 'db-profile-uuid', name: 'Lena', isGuide: true },
    ]));
    expect(getProfiles()[0].isGuide).toBe(false);
  });
});
