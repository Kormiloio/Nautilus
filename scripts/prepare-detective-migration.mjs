// Generate SQL from the same case definitions used by the client.
import { readFileSync, writeFileSync } from 'node:fs';
import { getSideQuestForProgress } from '../src/content/side-quests.js';
const source = readFileSync(new URL('../supabase/migrations/20260905010000_family_side_quests.sql', import.meta.url), 'utf8');
const packs = Array.from({ length: 7 }, (_, index) => getSideQuestForProgress('montenegrin-en', 10 + index * 30).cases);
const literal = value => `'${JSON.stringify(value).replaceAll("'", "''")}'::jsonb`;
function rpc(name) {
  const start = source.indexOf(`create or replace function public.${name}(`);
  const end = source.indexOf('end; $$;', start);
  if (start < 0 || end < 0) throw new Error(`Missing source RPC ${name}`);
  return source.slice(start, end + 'end; $$;'.length);
}
function replace(text, from, to) {
  if (!text.includes(from)) throw new Error('Source RPC changed; review generator');
  return text.replace(from, to);
}
let start = rpc('start_family_side_quest');
start = replace(start, "or target_milestone <> 10", "or target_milestone < 10 or target_milestone > 190 or (target_milestone-10)%30<>0");
start = replace(start, '  select id into sid', `  perform 1 from public.families where id=target_family for update;
  select id into sid`);
start = replace(start, '  insert into public.family_side_quest_sessions', `  if (select count(*) from public.family_voyage_sessions where family_id=target_family
      and pack_id=target_pack_id and status='completed' and not is_review)<target_milestone then
    raise exception 'Complete more family lessons to unlock this case pack'; end if;
  insert into public.family_side_quest_sessions`);
start = replace(start, 'milestone,controlling_adult)', 'milestone,controlling_adult,cases)');
start = replace(start, 'target_milestone,auth.uid())', 'target_milestone,auth.uid(),public.detective_cases_for_milestone(target_milestone))');
let state = rpc('get_family_side_quest_state');
state = replace(state, "'currentCase',s.current_case", "'cases',s.cases,'currentCase',s.current_case");
let submit = rpc('submit_family_side_quest_answer');
submit = replace(submit, "  allowed := case target_case when 0 then array['city','hail','work'] when 1 then array['slope','scythe','hair'] when 2 then array['law','straight','right'] else null end;", `  select array_agg(choice->>'id') into allowed
    from jsonb_array_elements(s.cases->target_case->'choices') choice;`);
let advance = rpc('advance_family_side_quest');
advance = replace(advance, 'if s.current_case>=2 then', 'if s.current_case>=jsonb_array_length(s.cases)-1 then');
const migration = `-- Snapshot case packs so reconnects and future releases cannot change a running game.
begin;
create function public.detective_cases_for_milestone(target_milestone integer)
returns jsonb language plpgsql immutable set search_path=public as $$
declare packs jsonb := ${literal(packs)};
begin
  if target_milestone<10 or target_milestone>190 or (target_milestone-10)%30<>0 then
    raise exception 'Unknown detective milestone'; end if;
  return packs->((target_milestone-10)/30);
end; $$;
revoke all on function public.detective_cases_for_milestone(integer) from public,anon,authenticated;
alter table public.family_side_quest_sessions add column cases jsonb;
update public.family_side_quest_sessions set cases=${literal(packs[0])};
alter table public.family_side_quest_sessions alter column cases set not null;
alter table public.family_side_quest_sessions add constraint side_quest_cases_array check(jsonb_typeof(cases)='array' and jsonb_array_length(cases)>0);
${start}
${state}
${submit}
${advance}
commit;
`;
const path = new URL('../supabase/migrations/20261026010000_cumulative_detective_editions.sql', import.meta.url);
writeFileSync(path, migration);
console.log('Prepared Detective migration. No database connection made.');
