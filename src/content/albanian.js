// Standard Albanian starter pack. All records remain in `review` until the
// family's fluent Albanian reviewer approves wording and pronunciation.
const definitions = [
  ['family', 'Family', 'People in your family', [['familja','family'],['nëna','mother'],['babai','father'],['motra','sister'],['vëllai','brother']]],
  ['greetings', 'Greetings', 'Say hello and introduce yourself', [['Përshëndetje!','Hello!'],['Mirëmëngjes!','Good morning!'],['Mirëmbrëma!','Good evening!'],['Si je?','How are you?'],['Mirupafshim!','Goodbye!']]],
  ['numbers', 'Numbers', 'Start counting', [['një','one'],['dy','two'],['tre','three'],['katër','four'],['pesë','five']]],
  ['colors', 'Colors', 'Describe colors', [['i kuq','red'],['blu','blue'],['i gjelbër','green'],['i verdhë','yellow'],['i zi','black']]],
  ['drinks', 'Drinks', 'Everyday drinks', [['ujë','water'],['kafe','coffee'],['çaj','tea'],['qumësht','milk'],['lëng','juice']]],
  ['food', 'Food', 'Everyday foods', [['bukë','bread'],['djathë','cheese'],['mish','meat'],['peshk','fish'],['fruta','fruit']]],
  ['veg', 'Vegetables & Market', 'Shop at the market', [['domate','tomato'],['kastravec','cucumber'],['patate','potato'],['qepë','onion'],['spec','pepper']]],
  ['cafe', 'At a Café', 'Order politely', [['Një kafe, ju lutem.','A coffee, please.'],['A keni çaj?','Do you have tea?'],['Pa sheqer.','Without sugar.'],['Sa kushton?','How much is it?'],['Faturën, ju lutem.','The bill, please.']]],
  ['talkfamily', 'Talking About Family', 'Describe your family', [['Kjo është familja ime.','This is my family.'],['Kam një motër.','I have a sister.'],['Kam një vëlla.','I have a brother.'],['Nëna ime quhet Ana.','My mother is named Ana.'],['Ne jetojmë bashkë.','We live together.']]],
  ['aboutme', 'About Me', 'Simple sentences about yourself', [['Unë quhem Lena.','My name is Lena.'],['Jam trembëdhjetë vjeç.','I am thirteen years old.'],['Jetoj në Amerikë.','I live in America.'],['Më pëlqen muzika.','I like music.'],['Po mësoj shqip.','I am learning Albanian.']]],
  ['days', 'Days & Time', 'Days of the week', [['e hënë','Monday'],['e martë','Tuesday'],['e mërkurë','Wednesday'],['e enjte','Thursday'],['e premte','Friday']]],
  ['outabout', 'Out & About', 'Useful phrases away from home', [['Ku është banja?','Where is the bathroom?'],['Nuk e kuptoj.','I do not understand.'],['Flisni anglisht?','Do you speak English?'],['Më ndihmoni, ju lutem.','Please help me.'],['Faleminderit shumë.','Thank you very much.']]],
  ['weather', 'Weather', 'Talk about the weather', [['Është ngrohtë.','It is warm.'],['Është ftohtë.','It is cold.'],['Po bie shi.','It is raining.'],['Ka diell.','It is sunny.'],['Fryn erë.','It is windy.']]],
  ['emotions', 'Emotions & Feelings', 'Say how you feel', [['Jam i lumtur.','I am happy.'],['Jam e lodhur.','I am tired.'],['Jam i trishtuar.','I am sad.'],['Kam frikë.','I am afraid.'],['Jam mirë.','I am well.']]],
  ['house', 'House & Home', 'Things around the home', [['shtëpi','house'],['dhomë','room'],['kuzhinë','kitchen'],['derë','door'],['dritare','window']]],
  ['clothes', 'Clothes', 'What people wear', [['këmishë','shirt'],['pantallona','trousers'],['fustan','dress'],['këpucë','shoes'],['xhaketë','jacket']]],
  ['body', 'Body & Health', 'Body and basic health', [['kokë','head'],['dorë','hand'],['këmbë','leg'],['Më dhemb koka.','My head hurts.'],['Kam nevojë për një mjek.','I need a doctor.']]],
  ['shopping', 'Shopping', 'Buy what you need', [['Dua këtë.','I want this.'],['Sa kushton kjo?','How much does this cost?'],['Është shumë shtrenjtë.','It is too expensive.'],['A keni një madhësi tjetër?','Do you have another size?'],['Do të paguaj me kartë.','I will pay by card.']]],
  ['directions', 'Directions & Places', 'Find your way', [['majtas','left'],['djathtas','right'],['drejt','straight ahead'],['afër','near'],['larg','far']]],
  ['beach', 'Beach & Summer', 'Enjoy a summer day', [['det','sea'],['plazh','beach'],['diell','sun'],['not','swimming'],['krem kundër diellit','sunscreen']]],
  ['time', 'Telling Time', 'Ask and tell the time', [['Sa është ora?','What time is it?'],['Është ora një.','It is one o’clock.'],['Është mesditë.','It is noon.'],['në mëngjes','in the morning'],['në mbrëmje','in the evening']]],
  ['hobbies', 'Hobbies', 'Talk about free time', [['Më pëlqen të lexoj.','I like to read.'],['Më pëlqen muzika.','I like music.'],['Luaj futboll.','I play soccer.'],['Noton.','He or she swims.'],['Vizatoj.','I draw.']]],
  ['travel', 'Travel Essentials', 'Move around confidently', [['aeroport','airport'],['stacion','station'],['biletë','ticket'],['pasaportë','passport'],['Ku është hoteli?','Where is the hotel?']]],
  ['capstone', 'Putting It Together', 'Use language in a full day', [['Sapo mbërritëm.','We just arrived.'],['Gëzohem që ju takoj.','Nice to meet you.'],['Ku do të shkojmë?','Where will we go?'],['Jam gati.','I am ready.'],['Ishte një ditë e bukur.','It was a beautiful day.']]],
  ['verbs1', 'Verbs: To Be & To Have', 'Core sentence building', [['jam','I am'],['je','you are'],['është','he, she, or it is'],['kam','I have'],['ke','you have']]],
  ['adjectives', 'Describing Things', 'Useful descriptions', [['i madh','big'],['i vogël','small'],['i mirë','good'],['i bukur','beautiful'],['i ri','new']]],
  ['questionwords', 'Question Words', 'Ask useful questions', [['kush','who'],['çfarë','what'],['ku','where'],['kur','when'],['pse','why']]],
  ['plans', 'Making Plans', 'Arrange time together', [['Çfarë do të bëjmë?','What will we do?'],['A do të vish?','Will you come?'],['Shihemi nesër.','See you tomorrow.'],['Në çfarë ore?','At what time?'],['Ide e mirë!','Good idea!']]],
  ['smalltalk', 'Small Talk', 'Get to know people', [['Nga je?','Where are you from?'],['Si po kalon?','How is it going?'],['Çfarë të pëlqen?','What do you like?'],['Sa kohë do të rrish?','How long will you stay?'],['Edhe mua.','Me too.']]],
  ['pasttense', 'Talking About the Past', 'Share what happened', [['Isha në shtëpi.','I was at home.'],['Kisha kohë.','I had time.'],['Shkova në qytet.','I went to town.'],['Hëngra mëngjes.','I ate breakfast.'],['Dje ishte bukur.','Yesterday was nice.']]],
  ['futuretense', 'Talking About the Future', 'Say what will happen', [['Do të vij nesër.','I will come tomorrow.'],['Do të shkojmë në plazh.','We will go to the beach.'],['Do të hamë bashkë.','We will eat together.'],['Do të të telefonoj.','I will call you.'],['Shihemi javën tjetër.','See you next week.']]],
  ['restaurant', 'At a Restaurant', 'Order a full meal', [['Një tavolinë për katër veta.','A table for four.'],['Çfarë rekomandoni?','What do you recommend?'],['Do të marr peshkun.','I will have the fish.'],['Pa mish, ju lutem.','Without meat, please.'],['Ishte shumë e shijshme.','It was very delicious.']]],
  ['gathering', 'Family Gathering', 'Talk around the table', [['Mirë se erdhët!','Welcome!'],['Uluni, ju lutem.','Please sit down.'],['Si është familja?','How is the family?'],['Gëzuar!','Cheers!'],['Faleminderit për darkën.','Thank you for dinner.']]],
  ['alphabet', 'Albanian Alphabet', 'Distinctive Albanian letters', [['ë','ë — a central vowel'],['ç','ç — like ch in chair'],['dh','dh — like th in this'],['gj','gj — a soft palatal sound'],['ll','ll — a strong l sound']]],
];

const curriculum = {
  months: [
    ['family', 'greetings', 'numbers'],
    ['colors', 'drinks', 'food'],
    ['veg', 'cafe', 'talkfamily'],
    ['aboutme', 'days', 'outabout'],
    ['weather', 'emotions', 'house'],
    ['clothes', 'body', 'shopping'],
    ['directions', 'beach', 'time'],
    ['hobbies', 'travel', 'verbs1'],
    ['adjectives', 'questionwords', 'plans'],
    ['smalltalk', 'restaurant', 'gathering'],
  ],
  extras: ['pasttense', 'futuretense', 'capstone'],
};

const monthById = new Map(
  curriculum.months.flatMap((ids, monthIndex) => ids.map(id => [id, monthIndex + 1]))
);
const colors = ['#7dd3fc', '#f472b6', '#a3e635'];

const allTopics = definitions.map(([id, title, subtitle, items]) => {
  const month = monthById.get(id) || 10;
  return {
    id,
    month,
    bucket: month - 1,
    title,
    subtitle,
    icon: id.slice(0, 2).toUpperCase(),
    color: colors[(month - 1) % colors.length],
    note: 'Standard Albanian draft for fluent family review.',
    items: items.map(([targetText, supportText], index) => ({
      id: `${id}-sq-${String(index + 1).padStart(3, '0')}`,
      targetText,
      supportText,
      reviewStatus: 'draft',
    })),
  };
});

export default {
  languagePack: {
    id: 'albanian-en',
    targetLanguage: { code: 'sq', name: 'Albanian', scripts: ['Latn'] },
    supportLanguage: { code: 'en', name: 'English' },
    version: '0.1.0',
    status: 'review',
  },
  curriculum,
  topics: allTopics.filter(topic => topic.id !== 'alphabet'),
  bonusTopics: allTopics.filter(topic => topic.id === 'alphabet'),
};
