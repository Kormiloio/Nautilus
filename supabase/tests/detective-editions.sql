-- Executed inside a rollback-only transaction by scripts/test-detective-editions.mjs.
create extension if not exists pgtap with schema extensions;
select extensions.plan(14);
insert into auth.users(id,aud,role,email,raw_app_meta_data,raw_user_meta_data)
values ('91000000-0000-0000-0000-000000000001','authenticated','authenticated','detective-parent@example.com','{}','{}'),
('91000000-0000-0000-0000-000000000002','authenticated','authenticated','detective-kid@example.com','{}','{}');
set local role authenticated;
select set_config('request.jwt.claim.sub','91000000-0000-0000-0000-000000000001',true);
select public.create_family('Detective test') as family \gset
insert into public.learner_profiles(family_id,linked_user_id,display_name,created_by)
values(:'family','91000000-0000-0000-0000-000000000002','Detective Kid',auth.uid()) returning id as kid \gset
reset role;
insert into public.family_memberships(family_id,user_id,role) values(:'family','91000000-0000-0000-0000-000000000002','learner');
insert into public.family_voyage_sessions(family_id,pack_id,pack_version,lesson_id,voyage_day,local_date,timezone,status,controlling_adult,is_review)
select :'family','montenegrin-en','0.1.0','voyage-'||n,n,current_date+n,'UTC','completed','91000000-0000-0000-0000-000000000001',false
from generate_series(1,40) n;
insert into public.family_side_quest_sessions(family_id,pack_id,pack_version,quest_id,milestone,controlling_adult)
values(:'family','montenegrin-en','0.1.0','false-friend-detective',10,'91000000-0000-0000-0000-000000000001') returning id as old_session \gset

-- APPLY_MIGRATION_HERE

select extensions.is((select cases->0->>'sentence' from public.family_side_quest_sessions where id=:'old_session'),
'Padao je grad cijelo popodne.','pre-existing session retains original cases');
update public.family_side_quest_sessions set status='cancelled' where id=:'old_session';
set local role authenticated;
select set_config('request.jwt.claim.sub','91000000-0000-0000-0000-000000000001',true);
select extensions.throws_ok(format('select public.start_family_side_quest(%L,%L,%L,%L,70,array[%L::uuid])',:'family','montenegrin-en','0.1.0','false-friend-detective',:'kid'),
'P0001','Complete more family lessons to unlock this case pack','future milestone stays locked');
select public.start_family_side_quest(:'family','montenegrin-en','0.1.0','false-friend-detective',40,array[:'kid'::uuid]) as session \gset
select extensions.is(public.get_family_side_quest_state(:'family','montenegrin-en')->'cases'->0->>'sentence',
'Ovaj grad ima veliki trg.','milestone 40 gets new cases');
select extensions.is(public.start_family_side_quest(:'family','montenegrin-en','0.1.0','false-friend-detective',10,array[:'kid'::uuid]),:'session'::uuid,'reconnect returns the active pinned session');
select public.submit_family_side_quest_answer(:'session',0,'city');
select extensions.throws_ok(format('select public.advance_family_side_quest(%L)',:'session'), 'P0001','Everyone must lock an answer first','cannot advance without all answers');
select set_config('request.jwt.claim.sub','91000000-0000-0000-0000-000000000002',true);
select extensions.is((select count(*)::integer from public.family_side_quest_answers where session_id=:'session'),0,'learner cannot read the adult answer before locking');
select extensions.is(public.get_family_side_quest_state(:'family','montenegrin-en')->>'allLocked','false','reveal waits for the learner');
select extensions.throws_ok(format('select public.start_family_side_quest(%L,%L,%L,%L,40,array[%L::uuid])',:'family','montenegrin-en','0.1.0','false-friend-detective',:'kid'),
'P0001','Adult family access required','learner cannot create or claim controller');
select public.submit_family_side_quest_answer(:'session',0,'hail');
select extensions.is(public.get_family_side_quest_state(:'family','montenegrin-en')->>'allLocked','true','both answers unlock reveal');
select extensions.throws_ok(format('select public.submit_family_side_quest_answer(%L,0,%L)',:'session','city'), 'P0001','Your answer is already locked','answer cannot be changed');
select set_config('request.jwt.claim.sub','91000000-0000-0000-0000-000000000001',true);
select public.advance_family_side_quest(:'session');
select extensions.throws_ok(format('select public.submit_family_side_quest_answer(%L,1,%L)',:'session','hair'), 'P0001','Invalid answer','old case choices rejected for the new pack');
select public.submit_family_side_quest_answer(:'session',1,'leaf');
select set_config('request.jwt.claim.sub','91000000-0000-0000-0000-000000000002',true);
select public.submit_family_side_quest_answer(:'session',1,'sheet');
select set_config('request.jwt.claim.sub','91000000-0000-0000-0000-000000000001',true);
select public.advance_family_side_quest(:'session');
select public.submit_family_side_quest_answer(:'session',2,'onion');
select set_config('request.jwt.claim.sub','91000000-0000-0000-0000-000000000002',true);
select public.submit_family_side_quest_answer(:'session',2,'bow');
select set_config('request.jwt.claim.sub','91000000-0000-0000-0000-000000000001',true);
select public.advance_family_side_quest(:'session');
select extensions.is(public.get_family_side_quest_state(:'family','montenegrin-en')->>'status','completed','new pack completes after all three cases');
reset role;
select extensions.is(jsonb_array_length(public.detective_cases_for_milestone(190)),3,'last course milestone has three cases');
select extensions.ok(not has_function_privilege('authenticated','public.detective_cases_for_milestone(integer)','EXECUTE'),'catalog helper is not client callable');
select * from extensions.finish();
