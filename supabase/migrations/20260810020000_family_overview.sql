-- Family management dashboard and friendly invitation replacement.

create or replace function public.create_family_invitation(
  target_family uuid,
  invite_email text,
  invite_role public.family_role default 'learner'
)
returns text language plpgsql security definer set search_path = public
as $$
declare raw_token text := encode(extensions.gen_random_bytes(32), 'hex');
declare member_role public.family_role;
declare learners_allowed boolean;
declare normalized_email text := lower(trim(invite_email));
begin
  select role into member_role from public.family_memberships
    where family_id = target_family and user_id = auth.uid();
  select learners_can_invite into learners_allowed from public.families
    where id = target_family;
  if member_role is null then raise exception 'Not a family member'; end if;
  if member_role = 'learner' and (invite_role <> 'learner' or not learners_allowed) then
    raise exception 'Learner invitation not permitted';
  end if;
  if invite_role = 'owner' then raise exception 'Ownership uses the transfer workflow'; end if;

  update public.family_invitations
    set status = 'revoked', revoked_at = now()
    where family_id = target_family and lower(email) = normalized_email and status = 'pending';

  insert into public.family_invitations
    (family_id, email, role, token_hash, invited_by, expires_at)
  values
    (target_family, normalized_email, invite_role,
     encode(extensions.digest(raw_token, 'sha256'), 'hex'), auth.uid(), now() + interval '7 days');
  return raw_token;
end;
$$;

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
  if member_role not in ('owner', 'adult_guide') then
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
  if member_role not in ('owner', 'adult_guide') then
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

grant execute on function public.get_family_overview(uuid) to authenticated;
