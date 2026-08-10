import { getProfiles, addLearnerProfile } from '../engine/progress-store.js';
import { isConfigured, signInWithGoogle, signOut } from '../engine/supabase-client.js';

export function renderProfileSelect(container, state, actions) {
  const storedProfiles = getProfiles();
  // Cloud family workspaces must never inherit prototype/local-only identities
  // that may remain in this browser from an older Nautilus build.
  const profiles = isConfigured && state.sessionUser
    ? storedProfiles.filter(profile => !String(profile.id).startsWith('local-'))
    : storedProfiles;
  const learners = profiles.filter(p => !p.isGuide);
  const guides = profiles.filter(p => p.isGuide);
  const canManageFamily = state.families?.some(
    family => family.role === 'owner' || family.role === 'adult_guide'
  );

  const authHeaderHtml = isConfigured
    ? state.sessionUser
      ? `<div style="text-align: center; font-size: 13px; color: var(--text-muted); margin-bottom: 24px; display: flex; flex-direction: column; gap: 4px; align-items: center;">
           <span>Family Account: <strong>${state.sessionUser.email}</strong></span>
           <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-top: 6px;">
             ${state.families?.some(family => family.role === 'owner' || family.role === 'adult_guide')
               ? '<button class="btn btn-secondary" id="family-overview-btn" style="padding: 4px 12px; font-size: 12px;">Family Overview</button><button class="btn btn-secondary" id="invite-partner-btn" style="padding: 4px 12px; font-size: 12px;">Invite Adult Partner</button>'
               : ''}
             <button class="btn btn-secondary" id="logout-btn" style="padding: 4px 12px; font-size: 12px; border-color: var(--pink); color: var(--pink);">Sign Out</button>
           </div>
         </div>`
      : `<div style="text-align: center; margin-bottom: 24px; width: 100%;">
           <button class="btn btn-secondary" id="login-btn" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;">
             <span>🔑</span> Sign in with Google (Family Cloud Sync)
           </button>
         </div>`
    : `<div style="text-align: center; font-size: 12px; color: var(--text-muted); margin-bottom: 24px; border: 1px dashed var(--border-color); padding: 8px; border-radius: 8px;">
         ⚠️ Supabase is not configured (Local-Only Mode active)
       </div>`;

  const signedOut = isConfigured && !state.sessionUser;
  const needsFamily = state.sessionUser && Array.isArray(state.families) && state.families.length === 0;
  const loadingFamily = state.sessionUser && state.families === null && !state.familyError;

  if (signedOut) {
    container.innerHTML = `
      <div class="profile-selection">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 16px; text-align: center;">
          <div class="logo-icon" style="width: 56px; height: 56px; font-size: 20px;">N</div>
          <h1 style="font-size: 32px; letter-spacing: -0.5px;">Welcome to Nautilus</h1>
          <p style="color: var(--text-muted); font-size: 16px; max-width: 440px;">Create a private family learning space or sign in to one you have joined.</p>
        </div>
        <div style="width: 100%; max-width: 480px;">${authHeaderHtml}</div>
      </div>`;
    container.querySelector('#login-btn')?.addEventListener('click', async () => {
      try {
        await signInWithGoogle();
      } catch (err) {
        alert(`Google login failed: ${err.message}`);
      }
    });
    return;
  }

  if (loadingFamily || needsFamily) {
    container.innerHTML = `
      <div class="profile-selection">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 16px; text-align: center;">
          <div class="logo-icon" style="width: 56px; height: 56px; font-size: 20px;">N</div>
          <h1 style="font-size: 32px; letter-spacing: -0.5px;">${loadingFamily ? 'Loading your family…' : 'Create your family'}</h1>
          ${needsFamily ? '<p style="color: var(--text-muted); font-size: 16px; max-width: 440px;">Your family workspace keeps learners, progress, and language preferences together.</p>' : ''}
        </div>
        <div style="width: 100%; max-width: 480px;">
          ${authHeaderHtml}
          ${state.familyError ? `<p role="alert" style="color: var(--pink); margin-bottom: 16px;">${state.familyError}</p>` : ''}
          ${needsFamily ? `
            <form id="family-setup-form" style="display: flex; flex-direction: column; gap: 12px;">
              <label for="family-name" style="font-weight: 700;">Family name</label>
              <input id="family-name" required maxlength="80" autocomplete="organization" placeholder="Your family name" style="min-height: 48px; border-radius: 12px; border: 1px solid var(--border-color); background: var(--surface); color: var(--text-main); padding: 0 14px; font: inherit;">
              <button class="btn btn-primary" type="submit">Create Family Workspace</button>
            </form>` : ''}
        </div>
      </div>`;

    container.querySelector('#family-setup-form')?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = container.querySelector('#family-name').value.trim();
      if (name) await actions.createFamily(name);
    });
    container.querySelector('#logout-btn')?.addEventListener('click', async () => {
      await signOut();
      actions.refresh();
    });
    return;
  }

  container.innerHTML = `
    <div class="profile-selection">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <div class="logo-icon" style="width: 56px; height: 56px; font-size: 20px;">N</div>
        <h1 style="font-size: 32px; letter-spacing: -0.5px;">Choose a Learner</h1>
        <p style="color: var(--text-muted); font-size: 16px;">Who is ready to learn today?</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px; width: 100%; max-width: 480px;">
        ${authHeaderHtml}
        ${state.familyError ? `<p role="alert" style="color: var(--pink); margin-bottom: 16px;">${state.familyError}</p>` : ''}
        ${state.familyNotice ? `<p role="status" style="color: var(--teal); margin-bottom: 16px;">${state.familyNotice}</p>` : ''}

        <div>
          <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 12px;">Learners</div>
          <div class="profile-grid" id="learners-grid"></div>
        </div>

        <div style="margin-top: 12px;">
          <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 12px;">Parents & Guides</div>
          <div class="profile-grid" id="guides-grid"></div>
        </div>
      </div>
    </div>
  `;

  const learnersGrid = container.querySelector('#learners-grid');
  const guidesGrid = container.querySelector('#guides-grid');

  // Render Learners
  learners.forEach(p => {
    const card = document.createElement('div');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.gap = '8px';
    const btn = document.createElement('button');
    btn.className = 'profile-btn';
    btn.innerText = `I'm ${p.name}`;
    btn.addEventListener('click', () => actions.switchProfile(p.name));
    card.appendChild(btn);

    if (canManageFamily && !p.linkedUserId) {
      const inviteBtn = document.createElement('button');
      inviteBtn.className = 'btn btn-secondary';
      inviteBtn.style.fontSize = '12px';
      inviteBtn.style.padding = '6px 10px';
      inviteBtn.innerText = `Invite ${p.name} to Sign In`;
      inviteBtn.addEventListener('click', async () => {
        const email = prompt(`Enter ${p.name}'s Google account email:`);
        if (email?.trim()) await actions.inviteLearner(p.id, p.name, email.trim());
      });
      card.appendChild(inviteBtn);
    } else if (p.linkedUserId) {
      const linked = document.createElement('span');
      linked.style.cssText = 'font-size: 12px; color: var(--teal); text-align: center;';
      linked.innerText = '✓ Google sign-in linked';
      card.appendChild(linked);
    }

    learnersGrid.appendChild(card);
  });

  // Render Guides
  guides.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'profile-btn';
    btn.style.borderColor = 'var(--pink)';
    btn.style.color = 'var(--text-main)';
    btn.innerText = `${p.name}`;
    btn.addEventListener('click', () => actions.switchProfile(p.name));
    guidesGrid.appendChild(btn);
  });

  // Render Add Profile Button (available for anyone to create localized profiles)
  const addProfileBtn = document.createElement('button');
  addProfileBtn.className = 'profile-btn';
  addProfileBtn.style.borderStyle = 'dashed';
  addProfileBtn.style.borderColor = 'var(--border-color)';
  addProfileBtn.style.color = 'var(--text-muted)';
  addProfileBtn.style.fontSize = '14px';
  addProfileBtn.innerText = state.sessionUser ? '+ Add Learner' : '+ Add Profile';

  addProfileBtn.addEventListener('click', async () => {
    const name = prompt('Enter profile name:');
    if (!name || name.trim() === '') return;
    const isGuide = state.sessionUser
      ? false
      : confirm('Is this profile a Parent/Guide? (Cancel for Learner)');

    try {
      await addLearnerProfile(name.trim(), isGuide);
      actions.refresh();
    } catch (err) {
      alert(`Error creating profile: ${err.message}`);
    }
  });

  // Append add profile button to learners grid by default
  learnersGrid.appendChild(addProfileBtn);

  // Hook login/logout clicks
  const loginBtn = container.querySelector('#login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', async () => {
      try {
        await signInWithGoogle();
      } catch (err) {
        alert(`Google login failed: ${err.message}`);
      }
    });
  }

  const logoutBtn = container.querySelector('#logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      try {
        await signOut();
        actions.refresh();
      } catch (err) {
        alert(`Logout failed: ${err.message}`);
      }
    });
  }

  const invitePartnerBtn = container.querySelector('#invite-partner-btn');
  if (invitePartnerBtn) {
    invitePartnerBtn.addEventListener('click', async () => {
      const email = prompt("Enter your partner's Google account email:");
      if (email?.trim()) await actions.invitePartner(email.trim());
    });
  }
  container.querySelector('#family-overview-btn')?.addEventListener('click', actions.goFamilyOverview);
}
