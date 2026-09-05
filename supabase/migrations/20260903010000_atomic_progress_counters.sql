-- Transitional counter contract: retry-safe additive writes, not proof of learning.
-- Exercise receipts and server-owned lesson manifests must replace client reward claims.
create table public.progress_counter_operations (
  operation_id uuid primary key,
  actor_id uuid not null references auth.users(id),
  profile_id uuid not null references public.learner_profiles(id) on delete cascade,
  pack_id text not null,
  pack_version text not null,
  counter text not null check (counter in ('stars','dialogues')),
  delta integer not null check (delta between 1 and 2),
  created_at timestamptz not null default now(),
  foreign key (pack_id,pack_version) references public.language_packs(id,version)
);
alter table public.progress_counter_operations enable row level security;
revoke all on public.progress_counter_operations from public, anon, authenticated;

create or replace function public.increment_progress_counter(
  target_operation uuid, target_profile uuid, target_pack text,
  target_version text, target_counter text, amount integer
) returns jsonb language plpgsql security definer set search_path = public
as $$
declare
  prior public.progress_counter_operations%rowtype;
  totals public.learner_language_progress%rowtype;
begin
  if auth.uid() is null or not public.can_access_profile(target_profile) then
    raise exception 'Learner access required';
  end if;
  if target_operation is null or target_counter is null or amount is null
     or target_counter not in ('stars','dialogues') or amount < 1
     or (target_counter='stars' and amount>2)
     or (target_counter='dialogues' and amount<>1) then
    raise exception 'Invalid counter operation';
  end if;
  if not exists (
    select 1 from public.family_languages f
    join public.learner_profiles p on p.family_id=f.family_id
    where p.id=target_profile and f.pack_id=target_pack and f.pack_version=target_version
  ) then raise exception 'Language is not enabled for this family'; end if;

  -- Serializes both retries and concurrent updates for this learner/pack.
  insert into public.learner_language_progress(profile_id,pack_id,pack_version)
  values(target_profile,target_pack,target_version)
  on conflict(profile_id,pack_id) do nothing;
  select * into totals from public.learner_language_progress
  where profile_id=target_profile and pack_id=target_pack for update;

  insert into public.progress_counter_operations
    (operation_id,actor_id,profile_id,pack_id,pack_version,counter,delta)
  values(target_operation,auth.uid(),target_profile,target_pack,target_version,target_counter,amount)
  on conflict(operation_id) do nothing;
  if not found then
    select * into prior from public.progress_counter_operations where operation_id=target_operation;
    if prior.actor_id<>auth.uid() or prior.profile_id<>target_profile
       or prior.pack_id<>target_pack or prior.pack_version<>target_version
       or prior.counter<>target_counter or prior.delta<>amount then
      raise exception 'Operation ID already used with different data';
    end if;
  else
    update public.learner_language_progress set
      stars=stars+case when target_counter='stars' then amount else 0 end,
      dialogues_done=dialogues_done+case when target_counter='dialogues' then amount else 0 end,
      pack_version=target_version,updated_at=now()
    where profile_id=target_profile and pack_id=target_pack returning * into totals;
  end if;
  return jsonb_build_object('stars',totals.stars,'dialoguesDone',totals.dialogues_done);
end;
$$;
revoke all on function public.increment_progress_counter(uuid,uuid,text,text,text,integer) from public,anon;
grant execute on function public.increment_progress_counter(uuid,uuid,text,text,text,integer) to authenticated;
-- Prevent stale clients from overwriting a newer total. Their queued data remains
-- on the device until upgraded; never infer deltas from legacy absolute totals.
revoke insert,update,delete on public.learner_language_progress from authenticated;
