const EXPECTED = Object.freeze({
  contractVersion: 1,
  revision: 2,
  individual: 1400,
  family: 1400,
  practice: 943,
});

export function validateCatalogStatus(actual, expected = EXPECTED) {
  if (!actual || typeof actual !== 'object') throw new Error('Catalog status response is missing');
  const mismatches = Object.entries(expected)
    .filter(([key, value]) => actual[key] !== value)
    .map(([key, value]) => `${key}: expected ${value}, received ${String(actual[key])}`);
  if (mismatches.length) throw new Error(`Verified catalog is not release-ready (\n  ${mismatches.join('\n  ')}\n)`);
  return true;
}

export async function verifyRelease(env = process.env, request = fetch) {
  const deployedBuild = Boolean(env.CONTEXT);
  if (!deployedBuild && env.NAUTILUS_VERIFY_RELEASE !== '1') {
    console.log('Verified catalog gate skipped outside a deployment build.');
    return;
  }
  const url = env.VITE_SUPABASE_URL;
  const key = env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error('Deployment requires VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
  const response = await request(`${url.replace(/\/$/, '')}/rest/v1/rpc/get_verified_catalog_status`, {
    method: 'POST',
    headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: '{}',
  });
  if (!response.ok) throw new Error(`Catalog health check failed with HTTP ${response.status}`);
  validateCatalogStatus(await response.json());
  console.log('Verified catalog release gate passed.');
}

if (import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  await verifyRelease();
}
