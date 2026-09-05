export function createDetectiveGame(quest, detectives) {
  const roster = [...new Set((detectives || []).map(name => String(name).trim()).filter(Boolean))];
  return {
    questId: quest.id,
    milestone: quest.milestone,
    caseIndex: 0,
    detectiveIndex: 0,
    detectives: [roster[0] || "Detective"],
    guesses: {},
    history: {},
    selected: null,
    phase: 'guess',
  };
}

export function selectDetectiveAnswer(game, answerId) {
  if (!game || game.phase !== 'guess') return game;
  return { ...game, selected: answerId };
}

export function lockDetectiveAnswer(game) {
  if (!game || game.phase !== 'guess' || !game.selected) return game;
  const detective = game.detectives[game.detectiveIndex];
  const guesses = { ...game.guesses, [detective]: game.selected };
  return { ...game, guesses, selected: null, phase: "reveal" };
}



export function advanceDetectiveCase(game, caseCount) {
  if (!game || game.phase !== 'reveal') return game;
  const history = { ...game.history, [game.caseIndex]: game.guesses };
  if (game.caseIndex + 1 >= caseCount) return { ...game, history, phase: 'complete' };
  return {
    ...game,
    caseIndex: game.caseIndex + 1,
    history,
    detectiveIndex: 0,
    guesses: {},
    selected: null,
    phase: 'guess',
  };
}

export function detectiveScore(game, quest) {
  return game.detectives.map(name => ({
    name,
    correct: quest.cases.reduce((score, item, index) => {
      const guess = game.history?.[index]?.[name] ?? (index === game.caseIndex ? game.guesses[name] : undefined);
      return score + Number(guess === item.answerId);
    }, 0),
  }));
}

export function sideQuestBadgeKey(packId, profileName, questId) {
  return `nautilus:${packId}:${profileName}:side-quest:${questId}`;
}

export function hasSideQuestBadge(packId, profileName, questId) {
  return localStorage.getItem(sideQuestBadgeKey(packId, profileName, questId)) === 'earned';
}

export function earnSideQuestBadge(packId, profileName, questId) {
  localStorage.setItem(sideQuestBadgeKey(packId, profileName, questId), 'earned');
}
