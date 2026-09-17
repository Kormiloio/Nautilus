-- Preserve authorization and existing session structure while exposing its pinned catalog revision.
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
      'catalogRevision', (select c.revision from public.verified_lesson_attempts va join public.verified_lesson_catalog c on c.id=va.catalog_id where va.family_session_id=a.id limit 1),
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

