import { generateSession, getTopic, buildMatch, buildQuiz, shuffle, LANGUAGE_PACK } from '../engine/learning-engine.js';
import { escapeHtml, renderLanguageRun } from '../engine/language-runs.js';
import { colorTileStyle, getImmersiveLessonScene, renderColorField } from './lesson-visuals.js';

export function renderSessionView(container, state, actions) {
  const lesson = state.activeLesson;

  // Check if session state is initialized
  if (!state.session || state.session.lessonId !== lesson.id) {
    const steps = generateSession(lesson, state.completedTopicIds);
    state.session = {
      lessonId: lesson.id,
      stepIdx: 0,
      steps,
      flash: { idx: 0, flipped: false },
      quiz: null,
      match: null,
      dialogue: { readAs: null, showEn: true },
    };
  }

  const s = state.session;
  const currentStep = s.steps[s.stepIdx];
  const immersiveScene = getImmersiveLessonScene(lesson.topicId);
  const lessonPercent = Math.round(((s.stepIdx + 1) / s.steps.length) * 100);

  // Renders navigation and top progress bar
  container.innerHTML = `
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${LANGUAGE_PACK.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${LANGUAGE_PACK.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="exit-btn">← Exit Lesson</button>
      </div>
    </header>

    <main class="${immersiveScene ? 'immersive-lesson' : 'container'}" ${immersiveScene ? `style="--lesson-progress:${lessonPercent}%;--lesson-shift:${Math.min(4, s.stepIdx) * -0.35}%"` : 'style="max-width:640px;"'}>
      ${immersiveScene ? `<img class="immersive-lesson__world" src="${immersiveScene.src}" alt="${immersiveScene.place}, an illustrated setting for this lesson">
        <div class="immersive-lesson__light" aria-hidden="true"></div>
        <div class="immersive-lesson__leaves" aria-hidden="true"></div>
        <aside class="immersive-lesson__location"><span>${immersiveScene.icon}</span><div><small>Learning at</small><strong>${immersiveScene.place}</strong><p>${immersiveScene.prompt}</p></div></aside>` : ''}
      <div class="${immersiveScene ? 'immersive-lesson__workspace' : ''}">
        <!-- Steps Progress Bar -->
        <div class="session-steps-bar" role="progressbar" aria-label="Lesson progress" aria-valuenow="${s.stepIdx + 1}" aria-valuemin="1" aria-valuemax="${s.steps.length}">
          ${s.steps.map((sessionStep, idx) => `
            <div class="session-step-segment ${idx <= s.stepIdx ? 'active' : ''}" title="${sessionStep.title || sessionStep.type}"></div>
          `).join('')}
        </div>
        ${immersiveScene ? `<div class="immersive-lesson__trail" aria-hidden="true"><span></span><i>${immersiveScene.icon}</i></div>` : ''}
        <div id="session-step-mount" class="${immersiveScene ? 'immersive-lesson__card' : ''}"></div>
      </div>
    </main>
  `;

  // Attach handlers
  container.querySelector('#logo-btn').addEventListener('click', actions.goDashboard);
  container.querySelector('#exit-btn').addEventListener('click', actions.goDashboard);

  const mount = container.querySelector('#session-step-mount');
  renderStep(mount, currentStep, state, actions);
}

function renderStep(mount, step, state, actions) {
  if (step.type === 'warmup') {
    renderWarmupStep(mount, step, state, actions);
  } else if (step.type === 'discover') {
    renderDiscoverStep(mount, step, state, actions);
  } else if (step.type === 'recall-flash') {
    renderRecallFlashStep(mount, step, state, actions);
  } else if (step.type === 'note') {
    renderNoteStep(mount, step, state, actions);
  } else if (step.type === 'quiz') {
    renderQuizStep(mount, step, state, actions);
  } else if (step.type === 'match') {
    renderMatchStep(mount, step, state, actions);
  } else if (step.type === 'dialogue') {
    renderDialogueStep(mount, step, state, actions);
  } else if (step.type === 'listen') {
    renderListenStep(mount, step, state, actions);
  } else if (step.type === 'done') {
    renderDoneStep(mount, step, state, actions);
  }
}

// 1. Warmup Step
function renderWarmupStep(mount, step, state, actions) {
  mount.innerHTML = `
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 6px;">${step.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${step.subtitle}</p>

      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
        ${step.items.map((it, idx) => `
          <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; border-radius: 12px; padding: 14px 16px;">
            <div>
              <div style="font-weight: 700; font-size: 16px;">${it.targetText}</div>
              <div style="font-size: 13px; color: var(--text-muted);">${it.supportText}</div>
            </div>
            <button class="dialogue-play-btn" data-warmup-play="${idx}">►</button>
          </div>
        `).join('')}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
    </div>
  `;

  mount.querySelectorAll('[data-warmup-play]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.warmup-play);
      actions.speak(step.items[idx].targetText);
    });
  });

  mount.querySelector('#next-step-btn').addEventListener('click', () => {
    actions.nextSessionStep();
  });
}

// 2. Discover (Flashcards Slider) Step
function renderDiscoverStep(mount, step, state, actions) {
  const f = state.session.flash;
  const currentItem = step.items[f.idx];

  mount.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${step.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${step.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Word ${f.idx + 1} of ${step.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="discover-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Learning card, tap to flip">
        <div class="flashcard ${f.flipped ? 'flipped' : ''}">
          <div class="flashcard-face flashcard-front">
            ${renderColorField(state.activeLesson.topicId, currentItem)}
            <div class="flashcard-text-mn" style="font-size: 28px;">${renderLanguageRun(currentItem.targetText, 'target', LANGUAGE_PACK, currentItem)}</div>
            ${currentItem.transliteration ? `<div class="transliteration-text">${renderLanguageRun(currentItem.transliteration, 'transliteration', LANGUAGE_PACK, currentItem)}</div>` : ''}
            <div class="flashcard-hint">Tap to flip</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en" style="font-size: 18px;">${renderLanguageRun(currentItem.supportText, 'support', LANGUAGE_PACK, currentItem)}</div>
            <div class="flashcard-hint" style="color: var(--pink);">Tap to flip back</div>
          </div>
        </div>
      </button>

      <div style="display: flex; gap: 12px; margin-top: 8px;">
        <button class="btn btn-secondary" id="disc-prev-btn" ${f.idx === 0 ? 'disabled style="opacity:0.3; cursor:default;"' : ''}>←</button>
        <button class="btn btn-primary" id="disc-speak-btn">► Say It</button>
        <button class="btn btn-secondary" id="disc-next-btn" ${f.idx + 1 === step.items.length ? 'disabled style="opacity:0.3; cursor:default;"' : ''}>→</button>
      </div>

      ${f.idx + 1 === step.items.length ? `
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      ` : ''}
    </div>
  `;

  // Flashcard flip
  const cardWrapper = mount.querySelector('#discover-card-wrapper');
  cardWrapper.addEventListener('click', () => {
    f.flipped = !f.flipped;
    cardWrapper.querySelector('.flashcard').classList.toggle('flipped');
  });

  mount.querySelector('#disc-speak-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    actions.speak(currentItem.targetText);
  });

  mount.querySelector('#disc-prev-btn').addEventListener('click', () => {
    if (f.idx > 0) {
      f.idx--;
      f.flipped = false;
      renderDiscoverStep(mount, step, state, actions);
    }
  });

  mount.querySelector('#disc-next-btn').addEventListener('click', () => {
    if (f.idx + 1 < step.items.length) {
      f.idx++;
      f.flipped = false;
      renderDiscoverStep(mount, step, state, actions);
    }
  });

  const nextBtn = mount.querySelector('#next-step-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      actions.nextSessionStep();
    });
  }
}

// 3. Recall Flash Step (self-assessed recall)
function renderRecallFlashStep(mount, step, state, actions) {
  const f = state.session.flash;
  const currentItem = step.items[f.idx];

  mount.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${step.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${step.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Card ${f.idx + 1} of ${step.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="recall-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Recall card, tap to flip">
        <div class="flashcard ${f.flipped ? 'flipped' : ''}">
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-hint" style="margin-bottom: 16px; color: var(--cyan);">Can you recall the translation?</div>
            ${renderColorField(state.activeLesson.topicId, currentItem)}
            <div class="flashcard-text-mn" style="font-size: 28px;">${renderLanguageRun(currentItem.targetText, 'target', LANGUAGE_PACK, currentItem)}</div>
            ${currentItem.transliteration ? `<div class="transliteration-text">${renderLanguageRun(currentItem.transliteration, 'transliteration', LANGUAGE_PACK, currentItem)}</div>` : ''}
            <div class="flashcard-hint">Tap to check meaning</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en" style="font-size: 18px;">${renderLanguageRun(currentItem.supportText, 'support', LANGUAGE_PACK, currentItem)}</div>
            <div class="flashcard-hint" style="color: var(--pink);">Tap to flip back</div>
          </div>
        </div>
      </button>

      <button class="btn btn-primary" id="recall-speak-btn">► Listen</button>

      <div style="display: flex; gap: 12px; margin-top: 12px; width: 100%; max-width: 320px;">
        <button class="btn btn-secondary" id="recall-again-btn" style="flex: 1;">Again</button>
        <button class="btn btn-primary" id="recall-gotit-btn" style="flex: 1; background: var(--lime);">Got It</button>
      </div>
    </div>
  `;

  const cardWrapper = mount.querySelector('#recall-card-wrapper');
  cardWrapper.addEventListener('click', () => {
    f.flipped = !f.flipped;
    cardWrapper.querySelector('.flashcard').classList.toggle('flipped');
  });

  mount.querySelector('#recall-speak-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    actions.speak(currentItem.targetText);
  });

  const nextCard = () => {
    if (f.idx + 1 < step.items.length) {
      f.idx++;
      f.flipped = false;
      renderRecallFlashStep(mount, step, state, actions);
    } else {
      actions.nextSessionStep();
    }
  };

  mount.querySelector('#recall-again-btn').addEventListener('click', () => {
    // Add item to end of stack to review again
    step.items.push(currentItem);
    nextCard();
  });

  mount.querySelector('#recall-gotit-btn').addEventListener('click', () => {
    nextCard();
  });
}

// 4. Note / Grammar Rule Step
function renderNoteStep(mount, step, state, actions) {
  mount.innerHTML = `
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 12px;">${step.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${step.subtitle}</p>

      <div class="glass" style="background: rgba(125, 211, 252, 0.08); border-color: var(--cyan); border-radius: 16px; padding: 20px; font-size: 16px; line-height: 1.6; color: var(--text-main); margin-bottom: 32px; white-space: pre-line;">
        ${step.note}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">I understand, start practice →</button>
    </div>
  `;

  mount.querySelector('#next-step-btn').addEventListener('click', () => {
    actions.nextSessionStep();
  });
}

// 5. Quiz Step
function renderQuizStep(mount, step, state, actions) {
  if (!state.session.quiz) {
    state.session.quiz = step.quiz;
  }
  const q = state.session.quiz;

  const currentQ = q.questions[q.qIdx];
  const isFinished = q.qIdx >= q.questions.length;

  if (isFinished) {
    mount.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Practice Complete</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          You scored: ${q.score} / ${q.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
      </div>
    `;

    mount.querySelector('#next-step-btn').addEventListener('click', () => {
      state.session.quiz = null; // Clear
      actions.nextSessionStep();
    });
    return;
  }

  mount.innerHTML = `
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${q.qIdx + 1} of ${q.questions.length} · Score: ${q.score}
      </div>

      <div class="quiz-prompt">
        Translate to ${LANGUAGE_PACK.targetLanguage.name}:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">${renderLanguageRun(currentQ.promptText, 'support', LANGUAGE_PACK)}</span>
      </div>

      <div class="quiz-options">
        ${currentQ.options.map(opt => {
          let optionClass = 'quiz-option';
          if (q.answered) {
            if (opt === currentQ.correctAnswer) optionClass += ' correct';
            else if (opt === q.selected) optionClass += ' incorrect';
            else optionClass += ' disabled';
          }
          return `
            <button class="${optionClass}" data-option="${escapeHtml(opt)}" ${q.answered ? 'disabled' : ''}>
              ${renderLanguageRun(opt, 'target', LANGUAGE_PACK)}
            </button>
          `;
        }).join('')}
      </div>

      ${q.answered ? `
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          Next Question →
        </button>
      ` : ''}
    </div>
  `;

  // Attach handlers
  mount.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      if (q.answered) return;
      const selectedOpt = btn.dataset.option;
      q.selected = selectedOpt;
      q.answered = true;
      const correct = selectedOpt === currentQ.correctAnswer;
      if (correct) {
        q.score++;
        actions.awardStars(1);
      }
      renderQuizStep(mount, step, state, actions);
    });
  });

  const nextQuestionBtn = mount.querySelector('#next-question-btn');
  if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener('click', () => {
      q.qIdx++;
      q.answered = false;
      q.selected = null;
      renderQuizStep(mount, step, state, actions);
    });
  }
}

// 6. Match Step
function renderMatchStep(mount, step, state, actions) {
  if (!state.session.match) {
    state.session.match = step.match;
  }
  const m = state.session.match;

  const currentMatchedPairs = m.matchedIds.length / 2;
  const totalPairs = m.tiles.length / 2;
  const isFinished = currentMatchedPairs === totalPairs;

  mount.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${step.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${step.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Pairs matched: ${currentMatchedPairs} / ${totalPairs}
      </div>

      ${isFinished ? `
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 40px; margin-bottom: 8px;">🎉</div>
          <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Matched!</h4>
          <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">Complete. +1 star</p>
          <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
        </div>
      ` : `
        <div class="matching-grid">
          ${m.tiles.map(tile => {
            const isMatched = m.matchedIds.includes(tile.id);
            const isSelected = m.selectedIds.includes(tile.id);

            let classes = 'match-tile';
            if (isMatched) classes += ' matched';
            else if (isSelected) classes += ' selected';

            return `
              <button class="${classes}" data-tile-id="${tile.id}"${colorTileStyle(tile.text)} ${isMatched ? 'disabled' : ''}>
                ${renderLanguageRun(tile.text, tile.kind, LANGUAGE_PACK, tile)}
              </button>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;

  // Tile clicks
  mount.querySelectorAll('.match-tile').forEach(tileEl => {
    tileEl.addEventListener('click', () => {
      const tileId = tileEl.dataset.tileId;
      handleSessionTileClick(tileId, mount, step, state, actions);
    });
  });

  const nextBtn = mount.querySelector('#next-step-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      state.session.match = null; // Clear
      actions.nextSessionStep();
    });
  }
}

function handleSessionTileClick(tileId, mount, step, state, actions) {
  const m = state.session.match;
  if (m.matchedIds.includes(tileId) || m.selectedIds.includes(tileId) || m.selectedIds.length >= 2) return;

  m.selectedIds.push(tileId);
  renderMatchStep(mount, step, state, actions); // Rerender selection

  if (m.selectedIds.length === 2) {
    const [idA, idB] = m.selectedIds;
    const tileA = m.tiles.find(t => t.id === idA);
    const tileB = m.tiles.find(t => t.id === idB);

    if (tileA.pairId === tileB.pairId) {
      // Match!
      m.matchedIds.push(idA, idB);
      m.selectedIds = [];
      setTimeout(() => {
        if (m.matchedIds.length === m.tiles.length) {
          actions.awardStars(1);
        }
        renderMatchStep(mount, step, state, actions);
      }, 250);
    } else {
      // Wrong
      setTimeout(() => {
        m.selectedIds = [];
        renderMatchStep(mount, step, state, actions);
      }, 700);
    }
  }
}

// 7. Dialogue Step
function renderDialogueStep(mount, step, state, actions) {
  const d = state.session.dialogue;
  const dialogue = step.dialogue;

  if (!d.readAs) {
    d.readAs = dialogue.roles[0];
  }

  mount.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${step.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${step.subtitle}</p>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${dialogue.roles.map(role => `
          <button class="btn btn-secondary btn-pill ${d.readAs === role ? 'btn-active' : ''}" data-role="${role}">
            Read as ${role}
          </button>
        `).join('')}
      </div>

      <div class="dialogue-container" style="width: 100%;">
        ${dialogue.lines.map((line, idx) => {
          const isReader = line.role === d.readAs;
          return `
            <div class="dialogue-bubble ${isReader ? 'active-reader' : ''}">
              <div class="dialogue-header">
                <span>${line.role}</span>
                <button class="dialogue-play-btn" data-play-line="${idx}">►</button>
              </div>
              <div style="font-size: 17px; font-weight: 600; margin-top: 4px; color: var(--text-main);">${renderLanguageRun(line.targetText, 'target', LANGUAGE_PACK, line)}</div>
              <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">${renderLanguageRun(line.supportText, 'support', LANGUAGE_PACK, line)}</div>
            </div>
          `;
        }).join('')}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 12px;">
        Dialogue Complete →
      </button>
    </div>
  `;

  // Attach handlers
  mount.querySelectorAll('[data-role]').forEach(btn => {
    btn.addEventListener('click', () => {
      d.readAs = btn.dataset.role;
      renderDialogueStep(mount, step, state, actions);
    });
  });

  mount.querySelectorAll('[data-play-line]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.playLine);
      actions.speak(dialogue.lines[idx].targetText);
    });
  });

  mount.querySelector('#next-step-btn').addEventListener('click', () => {
    actions.incrementDialogues();
    actions.awardStars(2);
    actions.nextSessionStep();
  });
}

// 8. Listen / Repetition Step
function renderListenStep(mount, step, state, actions) {
  const f = state.session.flash;
  const currentItem = step.items[f.idx];

  mount.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${step.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${step.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${f.idx + 1} of ${step.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 28px; text-align: center;">
        ${renderLanguageRun(currentItem.targetText, 'target', LANGUAGE_PACK, currentItem)}
        ${currentItem.transliteration ? `<div class="transliteration-text">${renderLanguageRun(currentItem.transliteration, 'transliteration', LANGUAGE_PACK, currentItem)}</div>` : ''}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play Pronunciation</button>

      <div style="font-size: 15px; color: var(--text-muted); text-align: center; margin: 4px 0;">
        Meaning: <span style="color: var(--cyan); font-weight: 600;">${renderLanguageRun(currentItem.supportText, 'support', LANGUAGE_PACK, currentItem)}</span>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 12px;">
        <button class="btn btn-secondary" id="listen-prev-btn" ${f.idx === 0 ? 'disabled style="opacity:0.3; cursor:default;"' : ''}>←</button>
        <button class="btn btn-secondary" id="listen-next-btn" ${f.idx + 1 === step.items.length ? 'disabled style="opacity:0.3; cursor:default;"' : ''}>→</button>
      </div>

      ${f.idx + 1 === step.items.length ? `
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      ` : ''}
    </div>
  `;

  // Attach controls
  mount.querySelector('#play-audio-btn').addEventListener('click', () => {
    actions.speak(currentItem.targetText);
  });

  mount.querySelector('#listen-prev-btn').addEventListener('click', () => {
    if (f.idx > 0) {
      f.idx--;
      renderListenStep(mount, step, state, actions);
    }
  });

  mount.querySelector('#listen-next-btn').addEventListener('click', () => {
    if (f.idx + 1 < step.items.length) {
      f.idx++;
      renderListenStep(mount, step, state, actions);
    }
  });

  const nextBtn = mount.querySelector('#next-step-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      actions.nextSessionStep();
    });
  }
}

// 9. Done Step (Wrap up)
function renderDoneStep(mount, step, state, actions) {
  const lesson = state.activeLesson;
  const topic = lesson.topicId ? getTopic(lesson.topicId) : null;

  mount.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center; padding: 40px 0;">
      <div style="font-size: 52px; animation: bounce 1s infinite alternate;">🎉</div>
      <h3 style="font-family: var(--font-display); font-weight: 800; font-size: 26px; letter-spacing: -0.5px;">Nailed It!</h3>
      <p style="color: var(--text-muted); font-size: 15px; max-width: 360px; line-height: 1.6;">
        You finished the lesson: <span style="color: var(--cyan); font-weight: 600;">"${lesson.title}"</span>.
        ${topic && lesson.type === 'checkpoint' ? `<br>Topic <strong>${topic.title}</strong> has been marked as complete.` : ''}
      </p>

      <div class="badge-pill" style="border-color: var(--lime); color: var(--lime); font-size: 14px; font-weight: 800; padding: 10px 20px;">
        ★ Voyage Lesson Completed!
      </div>

      <button class="btn btn-primary" id="finish-lesson-btn" style="margin-top: 12px; padding: 14px 32px;">
        Back to Dashboard
      </button>
    </div>
  `;

  mount.querySelector('#finish-lesson-btn').addEventListener('click', () => {
    actions.completeLesson(lesson.id);
  });
}
