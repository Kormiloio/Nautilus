import {
  VOYAGE_LESSONS,
  getTopics,
  getBonusTopics,
  getCoreTopics,
  getExtraTopics,
  getCurriculumMonth,
  getTopic,
} from '../engine/learning-engine.js';
import { getGuidesProgress, ALL_PROFILES } from '../engine/progress-store.js';

export function renderDashboard(container, state, actions) {
  const nextLesson = VOYAGE_LESSONS.find(l => !state.completedLessons.includes(l.id)) || VOYAGE_LESSONS[199];
  const tonightTopic = getTopic(nextLesson.topicId) || getTopics()[0];
  const tonightDone = state.completedLessons.includes(nextLesson.id);

  // Calculate badges
  const badgeDefs = [
    { id: 'first', label: 'First Steps', cond: state.completedTopicIds.length >= 1 },
    { id: 'getting', label: 'Getting Started', cond: state.completedTopicIds.length >= 5 },
    { id: 'halfway', label: 'Halfway Hero', cond: state.completedTopicIds.length >= 17 },
    { id: 'fluent', label: 'Fluent Enough', cond: state.completedTopicIds.length >= getTopics().length },
    { id: 'chatter', label: 'Chatterbox', cond: state.dialoguesDone >= 3 },
    { id: 'streak', label: '7-Day Streak', cond: state.streakDays >= 7 },
    { id: 'pro', label: 'Practice Pro', cond: state.stars >= 50 },
  ];
  const earnedBadges = badgeDefs.filter(b => b.cond);

  // Group topics by Month
  const topicsByMonth = {};
  getCoreTopics().forEach(t => {
    const monthKey = `Month ${getCurriculumMonth(t.id)}`;
    if (!topicsByMonth[monthKey]) topicsByMonth[monthKey] = [];
    topicsByMonth[monthKey].push(t);
  });

  const timelineHtml = Array.from({ length: 10 }, (_, i) => {
    const monthNum = i + 1;
    const topicsInMonth = getCoreTopics().filter(t => getCurriculumMonth(t.id) === monthNum);
    const anyCompleted = topicsInMonth.some(t => state.completedTopicIds.includes(t.id));
    const allCompleted = topicsInMonth.length > 0 && topicsInMonth.every(t => state.completedTopicIds.includes(t.id));

    let circleClass = 'timeline-circle';
    if (allCompleted) circleClass += ' completed';
    else if (anyCompleted || (nextLesson && nextLesson.month === i)) circleClass += ' unlocked';

    let lineClass = 'timeline-line';
    if (allCompleted) lineClass += ' completed';

    return `
      <div class="timeline-node">
        <div class="${circleClass}" title="Month ${monthNum} progress">${monthNum}</div>
        ${i < 9 ? `<div class="${lineClass}"></div>` : ''}
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">CG</div>
        <div class="logo-title">Učimo Crnogorski</div>
      </button>

      <div class="nav-actions">
        <!-- Profile switcher -->
        <div class="profile-pill-container" role="group" aria-label="Profiles">
          ${ALL_PROFILES.map(name => `
            <button class="profile-pill-btn ${state.profile === name ? 'active' : ''}" data-profile="${name}" aria-label="Switch to profile ${name}">${name}</button>
          `).join('')}
        </div>

        ${state.isGuide ? `
          <div class="badge-pill" style="color: var(--pink); border-color: var(--pink);">🧑‍🏫 Guide Mode</div>
        ` : `
          <div class="badge-pill" aria-label="Stars count">
            <span style="color: var(--amber);">★</span> ${state.stars} stars
          </div>
          <div class="badge-pill" aria-label="Streak count">
            <span style="color: var(--pink);">🔥</span> ${state.streakDays} day streak
          </div>
        `}
      </div>
    </header>

    <main class="container">
      <!-- Tonight's Session Hero -->
      <section class="hero-card" aria-labelledby="hero-title-id">
        <div class="hero-text">
          <div class="hero-tag">${tonightDone ? 'Recommended Review' : "Today's Target"}</div>
          <h2 class="hero-title" id="hero-title-id">${nextLesson.title}</h2>
          <p class="hero-subtitle">
            ${state.isGuide
              ? `Voyage day ${nextLesson.number} · Preview ${tonightTopic.title} before the kids sit down`
              : `Voyage day ${nextLesson.number} · ${nextLesson.detail} · about 10–15 minutes`
            }
          </p>
        </div>
        <button class="btn btn-primary" id="start-session-btn">
          ${state.isGuide ? 'Preview Session' : (tonightDone ? 'Replay Session' : 'Start Lesson')}
        </button>
      </section>

      <!-- Calendar Mount -->
      <section class="voyage-calendar" id="calendar-mount" aria-label="Learning Voyage Calendar"></section>

      <!-- 10-Month Timeline Progress -->
      <section style="margin-bottom: 32px;" aria-label="10-Month Progress Timeline">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
          <h3 class="section-title" style="margin: 0;">10-Month Journey</h3>
          <button class="btn btn-secondary btn-pill" id="view-voyage-btn">See entire voyage plan →</button>
        </div>
        <div class="timeline">${timelineHtml}</div>
      </section>

      <!-- Guide Progress dashboard -->
      ${state.isGuide ? `
        <section aria-label="Learner Progress Summary">
          <h3 class="section-title">Kids' Progress</h3>
          <div class="kids-progress-grid">
            ${getGuidesProgress().map(k => `
              <div class="kid-progress-card">
                <div class="kid-progress-header">${k.name}</div>
                <div class="kid-progress-stats">
                  <div>⭐ ${k.stars} stars</div>
                  <div>🔥 ${k.streak}d streak</div>
                  <div>📚 ${k.completed} topics done</div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Badges summary -->
      ${!state.isGuide && earnedBadges.length > 0 ? `
        <section aria-label="Earned Badges">
          <h3 class="section-title">Badges Earned</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px;">
            ${earnedBadges.map(b => `
              <div class="badge-pill" style="border-color: var(--amber); color: var(--text-main);">
                <span style="color: var(--amber);">🎖</span> ${b.label}
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Free practice Grid -->
      <section aria-label="Topics library">
        <h3 class="section-title">Practice on Your Own</h3>

        <!-- Mixed review card -->
        ${state.completedTopicIds.length >= 2 && !state.isGuide ? `
          <div style="margin-bottom: 24px;">
            <button type="button" class="topic-card" id="mixed-review-card" style="max-width: 320px; border-color: var(--pink);">
              <div class="topic-card__icon" style="background: var(--pink);">Mx</div>
              <div class="topic-card__title">Mixed Review</div>
              <div class="topic-card__subtitle">Random practice from all topics you've completed</div>
            </button>
          </div>
        ` : ''}

        ${Object.keys(topicsByMonth).map(monthLabel => `
          <div style="margin-bottom: 28px;">
            <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">${monthLabel}</h4>
            <div class="cards-grid">
              ${topicsByMonth[monthLabel].map(t => {
                const isCompleted = state.completedTopicIds.includes(t.id);
                return `
                  <button type="button" class="topic-card" data-topic-id="${t.id}" aria-label="Practice ${t.title}">
                    <div class="topic-card__icon" style="background: ${t.color};">${t.icon}</div>
                    ${isCompleted ? `<div class="topic-card__check">✓</div>` : ''}
                    <div>
                      <div class="topic-card__title">${t.title}</div>
                      <div class="topic-card__subtitle">${t.subtitle}</div>
                    </div>
                    <div class="topic-card__count">${t.items.length} words${t.dialogue ? ' · role-play' : ''}</div>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}

        <!-- Anytime extras and advanced material -->
        <div style="margin-bottom: 28px;">
          <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Anytime Extras &amp; Capstones</h4>
          <div class="cards-grid">
            ${[...getExtraTopics(), ...getBonusTopics()].map(t => `
              <button type="button" class="topic-card" data-topic-id="${t.id}" aria-label="Practice ${t.title}">
                <div class="topic-card__icon" style="background: ${t.color};">${t.icon}</div>
                <div>
                  <div class="topic-card__title">${t.title}</div>
                  <div class="topic-card__subtitle">${t.subtitle}</div>
                </div>
                <div class="topic-card__count">${t.items.length} words</div>
              </button>
            `).join('')}
          </div>
        </div>
      </section>
    </main>
  `;

  // Attach event handlers
  container.querySelector('#logo-btn').addEventListener('click', actions.goDashboard);
  container.querySelector('#start-session-btn').addEventListener('click', () => actions.startSession(nextLesson));
  container.querySelector('#view-voyage-btn').addEventListener('click', actions.goCurriculum);

  // Profile switches
  container.querySelectorAll('.profile-pill-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      actions.switchProfile(e.target.dataset.profile);
    });
  });

  // Topic card clicks
  container.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => {
      const topicId = card.dataset.topicId;
      if (topicId) actions.openTopic(topicId);
    });
  });

  // Mixed review click
  const mixedCard = container.querySelector('#mixed-review-card');
  if (mixedCard) {
    mixedCard.addEventListener('click', actions.startMixedReview);
  }
}
