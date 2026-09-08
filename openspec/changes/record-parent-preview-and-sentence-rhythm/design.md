# Design: Activity preview and reviewed sentence rhythm

## Boundaries

### Learning content

Language packs define cross-topic connections, their prerequisite topic identifiers, reviewed target tokens, support-language meaning, and accepted constrained order. A connection is eligible only after all of its prerequisite topics have been learned in the voyage. The same authored record is used for individual and Family Play catalogs.

### Activity logic

The learning engine determines eligibility from the voyage's learned-topic set and inserts a sentence builder at the documented rhythm point. It does not select a topic by name, generate grammar, or invent accepted answers. A verified attempt sends only the learner's ordered tiles; the server validates against the catalog revision pinned to that attempt. Canonical answers are withheld until feedback.

The activity preview uses a client-only preview state. It constructs display activities from the currently selected language pack, but never begins a verified attempt or invokes progress, reward, receipt, or Family Play writes.

### Presentation

The dashboard makes Preview activities available only to a family owner or adult guide. Preview has an explicit return path to the dashboard and is not presented as learner progress. Normal lesson and Family Play screens retain their existing visual, keyboard, touch, and reduced-motion behavior.

## Storage, retention, and fallback

Preview adds no records and therefore no new retention category. Sentence-builder attempts use the existing verified-attempt and receipt retention model, including immutable catalog revision references. If a connection has no valid reviewed sentence or its prerequisites are not complete, the engine omits that optional activity and the lesson remains playable. If a preview cannot construct an activity from published content, it returns safely to the dashboard rather than creating progress.

## Security and access

Adult role gating is applied before the preview action is exposed and before its route is rendered. The preview has no privileged write operation. Server-side catalog validation, family membership RLS, pinned revisions, and answer redaction remain authoritative for normal and Family Play sentence builders.
