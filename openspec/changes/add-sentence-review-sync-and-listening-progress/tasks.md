# Tasks: Sentence review sync and listening progress

## Specification

- [x] Proposal, design, and specs (this change), replacing the device-local and unrecorded requirements in `add-cumulative-sentence-practice`.
- [x] Amend GAMEPLAY PRD §6.2.2 and the superseded specs.

## Sentence review sync

- [x] Migration: `learner_sentence_reviews`, `learner_sentence_review_events`, RPCs `record_sentence_mistake`, `submit_sentence_review`, `list_sentence_reviews`.
- [x] pgTAP: owner-only access, idempotency, server grading and schedule, 100 cap, re-entry after mastery, parent cannot read.
- [x] Client operation queue, legacy upload, `syncSentenceReviews`, wiring in `main.js`.
- [x] Unit tests for the queue, sync ordering, failure handling, and merge.

## Listening progress

- [ ] `buildVerifiedListeningSteps` and the `toVerifiedExercises` mapping.
- [ ] Exporter listening rows; `prepare-listening-release.mjs` for revision 10; release gate update.
- [ ] Audio controls and written fallback in `verified-lesson-view.js`; route `openListeningPractice` to the verified set; "not saved" label on the fallback.
- [ ] Unit tests for determinism and mapping; pgTAP for listening credit (stars once, activity day, no voyage change); browser and accessibility checks.

## Release

- [ ] Owner applies the migration (`supabase db push --linked`).
- [ ] Owner publishes catalog revision 10.
- [ ] Merge, confirm the Netlify deploy passes the revision-10 gate.
