// Prepare reviewable SQL files only. This script never connects to production.
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const directory = resolve(process.argv[2] || '/private/tmp/nautilus-focused-upload');
const release = execFileSync(process.execPath, ['scripts/build-focused-release.mjs'], { encoding:'utf8', maxBuffer:16*1024*1024 });
const blocks = release.match(/do \$catalog\$ begin[\s\S]*?end \$catalog\$;/g) || [];
if (blocks.length !== 354) throw new Error('Expected exactly 354 focused definitions');
mkdirSync(directory, { recursive:true });
const setup = `begin;
create table public.nautilus_catalog_stage_revision7 (like public.verified_lesson_catalog including all);
alter table public.nautilus_catalog_stage_revision7 enable row level security;
revoke all on public.nautilus_catalog_stage_revision7 from public,anon,authenticated,service_role;
commit;\n`;
writeFileSync(resolve(directory,'00-create-private-stage.sql'),setup);
for (let index=0; index<blocks.length; index+=3) {
  const sql = 'begin;\n'+blocks.slice(index,index+3).map(block=>block.replaceAll('public.verified_lesson_catalog','public.nautilus_catalog_stage_revision7')).join('\n')+'\ncommit;\n';
  if (Buffer.byteLength(sql)>100000) throw new Error('Staging chunk exceeds 100KB');
  writeFileSync(resolve(directory,`10-chunk-${String(index/3).padStart(3,'0')}.sql`),sql);
}
let publish = release.replace(/do \$catalog\$ begin[\s\S]*?end \$catalog\$;/g,'');
const insert = `
do $$ begin
  if (select count(*) from public.nautilus_catalog_stage_revision7)<>354 then raise exception 'Staging upload incomplete'; end if;
end $$;
insert into public.verified_lesson_catalog(id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises,topic_id,is_checkpoint)
select id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises,topic_id,is_checkpoint from public.nautilus_catalog_stage_revision7
on conflict(pack_id,pack_version,lesson_id,revision,mode) do nothing;
`;
publish=publish.replace('do $$ begin\n  if public.get_verified_catalog_status()',()=>insert+'do $$ begin\n  if public.get_verified_catalog_status()');
publish=publish.replace('commit;\nselect public.get_verified_catalog_status()', 'drop table public.nautilus_catalog_stage_revision7;\ncommit;\nselect public.get_verified_catalog_status()');
writeFileSync(resolve(directory,'20-publish-and-remove-stage.sql'),publish);
writeFileSync(resolve(directory,'README.txt'),'Prepared only; no production SQL executed. Run setup, all 118 chunks, then final publication only after staging-table approval. Clients cannot access the staging table. Earlier catalogs and learner records are not modified.\n');
console.log(`Prepared 121 focused-learning SQL files in ${directory}; no database connection made.`);
