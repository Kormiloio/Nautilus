# community-pilot-feedback delta

## ADDED Requirements

### Requirement: Contextual private feedback

The system SHALL allow an invited pilot family to report a wording, meaning, variety, transliteration, pronunciation, glyph, layout, cultural-image, or difficulty issue against the specific pack/theme version and learning context where it occurred.

#### Scenario: Parent reports an Iraqi Arabic wording issue

- **GIVEN** the parent is using an invited pilot
- **WHEN** the parent reports a phrase from its lesson
- **THEN** the private report records the pack version, lesson/activity, stable item, category, reporter role, and timestamp
- **AND** other families cannot view the report or reporter identity

### Requirement: Parent confirmation for learner free text

The system SHALL require an authorized parent/guide to confirm free-text pilot feedback created from a learner profile before it is submitted for maintainer review.

#### Scenario: Learner writes a pronunciation note

- **WHEN** the learner attempts to submit the note
- **THEN** the note remains pending family confirmation
- **AND** it is not shared with maintainers until an authorized parent/guide confirms it

### Requirement: Feedback does not self-publish

The system SHALL NOT alter pack or theme content, correct-answer logic, review status, or publication state automatically because a report was submitted or received votes.

#### Scenario: Several families suggest the same correction

- **GIVEN** multiple pilot reports identify one Mandaic item
- **WHEN** the reports are triaged
- **THEN** maintainers may prepare a versioned content change
- **AND** the relevant named reviewer must still approve it before publication

### Requirement: Feedback lifecycle and deletion

The system SHALL document feedback retention, restrict access by role, track triage state, and allow a family owner to request deletion of the family's feedback subject to the documented audit policy.

#### Scenario: Family requests deletion

- **GIVEN** the family owner requests removal of pilot reports
- **WHEN** the request is processed
- **THEN** report content and reporter linkage are deleted or irreversibly de-identified according to the disclosed policy
- **AND** learning progress remains unchanged

