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
