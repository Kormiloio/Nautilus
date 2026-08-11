export function uniqueLearningDates(activityDates = []) {
  return [...new Set(activityDates.filter(Boolean))].sort();
}

export function getLearningDayCount(activityDates = []) {
  return Math.min(200, uniqueLearningDates(activityDates).length);
}

export function getLearningDayPosition(activityDates = []) {
  const completedDays = getLearningDayCount(activityDates);
  return {
    completedDays,
    nextDay: completedDays >= 200 ? 200 : completedDays + 1,
    percent: Math.round((completedDays / 200) * 100),
  };
}

export function buildDayPassport(activityDates = []) {
  const completedDays = getLearningDayCount(activityDates);
  return Array.from({ length: 10 }, (_, index) => {
    const completedInMonth = Math.max(0, Math.min(20, completedDays - index * 20));
    return {
      month: index + 1,
      completedDays: completedInMonth,
      earned: completedInMonth === 20,
    };
  });
}
