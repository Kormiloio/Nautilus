import { SENTENCE_LESSONS } from '../content/sentence-lessons.js';

export function getSentencePractice(allocation) {
  if (!allocation?.focused) return null;
  return SENTENCE_LESSONS.find(pack => allocation.focusSourceDay >= pack.firstSourceDay
    && allocation.focusSourceDay <= pack.lastSourceDay) || null;
}

export function buildSentencePracticeSteps(allocation, helpers, family = false) {
  const pack = allocation.sentencePractice;
  if (!pack) return [];
  const { shuffle, random } = helpers;
  const offset = ((allocation.focusStep || 1) - 1) * 2;
  const sentences = Array.from({ length: 3 }, (_, index) => pack.sentences[(offset + index) % pack.sentences.length]);
  const steps = [{
    type: family ? 'family-flashcards' : 'discover', title: 'Hear it in a sentence',
    subtitle: pack.pattern, note: pack.pattern, items: pack.controlled ? pack.sentences : sentences,
  }];
  if (pack.controlled) {
    steps.unshift({ type: family ? 'family-flashcards' : 'discover', title: 'Familiar words first', items: pack.vocabulary, reviewCount: pack.vocabulary.length });
    steps.splice(1, 0, { type: 'note', title: 'One sentence pattern', note: pack.pattern,
      patternLesson: pack.frames.map(frame => ({ ...frame,
        example: pack.sentences.find(item => item.frameId === frame.id),
        noun: pack.vocabulary[0],
      })),
    });
  }
  for (const item of sentences.slice(0, 2)) {
    const answer = item.targetText.trim().split(/\s+/);
    let tokens = shuffle(answer, random);
    if (tokens.join(' ') === answer.join(' ')) tokens = [...tokens.slice(1), tokens[0]];
    steps.push(family ? {
      type: 'family-sentence-builder', title: 'Build the sentence', items: [{ ...item, tokens }],
    } : { type: 'sentence-builder', title: 'Build the sentence', sentence: { prompt: item.supportText, tokens, answer } });
    const blankIndex = Math.max(0, answer.length - 2);
    const word = answer[blankIndex];
    const distractors = [...new Set((pack.controlled ? sentences : pack.sentences).flatMap(sentence => sentence.targetText.split(/\s+/)))]
      .filter(token => token !== word && /\p{L}/u.test(token));
    const completion = {
      prompt: item.supportText, blankIndex,
      displayTokens: answer.map((token, index) => index === blankIndex ? '____' : token),
      choices: shuffle([word, ...shuffle(distractors, random).slice(0, 3)], random),
      answer: word, completedSentence: answer,
    };
    steps.push({ type: family ? 'family-sentence-completion' : 'sentence-completion', title: 'Choose the missing word', completion });
  }
  if (family) {
    steps.push(...sentences.slice(1).map(item => ({
      type: 'family-quiz', title: 'Say the whole sentence', item,
      options: shuffle([item, ...shuffle((pack.controlled ? sentences : pack.sentences).filter(other => other.id !== item.id), random).slice(0, 3)], random),
    })));
    steps.push({ type: 'family-roleplay', title: pack.title, subtitle: 'Take a part, speak the lines, then swap roles.', turns: pack.dialogue, items: pack.dialogue });
  } else {
    steps.push({ type: 'dialogue', title: pack.title, dialogue: { roles: [...new Set(pack.dialogue.map(line => line.role))], lines: pack.dialogue } });
  }
  return steps;
}
