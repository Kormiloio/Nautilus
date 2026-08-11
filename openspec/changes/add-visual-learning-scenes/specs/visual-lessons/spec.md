# Visual lessons specification

## ADDED Requirements

### Requirement: Meaningful visual context

Supported topics SHALL use original contextual scenes that reinforce the vocabulary being taught rather than serving only as decoration.

#### Scenario: Learner opens Colors

- **WHEN** a learner opens the Colors topic or its Discover lesson
- **THEN** the interface displays a contextual scene containing recognizable examples of the taught colors
- **AND** the scene has an accessible description

### Requirement: Visual continuity across activities

Topic-specific visual cues SHALL remain recognizable across supported discovery, recall, and matching activities.

#### Scenario: Learner practices red

- **WHEN** the current Colors item represents red
- **THEN** its discovery and recall card presents a dominant red visual cue
- **AND** the matching activity visually identifies the corresponding color choices

### Requirement: Multimodal fallback

Essential meaning SHALL remain available through text and supported audio without requiring a learner to perceive an image or color.

#### Scenario: Visual content is unavailable

- **WHEN** an illustration cannot be loaded or perceived
- **THEN** the learner can still identify and complete the activity using its text and accessible labeling
