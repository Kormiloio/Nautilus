# reviewed-content delta

## ADDED Requirements

### Requirement: Role-scoped language and cultural review

The system SHALL record review decisions by reviewer identity, scope, content/theme version, date, and outcome, and SHALL require the relevant scope for Iraqi Arabic, Classical Mandaic, Neo-Mandaic, transliteration, audio, curriculum, and cultural imagery.

#### Scenario: Neo-Mandaic speaker approves conversational text

- **GIVEN** the reviewer is authorized for Neo-Mandaic conversation only
- **WHEN** the reviewer approves a conversational unit
- **THEN** that decision applies to the declared unit and version
- **AND** it does not approve Classical Mandaic, audio, or cultural imagery

### Requirement: Provenance for pilot learning forms

Every Iraqi Arabic and Mandaic learning form MUST record a source or contributor, target variety/strand, review state, and stable identifier before entering an invited pilot.

#### Scenario: Mandaic word has no source

- **GIVEN** a Mandaic vocabulary item has target and support text
- **AND** contributor/source provenance is missing
- **WHEN** pilot-readiness validation runs
- **THEN** validation fails with the stable item identifier
- **AND** the item is excluded from the pilot

### Requirement: AI-assisted drafts remain drafts

The system SHALL treat AI-assisted translations, transliterations, distractors, audio, and imagery as draft material until the appropriate human reviewer approves them.

#### Scenario: Generated Iraqi Arabic dialogue passes schema validation

- **GIVEN** the dialogue was AI-assisted
- **AND** no authorized Iraqi Arabic reviewer has approved it
- **WHEN** publication validation runs
- **THEN** the dialogue remains unpublishable
- **AND** its structural validity does not change its review state

