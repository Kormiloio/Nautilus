import { afterEach, describe, expect, it } from 'vitest';
import { SENTENCE_LESSONS } from '../../content/sentence-lessons.js';
import { VOYAGE_LESSONS, generateSession, getDailyVocabularyAllocation, setActiveLanguagePack } from '../learning-engine.js';
import { getSentencePractice } from '../sentence-practice.js';
import { buildFamilyPlaySteps } from '../family-play-session.js';
import { toVerifiedExercises } from '../verified-curriculum.js';

afterEach(() => setActiveLanguagePack('montenegrin-en'));

describe('Sentence-led focused lessons', () => {
  it('provides on-subject sentences for every focused day without changing revision-7 sessions', () => {
    for (let day = 27; day <= 200; day++) {
      const lesson = VOYAGE_LESSONS[day - 1];
      const allocation = getDailyVocabularyAllocation(lesson);
      const pack = getSentencePractice(allocation);
      expect(pack).toBeTruthy();
      expect(allocation.focusSourceDay).toBeGreaterThanOrEqual(pack.firstSourceDay);
      expect(allocation.focusSourceDay).toBeLessThanOrEqual(pack.lastSourceDay);
      const old = buildFamilyPlaySteps(lesson, null, 'old', { catalogRevision: 7 });
      expect(old.filter(step => step.type === 'family-quiz')).toHaveLength(10);
      expect(old.some(step => step.type === 'family-sentence-builder')).toBe(false);
      const steps = buildFamilyPlaySteps(lesson, null, 'new', { catalogRevision: 8 });
      expect(steps.filter(step => step.type === 'family-sentence-builder')).toHaveLength(2);
      expect(steps.filter(step => step.type === 'family-sentence-completion')).toHaveLength(2);
      expect(steps.filter(step => step.type === 'family-roleplay')).toHaveLength(1);
      expect(steps.filter(step => step.type === 'family-quiz' && !step.item.targetText.includes(' '))).toHaveLength(3);
      expect(steps.at(-1).sentenceChallenge).toBe(true);
      expect(steps.at(-1).items.every(item => item.targetText.includes(' '))).toBe(true);
      expect(toVerifiedExercises(steps).filter(exercise => exercise.kind === 'sentence_builder')).toHaveLength(2);
      const individual = generateSession(lesson, [], { catalogRevision: 8 });
      expect(individual.filter(step => step.type === 'sentence-builder')).toHaveLength(2);
      expect(individual.filter(step => step.type === 'sentence-completion')).toHaveLength(2);
    }
  });

  it('changes sentence practice across repeated focus days while staying on drinks', () => {
    const sentences = day => buildFamilyPlaySteps(VOYAGE_LESSONS[day - 1], null, 'same', { catalogRevision: 8 })
      .filter(step => step.type === 'family-sentence-builder').map(step => step.items[0].id);
    expect(sentences(35)).not.toEqual(sentences(36));
    expect(sentences(36)).not.toEqual(sentences(37));
    expect(sentences(35).every(id => id.startsWith('sentence-drinks-'))).toBe(true);
    expect(buildFamilyPlaySteps(VOYAGE_LESSONS[35], null, 'same', { catalogRevision: 8 }))
      .toEqual(buildFamilyPlaySteps(VOYAGE_LESSONS[35], null, 'same', { catalogRevision: 8 }));
  });

  it('keeps answers, scrambled tokens, and missing-word choices consistent', () => {
    for (const pack of SENTENCE_LESSONS) {
      expect(pack.reviewStatus).toBe('reviewed');
      expect(pack.dialogue).toHaveLength(4);
      const allocation = { focused: true, focusSourceDay: pack.firstSourceDay };
      expect(getSentencePractice(allocation).id).toBe(pack.id);
    }
    for (let day = 27; day <= 200; day++) {
      const steps = buildFamilyPlaySteps(VOYAGE_LESSONS[day - 1], null, 'answers', { catalogRevision: 8 });
      for (const exercise of toVerifiedExercises(steps)) {
        if (exercise.kind === 'sentence_builder') {
          expect([...exercise.tokens].sort()).toEqual([...exercise.answer].sort());
          expect(exercise.tokens).not.toEqual(exercise.answer);
        }
        if (exercise.kind === 'sentence_completion') {
          expect(new Set(exercise.choices).size).toBe(exercise.choices.length);
          expect(exercise.choices).toContain(exercise.answer);
          expect(exercise.completedSentence[exercise.blankIndex]).toBe(exercise.answer);
          expect(exercise.displayTokens[exercise.blankIndex]).toBe('____');
        }
      }
    }
  });
});
