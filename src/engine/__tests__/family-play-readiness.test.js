import { describe, expect, it } from 'vitest';
import { getFamilyPlayPreflight, getParticipantConnectionState } from '../family-play-readiness.js';

describe('Family Play readiness', () => {
  const now = new Date('2026-08-12T16:00:00Z');

  it('distinguishes connected learners from stale reconnecting devices', () => {
    expect(getParticipantConnectionState({ linked: true, status: 'joined', lastSeenAt: '2026-08-12T15:59:40Z' }, now)).toBe('connected');
    expect(getParticipantConnectionState({ linked: true, status: 'joined', lastSeenAt: '2026-08-12T15:58:00Z' }, now)).toBe('reconnecting');
    expect(getParticipantConnectionState({ linked: false, status: 'invited' }, now)).toBe('unlinked');
  });

  it('requires every selected learner to have a linked Google account', () => {
    const learners = [{ id: 'mia', name: 'Lena', linked: true }, { id: 'jake', name: 'Sam', linked: false }];
    expect(getFamilyPlayPreflight(learners, ['mia'])).toMatchObject({ canStart: true, selectedCount: 1 });
    expect(getFamilyPlayPreflight(learners, ['mia', 'jake'])).toMatchObject({ canStart: false, unlinkedNames: ['Sam'] });
  });
});
