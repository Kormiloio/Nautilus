# Tasks: Add parent-controlled Family Play Mode

## Progress correction

- [x] Count unique activity dates rather than completed lesson IDs in day-based displays.
- [x] Correct the calendar, voyage map, passport, dashboard target, and curriculum-plan statuses.
- [x] Add regression coverage for eight activities completed on one date.
- [x] Read shared voyage and family calendar position from completed family sessions when cloud family state is available.
- [ ] Remove the provisional activity-date fallback after the hosted migration and rollout are verified.

## Family Play cloud model

- [x] Add family session and participant tables, indexes, and RLS.
- [x] Prevent more than one completed family voyage day per family, language, and local date.
- [x] Add adult create/control/complete service methods.
- [x] Add learner join and reconnect service methods.
- [x] Add Realtime session subscription and renewable controller leases for reconnect recovery.
- [x] Add explicit adult handoff, expired-lease takeover, and controller-event history.

## Family Play interface

- [x] Add Start Family Session to Family Overview.
- [x] Add participant and next-voyage-day selection using the family's active language.
- [x] Add adult presentation controls and learner follower view.
- [x] Show Independent Practice as a separate learner action.
- [x] Preserve the complete shared lesson when a participant has already completed the same material independently.
- [x] Require an explicit adult Complete for Family action after the final segment.
- [x] Add shared-versus-personal progress comparison to Family Overview.
- [x] Add completed-session history and non-advancing family lesson review.
- [x] Add a live readiness lobby, persistent crew status, and rotating turn prompts.
- [x] Give Discover, Recall, Build, Use, and Checkpoint distinct cumulative content mixes.
- [x] Add schema-backed cross-topic connections gated by learned-topic prerequisites.
- [x] Mix recent review with deterministic retrieval of older voyage topics.
- [x] Center the readiness anchor and copy on narrow phone layouts.

## Immersive voyage

- [x] Add a viewport-sized progress-positioned voyage camera to the plan page.
- [x] Add purpose-composed horizontal and vertical voyage worlds for wide and narrow screens.
- [x] Add atmospheric foreground, cloud, sparkle, vessel, and camera motion layers.
- [x] Add reusable immersive lesson-stage templates for Colors and Family.
- [x] Add an accessible reduced-motion variant.
- [ ] Add low-bandwidth scene assets and richer port-to-port chapter transitions.

## Verification

- [ ] Test reconnects and explicit controller handoff across devices.
- [x] Test authorization, sequential voyage positions, adult control, and participant isolation.
- [x] Test that independent completion never changes family lesson or family calendar state.
- [ ] Conduct a full family session across three devices before production rollout.
