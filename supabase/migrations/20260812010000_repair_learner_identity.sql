-- Repair accounts that were originally invited as adults and later assigned a
-- learner profile. Progress stays on the profile while the Google identity and
-- family membership are corrected in one owner-authorized operation.

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
  if caller_role not in ('owner', 'adult_guide') then
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

  update public.learner_profiles
  set linked_user_id = target_user, updated_at = now()
  where id = target_profile and family_id = target_family;

  insert into public.family_memberships (family_id, user_id, role, invited_by)
  values (target_family, target_user, 'learner', auth.uid())
  on conflict (family_id, user_id) do update set role = 'learner';

  return target_user;
end;
$$;

grant execute on function public.link_family_learner_account(uuid, text) to authenticated;
