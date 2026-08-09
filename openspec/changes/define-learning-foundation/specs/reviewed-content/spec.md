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

### Requirement: Audio fallback

The system SHALL keep text-based learning usable when approved recording, speech synthesis, or audio playback is unavailable.

#### Scenario: Device has no usable voice

- **GIVEN** an item has no approved recording and the device offers no approved synthesis voice
- **WHEN** the learner opens an otherwise supported activity
- **THEN** the text remains available
- **AND** the system communicates that audio is unavailable without blocking the session

