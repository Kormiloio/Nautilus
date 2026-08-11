import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isConfigured = !!(supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('your-project-id'));

export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function signInWithGoogle() {
  if (!isConfigured) {
    alert('Supabase credentials are not configured in your environment variables. Please check the .env file.');
    return;
  }
  const returnUrl = new URL(`${window.location.origin}${window.location.pathname}`);
  const inviteToken = new URLSearchParams(window.location.search).get('invite');
  if (inviteToken) returnUrl.searchParams.set('invite', inviteToken);

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: returnUrl.toString()
    }
  });
  if (error) throw error;
}

export async function signOut() {
  if (!isConfigured) return;
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getSession() {
  if (!isConfigured) return null;
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) throw error;
  return session;
}

export function onAuthStateChange(callback) {
  if (!isConfigured) return () => {};
  const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    callback(event, session);
  });
  return () => subscription.unsubscribe();
}
