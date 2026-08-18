-- Shared Family Play quiz answers. Every invited learner and the controlling
-- adult locks one answer; the database advances the session atomically after
-- the final required answer arrives.

create table public.family_quiz_answers (
  session_id uuid not null references public.family_voyage_sessions(id) on delete cascade,
  segment integer not null check (segment >= 0),
  user_id uuid not null references public.user_accounts(id) on delete cascade,
  profile_id uuid references public.learner_profiles(id) on delete cascade,
  answer_id text not null check (char_length(answer_id) between 1 and 160),
  submitted_at timestamptz not null default now(),
  primary key (session_id, segment, user_id)
);

alter table public.family_quiz_answers enable row level security;

create policy family_quiz_answers_member_read on public.family_quiz_answers
  for select using (
    exists (
      select 1 from public.family_voyage_sessions s
      where s.id = session_id and public.is_family_member(s.family_id)
    )
  );

grant select on public.family_quiz_answers to authenticated;

create or replace function public.submit_family_quiz_answer(
  target_session uuid,
  target_segment integer,
  selected_answer text
)
returns jsonb language plpgsql security definer set search_path = public
as $$
declare
  session_row public.family_voyage_sessions%rowtype;
  learner_profile uuid;
  expected_answers integer;
  received_answers integer;
  did_advance boolean := false;
begin
  select * into session_row from public.family_voyage_sessions
  where id = target_session for update;
  if session_row.id is null then raise exception 'Family session not found'; end if;
  if session_row.status <> 'live' then raise exception 'Family session is not live'; end if;
  if target_segment <> session_row.current_segment then raise exception 'This quiz round has already moved on'; end if;
  if nullif(trim(selected_answer), '') is null then raise exception 'Choose an answer'; end if;

  select lp.id into learner_profile
  from public.family_voyage_participants p
  join public.learner_profiles lp on lp.id = p.profile_id
  where p.session_id = target_session and lp.linked_user_id = auth.uid();

  if auth.uid() <> session_row.controlling_adult and learner_profile is null then
    raise exception 'Only invited learners and the controlling parent can answer';
  end if;

  insert into public.family_quiz_answers(session_id, segment, user_id, profile_id, answer_id)
  values(target_session, target_segment, auth.uid(), learner_profile, trim(selected_answer))
  on conflict (session_id, segment, user_id) do nothing;

  select count(*) + 1 into expected_answers
  from public.family_voyage_participants where session_id = target_session;
  select count(*) into received_answers
  from public.family_quiz_answers where session_id = target_session and segment = target_segment;

  if received_answers >= expected_answers then
    update public.family_voyage_sessions
    set current_segment = current_segment + 1, updated_at = now()
    where id = target_session;
    did_advance := true;
  end if;

  return jsonb_build_object(
    'locked', true,
    'received', received_answers,
    'expected', expected_answers,
    'advanced', did_advance
  );
end;
$$;

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
      'quizAnswers', coalesce((select jsonb_agg(jsonb_build_object(
        'userId',qa.user_id, 'profileId',qa.profile_id, 'answerId',qa.answer_id,
        'name',coalesce(lp.display_name,answer_user.display_name,answer_user.email),
        'isCurrentUser',qa.user_id=auth.uid()
      ) order by qa.submitted_at) from public.family_quiz_answers qa
        left join public.learner_profiles lp on lp.id=qa.profile_id
        join public.user_accounts answer_user on answer_user.id=qa.user_id
        where qa.session_id=a.id and qa.segment=a.current_segment),'[]'::jsonb),
      'participants', coalesce((select jsonb_agg(jsonb_build_object(
        'profileId',p.profile_id, 'name',lp.display_name, 'status',p.status,
        'linked',lp.linked_user_id is not null, 'lastSeenAt',p.last_seen_at,
        'isCurrentUser',lp.linked_user_id=auth.uid()
      ) order by lp.display_name) from public.family_voyage_participants p
        join public.learner_profiles lp on lp.id=p.profile_id where p.session_id=a.id),'[]'::jsonb)
    ) from public.family_voyage_sessions a join public.user_accounts ua on ua.id=a.controlling_adult
      where a.family_id=target_family and a.pack_id=target_pack_id and a.status in ('draft','live','paused') limit 1)
  ) into result from public.family_voyage_sessions s where s.family_id=target_family and s.pack_id=target_pack_id;
  return coalesce(result,jsonb_build_object('completedDays',0,'completedDates','[]'::jsonb,'activeSession',null));
end;
$$;

grant execute on function public.submit_family_quiz_answer(uuid, integer, text) to authenticated;
alter publication supabase_realtime add table public.family_quiz_answers;
