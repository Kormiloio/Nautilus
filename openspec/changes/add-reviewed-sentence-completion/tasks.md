# Tasks: Add reviewed sentence completion

## Specification and content contract

- [x] Define the learner outcome, non-goals, privacy, accessibility, and fallback behavior.
- [x] Add normative scenarios for individual and Family Play completion.
- [x] Add a structured completion generator from reviewed authored sentence connections.
- [x] Reject punctuation-only blanks, duplicate choices, and missing reviewed content.

## Verified curriculum and server validation

- [x] Add `sentence_completion` catalog serialization and public-answer redaction.
- [x] Add server-side answer-shape and answer validation through the existing verified attempt RPC.
- [ ] Publish a new immutable catalog revision without mutating current attempts.
- [ ] Verify release counts and new-exercise coverage in production.

## Interface

- [x] Render accessible single-blank completion in individual verified lessons.
- [x] Render the same per-learner completion interaction in Family Play.
- [x] Show immediate correction, completed sentence, and meaning before Continue.
- [ ] Add touch, keyboard, narrow-phone, and RTL/script checks.

## Verification

- [x] Add engine and adapter regression tests.
- [x] Add database tests for malformed, incorrect, and correct completion submissions.
- [x] Run application tests, language validation, database tests, schema lint, and production build.
  - [x] Application tests, language validation, and production build.
  - [x] Database tests and schema lint passed after a local database reset.
- [ ] Complete a manual parent preview in at least one Latin-script and one RTL/script-pack language.
