-- Helper SQL script to grant platform admin rights in Supabase (FR-40, FR-41)
--
-- Instructions:
-- Replace 'YOUR-SUPABASE-USER-UUID' with the authenticated user ID from auth.users.

insert into public.platform_roles (user_id, role)
values ('YOUR-SUPABASE-USER-UUID', 'platform_admin')
on conflict (user_id) do update set role = 'platform_admin', granted_at = now();
