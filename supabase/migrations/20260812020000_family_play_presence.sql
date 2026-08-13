-- Reliable Family Play presence: learner devices renew last_seen_at while the
-- shared session is open, and the state RPC exposes enough information for
-- adults to diagnose account linking versus device connectivity.

create or replace function public.touch_family_play(target_session uuid)
returns uuid language plpgsql security definer set search_path = public
as $$
declare joined_profile uuid;
begin
  select p.profile_id into joined_profile
  from public.family_voyage_participants p
  join public.learner_profiles lp on lp.id = p.profile_id
  join public.family_voyage_sessions s on s.id = p.session_id
  where p.session_id = target_session
    and lp.linked_user_id = auth.uid()
    and s.status in ('live', 'paused');
  if joined_profile is null then
    raise exception 'This Google account is not linked to an invited learner in this session';
  end if;
  update public.family_voyage_participants set
    status = 'joined', joined_at = coalesce(joined_at, now()), last_seen_at = now()
  where session_id = target_session and profile_id = joined_profile;
  return joined_profile;
end;
$$;

create or replace function public.join_family_play(target_session uuid)
returns uuid language sql security definer set search_path = public
as $$ select public.touch_family_play(target_session); $$;

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

grant execute on function public.touch_family_play(uuid) to authenticated;
