# learning-calendar delta

## ADDED Requirements

### Requirement: Monthly learning calendar

The system SHALL display a profile-scoped monthly calendar that distinguishes rest, planned, in-progress, completed, and catch-up-available days without relying on color alone.

#### Scenario: Learner reviews the current month

- **GIVEN** the month contains completed lessons, an in-progress lesson, future lessons, rest days, and a past incomplete lesson
- **WHEN** the learner opens the calendar
- **THEN** every day exposes its complete date and state visually and programmatically
- **AND** the past incomplete lesson uses neutral catch-up language

### Requirement: Meaningful active day

The system SHALL record an active day only after the learner completes at least one qualifying activity interaction on that local calendar date.

#### Scenario: Learner only selects a profile

- **GIVEN** the learner has no qualifying activity event today
- **WHEN** the learner selects a profile and views the dashboard
- **THEN** today's date is not recorded as active
- **AND** active-day counts do not change

### Requirement: Deterministic lesson completion

The system SHALL mark a planned lesson completed only after all of its required activity segments satisfy their declared completion criteria.

#### Scenario: Learner leaves during the second required segment

- **GIVEN** a lesson has three required segments
- **AND** the learner completed the first segment only
- **WHEN** the learner exits during the second segment
- **THEN** the lesson remains in progress
- **AND** the learner can resume without duplicating completed-segment credit

### Requirement: Separate activity and voyage completion

Free practice MAY record an active day but SHALL NOT complete a planned voyage lesson unless it runs in that lesson's context and satisfies its required criteria.

#### Scenario: Learner practices an unrelated topic

- **GIVEN** voyage lesson 20 is the next planned lesson
- **WHEN** the learner completes a qualifying free-practice quiz in another topic
- **THEN** today counts as an active day
- **AND** voyage lesson 20 remains incomplete

### Requirement: Neutral catch-up and rescheduling

The system SHALL allow a past incomplete lesson to be resumed or rescheduled without removing topic access, reducing earned stars, or presenting punitive messaging.

#### Scenario: Learner misses a weekday lesson

- **GIVEN** a planned lesson's calendar date has passed without completion
- **WHEN** the learner next views the calendar
- **THEN** the lesson is available for catch-up or rescheduling
- **AND** no published topic becomes locked

### Requirement: Calendar accessibility

The system SHALL provide keyboard-operable calendar navigation, an accessible list alternative, visible focus, complete day labels, and touch targets suitable for supported mobile devices.

#### Scenario: Learner uses a keyboard instead of the calendar grid

- **GIVEN** the learner switches to the calendar's list representation
- **WHEN** the learner navigates to a planned day and opens its lesson using only a keyboard
- **THEN** the date, state, topic, and action are available in a logical focus order
