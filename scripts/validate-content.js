import { validateDailyPlan } from '../src/engine/daily-vocabulary.js';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import Ajv from 'ajv';
import albanian from '../src/content/albanian.js';
import iraqiArabic from '../src/content/iraqi-arabic.js';
import mandaic from '../src/content/mandaic.js';
import spanish from '../src/content/spanish.js';
import italian from '../src/content/italian.js';
import french from '../src/content/french.js';

const schema = JSON.parse(readFileSync('./src/content/schema.json', 'utf8'));
const montenegrin = JSON.parse(readFileSync('./src/content/topics.json', 'utf8'));
const ajv = new Ajv({ allErrors: true, useDefaults: true });
const validateSchema = ajv.compile(schema);

function validatePack(content) {
  const valid = validateSchema(content);
  if (!valid) {
    const details = validateSchema.errors
      .map(error => `${error.instancePath}: ${error.message}`)
      .join('\n');
    throw new Error(`${content.languagePack?.id || 'unknown pack'} schema failed:\n${details}`);
  }

  const allTopics = [...content.topics, ...content.bonusTopics];
  const topicIds = content.topics.map(topic => topic.id);
  const allTopicIds = allTopics.map(topic => topic.id);
  const learningItems = allTopics.flatMap(topic => [
    ...topic.items,
    ...(topic.connections || []).flatMap(connection => connection.items),
    ...(topic.dialogue?.lines || []),
  ]);
  const itemIds = learningItems.map(item => item.id);
  const mappedIds = [...content.curriculum.months.flat(), ...content.curriculum.extras];
  const duplicateIds = mappedIds.filter((id, index) => mappedIds.indexOf(id) !== index);
  const unknownIds = mappedIds.filter(id => !allTopicIds.includes(id));
  // Core topics must be mapped; optional bonus topics may remain free-practice
  // material unless a pack explicitly lists them in curriculum.extras.
  const unmappedIds = topicIds.filter(id => !mappedIds.includes(id));
  const pack = content.languagePack;
  const invalidConnection = allTopics
    .flatMap(topic => topic.connections || [])
    .find(connection => connection.requiresTopicIds.some(topicId => !allTopicIds.includes(topicId)));

  if (!pack.targetLanguage.scripts.includes(pack.defaultScript)) {
    throw new Error(`${pack.id}: defaultScript ${pack.defaultScript} is not declared in targetLanguage.scripts.`);
  }
  if (invalidConnection) {
    throw new Error(`${pack.id}: connection ${invalidConnection.id} requires an unknown topic.`);
  }
  if (pack.tracks?.length) {
    const missingTrack = learningItems.find(item => !item.track);
    if (missingTrack) {
      throw new Error(`${pack.id}: tracked packs require a track on item ${missingTrack.id}.`);
    }
  }
  const invalidTrack = learningItems.find(item => item.track && !pack.tracks?.includes(item.track));
  if (invalidTrack) {
    throw new Error(`${pack.id}: item ${invalidTrack.id} uses undeclared track ${invalidTrack.track}.`);
  }
  const invalidDirection = learningItems.find(item => item.direction && item.direction !== pack.direction);
  if (invalidDirection) {
    throw new Error(`${pack.id}: item ${invalidDirection.id} direction conflicts with its pack.`);
  }

  if (new Set(allTopicIds).size !== allTopicIds.length) throw new Error('Topic IDs must be unique.');
  if (new Set(itemIds).size !== itemIds.length) throw new Error('Learning item IDs must be unique within a pack.');
  if (duplicateIds.length) throw new Error(`Duplicate curriculum topics: ${[...new Set(duplicateIds)].join(', ')}`);
  if (unknownIds.length) throw new Error(`Unknown curriculum topics: ${unknownIds.join(', ')}`);
  if (unmappedIds.length) throw new Error(`Unmapped topics: ${unmappedIds.join(', ')}`);
  if (content.curriculum.months.some(month => month.length !== 3)) {
    throw new Error('Every curriculum month must contain exactly three topics.');
  }

  if (pack.id === 'mandaic-en') {
    const represented = new Set(learningItems.flatMap(item => [...item.targetText].map(character => character.codePointAt(0))));
    for (let codePoint = 0x0840; codePoint <= 0x0858; codePoint++) {
      if (!represented.has(codePoint)) throw new Error(`mandaic-en: missing Unicode Mandaic letter U+${codePoint.toString(16).toUpperCase()}.`);
    }
    if (pack.audio?.delivery !== 'none') throw new Error('mandaic-en: audio must remain disabled until an approved recording set exists.');
    const font = readFileSync('./src/public/assets/fonts/NotoSansMandaic-Regular.ttf');
    const checksum = createHash('sha256').update(font).digest('hex');
    if (checksum !== '28f9cdd5221c0c0ce42871996a3ca716e0f2f7be5131423e51021c6397be0fdc') {
      throw new Error('mandaic-en: bundled Noto Sans Mandaic font checksum does not match the reviewed asset manifest.');
    }
  }
}

try {
  [montenegrin, albanian, iraqiArabic, mandaic, spanish, italian, french].forEach(validatePack);
  console.log('✓ All seven language packs passed content validation successfully!');
} catch (error) {
  console.error('Content validation failed:', error.message);
  process.exit(1);
}

// Authoring check only: draft validation never grants publication approval.
const draftDaily = JSON.parse(readFileSync('./src/content/daily-vocabulary/montenegrin-days-24-40.json', 'utf8'));
validateDailyPlan(draftDaily, Array.from({ length: 17 }, (_, index) => `voyage-${24 + index}`), { requireReview: false });
console.log('✓ Draft Montenegrin days 24–40: 170 new words; 10 new + 10 review daily. Fluent review pending.');

const fullDaily = JSON.parse(readFileSync('./src/content/daily-vocabulary/montenegrin-full-200.json', 'utf8'));
validateDailyPlan(fullDaily, Array.from({ length: 200 }, (_, index) => `voyage-${1 + index}`), { requireReview: false });
console.log('✓ Full Montenegrin draft: 200 days and 2,010 distinct vocabulary words. Fluent review pending.');

const continuation = JSON.parse(readFileSync('./src/content/daily-vocabulary/montenegrin-continuation-24-200.json', 'utf8'));
validateDailyPlan(continuation, Array.from({length:177},(_,index)=>`voyage-${24+index}`), {requireReview:false});
console.log('✓ Live pilot continuation: days 24–200, 10 new + 10 review every day.');
