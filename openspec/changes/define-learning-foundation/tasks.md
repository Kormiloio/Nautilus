# Tasks: Define the Nautilus learning foundation

## 1. Recover and audit existing work

- [x] 1.1 Add the exported prototype to the workspace without modifying the artifact (`web/index.html`).
- [ ] 1.2 Add the complete 224-line lesson source in a clearly identified raw/import location.
- [x] 1.3 Confirm the export runs as a static page, preserve it as `web/prototype.html`, and replace it with a reproducible Vite build.
- [x] 1.4 Complete an initial source and rendered-browser audit in `docs/PROJECT_REVIEW.md`.
- [x] 1.5 Inventory the 33 topics, 248 items, dialogues, and Alphabet bonus in structured content.

## 2. Confirm product decisions

- [ ] 2.1 Review the PRD with the family and update goals, non-goals, and product name.
- [ ] 2.2 Decide local-only versus cross-device progress for the first year.
- [ ] 2.3 Name the language and audio review owner.
- [ ] 2.4 Decide offline requirements and the minimum supported devices/browsers.
- [ ] 2.5 Decide the first-release parent progress experience.
- [x] 2.6 Resolve the prototype's weekly locks, 12-month journey, and recommended session against the approved free-browse ten-month direction.
- [ ] 2.7 Decide whether real family names belong in version-controlled defaults.

## 3. Validate architecture and content model

- [ ] 3.1 Create representative structured items for a word, phrase, sentence, script pair, and dialogue.
- [x] 3.2 Define and automate content-schema validation, including review status and media references.
- [x] 3.3 Implement the learning-engine and profile-storage boundaries.
- [x] 3.4 Select and implement the modular Vite migration while preserving the original artifact.
- [x] 3.5 Define explicit star, streak, topic-progress, and session-completion rules.

## 4. Build the family-alpha vertical slice

- [x] 4.1 Implement responsive topic browsing with no locked topics.
- [x] 4.2 Implement representative flashcard, matching, quiz, listen/repeat, and role-play sessions.
- [x] 4.3 Implement separate local learner profiles and progress summaries.
- [ ] 4.4 Implement reviewed audio resolution and unavailable-audio fallback.
- [x] 4.5 Ensure microphone recordings are not retained or transmitted by default.

## 5. Verify

- [ ] 5.1 Add unit tests for answer evaluation, session generation, scoring, streak dates, and profile isolation.
- [ ] 5.2 Add schema tests for invalid or unpublished content.
- [ ] 5.3 Run keyboard, screen-reader, contrast, zoom, and reduced-motion checks against core flows.
- [ ] 5.4 Test narrow phone, tablet portrait, and desktop layouts.
- [ ] 5.5 Test audio unavailable, microphone denied, storage unavailable/full, refresh, and malformed-content cases.
- [ ] 5.6 Complete language and audio review for all alpha content.
- [ ] 5.7 Verify that inactive media controls do not emit requests for unresolved template values or leak object URLs.
