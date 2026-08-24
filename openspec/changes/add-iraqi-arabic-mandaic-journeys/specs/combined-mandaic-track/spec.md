# combined-mandaic-track delta

## ADDED Requirements

### Requirement: Distinct Mandaic strands

The system SHALL present Classical heritage/script and Neo-Mandaic conversation as distinct strands within one Mandaic journey and SHALL identify the active strand in every lesson and activity.

#### Scenario: Learner changes strands

- **GIVEN** a learner has completed a Classical alphabet lesson
- **WHEN** the learner opens a Neo-Mandaic family conversation lesson
- **THEN** both lessons remain part of the learner's Mandaic voyage
- **AND** mastery for the Classical and conversational strands remains separately visible

### Requirement: Reviewed cross-strand relationships

The system SHALL require explicit reviewed metadata before presenting Classical and Neo-Mandaic forms as related, interchangeable, or acceptable alternatives.

#### Scenario: Forms have similar meanings but no approved relationship

- **GIVEN** a Classical item and a Neo-Mandaic item have similar English meanings
- **WHEN** an activity generates answers
- **THEN** the system does not infer equivalence from the English meaning
- **AND** each item remains scoped to its declared strand

### Requirement: Protected heritage content

The initial pilot SHALL exclude sacred, liturgical, and doctrinal learning material unless its source, permissions, audience context, and community review are explicitly recorded and approved.

#### Scenario: Contributor submits a liturgical passage

- **GIVEN** the passage has structurally valid Mandaic text
- **AND** community approval or teaching context is absent
- **WHEN** publication validation runs
- **THEN** the passage remains excluded from pilot and ordinary learner sessions
- **AND** validation identifies the missing approval and context

### Requirement: Text-first Mandaic learning

The Mandaic journey SHALL support script, flashcard, matching, quiz, reading, and family conversation activities without requiring synthetic speech.

#### Scenario: No Mandaic audio is available

- **GIVEN** a reviewed text-based Mandaic lesson has no approved audio
- **WHEN** a learner starts it
- **THEN** eligible text-based activities remain complete and usable
- **AND** the lesson does not claim to teach or assess pronunciation through unavailable audio

