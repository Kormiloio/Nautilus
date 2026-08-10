-- Nautilus multi-family, multilingual foundation.
-- Apply to a new Supabase project or migrate existing proof-of-concept data first.

create extension if not exists pgcrypto;

create type public.family_role as enum ('owner', 'adult_guide', 'learner');
create type public.invitation_status as enum ('pending', 'accepted', 'revoked', 'expired');
create type public.pack_status as enum ('draft', 'review', 'published', 'retired');
create type public.variant_kind as enum ('alternative', 'addition');
create type public.variant_preference as enum ('show_standard', 'show_both', 'prefer_family');
create type public.variant_approval as enum ('pending', 'approved', 'rejected');

create table public.user_accounts (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.families (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 100),
  owner_user_id uuid not null references public.user_accounts(id),
  learners_can_invite boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.family_memberships (
  family_id uuid not null references public.families(id) on delete cascade,
  user_id uuid not null references public.user_accounts(id) on delete cascade,
  role public.family_role not null,
  invited_by uuid references public.user_accounts(id),
  joined_at timestamptz not null default now(),
  primary key (family_id, user_id)
);

create table public.family_invitations (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  email text not null,
  role public.family_role not null,
  token_hash text not null unique,
  status public.invitation_status not null default 'pending',
  invited_by uuid not null references public.user_accounts(id),
  expires_at timestamptz not null,
  created_at timestamptz not null default now(),
  accepted_at timestamptz,
  revoked_at timestamptz
);

create unique index family_pending_invitation_email
  on public.family_invitations (family_id, lower(email))
  where status = 'pending';

create table public.language_packs (
  id text not null,
  version text not null,
  target_language_code text not null,
  target_language_name text not null,
  support_language_code text not null default 'en',
  scripts text[] not null,
  status public.pack_status not null default 'draft',
  published_at timestamptz,
  primary key (id, version)
);

insert into public.language_packs
  (id, version, target_language_code, target_language_name, support_language_code, scripts, status)
values
  ('montenegrin-en', '0.1.0', 'cnr', 'Montenegrin', 'en', array['Latn', 'Cyrl'], 'draft')
on conflict do nothing;

create table public.family_languages (
  family_id uuid not null references public.families(id) on delete cascade,
  pack_id text not null,
  pack_version text not null,
  enabled_by uuid not null references public.user_accounts(id),
  enabled_at timestamptz not null default now(),
  primary key (family_id, pack_id),
  foreign key (pack_id, pack_version)
    references public.language_packs(id, version)
);

create table public.learner_profiles (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  linked_user_id uuid references public.user_accounts(id) on delete set null,
  display_name text not null check (char_length(display_name) between 1 and 80),
  created_by uuid not null references public.user_accounts(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (family_id, linked_user_id)
);

create table public.learner_language_progress (
  profile_id uuid not null references public.learner_profiles(id) on delete cascade,
  pack_id text not null,
  pack_version text not null,
  stars integer not null default 0 check (stars >= 0),
  dialogues_done integer not null default 0 check (dialogues_done >= 0),
  voyage_plan_id text,
  updated_at timestamptz not null default now(),
  primary key (profile_id, pack_id),
  foreign key (pack_id, pack_version)
    references public.language_packs(id, version)
);

create table public.completed_lessons (
  profile_id uuid not null references public.learner_profiles(id) on delete cascade,
  pack_id text not null,
  pack_version text not null,
  lesson_id text not null,
  operation_id uuid not null unique,
  completed_at timestamptz not null default now(),
  primary key (profile_id, pack_id, lesson_id),
  foreign key (pack_id, pack_version)
    references public.language_packs(id, version)
);

create table public.completed_topics (
  profile_id uuid not null references public.learner_profiles(id) on delete cascade,
  pack_id text not null,
  pack_version text not null,
  topic_id text not null,
  operation_id uuid not null unique,
  completed_at timestamptz not null default now(),
  primary key (profile_id, pack_id, topic_id),
  foreign key (pack_id, pack_version)
    references public.language_packs(id, version)
);

create table public.activity_history (
  profile_id uuid not null references public.learner_profiles(id) on delete cascade,
  pack_id text not null,
  pack_version text not null,
  local_date date not null,
  timezone text not null,
  operation_id uuid not null unique,
  created_at timestamptz not null default now(),
  primary key (profile_id, pack_id, local_date),
  foreign key (pack_id, pack_version)
    references public.language_packs(id, version)
);

create table public.family_language_variants (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  pack_id text not null,
  pack_version text not null,
  kind public.variant_kind not null,
  standard_item_id text,
  target_text text not null,
  support_text text not null,
  label text not null default 'family wording',
  preference public.variant_preference not null default 'show_both',
  approval public.variant_approval not null default 'pending',
  created_by uuid not null references public.user_accounts(id),
  approved_by uuid references public.user_accounts(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  foreign key (pack_id, pack_version)
    references public.language_packs(id, version),
  check (
    (kind = 'alternative' and standard_item_id is not null)
    or (kind = 'addition' and standard_item_id is null)
  )
);

create index family_variants_lookup
  on public.family_language_variants (family_id, pack_id, standard_item_id);

-- Authorization helpers use SECURITY DEFINER to avoid recursive RLS checks.
create or replace function public.is_family_member(target_family uuid)
returns boolean language sql stable security definer set search_path = public
as $$
  select exists (
    select 1 from public.family_memberships
    where family_id = target_family and user_id = auth.uid()
  );
$$;

create or replace function public.has_family_role(target_family uuid, allowed public.family_role[])
returns boolean language sql stable security definer set search_path = public
as $$
  select exists (
    select 1 from public.family_memberships
    where family_id = target_family
      and user_id = auth.uid()
      and role = any(allowed)
  );
$$;

create or replace function public.can_access_profile(target_profile uuid)
returns boolean language sql stable security definer set search_path = public
as $$
  select exists (
    select 1
    from public.learner_profiles p
    where p.id = target_profile
      and (
        p.linked_user_id = auth.uid()
        or public.has_family_role(p.family_id, array['owner', 'adult_guide']::public.family_role[])
      )
  );
$$;

create or replace function public.protect_invitation_identity()
returns trigger language plpgsql set search_path = public
as $$
begin
  if new.family_id is distinct from old.family_id
    or new.email is distinct from old.email
    or new.role is distinct from old.role
    or new.token_hash is distinct from old.token_hash
    or new.invited_by is distinct from old.invited_by
    or new.expires_at is distinct from old.expires_at then
    raise exception 'Invitation identity fields are immutable';
  end if;
  return new;
end;
$$;

create trigger protect_family_invitation_identity
before update on public.family_invitations
for each row execute function public.protect_invitation_identity();

-- Keep the public account row synchronized with Google-authenticated users.
create or replace function public.handle_auth_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.user_accounts (id, email, display_name)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name')
  )
  on conflict (id) do update
    set email = excluded.email,
        display_name = coalesce(excluded.display_name, public.user_accounts.display_name),
        updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_changed on auth.users;
create trigger on_auth_user_changed
after insert or update of email, raw_user_meta_data on auth.users
for each row execute function public.handle_auth_user();

insert into public.user_accounts (id, email, display_name)
select
  id,
  coalesce(email, ''),
  coalesce(raw_user_meta_data ->> 'full_name', raw_user_meta_data ->> 'name')
from auth.users
on conflict (id) do update
  set email = excluded.email,
      display_name = coalesce(excluded.display_name, public.user_accounts.display_name),
      updated_at = now();

-- A parent creates the family and becomes its owner atomically.
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
  values (created_family, 'montenegrin-en', '0.1.0', auth.uid());
  return created_family;
end;
$$;

-- Creates a single-use invite and returns the raw token exactly once.
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
  insert into public.family_invitations
    (family_id, email, role, token_hash, invited_by, expires_at)
  values
    (target_family, lower(trim(invite_email)), invite_role,
     encode(extensions.digest(raw_token, 'sha256'), 'hex'), auth.uid(), now() + interval '7 days');
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
  on conflict (family_id, user_id) do nothing;
  update public.family_invitations
    set status = 'accepted', accepted_at = now()
    where id = invitation.id;
  return invitation.family_id;
end;
$$;

alter table public.user_accounts enable row level security;
alter table public.families enable row level security;
alter table public.family_memberships enable row level security;
alter table public.family_invitations enable row level security;
alter table public.language_packs enable row level security;
alter table public.family_languages enable row level security;
alter table public.learner_profiles enable row level security;
alter table public.learner_language_progress enable row level security;
alter table public.completed_lessons enable row level security;
alter table public.completed_topics enable row level security;
alter table public.activity_history enable row level security;
alter table public.family_language_variants enable row level security;

create policy user_reads_self on public.user_accounts for select using (id = auth.uid());
create policy user_updates_self on public.user_accounts for update using (id = auth.uid()) with check (id = auth.uid());

create policy family_members_read on public.families for select using (public.is_family_member(id));
create policy family_owner_update on public.families for update
  using (public.has_family_role(id, array['owner']::public.family_role[]))
  with check (public.has_family_role(id, array['owner']::public.family_role[]));

create policy membership_family_read on public.family_memberships for select
  using (public.is_family_member(family_id));
create policy membership_owner_manage on public.family_memberships for delete
  using (
    role <> 'owner'
    and public.has_family_role(family_id, array['owner']::public.family_role[])
  );

create policy invitation_authorized_read on public.family_invitations for select
  using (invited_by = auth.uid() or public.has_family_role(family_id, array['owner', 'adult_guide']::public.family_role[]));
create policy invitation_adult_update on public.family_invitations for update
  using (public.has_family_role(family_id, array['owner', 'adult_guide']::public.family_role[]))
  with check (public.has_family_role(family_id, array['owner', 'adult_guide']::public.family_role[]));

create policy published_packs_read on public.language_packs for select
  using (status = 'published' or id = 'montenegrin-en');

create policy family_languages_read on public.family_languages for select
  using (public.is_family_member(family_id));
create policy family_languages_adult_manage on public.family_languages for all
  using (public.has_family_role(family_id, array['owner', 'adult_guide']::public.family_role[]))
  with check (public.has_family_role(family_id, array['owner', 'adult_guide']::public.family_role[]));

create policy learner_profiles_family_read on public.learner_profiles for select
  using (linked_user_id = auth.uid() or public.has_family_role(family_id, array['owner', 'adult_guide']::public.family_role[]));
create policy learner_profiles_adult_manage on public.learner_profiles for all
  using (public.has_family_role(family_id, array['owner', 'adult_guide']::public.family_role[]))
  with check (public.has_family_role(family_id, array['owner', 'adult_guide']::public.family_role[]));

create policy progress_profile_access on public.learner_language_progress for all
  using (public.can_access_profile(profile_id)) with check (public.can_access_profile(profile_id));
create policy lessons_profile_access on public.completed_lessons for all
  using (public.can_access_profile(profile_id)) with check (public.can_access_profile(profile_id));
create policy topics_profile_access on public.completed_topics for all
  using (public.can_access_profile(profile_id)) with check (public.can_access_profile(profile_id));
create policy activity_profile_access on public.activity_history for all
  using (public.can_access_profile(profile_id)) with check (public.can_access_profile(profile_id));

create policy variants_family_read on public.family_language_variants for select
  using (public.is_family_member(family_id));
create policy variants_member_suggest on public.family_language_variants for insert
  with check (
    public.is_family_member(family_id)
    and created_by = auth.uid()
    and (
      approval = 'pending'
      or public.has_family_role(family_id, array['owner', 'adult_guide']::public.family_role[])
    )
  );
create policy variants_adult_update on public.family_language_variants for update
  using (public.has_family_role(family_id, array['owner', 'adult_guide']::public.family_role[]))
  with check (public.has_family_role(family_id, array['owner', 'adult_guide']::public.family_role[]));
create policy variants_adult_delete on public.family_language_variants for delete
  using (public.has_family_role(family_id, array['owner', 'adult_guide']::public.family_role[]));

grant select, update on public.user_accounts to authenticated;
grant select, update on public.families to authenticated;
grant select, delete on public.family_memberships to authenticated;
grant select, update on public.family_invitations to authenticated;
grant select on public.language_packs to authenticated;
grant select, insert, update, delete on public.family_languages to authenticated;
grant select, insert, update, delete on public.learner_profiles to authenticated;
grant select, insert, update, delete on public.learner_language_progress to authenticated;
grant select, insert, update, delete on public.completed_lessons to authenticated;
grant select, insert, update, delete on public.completed_topics to authenticated;
grant select, insert, update, delete on public.activity_history to authenticated;
grant select, insert, update, delete on public.family_language_variants to authenticated;

grant execute on function public.create_family(text) to authenticated;
grant execute on function public.create_family_invitation(uuid, text, public.family_role) to authenticated;
grant execute on function public.accept_family_invitation(text) to authenticated;
