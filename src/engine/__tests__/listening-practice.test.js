import { describe, expect, it, vi } from 'vitest';
import { SENTENCE_LESSONS } from '../../content/sentence-lessons.js';
import { buildListeningExercises, createListeningAudio, gradeListeningExercise, getListeningItems, listeningWords } from '../listening-practice.js';
import { VOYAGE_LESSONS } from '../learning-engine.js';

describe('Listening exercise generation', () => {
  it('mixes meaning and word-order questions with unique valid choices', () => {
    for (const pack of SENTENCE_LESSONS) {
      const exercises = buildListeningExercises(pack.sentences, pack.id);
      expect(exercises).toHaveLength(6);
      expect(exercises.filter(exercise => exercise.kind === 'meaning')).toHaveLength(3);
      for (const exercise of exercises) {
        expect(exercise.choices).toContain(exercise.item.supportText);
        expect(new Set(exercise.choices).size).toBe(exercise.choices.length);
        expect(exercise.tokens.join(' ')).not.toBe(exercise.item.targetText);
        const answer = exercise.kind === 'meaning' ? exercise.item.supportText : exercise.item.targetText.split(' ');
        expect(gradeListeningExercise(exercise, answer)).toBe(true);
        expect(gradeListeningExercise(exercise, 'wrong')).toBe(false);
      }
      expect(exercises).toEqual(buildListeningExercises(pack.sentences, pack.id));
    }
  });

  it('selects sentences from the current focused subject', () => {
    const items = getListeningItems(VOYAGE_LESSONS[39]);
    expect(items.length).toBeGreaterThan(0);
    expect(items.every(item => item.id.startsWith('cumulative-'))).toBe(true);
    expect(items.every(item => item.teachingNote && item.prerequisiteWordIds.length)).toBe(true);
    expect(getListeningItems(null)).toEqual([]);
  });

  it('adds familiar distractors without case or punctuation clues, preserving every answer word', () => {
    for (let day = 27; day <= 200; day++) {
      const exercises = buildListeningExercises(getListeningItems(VOYAGE_LESSONS[day - 1]), `distractors-${day}`);
      const prepared = new Set(exercises.flatMap(exercise => listeningWords(exercise.item.targetText)));
      for (const exercise of exercises.filter(exercise => exercise.kind === 'order')) {
        const answer = listeningWords(exercise.item.targetText);
        expect(exercise.tokens.length).toBeGreaterThan(answer.length);
        expect(exercise.tokens.length).toBeLessThanOrEqual(answer.length + 3);
        expect(exercise.tokens.every(word => prepared.has(word))).toBe(true);
        const remaining = [...exercise.tokens];
        for (const word of answer) {
          expect(remaining).toContain(word);
          remaining.splice(remaining.indexOf(word), 1);
        }
        expect(gradeListeningExercise(exercise, answer)).toBe(true);
        expect(gradeListeningExercise(exercise, [...answer, remaining[0]])).toBe(false);
        expect(gradeListeningExercise(exercise, answer.slice(1))).toBe(false);
        expect(gradeListeningExercise(exercise, [...answer].reverse())).toBe(false);
      }
    }
  });

  it('preserves repeated words and does not invent distractors for a one-sentence pool', () => {
    const [exercise] = buildListeningExercises([{ targetText: 'To je to.', supportText: 'That is it.' }], 'repeat');
    expect(exercise.tokens.filter(word => word === 'to')).toHaveLength(2);
    expect(exercise.tokens).toHaveLength(3);
    expect(gradeListeningExercise(exercise, ['to', 'je', 'to'])).toBe(true);
    expect(gradeListeningExercise(exercise, ['to', 'je'])).toBe(false);
  });

  it('ignores isolated words and uses word order when only one sentence is available', () => {
    expect(buildListeningExercises([{ targetText: 'voda', supportText: 'water' }], 'single')).toEqual([]);
    const single = buildListeningExercises([SENTENCE_LESSONS[0].sentences[0]], 'single');
    expect(single[0].kind).toBe('order');
  });
});

function audioFixture(voices = [{ name: 'Croatian', lang: 'hr-HR' }]) {
  const utterances = [];
  const synthesis = new EventTarget();
  synthesis.getVoices = () => voices;
  synthesis.cancel = vi.fn();
  synthesis.speak = utterance => utterances.push(utterance);
  return { synthesis, utterances };
}

describe('Listening audio lifecycle', () => {
  it('prefers a native Montenegrin voice and supports normal and slow playback', () => {
    const { synthesis, utterances } = audioFixture([{ name: 'Croatian', lang: 'hr-HR' }, { name: 'Montenegrin', lang: 'cnr-ME' }]);
    const audio = createListeningAudio('cnr', synthesis, class { constructor(text) { this.text = text; } });
    const done = vi.fn();
    audio.play('Čaj je topao.', false, done, vi.fn());
    expect(utterances[0].lang).toBe('cnr-ME');
    expect(utterances[0].rate).toBe(0.82);
    expect(done).not.toHaveBeenCalled();
    utterances[0].onend();
    expect(done).toHaveBeenCalledOnce();
    audio.play('Čaj je topao.', true, done, vi.fn());
    expect(utterances[1].rate).toBe(0.6);
    audio.dispose();
  });

  it('rejects English-only voices and unsupported speech', () => {
    const { synthesis, utterances } = audioFixture([{ name: 'English', lang: 'en-US' }]);
    const error = vi.fn();
    const audio = createListeningAudio('cnr', synthesis, class {});
    expect(audio.play('Čaj je topao.', false, vi.fn(), error)).toBe(false);
    expect(utterances).toEqual([]);
    expect(error).toHaveBeenCalled();
    expect(createListeningAudio('cnr', null, null).getVoice()).toBeNull();
    audio.dispose();
  });

  it('notices voices loaded after opening and ignores cancelled or disposed playback', () => {
    const voices = [];
    const { synthesis, utterances } = audioFixture(voices);
    const changed = vi.fn(), done = vi.fn();
    const audio = createListeningAudio('cnr', synthesis, class {}, changed);
    voices.push({ name: 'Croatian', lang: 'hr-HR' });
    synthesis.dispatchEvent(new Event('voiceschanged'));
    expect(changed).toHaveBeenCalledOnce();
    audio.play('First.', false, done, vi.fn());
    audio.play('Second.', true, done, vi.fn());
    utterances[0].onend();
    expect(done).not.toHaveBeenCalled();
    audio.dispose();
    utterances[1].onend();
    synthesis.dispatchEvent(new Event('voiceschanged'));
    expect(done).not.toHaveBeenCalled();
    expect(changed).toHaveBeenCalledOnce();
  });

  it('reports speech failures without pretending playback completed', () => {
    const { synthesis, utterances } = audioFixture();
    const error = vi.fn(), done = vi.fn();
    const audio = createListeningAudio('cnr', synthesis, class {});
    audio.play('Sentence.', false, done, error);
    utterances[0].onerror();
    expect(error).toHaveBeenCalledOnce();
    expect(done).not.toHaveBeenCalled();
    synthesis.speak = () => { throw new Error('Unavailable'); };
    expect(audio.play('Sentence.', false, done, error)).toBe(false);
    audio.dispose();
  });
});

describe('Verified listening sets (catalog revision 10)', () => {
  it('builds a deterministic, server-gradable set for each voyage day with sentences', async () => {
    const { VOYAGE_LESSONS } = await import('../learning-engine.js');
    const { buildVerifiedListeningSteps } = await import('../listening-practice.js');
    const { toVerifiedExercises } = await import('../verified-curriculum.js');
    let sets = 0;
    for (const lesson of VOYAGE_LESSONS) {
      const steps = buildVerifiedListeningSteps(lesson);
      expect(buildVerifiedListeningSteps(lesson)).toEqual(steps);
      if (!steps.length) continue;
      sets++;
      expect(steps[0]).toMatchObject({ type: 'discover', title: 'Read and hear first' });
      const exercises = toVerifiedExercises(steps);
      expect(exercises[0].kind).toBe('self_report');
      for (const exercise of exercises.slice(1)) {
        expect(exercise.audioText).toBeTruthy();
        if (exercise.kind === 'quiz') expect(exercise.choices).toContain(exercise.answer);
        else {
          expect(exercise.kind).toBe('sentence_builder');
          expect([...exercise.tokens].sort()).toEqual([...exercise.answer].sort());
          expect(exercise.tokens.join(' ')).not.toBe(exercise.answer.join(' '));
          expect(exercise.writtenPrompt).toBeTruthy();
        }
      }
    }
    expect(sets).toBe(185);
  });
});
