// Prepare reviewable catalog revision 10 SQL only. Never connects to a database.
// Revision 10 = every revision-9 row, copied unchanged, plus one verified listening set per voyage day.
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const directory = resolve(process.argv[2] || '/private/tmp/nautilus-listening-release');
const revision = 10;
const sourceRevision = 9;
const source = { individual: 1400, family: 1400, practice: 954 };
const sql = execFileSync(process.execPath, ['scripts/export-verified-curriculum.mjs', '--pack=montenegrin-en',
  `--revision=${revision}`, '--mode=listening'], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
const blocks = sql.match(/do \$catalog\$ begin[\s\S]*?end \$catalog\$;/g) || [];
if (blocks.length < 150) throw new Error(`Expected a listening set for most voyage days, got ${blocks.length}`);
const expected = { contractVersion: 1, revision, individual: source.individual, family: source.family, practice: source.practice + blocks.length };
const stage = `public.nautilus_catalog_stage_revision${revision}`;
mkdirSync(directory, { recursive: true });
writeFileSync(resolve(directory, '00-stage.sql'), `begin;
create table ${stage} (like public.verified_lesson_catalog including all);
alter table ${stage} enable row level security;
revoke all on ${stage} from public,anon,authenticated,service_role;
commit;
`);
let chunks = 0;
for (let index = 0; index < blocks.length; index += 3) {
  const chunk = 'begin;\n' + blocks.slice(index, index + 3).map(block => block.replaceAll('public.verified_lesson_catalog', stage)).join('\n') + '\ncommit;\n';
  if (Buffer.byteLength(chunk) > 100000) throw new Error('Staging chunk exceeds 100KB');
  writeFileSync(resolve(directory, `10-chunk-${String(chunks++).padStart(3, '0')}.sql`), chunk);
}
writeFileSync(resolve(directory, '20-publish.sql'), `begin;
select pg_advisory_xact_lock(hashtext('nautilus-listening-revision-${revision}'));
do $$ begin
  if (select max(revision) from public.verified_lesson_catalog) not in (${sourceRevision},${revision})
    then raise exception 'Unexpected source revision'; end if;
  if (select count(*) from public.verified_lesson_catalog where revision=${sourceRevision})<>${source.individual + source.family + source.practice}
    then raise exception 'Source revision is incomplete'; end if;
  if (select count(*) from ${stage})<>${blocks.length}
    then raise exception 'Listening staging upload is incomplete'; end if;
end $$;
insert into public.verified_lesson_catalog(id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises,topic_id,is_checkpoint)
select md5(id::text||':revision-${revision}')::uuid,pack_id,pack_version,lesson_id,${revision},mode,voyage_position,exercises,topic_id,is_checkpoint
from public.verified_lesson_catalog where revision=${sourceRevision}
on conflict(pack_id,pack_version,lesson_id,revision,mode) do nothing;
insert into public.verified_lesson_catalog(id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises,topic_id,is_checkpoint)
select id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises,topic_id,is_checkpoint from ${stage}
on conflict(pack_id,pack_version,lesson_id,revision,mode) do nothing;
do $$ begin
  if public.get_verified_catalog_status()<>'${JSON.stringify(expected)}'::jsonb
    then raise exception 'Listening release counts failed'; end if;
  if exists(select 1 from public.verified_lesson_catalog old join public.verified_lesson_catalog new
    using(pack_id,pack_version,lesson_id,mode) where old.revision=${sourceRevision} and new.revision=${revision}
    and old.exercises<>new.exercises) then raise exception 'Existing curriculum changed'; end if;
  if exists(select 1 from public.verified_lesson_catalog where revision=${revision} and lesson_id like 'practice:%:listening'
    and exists(select 1 from jsonb_array_elements(exercises) e where e->>'kind'<>'self_report' and e->>'audioText' is null))
    then raise exception 'Listening exercise without audio text'; end if;
end $$;
drop table ${stage};
commit;
select public.get_verified_catalog_status();
`);
writeFileSync(resolve(directory, 'manifest.json'), JSON.stringify({
  revision, sourceRevision, listeningSets: blocks.length, chunks, expectedStatus: expected,
  order: ['00-stage.sql', '10-chunk-*.sql (in order)', '20-publish.sql'],
  scope: 'Montenegrin verified listening sets practice:voyage-N:listening; all revision-9 rows copied unchanged',
  productionChanges: false,
}, null, 2) + '\n');
console.log(`Prepared ${chunks + 2} SQL files (${blocks.length} listening sets) in ${directory}. No database connection made.`);
