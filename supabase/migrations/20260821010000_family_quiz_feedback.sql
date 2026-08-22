-- Keep a fully answered quiz on screen briefly so every device can reveal
-- right/wrong feedback before reconcile_family_quiz_round advances it.

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
begin
  select * into session_row from public.family_voyage_sessions
  where id=target_session for update;
  if session_row.id is null then raise exception 'Family session not found'; end if;
  if session_row.status<>'live' then raise exception 'Family session is not live'; end if;
  if target_segment<>session_row.current_segment then raise exception 'This quiz round has already moved on'; end if;
  if nullif(trim(selected_answer),'') is null then raise exception 'Choose an answer'; end if;

  select lp.id into learner_profile
  from public.family_voyage_participants p
  join public.learner_profiles lp on lp.id=p.profile_id
  where p.session_id=target_session and lp.linked_user_id=auth.uid();

  if auth.uid()<>session_row.controlling_adult and learner_profile is null then
    raise exception 'Only invited learners and the controlling parent can answer';
  end if;

  insert into public.family_quiz_answers(session_id,segment,user_id,profile_id,answer_id)
  values(target_session,target_segment,auth.uid(),learner_profile,trim(selected_answer))
  on conflict(session_id,segment,user_id) do nothing;

  select count(*)+1 into expected_answers
  from public.family_voyage_participants where session_id=target_session;
  select count(*) into received_answers
  from public.family_quiz_answers where session_id=target_session and segment=target_segment;

  return jsonb_build_object(
    'locked',true,
    'received',received_answers,
    'expected',expected_answers,
    'readyForReveal',received_answers>=expected_answers,
    'advanced',false
  );
end;
$$;

grant execute on function public.submit_family_quiz_answer(uuid,integer,text) to authenticated;
