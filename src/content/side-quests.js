const MONTENEGRIN_QUESTS = [
  {
    id: 'sailor-talk',
    title: 'Sailor Talk',
    eyebrow: 'Mystery cargo · strong language',
    subtitle: 'What people really mean when polite vocabulary goes overboard.',
    warning: 'These expressions range from rude to extremely vulgar. Learn them for recognition and cultural context—not to target or harass someone.',
    items: [
      { targetText:'Koji vrag?', supportText:'What the hell? / What the devil?', strength:'Mild', context:'Surprise or frustration. Less severe than the other expressions here.' },
      { targetText:'Šupak', supportText:'Asshole / jerk', strength:'Strong', context:'A vulgar insult for a person.' },
      { targetText:'Sereš', supportText:'You’re talking shit', strength:'Strong', context:'Accuses someone of talking nonsense or lying.' },
      { targetText:'Odjebi', supportText:'Fuck off', strength:'Very strong', context:'A hostile command telling someone to go away.' },
      { targetText:'Jebi se', supportText:'Fuck yourself', strength:'Very strong', context:'The source image calls this “fuck you,” but this is the closer meaning.' },
      { targetText:'Boli me kurac', supportText:'I don’t give a fuck', strength:'Extreme', context:'A very vulgar idiom meaning complete indifference; the literal wording references male anatomy.' },
    ],
    note: 'Montenegrin usage overlaps with neighboring regional varieties. This draft needs fluent Montenegrin review before it is treated as authoritative.',
  },
  {
    id:'false-friend-detective', title:'False-Friend Detective', eyebrow:'Mystery cargo · word puzzle',
    subtitle:'One familiar-looking word can hide several meanings.', warning:'Choose privately, lock in, and reveal only after the whole crew has answered.',
    game:'detective', cases:[
      {word:'grad',sentence:'Padao je grad cijelo popodne.',answerId:'hail',choices:[{id:'city',label:'city'},{id:'hail',label:'hail'},{id:'work',label:'work'}],explanation:'Here “grad” means hail: frozen rain fell all afternoon. In another sentence, the same word can mean city.'},
      {word:'kosa',sentence:'Ona ima dugu kosu.',answerId:'hair',choices:[{id:'slope',label:'slope'},{id:'scythe',label:'scythe'},{id:'hair',label:'hair'}],explanation:'“Kosu” is the sentence form of “kosa” meaning hair. Kosa can also mean a slope or a scythe in other contexts.'},
      {word:'pravo',sentence:'Idi pravo do trga.',answerId:'straight',choices:[{id:'law',label:'law'},{id:'straight',label:'straight ahead'},{id:'right',label:'right / entitlement'}],explanation:'After the verb “go,” pravo means straight ahead. The same form can refer to law or a right elsewhere.'},
    ],
    items:[
      {targetText:'grad',supportText:'city—or hail, depending on context',strength:'Clue 1',context:'Listen to the whole sentence before deciding.'},
      {targetText:'kosa',supportText:'hair, a slope, or a scythe',strength:'Clue 2',context:'The surrounding noun or verb reveals the intended meaning.'},
      {targetText:'pravo',supportText:'straight ahead, right, or law',strength:'Clue 3',context:'A direction and an abstract idea share the same form.'},
    ], note:'A short language riddle unlocked after ten lessons.'
  },
  {
    id:'secret-cafe', title:'The Secret Café Order', eyebrow:'Mystery cargo · role-play',
    subtitle:'Order something without saying its English name.', warning:'Take turns being the server and the traveler.',
    items:[
      {targetText:'Molim jednu kafu bez šećera.',supportText:'A coffee without sugar, please.',strength:'Order',context:'Say it once normally and once as fast as you comfortably can.'},
      {targetText:'Račun, molim.',supportText:'The bill, please.',strength:'Finish',context:'The server answers, “Izvolite.”'},
      {targetText:'Hvala, bilo je ukusno!',supportText:'Thank you, it was delicious!',strength:'Bonus',context:'Change one detail and repeat the exchange.'},
    ], note:'A family role-play unlocked after fifteen lessons.'
  },
  {
    id:'gesture-charades', title:'No-English Charades', eyebrow:'Mystery cargo · family game',
    subtitle:'Act it out; your crew may answer only in Montenegrin.', warning:'Choose a card, hide the translation, and use gestures instead of English.',
    items:[
      {targetText:'plivati',supportText:'to swim',strength:'Act it',context:'No sound effects.'},
      {targetText:'umoran / umorna',supportText:'tired',strength:'Act it',context:'Use a full sentence after the guess.'},
      {targetText:'lijevo',supportText:'left',strength:'Act it',context:'Turn it into a directions challenge.'},
      {targetText:'gladan / gladna',supportText:'hungry',strength:'Act it',context:'The winner asks a follow-up question.'},
    ], note:'A movement break unlocked after twenty lessons.'
  },
  {
    id:'speed-round', title:'Captain’s 60-Second Challenge', eyebrow:'Mystery cargo · speed round',
    subtitle:'How much can your crew say before the imaginary harbor bell rings?', warning:'Accuracy first. Speed is only the playful part.',
    items:[
      {targetText:'5 pozdrava',supportText:'Say five greetings',strength:'20 sec',context:'No repeats.'},
      {targetText:'5 članova porodice',supportText:'Name five family members',strength:'20 sec',context:'Use “moj” or “moja” with each.'},
      {targetText:'jedno pitanje',supportText:'Ask one real question',strength:'20 sec',context:'Someone else must answer in Montenegrin.'},
    ], note:'A rapid family challenge unlocked after twenty-five lessons.'
  },
];

export function getSideQuestForProgress(packId, completedLessonCount) {
  if (packId !== 'montenegrin-en') return null;
  const milestone = Math.floor(Math.max(0, completedLessonCount) / 5) * 5;
  if (milestone < 5) return { locked:true, nextAt:5, remaining:5 - completedLessonCount };
  const questIndex = (milestone / 5 - 1) % MONTENEGRIN_QUESTS.length;
  return { ...MONTENEGRIN_QUESTS[questIndex], locked:false, milestone };
}
