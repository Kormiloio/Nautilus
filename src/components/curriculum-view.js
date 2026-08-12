import { VOYAGE_LESSONS, MONTH_NAMES, getTopic, LANGUAGE_PACK } from '../engine/learning-engine.js';
import { getLearningDayCount } from '../engine/learning-days.js';
import { renderImmersiveVoyageHero } from './voyage-map.js';

export function renderCurriculum(container, state, actions) {
  const completedDayCount = state.familyPlayState?.completedDays ?? getLearningDayCount(state.activityDates);
  // Group lessons by Month
  const lessonsByMonth = {};
  for (let m = 0; m < 10; m++) {
    lessonsByMonth[m] = VOYAGE_LESSONS.filter(l => l.month === m);
  }

  container.innerHTML = `
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${LANGUAGE_PACK.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${LANGUAGE_PACK.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main>
      ${renderImmersiveVoyageHero(state)}
      <div class="container voyage-plan-content" id="voyage-plan" style="max-width: 760px;">
      <h2 style="font-size: 28px; margin-bottom: 8px;">The 200-Day Family Voyage</h2>
      <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 32px; line-height: 1.6;">
        Ten months, five family learning days each week. Independent practice builds personal skill but does not move this shared route. Every fourth week brings the month's vocabulary and patterns together.
      </p>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        ${Object.keys(lessonsByMonth).map(mIdx => {
          const monthNum = parseInt(mIdx) + 1;
          const monthLessons = lessonsByMonth[mIdx];

          // Check completion
          const monthStart = monthLessons[0].number;
          const monthEnd = monthLessons.at(-1).number;
          const allCompleted = completedDayCount >= monthEnd;
          const anyCompleted = completedDayCount >= monthStart;

          let monthColor = 'var(--text-muted)';
          if (allCompleted) monthColor = 'var(--lime)';
          else if (anyCompleted || completedDayCount + 1 === monthStart) monthColor = 'var(--cyan)';

          return `
            <div style="border-left: 2px solid ${monthColor}; padding-left: 20px; margin-bottom: 8px;">
              <h3 style="font-size: 16px; margin-bottom: 12px; color: ${monthColor}; text-transform: uppercase; letter-spacing: 0.05em;">
                Month ${monthNum} — ${MONTH_NAMES[mIdx]}
              </h3>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${monthLessons.filter(l => l.number % 5 === 1).map(l => {
                  // Represent each week in this month
                  const weekNum = l.week;
                  const weekLessons = VOYAGE_LESSONS.filter(wl => wl.week === weekNum);
                  const isWeekCompleted = completedDayCount >= weekLessons.at(-1).number;
                  const isWeekActive = completedDayCount + 1 >= weekLessons[0].number && !isWeekCompleted;

                  const topic = l.topicId ? getTopic(l.topicId) : null;

                  let statusText = 'Planned';
                  let statusColor = 'var(--text-muted)';

                  if (isWeekCompleted) {
                    statusText = '✓ Completed';
                    statusColor = 'var(--lime)';
                  } else if (isWeekActive) {
                    statusText = 'Active Week';
                    statusColor = 'var(--cyan)';
                  }

                  return `
                    <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; border-radius: 12px; padding: 14px 18px; cursor: pointer; transition: all var(--transition-fast);" data-week="${weekNum}">
                      <div>
                        <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 2px;">
                          ${weekNum % 4 === 0 ? 'Week 4 (Integration)' : `Week ${weekNum % 4}: ${topic ? topic.title : 'Mixed review'}`}
                        </h4>
                        <p style="color: var(--text-muted); font-size: 13px;">
                          Lessons ${weekLessons[0].number} – ${weekLessons[4].number}
                        </p>
                      </div>
                      <div style="font-size: 13px; font-weight: 800; color: ${statusColor};">${statusText}</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
      </div>
    </main>
  `;

  // Attach event handlers
  container.querySelector('#logo-btn').addEventListener('click', actions.goDashboard);
  container.querySelector('#back-btn').addEventListener('click', actions.goDashboard);
  const voyage = container.querySelector('.immersive-voyage');
  voyage?.addEventListener('pointermove', event => {
    const bounds = voyage.getBoundingClientRect();
    voyage.style.setProperty('--look-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 1.5}%`);
    voyage.style.setProperty('--look-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 1.2}%`);
  });
  voyage?.addEventListener('pointerleave', () => {
    voyage.style.setProperty('--look-x', '0%');
    voyage.style.setProperty('--look-y', '0%');
  });

  // Click on a week
  container.querySelectorAll('[data-week]').forEach(el => {
    el.addEventListener('click', () => {
      const weekNum = parseInt(el.dataset.week);
      const weekLessons = VOYAGE_LESSONS.filter(l => l.week === weekNum);
      const currentDayLesson = VOYAGE_LESSONS[Math.min(completedDayCount, 199)];
      const lessonInWeek = weekLessons.find(l => l.id === currentDayLesson.id) || weekLessons[0];
      actions.startSession(lessonInWeek);
    });
  });
}
