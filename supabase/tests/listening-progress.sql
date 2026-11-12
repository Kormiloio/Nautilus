\set ON_ERROR_STOP on
begin;
create extension if not exists pgtap with schema extensions;
select extensions.plan(9);
insert into auth.users(id,aud,role,email,raw_app_meta_data,raw_user_meta_data)
values('63000000-0000-0000-0000-000000000001','authenticated','authenticated','listening@example.com','{}','{}');
-- Shape matches scripts/export-verified-curriculum.mjs --mode=listening (revision 10+).
insert into public.verified_lesson_catalog(id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises,topic_id)
values('64000000-0000-0000-0000-000000000001','montenegrin-en','0.1.0','practice:voyage-40:listening',10000,'practice',1,
'[{"kind":"quiz","title":"Listen and choose the meaning","prompt":"What does this sentence mean?","audioText":"Ovo je mama.","languageTag":"cnr","choices":["This is mom.","Where is dad?","Here is water."],"answer":"This is mom."},
  {"kind":"sentence_builder","title":"Listen and build the sentence","prompt":"Put the words in the order you hear them.","audioText":"Gdje je tata?","languageTag":"cnr","writtenPrompt":"Where is dad?","tokens":["je","tata","gdje"],"answer":["gdje","je","tata"]}]','family');
set local role authenticated;
select set_config('request.jwt.claim.sub','63000000-0000-0000-0000-000000000001',true);
select public.create_family('Listening family') as family \gset
insert into public.learner_profiles(family_id,linked_user_id,display_name,created_by) values(:'family',auth.uid(),'Listener',auth.uid()) returning id as profile \gset
select public.begin_verified_attempt('64000000-0000-0000-0000-000000000001',:'profile')->>'id' as attempt \gset
select extensions.is(public.get_verified_attempt(:'attempt')->'exercises'->0->>'audioText','Ovo je mama.','audio text reaches the device for speech');
select extensions.ok(not (public.get_verified_attempt(:'attempt')->'exercises'->0 ? 'answer'),'meaning answer is hidden before feedback');
select extensions.ok(not (public.get_verified_attempt(:'attempt')->'exercises'->1 ? 'answer'),'word order answer is hidden before feedback');
select extensions.is(public.submit_verified_exercise(:'attempt',0,'"Where is dad?"')->>'correct','false','meaning is graded on the server');
select public.submit_verified_exercise(:'attempt',1,'["gdje","je","tata"]');
select extensions.is((select stars from public.learner_language_progress where profile_id=:'profile'),1,'each correct listening answer earns a star');
select extensions.is((select count(*)::integer from public.activity_history where profile_id=:'profile'),1,'listening counts as an active day');
select public.begin_verified_attempt('64000000-0000-0000-0000-000000000001',:'profile')->>'id' as replay \gset
select public.submit_verified_exercise(:'replay',0,'"This is mom."');
select public.submit_verified_exercise(:'replay',1,'["gdje","je","tata"]');
select extensions.is((select stars from public.learner_language_progress where profile_id=:'profile'),1,'replaying a listening set earns no more stars');
select extensions.is((select count(*)::integer from public.completed_lessons where profile_id=:'profile'),0,'listening never advances the voyage');
select extensions.is((select count(*)::integer from public.activity_history where profile_id=:'profile'),1,'a replay on the same day is still one active day');
select * from extensions.finish();
rollback;
