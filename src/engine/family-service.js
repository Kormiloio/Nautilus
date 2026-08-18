import { supabase, isConfigured } from './supabase-client.js';

function requireCloud() {
  if (!isConfigured || !supabase) {
    throw new Error('Family cloud features are not configured.');
  }
}

export async function listFamilies() {
  requireCloud();
  const { data, error } = await supabase
    .from('family_memberships')
    .select('family_id, role, joined_at, families(id, name, learners_can_invite)')
    .order('joined_at', { ascending: true });
  if (error) throw error;
  return data || [];
}

export async function getFamilyOverview(familyId) {
  requireCloud();
  const { data, error } = await supabase.rpc('get_family_overview', {
    target_family: familyId,
  });
  if (error) throw error;
  return data;
}

export async function createFamily(name) {
  requireCloud();
  const trimmed = name.trim();
  if (!trimmed) throw new Error('Family name is required.');
  const { data, error } = await supabase.rpc('create_family', { family_name: trimmed });
  if (error) throw error;
  return data;
}

export async function inviteFamilyMember(familyId, email, role = 'learner') {
  requireCloud();
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) throw new Error('Invitation email is required.');
  const { data, error } = await supabase.rpc('create_family_invitation', {
    target_family: familyId,
    invite_email: normalizedEmail,
    invite_role: role,
  });
  if (error) throw error;
  return data;
}

export async function inviteLearnerProfile(profileId, email) {
  requireCloud();
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) throw new Error('Learner email is required.');
  const { data, error } = await supabase.rpc('create_learner_profile_invitation', {
    target_profile: profileId,
    invite_email: normalizedEmail,
  });
  if (error) throw error;
  return data;
}

export async function linkFamilyLearnerAccount(profileId, email) {
  requireCloud();
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) throw new Error('Learner email is required.');
  const { data, error } = await supabase.rpc('link_family_learner_account', {
    target_profile: profileId,
    learner_email: normalizedEmail,
  });
  if (error) throw error;
  return data;
}

export async function acceptFamilyInvitation(token) {
  requireCloud();
  const { data, error } = await supabase.rpc('accept_family_invitation', {
    raw_token: token,
  });
  if (error) throw error;
  return data;
}

export async function setLearnerInvitationsEnabled(familyId, enabled) {
  requireCloud();
  const { error } = await supabase
    .from('families')
    .update({ learners_can_invite: Boolean(enabled), updated_at: new Date().toISOString() })
    .eq('id', familyId);
  if (error) throw error;
}

export async function listFamilyLanguages(familyId) {
  requireCloud();
  const { data, error } = await supabase
    .from('family_languages')
    .select('pack_id, pack_version, enabled_at, language_packs(*)')
    .eq('family_id', familyId);
  if (error) throw error;
  return data || [];
}

export async function listFamilyVariants(familyId, packId) {
  requireCloud();
  const { data, error } = await supabase
    .from('family_language_variants')
    .select('*')
    .eq('family_id', familyId)
    .eq('pack_id', packId)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return data || [];
}

export async function suggestFamilyVariant(variant) {
  requireCloud();
  const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
  if (sessionError) throw sessionError;
  const userId = sessionData.session?.user?.id;
  if (!userId) throw new Error('Authentication required.');

  const { data, error } = await supabase
    .from('family_language_variants')
    .insert({
      family_id: variant.familyId,
      pack_id: variant.packId,
      pack_version: variant.packVersion,
      kind: variant.kind,
      standard_item_id: variant.standardItemId || null,
      target_text: variant.targetText,
      support_text: variant.supportText,
      label: variant.label || 'family wording',
      preference: variant.preference || 'show_both',
      approval: 'pending',
      created_by: userId,
    })
    .select()
    .single();
  if (error) throw error;
  return data;
}

function isoLocalDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export async function getFamilyPlayState(familyId, packId) {
  requireCloud();
  const { data, error } = await supabase.rpc('get_family_play_state', {
    target_family: familyId,
    target_pack_id: packId,
  });
  if (error) throw error;
  return data || { completedDays: 0, completedDates: [], activeSession: null };
}

export async function startFamilyPlay({
  familyId,
  packId,
  packVersion,
  lessonId,
  voyageDay,
  participantProfileIds = [],
  date = new Date(),
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
}) {
  requireCloud();
  const { data, error } = await supabase.rpc('start_family_play', {
    target_family: familyId,
    target_pack_id: packId,
    target_pack_version: packVersion,
    target_lesson_id: lessonId,
    target_voyage_day: voyageDay,
    target_local_date: isoLocalDate(date),
    target_timezone: timezone,
    participant_profiles: participantProfileIds,
  });
  if (error) throw error;
  return data;
}

export async function controlFamilyPlay(sessionId, status, segment = null) {
  requireCloud();
  const { data, error } = await supabase.rpc('control_family_play', {
    target_session: sessionId,
    requested_status: status,
    requested_segment: segment,
  });
  if (error) throw error;
  return data;
}

export async function joinFamilyPlay(sessionId) {
  requireCloud();
  const { data, error } = await supabase.rpc('join_family_play', {
    target_session: sessionId,
  });
  if (error) throw error;
  return data;
}

export async function touchFamilyPlay(sessionId) {
  requireCloud();
  const { data, error } = await supabase.rpc('touch_family_play', { target_session: sessionId });
  if (error) throw error;
  return data;
}

export async function submitFamilyQuizAnswer(sessionId, segment, answerId) {
  requireCloud();
  const { data, error } = await supabase.rpc('submit_family_quiz_answer', {
    target_session: sessionId,
    target_segment: segment,
    selected_answer: answerId,
  });
  if (error) throw error;
  return data;
}

export async function completeFamilyPlay(sessionId) {
  requireCloud();
  const { data, error } = await supabase.rpc('complete_family_play', {
    target_session: sessionId,
  });
  if (error) throw error;
  return data;
}

export async function claimFamilyPlayController(sessionId) {
  requireCloud();
  const { data, error } = await supabase.rpc('claim_family_play_controller', { target_session: sessionId });
  if (error) throw error;
  return data;
}

export async function handoffFamilyPlayController(sessionId, nextAdultId) {
  requireCloud();
  const { data, error } = await supabase.rpc('handoff_family_play_controller', {
    target_session: sessionId,
    next_adult: nextAdultId,
  });
  if (error) throw error;
  return data;
}

export async function heartbeatFamilyPlay(sessionId) {
  requireCloud();
  const { data, error } = await supabase.rpc('heartbeat_family_play', { target_session: sessionId });
  if (error) throw error;
  return data;
}

export async function startFamilyReview(sourceSessionId, participantProfileIds) {
  requireCloud();
  const { data, error } = await supabase.rpc('start_family_review', {
    source_session: sourceSessionId,
    participant_profiles: participantProfileIds,
  });
  if (error) throw error;
  return data;
}

export async function getFamilyProgressDashboard(familyId, packId) {
  requireCloud();
  const { data, error } = await supabase.rpc('get_family_progress_dashboard', {
    target_family: familyId,
    target_pack_id: packId,
  });
  if (error) throw error;
  return data || { shared: { completedDays: 0, reviewSessions: 0 }, learners: [], history: [] };
}

export function subscribeToFamilyPlay(familyId, onChange) {
  requireCloud();
  const sessionChannel = supabase
    .channel(`family-play:${familyId}`)
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'family_voyage_sessions',
      filter: `family_id=eq.${familyId}`,
    }, onChange)
    .subscribe();
  // Participant readiness lives in a separate table. It cannot be filtered by
  // family_id because that table is keyed by session/profile, so RLS limits the
  // visible events and the state RPC performs the final family-scoped read.
  const participantChannel = supabase
    .channel(`family-play-participants:${familyId}`)
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'family_voyage_participants',
    }, onChange)
    .subscribe();
  const answerChannel = supabase
    .channel(`family-play-answers:${familyId}`)
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'family_quiz_answers',
    }, onChange)
    .subscribe();
  return () => {
    supabase.removeChannel(sessionChannel);
    supabase.removeChannel(participantChannel);
    supabase.removeChannel(answerChannel);
  };
}
