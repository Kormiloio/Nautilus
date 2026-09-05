\set ON_ERROR_STOP on
begin;
create extension if not exists pgtap with schema extensions;
select extensions.plan(5);
set local role authenticated;
select extensions.ok(not has_function_privilege('authenticated','public.increment_progress_counter(uuid,uuid,text,text,text,integer)','EXECUTE'),'transitional counter endpoint is no longer callable');
select extensions.ok(not has_table_privilege('authenticated','public.learner_language_progress','UPDATE'),'direct counter update denied');
select extensions.ok(not has_table_privilege('authenticated','public.completed_lessons','INSERT'),'direct lesson completion denied');
select extensions.ok(not has_table_privilege('authenticated','public.completed_topics','INSERT'),'direct topic completion denied');
select extensions.ok(not has_table_privilege('authenticated','public.activity_history','INSERT'),'direct activity date fabrication denied');
select * from extensions.finish();
rollback;
