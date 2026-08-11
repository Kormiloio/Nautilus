# Product requirements document: Nautilus language learning

**Repository codename:** Nautilus  
**Document status:** Montenegrin technical scaffold implemented; multi-family and multilingual platform in specification
**Last updated:** 2026-08-10
**Target:** A usable first-year learning experience spanning approximately 10 months

## 1. Product summary

Nautilus is a responsive family language-learning application. Its first course, Učimo crnogorski, helps teenage learners build enough practical Montenegrin to interact with relatives and navigate common situations during a trip to Montenegro. The platform will also support separately reviewed Albanian, Spanish, French, and Greek language packs. It combines short, repeatable activities with audio and practical role-play. Learners select a language, choose topics freely, and receive lightweight feedback through stars, streaks, and visible topic progress.

The app is a supplement to family teaching, not a comprehensive language course or a substitute for a fluent speaker.

## 2. Problem

Learners need a sustainable way to practice for roughly ten months. Existing generic products may not offer a family's heritage language, may not reflect household vocabulary, and may overemphasize linear courses or childish reward systems. Families need one accessible place for reviewed standard vocabulary, optional family variants, phrases, scripts, listening, repetition, and situational practice across shared and personal devices.

## 3. Goals

By the trip, a regularly participating learner should be able to:

- recognize and use high-frequency greetings, courtesy phrases, and family words;
- understand and produce essential language for food, shopping, directions, travel, time, and basic needs;
- recognize both Latin and Cyrillic forms covered by the curriculum;
- understand familiar words and short phrases when spoken clearly;
- assemble and respond to simple sentences and questions;
- participate in short, predictable real-world exchanges with growing confidence.

Product goals:

- sustain useful practice over approximately 40 weeks;
- work reliably on modern phone, tablet, and desktop browsers;
- make practice sessions useful in 5–15 minutes;
- preserve learner choice while making progress and weak areas visible;
- keep content maintainable and reviewable outside of UI code.
- let families enable supported languages without mixing curricula or progress;
- preserve reviewed standard language while allowing clearly labeled private family wording.

## 4. Non-goals for the first release

- open-ended AI conversation or automatic correction of unrestricted speech;
- a full grammar reference or advanced fluency curriculum;
- social leaderboards, virtual currency, competitive leagues, or manipulative notifications;
- detailed regional/dialect instruction;
- advertising or sale of learner data;
- retention of microphone recordings;
- native iOS or Android applications;
- teacher/classroom administration.
- automatic translation of the Montenegrin curriculum into another supposedly publishable course;
- presenting a family variant as globally reviewed standard language.

## 5. Users

### Primary: teenage learner

- Age 12+
- Knows some words but has limited ability to form or understand sentences
- Uses a phone or tablet most often, with occasional computer access
- Wants direct, age-appropriate practice without a childish interface
- May use an individual email-based account to join a family and carry progress across devices
- May invite friends or relatives into the family workspace as learners when the parent owner permits it

### Secondary: parent or family guide

- Adds or reviews family lesson material
- Helps select useful topics and validates progress informally
- Needs clear wording and simple management, without a complex teacher dashboard
- Creates or joins a family, invites members, and manages roles and learner profiles when cloud features are enabled
- Owns the workspace, can revoke learner-created invitations or memberships, and may disable learner invitations

### Content reviewer

- A fluent speaker or qualified reviewer who verifies translations, spelling, natural phrasing, and audio before publication

## 6. Experience principles

1. **Travel usefulness first.** Prefer language learners can use with people in Montenegro.
2. **Choice without confusion.** Topics remain freely browsable; progress indicators help learners decide what to revisit.
3. **Short, active practice.** Favor recall, listening, and response over passive reading.
4. **Teen-appropriate tone.** Use clean visuals, real situations, and restrained rewards.
5. **Accuracy over volume.** Unreviewed content is visibly draft and cannot silently enter the published curriculum.
6. **Safe by default.** Minimize personal data, accounts, analytics, and recording retention.

## 7. Core experience

### 7.1 Home and topic browsing

The home screen groups topics into understandable categories and shows progress without imposing an order. A learner can open any topic and choose an available activity.

Initial topic families should cover:

- people and conversation: greetings, introductions, courtesy, family, feelings;
- everyday life: numbers, colors, days/time, weather, home, school/leisure;
- food and drink: common foods, preferences, café/restaurant language;
- getting around: transportation, directions, places, shopping, money, help;
- reading and building language: Latin alphabet, Cyrillic alphabet, sentence patterns, simple grammar.

The final curriculum and topic count depend on review of the existing lesson material.

### 7.2 Activity types

- **Flashcards:** reveal translation, script alternative, and audio; support self-marking as “again” or “got it.”
- **Matching/memory:** pair Montenegrin with English, an image, or an alternate script where appropriate.
- **Multiple-choice quiz:** test meaning, phrase completion, listening recognition, or script recognition with plausible distractors.
- **Listen and repeat:** play reviewed audio and invite the learner to repeat. The first release may use self-assessment and must not claim pronunciation accuracy without a validated scoring system.
- **Role-play:** guide short branching or swappable-part dialogues for selected real situations.

Topics that benefit from concrete visual recognition should open with an original contextual scene and carry the same visual cues into their supported activities. Visuals must teach or reinforce meaning rather than function only as decoration. Text, audio, and accessible names remain available so an image is never the sole source of essential information. The Colors topic is the initial reference implementation: a recognizable harbor scene introduces six colors, color-dominant cards support discovery and recall, and matching tiles retain the learned color cue.

### 7.3 Progress and motivation

- Award stars for completed practice based on understandable rules.
- Track a simple practice streak using the learner's local date.
- Show progress per topic and recent practice.
- Never lock topics behind stars or streaks.
- Make missed days neutral; do not use shame-oriented messages.
- Support more than one local learner profile on a shared device.

Nautilus distinguishes shared curriculum movement from individual practice:

- A **Family Voyage Day** is a parent-led learning session completed by the family on one local calendar date. It advances the shared 200-day route at most once on that date, regardless of how many activities the family completes.
- **Independent Practice** includes flashcards, quizzes, matching, listening, and topic exploration completed by one learner outside the parent-led session. It contributes to that learner's personal practice history, stars, and topic mastery but does not advance the shared family route.
- Independent completion never consumes, skips, or completes the matching Family Play lesson. A learner who has practiced ahead can repeat that material with the family; the shared lesson remains incomplete until an authorized adult explicitly completes it.
- Completing several activity or lesson records on one date never creates several learning days.

### 7.4 Audio

Every publishable word or phrase intended for listening practice should have approved audio or a clearly communicated fallback. Playback must be replayable and interruptible. If speech synthesis is used, voice availability and pronunciation must be checked on supported devices. Microphone use, if enabled for repetition, must be optional and recordings must not be retained by default.

### 7.5 Scripts and language display

Content may include Latin, Cyrillic, English meaning, and optional learner-friendly notes. The interface must preserve Montenegrin diacritics. Activities should introduce script recognition deliberately rather than presenting transliteration as interchangeable in every context.

### 7.6 Languages and family variants

The initial target-language roadmap is Montenegrin, Albanian, Spanish, French, and Greek, with English as the initial interface and instructional support language. Every target language is an independently versioned and reviewed language pack with its own content, scripts, audio rules, curriculum, and voyage readiness. Selecting one language must not alter another language's progress.

Published language-pack content remains the standard source. A family may privately add a word or phrase or attach a labeled alternative to a stable standard item. For example, the standard Montenegrin pack may teach `deda` while a Croatian-influenced family chooses to show or prefer `dida`. The family can use standard-only, show-both, or prefer-family display behavior without overwriting the standard pack or affecting another family.

## 8. Ten-month learning voyage

The planned experience contains **200 weekday lesson positions across 40 instructional weeks**. The engine currently generates all 200 structural positions; they become publishable lessons only after their distinct segments and language/audio content pass readiness review. This is a recommended family rhythm, not a content lock: learners may still open any published topic or practice freely.

Each of the ten learning months uses a four-week pattern:

| Week | Focus | Weekday lessons |
| --- | --- | --- |
| 1 | Topic A | discover, recall, build, use, checkpoint |
| 2 | Topic B | discover, recall, build, use, checkpoint |
| 3 | Topic C | discover, recall, build, use, checkpoint |
| 4 | Integration | mixed review, listening, sentence building, role-play, family challenge |

Months containing additional calendar weeks may use them for rest, catch-up, bonus lessons, or trip simulations without increasing the 200-day core. The initial schedule begins Monday, August 10, 2026 and is planned in `America/New_York`. Weekends have no scheduled core lesson; optional weekend practice may count as an active day but does not advance the core voyage.

The content progression still follows four broad phases:

| Approximate period | Learning emphasis | Outcome |
| --- | --- | --- |
| Months 1–2 | sounds/scripts, greetings, numbers, family, core nouns | recognize and produce foundational language |
| Months 3–5 | everyday phrases, questions, food, time, preferences | handle short familiar exchanges |
| Months 6–8 | travel, shopping, directions, needs, richer sentence patterns | navigate common trip situations |
| Months 9–10 | mixed review, listening, role-play, family-specific language | improve recall and confidence under realistic conditions |

This is a content-planning framework, not a forced learner path. The app should offer optional review collections across topics as the library grows. The current prototype's August–July 12-month journey, weekly content locks, and “Tonight's Session” recommendation are superseded by the optional 200-day voyage.

### 8.1 Five-day topic cycle

| Day | Lesson purpose | Representative activity |
| --- | --- | --- |
| 1 — Discover | introduce useful language and pronunciation | 6–8 new items with reviewed audio |
| 2 — Recall | retrieve meaning and recognize spoken/script forms | flashcards, matching, listening |
| 3 — Build | apply one sentence or grammar pattern | guided sentence construction |
| 4 — Use | rehearse language in context | dialogue or role-play |
| 5 — Checkpoint | combine recall, listening, and production | mixed review and family challenge |

A topic is voyage-ready only when it can support five meaningfully different lessons. Repeating the same item deck with a different button does not constitute five lessons.

### 8.2 Calendar and day counter

The learner dashboard should show:

- `Voyage day N of 200`, representing the next planned lesson position;
- active practice days this week and month;
- a monthly calendar with planned, in-progress, completed, catch-up-available, and rest states;
- today's recommended lesson and its topic/day purpose;
- a separate route to browse all published topics freely.

Suggested nautical display labels are `in harbor` (rest), `charted` (planned), `making way` (in progress), `full sail` (completed), and `open water` (available for catch-up). Missed days use neutral language and never shame the learner.

### 8.3 Voyage map and learner logbook

The learner dashboard presents the 200-day curriculum as a ten-port voyage. Completed lessons advance the route and determine one of five milestone labels: `Anchors Aweigh`, `Making Headway`, `Rounding the Mark`, `Flying Colors`, and `Shipshape · Moored`. These milestones describe personal progress only; they are not family ranks or competitive leaderboards.

Each learner has a Captain's Quarters logbook containing:

- a language passport with one stamp for each completed 20-lesson month;
- sea companions earned at published voyage milestones;
- current stage, stars, and streak summary;
- language-scoped progress, so a reward earned in one language never appears as earned in another.

Companions and stamps must be deterministic consequences of completed Family Voyage Days. Profile selection, sign-in, independent practice, free browsing, or merely opening a lesson must not award them. The experience must remain usable without animation and must not lock curriculum or imply that one learner is ahead of another.

### 8.4 Family Play Mode

An authorized adult can start a Family Play session for a selected language and voyage day, choose participating learners, and control the shared lesson from the parent device. Participating learner devices show the same current segment and may respond locally, but cannot move the family to the next segment. The parent can pause, replay audio, move forward or backward, and end or complete the session.

Completing the session records one shared Family Voyage Day and credits each selected participant. Every curriculum lesson therefore has separate family-session and learner-practice states. Learners may complete, repeat, or move ahead through the same content independently before or afterward without moving the family route or marking the family lesson complete. When the family returns to that lesson, its complete content remains available to do together; only an authorized adult's explicit **Complete for Family** action advances the shared position. A disconnected participant can rejoin the active session. The initial release should favor clear state and recoverability over real-time animation complexity.

### 8.5 Immersive voyage presentation

The primary voyage view should use most of the viewport as a moving world rather than present the route only as a static card. Wide screens use a cinematic left-to-right archipelago; phones use a vertically winding route composed for the narrow viewport. The camera position, vessel, environment, and route treatment change with shared family progress. Detailed calendar and curriculum management remain available below or outside the immersive view. Motion respects reduced-motion preferences and essential state remains available as text.

## 9. Functional requirements

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-01 | Learners can browse and open any published topic without prerequisites. | Must |
| FR-02 | Each topic exposes only the activity types supported by its content. | Must |
| FR-03 | Flashcards, matching, quizzes, and listen/repeat work with touch, keyboard, and pointer input. | Must |
| FR-04 | Selected topics support structured role-play. | Must |
| FR-05 | The app stores stars, streak, recent practice, and topic progress separately for each local profile. | Must |
| FR-06 | A learner can switch local profiles without seeing another learner's session state. | Must |
| FR-07 | Published learning items support reviewed text and audio status. | Must |
| FR-08 | The interface presents Latin and Cyrillic content where the curriculum calls for them. | Must |
| FR-09 | The app remains usable when audio or microphone functionality is unavailable. | Must |
| FR-10 | A parent can inspect a concise learner progress summary. | Should |
| FR-11 | Learners can launch an optional mixed review across previously practiced material. | Should |
| FR-12 | The app can add topics and activities by editing structured content rather than application code. | Must |
| FR-13 | Core installed content and saved local progress remain usable after a page refresh; offline support is a later decision. | Must |
| FR-14 | No topic is locked because of score, streak, or lesson order. | Must |
| FR-15 | The app provides a configurable 200-lesson voyage organized as 40 five-day instructional weeks. | Must |
| FR-16 | Each learning month contains three topic weeks and one integration/review week. | Must |
| FR-17 | The dashboard shows voyage position, active-day counts, and a monthly learning calendar. | Must |
| FR-18 | Opening a profile or lesson does not count as an active or completed learning day. | Must |
| FR-19 | A scheduled day completes only after its declared required lesson segments are completed. | Must |
| FR-20 | Missed lessons can be resumed or rescheduled without locking topics or applying punitive messaging. | Must |
| FR-21 | Free practice remains available independently of the recommended daily voyage. | Must |
| FR-22 | A family can enable any published Montenegrin, Albanian, Spanish, French, or Greek language pack. | Must |
| FR-23 | A learner can select an enabled language and see that active language throughout learning flows. | Must |
| FR-24 | Curriculum, content, audio, voyage state, stars, streaks, and progress remain isolated by learner and language pack. | Must |
| FR-25 | Every published language pack has independent fluent language/audio review and publication status. | Must |
| FR-26 | Authorized adults can add private family words or phrases to a selected language without modifying standard content. | Must |
| FR-27 | Families can show the standard form, both forms, or prefer an approved family alternative while retaining access to the standard. | Must |
| FR-28 | Family additions and alternatives never appear for another family. | Must |
| FR-29 | Activities accept configured family alternatives without treating accepted synonyms as mutually exclusive answers. | Must |
| FR-30 | Authorized adults can open a family overview showing adult memberships, pending invitations, and each learner's language-scoped progress. | Must |
| FR-31 | The learner dashboard represents the 200-day curriculum as a ten-port voyage with five non-competitive progress stages. | Should |
| FR-32 | The learner logbook shows deterministic language-scoped passport stamps and sea companions derived only from completed lessons. | Should |
| FR-33 | Multiple completed activities on one local date count as exactly one Family Voyage Day. | Must |
| FR-34 | Independent practice never advances the shared Family Voyage Day position. | Must |
| FR-35 | An authorized adult can start, control, pause, and complete a synchronized Family Play session for selected learners. | Must |
| FR-36 | Learners in Family Play follow the adult-controlled segment while retaining separate independent-practice progress. | Must |
| FR-37 | The voyage plan provides an immersive, progress-positioned world with an accessible reduced-motion presentation. | Should |

## 10. Quality requirements

- **Responsive:** no horizontal scrolling at supported mobile widths; touch targets are comfortably usable.
- **Accessible:** target WCAG 2.2 AA for the core experience, including keyboard operation, visible focus, text resizing, contrast, labels, and reduced motion.
- **Fast:** core screens should become interactive quickly on an ordinary mobile connection; formal performance budgets remain to be established from family-alpha measurements.
- **Resilient:** unavailable audio, denied microphone permission, malformed content, or storage limits produce useful fallback behavior.
- **Private:** no behavioral ads; no retained voice recordings by default; collect only data required for named product behavior.
- **Maintainable:** learning content is schema-validated, versionable, and separable from presentation components.
- **Testable:** scoring, progress, streaks, activity generation, and content validation have automated coverage.

### 10.1 Implemented technical foundation

The production foundation is a modular, static Vite web application:

- `src/main.js` owns application state, navigation, and screen orchestration;
- `src/components/` contains the dashboard, calendar, curriculum, profile, topic, and session views;
- `src/engine/learning-engine.js` generates the 200-lesson voyage and weekday schedule;
- `src/engine/progress-store.js` isolates profile-scoped local progress and calculates date-based streaks;
- `src/content/topics.json` is now explicitly identified as the draft `montenegrin-en` language pack; its 33 topics, 248 learning items, and dialogue lines use stable IDs plus language-neutral target/support text fields;
- `src/content/albanian.js` provides the selectable `albanian-en@0.1.0` review pack across the same 200-day structure; its standard Albanian text remains explicitly pending fluent-family review;
- authenticated adults can invite partners or link a child's Google account to an existing learner profile using email-bound, single-use, seven-day invitations;
- `src/content/schema.json` and the Ajv validator currently reject structural errors and invalid curriculum references; publication filtering, stable item identifiers, detailed review metadata, and five-day readiness validation remain to be implemented;
- Vitest covers voyage size, month/week structure, topic coverage, weekday scheduling, session generation, and streak behavior;
- Vite writes the static production build to `web/` for the existing Netlify deployment;
- `web/prototype.html` preserves the original generated prototype as a historical reference.

The implemented curriculum assigns 30 unique core topics to ten months, three per month. Past Tense, Future Tense, and Arriving in Montenegro remain freely browsable advanced/capstone topics outside the core sequence. The architecture is selected and no longer an open foundation decision.

## 11. Content model

At minimum, a learning item needs:

- stable identifier;
- topic and tags;
- Montenegrin Latin text;
- Cyrillic text where applicable;
- English meaning;
- item type (word, phrase, sentence, dialogue turn, or explanation);
- difficulty or phase metadata;
- audio reference and review status;
- language-review status and reviewer/date metadata;
- activity eligibility and distractor data where needed.

Every item belongs to a versioned language pack declaring its target language, English support language, scripts, and publication state. Runtime fields will use language-neutral names such as target text and support text rather than Montenegrin-specific property names. Family additions and alternatives are stored separately with family, language-pack, stable standard-item target, approval, preference, creator, and audit metadata.

Content should move through `draft → language reviewed → audio reviewed → publishable`. The UI must not imply that draft machine-generated language is authoritative.

## 12. Measurement

Because this begins as a family product, favor useful local measures over invasive analytics:

- active practice days per learner;
- number of completed sessions and activities;
- topic coverage and recent review;
- first-attempt correctness by topic where pedagogically meaningful;
- learner/family confidence checks before the trip.

Success for the first year is demonstrated by sustained voluntary use and improved performance in a set of family-reviewed travel role-plays, not by maximizing time in the app.

## 13. Release approach

### Foundation

Completed: the prototype was audited and preserved, content was extracted and structurally validated, the Vite architecture was selected, automated engine checks were established, and the responsive 200-position voyage scaffold was implemented.

### Family alpha

Ship a small number of fully reviewed Montenegrin topics with all core activity patterns, accounts/families, language-scoped progress, and reliable audio. Observe real use before scaling content or publishing another pack.

### Multilingual alpha

Ship Albanian as the second independently reviewed language pack, validate learner language switching and family variants, and use that work to prove the pack platform before Spanish, French, and Greek publication.

### Ten-month beta

Expand reviewed content across the planned phases, add mixed review and richer role-play, and tune practice based on family feedback.

### Trip-ready release

Prioritize listening recall, scenario rehearsal, offline/poor-connectivity needs if confirmed, and final language/audio review.

## 14. Decisions still needed

1. Optional cross-device progress is planned through parent-owned family workspaces. Adults and learners authenticate using Google OAuth, the only family-alpha sign-in method. Owners and adult/guides may invite permitted roles; learners may invite friends or relatives only as learners. Owners may revoke or disable learner invitations. Parent-managed learner profiles and local-only use remain supported. Ownership transfer and rollout timing remain to be confirmed.
2. Will a fluent family member or an external reviewer approve language and recordings?
3. Should the first release include a parent-only progress view, and how should access work in both local-only and family-account modes?
4. Is offline use during travel a must-have?
5. Should learners see English first, Montenegrin first, or choose per activity?
6. What browsers and oldest devices must be supported?
7. Is the production name Učimo crnogorski, or is that still provisional?
8. Should the guided voyage be the default dashboard emphasis or a secondary optional mode alongside free browsing?
9. Should real family names be kept in the repository, or replaced with configurable/anonymous local profiles?
10. Which holidays, vacations, and travel dates should be excluded when mapping the 200 instructional days to real dates?
11. Who owns fluent language and audio review for Spanish, French, and Greek?
12. May a learner follow more than one active voyage concurrently?
13. May families attach private recorded audio to variants, and what retention controls apply?

## 15. Current acceptance status

The technical product scaffold passes structural content validation, engine/unit tests, production build, and manual core browser-flow checks. It does not yet represent 200 publishable lessons, production-ready catch-up/rescheduling, or approved cloud synchronization. Family-alpha readiness still requires:

- family approval of this PRD's goals, curriculum map, and unresolved calendar decisions;
- a named fluent language/audio review owner;
- expansion of core topics into meaningfully distinct daily lesson material;
- implementation of stable content identifiers, publication filtering, and voyage-readiness validation;
- migration from `mn`/`en` fields to language-neutral, versioned language-pack content;
- reviewed audio or an approved fallback policy;
- complete language-scoped progress isolation and family-variant authorization tests;
- named fluent review and a separate pilot before any Albanian, Spanish, French, or Greek pack is published;
- completion and verification of optional family-account migration, authorization, synchronization, recovery, and deletion behavior before cloud sync is deployed;
- completion of keyboard, screen-reader, zoom, contrast, reduced-motion, storage-failure, and supported-device verification;
- a four-week family pilot before treating the full 200-day sequence as release-ready.
