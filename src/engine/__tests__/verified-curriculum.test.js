import { describe,it,expect } from 'vitest';
import { getAvailableLanguagePacks,setActiveLanguagePack,VOYAGE_LESSONS,generateSession,getTopic,getTopics,createSeededRandom } from '../learning-engine.js';
import { buildFamilyPlaySteps } from '../family-play-session.js';
import { toVerifiedExercises } from '../verified-curriculum.js';

describe('Server curriculum adapter',()=>{
  it('maps every lesson in every pack to nonempty, gradable or explicitly self-reported exercises',()=>{
    let count=0;
    try {
      for(const pack of getAvailableLanguagePacks()) {
        setActiveLanguagePack(pack.id);
        for(const lesson of VOYAGE_LESSONS) for(const mode of ['individual','family']) {
          const key=[pack.id,pack.version,lesson.id,mode,1].join(':');
          const steps=mode==='family' ? buildFamilyPlaySteps(lesson,getTopic(lesson.topicId)||getTopics()[0],key)
            : generateSession(lesson,[],{random:createSeededRandom(key)});
          const exercises=toVerifiedExercises(steps);
          expect(exercises.length).toBeGreaterThan(0);
          expect(exercises.length).toBeLessThanOrEqual(100);
          for(const exercise of exercises) {
            if(exercise.kind==='quiz') expect(exercise.choices).toContain(exercise.answer);
            else if(exercise.kind==='match') {
              expect(Object.keys(exercise.answer)).toHaveLength(exercise.targets.length);
              expect(exercise.targets.length).toBeGreaterThan(0);
              for(const target of exercise.targets) expect(exercise.supports.map(s=>s.id)).toContain(exercise.answer[target.id]);
            } else {
              expect(exercise.kind).toBe('self_report');
              expect(exercise.confirmation).toContain('self-reported');
            }
          }
          count++;
        }
      }
      expect(count).toBe(2800);
    } finally { setActiveLanguagePack('montenegrin-en'); }
  });
  it('rejects unknown exercise types rather than quietly skipping required work',()=>{
    expect(()=>toVerifiedExercises([{type:'new-unmapped-type'}])).toThrow('Unmapped exercise');
  });
});
