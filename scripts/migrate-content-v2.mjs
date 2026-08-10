import { readFileSync, writeFileSync } from 'node:fs';

const path = new URL('../src/content/topics.json', import.meta.url);
const content = JSON.parse(readFileSync(path, 'utf8'));

function migrateItem(item, id) {
  if (item.targetText && item.supportText && item.id) return item;
  const { mn, en, ...rest } = item;
  return {
    id: item.id || id,
    targetText: item.targetText || mn,
    supportText: item.supportText || en,
    ...rest,
  };
}

function migrateTopic(topic) {
  const items = topic.items.map((item, index) =>
    migrateItem(item, `${topic.id}-item-${String(index + 1).padStart(3, '0')}`)
  );
  const dialogue = topic.dialogue
    ? {
        ...topic.dialogue,
        lines: topic.dialogue.lines.map((line, index) =>
          migrateItem(line, `${topic.id}-dialogue-${String(index + 1).padStart(3, '0')}`)
        ),
      }
    : undefined;

  return {
    ...topic,
    items,
    ...(dialogue ? { dialogue } : {}),
  };
}

content.topics = content.topics.map(migrateTopic);
content.bonusTopics = content.bonusTopics.map(migrateTopic);

writeFileSync(path, `${JSON.stringify(content, null, 2)}\n`);
