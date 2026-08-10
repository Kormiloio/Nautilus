# family-accounts delta

## ADDED Requirements

### Requirement: Google authentication

The family-alpha system SHALL use Google OAuth as its only authentication provider and SHALL request only the identity information required for account, invitation, and family membership behavior.

#### Scenario: Person signs in for the first time

- **WHEN** the person completes Google OAuth successfully
- **THEN** the system associates the provider's stable user identifier and verified email with a Nautilus account
- **AND** it does not receive or store the person's Google password

#### Scenario: Person wants another sign-in method

- **GIVEN** the family-alpha release supports only Google OAuth
- **WHEN** the person opens the sign-in experience
- **THEN** no unsupported password or alternative-provider option is presented

### Requirement: Optional family authentication

The system SHALL allow learning without an account and SHALL require an explicit adult action before enabling family cloud synchronization.

#### Scenario: Family does not sign in

- **GIVEN** cloud configuration is absent or the family declines authentication
- **WHEN** a learner uses the application
- **THEN** supported learning and local progress remain available
- **AND** no learner progress is transmitted to the cloud

### Requirement: Family membership and invitations

The system SHALL allow a parent to create and own a family workspace. Owners and adult/guides SHALL be allowed to invite permitted adult or learner roles. Learners SHALL be allowed to invite another person only with the learner role.

#### Scenario: Learner accepts an invitation

- **GIVEN** an authorized family member invited the learner's email with the learner role
- **WHEN** the learner authenticates and accepts the unexpired invitation
- **THEN** the learner becomes a member of that family
- **AND** receives only the permissions assigned to the learner role

#### Scenario: Invitation is revoked

- **GIVEN** a family invitation has not been accepted
- **WHEN** an authorized member revokes it
- **THEN** its token can no longer add a member to the family

#### Scenario: Learner invites a friend or cousin

- **GIVEN** learner invitations are enabled for the family
- **WHEN** a learner sends an invitation to another person's email
- **THEN** the invitation is restricted to the learner role
- **AND** the family owner is notified and may revoke it

#### Scenario: Learner attempts to invite an adult

- **GIVEN** an authenticated member has the learner role
- **WHEN** that member attempts to create an owner or adult/guide invitation
- **THEN** the operation is denied by server authorization
- **AND** no privileged invitation is created

#### Scenario: Parent disables learner invitations

- **GIVEN** the family owner disabled learner-created invitations
- **WHEN** a learner attempts to invite another person
- **THEN** the operation is denied
- **AND** existing family membership is unchanged

### Requirement: Family-owned learner profiles

The system SHALL associate every synchronized learner profile with exactly one family and MAY link that profile to an authenticated learner account. Learners may use their own email-based account; a family MAY instead keep a parent-managed profile without a separate learner login.

#### Scenario: Adult creates a learner profile

- **GIVEN** an authenticated adult owns the family account
- **WHEN** the adult creates a learner profile
- **THEN** the profile receives a stable identifier under that family
- **AND** another family cannot read or mutate it

#### Scenario: Learner links an account

- **GIVEN** an authorized family has a parent-managed learner profile
- **AND** the learner accepts an invitation sent to their email
- **WHEN** the family links the membership to that learner profile
- **THEN** existing progress remains attached to the same stable profile
- **AND** the learner can access it through their authenticated account

### Requirement: Family roles

The system SHALL enforce owner, adult/guide, and learner permissions on the server for every family operation.

#### Scenario: Learner attempts to change family ownership

- **GIVEN** an authenticated member has the learner role
- **WHEN** that member attempts to transfer family ownership
- **THEN** the operation is denied
- **AND** no family membership or ownership data changes

#### Scenario: Learner views family progress

- **GIVEN** several learners belong to the same family
- **WHEN** one learner opens their progress area
- **THEN** the learner can view their own progress
- **AND** cannot view another learner's private progress

### Requirement: Configurable profiles

The system SHALL permit authorized adults to create and rename learner or guide profiles without coupling saved progress to the display name.

#### Scenario: Learner is renamed

- **GIVEN** a profile has existing progress
- **WHEN** an authorized adult changes its display name
- **THEN** its stable identifier and progress remain unchanged

### Requirement: Account and data deletion

The system SHALL provide a documented adult-controlled way to delete family-owned cloud profiles and progress and SHALL communicate any applicable retention period.

#### Scenario: Family deletes its account

- **WHEN** the authenticated owner confirms deletion
- **THEN** family-owned cloud learning data is deleted or scheduled for deletion
- **AND** the result and any retained backup period are clearly communicated
