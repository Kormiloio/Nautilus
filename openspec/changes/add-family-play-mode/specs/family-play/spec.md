# Family Play specification

## ADDED Requirements

### Requirement: One shared day per calendar date

The system SHALL count at most one completed Family Voyage Day for a family, language pack, and local calendar date.

#### Scenario: Family completes several activities together

- **WHEN** a family completes eight activities during one session on one local date
- **THEN** the shared voyage advances exactly one day
- **AND** all eight activity completions remain available as content history

### Requirement: Independent practice isolation

Independent learner practice SHALL NOT modify the shared Family Voyage position.

#### Scenario: Learner practices ahead

- **WHEN** a learner completes flashcards, quizzes, or topic lessons outside Family Play
- **THEN** personal practice progress is saved
- **AND** the family voyage day and shared current segment remain unchanged

#### Scenario: Learner independently completes the family's current lesson

- **WHEN** a learner completes all available activities for a curriculum lesson outside Family Play
- **THEN** that learner's personal mastery and practice history are updated
- **AND** the corresponding family lesson remains available and incomplete
- **AND** the learner can repeat the complete lesson during a later Family Play session

#### Scenario: Family repeats material practiced ahead

- **WHEN** an adult starts Family Play for a lesson already completed independently by one or more participants
- **THEN** every shared segment remains available to the family
- **AND** only the adult's explicit completion action marks the family lesson complete

### Requirement: Adult-controlled shared session

Only a family owner or adult guide SHALL start, control, pause, complete, or cancel a Family Play session.

#### Scenario: Learners participate on separate devices

- **WHEN** an adult advances the shared session to a new segment
- **THEN** participating learner devices display that segment
- **AND** a learner cannot independently advance the shared segment

### Requirement: Explicit completion

The system SHALL advance the shared voyage only when an authorized adult completes the Family Play session.

#### Scenario: Session is abandoned

- **WHEN** a live or paused session is closed without completion
- **THEN** the family voyage does not advance
- **AND** the adult can resume or cancel the session later

#### Scenario: Activities end without family completion

- **WHEN** every participant reaches the final activity but the adult does not select Complete for Family
- **THEN** the session remains live or paused
- **AND** neither the family calendar nor shared voyage advances

### Requirement: Shared-session readiness

The shared presentation SHALL show the connection readiness of every selected learner before the controller begins the lesson.

#### Scenario: Learners join from separate devices

- **WHEN** selected learners open the active Family Play session
- **THEN** each learner changes from connecting to ready in the controller's crew display
- **AND** Start Together becomes available when the selected crew is ready

#### Scenario: Shared speaking turn

- **WHEN** the controller advances through speaking or practice activities
- **THEN** the shared interface identifies the next participant to respond
- **AND** the learner still cannot advance, pause, or complete the session

### Requirement: Family calendar derives from shared sessions

The family calendar SHALL derive completed and in-progress states from Family Play sessions rather than learner practice attempts.

#### Scenario: Several learners practice on one date

- **WHEN** learners complete independent activities without a completed Family Play session
- **THEN** their personal active-day histories are updated
- **AND** the family calendar date is not marked complete

### Requirement: Immersive progress position

The voyage presentation SHALL position its world and vessel from shared Family Voyage progress and provide equivalent textual state.

#### Scenario: Reduced motion is requested

- **WHEN** the device requests reduced motion
- **THEN** the correct voyage location is shown without animated camera movement

### Requirement: Recoverable adult controller

The system SHALL use a renewable controller lease so that an interrupted Family Play session can recover without giving learners presentation control.

#### Scenario: Controller reconnects

- **WHEN** the controlling adult reconnects to an active session
- **THEN** the stored segment is restored
- **AND** the adult's controller lease is renewed

#### Scenario: Parent hands control to another parent

- **WHEN** the controller selects another family owner or adult guide
- **THEN** control transfers to that adult
- **AND** the controller change is retained in the session audit history

#### Scenario: Controller abandons the session

- **WHEN** the controller lease expires
- **THEN** another owner or adult guide may take control
- **AND** a learner cannot take control

### Requirement: Shared and personal progress comparison

The Family Overview SHALL show shared voyage progress separately from each learner's independent-practice progress.

#### Scenario: Learner practices ahead

- **WHEN** a learner's personal lesson count exceeds the shared voyage day
- **THEN** both positions are shown independently
- **AND** the shared position remains unchanged

### Requirement: Family session history and review

Authorized adults SHALL be able to review completed Family Play sessions and replay an earlier lesson together.

#### Scenario: Family completes a review session

- **WHEN** an adult completes a review of an earlier family lesson
- **THEN** the review appears in session history
- **AND** the shared calendar and voyage position do not advance
