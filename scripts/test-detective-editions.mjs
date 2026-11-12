// Runs the Detective pgTAP suite against an already-migrated local Supabase database.
// Equivalent to the detective-editions.sql entry in `npm run test:db`.
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const container = process.argv[2] || 'supabase_db_Nautilus';
if (!/^supabase_db_[a-zA-Z0-9_-]+$/.test(container)) throw new Error('Use a local Supabase database container');
const sql = readFileSync(new URL('../supabase/tests/detective-editions.sql', import.meta.url), 'utf8');
const output = execFileSync('docker', ['exec', '-i', container, 'psql', '-U', 'postgres', '-d', 'postgres', '-X', '-v', 'ON_ERROR_STOP=1'], { input: sql, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 });
console.log(output.split('\n').filter(line => /ok \d|not ok|ROLLBACK/.test(line)).join('\n'));
if (/not ok|Looks like you/.test(output)) throw new Error('Detective database assertions failed');
console.log('PASS: Detective database assertions ran locally and rolled back.');
