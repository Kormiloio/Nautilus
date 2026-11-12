// Prepare reviewable curriculum SQL only. Never connects to a database.
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const directory = resolve(process.argv[2] || '/private/tmp/nautilus-cumulative-release');
const revision = 9;
const sourceRevision = revision - 1;
const blocks = ['individual', 'family'].flatMap(mode => {
  const sql = execFileSync(process.execPath, ['scripts/export-verified-curriculum.mjs',
    '--pack=montenegrin-en', '--start=24', '--end=200', `--revision=${revision}`,
    `--mode=${mode}`, '--pilot-vocabulary=true'], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
  return sql.match(/do \$catalog\$ begin[\s\S]*?end \$catalog\$;/g) || [];
});
if (blocks.length !== 354) throw new Error('Expected 354 sentence-release definitions');
mkdirSync(directory, { recursive: true });
writeFileSync(resolve(directory, '00-stage.sql'), `begin;
create table public.nautilus_catalog_stage_revision${revision} (like public.verified_lesson_catalog including all);
alter table public.nautilus_catalog_stage_revision${revision} enable row level security;
revoke all on public.nautilus_catalog_stage_revision${revision} from public,anon,authenticated,service_role;
commit;
`);
let chunks = 0;
for (let index = 0; index < blocks.length; index += 3) {
  const sql = 'begin;\n' + blocks.slice(index, index + 3)
    .map(block => block.replaceAll('public.verified_lesson_catalog', `public.nautilus_catalog_stage_revision${revision}`)).join('\n') + '\ncommit;\n';
  if (Buffer.byteLength(sql) > 100000) throw new Error('Staging chunk exceeds 100KB');
  writeFileSync(resolve(directory, `10-chunk-${String(chunks++).padStart(3, '0')}.sql`), sql);
}
writeFileSync(resolve(directory, '20-publish.sql'), `begin;
select pg_advisory_xact_lock(hashtext('nautilus-sentence-revision-${revision}'));
do $$ begin
  if (select max(revision) from public.verified_lesson_catalog) not in (${sourceRevision},${revision})
    then raise exception 'Unexpected source revision'; end if;
  if (select count(*) from public.verified_lesson_catalog where revision=${sourceRevision})<>3754
    then raise exception 'Source revision is incomplete'; end if;
  if (select count(*) from public.nautilus_catalog_stage_revision${revision})<>354
    then raise exception 'Sentence staging upload is incomplete'; end if;
end $$;
insert into public.verified_lesson_catalog(id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises,topic_id,is_checkpoint)
select md5(id::text||':revision-${revision}')::uuid,pack_id,pack_version,lesson_id,${revision},mode,voyage_position,exercises,topic_id,is_checkpoint
from public.verified_lesson_catalog where revision=${sourceRevision} and not
  (pack_id='montenegrin-en' and mode in ('individual','family') and voyage_position between 24 and 200)
on conflict(pack_id,pack_version,lesson_id,revision,mode) do nothing;
insert into public.verified_lesson_catalog(id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises,topic_id,is_checkpoint)
select id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises,topic_id,is_checkpoint
from public.nautilus_catalog_stage_revision${revision}
on conflict(pack_id,pack_version,lesson_id,revision,mode) do nothing;
do $$ begin
  if public.get_verified_catalog_status()<>'{"contractVersion":1,"revision":${revision},"individual":1400,"family":1400,"practice":954}'::jsonb
    then raise exception 'Sentence release counts failed'; end if;
  if exists(select 1 from public.verified_lesson_catalog c where revision=${revision} and pack_id='montenegrin-en'
    and mode in ('individual','family') and voyage_position between 27 and 200 and
    ((select count(*) from jsonb_array_elements(c.exercises) e where e->>'kind'='sentence_builder')<>2 or
     (select count(*) from jsonb_array_elements(c.exercises) e where e->>'kind'='sentence_completion')<>2))
    then raise exception 'Sentence exercises missing from a focused lesson'; end if;
  if exists(select 1 from public.verified_lesson_catalog old join public.verified_lesson_catalog new
    using(pack_id,pack_version,lesson_id,mode) where old.revision=${sourceRevision} and new.revision=${revision}
    and not(old.pack_id='montenegrin-en' and old.mode in ('individual','family') and old.voyage_position between 24 and 200)
    and old.exercises<>new.exercises) then raise exception 'Unaffected curriculum changed'; end if;
end $$;
drop table public.nautilus_catalog_stage_revision${revision};
commit;
select public.get_verified_catalog_status();
`);
writeFileSync(resolve(directory, 'manifest.json'), JSON.stringify({
  revision, sourceRevision, definitions: blocks.length, chunks,
  scope: 'Montenegrin voyage days 24–200, individual and family; focused sentence activities from day 27',
  reviewStatus: 'Draft Montenegrin sentence content; fluent review pending',
  productionChanges: false,
}, null, 2) + '\n');
console.log(`Prepared ${chunks + 3} files in ${directory}. No production connection made.`);
