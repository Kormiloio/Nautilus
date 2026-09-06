# Product requirements document: Nautilus Solo Mode

**Product:** Nautilus - Learn Your Heritage Together  
**Status:** Proposed  
**Owner:** Nautilus product team  
**Last updated:** 2026-09-06

## 1. Summary

Solo Mode is an individual learning experience inside Nautilus for people who do not have a family learning with them, and for family members who want useful personal practice between shared sessions.

It is not a separate app, a diminished trial, or a second curriculum. A solo learner chooses a language, signs in with their own account, and follows the same reviewed language packs, activities, voyage, destinations, posters, honors, and Sailor Talk side quests available in Nautilus.

Family Play remains a distinct shared experience. Solo Mode must never require a family, and solo progress must never create, advance, complete, or interfere with a Family Voyage Day.

## 2. Problem

Nautilus currently centers the family ritual: a parent or guide creates a family, learners join, and the group advances the shared voyage together. This is powerful for families but excludes people who:

- are learning their heritage language on their own;
- have relatives who cannot join at the same time;
- want private practice between family sessions;
- want to explore a language before inviting family members.

The product needs an individual path with the same warmth, visual identity, and meaningful progress as Family Play, without inventing a fake family relationship or forcing a learner through account-management screens meant for households.

## 3. Goals

Solo Mode must:

1. Let a learner create and use Nautilus without creating or joining a family.
2. Provide a complete 200-lesson personal voyage using reviewed, published language-pack content.
3. Preserve the classic Nautilus activities: Flashcards, Match, Quiz, Listen, role-play, cumulative recall, and Sailor Talk.
4. Make the learning spiral visible through Up Next and What We Brought Back recaps.
5. Give solo learners meaningful individual progress: personal stars, active-day streak, honors, ports, posters, and arrival celebrations.
6. Make moving from solo learning to Family Play possible later without losing the learner's personal history.
7. Maintain the existing server-authoritative completion and reward model.

## 4. Non-goals

Solo Mode will not:

- simulate family members, group conversation, or shared locks;
- award or advance a Family Voyage Day;
- expose another learner's progress;
- create public leaderboards, social comparison, or unsolicited messaging;
- require automatic speech grading or open-ended AI conversation;
- duplicate content into a separate Solo curriculum;
- make a language pack available before its normal publication/review policy permits it.

## 5. Users

### Primary: independent heritage learner

- Age 13+ for the first release; younger learners use the product with a guardian.
- May live away from family, have no available learning partner, or want personal practice.
- Uses a phone first, with tablet and desktop support.
- Wants clear progress and short sessions without a childish visual style.
- May eventually invite a family member or join a household workspace.

### Secondary: family member practicing alone

- Already belongs to a Nautilus family.
- Uses Solo Mode to prepare, review, or continue independently.
- Understands that personal practice and Family Play progress are separate.

## 6. Experience principles

1. **One Nautilus, two rhythms.** Solo and Family Play share the product, content, language settings, and voyage identity; each has its own progress contract.
2. **No second-class path.** Solo learners receive scenery, ports, posters, honors, side quests, and a full learning route.
3. **Useful alone.** Each session must work without another person in the room.
4. **Cumulative, not repetitive.** The next lesson visibly combines current language with retrieved earlier language when authored connections are available.
5. **Invite, never pressure.** A solo learner may optionally create or join a family later. The app must not frame solo learning as incomplete.
6. **Private by default.** Personal progress remains private unless the learner intentionally joins a family and grants the required membership access.

## 7. Core experience

### 7.1 Entry and account setup

The welcome screen offers two equally clear choices:

- **Learn on my own**
- **Learn with my family**

"Learn on my own" creates a personal Nautilus workspace associated with the signed-in learner. The learner selects an enabled language and reaches the solo dashboard without being asked for a family name, invitation, adult role, or crew roster.

A person who is already a linked learner should open directly into their personal dashboard. A family owner or adult guide can still choose Family Play from the same application.

### 7.2 Solo dashboard

The solo dashboard contains:

- language selector;
- personal stars, active-day streak, and completed voyage lessons;
- an **Up Next** card with the next lesson, new topic, recalled topics, and eligible authored connection sentence;
- a primary action: **Start Solo Lesson**;
- personal voyage map with named ports, poster collection, arrival celebrations, and honors;
- Sailor Talk when unlocked;
- free practice cards for Flashcards, Match, Quiz, Listen, and mixed review;
- a neutral route to create or join a family later.

Do not show a crew lobby, parent controller controls, "waiting for the crew", or family-management language in Solo Mode.

### 7.3 Solo lesson

A Solo Lesson uses the same published verified lesson catalog as individual play. It includes the activity types supported by the lesson and language pack.

At minimum, a published solo lesson may include:

- flashcards or discovery;
- matching;
- multiple-choice or recognition quiz;
- listening/repeat when approved audio exists;
- guided dialogue or sentence building when the content supports it;
- recall from earlier completed topics;
- a lesson-end recap.

The UI should preserve the scenic topic backgrounds, touch-friendly cards, accessible keyboard controls, answer feedback, and reduced-motion behavior used elsewhere in Nautilus.

### 7.4 Lesson-end recap

At the end of every Solo Lesson, show **What We Brought Back**:

- one new phrase;
- up to two earlier phrases that were recalled;
- one authored cross-topic connection sentence when prerequisites are met.

The recap is explanatory, not a scorecard. It must make the reason for the review visible: "you used something you learned before."

### 7.5 Personal voyage

Completing a verified Solo Lesson advances the learner's personal voyage position. Every 20 completed personal voyage lessons unlocks the same named destination, poster, and arrival celebration used by the voyage system.

Solo milestones are personal and must be labeled clearly as such. They must not be described as shared family arrivals or written into family history.

### 7.6 Optional transition to Family Play

A solo learner may later:

- create a family workspace;
- accept a family invitation;
- be linked to a learner profile by an authorized adult;
- join a Family Play session from their own account.

The transition must preserve personal language-scoped completed lessons, stars, activity dates, and honors. It must not backfill or fabricate completed Family Voyage Days.

When the learner joins a family, the interface explains the distinction:

- **My Solo Voyage:** personal learning and practice.
- **Our Family Voyage:** shared lessons completed together.

## 8. Functional requirements

| ID | Requirement | Priority |
| --- | --- | --- |
| SOLO-01 | A signed-in user can create a personal Nautilus workspace without creating or joining a family. | Must |
| SOLO-02 | A solo learner can select any enabled published language pack and receive isolated, language-scoped progress. | Must |
| SOLO-03 | The solo dashboard exposes Start Solo Lesson, Up Next, free practice, personal voyage, Sailor Talk, and personal achievements. | Must |
| SOLO-04 | Solo lessons use server-validated individual verified attempts and published lesson catalogs. | Must |
| SOLO-05 | Only the signed-in learner can create, resume, submit, or receive credit for that learner's individual attempt. | Must |
| SOLO-06 | Completing a Solo Lesson records personal completion, stars where applicable, and local-date activity exactly once. | Must |
| SOLO-07 | Solo completion never creates, advances, completes, or changes a Family Voyage Day. | Must |
| SOLO-08 | Solo lessons show the lesson-end recap with new, recalled, and eligible connected language. | Should |
| SOLO-09 | Solo learners receive named-port arrival celebrations, posters, and honors from personal milestones. | Should |
| SOLO-10 | Solo Mode removes crew, controller, waiting, family-session, and parent-management UI. | Must |
| SOLO-11 | A solo learner can later create or join a family without losing personal progress. | Must |
| SOLO-12 | Joining a family does not merge personal voyage history into shared family history. | Must |
| SOLO-13 | Family-linked learners retain the existing separate personal-practice and Family Play histories. | Must |
| SOLO-14 | All Solo Mode flows meet existing phone, tablet, desktop, keyboard, reduced-motion, and screen-reader requirements. | Must |
| SOLO-15 | Unsupported or pilot language packs retain existing review warnings and cannot be misrepresented as reviewed courses. | Must |

## 9. Data and security requirements

- A personal workspace must be represented explicitly in the data model; do not create a hidden fake family merely to reuse family tables.
- Server-side RPCs remain authoritative for attempt creation, exercise validation, stars, activity dates, lesson completion, and milestone rewards.
- RLS must ensure a solo learner can read and mutate only their own workspace and progress.
- A family invitation or family-link operation must be explicit, auditable, and reversible by authorized users.
- A solo learner's personal data must not be visible to platform users, family owners, or adult guides until a legitimate family membership and role grant access.
- Existing anti-forgery, attempt ordering, catalog revision pinning, and completion validation apply unchanged to solo attempts.
- Migration tests must cover solo isolation, later family linking, and prevention of accidental Family Voyage Day creation.

## 10. Success measures

After launch, measure only privacy-respecting aggregate product signals:

- percentage of newly registered users who begin a first solo lesson;
- first lesson completion rate;
- day-7 and day-30 return rate for solo learners;
- median number of completed solo lessons before a learner optionally joins or creates a family;
- lesson completion and retry rates by activity type;
- support reports related to account ownership or personal/family progress confusion.

Do not use competitive rankings, engagement pressure, or child-targeted notification tactics as success mechanisms.

## 11. Delivery plan

### Phase 1: personal workspace foundation

- Define the personal workspace and account-state model.
- Add RLS and server RPC support.
- Add a clear first-run choice between Solo and Family.
- Preserve all current family flows and regression coverage.

### Phase 2: solo dashboard and verified lesson route

- Build the Solo dashboard and personal navigation.
- Route individual verified attempts through the personal workspace.
- Add personal voyage, Up Next, and lesson-end recap.
- Remove family-only UI from Solo Mode.

### Phase 3: transition and quality

- Support explicit solo-to-family linking.
- Add explanatory progress views for people who use both rhythms.
- Test mobile first-run, account recovery, accessibility, and transition edge cases.
- Conduct a privacy/security review and a pilot with independent heritage learners.

## 12. Open questions

1. Should a solo learner be able to invite another solo learner into a newly created family, or should family creation remain adult-led for the initial release?
2. What is the minimum age and guardian-consent policy for independent accounts in each launch region?
3. Should a personal voyage use the same port names as the active language journey, or use a personal variation of the same map?
4. When a solo learner later joins a family, should the dashboard default to the personal voyage, the family voyage, or a simple chooser?
5. Which pilot language packs have enough reviewed catalog coverage to offer Solo Mode at launch?

## 13. Acceptance criteria

Solo Mode is ready for a limited pilot when:

- a new signed-in user can begin learning alone without a family setup;
- all completion and reward changes are validated server-side;
- no Solo action can alter a family session or family voyage position;
- the solo dashboard has no blocked or misleading family-only controls;
- a learner can complete a lesson on a phone and see the recap, personal progress, and a return path;
- RLS and migration tests verify personal isolation and later family linking;
- an independent learner can use the flow without product-team assistance.
