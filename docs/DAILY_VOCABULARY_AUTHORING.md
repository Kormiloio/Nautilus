# Daily vocabulary authoring

The 50% rule is mandatory for replacement core catalogs. No current pack yet has a complete reviewed daily plan. Existing deployed catalogs remain legacy content.

Add a pack-keyed entry to `src/content/daily-plans.js` with this shape:

```js
{
  version: 1,
  wordsPerDay: 20,
  vocabulary: [
    { id: 'stable-lexical-id', kind: 'word', targetText: '...', supportText: '...',
      reviewStatus: 'approved', reviewer: 'Actual reviewer', reviewedAt: 'YYYY-MM-DD' }
  ],
  lessons: [
    { id: 'voyage-1', newWordIds: [/* 20 distinct reviewed IDs */], reviewWordIds: [] },
    { id: 'voyage-2', newWordIds: [/* at least 10 */], reviewWordIds: [/* balance to 20 */] }
    // Continue through voyage-200, including integration/checkpoint days.
  ]
}
```

Group inflections, alternate scripts and equivalent spellings under one lexical identity. A phrase is not a new word; do not label a phrase `word` to inflate coverage. Reviewers must assess this semantic requirement. IDs alone cannot prove linguistic novelty. Do not invent review approvals.

Both lesson modes teach the new allocation first, then review, matching in small groups, and retrieval of the complete allocation. These are a vocabulary progression foundation; richer reviewed sentence/dialogue tasks still need authored lexical dependencies before joining this route.

Export using a new immutable catalog revision. The exporter validates all 200 allocations before emitting SQL, even for a partial export. Practice exports remain independent. For intentional maintenance of historical content only, `--legacy-vocabulary=true` preserves the legacy exporter. This bypass does not certify compliance. Publishing or changing the release gate requires a separate reviewed catalog rollout.

Existing progress and attempt records are not changed by this implementation. Families at day 23 require an explicit content transition review: new-plan words must be checked against what the family already saw in the legacy course before rollout.
