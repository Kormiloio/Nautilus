-- Register the same versioned packs offered by the client; keep pilot packs in review.
insert into public.language_packs(id,version,target_language_code,target_language_name,support_language_code,scripts,status)
values ('montenegrin-en','0.1.0','cnr','Montenegrin','en',array['Latn','Cyrl'],'draft'),
('albanian-en','0.1.0','sq','Albanian','en',array['Latn'],'review'),
('iraqi-arabic-en','0.1.0','ar','Iraqi Arabic','en',array['Arab'],'review'),
('mandaic-en','0.1.0','mid','Mandaic · Script Pilot','en',array['Mand'],'review'),
('spanish-spain-en','0.1.0','es','Spanish · Spain','en',array['Latn'],'review'),
('italian-en','0.1.0','it','Italian','en',array['Latn'],'review'),
('french-france-en','0.1.0','fr','French · France','en',array['Latn'],'review')
on conflict(id,version) do nothing;

insert into public.family_languages(family_id,pack_id,pack_version,enabled_by)
select f.id,p.id,p.version,f.owner_user_id from public.families f cross join public.language_packs p
where (p.id,p.version) in (('montenegrin-en','0.1.0'),('albanian-en','0.1.0'),('iraqi-arabic-en','0.1.0'),('mandaic-en','0.1.0'),('spanish-spain-en','0.1.0'),('italian-en','0.1.0'),('french-france-en','0.1.0'))
on conflict(family_id,pack_id) do nothing;

create or replace function public.create_family(family_name text)
returns uuid language plpgsql security definer set search_path=public
as $$
declare created_family uuid;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  insert into public.families(name,owner_user_id) values(family_name,auth.uid()) returning id into created_family;
  insert into public.family_memberships(family_id,user_id,role) values(created_family,auth.uid(),'owner');
  insert into public.family_languages(family_id,pack_id,pack_version,enabled_by)
  select created_family,id,version,auth.uid() from public.language_packs where (id,version) in (('montenegrin-en','0.1.0'),('albanian-en','0.1.0'),('iraqi-arabic-en','0.1.0'),('mandaic-en','0.1.0'),('spanish-spain-en','0.1.0'),('italian-en','0.1.0'),('french-france-en','0.1.0'));
  return created_family;
end;
$$;

-- Completion credit follows the actual completion time in the session timezone.
create or replace function public.set_family_completion_date()
returns trigger language plpgsql set search_path=public
as $$
begin
  if new.status='completed' and old.status is distinct from 'completed' then
    new.local_date := (coalesce(new.completed_at,now()) at time zone coalesce(nullif(new.timezone,''),'UTC'))::date;
  end if;
  return new;
end;
$$;
create trigger set_family_completion_date before update of status on public.family_voyage_sessions
for each row execute function public.set_family_completion_date();
