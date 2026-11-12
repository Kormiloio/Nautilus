import { renderLanguageRun } from '../engine/language-runs.js';
import { LANGUAGE_PACK } from '../engine/learning-engine.js';
import { escapeHtml } from '../engine/language-runs.js';
import { createListeningAudio, gradeListeningExercise } from '../engine/listening-practice.js';

export function renderListeningPracticeView(container, state, actions) {
  const session = state.listeningPractice;
  session?.cleanup?.();
  if (session?.exercises.length && !session.prepared) {
    const items = [...new Map(session.exercises.map(exercise => [exercise.item.targetText, exercise.item])).values()];
    const run = (text, side = 'target') => renderLanguageRun(text, side, LANGUAGE_PACK);
    container.innerHTML = `<header class="navbar"><strong>Listening practice</strong><button class="btn btn-secondary" data-study-exit>Dashboard</button></header><main class="container listening-page"><h1>Read and hear first</h1>${session.unsavedReason ? `<p class="listening-unsaved" role="note">${escapeHtml(session.unsavedReason)}</p>` : ''}
      <div class="listening-study">${items.map((item, index) => `<article><strong>${run(item.targetText)}</strong><span>${run(item.supportText, 'support')}</span>${item.teachingNote ? `<p>${run(item.teachingNote, 'support')}</p>` : ''}<button class="btn btn-secondary" data-study-audio="${index}" aria-label="Hear sentence ${index + 1}" title="Hear sentence ${index + 1}">►</button></article>`).join('')}</div>
      <p role="status" data-study-status></p><button class="btn btn-primary" data-study-start>Ready to practice →</button></main>`;
    const status = container.querySelector('[data-study-status]');
    const audio = createListeningAudio(LANGUAGE_PACK.targetLanguage.code, window.speechSynthesis, window.SpeechSynthesisUtterance);
    session.cleanup = () => audio.dispose();
    container.querySelectorAll('[data-study-audio]').forEach(button => button.addEventListener('click', () => {
      audio.play(items[Number(button.dataset.studyAudio)].targetText, false, () => { status.textContent = ''; }, message => { status.textContent = message; });
    }));
    container.querySelector('[data-study-start]').addEventListener('click', () => { session.prepared = true; renderListeningPracticeView(container, state, actions); });
    container.querySelector('[data-study-exit]').addEventListener('click', () => { session.cleanup(); actions.goDashboard(); });
    return;
  }
  const exercise = session?.exercises[session.index];
  const exit = () => { session?.cleanup?.(); actions.goDashboard(); };
  if (!exercise) {
    const answered = session?.results || [];
    container.innerHTML = `<header class="navbar"><strong>Listening practice</strong></header><main class="container listening-page"><h1>Practice complete</h1><p>${answered.filter(result => result.correct).length} of ${answered.length} correct${answered.some(result => result.written) ? ' · includes written practice' : ''}</p><button class="btn btn-primary" data-listening-exit>Dashboard</button></main>`;
    container.querySelector('[data-listening-exit]').addEventListener('click', exit);
    return;
  }
  const ui = session.ui || (session.ui = { heard: false, selected: null, tokens: [], written: false, feedback: null });
  const run = (text, side = 'target') => renderLanguageRun(text, side, LANGUAGE_PACK);
  container.innerHTML = `<header class="navbar"><strong>Listening practice</strong><button class="btn btn-secondary" data-listening-exit>Dashboard</button></header>
    <main class="container listening-page">${session.unsavedReason ? `<p class="listening-unsaved" role="note">${escapeHtml(session.unsavedReason)}</p>` : ''}<p>${session.index + 1} of ${session.exercises.length}</p><h1>${exercise.kind === 'meaning' ? ui.written ? 'Choose the meaning' : 'What did you hear?' : ui.written ? 'Build the sentence' : 'Build what you hear'}</h1>
    <div class="listening-audio"><button type="button" class="btn btn-primary" data-listening-play aria-label="Play sentence" title="Play sentence">►</button><button type="button" class="btn btn-secondary" data-listening-slow aria-label="Play slowly" title="Play slowly">0.6×</button></div>
    <p role="status" data-listening-status></p><button class="btn btn-secondary" data-listening-written hidden>Written practice</button>
    ${exercise.kind === 'meaning' ? `<div class="listening-choices">${exercise.choices.map((choice, index) => `<button type="button" class="btn btn-secondary" data-listening-choice="${index}">${run(choice, 'support')}</button>`).join('')}</div>`
      : `<div class="listening-answer" aria-live="polite" data-listening-answer></div><div class="listening-tokens">${exercise.tokens.map((token, index) => `<button type="button" class="btn btn-secondary" data-listening-token="${index}">${run(token)}</button>`).join('')}</div><button class="btn btn-secondary" data-listening-undo title="Undo last word" aria-label="Undo last word">↶</button>`}
    ${ui.feedback || ui.written ? `<div class="listening-transcript" data-listening-transcript><strong>${run(exercise.item.targetText)}</strong><span>${run(exercise.item.supportText, 'support')}</span></div>` : ''}
    <p class="family-answer-feedback" role="status">${ui.feedback ? ui.feedback.correct ? 'Correct.' : 'Not quite. Compare your answer with the sentence.' : ''}</p>
    <button class="btn btn-primary" data-listening-check>${ui.feedback ? 'Next →' : 'Check answer'}</button></main>`;
  const status = container.querySelector('[data-listening-status]');
  const check = container.querySelector('[data-listening-check]');
  const written = container.querySelector('[data-listening-written]');
  const update = () => {
    const allowed = ui.heard || ui.written;
    const finished = Boolean(ui.feedback);
    container.querySelectorAll('[data-listening-choice]').forEach(button => {
      button.disabled = !allowed || finished;
      button.classList.toggle('selected', ui.selected === Number(button.dataset.listeningChoice));
      button.setAttribute('aria-pressed', String(ui.selected === Number(button.dataset.listeningChoice)));
    });
    container.querySelectorAll('[data-listening-token]').forEach(button => { button.disabled = !allowed || finished || ui.tokens.includes(Number(button.dataset.listeningToken)); });
    const answer = container.querySelector('[data-listening-answer]');
    if (answer) answer.textContent = ui.tokens.map(index => exercise.tokens[index]).join(' ');
    const undo = container.querySelector('[data-listening-undo]');
    if (undo) undo.disabled = !ui.tokens.length || finished;
    check.disabled = !finished && (!allowed || (exercise.kind === 'meaning' ? ui.selected === null : ui.tokens.length === 0));
  };
  const audio = createListeningAudio(LANGUAGE_PACK.targetLanguage.code, window.speechSynthesis, window.SpeechSynthesisUtterance, () => updateVoice());
  session.cleanup = () => audio.dispose();
  const updateVoice = () => {
    const voice = audio.getVoice();
    status.textContent = voice ? `Device voice: ${voice.name} (${voice.lang})` : 'No compatible voice is available on this device.';
    written.hidden = Boolean(voice) || ui.written || Boolean(ui.feedback);
    container.querySelectorAll('[data-listening-play],[data-listening-slow]').forEach(button => { button.disabled = !voice; });
  };
  const play = slow => {
    status.textContent = 'Playing…';
    audio.play(exercise.item.targetText, slow, () => { ui.heard = true; updateVoice(); update(); }, message => { status.textContent = message; written.hidden = false; });
  };
  container.querySelector('[data-listening-play]').addEventListener('click', () => play(false));
  container.querySelector('[data-listening-slow]').addEventListener('click', () => play(true));
  written.addEventListener('click', () => { ui.written = true; renderListeningPracticeView(container, state, actions); });
  container.querySelectorAll('[data-listening-choice]').forEach(button => button.addEventListener('click', () => { ui.selected = Number(button.dataset.listeningChoice); update(); }));
  container.querySelectorAll('[data-listening-token]').forEach(button => button.addEventListener('click', () => { ui.tokens.push(Number(button.dataset.listeningToken)); update(); }));
  container.querySelector('[data-listening-undo]')?.addEventListener('click', () => { ui.tokens.pop(); update(); });
  check.addEventListener('click', () => {
    if (ui.feedback) {
      session.index++;
      session.ui = null;
    } else {
      const response = exercise.kind === 'meaning' ? exercise.choices[ui.selected] : ui.tokens.map(index => exercise.tokens[index]);
      const correct = gradeListeningExercise(exercise, response);
      ui.feedback = { correct, written: ui.written };
      session.results.push(ui.feedback);
      if (!correct) actions.rememberSentenceMistake?.({ ...exercise.item, kind: exercise.kind === 'order' ? 'sentence_builder' : 'quiz' }, `${session.id}:${session.index}`);
    }
    renderListeningPracticeView(container, state, actions);
  });
  container.querySelector('[data-listening-exit]').addEventListener('click', exit);
  updateVoice(); update();
}
