import { VOYAGE_LESSONS, START_DATE, dateKey } from '../engine/learning-engine.js';
import { getLearningDayPosition, uniqueLearningDates } from '../engine/learning-days.js';

export function renderCalendar(element, state, onPrevMonth, onNextMonth) {
  const sMonth = state.calendarMonth; // 0 to 9 representing Aug to May
  const shownMonth = new Date(START_DATE.getFullYear(), START_DATE.getMonth() + sMonth, 1);
  const shownYear = shownMonth.getFullYear();
  const shownMonthIndex = shownMonth.getMonth();

  // Calculate offset (adjusting so Monday is index 0)
  const firstDayOffset = (new Date(shownYear, shownMonthIndex, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(shownYear, shownMonthIndex + 1, 0).getDate();

  // Create a mapping of dates to lessons
  const lessonByDate = new Map();
  let currentSchedDate = new Date(START_DATE);

  for (let i = 0; i < VOYAGE_LESSONS.length; i++) {
    while (currentSchedDate.getDay() === 0 || currentSchedDate.getDay() === 6) {
      currentSchedDate.setDate(currentSchedDate.getDate() + 1);
    }
    lessonByDate.set(dateKey(currentSchedDate), VOYAGE_LESSONS[i]);
    currentSchedDate.setDate(currentSchedDate.getDate() + 1);
  }

  const cells = [];
  // Empty offset cells
  for (let i = 0; i < firstDayOffset; i++) {
    cells.push({ label: '', style: 'background:transparent; cursor:default;', ariaLabel: 'Empty cell' });
  }

  const todayStr = dateKey(new Date());
  const familyDates = state.familyPlayState?.completedDates || state.activityDates;
  const activeDateSet = new Set(uniqueLearningDates(familyDates));

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(shownYear, shownMonthIndex, day);
    const key = dateKey(date);
    const lesson = lessonByDate.get(key);
    const active = activeDateSet.has(key);
    const isToday = key === todayStr;

    let stateClass = 'state-rest';
    let stateName = 'In harbor';

    if (lesson) {
      stateClass = 'state-planned';
      stateName = 'Charted';
    }
    if (isToday && lesson && !active) {
      stateClass = 'state-making-way';
      stateName = 'Making way';
    }
    if (active) {
      stateClass = 'state-full-sail';
      stateName = 'Full sail';
    }

    cells.push({
      label: String(day),
      stateClass,
      ariaLabel: `${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}: ${stateName}${lesson ? `, Lesson ${lesson.number}: ${lesson.title}` : ''}`,
    });
  }

  // Pad remaining columns
  while (cells.length % 7 !== 0) {
    cells.push({ label: '', style: 'background:transparent; cursor:default;', ariaLabel: 'Empty cell' });
  }

  const monthLabel = shownMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Calculate next incomplete lesson number
  const dayPosition = getLearningDayPosition(familyDates);
  const weekStart = new Date();
  weekStart.setHours(0, 0, 0, 0);
  weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 6) % 7));
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 7);
  const activeThisWeek = state.activityDates.filter(key => {
    const d = new Date(`${key}T12:00:00`);
    return d >= weekStart && d < weekEnd;
  }).length;
  const activeThisMonth = state.activityDates.filter(key => key.startsWith(`${shownYear}-${String(shownMonthIndex + 1).padStart(2, '0')}-`)).length;
  const scheduledCells = cells.filter(c => c.label && c.ariaLabel.includes('Lesson'));

  element.innerHTML = `
    <div class="voyage-calendar__head">
      <div>
        <div style="color: var(--cyan); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 4px;">Ten-month learning voyage</div>
        <h3 class="voyage-calendar__title">${monthLabel}</h3>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <div class="voyage-calendar__count" title="Voyage Progress">
          ${dayPosition.completedDays < 200 ? `${dayPosition.completedDays} of 200 learning days complete` : 'Voyage complete · 200 of 200'}
        </div>
        <div class="voyage-calendar__nav">
          <button id="cal-prev" aria-label="Previous month" ${sMonth === 0 ? 'disabled style="opacity:0.3; cursor:default;"' : ''}>‹</button>
          <button id="cal-next" aria-label="Next month" ${sMonth === 9 ? 'disabled style="opacity:0.3; cursor:default;"' : ''}>›</button>
        </div>
      </div>
    </div>

    <div class="voyage-calendar__grid" role="grid" aria-label="Calendar for ${monthLabel}">
      ${['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => `
        <div class="voyage-calendar__weekday" role="columnheader" aria-label="${day}">${day}</div>
      `).join('')}

      ${cells.map(c => {
        if (c.label === '') {
          return `<div class="voyage-calendar__day" style="${c.style}" aria-hidden="true"></div>`;
        }
        return `
          <div class="voyage-calendar__day ${c.stateClass}" role="gridcell" aria-label="${c.ariaLabel}" tabindex="0">
            ${c.label}
          </div>
        `;
      }).join('')}
    </div>

    <div class="voyage-calendar__legend" aria-label="Calendar Legend">
      <span><i class="voyage-calendar__dot state-rest"></i>In harbor</span>
      <span><i class="voyage-calendar__dot state-planned"></i>Charted</span>
      <span><i class="voyage-calendar__dot state-making-way"></i>Making way</span>
      <span><i class="voyage-calendar__dot state-full-sail"></i>Full sail</span>
      <span><i class="voyage-calendar__dot state-open-water"></i>Open water</span>
    </div>

    <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:14px; color:var(--text-muted); font-size:12px; font-weight:700;">
      <span>${dayPosition.completedDays} learning ${dayPosition.completedDays === 1 ? 'day' : 'days'} completed · ${dayPosition.percent}%</span>
      <span>•</span>
      <span>${state.completedLessons.length} activities completed</span>
      <span>•</span>
      <span>${activeThisWeek} active ${activeThisWeek === 1 ? 'day' : 'days'} this week</span>
      <span>•</span>
      <span>${activeThisMonth} active ${activeThisMonth === 1 ? 'day' : 'days'} this month</span>
    </div>

    <details class="calendar-list">
      <summary>View this month as a list</summary>
      <ul>
        ${scheduledCells.map(c => `<li>${c.ariaLabel}</li>`).join('')}
      </ul>
    </details>
  `;

  // Attach event listeners
  const prevBtn = element.querySelector('#cal-prev');
  const nextBtn = element.querySelector('#cal-next');

  if (prevBtn && sMonth > 0) {
    prevBtn.addEventListener('click', onPrevMonth);
  }
  if (nextBtn && sMonth < 9) {
    nextBtn.addEventListener('click', onNextMonth);
  }
}
