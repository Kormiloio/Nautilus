# Reviewed sentence completion specification

## ADDED Requirements

### Requirement: Completion derives from reviewed authored language

The system SHALL create a sentence-completion exercise only from an authored reviewed sentence whose prerequisite topics are complete for the current lesson context.

#### Scenario: Eligible reviewed connection

- **GIVEN** a topic connection has an authored multi-word sentence and all its prerequisite topics are learned
- **WHEN** Nautilus composes an eligible lesson
- **THEN** it SHALL place one sentence completion after the associated sentence builder
- **AND** the completion SHALL use that same authored sentence and support meaning

#### Scenario: No eligible reviewed connection

- **GIVEN** no authored sentence connection is eligible
- **WHEN** Nautilus composes a lesson
- **THEN** it SHALL omit sentence completion
- **AND** it SHALL retain the existing compatible lesson activities

### Requirement: Completion interaction is constrained and accessible

The system SHALL display one visible blank and a selectable, finite set of choices. It SHALL not require typing, microphone access, or a response judged only by color.

#### Scenario: Learner chooses an answer

- **GIVEN** a learner opens a completion exercise
- **WHEN** they select a choice
- **THEN** the blank SHALL show the selected word
- **AND** assistive technology SHALL receive textual feedback about the answer state

### Requirement: Mistakes receive visible correction without penalty

The system SHALL show whether the selected word is correct. On an incorrect answer it SHALL reveal the completed authored sentence and support meaning before allowing the learner to continue. It SHALL not deduct stars, reset progress, or force repeated guessing.

#### Scenario: Incorrect completion

- **GIVEN** a learner selects an incorrect choice
- **WHEN** the answer is validated
- **THEN** the interface SHALL say that it is not correct
- **AND** show the completed sentence and its meaning
- **AND** permit Continue without a penalty

### Requirement: Server validation and answer redaction

The verified catalog SHALL keep accepted completion answers private until after submission. The server SHALL validate one allowed submitted choice against the pinned catalog exercise.

#### Scenario: Client receives an attempt

- **WHEN** the client reads a verified attempt containing a completion exercise
- **THEN** the accepted answer SHALL NOT be included in the public exercise payload

#### Scenario: Malformed submission

- **WHEN** a client submits an array, object, or unoffered choice for a completion exercise
- **THEN** the server SHALL reject the submission
- **AND** the attempt position and rewards SHALL remain unchanged

### Requirement: Family members complete on their own devices

Family Play SHALL require each required participant to submit their own completion choice before the shared round advances.

#### Scenario: Family completion round

- **GIVEN** a Family Play completion exercise with two required learners
- **WHEN** one learner submits a choice
- **THEN** that learner SHALL see their own feedback and locked state
- **AND** the shared round SHALL wait for the other learner
- **WHEN** every required learner has submitted
- **THEN** the shared session SHALL advance automatically
