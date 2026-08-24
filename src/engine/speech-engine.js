const VOICE_PRIORITIES = {
  cnr: ['hr-HR', 'hr', 'sr-RS', 'sr', 'bs-BA', 'bs'],
  sq: ['sq-AL', 'sq-XK', 'sq'],
  // The Iraqi pilot may preview only a voice explicitly tagged for Iraq.
  ar: ['ar-IQ'],
};

function normalizeLocale(locale) {
  return String(locale || '').replace('_', '-').toLowerCase();
}

export function getVoicePriorities(languageCode) {
  return VOICE_PRIORITIES[languageCode] || [languageCode];
}

export function selectBestVoice(voices, languageCode) {
  const candidates = Array.isArray(voices) ? voices : [];
  for (const priority of getVoicePriorities(languageCode)) {
    const wanted = normalizeLocale(priority);
    const exact = candidates.find(voice => normalizeLocale(voice.lang) === wanted);
    if (exact) return exact;
    if (!wanted.includes('-')) {
      const regional = candidates.find(voice => normalizeLocale(voice.lang).split('-')[0] === wanted);
      if (regional) return regional;
    }
  }
  return null;
}

export function speakWithBestDeviceVoice(text, languageCode, synthesis, UtteranceClass) {
  if (!synthesis || !UtteranceClass || !text) return { spoken: false, reason: 'unsupported' };
  const voice = selectBestVoice(synthesis.getVoices(), languageCode);
  if (!voice) return { spoken: false, reason: 'voice-missing', requestedLocales: getVoicePriorities(languageCode) };

  const utterance = new UtteranceClass(text);
  utterance.voice = voice;
  utterance.lang = voice.lang;
  utterance.rate = 0.82;
  utterance.pitch = 1;
  synthesis.cancel();
  synthesis.speak(utterance);
  return { spoken: true, voiceName: voice.name, locale: voice.lang };
}
