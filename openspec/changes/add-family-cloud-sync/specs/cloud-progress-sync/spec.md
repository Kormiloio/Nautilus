# cloud-progress-sync delta

## ADDED Requirements

### Requirement: Explicit local-to-cloud migration

The system SHALL preserve local progress and use a deterministic, recoverable mapping before synchronizing existing local profiles to a family account.

#### Scenario: Existing local family signs in

- **GIVEN** the device contains local profiles and progress
- **WHEN** an adult enables cloud synchronization
- **THEN** local data is not silently overwritten
- **AND** each local profile is mapped or deliberately excluded before upload

### Requirement: Idempotent offline synchronization

The system SHALL persist synchronization operations, retry them after connectivity returns, and prevent duplicate retries from duplicating progress.

#### Scenario: Completion acknowledgement is lost

- **GIVEN** a lesson completion reached the server but its acknowledgement did not reach the device
- **WHEN** the queued operation is retried
- **THEN** the lesson remains completed exactly once
- **AND** the queue can safely mark the operation acknowledged

### Requirement: Deterministic reconciliation

The system SHALL merge set-like progress by stable identity and SHALL use documented conflict rules that do not discard acknowledged learning history.

#### Scenario: Two devices complete different lessons offline

- **GIVEN** both devices belong to the same family profile
- **AND** each completes a different lesson while offline
- **WHEN** both devices synchronize
- **THEN** both lesson completions are retained

### Requirement: Honest synchronization status

The system SHALL distinguish local-only, pending, synchronized, and failed states and SHALL NOT describe pending local work as backed up.

#### Scenario: Server rejects a queued operation

- **WHEN** an authenticated synchronization attempt fails
- **THEN** local learning remains available
- **AND** the UI reports a recoverable synchronization problem without losing the queued operation

### Requirement: No recording synchronization

The system MUST NOT upload or retain microphone recordings as part of family progress synchronization.

#### Scenario: Learner uses listen and repeat

- **WHEN** the learner records a repetition locally
- **THEN** no audio recording is added to the synchronization queue
