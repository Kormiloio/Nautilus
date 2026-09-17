// Reproducible authoring assembly. This never publishes or grants language approval.
import { readFileSync, writeFileSync } from 'node:fs';
import { validateDailyPlan } from '../src/engine/daily-vocabulary.js';
const pilot = JSON.parse(readFileSync('src/content/daily-vocabulary/montenegrin-days-24-40.json', 'utf8'));
const inventory = new Map(pilot.vocabulary.map(item => [item.id, item]));
const records = new Map();
for (const line of readFileSync('src/content/daily-vocabulary/authoring/montenegrin-full-course.tsv', 'utf8').trim().split('\n')) {
  const [day, title, text] = line.split('|');
  if (records.has(Number(day))) throw new Error(`Duplicate day ${day}`);
  const items = text.split(';').map((pair, index) => {
    const [targetText, supportText] = pair.split('=');
    if (!targetText || !supportText || /\s|[^\p{Script=Latin}\p{M}-]/u.test(targetText)) throw new Error(`Non-word or mixed-script entry on day ${day}: ${targetText}`);
    return { id: `cnr-full-${String(day).padStart(3,'0')}-${String(index+1).padStart(2,'0')}`, kind: 'word', targetText, supportText, reviewStatus: 'draft', languageTag: 'cnr', script: 'Latn', direction: 'ltr' };
  });
  if (items.length !== (Number(day) === 1 ? 20 : 10)) throw new Error(`Wrong new word count on day ${day}`);
  records.set(Number(day), { title, items });
}
for (const lesson of pilot.lessons) {
  const day = Number(lesson.id.split('-')[1]);
  if (records.has(day)) throw new Error(`Pilot day ${day} must have one source`);
  records.set(day, { title: lesson.title, items: lesson.newWordIds.map(id => inventory.get(id)) });
}
const vocabulary = [], lessons = [], seen = [];
for (let day = 1; day <= 200; day++) {
  const record = records.get(day);
  if (!record) throw new Error(`Missing day ${day}`);
  const recent = day > 1 ? seen.slice(-5) : [];
  const olderPool = seen.slice(0, Math.max(0, seen.length - 5));
  const older = day > 1 ? Array.from({ length: 5 }, (_, i) => olderPool[((day-2)*5+i) % olderPool.length]) : [];
  lessons.push({ id: `voyage-${day}`, title: record.title, newWordIds: record.items.map(item => item.id), reviewWordIds: [...recent, ...older] });
  vocabulary.push(...record.items); seen.push(...record.items.map(item => item.id));
}
const plan = { version: 1, packId: 'montenegrin-en', status: 'draft', wordsPerDay: 20, startDay: 1, endDay: 200, vocabulary, lessons };
validateDailyPlan(plan, lessons.map(lesson => lesson.id), { requireReview: false });
writeFileSync('src/content/daily-vocabulary/montenegrin-full-200.json', JSON.stringify(plan, null, 2)+'\n');
const lookup = new Map(vocabulary.map(item => [item.id,item]));
let md = '# Montenegrin: complete 200-day vocabulary draft\n\n2,010 distinct lexical entries. Day 1 introduces 20 words; each later day introduces 10 words and reviews 10 earlier words. All language remains draft pending fluent review. This is a new-course authoring plan; it does not rewrite the legacy progress of the current family. Live pilot days 24–40 retain their separate legacy review baseline.\n\n';
for (const lesson of lessons) {
  md += `## Day ${lesson.id.split('-')[1]} — ${lesson.title}\n\n| New word | Meaning |\n| --- | --- |\n`;
  md += lesson.newWordIds.map(id => `| ${lookup.get(id).targetText} | ${lookup.get(id).supportText} |`).join('\n');
  md += '\n\nReview: '+(lesson.reviewWordIds.map(id => lookup.get(id).targetText).join(', ') || 'Opening day — all words are new')+'.\n\n';
}
writeFileSync('docs/MONTENEGRIN_VOCABULARY_FULL_200.md', md.trimEnd()+'\n');
console.log(`Assembled ${lessons.length} draft days with ${vocabulary.length} distinct words.`);

// Continuation for the existing family: preserve the exact day-24–40 pilot and
// seed review only from its legacy baseline and words actually introduced since.
const continuation = structuredClone(pilot);
continuation.endDay = 200;
continuation.status = 'pilot';
continuation.baseline = 'Existing first-23-day Family, Numbers and Colors vocabulary; completed history is preserved.';
const continuationSeen = [...pilot.priorWordIds, ...pilot.lessons.flatMap(lesson => lesson.newWordIds)];
for (const lesson of lessons.slice(40)) {
  const day = Number(lesson.id.split('-')[1]);
  const newItems = lesson.newWordIds.map(id => lookup.get(id));
  const recent = continuationSeen.slice(-5);
  const olderPool = continuationSeen.slice(0, -5);
  const reviewWordIds = [...recent, ...Array.from({ length:5 }, (_,index) => olderPool[((day-41)*5+index)%olderPool.length])];
  continuation.vocabulary.push(...newItems);
  continuation.lessons.push({ ...lesson, reviewWordIds });
  continuationSeen.push(...lesson.newWordIds);
}
validateDailyPlan(continuation, Array.from({length:177},(_,index)=>`voyage-${24+index}`), {requireReview:false});
writeFileSync('src/content/daily-vocabulary/montenegrin-continuation-24-200.json', JSON.stringify(continuation,null,2)+'\n');
console.log('Assembled live-pilot continuation: days 24–200, 1,770 new words, with legacy review baseline.');
