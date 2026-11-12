import './css/style.css';
import { renderFamilyPlayView } from './components/family-play-view.js';
import { buildFamilyPlaySteps } from './engine/family-play-session.js';
import { VOYAGE_LESSONS, getTopic } from './engine/learning-engine.js';
import { speakWithBestDeviceVoice } from './engine/speech-engine.js';
import { getSentenceReviews, recordSentenceMistake, sentenceMistakeFromFamilyStep } from './engine/sentence-review.js';
import { renderSentenceReviewView } from './components/sentence-review-view.js';

// A local-only Vite entry; production builds include only index.html.
const app = document.getElementById('app');
const lesson = VOYAGE_LESSONS[35];
const steps = buildFamilyPlaySteps(lesson, getTopic(lesson.topicId), 'sentence-preview', { catalogRevision: 9 });
const state = {
  activeLesson: lesson, sessionUser: { id: 'preview-parent' }, families: [{ role: 'owner' }],
  familyPlayState: { activeSession: {
    id: 'sentence-preview', voyageDay: 36, catalogRevision: 9, status: 'live',
    controllingAdult: 'preview-parent', controllerName: 'Parent',
    currentSegment: steps.findIndex(step => step.title === 'Familiar words first'),
    participants: [{ profileId: 'preview-learner', name: 'Your family', status: 'joined', linked: true, lastSeenAt: new Date().toISOString() }],
    quizAnswers: [],
  } },
};
const session = state.familyPlayState.activeSession;
const actions = {
  rememberFamilySentence: (step, segment, response) => recordSentenceMistake(state.sessionUser.id, 'montenegrin-en', {
    ...sentenceMistakeFromFamilyStep(step), eventId: `${session.id}:${segment}:${JSON.stringify(response)}`,
  }),
  speak: text => speakWithBestDeviceVoice(text, 'cnr', window.speechSynthesis, window.SpeechSynthesisUtterance),
  controlFamilySession: (status, segment) => {
    session.status = status;
    if (segment != null) session.currentSegment = Math.max(0, Math.min(segment, steps.length - 1));
    render();
  },
  answerFamilyQuiz: answerId => {
    session.quizAnswers = [{ answerId, name: 'You', isCurrentUser: true }, { answerId, name: 'Your family', profileId: 'preview-learner' }];
    render();
  },
  reconcileFamilyQuiz: () => { session.currentSegment++; session.quizAnswers = []; render(); },
  finishFamilyChallenge: () => { session.currentSegment = 3; render(); },
  goFamilyOverview: () => { session.currentSegment = 3; render(); },
  goDashboard: () => { session.currentSegment = 3; render(); },
};
function render() {
  session.participants[0].lastSeenAt = new Date().toISOString();
  renderFamilyPlayView(app, state, actions);
  app.querySelector('.family-play-nav').style.flexWrap = 'wrap';
  const select = document.createElement('select');
  select.setAttribute('aria-label', 'Sentence activity');
  select.style.cssText = 'max-width:190px;padding:8px;background:#102a35;color:white;border:1px solid #76cfe8;border-radius:4px';
  for (const [index, step] of steps.entries()) {
    const option = new Option(step.title, index, false, index === session.currentSegment);
    select.add(option);
  }
  select.addEventListener('change', () => { session.currentSegment = Number(select.value); session.quizAnswers = []; render(); });
  app.querySelector('.family-play-nav').append(select);
  const review = document.createElement('button');
  review.className = 'btn btn-secondary';
  review.textContent = 'Review mistakes';
  review.addEventListener('click', () => {
    state.activePackId = 'montenegrin-en';
    state.sentenceReviews = getSentenceReviews(state.sessionUser.id, state.activePackId, { dueOnly: true }).slice(0, 5);
    state.sentenceReviewIndex = 0;
    state.sentenceReviewFeedback = null;
    state.sentenceReviewInteraction = {};
    renderSentenceReviewView(app, state, actions);
  });
  app.querySelector('.family-play-nav').append(review);
}
render();
