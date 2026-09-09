# Tasks: Add Review from Your Voyage practice

## Specification and product record

- [x] Amend the gameplay PRD with the review-mode outcome and constraints.
- [x] Add proposal, design, normative requirements, and product decisions.

## Selection and verified practice

- [x] Define a language-scoped, receipt-backed review topic-selection RPC.
- [x] Rank eligible completed topics using the active learner's incorrect and least-recent evidence without exposing receipt history.
- [x] Add deterministic sparse-history fallback and topic de-duplication.
- [x] Create revision-pinned verified practice attempts for the selected topic.
- [x] Ensure independent review cannot advance Family Voyage days, family sessions, or voyage lesson completion.

## Interface

- [x] Add an optional dashboard/practice entry point with clear familiar-language wording.
- [ ] Render all supported existing activities with current feedback, keyboard, touch, audio fallback, and reduced-motion behavior.
- [x] Preserve the existing completed-topic gate as the unavailable state.

## Verification

- [ ] Add engine, selector, authorization, and server-RPC tests.
- [ ] Validate all language packs and immutable-catalog handling.
- [ ] Test narrow phone and RTL/script-pack layouts.
- [ ] Run application tests, database tests, schema lint, production build, and a manual family check before deployment.
