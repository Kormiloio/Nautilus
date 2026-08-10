# Tasks: Add optional family accounts and cloud synchronization

## 1. Confirm product and privacy decisions

- [x] 1.1 Use Google OAuth as the only family-alpha authentication provider.
- [ ] 1.2 Approve the minimal cloud data inventory, retention, export, and deletion policy.
- [x] 1.3 Confirm invitation roles: parents own workspaces; owners/adult-guides manage roles; learners may invite learner members only, subject to owner revocation or disabling.
- [ ] 1.4 Confirm ownership transfer and Google-account recovery messaging.

## 2. Define and secure storage

- [x] 2.1 Define the user, family, membership, invitation, learner-profile, language-scoped progress, and synchronization schema in the replacement Supabase migration; production application remains pending.
- [ ] 2.2 Implement and test row-level policies for select, insert, update, and delete operations.
- [ ] 2.3 Verify that service-role or administrative secrets never enter the client or repository.
- [ ] 2.4 Add an account and cloud-data deletion workflow.

## 3. Implement migration and synchronization

- [ ] 3.1 Replace the proof-of-concept profile-name storage keys with stable profile identifiers.
- [ ] 3.2 Implement an explicit, recoverable local-to-cloud profile migration.
- [x] 3.3 Add idempotent operation identifiers and language-pack scoping to the local queue and database contract; concurrent reconciliation verification remains open under section 4.
- [ ] 3.4 Preserve the offline queue across refresh and expose local-only, pending, synced, and error states.
- [ ] 3.5 Ensure sign-out, auth failure, and missing configuration preserve local learning.
- [x] 3.6 Add an email-bound, seven-day adult-partner invitation link that survives Google sign-in and joins the authenticated adult to the family workspace.
- [x] 3.7 Allow an adult to invite a learner by email, link the accepted Google account to an existing stable learner profile, and route that learner to their own profile.

## 4. Verify

- [ ] 4.1 Test two families cannot read or mutate one another's data and that each family role has only its documented permissions.
- [ ] 4.2 Test invitation creation, expiration, revocation, duplicate email handling, acceptance, owner notification, learner-invitation disabling, role escalation denial, and ownership transfer.
- [ ] 4.3 Test concurrent devices, duplicate retries, offline/online transitions, and partial failures.
- [ ] 4.4 Test migration with existing local profiles and progress, including duplicate names and linking a learner login.
- [ ] 4.5 Test account deletion, family departure, local-data removal, export, and recovery messaging.
- [ ] 4.6 Complete privacy, accessibility, supported-device, and production-environment reviews before deployment.
