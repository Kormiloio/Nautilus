# Detective case packs specification

## ADDED Requirements

### Requirement: New case pack per Detective milestone

The False-Friend Detective side quest SHALL offer a distinct three-case pack at each milestone 10, 40, 70, 100, 130, 160, and 190 completed family lessons, each case with clue-word glosses after milestone 10, and each edition SHALL award its own badge.

#### Scenario: Second milestone

- **GIVEN** a family has completed 40 non-review family lessons
- **WHEN** the adult starts the Detective side quest at milestone 40
- **THEN** the cases differ from milestone 10
- **AND** completing it awards the `false-friend-detective:edition-2` badge

#### Scenario: Milestone not reached

- **GIVEN** a family has completed fewer lessons than the requested milestone
- **WHEN** the adult tries to start that case pack
- **THEN** the server rejects it with "Complete more family lessons to unlock this case pack"

### Requirement: Running games are pinned

The server SHALL snapshot the case pack into the side-quest session when it starts, SHALL validate answers against the snapshot's choices, and SHALL end the quest after the snapshot's last case.

#### Scenario: Release during a game

- **GIVEN** a Detective session is in progress
- **WHEN** a new app release changes case content
- **THEN** participants keep seeing and answering the snapshotted cases

#### Scenario: Invalid answer id

- **WHEN** a participant submits a choice id not in the current snapshotted case
- **THEN** the server rejects it with "Invalid answer"

### Requirement: Case source is internal

The case-lookup function SHALL NOT be callable by `public`, `anon`, or `authenticated` roles.

#### Scenario: Direct call

- **GIVEN** an authenticated client
- **WHEN** it calls `detective_cases_for_milestone` directly
- **THEN** the call is denied
