// Authored frames use singular nouns in their taught nominative form.
const frames = [
  { id: 'identify', before: 'Ovo je', english: 'This is', parts: [['Ovo', 'this'], ['je', 'is']], punctuation: '.', note: 'Ovo = this; je = is. Put a familiar naming word after “Ovo je”.' },
  { id: 'locate', before: 'Gdje je', english: 'Where is', parts: [['Gdje', 'where'], ['je', 'is']], punctuation: '?', note: 'Gdje = where; je = is. “Gdje je” asks where one person or thing is.' },
  { id: 'here', before: 'Tu je', english: 'Here is', parts: [['Tu', 'here'], ['je', 'is']], punctuation: '.', note: 'Tu = here; je = is. “Tu je” points out one person or thing.' },
  { id: 'negative', before: 'To nije', english: 'That is not', parts: [['To', 'that'], ['nije', 'is not']], punctuation: '.', note: 'To = that; nije = is not. “To nije” says what something is not.' },
];

// Explicit forms and glosses; do not infer grammar or familiarity from spelling.
const nouns = [
  ['mama', 'mom'], ['tata', 'dad'], ['brat', 'brother'], ['sestra', 'sister'],
  ['džemper', 'a sweater'], ['suknja', 'a skirt'], ['šal', 'a scarf'], ['kapa', 'a hat'],
  ['krug', 'a circle'], ['kvadrat', 'a square'], ['drvo', 'wood'], ['staklo', 'glass'],
  ['čaša', 'a glass'], ['šolja', 'a cup'], ['flaša', 'a bottle'], ['bokal', 'a jug'],
  ['limun', 'a lemon'], ['narandža', 'an orange'], ['jagoda', 'a strawberry'], ['kruška', 'a pear'],
  ['šećer', 'sugar'], ['med', 'honey'], ['led', 'ice'], ['cimet', 'cinnamon'],
  ['tanjir', 'a plate'], ['kašika', 'a spoon'], ['viljuška', 'a fork'], ['nož', 'a knife'],
  ['pirinač', 'rice'], ['piletina', 'chicken'],
  ['kafa', 'coffee'], ['čaj', 'tea'], ['voda', 'water'], ['sok', 'juice'], ['mlijeko', 'milk'],
];

export function buildCumulativeSentencePack(allocation, inventory) {
  if (!allocation?.focused || !allocation.priorWordIds) return null;
  const prior = new Set(allocation.priorWordIds);
  const current = new Set(allocation.newItems.map(item => item.id));
  const available = nouns.flatMap(([targetText, supportText]) => {
    const item = inventory.find(candidate => candidate.targetText === targetText);
    return item && (prior.has(item.id) || current.has(item.id)) ? [{ ...item, supportText }] : [];
  });
  const familiar = available.filter(item => prior.has(item.id));
  if (familiar.length < 2) return null;
  const offset = allocation.voyageDay - 27;
  const focus = available.find(item => current.has(item.id) && !prior.has(item.id));
  const recent = familiar.filter(item => current.has(item.id));
  const pool = recent.length ? [...recent, ...familiar.filter(item => !current.has(item.id))] : familiar;
  const chosen = focus ? [focus] : [];
  for (let index = 0; chosen.length < 3 && index < pool.length; index++) {
    const item = pool[(Math.max(0, offset) + index) % pool.length];
    if (!chosen.some(candidate => candidate.id === item.id)) chosen.push(item);
  }
  const frameIndex = Math.min(3, Math.max(0, offset));
  const frame = frames[frameIndex];
  const previous = frames[Math.max(0, frameIndex - 1)];
  const sentenceFrames = frame.id === previous.id ? [frame] : [frame, previous];
  const sentences = sentenceFrames.flatMap(pattern => chosen.map(item => ({
    id: `cumulative-${pattern.id}-${item.id}`, targetText: `${pattern.before} ${item.targetText}${pattern.punctuation}`,
    supportText: `${pattern.english} ${item.supportText}${pattern.punctuation}`,
    prerequisiteWordIds: [item.id], frameId: pattern.id,
    teachingNote: `${pattern.note} ${item.targetText} = ${item.supportText}.`,
    languageTag: 'cnr', script: 'Latn', direction: 'ltr', reviewStatus: 'draft',
  })));
  return {
    id: 'cumulative', title: 'Use words you already know', controlled: true, reviewStatus: 'draft',
    pattern: sentenceFrames.map(pattern => pattern.note).join(' '), frames: sentenceFrames, vocabulary: chosen, sentences,
    dialogue: sentences.slice(0, 3).map((item, index) => ({ ...item, role: index % 2 ? 'Partner' : 'Speaker' })),
  };
}
