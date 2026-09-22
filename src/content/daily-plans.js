import montenegrinPilot from './daily-vocabulary/montenegrin-continuation-24-200.json';

// Explicitly authorized family pilot; metadata remains draft, not human-approved.
export const DAILY_PLANS = Object.freeze({});
export const PILOT_DAILY_PLANS = Object.freeze({ 'montenegrin-en': montenegrinPilot });
export const DAILY_VOCABULARY_REVISION = 6;
export const DAILY_PILOT_REVISION = 7;
export const FOCUSED_PILOT_START_DAY = 27;

// From day 27 onward, two authored subjects are spread across an eight-day
// child-led rhythm: three focus days, two gentle bridge days, then three focus
// days on the new subject. The underlying vocabulary stays canonical; this
// only changes how much of it children meet at once.
export function getFocusedPilotMetadata(plan, lessonId) {
  const day = Number(String(lessonId || '').replace('voyage-', ''));
  if (!Number.isInteger(day) || day < FOCUSED_PILOT_START_DAY || day > plan.endDay) return null;
  const offset = day - FOCUSED_PILOT_START_DAY;
  const cycleOffset = offset % 8;
  const sourceDay = FOCUSED_PILOT_START_DAY + Math.floor(offset / 8) * 2;
  const primary = plan.lessons.find(lesson => lesson.id === `voyage-${sourceDay}`);
  const secondary = plan.lessons.find(lesson => lesson.id === `voyage-${sourceDay + 1}`);
  if (!primary || !secondary) return null;
  if (cycleOffset < 3) return {
    phase: 'focus', step: cycleOffset + 1, primary, secondary,
    title: `${primary.title} · Focus ${cycleOffset + 1} of 3`,
    description: `Focused family pilot · Stay with ${primary.title.toLocaleLowerCase()} today. No unrelated review or grammar.`,
  };
  if (cycleOffset < 5) return {
    phase: 'bridge', step: cycleOffset - 2, primary, secondary,
    title: `${primary.title} → ${secondary.title} · Bridge ${cycleOffset - 2} of 2`,
    description: `Focused family pilot · Keep familiar ${primary.title.toLocaleLowerCase()} while gently introducing ${secondary.title.toLocaleLowerCase()}.`,
  };
  return {
    phase: 'focus', step: cycleOffset - 4, primary: secondary, secondary,
    title: `${secondary.title} · Focus ${cycleOffset - 4} of 3`,
    description: `Focused family pilot · Stay with ${secondary.title.toLocaleLowerCase()} today. No unrelated review or grammar.`,
  };
}
