-- Complete the final Family Play challenge when every invited learner and the
-- controlling adult locks in. Whoever locks last triggers completion.

create or replace function public.lock_family_final_challenge(target_session uuid, target_segment integer)
returns jsonb language plpgsql security definer set search_path = public
as $$
declare
  session_row public.family_voyage_sessions%rowtype;
  learner_profile uuid;
  expected_locks integer;
  received_locks integer;
  expected_day integer;
  did_complete boolean := false;
begin
  select * into session_row from public.family_voyage_sessions where id=target_session for update;
  if session_row.id is null then raise exception 'Family session not found'; end if;
  if session_row.status <> 'live' then raise exception 'Family session is not live'; end if;
  if target_segment <> session_row.current_segment then raise exception 'This challenge has already moved on'; end if;

  select lp.id into learner_profile
  from public.family_voyage_participants p
  join public.learner_profiles lp on lp.id=p.profile_id
  where p.session_id=target_session and lp.linked_user_id=auth.uid();
  if auth.uid() <> session_row.controlling_adult and learner_profile is null then
    raise exception 'Only invited learners and the controlling parent can finish this challenge';
  end if;

  insert into public.family_quiz_answers(session_id,segment,user_id,profile_id,answer_id)
  values(target_session,target_segment,auth.uid(),learner_profile,'__final_challenge_complete__')
  on conflict(session_id,segment,user_id) do nothing;

  select count(*)+1 into expected_locks from public.family_voyage_participants where session_id=target_session;
  select count(*) into received_locks from public.family_quiz_answers
  where session_id=target_session and segment=target_segment and answer_id='__final_challenge_complete__';

  if received_locks >= expected_locks then
    if not session_row.is_review then
      select count(*)::integer+1 into expected_day from public.family_voyage_sessions
      where family_id=session_row.family_id and pack_id=session_row.pack_id and status='completed' and not is_review;
      if session_row.voyage_day<>expected_day then raise exception 'Family voyage position changed; expected day %',expected_day; end if;
    end if;
    update public.family_voyage_sessions set status='completed',completed_at=now(),updated_at=now() where id=target_session;
    update public.family_voyage_participants set status='credited',credited_at=now(),last_seen_at=now() where session_id=target_session;
    did_complete:=true;
  end if;

  return jsonb_build_object('locked',true,'received',received_locks,'expected',expected_locks,'completed',did_complete);
end;
$$;

grant execute on function public.lock_family_final_challenge(uuid,integer) to authenticated;
