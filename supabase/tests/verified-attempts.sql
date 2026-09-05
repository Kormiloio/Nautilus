\set ON_ERROR_STOP on
begin;
create extension if not exists pgtap with schema extensions;
select extensions.plan(37);
insert into auth.users(id,aud,role,email,raw_app_meta_data,raw_user_meta_data) values
('51000000-0000-0000-0000-000000000001','authenticated','authenticated','verified-parent@example.com','{}','{}'),
('51000000-0000-0000-0000-000000000002','authenticated','authenticated','verified-kid@example.com','{}','{}'),
('51000000-0000-0000-0000-000000000003','authenticated','authenticated','verified-outsider@example.com','{}','{}');
insert into public.verified_lesson_catalog(id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises) values
('52000000-0000-0000-0000-000000000001','montenegrin-en','0.1.0','voyage-1',999,'individual',1,
'[{"kind":"quiz","prompt":"Hello","choices":["Zdravo","Ne"],"answer":"Zdravo"},{"kind":"match","answer":{"left1":"right2","left2":"right1"}},{"kind":"self_report","prompt":"Say the phrase aloud"}]'),
('52000000-0000-0000-0000-000000000002','montenegrin-en','0.1.0','voyage-2',999,'individual',2,
'[{"kind":"self_report","prompt":"Practice"}]'),
('52000000-0000-0000-0000-000000000003','montenegrin-en','0.1.0','voyage-1',999,'family',1,
'[{"kind":"quiz","prompt":"Hello","choices":["Zdravo","Ne"],"answer":"Zdravo"},{"kind":"self_report","prompt":"Say the phrase aloud"}]');
insert into public.verified_lesson_catalog(id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises) values
('52000000-0000-0000-0000-000000000004','montenegrin-en','0.1.0','voyage-1',998,'individual',1,
'[{"kind":"self_report","prompt":"Old revision"}]');
select extensions.throws_ok($$update public.verified_lesson_catalog set revision=2$$,'P0001','Publish a new immutable catalog revision','answer keys cannot change beneath a pinned attempt');
set local role authenticated;
select set_config('request.jwt.claim.sub','51000000-0000-0000-0000-000000000001',true);
select public.create_family('Verified family') as family \gset
insert into public.learner_profiles(family_id,linked_user_id,display_name,created_by)
values(:'family','51000000-0000-0000-0000-000000000002','Verified learner',auth.uid()) returning id as profile \gset
select extensions.throws_ok(format('select public.begin_verified_attempt(%L,%L)',
'52000000-0000-0000-0000-000000000001',:'profile'),'P0001','The linked learner account is required for individual credit','adult cannot claim an individual attempt for a linked learner');
reset role;
insert into public.family_memberships(family_id,user_id,role) values(:'family','51000000-0000-0000-0000-000000000002','learner');
set local role authenticated;
select set_config('request.jwt.claim.sub','51000000-0000-0000-0000-000000000002',true);
select extensions.throws_ok(format('select public.begin_verified_attempt(%L,%L)',
'52000000-0000-0000-0000-000000000004',:'profile'),'P0001','A newer verified lesson revision is required','superseded catalog revision cannot start');
select extensions.throws_ok(format('select public.begin_verified_attempt(%L,%L)',
'52000000-0000-0000-0000-000000000002',:'profile'),'P0001','Complete preceding voyage lessons first','future lesson cannot start before prerequisites');
select extensions.throws_ok(format('select public.begin_verified_attempt(%L,%L,null,%L)',
'52000000-0000-0000-0000-000000000001',:'profile','Not/AZone'),'P0001','Unknown timezone','invalid completion timezone rejected');
select public.begin_verified_attempt('52000000-0000-0000-0000-000000000001',:'profile')->>'id' as attempt \gset
select extensions.is(public.begin_verified_attempt('52000000-0000-0000-0000-000000000001',:'profile')->>'id',:'attempt','reconnect resumes the same active attempt');
select extensions.ok(not (public.get_verified_attempt(:'attempt')->'exercises'->0 ? 'answer'),'answer key is not sent in exercise definition');
select extensions.throws_ok(format('select public.submit_verified_exercise(%L,2,%L::jsonb)',:'attempt','true'),
'P0001','Finish the current exercise together first','cannot skip to final exercise');
select extensions.throws_ok(format('select public.submit_verified_exercise(%L,0,%L::jsonb)',:'attempt','"made up"'),
'P0001','Answer is not an offered choice','unoffered quiz answer rejected');
select extensions.is(public.submit_verified_exercise(:'attempt',0,'"Ne"')->>'correct','false','wrong answer is graded on the server');
select extensions.is(public.submit_verified_exercise(:'attempt',0,'"Ne"')->>'reward','0','wrong answer earns no reward');
select extensions.throws_ok(format('select public.submit_verified_exercise(%L,0,%L::jsonb)',:'attempt','"Zdravo"'),
'P0001','Answer is already locked','cannot replace a locked wrong quiz answer');
select extensions.is(public.submit_verified_exercise(:'attempt',1,'{"left1":"right1"}')->>'retry','true','wrong match stays open for retry');
select extensions.is(public.get_verified_attempt(:'attempt')->>'exerciseIndex','1','incorrect matching does not advance');
select extensions.is(public.submit_verified_exercise(:'attempt',1,'{"left2":"right1","left1":"right2"}')->>'correct','true','correct matching validates independent of JSON key ordering');
select extensions.is((select count(*)::integer from public.completed_lessons where profile_id=:'profile'),0,'no completion until every exercise has a receipt');
select extensions.throws_ok(format('select public.submit_verified_exercise(%L,2,%L::jsonb)',:'attempt','false'),
'P0001','Explicit self-report confirmation required','spoken stage requires explicit acknowledgement');
select extensions.is(public.submit_verified_exercise(:'attempt',2,'true')->>'completed','true','last required response completes the attempt');
select extensions.is(public.submit_verified_exercise(:'attempt',2,'true')->>'duplicate','true','completion retry is idempotent');
select extensions.is((select stars from public.learner_language_progress where profile_id=:'profile'),1,'server credits only the correct graded exercise');
select extensions.is((select count(*)::integer from public.activity_history where profile_id=:'profile' and local_date=current_date),1,'completion records server-derived activity day');
select extensions.is(public.get_verified_attempt(:'attempt')->'receipts'->2->>'evidence','self_reported','speech is labelled self-reported, not graded');
select extensions.throws_ok('insert into public.verified_exercise_receipts(attempt_id,user_id,exercise_index,answer,correct,reward,evidence_kind) values(gen_random_uuid(),auth.uid(),0,''true'',true,1,''graded'')',
'42501','permission denied for table verified_exercise_receipts','clients cannot forge receipts');
select extensions.lives_ok(format('select public.begin_verified_attempt(%L,%L)',
'52000000-0000-0000-0000-000000000002',:'profile'),'completed prerequisite unlocks the next lesson');
select set_config('request.jwt.claim.sub','51000000-0000-0000-0000-000000000003',true);
select extensions.throws_ok(format('select public.get_verified_attempt(%L)',:'attempt'),'P0001','Attempt participant access required','unrelated account cannot read attempt');
select extensions.throws_ok(format('select public.submit_verified_exercise(%L,0,%L::jsonb)',:'attempt','"Zdravo"'),'P0001','Attempt participant access required','unrelated account cannot submit answers');
select set_config('request.jwt.claim.sub','',true);
select extensions.throws_ok(format('select public.get_verified_attempt(%L)',:'attempt'),'P0001','Attempt participant access required','missing identity rejected');

-- Family: learner and adult both must finish every exercise; old RPCs cannot bypass.
select set_config('request.jwt.claim.sub','51000000-0000-0000-0000-000000000001',true);
select public.start_family_play(:'family','montenegrin-en','0.1.0','voyage-1',1,current_date,'UTC',array[:'profile'::uuid]) as family_session \gset
select public.begin_verified_attempt('52000000-0000-0000-0000-000000000003',null,:'family_session')->>'id' as family_attempt \gset
select extensions.throws_ok(format('select public.complete_family_play(%L)',:'family_session'),
'42501','permission denied for function complete_family_play','legacy completion cannot bypass verified receipts');
select extensions.throws_ok(format('select public.control_family_play(%L,%L,99)',:'family_session','live'),
'P0001','Verified sessions advance through exercise receipts','legacy segment jump blocked');
select extensions.is(public.submit_verified_exercise(:'family_attempt',0,'"Zdravo"')->>'correct','true','parent can submit own answer');
select extensions.throws_ok(format('select public.submit_verified_exercise(%L,1,%L::jsonb)',:'family_attempt','true'),
'P0001','Finish the current exercise together first','parent cannot run ahead of learner');
select set_config('request.jwt.claim.sub','51000000-0000-0000-0000-000000000002',true);
select extensions.is(public.submit_verified_exercise(:'family_attempt',0,'"Zdravo"')->>'correct','true','learner submits their own answer');
select extensions.is(public.submit_verified_exercise(:'family_attempt',1,'true')->>'completed','false','learner finishing alone does not complete family session');
select set_config('request.jwt.claim.sub','51000000-0000-0000-0000-000000000001',true);
select extensions.is(public.submit_verified_exercise(:'family_attempt',1,'true')->>'completed','true','last participant completes family session');
select extensions.is((select status::text from public.family_voyage_sessions where id=:'family_session'),'completed','family completion persisted');
select extensions.is(public.submit_verified_exercise(:'family_attempt',1,'true')->>'duplicate','true','family completion retry is harmless');
select extensions.is((select stars from public.learner_language_progress where profile_id=:'profile'),1,'replaying an already credited lesson does not farm stars');
select * from extensions.finish();
rollback;
