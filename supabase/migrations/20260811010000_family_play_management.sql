-- Family Play reconnect, adult controller handoff, history, and review sessions.

alter table public.family_voyage_sessions
  add column controller_lease_expires_at timestamptz,
  add column is_review boolean not null default false,
  add column source_session_id uuid references public.family_voyage_sessions(id) on delete set null;

update public.family_voyage_sessions
set controller_lease_expires_at = coalesce(updated_at, now()) + interval '2 minutes'
where status in ('draft', 'live', 'paused');

drop index public.one_completed_family_day_per_date;
drop index public.one_completed_family_voyage_position;
create unique index one_completed_family_day_per_date
  on public.family_voyage_sessions (family_id, pack_id, local_date)
  where status = 'completed' and not is_review;
create unique index one_completed_family_voyage_position
  on public.family_voyage_sessions (family_id, pack_id, voyage_day)
  where status = 'completed' and not is_review;

create table public.family_controller_events (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.family_voyage_sessions(id) on delete cascade,
  previous_adult uuid references public.user_accounts(id),
  next_adult uuid not null references public.user_accounts(id),
  reason text not null check (reason in ('start', 'handoff', 'reconnect', 'lease_takeover')),
  created_at timestamptz not null default now()
);

alter table public.family_controller_events enable row level security;
create policy controller_events_member_read on public.family_controller_events
  for select using (exists (
    select 1 from public.family_voyage_sessions s
    where s.id = session_id and public.is_family_member(s.family_id)
  ));
grant select on public.family_controller_events to authenticated;

create or replace function public.claim_family_play_controller(target_session uuid)
returns public.family_voyage_sessions
language plpgsql security definer set search_path = public
as $$
declare session_row public.family_voyage_sessions%rowtype;
declare takeover_reason text;
declare prior_adult uuid;
begin
  select * into session_row from public.family_voyage_sessions where id = target_session for update;
  if session_row.id is null then raise exception 'Family session not found'; end if;
  perform public.require_family_adult(session_row.family_id);
  if session_row.status not in ('live', 'paused') then raise exception 'Session is not active'; end if;

  prior_adult := session_row.controlling_adult;
  if session_row.controlling_adult = auth.uid() then
    takeover_reason := 'reconnect';
  elsif session_row.controller_lease_expires_at is null or session_row.controller_lease_expires_at <= now() then
    takeover_reason := 'lease_takeover';
  else
    raise exception 'Another adult is currently controlling this session';
  end if;

  update public.family_voyage_sessions set
    controlling_adult = auth.uid(),
    controller_lease_expires_at = now() + interval '2 minutes',
    updated_at = now()
  where id = target_session returning * into session_row;

  insert into public.family_controller_events(session_id, previous_adult, next_adult, reason)
  values(target_session, prior_adult, auth.uid(), takeover_reason);
  return session_row;
end;
$$;

create or replace function public.refresh_family_controller_lease()
returns trigger language plpgsql set search_path = public
as $$
begin
  if new.status in ('live','paused') and new.controlling_adult = auth.uid() then
    new.controller_lease_expires_at := now() + interval '2 minutes';
  end if;
  return new;
end;
$$;
create trigger refresh_family_controller_lease
before insert or update on public.family_voyage_sessions
for each row execute function public.refresh_family_controller_lease();

create or replace function public.complete_family_play(target_session uuid)
returns public.family_voyage_sessions
language plpgsql security definer set search_path = public
as $$
declare session_row public.family_voyage_sessions%rowtype;
declare expected_day integer;
begin
  select * into session_row from public.family_voyage_sessions where id=target_session for update;
  if session_row.id is null then raise exception 'Family session not found'; end if;
  perform public.require_family_adult(session_row.family_id);
  if session_row.controlling_adult<>auth.uid() then raise exception 'Only the controlling adult can complete this session'; end if;
  if session_row.status not in ('live','paused') then raise exception 'Only a live or paused session can be completed'; end if;
  if not session_row.is_review then
    select count(*)::integer+1 into expected_day from public.family_voyage_sessions
    where family_id=session_row.family_id and pack_id=session_row.pack_id and status='completed' and not is_review;
    if session_row.voyage_day<>expected_day then raise exception 'Family voyage position changed; expected day %',expected_day; end if;
  end if;
  update public.family_voyage_sessions set status='completed',completed_at=now(),updated_at=now()
  where id=target_session returning * into session_row;
  update public.family_voyage_participants set status='credited',credited_at=now(),last_seen_at=now()
  where session_id=target_session;
  return session_row;
end;
$$;

create or replace function public.start_family_play(
  target_family uuid, target_pack_id text, target_pack_version text,
  target_lesson_id text, target_voyage_day integer, target_local_date date,
  target_timezone text, participant_profiles uuid[] default array[]::uuid[]
)
returns uuid language plpgsql security definer set search_path = public
as $$
declare created_session uuid;
declare expected_day integer;
declare invalid_participants integer;
begin
  perform public.require_family_adult(target_family);
  if target_voyage_day not between 1 and 200 then raise exception 'Voyage day must be between 1 and 200'; end if;
  if nullif(trim(target_lesson_id),'') is null then raise exception 'Lesson is required'; end if;
  if nullif(trim(target_timezone),'') is null then raise exception 'Timezone is required'; end if;
  if not exists(select 1 from public.family_languages where family_id=target_family and pack_id=target_pack_id and pack_version=target_pack_version) then raise exception 'Language is not enabled for this family'; end if;
  if cardinality(coalesce(participant_profiles,array[]::uuid[]))=0 then raise exception 'Select at least one learner for Family Play'; end if;
  select count(*)::integer+1 into expected_day from public.family_voyage_sessions
  where family_id=target_family and pack_id=target_pack_id and status='completed' and not is_review;
  if target_voyage_day<>expected_day then raise exception 'Expected family voyage day %, received %',expected_day,target_voyage_day; end if;
  select count(*)::integer into invalid_participants from unnest(participant_profiles) profile_id
  where not exists(select 1 from public.learner_profiles p where p.id=profile_id and p.family_id=target_family);
  if invalid_participants>0 then raise exception 'Every participant must belong to the family'; end if;
  insert into public.family_voyage_sessions(family_id,pack_id,pack_version,lesson_id,voyage_day,local_date,timezone,status,controlling_adult,started_at)
  values(target_family,target_pack_id,target_pack_version,target_lesson_id,target_voyage_day,target_local_date,trim(target_timezone),'live',auth.uid(),now())
  returning id into created_session;
  insert into public.family_voyage_participants(session_id,profile_id)
  select created_session,profile_id from unnest(participant_profiles) profile_id on conflict do nothing;
  insert into public.family_controller_events(session_id,next_adult,reason) values(created_session,auth.uid(),'start');
  return created_session;
end;
$$;

create or replace function public.handoff_family_play_controller(target_session uuid, next_adult uuid)
returns public.family_voyage_sessions
language plpgsql security definer set search_path = public
as $$
declare session_row public.family_voyage_sessions%rowtype;
declare prior_adult uuid;
begin
  select * into session_row from public.family_voyage_sessions where id = target_session for update;
  if session_row.id is null then raise exception 'Family session not found'; end if;
  perform public.require_family_adult(session_row.family_id);
  if session_row.controlling_adult <> auth.uid() then raise exception 'Only the controlling adult can hand off'; end if;
  if not public.has_family_role(session_row.family_id, array['owner','adult_guide']::public.family_role[]) then
    raise exception 'Adult family access required';
  end if;
  if not exists (
    select 1 from public.family_memberships
    where family_id = session_row.family_id and user_id = next_adult and role in ('owner','adult_guide')
  ) then raise exception 'The next controller must be an adult family member'; end if;
  prior_adult := session_row.controlling_adult;
  update public.family_voyage_sessions set controlling_adult = next_adult,
    controller_lease_expires_at = now() + interval '2 minutes', updated_at = now()
  where id = target_session returning * into session_row;
  insert into public.family_controller_events(session_id, previous_adult, next_adult, reason)
  values(target_session, prior_adult, next_adult, 'handoff');
  return session_row;
end;
$$;

create or replace function public.heartbeat_family_play(target_session uuid)
returns timestamptz language plpgsql security definer set search_path = public
as $$
declare lease_until timestamptz;
begin
  update public.family_voyage_sessions set controller_lease_expires_at = now() + interval '2 minutes', updated_at = now()
  where id = target_session and controlling_adult = auth.uid() and status in ('live','paused')
  returning controller_lease_expires_at into lease_until;
  if lease_until is null then raise exception 'Controller lease unavailable'; end if;
  return lease_until;
end;
$$;

create or replace function public.start_family_review(
  source_session uuid,
  participant_profiles uuid[] default array[]::uuid[]
)
returns uuid language plpgsql security definer set search_path = public
as $$
declare source_row public.family_voyage_sessions%rowtype;
declare review_id uuid;
declare invalid_participants integer;
begin
  select * into source_row from public.family_voyage_sessions
  where id = source_session and status = 'completed' and not is_review;
  if source_row.id is null then raise exception 'Completed family lesson not found'; end if;
  perform public.require_family_adult(source_row.family_id);
  if cardinality(coalesce(participant_profiles, array[]::uuid[])) = 0 then raise exception 'Select at least one learner'; end if;
  select count(*)::integer into invalid_participants
  from unnest(participant_profiles) profile_id
  where not exists(select 1 from public.learner_profiles p where p.id = profile_id and p.family_id = source_row.family_id);
  if invalid_participants > 0 then raise exception 'Every participant must belong to the family'; end if;

  insert into public.family_voyage_sessions(
    family_id, pack_id, pack_version, lesson_id, voyage_day, local_date, timezone,
    status, current_segment, controlling_adult, controller_lease_expires_at,
    is_review, source_session_id, started_at
  ) values (
    source_row.family_id, source_row.pack_id, source_row.pack_version, source_row.lesson_id,
    source_row.voyage_day, current_date, source_row.timezone, 'live', 0, auth.uid(),
    now() + interval '2 minutes', true, source_row.id, now()
  ) returning id into review_id;
  insert into public.family_voyage_participants(session_id, profile_id)
  select review_id, profile_id from unnest(participant_profiles) profile_id;
  return review_id;
end;
$$;

create or replace function public.get_family_progress_dashboard(target_family uuid, target_pack_id text)
returns jsonb language plpgsql stable security definer set search_path = public
as $$
begin
  if not public.is_family_member(target_family) then raise exception 'Family access required'; end if;
  return jsonb_build_object(
    'shared', jsonb_build_object(
      'completedDays', (select count(*) from public.family_voyage_sessions where family_id=target_family and pack_id=target_pack_id and status='completed' and not is_review),
      'reviewSessions', (select count(*) from public.family_voyage_sessions where family_id=target_family and pack_id=target_pack_id and status='completed' and is_review)
    ),
    'learners', coalesce((select jsonb_agg(jsonb_build_object(
      'profileId', p.id, 'name', p.display_name,
      'completedLessons', (select count(*) from public.completed_lessons l where l.profile_id=p.id and l.pack_id=target_pack_id),
      'activeDays', (select count(*) from public.activity_history h where h.profile_id=p.id and h.pack_id=target_pack_id),
      'stars', coalesce((select stars from public.learner_language_progress lp where lp.profile_id=p.id and lp.pack_id=target_pack_id),0),
      'familyParticipations', (select count(*) from public.family_voyage_participants fp join public.family_voyage_sessions s on s.id=fp.session_id where fp.profile_id=p.id and s.pack_id=target_pack_id and s.status='completed' and not s.is_review)
    ) order by p.created_at) from public.learner_profiles p where p.family_id=target_family), '[]'::jsonb),
    'history', coalesce((select jsonb_agg(jsonb_build_object(
      'id', s.id, 'lessonId', s.lesson_id, 'voyageDay', s.voyage_day,
      'localDate', s.local_date, 'completedAt', s.completed_at, 'isReview', s.is_review,
      'controllerName', coalesce(a.display_name,a.email),
      'participants', (select jsonb_agg(lp.display_name order by lp.display_name) from public.family_voyage_participants fp join public.learner_profiles lp on lp.id=fp.profile_id where fp.session_id=s.id)
    ) order by s.completed_at desc) from public.family_voyage_sessions s join public.user_accounts a on a.id=s.controlling_adult where s.family_id=target_family and s.pack_id=target_pack_id and s.status='completed'), '[]'::jsonb)
  );
end;
$$;

-- Enrich the existing shared state with controller lease information.
create or replace function public.get_family_play_state(target_family uuid, target_pack_id text)
returns jsonb language plpgsql stable security definer set search_path = public
as $$
declare result jsonb;
begin
  if not public.is_family_member(target_family) then raise exception 'Family access required'; end if;
  select jsonb_build_object(
    'completedDays', count(*) filter(where s.status='completed' and not s.is_review),
    'completedDates', coalesce(jsonb_agg(s.local_date order by s.local_date) filter(where s.status='completed' and not s.is_review),'[]'::jsonb),
    'activeSession', (select jsonb_build_object(
      'id', a.id, 'lessonId', a.lesson_id, 'voyageDay', a.voyage_day, 'localDate', a.local_date,
      'timezone', a.timezone, 'status', a.status, 'currentSegment', a.current_segment,
      'controllingAdult', a.controlling_adult, 'controllerName', coalesce(ua.display_name,ua.email),
      'controllerLeaseExpiresAt', a.controller_lease_expires_at, 'isReview', a.is_review,
      'canTakeControl', (a.controlling_adult=auth.uid() or a.controller_lease_expires_at<=now()),
      'participants', coalesce((select jsonb_agg(jsonb_build_object('profileId',p.profile_id,'name',lp.display_name,'status',p.status) order by lp.display_name) from public.family_voyage_participants p join public.learner_profiles lp on lp.id=p.profile_id where p.session_id=a.id),'[]'::jsonb)
    ) from public.family_voyage_sessions a join public.user_accounts ua on ua.id=a.controlling_adult
      where a.family_id=target_family and a.pack_id=target_pack_id and a.status in ('draft','live','paused') limit 1)
  ) into result from public.family_voyage_sessions s where s.family_id=target_family and s.pack_id=target_pack_id;
  return coalesce(result,jsonb_build_object('completedDays',0,'completedDates','[]'::jsonb,'activeSession',null));
end;
$$;

grant execute on function public.claim_family_play_controller(uuid) to authenticated;
grant execute on function public.handoff_family_play_controller(uuid,uuid) to authenticated;
grant execute on function public.heartbeat_family_play(uuid) to authenticated;
grant execute on function public.start_family_review(uuid,uuid[]) to authenticated;
grant execute on function public.get_family_progress_dashboard(uuid,text) to authenticated;
