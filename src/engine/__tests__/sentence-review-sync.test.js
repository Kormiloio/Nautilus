import { beforeEach, describe, expect, it, vi } from 'vitest';
import { getPendingSentenceReviewOps, getSentenceReviews, recordSentenceMistake, submitSentenceReview, syncSentenceReviews } from '../sentence-review.js';

const storage = new Map();
const now = 1800000000000;
const mistake = { targetText: 'Imam dva brata.', supportText: 'I have two brothers.', kind: 'sentence_builder', eventId: 'session:4' };
const serverRow = { id: 'Ovo je mama.', targetText: 'Ovo je mama.', supportText: 'This is mom.', sourceKind: 'quiz', misses: 2, streak: 0,
  dueAt: new Date(now - 1000).toISOString(), lastMissedAt: new Date(now - 1000).toISOString(), lastReviewedAt: null };

function fakeServer(responses = {}) {
  const calls = [];
  return {
    calls,
    rpc: vi.fn(async (name, args) => {
      calls.push([name, args]);
      const response = responses[name];
      return typeof response === 'function' ? response(args) : response ?? { data: null, error: null };
    }),
  };
}

beforeEach(() => {
  storage.clear();
  vi.stubGlobal('localStorage', { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) });
  vi.stubGlobal('navigator', { onLine: true });
});

describe('Cross-device sentence review sync', () => {
  it('queues mistakes and reviews as server operations', () => {
    recordSentenceMistake('jake', 'cnr', mistake, now);
    recordSentenceMistake('jake', 'cnr', mistake, now);
    submitSentenceReview('jake', 'cnr', 'Imam dva brata.', ['Imam', 'dva', 'brata.'], now);
    const ops = getPendingSentenceReviewOps('jake', 'cnr');
    expect(ops.map(op => op.type)).toEqual(['mistake', 'review']);
    expect(ops[0]).toMatchObject({ eventId: 'session:4', targetText: 'Imam dva brata.', kind: 'sentence_builder' });
    expect(ops[1]).toMatchObject({ id: 'Imam dva brata.', response: ['Imam', 'dva', 'brata.'] });
    expect(ops[1].opId).toBeTruthy();
  });

  it('pushes operations in order, then replaces the cache with the server queue', async () => {
    recordSentenceMistake('jake', 'cnr', mistake, now);
    const server = fakeServer({ list_sentence_reviews: { data: [serverRow], error: null } });
    const result = await syncSentenceReviews('jake', 'cnr', server);
    expect(result).toEqual({ synced: true, count: 1 });
    expect(server.calls.map(([name]) => name)).toEqual(['record_sentence_mistake', 'list_sentence_reviews']);
    expect(server.calls[0][1]).toMatchObject({ target_pack: 'cnr', target_event: 'session:4', target_sentence: 'Imam dva brata.' });
    expect(getPendingSentenceReviewOps('jake', 'cnr')).toEqual([]);
    expect(getSentenceReviews('jake', 'cnr').map(item => item.id)).toEqual(['Ovo je mama.']);
    expect(getSentenceReviews('jake', 'cnr')[0].dueAt).toBe(now - 1000);
  });

  it('keeps the queue when the network or a missing RPC fails', async () => {
    recordSentenceMistake('jake', 'cnr', mistake, now);
    const server = fakeServer({ record_sentence_mistake: { data: null, error: { code: 'PGRST202', message: 'function not found' } } });
    const result = await syncSentenceReviews('jake', 'cnr', server);
    expect(result.synced).toBe(false);
    expect(getPendingSentenceReviewOps('jake', 'cnr')).toHaveLength(1);
    expect(getSentenceReviews('jake', 'cnr')).toHaveLength(1);
  });

  it('drops an operation the server rejects as invalid and continues', async () => {
    recordSentenceMistake('jake', 'cnr', mistake, now);
    submitSentenceReview('jake', 'cnr', 'Imam dva brata.', ['brata.', 'dva', 'Imam'], now);
    const server = fakeServer({
      submit_sentence_review: { data: null, error: { code: 'P0001', message: 'This sentence is not due for review.' } },
      list_sentence_reviews: { data: [], error: null },
    });
    expect((await syncSentenceReviews('jake', 'cnr', server)).synced).toBe(true);
    expect(getPendingSentenceReviewOps('jake', 'cnr')).toEqual([]);
  });

  it('uploads entries saved before sync existed exactly once', async () => {
    storage.set('nautilus:sentence-review:v1:jake:cnr', JSON.stringify([{ id: 'Tu je voda.', targetText: 'Tu je voda.', supportText: 'Here is water.',
      dueAt: now, lastMissedAt: now, misses: 3, streak: 0, sourceKind: 'quiz' }]));
    const server = fakeServer({ list_sentence_reviews: { data: [], error: null } });
    await syncSentenceReviews('jake', 'cnr', server);
    await syncSentenceReviews('jake', 'cnr', server);
    const uploads = server.calls.filter(([name]) => name === 'record_sentence_mistake');
    expect(uploads).toHaveLength(1);
    expect(uploads[0][1]).toMatchObject({ target_event: 'legacy:Tu je voda.', target_kind: 'quiz' });
  });

  it('does nothing offline or without a server client', async () => {
    recordSentenceMistake('jake', 'cnr', mistake, now);
    vi.stubGlobal('navigator', { onLine: false });
    const server = fakeServer();
    expect(await syncSentenceReviews('jake', 'cnr', server)).toEqual({ synced: false, offline: true });
    expect(await syncSentenceReviews('jake', 'cnr', null)).toEqual({ synced: false });
    expect(server.rpc).not.toHaveBeenCalled();
  });
});
