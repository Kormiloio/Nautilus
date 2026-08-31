import { LANGUAGE_PACK } from '../engine/learning-engine.js';
import { renderLanguageRun } from '../engine/language-runs.js';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, character => ({
    '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;',
  })[character]);
}

export function renderSideQuestView(container, state, actions) {
  const quest = state.sideQuest;
  if (!quest || quest.locked) {
    actions.goDashboard();
    return;
  }
  container.innerHTML = `
    <header class="navbar side-quest-navbar">
      <button class="logo" id="side-quest-home"><div class="logo-icon">⚓</div><div class="logo-title">Nautilus Side Quest</div></button>
      <button class="btn btn-secondary btn-pill" id="side-quest-back">← Back to Dashboard</button>
    </header>
    <main class="side-quest-world">
      <section class="side-quest-panel" aria-labelledby="side-quest-title">
        <div class="hero-tag">${escapeHtml(quest.eyebrow)} · unlocked at lesson ${quest.milestone}</div>
        <h1 id="side-quest-title">${escapeHtml(quest.title)}</h1>
        <p class="side-quest-subtitle">${escapeHtml(quest.subtitle)}</p>
        <div class="side-quest-warning"><strong>Before you open the cards</strong><span>${escapeHtml(quest.warning)}</span></div>
        <div class="side-quest-cards">
          ${quest.items.map((item,index) => `<button class="side-quest-card" data-side-quest-card aria-expanded="false">
            <span class="side-quest-card__number">${String(index + 1).padStart(2,'0')}</span>
            <span class="side-quest-card__front"><small>${escapeHtml(item.strength)}</small><strong>${renderLanguageRun(item.targetText,'target',LANGUAGE_PACK,item)}</strong><em>Tap to decode</em></span>
            <span class="side-quest-card__back"><strong>${escapeHtml(item.supportText)}</strong><span>${escapeHtml(item.context)}</span></span>
          </button>`).join('')}
        </div>
        <p class="side-quest-note">${escapeHtml(quest.note)}</p>
        <button class="btn btn-primary" id="side-quest-finish">Stow the cargo →</button>
      </section>
    </main>`;
  const goBack = () => actions.goDashboard();
  container.querySelector('#side-quest-home').addEventListener('click', goBack);
  container.querySelector('#side-quest-back').addEventListener('click', goBack);
  container.querySelector('#side-quest-finish').addEventListener('click', goBack);
  container.querySelectorAll('[data-side-quest-card]').forEach(card => card.addEventListener('click', () => {
    const revealed = card.classList.toggle('revealed');
    card.setAttribute('aria-expanded', String(revealed));
  }));
}
