# language-packs delta

## ADDED Requirements

### Requirement: Iraqi Arabic pilot pack

The system SHALL provide Iraqi Arabic as an independent, versioned language pack whose metadata declares Arabic script, right-to-left direction, Iraqi variety policy, English support language, review state, and audio policy.

#### Scenario: Family enables Iraqi Arabic pilot

- **GIVEN** an authorized adult has accepted the current pilot notice
- **WHEN** the adult enables `iraqi-arabic-en@0.1.0`
- **THEN** the family can select the Iraqi Arabic pilot
- **AND** its sessions use only that pack's curriculum, content, review state, audio policy, and progress
- **AND** the interface visibly identifies the content as a pilot

### Requirement: Mandaic pilot pack

The system SHALL provide one versioned Mandaic pack with separately identified `heritage-classical` and `conversation-neo` strands.

#### Scenario: Learner opens a Neo-Mandaic lesson

- **GIVEN** the learner selected the Mandaic pilot
- **WHEN** a `conversation-neo` lesson opens
- **THEN** the lesson is visibly labeled as Neo-Mandaic conversation
- **AND** Classical forms are not scored as equivalent unless approved relationship metadata permits them

### Requirement: Direction and script metadata

Every Iraqi Arabic and Mandaic pack and displayable target-language form SHALL declare or inherit a validated language, script, and direction; content with material dialect, register, historical-variety, or strand differences SHALL declare those distinctions explicitly.

#### Scenario: Mandaic item lacks a strand

- **GIVEN** a Mandaic item is otherwise structurally valid
- **AND** it declares neither `heritage-classical` nor `conversation-neo`
- **WHEN** pack validation runs
- **THEN** validation fails with the item's stable identifier
- **AND** the item cannot enter a pilot or published lesson

### Requirement: Pilot access is not publication

The system SHALL distinguish invited pilot access from published content and SHALL NOT infer fluent or cultural approval from pilot use, feedback volume, structural validation, or AI-assisted authorship.

#### Scenario: Pilot families report no issues

- **GIVEN** a draft Iraqi Arabic unit has been used by pilot families
- **AND** its required dialect reviewer has not approved it
- **WHEN** publication readiness is evaluated
- **THEN** the unit remains unpublishable
- **AND** the absence of reports does not satisfy review

### Requirement: Pack-specific audio fallback

The system SHALL resolve audio within the selected language pack and SHALL NOT pronounce Mandaic through an Arabic, English, or unrelated synthetic voice.

#### Scenario: Mandaic recording is unavailable

- **GIVEN** a Mandaic activity has no approved recording
- **WHEN** the activity opens
- **THEN** target text and eligible text-based interaction remain available
- **AND** audio is shown as unavailable rather than synthesized in another language

