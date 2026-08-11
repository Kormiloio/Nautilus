# reviewed-content delta

## ADDED Requirements

### Requirement: Structured learning content

The system SHALL load learning material from validated structured content that is independent of presentation code.

#### Scenario: Contributor adds a topic

- **GIVEN** a contributor creates a topic using the supported content schema
- **WHEN** validation succeeds and the content is publishable
- **THEN** the topic can appear without editing an activity UI component

### Requirement: Explicit review state

The system SHALL track language-review and audio-review state separately and SHALL exclude non-publishable items from ordinary learner sessions.

#### Scenario: Text is reviewed but audio is draft

- **GIVEN** an item has approved language and unapproved audio
- **WHEN** an ordinary learner session is assembled
- **THEN** the item is not used in an activity requiring approved audio
- **AND** it may be used in an eligible text-only activity if publication policy permits

### Requirement: Content validation

The system SHALL reject content that lacks required identifiers, language forms, meanings, review metadata, or data required by its declared activities.

#### Scenario: Quiz item lacks valid distractors

- **GIVEN** an item declares quiz eligibility but cannot produce the required distinct answer choices
- **WHEN** content validation runs
- **THEN** validation fails with an actionable item-specific error

Every learning item SHALL have a stable identifier, item type, topic association, Montenegrin Latin text, English meaning, explicit language-review state, explicit audio-review state, activity eligibility, and any data required by those activities. Cyrillic, reviewer identity/date, audio reference, difficulty, tags, and distractors SHALL be required when applicable to the declared item or activity.

#### Scenario: Item has no stable identifier

- **GIVEN** a contributor adds a vocabulary item without a stable item identifier
- **WHEN** content validation runs
- **THEN** validation fails with the item's topic and location
- **AND** the item cannot enter a published lesson

### Requirement: Publication filtering

The system SHALL distinguish structural validity from publication readiness and SHALL exclude draft or insufficiently reviewed content from ordinary learner sessions.

#### Scenario: Structurally valid item remains draft

- **GIVEN** an item passes JSON schema validation
- **AND** its language-review state is draft
- **WHEN** a publishable learner session is assembled
- **THEN** the item is excluded
- **AND** validation or authoring tools explain which approval is missing

### Requirement: Voyage readiness validation

The system SHALL reject a topic from the published voyage unless reviewed content supports every declared lesson purpose and required activity segment without merely reshuffling one vocabulary deck.

#### Scenario: Topic lacks contextual use material

- **GIVEN** a topic has reviewed vocabulary but no reviewed phrase, dialogue, or guided-response material
- **WHEN** voyage-readiness validation runs
- **THEN** its Use lesson is reported as not ready
- **AND** the topic remains available only in publication modes allowed by its reviewed content

### Requirement: Audio fallback

The system SHALL keep text-based learning usable when approved recording, speech synthesis, or audio playback is unavailable.

#### Scenario: Device has no usable voice

- **GIVEN** an item has no approved recording and the device offers no approved synthesis voice
- **WHEN** the learner opens an otherwise supported activity
- **THEN** the text remains available
- **AND** the system communicates that audio is unavailable without blocking the session
