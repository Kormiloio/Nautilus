-- Security and reliability corrections from the September full review.

create or replace function public.platform_admin_authorized()
returns boolean language sql stable security definer set search_path=public as $$
  select auth.uid() is not null and exists (
    select 1 from public.platform_roles where user_id=auth.uid() and role='platform_admin'
  );
$$;
revoke all on function public.platform_admin_authorized() from public,anon;
grant execute on function public.platform_admin_authorized() to authenticated;

drop policy if exists "Platform admins can view platform roles" on public.platform_roles;
create policy "Platform admins can view platform roles" on public.platform_roles
for select to authenticated using (public.platform_admin_authorized());
drop policy if exists "Platform admins can view audit logs" on public.platform_audit_logs;
create policy "Platform admins can view audit logs" on public.platform_audit_logs
for select to authenticated using (public.platform_admin_authorized());

create or replace function public.is_platform_admin()
returns boolean language sql stable security definer set search_path=public as $$
  select public.platform_admin_authorized();
$$;

create or replace function public.get_platform_admin_metrics()
returns jsonb language plpgsql security definer set search_path=public as $$
declare
  total_fams bigint;
  active_fams_7d bigint;
  completed_sessions bigint;
  verified_attempts bigint;
  pack_dist jsonb;
begin
  if not public.platform_admin_authorized() then raise exception 'Platform administration access required'; end if;
  select count(*) into total_fams from public.families;
  if total_fams < 5 then
    return jsonb_build_object(
      'total_families',null,'active_families_7d',null,'completed_sessions',null,
      'verified_attempts',null,'pack_distribution','[]'::jsonb,
      'suppress_small_cohorts',true,'generated_at',now()
    );
  end if;
  select count(distinct family_id) into active_fams_7d from public.family_voyage_sessions where updated_at >= now()-interval '7 days';
  select count(*) into completed_sessions from public.family_voyage_sessions where status='completed';
  select count(*) into verified_attempts from public.verified_lesson_attempts where status='completed';
  select coalesce(jsonb_agg(jsonb_build_object('pack_id',pack_id,'count',c)),'[]'::jsonb) into pack_dist
    from (select pack_id,count(*) c from public.family_languages group by pack_id) p;
  return jsonb_build_object(
    'total_families',total_fams,'active_families_7d',active_fams_7d,
    'completed_sessions',completed_sessions,'verified_attempts',verified_attempts,
    'pack_distribution',pack_dist,'suppress_small_cohorts',false,'generated_at',now()
  );
end;
$$;

create or replace function public.request_platform_support_access(target_family uuid, reason text)
returns jsonb language plpgsql security definer set search_path=public as $$
declare trimmed_reason text := trim(reason);
begin
  if not public.platform_admin_authorized() then raise exception 'Platform administration access required'; end if;
  if length(trimmed_reason)<10 then raise exception 'A valid audit reason of at least 10 characters is required.'; end if;
  if not exists(select 1 from public.families where id=target_family) then raise exception 'Family not found'; end if;
  insert into public.platform_audit_logs(admin_user_id,action,target_family_id,reason)
    values(auth.uid(),'support_access_requested',target_family,trimmed_reason);
  return jsonb_build_object('requested',true,'target_family',target_family,'created_at',now());
end;
$$;
revoke all on function public.grant_platform_support_access(uuid,text) from public,anon,authenticated;
revoke all on function public.is_platform_admin() from public,anon;
revoke all on function public.get_platform_admin_metrics() from public,anon;
revoke all on function public.request_platform_support_access(uuid,text) from public,anon;
grant execute on function public.is_platform_admin(),public.get_platform_admin_metrics(),public.request_platform_support_access(uuid,text) to authenticated;

create or replace function public.validate_side_quest_unlock()
returns trigger language plpgsql security definer set search_path=public as $$
declare completed_count integer;
begin
  select count(*) into completed_count from public.family_voyage_sessions
   where family_id=new.family_id and pack_id=new.pack_id and status='completed';
  if completed_count < new.milestone then raise exception 'Complete % family lessons before opening this side quest',new.milestone; end if;
  return new;
end;
$$;
drop trigger if exists validate_family_side_quest_unlock on public.family_side_quest_sessions;
create trigger validate_family_side_quest_unlock before insert on public.family_side_quest_sessions
for each row execute function public.validate_side_quest_unlock();

create or replace function public.cancel_family_side_quest(target_session uuid)
returns void language plpgsql security definer set search_path=public as $$
begin
  update public.family_side_quest_sessions set status='cancelled',updated_at=now()
   where id=target_session and status='active' and controlling_adult=auth.uid();
  if not found then raise exception 'Only the family controller can cancel an active side quest'; end if;
end;
$$;
revoke all on function public.cancel_family_side_quest(uuid) from public,anon;
grant execute on function public.cancel_family_side_quest(uuid) to authenticated;
