# Change: Add a 200-day learning voyage

## Why

The product goal calls for practice five days per week over approximately ten months, but the prototype schedules whole topics weekly and provides no daily lesson model. Its 33 scheduled topics contain 248 vocabulary/phrase items with a median of seven items per topic. Replaying the same activity deck can create usage, but it does not create 200 distinct, pedagogically useful lessons.

The family needs a visible day-by-day voyage that turns each topic into a five-day learning arc, reserves every fourth week for integration, and makes progress encouraging rather than punitive.

## Implementation status

The technical voyage foundation is implemented in the modular Vite application. The content-owned curriculum map assigns 30 unique core topics across ten months and retains three advanced/capstone extras. The engine generates 200 ordered lessons, maps them to weekdays, and exposes profile-scoped completion independently from active local dates. The responsive counter, calendar states, active-day summaries, free browsing, accessible calendar list, content validation, and core engine tests are present.

This change remains open because configured holidays/rescheduling, structured activity-event history, content expansion, fluent language/audio review, broader failure/accessibility testing, and the four-week family pilot are not complete.

## What changes

- Add a 200-lesson voyage organized into 40 instructional weeks and ten learning months.
- Use three topic weeks plus one integration week per month.
- Give each topic week five distinct lesson purposes: discover, recall, build, use, and checkpoint.
- Add a monthly calendar and `Voyage day N of 200` indicator.
- Track active practice separately from scheduled-lesson completion.
- Make weekends, missed days, catch-up, and rescheduling neutral and recoverable.
- Preserve free topic browsing alongside the recommended daily lesson.
- Add content-readiness rules so a topic cannot enter the voyage without enough reviewed material for five distinct lessons.

## Capabilities

### New capabilities

- `daily-learning-voyage`: curriculum sequence, lesson days, topic weeks, and integration weeks
- `learning-calendar`: calendar states, voyage counter, active-day counts, catch-up, and rescheduling

### Modified capabilities

- `reviewed-content`: voyage readiness requires sufficient reviewed content and audio for the declared daily lesson sequence
- `learner-progress`: active days and scheduled lesson completion become explicit, separate events

## Impact

- Replaces the prototype's 12-month, date-locked topic journey with an optional ten-month daily plan.
- Requires expansion of most topics beyond their current 4–14 items.
- Adds lesson-plan and calendar data structures to the modular learning engine.
- Migrates reliable legacy stars/topic summaries while refusing to treat the prototype's profile-selection streak as practice.
- Adds substantial content authoring and human language/audio review work before all 200 days can ship.

## Open questions

- What calendar date begins the first instructional day?
- Which family holidays and vacations should pause the planned calendar?
- Does optional weekend practice advance the voyage or only count as activity?
- May a parent mark an offline family conversation as completed practice?
