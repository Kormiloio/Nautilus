const COLOR_SPECS = [
  { id: 'red', hex: '#e53935', dark: false, terms: ['red', 'crvena', 'e kuqe'] },
  { id: 'blue', hex: '#1976d2', dark: false, terms: ['blue', 'plava', 'blu'] },
  { id: 'green', hex: '#2e7d32', dark: false, terms: ['green', 'zelena', 'e gjelbër'] },
  { id: 'yellow', hex: '#f9c928', dark: true, terms: ['yellow', 'žuta', 'e verdhë'] },
  { id: 'black', hex: '#111318', dark: false, terms: ['black', 'crna', 'e zezë'] },
  { id: 'white', hex: '#f5f1e8', dark: true, terms: ['white', 'bijela', 'e bardhë'] },
];

const PUBLIC_ASSET_BASE = import.meta.env.BASE_URL;

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
