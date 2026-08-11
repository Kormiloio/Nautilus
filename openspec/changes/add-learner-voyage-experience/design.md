# Design: Learner voyage experience

## Progress model

The route contains ten ports of 20 lessons each. The active stage is derived from completed lesson count at boundaries 0, 50, 100, 150, and 200. Passport stamps require all 20 lesson identifiers in their corresponding curriculum month.

Sea companions are deterministic milestone acknowledgements at lesson counts 1, 25, 75, and 150. They reward personal persistence and are never ranked across learners.

## Presentation

The voyage map is horizontally scrollable on narrow screens and retains readable text labels. The Captain's Quarters contains the learner identity, current voyage status, passport, and companions. All essential progress information is text, so emoji and color are supplementary.

## Data and isolation

No new persisted reward state is required. The UI derives rewards from the active learner's completed lesson identifiers after the active language pack has been selected. This prevents stale or cross-language reward state and keeps cloud synchronization unchanged.

## Halyard relationship

The nautical milestone vocabulary and logbook framing extend Kormilo's existing Halyard design language. Nautilus uses a simplified, learner-oriented presentation rather than reproducing Halyard's operational dashboard density.
