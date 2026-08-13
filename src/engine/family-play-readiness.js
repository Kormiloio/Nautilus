const CONNECTED_WINDOW_MS = 45_000;

export function getParticipantConnectionState(participant, now = new Date()) {
  if (!participant?.linked) return 'unlinked';
  if (participant.status === 'credited') return 'completed';
  if (!participant.lastSeenAt) return participant.status === 'joined' ? 'reconnecting' : 'waiting';
  const age = now.getTime() - new Date(participant.lastSeenAt).getTime();
  return age <= CONNECTED_WINDOW_MS ? 'connected' : 'reconnecting';
}

export function getFamilyPlayPreflight(learners, selectedIds = []) {
  const selected = learners.filter(learner => selectedIds.includes(learner.id));
  const unlinked = selected.filter(learner => !learner.linked);
  return {
    selectedCount: selected.length,
    linkedCount: selected.length - unlinked.length,
    unlinkedNames: unlinked.map(learner => learner.name),
    canStart: selected.length > 0 && unlinked.length === 0,
  };
}
