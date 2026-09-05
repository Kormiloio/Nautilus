import { describe, expect, it, vi } from 'vitest';
import { validateCatalogStatus, verifyRelease } from '../../../scripts/verify-verified-release.mjs';

const ready = { contractVersion: 1, revision: 2, individual: 1400, family: 1400, practice: 943 };

describe('verified release gate', () => {
  it('accepts the exact deployed catalog contract', () => {
    expect(validateCatalogStatus(ready)).toBe(true);
  });

  it('rejects a partial or stale catalog', () => {
    expect(() => validateCatalogStatus({ ...ready, family: 1399 }))
      .toThrow('family: expected 1400, received 1399');
  });

  it('checks the anonymous count-only RPC during deployed builds', async () => {
    const request = vi.fn().mockResolvedValue({ ok: true, json: async () => ready });
    await verifyRelease({
      CONTEXT: 'production',
      VITE_SUPABASE_URL: 'https://example.supabase.co/',
      VITE_SUPABASE_ANON_KEY: 'public-key',
    }, request);
    expect(request).toHaveBeenCalledWith(
      'https://example.supabase.co/rest/v1/rpc/get_verified_catalog_status',
      expect.objectContaining({ method: 'POST' }),
    );
  });
});
