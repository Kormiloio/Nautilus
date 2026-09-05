-- Verified attempt contract v1. Additive groundwork; client cutover is separate.
-- Catalog rows are deployment-owned. Never accept answer keys/rewards from clients.
create table public.verified_lesson_catalog (
  id uuid primary key default gen_random_uuid(),
  pack_id text not null,
  pack_version text not null,
  lesson_id text not null,
  revision integer not null check(revision>0),
  mode text not null check(mode in ('individual','family')),
  voyage_position integer not null check(voyage_position between 1 and 200),
  exercises jsonb not null check(jsonb_typeof(exercises)='array' and jsonb_array_length(exercises) between 1 and 100),
  unique(pack_id,pack_version,lesson_id,revision,mode),
  foreign key(pack_id,pack_version) references public.language_packs(id,version)
);
create table public.verified_lesson_attempts (
  id uuid primary key default gen_random_uuid(),
  catalog_id uuid not null references public.verified_lesson_catalog(id),
  family_id uuid not null references public.families(id) on delete cascade,
  family_session_id uuid unique references public.family_voyage_sessions(id) on delete cascade,
  timezone text not null,
  status text not null default 'active' check(status in ('active','completed')),
  created_at timestamptz not null default now(),
  completed_at timestamptz
);
create table public.verified_attempt_people (
  attempt_id uuid not null references public.verified_lesson_attempts(id) on delete cascade,
  user_id uuid not null references public.user_accounts(id),
  profile_id uuid references public.learner_profiles(id) on delete restrict,
  primary key(attempt_id,user_id),
  unique(attempt_id,profile_id)
);
create table public.verified_exercise_receipts (
  attempt_id uuid not null,
  user_id uuid not null,
  exercise_index integer not null check(exercise_index>=0),
  answer jsonb not null,
  correct boolean not null,
  reward integer not null check(reward between 0 and 1),
  evidence_kind text not null check(evidence_kind in ('graded','self_reported')),
  created_at timestamptz not null default now(),
  primary key(attempt_id,user_id,exercise_index),
  foreign key(attempt_id,user_id) references public.verified_attempt_people(attempt_id,user_id) on delete cascade
);
-- A receipt ledger, unlike the legacy UI totals, makes reward attribution auditable.
create table public.verified_lesson_awards (
  profile_id uuid not null references public.learner_profiles(id),
  pack_id text not null,
  lesson_id text not null,
  attempt_id uuid not null references public.verified_lesson_attempts(id),
  stars integer not null,
  primary key(profile_id,pack_id,lesson_id)
);

alter table public.verified_lesson_catalog enable row level security;
alter table public.verified_lesson_attempts enable row level security;
alter table public.verified_attempt_people enable row level security;
alter table public.verified_exercise_receipts enable row level security;
alter table public.verified_lesson_awards enable row level security;
revoke all on public.verified_lesson_catalog,public.verified_lesson_attempts,public.verified_attempt_people,
public.verified_exercise_receipts,public.verified_lesson_awards from public,anon,authenticated;
grant select,insert on public.verified_lesson_catalog to service_role;

create function public.validate_verified_catalog() returns trigger language plpgsql set search_path=public as $$
declare exercise jsonb;
begin
  if tg_op<>'INSERT' then raise exception 'Publish a new immutable catalog revision'; end if;
  if new.lesson_id <> 'voyage-' || new.voyage_position then raise exception 'Lesson position does not match ID'; end if;
  for exercise in select value from jsonb_array_elements(new.exercises) loop
    if exercise->>'kind' is null or exercise->>'kind' not in ('quiz','match','self_report') then
      raise exception 'Unsupported verified exercise';
    end if;
    if exercise->>'kind'='quiz' then
      if jsonb_typeof(exercise->'answer') is distinct from 'string'
         or jsonb_typeof(exercise->'choices') is distinct from 'array'
         or not (exercise->'choices' @> jsonb_build_array(exercise->'answer')) then
        raise exception 'Quiz needs a canonical answer among its choices';
      end if;
    elsif exercise->>'kind'='match' then
      if jsonb_typeof(exercise->'answer') is distinct from 'object' or exercise->'answer'='{}'::jsonb then
        raise exception 'Match needs canonical pairs';
      end if;
    end if;
  end loop;
  return new;
end;
$$;
create trigger verified_catalog_immutable before insert or update or delete on public.verified_lesson_catalog
for each row execute function public.validate_verified_catalog();

create function public.require_verified_actor(target_attempt uuid) returns void
language plpgsql stable security definer set search_path=public as $$
begin
  if auth.uid() is null or not exists (
    select 1 from public.verified_attempt_people p
    join public.verified_lesson_attempts a on a.id=p.attempt_id
    where p.attempt_id=target_attempt and p.user_id=auth.uid()
      and public.is_family_member(a.family_id)
      and (p.profile_id is null or public.can_access_profile(p.profile_id))
  ) then raise exception 'Attempt participant access required'; end if;
end;
$$;

create function public.get_verified_attempt(target_attempt uuid) returns jsonb
language plpgsql stable security definer set search_path=public as $$
declare a public.verified_lesson_attempts%rowtype; c public.verified_lesson_catalog%rowtype;
  current_index integer; public_exercises jsonb;
begin
  perform public.require_verified_actor(target_attempt);
  select * into a from public.verified_lesson_attempts where id=target_attempt;
  select * into c from public.verified_lesson_catalog where id=a.catalog_id;
  select min(n)::integer into current_index from (
    select count(r.exercise_index) n from public.verified_attempt_people p
    left join public.verified_exercise_receipts r on r.attempt_id=p.attempt_id and r.user_id=p.user_id
    where p.attempt_id=target_attempt group by p.user_id
  ) counts;
  select jsonb_agg(value-'answer' order by ordinality) into public_exercises
  from jsonb_array_elements(c.exercises) with ordinality;
  return jsonb_build_object('id',a.id,'status',a.status,'lessonId',c.lesson_id,
    'revision',c.revision,'exerciseIndex',current_index,'exercises',public_exercises,
    'receipts',(select coalesce(jsonb_agg(jsonb_build_object('index',exercise_index,'correct',correct,
      'reward',reward,'evidence',evidence_kind) order by exercise_index),'[]'::jsonb)
      from public.verified_exercise_receipts where attempt_id=a.id and user_id=auth.uid()));
end;
$$;

create function public.begin_verified_attempt(
  target_catalog uuid, target_profile uuid default null,
  target_family_session uuid default null, requested_timezone text default 'UTC'
) returns jsonb language plpgsql security definer set search_path=public as $$
declare c public.verified_lesson_catalog%rowtype; s public.family_voyage_sessions%rowtype;
  family uuid; attempt uuid;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select * into c from public.verified_lesson_catalog where id=target_catalog;
  if c.id is null then raise exception 'Published lesson not found'; end if;
  if not exists(select 1 from pg_timezone_names where name=requested_timezone) then raise exception 'Unknown timezone'; end if;
  if c.mode='family' then
    if target_profile is not null then raise exception 'Family attempt uses the session roster'; end if;
    select * into s from public.family_voyage_sessions where id=target_family_session for update;
    if s.id is null or s.controlling_adult is distinct from auth.uid() then raise exception 'Controlling adult required'; end if;
    perform public.require_family_adult(s.family_id);
    if s.status not in ('draft','live','paused') then raise exception 'Family session is finished'; end if;
    if (s.pack_id,s.pack_version,s.lesson_id,s.voyage_day) is distinct from (c.pack_id,c.pack_version,c.lesson_id,c.voyage_position) then
      raise exception 'Catalog does not match family session';
    end if;
    family:=s.family_id;
    select id into attempt from public.verified_lesson_attempts where family_session_id=s.id;
    if attempt is not null then
      if (select catalog_id from public.verified_lesson_attempts where id=attempt)<>target_catalog then raise exception 'Attempt revision already pinned'; end if;
      return public.get_verified_attempt(attempt);
    end if;
    if s.current_segment<>0 then raise exception 'Start verification before beginning the lesson'; end if;
    if not exists(select 1 from public.family_voyage_participants where session_id=s.id) or exists(
      select 1 from public.family_voyage_participants p join public.learner_profiles lp on lp.id=p.profile_id
      where p.session_id=s.id and (lp.linked_user_id is null or lp.linked_user_id=s.controlling_adult)
    ) then raise exception 'Each learner needs a distinct linked account'; end if;
    requested_timezone:=s.timezone;
  else
    if target_family_session is not null or target_profile is null or not public.can_access_profile(target_profile) then
      raise exception 'Learner access required'; end if;
    select family_id into family from public.learner_profiles where id=target_profile for update;
    select a.id into attempt from public.verified_lesson_attempts a
      join public.verified_attempt_people p on p.attempt_id=a.id
      where a.catalog_id=c.id and a.status='active' and a.family_session_id is null
        and p.profile_id=target_profile and p.user_id=auth.uid();
    if attempt is not null then return public.get_verified_attempt(attempt); end if;
    -- Existing earned lessons are preserved; new lessons cannot skip predecessors.
    for prior_position in 1..(c.voyage_position-1) loop
      if not exists(select 1 from public.completed_lessons where profile_id=target_profile and pack_id=c.pack_id and lesson_id='voyage-'||prior_position)
      and not exists(select 1 from public.family_voyage_sessions fs join public.family_voyage_participants fp on fp.session_id=fs.id
        where fp.profile_id=target_profile and fs.pack_id=c.pack_id and fs.lesson_id='voyage-'||prior_position and fs.status='completed') then
        raise exception 'Complete preceding voyage lessons first';
      end if;
    end loop;
  end if;
  if not exists(select 1 from public.family_languages where family_id=family and pack_id=c.pack_id and pack_version=c.pack_version) then
    raise exception 'Language is not enabled for this family'; end if;
  if not exists(select 1 from pg_timezone_names where name=requested_timezone) then raise exception 'Unknown timezone'; end if;
  insert into public.verified_lesson_attempts(catalog_id,family_id,family_session_id,timezone)
  values(c.id,family,target_family_session,requested_timezone) returning id into attempt;
  if c.mode='family' then
    insert into public.verified_attempt_people(attempt_id,user_id,profile_id)
    select attempt,lp.linked_user_id,p.profile_id from public.family_voyage_participants p
    join public.learner_profiles lp on lp.id=p.profile_id where p.session_id=s.id;
    insert into public.verified_attempt_people(attempt_id,user_id) values(attempt,s.controlling_adult);
  else
    insert into public.verified_attempt_people(attempt_id,user_id,profile_id) values(attempt,auth.uid(),target_profile);
  end if;
  return public.get_verified_attempt(attempt);
end;
$$;

-- Prevent older Family Play RPCs from bypassing a verified session's evidence.
create function public.guard_verified_family_session() returns trigger language plpgsql security definer set search_path=public as $$
declare a public.verified_lesson_attempts%rowtype;
begin
  select * into a from public.verified_lesson_attempts where family_session_id=old.id;
  if a.id is null then return new; end if;
  if new.controlling_adult is distinct from old.controlling_adult then
    raise exception 'Verified roster is fixed; cancel and restart to change controller'; end if;
  if new.current_segment is distinct from old.current_segment then
    raise exception 'Verified sessions advance through exercise receipts'; end if;
  if new.status='completed' and old.status<>'completed' and a.status<>'completed' then
    raise exception 'All verified exercises must be completed by everyone'; end if;
  return new;
end;
$$;
create trigger guard_verified_family_session before update on public.family_voyage_sessions
for each row execute function public.guard_verified_family_session();

create function public.submit_verified_exercise(target_attempt uuid, target_index integer, response jsonb)
returns jsonb language plpgsql security definer set search_path=public as $$
declare a public.verified_lesson_attempts%rowtype; c public.verified_lesson_catalog%rowtype;
  s public.family_voyage_sessions%rowtype; exercise jsonb; existing public.verified_exercise_receipts%rowtype;
  current_index integer; result boolean; points integer; total_required integer; total_received integer;
  person record; won integer;
begin
  perform public.require_verified_actor(target_attempt);
  -- Always lock family row before attempt row: legacy control RPCs take this lock order.
  select * into a from public.verified_lesson_attempts where id=target_attempt;
  if a.family_session_id is not null then
    select * into s from public.family_voyage_sessions where id=a.family_session_id for update;
    if s.status not in ('live','completed') then raise exception 'Family session must be live'; end if;
  end if;
  select * into a from public.verified_lesson_attempts where id=target_attempt for update;
  select * into c from public.verified_lesson_catalog where id=a.catalog_id;
  if target_index is null or target_index<0 or target_index>=jsonb_array_length(c.exercises)
     or response is null or pg_column_size(response)>65536 then raise exception 'Invalid exercise response'; end if;
  select * into existing from public.verified_exercise_receipts
    where attempt_id=a.id and user_id=auth.uid() and exercise_index=target_index;
  if found then
    if existing.answer is distinct from response then raise exception 'Answer is already locked'; end if;
    return jsonb_build_object('correct',existing.correct,'reward',existing.reward,'completed',a.status='completed','duplicate',true);
  end if;
  if a.status<>'active' then raise exception 'Attempt already completed'; end if;
  select min(n)::integer into current_index from (
    select count(r.exercise_index) n from public.verified_attempt_people p
    left join public.verified_exercise_receipts r on r.attempt_id=p.attempt_id and r.user_id=p.user_id
    where p.attempt_id=a.id group by p.user_id
  ) counts;
  if target_index<>current_index then raise exception 'Finish the current exercise together first'; end if;
  exercise:=c.exercises->target_index;
  if exercise->>'kind'='self_report' then
    if response<>'true'::jsonb then raise exception 'Explicit self-report confirmation required'; end if;
    result:=true; points:=0;
  else
    if exercise->>'kind'='quiz' and not (exercise->'choices' @> jsonb_build_array(response)) then
      raise exception 'Answer is not an offered choice'; end if;
    result:=response=exercise->'answer'; points:=case when result then 1 else 0 end;
    if exercise->>'kind'='match' and not result then
      return jsonb_build_object('correct',false,'reward',0,'completed',false,'retry',true);
    end if;
  end if;
  insert into public.verified_exercise_receipts(attempt_id,user_id,exercise_index,answer,correct,reward,evidence_kind)
  values(a.id,auth.uid(),target_index,response,result,points,case when exercise->>'kind'='self_report' then 'self_reported' else 'graded' end);
  select count(*)*jsonb_array_length(c.exercises) into total_required from public.verified_attempt_people where attempt_id=a.id;
  select count(*) into total_received from public.verified_exercise_receipts where attempt_id=a.id;
  if total_received=total_required then
    update public.verified_lesson_attempts set status='completed',completed_at=now() where id=a.id;
    for person in select * from public.verified_attempt_people where attempt_id=a.id and profile_id is not null order by profile_id loop
      select coalesce(sum(reward),0)::integer into won from public.verified_exercise_receipts where attempt_id=a.id and user_id=person.user_id;
      insert into public.completed_lessons(profile_id,pack_id,pack_version,lesson_id,operation_id)
      values(person.profile_id,c.pack_id,c.pack_version,c.lesson_id,gen_random_uuid())
      on conflict(profile_id,pack_id,lesson_id) do nothing;
      if found then
        insert into public.verified_lesson_awards(profile_id,pack_id,lesson_id,attempt_id,stars)
        values(person.profile_id,c.pack_id,c.lesson_id,a.id,won);
        insert into public.learner_language_progress(profile_id,pack_id,pack_version,stars)
        values(person.profile_id,c.pack_id,c.pack_version,won)
        on conflict(profile_id,pack_id) do update set stars=public.learner_language_progress.stars+excluded.stars,updated_at=now();
      end if;
      insert into public.activity_history(profile_id,pack_id,pack_version,local_date,timezone,operation_id)
      values(person.profile_id,c.pack_id,c.pack_version,(now() at time zone a.timezone)::date,a.timezone,gen_random_uuid())
      on conflict(profile_id,pack_id,local_date) do nothing;
    end loop;
    if a.family_session_id is not null then
      if not s.is_review and s.voyage_day<>(select count(*)+1 from public.family_voyage_sessions
        where family_id=s.family_id and pack_id=s.pack_id and status='completed' and not is_review) then
        raise exception 'Family voyage position changed'; end if;
      update public.family_voyage_sessions set status='completed',completed_at=now(),updated_at=now() where id=s.id;
      update public.family_voyage_participants set status='credited',credited_at=now() where session_id=s.id;
    end if;
  end if;
  return jsonb_build_object('correct',result,'reward',points,'completed',total_received=total_required,
    'evidence',case when exercise->>'kind'='self_report' then 'self_reported' else 'graded' end,
    'correctAnswer',case when exercise->>'kind'='quiz' then exercise->'answer' else null end);
end;
$$;

revoke all on function public.validate_verified_catalog(),public.require_verified_actor(uuid),
public.guard_verified_family_session() from public,anon,authenticated;
revoke all on function public.begin_verified_attempt(uuid,uuid,uuid,text),public.get_verified_attempt(uuid),
public.submit_verified_exercise(uuid,integer,jsonb) from public,anon;
grant execute on function public.begin_verified_attempt(uuid,uuid,uuid,text),public.get_verified_attempt(uuid),
public.submit_verified_exercise(uuid,integer,jsonb) to authenticated;

-- Catalog discovery exposes identifiers only, never canonical answer keys.
grant select(id,pack_id,pack_version,lesson_id,revision,mode,voyage_position)
  on public.verified_lesson_catalog to authenticated;
create policy verified_catalog_discovery on public.verified_lesson_catalog
  for select to authenticated using(auth.uid() is not null);
