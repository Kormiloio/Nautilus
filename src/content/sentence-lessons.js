// Authored Montenegrin pilot material. These drafts still need fluent review.
const packs = [
  {
    id: 'drinks', firstSourceDay: 27, lastSourceDay: 30,
    title: 'Make and order a drink',
    pattern: 'Hoću means “I want”. After it, voda becomes vodu and kafa becomes kafu: Hoću vodu.',
    sentences: [
      ['Hoću vodu, molim.', 'I want water, please.'],
      ['Dodaj limun u čaj.', 'Add lemon to the tea.'],
      ['Sipaj sok u čašu.', 'Pour juice into the glass.'],
      ['Čaj je topao.', 'The tea is warm.'],
      ['Mogu li dobiti vodu?', 'Can I have water?'],
      ['Neću šećer u čaju.', 'I do not want sugar in my tea.'],
    ],
    dialogue: [['Host', 'Šta želiš da piješ?', 'What would you like to drink?'], ['Guest', 'Hoću čaj, molim.', 'I want tea, please.'], ['Host', 'Želiš li limun?', 'Would you like lemon?'], ['Guest', 'Da, hvala.', 'Yes, thank you.']],
  },
  {
    id: 'meals', firstSourceDay: 31, lastSourceDay: 35,
    title: 'Share a meal', pattern: 'Imam means “I have”. Nemam means “I do not have”. Use the whole sentence to say what is on your plate.',
    sentences: [['Imam hljeb i sir.', 'I have bread and cheese.'], ['Hoću još supe, molim.', 'I want more soup, please.'], ['Dodaj so u supu.', 'Add salt to the soup.'], ['Jaja su na stolu.', 'The eggs are on the table.'], ['Nemam kašiku.', 'I do not have a spoon.'], ['Ručak je spreman.', 'Lunch is ready.']],
    dialogue: [['Host', 'Želiš li još supe?', 'Would you like more soup?'], ['Guest', 'Da, molim.', 'Yes, please.'], ['Host', 'Evo hljeba.', 'Here is some bread.'], ['Guest', 'Hvala, ručak je ukusan.', 'Thank you, lunch is delicious.']],
  },
  {
    id: 'market', firstSourceDay: 36, lastSourceDay: 40,
    title: 'Buy ingredients', pattern: 'Koliko košta…? asks “How much does … cost?” Treba mi… means “I need …”.',
    sentences: [['Koliko košta sir?', 'How much does the cheese cost?'], ['Treba mi jedna kesa.', 'I need one bag.'], ['Hoću dvije jabuke.', 'I want two apples.'], ['Imate li paradajz?', 'Do you have tomatoes?'], ['Stavi jabuke u kesu.', 'Put the apples in the bag.'], ['Ovaj sir je dobar.', 'This cheese is good.']],
    dialogue: [['Customer', 'Dobar dan. Imate li jabuke?', 'Hello. Do you have apples?'], ['Seller', 'Da, izvolite.', 'Yes, here you are.'], ['Customer', 'Hoću dvije jabuke, molim.', 'I want two apples, please.'], ['Seller', 'Evo. Hvala!', 'Here you go. Thank you!']],
  },
  {
    id: 'garden', firstSourceDay: 41, lastSourceDay: 45,
    title: 'Work in the garden', pattern: 'U bašti means “in the garden”. Use a whole sentence to say where something grows or what you do there.',
    sentences: [['Radim u bašti.', 'I work in the garden.'], ['Zalij biljke, molim.', 'Water the plants, please.'], ['Paradajz raste u bašti.', 'Tomatoes grow in the garden.'], ['Treba mi voda.', 'I need water.'], ['Imamo svježe povrće.', 'We have fresh vegetables.'], ['Stavi cvijeće na sto.', 'Put the flowers on the table.']],
    dialogue: [['Gardener', 'Možeš li mi pomoći?', 'Can you help me?'], ['Helper', 'Da. Šta treba da radim?', 'Yes. What should I do?'], ['Gardener', 'Zalij biljke, molim.', 'Water the plants, please.'], ['Helper', 'Dobro. Gdje je voda?', 'Okay. Where is the water?']],
  },
  {
    id: 'cafe', firstSourceDay: 46, lastSourceDay: 50,
    title: 'Order at a café', pattern: 'Molim makes a request polite. Put it after your order: Hoću kafu, molim.',
    sentences: [['Hoću kafu, molim.', 'I want a coffee, please.'], ['Hoću i vodu.', 'I also want water.'], ['Račun, molim.', 'The bill, please.'], ['Mogu li platiti karticom?', 'Can I pay by card?'], ['Imate li kolače?', 'Do you have cakes?'], ['Ovaj kolač je ukusan.', 'This cake is delicious.']],
    dialogue: [['Waiter', 'Dobar dan! Izvolite?', 'Hello! What can I get you?'], ['Customer', 'Hoću kafu, molim.', 'I want a coffee, please.'], ['Waiter', 'Još nešto?', 'Anything else?'], ['Customer', 'Hoću i vodu. Hvala.', 'I also want water. Thank you.']],
  },
  {
    id: 'family', firstSourceDay: 51, lastSourceDay: 55,
    title: 'Talk about your family', pattern: 'Ovo je… means “This is …”. Moj and moja mean “my”: moj brat, moja sestra.',
    sentences: [['Ovo je moja sestra.', 'This is my sister.'], ['Moj brat je kod kuće.', 'My brother is at home.'], ['Imam dva brata.', 'I have two brothers.'], ['Idemo kod bake.', 'We are going to grandma’s.'], ['Moja porodica je velika.', 'My family is big.'], ['Pomažem mami.', 'I am helping mom.']],
    dialogue: [['Visitor', 'Ko je ovo?', 'Who is this?'], ['Host', 'Ovo je moja sestra.', 'This is my sister.'], ['Visitor', 'Kako se zove?', 'What is her name?'], ['Host', 'Zove se Ana.', 'Her name is Ana.']],
  },
  {
    id: 'conversation', firstSourceDay: 56, lastSourceDay: 60,
    title: 'Keep a conversation going', pattern: 'Ne razumijem means “I do not understand”. You can ask someone to repeat or speak more slowly.',
    sentences: [['Ne razumijem ovu riječ.', 'I do not understand this word.'], ['Možeš li ponoviti?', 'Can you repeat that?'], ['Govori polako, molim.', 'Speak slowly, please.'], ['Volim da pričam sa tobom.', 'I like talking with you.'], ['Šta ti misliš?', 'What do you think?'], ['Više volim čaj.', 'I prefer tea.']],
    dialogue: [['Speaker', 'Šta voliš da piješ?', 'What do you like to drink?'], ['Listener', 'Možeš li ponoviti?', 'Can you repeat that?'], ['Speaker', 'Voliš li čaj?', 'Do you like tea?'], ['Listener', 'Da, više volim čaj.', 'Yes, I prefer tea.']],
  },
  {
    id: 'school', firstSourceDay: 61, lastSourceDay: 65,
    title: 'Talk about school', pattern: 'Idem u školu means “I go to school”. Imam… also lets you say which lesson or supplies you have.',
    sentences: [['Idem u školu.', 'I go to school.'], ['Imam knjigu i svesku.', 'I have a book and a notebook.'], ['Gdje je moja olovka?', 'Where is my pencil?'], ['Danas imam matematiku.', 'I have mathematics today.'], ['Čitam novu knjigu.', 'I am reading a new book.'], ['Učimo zajedno.', 'We are learning together.']],
    dialogue: [['Student', 'Imaš li olovku?', 'Do you have a pencil?'], ['Partner', 'Da, izvoli.', 'Yes, here you are.'], ['Student', 'Hvala. Šta danas učimo?', 'Thank you. What are we learning today?'], ['Partner', 'Danas učimo matematiku.', 'Today we are learning mathematics.']],
  },
  {
    id: 'time', firstSourceDay: 66, lastSourceDay: 70,
    title: 'Make a plan', pattern: 'U koliko sati…? asks “At what time …?” U tri means “at three”.',
    sentences: [['Koliko je sati?', 'What time is it?'], ['Vidimo se u tri.', 'See you at three.'], ['Danas je ponedjeljak.', 'Today is Monday.'], ['Sjutra idem u školu.', 'Tomorrow I am going to school.'], ['Imam vremena danas.', 'I have time today.'], ['Kada dolaziš kući?', 'When are you coming home?']],
    dialogue: [['Friend', 'Kada se vidimo?', 'When shall we meet?'], ['Partner', 'Sjutra u tri.', 'Tomorrow at three.'], ['Friend', 'Gdje se vidimo?', 'Where shall we meet?'], ['Partner', 'Kod škole. Vidimo se!', 'By the school. See you!']],
  },
];

export const SENTENCE_LESSONS = packs.map(pack => ({
  ...pack, reviewStatus: 'draft', languageTag: 'cnr', script: 'Latn', direction: 'ltr',
  sentences: pack.sentences.map(([targetText, supportText], index) => ({
    id: `sentence-${pack.id}-${index + 1}`, targetText, supportText,
    languageTag: 'cnr', script: 'Latn', direction: 'ltr', reviewStatus: 'draft',
  })),
  dialogue: pack.dialogue.map(([role, targetText, supportText]) => ({ role, targetText, supportText })),
}));
