import { LANGUAGE_PACK } from '../engine/learning-engine.js';
import { renderLanguageRun } from '../engine/language-runs.js';

const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

function shell(quest, content) {
  return `<header class="navbar side-quest-navbar"><button class="logo" id="side-quest-home"><div class="logo-icon">⚓</div><div class="logo-title">Nautilus Side Quest</div></button><button class="btn btn-secondary btn-pill" id="side-quest-back">← Back to Dashboard</button></header>
  <main class="side-quest-world"><section class="side-quest-panel detective-panel" aria-labelledby="side-quest-title"><div class="hero-tag">${esc(quest.eyebrow)} · unlocked at lesson ${quest.milestone}</div><h1 id="side-quest-title">${esc(quest.title)}</h1>${content}</section></main>`;
}

function renderDetective(container, state, actions) {
  const quest = state.sideQuest;
  const shared = state.familySideQuestState;
  const game = state.sideQuestGame;
  const caseIndex = shared?.currentCase ?? game.caseIndex;
  const item = quest.cases[Math.min(caseIndex, quest.cases.length - 1)];
  const progress = `<div class="detective-progress"><strong>Case ${Math.min(caseIndex + 1, quest.cases.length)} of ${quest.cases.length}</strong><span>${shared ? `${shared.lockedCount} of ${shared.participantCount} locked` : 'Solo investigation'}</span></div>`;
  let content;

  if (shared?.status === 'completed' || game?.phase === 'complete') {
    content = `<div class="detective-complete"><div class="detective-badge" aria-hidden="true">🔎</div><div class="hero-tag">Badge earned</div><h2>Context Detective</h2><p>Your crew investigated all three words. The skill is using the whole sentence as evidence—not memorizing one translation.</p><button class="btn btn-primary" id="side-quest-finish">Stow the badge →</button></div>`;
  } else if (shared?.allLocked || game?.phase === 'reveal') {
    const answer = item.choices.find(choice => choice.id === item.answerId)?.label;
    const people = shared?.people || game.detectives.map(name => ({ name, answerId: game.guesses[name] }));
    const votes = people.map(person => {
      const choice = item.choices.find(candidate => candidate.id === person.answerId);
      const correct = person.answerId === item.answerId;
      return `<div class="detective-vote ${correct ? 'correct' : 'incorrect'}"><span>${esc(person.name)}</span><strong>${esc(choice?.label || 'No answer')}</strong><em>${correct ? '✓ Solved' : 'Not this time'}</em></div>`;
    }).join('');
    const next = !shared || shared.isController
      ? `<button class="btn btn-primary" id="detective-next">${caseIndex + 1 === quest.cases.length ? 'Finish the case →' : 'Open next case →'}</button>`
      : '<p class="side-quest-note">Waiting for the parent or guide to open the next case.</p>';
    content = `${progress}<div class="detective-reveal"><div class="hero-tag">Everyone is locked · reveal together</div><h2>${renderLanguageRun(item.sentence, 'target', LANGUAGE_PACK)}</h2><p class="detective-answer">Here, <strong>${esc(item.word)}</strong> means <strong>${esc(answer)}</strong>.</p><div class="detective-votes">${votes}</div><p class="detective-explanation">${esc(item.explanation)}</p>${next}</div>`;
  } else if (shared?.myAnswer) {
    content = `${progress}<div class="detective-pass" role="status"><div aria-hidden="true">🔒</div><h2>Your answer is locked</h2><p>Keep this page open. The evidence will be revealed automatically when everyone has answered.</p><div class="detective-lock-roster">${shared.people.map(person => `<span class="${person.locked ? 'locked' : ''}">${person.locked ? '✓' : '…'} ${esc(person.name)}</span>`).join('')}</div></div>`;
  } else {
    const selected = shared ? state.sideQuestSelection : game.selected;
    content = `${progress}<p class="side-quest-subtitle">${esc(quest.subtitle)}</p><div class="detective-turn"><span>Your device · your choice</span><strong>Examine the whole sentence before answering</strong></div><article class="detective-case"><span class="detective-word">Word under investigation: ${esc(item.word)}</span><h2>${renderLanguageRun(item.sentence, 'target', LANGUAGE_PACK)}</h2><p>What does <strong>${esc(item.word)}</strong> mean here?</p><div class="detective-choices">${item.choices.map(choice => `<button class="detective-choice ${selected === choice.id ? 'selected' : ''}" data-detective-choice="${esc(choice.id)}" aria-pressed="${selected === choice.id}">${esc(choice.label)}</button>`).join('')}</div></article><p class="side-quest-note">Choose on your own device. Other answers stay private until everyone locks in.</p><button class="btn btn-primary" id="detective-lock" ${selected ? '' : 'disabled'}>Lock my answer →</button>`;
  }

  container.innerHTML = shell(quest, content);
  const back = () => actions.goDashboard();
  container.querySelector('#side-quest-home').addEventListener('click', back);
  container.querySelector('#side-quest-back').addEventListener('click', back);
  container.querySelectorAll('[data-detective-choice]').forEach(button => button.addEventListener('click', () => actions.selectSideQuestAnswer(button.dataset.detectiveChoice)));
  container.querySelector('#detective-lock')?.addEventListener('click', actions.lockSideQuestAnswer);
  container.querySelector('#detective-next')?.addEventListener('click', actions.nextSideQuestCase);
  container.querySelector('#side-quest-finish')?.addEventListener('click', actions.finishSideQuest);
}

function renderCards(container, state, actions) {
  const quest = state.sideQuest;
  const cards = quest.items.map((item, index) => `<button class="side-quest-card" data-side-quest-card aria-expanded="false"><span class="side-quest-card__number">${String(index + 1).padStart(2, '0')}</span><span class="side-quest-card__front"><small>${esc(item.strength)}</small><strong>${renderLanguageRun(item.targetText, 'target', LANGUAGE_PACK, item)}</strong><em>Tap to decode</em></span><span class="side-quest-card__back"><strong>${esc(item.supportText)}</strong><span>${esc(item.context)}</span></span></button>`).join('');
  container.innerHTML = shell(quest, `<p class="side-quest-subtitle">${esc(quest.subtitle)}</p><div class="side-quest-warning"><strong>Before you open the cards</strong><span>${esc(quest.warning)}</span></div><div class="side-quest-cards">${cards}</div><p class="side-quest-note">${esc(quest.note)}</p><button class="btn btn-primary" id="side-quest-finish">Stow the cargo →</button>`);
  const back = () => actions.goDashboard();
  container.querySelector('#side-quest-home').addEventListener('click', back);
  container.querySelector('#side-quest-back').addEventListener('click', back);
  container.querySelector('#side-quest-finish').addEventListener('click', back);
  container.querySelectorAll('[data-side-quest-card]').forEach(card => card.addEventListener('click', () => { const shown = card.classList.toggle('revealed'); card.setAttribute('aria-expanded', String(shown)); }));
}

export function renderSideQuestView(container, state, actions) {
  if (!state.sideQuest || state.sideQuest.locked) { actions.goDashboard(); return; }
  if (state.sideQuest.game === 'detective' && (state.sideQuestGame || state.familySideQuestState)) renderDetective(container, state, actions);
  else renderCards(container, state, actions);
}
