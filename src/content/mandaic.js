// Mandaic script-literacy foundation. This pilot intentionally teaches only
// Unicode character recognition. Spoken Neo-Mandaic and heritage language
// meanings require named community reviewers before they are added.
const UNICODE_SOURCE = 'Unicode Standard 17.0, Mandaic block U+0840–U+085F: https://www.unicode.org/charts/PDF/U0840.pdf';

const letters = [
  ['ࡀ', 'Halqa', 'U+0840'], ['ࡁ', 'Ab', 'U+0841'], ['ࡂ', 'Ag', 'U+0842'],
  ['ࡃ', 'Ad', 'U+0843'], ['ࡄ', 'Ah', 'U+0844'], ['ࡅ', 'Ushenna', 'U+0845'],
  ['ࡆ', 'Az', 'U+0846'], ['ࡇ', 'It', 'U+0847'], ['ࡈ', 'Att', 'U+0848'],
  ['ࡉ', 'Aksa', 'U+0849'], ['ࡊ', 'Ak', 'U+084A'], ['ࡋ', 'Al', 'U+084B'],
  ['ࡌ', 'Am', 'U+084C'], ['ࡍ', 'An', 'U+084D'], ['ࡎ', 'As', 'U+084E'],
  ['ࡏ', 'In', 'U+084F'], ['ࡐ', 'Ap', 'U+0850'], ['ࡑ', 'Asz', 'U+0851'],
  ['ࡒ', 'Aq', 'U+0852'], ['ࡓ', 'Ar', 'U+0853'], ['ࡔ', 'Ash', 'U+0854'],
  ['ࡕ', 'At', 'U+0855'], ['ࡖ', 'Dushenna', 'U+0856'], ['ࡗ', 'Kad', 'U+0857'],
  ['ࡘ', 'Ain', 'U+0858'],
];

const phases = [
  ['Meet the Script', 'Recognize Mandaic letters by their Unicode names'],
  ['Find the Letter', 'Build visual recognition across nearby letter forms'],
  ['Read the Line', 'Practice right-to-left character order without assigning unreviewed sounds'],
];

function makeItem(topicIndex, itemIndex) {
  const [targetText, name, codePoint] = letters[(topicIndex * 3 + itemIndex) % letters.length];
  return {
    id: `script-${String(topicIndex + 1).padStart(2, '0')}-mand-${String(itemIndex + 1).padStart(2, '0')}`,
    targetText,
    transliteration: name,
    supportText: `Mandaic letter ${name} · ${codePoint}`,
    languageTag: 'mid',
    script: 'Mand',
    direction: 'rtl',
    variety: 'Classical Mandaic script-literacy foundation',
    register: 'script recognition',
    track: 'heritage-classical',
    source: UNICODE_SOURCE,
    contributor: 'Nautilus pilot team',
    reviewStatus: 'draft',
  };
}

const topics = Array.from({ length: 30 }, (_, topicIndex) => {
  const [phase, subtitle] = phases[Math.floor(topicIndex / 10)];
  return {
    id: `script-${String(topicIndex + 1).padStart(2, '0')}`,
    month: Math.floor(topicIndex / 3) + 1,
    bucket: Math.floor(topicIndex / 3),
    title: `${phase} ${topicIndex % 10 + 1}`,
    subtitle,
    icon: 'ࡀ',
    color: ['#2f8f83', '#d5a447', '#5679a6'][Math.floor(topicIndex / 10)],
    note: 'Early script-only pilot. Letter names follow Unicode labels; pronunciation, language meanings, sacred text, and Neo-Mandaic conversation are not yet included.',
    items: Array.from({ length: 5 }, (_, itemIndex) => makeItem(topicIndex, itemIndex)),
  };
});

const markDefinitions = [
  ['mark-affrication', '࡙', 'Affrication mark', 'U+0859'],
  ['mark-vocalization', '࡚', 'Vocalization mark', 'U+085A'],
  ['mark-gemination', '࡛', 'Gemination mark', 'U+085B'],
];

const bonusTopics = markDefinitions.map(([id, targetText, name, codePoint], index) => ({
  id,
  month: 10,
  bucket: 10,
  title: name,
  subtitle: 'Recognize a combining mark without assigning unreviewed pronunciation',
  icon: targetText,
  color: '#8d6db0',
  note: 'Combining-mark display varies by context. This pilot checks rendering only.',
  items: Array.from({ length: 5 }, (_, itemIndex) => ({
    id: `${id}-${String(itemIndex + 1).padStart(2, '0')}`,
    targetText,
    transliteration: name,
    supportText: `${name} · ${codePoint}`,
    languageTag: 'mid', script: 'Mand', direction: 'rtl',
    variety: 'Classical Mandaic script-literacy foundation',
    register: 'script recognition', track: 'heritage-classical',
    source: UNICODE_SOURCE, contributor: 'Nautilus pilot team', reviewStatus: 'draft',
  })),
}));

export default {
  languagePack: {
    id: 'mandaic-en',
    targetLanguage: { code: 'mid', name: 'Mandaic · Script Pilot', scripts: ['Mand'] },
    supportLanguage: { code: 'en', name: 'English' },
    version: '0.1.0',
    status: 'pilot',
    direction: 'rtl',
    defaultScript: 'Mand',
    locale: 'mid',
    varietyPolicy: 'The current pilot contains only Classical Mandaic Unicode script recognition. Neo-Mandaic conversation will remain a separate labeled strand and requires a named fluent reviewer.',
    tracks: ['heritage-classical', 'conversation-neo'],
    journeyThemeId: 'rivers-of-mesopotamia@0.1.0',
    audio: {
      locale: 'mid', delivery: 'none', reviewStatus: 'draft',
      note: 'No speech synthesis or substitute-language voice is permitted for Mandaic.',
    },
  },
  curriculum: {
    months: Array.from({ length: 10 }, (_, month) => topics.slice(month * 3, month * 3 + 3).map(topic => topic.id)),
    extras: bonusTopics.map(topic => topic.id),
  },
  topics,
  bonusTopics,
};
