# Design: Restore classic Family Play navigation

Family Play currently uses a classic shared-session controller for navigation and separate per-person lock-ins for collaborative activities. A later verified-attempt layer created an incompatible trigger that prevents the controller from changing `current_segment` whenever a linked verified attempt exists.

The repair removes only the incompatible segment-navigation restriction for Family Play sessions. Existing family authorization, controller lease, participant presence, quiz lock-in, final challenge lock-in, status transition controls, and individual verified-attempt protections remain unchanged. No answers, progress totals, or private learner data are exposed.

This is a compatibility fix, not a change to the curriculum or a new evidence model. The long-term work of replacing classic Family Play activity progression with fully verified per-device receipts must be specified separately before implementation.
