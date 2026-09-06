import { getVoyageArrival } from './voyage-map.js';

const PUBLIC_ASSET_BASE = import.meta.env.BASE_URL;

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[character]);
}

export function renderVoyageArrivalView(container, state, actions) {
  const arrival = state.arrival || getVoyageArrival(0);
  if (!arrival) { actions.goDashboard(); return; }
  const nextLabel = state.sessionUser && state.families?.length
    ? 'Plan the next family lesson →'
    : 'Begin the next chapter →';
  container.innerHTML = `
    <main class="voyage-arrival" aria-labelledby="voyage-arrival-title">
      <img class="voyage-arrival__art" src="${PUBLIC_ASSET_BASE}assets/illustrations/${arrival.asset}" alt="Travel-poster illustration of ${escapeHtml(arrival.name)}">
      <div class="voyage-arrival__veil" aria-hidden="true"></div>
      <section class="voyage-arrival__card">
        <div class="hero-tag">Destination reached · ${arrival.label}</div>
        <div class="voyage-arrival__medal" aria-hidden="true">⚓</div>
        <p class="voyage-arrival__kicker">Poster added to your voyage collection</p>
        <h1 id="voyage-arrival-title">Welcome to ${escapeHtml(arrival.name)}</h1>
        <p class="voyage-arrival__chapter">${escapeHtml(arrival.chapter)}</p>
        <p class="voyage-arrival__copy">Your family has completed ${arrival.unlock} voyage lessons and reached a new chapter together. This poster is now part of your voyage.</p>
        <div class="voyage-arrival__actions">
          <button class="btn btn-primary" id="arrival-next">${nextLabel}</button>
          <button class="btn btn-secondary" id="arrival-home">Celebrate and return home</button>
        </div>
      </section>
    </main>
  `;
  container.querySelector('#arrival-next').addEventListener('click', actions.continueAfterArrival);
  container.querySelector('#arrival-home').addEventListener('click', actions.goDashboard);
}