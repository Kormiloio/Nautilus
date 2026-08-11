const PACK_NAMES = {
  'montenegrin-en': 'Montenegrin',
  'albanian-en': 'Albanian',
};

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[char]);
}

function roleLabel(role) {
  return { owner: 'Owner', adult_guide: 'Adult Partner', learner: 'Learner' }[role] || role;
}

export function renderFamilyOverview(container, state, actions) {
  const overview = state.familyOverview;
  container.innerHTML = `
    <header class="navbar">
      <button class="logo" id="family-back-btn" aria-label="Back to learners">
        <div class="logo-icon">N</div><div class="logo-title">Family Overview</div>
      </button>
      <button class="btn btn-secondary" id="choose-learner-btn">Choose a Learner</button>
    </header>
    <main class="container">
      ${state.familyOverviewLoading ? '<p>Loading family…</p>' : ''}
      ${state.familyError ? `<p role="alert" style="color: var(--pink);">${escapeHtml(state.familyError)}</p>` : ''}
      ${state.familyNotice ? `<p role="status" style="color: var(--lime); margin-bottom: 16px;">${escapeHtml(state.familyNotice)}</p>` : ''}
      ${overview ? `
        <section class="hero-card" style="margin-bottom: 28px;">
          <div class="hero-text"><div class="hero-tag">Family workspace</div>
          <h1 class="hero-title">${escapeHtml(overview.family.name)}</h1>
          <p class="hero-subtitle">Members, invitations, and progress across every language.</p></div>
        </section>

        <section class="family-play-launch" aria-labelledby="family-play-launch-title">
          <div>
            <div class="hero-tag">Shared family voyage</div>
            <h2 id="family-play-launch-title">${state.familyPlayState?.activeSession ? 'Family session in progress' : `Ready for voyage day ${(state.familyPlayState?.completedDays || 0) + 1}`}</h2>
            <p>Independent practice stays personal. This shared position moves only when an adult chooses Complete for Family.</p>
          </div>
          ${state.familyPlayState?.activeSession ? `
            <div class="family-play-active-summary">
              <strong>Voyage day ${state.familyPlayState.activeSession.voyageDay}</strong>
              <span>${escapeHtml(state.familyPlayState.activeSession.status)} · Part ${(state.familyPlayState.activeSession.currentSegment || 0) + 1}</span>
              <button class="btn btn-primary" id="continue-family-play-btn">Continue Family Play →</button>
            </div>` : `
            <fieldset class="family-play-roster">
              <legend>Who is learning together?</legend>
              ${overview.learners.map(learner => `<label>
                <input type="checkbox" name="family-participant" value="${escapeHtml(learner.id)}" checked>
                <span>${escapeHtml(learner.name)}</span>
              </label>`).join('') || '<p>Add a learner before starting Family Play.</p>'}
            </fieldset>
            <button class="btn btn-primary" id="start-family-play-btn" ${overview.learners.length ? '' : 'disabled'}>Start Family Session →</button>`}
        </section>

        <section style="margin-bottom: 32px;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px;">
            <h2 class="section-title" style="margin:0;">Parents & Members</h2>
            <button class="btn btn-secondary" id="overview-invite-partner-btn">Invite Adult Partner</button>
          </div>
          <div class="kids-progress-grid">
            ${overview.members.map(member => `<article class="kid-progress-card">
              <div class="kid-progress-header">${escapeHtml(member.name)}</div>
              <div class="kid-progress-stats"><div>${escapeHtml(member.email)}</div><div>${escapeHtml(roleLabel(member.role))}</div></div>
            </article>`).join('')}
          </div>
          ${overview.pendingInvitations.length ? `<h3 class="section-title" style="margin-top:20px;">Pending invitations</h3>
            <div class="kids-progress-grid">${overview.pendingInvitations.map(invite => `<article class="kid-progress-card">
              <div class="kid-progress-header">${escapeHtml(invite.email)}</div>
              <div class="kid-progress-stats"><div>${escapeHtml(roleLabel(invite.role))}</div><div>Expires ${new Date(invite.expiresAt).toLocaleDateString()}</div></div>
            </article>`).join('')}</div>` : ''}
        </section>

        <section>
          <h2 class="section-title">Learner Progress</h2>
          <div class="kids-progress-grid">
            ${overview.learners.map(learner => {
              const byPack = new Map(learner.progress.map(progress => [progress.packId, progress]));
              return `<article class="kid-progress-card">
                <div class="kid-progress-header">${escapeHtml(learner.name)} ${learner.linked ? '<span style="color:var(--teal);font-size:12px;">✓ Sign-in linked</span>' : ''}</div>
                <div class="kid-progress-stats">
                  ${state.languagePacks.map(pack => {
                    const progress = byPack.get(pack.id) || { stars: 0, completedLessons: 0, activeDays: 0 };
                    return `<div><strong>${escapeHtml(PACK_NAMES[pack.id] || pack.targetLanguage.name)}</strong>: ${progress.completedLessons}/200 lessons · ${progress.activeDays} active days · ${progress.stars} stars</div>`;
                  }).join('')}
                </div>
              </article>`;
            }).join('') || '<p>No learners have been added yet.</p>'}
          </div>
        </section>` : ''}
    </main>`;

  container.querySelector('#family-back-btn')?.addEventListener('click', actions.goProfileSelect);
  container.querySelector('#choose-learner-btn')?.addEventListener('click', actions.goProfileSelect);
  container.querySelector('#overview-invite-partner-btn')?.addEventListener('click', async () => {
    const email = prompt("Enter your partner's Google account email:");
    if (email?.trim()) await actions.invitePartner(email.trim(), true);
  });
  container.querySelector('#start-family-play-btn')?.addEventListener('click', async () => {
    const participantIds = [...container.querySelectorAll('input[name="family-participant"]:checked')]
      .map(input => input.value);
    if (!participantIds.length) {
      window.alert('Select at least one learner for Family Play.');
      return;
    }
    await actions.startFamilySession(participantIds);
  });
  container.querySelector('#continue-family-play-btn')?.addEventListener('click', actions.openFamilySession);
}
