// Emit an atomic revision-7 focused-learning catalog release; execution is a separate deployment step.
import { execFileSync } from 'node:child_process';
const exports = ['individual', 'family'].map(mode => execFileSync(process.execPath, [
  'scripts/export-verified-curriculum.mjs', '--pack=montenegrin-en', '--start=24', '--end=200',
  '--revision=7', `--mode=${mode}`, '--pilot-vocabulary=true',
], { encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 }).trim().replace(/^begin;\s*/, '').replace(/commit;$/, ''));
console.log(`begin;
-- Serialize this release and reject an unexpected source revision.
select pg_advisory_xact_lock(hashtext('nautilus-focused-learning-revision-7'));
do $$ begin
  if (select max(revision) from public.verified_lesson_catalog) not in (6,7)
    then raise exception 'Expected catalog revision 6 or idempotent revision 7'; end if;
  if (select count(*) from public.verified_lesson_catalog where revision=6) <> 3754
    then raise exception 'Revision 6 source catalog is incomplete'; end if;
end $$;
-- Preserve every unaffected definition byte-for-byte under the new revision.
insert into public.verified_lesson_catalog(id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises,topic_id,is_checkpoint)
select md5(id::text || ':revision-7')::uuid,pack_id,pack_version,lesson_id,7,mode,voyage_position,exercises,topic_id,is_checkpoint
from public.verified_lesson_catalog
where revision=6 and not (pack_id='montenegrin-en' and pack_version='0.1.0' and mode in ('individual','family') and voyage_position between 24 and 200)
on conflict(pack_id,pack_version,lesson_id,revision,mode) do nothing;
${exports.join('\n')}
do $$ begin
  if public.get_verified_catalog_status() <> '{"contractVersion":1,"revision":7,"individual":1400,"family":1400,"practice":954}'::jsonb
    then raise exception 'Revision 7 catalog counts failed'; end if;
  if (select count(*) from public.verified_lesson_catalog where revision=7 and pack_id='montenegrin-en' and mode in ('individual','family') and voyage_position between 27 and 200
    and exercises::text like '%Focused family pilot%') <> 348
    then raise exception 'Focused exercises missing from one or more days'; end if;
  if exists(select 1 from public.verified_lesson_catalog where revision=7 and pack_id='montenegrin-en' and mode='family' and voyage_position between 27 and 200
    and (exercises::text like '%Weekly grammar mission%' or exercises::text like '%three-card family story%'))
    then raise exception 'Unrelated grammar remains in a focused family lesson'; end if;
  if exists(select 1 from public.verified_lesson_catalog old join public.verified_lesson_catalog new
    using(pack_id,pack_version,lesson_id,mode) where old.revision=6 and new.revision=7
    and not(old.pack_id='montenegrin-en' and old.pack_version='0.1.0' and old.mode in ('individual','family') and old.voyage_position between 24 and 200)
    and old.exercises<>new.exercises) then raise exception 'Unaffected content changed'; end if;
end $$;
commit;
select public.get_verified_catalog_status() as catalog;
`);
