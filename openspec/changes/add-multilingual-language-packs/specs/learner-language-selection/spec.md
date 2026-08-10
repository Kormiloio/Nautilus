# learner-language-selection delta

## ADDED Requirements

### Requirement: Family-enabled languages

The system SHALL allow an authorized family owner or adult/guide to enable any published language pack for the family.

#### Scenario: Parent enables Albanian

- **GIVEN** the Albanian pack is published
- **WHEN** an authorized adult enables it
- **THEN** family learners may select Albanian
- **AND** no existing Montenegrin progress changes

### Requirement: Learner language selection

The system SHALL allow a learner to select one of the family's enabled languages and SHALL clearly display the active language throughout learning flows.

#### Scenario: Family enables several languages

- **GIVEN** Montenegrin, Albanian, and Spanish are enabled
- **WHEN** the learner opens the language selector
- **THEN** all three are available with unambiguous names
- **AND** selecting one opens that language's dashboard

### Requirement: Language-scoped progress

The system SHALL store progress using the learner profile and language-pack identity so activity in one language cannot advance another.

#### Scenario: Learner completes an Albanian lesson

- **WHEN** the completion is recorded
- **THEN** Albanian voyage progress and qualifying activity update
- **AND** Spanish and Montenegrin voyage progress do not change
