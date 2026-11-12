# Tasks: Cumulative sentence practice, sentence review, listening practice, and Detective case packs

## Specification

- [x] Record proposal, design, and normative specs for work already implemented on `wip/sentences-listening-detective`.
- [x] Amend `docs/GAMEPLAY_PRD.md` with the new behavior, its draft status, and open questions.
- [x] Identify conflicts with PRD §11.1, §11.5, and the lesson-rhythm "no hard-coded language" requirement.
- [ ] Decide each unresolved product decision in `proposal.md` and update these specs.

## Content

- [x] Author draft sentence frames, noun allow-list, nine topic sentence packs, and six Detective editions.
- [x] `npm run validate` passes for all language packs (content still marked draft).
- [ ] Fluent human review of every new Montenegrin sentence, frame note, gloss, dialogue, and Detective case.
- [ ] Move cumulative frames and nouns from `src/engine/cumulative-sentences.js` into versioned language-pack content, or record an approved pilot exception.

## Activity logic

- [x] Build allocations from the actual focused schedule (`getFocusedPilotWordIds`, `priorWordIds`) and split new vs. practiced-again recap.
- [x] Gate sentence practice by catalog revision (8 = topic packs, 9 = cumulative) and honor pinned `catalogRevision`.
- [x] Add sentence-builder, single-blank completion, dialogue, and Family Play role-play steps.
- [x] Add a device-local sentence review queue with de-duplication, 10-minute retry, 24-hour spacing, and mastery after two correct.
- [x] Add listening practice (meaning and word-order) with slow playback and a written fallback.
- [x] Pin Detective cases per session and give each edition its own badge.
- [x] Reuse an existing open family session after a duplicate-start conflict.
- [ ] Resolve the milestone > 190 Detective mismatch between client cycling and server limits.

## Interface

- [x] Dashboard banners for listening practice and sentence review, and focused recap labels.
- [x] Pattern lesson, sentence review, and listening practice views; Detective clue words.
- [ ] Keyboard, touch, screen-reader, reduced-motion, and narrow-phone checks for the new views (`tests/*-browser.mjs` exist but have not been run for this record).

## Verification

- [x] Unit tests: `sentence-practice`, `sentence-review`, `listening-practice`, `curriculum-progression`, plus Family Play, review regression, and vocabulary rollout additions. Full suite: 25 files, 159 tests passing.
- [ ] Run `tests/sentence-browser.mjs`, `tests/sentence-review-browser.mjs`, `tests/listening-browser.mjs`, `tests/progression-browser.mjs`.
- [ ] Run `scripts/test-detective-editions.mjs` and `scripts/test-cumulative-catalog.mjs` against a local Supabase container; run `npm run test:db` including `supabase/tests/detective-editions.sql`.
- [ ] Production build from a clean tree.

## Release (blocked on content review)

- [ ] Merge `wip/sentences-listening-detective` into `main`.
- [ ] Apply `20261026010000_cumulative_detective_editions.sql` to production.
- [ ] Publish catalog revision 9 using `scripts/prepare-sentence-release.mjs` output; confirm `npm run verify:release` reports revision 9.
- [ ] Confirm in-flight attempts pinned to earlier revisions still replay unchanged.
