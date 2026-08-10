\set ON_ERROR_STOP on

begin;

create extension if not exists pgtap with schema extensions;
select extensions.plan(15);

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
