import { readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const directory = '/private/tmp/nautilus-cumulative-release';
const container = process.argv[2] || 'supabase_db_Nautilus';
if (!/^supabase_db_[a-zA-Z0-9_-]+$/.test(container)) throw new Error('Use a local Supabase container');
const files = readdirSync(directory).filter(file => /^10-chunk-\d+\.sql$/.test(file)).sort();
if (files.length !== 118) throw new Error('Prepare the revision-9 release first');
const blocks = files.map(file => readFileSync(`${directory}/${file}`, 'utf8')
  .replace(/^begin;\s*/, '').replace(/commit;\s*$/, '')
  .replaceAll('public.nautilus_catalog_stage_revision9', 'public.verified_lesson_catalog')).join('\n');
const sql = `begin;
${blocks}
do $$ begin
  if (select count(*) from public.verified_lesson_catalog where revision=9)<>354 then raise exception 'Expected 354 definitions'; end if;
  if exists(select 1 from public.verified_lesson_catalog c where revision=9 and voyage_position>=27
    and ((select count(*) from jsonb_array_elements(c.exercises) e where e->>'kind'='sentence_builder')<>2
      or (select count(*) from jsonb_array_elements(c.exercises) e where e->>'kind'='sentence_completion')<>2)) then
    raise exception 'Missing sentence exercises'; end if;
end; $$;
rollback;
`;
execFileSync('docker', ['exec', '-i', container, 'psql', '-U', 'postgres', '-d', 'postgres', '-X', '-v', 'ON_ERROR_STOP=1'], { input: sql, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 });
console.log('PASS: all 354 revision-9 definitions passed real database catalog validation and sentence assertions; rolled back.');
