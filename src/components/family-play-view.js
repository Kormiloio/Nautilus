import { getTopic, LANGUAGE_PACK } from '../engine/learning-engine.js';
import { buildFamilyPlaySteps } from '../engine/family-play-session.js';
import { getImmersiveLessonScene } from './lesson-visuals.js';
import { getParticipantConnectionState } from '../engine/family-play-readiness.js';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[char]);
}

function renderSharedContent(step, turnPerson) {
  if (step.type === 'ready') {
    return `<div class="family-ready-call"><span aria-hidden="true">⚓</span><div><strong>Gather your crew</strong><p>Open Family Play on each learner's device. When everyone shows Ready, the parent can begin.</p></div></div>`;
  }
  const turnPrompt = turnPerson ? `<div class="family-turn-prompt"><span>${escapeHtml(turnPerson.name).slice(0, 1)}</span><div><small>It’s your turn</small><strong>${escapeHtml(turnPerson.name)}, lead this round—then everyone joins in.</strong></div></div>` : '';
  if (step.type === 'family-flashcards') {
    return `<div class="family-activity-instructions"><strong>How to play</strong><span>The highlighted learner says each word first. Everyone repeats it, then the parent taps the audio button if help is needed.</span></div>
      <div class="family-vocabulary-grid">${step.items.map((item, index) => `<article><span>${item.emoji || '✦'}</span><div><strong>${escapeHtml(item.targetText)}</strong><small>${escapeHtml(item.supportText)}</small></div><button class="dialogue-play-btn" data-family-audio="${index}" aria-label="Play ${escapeHtml(item.targetText)}">►</button></article>`).join('')}</div>`;
  }
  if (step.type === 'family-match') {
    return `${turnPrompt}<div class="family-activity-instructions"><strong>Oral matching round</strong><span>One learner chooses a word. The other finds its numbered meaning. Say the pair aloud before moving to the next.</span></div>
      <div class="family-match-board"><div>${step.items.map((item, index) => `<span><b>${index + 1}</b>${escapeHtml(item.targetText)}</span>`).join('')}</div><div>${[...step.items].reverse().map((item, index) => `<span><b>${String.fromCharCode(65 + index)}</b>${escapeHtml(item.supportText)}</span>`).join('')}</div></div>`;
  }
  if (step.type === 'family-quiz') {
    return `${turnPrompt}<div class="family-quiz-card"><small>What is the best translation?</small><strong>${escapeHtml(step.item.supportText)}</strong><div>${step.options.map(option => `<button type="button" class="family-answer" data-family-answer="${escapeHtml(option.id)}" data-correct="${option.id === step.item.id}">${escapeHtml(option.targetText)}</button>`).join('')}</div><p class="family-answer-feedback" aria-live="polite">Choose together, then check your answer.</p></div>`;
  }
  if (step.type === 'family-conversation') {
    return `<div class="family-conversation-card">${turnPrompt}<div class="family-conversation-phrase"><small>Phrase for this round</small><strong>${escapeHtml(step.item.targetText)}</strong><span>${escapeHtml(step.item.supportText)}</span></div><ol><li><strong>Ask:</strong> Use the word in a question for another learner.</li><li><strong>Answer:</strong> Reply with the word or a short sentence.</li><li><strong>Ask a parent:</strong> “When would our family say this?”</li><li><strong>Switch roles:</strong> The listener asks the next question.</li></ol></div>`;
  }
  if (step.type === 'family-reflection') {
    return `<div class="family-reflection-card"><strong>One final phrase from everyone</strong><p>Each person chooses one phrase, says what it means, and uses it in a family example.</p><div>${step.items.map(item => `<button class="dialogue-play-btn family-reflection-phrase" data-reflection-audio="${escapeHtml(item.targetText)}">${escapeHtml(item.targetText)} <small>${escapeHtml(item.supportText)}</small></button>`).join('')}</div><span>When everyone has spoken, the parent completes this family day.</span></div>`;
  }
  const items = step.items || step.dialogue?.lines || [];
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

  const topic = getTopic(lesson.topicId);
  const steps = buildFamilyPlaySteps(lesson, topic, cloudSession.id);
  const stepIndex = Math.min(cloudSession.currentSegment || 0, steps.length - 1);
  const step = steps[stepIndex];
  const isAdult = !state.linkedLearnerProfileId && (state.families?.[0]?.role === 'owner' || state.families?.[0]?.role === 'adult_guide');
  const isController = isAdult && cloudSession.controllingAdult === state.sessionUser?.id;
  const otherAdults = (state.familyOverview?.members || []).filter(member =>
    (member.role === 'owner' || member.role === 'adult_guide') && member.userId !== state.sessionUser?.id
  );
  const isLast = stepIndex === steps.length - 1;
  const items = step.items || (step.item ? [step.item] : []);
  const participantStates = cloudSession.participants.map(person => ({ ...person, connectionState: getParticipantConnectionState(person) }));
  const joinedParticipants = participantStates.filter(person => person.connectionState === 'connected' || person.connectionState === 'completed');
  const everyoneReady = joinedParticipants.length === cloudSession.participants.length && joinedParticipants.length > 0;
  const turnPerson = step.type === 'ready' || !cloudSession.participants.length
    ? null
    : cloudSession.participants[(stepIndex - 1) % cloudSession.participants.length];
  const scene = getImmersiveLessonScene(lesson.topicId);
  const sceneSrc = scene?.src || `${import.meta.env.BASE_URL}assets/illustrations/nautilus-voyage-panorama-v3.jpg`;

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
          ${participantStates.map(person => {
            const ready = person.connectionState === 'connected' || person.connectionState === 'completed';
            const activeTurn = turnPerson?.profileId === person.profileId;
            const statusText = { connected: 'Connected · Ready', completed: 'Completed', reconnecting: 'Reconnecting…', waiting: 'Open Shared Lesson', unlinked: 'Google sign-in not linked' }[person.connectionState];
            return `<div class="family-crew-person ${ready ? 'ready' : ''} ${person.connectionState} ${activeTurn ? 'speaking' : ''}"><span>${escapeHtml(person.name).slice(0, 1)}</span><div><strong>${escapeHtml(person.name)}</strong><small>${activeTurn ? 'Speaking now' : statusText}</small></div></div>`;
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
        </div>${step.type === 'ready' && !everyoneReady ? `<div class="family-ready-help" id="family-ready-help"><strong>Waiting for the crew</strong><span>On each learner device: sign in with the linked Google account → open Nautilus → choose Open Shared Lesson. Reconnecting devices will recover automatically.</span><button class="btn btn-secondary" id="family-refresh-status">Refresh connections</button></div>` : ''}` : '<p class="family-play-following"><strong>You are connected.</strong> The parent controls this shared lesson. Keep this page open; if the connection drops, Nautilus will rejoin automatically.</p>'}
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
  container.querySelectorAll('[data-reflection-audio]').forEach(button => button.addEventListener('click', () => actions.speak(button.dataset.reflectionAudio)));
  container.querySelectorAll('[data-family-answer]').forEach(button => button.addEventListener('click', () => {
    const card = button.closest('.family-quiz-card');
    card.querySelectorAll('.family-answer').forEach(answer => answer.classList.toggle('correct', answer.dataset.correct === 'true'));
    card.querySelector('.family-answer-feedback').textContent = button.dataset.correct === 'true' ? 'Correct! Everyone say the answer aloud.' : 'Good try. Find the highlighted answer and say it together.';
  }));
  container.querySelector('#family-play-audio')?.addEventListener('click', () => {
    const target = items.map(item => item.targetText || item.target || item.text || item.line).filter(Boolean).join('. ');
    if (target) actions.speak(target);
  });
  container.querySelector('#family-play-prev')?.addEventListener('click', () => actions.controlFamilySession('live', stepIndex - 1));
  container.querySelector('#family-play-next')?.addEventListener('click', () => actions.controlFamilySession('live', stepIndex + 1));
  container.querySelector('#family-play-pause')?.addEventListener('click', () => actions.controlFamilySession(cloudSession.status === 'paused' ? 'live' : 'paused', stepIndex));
  container.querySelector('#family-play-complete')?.addEventListener('click', actions.completeFamilySession);
  container.querySelector('#family-refresh-status')?.addEventListener('click', actions.refreshFamilySession);
  container.querySelector('#family-take-control')?.addEventListener('click', actions.claimFamilyController);
  container.querySelector('#family-handoff-select')?.addEventListener('change', event => {
    if (event.target.value) actions.handoffFamilyController(event.target.value);
  });
}
