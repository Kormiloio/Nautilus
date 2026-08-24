const directions = new Set(['ltr', 'rtl']);

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[character]);
}

export function getTextRunMetadata(kind, pack, item = {}) {
  if (kind === 'support') {
    return {
      languageTag: pack.supportLanguage.code,
      script: null,
      direction: 'ltr',
    };
  }

  if (kind === 'transliteration') {
    return {
      languageTag: `${pack.targetLanguage.code}-Latn`,
      script: 'Latn',
      direction: 'ltr',
    };
  }

  return {
    languageTag: item.languageTag || pack.locale || pack.targetLanguage.code,
    script: item.script || pack.defaultScript || pack.targetLanguage.scripts[0],
    direction: item.direction || pack.direction || 'ltr',
  };
}

export function renderLanguageRun(text, kind, pack, item = {}, className = '') {
  const metadata = getTextRunMetadata(kind, pack, item);
  const direction = directions.has(metadata.direction) ? metadata.direction : 'ltr';
  const classes = [
    'language-run',
    `${kind}-language-run`,
    metadata.script ? `script-${metadata.script.toLowerCase()}` : '',
    className,
  ].filter(Boolean).join(' ');

  return `<bdi class="${classes}" lang="${escapeHtml(metadata.languageTag)}" dir="${direction}">${escapeHtml(text)}</bdi>`;
}

export function applyDocumentLanguage(pack, root = globalThis.document?.documentElement) {
  if (!root || !pack) return;
  root.lang = pack.supportLanguage?.code || 'en';
  root.dir = 'ltr';
  root.dataset.targetLanguage = pack.targetLanguage?.code || '';
  root.dataset.targetDirection = pack.direction || 'ltr';
  root.dataset.targetScript = pack.defaultScript || '';
}
