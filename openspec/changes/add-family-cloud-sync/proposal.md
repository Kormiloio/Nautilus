# Change: Add optional family accounts and cloud synchronization

## Why

The family may practice on phones, tablets, and computers. Local browser storage alone cannot carry a learner's voyage progress between devices or recover it after browser data is cleared. Optional family-owned cloud backup should provide continuity without making an account mandatory for learning.

## Implementation status

An uncommitted Supabase proof of concept exists for Google sign-in, configurable profiles, cloud tables, and an offline transaction queue. It is not approved for deployment. The data contract, conflict rules, migration behavior, privacy review, deletion flow, and production verification defined by this change remain incomplete.

## What changes

- Preserve a fully usable local-only mode.
- Allow people to create accounts, create or join a family, and use cloud backup.
- Parents create and own family workspaces. Owners and adult/guides may invite any permitted role; learners may invite friends or relatives only as learners.
- Synchronize profile-scoped progress across authorized family devices.
- Queue qualifying offline changes and retry them safely.
- Replace fixed family names with configurable profiles while protecting existing local progress.
- Define ownership, access control, migration, recovery, and deletion behavior for data belonging to minors.

## Capabilities

### New capabilities

- `family-accounts`: optional authentication, family ownership, and profile management
- `cloud-progress-sync`: cross-device progress, offline queueing, reconciliation, and recovery

### Modified capabilities

- `learner-progress`: progress may be backed up to a family account while local isolation and no-account use remain supported
- `safe-responsive-web`: cloud data, authentication, privacy, and failure fallback become explicit

## Impact

- Adds Supabase and an external identity provider to the production trust boundary.
- Stores family membership, account email addresses, learner profiles, and learning progress in a family-owned workspace.
- Requires row-level authorization, environment configuration, privacy review, migration tests, and account/data deletion.
- Must not upload microphone recordings or silently convert a local profile into a cloud profile.

## Open questions

- Which member initially owns each family, and how may ownership be transferred?
- Google OAuth is the only supported identity provider for the family alpha. Additional providers are deferred.
- How long should deleted-account backups, if any, be retained?
