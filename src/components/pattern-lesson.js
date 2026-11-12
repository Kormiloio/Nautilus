import { escapeHtml, renderLanguageRun } from '../engine/language-runs.js';
import { LANGUAGE_PACK } from '../engine/learning-engine.js';

const meanings = ['This is', 'Where is', 'Here is', 'That is not'];

export function bindPatternLesson(container, lessons, state, speak, onComplete = () => {}) {
  const run = (text, side = 'target') => renderLanguageRun(text, side, LANGUAGE_PACK);
  state.frame ??= 0;
  state.part ??= 0;
  state.answers ??= {};
  const render = () => {
    const lesson = lessons[state.frame];
    const stages = ['See the sentence', 'Take it apart', 'Try it', 'Say it together'];
    const correct = state.answers[state.frame] === lesson.english;
    const done = state.part === 3 && state.frame === lessons.length - 1;
    let content;
    if (state.part === 0 || state.part === 3) {
      content = `<p class="pattern-example">${run(lesson.example.targetText)}</p><p class="pattern-meaning">${run(lesson.example.supportText, 'support')}</p>`;
    } else if (state.part === 1) {
      const parts = [...lesson.parts, [lesson.noun.targetText, lesson.noun.supportText]];
      content = `<dl class="pattern-parts">${parts.map(([target, support]) => `<div><dt>${run(target)}</dt><dd>${run(support, 'support')}</dd></div>`).join('')}</dl>`;
    } else {
      content = `<p class="pattern-example">${run(lesson.before)}</p><p>What does this mean?</p>
        <div class="pattern-choices">${meanings.map(meaning => `<button type="button" class="btn btn-secondary ${state.answers[state.frame] === meaning ? 'selected' : ''}" data-pattern-answer="${escapeHtml(meaning)}" ${correct ? 'disabled' : ''}>${escapeHtml(meaning)}</button>`).join('')}</div>
        <p class="pattern-feedback" role="status">${correct ? 'Yes. ' + escapeHtml(lesson.before) + ' = ' + escapeHtml(lesson.english.toLowerCase()) + '.' : state.answers[state.frame] ? 'Try another meaning. You can go back and look at the parts.' : ''}</p>`;
    }
    container.innerHTML = `<div class="pattern-meta"><span>Pattern ${state.frame + 1} of ${lessons.length}</span><span>${state.part + 1} of 4</span></div>
      <h2>${stages[state.part]}</h2>${content}
      <div class="pattern-navigation"><button type="button" class="btn btn-secondary" data-pattern-back aria-label="Previous part" title="Previous part" ${state.part === 0 && state.frame === 0 ? 'disabled' : ''}>←</button>
      <button type="button" class="btn btn-secondary" data-pattern-audio aria-label="Hear this example" title="Hear this example">►</button>
      ${done ? '<span class="pattern-ready" role="status">Ready for sentence practice</span>' : `<button type="button" class="btn btn-primary" data-pattern-next ${state.part === 2 && !correct ? 'disabled' : ''}>${state.part === 3 ? 'Next pattern →' : 'Continue →'}</button>`}</div>`;
    container.querySelector('[data-pattern-back]').addEventListener('click', () => {
      if (state.part > 0) state.part--;
      else { state.frame--; state.part = 3; }
      render();
    });
    container.querySelector('[data-pattern-audio]').addEventListener('click', () => speak(state.part === 2 ? lesson.before : lesson.example.targetText));
    container.querySelector('[data-pattern-next]')?.addEventListener('click', () => {
      if (state.part === 3) { state.frame++; state.part = 0; }
      else state.part++;
      render();
    });
    container.querySelectorAll('[data-pattern-answer]').forEach(button => button.addEventListener('click', () => {
      state.answers[state.frame] = button.dataset.patternAnswer;
      render();
    }));
    onComplete(done);
  };
  render();
}
