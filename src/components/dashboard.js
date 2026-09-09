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
import { hasSideQuestBadge } from '../engine/side-quest-game.js';
import { getLessonPreview } from '../engine/family-play-session.js';

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
  const activeProfile = getProfiles().find(profile => profile.name === state.profile);
  const viewingAnotherLearner = Boolean(
    state.sessionUser && activeProfile?.linkedUserId && activeProfile.linkedUserId !== state.sessionUser.id
  );
  const learningDayCount = state.familyPlayState?.completedDays ?? getLearningDayCount(state.activityDates);
  const nextLesson = VOYAGE_LESSONS[Math.min(learningDayCount, 199)];
  const tonightTopic = getTopic(nextLesson.topicId) || getTopics()[0];
  const tonightDone = state.completedLessons.includes(nextLesson.id);
  const lessonPreview = getLessonPreview(nextLesson, state.completedTopicIds);
  const previewReviews = lessonPreview.reviewTopics.slice(0, 3);
  const previewConnection = lessonPreview.connectionItems[0];
  const sideQuest = getSideQuestForProgress(state.activePackId, state.completedLessons.length);
  const sideQuestComplete = sideQuest && !sideQuest.locked && hasSideQuestBadge(state.activePackId, state.profile, sideQuest.id);

  // Voyage Honors celebrate an accomplishment; posters celebrate arriving at a place.
  const badgeDefs = [
    { id: 'first', icon: '⚓', title: 'First Crossing', description: 'Completed your first learning chapter.', cond: state.completedTopicIds.length >= 1, progress: state.completedTopicIds.length, goal: 1 },
    { id: 'getting', icon: '⛵', title: 'Steady Wake', description: 'Completed five learning chapters.', cond: state.completedTopicIds.length >= 5, progress: state.completedTopicIds.length, goal: 5 },
    { id: 'detective', icon: '🔎', title: 'Context Detective', description: 'Solved a Sailor Talk case using clues.', cond: sideQuestComplete, progress: sideQuestComplete ? 1 : 0, goal: 1 },
    { id: 'chatter', icon: '🗣️', title: 'Story Keeper', description: 'Finished three family conversations.', cond: state.dialoguesDone >= 3, progress: state.dialoguesDone, goal: 3 },
    { id: 'streak', icon: '🔥', title: 'Crew Rhythm', description: 'Learned together for seven active days.', cond: state.streakDays >= 7, progress: state.streakDays, goal: 7 },
    { id: 'pro', icon: '✦', title: 'Star Navigator', description: 'Earned fifty stars through practice.', cond: state.stars >= 50, progress: state.stars, goal: 50 },
    { id: 'halfway', icon: '🧭', title: 'Open-Water Captain', description: 'Completed seventeen learning chapters.', cond: state.completedTopicIds.length >= 17, progress: state.completedTopicIds.length, goal: 17 },
    { id: 'fluent', icon: '🏆', title: 'Homecoming Voice', description: 'Completed every core learning chapter.', cond: state.completedTopicIds.length >= getTopics().length, progress: state.completedTopicIds.length, goal: getTopics().length },
  ];
  const earnedBadges = badgeDefs.filter(badge => badge.cond);
  const nextHonors = badgeDefs.filter(badge => !badge.cond).slice(0, 2);

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
        ${state.platformAdmin ? '<button class="btn btn-secondary" id="platform-admin-btn" style="padding: 6px 12px; font-size: 12px;">Platform Admin</button>' : ''}
        ${!state.linkedLearnerProfileId && ['owner', 'adult_guide'].includes(state.families?.[0]?.role)
          ? '<button class="btn btn-secondary" id="activity-preview-btn" style="padding: 6px 12px; font-size: 12px;">Preview activities</button><button class="btn btn-secondary" id="family-overview-btn" style="padding: 6px 12px; font-size: 12px;">Family Overview</button>'
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
      ${sideQuest ? `<section class="mystery-cargo ${sideQuest.locked ? 'locked' : 'unlocked'}" aria-labelledby="mystery-cargo-title">
        <div class="mystery-cargo__mark" aria-hidden="true">${sideQuest.locked ? '🔒' : '⚓'}</div>
        <div><div class="hero-tag">Five-lesson surprise</div><h2 id="mystery-cargo-title">${sideQuest.locked ? 'Mystery Cargo' : sideQuest.title}</h2>
        <p>${sideQuest.locked ? `${sideQuest.remaining} more ${sideQuest.remaining === 1 ? 'lesson' : 'lessons'} until the first side quest unlocks.` : (sideQuestComplete ? 'Context Detective badge earned. Replay whenever your crew wants another try.' : `Unexpected cargo unlocked at lesson ${sideQuest.milestone}. Open it when you’re ready.`)}</p></div>
        ${sideQuest.locked ? `<span>${state.completedLessons.length}/5</span>` : `<button class="btn btn-primary" id="open-side-quest-btn">${sideQuestComplete ? 'Replay the case →' : 'Open the crate →'}</button>`}
      </section>` : ''}
      ${viewingAnotherLearner ? '<section class="learner-credit-guide" role="status"><div><div class="hero-tag">Viewing learner progress</div><strong>' + escapeHtml(activeProfile.name) + ' earns individual progress from their own linked account.</strong><p>For a shared lesson from this parent account, use Family Play. Their stars and voyage days stay safely attached to their account.</p></div><button class="btn btn-primary" id="plan-family-play-btn">Plan Family Play →</button></section>' : ''}

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
          ${viewingAnotherLearner ? 'Plan Family Play' : (state.isGuide ? 'Preview Session' : (tonightDone ? 'Replay Session' : 'Start Lesson'))}
        </button>
      </section>

      <section class="up-next-card" aria-labelledby="up-next-title">
        <div class="up-next-card__heading">
          <div><div class="hero-tag">See the route ahead</div><h3 id="up-next-title">Up next: ${escapeHtml(nextLesson.title)}</h3></div>
          <span class="up-next-card__kind">${escapeHtml(lessonPreview.lessonKind)}</span>
        </div>
        <div class="up-next-card__grid">
          <article>
            <span>Today’s focus</span>
            <strong>${lessonPreview.topic ? escapeHtml(lessonPreview.topic.title) : "Mixed voyage review"}</strong>
            <p>${lessonPreview.topic ? "Meet new language, then use it right away." : "Bring several earlier topics back into one useful session."}</p>
          </article>
          <article>
            <span>Bring back</span>
            <strong>${previewReviews.length ? previewReviews.map(topic => escapeHtml(topic.title)).join(" · ") : "Your first words"}</strong>
            <p>${previewReviews.length ? "These familiar topics may appear in Flashcards, Match, or Quiz." : "As you travel, this space will show the words the lesson is helping you remember."}</p>
          </article>
          ${previewConnection ? "<article class=\"up-next-card__connection\"><span>Make a connection</span><strong>" + escapeHtml(previewConnection.targetText) + "</strong><p>" + escapeHtml(previewConnection.supportText) + "</p></article>" : ""}
        </div>
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

      <!-- Voyage Honors -->
      ${!state.isGuide ? `
        <section class="voyage-honors" aria-labelledby="voyage-honors-title">
          <div class="voyage-honors__heading">
            <div><div class="hero-tag">Your accomplishments</div><h3 id="voyage-honors-title">Voyage Honors</h3><p>Posters remember where you arrived. Honors remember what your family achieved.</p></div>
            <strong>${earnedBadges.length} earned</strong>
          </div>
          <div class="voyage-honors__grid">
            ${earnedBadges.length ? earnedBadges.map(badge => `<article class="voyage-honor earned"><div class="voyage-honor__medal" aria-hidden="true">${badge.icon}</div><div><span>Honor earned</span><h4>${badge.title}</h4><p>${badge.description}</p></div><b>✓</b></article>`).join('') : '<p class="voyage-honors__empty">Your first honor is waiting just beyond the next lesson.</p>'}
            ${nextHonors.map(badge => `<article class="voyage-honor upcoming"><div class="voyage-honor__medal" aria-hidden="true">${badge.icon}</div><div><span>Next honor · ${Math.min(badge.progress, badge.goal)}/${badge.goal}</span><h4>${badge.title}</h4><p>${badge.description}</p></div></article>`).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Free practice Grid -->
      <section aria-label="Topics library">
        <h3 class="section-title">Practice on Your Own</h3>

        <!-- Voyage review card -->
        ${state.completedTopicIds.length >= 2 && !state.isGuide ? `
          <div style="margin-bottom: 24px;">
            <button type="button" class="topic-card" id="voyage-review-card" style="max-width: 320px; border-color: var(--pink);">
              <div class="topic-card__icon" style="background: var(--pink);">↺</div>
              <div class="topic-card__title">Review from your voyage</div>
              <div class="topic-card__subtitle">Bring back familiar words from completed topics</div>
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
  container.querySelector('#start-session-btn').addEventListener('click', () => {
    if (viewingAnotherLearner) { actions.goFamilyOverview(); return; }
    actions.startSession(nextLesson);
  });
  container.querySelector('#plan-family-play-btn')?.addEventListener('click', actions.goFamilyOverview);
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
  container.querySelector('#activity-preview-btn')?.addEventListener('click', actions.goActivityPreview);
  container.querySelector('#platform-admin-btn')?.addEventListener('click', actions.goAdminDashboard);
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
  const voyageReviewCard = container.querySelector('#voyage-review-card');
  if (voyageReviewCard) {
    voyageReviewCard.addEventListener('click', actions.startVoyageReview);
  }

}
