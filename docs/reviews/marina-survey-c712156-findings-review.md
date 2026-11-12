# Marina survey findings review: commit `c712156`

Status: **reviewed on 2026-11-12. No exploitable finding; no code change required.** One unused published page was removed as hardening (see below).

Survey `35c57a1072c9`: 90 baseline_scan v1 (`17a9b068048c`) findings, later 346 once the deterministic v1 rules (`88bd95c91aef`) ran, plus 37 advisory artifact findings from Dry Dock run `c00c2c09a1d6494f90e4cbb9b52aae4c`. This record is the evidence for the human disposition. It does not replace it.

## Summary

| Rule | Severity | Count | Verdict |
|---|---|---|---|
| secret: possible hard-coded credential | critical | 5 | False positive |
| browser-injection: raw HTML insertion | high | ~80 (source + `web/assets/index-ByPYhts2.js`) | False positive: sinks are present, but no untrusted value reaches them unescaped |
| Dynamic code execution | high | 1 | Removed (`web/prototype.html`) |
| Plain HTTP | medium | 2 | False positive (identifiers, not network requests); one removed with the prototype |

## Hard-coded credentials (5)

- `supabase/config.toml:101`, `:300`, `:332`: values are `env(OPENAI_API_KEY)`, `env(SUPABASE_AUTH_SMS_TWILIO_AUTH_TOKEN)`, and `env(SUPABASE_AUTH_EXTERNAL_GOOGLE_SECRET)`. These are environment references; the scanner matched the key names.
- `src/components/family-play-view.js:120` and `src/components/listening-practice-view.js:40`: "token" means a word tile in a sentence-building exercise (`item.tokens`, `exercise.tokens`), rendered through `escapeHtml` / `renderLanguageRun`.
- Repository-wide search for real key formats (JWTs, `sk_live`, `sb_secret`) found none. `service_role` appears only in SQL grants and revokes.

## Raw HTML insertion (~80)

The rule matches every `innerHTML` / template sink regardless of escaping. Each source finding was traced for values that a user, the network, or the browser can control:

| Value | Where rendered | Handling |
|---|---|---|
| Profile names | `dashboard.js:28` | `escapeHtml` |
| Profile names | `profile-select.js` | `innerText`, `alert`, `prompt` (not HTML) |
| Family member names (turn prompt, conversation script) | `family-play-view.js:81`, `:155` | `escapeHtml` |
| Account email | `profile-select.js:22` | `escapeHtml` |
| Error messages | `admin-dashboard.js:79` | `escapeHtml` |
| Recorder error | `topic-view.js:427` | Fixed app string (`topic-view.js:506`) |
| Recording URL | `topic-view.js:422` | Browser-created `blob:` URL |
| Quiz feedback (correct answer) | `family-play-view.js:151` | `escapeHtml` |
| Lesson, sentence, word, and answer text | all views | `escapeHtml` or `renderLanguageRun` (which escapes) |
| Pack ids in admin metrics | `admin-dashboard.js` | `escapeHtml`; counts pass through `formatMetric` (number) |

The remaining unescaped interpolations are values the app controls: titles, icons, badges, and colors from the reviewed language pack in the repository; numbers and scores; CSS class names chosen by the code; and generated ids such as `target-0`.

The 37 findings in `web/assets/index-ByPYhts2.js` are the compiled form of the same source and share the same verdict. The bundle is generated and is not edited by hand.

**Residual risk:** escaping is applied at each call site, so a future view could forget it. Moving views off `innerHTML`, or adding a lint rule for unescaped interpolation, would make this structural. Neither is required to release.

## Prototype page (dynamic code execution, plain HTTP)

`web/prototype.html` (the original concept export) re-executed its own embedded scripts at load. It took no outside input, but it was unmaintained and published at `/prototype.html`. It is deleted in PR #17 (`openspec/changes/remove-published-prototype`) and remains in git history at `2918c96:web/prototype.html`.

`src/content/schema.json:2` is the standard JSON Schema `$schema` identifier; no request is made to it.

## Deterministic rule set (`deterministic v1`, `88bd95c91aef`)

When the deterministic check ran, it raised the total to 346 findings. Most re-flag the locations above under a second rule ID ("The approved rules detected raw HTML insertion", "A possible hard-coded credential was detected"), and the verdicts above apply to them. The new items:

| Rule | Severity | Locations | Verdict |
|---|---|---|---|
| Hard-coded credential | critical | `tests/listening-browser.mjs:57` | False positive: `exercises[1].tokens` are a sentence's word tiles in a browser test |
| Raw HTML insertion | high | `tests/sentence-review-browser.mjs:22` | False positive: a browser test renders a fixed fixture sentence into its own test page |
| Line exceeds readability limit | low | ~45 files, including the minified `web/assets/*.js` and `*.css` | Accepted: style-only. Many are data rows in content files or long template strings in views |
| Repeated six-line block | low | `src/public/sw.js`, `admin-dashboard.js`, `main.js`, `session-view.js`, and others | Accepted: style-only. `sw.js` repeats its cache-handler shape on purpose, and the rest are similar markup or setup blocks |
| Document root has no language attribute | low | `web/prototype.html:2` | Resolved: the file is removed in PR #17 |

None of the low findings affects security or behavior. Reducing duplication or line length would be ordinary refactoring and is not required to release.

## Probe diagnostic

The Dry Dock probe logged `Unexpected token '<', "<!DOCTYPE "... is not valid JSON` and exited 0. It requested JSON and received the site's HTML page. Nautilus is a static site and serves no JSON endpoint at the probed path. This is a diagnostic, not a defect.
