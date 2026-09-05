-- Reject missing memberships explicitly: SQL NULL must never authorize a caller.

create or replace function public.create_learner_profile_invitation(
  target_profile uuid,
  invite_email text
)
returns text language plpgsql security definer set search_path = public
as $$
declare raw_token text := encode(extensions.gen_random_bytes(32), 'hex');
declare target_family uuid;
declare member_role public.family_role;
declare existing_link uuid;
declare normalized_email text := lower(trim(invite_email));
begin
  select family_id, linked_user_id into target_family, existing_link
    from public.learner_profiles where id = target_profile;
  if target_family is null then raise exception 'Learner profile not found'; end if;
  if existing_link is not null then raise exception 'Learner profile already has a sign-in'; end if;

  select role into member_role from public.family_memberships
    where family_id = target_family and user_id = auth.uid();
  if auth.uid() is null or member_role is null or member_role not in ('owner', 'adult_guide') then
    raise exception 'Only an adult can link a learner account';
  end if;

  update public.family_invitations
    set status = 'revoked', revoked_at = now()
    where family_id = target_family and status = 'pending'
      and (learner_profile_id = target_profile or lower(email) = normalized_email);

  insert into public.family_invitations
    (family_id, email, role, token_hash, invited_by, expires_at, learner_profile_id)
  values
    (target_family, normalized_email, 'learner',
     encode(extensions.digest(raw_token, 'sha256'), 'hex'), auth.uid(),
     now() + interval '7 days', target_profile);
  return raw_token;
end;
$$;

create or replace function public.get_family_overview(target_family uuid)
returns jsonb language plpgsql security definer set search_path = public
as $$
declare member_role public.family_role;
declare result jsonb;
begin
  select role into member_role from public.family_memberships
    where family_id = target_family and user_id = auth.uid();
  if auth.uid() is null or member_role is null or member_role not in ('owner', 'adult_guide') then
    raise exception 'Adult family access required';
  end if;

  select jsonb_build_object(
    'family', jsonb_build_object('id', f.id, 'name', f.name, 'role', member_role),
    'members', coalesce((
      select jsonb_agg(jsonb_build_object(
        'userId', m.user_id,
        'name', coalesce(a.display_name, a.email),
        'email', a.email,
        'role', m.role,
        'joinedAt', m.joined_at
      ) order by m.joined_at)
      from public.family_memberships m
      join public.user_accounts a on a.id = m.user_id
      where m.family_id = f.id
    ), '[]'::jsonb),
    'pendingInvitations', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', i.id, 'email', i.email, 'role', i.role,
        'expiresAt', i.expires_at, 'learnerProfileId', i.learner_profile_id
      ) order by i.created_at desc)
      from public.family_invitations i
      where i.family_id = f.id and i.status = 'pending'
    ), '[]'::jsonb),
    'learners', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', p.id,
        'name', p.display_name,
        'linked', p.linked_user_id is not null,
        'progress', coalesce((
          select jsonb_agg(jsonb_build_object(
            'packId', lp.pack_id,
            'stars', lp.stars,
            'dialoguesDone', lp.dialogues_done,
            'completedLessons', (select count(*) from public.completed_lessons cl where cl.profile_id = p.id and cl.pack_id = lp.pack_id),
            'activeDays', (select count(distinct ah.local_date) from public.activity_history ah where ah.profile_id = p.id and ah.pack_id = lp.pack_id)
          )) from public.learner_language_progress lp where lp.profile_id = p.id
        ), '[]'::jsonb)
      ) order by p.created_at)
      from public.learner_profiles p where p.family_id = f.id
    ), '[]'::jsonb)
  ) into result
  from public.families f where f.id = target_family;

  return result;
end;
$$;

create or replace function public.link_family_learner_account(
  target_profile uuid,
  learner_email text
)
returns uuid language plpgsql security definer set search_path = public
as $$
declare
  target_family uuid;
  target_user uuid;
  family_owner uuid;
  caller_role public.family_role;
begin
  select p.family_id into target_family
  from public.learner_profiles p where p.id = target_profile;
  if target_family is null then raise exception 'Learner profile not found'; end if;

  select m.role into caller_role from public.family_memberships m
  where m.family_id = target_family and m.user_id = auth.uid();
  if auth.uid() is null or caller_role is null or caller_role not in ('owner', 'adult_guide') then
    raise exception 'Only a parent or adult guide can repair learner sign-in';
  end if;

  select a.id into target_user from public.user_accounts a
  where lower(a.email) = lower(trim(learner_email));
  if target_user is null then
    raise exception 'That Google account has not signed in to Nautilus yet';
  end if;

  select f.owner_user_id into family_owner from public.families f where f.id = target_family;
  if target_user = family_owner then
    raise exception 'The family owner account cannot be converted to a learner';
  end if;

  if exists (
    select 1 from public.learner_profiles p
    where p.family_id = target_family and p.linked_user_id = target_user and p.id <> target_profile
  ) then
    raise exception 'That Google account is already linked to another learner';
  end if;

  if caller_role <> 'owner' and exists (
    select 1 from public.family_memberships
    where family_id = target_family and user_id = target_user
      and role in ('owner', 'adult_guide')
  ) then raise exception 'Only the owner can change an adult role'; end if;

  update public.learner_profiles
  set linked_user_id = target_user, updated_at = now()
  where id = target_profile and family_id = target_family;

  insert into public.family_memberships (family_id, user_id, role, invited_by)
  values (target_family, target_user, 'learner', auth.uid())
  on conflict (family_id, user_id) do update set role = 'learner';

  return target_user;
end;
$$;

revoke all on function public.create_learner_profile_invitation(uuid,text) from public, anon;
grant execute on function public.create_learner_profile_invitation(uuid,text) to authenticated;
revoke all on function public.get_family_overview(uuid) from public, anon;
grant execute on function public.get_family_overview(uuid) to authenticated;
revoke all on function public.link_family_learner_account(uuid,text) from public, anon;
grant execute on function public.link_family_learner_account(uuid,text) to authenticated;
