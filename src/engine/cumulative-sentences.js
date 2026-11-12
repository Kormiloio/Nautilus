// Frames and nouns are language-pack content (src/content/daily-vocabulary/*-sentence-frames.json).
// The engine only selects familiar words and fills authored frames; it never writes language.
export function buildCumulativeSentencePack(allocation, inventory, content) {
  if (!allocation?.focused || !allocation.priorWordIds || !content?.frames?.length || !content.nouns?.length) return null;
  const { frames, nouns, startDay } = content;
  const prior = new Set(allocation.priorWordIds);
  const current = new Set(allocation.newItems.map(item => item.id));
  const available = nouns.flatMap(({ targetText, supportText }) => {
    const item = inventory.find(candidate => candidate.targetText === targetText);
    return item && (prior.has(item.id) || current.has(item.id)) ? [{ ...item, supportText }] : [];
  });
  const familiar = available.filter(item => prior.has(item.id));
  if (familiar.length < 2) return null;
  const offset = allocation.voyageDay - startDay;
  const focus = available.find(item => current.has(item.id) && !prior.has(item.id));
  const recent = familiar.filter(item => current.has(item.id));
  const pool = recent.length ? [...recent, ...familiar.filter(item => !current.has(item.id))] : familiar;
  const chosen = focus ? [focus] : [];
  for (let index = 0; chosen.length < 3 && index < pool.length; index++) {
    const item = pool[(Math.max(0, offset) + index) % pool.length];
    if (!chosen.some(candidate => candidate.id === item.id)) chosen.push(item);
  }
  const frameIndex = Math.min(frames.length - 1, Math.max(0, offset));
  const frame = frames[frameIndex];
  const previous = frames[Math.max(0, frameIndex - 1)];
  const sentenceFrames = frame.id === previous.id ? [frame] : [frame, previous];
  const sentences = sentenceFrames.flatMap(pattern => chosen.map(item => ({
    id: `cumulative-${pattern.id}-${item.id}`, targetText: `${pattern.before} ${item.targetText}${pattern.punctuation}`,
    supportText: `${pattern.english} ${item.supportText}${pattern.punctuation}`,
    prerequisiteWordIds: [item.id], frameId: pattern.id,
    teachingNote: `${pattern.note} ${item.targetText} = ${item.supportText}.`,
    languageTag: content.languageTag, script: content.script, direction: content.direction, reviewStatus: content.reviewStatus,
  })));
  return {
    id: 'cumulative', title: 'Use words you already know', controlled: true, reviewStatus: content.reviewStatus,
    pattern: sentenceFrames.map(pattern => pattern.note).join(' '), frames: sentenceFrames, vocabulary: chosen, sentences,
    dialogue: sentences.slice(0, 3).map((item, index) => ({ ...item, role: index % 2 ? 'Partner' : 'Speaker' })),
  };
}
