# Vocabulary catch-up

The course catalog is not evidence that a particular child saw an item. The
client must record an item only after it was displayed or played, keyed by
learner and vocabulary item ID. The regular day plan then uses that history:

1. Start the day with a short catch-up block containing the highest-priority
   unseen items from earlier days.
2. Record exposure as each item is shown or played.
3. Continue with the normal day plan, keeping at least 50% of that day’s items
   genuinely new for the learner’s curriculum.
4. Once the backlog is empty, replace the catch-up block with spaced review of
   items whose exposure history shows they were actually seen.

Until exposure history exists for a learner, the UI should call legacy items
“Earlier vocabulary” or “Catch-up”, never “Seen”. This prevents the curriculum
baseline from being presented as a claim about a child’s personal history.

