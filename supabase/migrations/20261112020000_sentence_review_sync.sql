-- Sentence review queue shared across a learner's devices (OpenSpec: add-sentence-review-sync-and-listening-progress).
-- Owner-only: rows are keyed to the signed-in account; parents and admins cannot read them.
begin;

create table public.learner_sentence_reviews (
  user_id uuid not null references public.user_accounts(id) on delete cascade,
  pack_id text not null check (char_length(pack_id) between 1 and 64),
  review_id text not null check (char_length(review_id) between 3 and 300),
  target_text text not null check (char_length(target_text) between 3 and 300),
  support_text text not null check (char_length(support_text) between 1 and 300),
  source_kind text not null check (source_kind in ('sentence_builder','sentence_completion','quiz')),
  misses integer not null default 0 check (misses >= 0),
  streak integer not null default 0 check (streak >= 0),
  due_at timestamptz not null default now(),
  last_missed_at timestamptz not null default now(),
  last_reviewed_at timestamptz,
  mastered boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, pack_id, review_id)
);

create table public.learner_sentence_review_events (
  user_id uuid not null references public.user_accounts(id) on delete cascade,
  event_id text not null check (char_length(event_id) between 1 and 200),
  created_at timestamptz not null default now(),
  primary key (user_id, event_id)
);

alter table public.learner_sentence_reviews enable row level security;
alter table public.learner_sentence_review_events enable row level security;
revoke all on public.learner_sentence_reviews from public, anon, authenticated;
revoke all on public.learner_sentence_review_events from public, anon, authenticated;

create function public.normalize_review_sentence(value text) returns text
language sql immutable set search_path=public as $$
  select btrim(regexp_replace(normalize(coalesce(value,''), NFKC), '\s+', ' ', 'g'));
$$;
revoke all on function public.normalize_review_sentence(text) from public, anon, authenticated;

create function public.require_review_owner() returns uuid
language plpgsql stable security definer set search_path=public as $$
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  if not exists (select 1 from public.user_accounts where id = auth.uid()) then raise exception 'Account required'; end if;
  return auth.uid();
end; $$;
revoke all on function public.require_review_owner() from public, anon, authenticated;

create function public.record_sentence_mistake(
  target_pack text, target_event text, target_sentence text, target_support text, target_kind text
) returns void language plpgsql security definer set search_path=public as $$
declare me uuid := public.require_review_owner(); sentence text := public.normalize_review_sentence(target_sentence);
begin
  if target_event is null or char_length(target_event) not between 1 and 200 then raise exception 'Invalid review event'; end if;
  if array_length(string_to_array(sentence, ' '), 1) < 2 then raise exception 'Only multi-word sentences can be reviewed'; end if;
  delete from public.learner_sentence_review_events where user_id = me and created_at < now() - interval '30 days';
  insert into public.learner_sentence_review_events(user_id, event_id) values (me, target_event) on conflict do nothing;
  if not found then return; end if;
  insert into public.learner_sentence_reviews(user_id, pack_id, review_id, target_text, support_text, source_kind, misses)
  values (me, target_pack, sentence, sentence, btrim(target_support), target_kind, 1)
  on conflict (user_id, pack_id, review_id) do update set
    misses = learner_sentence_reviews.misses + 1, streak = 0, mastered = false,
    support_text = excluded.support_text, source_kind = excluded.source_kind,
    due_at = now(), last_missed_at = now(), updated_at = now();
  delete from public.learner_sentence_reviews r
  where r.user_id = me and r.pack_id = target_pack and not r.mastered
    and r.review_id in (
      select review_id from public.learner_sentence_reviews
      where user_id = me and pack_id = target_pack and not mastered
      order by last_missed_at desc, review_id offset 100);
end; $$;

create function public.submit_sentence_review(
  target_pack text, target_review text, response text[], target_op text
) returns jsonb language plpgsql security definer set search_path=public as $$
declare me uuid := public.require_review_owner(); r public.learner_sentence_reviews; correct boolean;
begin
  if target_op is null or char_length(target_op) not between 1 and 200 then raise exception 'Invalid review event'; end if;
  select * into r from public.learner_sentence_reviews
    where user_id = me and pack_id = target_pack and review_id = target_review for update;
  if exists (select 1 from public.learner_sentence_review_events where user_id = me and event_id = target_op) then
    return jsonb_build_object('correct', r.streak > 0, 'targetText', r.target_text, 'mastered', coalesce(r.mastered, true), 'duplicate', true);
  end if;
  if r.review_id is null or r.mastered or r.due_at > now() then raise exception 'This sentence is not due for review.'; end if;
  correct := public.normalize_review_sentence(array_to_string(coalesce(response, '{}'), ' ')) = r.target_text;
  insert into public.learner_sentence_review_events(user_id, event_id) values (me, target_op);
  update public.learner_sentence_reviews set
    streak = case when correct then streak + 1 else 0 end,
    misses = case when correct then misses else misses + 1 end,
    due_at = now() + case when correct then interval '24 hours' else interval '10 minutes' end,
    mastered = correct and streak + 1 >= 2,
    last_reviewed_at = now(), updated_at = now()
  where user_id = me and pack_id = target_pack and review_id = target_review
  returning * into r;
  return jsonb_build_object('correct', correct, 'targetText', r.target_text, 'mastered', r.mastered);
end; $$;

create function public.list_sentence_reviews(target_pack text) returns jsonb
language plpgsql stable security definer set search_path=public as $$
declare me uuid := public.require_review_owner();
begin
  return coalesce((select jsonb_agg(jsonb_build_object(
      'id', review_id, 'targetText', target_text, 'supportText', support_text, 'sourceKind', source_kind,
      'misses', misses, 'streak', streak, 'dueAt', due_at, 'lastMissedAt', last_missed_at, 'lastReviewedAt', last_reviewed_at
    ) order by due_at, misses desc)
    from (select * from public.learner_sentence_reviews
          where user_id = me and pack_id = target_pack and not mastered
          order by due_at, misses desc limit 100) q), '[]'::jsonb);
end; $$;

revoke all on function public.record_sentence_mistake(text,text,text,text,text) from public, anon;
revoke all on function public.submit_sentence_review(text,text,text[],text) from public, anon;
revoke all on function public.list_sentence_reviews(text) from public, anon;
grant execute on function public.record_sentence_mistake(text,text,text,text,text) to authenticated;
grant execute on function public.submit_sentence_review(text,text,text[],text) to authenticated;
grant execute on function public.list_sentence_reviews(text) to authenticated;

commit;
