-- Recover quiz rounds when all answers are present but a pause, reconnect, or
-- missed realtime event prevented the original submit call from advancing.

create or replace function public.reconcile_family_quiz_round(target_session uuid, target_segment integer)
returns jsonb language plpgsql security definer set search_path = public
as $$
declare
  session_row public.family_voyage_sessions%rowtype;
  expected_answers integer;
  received_answers integer;
  did_advance boolean := false;
begin
  select * into session_row from public.family_voyage_sessions where id=target_session for update;
  if session_row.id is null then raise exception 'Family session not found'; end if;
  if not public.is_family_member(session_row.family_id) then raise exception 'Family access required'; end if;

  if session_row.current_segment <> target_segment or session_row.status not in ('live','paused') then
    return jsonb_build_object('advanced',false,'currentSegment',session_row.current_segment);
  end if;

  select count(*)+1 into expected_answers from public.family_voyage_participants where session_id=target_session;
  select count(*) into received_answers from public.family_quiz_answers
  where session_id=target_session and segment=target_segment and answer_id<>'__final_challenge_complete__';

  if received_answers >= expected_answers then
    update public.family_voyage_sessions
    set current_segment=current_segment+1,status='live',updated_at=now()
    where id=target_session returning * into session_row;
    did_advance:=true;
  end if;

  return jsonb_build_object(
    'advanced',did_advance,
    'received',received_answers,
    'expected',expected_answers,
    'currentSegment',session_row.current_segment
  );
end;
$$;

grant execute on function public.reconcile_family_quiz_round(uuid,integer) to authenticated;
