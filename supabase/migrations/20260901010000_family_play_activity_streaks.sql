-- Credit Family Play participation as learner activity for streaks.

create or replace function public.credit_family_play_activity()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  if new.status = 'completed' and old.status is distinct from 'completed' then
    insert into public.activity_history
      (profile_id, pack_id, pack_version, local_date, timezone, operation_id)
    select p.profile_id, new.pack_id, new.pack_version, new.local_date,
      coalesce(nullif(new.timezone, ''), 'UTC'), extensions.gen_random_uuid()
    from public.family_voyage_participants p
    where p.session_id = new.id
    on conflict (profile_id, pack_id, local_date) do nothing;
  end if;
  return new;
end;
$$;

drop trigger if exists credit_family_play_activity_on_completion on public.family_voyage_sessions;
create trigger credit_family_play_activity_on_completion
after update of status on public.family_voyage_sessions
for each row execute function public.credit_family_play_activity();

-- Repair streak history for sessions completed before this trigger existed.
insert into public.activity_history
  (profile_id, pack_id, pack_version, local_date, timezone, operation_id)
select p.profile_id, s.pack_id, s.pack_version, s.local_date,
  coalesce(nullif(s.timezone, ''), 'UTC'), extensions.gen_random_uuid()
from public.family_voyage_sessions s
join public.family_voyage_participants p on p.session_id = s.id
where s.status = 'completed'
on conflict (profile_id, pack_id, local_date) do nothing;
