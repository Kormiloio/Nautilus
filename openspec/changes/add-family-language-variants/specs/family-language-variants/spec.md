# family-language-variants delta

## ADDED Requirements

### Requirement: Immutable standard content

The system SHALL preserve the published language pack as the standard source and SHALL store family changes as separate family-scoped records.

#### Scenario: Family prefers Croatian `dida`

- **GIVEN** the Montenegrin pack contains standard `deda`
- **WHEN** a family adds and prefers `dida` as its Croatian family alternative
- **THEN** the standard `deda` item remains unchanged
- **AND** another family continues to receive only its own configured view of the standard item

### Requirement: Family additions and alternatives

The system SHALL support a private addition and an alternative linked to a stable standard item, each scoped to exactly one family and language pack.

#### Scenario: Family adds a household phrase

- **WHEN** an authorized adult adds a private phrase to Albanian
- **THEN** it is stored under that family and Albanian pack
- **AND** it does not appear in Spanish, Montenegrin, or another family's content

### Requirement: Transparent display preference

The system SHALL support standard-only, show-both, and prefer-family modes while keeping the standard form available and identifying the family form as a variant.

#### Scenario: Family chooses show both

- **GIVEN** an approved alternative exists
- **WHEN** a learner encounters the item
- **THEN** both standard and family forms are distinguishable
- **AND** neither is mislabeled as the other

### Requirement: Role-controlled family approval

The system SHALL allow owners and adult/guides to approve shared family variants and SHALL distinguish family approval from product-level fluent review.

#### Scenario: Learner suggests a word

- **WHEN** a learner submits a family-word suggestion
- **THEN** it remains pending by default
- **AND** it is not used in shared family activities until an owner or adult/guide approves it

### Requirement: Variant-aware activities

The system SHALL generate activities according to their declared accepted forms and SHALL NOT treat two accepted family synonyms as mutually exclusive answers.

#### Scenario: Standard and family answers are accepted

- **GIVEN** an activity accepts both `deda` and `dida`
- **WHEN** either configured form is submitted
- **THEN** the answer is accepted
- **AND** one accepted form is not presented as an incorrect distractor for the other

### Requirement: Safe removal and pack upgrades

The system SHALL preserve historical activity integrity when a family variant is removed and SHALL quarantine overlays whose standard target cannot be safely resolved after a pack upgrade.

#### Scenario: Standard item disappears in a breaking update

- **WHEN** the family upgrades the language pack
- **THEN** the unresolved alternative is excluded from learner sessions
- **AND** an authorized adult is prompted to review or reassign it
