import { describe, it, expect, beforeEach, vi } from 'vitest';

// Stub localStorage globally before importing progress-store to avoid undefined reference crashes
const store = {};
const mockLocalStorage = {
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
  triggerSync,
  awardStars,
  completeVoyageLesson
} from '../progress-store.js';

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
    localStorage.clear();
    vi.clearAllMocks();

    // Setup online navigator mock
    vi.stubGlobal('navigator', { onLine: true });
  });

  it('should enqueue transaction to local queue when profile is a synced UUID', () => {
    // Inject a profile with a valid UUID
    const profiles = [{ id: 'db-profile-uuid', name: 'Lena', isGuide: false }];
    localStorage.setItem('mn_profiles', JSON.stringify(profiles));

    awardStars('Lena', 10);

    const queue = JSON.parse(localStorage.getItem('mn_sync_queue') || '[]');
    // awardStars also triggers recordActivity, so 2 transactions are queued
    expect(queue).toHaveLength(2);
    expect(queue[0].type).toBe('recordActivity');
    expect(queue[1].type).toBe('awardStars');
    expect(queue[1].profileId).toBe('db-profile-uuid');
    expect(queue[1].packId).toBe(ACTIVE_PACK_ID);
    expect(queue[1].packVersion).toBe(ACTIVE_PACK_VERSION);
    expect(queue[1].operationId).toBeTruthy();
    expect(queue[1].payload.stars).toBe(10);
  });

  it('should not enqueue transaction to local queue when profile is local-only', () => {
    const profiles = [{ id: 'local-Lena', name: 'Lena', isGuide: false }];
    localStorage.setItem('mn_profiles', JSON.stringify(profiles));

    awardStars('Lena', 10);

    const queue = JSON.parse(localStorage.getItem('mn_sync_queue') || '[]');
    expect(queue).toHaveLength(0); // local-only profiles are bypassed in cloud sync
  });

  it('should successfully drain the transaction queue when online and authenticated', async () => {
    const profiles = [{ id: 'db-profile-uuid', name: 'Lena', isGuide: false }];
    localStorage.setItem('mn_profiles', JSON.stringify(profiles));

    // Queue up transactions
    enqueueTransaction('db-profile-uuid', 'completeLesson', { name: 'Lena', lessonId: 'voyage-1' });
    expect(JSON.parse(localStorage.getItem('mn_sync_queue'))).toHaveLength(1);

    await triggerSync();

    // The queue should now be empty after syncing
    expect(JSON.parse(localStorage.getItem('mn_sync_queue'))).toHaveLength(0);
  });

  it('should preserve queue if navigator is offline', async () => {
    vi.stubGlobal('navigator', { onLine: false });

    const profiles = [{ id: 'db-profile-uuid', name: 'Lena', isGuide: false }];
    localStorage.setItem('mn_profiles', JSON.stringify(profiles));

    enqueueTransaction('db-profile-uuid', 'completeLesson', { name: 'Lena', lessonId: 'voyage-1' });
    expect(JSON.parse(localStorage.getItem('mn_sync_queue'))).toHaveLength(1);

    await triggerSync();

    // The queue should remain intact because navigator is offline
    expect(JSON.parse(localStorage.getItem('mn_sync_queue'))).toHaveLength(1);
  });
});
