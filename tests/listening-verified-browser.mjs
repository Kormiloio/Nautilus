// Verified listening set (catalog revision 10) in the verified lesson view. Needs `npx vite --port 3100` from the repo root.
import assert from 'node:assert/strict';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({ headless: true, executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE });
try {
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
    const page = await browser.newPage({ viewport });
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    await page.route('**/__lv', r => r.fulfill({ contentType: 'text/html', body: '<!doctype html><html lang="en"><head><title>t</title><link rel="stylesheet" href="/css/style.css"></head><body><div id="app"></div></body></html>' }));
    await page.goto('http://127.0.0.1:3100/__lv');
    const kinds = await page.evaluate(async () => {
      const { renderVerifiedLessonView } = await import('/components/verified-lesson-view.js');
      const { VOYAGE_LESSONS } = await import('/engine/learning-engine.js');
      const { buildVerifiedListeningSteps } = await import('/engine/listening-practice.js');
      const { toVerifiedExercises } = await import('/engine/verified-curriculum.js');
      const exercises = toVerifiedExercises(buildVerifiedListeningSteps(VOYAGE_LESSONS[39])).map(({ answer, ...rest }) => rest);
      const state = { sessionUser: { id: 'u' }, screen: 'verified', verifiedAttempt: { id: 'a', status: 'active', mode: 'practice', lessonId: 'practice:voyage-40:listening', topicId: VOYAGE_LESSONS[39].topicId, exerciseIndex: 1, exercises, receipts: [], people: [] } };
      window.__submitted = [];
      const actions = new Proxy({ submitVerifiedAnswer: (i, r) => window.__submitted.push([i, r]) }, { get: (t, k) => t[k] || (() => {}) });
      window.__go = i => { state.verifiedAttempt.exerciseIndex = i; renderVerifiedLessonView(document.getElementById('app'), state, actions); return exercises[i].kind; };
      return exercises.map(e => e.kind);
    });
    for (let i = 1; i < kinds.length; i++) {
      const kind = await page.evaluate(i => window.__go(i), i);
      assert.equal(await page.locator('[data-listen-play]').count(), 1, 'play button');
      assert.match(await page.locator('[data-listen-status]').textContent(), /No compatible voice|^$/);
      if (await page.locator('[data-listen-written]').isVisible()) {
        await page.click('[data-listen-written]');
        assert.equal(await page.locator('.listening-transcript').count(), 1, 'written fallback text');
      }
      if (kind === 'quiz') { await page.locator('[data-choice]').first().click(); }
      else {
        const n = await page.locator('[data-sentence-token]').count();
        for (let t = 0; t < n; t++) await page.locator(`[data-sentence-token="${t}"]`).click();
        await page.click('[data-submit]');
      }
    }
    const submitted = await page.evaluate(() => window.__submitted.length);
    assert.equal(submitted, kinds.length - 1, 'every graded exercise submits');
    assert.deepEqual(errors, []);
    assert.equal(await page.locator('.verified-card-controls').count(), 0, 'no topic practice tabs on listening');
    await page.close();
  }
} finally { await browser.close(); }
console.log('PASS: verified listening renders with audio controls, written fallback works, every graded exercise submits, no topic tabs (desktop + 390px)');
