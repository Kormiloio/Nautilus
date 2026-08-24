// Baghdad-oriented Iraqi Arabic pilot. Every form is a draft until an
// authorized Iraqi Arabic reviewer approves the target text, transliteration,
// meaning, variety, and activity use.
const SOURCE = 'Nautilus Iraqi Arabic pilot draft; seed terminology cross-checked against DLI Iraqi materials and queued for community review.';

const definitions = [
  ['family', 'Family', 'Talk about the people close to you', [['الأهل','il-ahal','family'],['أم','umm','mother'],['أب','ab','father'],['أخ','akh','brother'],['أخت','ukht','sister']]],
  ['greetings', 'Greetings', 'Meet someone and say hello', [['مرحبا','marhaba','hello'],['شلونك؟','shlonak?','how are you?'],['زين','zayn','good / fine'],['شكراً','shukran','thank you'],['مع السلامة','ma‘ as-salama','goodbye']]],
  ['numbers', 'Numbers', 'Start counting', [['واحد','wahid','one'],['اثنين','ithnayn','two'],['ثلاثة','thalatha','three'],['أربعة','arba‘a','four'],['خمسة','khamsa','five']]],
  ['colors', 'Colors', 'Describe what you see', [['أحمر','ahmar','red'],['أزرق','azraq','blue'],['أخضر','akhdar','green'],['أصفر','asfar','yellow'],['أبيض','abyad','white']]],
  ['drinks', 'Drinks', 'Ask for something to drink', [['مي','may','water'],['چاي','chay','tea'],['قهوة','gahwa','coffee'],['حليب','halib','milk'],['عصير','asir','juice']]],
  ['food', 'Food', 'Everyday foods', [['خبز','khubuz','bread'],['تمن','timman','rice'],['لحم','laham','meat'],['سمچ','simach','fish'],['دجاج','dajaj','chicken']]],
  ['market', 'At the Market', 'Ask and buy', [['شكد؟','shgadd?','how much?'],['غالي','ghali','expensive'],['رخيص','rakhis','inexpensive'],['أريد هذا','arid hatha','I want this'],['عندكم؟','indakum?','do you have?']]],
  ['cafe', 'At a Café', 'Order politely', [['أريد چاي','arid chay','I would like tea'],['قهوة لو سمحت','gahwa law samaht','coffee, please'],['بدون سكر','bidun sukkar','without sugar'],['الحساب لو سمحت','il-hisab law samaht','the bill, please'],['شكراً هواية','shukran hwaya','thank you very much']]],
  ['talkfamily', 'Talking About Family', 'Describe your family', [['هاي عائلتي','hay ‘a’ilti','this is my family'],['عندي أخ','indi akh','I have a brother'],['عندي أخت','indi ukht','I have a sister'],['شلون الأهل؟','shlon il-ahal?','how is the family?'],['كلهم زينين','killhum zaynin','they are all well']]],
  ['aboutme', 'About Me', 'Say a little about yourself', [['اسمي...','ismi...','my name is...'],['أنا من أمريكا','ana min Amrika','I am from America'],['أحچي شوية عربي','ahchi shwayya arabi','I speak a little Arabic'],['أتعلم عربي عراقي','ata‘allam arabi iraqi','I am learning Iraqi Arabic'],['ما أفهم','ma afham','I do not understand']]],
  ['days', 'Days & Time', 'Talk about today and tomorrow', [['اليوم','il-yom','today'],['باچر','bachir','tomorrow'],['أمس','ams','yesterday'],['هسه','hassa','now'],['بعدين','ba‘dayn','later']]],
  ['outabout', 'Out & About', 'Useful phrases away from home', [['وين الحمام؟','wayn il-hammam?','where is the bathroom?'],['تحچي إنكليزي؟','tihchi inglizi?','do you speak English?'],['ساعدني','sa‘idni','help me'],['عيدها لو سمحت','idha law samaht','repeat it, please'],['شوية شوية','shwayya shwayya','more slowly']]],
  ['weather', 'Weather', 'Talk about the weather', [['حار','harr','hot'],['بارد','barid','cold'],['الدنيا حارة','id-dinya harra','the weather is hot'],['أكو مطر','aku matar','there is rain'],['الجو زين','il-jaww zayn','the weather is nice']]],
  ['feelings', 'Feelings', 'Say how you feel', [['فرحان','farhan','happy'],['تعبان','ta‘ban','tired'],['زعلان','za‘lan','upset / sad'],['خايف','khayif','afraid'],['أنا زين','ana zayn','I am fine']]],
  ['home', 'Home', 'Things around the home', [['بيت','bayt','house / home'],['غرفة','ghurfa','room'],['مطبخ','matbakh','kitchen'],['باب','bab','door'],['شباچ','shubbach','window']]],
  ['clothes', 'Clothes', 'What people wear', [['قميص','qamis','shirt'],['بنطرون','bantarun','trousers'],['فستان','fustan','dress'],['جواتي','jawati','shoes'],['جاكيت','jaket','jacket']]],
  ['body', 'Body & Health', 'Body and basic health', [['راس','ras','head'],['إيد','id','hand'],['رجل','rijil','leg'],['راسي يوجعني','rasi yuwja‘ni','my head hurts'],['أحتاج دكتور','ahtaj doktor','I need a doctor']]],
  ['shopping', 'Shopping', 'Buy what you need', [['أريد أشتري','arid ashtari','I want to buy'],['شكد السعر؟','shgadd is-si‘ir?','what is the price?'],['كلش غالي','kilish ghali','very expensive'],['عندك غير لون؟','indak ghayr lon?','do you have another color?'],['أدفع كارت','adfa‘ kart','I will pay by card']]],
  ['directions', 'Directions', 'Find your way', [['يمين','yamin','right'],['يسار','yasar','left'],['سيدة','sida','straight ahead'],['قريب','qarib','near'],['بعيد','ba‘id','far']]],
  ['river', 'River & Water', 'Words from a river journey', [['نهر','nahr','river'],['مي','may','water'],['قارب','qarib','boat'],['جسر','jisr','bridge'],['ضفّة','diffa','riverbank']]],
  ['time', 'Telling Time', 'Ask and tell the time', [['شكد الساعة؟','shgadd is-sa‘a?','what time is it?'],['الساعة وحدة','is-sa‘a wahda','it is one o’clock'],['الصبح','is-subuh','morning'],['الظهر','idh-dhuhr','noon'],['بالليل','bil-layl','at night']]],
  ['hobbies', 'Hobbies', 'Talk about free time', [['أحب أقرا','ahibb aqra','I like to read'],['أحب الموسيقى','ahibb il-musiqa','I like music'],['ألعب كرة','al‘ab kura','I play soccer'],['أسبح','asbah','I swim'],['أرسم','arsum','I draw']]],
  ['travel', 'Travel Essentials', 'Move around confidently', [['مطار','matar','airport'],['محطة','mahatta','station'],['تذكرة','tathkara','ticket'],['جواز','jawaz','passport'],['وين الفندق؟','wayn il-funduq?','where is the hotel?']]],
  ['verbs1', 'Core Verbs', 'Build simple sentences', [['أريد','arid','I want'],['عندي','indi','I have'],['أروح','aruh','I go'],['آكل','akul','I eat'],['أشرب','ashrab','I drink']]],
  ['adjectives', 'Describing Things', 'Useful descriptions', [['چبير','chibir','big'],['صغير','sghir','small'],['زين','zayn','good'],['حلو','hilu','nice / beautiful'],['جديد','jadid','new']]],
  ['questionwords', 'Question Words', 'Ask useful questions', [['منو؟','minu?','who?'],['شنو؟','shinu?','what?'],['وين؟','wayn?','where?'],['إيمتى؟','emta?','when?'],['ليش؟','lesh?','why?']]],
  ['plans', 'Making Plans', 'Arrange time together', [['شنسوي؟','shnisawwi?','what shall we do?'],['تجي ويانا؟','tiji wayana?','will you come with us?'],['نشوفك باچر','nshofak bachir','see you tomorrow'],['أي ساعة؟','ayy sa‘a?','what time?'],['فكرة زينة','fikra zayna','good idea']]],
  ['smalltalk', 'Small Talk', 'Get to know people', [['إنت من وين؟','inta min wayn?','where are you from?'],['شكو ماكو؟','shaku maku?','what’s new?'],['شنو تحب؟','shinu tihibb?','what do you like?'],['أهلاً وسهلاً','ahlan wa sahlan','welcome'],['وأنا همين','w-ana hamayn','me too']]],
  ['restaurant', 'At a Restaurant', 'Order a meal', [['منيو لو سمحت','menu law samaht','the menu, please'],['شنو تنصح؟','shinu tinsah?','what do you recommend?'],['أريد السمچ','arid is-simach','I would like the fish'],['بدون لحم','bidun laham','without meat'],['الأكل كلش طيب','il-akil kilish tayyib','the food is very good']]],
  ['gathering', 'Family Gathering', 'Talk around the table', [['نورتونا','nawwartuna','welcome; you brightened our home'],['تفضلوا','tfaddalu','please come in / help yourselves'],['شلونكم؟','shlonkum?','how are you all?'],['صحة وعافية','sahha w-‘afiya','enjoy your meal / good health'],['تسلم إيدك','tislam idak','thank you for cooking']]],
  ['past', 'Talking About the Past', 'Share what happened', [['چنت بالبيت','chinit bil-bayt','I was at home'],['رحت للسوق','riht lis-suq','I went to the market'],['أكلت تمن','akalt timman','I ate rice'],['شفته أمس','shifta ams','I saw him yesterday'],['كان يوم حلو','kan yom hilu','it was a nice day']]],
  ['future', 'Talking About the Future', 'Say what will happen', [['أجي باچر','aji bachir','I will come tomorrow'],['نروح للسوق','nruh lis-suq','we will go to the market'],['ناكل سوه','nakul sawa','we will eat together'],['أدگلك','adigg-lak','I will call you'],['نشوفكم قريب','nshofkum qarib','we will see you soon']]],
  ['alphabet', 'Arabic Script Foundations', 'Recognize useful Iraqi Arabic letters', [['چ','ch','the ch sound used in Iraqi Arabic'],['گ','g','the g sound used in Iraqi Arabic'],['ش','sh','the sh sound'],['ع','‘','the Arabic ayn sound'],['خ','kh','the kh sound']]],
];

const curriculum = {
  months: [
    ['family','greetings','numbers'], ['colors','drinks','food'], ['market','cafe','talkfamily'],
    ['aboutme','days','outabout'], ['weather','feelings','home'], ['clothes','body','shopping'],
    ['directions','river','time'], ['hobbies','travel','verbs1'], ['adjectives','questionwords','plans'],
    ['smalltalk','restaurant','gathering'],
  ],
  extras: ['past','future','alphabet'],
};

const monthById = new Map(curriculum.months.flatMap((ids, monthIndex) => ids.map(id => [id, monthIndex + 1])));
const colors = ['#38bdf8', '#22c55e', '#f59e0b'];

const topics = definitions.map(([id, title, subtitle, forms]) => {
  const month = monthById.get(id) || 10;
  return {
    id,
    month,
    bucket: month - 1,
    title,
    subtitle,
    icon: id.slice(0, 2).toUpperCase(),
    color: colors[(month - 1) % colors.length],
    note: 'Baghdad-oriented Iraqi Arabic pilot draft. Please report family wording, spelling, meaning, and pronunciation differences.',
    items: forms.map(([targetText, transliteration, supportText], index) => ({
      id: `${id}-ar-iq-${String(index + 1).padStart(3, '0')}`,
      targetText,
      transliteration,
      supportText,
      languageTag: 'ar-IQ',
      script: 'Arab',
      direction: 'rtl',
      variety: 'Baghdad-oriented Iraqi Arabic pilot',
      register: 'conversational',
      source: SOURCE,
      contributor: 'Nautilus pilot team',
      reviewStatus: 'draft',
    })),
  };
});

export default {
  languagePack: {
    id: 'iraqi-arabic-en',
    targetLanguage: { code: 'ar', name: 'Iraqi Arabic', scripts: ['Arab'] },
    supportLanguage: { code: 'en', name: 'English' },
    version: '0.1.0',
    status: 'pilot',
    direction: 'rtl',
    defaultScript: 'Arab',
    locale: 'ar-IQ',
    varietyPolicy: 'Baghdad-oriented conversational Iraqi Arabic; draft forms require community review and regional differences must be labeled.',
    journeyThemeId: 'rivers-of-mesopotamia@0.1.0',
    audio: {
      locale: 'ar-IQ',
      delivery: 'speech-synthesis-draft',
      reviewStatus: 'draft',
      note: 'Compatible device speech is an unreviewed preview and may not reflect the intended Iraqi variety.',
    },
  },
  curriculum,
  topics: topics.filter(topic => !curriculum.extras.includes(topic.id)),
  bonusTopics: topics.filter(topic => curriculum.extras.includes(topic.id)),
};
