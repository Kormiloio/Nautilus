import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');

const output = '/private/tmp/nautilus-sentence-browser';
mkdirSync(output, { recursive: true });
const browser = await chromium.launch({ headless: true, executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE });
try {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.route('**/__sentence_test', route => route.fulfill({ contentType: 'text/html', body: '<html><head><link rel="stylesheet" href="/css/style.css"></head><body><div id="app"></div></body></html>' }));
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
  await page.setViewportSize(viewport);
  await page.goto('http://127.0.0.1:3100/__sentence_test');
  await page.evaluate(async () => {
    const { renderFamilyPlayView } = await import('/components/family-play-view.js');
    const { buildFamilyPlaySteps } = await import('/engine/family-play-session.js');
    const { VOYAGE_LESSONS, getTopic } = await import('/engine/learning-engine.js');
    const lesson = VOYAGE_LESSONS[35];
    const steps = buildFamilyPlaySteps(lesson, getTopic(lesson.topicId), 'browser-sentence', { catalogRevision: 8 });
    const state = {
      activeLesson: lesson, sessionUser: { id: 'adult' }, families: [{ role: 'owner' }],
      familyPlayState: { activeSession: { id: 'browser-sentence', voyageDay: 36, catalogRevision: 8, controllingAdult: 'adult', controllerName: 'Parent', status: 'live', currentSegment: 0,
        participants: [{ profileId: 'one', name: 'Learner One', linked: true, status: 'joined', lastSeenAt: new Date().toISOString() }, { profileId: 'two', name: 'Learner Two', linked: true, status: 'joined', lastSeenAt: new Date().toISOString() }], quizAnswers: [] } },
    };
    const actions = new Proxy({ speak: text => { window.lastSpoken = text; } }, { get: (target, key) => target[key] || (() => {}) });
    window.sentenceTest = {
      steps, state,
      render: type => {
        if (type) state.familyPlayState.activeSession.currentSegment = steps.findIndex(step => step.type === type);
        renderFamilyPlayView(document.getElementById('app'), state, actions);
      },
    };
    window.sentenceTest.render('family-sentence-builder');
  });
    await page.evaluate(() => window.sentenceTest.render('family-sentence-builder'));
    const answer = await page.locator('[data-sentence-answer]').getAttribute('data-sentence-answer');
    for (const token of answer.split(/\s+/)) {
      const buttons = page.locator('[data-sentence-token]:enabled');
      const index = (await buttons.allTextContents()).findIndex(text => text.trim() === token);
      assert.ok(index >= 0);
      await buttons.nth(index).click();
    }
    assert.ok(await page.locator('.family-sentence-builder__answer').evaluate(node => node.classList.contains('complete')));
    await page.evaluate(() => window.sentenceTest.render());
    assert.ok(await page.locator('.family-sentence-builder__answer').evaluate(node => node.classList.contains('complete')), 'answer survives refresh');
    await page.locator('[data-sentence-reset]').click();
    assert.equal(await page.locator('[data-sentence-token]:disabled').count(), 0);
    await page.screenshot({ path: `${output}/builder-${viewport.width}.png`, fullPage: true });

    await page.evaluate(() => window.sentenceTest.render('family-sentence-completion'));
    const completion = await page.evaluate(() => window.sentenceTest.steps.find(step => step.type === 'family-sentence-completion').completion);
    const incorrect = completion.choices.findIndex(choice => choice !== completion.answer);
    await page.locator(`[data-completion-choice="${incorrect}"]`).click();
    assert.ok((await page.locator('.family-answer-feedback').textContent()).includes('Try another word'));
    await page.evaluate(() => window.sentenceTest.render());
    assert.equal(await page.locator(`[data-completion-choice="${incorrect}"]`).isDisabled(), true);
    const correct = completion.choices.indexOf(completion.answer);
    await page.locator(`[data-completion-choice="${correct}"]`).click();
    assert.ok(await page.locator('.family-sentence-builder__answer').evaluate(node => node.classList.contains('complete')));
    await page.evaluate(() => window.sentenceTest.render());
    assert.equal(await page.locator('[data-completion-choice]:enabled').count(), 0);
    await page.screenshot({ path: `${output}/completion-${viewport.width}.png`, fullPage: true });

    await page.evaluate(() => window.sentenceTest.render('family-roleplay'));
    await page.locator('[data-family-audio]').first().click();
    assert.ok(await page.evaluate(() => window.lastSpoken?.length > 0));
    assert.equal(await page.locator('.family-roleplay-turn').count(), 4);
    await page.screenshot({ path: `${output}/roleplay-${viewport.width}.png`, fullPage: true });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'no horizontal overflow');
  }
  assert.deepEqual(errors, []);
  console.log('PASS: desktop/mobile word order, reset, missing-word retry, refresh persistence, and dialogue audio. Screenshots: ' + output);
} finally {
  await browser.close();
}
