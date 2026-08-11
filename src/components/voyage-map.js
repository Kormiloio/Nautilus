const VOYAGE_STAGES = [
  { id: 'anchors-aweigh', label: 'Anchors Aweigh', min: 0, icon: '⚓' },
  { id: 'making-headway', label: 'Making Headway', min: 50, icon: '⛵' },
  { id: 'rounding-the-mark', label: 'Rounding the Mark', min: 100, icon: '🧭' },
  { id: 'flying-colors', label: 'Flying Colors', min: 150, icon: '🚩' },
  { id: 'shipshape-moored', label: 'Shipshape · Moored', min: 200, icon: '🏝️' },
];

const COMPANIONS = [
  { min: 1, icon: '🐠', name: 'Reef Scout', note: 'First lesson completed' },
  { min: 25, icon: '🐬', name: 'Bright Dolphin', note: '25 voyage days completed' },
  { min: 75, icon: '🐢', name: 'Steady Turtle', note: '75 voyage days completed' },
  { min: 150, icon: '🐋', name: 'Great Voyager', note: '150 voyage days completed' },
];

export function getVoyageStage(completedCount) {
  const safeCount = Math.max(0, Math.min(200, Number(completedCount) || 0));
  return [...VOYAGE_STAGES].reverse().find(stage => safeCount >= stage.min);
}

export function getEarnedCompanions(completedCount) {
  const safeCount = Math.max(0, Number(completedCount) || 0);
  return COMPANIONS.filter(companion => safeCount >= companion.min);
}

export function getPassportStamps(completedLessonIds) {
  const completed = new Set(completedLessonIds || []);
  return Array.from({ length: 10 }, (_, index) => {
    const start = index * 20 + 1;
    const lessonIds = Array.from({ length: 20 }, (__, offset) => `voyage-${start + offset}`);
    const completedLessons = lessonIds.filter(id => completed.has(id)).length;
    return {
      month: index + 1,
      completedLessons,
      earned: completedLessons === 20,
    };
  });
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[char]);
}

export function renderVoyageExperience(state) {
  const completedCount = Math.min(200, state.completedLessons.length);
  const stage = getVoyageStage(completedCount);
  const companions = getEarnedCompanions(completedCount);
  const stamps = getPassportStamps(state.completedLessons);
  const nextCompanion = COMPANIONS.find(companion => completedCount < companion.min);
  const percent = Math.round((completedCount / 200) * 100);
  const activeLanguage = state.languagePacks.find(pack => pack.id === state.activePackId)?.targetLanguage.name || 'Language';

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
        <img class="voyage-sea__art" src="./assets/illustrations/nautilus-voyage-map.jpg" alt="An illustrated sea route leading from a moonlit harbor toward the mountains and coastal towns of Montenegro">
        <div class="voyage-sea__shade" aria-hidden="true"></div>
        <div class="voyage-route" aria-hidden="true"><span></span></div>
        <ol class="voyage-ports" aria-label="Ten voyage ports">${route}</ol>
      </div>
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
          <p class="quarters-help">Earn one stamp for every 20 voyage lessons.</p>
          <div class="passport-stamps">
            ${stamps.map(stamp => `<div class="passport-stamp ${stamp.earned ? 'earned' : ''}" title="Month ${stamp.month}: ${stamp.completedLessons} of 20 lessons">
              <span>${stamp.earned ? '⚓' : stamp.month}</span><small>${stamp.completedLessons}/20</small>
            </div>`).join('')}
          </div>
        </div>
        <div class="quarters-panel">
          <h4>Friends of the Sea</h4>
          <p class="quarters-help">Companions mark steady progress, never competition.</p>
          <img class="sea-friends__art ${companions.length ? '' : 'waiting'}" src="./assets/illustrations/friends-of-the-sea.jpg" alt="A reef fish, dolphin, sea turtle, and whale swimming together as a voyage crew">
          <div class="sea-friends">
            ${companions.length ? companions.map(friend => `<div class="sea-friend" title="${friend.note}"><span>${friend.icon}</span><small>${friend.name}</small></div>`).join('') : '<p class="quarters-empty">Complete your first lesson to meet your Reef Scout.</p>'}
          </div>
          ${nextCompanion ? `<p class="next-friend">Next companion at voyage day ${nextCompanion.min}.</p>` : '<p class="next-friend">Your whole crew is aboard!</p>'}
        </div>
      </div>
    </section>`;
}
