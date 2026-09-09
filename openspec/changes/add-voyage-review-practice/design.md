# Design: Review from Your Voyage

## Content boundary

The curriculum remains the authority for all vocabulary, authored connections, acceptable answers, and script variants. The review selector chooses among already published and previously encountered records; it never composes new language.

## Selection model

For the active learner and language pack, the selector ranks eligible items using existing verified receipts and topic history:

1. graded responses answered incorrectly but not recently revisited;
2. successful items least recently retrieved;
3. recently completed topics only as a limited proportion to preserve variety.

The result is capped at a short session and de-duplicates items, topics, and sentence connections. When history is sparse, it falls back to an explicitly labeled mixed review of completed topics. It must never select content from another language pack, an unpublished revision, or a private family variant without that family's approved variant policy.

## Activity and server contracts

Review creates a normal verified **practice** attempt against an immutable catalog revision. Existing server-side answer redaction, validation, receipt, and reward rules remain authoritative. A review completion may update personal recall evidence but does not create a completed voyage lesson, advance a family session, or alter the Family Voyage calendar.

## Presentation and accessibility

The entry point describes the experience as optional retrieval practice, not correction or a weakness score. Each activity identifies the familiar language it brings back. Incorrect answers receive the existing visible correction and can continue without a penalty. Audio controls are optional, keyboard focus is visible, and all status changes have text equivalents.

## Storage, retention, and fallback

No new category of sensitive data is collected. The feature uses existing attempt, receipt, and language-scoped progress retention. If verified history is unavailable or no eligible content exists, the dashboard explains that review will become available after a few completed lessons and offers current-topic practice instead.
