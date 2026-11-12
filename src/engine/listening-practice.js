import { getDailyVocabularyAllocation, getTopic, createSeededRandom, shuffle } from './learning-engine.js';
import { getSentencePractice } from './sentence-practice.js';
import { selectBestVoice } from './speech-engine.js';

export function getListeningItems(lesson) {
  if (!lesson) return [];
  const allocation = getDailyVocabularyAllocation(lesson, { cumulative: true });
  const pack = allocation?.sentencePractice || getSentencePractice(allocation);
  if (pack) return pack.sentences;
  const topic = getTopic(lesson.topicId);
  return [...(topic?.items || []), ...(topic?.connections || []).flatMap(connection => connection.items || []), ...(topic?.dialogue?.lines || [])]
    .filter(item => item.targetText?.trim().split(/\s+/).length > 1 && !item.targetText.includes('/'));
}

export function buildListeningExercises(items, seed) {
  const random = createSeededRandom(seed);
  const sentences = [...new Map(items.filter(item => item.targetText?.trim().split(/\s+/).length > 1 && item.supportText?.trim())
    .map(item => [item.targetText, item])).values()];
  const selected = shuffle(sentences, random).slice(0, 6);
  // Only use words from sentences shown in this session's preparation.
  const vocabulary = [...new Set(selected.flatMap(item => listeningWords(item.targetText)))];
  return selected.map((item, index) => {
    const kind = index % 2 === 0 && new Set(sentences.map(sentence => sentence.supportText)).size > 1 ? 'meaning' : 'order';
    const answer = listeningWords(item.targetText);
    const distractors = shuffle(vocabulary.filter(word => !answer.includes(word)), random).slice(0, 3);
    let tokens = shuffle([...answer, ...distractors], random);
    if (tokens.join(' ') === answer.join(' ')) tokens = [...tokens.slice(1), tokens[0]];
    return { kind, item, tokens, choices: shuffle([item.supportText, ...shuffle([...new Set(sentences.map(sentence => sentence.supportText))]
      .filter(meaning => meaning !== item.supportText), random).slice(0, 3)], random) };
  });
}

export function listeningWords(text) {
  return text.normalize('NFC').toLowerCase().trim().split(/\s+/)
    .map(word => word.replace(/^[“”"«»()[\].,!?;:…]+|[“”"«»()[\].,!?;:…]+$/gu, ''))
    .filter(Boolean);
}

export function gradeListeningExercise(exercise, response) {
  return exercise.kind === 'meaning' ? response === exercise.item.supportText
    : Array.isArray(response) && listeningWords(response.join(' ')).join(' ') === listeningWords(exercise.item.targetText).join(' ');
}

export function createListeningAudio(languageCode, synthesis, UtteranceClass, onVoicesChanged = () => {}) {
  let generation = 0;
  let disposed = false;
  const voice = () => synthesis && UtteranceClass ? selectBestVoice(synthesis.getVoices(), languageCode) : null;
  const voicesChanged = () => { if (!disposed) onVoicesChanged(voice()); };
  synthesis?.addEventListener?.('voiceschanged', voicesChanged);
  return {
    getVoice: voice,
    play(text, slow, onEnd, onError) {
      if (disposed) return false;
      const selected = voice();
      if (!selected) { onError('No compatible voice is available on this device.'); return false; }
      const current = ++generation;
      try {
        synthesis.cancel();
        const utterance = new UtteranceClass(text);
        utterance.voice = selected;
        utterance.lang = selected.lang;
        utterance.rate = slow ? 0.6 : 0.82;
        utterance.onend = () => { if (!disposed && generation === current) onEnd(); };
        utterance.onerror = () => { if (!disposed && generation === current) onError('Audio could not play. Try again or choose written practice.'); };
        synthesis.speak(utterance);
        return true;
      } catch {
        onError('Audio could not play. Try again or choose written practice.');
        return false;
      }
    },
    dispose() {
      disposed = true;
      generation++;
      synthesis?.removeEventListener?.('voiceschanged', voicesChanged);
      synthesis?.cancel();
    },
  };
}
