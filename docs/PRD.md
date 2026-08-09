# Product requirements document: Učimo crnogorski

**Repository codename:** Nautilus  
**Document status:** Draft for family review  
**Last updated:** 2026-08-09  
**Target:** A usable first-year learning experience spanning approximately 10 months

## 1. Product summary

Učimo crnogorski is a responsive web application that helps teenage learners build enough practical Montenegrin to interact with relatives and navigate common situations during a trip to Montenegro. It combines short, repeatable activities with audio and travel-oriented role-play. Learners choose topics freely and receive lightweight feedback through stars, streaks, and visible topic progress.

The app is a supplement to family teaching, not a comprehensive language course or a substitute for a fluent speaker.

## 2. Problem

The learners know some words but need a sustainable way to practice for roughly ten months. Existing generic language products may not offer Montenegrin, may not reflect the family's lesson material, and may overemphasize linear courses or childish reward systems. The family needs one accessible place for correct vocabulary, phrases, scripts, listening, repetition, and situational practice across shared and personal devices.

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

## 4. Non-goals for the first release

- open-ended AI conversation or automatic correction of unrestricted speech;
- a full grammar reference or advanced fluency curriculum;
- social leaderboards, virtual currency, competitive leagues, or manipulative notifications;
- detailed regional/dialect instruction;
- advertising or sale of learner data;
- retention of microphone recordings;
- native iOS or Android applications;
- teacher/classroom administration.

## 5. Users

### Primary: teenage learner

- Age 12+
- Knows some words but has limited ability to form or understand sentences
- Uses a phone or tablet most often, with occasional computer access
- Wants direct, age-appropriate practice without a childish interface

### Secondary: parent or family guide

- Adds or reviews family lesson material
- Helps select useful topics and validates progress informally
- Needs clear wording and simple management, without a complex teacher dashboard

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

### 7.3 Progress and motivation

- Award stars for completed practice based on understandable rules.
- Track a simple practice streak using the learner's local date.
- Show progress per topic and recent practice.
- Never lock topics behind stars or streaks.
- Make missed days neutral; do not use shame-oriented messages.
- Support more than one local learner profile on a shared device.

### 7.4 Audio

Every publishable word or phrase intended for listening practice should have approved audio or a clearly communicated fallback. Playback must be replayable and interruptible. If speech synthesis is used, voice availability and pronunciation must be checked on supported devices. Microphone use, if enabled for repetition, must be optional and recordings must not be retained by default.

### 7.5 Scripts and language display

Content may include Latin, Cyrillic, English meaning, and optional learner-friendly notes. The interface must preserve Montenegrin diacritics. Activities should introduce script recognition deliberately rather than presenting transliteration as interchangeable in every context.

## 8. Ten-month curriculum shape

The product uses free navigation, but content should be deep enough for four broad learning phases:

| Approximate period | Learning emphasis | Outcome |
| --- | --- | --- |
| Months 1–2 | sounds/scripts, greetings, numbers, family, core nouns | recognize and produce foundational language |
| Months 3–5 | everyday phrases, questions, food, time, preferences | handle short familiar exchanges |
| Months 6–8 | travel, shopping, directions, needs, richer sentence patterns | navigate common trip situations |
| Months 9–10 | mixed review, listening, role-play, family-specific language | improve recall and confidence under realistic conditions |

This is a content-planning framework, not a forced learner path. The app should offer optional review collections across topics as the library grows. The current prototype's August–July 12-month journey, weekly content locks, and “Tonight's Session” recommendation are not approved requirements and must be reconciled before implementation proceeds.

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

## 10. Quality requirements

- **Responsive:** no horizontal scrolling at supported mobile widths; touch targets are comfortably usable.
- **Accessible:** target WCAG 2.2 AA for the core experience, including keyboard operation, visible focus, text resizing, contrast, labels, and reduced motion.
- **Fast:** core screens should become interactive quickly on an ordinary mobile connection; formal budgets will be set after architecture selection.
- **Resilient:** unavailable audio, denied microphone permission, malformed content, or storage limits produce useful fallback behavior.
- **Private:** no behavioral ads; no retained voice recordings by default; collect only data required for named product behavior.
- **Maintainable:** learning content is schema-validated, versionable, and separable from presentation components.
- **Testable:** scoring, progress, streaks, activity generation, and content validation have automated coverage.

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

Import and audit the prototype and lesson material; validate the content model; choose the architecture; establish automated checks and accessible responsive navigation.

### Family alpha

Ship a small number of fully reviewed topics with all core activity patterns, local profiles, progress, and reliable audio. Observe real use before scaling content.

### Ten-month beta

Expand reviewed content across the planned phases, add mixed review and richer role-play, and tune practice based on family feedback.

### Trip-ready release

Prioritize listening recall, scenario rehearsal, offline/poor-connectivity needs if confirmed, and final language/audio review.

## 14. Decisions still needed

1. Is cross-device progress required, or is separate local progress acceptable for the first year?
2. Will a fluent family member or an external reviewer approve language and recordings?
3. Should the first release include a parent-only progress view, and if so how is it entered without accounts?
4. Is offline use during travel a must-have?
5. Should learners see English first, Montenegrin first, or choose per activity?
6. What browsers and oldest devices must be supported?
7. Is the production name Učimo crnogorski, or is that still provisional?
8. Should the current guided “family session” remain as an optional mode despite the no-next-suggestion decision?
9. Should real family names be kept in the repository, or replaced with configurable/anonymous local profiles?

## 15. Acceptance for product foundation

The foundation is ready for implementation when:

- the prototype and lesson source are present and audited;
- the family approves this PRD's goals, non-goals, and unresolved decisions;
- a language-review owner is named;
- representative content validates the proposed data model;
- the initial OpenSpec change is reviewed and its tasks are appropriately sized.
