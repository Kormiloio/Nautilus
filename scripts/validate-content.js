import { readFileSync } from 'node:fs';
import Ajv from 'ajv';

try {
  const schema = JSON.parse(readFileSync('./src/content/schema.json', 'utf8'));
  const content = JSON.parse(readFileSync('./src/content/topics.json', 'utf8'));

  const ajv = new Ajv({ allErrors: true, useDefaults: true });
  const validate = ajv.compile(schema);
  const valid = validate(content);

  if (!valid) {
    console.error('Content validation failed with the following errors:');
    validate.errors.forEach(err => {
      console.error(`- Path: ${err.instancePath} | Message: ${err.message} (params: ${JSON.stringify(err.params)})`);
    });
    process.exit(1);
  }

  const topicIds = content.topics.map(topic => topic.id);
  const learningItems = [...content.topics, ...content.bonusTopics].flatMap(topic => [
    ...topic.items,
    ...(topic.dialogue?.lines || []),
  ]);
  const itemIds = learningItems.map(item => item.id);
  const mappedIds = [...content.curriculum.months.flat(), ...content.curriculum.extras];
  const duplicateIds = mappedIds.filter((id, index) => mappedIds.indexOf(id) !== index);
  const unknownIds = mappedIds.filter(id => !topicIds.includes(id));
  const unmappedIds = topicIds.filter(id => !mappedIds.includes(id));

  if (new Set(topicIds).size !== topicIds.length) {
    throw new Error('Topic IDs must be unique.');
  }
  if (new Set(itemIds).size !== itemIds.length) {
    throw new Error('Learning item IDs must be globally unique within a language pack.');
  }
  if (duplicateIds.length) {
    throw new Error(`Curriculum topic IDs must be unique: ${[...new Set(duplicateIds)].join(', ')}`);
  }
  if (unknownIds.length) {
    throw new Error(`Curriculum references unknown topics: ${unknownIds.join(', ')}`);
  }
  if (unmappedIds.length) {
    throw new Error(`Every topic must be core or extra. Unmapped: ${unmappedIds.join(', ')}`);
  }

  console.log('✓ Content schema validation passed successfully!');
  process.exit(0);
} catch (err) {
  console.error('Error during validation execution:', err);
  process.exit(1);
}
