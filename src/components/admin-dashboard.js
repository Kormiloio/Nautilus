import { getPlatformAdminMetrics, grantPlatformSupportAccess } from '../engine/admin-service.js';

export class AdminDashboardComponent {
  constructor(container) {
    this.container = container;
    this.metrics = null;
    this.error = null;
    this.loading = false;
  }

  async loadData() {
    this.loading = true;
    this.render();
    try {
      this.metrics = await getPlatformAdminMetrics();
      this.error = null;
    } catch (err) {
      this.error = err.message || 'Failed to load platform metrics.';
    } finally {
      this.loading = false;
      this.render();
    }
  }

  async handleSupportAccess(e) {
    e.preventDefault();
    const familyIdInput = this.container.querySelector('#support-family-id');
    const reasonInput = this.container.querySelector('#support-reason');
    const statusEl = this.container.querySelector('#support-status');

    if (!familyIdInput || !reasonInput) return;

    const familyId = familyIdInput.value.trim();
    const reason = reasonInput.value.trim();

    if (!familyId || reason.length < 10) {
      if (statusEl) {
        statusEl.textContent = 'Please enter a valid family ID and reason (min 10 chars).';
        statusEl.className = 'status-msg error';
      }
      return;
    }

    try {
      if (statusEl) statusEl.textContent = 'Granting support access...';
      await grantPlatformSupportAccess(familyId, reason);
      if (statusEl) {
        statusEl.textContent = '✓ Support access granted and audit event recorded.';
        statusEl.className = 'status-msg success';
      }
      familyIdInput.value = '';
      reasonInput.value = '';
    } catch (err) {
      if (statusEl) {
        statusEl.textContent = `Error: ${err.message}`;
        statusEl.className = 'status-msg error';
      }
    }
  }

  render() {
    if (this.loading) {
      this.container.innerHTML = `
        <div class="admin-dashboard-loading card">
          <h2>Platform Operator Console</h2>
          <p>Loading aggregate metrics...</p>
        </div>
      `;
      return;
    }

    if (this.error) {
      this.container.innerHTML = `
        <div class="admin-dashboard-error card">
          <h2>Platform Operator Console</h2>
          <p class="error-text">${this.error}</p>
        </div>
      `;
      return;
    }

    if (!this.metrics) return;

    const {
      total_families,
      active_families_7d,
      completed_sessions,
      verified_attempts,
      pack_distribution,
      suppress_small_cohorts,
      generated_at,
    } = this.metrics;

    const formattedDate = new Date(generated_at).toLocaleString();

    this.container.innerHTML = `
      <div class="admin-dashboard">
        <header class="admin-header">
          <div>
            <h2>Platform Operator Console</h2>
            <p class="subtitle">Privacy-preserving aggregate metrics & platform telemetry</p>
          </div>
          <div class="privacy-badge">
            <span class="shield-icon">🛡️</span> Privacy-Gated (FR-41)
          </div>
        </header>

        ${
          suppress_small_cohorts
            ? `<div class="alert-banner info">
                <strong>Small Cohort Suppression Active:</strong> Aggregate metrics are coarsened to protect small cohort family privacy (< 5 total families).
              </div>`
            : ''
        }

        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-value">${total_families}</div>
            <div class="metric-label">Total Families</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">${active_families_7d}</div>
            <div class="metric-label">Active Families (7d)</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">${completed_sessions}</div>
            <div class="metric-label">Family Sessions Completed</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">${verified_attempts}</div>
            <div class="metric-label">Verified Lesson Attempts</div>
          </div>
        </div>

        <section class="admin-section card">
          <h3>Language Pack Adoption</h3>
          <div class="pack-list">
            ${
              pack_distribution.length === 0
                ? '<p>No active language packs recorded yet.</p>'
                : `<table class="admin-table">
                    <thead>
                      <tr><th>Pack ID</th><th>Family Subscriptions</th></tr>
                    </thead>
                    <tbody>
                      ${pack_distribution
                        .map(
                          (p) =>
                            `<tr><td><code>${p.pack_id}</code></td><td>${p.count}</td></tr>`
                        )
                        .join('')}
                    </tbody>
                  </table>`
            }
          </div>
        </section>

        <section class="admin-section card">
          <h3>Support Access Audit Request</h3>
          <p class="help-text">Request temporary support access to a family workspace. Requires an explicit audit justification of at least 10 characters.</p>
          <form id="support-access-form" class="support-form">
            <div class="form-group">
              <label for="support-family-id">Target Family UUID:</label>
              <input type="text" id="support-family-id" placeholder="e.g. 123e4567-e89b-12d3-a456-426614174000" required />
            </div>
            <div class="form-group">
              <label for="support-reason">Justification / Support Ticket Reason:</label>
              <input type="text" id="support-reason" placeholder="e.g. Investigating sync timeout report for ticket #402" required minlength="10" />
            </div>
            <button type="submit" class="btn primary">Log & Request Access</button>
            <div id="support-status" class="status-msg"></div>
          </form>
        </section>

        <footer class="admin-footer">
          <small>Telemetry generated at: ${formattedDate}</small>
        </footer>
      </div>
    `;

    const form = this.container.querySelector('#support-access-form');
    if (form) {
      form.addEventListener('submit', (e) => this.handleSupportAccess(e));
    }
  }
}
