# cultural-journey-themes delta

## ADDED Requirements

### Requirement: Themes are independent from language content

The system SHALL store journey themes as versioned presentation assets separate from language-pack content, correct answers, and scored progress.

#### Scenario: Family changes an approved journey theme

- **GIVEN** two themes are compatible with the selected pack
- **WHEN** an authorized family member changes the theme
- **THEN** lesson content and existing progress remain unchanged
- **AND** subsequent scenes use the selected theme

### Requirement: Mandaean–Mesopotamian theme review

The Mandaean–Mesopotamian river theme MUST record cultural-review state for every scene and SHALL NOT represent the community through generic desert, Islamic, or pan-Arab stereotypes.

#### Scenario: Draft scene uses an unreviewed religious symbol

- **GIVEN** a scene includes a sacred person, rite, garment, building, or symbol
- **AND** the required community review is absent
- **WHEN** theme publication validation runs
- **THEN** the scene is rejected from the pilot and published theme
- **AND** the missing cultural approval is reported

### Requirement: Accessible visual fallback

Every learning scene SHALL provide alt text and a functional static fallback, and animation SHALL respect the learner's reduced-motion preference.

#### Scenario: Reduced motion is enabled

- **GIVEN** a scene normally pans across a river journey
- **WHEN** the learner requests reduced motion
- **THEN** a stable static composition is shown
- **AND** all lesson content and controls remain available

### Requirement: Asset provenance

Every theme asset SHALL record a stable identifier, version, source or creator, usage rights, alt text, and visual/cultural review state.

#### Scenario: Generated scene has no rights metadata

- **GIVEN** a scene passes visual checks
- **AND** its source or usage-rights record is missing
- **WHEN** the theme is validated for deployment
- **THEN** validation fails
- **AND** the scene is not shipped

