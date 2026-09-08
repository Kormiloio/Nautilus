\set ON_ERROR_STOP on
begin;
create extension if not exists pgtap with schema extensions;
select extensions.plan(23);
insert into auth.users(id,aud,role,email,raw_app_meta_data,raw_user_meta_data)
values('61000000-0000-0000-0000-000000000001','authenticated','authenticated','practice@example.com','{}','{}');
insert into public.verified_lesson_catalog(id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises,topic_id)
values('62000000-0000-0000-0000-000000000001','montenegrin-en','0.1.0','practice:greetings:match',10000,'practice',1,
'[{"kind":"match","answer":{"a":"b"}}]','greetings'),
('62000000-0000-0000-0000-000000000002','montenegrin-en','0.1.0','practice:sentences:builder',10000,'practice',1,
'[{"kind":"sentence_builder","prompt":"I have two brothers.","tokens":["dva","Imam","brata."],"answer":["Imam","dva","brata."]}]','family'),
('62000000-0000-0000-0000-000000000003','montenegrin-en','0.1.0','practice:sentences:completion',10000,'practice',1,
'[{"kind":"sentence_completion","prompt":"I have two brothers.","displayTokens":["Imam","____","brata."],"blankIndex":1,"choices":["dva","tri"],"answer":"dva","completedSentence":["Imam","dva","brata."]}]','family');
set local role authenticated;
select set_config('request.jwt.claim.sub','61000000-0000-0000-0000-000000000001',true);
select public.create_family('Practice family') as family \gset
insert into public.learner_profiles(family_id,linked_user_id,display_name,created_by) values(:'family',auth.uid(),'Learner',auth.uid()) returning id as profile \gset
select public.begin_verified_attempt('62000000-0000-0000-0000-000000000001',:'profile')->>'id' as attempt \gset
select public.begin_verified_attempt('62000000-0000-0000-0000-000000000002',:'profile')->>'id' as sentence_attempt \gset
select public.begin_verified_attempt('62000000-0000-0000-0000-000000000003',:'profile')->>'id' as completion_attempt \gset
select extensions.ok(not (public.get_verified_attempt(:'sentence_attempt')->'exercises'->0 ? 'answer'),'sentence answer is hidden before feedback');
select extensions.throws_ok(format('select public.submit_verified_exercise(%L,0,%L::jsonb)',:'sentence_attempt','false'),
'P0001','Sentence builder needs an ordered token response','sentence builder rejects non-array responses');
select extensions.is(public.submit_verified_exercise(:'sentence_attempt',0,'["dva","Imam","brata."]')->>'correct','false','wrong sentence order is graded on the server');
select extensions.is(public.get_verified_attempt(:'sentence_attempt')->'receipts'->0->'correctAnswer','["Imam","dva","brata."]'::jsonb,'wrong sentence response receives the canonical order');
select public.begin_verified_attempt('62000000-0000-0000-0000-000000000002',:'profile')->>'id' as sentence_replay \gset
select extensions.is(public.submit_verified_exercise(:'sentence_replay',0,'["Imam","dva","brata."]')->>'correct','true','correct sentence order is graded on the server');
select extensions.ok(not (public.get_verified_attempt(:'completion_attempt')->'exercises'->0 ? 'answer'),'completion answer is hidden before feedback');
select extensions.ok(not (public.get_verified_attempt(:'completion_attempt')->'exercises'->0 ? 'completedSentence'),'completed sentence is hidden before feedback');
select extensions.throws_ok(format('select public.submit_verified_exercise(%L,0,%L::jsonb)',:'completion_attempt','["dva"]'),'P0001','Sentence completion needs one offered word','completion rejects array responses');
select extensions.throws_ok(format('select public.submit_verified_exercise(%L,0,%L::jsonb)',:'completion_attempt','"pet"'),'P0001','Answer is not an offered choice','completion rejects unoffered choices');
select extensions.is(public.submit_verified_exercise(:'completion_attempt',0,'"tri"')->>'correct','false','wrong completion is graded on the server');
select extensions.is(public.get_verified_attempt(:'completion_attempt')->'receipts'->0->'completedSentence','["Imam","dva","brata."]'::jsonb,'wrong completion reveals the authored sentence after feedback');
select public.begin_verified_attempt('62000000-0000-0000-0000-000000000003',:'profile')->>'id' as completion_replay \gset
select extensions.is(public.submit_verified_exercise(:'completion_replay',0,'"dva"')->>'correct','true','correct completion is graded on the server');
reset role;
select extensions.throws_ok($$insert into public.verified_lesson_catalog(pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises)
values('montenegrin-en','0.1.0','practice:bad:builder',1,'practice',1,'[{"kind":"sentence_builder","tokens":["A","B"],"answer":["A","C"]}]')$$,
'P0001','Sentence builder needs the same reviewed token set and ordered answer','catalog rejects mismatched sentence tokens');
set local role authenticated;
select set_config('request.jwt.claim.sub','61000000-0000-0000-0000-000000000001',true);
select extensions.is(public.get_verified_attempt(:'attempt')->>'mode','practice','practice is identified separately from voyage');
select extensions.is(public.submit_verified_exercise(:'attempt',0,'{"a":"wrong"}')->>'correct','false','wrong practice match rejected');
select extensions.is(public.submit_verified_exercise(:'attempt',0,'{"a":"b"}')->>'completed','true','correct practice completes');
select public.submit_verified_exercise(:'attempt',0,'{"a":"b"}');
select extensions.is((select stars from public.learner_language_progress where profile_id=:'profile'),1,'practice rewards are server-graded and retry-safe');
select public.begin_verified_attempt('62000000-0000-0000-0000-000000000001',:'profile')->>'id' as replay \gset
select public.submit_verified_exercise(:'replay',0,'{"a":"b"}');
select extensions.is((select stars from public.learner_language_progress where profile_id=:'profile'),1,'repeating practice cannot farm additional stars');
select extensions.is((select count(*)::integer from public.completed_lessons where profile_id=:'profile'),0,'practice does not advance voyage');
select extensions.is((select count(*)::integer from public.completed_topics where profile_id=:'profile' and topic_id='greetings'),1,'matching practice completes its topic');
select extensions.is((select count(*)::integer from public.activity_history where profile_id=:'profile'),1,'practice records activity');
select extensions.throws_ok('select exercises from public.verified_lesson_catalog','42501','permission denied for table verified_lesson_catalog','clients cannot read canonical answers');
select extensions.ok(not has_function_privilege('authenticated','public.start_family_play_unverified_internal(uuid,text,text,text,integer,date,text,uuid[])','EXECUTE'),'internal unverified startup is not client-callable');
select * from extensions.finish();
rollback;
