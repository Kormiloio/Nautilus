import { supabase, isConfigured } from './supabase-client.js';
function requireCloud() {
  if (!isConfigured || !supabase) throw new Error('Verified lessons require a connection to your family account.');
}
async function rpc(name,args) {
  requireCloud();
  const {data,error}=await supabase.rpc(name,args);
  if(error) throw error;
  return data;
}
export async function beginVerifiedLesson({packId,packVersion,lessonId,profileId=null,familySessionId=null,timezone=Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC'}) {
  requireCloud();
  const {data,error}=await supabase.from('verified_lesson_catalog')
    .select('id,revision').eq('pack_id',packId).eq('pack_version',packVersion)
    .eq('lesson_id',lessonId).eq('mode',familySessionId ? 'family' : lessonId.startsWith('practice:') ? 'practice' : 'individual')
    .order('revision',{ascending:false}).limit(1).maybeSingle();
  if(error) throw error;
  if(!data) throw new Error('This lesson has not been published for verified play yet.');
  return rpc('begin_verified_attempt',{target_catalog:data.id,target_profile:profileId,
    target_family_session:familySessionId,requested_timezone:timezone});
}
export const getVerifiedAttempt=id=>rpc('get_verified_attempt',{target_attempt:id});
// No caller-supplied points, dates, completion flags, or answer keys.
export const submitVerifiedExercise=(id,index,response)=>rpc('submit_verified_exercise',{
  target_attempt:id,target_index:index,response,
});

export const getVerifiedFamilyAttempt=id=>rpc('get_verified_family_attempt',{target_session:id});
