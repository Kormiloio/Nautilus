import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const container = process.argv[2] || 'supabase_db_Nautilus';
if (!/^supabase_db_[a-zA-Z0-9_-]+$/.test(container)) throw new Error('Use a local Supabase database container');
const root = new URL('../', import.meta.url);
const migration = readFileSync(new URL('supabase/migrations/20261026010000_cumulative_detective_editions.sql', root), 'utf8')
  .replace('begin;\ncreate function', 'create function').replace(/\ncommit;\s*$/, '');
const followUp = readFileSync(new URL('supabase/migrations/20261112010000_detective_cases_past_190.sql', root), 'utf8')
  .replace(/^(--.*\n)*begin;\n/, '').replace(/\ncommit;\s*$/, '');
const tests = readFileSync(new URL('supabase/tests/detective-editions.sql', root), 'utf8');
const sql = 'begin;\n' + tests.replace('-- APPLY_MIGRATION_HERE', () => migration + '\n' + followUp) + '\nrollback;\n';
const output = execFileSync('docker', ['exec', '-i', container, 'psql', '-U', 'postgres', '-d', 'postgres', '-X', '-v', 'ON_ERROR_STOP=1'], { input: sql, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 });
console.log(output.split('\n').filter(line => /ok \d|not ok|ROLLBACK/.test(line)).join('\n'));
if (/not ok|Looks like you/.test(output)) throw new Error('Detective database assertions failed');
console.log('PASS: Detective migration and authorization assertions ran locally and rolled back.');
