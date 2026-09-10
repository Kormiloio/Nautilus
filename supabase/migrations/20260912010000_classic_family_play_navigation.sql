-- Classic Family Play remains controller-navigated until its presentation is replaced
-- by a fully verified per-device activity flow. Keep role and roster protection.
create or replace function public.guard_verified_family_session() returns trigger language plpgsql security definer set search_path=public as $$
begin
  if new.controlling_adult is distinct from old.controlling_adult then
    if exists(select 1 from public.verified_lesson_attempts where family_session_id=old.id and status='active') then
      raise exception 'Verified roster is fixed; cancel and restart to change controller';
    end if;
  end if;
  return new;
end;
$$;
