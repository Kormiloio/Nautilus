-- Server-validated sentence building for reviewed, versioned language-pack content.
-- Ordered answer tokens remain private to the catalog until feedback is returned.

create or replace function public.validate_verified_catalog() returns trigger language plpgsql set search_path=public as $$
declare exercise jsonb;
begin
  if tg_op<>'INSERT' then raise exception 'Publish a new immutable catalog revision'; end if;
  if new.mode<>'practice' and new.lesson_id <> 'voyage-' || new.voyage_position then raise exception 'Lesson position does not match ID'; end if;
  for exercise in select value from jsonb_array_elements(new.exercises) loop
    if exercise->>'kind' is null or exercise->>'kind' not in ('quiz','match','sentence_builder','self_report') then
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
    elsif exercise->>'kind'='sentence_builder' then
      if jsonb_typeof(exercise->'answer') is distinct from 'array'
         or jsonb_typeof(exercise->'tokens') is distinct from 'array'
         or jsonb_array_length(exercise->'answer') < 2
         or jsonb_array_length(exercise->'tokens') <> jsonb_array_length(exercise->'answer')
         or not ((exercise->'tokens') @> (exercise->'answer') and (exercise->'answer') @> (exercise->'tokens')) then
        raise exception 'Sentence builder needs the same reviewed token set and ordered answer';
      end if;
    end if;
  end loop;
  return new;
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
      'reward',reward,'answer',answer,'correctAnswer',case when c.exercises->exercise_index->>'kind' in ('quiz','sentence_builder') then c.exercises->exercise_index->'answer' else null end,'evidence',evidence_kind) order by exercise_index),'[]'::jsonb)
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
    if exercise->>'kind'='sentence_builder' and jsonb_typeof(response) is distinct from 'array' then
      raise exception 'Sentence builder needs an ordered token response'; end if;
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
    'correctAnswer',case when exercise->>'kind' in ('quiz','sentence_builder') then exercise->'answer' else null end);
end;
$$;
