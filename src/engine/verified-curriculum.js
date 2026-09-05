// Deployment-only adapter: published definitions come from the existing packs.
// The client cannot upload an alternative definition to the grading RPC.
function words(items = []) {
  return items.map(item => ({ targetText:item.targetText, supportText:item.supportText,
    transliteration:item.transliteration, languageTag:item.languageTag, script:item.script, direction:item.direction }));
}
export function toVerifiedExercises(steps) {
  return steps.flatMap(step => {
    const common = { title:step.title, prompt:step.subtitle || step.title };
    if (step.type === 'done') return [];
    if (step.type === 'quiz') return step.quiz.questions.map(q => ({
      ...common,kind:'quiz',prompt:q.promptText,choices:q.options,answer:q.correctAnswer,
    }));
    if (step.type === 'family-quiz') return [{...common,kind:'quiz',prompt:step.item.supportText,
      choices:step.options.map(item => item.targetText),answer:step.item.targetText}];
    if (step.type === 'match') {
      const targets=step.match.tiles.filter(t => t.kind==='target');
      const supports=step.match.tiles.filter(t => t.kind==='support');
      return [{...common,kind:'match',targets:targets.map(t => ({id:t.id,text:t.text})),
        supports:supports.map(t => ({id:t.id,text:t.text})),
        answer:Object.fromEntries(targets.map(t => [t.id,supports.find(s => s.pairId===t.pairId).id]))}];
    }
    if (step.type === 'family-match') return [{...common,kind:'match',
      targets:step.targetItems.map(i => ({id:'target-'+i.id,text:i.targetText})),
      supports:step.supportItems.map(i => ({id:'support-'+i.id,text:i.supportText})),
      answer:Object.fromEntries(step.items.map(i => ['target-'+i.id,'support-'+i.id]))}];
    if (['warmup','discover','recall-flash','note','dialogue','listen','ready','family-flashcards','family-conversation','family-reflection'].includes(step.type)) {
      return [{...common,kind:'self_report',note:step.note,
        items:words(step.items || (step.item ? [step.item] : step.dialogue?.lines || [])),
        confirmation:'I completed this practice. Speaking is self-reported, not automatically assessed.'}];
    }
    throw new Error('Unmapped exercise type: '+step.type);
  });
}
