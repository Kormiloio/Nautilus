# Sentence review specification

## ADDED Requirements

### Requirement: Missed sentences are remembered on the device

When a signed-in learner answers a multi-word sentence builder, sentence completion, or sentence quiz incorrectly, in a verified lesson or in Family Play, Nautilus SHALL store that sentence in a device-local review queue scoped to the learner and language pack, and SHALL NOT send it to the server.

#### Scenario: Wrong sentence builder

- **GIVEN** a signed-in learner submits an incorrect sentence builder
- **WHEN** the receipt shows the correct answer
- **THEN** the sentence is due for review immediately on that device

#### Scenario: Same event recorded twice

- **GIVEN** a mistake was recorded with an event id
- **WHEN** the same event id is recorded again
- **THEN** the miss count does not increase

#### Scenario: Single-word answer

- **WHEN** the missed answer has fewer than two words
- **THEN** nothing is added to the queue

### Requirement: Spaced retry until mastered

A correct review SHALL schedule the next review 24 hours later; an incorrect review SHALL schedule it 10 minutes later and reset the streak; two correct reviews in a row SHALL remove the sentence from the queue.

#### Scenario: Two correct reviews

- **GIVEN** a due sentence
- **WHEN** the learner answers it correctly, waits until it is due again, and answers correctly again
- **THEN** it no longer appears in the review queue

#### Scenario: Reviewing a sentence that is not due

- **WHEN** a review is submitted for a sentence that is not yet due
- **THEN** it is rejected with "This sentence is not due for review."

### Requirement: Bounded, failure-tolerant storage

The queue SHALL keep at most 100 sentences, and a storage failure SHALL show a dashboard message without interrupting the lesson.

#### Scenario: Storage is unavailable

- **GIVEN** browser storage throws on write
- **WHEN** a mistake is recorded
- **THEN** the dashboard shows that sentence review could not be saved
- **AND** the lesson continues normally

### Requirement: Review grants no progress

Sentence review SHALL NOT create verified attempts, voyage progress, stars, rewards, or Family Play state.

#### Scenario: Completing a review

- **WHEN** a learner finishes their due sentences
- **THEN** voyage position and rewards are unchanged
