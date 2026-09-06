-- Restore the controller-led illustrated Family Play experience.
-- These RPCs retain family membership, roster, controller, and final-lock checks.
grant execute on function public.complete_family_play(uuid) to authenticated;
grant execute on function public.submit_family_quiz_answer(uuid,integer,text) to authenticated;
grant execute on function public.reconcile_family_quiz_round(uuid,integer) to authenticated;
grant execute on function public.lock_family_final_challenge(uuid,integer) to authenticated;
grant execute on function public.claim_family_play_controller(uuid) to authenticated;
grant execute on function public.handoff_family_play_controller(uuid,uuid) to authenticated;
