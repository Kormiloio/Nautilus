import { buildRomancePack } from './romance-pack.js';

const definitions = [
  ['family','Family','People in your family',[['la famiglia','family'],['la madre','mother'],['il padre','father'],['la sorella','sister'],['il fratello','brother']]],
  ['greetings','Greetings','Meet someone politely',[['Ciao','Hello'],['Buongiorno','Good morning'],['Buonasera','Good evening'],['Come stai?','How are you?'],['Arrivederci','Goodbye']]],
  ['numbers','Numbers','Start counting',[['uno','one'],['due','two'],['tre','three'],['quattro','four'],['cinque','five']]],
  ['colors','Colors','Describe what you see',[['rosso','red'],['blu','blue'],['verde','green'],['giallo','yellow'],['bianco','white']]],
  ['drinks','Drinks','Ask for a drink',[['l’acqua','water'],['il caffè','coffee'],['il tè','tea'],['il latte','milk'],['il succo','juice']]],
  ['food','Food','Everyday foods',[['il pane','bread'],['il formaggio','cheese'],['il riso','rice'],['il pesce','fish'],['la frutta','fruit']]],
  ['market','At the Market','Shop for food',[['Quanto costa?','How much does it cost?'],['Vorrei questo','I would like this'],['Ha dei pomodori?','Do you have tomatoes?'],['È troppo caro','It is too expensive'],['Un sacchetto, per favore','A bag, please']]],
  ['cafe','At a Café','Order politely',[['Un caffè, per favore','A coffee, please'],['Avete del tè?','Do you have tea?'],['Senza zucchero','Without sugar'],['Il conto, per favore','The bill, please'],['Grazie mille','Thank you very much']]],
  ['talkfamily','Talking About Family','Describe your family',[['Questa è la mia famiglia','This is my family'],['Ho una sorella','I have a sister'],['Ho un fratello','I have a brother'],['I miei genitori vivono qui','My parents live here'],['Siamo in cinque','There are five of us']]],
  ['aboutme','About Me','Say a little about yourself',[['Mi chiamo…','My name is…'],['Vengo dagli Stati Uniti','I am from the United States'],['Ho tredici anni','I am thirteen years old'],['Parlo un po’ d’italiano','I speak a little Italian'],['Sto imparando l’italiano','I am learning Italian']]],
  ['days','Days & Time','Talk about the week',[['lunedì','Monday'],['martedì','Tuesday'],['mercoledì','Wednesday'],['giovedì','Thursday'],['venerdì','Friday']]],
  ['outabout','Out & About','Useful phrases away from home',[['Dov’è il bagno?','Where is the bathroom?'],['Non capisco','I do not understand'],['Parla inglese?','Do you speak English?'],['Può ripetere?','Can you repeat that?'],['Più lentamente, per favore','More slowly, please']]],
  ['weather','Weather','Talk about the weather',[['Fa caldo','It is hot'],['Fa freddo','It is cold'],['Piove','It is raining'],['C’è il sole','It is sunny'],['C’è vento','It is windy']]],
  ['feelings','Feelings','Say how you feel',[['Sono felice','I am happy'],['Sono stanco','I am tired'],['Sono triste','I am sad'],['Ho paura','I am afraid'],['Sto bene','I am well']]],
  ['home','Home','Things around the home',[['la casa','house'],['la stanza','room'],['la cucina','kitchen'],['la porta','door'],['la finestra','window']]],
  ['clothes','Clothes','What people wear',[['la camicia','shirt'],['i pantaloni','trousers'],['il vestito','dress'],['le scarpe','shoes'],['la giacca','jacket']]],
  ['body','Body & Health','Body and basic health',[['la testa','head'],['la mano','hand'],['la gamba','leg'],['Mi fa male la testa','My head hurts'],['Ho bisogno di un medico','I need a doctor']]],
  ['shopping','Shopping','Buy what you need',[['Vorrei comprare questo','I would like to buy this'],['Quanto viene?','How much is it?'],['Ha un’altra taglia?','Do you have another size?'],['Sto solo guardando','I am just looking'],['Pago con la carta','I will pay by card']]],
  ['directions','Directions','Find your way',[['a sinistra','to the left'],['a destra','to the right'],['sempre dritto','straight ahead'],['vicino','near'],['lontano','far']]],
  ['coast','Coast & Summer','Enjoy the Mediterranean',[['il mare','sea'],['la spiaggia','beach'],['il sole','sun'],['nuotare','to swim'],['la crema solare','sunscreen']]],
  ['time','Telling Time','Ask and tell the time',[['Che ore sono?','What time is it?'],['È l’una','It is one o’clock'],['Sono le due','It is two o’clock'],['di mattina','in the morning'],['di pomeriggio','in the afternoon']]],
  ['hobbies','Hobbies','Talk about free time',[['Mi piace leggere','I like to read'],['Mi piace la musica','I like music'],['Gioco a calcio','I play football'],['Mi piace nuotare','I like swimming'],['Disegno','I draw']]],
  ['travel','Travel Essentials','Move around confidently',[['l’aeroporto','airport'],['la stazione','station'],['il biglietto','ticket'],['il passaporto','passport'],['Ho una prenotazione','I have a reservation']]],
  ['verbs','Core Verbs','Build useful sentences',[['sono','I am'],['sei','you are'],['è','he, she, or it is'],['ho','I have'],['hai','you have']]],
  ['adjectives','Describing Things','Useful descriptions',[['grande','big'],['piccolo','small'],['buono','good'],['bello','beautiful'],['nuovo','new']]],
  ['questionwords','Question Words','Ask useful questions',[['chi','who'],['che cosa','what'],['dove','where'],['quando','when'],['perché','why']]],
  ['plans','Making Plans','Arrange time together',[['Che facciamo?','What shall we do?'],['Vieni?','Are you coming?'],['Ci vediamo domani','See you tomorrow'],['A che ora?','At what time?'],['Va bene!','Okay!']]],
  ['smalltalk','Small Talk','Get to know people',[['Di dove sei?','Where are you from?'],['Come va?','How is it going?'],['Che cosa ti piace?','What do you like?'],['Quanto tempo rimani?','How long are you staying?'],['Anch’io','Me too']]],
  ['restaurant','At a Restaurant','Order a meal',[['Un tavolo per quattro','A table for four'],['Che cosa consiglia?','What do you recommend?'],['Prendo il pesce','I will have the fish'],['Senza carne, per favore','Without meat, please'],['Era delizioso','It was delicious']]],
  ['gathering','Family Gathering','Talk around the table',[['Benvenuti!','Welcome!'],['Sedetevi, per favore','Sit down, please'],['Come sta la famiglia?','How is the family?'],['Salute!','Cheers!'],['Grazie per la cena','Thank you for dinner']]],
  ['past','Talking About the Past','Share what happened',[['Ero a casa','I was at home'],['Sono andato in centro','I went downtown'],['Ho mangiato il riso','I ate rice'],['L’ho visto ieri','I saw it yesterday'],['È stata una bella giornata','It was a good day']]],
  ['future','Talking About the Future','Say what will happen',[['Verrò domani','I will come tomorrow'],['Andremo in piazza','We will go to the square'],['Mangeremo insieme','We will eat together'],['Ti chiamerò','I will call you'],['A presto','See you soon']]],
  ['sounds','Italian Sounds','Recognize distinctive spelling',[['gli','the gli sound'],['gn','the gn sound'],['ch','the hard c spelling'],['ci','the soft c spelling'],['sc','the sc spelling']]],
];

const months = [['family','greetings','numbers'],['colors','drinks','food'],['market','cafe','talkfamily'],['aboutme','days','outabout'],['weather','feelings','home'],['clothes','body','shopping'],['directions','coast','time'],['hobbies','travel','verbs'],['adjectives','questionwords','plans'],['smalltalk','restaurant','gathering']];

const dialogues = {
  greetings: { roles:['Learner','Friend'], lines:[['Learner','Ciao! Come stai?','Hello! How are you?'],['Friend','Ciao! Molto bene, e tu?','Hello! Very well, and you?'],['Learner','Mi chiamo Lena. Piacere!','My name is Lena. Nice to meet you!'],['Friend','Piacere mio. Arrivederci!','My pleasure. Goodbye!']] },
  cafe: { roles:['Guest','Cameriere'], lines:[['Guest','Buongiorno. Avete del caffè?','Good morning. Do you have coffee?'],['Cameriere','Sì, certo. Come lo desidera?','Yes, of course. How would you like it?'],['Guest','Un caffè macchiato, per favore.','A macchiato coffee, please.'],['Cameriere','Subito.','Right away.']] },
  shopping: { roles:['Cliente','Negoziante'], lines:[['Cliente','Buongiorno! Quanto costa questo?','Hello! How much does this cost?'],['Negoziante','Costa dieci euro.','It costs ten euros.'],['Cliente','Lo prendo, grazie!','I will take it, thank you!'],['Negoziante','Grazie a lei, buona giornata!','Thank you, have a good day!']] },
  travel: { roles:['Passeggero','Agente'], lines:[['Passeggero','Scusi, dov’è la stazione?','Excuse me, where is the station?'],['Agente','Vada sempre dritto per due blocchi.','Go straight ahead for two blocks.'],['Passeggero','Grazie mille!','Thank you very much!'],['Agente','Prego, buon viaggio!','You are welcome, have a good trip!']] },
};

export default buildRomancePack({ definitions, months, extras:['past','future','sounds'], dialogues, config:{
  id:'italian-en', code:'it', name:'Italian', locale:'it-IT', itemCode:'it-it', variety:'Standard Italian (Italy)',
  journeyThemeId:'italy-alps-to-sea@0.1.0',
  note:'Standard Italian pilot draft. Wording and pronunciation require fluent review.',
  source:'Original Nautilus Italian pilot draft; queued for fluent Italian review.',
  varietyPolicy:'Standard Italian used in Italy. Regional vocabulary and pronunciation should be labeled separately and require fluent review.',
  audioNote:'Device speech is an unreviewed preview and must use an it-IT voice.',
} });
