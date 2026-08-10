# Design: Optional family cloud synchronization

## Principles

- Local-first learning remains available without sign-in.
- Cloud synchronization is an explicit adult-controlled option, not a learner gate.
- A person may authenticate with an email-based account and belong to a family as an owner, adult/guide, or learner.
- Learners may use their own email-based accounts. Parent-managed profiles remain supported for families that do not want a separate learner login.
- Server authorization, not client filtering, enforces family isolation.
- Synchronization operations are idempotent and recoverable.

## Authentication decision

The family alpha uses Google OAuth exclusively. Nautilus stores the provider's stable user identifier and verified email needed for membership and invitations, but does not store Google passwords or request unrelated Google data. The membership model remains independent of Google so another provider can be added later without changing family or progress ownership.

## Data model

### User account

- stable authenticated user identifier and email address;
- created/updated timestamps and authentication-provider metadata;
- no required birth date or unnecessary identifying information.

### Family workspace

- stable family identifier and authenticated owner membership;
- family display name and creation time;
- policy/consent version where required;
- deletion state and timestamps.

### Family membership and invitation

- stable family and user identifiers;
- role (`owner`, `adult_guide`, or `learner`);
- invitation email, secure single-use token, expiration, inviter, and status;
- accepted, revoked, and role-change timestamps;
- one person may belong to more than one family.

Parents start the workspace and receive the owner role. Owners may promote another adult to `adult_guide` or transfer ownership. Owners and adult/guides may invite adults or learners. Learners may send invitations to friends, cousins, or other people, but every learner-created invitation is fixed to the `learner` role. The owner is notified, can revoke pending invitations or remove learner-added members, and can disable further learner invitations for the workspace if needed. A learner cannot promote a member, invite an adult role, or transfer ownership.

### Learner profile

- stable UUID and owning family identifier;
- optional linked authenticated-user identifier for learners with their own login;
- configurable display name and guide/learner role;
- created/updated timestamps;
- no required birth date or unnecessary identifying information.

### Progress records

- stable profile identifier;
- completed lesson and topic identifiers;
- qualifying active local dates with the originating timezone;
- stars and dialogue summary values;
- plan/content version and update timestamp.

## Local-to-cloud migration

Signing in does not immediately overwrite either store. The app first discovers local and cloud profiles, presents or applies a deterministic profile mapping, and preserves a recoverable local snapshot. Existing activity dates remain activity dates; historical prototype streak values are never uploaded as evidence of practice.

## Synchronization

Local actions update the local cache first and enqueue idempotent operations. The queue persists across refresh and retries when authenticated connectivity returns. Set-like records such as completed lessons use stable uniqueness keys. Counter updates must not use last-write-wins values where concurrent increments could be lost. Every operation carries enough identity and version information to reject cross-family writes.

When local and cloud histories differ, completed lessons/topics and active dates merge by stable identity. Conflicting profile metadata requires a deterministic documented rule or adult confirmation. A failed synchronization never removes local progress.

## Security and privacy

Database row-level security restricts every family and progress operation to authorized members of that family and their permitted roles. Owners and adult/guides manage family settings and roles. Learners may create learner-role invitations but access only shared family learning content and their own progress; they cannot view another learner's private progress. Policies apply to reads, inserts, updates, and deletes, including their check conditions. Production configuration uses only public client credentials; administrative secrets never enter the web bundle. Logs avoid learner names and learning content where practical. Microphone recordings are never synchronized.

## Failure behavior

Missing configuration leaves the app in local-only mode. Authentication, network, quota, or server failures display a non-blocking status and preserve local learning. The UI distinguishes local-only, pending, synchronized, and error states without promising backup before acknowledgement from the server.

## Deletion and sign-out

Signing out stops synchronization but does not silently erase local progress. An adult may separately remove local cached data. Account deletion removes family-owned cloud profiles and progress through a documented, verified workflow and communicates any retention period.
