import {
  VOYAGE_LESSONS,
  getTopics,
  getBonusTopics,
  getCoreTopics,
  getExtraTopics,
  getCurriculumMonth,
  getTopic,
  LANGUAGE_PACK,
} from '../engine/learning-engine.js';
import { getGuidesProgress, getProfiles, getSyncRecoveryItems } from '../engine/progress-store.js';
import { isConfigured } from '../engine/supabase-client.js';
import { getLearningDayCount } from '../engine/learning-days.js';
import { renderVoyageExperience } from './voyage-map.js';
import { getSideQuestForProgress } from '../content/side-quests.js';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[character]);
}

export function renderProfilePill(profile, selectedName) {
  const name = escapeHtml(profile.name);
  return `<button class="profile-pill-btn ${selectedName === profile.name ? 'active' : ''}" data-profile="${name}" aria-label="Switch to profile ${name}">${name}</button>`;
}

export function renderDashboard(container, state, actions) {
  const visibleProfiles = state.sessionUser
    ? getProfiles().filter(profile => !String(profile.id).startsWith('local-'))
    : getProfiles();
  const learningDayCount = state.familyPlayState?.completedDays ?? getLearningDayCount(state.activityDates);
  const nextLesson = VOYAGE_LESSONS[Math.min(learningDayCount, 199)];
  const tonightTopic = getTopic(nextLesson.topicId) || getTopics()[0];
  const tonightDone = state.completedLessons.includes(nextLesson.id);
  const sideQuest = getSideQuestForProgress(state.activePackId, state.completedLessons.length);

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

  // Define sync status badge
  let syncBadgeHtml = '';
  if (isConfigured) {
    if (state.sessionUser) {
      if (navigator.onLine) {
        syncBadgeHtml = `<div class="badge-pill" style="border-color: var(--teal); color: var(--teal); font-size: 11px; padding: 2px 8px;" title="Signed in as ${escapeHtml(state.sessionUser.email || 'Google user')}">☁️ ${escapeHtml(state.sessionUser.email || 'Google Signed In')}</div>`;
      } else {
        syncBadgeHtml = `<div class="badge-pill" style="border-color: var(--amber); color: var(--amber); font-size: 11px; padding: 2px 8px;" title="Offline: local changes remain on this device until synchronization succeeds">📴 Offline · Local Saved</div>`;
      }
    }
  }

  container.innerHTML = `
    <!-- Top Nav bar -->
    <header class="navbar">
      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
          <div class="logo-icon">${LANGUAGE_PACK.targetLanguage.code.toUpperCase()}</div>
          <div class="logo-title">Learn ${LANGUAGE_PACK.targetLanguage.name}</div>
        </button>
        ${syncBadgeHtml}
        ${!state.linkedLearnerProfileId && ['owner', 'adult_guide'].includes(state.families?.[0]?.role)
          ? '<button class="btn btn-secondary" id="family-overview-btn" style="padding: 6px 12px; font-size: 12px;">Family Overview</button>'
          : ''}
      </div>

      <div class="nav-actions">
        <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted);">
          Language
          <select id="language-select" class="badge-pill" aria-label="Learning language" style="color: var(--text-main); min-height: 44px;">
            ${state.languagePacks.map(pack => `
              <option value="${pack.id}" ${pack.id === state.activePackId ? 'selected' : ''}>${pack.targetLanguage.name}${pack.status === 'pilot' ? ' · Pilot' : pack.status === 'review' ? ' · Review' : ''}</option>
            `).join('')}
          </select>
        </label>
        <!-- Profile switcher -->
        <div class="profile-pill-container" role="group" aria-label="Profiles">
          ${visibleProfiles.map(p => renderProfilePill(p, state.profile)).join('')}
          <button class="profile-pill-btn" id="nav-add-profile-btn" style="font-size: 14px; opacity: 0.7;">+</button>
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
          <div class="badge-pill" aria-label="Voyage lessons completed">
            <span style="color: var(--cyan);">✓</span> ${state.completedLessons.length} voyage ${state.completedLessons.length === 1 ? 'lesson' : 'lessons'}
          </div>
        `}
      </div>
    </header>

    <main class="container">
      ${state.familyError ? `<p role="alert" class="dashboard-alert">${escapeHtml(state.familyError)}</p>` : ''}
      ${LANGUAGE_PACK.status === 'pilot' ? `
        <section class="pilot-pack-banner" role="status">
          <div><strong>${escapeHtml(LANGUAGE_PACK.targetLanguage.name)} family pilot</strong><span>Draft wording and pronunciation need community review. Please treat this as a course we are improving together.</span></div>
          <span>Version ${escapeHtml(LANGUAGE_PACK.version)}</span>
        </section>` : ''}
      ${state.familyPlayState?.activeSession ? `
        <section class="family-play-dashboard-banner" aria-label="Active Family Play session">
          <div><span>Family Play is ${state.familyPlayState.activeSession.status}</span><strong>Voyage day ${state.familyPlayState.activeSession.voyageDay} · Join your family</strong></div>
          <button class="btn btn-primary" id="join-family-play-btn">Open Shared Lesson →</button>
        </section>` : ''}
      ${!state.isGuide && sideQuest ? `<section class="mystery-cargo ${sideQuest.locked ? 'locked' : 'unlocked'}" aria-labelledby="mystery-cargo-title">
        <div class="mystery-cargo__mark" aria-hidden="true">${sideQuest.locked ? '🔒' : '⚓'}</div>
        <div><div class="hero-tag">Five-lesson surprise</div><h2 id="mystery-cargo-title">${sideQuest.locked ? 'Mystery Cargo' : sideQuest.title}</h2>
        <p>${sideQuest.locked ? `${sideQuest.remaining} more ${sideQuest.remaining === 1 ? 'lesson' : 'lessons'} until the first side quest unlocks.` : `Unexpected cargo unlocked at lesson ${sideQuest.milestone}. Open it when you’re ready.`}</p></div>
        ${sideQuest.locked ? `<span>${state.completedLessons.length}/5</span>` : '<button class="btn btn-primary" id="open-side-quest-btn">Open the crate →</button>'}
      </section>` : ''}
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

      ${!state.isGuide ? renderVoyageExperience(state) : `
        <section class="guide-voyage-link">
          <h3>200-day learning voyage</h3>
          <button class="btn btn-secondary btn-pill" id="view-voyage-btn">View voyage plan →</button>
        </section>`}

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

  const profileId = visibleProfiles.find(profile => profile.name === state.profile)?.id;
  const recoveryItems = getSyncRecoveryItems().filter(tx => tx.profileId === profileId && tx.packId === LANGUAGE_PACK.id);
  if (recoveryItems.length) {
    const notice = document.createElement('p');
    notice.className = 'glass';
    notice.setAttribute('role', 'status');
    notice.style.padding = '16px';
    notice.textContent = 'Some saved progress needs review before it can sync. The original records are preserved on this device; do not clear browser data.';
    (container.querySelector('main') || container).prepend(notice);
  }

  // Attach event handlers
  container.querySelector('#logo-btn').addEventListener('click', actions.goDashboard);
  container.querySelector('#start-session-btn').addEventListener('click', () => actions.startSession(nextLesson));
  container.querySelector('#view-voyage-btn').addEventListener('click', actions.goCurriculum);

  // Profile switches
  container.querySelectorAll('.profile-pill-btn').forEach(btn => {
    if (btn.id === 'nav-add-profile-btn') return;
    btn.addEventListener('click', (e) => {
      actions.switchProfile(e.target.dataset.profile);
    });
  });

  // Nav Add Profile
  container.querySelector('#nav-add-profile-btn').addEventListener('click', () => {
    actions.goProfileSelect();
  });

  container.querySelector('#language-select')?.addEventListener('change', event => {
    actions.selectLanguage(event.target.value);
  });
  container.querySelector('#family-overview-btn')?.addEventListener('click', actions.goFamilyOverview);
  container.querySelector('#join-family-play-btn')?.addEventListener('click', actions.openFamilySession);
  container.querySelector('#open-side-quest-btn')?.addEventListener('click', () => actions.openSideQuest(sideQuest));

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
