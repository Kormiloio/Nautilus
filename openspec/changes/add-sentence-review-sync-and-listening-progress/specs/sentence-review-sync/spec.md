# Sentence review sync specification

## MODIFIED Requirements

### Requirement: Missed sentences follow the learner's account

When a signed-in learner misses a multi-word sentence, Nautilus SHALL record it in a review queue stored on the server under that learner's account and language pack, SHALL keep a local copy so review works offline, and SHALL make the same queue available on every device that learner signs in on.

#### Scenario: Miss on one device, review on another

- **GIVEN** a learner misses "Ovo je mama." on a tablet
- **WHEN** they sign in on a phone and open sentence review
- **THEN** "Ovo je mama." is due on the phone

#### Scenario: Offline mistake

- **GIVEN** the device is offline
- **WHEN** the learner misses a sentence
- **THEN** it is due locally at once
- **AND** it is sent to the server when the device reconnects

#### Scenario: Same event sent twice

- **WHEN** the same mistake event reaches the server twice
- **THEN** the miss count increases only once

### Requirement: Server-graded spaced review

The server SHALL grade every synced review against the stored sentence, SHALL schedule the next review 24 hours later after a correct answer and 10 minutes later after a wrong one, SHALL mark the sentence mastered after two correct reviews in a row, and SHALL keep at most 100 unmastered sentences per learner and pack.

#### Scenario: Not due

- **WHEN** a review is submitted for a sentence that is not due
- **THEN** the server rejects it with "This sentence is not due for review."

#### Scenario: Missed again after mastery

- **GIVEN** a mastered sentence
- **WHEN** the learner misses it again
- **THEN** it returns to the queue, due now

### Requirement: The queue is private to the learner

Only the learner's own signed-in account SHALL read or change their sentence review queue. Parents, other family members, and admins SHALL NOT be able to read it, and it SHALL be deleted with the account.

#### Scenario: Parent tries to read

- **GIVEN** a parent in the same family
- **WHEN** they query the learner's review rows or call the list RPC
- **THEN** they see none of the learner's sentences

### Requirement: Review grants no progress

Sentence review SHALL NOT create verified attempts, voyage progress, stars, rewards, or Family Play state.

#### Scenario: Completing a review

- **WHEN** a learner finishes their due sentences
- **THEN** voyage position and rewards are unchanged
