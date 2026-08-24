# bidirectional-learning-ui delta

## ADDED Requirements

### Requirement: Language-run direction

The system SHALL render each target, support, and transliteration run using its declared language and direction and SHALL isolate mixed-direction runs from surrounding text.

#### Scenario: Arabic phrase appears beside English meaning

- **GIVEN** an Arabic RTL phrase has an English LTR meaning
- **WHEN** the learning card renders
- **THEN** the Arabic phrase follows correct RTL ordering
- **AND** the English meaning, punctuation, and numbers remain correctly ordered

### Requirement: Semantic layout behavior

The system SHALL use logical layout properties and SHALL preserve the semantic direction of controls, chronological progress, icons, and visual media instead of reversing the complete interface mechanically.

#### Scenario: Learner navigates an RTL lesson

- **WHEN** the learner uses keyboard or touch navigation
- **THEN** controls appear and focus in a predictable documented order
- **AND** next/back meaning is unambiguous
- **AND** progress still represents lesson chronology correctly

### Requirement: Mandaic glyph integrity

The system SHALL use a licensed font capable of the required Mandaic Unicode repertoire and SHALL visibly report missing-glyph or joining failures rather than displaying corrupted learning text as valid.

#### Scenario: Mandaic font fails to load

- **GIVEN** the required font asset is unavailable
- **WHEN** a Mandaic lesson attempts to render
- **THEN** the learner receives an understandable display warning
- **AND** approved support text or transliteration remains available
- **AND** the corrupted target form is not used for a scored recognition task

### Requirement: Accessible RTL experiences

RTL and mixed-direction experiences MUST remain operable with touch, keyboard, screen readers, zoom, reduced motion, and supported mobile safe areas.

#### Scenario: Family opens a Mandaic activity on a phone at 200 percent zoom

- **WHEN** the activity renders
- **THEN** target and support text remain distinguishable
- **AND** primary controls remain reachable without two-dimensional scrolling
- **AND** focus and screen-reader reading order follow the activity sequence

