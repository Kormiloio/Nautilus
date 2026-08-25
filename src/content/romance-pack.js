export function buildRomancePack({ definitions, months, extras, config }) {
  const monthById = new Map(months.flatMap((ids, monthIndex) => ids.map(id => [id, monthIndex + 1])));
  const topics = definitions.map(([id, title, subtitle, forms]) => {
    const month = monthById.get(id) || 10;
    return {
      id, month, bucket: month - 1, title, subtitle,
      icon: id.slice(0, 2).toUpperCase(),
      color: ['#d99a3d', '#4f8c73', '#4d7fa3'][(month - 1) % 3],
      note: config.note,
      items: forms.map(([targetText, supportText], index) => ({
        id: `${id}-${config.itemCode}-${String(index + 1).padStart(3, '0')}`,
        targetText, supportText, languageTag: config.locale, script: 'Latn', direction: 'ltr',
        variety: config.variety, register: 'standard conversational', source: config.source,
        contributor: 'Nautilus pilot team', reviewStatus: 'draft',
      })),
    };
  });
  return {
    languagePack: {
      id: config.id,
      targetLanguage: { code: config.code, name: config.name, scripts: ['Latn'] },
      supportLanguage: { code: 'en', name: 'English' },
      version: '0.1.0', status: 'pilot', direction: 'ltr', defaultScript: 'Latn', locale: config.locale,
      varietyPolicy: config.varietyPolicy, journeyThemeId: config.journeyThemeId,
      audio: { locale: config.locale, delivery: 'speech-synthesis-draft', reviewStatus: 'draft', note: config.audioNote },
    },
    curriculum: { months, extras },
    topics: topics.filter(topic => !extras.includes(topic.id)),
    bonusTopics: topics.filter(topic => extras.includes(topic.id)),
  };
}
