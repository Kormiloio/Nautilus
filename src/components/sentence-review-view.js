import { renderSharedContent, bindFamilySentencePractice } from './family-play-view.js';
import { buildSentenceReviewStep, submitSentenceReview } from '../engine/sentence-review.js';
import { escapeHtml } from '../engine/language-runs.js';

export function renderSentenceReviewView(container, state, actions) {
  const review = state.sentenceReviews?.[state.sentenceReviewIndex || 0];
  const feedback = state.sentenceReviewFeedback;
  container.innerHTML = `<header class="navbar"><strong>Sentence review</strong><button class="btn btn-secondary" data-review-exit>Dashboard</button></header>
    <main class="container sentence-review-page">
      ${state.sentenceReviewError ? `<p role="alert">${escapeHtml(state.sentenceReviewError)}</p>` : ''}
      ${review ? `<p>Sentence ${(state.sentenceReviewIndex || 0) + 1} of ${state.sentenceReviews.length}</p>
      ${renderSharedContent(buildSentenceReviewStep(review), null)}
      <p class="family-answer-feedback" role="status" data-review-feedback>${feedback ? escapeHtml(feedback.correct ? 'Correct. This sentence will return tomorrow.' : 'Keep practicing this sentence. It will return in ten minutes.') : ''}</p>
      <div class="sentence-review-controls"><button class="btn btn-secondary" data-review-audio aria-label="Hear the sentence" title="Hear the sentence">►</button>
      <button class="btn btn-primary" data-review-next ${feedback ? '' : 'disabled'}>Next →</button></div>`
      : '<h1>Review complete</h1><p>No more sentences are due right now.</p><button class="btn btn-primary" data-review-exit>Back to dashboard</button>'}
    </main>`;
  container.querySelectorAll('[data-review-exit]').forEach(button => button.addEventListener('click', actions.goDashboard));
  if (!review) return;
  const step = buildSentenceReviewStep(review);
  const interaction = state.sentenceReviewInteraction || (state.sentenceReviewInteraction = {});
  container.querySelector('[data-review-audio]').addEventListener('click', () => actions.speak(review.targetText));
  container.querySelector('[data-review-next]').addEventListener('click', () => {
    state.sentenceReviewIndex++;
    state.sentenceReviewFeedback = null;
    state.sentenceReviewInteraction = {};
    renderSentenceReviewView(container, state, actions);
  });
  bindFamilySentencePractice(container, step, interaction, response => {
    if (state.sentenceReviewFeedback) return;
    const tokens = step.completion ? step.completion.displayTokens.map((token, index) => index === step.completion.blankIndex ? response : token) : response;
    try {
      const result = submitSentenceReview(state.sessionUser.id, state.activePackId, review.id, tokens);
      state.sentenceReviewFeedback = result;
      container.querySelector('[data-review-feedback]').textContent = result.correct
        ? result.mastered ? 'Correct. You remembered this sentence on two review days.' : 'Correct. This sentence will return tomorrow.'
        : `The sentence is: ${result.targetText}. It will return in ten minutes.`;
      container.querySelector('[data-review-next]').disabled = false;
    } catch (error) {
      state.sentenceReviewError = error.message;
      container.querySelector('[data-review-feedback]').textContent = `Could not save this review: ${error.message}`;
    }
  });
}
