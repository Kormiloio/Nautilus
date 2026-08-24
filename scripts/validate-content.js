import { readFileSync } from 'node:fs';
import Ajv from 'ajv';
import albanian from '../src/content/albanian.js';
import iraqiArabic from '../src/content/iraqi-arabic.js';

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

  if (!pack.targetLanguage.scripts.includes(pack.defaultScript)) {
    throw new Error(`${pack.id}: defaultScript ${pack.defaultScript} is not declared in targetLanguage.scripts.`);
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
}

try {
  [montenegrin, albanian, iraqiArabic].forEach(validatePack);
  console.log('✓ Montenegrin, Albanian, and Iraqi Arabic pack validation passed successfully!');
} catch (error) {
  console.error('Content validation failed:', error.message);
  process.exit(1);
}
