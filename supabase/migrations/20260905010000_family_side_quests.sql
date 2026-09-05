-- Synchronized, per-device Family Side Quests.
create table if not exists public.family_side_quest_sessions (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  pack_id text not null,
  pack_version text not null,
  quest_id text not null,
  milestone integer not null check (milestone > 0),
  controlling_adult uuid not null references public.user_accounts(id),
  status text not null default 'active' check (status in ('active','completed','cancelled')),
  current_case integer not null default 0 check (current_case >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  completed_at timestamptz
);

create unique index if not exists one_active_family_side_quest
  on public.family_side_quest_sessions(family_id, pack_id, quest_id)
  where status = 'active';

create table if not exists public.family_side_quest_people (
  session_id uuid not null references public.family_side_quest_sessions(id) on delete cascade,
  user_id uuid not null references public.user_accounts(id) on delete cascade,
  profile_id uuid references public.learner_profiles(id) on delete cascade,
  display_name text not null,
  primary key (session_id, user_id),
  unique (session_id, profile_id)
);

create table if not exists public.family_side_quest_answers (
  session_id uuid not null,
  case_index integer not null check (case_index >= 0),
  user_id uuid not null,
  answer_id text not null,
  locked_at timestamptz not null default now(),
  primary key (session_id, case_index, user_id),
  foreign key (session_id, user_id)
    references public.family_side_quest_people(session_id, user_id) on delete cascade
);

alter table public.family_side_quest_sessions enable row level security;
alter table public.family_side_quest_people enable row level security;
alter table public.family_side_quest_answers enable row level security;

create or replace function public.can_access_side_quest(target_session uuid)
returns boolean language sql stable security definer set search_path=public as $$
  select exists (
    select 1 from public.family_side_quest_people p
    where p.session_id=target_session and p.user_id=auth.uid()
  );
$$;

drop policy if exists side_quest_sessions_select on public.family_side_quest_sessions;
create policy side_quest_sessions_select on public.family_side_quest_sessions for select to authenticated
using (public.can_access_side_quest(id));
drop policy if exists side_quest_people_select on public.family_side_quest_people;
create policy side_quest_people_select on public.family_side_quest_people for select to authenticated
using (public.can_access_side_quest(session_id));
create or replace function public.side_quest_answers_revealed(target_session uuid, target_case integer)
returns boolean language sql stable security definer set search_path=public as $$
  select (select count(*) from public.family_side_quest_answers where session_id=target_session and case_index=target_case)
       = (select count(*) from public.family_side_quest_people where session_id=target_session);
$$;

drop policy if exists side_quest_answers_select on public.family_side_quest_answers;
create policy side_quest_answers_select on public.family_side_quest_answers for select to authenticated
using (public.can_access_side_quest(session_id) and (user_id=auth.uid() or public.side_quest_answers_revealed(session_id,case_index)));

revoke all on public.family_side_quest_sessions, public.family_side_quest_people, public.family_side_quest_answers from anon, authenticated;
grant select on public.family_side_quest_sessions, public.family_side_quest_people, public.family_side_quest_answers to authenticated;

create or replace function public.start_family_side_quest(
  target_family uuid, target_pack_id text, target_pack_version text,
  target_quest_id text, target_milestone integer, participant_profiles uuid[] default '{}'
) returns uuid language plpgsql security definer set search_path=public as $$
declare sid uuid; prof uuid; learner record; adult_name text;
begin
  perform public.require_family_adult(target_family);
  if target_pack_id <> 'montenegrin-en' or target_quest_id <> 'false-friend-detective' or target_milestone <> 10 then
    raise exception 'Unknown or unavailable side quest';
  end if;
  select id into sid from public.family_side_quest_sessions
    where family_id=target_family and pack_id=target_pack_id and quest_id=target_quest_id and status='active';
  if sid is not null then return sid; end if;
  insert into public.family_side_quest_sessions(family_id,pack_id,pack_version,quest_id,milestone,controlling_adult)
    values(target_family,target_pack_id,target_pack_version,target_quest_id,target_milestone,auth.uid()) returning id into sid;
  select coalesce(display_name,email,'Parent / Guide') into adult_name from public.user_accounts where id=auth.uid();
  insert into public.family_side_quest_people(session_id,user_id,display_name)
    values(sid,auth.uid(),coalesce(adult_name,'Parent / Guide'));
  foreach prof in array participant_profiles loop
    select id,linked_user_id,display_name into learner from public.learner_profiles where id=prof and family_id=target_family;
    if learner.id is null or learner.linked_user_id is null then raise exception 'Every participant needs a linked device account'; end if;
    insert into public.family_side_quest_people(session_id,user_id,profile_id,display_name)
      values(sid,learner.linked_user_id,learner.id,learner.display_name) on conflict do nothing;
  end loop;
  if (select count(*) from public.family_side_quest_people where session_id=sid) < 2 then
    raise exception 'Connect at least one learner before starting a family side quest';
  end if;
  return sid;
end; $$;

create or replace function public.get_family_side_quest_state(target_family uuid, target_pack_id text)
returns jsonb language plpgsql security definer set search_path=public as $$
declare s record; expected integer; received integer; mine text; all_locked boolean;
begin
  if not public.is_family_member(target_family) then raise exception 'Family access required'; end if;
  select q.* into s from public.family_side_quest_sessions q
   where q.family_id=target_family and q.pack_id=target_pack_id
     and public.can_access_side_quest(q.id)
   order by (q.status='active') desc, q.created_at desc limit 1;
  if s.id is null then return null; end if;
  select count(*) into expected from public.family_side_quest_people where session_id=s.id;
  select count(*),max(answer_id) filter(where user_id=auth.uid()) into received,mine
    from public.family_side_quest_answers where session_id=s.id and case_index=s.current_case;
  all_locked := received=expected;
  return jsonb_build_object(
    'id',s.id,'questId',s.quest_id,'milestone',s.milestone,'status',s.status,
    'currentCase',s.current_case,'controllingAdult',s.controlling_adult,
    'isController',s.controlling_adult=auth.uid(),'myAnswer',mine,
    'allLocked',all_locked,'lockedCount',received,'participantCount',expected,
    'people',(select coalesce(jsonb_agg(jsonb_build_object(
      'userId',p.user_id,'name',p.display_name,'isCurrentUser',p.user_id=auth.uid(),
      'locked',a.user_id is not null,'answerId',case when all_locked then a.answer_id else null end
    ) order by p.display_name),'[]'::jsonb)
      from public.family_side_quest_people p left join public.family_side_quest_answers a
       on a.session_id=p.session_id and a.user_id=p.user_id and a.case_index=s.current_case
      where p.session_id=s.id)
  );
end; $$;

create or replace function public.submit_family_side_quest_answer(target_session uuid, target_case integer, selected_answer text)
returns void language plpgsql security definer set search_path=public as $$
declare s record; allowed text[];
begin
  select * into s from public.family_side_quest_sessions where id=target_session for update;
  if s.id is null or s.status<>'active' or not public.can_access_side_quest(s.id) then raise exception 'Active side quest participation required'; end if;
  if target_case<>s.current_case then raise exception 'This case has already moved on'; end if;
  allowed := case target_case when 0 then array['city','hail','work'] when 1 then array['slope','scythe','hair'] when 2 then array['law','straight','right'] else null end;
  if allowed is null or not selected_answer=any(allowed) then raise exception 'Invalid answer'; end if;
  if exists(select 1 from public.family_side_quest_answers where session_id=s.id and case_index=target_case and user_id=auth.uid()) then
    raise exception 'Your answer is already locked';
  end if;
  insert into public.family_side_quest_answers(session_id,case_index,user_id,answer_id) values(s.id,target_case,auth.uid(),selected_answer);
end; $$;

create or replace function public.advance_family_side_quest(target_session uuid)
returns void language plpgsql security definer set search_path=public as $$
declare s record; expected integer; received integer;
begin
  select * into s from public.family_side_quest_sessions where id=target_session for update;
  if s.id is null or s.status<>'active' or s.controlling_adult<>auth.uid() then raise exception 'Only the family controller can advance this quest'; end if;
  select count(*) into expected from public.family_side_quest_people where session_id=s.id;
  select count(*) into received from public.family_side_quest_answers where session_id=s.id and case_index=s.current_case;
  if received<>expected then raise exception 'Everyone must lock an answer first'; end if;
  if s.current_case>=2 then
    update public.family_side_quest_sessions set status='completed',completed_at=now(),updated_at=now() where id=s.id;
  else
    update public.family_side_quest_sessions set current_case=current_case+1,updated_at=now() where id=s.id;
  end if;
end; $$;

revoke all on function public.can_access_side_quest(uuid) from public,anon;
revoke all on function public.side_quest_answers_revealed(uuid,integer) from public,anon;
revoke all on function public.start_family_side_quest(uuid,text,text,text,integer,uuid[]) from public,anon;
revoke all on function public.get_family_side_quest_state(uuid,text) from public,anon;
revoke all on function public.submit_family_side_quest_answer(uuid,integer,text) from public,anon;
revoke all on function public.advance_family_side_quest(uuid) from public,anon;
grant execute on function public.can_access_side_quest(uuid), public.side_quest_answers_revealed(uuid,integer), public.start_family_side_quest(uuid,text,text,text,integer,uuid[]), public.get_family_side_quest_state(uuid,text), public.submit_family_side_quest_answer(uuid,integer,text), public.advance_family_side_quest(uuid) to authenticated;

do $$ begin
  alter publication supabase_realtime add table public.family_side_quest_sessions;
exception when duplicate_object then null; end $$;
do $$ begin
  alter publication supabase_realtime add table public.family_side_quest_answers;
exception when duplicate_object then null; end $$;
