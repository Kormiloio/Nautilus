# Design: Parent-controlled Family Play Mode

## Separate progress axes

Nautilus maintains two independent axes:

1. **Family Voyage:** one completed parent-led session per family, language, and local date. It determines the shared 200-day position.
2. **Independent Practice:** learner-scoped attempts, activity dates, topic mastery, and rewards. It never changes the family position.

The same curriculum lesson may therefore be `complete` for an individual learner and `not_started`, `live`, or `paused` for the family. Independent completion never suppresses shared segments or satisfies shared completion. Family Play always loads the canonical lesson content and may record participation credit without overwriting the learner's earlier attempts.

The immediate UI correction derives a unique-date count instead of counting completed lesson IDs. The durable cloud model will replace that provisional source with completed family-session records.

## Session lifecycle

`draft → live → paused → completed` with `cancelled` available before completion.

An adult chooses a family, language pack, voyage day, and participants. The server stores the active segment index. Learner clients subscribe to the session and follow that index. Only owners and adult guides may change shared state or complete the session.

## Proposed cloud records

- `family_voyage_sessions`: family, pack, voyage day, local date, status, current segment, controlling adult, timestamps.
- `family_voyage_participants`: session and learner profile, join state, completion credit.
- A unique completed-session constraint on family, pack, and local date prevents double-counted days.
- Family calendar cells are projections of these session records; learner activity dates feed only personal calendars, streaks, and practice summaries.

Realtime updates broadcast only identifiers and session state; microphone recordings are not uploaded or retained.

## Immersive voyage

The voyage page uses a viewport-sized camera window with purpose-composed wide and narrow worlds. Shared progress selects the position from home harbor through intermediate islands to Montenegro. A reduced-motion preference disables transitions while preserving the same positional state and text.
