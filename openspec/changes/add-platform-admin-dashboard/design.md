# Design: Privacy-safe platform administration

## Authorization boundary

Platform authorization is independent of `family_memberships`. A server-controlled allowlist or `platform_roles` record grants the `platform_admin` role. Client-supplied metadata cannot grant or elevate this role. Aggregate data is returned only through security-definer RPCs that verify the authenticated platform role.

## Default dashboard

The default dashboard exposes aggregate service metrics: total and recently active families, language-pack adoption, Family Play starts/completions, invitation success/failure, client build versions, and error counts. Small cohorts are suppressed where an aggregate could identify a particular child or family.

## Support access

Family-specific support access is a separate action. It requires a reason, is time-limited, exposes only the minimum data needed, and writes an immutable audit event containing administrator, family, reason, scope, and timestamps. Private vocabulary, learner responses, and recordings remain unavailable unless a future explicit consent design authorizes them.
