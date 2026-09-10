-- A classic Family Play session completes only when each invited learner and the
-- controller has submitted their own final lock. Preserve verified completion
-- for all other paths, including direct completion attempts.
create or replace function public.require_verified_family_completion()
returns trigger language plpgsql security definer set search_path=public as $$
declare
  expected_locks integer;
  received_locks integer;
begin
  if new.status='completed' and old.status<>'completed'
    and not exists(
      select 1 from public.verified_lesson_attempts
      where family_session_id=new.id and status='completed'
    ) then
    select count(*) + 1 into expected_locks
    from public.family_voyage_participants
    where session_id=new.id;

    select count(*) into received_locks
    from public.family_quiz_answers
    where session_id=new.id
      and segment=new.current_segment
      and answer_id='__final_challenge_complete__';

    if received_locks < expected_locks then
      raise exception 'Restart this older session to complete it with verified play';
    end if;
  end if;
  return new;
end;
$$;
revoke all on function public.require_verified_family_completion() from public,anon,authenticated;
