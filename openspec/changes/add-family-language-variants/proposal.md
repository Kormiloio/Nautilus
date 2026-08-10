# Change: Add family language variants

## Why

Families may use regional, heritage, dialect, or household words that differ from a standard language pack. The original Nautilus family uses Croatian-influenced forms such as `dida`, while a Montenegrin-only family may prefer standard Montenegrin `deda`. Families need to preserve those meaningful forms without changing the reviewed standard curriculum for everyone else.

## What changes

- Keep every published language pack immutable as the standard source.
- Let authorized family members add private words and phrases to a selected language.
- Let a family attach an alternative to a standard item and optionally prefer it in eligible activities.
- Clearly label standard and family forms and retain a route to view or restore the standard.
- Scope variants to one family and language pack.
- Allow learner suggestions while keeping publication and family approval separate.

## Capabilities

### New capabilities

- `family-language-variants`: private additions, standard-item alternatives, preferences, approval, and removal

### Modified capabilities

- `reviewed-content`: product review state remains separate from family approval
- `language-packs`: family overlays resolve after the immutable standard pack
- `learner-progress`: activity records retain the standard item identity and selected family variant identity

## Impact

- Requires stable identifiers for standard pack items before overrides can safely target them.
- Adds family-owned text and optional audio to the privacy and deletion model.
- Quiz and lesson generation must avoid ambiguous answers when standard and family forms are both accepted.
- Family variants must not leak into another family or become globally published without a separate editorial workflow.

## Open questions

- May learners publish their own suggestions immediately, or must an owner/adult approve them first?
- May family members record private pronunciation audio, and what retention/deletion controls are required?
- Should family additions participate in the core voyage or only in optional family practice until reviewed?
