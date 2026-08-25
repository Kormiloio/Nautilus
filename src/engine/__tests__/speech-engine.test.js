import { describe, expect, it, vi } from 'vitest';
import { selectBestVoice, speakWithBestDeviceVoice } from '../speech-engine.js';

describe('device speech voice selection', () => {
  const voices = [
    { name: 'English', lang: 'en-US' },
    { name: 'Serbian', lang: 'sr-RS' },
    { name: 'Croatian', lang: 'hr-HR' },
    { name: 'Albanian', lang: 'sq-AL' },
    { name: 'Spanish Spain', lang: 'es-ES' },
    { name: 'Spanish Mexico', lang: 'es-MX' },
    { name: 'Italian Italy', lang: 'it-IT' },
    { name: 'Italian Switzerland', lang: 'it-CH' },
    { name: 'French France', lang: 'fr-FR' },
    { name: 'French Canada', lang: 'fr-CA' },
  ];

  it('prefers Croatian over an English default for Montenegrin text', () => {
    expect(selectBestVoice(voices, 'cnr').name).toBe('Croatian');
  });

  it('selects Albanian only for the Albanian pack', () => {
    expect(selectBestVoice(voices, 'sq').name).toBe('Albanian');
  });

  it('does not speak with an incompatible English fallback', () => {
    const synthesis = { getVoices: () => [voices[0]], cancel: vi.fn(), speak: vi.fn() };
    const result = speakWithBestDeviceVoice('porodica', 'cnr', synthesis, class {});
    expect(result).toMatchObject({ spoken: false, reason: 'voice-missing' });
    expect(synthesis.speak).not.toHaveBeenCalled();
  });

  it('uses an Iraqi Arabic voice but rejects a generic Arabic substitute', () => {
    const arabicVoices = [
      { name: 'Generic Arabic', lang: 'ar-SA' },
      { name: 'Iraqi Arabic', lang: 'ar-IQ' },
    ];
    expect(selectBestVoice(arabicVoices, 'ar').name).toBe('Iraqi Arabic');
    expect(selectBestVoice([arabicVoices[0]], 'ar')).toBeNull();
  });

  it('uses Spain Spanish and rejects a different regional Spanish voice', () => {
    expect(selectBestVoice(voices, 'es').name).toBe('Spanish Spain');
    expect(selectBestVoice(voices.filter(voice => voice.lang !== 'es-ES'), 'es')).toBeNull();
  });

  it('keeps Italian and French device speech on the configured country locales', () => {
    expect(selectBestVoice(voices, 'it').name).toBe('Italian Italy');
    expect(selectBestVoice(voices.filter(voice => voice.lang !== 'it-IT'), 'it')).toBeNull();
    expect(selectBestVoice(voices, 'fr').name).toBe('French France');
    expect(selectBestVoice(voices.filter(voice => voice.lang !== 'fr-FR'), 'fr')).toBeNull();
  });
});
