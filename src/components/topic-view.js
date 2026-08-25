import { getTopic, shuffle, buildMatch, buildQuiz, LANGUAGE_PACK } from '../engine/learning-engine.js';
import { colorTileStyle, renderColorField, renderColorsIntro } from './lesson-visuals.js';
import { escapeHtml, renderLanguageRun } from '../engine/language-runs.js';

export function renderTopicView(container, state, actions) {
  const topic = getTopic(state.topicId);
  if (LANGUAGE_PACK.audio?.delivery === 'none' && state.activity === 'listen') state.activity = 'flashcards';
  const isCompleted = state.completedTopicIds.includes(topic.id);
  const showSkipButton = !isCompleted && !state.isGuide;

  const tabDefs = [
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'match', label: 'Match' },
    { id: 'quiz', label: 'Quiz' },
  ];
  if (LANGUAGE_PACK.audio?.delivery !== 'none') tabDefs.push({ id: 'listen', label: 'Listen' });
  if (topic.dialogue) {
    tabDefs.push({ id: 'dialogue', label: 'Role-play' });
  }

  container.innerHTML = `
    <!-- Top Nav bar -->
    <header class="navbar topic-navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${LANGUAGE_PACK.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${LANGUAGE_PACK.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main class="container topic-activity-page" style="max-width: 720px;">
      <!-- Header info -->
      <div class="topic-activity-heading">
        <div>
          <h2 style="font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">${topic.title}</h2>
          <p style="color: var(--text-muted); font-size: 14px;">${topic.subtitle}</p>
          ${LANGUAGE_PACK.audio?.reviewStatus === 'draft' ? '<span class="audio-review-badge">Voice preview · fluent audio review pending</span>' : ''}
          ${LANGUAGE_PACK.status === 'pilot' ? '<span class="audio-review-badge pilot">Pilot wording · community review pending</span>' : ''}
        </div>
        <div>
          ${isCompleted ? `
            <div style="color: var(--lime); font-weight: 800; font-size: 14px; display: flex; align-items: center; gap: 6px;">
              <span>✓</span> Completed Topic
            </div>
          ` : ''}
          ${showSkipButton ? `
            <button class="btn btn-secondary btn-pill" id="skip-btn" style="padding: 6px 14px; font-size: 12px; min-height: 32px;">Already know this — skip</button>
          ` : ''}
        </div>
      </div>

      ${topic.note ? `
        <div style="background: rgba(250, 204, 21, 0.08); border: 1px solid var(--amber); border-radius: 12px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #ffe58f; margin-bottom: 24px; white-space: pre-line;">
          ${topic.note}
        </div>
      ` : ''}

      ${renderColorsIntro(topic.id)}

      <!-- Activities Tabs -->
      <div class="topic-activity-tabs" role="tablist" aria-label="Topic Activities">
        ${tabDefs.map(tab => `
          <button class="btn btn-secondary btn-pill ${state.activity === tab.id ? 'btn-active' : ''}" role="tab" aria-selected="${state.activity === tab.id}" data-tab="${tab.id}">${tab.label}</button>
        `).join('')}
      </div>

      <!-- Activity Container -->
      <div id="activity-mount"></div>
    </main>
  `;

  // Attach nav buttons
  container.querySelector('#logo-btn').addEventListener('click', actions.goDashboard);
  container.querySelector('#back-btn').addEventListener('click', actions.goDashboard);

  const skipBtn = container.querySelector('#skip-btn');
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      actions.markTopicCompleted(topic.id);
      renderTopicView(container, state, actions); // Rerender
    });
  }

  // Tabs clicks
  container.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetTab = e.target.dataset.tab;
      actions.setActivity(targetTab);
    });
  });

  // Mount activity content
  const mount = container.querySelector('#activity-mount');
  mountActivity(mount, topic, state, actions);
}

function mountActivity(mount, topic, state, actions) {
  if (state.activity === 'flashcards') {
    renderFlashcards(mount, topic, state, actions);
  } else if (state.activity === 'match') {
    renderMatch(mount, topic, state, actions);
  } else if (state.activity === 'quiz') {
    renderQuiz(mount, topic, state, actions);
  } else if (state.activity === 'listen') {
    renderListen(mount, topic, state, actions);
  } else if (state.activity === 'dialogue') {
    renderDialogue(mount, topic, state, actions);
  }
}

// 1. Flashcards renderer
function renderFlashcards(mount, topic, state, actions) {
  const f = state.flash;
  const order = f.order || topic.items.map((_, i) => i);
  const currentItem = topic.items[order[f.idx]];

  mount.innerHTML = `
    <div class="flashcard-container">
      <div class="flashcard-hint" style="color: var(--text-muted); font-size: 13px; font-weight: 700;">
        Card ${f.idx + 1} of ${topic.items.length}
      </div>

      <button type="button" class="flashcard-wrapper" id="card-wrapper" aria-label="Flashcard, tap to flip">
        <div class="flashcard ${f.flipped ? 'flipped' : ''}">
          <div class="flashcard-face flashcard-front">
            ${renderColorField(topic.id, currentItem)}
            <div class="flashcard-text-mn">${renderLanguageRun(currentItem.targetText, 'target', LANGUAGE_PACK, currentItem)}</div>
            ${currentItem.transliteration ? `<div class="transliteration-text">${renderLanguageRun(currentItem.transliteration, 'transliteration', LANGUAGE_PACK, currentItem)}</div>` : ''}
            <div class="flashcard-hint">Tap to reveal translation</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en">${renderLanguageRun(currentItem.supportText, 'support', LANGUAGE_PACK, currentItem)}</div>
            <div class="flashcard-hint" style="margin-top: 24px; color: var(--pink);">Tap to flip back</div>
          </div>
        </div>
      </button>

      <div class="flashcard-action-dock" aria-label="Flashcard controls">
        <button class="btn btn-primary" id="speak-btn">► Say it out loud</button>
        <div class="flashcard-nav">
          <button class="btn btn-secondary" id="prev-card-btn">← Prev</button>
          <button class="btn btn-secondary" id="shuffle-btn">Shuffle</button>
          <button class="btn btn-secondary" id="next-card-btn">Next →</button>
        </div>
      </div>
    </div>
  `;

  // Attach controls
  const cardWrapper = mount.querySelector('#card-wrapper');
  cardWrapper.addEventListener('click', () => {
    f.flipped = !f.flipped;
    cardWrapper.querySelector('.flashcard').classList.toggle('flipped');
  });

  mount.querySelector('#speak-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    actions.speak(currentItem.targetText);
  });

  mount.querySelector('#prev-card-btn').addEventListener('click', () => {
    f.idx = (f.idx - 1 + topic.items.length) % topic.items.length;
    f.flipped = false;
    renderFlashcards(mount, topic, state, actions);
  });

  mount.querySelector('#next-card-btn').addEventListener('click', () => {
    f.idx = (f.idx + 1) % topic.items.length;
    f.flipped = false;
    renderFlashcards(mount, topic, state, actions);
  });

  mount.querySelector('#shuffle-btn').addEventListener('click', () => {
    f.order = shuffle(topic.items.map((_, i) => i));
    f.idx = 0;
    f.flipped = false;
    renderFlashcards(mount, topic, state, actions);
  });
}

// 2. Matching game renderer
function renderMatch(mount, topic, state, actions) {
  const m = state.match;
  if (!m.tiles || m.tiles.length === 0) {
    state.match = buildMatch(topic.items);
  }
  const match = state.match;

  const currentMatchedPairs = match.matchedIds.length / 2;
  const totalPairs = match.tiles.length / 2;
  const isFinished = currentMatchedPairs === totalPairs;

  mount.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Pairs matched: ${currentMatchedPairs} / ${totalPairs}
      </div>

      ${isFinished ? `
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 40px; margin-bottom: 8px;">🎉</div>
          <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Well Done!</h4>
          <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">You matched all words correctly! +1 star</p>
        </div>
      ` : `
        <div class="matching-grid">
          ${match.tiles.map(tile => {
            const isMatched = match.matchedIds.includes(tile.id);
            const isSelected = match.selectedIds.includes(tile.id);

            let classes = 'match-tile';
            if (isMatched) classes += ' matched';
            else if (isSelected) classes += ' selected';

            return `
              <button class="${classes}" data-tile-id="${tile.id}" data-match-color="${matchPairColor(tile.pairId)}"${colorTileStyle(tile.text)} ${isMatched ? 'disabled' : ''}>
                ${renderLanguageRun(tile.text, tile.kind, LANGUAGE_PACK, tile)}
              </button>
            `;
          }).join('')}
        </div>
      `}

      <button class="btn btn-secondary" id="reshuffle-match-btn">
        ${isFinished ? 'Play Again' : 'New Round'}
      </button>
    </div>
  `;

  // Reshuffle
  mount.querySelector('#reshuffle-match-btn').addEventListener('click', () => {
    state.match = buildMatch(topic.items);
    renderMatch(mount, topic, state, actions);
  });

  // Tile clicks
  mount.querySelectorAll('.match-tile').forEach(tileEl => {
    tileEl.addEventListener('click', () => {
      const tileId = tileEl.dataset.tileId;
      handleTileClick(tileId, mount, topic, state, actions);
    });
  });
}

function matchPairColor(pairId) {
  const colors = ['lime', 'teal', 'blue', 'purple', 'pink', 'amber'];
  return colors[Math.max(0, Number(pairId) || 0) % colors.length];
}

function handleTileClick(tileId, mount, topic, state, actions) {
  const m = state.match;
  if (m.matchedIds.includes(tileId) || m.selectedIds.includes(tileId) || m.selectedIds.length >= 2) return;

  m.selectedIds.push(tileId);
  renderMatch(mount, topic, state, actions); // Rerender selection

  if (m.selectedIds.length === 2) {
    const [idA, idB] = m.selectedIds;
    const tileA = m.tiles.find(t => t.id === idA);
    const tileB = m.tiles.find(t => t.id === idB);

    if (tileA.pairId === tileB.pairId) {
      // It's a match!
      m.matchedIds.push(idA, idB);
      m.selectedIds = [];
      setTimeout(() => {
        if (m.matchedIds.length === m.tiles.length) {
          actions.awardStars(1);
          actions.markTopicCompleted(topic.id);
        }
        renderMatch(mount, topic, state, actions);
      }, 250);
    } else {
      // Wrong match
      setTimeout(() => {
        m.selectedIds = [];
        renderMatch(mount, topic, state, actions);
      }, 700);
    }
  }
}

// 3. Quiz renderer
function renderQuiz(mount, topic, state, actions) {
  const q = state.quiz;
  if (!q.questions || q.questions.length === 0) {
    state.quiz = buildQuiz(topic.items);
  }
  const quiz = state.quiz;

  const currentQ = quiz.questions[quiz.qIdx];
  const isFinished = quiz.qIdx >= quiz.questions.length || quiz.questions.length === 0;

  if (isFinished) {
    mount.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Quiz Finished!</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          Your score: ${quiz.score} / ${quiz.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="restart-quiz-btn">Try Again</button>
      </div>
    `;

    mount.querySelector('#restart-quiz-btn').addEventListener('click', () => {
      state.quiz = buildQuiz(topic.items);
      renderQuiz(mount, topic, state, actions);
    });
    return;
  }

  mount.innerHTML = `
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${quiz.qIdx + 1} of ${quiz.questions.length} · Score: ${quiz.score}
      </div>

      <div class="quiz-prompt">
        Translate to ${LANGUAGE_PACK.targetLanguage.name}:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">${renderLanguageRun(currentQ.promptText, 'support', LANGUAGE_PACK)}</span>
      </div>

      <div class="quiz-options">
        ${currentQ.options.map(opt => {
          let optionClass = 'quiz-option';
          if (quiz.answered) {
            if (opt === currentQ.correctAnswer) optionClass += ' correct';
            else if (opt === quiz.selected) optionClass += ' incorrect';
            else optionClass += ' disabled';
          }
          return `
            <button class="${optionClass}" data-option="${escapeHtml(opt)}" ${quiz.answered ? 'disabled' : ''}>
              ${renderLanguageRun(opt, 'target', LANGUAGE_PACK)}
            </button>
          `;
        }).join('')}
      </div>

      ${quiz.answered ? `
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          ${quiz.qIdx + 1 === quiz.questions.length ? 'Show Results' : 'Next Question →'}
        </button>
      ` : ''}
    </div>
  `;

  // Attach handlers
  mount.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      if (quiz.answered) return;
      const selectedOpt = btn.dataset.option;
      quiz.selected = selectedOpt;
      quiz.answered = true;
      const correct = selectedOpt === currentQ.correctAnswer;
      if (correct) {
        quiz.score++;
        actions.awardStars(1);
      }
      renderQuiz(mount, topic, state, actions);
    });
  });

  const nextBtn = mount.querySelector('#next-question-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      quiz.qIdx++;
      quiz.answered = false;
      quiz.selected = null;
      if (quiz.qIdx >= quiz.questions.length) {
        actions.markTopicCompleted(topic.id);
      }
      renderQuiz(mount, topic, state, actions);
    });
  }
}

// 4. Listen / Pronunciation repeat renderer
function renderListen(mount, topic, state, actions) {
  const l = state.listen;
  const order = l.order || topic.items.map((_, i) => i);
  const currentItem = topic.items[order[l.idx]];
  const recState = state.recording;

  mount.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${l.idx + 1} of ${topic.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 32px; text-align: center;">
        ${renderLanguageRun(currentItem.targetText, 'target', LANGUAGE_PACK, currentItem)}
        ${currentItem.transliteration ? `<div class="transliteration-text">${renderLanguageRun(currentItem.transliteration, 'transliteration', LANGUAGE_PACK, currentItem)}</div>` : ''}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play pronunciation</button>

      <p style="font-size: 11px; color: var(--text-muted); max-width: 340px; text-align: center; line-height: 1.4;">
        Uses browser speech synthesis fallback voice.
      </p>

      <button class="btn btn-secondary" id="reveal-meaning-btn">
        ${l.revealed ? 'Hide Meaning' : 'Reveal Meaning'}
      </button>

      ${l.revealed ? `
        <div style="font-size: 18px; color: var(--cyan); font-weight: 600; text-align: center; animation: fadeIn 0.2s;">
          ${renderLanguageRun(currentItem.supportText, 'support', LANGUAGE_PACK, currentItem)}
        </div>
      ` : ''}

      <div style="height: 1px; width: 100%; max-width: 320px; background: var(--border-color); margin: 12px 0;"></div>

      <!-- Microphone recording feature -->
      <button class="btn btn-accent btn-pill" id="mic-record-btn" style="border-color: var(--pink); background: transparent; color: var(--pink);">
        ${recState.status === 'recording' ? '■ Stop Recording' : '🎙 Record Yourself'}
      </button>

      ${recState.url ? `
        <audio controls style="width: 280px; margin-top: 8px;" src="${recState.url}"></audio>
      ` : ''}

      ${recState.error ? `
        <div style="font-size: 12px; color: var(--pink); max-width: 300px; text-align: center; margin-top: 6px;">
          ${recState.error}
        </div>
      ` : ''}

      <div style="display: flex; gap: 12px; margin-top: 12px;">
        <button class="btn btn-secondary" id="prev-listen-btn">← Prev</button>
        <button class="btn btn-secondary" id="next-listen-btn">Next →</button>
      </div>
    </div>
  `;

  // Attach controls
  mount.querySelector('#play-audio-btn').addEventListener('click', () => {
    actions.speak(currentItem.targetText);
  });

  mount.querySelector('#reveal-meaning-btn').addEventListener('click', () => {
    l.revealed = !l.revealed;
    renderListen(mount, topic, state, actions);
  });

  mount.querySelector('#prev-listen-btn').addEventListener('click', () => {
    l.idx = (l.idx - 1 + topic.items.length) % topic.items.length;
    l.revealed = false;
    cleanupRecording(state);
    renderListen(mount, topic, state, actions);
  });

  mount.querySelector('#next-listen-btn').addEventListener('click', () => {
    l.idx = (l.idx + 1) % topic.items.length;
    l.revealed = false;
    cleanupRecording(state);
    renderListen(mount, topic, state, actions);
  });

  // Recording controls
  mount.querySelector('#mic-record-btn').addEventListener('click', () => {
    toggleRecording(mount, topic, state, actions);
  });
}

function cleanupRecording(state) {
  if (state.recording.url) {
    URL.revokeObjectURL(state.recording.url);
  }
  state.recording = { status: 'idle', url: null, error: null, chunks: [], recorder: null };
}

async function toggleRecording(mount, topic, state, actions) {
  const rec = state.recording;
  if (rec.status === 'recording') {
    if (rec.recorder) rec.recorder.stop();
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = e => {
      if (e.data.size > 0) chunks.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      stream.getTracks().forEach(t => t.stop());
      state.recording = { status: 'ready', url, error: null, chunks: [], recorder: null };
      renderListen(mount, topic, state, actions);
    };

    recorder.start();
    state.recording = { status: 'recording', url: null, error: null, chunks, recorder };
    renderListen(mount, topic, state, actions);
  } catch (e) {
    state.recording = {
      status: 'idle',
      url: null,
      error: 'Microphone access denied or unavailable on this device.',
      chunks: [],
      recorder: null,
    };
    renderListen(mount, topic, state, actions);
  }
}

// 5. Dialogue renderer
function renderDialogue(mount, topic, state, actions) {
  const d = state.dialogue;
  const dialogue = topic.dialogue;

  if (!d.readAs) {
    d.readAs = dialogue.roles[0];
  }

  mount.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${dialogue.roles.map(role => `
          <button class="btn btn-secondary btn-pill ${d.readAs === role ? 'btn-active' : ''}" data-role="${role}">
            Read as ${role}
          </button>
        `).join('')}
        <button class="btn btn-secondary btn-pill" id="toggle-translation-btn">
          ${d.showEn ? 'Hide Translations' : 'Show Translations'}
        </button>
      </div>

      <div class="dialogue-container">
        ${dialogue.lines.map((line, idx) => {
          const isReader = line.role === d.readAs;
          return `
            <div class="dialogue-bubble ${isReader ? 'active-reader' : ''}" style="animation: fadeIn 0.3s var(--transition-medium);">
              <div class="dialogue-header">
                <span>${line.role}</span>
                <button class="dialogue-play-btn" data-play-line="${idx}">►</button>
              </div>
              <div style="font-size: 17px; font-weight: 600; margin-top: 4px; color: var(--text-main);">${renderLanguageRun(line.targetText, 'target', LANGUAGE_PACK, line)}</div>
              ${d.showEn ? `
                <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">${renderLanguageRun(line.supportText, 'support', LANGUAGE_PACK, line)}</div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>

      <button class="btn btn-primary" id="finish-dialogue-btn" style="width: 100%; max-width: 480px; margin-top: 12px;">
        Finish Dialogue Practice
      </button>
    </div>
  `;

  // Attach handlers
  mount.querySelectorAll('[data-role]').forEach(btn => {
    btn.addEventListener('click', () => {
      d.readAs = btn.dataset.role;
      renderDialogue(mount, topic, state, actions);
    });
  });

  mount.querySelector('#toggle-translation-btn').addEventListener('click', () => {
    d.showEn = !d.showEn;
    renderDialogue(mount, topic, state, actions);
  });

  mount.querySelectorAll('[data-play-line]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.playLine);
      const text = dialogue.lines[idx].targetText;
      actions.speak(text);
    });
  });

  mount.querySelector('#finish-dialogue-btn').addEventListener('click', () => {
    actions.incrementDialogues();
    actions.markTopicCompleted(topic.id);
    actions.awardStars(2);
    actions.goDashboard();
  });
}
