import { describe, expect, it } from 'vitest';
import { getTextRunMetadata, renderLanguageRun } from '../language-runs.js';

const rtlPack = {
  targetLanguage: { code: 'mid', scripts: ['Mand'] },
  supportLanguage: { code: 'en' },
  locale: 'mid',
  defaultScript: 'Mand',
  direction: 'rtl',
};

describe('language runs', () => {
  it('inherits RTL Mandaic metadata from the pack', () => {
    expect(getTextRunMetadata('target', rtlPack)).toEqual({
      languageTag: 'mid',
      script: 'Mand',
      direction: 'rtl',
    });
  });

  it('keeps English support and transliteration LTR', () => {
    expect(getTextRunMetadata('support', rtlPack).direction).toBe('ltr');
    expect(getTextRunMetadata('transliteration', rtlPack)).toMatchObject({
      script: 'Latn',
      direction: 'ltr',
    });
  });

  it('renders an isolated, escaped language run', () => {
    const html = renderLanguageRun('<word>', 'target', rtlPack);
    expect(html).toContain('lang="mid"');
    expect(html).toContain('dir="rtl"');
    expect(html).toContain('data-script="Mand"');
    expect(html).toContain('&lt;word&gt;');
    expect(html).toContain('<bdi');
  });
});
