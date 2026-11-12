import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({ headless: true, executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE });
const output = '/private/tmp/nautilus-listening-browser';
mkdirSync(output, { recursive: true });
async function open(width, available = true) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.addInitScript(({ available }) => {
    const synthesis = new EventTarget();
    window.listeningVoices = available ? [{ name: 'Croatian', lang: 'hr-HR' }] : [{ name: 'English', lang: 'en-US' }];
    window.utterances = [];
    synthesis.getVoices = () => window.listeningVoices;
    synthesis.cancel = () => {};
    synthesis.speak = utterance => window.utterances.push(utterance);
    Object.defineProperty(window, 'speechSynthesis', { value: synthesis, configurable: true });
    Object.defineProperty(window, 'SpeechSynthesisUtterance', { value: class { constructor(text) { this.text = text; } }, configurable: true });
  }, { available });
  await page.goto('http://127.0.0.1:3102/listening-preview.html');
  await page.locator('[data-study-start]').click();
  await page.locator('[data-listening-check]').waitFor();
  return page;
}
try {
  for (const width of [1440, 390]) {
    const page = await open(width);
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const exercises = await page.evaluate(async () => {
      const { buildListeningExercises, getListeningItems, listeningWords } = await import('/engine/listening-practice.js');
      const { VOYAGE_LESSONS } = await import('/engine/learning-engine.js');
      return buildListeningExercises(getListeningItems(VOYAGE_LESSONS[39]), 'listening-preview').map(exercise => ({ ...exercise, answer: listeningWords(exercise.item.targetText) }));
    });
    assert.equal(await page.locator('[data-listening-transcript]').count(), 0);
    assert.equal(await page.locator('[data-listening-written]').isVisible(), false);
    assert.ok(!(await page.locator('body').innerText()).includes(exercises[0].item.targetText));
    assert.equal(await page.locator('[data-listening-choice]:enabled').count(), 0);
    await page.locator('[data-listening-play]').click();
    assert.equal(await page.locator('[data-listening-choice]:enabled').count(), 0, 'must finish hearing the sentence');
    await page.evaluate(() => window.utterances.at(-1).onend());
    assert.ok(await page.locator('[data-listening-choice]:enabled').count() > 0);
    const wrong = exercises[0].choices.findIndex(choice => choice !== exercises[0].item.supportText);
    await page.locator(`[data-listening-choice="${wrong}"]`).click();
    await page.locator('[data-listening-check]').click();
    assert.ok((await page.locator('[data-listening-transcript]').innerText()).includes(exercises[0].item.targetText));
    assert.equal(await page.evaluate(async () => (await import('/engine/sentence-review.js')).getSentenceReviews('listening-preview', 'montenegrin-en').length), 1);
    await page.locator('[data-listening-check]').click();
    assert.equal(await page.locator('[data-listening-transcript]').count(), 0);
    assert.equal(await page.locator('[data-listening-token]:enabled').count(), 0);
    await page.locator('[data-listening-slow]').click();
    assert.equal(await page.evaluate(() => window.utterances.at(-1).rate), 0.6);
    await page.evaluate(() => window.utterances.at(-1).onend());
    assert.equal(await page.locator('[data-listening-check]').isDisabled(), true);
    assert.ok(exercises[1].tokens.length > exercises[1].answer.length);
    await page.screenshot({ path: `${output}/word-choices-${width}.png`, fullPage: true });
    const distractor = exercises[1].tokens.findIndex(token => !exercises[1].answer.includes(token));
    await page.locator(`[data-listening-token="${distractor}"]`).click();
    assert.equal(await page.locator('[data-listening-check]').isEnabled(), true);
    await page.locator('[data-listening-undo]').click();
    assert.equal(await page.locator('[data-listening-check]').isDisabled(), true);
    for (const token of exercises[1].answer) {
      const buttons = page.locator('[data-listening-token]:enabled');
      const index = (await buttons.allTextContents()).findIndex(text => text === token);
      assert.ok(index >= 0);
      await buttons.nth(index).click();
    }
    await page.locator('[data-listening-undo]').click();
    assert.equal(await page.locator('[data-listening-check]').isEnabled(), true, 'partial attempts must not reveal the required answer length');
    const last = exercises[1].answer.at(-1);
    const enabled = page.locator('[data-listening-token]:enabled');
    await enabled.nth((await enabled.allTextContents()).indexOf(last)).click();
    assert.ok(await page.locator('[data-listening-token]:enabled').count() > 0, 'extra word choices remain unused');
    await page.locator('[data-listening-check]').click();
    assert.ok((await page.locator('.family-answer-feedback').innerText()).includes('Correct'));
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: `${output}/feedback-${width}.png`, fullPage: true });
    await page.locator('[data-listening-check]').click();
    await page.screenshot({ path: `${output}/listening-${width}.png`, fullPage: true });
    assert.deepEqual(errors, []);
    await page.close();
  }
  const fallback = await open(390, false);
  assert.equal(await fallback.locator('[data-listening-play]').isDisabled(), true);
  assert.equal(await fallback.locator('[data-listening-transcript]').count(), 0);
  assert.equal(await fallback.locator('[data-listening-written]').isVisible(), true);
  assert.equal(await fallback.evaluate(() => window.utterances.length), 0);
  await fallback.evaluate(() => {
    window.listeningVoices.push({ name: 'Croatian', lang: 'hr-HR' });
    window.speechSynthesis.dispatchEvent(new Event('voiceschanged'));
  });
  assert.equal(await fallback.locator('[data-listening-play]').isEnabled(), true);
  assert.equal(await fallback.locator('[data-listening-written]').isVisible(), false);
  await fallback.locator('[data-listening-play]').click();
  await fallback.evaluate(() => window.utterances.at(-1).onerror());
  assert.equal(await fallback.locator('[data-listening-choice]:enabled').count(), 0);
  await fallback.locator('[data-listening-written]').click();
  assert.equal(await fallback.locator('[data-listening-transcript]').count(), 1);
  assert.ok(await fallback.locator('[data-listening-choice]:enabled').count() > 0);
  await fallback.screenshot({ path: `${output}/written-fallback.png`, fullPage: true });
  await fallback.close();
  console.log('PASS: desktop/mobile familiar distractors, unused choices, partial attempts, undo, hidden transcripts, playback gating, slow audio, mistake review, delayed voices, and written fallback. Screenshots: ' + output);
} finally { await browser.close(); }
