-- Snapshot case packs so reconnects and future releases cannot change a running game.
begin;
create function public.detective_cases_for_milestone(target_milestone integer)
returns jsonb language plpgsql immutable set search_path=public as $$
declare packs jsonb := '[[{"word":"grad","sentence":"Padao je grad cijelo popodne.","answerId":"hail","choices":[{"id":"city","label":"city"},{"id":"hail","label":"hail"},{"id":"work","label":"work"}],"explanation":"Here “grad” means hail: frozen rain fell all afternoon. In another sentence, the same word can mean city."},{"word":"kosa","sentence":"Ona ima dugu kosu.","answerId":"hair","choices":[{"id":"slope","label":"slope"},{"id":"scythe","label":"scythe"},{"id":"hair","label":"hair"}],"explanation":"“Kosu” is the sentence form of “kosa” meaning hair. Kosa can also mean a slope or a scythe in other contexts."},{"word":"pravo","sentence":"Idi pravo do trga.","answerId":"straight","choices":[{"id":"law","label":"law"},{"id":"straight","label":"straight ahead"},{"id":"right","label":"right / entitlement"}],"explanation":"After the verb “go,” pravo means straight ahead. The same form can refer to law or a right elsewhere."}],[{"word":"grad","sentence":"Ovaj grad ima veliki trg.","answerId":"city","choices":[{"id":"city","label":"city"},{"id":"hail","label":"hail"},{"id":"work","label":"work"}],"explanation":"A town square belongs to a city; here grad does not mean hail.","clueWords":"Ovaj = this; ima = has; veliki = big; trg = square."},{"word":"list","sentence":"List je pao sa drveta.","answerId":"leaf","choices":[{"id":"leaf","label":"leaf"},{"id":"sheet","label":"sheet of paper"},{"id":"letter","label":"letter"}],"explanation":"Falling from a tree tells us this list is a leaf.","clueWords":"Pao je = fell; sa drveta = from a tree."},{"word":"luk","sentence":"Dodaj luk u supu.","answerId":"onion","choices":[{"id":"onion","label":"onion"},{"id":"bow","label":"bow"},{"id":"arch","label":"arch"}],"explanation":"Something added to soup is the onion meaning of luk.","clueWords":"Dodaj = add; u supu = to the soup."}],[{"word":"sat","sentence":"Čekam već jedan sat.","answerId":"hour","choices":[{"id":"hour","label":"hour"},{"id":"clock","label":"clock"},{"id":"day","label":"day"}],"explanation":"The waiting time is one hour; sat here measures time.","clueWords":"Čekam = I am waiting; već = already; jedan = one."},{"word":"ključ","sentence":"Ključ je u vratima.","answerId":"key","choices":[{"id":"key","label":"key"},{"id":"solution","label":"solution"},{"id":"door","label":"door"}],"explanation":"A key can be in a door; this is the physical meaning of ključ.","clueWords":"Je = is; u vratima = in the door."},{"word":"jezik","sentence":"Učim crnogorski jezik.","answerId":"language","choices":[{"id":"language","label":"language"},{"id":"tongue","label":"tongue"},{"id":"book","label":"book"}],"explanation":"Learning Montenegrin points to a language, not the body part.","clueWords":"Učim = I am learning; crnogorski = Montenegrin."}],[{"word":"list","sentence":"Pišem na listu papira.","answerId":"sheet","choices":[{"id":"leaf","label":"leaf"},{"id":"sheet","label":"sheet of paper"},{"id":"letter","label":"letter"}],"explanation":"Writing on paper tells us list is a sheet here.","clueWords":"Pišem = I am writing; na = on; papira = of paper."},{"word":"miš","sentence":"Miš je pored tastature.","answerId":"computer","choices":[{"id":"animal","label":"animal mouse"},{"id":"computer","label":"computer mouse"},{"id":"keyboard","label":"keyboard"}],"explanation":"The keyboard gives the clue: this is a computer mouse.","clueWords":"Je = is; pored = beside; tastature = the keyboard."},{"word":"red","sentence":"Čekamo u redu za karte.","answerId":"queue","choices":[{"id":"queue","label":"queue / line"},{"id":"order","label":"order / tidiness"},{"id":"color","label":"the color red"}],"explanation":"Waiting for tickets puts the people in a queue.","clueWords":"Čekamo = we are waiting; u = in; za karte = for tickets."}],[{"word":"kosa","sentence":"Ova kosa je veoma strma.","answerId":"slope","choices":[{"id":"slope","label":"slope"},{"id":"scythe","label":"scythe"},{"id":"hair","label":"hair"}],"explanation":"Strma means steep, so kosa is a slope here.","clueWords":"Ova = this; je = is; veoma = very; strma = steep."},{"word":"pravo","sentence":"Svako dijete ima pravo na školovanje.","answerId":"right","choices":[{"id":"law","label":"law"},{"id":"straight","label":"straight ahead"},{"id":"right","label":"right / entitlement"}],"explanation":"The sentence describes a child’s right to education, not a direction.","clueWords":"Svako dijete = every child; ima = has; na školovanje = to education."},{"word":"krilo","sentence":"Ptica ima povrijeđeno krilo.","answerId":"wing","choices":[{"id":"wing","label":"wing"},{"id":"lap","label":"lap"},{"id":"nest","label":"nest"}],"explanation":"The bird has an injured wing; krilo here belongs to the bird.","clueWords":"Ptica = bird; ima = has; povrijeđeno = injured."}],[{"word":"sat","sentence":"Sat visi na zidu.","answerId":"clock","choices":[{"id":"hour","label":"hour"},{"id":"clock","label":"clock"},{"id":"day","label":"day"}],"explanation":"Something hanging on a wall is a clock, not a duration.","clueWords":"Visi = hangs; na zidu = on the wall."},{"word":"jezik","sentence":"Opekao sam jezik vrućim čajem.","answerId":"tongue","choices":[{"id":"language","label":"language"},{"id":"tongue","label":"tongue"},{"id":"cup","label":"cup"}],"explanation":"Hot tea can burn a tongue. Jezik here is a body part.","clueWords":"Opekao sam = I burned; vrućim čajem = with hot tea."},{"word":"zvijezda","sentence":"Ta glumica je filmska zvijezda.","answerId":"celebrity","choices":[{"id":"sky","label":"star in the sky"},{"id":"celebrity","label":"celebrity"},{"id":"film","label":"film"}],"explanation":"The actress is a film star: zvijezda describes a celebrity.","clueWords":"Ta glumica = that actress; je = is; filmska = film."}],[{"word":"luk","sentence":"Strijela je izletjela iz luka.","answerId":"bow","choices":[{"id":"onion","label":"onion"},{"id":"bow","label":"bow"},{"id":"arch","label":"arch"}],"explanation":"An arrow was fired from a bow. Luk here is not food.","clueWords":"Strijela = arrow; je izletjela = flew out; iz = from."},{"word":"miš","sentence":"Mali miš jede sir.","answerId":"animal","choices":[{"id":"animal","label":"animal mouse"},{"id":"computer","label":"computer mouse"},{"id":"cheese","label":"cheese"}],"explanation":"Eating cheese tells us this is a living mouse.","clueWords":"Mali = small; jede = eats; sir = cheese."},{"word":"krilo","sentence":"Dijete sjedi mami u krilu.","answerId":"lap","choices":[{"id":"wing","label":"wing"},{"id":"lap","label":"lap"},{"id":"chair","label":"chair"}],"explanation":"A child sitting with mom is in her lap; krilo is not a wing here.","clueWords":"Dijete = child; sjedi = is sitting; mami = with mom; u = in."}]]'::jsonb;
begin
  if target_milestone<10 or target_milestone>190 or (target_milestone-10)%30<>0 then
    raise exception 'Unknown detective milestone'; end if;
  return packs->((target_milestone-10)/30);
end; $$;
revoke all on function public.detective_cases_for_milestone(integer) from public,anon,authenticated;
alter table public.family_side_quest_sessions add column cases jsonb;
update public.family_side_quest_sessions set cases='[{"word":"grad","sentence":"Padao je grad cijelo popodne.","answerId":"hail","choices":[{"id":"city","label":"city"},{"id":"hail","label":"hail"},{"id":"work","label":"work"}],"explanation":"Here “grad” means hail: frozen rain fell all afternoon. In another sentence, the same word can mean city."},{"word":"kosa","sentence":"Ona ima dugu kosu.","answerId":"hair","choices":[{"id":"slope","label":"slope"},{"id":"scythe","label":"scythe"},{"id":"hair","label":"hair"}],"explanation":"“Kosu” is the sentence form of “kosa” meaning hair. Kosa can also mean a slope or a scythe in other contexts."},{"word":"pravo","sentence":"Idi pravo do trga.","answerId":"straight","choices":[{"id":"law","label":"law"},{"id":"straight","label":"straight ahead"},{"id":"right","label":"right / entitlement"}],"explanation":"After the verb “go,” pravo means straight ahead. The same form can refer to law or a right elsewhere."}]'::jsonb;
alter table public.family_side_quest_sessions alter column cases set not null;
alter table public.family_side_quest_sessions add constraint side_quest_cases_array check(jsonb_typeof(cases)='array' and jsonb_array_length(cases)>0);
create or replace function public.start_family_side_quest(
  target_family uuid, target_pack_id text, target_pack_version text,
  target_quest_id text, target_milestone integer, participant_profiles uuid[] default '{}'
) returns uuid language plpgsql security definer set search_path=public as $$
declare sid uuid; prof uuid; learner record; adult_name text;
begin
  perform public.require_family_adult(target_family);
  if target_pack_id <> 'montenegrin-en' or target_quest_id <> 'false-friend-detective' or target_milestone < 10 or target_milestone > 190 or (target_milestone-10)%30<>0 then
    raise exception 'Unknown or unavailable side quest';
  end if;
  perform 1 from public.families where id=target_family for update;
  select id into sid from public.family_side_quest_sessions
    where family_id=target_family and pack_id=target_pack_id and quest_id=target_quest_id and status='active';
  if sid is not null then return sid; end if;
  if (select count(*) from public.family_voyage_sessions where family_id=target_family
      and pack_id=target_pack_id and status='completed' and not is_review)<target_milestone then
    raise exception 'Complete more family lessons to unlock this case pack'; end if;
  insert into public.family_side_quest_sessions(family_id,pack_id,pack_version,quest_id,milestone,controlling_adult,cases)
    values(target_family,target_pack_id,target_pack_version,target_quest_id,target_milestone,auth.uid(),public.detective_cases_for_milestone(target_milestone)) returning id into sid;
  select coalesce(display_name,email,'Parent / Guide') into adult_name from public.user_accounts where id=auth.uid();
  insert into public.family_side_quest_people(session_id,user_id,display_name)
    values(sid,auth.uid(),coalesce(adult_name,'Parent / Guide'));
  foreach prof in array participant_profiles loop
    select id,linked_user_id,display_name into learner from public.learner_profiles where id=prof and family_id=target_family;
    if learner.id is null or learner.linked_user_id is null then raise exception 'Every participant needs a linked device account'; end if;
    insert into public.family_side_quest_people(session_id,user_id,profile_id,display_name)
      values(sid,learner.linked_user_id,learner.id,learner.display_name) on conflict do nothing;
  end loop;
  if (select count(*) from public.family_side_quest_people where session_id=sid) < 2 then
    raise exception 'Connect at least one learner before starting a family side quest';
  end if;
  return sid;
end; $$;
create or replace function public.get_family_side_quest_state(target_family uuid, target_pack_id text)
returns jsonb language plpgsql security definer set search_path=public as $$
declare s record; expected integer; received integer; mine text; all_locked boolean;
begin
  if not public.is_family_member(target_family) then raise exception 'Family access required'; end if;
  select q.* into s from public.family_side_quest_sessions q
   where q.family_id=target_family and q.pack_id=target_pack_id
     and public.can_access_side_quest(q.id)
   order by (q.status='active') desc, q.created_at desc limit 1;
  if s.id is null then return null; end if;
  select count(*) into expected from public.family_side_quest_people where session_id=s.id;
  select count(*),max(answer_id) filter(where user_id=auth.uid()) into received,mine
    from public.family_side_quest_answers where session_id=s.id and case_index=s.current_case;
  all_locked := received=expected;
  return jsonb_build_object(
    'id',s.id,'questId',s.quest_id,'milestone',s.milestone,'status',s.status,
    'cases',s.cases,'currentCase',s.current_case,'controllingAdult',s.controlling_adult,
    'isController',s.controlling_adult=auth.uid(),'myAnswer',mine,
    'allLocked',all_locked,'lockedCount',received,'participantCount',expected,
    'people',(select coalesce(jsonb_agg(jsonb_build_object(
      'userId',p.user_id,'name',p.display_name,'isCurrentUser',p.user_id=auth.uid(),
      'locked',a.user_id is not null,'answerId',case when all_locked then a.answer_id else null end
    ) order by p.display_name),'[]'::jsonb)
      from public.family_side_quest_people p left join public.family_side_quest_answers a
       on a.session_id=p.session_id and a.user_id=p.user_id and a.case_index=s.current_case
      where p.session_id=s.id)
  );
end; $$;
create or replace function public.submit_family_side_quest_answer(target_session uuid, target_case integer, selected_answer text)
returns void language plpgsql security definer set search_path=public as $$
declare s record; allowed text[];
begin
  select * into s from public.family_side_quest_sessions where id=target_session for update;
  if s.id is null or s.status<>'active' or not public.can_access_side_quest(s.id) then raise exception 'Active side quest participation required'; end if;
  if target_case<>s.current_case then raise exception 'This case has already moved on'; end if;
  select array_agg(choice->>'id') into allowed
    from jsonb_array_elements(s.cases->target_case->'choices') choice;
  if allowed is null or not selected_answer=any(allowed) then raise exception 'Invalid answer'; end if;
  if exists(select 1 from public.family_side_quest_answers where session_id=s.id and case_index=target_case and user_id=auth.uid()) then
    raise exception 'Your answer is already locked';
  end if;
  insert into public.family_side_quest_answers(session_id,case_index,user_id,answer_id) values(s.id,target_case,auth.uid(),selected_answer);
end; $$;
create or replace function public.advance_family_side_quest(target_session uuid)
returns void language plpgsql security definer set search_path=public as $$
declare s record; expected integer; received integer;
begin
  select * into s from public.family_side_quest_sessions where id=target_session for update;
  if s.id is null or s.status<>'active' or s.controlling_adult<>auth.uid() then raise exception 'Only the family controller can advance this quest'; end if;
  select count(*) into expected from public.family_side_quest_people where session_id=s.id;
  select count(*) into received from public.family_side_quest_answers where session_id=s.id and case_index=s.current_case;
  if received<>expected then raise exception 'Everyone must lock an answer first'; end if;
  if s.current_case>=jsonb_array_length(s.cases)-1 then
    update public.family_side_quest_sessions set status='completed',completed_at=now(),updated_at=now() where id=s.id;
  else
    update public.family_side_quest_sessions set current_case=current_case+1,updated_at=now() where id=s.id;
  end if;
end; $$;
commit;
