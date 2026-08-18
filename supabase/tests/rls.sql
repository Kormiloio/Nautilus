\set ON_ERROR_STOP on

begin;

create extension if not exists pgtap with schema extensions;
select extensions.plan(34);

insert into auth.users (
  instance_id, id, aud, role, email, encrypted_password,
  email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
  created_at, updated_at
)
values
  ('00000000-0000-0000-0000-000000000000', '10000000-0000-0000-0000-000000000001', 'authenticated', 'authenticated', 'parent-a@example.com', '', now(), '{"provider":"google","providers":["google"]}', '{"full_name":"Parent A"}', now(), now()),
  ('00000000-0000-0000-0000-000000000000', '10000000-0000-0000-0000-000000000002', 'authenticated', 'authenticated', 'kid-a@example.com', '', now(), '{"provider":"google","providers":["google"]}', '{"full_name":"Kid A"}', now(), now()),
  ('00000000-0000-0000-0000-000000000000', '10000000-0000-0000-0000-000000000003', 'authenticated', 'authenticated', 'friend@example.com', '', now(), '{"provider":"google","providers":["google"]}', '{"full_name":"Friend"}', now(), now()),
  ('00000000-0000-0000-0000-000000000000', '20000000-0000-0000-0000-000000000001', 'authenticated', 'authenticated', 'parent-b@example.com', '', now(), '{"provider":"google","providers":["google"]}', '{"full_name":"Parent B"}', now(), now()),
  ('00000000-0000-0000-0000-000000000000', '10000000-0000-0000-0000-000000000004', 'authenticated', 'authenticated', 'mia@example.com', '', now(), '{"provider":"google","providers":["google"]}', '{"full_name":"Lena"}', now(), now());

set local role authenticated;
select set_config('request.jwt.claim.sub', '10000000-0000-0000-0000-000000000001', true);
select set_config('request.jwt.claims', '{"sub":"10000000-0000-0000-0000-000000000001","email":"parent-a@example.com","role":"authenticated"}', true);
select public.create_family('Family A') as family_a \gset
select set_config('test.family_a', :'family_a', true);

select extensions.ok(
  (select role = 'owner' from public.family_memberships where family_id = :'family_a' and user_id = auth.uid()),
  'family creator must become owner'
);

select extensions.ok(
  exists(select 1 from public.family_languages where family_id = :'family_a' and pack_id = 'albanian-en'),
  'new family must have Albanian enabled'
);

select public.create_family_invitation(:'family_a', 'partner@example.com', 'adult_guide');
select public.create_family_invitation(:'family_a', 'partner@example.com', 'adult_guide');
select extensions.is(
  (select count(*)::integer from public.family_invitations where family_id = :'family_a' and email = 'partner@example.com' and status = 'pending'),
  1,
  're-inviting an email must replace the prior pending invitation'
);

select extensions.is(
  public.get_family_overview(:'family_a') -> 'family' ->> 'name',
  'Family A',
  'adult owner can load the family overview'
);

insert into public.learner_profiles (family_id, linked_user_id, display_name, created_by)
values (:'family_a', '10000000-0000-0000-0000-000000000002', 'Kid A', auth.uid())
returning id as kid_profile \gset
select set_config('test.kid_profile', :'kid_profile', true);

select public.create_family_invitation(:'family_a', 'kid-a@example.com', 'learner') as kid_token \gset

reset role;
set local role authenticated;
select set_config('request.jwt.claim.sub', '10000000-0000-0000-0000-000000000002', true);
select set_config('request.jwt.claims', '{"sub":"10000000-0000-0000-0000-000000000002","email":"kid-a@example.com","role":"authenticated"}', true);
select public.accept_family_invitation(:'kid_token') as accepted_family \gset
select extensions.ok(:'accepted_family'::uuid = :'family_a'::uuid, 'learner must join invited family');

select public.create_family_invitation(:'family_a', 'friend@example.com', 'learner') as friend_token \gset

do $$
begin
  perform public.create_family_invitation(
    current_setting('test.family_a')::uuid,
    'escalation@example.com',
    'adult_guide'
  );
  raise exception 'ASSERTION FAILED: learner created adult invitation';
exception
  when others then
    if sqlerrm = 'ASSERTION FAILED: learner created adult invitation' then raise; end if;
end;
$$;
select extensions.pass('learner cannot create an adult invitation');

insert into public.learner_language_progress
  (profile_id, pack_id, pack_version, stars, dialogues_done)
values (:'kid_profile', 'montenegrin-en', '0.1.0', 5, 1);

select extensions.ok(
  (select stars = 5 from public.learner_language_progress where profile_id = :'kid_profile'),
  'linked learner must access own progress'
);

insert into public.family_language_variants (
  family_id, pack_id, pack_version, kind, standard_item_id,
  target_text, support_text, approval, created_by
)
values (
  :'family_a', 'montenegrin-en', '0.1.0', 'alternative', 'family-item-006',
  'dida', 'grandpa', 'pending', auth.uid()
)
returning id as variant_id \gset

do $$
begin
  insert into public.family_language_variants (
    family_id, pack_id, pack_version, kind, standard_item_id,
    target_text, support_text, approval, created_by
  ) values (
    current_setting('test.family_a')::uuid, 'montenegrin-en', '0.1.0', 'alternative', 'family-item-006',
    'dido', 'grandpa', 'approved', auth.uid()
  );
  raise exception 'ASSERTION FAILED: learner self-approved family variant';
exception
  when others then
    if sqlerrm = 'ASSERTION FAILED: learner self-approved family variant' then raise; end if;
end;
$$;
select extensions.pass('learner cannot self-approve a family variant');

reset role;
set local role authenticated;
select set_config('request.jwt.claim.sub', '10000000-0000-0000-0000-000000000003', true);
select set_config('request.jwt.claims', '{"sub":"10000000-0000-0000-0000-000000000003","email":"friend@example.com","role":"authenticated"}', true);
select public.accept_family_invitation(:'friend_token');

select extensions.ok(
  (select count(*) = 0 from public.learner_profiles where id = :'kid_profile'),
  'learner must not read another learner profile'
);

reset role;
set local role authenticated;
select set_config('request.jwt.claim.sub', '10000000-0000-0000-0000-000000000001', true);
select set_config('request.jwt.claims', '{"sub":"10000000-0000-0000-0000-000000000001","email":"parent-a@example.com","role":"authenticated"}', true);

update public.family_language_variants
set approval = 'approved', approved_by = auth.uid(), updated_at = now()
where id = :'variant_id';

select extensions.ok(
  (select approval = 'approved' from public.family_language_variants where id = :'variant_id'),
  'owner must approve family variant'
);

select public.start_family_play(
  :'family_a', 'montenegrin-en', '0.1.0', 'voyage-1', 1,
  '2026-08-10', 'America/New_York', array[:'kid_profile'::uuid]
) as family_session \gset

select extensions.ok(
  exists(
    select 1 from public.family_voyage_sessions
    where id = :'family_session' and status = 'live' and voyage_day = 1
  ),
  'adult starts the next family voyage day'
);

select extensions.ok(
  exists(
    select 1 from public.family_voyage_participants
    where session_id = :'family_session' and profile_id = :'kid_profile'
  ),
  'selected learner is added to the shared session'
);

insert into public.completed_lessons
  (profile_id, pack_id, pack_version, lesson_id, operation_id)
values
  (:'kid_profile', 'montenegrin-en', '0.1.0', 'voyage-1', gen_random_uuid());

select extensions.is(
  (public.get_family_play_state(:'family_a', 'montenegrin-en') ->> 'completedDays')::integer,
  0,
  'independent lesson completion does not move family progress'
);

reset role;
set local role authenticated;
select set_config('request.jwt.claim.sub', '10000000-0000-0000-0000-000000000002', true);
select set_config('request.jwt.claims', '{"sub":"10000000-0000-0000-0000-000000000002","email":"kid-a@example.com","role":"authenticated"}', true);
select public.touch_family_play(:'family_session');
select extensions.ok(
  exists(select 1 from public.family_voyage_participants where session_id=:'family_session' and profile_id=:'kid_profile' and status='joined' and last_seen_at is not null),
  'linked learner joins and records live device presence'
);
select extensions.ok(
  (public.get_family_play_state(:'family_a','montenegrin-en')->'activeSession'->'participants'->0->>'isCurrentUser')::boolean,
  'shared state identifies the learner attached to the current Google account'
);
select public.submit_family_quiz_answer(:'family_session', 0, 'learner-answer');
select extensions.is(
  (select count(*) from public.family_quiz_answers where session_id=:'family_session' and segment=0),
  1::bigint,
  'learner locks one durable quiz answer'
);
select public.submit_family_quiz_answer(:'family_session', 0, 'changed-answer');
select extensions.is(
  (select answer_id from public.family_quiz_answers where session_id=:'family_session' and segment=0 and user_id=auth.uid()),
  'learner-answer',
  'a locked quiz answer cannot be changed by repeated taps'
);

reset role;
set local role authenticated;
select set_config('request.jwt.claim.sub', '10000000-0000-0000-0000-000000000001', true);
select set_config('request.jwt.claims', '{"sub":"10000000-0000-0000-0000-000000000001","email":"parent-a@example.com","role":"authenticated"}', true);

select public.submit_family_quiz_answer(:'family_session', 0, 'parent-answer');
select extensions.is(
  (select current_segment from public.family_voyage_sessions where id=:'family_session'),
  1,
  'the last required answer advances the shared quiz atomically'
);
select extensions.is(
  jsonb_array_length(public.get_family_play_state(:'family_a','montenegrin-en')->'activeSession'->'quizAnswers'),
  0,
  'the next segment starts with a clean answer roster'
);

select public.control_family_play(:'family_session', 'live', 3);
select extensions.is(
  (select current_segment from public.family_voyage_sessions where id = :'family_session'),
  3,
  'controlling adult advances the shared segment'
);

select public.claim_family_play_controller(:'family_session');
select extensions.ok(
  exists(select 1 from public.family_controller_events where session_id=:'family_session' and reason='reconnect'),
  'controlling adult can recover the controller lease after reconnecting'
);

select public.complete_family_play(:'family_session');
select extensions.is(
  (public.get_family_play_state(:'family_a', 'montenegrin-en') ->> 'completedDays')::integer,
  1,
  'explicit adult completion advances exactly one family day'
);

select extensions.ok(
  exists(
    select 1 from public.family_voyage_participants
    where session_id = :'family_session'
      and profile_id = :'kid_profile'
      and status = 'credited'
  ),
  'participants receive shared-session credit without replacing independent attempts'
);

select extensions.is(
  (public.get_family_progress_dashboard(:'family_a','montenegrin-en')->'shared'->>'completedDays')::integer,
  1,
  'family dashboard reports shared progress separately from learner attempts'
);

select public.start_family_review(:'family_session',array[:'kid_profile'::uuid]) as review_session \gset
select extensions.ok(
  exists(select 1 from public.family_voyage_sessions where id=:'review_session' and is_review and status='live'),
  'adult can reopen a completed family lesson as a review session'
);
select public.complete_family_play(:'review_session');
select extensions.is(
  (public.get_family_play_state(:'family_a','montenegrin-en')->>'completedDays')::integer,
  1,
  'completing a review session does not advance the family voyage'
);
select extensions.is(
  jsonb_array_length(public.get_family_progress_dashboard(:'family_a','montenegrin-en')->'history'),
  2,
  'family history contains the voyage session and its later review'
);

insert into public.learner_profiles (family_id, display_name, created_by)
values (:'family_a', 'Lena', auth.uid()) returning id as mia_profile \gset
select public.create_learner_profile_invitation(:'mia_profile', 'mia@example.com') as mia_token \gset

reset role;
set local role authenticated;
select set_config('request.jwt.claim.sub', '10000000-0000-0000-0000-000000000004', true);
select set_config('request.jwt.claims', '{"sub":"10000000-0000-0000-0000-000000000004","email":"mia@example.com","role":"authenticated"}', true);
select public.accept_family_invitation(:'mia_token');

select extensions.ok(
  exists(select 1 from public.learner_profiles where id = :'mia_profile' and linked_user_id = auth.uid()),
  'learner invitation must link the authenticated account to the existing profile'
);
select extensions.ok(
  exists(select 1 from public.family_memberships where family_id = :'family_a' and user_id = auth.uid() and role = 'learner'),
  'linked learner must receive learner membership'
);

reset role;
set local role authenticated;
select set_config('request.jwt.claim.sub', '10000000-0000-0000-0000-000000000001', true);
select set_config('request.jwt.claims', '{"sub":"10000000-0000-0000-0000-000000000001","email":"parent-a@example.com","role":"authenticated"}', true);
update public.families set learners_can_invite = false where id = :'family_a';

reset role;
set local role authenticated;
select set_config('request.jwt.claim.sub', '10000000-0000-0000-0000-000000000002', true);
select set_config('request.jwt.claims', '{"sub":"10000000-0000-0000-0000-000000000002","email":"kid-a@example.com","role":"authenticated"}', true);

do $$
begin
  perform public.create_family_invitation(current_setting('test.family_a')::uuid, 'blocked@example.com', 'learner');
  raise exception 'ASSERTION FAILED: learner invited after owner disabled invitations';
exception
  when others then
    if sqlerrm = 'ASSERTION FAILED: learner invited after owner disabled invitations' then raise; end if;
end;
$$;
select extensions.pass('owner can disable learner-created invitations');

reset role;
set local role authenticated;
select set_config('request.jwt.claim.sub', '20000000-0000-0000-0000-000000000001', true);
select set_config('request.jwt.claims', '{"sub":"20000000-0000-0000-0000-000000000001","email":"parent-b@example.com","role":"authenticated"}', true);
select public.create_family('Family B') as family_b \gset

select extensions.ok(
  (select count(*) = 0 from public.families where id = :'family_a'),
  'unrelated family must not read Family A'
);
select extensions.ok(
  (select count(*) = 0 from public.learner_profiles where id = :'kid_profile'),
  'unrelated family must not read Family A learner'
);
select extensions.ok(
  (select count(*) = 0 from public.family_language_variants where family_id = :'family_a'),
  'unrelated family must not read Family A variants'
);

do $$
begin
  insert into public.learner_language_progress
    (profile_id, pack_id, pack_version, stars)
  values (current_setting('test.kid_profile')::uuid, 'montenegrin-en', '0.1.0', 999);
  raise exception 'ASSERTION FAILED: unrelated family changed learner progress';
exception
  when others then
    if sqlerrm = 'ASSERTION FAILED: unrelated family changed learner progress' then raise; end if;
end;
$$;
select extensions.pass('unrelated family cannot change learner progress');

select * from extensions.finish();

rollback;

\echo '✓ Supabase RLS and family-role tests passed'
