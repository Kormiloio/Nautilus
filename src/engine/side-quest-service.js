import { supabase, isConfigured } from './supabase-client.js';

function requireCloud() {
  if (!isConfigured || !supabase) throw new Error('Connected Family Play is required for a family side quest.');
}

export async function getFamilySideQuestState(familyId, packId) {
  requireCloud();
  const { data, error } = await supabase.rpc('get_family_side_quest_state', { target_family: familyId, target_pack_id: packId });
  if (error) throw error;
  return data || null;
}

export async function startFamilySideQuest({ familyId, packId, packVersion, questId, milestone, participantProfileIds }) {
  requireCloud();
  const { data, error } = await supabase.rpc('start_family_side_quest', {
    target_family: familyId, target_pack_id: packId, target_pack_version: packVersion,
    target_quest_id: questId, target_milestone: milestone, participant_profiles: participantProfileIds,
  });
  if (error) throw error;
  return data;
}

export async function submitFamilySideQuestAnswer(sessionId, caseIndex, answerId) {
  requireCloud();
  const { error } = await supabase.rpc('submit_family_side_quest_answer', {
    target_session: sessionId, target_case: caseIndex, selected_answer: answerId,
  });
  if (error) throw error;
}

export async function advanceFamilySideQuest(sessionId) {
  requireCloud();
  const { error } = await supabase.rpc('advance_family_side_quest', { target_session: sessionId });
  if (error) throw error;
}

export function subscribeToFamilySideQuest(familyId, onChange) {
  requireCloud();
  const sessions = supabase.channel(`family-side-quest:${familyId}`).on('postgres_changes', {
    event: '*', schema: 'public', table: 'family_side_quest_sessions', filter: `family_id=eq.${familyId}`,
  }, onChange).subscribe();
  const answers = supabase.channel(`family-side-quest-answers:${familyId}`).on('postgres_changes', {
    event: '*', schema: 'public', table: 'family_side_quest_answers',
  }, onChange).subscribe();
  return () => { supabase.removeChannel(sessions); supabase.removeChannel(answers); };
}
