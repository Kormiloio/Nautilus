# learning-experience delta

## ADDED Requirements

### Requirement: Free topic browsing

The system SHALL allow a learner to browse and open every published topic without completing prerequisites or earning rewards.

#### Scenario: Learner selects an unpracticed topic

- **GIVEN** a published topic has no recorded practice for the active learner
- **WHEN** the learner opens that topic from the topic browser
- **THEN** the system displays the topic and its supported activities
- **AND** it does not require completion of another topic

### Requirement: Supported activity discovery

The system SHALL show only activities that the selected topic's reviewed content can support.

#### Scenario: Topic has no dialogue content

- **GIVEN** a topic has reviewed flashcards and quiz items but no reviewed dialogue
- **WHEN** the learner views its activity choices
- **THEN** flashcard and quiz activities are available
- **AND** role-play is not presented as available

### Requirement: Deterministic activity feedback

The system SHALL provide understandable feedback for answers with deterministic evaluation and SHALL NOT claim to grade pronunciation unless a validated pronunciation evaluator is present.

#### Scenario: Learner uses listen and repeat without pronunciation scoring

- **GIVEN** pronunciation scoring is not configured
- **WHEN** the learner plays a phrase and repeats it
- **THEN** the system allows replay and self-assessment
- **AND** it does not label the pronunciation correct or incorrect

### Requirement: Script-aware learning

The system SHALL preserve Montenegrin diacritics and present Latin and Cyrillic forms when specified by reviewed curriculum content.

#### Scenario: Item includes both scripts

- **GIVEN** a publishable item has Latin and Cyrillic forms
- **WHEN** an eligible script-recognition activity presents the item
- **THEN** both forms are rendered accurately according to the activity design
- **AND** the English meaning remains available through the defined prompt or feedback

