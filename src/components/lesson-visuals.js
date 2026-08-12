const COLOR_SPECS = [
  { id: 'red', hex: '#e53935', dark: false, terms: ['red', 'crvena', 'e kuqe'] },
  { id: 'blue', hex: '#1976d2', dark: false, terms: ['blue', 'plava', 'blu'] },
  { id: 'green', hex: '#2e7d32', dark: false, terms: ['green', 'zelena', 'e gjelbër'] },
  { id: 'yellow', hex: '#f9c928', dark: true, terms: ['yellow', 'žuta', 'e verdhë'] },
  { id: 'black', hex: '#111318', dark: false, terms: ['black', 'crna', 'e zezë'] },
  { id: 'white', hex: '#f5f1e8', dark: true, terms: ['white', 'bijela', 'e bardhë'] },
];

const PUBLIC_ASSET_BASE = import.meta.env.BASE_URL;

const IMMERSIVE_LESSON_SCENES = {
  greetings: {
    src: 'assets/illustrations/poster-greetings-v1.jpg',
    place: 'Lantern Quay',
    prompt: 'Meet at the waterfront and practice the words that begin every conversation.',
    icon: '👋',
  },
  colors: {
    src: 'assets/illustrations/poster-colors-v1.jpg',
    place: 'Color Cove',
    prompt: 'Look around the harbor. The vocabulary is already in the scene.',
    icon: '🎨',
  },
  family: {
    src: 'assets/illustrations/poster-family-v1.jpg',
    place: 'The Family Courtyard',
    prompt: 'Take a seat at the table and bring the family words to life.',
    icon: '🏡',
  },
  food: {
    src: 'assets/illustrations/poster-food-v1.jpg',
    place: 'Market Island',
    prompt: 'Explore the market and name what the family might bring to the table.',
    icon: '🍅',
  },
  cafe: {
    src: 'assets/illustrations/poster-cafe-v1.jpg',
    place: 'Café Point',
    prompt: 'Take a seat by the water and practice ordering together.',
    icon: '☕',
  },
  directions: {
    src: 'assets/illustrations/poster-directions-v1.jpg',
    place: 'Compass Rock',
    prompt: 'Follow the signs, choose a path, and help one another find the way.',
    icon: '🧭',
  },
};

export function getImmersiveLessonScene(topicId) {
  const scene = IMMERSIVE_LESSON_SCENES[topicId];
  return scene ? { ...scene, src: `${PUBLIC_ASSET_BASE}${scene.src}` } : null;
}

export function getColorSpec(value) {
  const normalized = String(value || '').trim().toLocaleLowerCase();
  return COLOR_SPECS.find(spec => spec.terms.includes(normalized)) || null;
}

export function getItemColorSpec(topicId, item) {
  if (topicId !== 'colors') return null;
  return getColorSpec(item?.supportText) || getColorSpec(item?.targetText);
}

export function renderColorField(topicId, item) {
  const spec = getItemColorSpec(topicId, item);
  if (!spec) return item?.emoji ? `<div class="flashcard-emoji">${item.emoji}</div>` : '';
  return `<div class="color-field color-field--${spec.id}" style="--lesson-color:${spec.hex}" aria-hidden="true">
    <span class="color-field__sun"></span><span class="color-field__sail"></span><span class="color-field__wave"></span>
  </div>`;
}

export function colorTileStyle(text) {
  const spec = getColorSpec(text);
  if (!spec) return '';
  return ` style="--tile-color:${spec.hex};--tile-text:${spec.dark ? '#111318' : '#ffffff'}" data-color-tile="true"`;
}

export function renderColorsIntro(topicId) {
  if (topicId !== 'colors') return '';
  return `<figure class="lesson-scene lesson-scene--colors">
    <img src="${PUBLIC_ASSET_BASE}assets/illustrations/colors-harbor.jpg" alt="A Montenegro harbor with a red boat, blue sea, green shutters, yellow umbrella, black cat, and white church tower">
    <figcaption><strong>Find the colors in the harbor.</strong><span>Red boat · blue sea · green shutters · yellow umbrella · black cat · white tower</span></figcaption>
  </figure>`;
}
