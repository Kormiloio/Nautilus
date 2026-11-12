\set ON_ERROR_STOP on
begin;
create extension if not exists pgtap with schema extensions;
select extensions.plan(18);
insert into auth.users(id,aud,role,email,raw_app_meta_data,raw_user_meta_data)
values ('92000000-0000-0000-0000-000000000001','authenticated','authenticated','review-parent@example.com','{}','{}'),
('92000000-0000-0000-0000-000000000002','authenticated','authenticated','review-kid@example.com','{}','{}');
set local role authenticated;
select set_config('request.jwt.claim.sub','92000000-0000-0000-0000-000000000001',true);
select public.create_family('Review test') as family \gset
insert into public.learner_profiles(family_id,linked_user_id,display_name,created_by)
values(:'family','92000000-0000-0000-0000-000000000002','Review Kid',auth.uid());
reset role;
insert into public.family_memberships(family_id,user_id,role) values(:'family','92000000-0000-0000-0000-000000000002','learner');

set local role authenticated;
select set_config('request.jwt.claim.sub','92000000-0000-0000-0000-000000000002',true);
select public.record_sentence_mistake('montenegrin-en','e1','  Ovo   je mama. ','This is mom.','sentence_builder');
select public.record_sentence_mistake('montenegrin-en','e1','Ovo je mama.','This is mom.','sentence_builder');
select extensions.is((public.list_sentence_reviews('montenegrin-en')->0->>'misses')::integer,1,'duplicate event counts once');
select extensions.is(public.list_sentence_reviews('montenegrin-en')->0->>'id','Ovo je mama.','sentence text is normalized');
select public.record_sentence_mistake('montenegrin-en','e2','Ovo je mama.','This is mom.','quiz');
select extensions.is((public.list_sentence_reviews('montenegrin-en')->0->>'misses')::integer,2,'a new event adds a miss');
select extensions.throws_ok($$select public.record_sentence_mistake('montenegrin-en','e3','Mama','Mom','quiz')$$,'P0001','Only multi-word sentences can be reviewed','single words are rejected');
select extensions.is(jsonb_array_length(public.list_sentence_reviews('albanian-en')),0,'queues are per pack');

select extensions.is(public.submit_sentence_review('montenegrin-en','Ovo je mama.',array['je','Ovo','mama.'],'r1')->>'correct','false','server grades a wrong order');
select extensions.throws_ok($$select public.submit_sentence_review('montenegrin-en','Ovo je mama.',array['Ovo','je','mama.'],'r2')$$,'P0001','This sentence is not due for review.','wrong answer schedules a retry later');
reset role;
select extensions.ok((select due_at between now() + interval '9 minutes' and now() + interval '11 minutes' from public.learner_sentence_reviews where review_id='Ovo je mama.'),'retry is ten minutes later');
set local role authenticated;
select set_config('request.jwt.claim.sub','92000000-0000-0000-0000-000000000002',true);
select extensions.is(public.submit_sentence_review('montenegrin-en','Ovo je mama.',array['je','Ovo','mama.'],'r1')->>'duplicate','true','replayed review op is idempotent');

reset role;
update public.learner_sentence_reviews set due_at = now() - interval '1 second';
set local role authenticated;
select set_config('request.jwt.claim.sub','92000000-0000-0000-0000-000000000002',true);
select extensions.is(public.submit_sentence_review('montenegrin-en','Ovo je mama.',array['Ovo','je','mama.'],'r3')->>'mastered','false','one correct answer is not mastery');
reset role;
select extensions.ok((select due_at > now() + interval '23 hours' from public.learner_sentence_reviews where review_id='Ovo je mama.'),'correct answer returns tomorrow');
update public.learner_sentence_reviews set due_at = now() - interval '1 second';
set local role authenticated;
select set_config('request.jwt.claim.sub','92000000-0000-0000-0000-000000000002',true);
select extensions.is(public.submit_sentence_review('montenegrin-en','Ovo je mama.',array['Ovo','je','mama.'],'r4')->>'mastered','true','two correct in a row is mastery');
select extensions.is(jsonb_array_length(public.list_sentence_reviews('montenegrin-en')),0,'mastered sentences leave the queue');
select public.record_sentence_mistake('montenegrin-en','e4','Ovo je mama.','This is mom.','quiz');
select extensions.is(jsonb_array_length(public.list_sentence_reviews('montenegrin-en')),1,'a new miss brings a mastered sentence back');

select public.record_sentence_mistake('montenegrin-en','cap-'||n,'Rečenica broj '||n||'.','Sentence '||n||'.','quiz') from generate_series(1,105) n;
select extensions.is(jsonb_array_length(public.list_sentence_reviews('montenegrin-en')),100,'queue is capped at 100 unmastered sentences');

select set_config('request.jwt.claim.sub','92000000-0000-0000-0000-000000000001',true);
select extensions.is(jsonb_array_length(public.list_sentence_reviews('montenegrin-en')),0,'a parent sees none of the learner''s sentences');
select extensions.throws_ok($$select count(*) from public.learner_sentence_reviews$$,'42501',null,'tables are not directly readable');
reset role;
select extensions.ok(not has_function_privilege('anon','public.list_sentence_reviews(text)','EXECUTE'),'anonymous clients cannot call the RPCs');
select * from extensions.finish();
rollback;
