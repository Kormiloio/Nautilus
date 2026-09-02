# Design: Rebrand to "Nautilus — Learn Your Heritage Together"

## Overview

This change updates documentation and a few display labels to reflect the shift from a Montenegrin-specific app to a multi-family heritage language platform. The application code is already largely language-agnostic — the header dynamically shows "Learn {Language Name}" and the welcome screen says "Welcome to Nautilus". The rebrand is primarily a documentation and positioning update, not a code rewrite. No internal identifiers, storage keys, database schema, or language pack IDs are modified.

## Current state (what already works)

- App header uses dynamic language name: `Learn ${LANGUAGE_PACK.targetLanguage.name}` (dashboard, curriculum view)
- Welcome screen says "Welcome to Nautilus" (profile-select)
- Browser title is "Nautilus — Family Language Learning" (index.html)
- All engine code, progress storage, family play, and content is language-pack-scoped
- No hardcoded "Učimo crnogorski" in application code

## File-by-file change map

### Documentation

| File | Change |
| --- | --- |
| `docs/PRD.md` | Product summary, problem statement, experience principles, functional requirements, release approach, and decisions updated for multi-family heritage positioning. Montenegrin-specific language generalized to "heritage language" and "target language". |
| `openspec/config.yaml` | Context blurb updated from Montenegrin-specific to heritage platform. Rules unchanged. |
| `README.md` | Product name and description updated. Repository map and local development sections unchanged. |

### User-facing code (minimal)

| File | Change |
| --- | --- |
| `src/index.html` | `<title>` tag: "Nautilus — Family Language Learning" → "Nautilus — Learn Your Heritage Together" |
| `package.json` | `description` field: update from Montenegrin-specific to heritage platform description |

### No changes required

- `src/main.js` — no hardcoded product name
- `src/engine/*` — language-agnostic engine code
- `src/content/*` — language pack content unchanged
- `src/components/profile-select.js` — already says "Welcome to Nautilus"
- `src/components/dashboard.js` — already uses dynamic language name
- `src/components/curriculum-view.js` — already uses dynamic language name
- `src/components/session-view.js` — no product name references
- `src/components/topic-view.js` — no product name references
- `src/components/calendar.js` — no product name references
- `src/components/voyage-map.js` — nautical theme stays
- `src/components/lesson-visuals.js` — no product name references
- `src/components/family-overview.js` — no product name references
- `src/components/family-play-view.js` — no product name references
- `src/css/style.css` — no product name references
- `src/public/*` — illustrations and headers unchanged
- `supabase/*` — schema unchanged
- `web/prototype.html` — historical artifact, preserved as-is
- `.env.example` — no product name references

## Risk assessment

**Very low risk.** This change touches three documentation files, one HTML title tag, and one package.json description string. No logic, state management, data storage, or test code is modified. The existing 48-test suite and content validation script validate that nothing breaks.

## Rollback

If the rebrand needs to be reverted, restore the original strings in `index.html`, `package.json`, and the three documentation files. No migration or data cleanup is needed.
