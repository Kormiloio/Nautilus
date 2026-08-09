import { VOYAGE_LESSONS, MONTH_NAMES, getTopic } from '../engine/learning-engine.js';

export function renderCurriculum(container, state, actions) {
  // Group lessons by Month
  const lessonsByMonth = {};
  for (let m = 0; m < 10; m++) {
    lessonsByMonth[m] = VOYAGE_LESSONS.filter(l => l.month === m);
  }

  container.innerHTML = `
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">CG</div>
        <div class="logo-title">Učimo Crnogorski</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main class="container" style="max-width: 760px;">
      <h2 style="font-size: 28px; margin-bottom: 8px;">The 200-Day Voyage</h2>
      <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 32px; line-height: 1.6;">
        Ten months, five learning days each week. Every fourth week is an integration week where we bring together the vocabulary and patterns from the month.
      </p>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        ${Object.keys(lessonsByMonth).map(mIdx => {
          const monthNum = parseInt(mIdx) + 1;
          const monthLessons = lessonsByMonth[mIdx];

          // Check completion
          const allCompleted = monthLessons.every(l => state.completedLessons.includes(l.id));
          const anyCompleted = monthLessons.some(l => state.completedLessons.includes(l.id));

          let monthColor = 'var(--text-muted)';
          if (allCompleted) monthColor = 'var(--lime)';
          else if (anyCompleted || (state.completedLessons.length / 20 === monthNum - 1)) monthColor = 'var(--cyan)';

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
                  const isWeekCompleted = weekLessons.every(wl => state.completedLessons.includes(wl.id));
                  const isWeekActive = weekLessons.some(wl => !state.completedLessons.includes(wl.id)) &&
                                       weekLessons[0].number <= state.completedLessons.length + 1;

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
                          Week ${weekNum % 4 === 0 ? '4 (Integration)' : `Week ${weekNum % 4}: ${topic ? topic.title : 'Mixed review'}`}
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
    </main>
  `;

  // Attach event handlers
  container.querySelector('#logo-btn').addEventListener('click', actions.goDashboard);
  container.querySelector('#back-btn').addEventListener('click', actions.goDashboard);

  // Click on a week
  container.querySelectorAll('[data-week]').forEach(el => {
    el.addEventListener('click', () => {
      const weekNum = parseInt(el.dataset.week);
      const weekLessons = VOYAGE_LESSONS.filter(l => l.week === weekNum);
      const firstIncomplete = weekLessons.find(l => !state.completedLessons.includes(l.id)) || weekLessons[0];
      actions.startSession(firstIncomplete);
    });
  });
}
