import { beforeEach, describe, expect, it, vi } from 'vitest';

const { rpc, subscribe, removeChannel, on, channel } = vi.hoisted(() => {
  const rpcMock = vi.fn();
  const subscribeMock = vi.fn();
  const removeChannelMock = vi.fn();
  const onMock = vi.fn(() => ({ subscribe: subscribeMock }));
  const channelMock = vi.fn(() => ({ on: onMock }));
  return {
    rpc: rpcMock,
    subscribe: subscribeMock,
    removeChannel: removeChannelMock,
    on: onMock,
    channel: channelMock,
  };
});

vi.mock('../supabase-client.js', () => ({
  isConfigured: true,
  supabase: { rpc, channel, removeChannel },
}));

import {
  controlFamilyPlay,
  getFamilyProgressDashboard,
  getFamilyPlayState,
  startFamilyPlay,
  startFamilyReview,
  subscribeToFamilyPlay,
  touchFamilyPlay,
} from '../family-service.js';

describe('Family Play cloud service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    rpc.mockResolvedValue({ data: null, error: null });
    subscribe.mockReturnValue({});
  });

  it('starts a family session with an explicit local date and participants', async () => {
    rpc.mockResolvedValueOnce({ data: 'session-1', error: null });
    await expect(startFamilyPlay({
      familyId: 'family-1',
      packId: 'montenegrin-en',
      packVersion: '0.1.0',
      lessonId: 'voyage-1',
      voyageDay: 1,
      participantProfileIds: ['mia', 'jake'],
      date: new Date(2026, 7, 10, 22, 30),
      timezone: 'America/New_York',
    })).resolves.toBe('session-1');

    expect(rpc).toHaveBeenCalledWith('start_family_play', expect.objectContaining({
      target_local_date: '2026-08-10',
      target_voyage_day: 1,
      participant_profiles: ['mia', 'jake'],
    }));
  });

  it('returns an empty shared state without converting learner activity', async () => {
    rpc.mockResolvedValueOnce({ data: null, error: null });
    await expect(getFamilyPlayState('family-1', 'montenegrin-en')).resolves.toEqual({
      completedDays: 0, completedDates: [], activeSession: null,
    });
  });

  it('subscribes to session, participant, and verified-attempt changes', () => {
    const stop = subscribeToFamilyPlay('family-1', vi.fn());
    expect(channel).toHaveBeenCalledWith('family-play:family-1');
    expect(on).toHaveBeenCalledWith('postgres_changes', expect.objectContaining({
      table: 'family_voyage_sessions', filter: 'family_id=eq.family-1',
    }), expect.any(Function));
    expect(channel).toHaveBeenCalledWith('family-play-participants:family-1');
    expect(on).toHaveBeenCalledWith('postgres_changes', expect.objectContaining({
      table: 'family_voyage_participants',
    }), expect.any(Function));
    expect(channel).toHaveBeenCalledWith('family-play-verified:family-1');
    expect(on).toHaveBeenCalledWith('postgres_changes', expect.objectContaining({
      table: 'verified_lesson_attempts', filter: 'family_id=eq.family-1',
    }), expect.any(Function));
    stop();
    expect(removeChannel).toHaveBeenCalledTimes(3);
  });

  it('renews learner presence using the active session identity', async () => {
    rpc.mockResolvedValueOnce({ data: 'mia-profile', error: null });
    await expect(touchFamilyPlay('session-1')).resolves.toBe('mia-profile');
    expect(rpc).toHaveBeenCalledWith('touch_family_play', { target_session: 'session-1' });
  });
  it('keeps pause control and historical review on their authorized RPCs', async () => {
    await controlFamilyPlay('session-1', 'paused', 0);
    await startFamilyReview('completed-session-1', ['mia']);
    await getFamilyProgressDashboard('family-1', 'montenegrin-en');
    expect(rpc).toHaveBeenNthCalledWith(1, 'control_family_play', {
      target_session: 'session-1', requested_status: 'paused', requested_segment: 0,
    });
    expect(rpc).toHaveBeenNthCalledWith(2, 'start_family_review', {
      source_session: 'completed-session-1', participant_profiles: ['mia'],
    });
    expect(rpc).toHaveBeenNthCalledWith(3, 'get_family_progress_dashboard', {
      target_family: 'family-1', target_pack_id: 'montenegrin-en',
    });
  });
});
