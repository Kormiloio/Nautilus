-- Durable parent-controlled Family Play sessions.
-- Independent learner attempts remain in completed_lessons/activity_history.

create type public.family_session_status as enum
  ('draft', 'live', 'paused', 'completed', 'cancelled');

create type public.family_participant_status as enum
  ('invited', 'joined', 'disconnected', 'credited');

create table public.family_voyage_sessions (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  pack_id text not null,
  pack_version text not null,
  lesson_id text not null,
  voyage_day integer not null check (voyage_day between 1 and 200),
  local_date date not null,
  timezone text not null check (char_length(timezone) between 1 and 80),
  status public.family_session_status not null default 'draft',
  current_segment integer not null default 0 check (current_segment >= 0),
  controlling_adult uuid not null references public.user_accounts(id),
  started_at timestamptz,
  paused_at timestamptz,
  completed_at timestamptz,
  cancelled_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  foreign key (pack_id, pack_version)
    references public.language_packs(id, version)
);

create table public.family_voyage_participants (
  session_id uuid not null references public.family_voyage_sessions(id) on delete cascade,
  profile_id uuid not null references public.learner_profiles(id) on delete cascade,
  status public.family_participant_status not null default 'invited',
  joined_at timestamptz,
  last_seen_at timestamptz,
  credited_at timestamptz,
  primary key (session_id, profile_id)
);

create unique index one_open_family_session_per_language
  on public.family_voyage_sessions (family_id, pack_id)
  where status in ('draft', 'live', 'paused');

create unique index one_completed_family_day_per_date
  on public.family_voyage_sessions (family_id, pack_id, local_date)
  where status = 'completed';

create unique index one_completed_family_voyage_position
  on public.family_voyage_sessions (family_id, pack_id, voyage_day)
  where status = 'completed';

create index family_sessions_timeline
  on public.family_voyage_sessions (family_id, pack_id, local_date, voyage_day);

create index family_participants_profile
  on public.family_voyage_participants (profile_id, session_id);

alter table public.family_voyage_sessions enable row level security;
alter table public.family_voyage_participants enable row level security;

create policy family_sessions_member_read on public.family_voyage_sessions
  for select using (public.is_family_member(family_id));

create policy family_participants_member_read on public.family_voyage_participants
  for select using (
    exists (
      select 1 from public.family_voyage_sessions s
      where s.id = session_id and public.is_family_member(s.family_id)
    )
  );

-- Mutations are intentionally RPC-only. Direct table writes are not granted.
grant select on public.family_voyage_sessions to authenticated;
grant select on public.family_voyage_participants to authenticated;

create or replace function public.require_family_adult(target_family uuid)
returns void language plpgsql stable security definer set search_path = public
as $$
begin
  if not public.has_family_role(
    target_family,
    array['owner', 'adult_guide']::public.family_role[]
  ) then
    raise exception 'Adult family access required';
  end if;
end;
$$;

create or replace function public.start_family_play(
  target_family uuid,
  target_pack_id text,
  target_pack_version text,
  target_lesson_id text,
  target_voyage_day integer,
  target_local_date date,
  target_timezone text,
  participant_profiles uuid[] default array[]::uuid[]
)
returns uuid language plpgsql security definer set search_path = public
as $$
declare
  created_session uuid;
  expected_day integer;
  invalid_participants integer;
begin
  perform public.require_family_adult(target_family);

  if target_voyage_day not between 1 and 200 then
    raise exception 'Voyage day must be between 1 and 200';
  end if;
  if nullif(trim(target_lesson_id), '') is null then
    raise exception 'Lesson is required';
  end if;
  if nullif(trim(target_timezone), '') is null then
    raise exception 'Timezone is required';
  end if;
  if not exists (
    select 1 from public.family_languages
    where family_id = target_family
      and pack_id = target_pack_id
      and pack_version = target_pack_version
  ) then
    raise exception 'Language is not enabled for this family';
  end if;
  if cardinality(coalesce(participant_profiles, array[]::uuid[])) = 0 then
    raise exception 'Select at least one learner for Family Play';
  end if;

  select count(*)::integer + 1 into expected_day
  from public.family_voyage_sessions
  where family_id = target_family
    and pack_id = target_pack_id
    and status = 'completed';
  if target_voyage_day <> expected_day then
    raise exception 'Expected family voyage day %, received %', expected_day, target_voyage_day;
  end if;

  select count(*)::integer into invalid_participants
  from unnest(coalesce(participant_profiles, array[]::uuid[])) profile_id
  where not exists (
    select 1 from public.learner_profiles p
    where p.id = profile_id and p.family_id = target_family
  );
  if invalid_participants > 0 then
    raise exception 'Every participant must belong to the family';
  end if;

  insert into public.family_voyage_sessions (
    family_id, pack_id, pack_version, lesson_id, voyage_day,
    local_date, timezone, status, controlling_adult, started_at
  ) values (
    target_family, target_pack_id, target_pack_version, target_lesson_id,
    target_voyage_day, target_local_date, trim(target_timezone), 'live',
    auth.uid(), now()
  ) returning id into created_session;

  insert into public.family_voyage_participants (session_id, profile_id)
  select created_session, profile_id
  from unnest(coalesce(participant_profiles, array[]::uuid[])) profile_id
  on conflict do nothing;

  return created_session;
end;
$$;

create or replace function public.control_family_play(
  target_session uuid,
  requested_status public.family_session_status,
  requested_segment integer default null
)
returns public.family_voyage_sessions
language plpgsql security definer set search_path = public
as $$
declare
  session_row public.family_voyage_sessions%rowtype;
begin
  select * into session_row from public.family_voyage_sessions
  where id = target_session for update;
  if session_row.id is null then raise exception 'Family session not found'; end if;
  perform public.require_family_adult(session_row.family_id);
  if session_row.controlling_adult <> auth.uid() then
    raise exception 'Only the controlling adult can change this session';
  end if;
  if session_row.status in ('completed', 'cancelled') then
    raise exception 'Finished family sessions cannot be changed';
  end if;
  if requested_status not in ('live', 'paused', 'cancelled') then
    raise exception 'Use complete_family_play to complete a session';
  end if;
  if requested_segment is not null and requested_segment < 0 then
    raise exception 'Segment cannot be negative';
  end if;

  update public.family_voyage_sessions set
    status = requested_status,
    current_segment = coalesce(requested_segment, current_segment),
    paused_at = case when requested_status = 'paused' then now() else paused_at end,
    cancelled_at = case when requested_status = 'cancelled' then now() else cancelled_at end,
    updated_at = now()
  where id = target_session
  returning * into session_row;
  return session_row;
end;
$$;

create or replace function public.join_family_play(target_session uuid)
returns uuid language plpgsql security definer set search_path = public
as $$
declare
  joined_profile uuid;
begin
  select p.profile_id into joined_profile
  from public.family_voyage_participants p
  join public.learner_profiles lp on lp.id = p.profile_id
  join public.family_voyage_sessions s on s.id = p.session_id
  where p.session_id = target_session
    and lp.linked_user_id = auth.uid()
    and s.status in ('live', 'paused');
  if joined_profile is null then
    raise exception 'No invited learner profile is linked to this account';
  end if;

  update public.family_voyage_participants set
    status = 'joined',
    joined_at = coalesce(joined_at, now()),
    last_seen_at = now()
  where session_id = target_session and profile_id = joined_profile;
  return joined_profile;
end;
$$;

create or replace function public.complete_family_play(target_session uuid)
returns public.family_voyage_sessions
language plpgsql security definer set search_path = public
as $$
declare
  session_row public.family_voyage_sessions%rowtype;
  expected_day integer;
begin
  select * into session_row from public.family_voyage_sessions
  where id = target_session for update;
  if session_row.id is null then raise exception 'Family session not found'; end if;
  perform public.require_family_adult(session_row.family_id);
  if session_row.controlling_adult <> auth.uid() then
    raise exception 'Only the controlling adult can complete this session';
  end if;
  if session_row.status not in ('live', 'paused') then
    raise exception 'Only a live or paused session can be completed';
  end if;

  select count(*)::integer + 1 into expected_day
  from public.family_voyage_sessions
  where family_id = session_row.family_id
    and pack_id = session_row.pack_id
    and status = 'completed';
  if session_row.voyage_day <> expected_day then
    raise exception 'Family voyage position changed; expected day %', expected_day;
  end if;

  update public.family_voyage_sessions set
    status = 'completed', completed_at = now(), updated_at = now()
  where id = target_session
  returning * into session_row;

  update public.family_voyage_participants set
    status = 'credited', credited_at = now(), last_seen_at = now()
  where session_id = target_session;

  return session_row;
end;
$$;

create or replace function public.get_family_play_state(
  target_family uuid,
  target_pack_id text
)
returns jsonb language plpgsql stable security definer set search_path = public
as $$
declare result jsonb;
begin
  if not public.is_family_member(target_family) then
    raise exception 'Family access required';
  end if;

  select jsonb_build_object(
    'completedDays', count(*) filter (where s.status = 'completed'),
    'completedDates', coalesce(
      jsonb_agg(s.local_date order by s.local_date) filter (where s.status = 'completed'),
      '[]'::jsonb
    ),
    'activeSession', (
      select jsonb_build_object(
        'id', a.id,
        'lessonId', a.lesson_id,
        'voyageDay', a.voyage_day,
        'localDate', a.local_date,
        'timezone', a.timezone,
        'status', a.status,
        'currentSegment', a.current_segment,
        'controllingAdult', a.controlling_adult,
        'participants', coalesce((
          select jsonb_agg(jsonb_build_object(
            'profileId', p.profile_id,
            'name', lp.display_name,
            'status', p.status
          ) order by lp.display_name)
          from public.family_voyage_participants p
          join public.learner_profiles lp on lp.id = p.profile_id
          where p.session_id = a.id
        ), '[]'::jsonb)
      )
      from public.family_voyage_sessions a
      where a.family_id = target_family
        and a.pack_id = target_pack_id
        and a.status in ('draft', 'live', 'paused')
      limit 1
    )
  ) into result
  from public.family_voyage_sessions s
  where s.family_id = target_family and s.pack_id = target_pack_id;
  return coalesce(result, jsonb_build_object(
    'completedDays', 0, 'completedDates', '[]'::jsonb, 'activeSession', null
  ));
end;
$$;

grant execute on function public.start_family_play(uuid, text, text, text, integer, date, text, uuid[]) to authenticated;
grant execute on function public.control_family_play(uuid, public.family_session_status, integer) to authenticated;
grant execute on function public.join_family_play(uuid) to authenticated;
grant execute on function public.complete_family_play(uuid) to authenticated;
grant execute on function public.get_family_play_state(uuid, text) to authenticated;

alter publication supabase_realtime add table public.family_voyage_sessions;
alter publication supabase_realtime add table public.family_voyage_participants;
