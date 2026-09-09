-- Select only a learner's own language-scoped review topic; never expose receipt contents.
create or replace function public.get_voyage_review_topic(target_profile uuid, target_pack_id text)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare selection record;
begin
  if not exists(select 1 from public.learner_profiles p where p.id=target_profile and p.linked_user_id=auth.uid()) then
    raise exception 'Individual review belongs to that learner';
  end if;
  with eligible as (
    select distinct c.topic_id
    from public.completed_topics t
    join public.verified_lesson_catalog c on c.pack_id=t.pack_id and c.topic_id=t.topic_id
    where t.profile_id=target_profile and t.pack_id=target_pack_id and c.mode='practice' and c.topic_id is not null
  ), evidence as (
    select c.topic_id,
      count(*) filter (where r.correct=false) as incorrect_count,
      max(r.created_at) filter (where r.correct=true) as last_correct_at
    from public.verified_attempt_people p
    join public.verified_lesson_attempts a on a.id=p.attempt_id
    join public.verified_lesson_catalog c on c.id=a.catalog_id
    join public.verified_exercise_receipts r on r.attempt_id=p.attempt_id and r.user_id=p.user_id
    where p.profile_id=target_profile and c.pack_id=target_pack_id and c.topic_id is not null
    group by c.topic_id
  )
  select e.topic_id, case when coalesce(v.incorrect_count,0)>0 then 'A familiar topic is ready for another look.' else 'Bringing back language from an earlier voyage.' end as reason
  into selection
  from eligible e left join evidence v on v.topic_id=e.topic_id
  order by coalesce(v.incorrect_count,0) desc, v.last_correct_at asc nulls first, e.topic_id
  limit 1;
  if selection.topic_id is null then return null; end if;
  return jsonb_build_object('topicId',selection.topic_id,'reason',selection.reason);
end;
$$;
revoke all on function public.get_voyage_review_topic(uuid,text) from public,anon;
grant execute on function public.get_voyage_review_topic(uuid,text) to authenticated;
