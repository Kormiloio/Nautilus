import { buildDayPassport, getLearningDayCount } from '../engine/learning-days.js';

const VOYAGE_STAGES = [
  { id: 'anchors-aweigh', label: 'Anchors Aweigh', min: 0, icon: '⚓' },
  { id: 'making-headway', label: 'Making Headway', min: 50, icon: '⛵' },
  { id: 'rounding-the-mark', label: 'Rounding the Mark', min: 100, icon: '🧭' },
  { id: 'flying-colors', label: 'Flying Colors', min: 150, icon: '🚩' },
  { id: 'shipshape-moored', label: 'Shipshape · Moored', min: 200, icon: '🏝️' },
];

const PUBLIC_ASSET_BASE = import.meta.env.BASE_URL;

const COMPANIONS = [
  { min: 1, icon: '🐠', name: 'Reef Scout', note: 'First lesson completed' },
  { min: 25, icon: '🐬', name: 'Bright Dolphin', note: '25 voyage days completed' },
  { min: 75, icon: '🐢', name: 'Steady Turtle', note: '75 voyage days completed' },
  { min: 150, icon: '🐋', name: 'Great Voyager', note: '150 voyage days completed' },
];

const VOYAGE_PORTS = [
  { x: 7, y: 66, name: 'Home Harbor', chapter: 'Family & greetings' },
  { x: 17, y: 57, name: 'Lantern Quay', chapter: 'Names & introductions' },
  { x: 28, y: 63, name: 'Echo Arch', chapter: 'Numbers & sounds' },
  { x: 39, y: 51, name: 'Color Cove', chapter: 'Colors & descriptions' },
  { x: 49, y: 58, name: 'Market Island', chapter: 'Food & shopping' },
  { x: 59, y: 44, name: 'Café Point', chapter: 'Ordering & conversation' },
  { x: 69, y: 52, name: 'Compass Rock', chapter: 'Directions & travel' },
  { x: 79, y: 39, name: 'Story Bay', chapter: 'Sentences & stories' },
  { x: 88, y: 47, name: 'Family Coast', chapter: 'Visits & gatherings' },
  { x: 95, y: 32, name: 'Sunrise Kotor', chapter: 'Confident conversation' },
];

const DESTINATION_POSTERS = [
  { port: 1, name: 'Home Harbor', chapter: 'Family', asset: 'poster-family-v1.jpg', unlock: 0 },
  { port: 2, name: 'Lantern Quay', chapter: 'Greetings', asset: 'poster-greetings-v1.jpg', unlock: 20 },
  { port: 4, name: 'Color Cove', chapter: 'Colors', asset: 'poster-colors-v1.jpg', unlock: 60 },
  { port: 5, name: 'Market Island', chapter: 'Food', asset: 'poster-food-v1.jpg', unlock: 80 },
  { port: 6, name: 'Café Point', chapter: 'Conversation', asset: 'poster-cafe-v1.jpg', unlock: 100 },
  { port: 7, name: 'Compass Rock', chapter: 'Directions', asset: 'poster-directions-v1.jpg', unlock: 120 },
];

function getVoyagePosition(percent) {
  const routePosition = Math.max(0, Math.min(99.999, percent)) / 100 * (VOYAGE_PORTS.length - 1);
  const startIndex = Math.floor(routePosition);
  const amount = routePosition - startIndex;
  const start = VOYAGE_PORTS[startIndex];
  const end = VOYAGE_PORTS[Math.min(startIndex + 1, VOYAGE_PORTS.length - 1)];
  return {
    x: start.x + ((end.x - start.x) * amount),
    y: start.y + ((end.y - start.y) * amount),
  };
}

export function getVoyageStage(completedCount) {
  const safeCount = Math.max(0, Math.min(200, Number(completedCount) || 0));
  return [...VOYAGE_STAGES].reverse().find(stage => safeCount >= stage.min);
}

export function getEarnedCompanions(completedCount) {
  const safeCount = Math.max(0, Number(completedCount) || 0);
  return COMPANIONS.filter(companion => safeCount >= companion.min);
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[char]);
}

export function renderVoyageExperience(state) {
  const completedCount = state.familyPlayState?.completedDays ?? getLearningDayCount(state.activityDates);
  const stage = getVoyageStage(completedCount);
  const companions = getEarnedCompanions(completedCount);
  const stamps = buildDayPassport(state.familyPlayState?.completedDates || state.activityDates);
  const nextCompanion = COMPANIONS.find(companion => completedCount < companion.min);
  const percent = Math.round((completedCount / 200) * 100);
  const activeLanguage = state.languagePacks.find(pack => pack.id === state.activePackId)?.targetLanguage.name || 'Language';
  const posterCollection = DESTINATION_POSTERS.map(poster => {
    const unlocked = completedCount >= poster.unlock;
    const active = completedCount >= poster.unlock && completedCount < poster.unlock + 20;
    return `<article class="destination-poster ${unlocked ? 'unlocked' : 'charted'} ${active ? 'active' : ''}">
      <div class="destination-poster__plaque"><span>Nautilus · Port ${poster.port}</span><b>${unlocked ? 'Discovered' : `Charts open day ${poster.unlock}`}</b></div>
      <div class="destination-poster__art">
        <img src="${PUBLIC_ASSET_BASE}assets/illustrations/${poster.asset}" alt="Travel-poster illustration of ${poster.name}">
        ${unlocked ? '<span class="destination-poster__stamp" aria-label="Destination discovered">⚓</span>' : '<span class="destination-poster__lock" aria-hidden="true">✦</span>'}
      </div>
      <footer><small>${escapeHtml(poster.chapter)}</small><strong>${escapeHtml(poster.name)}</strong></footer>
    </article>`;
  }).join('');

  const route = Array.from({ length: 10 }, (_, index) => {
    const end = (index + 1) * 20;
    const start = index * 20;
    const isReached = completedCount >= end;
    const isCurrent = completedCount >= start && completedCount < end;
    const stateClass = isReached ? 'reached' : (isCurrent ? 'current' : 'charted');
    return `<li class="voyage-port ${stateClass}">
      <span class="voyage-port__marker">${isReached ? '✓' : (isCurrent ? '⛵' : index + 1)}</span>
      <span class="voyage-port__label">Port ${index + 1}</span>
    </li>`;
  }).join('');

  return `
    <section class="voyage-map-card" aria-labelledby="voyage-map-title">
      <div class="voyage-map__header">
        <div>
          <div class="hero-tag">Your learning voyage</div>
          <h3 id="voyage-map-title">${stage.icon} ${stage.label}</h3>
          <p>${completedCount} of 200 voyage days complete · ${percent}% across the sea</p>
        </div>
        <button class="btn btn-secondary btn-pill" id="view-voyage-btn">View voyage plan →</button>
      </div>
      <div class="voyage-sea" style="--voyage-progress:${percent}%">
        <img class="voyage-sea__art" src="${PUBLIC_ASSET_BASE}assets/illustrations/nautilus-voyage-panorama-v3.jpg" alt="A vintage travel-poster voyage from a moonlit Adriatic harbor toward the mountains and coastal towns of Montenegro">
        <div class="voyage-sea__shade" aria-hidden="true"></div>
        <div class="voyage-route" aria-hidden="true"><span></span></div>
        <ol class="voyage-ports" aria-label="Ten voyage ports">${route}</ol>
      </div>
    </section>

    <section class="destination-collection" aria-labelledby="destination-collection-title">
      <div class="destination-collection__header">
        <div><div class="hero-tag">The destination collection</div><h3 id="destination-collection-title">Posters from your voyage</h3></div>
        <p>${DESTINATION_POSTERS.filter(poster => completedCount >= poster.unlock).length} of ${DESTINATION_POSTERS.length} discovered</p>
      </div>
      <div class="destination-poster-grid">${posterCollection}</div>
    </section>

    <section class="captains-quarters" aria-labelledby="quarters-title">
      <div class="quarters-profile">
        <div class="quarters-avatar" aria-hidden="true">${companions.at(-1)?.icon || '⛵'}</div>
        <div>
          <div class="hero-tag">Captain's Quarters</div>
          <h3 id="quarters-title">${escapeHtml(state.profile)}'s logbook</h3>
          <p>${stage.label} · ${state.streakDays} day streak · ${state.stars} stars</p>
        </div>
      </div>
      <div class="quarters-grid">
        <div class="quarters-panel">
          <h4>${escapeHtml(activeLanguage)} Passport</h4>
          <p class="quarters-help">Earn one stamp for every 20 learning days.</p>
          <div class="passport-stamps">
            ${stamps.map(stamp => `<div class="passport-stamp ${stamp.earned ? 'earned' : ''}" title="Month ${stamp.month}: ${stamp.completedDays} of 20 learning days">
              <span>${stamp.earned ? '⚓' : stamp.month}</span><small>${stamp.completedDays}/20</small>
            </div>`).join('')}
          </div>
        </div>
        <div class="quarters-panel">
          <h4>Friends of the Sea</h4>
          <p class="quarters-help">Companions mark steady progress, never competition.</p>
          <img class="sea-friends__art ${companions.length ? '' : 'waiting'}" src="${PUBLIC_ASSET_BASE}assets/illustrations/friends-of-the-sea.jpg" alt="A reef fish, dolphin, sea turtle, and whale swimming together as a voyage crew">
          <div class="sea-friends">
            ${companions.length ? companions.map(friend => `<div class="sea-friend" title="${friend.note}"><span>${friend.icon}</span><small>${friend.name}</small></div>`).join('') : '<p class="quarters-empty">Complete your first lesson to meet your Reef Scout.</p>'}
          </div>
          ${nextCompanion ? `<p class="next-friend">Next companion at voyage day ${nextCompanion.min}.</p>` : '<p class="next-friend">Your whole crew is aboard!</p>'}
        </div>
      </div>
    </section>`;
}

export function renderImmersiveVoyageHero(state) {
  const completedDays = state.familyPlayState?.completedDays ?? getLearningDayCount(state.activityDates);
  const percent = Math.round((completedDays / 200) * 100);
  const stage = getVoyageStage(completedDays);
  const port = Math.min(10, Math.floor(completedDays / 20) + 1);
  const daysToNextPort = Math.max(0, Math.min(20, port * 20 - completedDays));
  const cameraPosition = Math.max(0, Math.min(100, percent));
  const vessel = getVoyagePosition(percent);
  const routePoints = VOYAGE_PORTS.map(item => `${item.x},${item.y}`).join(' ');
  const portMarkers = VOYAGE_PORTS.map((item, index) => {
    const status = index + 1 < port ? 'reached' : (index + 1 === port ? 'current' : 'charted');
    return `<button class="voyage-landmark ${status}" style="--port-x:${item.x}%;--port-y:${item.y}%" aria-label="Port ${index + 1}: ${item.name}, ${item.chapter}" data-port="${index + 1}">
      <span class="voyage-landmark__beacon">${status === 'reached' ? '✓' : index + 1}</span>
      <span class="voyage-landmark__label"><strong>${item.name}</strong><small>${item.chapter}</small></span>
    </button>`;
  }).join('');
  const currentPort = VOYAGE_PORTS[port - 1];

  return `<section class="immersive-voyage" style="--voyage-camera:${cameraPosition}%;--voyage-progress:${percent}%;--voyage-x:${vessel.x}%;--voyage-y:${vessel.y}%" aria-labelledby="immersive-voyage-title">
    <picture class="immersive-voyage__world-frame">
      <img class="immersive-voyage__world" src="${PUBLIC_ASSET_BASE}assets/illustrations/nautilus-voyage-panorama-v3.jpg" alt="A vintage travel-poster Adriatic voyage from a moonlit family harbor through islands toward a sunlit Montenegrin mountain town">
    </picture>
    <div class="immersive-voyage__veil" aria-hidden="true"></div>
    <div class="immersive-voyage__clouds" aria-hidden="true"></div>
    <div class="immersive-voyage__sparkles" aria-hidden="true"></div>
    <div class="immersive-voyage__foreground" aria-hidden="true"></div>
    <div class="immersive-voyage__birds" aria-hidden="true">⌁　⌁　⌁</div>
    <svg class="immersive-voyage__route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <polyline class="immersive-voyage__route-shadow" points="${routePoints}"></polyline>
      <polyline class="immersive-voyage__route-progress" pathLength="100" points="${routePoints}"></polyline>
    </svg>
    <div class="immersive-voyage__landmarks">${portMarkers}</div>
    <div class="immersive-voyage__masthead">
      <span class="immersive-voyage__eyebrow">The 200-day family voyage</span>
      <span>Port ${port} of 10</span>
    </div>
    <div class="immersive-voyage__hud">
      <div class="hero-tag">Now sailing · Port ${port}</div>
      <h1 id="immersive-voyage-title">${currentPort.name}</h1>
      <p><strong>${stage.icon} ${stage.label}</strong> · ${currentPort.chapter}<br>${completedDays} family days complete · ${daysToNextPort} to the next port</p>
      <div class="immersive-voyage__meter" aria-label="${percent}% of family voyage complete"><span></span></div>
      <a class="btn btn-primary" href="#voyage-plan">Explore the route plan ↓</a>
    </div>
    <div class="immersive-voyage__vessel" aria-hidden="true"><span>⛵</span><i></i><b></b></div>
    <div class="immersive-voyage__hint">Choose a port to preview each chapter · move your pointer to look across the water</div>
  </section>`;
}
