import './css/style.css';
import { renderListeningPracticeView } from './components/listening-practice-view.js';
import { buildListeningExercises, getListeningItems } from './engine/listening-practice.js';
import { VOYAGE_LESSONS } from './engine/learning-engine.js';
import { recordSentenceMistake } from './engine/sentence-review.js';

const state = { listeningPractice: { id: `listening-preview:${Date.now()}`, index: 0, results: [], exercises: buildListeningExercises(getListeningItems(VOYAGE_LESSONS[39]), 'listening-preview') } };
renderListeningPracticeView(document.getElementById('app'), state, {
  goDashboard: () => { window.location.href = '/sentence-preview.html'; },
  rememberSentenceMistake: (item, eventId) => recordSentenceMistake('listening-preview', 'montenegrin-en', { ...item, eventId }),
});
