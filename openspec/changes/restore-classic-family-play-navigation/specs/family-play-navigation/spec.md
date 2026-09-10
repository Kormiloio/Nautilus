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

### Requirement: Final participant lock completes classic Family Play

A classic Family Play session SHALL complete when the controller and every invited learner have individually locked the final challenge, including when a linked verified attempt exists.

#### Scenario: Last required participant locks the final challenge

- **GIVEN** a live classic Family Play session with a linked verified attempt
- **AND** every required participant except one has locked the final challenge
- **WHEN** the remaining invited learner or controller locks their own final card
- **THEN** the session is marked completed and all participants receive the session credit
- **AND** the user is not told to restart an older session

#### Scenario: Direct completion remains protected

- **GIVEN** a Family Play session without a completed verified attempt
- **AND** not every required participant has locked the final challenge
- **WHEN** a caller tries to complete the session directly
- **THEN** the completion is rejected

### Requirement: Existing access controls remain intact

Restoring classic navigation SHALL NOT grant learners controller authority or bypass existing quiz/final lock-in participation rules.

#### Scenario: Learner tries to advance the presentation

- **GIVEN** a connected learner is following a Family Play session
- **WHEN** they view a classic non-lock-in activity
- **THEN** they cannot advance the shared segment
- **AND** authorized controller and participant rules remain enforced
