import { getTopic, LANGUAGE_PACK } from '../engine/learning-engine.js';
import { buildFamilyPlaySteps } from '../engine/family-play-session.js';
import { getImmersiveLessonScene } from './lesson-visuals.js';
import { getParticipantConnectionState } from '../engine/family-play-readiness.js';

const familyMatchProgress = new Map();
const quizAdvanceTimers = new Map();

function readMatchedPairs(key) {
  if (familyMatchProgress.has(key)) return familyMatchProgress.get(key);
  let stored = [];
  try { stored = JSON.parse(globalThis.sessionStorage?.getItem(key) || '[]'); } catch { stored = []; }
  const pairs = new Set(Array.isArray(stored) ? stored : []);
  familyMatchProgress.set(key, pairs);
  return pairs;
}

function saveMatchedPairs(key, pairs) {
  familyMatchProgress.set(key, pairs);
  try { globalThis.sessionStorage?.setItem(key, JSON.stringify([...pairs])); } catch { /* in-memory state still persists across renders */ }
}

export function getFamilyQuizFeedback(step, quizState) {
  const answers = quizState?.answers || [];
  const expected = quizState?.expected || 0;
  const currentAnswer = quizState?.currentAnswer?.answerId;
  const allLocked = expected > 0 && answers.length >= expected;
  return {
    allLocked,
    currentAnswer,
    hasCurrentAnswer: Boolean(currentAnswer),
    currentCorrect: Boolean(currentAnswer) && currentAnswer === step.item.id,
    correctAnswer: step.item.targetText,
  };
}

export function getFamilyMatchColor(pairIndex) {
  const colors = ['lime', 'teal', 'blue', 'purple', 'pink', 'amber'];
  return colors[Math.max(0, Number(pairIndex) || 0) % colors.length];
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[char]);
}

function buildConversationScript(step, leader, participants = []) {
  const first = leader?.name || 'Learner 1';
  const partner = participants.find(person => person.profileId !== leader?.profileId)?.name || 'Learner 2';
  const target = step.item.targetText;
  const support = step.item.supportText;
  return [
    { person: first, label: 'Say the new word', target, support },
    { person: partner, label: `Ask ${first}`, target: `What does “${target}” mean?`, support: 'Ask this in English for now.' },
    { person: first, label: `Answer ${partner}`, target: `“${target}” means “${support}.”`, support: `Say the Montenegrin word clearly: ${target}.` },
    { person: 'Everyone', label: 'Say it together', target, support: `Everyone repeats “${target}” once.` },
  ];
}

function renderSharedContent(step, turnPerson, quizState = null, participants = [], familyPeople = [], matchState = null) {
  if (step.type === 'ready') {
    return `<div class="family-ready-call"><span aria-hidden="true">⚓</span><div><strong>Gather your crew</strong><p>Open Family Play on each learner's device. When everyone shows Ready, the parent can begin.</p></div></div>`;
  }
  const turnPrompt = turnPerson ? `<div class="family-turn-prompt"><span>${escapeHtml(turnPerson.name).slice(0, 1)}</span><div><small>It’s your turn</small><strong>${escapeHtml(turnPerson.name)}, lead this round—then everyone joins in.</strong></div></div>` : '';
  if (step.type === 'family-flashcards') {
    return `<div class="family-activity-instructions"><strong>How to play</strong><span>Everyone taps each card on their own screen, says the word, then reveals its meaning. The parent moves on when the family is ready.</span></div>
      <div class="family-vocabulary-grid">${step.items.map((item, index) => `<article><span>${item.emoji || '✦'}</span><button class="family-vocab-reveal" data-family-reveal><strong>${escapeHtml(item.targetText)}</strong><small>${escapeHtml(item.supportText)}</small><em>Tap to reveal</em></button><button class="dialogue-play-btn" data-family-audio="${index}" aria-label="Play ${escapeHtml(item.targetText)}">►</button></article>`).join('')}</div>`;
  }
  if (step.type === 'family-match') {
    const targets = step.targetItems || step.items;
    const supports = step.supportItems || [...step.items].reverse();
    const matched = matchState?.matched || new Set();
    const matchButton = (item, label, text, side) => {
      const isMatched = matched.has(item.id);
      const pairNumber = step.items.findIndex(candidate => candidate.id === item.id) + 1;
      return `<button class="${isMatched ? 'matched' : ''}" data-family-match="${escapeHtml(item.id)}" data-family-match-side="${side}" data-family-match-number="${pairNumber}" data-match-color="${getFamilyMatchColor(pairNumber - 1)}" ${isMatched ? 'disabled' : ''} aria-pressed="${isMatched}"><b>${label}</b>${escapeHtml(text)}${isMatched ? `<span>✓ Pair ${pairNumber}</span>` : ''}</button>`;
    };
    return `${turnPrompt}<div class="family-activity-instructions"><strong>Touch-and-match round</strong><span>On each device, tap one word and then its meaning. Say the pair aloud. Matched choices stay highlighted while the parent keeps the family together.</span></div>
      <div class="family-match-board"><div>${targets.map((item, index) => matchButton(item, index + 1, item.targetText, 'target')).join('')}</div><div>${supports.map((item, index) => matchButton(item, String.fromCharCode(65 + index), item.supportText, 'support')).join('')}</div></div>
      <p class="family-match-status" aria-live="polite"><strong>${matched.size} of ${step.items.length}</strong> pairs complete${matched.size === step.items.length ? ' · Great work!' : ''}</p>`;
  }
  if (step.type === 'family-quiz') {
    const lockedAnswer = quizState?.currentAnswer?.answerId;
    const status = quizState?.answers || [];
    const feedback = getFamilyQuizFeedback(step, quizState);
    const waiting = Math.max(0, (quizState?.expected || 0) - status.length);
    const nextAction = feedback.allLocked ? 'Moving to the next question…' : `Waiting for ${waiting} more…`;
    const feedbackText = feedback.hasCurrentAnswer
      ? feedback.currentCorrect
        ? `✓ Correct! ${feedback.correctAnswer} is the answer. ${nextAction}`
        : `Not quite. The correct answer is ${feedback.correctAnswer}. ${nextAction}`
      : 'Choose once to lock in your answer.';
    return `${turnPrompt}<div class="family-quiz-card"><small>What is the best translation?</small><strong>${escapeHtml(step.item.supportText)}</strong><div>${step.options.map(option => {
      const resultClass = feedback.hasCurrentAnswer && option.id === step.item.id ? 'correct' : feedback.hasCurrentAnswer && lockedAnswer === option.id ? 'incorrect' : '';
      return `<button type="button" class="family-answer ${lockedAnswer === option.id ? 'locked' : ''} ${resultClass}" data-family-answer="${escapeHtml(option.id)}" ${lockedAnswer ? 'disabled' : ''}>${escapeHtml(option.targetText)}${lockedAnswer === option.id ? `<span>${feedback.currentCorrect ? '✓ Correct' : '✕ Your answer'}</span>` : ''}</button>`;
    }).join('')}</div><div class="family-answer-status">${status.map(answer => {
      const resultClass = feedback.allLocked ? (answer.answerId === step.item.id ? 'correct' : 'incorrect') : 'locked';
      const icon = feedback.allLocked ? (answer.answerId === step.item.id ? '✓' : '✕') : '✓';
      return `<span class="${resultClass}">${icon} ${escapeHtml(answer.name)}</span>`;
    }).join('')}${Array.from({ length: waiting }, () => '<span>Waiting…</span>').join('')}</div><p class="family-answer-feedback ${feedback.hasCurrentAnswer ? (feedback.currentCorrect ? 'correct' : 'incorrect') : ''}" aria-live="polite">${escapeHtml(feedbackText)}</p></div>`;
  }
  if (step.type === 'family-conversation') {
    const script = buildConversationScript(step, turnPerson, participants);
    return `<div class="family-conversation-card">${turnPrompt}<div class="family-conversation-phrase"><small>Word for this round</small><strong>${escapeHtml(step.item.targetText)}</strong><span>${escapeHtml(step.item.supportText)}</span></div><div class="family-conversation-script"><strong>Follow this script</strong>${script.map((line, index) => `<article><b>${index + 1}</b><div><small>${escapeHtml(line.person)} · ${escapeHtml(line.label)}</small><strong>${escapeHtml(line.target)}</strong><span>${escapeHtml(line.support)}</span></div></article>`).join('')}</div><p class="family-conversation-tip"><strong>Parent:</strong> Help with pronunciation or explain a family wording such as <em>dida</em> versus standard Montenegrin <em>deda</em>. Then tap Next.</p></div>`;
  }
  if (step.type === 'family-reflection') {
    const people = familyPeople.length ? familyPeople : [{ name: 'Everyone' }];
    const locks = quizState?.answers || [];
    return `<div class="family-reflection-card"><strong>Final family challenge</strong><p>Complete your three actions, then lock in your own card. The family day finishes automatically when everyone is done.</p><div class="family-reflection-grid">${people.map((person, index) => { const item = step.items[index % step.items.length]; const lock = locks.find(answer => person.profileId ? answer.profileId === person.profileId : !answer.profileId); const isMine = Boolean(person.isCurrentUser); return `<button class="family-reflection-assignment ${lock ? 'finished' : ''}" data-final-lock ${isMine && !lock ? '' : 'disabled'}><small>${escapeHtml(person.name)}’s word</small><strong>${escapeHtml(item.targetText)}</strong><span>${escapeHtml(item.supportText)}</span><em>1. Say it · 2. Translate it · 3. Use it in a family example</em><b>${lock ? '✓ Locked in' : isMine ? 'Tap to lock in' : 'Waiting…'}</b></button>`; }).join('')}</div><span>${locks.length} of ${people.length} people locked in</span></div>`;
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
  const familyPeople = [...cloudSession.participants, {
    name: cloudSession.controllerName || 'Parent',
    isCurrentUser: cloudSession.controllingAdult === state.sessionUser?.id,
  }];
  const quizAnswers = cloudSession.quizAnswers || [];
  const quizState = step.type === 'family-quiz' || step.type === 'family-reflection' ? {
    answers: quizAnswers,
    expected: cloudSession.participants.length + 1,
    currentAnswer: quizAnswers.find(answer => answer.isCurrentUser),
  } : null;
  const matchKey = `nautilus:family-match:${cloudSession.id}:${stepIndex}`;
  const matchState = step.type === 'family-match' ? { key: matchKey, matched: readMatchedPairs(matchKey) } : null;

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
        ${state.familyError ? `<div class="family-play-error" role="alert"><strong>Couldn’t save that action</strong><span>${escapeHtml(state.familyError)}</span></div>` : ''}
        <h1 id="family-play-title">${escapeHtml(step.title)}</h1>
        <p class="family-play-subtitle">${escapeHtml(step.subtitle)}</p>
        ${renderSharedContent(step, turnPerson, quizState, cloudSession.participants, familyPeople, matchState)}
        ${isController ? `<div class="family-play-controls">
          <button class="btn btn-secondary" id="family-play-prev" ${stepIndex === 0 ? 'disabled' : ''}>← Back</button>
          <button class="btn btn-secondary" id="family-play-audio">► Play all</button>
          <button class="btn btn-secondary" id="family-play-pause">${cloudSession.status === 'paused' ? 'Resume' : 'Pause'}</button>
          ${isLast
            ? '<span class="family-quiz-auto-note">Completes when everyone locks in</span>'
            : step.type === 'family-quiz'
              ? '<span class="family-quiz-auto-note">Advances when everyone locks in</span>'
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
  container.querySelectorAll('[data-family-reveal]').forEach(button => button.addEventListener('click', () => button.classList.toggle('revealed')));
  let selectedMatch = null;
  container.querySelectorAll('[data-family-match]').forEach(button => button.addEventListener('click', () => {
    if (button.classList.contains('matched')) return;
    if (!selectedMatch) {
      selectedMatch = button;
      button.classList.add('selected');
      return;
    }
    if (selectedMatch === button) {
      button.classList.remove('selected');
      selectedMatch = null;
      return;
    }
    if (selectedMatch.dataset.familyMatchSide === button.dataset.familyMatchSide) {
      selectedMatch.classList.remove('selected');
      selectedMatch = button;
      button.classList.add('selected');
      return;
    }
    if (selectedMatch.dataset.familyMatch === button.dataset.familyMatch) {
      selectedMatch.classList.remove('selected');
      selectedMatch.classList.add('matched');
      button.classList.add('matched');
      selectedMatch.disabled = true;
      button.disabled = true;
      selectedMatch.setAttribute('aria-pressed', 'true');
      button.setAttribute('aria-pressed', 'true');
      const pairNumber = button.dataset.familyMatchNumber;
      selectedMatch.insertAdjacentHTML('beforeend', `<span>✓ Pair ${pairNumber}</span>`);
      button.insertAdjacentHTML('beforeend', `<span>✓ Pair ${pairNumber}</span>`);
      matchState.matched.add(button.dataset.familyMatch);
      saveMatchedPairs(matchState.key, matchState.matched);
      const status = container.querySelector('.family-match-status');
      if (status) status.innerHTML = `<strong>${matchState.matched.size} of ${step.items.length}</strong> pairs complete${matchState.matched.size === step.items.length ? ' · Great work!' : ''}`;
    } else {
      const previous = selectedMatch;
      previous.classList.add('incorrect');
      button.classList.add('incorrect');
      setTimeout(() => {
        previous.classList.remove('selected', 'incorrect');
        button.classList.remove('incorrect');
      }, 550);
    }
    selectedMatch = null;
  }));
  container.querySelectorAll('[data-final-lock]').forEach(button => button.addEventListener('click', () => {
    button.disabled = true;
    button.classList.add('finished');
    button.querySelector('b').textContent = 'Locking in…';
    actions.finishFamilyChallenge(stepIndex);
  }));
  container.querySelectorAll('[data-family-answer]').forEach(button => button.addEventListener('click', () => {
    const card = button.closest('.family-quiz-card');
    card.querySelectorAll('.family-answer').forEach(answer => { answer.disabled = true; });
    button.classList.add('locked');
    button.insertAdjacentHTML('beforeend', '<span>✓ Locking in…</span>');
    card.querySelector('.family-answer-feedback').textContent = 'Locking in your answer…';
    actions.answerFamilyQuiz(button.dataset.familyAnswer, stepIndex);
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
  if (step.type === 'family-quiz' && quizState.answers.length >= quizState.expected) {
    const timerKey = `${cloudSession.id}:${stepIndex}`;
    if (!quizAdvanceTimers.has(timerKey)) {
      quizAdvanceTimers.set(timerKey, setTimeout(async () => {
        try { await actions.reconcileFamilyQuiz(stepIndex); } finally { quizAdvanceTimers.delete(timerKey); }
      }, 2600));
    }
  }
}
