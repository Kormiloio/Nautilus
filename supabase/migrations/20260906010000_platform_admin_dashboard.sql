-- Platform Admin Dashboard Schema & Security (FR-40, FR-41)

create table if not exists public.platform_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('platform_admin')),
  granted_at timestamptz not null default now(),
  granted_by uuid references auth.users(id) on delete set null
);

alter table public.platform_roles enable row level security;

create policy "Platform admins can view platform roles"
  on public.platform_roles for select
  using (
    exists (
      select 1 from public.platform_roles
      where user_id = auth.uid() and role = 'platform_admin'
    )
  );

create table if not exists public.platform_audit_logs (
  id uuid primary key default gen_random_uuid(),
  admin_user_id uuid not null references auth.users(id) on delete cascade,
  action text not null,
  target_family_id uuid references public.families(id) on delete set null,
  reason text not null,
  created_at timestamptz not null default now()
);

alter table public.platform_audit_logs enable row level security;

create policy "Platform admins can view audit logs"
  on public.platform_audit_logs for select
  using (
    exists (
      select 1 from public.platform_roles
      where user_id = auth.uid() and role = 'platform_admin'
    )
  );

-- Helper function to check platform admin authorization
create or replace function public.is_platform_admin()
returns boolean language plpgsql security definer set search_path = public
as $$
begin
  if auth.uid() is null then
    return false;
  end if;
  return exists (
    select 1 from public.platform_roles
    where user_id = auth.uid() and role = 'platform_admin'
  );
end;
$$;

-- Aggregate platform metrics RPC with privacy-preserving small-cohort suppression (FR-40)
create or replace function public.get_platform_admin_metrics()
returns jsonb language plpgsql security definer set search_path = public
as $$
declare
  is_admin boolean;
  total_fams bigint;
  active_fams_7d bigint;
  completed_sessions bigint;
  verified_attempts bigint;
  pack_dist jsonb;
  suppress_cohorts boolean := false;
begin
  is_admin := public.is_platform_admin();
  if not is_admin then
    raise exception 'Platform administration access required';
  end if;

  select count(*) into total_fams from public.families;
  
  -- Small cohort suppression threshold (FR-41)
  if total_fams < 5 then
    suppress_cohorts := true;
  end if;

  select count(distinct family_id) into active_fams_7d
  from public.family_voyage_sessions
  where updated_at >= (now() - interval '7 days');

  select count(*) into completed_sessions
  from public.family_voyage_sessions
  where status = 'completed';

  select count(*) into verified_attempts
  from public.verified_lesson_attempts
  where status = 'completed';

  select coalesce(jsonb_agg(jsonb_build_object('pack_id', pack_id, 'count', c)), '[]'::jsonb)
  into pack_dist
  from (
    select pack_id, count(*) as c
    from public.family_languages
    group by pack_id
  ) sub;

  return jsonb_build_object(
    'total_families', total_fams,
    'active_families_7d', active_fams_7d,
    'completed_sessions', completed_sessions,
    'verified_attempts', verified_attempts,
    'pack_distribution', pack_dist,
    'suppress_small_cohorts', suppress_cohorts,
    'generated_at', now()
  );
end;
$$;

-- Audit-logged support access grant RPC (FR-41)
create or replace function public.grant_platform_support_access(
  target_family uuid,
  reason text
)
returns jsonb language plpgsql security definer set search_path = public
as $$
declare
  trimmed_reason text := trim(reason);
begin
  if not public.is_platform_admin() then
    raise exception 'Platform administration access required';
  end if;

  if length(trimmed_reason) < 10 then
    raise exception 'A valid audit reason of at least 10 characters is required for support access.';
  end if;

  insert into public.platform_audit_logs (admin_user_id, action, target_family_id, reason)
  values (auth.uid(), 'support_access_granted', target_family, trimmed_reason);

  return jsonb_build_object(
    'granted', true,
    'target_family', target_family,
    'admin_user_id', auth.uid(),
    'created_at', now()
  );
end;
$$;
