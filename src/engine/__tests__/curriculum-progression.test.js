import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { VOYAGE_LESSONS, generateSession, getDailyVocabularyAllocation } from '../learning-engine.js';
import { buildFamilyPlaySteps } from '../family-play-session.js';
import { toVerifiedExercises } from '../verified-curriculum.js';
import { getListeningItems } from '../listening-practice.js';
import { getSideQuestForProgress } from '../../content/side-quests.js';
import { detectiveEditionIndex } from '../../content/detective-editions.js';

describe('Cumulative vocabulary progression', () => {
  it('reuses at least two previously introduced nouns and never pulls words from a future lesson', () => {
    for (let day = 27; day <= 200; day++) {
      const allocation = getDailyVocabularyAllocation(VOYAGE_LESSONS[day - 1], { cumulative: true });
      const pack = allocation.sentencePractice;
      expect(pack.controlled).toBe(true);
      const prior = new Set(allocation.priorWordIds);
      const introduced = new Set([...prior, ...allocation.newItems.map(item => item.id)]);
      expect(pack.vocabulary.filter(item => prior.has(item.id)).length).toBeGreaterThanOrEqual(2);
      expect(pack.vocabulary.filter(item => !prior.has(item.id)).length).toBeLessThanOrEqual(1);
      for (const sentence of pack.sentences) {
        expect(sentence.prerequisiteWordIds.every(id => introduced.has(id))).toBe(true);
        expect(pack.frames.map(frame => frame.id)).toContain(sentence.frameId);
        expect(sentence.teachingNote).toContain('=');
      }
      const listening = getListeningItems(VOYAGE_LESSONS[day - 1]);
      expect(listening.map(item => item.id)).toEqual(pack.sentences.map(item => item.id));
    }
  });

  it('teaches the exact vocabulary, frame, answers, distractors, and dialogue before testing', () => {
    for (let day = 27; day <= 200; day++) {
      for (const family of [false, true]) {
        const lesson = VOYAGE_LESSONS[day - 1];
        const steps = family ? buildFamilyPlaySteps(lesson, null, 'cumulative', { catalogRevision: 9 }) : generateSession(lesson, [], { catalogRevision: 9 });
        const firstBuilder = steps.findIndex(step => /sentence-builder/.test(step.type));
        const prior = steps.slice(0, firstBuilder);
        expect(prior.some(step => step.title === 'Familiar words first')).toBe(true);
        expect(prior.some(step => step.type === 'note' && step.note.includes(' = '))).toBe(true);
        const patterns = prior.find(step => step.patternLesson)?.patternLesson;
        expect(patterns.length).toBeGreaterThanOrEqual(1);
        for (const pattern of patterns) {
          expect(pattern.parts.map(([word]) => word).join(' ')).toBe(pattern.before);
          expect(pattern.example.frameId).toBe(pattern.id);
          expect(pattern.example.targetText).toContain(pattern.noun.targetText);
        }
        const withoutPresentation = steps.map(({ patternLesson, ...step }) => step);
        expect(toVerifiedExercises(withoutPresentation)).toEqual(toVerifiedExercises(steps));
        const taught = new Set(prior.flatMap(step => (step.items || []).map(item => item.targetText)));
        const tokens = new Set([...taught].flatMap(text => text.split(/\s+/)));
        const exercises = toVerifiedExercises(steps);
        for (const step of steps) {
          if (step.completion) expect(step.completion.choices.every(choice => tokens.has(choice))).toBe(true);
          if (step.type === 'family-quiz' && step.item.targetText.includes(' '))
            expect(step.options.every(item => taught.has(item.targetText))).toBe(true);
          if (step.type === 'family-roleplay') expect(step.turns.every(item => taught.has(item.targetText))).toBe(true);
        }
        expect(exercises.filter(item => item.kind === 'sentence_builder')).toHaveLength(2);
        expect(exercises.filter(item => item.kind === 'sentence_completion')).toHaveLength(2);
      }
    }
  });

  it('preserves revision-8 family sessions with their existing exercises and segment count', () => {
    const lesson = VOYAGE_LESSONS[39];
    const old = buildFamilyPlaySteps(lesson, null, 'pinned', { catalogRevision: 8 });
    expect(old).toHaveLength(15);
    expect(old[3].title).toBe('Hear it in a sentence');
    expect(old[4].type).toBe('family-sentence-builder');
    expect(old.some(step => step.title === 'Familiar words first')).toBe(false);
    expect(buildFamilyPlaySteps(lesson, null, 'new', { catalogRevision: 9 }).some(step => step.title === 'Familiar words first')).toBe(true);
  });
});

describe('Detective case editions', () => {
  it('provides unique case sentences at every Detective milestone in the 200-day course', () => {
    const sentences = new Set(), badges = new Set();
    for (let milestone = 10; milestone <= 190; milestone += 30) {
      const quest = getSideQuestForProgress('montenegrin-en', milestone);
      expect(quest.edition).toBe(1 + (milestone - 10) / 30);
      expect(quest.cases).toHaveLength(3);
      expect(badges.has(quest.badgeId)).toBe(false);
      badges.add(quest.badgeId);
      for (const item of quest.cases) {
        expect(sentences.has(item.sentence)).toBe(false);
        sentences.add(item.sentence);
        expect(item.choices.map(choice => choice.id)).toContain(item.answerId);
        expect(new Set(item.choices.map(choice => choice.id)).size).toBe(3);
        if (milestone > 10) expect(item.clueWords).toContain(' = ');
      }
      expect(getSideQuestForProgress('montenegrin-en', milestone + 4).cases).toEqual(quest.cases);
    }
    expect(sentences.size).toBe(21);
    expect(detectiveEditionIndex(11)).toBeNull();
    expect(detectiveEditionIndex(40)).toBe(1);
  });

  it('serves the same cases from the server migration as the client at every milestone, including past 190', () => {
    // 20261026010000 is already applied in production; the 190 cap is lifted by 20261112010000.
    const sql = readFileSync(new URL('../../../supabase/migrations/20261112010000_detective_cases_past_190.sql', import.meta.url), 'utf8');
    const original = readFileSync(new URL('../../../supabase/migrations/20261026010000_cumulative_detective_editions.sql', import.meta.url), 'utf8');
    const literal = text => JSON.parse(text.match(/declare packs jsonb := '(.*?)'::jsonb;/s)[1].replaceAll("''", "'"));
    const packs = literal(sql);
    expect(packs).toEqual(literal(original));
    expect(sql).not.toMatch(/target_milestone\s*>\s*190/);
    // Mirrors detective_cases_for_milestone in the migration.
    const serverIndex = milestone => milestone === 10 ? 0 : 1 + ((milestone - 40) / 30) % (packs.length - 1);
    for (let milestone = 10; milestone <= 400; milestone += 30) {
      expect(packs[serverIndex(milestone)]).toEqual(getSideQuestForProgress('montenegrin-en', milestone).cases);
    }
  });

  it('awards a new badge for every repeated case pack after milestone 190', () => {
    const badges = new Set();
    for (let milestone = 10; milestone <= 400; milestone += 30) badges.add(getSideQuestForProgress('montenegrin-en', milestone).badgeId);
    expect(badges.size).toBe(14);
    expect(getSideQuestForProgress('montenegrin-en', 220).badgeId).toBe('false-friend-detective:edition-8');
  });
});

describe('Cumulative sentence content boundary', () => {
  it('keeps frames and nouns in pack content, not engine code', async () => {
    const engine = readFileSync(new URL('../cumulative-sentences.js', import.meta.url), 'utf8');
    expect(engine).not.toMatch(/Ovo je|Gdje je|'cnr'|voyageDay - 27/);
    const { PILOT_SENTENCE_FRAMES } = await import('../../content/daily-plans.js');
    const frames = PILOT_SENTENCE_FRAMES['montenegrin-en'];
    expect(frames.reviewStatus).toBe('draft');
    expect(frames.frames.length).toBeGreaterThan(0);
    for (const noun of frames.nouns) expect(noun.targetText && noun.supportText).toBeTruthy();
  });

  it('builds no cumulative sentences for a pack without frame content', async () => {
    const { buildCumulativeSentencePack } = await import('../cumulative-sentences.js');
    const allocation = getDailyVocabularyAllocation(VOYAGE_LESSONS[40], { cumulative: true });
    expect(buildCumulativeSentencePack(allocation, [], undefined)).toBeNull();
  });
});
