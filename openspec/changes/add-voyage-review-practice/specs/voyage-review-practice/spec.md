# Review from Your Voyage specification

## ADDED Requirements

### Requirement: Optional language-scoped review

Nautilus SHALL offer an optional Review from your voyage session using only published content previously encountered by the active learner in the active language pack.

#### Scenario: Learner starts review

- **GIVEN** a learner has completed eligible material in their active language pack
- **WHEN** they select Review from your voyage
- **THEN** Nautilus starts a short verified practice session containing familiar reviewed material
- **AND** it does not include content from another language pack or unpublished revision

### Requirement: Transparent, non-punitive selection

Review selection SHALL favor previously incorrect or less-recently retrieved material while retaining topic variety, and SHALL NOT use pressure mechanics.

#### Scenario: Earlier answer needs retrieval

- **GIVEN** a learner previously answered a graded item incorrectly
- **WHEN** sufficient eligible review content exists
- **THEN** that material may be selected for a later review session
- **AND** the interface describes it as bringing back familiar language
- **AND** it does not remove stars, break a streak, or block other learning

### Requirement: Sparse-history fallback

The system SHALL provide a useful fallback when the learner has insufficient verified review history.

#### Scenario: New learner opens review

- **GIVEN** a learner has no eligible review candidates
- **WHEN** they open the review entry point
- **THEN** Nautilus explains that review becomes available after completed lessons
- **AND** offers current-topic or mixed practice without implying failure

### Requirement: Verified and private review evidence

Review answers SHALL be validated through the existing immutable verified-practice contract, and an individual's review evidence SHALL remain language-scoped and private.

#### Scenario: Learner submits review answer

- **GIVEN** a learner submits a review response
- **WHEN** Nautilus validates it
- **THEN** the pinned catalog validates the response and returns existing clear feedback
- **AND** no other learner's private answer history is exposed

### Requirement: Family Voyage isolation

Independent voyage review SHALL NOT advance Family Voyage progress. Family use of a review session SHALL likewise remain a non-advancing review activity.

#### Scenario: Family practices a review together

- **GIVEN** a family completes Review from your voyage
- **WHEN** all selected participants finish
- **THEN** personal review evidence may be recorded
- **AND** Family Voyage day, shared calendar, and voyage position remain unchanged
