# Activity preview specification

## ADDED Requirements

### Requirement: Adult-only activity preview

The dashboard SHALL offer activity preview only to a family owner or adult guide for the active family and language pack.

#### Scenario: Authorized adult opens preview

- **GIVEN** a signed-in family owner or adult guide with an active language pack
- **WHEN** they select Preview activities
- **THEN** Nautilus shows the preview activities for that pack
- **AND** provides a route back to the dashboard

#### Scenario: Linked learner views the dashboard

- **GIVEN** a linked learner opens the same family's dashboard
- **WHEN** the dashboard is rendered
- **THEN** Preview activities is not offered
- **AND** the learner cannot open the preview route through normal application navigation

### Requirement: Preview has no learning credit

Activity preview SHALL NOT create verified attempts, progress events, rewards, receipts, or Family Play state transitions.

#### Scenario: Adult tests preview activities

- **GIVEN** an authorized adult is in activity preview
- **WHEN** they reveal cards, match items, select quiz answers, or arrange sentence tiles
- **THEN** no learner, family, reward, or session record is written
- **AND** dashboard progress is unchanged after returning

### Requirement: Preview remains accessible

The preview SHALL support touch and keyboard operation and SHALL NOT require audio, a microphone, or motion to understand the activity.

#### Scenario: Keyboard-only adult uses preview

- **GIVEN** an adult navigates preview with a keyboard
- **WHEN** focus moves through an activity
- **THEN** every available interaction is operable
- **AND** focus remains visible
