import { supabase, isConfigured } from './supabase-client.js';

function requireCloud() {
  if (!isConfigured || !supabase) {
    throw new Error('Platform administration requires a active family cloud connection.');
  }
}

export async function isPlatformAdmin() {
  if (!isConfigured || !supabase) return false;
  const { data: auth } = await supabase.auth.getSession();
  if (!auth?.session) return false;
  const { data, error } = await supabase.rpc('is_platform_admin');
  if (error) return false;
  return Boolean(data);
}

export async function getPlatformAdminMetrics() {
  requireCloud();
  const { data, error } = await supabase.rpc('get_platform_admin_metrics');
  if (error) throw error;
  return data;
}

export async function grantPlatformSupportAccess(targetFamilyId, reason) {
  requireCloud();
  const { data, error } = await supabase.rpc('grant_platform_support_access', {
    target_family: targetFamilyId,
    reason: reason,
  });
  if (error) throw error;
  return data;
}
