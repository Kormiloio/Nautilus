import { describe, expect, it, vi } from 'vitest';
import { selectBestVoice, speakWithBestDeviceVoice } from '../speech-engine.js';

describe('device speech voice selection', () => {
  const voices = [
    { name: 'English', lang: 'en-US' },
    { name: 'Serbian', lang: 'sr-RS' },
    { name: 'Croatian', lang: 'hr-HR' },
    { name: 'Albanian', lang: 'sq-AL' },
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
});
