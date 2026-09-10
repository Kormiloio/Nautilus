# Classic Family Play navigation specification

## MODIFIED Requirements

### Requirement: Authorized classic controller navigation

An authorized Family Play controller SHALL be able to start and advance a classic shared Family Play session when its selected learners are ready, even when a linked verified attempt exists for the session.

#### Scenario: Ready crew starts a lesson

- **GIVEN** a live Family Play session has all selected learners connected and ready
- **AND** a linked verified attempt exists
- **WHEN** the authorized controller selects Start Together
- **THEN** the session advances from the ready lobby to the first activity
- **AND** no verified-receipt compatibility error is shown

#### Scenario: Controller advances a non-lock-in activity

- **GIVEN** an authorized controller is viewing a classic flashcard, conversation, or other non-lock-in activity
- **WHEN** they select Next
- **THEN** the shared session advances to the next segment

### Requirement: Existing access controls remain intact

Restoring classic navigation SHALL NOT grant learners controller authority or bypass existing quiz/final lock-in participation rules.

#### Scenario: Learner tries to advance the presentation

- **GIVEN** a connected learner is following a Family Play session
- **WHEN** they view a classic non-lock-in activity
- **THEN** they cannot advance the shared segment
- **AND** authorized controller and participant rules remain enforced
