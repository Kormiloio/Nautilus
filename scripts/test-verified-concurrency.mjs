// Retained command name; now tests VERIFIED completion, not the revoked counter RPC.
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {randomUUID} from 'node:crypto';
import assert from 'node:assert/strict';
const container=process.argv[2];
if(!/^supabase_db_nautilus-review-[a-zA-Z0-9-]+$/.test(container||''))throw new Error('Use an isolated review container only');
const run=promisify(execFile);
async function sql(s){return (await run('docker',['exec',container,'psql','-U','postgres','-d','postgres','-X','-At','-v','ON_ERROR_STOP=1','-c',s])).stdout.trim();}
const parent=randomUUID(),kid=randomUUID(),profile=randomUUID();
await sql(`insert into auth.users(id,aud,role,email,raw_app_meta_data,raw_user_meta_data) values
('${parent}','authenticated','authenticated','${parent}@example.com','{}','{}'),
('${kid}','authenticated','authenticated','${kid}@example.com','{}','{}');`);
const asUser=(id,body)=>`begin;set local role authenticated;select set_config('request.jwt.claim.sub','${id}',true);${body};commit;`;
const out=await sql(asUser(parent,"select public.create_family('Concurrency verified')"));
const family=out.split('\n').find(line=>/^[0-9a-f-]{36}$/.test(line)&&line!==parent);
await sql(`insert into public.learner_profiles(id,family_id,linked_user_id,display_name,created_by) values('${profile}','${family}','${kid}','Concurrent learner','${parent}');
insert into public.family_memberships(family_id,user_id,role) values('${family}','${kid}','learner');`);
const created=await sql(asUser(parent,`select public.start_family_play('${family}','montenegrin-en','0.1.0','voyage-1',1,current_date,'UTC',array['${profile}'::uuid])`));
const session=created.split('\n').find(line=>/^[0-9a-f-]{36}$/.test(line)&&line!==parent);
const data=JSON.parse(await sql(`select jsonb_build_object('id',a.id,'exercises',c.exercises) from public.verified_lesson_attempts a join public.verified_lesson_catalog c on c.id=a.catalog_id where family_session_id='${session}'`));
let expected=0;
for(let index=0;index<data.exercises.length;index++){
 const exercise=data.exercises[index];const answer=exercise.kind==='self_report'?true:exercise.answer;
 if(exercise.kind!=='self_report')expected++;
 const value=JSON.stringify(answer).replaceAll("'","''");
 const submit=user=>sql(asUser(user,`select public.submit_verified_exercise('${data.id}',${index},'${value}'::jsonb)`));
 await Promise.all([submit(parent),submit(kid)]);
 await Promise.all([submit(parent),submit(kid),submit(kid)]);
}
assert.equal(await sql(`select stars from public.learner_language_progress where profile_id='${profile}'`),String(expected));
assert.equal(await sql(`select count(*) from public.completed_lessons where profile_id='${profile}'`),'1');
assert.equal(await sql(`select status from public.family_voyage_sessions where id='${session}'`),'completed');
assert.equal(await sql(`select count(*) from public.activity_history where profile_id='${profile}'`),'1');
console.log('PASS: concurrent family answers, repeated retries, one completion, correct server-calculated reward');
