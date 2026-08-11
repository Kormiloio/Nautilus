# Learner voyage specification

## ADDED Requirements

### Requirement: Visual voyage progress

The system SHALL show a learner's completed curriculum progress as a ten-port route spanning exactly 200 lesson positions.

#### Scenario: Learner has begun the voyage

- **WHEN** the active learner has completed between 1 and 19 lessons in the selected language
- **THEN** Port 1 is the current port
- **AND** later ports remain charted but not reached

### Requirement: Nautical progress stages

The system SHALL derive the stage labels Anchors Aweigh, Making Headway, Rounding the Mark, Flying Colors, and Shipshape · Moored from completed lesson counts.

#### Scenario: Learner reaches the halfway boundary

- **WHEN** the active learner completes lesson 100 in the selected language
- **THEN** the dashboard displays Rounding the Mark

### Requirement: Language passport

The system SHALL award a passport stamp only when all 20 lessons belonging to that curriculum month are complete in the selected language.

#### Scenario: A month is partially complete

- **WHEN** 19 of a month's 20 lessons are complete
- **THEN** the month displays partial progress
- **AND** its passport stamp remains unearned

### Requirement: Personal, non-competitive companions

The system SHALL derive sea companions from published lesson milestones and SHALL NOT compare companion collections between learners.

#### Scenario: Non-completion action

- **WHEN** a learner signs in, selects a profile, browses a topic, or opens a lesson without completing it
- **THEN** no passport stamp or sea companion is awarded

### Requirement: Learner and language isolation

The system SHALL derive all voyage-stage, passport, and companion state from the active learner and active language pack.

#### Scenario: Learner changes language

- **WHEN** a learner switches from Montenegrin to Albanian
- **THEN** the voyage experience displays the learner's Albanian progress only
