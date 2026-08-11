import { createSeededRandom, generateSession, LANGUAGE_PACK } from '../engine/learning-engine.js';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[char]);
}

function renderSharedContent(step) {
  const items = step.items || step.dialogue?.lines || [];
  if (items.length) {
    return `<div class="family-play-phrases">
      ${items.slice(0, 8).map((item, index) => {
        const target = item.targetText || item.target || item.text || item.line || '';
        const support = item.supportText || item.support || item.translation || '';
        return `<article class="family-play-phrase">
          <div><strong>${escapeHtml(target)}</strong>${support ? `<small>${escapeHtml(support)}</small>` : ''}</div>
          ${target ? `<button class="dialogue-play-btn" data-family-audio="${index}" aria-label="Play ${escapeHtml(target)}">►</button>` : ''}
        </article>`;
      }).join('')}
    </div>`;
  }
  if (step.note) return `<div class="family-play-note">${escapeHtml(step.note)}</div>`;
  if (step.quiz?.questions?.length) {
    return `<div class="family-play-challenge"><span>Family challenge</span><strong>${escapeHtml(step.quiz.questions[0].promptText)}</strong><p>Take turns answering aloud. The parent can replay or discuss before moving on.</p></div>`;
  }
  if (step.match?.tiles?.length) {
    return `<div class="family-play-challenge"><span>Family challenge</span><strong>Match the words aloud together</strong><p>Each person chooses a pair and explains it before the parent moves forward.</p></div>`;
  }
  return `<div class="family-play-challenge"><span>Speak together</span><strong>${escapeHtml(step.subtitle || 'Practice this section as a family.')}</strong></div>`;
}

export function renderFamilyPlayView(container, state, actions) {
  const cloudSession = state.familyPlayState?.activeSession;
  const lesson = state.activeLesson;
  if (!cloudSession || !lesson) {
    container.innerHTML = '<main class="container"><p role="alert">This Family Play session is no longer active.</p><button class="btn btn-secondary" id="family-play-back">Return</button></main>';
    container.querySelector('#family-play-back').addEventListener('click', actions.goFamilyOverview);
    return;
  }

  const steps = generateSession(lesson, [], {
    random: createSeededRandom(`${cloudSession.id}:${lesson.id}`),
  });
  const stepIndex = Math.min(cloudSession.currentSegment || 0, steps.length - 1);
  const step = steps[stepIndex];
  const isAdult = state.families?.[0]?.role === 'owner' || state.families?.[0]?.role === 'adult_guide';
  const isLast = stepIndex === steps.length - 1;
  const items = step.items || step.dialogue?.lines || [];

  container.innerHTML = `
    <header class="navbar family-play-nav">
      <button class="logo" id="family-play-exit" aria-label="Leave Family Play">
        <div class="logo-icon">${LANGUAGE_PACK.targetLanguage.code.toUpperCase()}</div>
        <div><div class="logo-title">Family Play</div><small>Voyage day ${cloudSession.voyageDay}</small></div>
      </button>
      <div class="family-play-live"><i></i>${cloudSession.status === 'paused' ? 'Paused' : 'Together now'}</div>
    </header>
    <main class="family-play-stage">
      <div class="family-play-scene" aria-hidden="true"></div>
      <section class="family-play-panel" aria-labelledby="family-play-title">
        <div class="family-play-meta">
          <span>${escapeHtml(lesson.title)}</span>
          <span>Part ${stepIndex + 1} of ${steps.length}</span>
        </div>
        <div class="session-steps-bar" role="progressbar" aria-valuenow="${stepIndex + 1}" aria-valuemin="1" aria-valuemax="${steps.length}">
          ${steps.map((_, index) => `<div class="session-step-segment ${index <= stepIndex ? 'active' : ''}"></div>`).join('')}
        </div>
        <p class="hero-tag">${isAdult ? 'Lead this together' : 'Follow the family lesson'}</p>
        <h1 id="family-play-title">${escapeHtml(step.title)}</h1>
        <p class="family-play-subtitle">${escapeHtml(step.subtitle)}</p>
        ${renderSharedContent(step)}
        <div class="family-play-participants" aria-label="Participants">
          ${cloudSession.participants.map(person => `<span class="${person.status === 'joined' || person.status === 'credited' ? 'joined' : ''}">${escapeHtml(person.name)} · ${escapeHtml(person.status)}</span>`).join('')}
        </div>
        ${isAdult ? `<div class="family-play-controls">
          <button class="btn btn-secondary" id="family-play-prev" ${stepIndex === 0 ? 'disabled' : ''}>← Back</button>
          <button class="btn btn-secondary" id="family-play-audio">► Play all</button>
          <button class="btn btn-secondary" id="family-play-pause">${cloudSession.status === 'paused' ? 'Resume' : 'Pause'}</button>
          ${isLast
            ? '<button class="btn btn-primary family-complete-btn" id="family-play-complete">✓ Complete for Family</button>'
            : '<button class="btn btn-primary" id="family-play-next">Next →</button>'}
        </div>` : '<p class="family-play-following">The parent controls this shared lesson. You can answer, read, and speak along.</p>'}
      </section>
    </main>`;

  container.querySelector('#family-play-exit').addEventListener('click', isAdult ? actions.goFamilyOverview : actions.goDashboard);
  container.querySelectorAll('[data-family-audio]').forEach(button => {
    button.addEventListener('click', () => {
      const item = items[Number(button.dataset.familyAudio)];
      actions.speak(item?.targetText || item?.target || item?.text || item?.line || '');
    });
  });
  container.querySelector('#family-play-audio')?.addEventListener('click', () => {
    const target = items.map(item => item.targetText || item.target || item.text || item.line).filter(Boolean).join('. ');
    if (target) actions.speak(target);
  });
  container.querySelector('#family-play-prev')?.addEventListener('click', () => actions.controlFamilySession('live', stepIndex - 1));
  container.querySelector('#family-play-next')?.addEventListener('click', () => actions.controlFamilySession('live', stepIndex + 1));
  container.querySelector('#family-play-pause')?.addEventListener('click', () => actions.controlFamilySession(cloudSession.status === 'paused' ? 'live' : 'paused', stepIndex));
  container.querySelector('#family-play-complete')?.addEventListener('click', actions.completeFamilySession);
}
