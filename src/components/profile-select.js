import { LEARNERS, GUIDES } from '../engine/progress-store.js';

export function renderProfileSelect(container, onSelectProfile) {
  container.innerHTML = `
    <div class="profile-selection">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <div class="logo-icon" style="width: 56px; height: 56px; font-size: 20px;">CG</div>
        <h1 style="font-size: 32px; letter-spacing: -0.5px;">Učimo Crnogorski</h1>
        <p style="color: var(--text-muted); font-size: 16px;">Who is ready to learn today?</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px; width: 100%; max-width: 480px;">
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

  LEARNERS.forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'profile-btn';
    btn.innerText = `I'm ${name}`;
    btn.addEventListener('click', () => onSelectProfile(name));
    learnersGrid.appendChild(btn);
  });

  GUIDES.forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'profile-btn';
    btn.style.borderColor = 'var(--pink)';
    btn.style.color = 'var(--text-main)';
    btn.innerText = `${name}`;
    btn.addEventListener('click', () => onSelectProfile(name));
    guidesGrid.appendChild(btn);
  });
}
