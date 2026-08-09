# Change: Define the Nautilus learning foundation

## Why

The current product direction exists primarily in prior conversation and a generated single-file prototype. The prototype has now been reviewed and conflicts with several stated decisions: it locks topics by week, presents a 12-month journey, and automatically chooses a “Tonight's Session.” Before extending the app, the family needs an agreed product contract for a ten-month, teen-appropriate Montenegrin learning experience and a maintainable plan for validating and migrating the existing work.

## What changes

- Establish free-browse topic discovery and supported activity behavior.
- Establish a maintainable, review-gated content model for Montenegrin text, scripts, and audio.
- Establish local learner profiles, light progress, stars, and streak behavior.
- Establish privacy, accessibility, responsive, and failure-fallback expectations.
- Use the reviewed Claude prototype as a visual/behavioral reference while recovering the original lesson source and migrating approved behavior into maintainable source.

## Capabilities

### New capabilities

- `learning-experience`: topic browsing and activity sessions
- `reviewed-content`: structured language, script, dialogue, and audio content
- `learner-progress`: local profiles and lightweight motivation
- `safe-responsive-web`: accessibility, responsive behavior, privacy, and graceful fallback

### Modified capabilities

None. The current bundled prototype is documented separately as baseline behavior; these named capabilities formalize the approved replacement behavior.

## Impact

- Introduces the first product and behavior contracts for the repository.
- Requires recovery and audit of the 224-line lesson source; the prototype bundle is present and its initial audit is complete.
- Requires migration away from the opaque export bundle unless editable source can be recovered and shown to meet maintainability and testing requirements.
- Defers accounts, cloud sync, open-ended speech scoring, native apps, and heavy gamification.

## Open questions

- Is cross-device synchronization required during the first year?
- Who owns language and audio approval?
- Is offline trip use required?
- Does a parent-only progress view belong in the first family alpha?
