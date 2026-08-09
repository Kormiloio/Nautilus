# learner-progress delta

## ADDED Requirements

### Requirement: Local learner profiles

The system SHALL support multiple local learner profiles and keep each profile's session state and progress separate.

#### Scenario: Siblings share a device

- **GIVEN** two local profiles exist
- **WHEN** the second learner completes an activity
- **THEN** only the second learner's progress and rewards change

### Requirement: Lightweight progress

The system SHALL present topic progress, stars, recent practice, and streaks using documented rules that learners and parents can understand.

#### Scenario: Learner completes a qualifying activity

- **GIVEN** the active learner completes an activity that qualifies under the scoring rules
- **WHEN** the completion is recorded
- **THEN** the relevant progress and reward values update once
- **AND** the UI explains the result without obscuring the learning feedback

### Requirement: Rewards do not gate learning

The system MUST NOT require stars, streaks, or a progress threshold to open published learning content.

#### Scenario: Learner has no stars

- **GIVEN** the active learner has earned no stars
- **WHEN** the learner browses published topics
- **THEN** every published topic remains selectable

### Requirement: Neutral missed-day behavior

The system SHALL calculate streaks by the learner's local calendar date and SHALL use neutral language when a streak ends.

#### Scenario: Learner returns after a missed day

- **GIVEN** the learner did not practice on the preceding local calendar day
- **WHEN** the learner next opens the progress view
- **THEN** the displayed streak follows the documented reset rule
- **AND** the interface does not shame or penalize the learner beyond that rule

