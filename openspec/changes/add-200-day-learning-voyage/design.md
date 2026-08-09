# Design: 200-day learning voyage

## Context

The preserved prototype treated topics as the primary unit of progression: topics unlocked by date, completion was coarse, and selecting a profile advanced the streak. The modular production application replaces that behavior and keeps three separate concepts:

1. **Content topic:** a freely browsable subject such as Family or Food.
2. **Voyage lesson:** one planned 5–15 minute learning session with declared segments and completion criteria.
3. **Calendar day:** a real local date that may hold a planned lesson, rest, catch-up, or no activity.

Keeping these concepts separate prevents missed calendar dates from corrupting curriculum position and prevents casual profile visits from masquerading as learning.

## Implemented architecture

- Vite builds the static production application from `src/` into the Netlify-compatible `web/` directory.
- `src/components/` contains independently rendered screens for profiles, dashboard, calendar, curriculum, topics, and sessions.
- `src/engine/learning-engine.js` owns curriculum expansion, session generation, and deterministic weekday scheduling.
- `src/engine/progress-store.js` owns profile-scoped local persistence, activity dates, idempotent completion, and streak calculation.
- `src/content/topics.json` owns all learning content and the explicit 30-core-topic/three-extra curriculum partition.
- `src/content/schema.json` and `scripts/validate-content.js` provide Ajv structural and cross-reference validation.
- Vitest verifies voyage shape, unique topic coverage, integration weeks, weekday mapping, session generation, and streak calculations.
- `web/prototype.html` preserves the original artifact; it is not production source.

## Goals

- Provide 200 meaningful weekday lessons across 40 instructional weeks.
- Keep the recommended plan compatible with free browsing.
- Make lesson completion deterministic and profile-scoped.
- Support breaks, missed days, and rescheduling without shame or data loss.
- Make the calendar understandable at a glance on phone, tablet, and desktop.

## Non-goals

- Prevent learners from practicing future topics.
- Require perfect five-day streaks.
- Automatically grade unrestricted pronunciation.
- Generate unreviewed language with AI at runtime.
- Treat every calendar month as exactly four weeks.

## Voyage structure

The core plan contains ten learning months. Each learning month contains:

- three topic weeks × five lessons = 15 lessons;
- one integration week × five lessons = 5 lessons;
- total = 20 lessons per learning month;
- ten learning months = 200 lessons.

Calendar months may contain additional weekdays. The schedule mapper assigns core lessons to eligible weekdays and leaves configured holidays, breaks, and excess dates as rest or optional catch-up days.

## Daily lesson purposes

### Discover

Introduce a small reviewed set with meaning, script form where relevant, and approved audio. Avoid testing before exposure.

### Recall

Retrieve meanings and recognize spoken/script forms using varied prompts. Include prior-topic spaced review when available.

### Build

Apply one sentence pattern or grammar idea with constrained construction and immediate feedback.

### Use

Rehearse a realistic dialogue, role-play, or guided response connected to the trip goal.

### Checkpoint

Mix recognition, listening, and production. Record mastery evidence without locking later content.

Integration weeks use the same five positions but draw from the preceding three topics and culminate in a family scenario.

## Data model

### Voyage plan

- stable plan identifier and version;
- total lesson count;
- ordered learning months and weeks;
- eligible weekdays and excluded dates;
- start date and timezone;
- migration metadata.

### Planned lesson

- stable lesson identifier and sequence number (1–200);
- lesson purpose (`discover`, `recall`, `build`, `use`, `checkpoint`, or integration equivalent);
- topic identifiers and review-source identifiers;
- required and optional activity segments;
- estimated duration;
- deterministic completion criteria;
- content-review readiness state.

### Profile voyage state

- plan version;
- next planned lesson sequence;
- per-lesson status and timestamps;
- scheduled calendar date and any reschedule history;
- qualifying activity events;
- active local dates;
- migration source/version.

## Completion and activity rules

- Opening a profile, dashboard, topic, or lesson emits no practice event.
- A qualifying activity event requires completion of an activity's defined interaction, not merely opening it.
- An active day is a local calendar date containing at least one qualifying activity event.
- A voyage lesson completes only when all required segments satisfy their declared criteria.
- Free practice can create an active day but completes a voyage lesson only when launched in that lesson's context and satisfying its criteria.
- Completion is idempotent: retries never increment the lesson or active-day count twice.

## Calendar states

| Stored state | Suggested display | Meaning |
| --- | --- | --- |
| `rest` | In harbor | no core lesson planned |
| `planned` | Charted | upcoming eligible lesson |
| `in_progress` | Making way | lesson started but incomplete |
| `completed` | Full sail | required lesson segments completed |
| `catch_up` | Open water | past incomplete lesson available to resume |

The UI must pair color with text, icon, or pattern. Missed lessons do not use failure language. The learner may resume the oldest catch-up lesson, reschedule it, or continue with family-approved sequencing.

## Counter semantics

`Voyage day N of 200` identifies the next incomplete planned lesson sequence, not the number of elapsed calendar days. Separate labels show active days in the current week and month. This makes the display stable across weekends, vacations, and missed days.

## Content readiness

A topic week must demonstrate that it can support all five lesson purposes without merely reshuffling the same deck. As an authoring target, most topics should provide 12–18 vocabulary items, 5–8 useful phrases, one or two sentence patterns, reviewed listening material, a contextual dialogue, and a checkpoint/family challenge. Specialized topics such as Alphabet may use an equivalent reviewed structure rather than those exact counts.

## Migration

Existing stars and topic-completion records may be retained as legacy summary data. Existing streak values must not be converted into active days because they were advanced by profile selection. The new voyage begins with an explicit plan version and empty daily completion history unless reliable activity evidence exists.

## Accessibility and responsive behavior

- Use a semantic calendar grid with an accessible list alternative.
- Provide complete date and state labels for every day.
- Keep day targets at least 44 × 44 CSS pixels where possible.
- Do not rely on color alone.
- Support keyboard navigation without trapping focus in the grid.
- On narrow screens, keep the current week and today summary visible without horizontal page scrolling.
