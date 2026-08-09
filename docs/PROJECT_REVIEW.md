# Nautilus project review

**Review date:** 2026-08-09  
**Status:** Modular migration and 200-day foundation verified; content review remains

## Current implementation status

The initial review below describes the preserved Claude prototype and explains why it was replaced. Nautilus has since migrated to a modular Vite production architecture:

- all 33 topics, 248 learning items, dialogues, and the Alphabet bonus are stored in `src/content/topics.json`;
- an explicit content-owned curriculum map assigns 30 unique core topics across ten months and identifies three advanced/capstone extras;
- Ajv validates the schema, topic identities, curriculum references, uniqueness, and complete topic coverage before release;
- the learning engine deterministically generates 200 lessons across 40 five-day weeks and skips weekends when creating the calendar schedule;
- profile progress records actual qualifying activity dates separately from idempotent voyage-lesson completion;
- profile selection no longer creates or advances a streak;
- the dashboard includes `Voyage day N of 200`, active-day summaries, a responsive calendar, nautical states, and an accessible list representation;
- free topic browsing, mixed review, guided sessions, profile progress, flashcards, matching, quizzes, listening, recording, and role-play are implemented as modular components;
- Vitest currently passes 11 engine/progress tests, Ajv validation passes, and Vite builds directly into `web/`;
- the original prototype is preserved at `web/prototype.html`.

Remaining high-priority risks are content depth, fluent language/audio review, configured holidays and breaks, storage recovery/versioning, broader automated interaction coverage, full accessibility/device verification, and the four-week family pilot.

## Historical prototype assessment

The product idea is coherent and well suited to a responsive web app: a ten-month, practical Montenegrin learning experience for teenagers preparing to visit Montenegro. The supplied decisions give the app a useful shape—free topic choice, varied short activities, audio, role-play, and restrained gamification.

At the time of the initial audit, the Claude-generated prototype was the application at `web/index.html`; it is now preserved at `web/prototype.html`. It rendered and its principal navigation was usable in a browser, including at a 390 × 844 phone viewport. The 243 KB export bundle used a loader to unpack an 81 KB generated template, embedded application logic/data, and compressed runtime assets. It had no editable source tree, package manifest, build command, test suite, or content file. The original 224-line teaching text remains missing as a separate source.

The actual app is substantially larger and more prescriptive than the prior summary. It contains 33 scheduled topics plus one alphabet bonus, a 12-month August–July journey, one-week date-based unlocks, named profiles for Lena, Sam, Mario, and Kristina, family sessions, mixed review, seven badges, stars, streaks, browser text-to-speech, temporary microphone recording, and seven role-play topics.

The prototype is a useful interactive concept, but it should not be treated as production-ready or as the product contract. Several implemented choices contradict the decisions in the supplied context.

## Review findings

### P0 — Product direction conflicts

1. **Topics are not freely browsable.** `isUnlocked()` compares each topic's generated weekly unlock date with the current date. The dashboard, review pool, and curriculum use this gate. On the review date, the learner could open only Family plus the Alphabet bonus. This directly conflicts with “free-browse topics, no set order” and “just let them pick freely.”
2. **The plan is 12 months, not 10.** The interface says “Your 12-Month Journey,” shows August through July, and groups scheduled topics into 12 buckets. The stated preparation horizon is ten months. The dates and trip target need one authoritative definition.
3. **The app recommends and centers a next session.** “Tonight's Session” automatically chooses the most recently unlocked topic. That conflicts with the decision not to provide a next-topic suggestion, unless the family-session concept is intentionally approved as a separate optional mode.

### P1 — Learning, progress, and privacy defects

1. **A streak is awarded for opening a profile, not practicing.** `loadProfile()` creates or advances the streak as soon as the profile is selected. A learner can maintain a streak without completing any learning activity.
2. **Stars are easy to farm and their meaning is unclear.** Correct quiz answers award stars immediately; a fresh quiz can be generated repeatedly. Matching completion and a session wrap also award stars. There is no documented cap, mastery rule, or distinction between practice and achievement.
3. **“Already know this — skip” marks a whole topic complete immediately.** There is no confirmation or diagnostic check, and completion is also used for badges and the journey display.
4. **Named profiles are hard-coded and unauthenticated.** Any user can switch to a parent/guide profile and view both children's summaries. This may be acceptable for a private family-only local build, but it is not a parent-only control and should not be described as one.
5. **Progress is fragile.** It lives only in browser `localStorage`; there is no export, recovery, schema version, cross-device sync, or handling for failed writes.
6. **Microphone recordings survive in memory until replaced or the page closes.** They are stored as object URLs and are not uploaded, which is a good privacy default, but previous object URLs are not revoked and recording state is not cleared when navigating away.
7. **Synthetic Croatian speech is presented as pronunciation.** The default voice request is `hr-HR`, with Serbian and Bosnian options. Availability and Montenegrin pronunciation are device-dependent, and the UI does not disclose that the output is a synthesized approximation.
8. **The empty recording player produces a failed network request.** On topic load, the rendered page attempted to fetch the literal template value `{{recordingUrl}}`, indicating that the audio element is created before a valid recording URL is bound.

### P1 — Accessibility and document-quality defects

1. **The rendered document has no title, language attribute, or semantic headings.** Browser inspection returned an empty `document.title`, no `html[lang]`, and no `h1`–`h6` elements after unpacking.
2. **Some touch targets are undersized.** The four profile-switch buttons rendered at 30 px high on a 390 px viewport, below the 44 × 44 px WCAG 2.2 target-size recommendation for typical controls.
3. **The flashcard interaction is not represented as a semantic button.** The visible “Tap to flip” card is not keyboard-focusable as an interactive control; only the surrounding activity buttons appear in the accessibility tree.
4. **Status and game feedback lack announced live regions.** Quiz, matching, recording, and progress updates are visually replaced without explicit status semantics.
5. **The design has no visible reduced-motion accommodation.** Card flipping uses a fixed 0.4-second 3D transition.

### P1 — Maintainability and correctness risks

1. **Application code, content, presentation, and dependencies are bundled together.** A change requires editing or regenerating an opaque artifact; there is no supported build path.
2. **There are no automated tests or content validation.** Quiz distractors, duplicate meanings, topic data, progression, and storage behavior are unchecked.
3. **The content model lacks stable item IDs, script fields, difficulty, review status, and audio metadata.** Activity state relies on array position and object identity.
4. **The alphabet is incomplete as an alphabet lesson.** It contains only 12 selected Latin/Cyrillic mappings, despite being titled “Alphabet.”
5. **Cyrillic is otherwise absent from the curriculum.** The main 33 topics contain only the Latin `mn` field.
6. **Some curriculum claims and translations require fluent review.** The prototype intentionally includes family Dalmatian forms such as `đida`, `kruh`, and `kukumar`; other items mix variants such as `sretan`, `sledeće`, and `jučer/juče`. These may be intentional family language, but the app currently has no variant/source metadata and should not label all forms uniformly as standard Montenegrin without review.

### P2 — UX and content observations

1. The dark visual system is coherent and teen-appropriate, and the 390 px layout tested without horizontal scrolling.
2. Role selection and optional translation display are useful foundations for rehearsed dialogues.
3. The role-play implementation is linear reading, not branching or “swappable parts” as previously described.
4. Listen/repeat records and plays the learner back but does not evaluate pronunciation, which is the correct limitation; the UI should state this plainly.
5. The 33 scheduled topics contain 248 vocabulary/phrase items, with a median of seven items per topic; 18 topics contain fewer than eight items. Without sentence work, dialogue, spaced review, and content expansion, they will not sustain approximately 200 meaningful weekday lessons.

## What is already decided

- Primary learners are teenagers aged 12 and older.
- Learners know some isolated Montenegrin words but are not conversational.
- The learning horizon is about ten months, ending in practical preparation for a summer trip to Montenegro.
- The app should work on phones, tablets, and computers.
- Learners may browse topics freely; there is no mandatory course order or automatic next-lesson recommendation.
- Activities should mix flashcards, matching/memory, multiple-choice quizzes, listening/repeat, and selected role-play.
- Motivation should use simple stars and streaks without heavy gamification.
- Audio is required in the product plan.
- Both Latin and Cyrillic scripts are in scope.
- Dialect notes are out of scope for the initial experience; explanations should be simplified.
- Dyslexia-specific design is not a learner requirement, though the parent/administrator experience should still favor readable language and clear layouts.

## Strengths of the concept

1. The goal is concrete: communicate during a real trip, rather than achieve abstract fluency.
2. Free browsing supports autonomy for teenage learners and shared family use.
3. Multiple activity types allow repetition without making practice feel identical.
4. Role-play maps naturally to travel situations such as greetings, cafés, shopping, directions, and family conversations.
5. A web app avoids app-store friction and supports all named devices.

## Product risks to resolve

| Risk | Why it matters | Recommended response |
| --- | --- | --- |
| Unverified language content | Incorrect translations or pronunciation would undermine trust. | Require review by a fluent Montenegrin speaker before content is marked publishable. |
| Browser text-to-speech quality | Montenegrin voices may be unavailable or pronounced inconsistently across devices. | Treat browser speech as a fallback; plan for reviewed human or high-quality recorded audio. |
| Ten-month retention | The 33 topics are broad but most remain too shallow for five distinct daily lessons. | Expand sentence work, dialogue, listening, and integration challenges before declaring the 200-day curriculum complete. |
| Free browsing without guidance | Learners may repeatedly choose familiar topics and avoid weak areas. | Preserve free choice while showing optional progress and review cues, not forced navigation. |
| Local-only progress | Browser storage can be lost and does not follow a learner between devices. | Use local profiles for the first release; evaluate optional accounts/sync only after family testing. |
| Teen positioning | Childlike visuals or rewards could reduce engagement. | Use a modern travel-oriented tone and understated rewards. |
| Privacy and minors | Accounts, analytics, recordings, or cloud speech create additional obligations. | Keep the first release account-free, avoid behavioral advertising, and do not retain microphone recordings. |

## Ongoing implementation review checklist

When the prototype is added, review it for:

- correctness and completeness of every Montenegrin/English pair;
- consistent use of `crnogorski`, diacritics, and both scripts;
- keyboard, touch, screen-reader, contrast, reduced-motion, and zoom behavior;
- responsive layouts at narrow phone, tablet portrait, and desktop widths;
- persistence and isolation of progress for multiple children on one device;
- scoring behavior, streak boundaries, and reset/recovery behavior;
- activity correctness, including duplicate cards and quiz distractors;
- audio availability, cancellation, replay, speed, and graceful fallback;
- microphone permissions and whether any audio is stored or transmitted;
- offline/poor-network behavior;
- separation of lesson data from presentation code;
- automated tests and a repeatable local development/build process.

## Missing inputs

1. The complete 224-line lesson material in its original form.
2. Confirmation that the named family profiles should remain in version control.
3. Confirmation of who will validate translations and audio.
4. Whether progress must follow learners across devices in the first year.
5. Whether parents need a protected dashboard or only a simple shared-device progress view.
6. The holidays, vacations, and trip dates that should pause or reshape the weekday schedule.

## Recommendation

Use the modular Vite application as the production foundation and keep the original export only as a visual reference. The next investment should be content quality rather than architectural migration: expand Month 1 into 20 genuinely distinct lessons, obtain fluent language/audio review, test it with the family for four weeks, and use the results to refine the remaining voyage before full-scale authoring.
