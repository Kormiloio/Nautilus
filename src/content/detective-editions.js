// Context puzzles; each later milestone has different sentences. Owner review sign-off: 2026-11-12.
const caseOf = (word, sentence, answerId, choices, explanation) => ({
  word, sentence, answerId, choices: choices.map(([id, label]) => ({ id, label })), explanation,
});
const editions = [
  [
    caseOf('grad', 'Ovaj grad ima veliki trg.', 'city', [['city', 'city'], ['hail', 'hail'], ['work', 'work']], 'A town square belongs to a city; here grad does not mean hail.'),
    caseOf('list', 'List je pao sa drveta.', 'leaf', [['leaf', 'leaf'], ['sheet', 'sheet of paper'], ['letter', 'letter']], 'Falling from a tree tells us this list is a leaf.'),
    caseOf('luk', 'Dodaj luk u supu.', 'onion', [['onion', 'onion'], ['bow', 'bow'], ['arch', 'arch']], 'Something added to soup is the onion meaning of luk.'),
  ],
  [
    caseOf('sat', 'Čekam već jedan sat.', 'hour', [['hour', 'hour'], ['clock', 'clock'], ['day', 'day']], 'The waiting time is one hour; sat here measures time.'),
    caseOf('ključ', 'Ključ je u vratima.', 'key', [['key', 'key'], ['solution', 'solution'], ['door', 'door']], 'A key can be in a door; this is the physical meaning of ključ.'),
    caseOf('jezik', 'Učim crnogorski jezik.', 'language', [['language', 'language'], ['tongue', 'tongue'], ['book', 'book']], 'Learning Montenegrin points to a language, not the body part.'),
  ],
  [
    caseOf('list', 'Pišem na listu papira.', 'sheet', [['leaf', 'leaf'], ['sheet', 'sheet of paper'], ['letter', 'letter']], 'Writing on paper tells us list is a sheet here.'),
    caseOf('miš', 'Miš je pored tastature.', 'computer', [['animal', 'animal mouse'], ['computer', 'computer mouse'], ['keyboard', 'keyboard']], 'The keyboard gives the clue: this is a computer mouse.'),
    caseOf('red', 'Čekamo u redu za karte.', 'queue', [['queue', 'queue / line'], ['order', 'order / tidiness'], ['color', 'the color red']], 'Waiting for tickets puts the people in a queue.'),
  ],
  [
    caseOf('kosa', 'Ova kosa je veoma strma.', 'slope', [['slope', 'slope'], ['scythe', 'scythe'], ['hair', 'hair']], 'Strma means steep, so kosa is a slope here.'),
    caseOf('pravo', 'Svako dijete ima pravo na školovanje.', 'right', [['law', 'law'], ['straight', 'straight ahead'], ['right', 'right / entitlement']], 'The sentence describes a child’s right to education, not a direction.'),
    caseOf('krilo', 'Ptica ima povrijeđeno krilo.', 'wing', [['wing', 'wing'], ['lap', 'lap'], ['nest', 'nest']], 'The bird has an injured wing; krilo here belongs to the bird.'),
  ],
  [
    caseOf('sat', 'Sat visi na zidu.', 'clock', [['hour', 'hour'], ['clock', 'clock'], ['day', 'day']], 'Something hanging on a wall is a clock, not a duration.'),
    caseOf('jezik', 'Opekao sam jezik vrućim čajem.', 'tongue', [['language', 'language'], ['tongue', 'tongue'], ['cup', 'cup']], 'Hot tea can burn a tongue. Jezik here is a body part.'),
    caseOf('zvijezda', 'Ta glumica je filmska zvijezda.', 'celebrity', [['sky', 'star in the sky'], ['celebrity', 'celebrity'], ['film', 'film']], 'The actress is a film star: zvijezda describes a celebrity.'),
  ],
  [
    caseOf('luk', 'Strijela je izletjela iz luka.', 'bow', [['onion', 'onion'], ['bow', 'bow'], ['arch', 'arch']], 'An arrow was fired from a bow. Luk here is not food.'),
    caseOf('miš', 'Mali miš jede sir.', 'animal', [['animal', 'animal mouse'], ['computer', 'computer mouse'], ['cheese', 'cheese']], 'Eating cheese tells us this is a living mouse.'),
    caseOf('krilo', 'Dijete sjedi mami u krilu.', 'lap', [['wing', 'wing'], ['lap', 'lap'], ['chair', 'chair']], 'A child sitting with mom is in her lap; krilo is not a wing here.'),
  ],
];

const clueWords = [
  ['Ovaj = this; ima = has; veliki = big; trg = square.', 'Pao je = fell; sa drveta = from a tree.', 'Dodaj = add; u supu = to the soup.'],
  ['Čekam = I am waiting; već = already; jedan = one.', 'Je = is; u vratima = in the door.', 'Učim = I am learning; crnogorski = Montenegrin.'],
  ['Pišem = I am writing; na = on; papira = of paper.', 'Je = is; pored = beside; tastature = the keyboard.', 'Čekamo = we are waiting; u = in; za karte = for tickets.'],
  ['Ova = this; je = is; veoma = very; strma = steep.', 'Svako dijete = every child; ima = has; na školovanje = to education.', 'Ptica = bird; ima = has; povrijeđeno = injured.'],
  ['Visi = hangs; na zidu = on the wall.', 'Opekao sam = I burned; vrućim čajem = with hot tea.', 'Ta glumica = that actress; je = is; filmska = film.'],
  ['Strijela = arrow; je izletjela = flew out; iz = from.', 'Mali = small; jede = eats; sir = cheese.', 'Dijete = child; sjedi = is sitting; mami = with mom; u = in.'],
];
export const DETECTIVE_EDITIONS = editions.map((cases, edition) => cases.map((item, index) => ({ ...item, clueWords: clueWords[edition][index] })));

export function detectiveEditionIndex(milestone) {
  if (!Number.isInteger(milestone) || milestone < 10 || (milestone - 10) % 30 !== 0) return null;
  return (milestone - 10) / 30;
}
