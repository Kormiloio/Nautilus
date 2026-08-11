# Design: Family language variants

## Overlay model

Standard language-pack content is immutable. A family overlay contains either:

- an `alternative` linked to a stable standard item, such as standard Montenegrin `deda` and family Croatian `dida`;
- an `addition` that introduces a private family word or phrase without replacing a standard item.

Each record includes a stable identifier, family identifier, pack identifier/version, optional standard-item identifier, target text, support meaning, variant label, preference mode, approval state, creator, timestamps, and optional audio metadata.

## Display and answer behavior

The default display remains the standard pack. A family may choose `show_standard`, `show_both`, or `prefer_family` for an approved alternative. Even in `prefer_family`, the learner can reveal the standard form and the app labels the family form rather than presenting it as universally standard.

Activities declare whether they accept the standard form, approved family alternatives, or both. Quiz generation must not place two accepted synonyms against one another as mutually exclusive choices. Progress continues to reference the standard learning objective and may also record which variant was practiced.

## Permissions and review

Owners and adult/guides may create, approve, edit, prefer, or remove family variants. Learners may suggest variants; the initial safe default is `pending` until an owner or adult/guide approves them for shared family activities. Family approval means accepted for that family's use, not fluent editorial review or global publication.

## Privacy and deletion

Variants and private audio belong to one family. Other families cannot discover them. Removing a variant stops future use without corrupting historical activity records. Deleting the family removes its variants and private media under the family data-deletion policy.

## Pack upgrades

An alternative targets a stable standard item identifier. During a pack upgrade, compatible item identifiers retain their overlays. If an item is removed or its meaning changes incompatibly, the overlay is quarantined for adult review rather than silently attached elsewhere.
