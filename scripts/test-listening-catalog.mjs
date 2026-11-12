// Load every prepared revision-10 listening set into a local Supabase database inside a rolled-back transaction.
import { readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const directory = process.argv[2] || '/private/tmp/nautilus-listening-release';
const container = process.argv[3] || 'supabase_db_Nautilus';
if (!/^supabase_db_[a-zA-Z0-9_-]+$/.test(container)) throw new Error('Use a local Supabase container');
const manifest = JSON.parse(readFileSync(`${directory}/manifest.json`, 'utf8'));
const files = readdirSync(directory).filter(file => /^10-chunk-\d+\.sql$/.test(file)).sort();
if (files.length !== manifest.chunks) throw new Error('Prepare the revision-10 release first: node scripts/prepare-listening-release.mjs');
const blocks = files.map(file => readFileSync(`${directory}/${file}`, 'utf8').replace(/^begin;\s*/, '').replace(/commit;\s*$/, '')
  .replaceAll('public.nautilus_catalog_stage_revision10', 'public.verified_lesson_catalog')).join('\n');
const sql = `begin;
${blocks}
do $$ begin
  if (select count(*) from public.verified_lesson_catalog where revision=10 and lesson_id like 'practice:%:listening')<>${manifest.listeningSets}
    then raise exception 'Expected ${manifest.listeningSets} listening sets'; end if;
  if exists(select 1 from public.verified_lesson_catalog c where revision=10 and lesson_id like 'practice:%:listening' and
    (c.exercises->0->>'kind' <> 'self_report' or exists(select 1 from jsonb_array_elements(c.exercises) with ordinality e(v,n)
      where n > 1 and (v->>'audioText' is null or v->>'kind' not in ('quiz','sentence_builder')))))
    then raise exception 'Malformed listening exercise'; end if;
end; $$;
rollback;
`;
execFileSync('docker', ['exec', '-i', container, 'psql', '-U', 'postgres', '-d', 'postgres', '-X', '-v', 'ON_ERROR_STOP=1'], { input: sql, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
console.log(`PASS: all ${manifest.listeningSets} revision-10 listening sets passed real database catalog validation; rolled back.`);
