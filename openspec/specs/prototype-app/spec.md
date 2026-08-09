# Prototype app

## Purpose

Document the observable behavior of the current Claude-generated export at `web/index.html`. This baseline describes what exists, not what has been approved for the production product.

## Requirements

### Requirement: Fixed family profiles

The prototype SHALL offer the hard-coded learner profiles Mia and Jake and guide profiles Mario and Kristina.

#### Scenario: User opens the prototype without saved state

- **GIVEN** the browser has no active-profile value
- **WHEN** the prototype loads
- **THEN** it asks who is present
- **AND** displays all four fixed profile choices

### Requirement: Weekly scheduled topic access

The prototype SHALL assign scheduled topics weekly beginning 2026-08-09 and SHALL restrict ordinary topic browsing and mixed review to topics whose unlock date has passed.

#### Scenario: Learner visits during the first week

- **GIVEN** the date is on or after 2026-08-09 and before the second topic unlock
- **WHEN** the learner opens the dashboard
- **THEN** Family is available as the scheduled topic
- **AND** later scheduled topics are not available from ordinary topic browsing

### Requirement: Twelve-month journey display

The prototype SHALL display an August-through-July 12-month journey and group its 33 scheduled topics into month buckets.

#### Scenario: Learner views the dashboard

- **WHEN** the learner has selected a profile
- **THEN** the dashboard labels the plan “Your 12-Month Journey”
- **AND** displays month markers from August through July

### Requirement: Local profile progress

The prototype SHALL store profile-specific stars, completed topic identifiers, streak value, last selected date, and dialogue count in browser local storage.

#### Scenario: Learner selects a profile on a new local date

- **GIVEN** the profile has not been selected on the current local date
- **WHEN** the learner selects that profile
- **THEN** the prototype creates or advances its streak before an activity is completed

### Requirement: Generated speech and temporary recording

The prototype SHALL request browser speech synthesis using Croatian by default and SHALL allow optional in-memory microphone recording when browser media APIs are available.

#### Scenario: Microphone permission is denied

- **WHEN** a learner requests recording and permission fails
- **THEN** the prototype displays a microphone-unavailable message
- **AND** the learner can continue using text and synthesized playback

### Requirement: Bundled static delivery

The prototype SHALL run from its exported HTML bundle in a modern browser with JavaScript enabled.

#### Scenario: JavaScript is unavailable

- **WHEN** the exported page loads without JavaScript execution
- **THEN** it displays a message that JavaScript is required
