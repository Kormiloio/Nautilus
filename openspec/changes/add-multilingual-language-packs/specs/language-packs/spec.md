# language-packs delta

## ADDED Requirements

### Requirement: Versioned language packs

The system SHALL load learning content from a versioned pack that declares its target language, support language, scripts, publication state, and stable pack identifier.

#### Scenario: Published Montenegrin pack loads

- **GIVEN** `montenegrin-en` is a validated published pack
- **WHEN** a learner selects Montenegrin
- **THEN** only content, curriculum, scripts, and audio belonging to that pack version are loaded

### Requirement: Language-specific publication

The system SHALL publish each language pack independently and SHALL NOT treat machine translation or structural validation as fluent review.

#### Scenario: Draft Greek content validates structurally

- **GIVEN** a Greek pack passes its JSON schema
- **AND** fluent language review is incomplete
- **WHEN** publication validation runs
- **THEN** the pack remains unavailable to ordinary learner sessions

### Requirement: Language-neutral content contract

The system SHALL represent target and support text semantically rather than embedding a particular language code in application field names.

#### Scenario: Albanian pack uses an existing activity

- **GIVEN** an Albanian item supplies valid target and support text
- **WHEN** a supported flashcard activity loads it
- **THEN** the activity renders it without Albanian-specific presentation code

### Requirement: Pack isolation

The system SHALL NOT combine standard content, audio, curriculum, or lesson completion from different packs in an ordinary language session.

#### Scenario: Learner changes from Montenegrin to Spanish

- **WHEN** the learner selects Spanish
- **THEN** the dashboard uses the Spanish pack and Spanish voyage state
- **AND** Montenegrin content and completion remain unchanged
