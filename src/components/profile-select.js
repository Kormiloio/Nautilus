import { getProfiles, addLearnerProfile } from '../engine/progress-store.js';
import { isConfigured, signInWithGoogle, signOut } from '../engine/supabase-client.js';

export function renderProfileSelect(container, state, actions) {
  const profiles = getProfiles();
  const learners = profiles.filter(p => !p.isGuide);
  const guides = profiles.filter(p => p.isGuide);

  const authHeaderHtml = isConfigured
    ? state.sessionUser
      ? `<div style="text-align: center; font-size: 13px; color: var(--text-muted); margin-bottom: 24px; display: flex; flex-direction: column; gap: 4px; align-items: center;">
           <span>Family Account: <strong>${state.sessionUser.email}</strong></span>
           <button class="btn btn-secondary" id="logout-btn" style="padding: 4px 12px; font-size: 12px; border-color: var(--pink); color: var(--pink);">Sign Out</button>
         </div>`
      : `<div style="text-align: center; margin-bottom: 24px; width: 100%;">
           <button class="btn btn-secondary" id="login-btn" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;">
             <span>🔑</span> Sign in with Google (Family Cloud Sync)
           </button>
         </div>`
    : `<div style="text-align: center; font-size: 12px; color: var(--text-muted); margin-bottom: 24px; border: 1px dashed var(--border-color); padding: 8px; border-radius: 8px;">
         ⚠️ Supabase is not configured (Local-Only Mode active)
       </div>`;

  container.innerHTML = `
    <div class="profile-selection">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <div class="logo-icon" style="width: 56px; height: 56px; font-size: 20px;">CG</div>
        <h1 style="font-size: 32px; letter-spacing: -0.5px;">Učimo Crnogorski</h1>
        <p style="color: var(--text-muted); font-size: 16px;">Who is ready to learn today?</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px; width: 100%; max-width: 480px;">
        ${authHeaderHtml}

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
    const btn = document.createElement('button');
    btn.className = 'profile-btn';
    btn.innerText = `I'm ${p.name}`;
    btn.addEventListener('click', () => actions.switchProfile(p.name));
    learnersGrid.appendChild(btn);
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
  addProfileBtn.innerText = '+ Add Profile';

  addProfileBtn.addEventListener('click', async () => {
    const name = prompt('Enter profile name:');
    if (!name || name.trim() === '') return;
    const isGuide = confirm('Is this profile a Parent/Guide? (Cancel for Learner)');

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
}
