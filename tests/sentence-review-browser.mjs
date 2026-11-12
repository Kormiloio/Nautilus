import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({ headless: true, executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE });
const output = '/private/tmp/nautilus-sentence-review-browser';
mkdirSync(output, { recursive: true });
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.route('**/__review_test', route => route.fulfill({ contentType: 'text/html', body: '<html><head><link rel="stylesheet" href="/css/style.css"></head><body><div id="app"></div></body></html>' }));
    await page.goto('http://127.0.0.1:3101/__review_test');
    await page.evaluate(async () => {
      const { renderSharedContent, bindFamilySentencePractice } = await import('/components/family-play-view.js');
      const { renderSentenceReviewView } = await import('/components/sentence-review-view.js');
      const review = await import('/engine/sentence-review.js');
      localStorage.clear();
      const state = { sessionUser: { id: 'jake' }, activePackId: 'montenegrin-en', sentenceReviewIndex: 0, sentenceReviewInteraction: {} };
      const step = { type: 'family-sentence-builder', title: 'Build', items: [{ targetText: 'Imam dva brata.', supportText: 'I have two brothers.', tokens: ['brata.', 'dva', 'Imam'] }] };
      const app = document.getElementById('app');
      app.innerHTML = renderSharedContent(step, null);
      bindFamilySentencePractice(app, step, {}, (response, correct) => {
        if (!correct) review.recordSentenceMistake(state.sessionUser.id, state.activePackId, { ...review.sentenceMistakeFromFamilyStep(step), eventId: 'builder-miss' });
      });
      window.reviewTest = {
        state, review,
        open: () => {
          state.sentenceReviews = review.getSentenceReviews('jake', state.activePackId, { dueOnly: true });
          renderSentenceReviewView(app, state, { goDashboard: () => {}, speak: text => { window.spoken = text; } });
        },
      };
    });
    for (const button of await page.locator('[data-sentence-token]').all()) await button.click();
    const counts = await page.evaluate(() => ({ jake: window.reviewTest.review.getSentenceReviews('jake', 'montenegrin-en').length, mia: window.reviewTest.review.getSentenceReviews('mia', 'montenegrin-en').length }));
    assert.deepEqual(counts, { jake: 1, mia: 0 });
    await page.evaluate(() => window.reviewTest.open());
    assert.equal(await page.locator('.family-sentence-completion').count(), 1, 'missed builder becomes missing-word practice');
    await page.locator('[data-review-audio]').click();
    assert.equal(await page.evaluate(() => window.spoken), 'Imam dva brata.');
    const choices = page.locator('[data-completion-choice]');
    const index = (await choices.allTextContents()).indexOf('dva');
    await choices.nth(index).click();
    assert.ok((await page.locator('[data-review-feedback]').textContent()).includes('tomorrow'));
    assert.equal(await page.locator('[data-review-next]').isEnabled(), true);
    assert.equal(await page.evaluate(() => window.reviewTest.review.getSentenceReviews('jake', 'montenegrin-en', { dueOnly: true }).length), 0);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: `${output}/review-${width}.png`, fullPage: true });
    await page.locator('[data-review-next]').click();
    assert.ok((await page.locator('h1').textContent()).includes('Review complete'));
    await page.reload();
    assert.equal(await page.evaluate(() => [...Object.keys(localStorage)].filter(key => key.startsWith('nautilus:sentence-review:v1:')).length), 1, 'queue survives reload');
    assert.deepEqual(errors, []);
    await page.close();
  }
  console.log('PASS: desktop/mobile mistake capture, account isolation, alternate exercise format, audio, scheduling, and completion. Screenshots: ' + output);
} finally { await browser.close(); }
