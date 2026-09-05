-- Coordinated verified-screen cutover. Publish the catalog before release.
alter table public.verified_lesson_catalog drop constraint verified_lesson_catalog_mode_check;
alter table public.verified_lesson_catalog add constraint verified_lesson_catalog_mode_check check(mode in ('individual','family','practice'));
alter table public.verified_lesson_catalog add column topic_id text;
alter table public.verified_lesson_catalog add column is_checkpoint boolean not null default false;
alter table public.verified_lesson_attempts add column updated_at timestamptz not null default now();
create or replace function public.validate_verified_catalog() returns trigger language plpgsql set search_path=public as $$
declare exercise jsonb;
begin
  if tg_op<>'INSERT' then raise exception 'Publish a new immutable catalog revision'; end if;
  if new.mode<>'practice' and new.lesson_id <> 'voyage-' || new.voyage_position then raise exception 'Lesson position does not match ID'; end if;
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
create or replace function public.begin_verified_attempt(
  target_catalog uuid, target_profile uuid default null,
  target_family_session uuid default null, requested_timezone text default 'UTC'
) returns jsonb language plpgsql security definer set search_path=public as $$
declare c public.verified_lesson_catalog%rowtype; s public.family_voyage_sessions%rowtype;
  family uuid; attempt uuid;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select * into c from public.verified_lesson_catalog where id=target_catalog;
  if c.id is null then raise exception 'Published lesson not found'; end if;
  if c.revision <> (select max(revision) from public.verified_lesson_catalog
    where pack_id=c.pack_id and pack_version=c.pack_version and lesson_id=c.lesson_id and mode=c.mode) then
    raise exception 'A newer verified lesson revision is required';
  end if;
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
    if target_family_session is not null or target_profile is null or not exists(
      select 1 from public.learner_profiles where id=target_profile and linked_user_id=auth.uid()
    ) then raise exception 'The linked learner account is required for individual credit'; end if;
    select family_id into family from public.learner_profiles where id=target_profile for update;
    select a.id into attempt from public.verified_lesson_attempts a
      join public.verified_attempt_people p on p.attempt_id=a.id
      where a.catalog_id=c.id and a.status='active' and a.family_session_id is null
        and p.profile_id=target_profile and p.user_id=auth.uid();
    if attempt is not null then return public.get_verified_attempt(attempt); end if;
    -- Existing earned lessons are preserved; new lessons cannot skip predecessors.
    for prior_position in 1..(case when c.mode='practice' then 0 else c.voyage_position-1 end) loop
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
create or replace function public.get_verified_attempt(target_attempt uuid) returns jsonb
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
    'mode',c.mode,'topicId',c.topic_id,'familySessionId',a.family_session_id,'revision',c.revision,'exerciseIndex',current_index,'exercises',public_exercises,
     'people',(select jsonb_agg(jsonb_build_object('userId',p.user_id,'name',coalesce(lp.display_name,'Parent'),
      'locked',exists(select 1 from public.verified_exercise_receipts r where r.attempt_id=p.attempt_id and r.user_id=p.user_id and r.exercise_index=current_index)))
      from public.verified_attempt_people p left join public.learner_profiles lp on lp.id=p.profile_id where p.attempt_id=a.id),
    'receipts',(select coalesce(jsonb_agg(jsonb_build_object('index',exercise_index,'correct',correct,
      'reward',reward,'answer',answer,'correctAnswer',case when c.exercises->exercise_index->>'kind'='quiz' then c.exercises->exercise_index->'answer' else null end,'evidence',evidence_kind) order by exercise_index),'[]'::jsonb)
      from public.verified_exercise_receipts where attempt_id=a.id and user_id=auth.uid()));
end;
$$;
create or replace function public.submit_verified_exercise(target_attempt uuid, target_index integer, response jsonb)
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
  update public.verified_lesson_attempts set updated_at=now() where id=a.id;
  select count(*)*jsonb_array_length(c.exercises) into total_required from public.verified_attempt_people where attempt_id=a.id;
  select count(*) into total_received from public.verified_exercise_receipts where attempt_id=a.id;
  if total_received=total_required then
    update public.verified_lesson_attempts set status='completed',completed_at=now() where id=a.id;
    for person in select * from public.verified_attempt_people where attempt_id=a.id and profile_id is not null order by profile_id loop
      select coalesce(sum(reward),0)::integer into won from public.verified_exercise_receipts where attempt_id=a.id and user_id=person.user_id;
      if c.mode<>'practice' then
        insert into public.completed_lessons(profile_id,pack_id,pack_version,lesson_id,operation_id)
        values(person.profile_id,c.pack_id,c.pack_version,c.lesson_id,gen_random_uuid())
        on conflict(profile_id,pack_id,lesson_id) do nothing;
        if not found then won:=0; end if;
      end if;
      insert into public.verified_lesson_awards(profile_id,pack_id,lesson_id,attempt_id,stars)
      values(person.profile_id,c.pack_id,c.lesson_id,a.id,won)
      on conflict(profile_id,pack_id,lesson_id) do nothing;
      if found then
        insert into public.learner_language_progress(profile_id,pack_id,pack_version,stars,dialogues_done)
        values(person.profile_id,c.pack_id,c.pack_version,won,
          case when c.mode='practice' and c.lesson_id like '%:dialogue' then 1 else 0 end)
        on conflict(profile_id,pack_id) do update set stars=public.learner_language_progress.stars+excluded.stars,
          dialogues_done=public.learner_language_progress.dialogues_done+excluded.dialogues_done,updated_at=now();
      end if;
      if c.topic_id is not null and (c.is_checkpoint or (c.mode='practice' and c.lesson_id like '%:match')) then
        insert into public.completed_topics(profile_id,pack_id,pack_version,topic_id,operation_id)
        values(person.profile_id,c.pack_id,c.pack_version,c.topic_id,gen_random_uuid()) on conflict(profile_id,pack_id,topic_id) do nothing;
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
-- No browser may claim arbitrary progress, including through the transitional RPC.
revoke insert,update,delete on public.completed_lessons,public.completed_topics,public.activity_history from authenticated;
revoke all on function public.increment_progress_counter(uuid,uuid,text,text,text,integer) from public,anon,authenticated;

create function public.get_verified_family_attempt(target_session uuid) returns jsonb
language plpgsql stable security definer set search_path=public as $$
declare attempt uuid;
begin
  if auth.uid() is null or not exists(select 1 from public.family_voyage_sessions s where s.id=target_session and public.is_family_member(s.family_id)) then
    raise exception 'Family access required'; end if;
  select id into attempt from public.verified_lesson_attempts where family_session_id=target_session;
  if attempt is null then return null; end if;
  return public.get_verified_attempt(attempt);
end;
$$;
revoke all on function public.get_verified_family_attempt(uuid) from public,anon;
grant execute on function public.get_verified_family_attempt(uuid) to authenticated;

-- Make creation + catalog pinning atomic. Legacy helpers are never client-callable.
alter function public.start_family_play(uuid,text,text,text,integer,date,text,uuid[]) rename to start_family_play_unverified_internal;
revoke all on function public.start_family_play_unverified_internal(uuid,text,text,text,integer,date,text,uuid[]) from public,anon,authenticated;
create function public.start_family_play(target_family uuid,target_pack_id text,target_pack_version text,target_lesson_id text,
 target_voyage_day integer,target_local_date date,target_timezone text,participant_profiles uuid[] default array[]::uuid[])
returns uuid language plpgsql security definer set search_path=public as $$
declare session uuid; catalog uuid;
begin
  if target_local_date is null then raise exception 'Local date is required'; end if;
  select id into catalog from public.verified_lesson_catalog where pack_id=target_pack_id and pack_version=target_pack_version
    and lesson_id=target_lesson_id and mode='family' order by revision desc limit 1;
  if catalog is null then raise exception 'Verified curriculum is not published for this lesson'; end if;
  session:=public.start_family_play_unverified_internal(target_family,target_pack_id,target_pack_version,target_lesson_id,target_voyage_day,
    (now() at time zone target_timezone)::date,target_timezone,participant_profiles);
  perform public.begin_verified_attempt(catalog,null,session,target_timezone);
  return session;
end;
$$;
revoke all on function public.start_family_play(uuid,text,text,text,integer,date,text,uuid[]) from public,anon;
grant execute on function public.start_family_play(uuid,text,text,text,integer,date,text,uuid[]) to authenticated;
alter function public.start_family_review(uuid,uuid[]) rename to start_family_review_unverified_internal;
revoke all on function public.start_family_review_unverified_internal(uuid,uuid[]) from public,anon,authenticated;
create function public.start_family_review(source_session uuid,participant_profiles uuid[] default array[]::uuid[])
returns uuid language plpgsql security definer set search_path=public as $$
declare session uuid; catalog uuid; s public.family_voyage_sessions%rowtype;
begin
  session:=public.start_family_review_unverified_internal(source_session,participant_profiles);
  select * into s from public.family_voyage_sessions where id=session;
  select id into catalog from public.verified_lesson_catalog where pack_id=s.pack_id and pack_version=s.pack_version
    and lesson_id=s.lesson_id and mode='family' order by revision desc limit 1;
  if catalog is null then raise exception 'Verified curriculum is not published for this lesson'; end if;
  perform public.begin_verified_attempt(catalog,null,session,s.timezone); return session;
end;
$$;
revoke all on function public.start_family_review(uuid,uuid[]) from public,anon;
grant execute on function public.start_family_review(uuid,uuid[]) to authenticated;
-- Old sessions keep their existing records but cannot acquire unverified credit.
create function public.require_verified_family_completion() returns trigger language plpgsql security definer set search_path=public as $$
begin
  if new.status='completed' and old.status<>'completed' and not exists(
    select 1 from public.verified_lesson_attempts where family_session_id=new.id and status='completed') then
    raise exception 'Restart this older session to complete it with verified play'; end if;
  return new;
end;
$$;
create trigger require_verified_family_completion before update of status on public.family_voyage_sessions
for each row execute function public.require_verified_family_completion();
revoke all on function public.require_verified_family_completion() from public,anon,authenticated;

revoke all on function public.complete_family_play(uuid) from public,anon,authenticated;
revoke all on function public.submit_family_quiz_answer(uuid,integer,text) from public,anon,authenticated;
revoke all on function public.lock_family_final_challenge(uuid,integer) from public,anon,authenticated;
revoke all on function public.reconcile_family_quiz_round(uuid,integer) from public,anon,authenticated;

-- Family clients need a sanitized realtime signal when another participant locks in.
-- Attempts contain no answer keys; receipts and people remain RPC-only.
create policy verified_lesson_attempts_family_read on public.verified_lesson_attempts
for select to authenticated using(public.is_family_member(family_id));
grant select on public.verified_lesson_attempts to authenticated;
do $$
begin
  if exists(select 1 from pg_publication where pubname='supabase_realtime' and not puballtables)
     and not exists(select 1 from pg_publication_tables where pubname='supabase_realtime'
       and schemaname='public' and tablename='verified_lesson_attempts') then
    alter publication supabase_realtime add table public.verified_lesson_attempts;
  end if;
end;
$$;

-- Count-only deployment contract. The host refuses frontend releases until
-- the required immutable catalog is present, without exposing lesson content.
create function public.get_verified_catalog_status() returns jsonb
language sql stable security definer set search_path=public as $$
  with latest as (
    select max(revision) as revision from public.verified_lesson_catalog
  ), counts as (
    select mode,count(*)::integer as count
    from public.verified_lesson_catalog,latest
    where verified_lesson_catalog.revision=latest.revision group by mode
  )
  select jsonb_build_object(
    'contractVersion',1,
    'revision',(select revision from latest),
    'individual',coalesce((select count from counts where mode='individual'),0),
    'family',coalesce((select count from counts where mode='family'),0),
    'practice',coalesce((select count from counts where mode='practice'),0)
  );
$$;
revoke all on function public.get_verified_catalog_status() from public,authenticated,service_role;
grant execute on function public.get_verified_catalog_status() to anon;
