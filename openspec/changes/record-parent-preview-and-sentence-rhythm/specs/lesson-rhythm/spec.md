# Reviewed sentence rhythm specification

## ADDED Requirements

### Requirement: Authored prerequisite-gated sentence builders

Nautilus SHALL add a sentence builder only from reviewed language-pack connection content whose declared prerequisite topics are already learned for the relevant voyage position.

#### Scenario: Connection prerequisites are satisfied

- **GIVEN** a lesson purpose includes cumulative recall
- **AND** an authored connection has valid sentence content
- **AND** every declared prerequisite topic has been learned
- **WHEN** Nautilus creates the lesson activity sequence
- **THEN** it includes the connection's constrained sentence builder at the documented recall rhythm point

#### Scenario: Connection prerequisites are incomplete

- **GIVEN** a connection references a topic not yet learned
- **WHEN** Nautilus creates the lesson activity sequence
- **THEN** that connection's sentence builder is omitted
- **AND** the lesson remains playable with its other activities

### Requirement: No hard-coded language pairing

The lesson engine SHALL NOT hard-code specific topic names, language pairs, generated grammar, or accepted sentence answers for cumulative sentence builders.

#### Scenario: A new reviewed pack connection is published

- **GIVEN** a language pack publishes a valid connection with different topic identifiers
- **WHEN** its prerequisites are satisfied
- **THEN** the engine can schedule it without application-code changes

### Requirement: Verified sentence-builder feedback

A verified sentence-builder response SHALL be checked against the immutable catalog revision associated with the attempt, and its canonical answer SHALL remain unavailable until feedback.

#### Scenario: Learner opens an unsubmitted builder

- **GIVEN** a learner has opened a verified attempt containing a sentence builder
- **WHEN** the public exercise is returned to the browser
- **THEN** the canonical answer is absent

#### Scenario: Learner submits ordered tiles

- **GIVEN** a learner submits an ordered tile response
- **WHEN** the server validates it against the attempt's catalog revision
- **THEN** the response receives clear correct or incorrect feedback
- **AND** the canonical target sentence is revealed after feedback
