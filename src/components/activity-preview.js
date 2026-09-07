import { buildMatch, buildQuiz, createSeededRandom, getTopics, LANGUAGE_PACK, shuffle } from '../engine/learning-engine.js';
import { escapeHtml, renderLanguageRun } from '../engine/language-runs.js';

function sourceForPreview() {
  const topic = getTopics().find(candidate => candidate.items?.length >= 4) || getTopics()[0];
  const items = (topic?.items || []).slice(0, 6);
  const dialogueLine = topic?.dialogue?.lines?.find(line => {
    const text = String(line.targetText || '').trim();
    return text.split(/\s+/).length > 1 && !text.includes('/');
  });
  return { topic, items, sentence: dialogueLine || { targetText: items.slice(0, 2).map(item => item.targetText).join(' '), supportText: items.slice(0, 2).map(item => item.supportText).join(' · ') } };
}

function freshPreview() {
  const source = sourceForPreview();
  const random = createSeededRandom('activity-preview:' + LANGUAGE_PACK.id);
  const answer = String(source.sentence.targetText).trim().split(/\s+/);
  return { source, tab: 'flashcards', flashIndex: 0, flipped: false, match: buildMatch(source.items, Math.min(4, source.items.length), random), selectedMatch: null, matchMessage: '', quiz: buildQuiz(source.items, 1, random).questions[0], quizMessage: '', sentence: { answer, tokens: shuffle(answer, random), selected: [], message: '' } };
}

function currentPreview(state) {
  if (!state.activityPreview || state.activityPreview.packId !== LANGUAGE_PACK.id) state.activityPreview = { packId: LANGUAGE_PACK.id, ...freshPreview() };
  return state.activityPreview;
}

const label = { flashcards: 'Flashcards', match: 'Match', quiz: 'Quiz', sentence: 'Build a sentence' };
const run = (text, kind, item = {}) => renderLanguageRun(text, kind, LANGUAGE_PACK, item);

function flashcards(preview) {
  const item = preview.source.items[preview.flashIndex];
  return '<div class="preview-activity preview-flashcards"><p class="flashcard-hint">Card ' + (preview.flashIndex + 1) + ' of ' + preview.source.items.length + '</p><button class="flashcard-wrapper" type="button" data-preview-flip aria-label="Flip flashcard"><div class="flashcard ' + (preview.flipped ? 'flipped' : '') + '"><div class="flashcard-face flashcard-front"><div class="flashcard-text-mn">' + run(item.targetText, 'target', item) + '</div><div class="flashcard-hint">Tap to reveal</div></div><div class="flashcard-face flashcard-back"><div class="flashcard-text-en">' + run(item.supportText, 'support', item) + '</div><div class="flashcard-hint">Tap to return</div></div></div></button><div class="preview-actions"><button class="btn btn-secondary" data-preview-flash="previous" ' + (preview.flashIndex === 0 ? 'disabled' : '') + '>← Previous</button><button class="btn btn-primary" data-preview-speak>▶ Say it</button><button class="btn btn-secondary" data-preview-flash="next" ' + (preview.flashIndex + 1 === preview.source.items.length ? 'disabled' : '') + '>Next →</button></div></div>';
}

function match(preview) {
  const matched = preview.match.matchedIds;
  const tiles = preview.match.tiles.map(tile => '<button class="preview-choice ' + (matched.includes(tile.id) ? 'matched ' : '') + (preview.selectedMatch === tile.id ? 'selected' : '') + '" data-preview-match="' + tile.id + '" ' + (matched.includes(tile.id) ? 'disabled' : '') + '>' + run(tile.text, tile.kind === 'target' ? 'target' : 'support', tile) + '</button>').join('');
  return '<div class="preview-activity"><p>Tap one word, then its meaning. Correct pairs stay marked.</p><p class="preview-feedback" role="status">' + escapeHtml(preview.matchMessage || (matched.length / 2) + ' of ' + (preview.match.tiles.length / 2) + ' pairs matched') + '</p><div class="preview-match-grid">' + tiles + '</div><button class="btn btn-secondary" data-preview-reset="match">New round</button></div>';
}

function quiz(preview) {
  const options = preview.quiz.options.map(option => '<button class="preview-choice" data-preview-quiz="' + escapeHtml(option) + '">' + run(option, 'target') + '</button>').join('');
  return '<div class="preview-activity preview-quiz"><p class="hero-tag">What is the best translation?</p><h2>' + run(preview.quiz.promptText, 'support') + '</h2><div class="preview-choice-grid">' + options + '</div><p class="preview-feedback" role="status">' + escapeHtml(preview.quizMessage || 'Choose an answer to see feedback.') + '</p><button class="btn btn-secondary" data-preview-reset="quiz">Try another question</button></div>';
}

function sentence(preview) {
  const state = preview.sentence;
  const complete = state.selected.length === state.tokens.length;
  const correct = state.message.startsWith('✓');
  const chosen = state.selected.length ? state.selected.map(index => escapeHtml(state.tokens[index])).join(' ') : 'Tap a word to begin';
  const tokens = state.tokens.map((token, index) => '<button class="btn btn-secondary" data-preview-sentence="' + index + '" ' + (state.selected.includes(index) ? 'disabled' : '') + '>' + escapeHtml(token) + '</button>').join('');
  return '<div class="preview-activity preview-sentence"><p>Put the words in order. This is a preview only—nothing is saved.</p><p class="preview-prompt">' + escapeHtml(preview.source.sentence.supportText) + '</p><div class="sentence-builder-step__answer ' + (complete ? (correct ? 'correct' : 'incorrect') : '') + '" aria-live="polite">' + chosen + '</div><div class="sentence-builder-step__tokens">' + tokens + '</div><p class="preview-feedback" role="status">' + escapeHtml(state.message || 'Build the sentence, then check it.') + '</p><div class="preview-actions"><button class="btn btn-secondary" data-preview-reset="sentence" ' + (state.selected.length ? '' : 'disabled') + '>Start over</button>' + (complete ? '<button class="btn btn-primary" data-preview-check>Check my sentence</button>' : '') + '</div></div>';
}

export function renderActivityPreview(container, state, actions) {
  const preview = currentPreview(state);
  const content = { flashcards, match, quiz, sentence }[preview.tab](preview);
  const tabs = Object.entries(label).map(([id, title]) => '<button class="btn btn-secondary btn-pill ' + (preview.tab === id ? 'btn-active' : '') + '" data-preview-tab="' + id + '">' + title + '</button>').join('');
  container.innerHTML = '<header class="navbar"><button class="logo" id="preview-home" aria-label="Back to dashboard"><div class="logo-icon">' + escapeHtml(LANGUAGE_PACK.targetLanguage.code.toUpperCase()) + '</div><div class="logo-title">Nautilus</div></button><button class="btn btn-secondary" id="preview-back">← Dashboard</button></header><main class="container activity-preview"><div class="hero-tag">Parent preview</div><h1>Try the activities</h1><p class="preview-intro">Explore the current ' + escapeHtml(LANGUAGE_PACK.targetLanguage.name) + ' activity styles. This does not open a lesson, write progress, or affect Family Play.</p><div class="topic-activity-tabs" role="tablist" aria-label="Preview activities">' + tabs + '</div><section class="preview-panel card"><div><span class="hero-tag">' + escapeHtml(preview.source.topic.title) + '</span><h2>' + escapeHtml(label[preview.tab]) + '</h2></div>' + content + '</section></main>';
  const redraw = () => renderActivityPreview(container, state, actions);
  container.querySelector('#preview-home').addEventListener('click', actions.goDashboard);
  container.querySelector('#preview-back').addEventListener('click', actions.goDashboard);
  container.querySelectorAll('[data-preview-tab]').forEach(button => button.addEventListener('click', () => { preview.tab = button.dataset.previewTab; redraw(); }));
  container.querySelector('[data-preview-flip]')?.addEventListener('click', () => { preview.flipped = !preview.flipped; redraw(); });
  container.querySelectorAll('[data-preview-flash]').forEach(button => button.addEventListener('click', () => { preview.flashIndex += button.dataset.previewFlash === 'next' ? 1 : -1; preview.flipped = false; redraw(); }));
  container.querySelector('[data-preview-speak]')?.addEventListener('click', () => actions.speak(preview.source.items[preview.flashIndex].targetText));
  container.querySelectorAll('[data-preview-match]').forEach(button => button.addEventListener('click', () => {
    const id = button.dataset.previewMatch; const tile = preview.match.tiles.find(candidate => candidate.id === id);
    if (!preview.selectedMatch) { preview.selectedMatch = id; preview.matchMessage = 'Now choose its match.'; redraw(); return; }
    const selected = preview.match.tiles.find(candidate => candidate.id === preview.selectedMatch);
    if (selected.kind === tile.kind) { preview.selectedMatch = id; preview.matchMessage = 'Choose one from the other column.'; redraw(); return; }
    if (selected.pairId === tile.pairId) { preview.match.matchedIds.push(selected.id, tile.id); preview.matchMessage = '✓ Matched!'; } else preview.matchMessage = 'Not that pair—try again.';
    preview.selectedMatch = null; redraw();
  }));
  container.querySelectorAll('[data-preview-quiz]').forEach(button => button.addEventListener('click', () => { preview.quizMessage = button.dataset.previewQuiz === preview.quiz.correctAnswer ? '✓ Correct!' : 'Not quite. The answer is ' + preview.quiz.correctAnswer + '.'; redraw(); }));
  container.querySelectorAll('[data-preview-sentence]').forEach(button => button.addEventListener('click', () => { preview.sentence.selected.push(Number(button.dataset.previewSentence)); preview.sentence.message = ''; redraw(); }));
  container.querySelector('[data-preview-check]')?.addEventListener('click', () => { const actual = preview.sentence.selected.map(index => preview.sentence.tokens[index]); preview.sentence.message = actual.every((token, index) => token === preview.sentence.answer[index]) ? '✓ Correct — that is the sentence.' : 'Not quite. The sentence is: ' + preview.sentence.answer.join(' '); redraw(); });
  container.querySelectorAll('[data-preview-reset]').forEach(button => button.addEventListener('click', () => { const kind = button.dataset.previewReset; if (kind === 'match' || kind === 'quiz') { const fresh = freshPreview(); preview[kind] = fresh[kind]; preview[kind + 'Message'] = ''; if (kind === 'match') preview.selectedMatch = null; } if (kind === 'sentence') { preview.sentence.selected = []; preview.sentence.message = ''; } redraw(); }));
}
