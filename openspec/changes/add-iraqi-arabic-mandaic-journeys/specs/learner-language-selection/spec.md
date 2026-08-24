# learner-language-selection delta

## ADDED Requirements

### Requirement: Informed pilot enablement

The system SHALL show Iraqi Arabic and Mandaic pilot packs only after an authorized family adult enables pilot access and accepts the current pilot notice.

#### Scenario: Family has not enabled pilots

- **GIVEN** Iraqi Arabic and Mandaic pilot packs are installed
- **WHEN** a family learner opens the ordinary language selector
- **THEN** neither pilot is offered as published content
- **AND** existing enabled languages remain available

### Requirement: Mandaic strand visibility

The language selector and Mandaic dashboard SHALL explain that the Mandaic journey contains Classical heritage/script and Neo-Mandaic conversation strands.

#### Scenario: Learner selects Mandaic

- **WHEN** the Mandaic dashboard opens
- **THEN** the learner can distinguish the two strands before beginning a lesson
- **AND** each strand's progress is displayed without implying that one substitutes for the other

