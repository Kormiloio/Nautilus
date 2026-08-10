-- Link an email invitation to an existing learner profile so a child can
-- authenticate with Google without losing parent-created progress.

alter table public.family_invitations
  add column learner_profile_id uuid references public.learner_profiles(id) on delete cascade;

create unique index one_pending_invitation_per_learner_profile
  on public.family_invitations (learner_profile_id)
  where learner_profile_id is not null and status = 'pending';

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
begin
  select family_id, linked_user_id
    into target_family, existing_link
    from public.learner_profiles
    where id = target_profile;

  if target_family is null then raise exception 'Learner profile not found'; end if;
  if existing_link is not null then raise exception 'Learner profile already has a sign-in'; end if;

  select role into member_role
    from public.family_memberships
    where family_id = target_family and user_id = auth.uid();
  if member_role not in ('owner', 'adult_guide') then
    raise exception 'Only an adult can link a learner account';
  end if;

  update public.family_invitations
    set status = 'revoked', revoked_at = now()
    where learner_profile_id = target_profile and status = 'pending';

  insert into public.family_invitations
    (family_id, email, role, token_hash, invited_by, expires_at, learner_profile_id)
  values
    (target_family, lower(trim(invite_email)), 'learner',
     encode(extensions.digest(raw_token, 'sha256'), 'hex'), auth.uid(),
     now() + interval '7 days', target_profile);

  return raw_token;
end;
$$;

create or replace function public.accept_family_invitation(raw_token text)
returns uuid language plpgsql security definer set search_path = public
as $$
declare invitation public.family_invitations%rowtype;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select * into invitation from public.family_invitations
    where token_hash = encode(extensions.digest(raw_token, 'sha256'), 'hex')
      and status = 'pending'
    for update;
  if invitation.id is null then raise exception 'Invitation not found'; end if;
  if invitation.expires_at <= now() then
    update public.family_invitations set status = 'expired' where id = invitation.id;
    raise exception 'Invitation expired';
  end if;
  if lower(invitation.email) <> lower(coalesce(auth.jwt() ->> 'email', '')) then
    raise exception 'Invitation email does not match authenticated account';
  end if;

  insert into public.family_memberships (family_id, user_id, role, invited_by)
  values (invitation.family_id, auth.uid(), invitation.role, invitation.invited_by)
  on conflict (family_id, user_id) do update set role = excluded.role;

  if invitation.learner_profile_id is not null then
    update public.learner_profiles
      set linked_user_id = auth.uid(), updated_at = now()
      where id = invitation.learner_profile_id
        and family_id = invitation.family_id
        and linked_user_id is null;
    if not found then raise exception 'Learner profile is already linked'; end if;
  end if;

  update public.family_invitations
    set status = 'accepted', accepted_at = now()
    where id = invitation.id;
  return invitation.family_id;
end;
$$;

grant execute on function public.create_learner_profile_invitation(uuid, text) to authenticated;

-- Register the first selectable additional language and enable it for current
-- and newly created family workspaces. Its content remains marked for fluent
-- review in the web pack while families pilot it.
insert into public.language_packs
  (id, version, target_language_code, target_language_name, support_language_code, scripts, status)
values
  ('albanian-en', '0.1.0', 'sq', 'Albanian', 'en', array['Latn'], 'review')
on conflict (id, version) do update
  set target_language_name = excluded.target_language_name,
      scripts = excluded.scripts,
      status = excluded.status;

insert into public.family_languages (family_id, pack_id, pack_version, enabled_by)
select id, 'albanian-en', '0.1.0', owner_user_id from public.families
on conflict (family_id, pack_id) do nothing;

create or replace function public.create_family(family_name text)
returns uuid language plpgsql security definer set search_path = public
as $$
declare created_family uuid;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  insert into public.families (name, owner_user_id)
  values (family_name, auth.uid()) returning id into created_family;
  insert into public.family_memberships (family_id, user_id, role)
  values (created_family, auth.uid(), 'owner');
  insert into public.family_languages (family_id, pack_id, pack_version, enabled_by)
  values
    (created_family, 'montenegrin-en', '0.1.0', auth.uid()),
    (created_family, 'albanian-en', '0.1.0', auth.uid());
  return created_family;
end;
$$;
