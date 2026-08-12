import { createSeededRandom, generateSession, LANGUAGE_PACK } from '../engine/learning-engine.js';
import { getImmersiveLessonScene } from './lesson-visuals.js';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[char]);
}

function renderSharedContent(step, turnPerson) {
  if (step.type === 'ready') {
    return `<div class="family-ready-call"><span aria-hidden="true">⚓</span><div><strong>Gather your crew</strong><p>Open Family Play on each learner's device. When everyone shows Ready, the parent can begin.</p></div></div>`;
  }
  const items = step.items || step.dialogue?.lines || [];
  const turnPrompt = turnPerson ? `<div class="family-turn-prompt"><span>${escapeHtml(turnPerson.name).slice(0, 1)}</span><div><small>It’s your turn</small><strong>${escapeHtml(turnPerson.name)}, say it first—then everyone together.</strong></div></div>` : '';
  if (items.length) {
    return `${turnPrompt}<div class="family-play-phrases">
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
  if (step.note) return `${turnPrompt}<div class="family-play-note">${escapeHtml(step.note)}</div>`;
  if (step.quiz?.questions?.length) {
    return `${turnPrompt}<div class="family-play-challenge"><span>Family challenge</span><strong>${escapeHtml(step.quiz.questions[0].promptText)}</strong><p>Take turns answering aloud. The parent can replay or discuss before moving on.</p></div>`;
  }
  if (step.match?.tiles?.length) {
    return `${turnPrompt}<div class="family-play-challenge"><span>Family challenge</span><strong>Match the words aloud together</strong><p>Each person chooses a pair and explains it before the parent moves forward.</p></div>`;
  }
  return `${turnPrompt}<div class="family-play-challenge"><span>Speak together</span><strong>${escapeHtml(step.subtitle || 'Practice this section as a family.')}</strong></div>`;
}

export function renderFamilyPlayView(container, state, actions) {
  const cloudSession = state.familyPlayState?.activeSession;
  const lesson = state.activeLesson;
  if (!cloudSession || !lesson) {
    container.innerHTML = '<main class="container"><p role="alert">This Family Play session is no longer active.</p><button class="btn btn-secondary" id="family-play-back">Return</button></main>';
    container.querySelector('#family-play-back').addEventListener('click', actions.goFamilyOverview);
    return;
  }

  const lessonSteps = generateSession(lesson, [], {
    random: createSeededRandom(`${cloudSession.id}:${lesson.id}`),
  });
  const steps = [{ type: 'ready', title: 'Is everyone ready?', subtitle: 'Join on each device before setting sail together.' }, ...lessonSteps];
  const stepIndex = Math.min(cloudSession.currentSegment || 0, steps.length - 1);
  const step = steps[stepIndex];
  const isAdult = state.families?.[0]?.role === 'owner' || state.families?.[0]?.role === 'adult_guide';
  const isController = isAdult && cloudSession.controllingAdult === state.sessionUser?.id;
  const otherAdults = (state.familyOverview?.members || []).filter(member =>
    (member.role === 'owner' || member.role === 'adult_guide') && member.userId !== state.sessionUser?.id
  );
  const isLast = stepIndex === steps.length - 1;
  const items = step.items || step.dialogue?.lines || [];
  const joinedParticipants = cloudSession.participants.filter(person => person.status === 'joined' || person.status === 'credited');
  const everyoneReady = joinedParticipants.length === cloudSession.participants.length && joinedParticipants.length > 0;
  const turnPerson = step.type === 'ready' || !cloudSession.participants.length
    ? null
    : cloudSession.participants[(stepIndex - 1) % cloudSession.participants.length];
  const scene = getImmersiveLessonScene(lesson.topicId);
  const sceneSrc = scene?.src || `${import.meta.env.BASE_URL}assets/illustrations/nautilus-voyage-panorama-v2.jpg`;

  container.innerHTML = `
    <header class="navbar family-play-nav">
      <button class="logo" id="family-play-exit" aria-label="Leave Family Play">
        <div class="logo-icon">${LANGUAGE_PACK.targetLanguage.code.toUpperCase()}</div>
        <div><div class="logo-title">Family Play</div><small>Voyage day ${cloudSession.voyageDay}</small></div>
      </button>
      <div class="family-play-live"><i></i>${cloudSession.status === 'paused' ? 'Paused' : 'Together now'}</div>
    </header>
    <main class="family-play-stage ${scene ? `family-play-stage--${escapeHtml(lesson.topicId)}` : ''}" style="--family-step:${Math.round(((stepIndex + 1) / steps.length) * 100)}%">
      <img class="family-play-scene" src="${sceneSrc}" alt="" aria-hidden="true">
      <div class="family-play-atmosphere" aria-hidden="true"></div>
      <aside class="family-crew" aria-label="Family Play crew">
        <div class="family-crew__heading"><div><small>Family crew</small><strong>${joinedParticipants.length} of ${cloudSession.participants.length} ready</strong></div><span class="family-crew__signal ${everyoneReady ? 'ready' : ''}"></span></div>
        <div class="family-crew__people">
          ${cloudSession.participants.map(person => {
            const ready = person.status === 'joined' || person.status === 'credited';
            const activeTurn = turnPerson?.profileId === person.profileId;
            return `<div class="family-crew-person ${ready ? 'ready' : ''} ${activeTurn ? 'speaking' : ''}"><span>${escapeHtml(person.name).slice(0, 1)}</span><div><strong>${escapeHtml(person.name)}</strong><small>${activeTurn ? 'Speaking now' : (ready ? 'Ready' : 'Connecting…')}</small></div></div>`;
          }).join('')}
        </div>
        <div class="family-crew__captain"><small>Controller</small><strong>🎛 ${escapeHtml(cloudSession.controllerName || 'Family guide')}</strong>${isController ? '<span>You are leading</span>' : '<span>Following live</span>'}</div>
      </aside>
      <section class="family-play-panel" aria-labelledby="family-play-title">
        <div class="family-play-meta">
          <span>${escapeHtml(lesson.title)}</span>
          <span>Part ${stepIndex + 1} of ${steps.length}</span>
        </div>
        <div class="session-steps-bar" role="progressbar" aria-valuenow="${stepIndex + 1}" aria-valuemin="1" aria-valuemax="${steps.length}">
          ${steps.map((_, index) => `<div class="session-step-segment ${index <= stepIndex ? 'active' : ''}"></div>`).join('')}
        </div>
        <p class="hero-tag">${isController ? 'You are leading' : `Following ${escapeHtml(cloudSession.controllerName || 'the family guide')}`}</p>
        <h1 id="family-play-title">${escapeHtml(step.title)}</h1>
        <p class="family-play-subtitle">${escapeHtml(step.subtitle)}</p>
        ${renderSharedContent(step, turnPerson)}
        ${isController ? `<div class="family-play-controls">
          <button class="btn btn-secondary" id="family-play-prev" ${stepIndex === 0 ? 'disabled' : ''}>← Back</button>
          <button class="btn btn-secondary" id="family-play-audio">► Play all</button>
          <button class="btn btn-secondary" id="family-play-pause">${cloudSession.status === 'paused' ? 'Resume' : 'Pause'}</button>
          ${isLast
            ? '<button class="btn btn-primary family-complete-btn" id="family-play-complete">✓ Complete for Family</button>'
            : `<button class="btn btn-primary" id="family-play-next" ${step.type === 'ready' && !everyoneReady ? 'disabled aria-describedby="family-ready-help"' : ''}>${step.type === 'ready' ? 'Start Together →' : 'Next →'}</button>`}
          ${otherAdults.length ? `<label class="family-handoff">Hand off to
            <select id="family-handoff-select"><option value="">Choose adult…</option>${otherAdults.map(member => `<option value="${member.userId}">${escapeHtml(member.name)}</option>`).join('')}</select>
          </label>` : ''}
        </div>${step.type === 'ready' && !everyoneReady ? '<p class="family-ready-help" id="family-ready-help">Waiting for every learner to open this Family Play session.</p>' : ''}` : '<p class="family-play-following">The parent controls this shared lesson. You can answer, read, and speak along.</p>'}
        ${isAdult && !isController && cloudSession.canTakeControl ? '<button class="btn btn-secondary family-take-control" id="family-take-control">Take Control</button>' : ''}
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
  container.querySelector('#family-take-control')?.addEventListener('click', actions.claimFamilyController);
  container.querySelector('#family-handoff-select')?.addEventListener('change', event => {
    if (event.target.value) actions.handoffFamilyController(event.target.value);
  });
}
