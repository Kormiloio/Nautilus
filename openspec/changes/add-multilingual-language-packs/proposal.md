# Change: Add multilingual language packs

## Why

Nautilus is expanding from one family's Montenegrin learning app into a product that other families can use. Families need to select the language they are learning, and each learner needs independent curriculum and progress for that language. Reusing Montenegrin labels or mechanically translating its voyage would produce inaccurate courses and would not account for different scripts, grammar, pronunciation, or cultural contexts.

## What changes

- Introduce versioned language packs with explicit target and support languages.
- Launch with Montenegrin as the reference pack and plan Albanian, Spanish, French, and Greek as separately reviewed packs.
- Allow each family to enable supported languages and each learner to select an active language.
- Scope voyage plans, lessons, content, audio, family variants, and progress to a language-pack version.
- Keep the initial application interface and instructional translations in English.
- Require language-specific review before a pack or lesson is published.

## Capabilities

### New capabilities

- `language-packs`: discovery, metadata, versioning, scripts, publication state, and content isolation
- `learner-language-selection`: family enablement, learner selection, and language-scoped progress

### Modified capabilities

- `reviewed-content`: review and publication apply independently to each language pack
- `daily-learning-voyage`: each published language pack owns its own voyage plan
- `learner-progress`: progress is keyed by learner profile and language pack

## Initial language roadmap

| Target language | Code | Required script support | Initial status |
| --- | --- | --- | --- |
| Montenegrin | `cnr` | Latin and Cyrillic | Existing draft reference pack |
| Albanian | `sq` | Latin | Planned second pack |
| Spanish | `es` | Latin | Planned |
| French | `fr` | Latin | Planned |
| Greek | `el` | Greek | Planned |

## Impact

- Existing Montenegrin content becomes the `montenegrin-en` pack.
- Current field names such as `mn` and `en` must be replaced by language-neutral content fields during migration.
- Every saved lesson and progress record needs a language-pack identity/version.
- New languages require their own fluent review owner, audio policy, curriculum map, and readiness validation.

## Open questions

- Who will own fluent review for Spanish, French, and Greek?
- Should learners be allowed to follow more than one active voyage concurrently?
- When should a published pack version migrate existing progress versus start a new voyage version?
