# daily-learning-voyage delta

## ADDED Requirements

### Requirement: Two-hundred-lesson voyage

The system SHALL provide an approved voyage plan containing exactly 200 ordered core lessons across 40 five-day instructional weeks.

#### Scenario: Published voyage is validated

- **GIVEN** a voyage plan is marked publishable
- **WHEN** plan validation runs
- **THEN** it contains 200 unique ordered core lesson identifiers
- **AND** those lessons form exactly 40 instructional weeks of five lessons each

Generated identifiers or lesson slots SHALL NOT by themselves make a voyage publishable. Every published lesson must also contain reviewed, purpose-specific required segments.

### Requirement: Monthly learning cadence

Each learning month SHALL contain three topic weeks followed by one integration week, for a total of 20 core lessons.

#### Scenario: Learner enters an integration week

- **GIVEN** the learner has reached the fourth instructional week of a learning month
- **WHEN** the five planned lessons are assembled
- **THEN** they draw reviewed material from that month's three topic weeks
- **AND** include a culminating contextual or family challenge

### Requirement: Five distinct topic lessons

A voyage topic week SHALL provide discover, recall, build, use, and checkpoint lessons with distinct learning purposes and declared required segments.

#### Scenario: Topic contains only a vocabulary deck

- **GIVEN** a topic can only reshuffle or retest one vocabulary deck
- **WHEN** voyage-readiness validation runs
- **THEN** the topic is rejected as not ready for a five-day topic week
- **AND** validation identifies the missing lesson purposes

### Requirement: Free browse remains available

The system SHALL allow learners to browse every published topic independently of their voyage position.

#### Scenario: Learner opens a later topic

- **GIVEN** the learner is on voyage lesson 12
- **WHEN** the learner selects a published topic associated with lesson 100
- **THEN** the topic and its free-practice activities open without a prerequisite
- **AND** voyage lesson 100 is not automatically completed

### Requirement: Voyage counter semantics

The system SHALL display `Voyage day N of 200`, where N identifies the next incomplete core lesson rather than elapsed calendar days.

#### Scenario: Learner returns after vacation

- **GIVEN** lesson 37 is the next incomplete lesson
- **AND** ten calendar days elapsed without practice
- **WHEN** the learner returns
- **THEN** the counter displays `Voyage day 37 of 200`
- **AND** the learner can resume or reschedule without losing access to topics

### Requirement: Weekday schedule and optional weekends

The initial family plan SHALL begin August 10, 2026, SHALL schedule core lessons Monday through Friday, and SHALL treat weekend practice independently from core voyage advancement.

#### Scenario: Learner practices on Saturday

- **GIVEN** the learner has an incomplete next core lesson
- **WHEN** the learner completes qualifying free practice on Saturday
- **THEN** Saturday may count as an active practice day
- **AND** the next core voyage lesson remains incomplete
