import { buildRomancePack } from './romance-pack.js';

const definitions = [
  ['family','Family','People in your family',[['la famille','family'],['la mère','mother'],['le père','father'],['la sœur','sister'],['le frère','brother']]],
  ['greetings','Greetings','Meet someone politely',[['Bonjour','Hello'],['Bonsoir','Good evening'],['Salut','Hi'],['Comment ça va ?','How are you?'],['Au revoir','Goodbye']]],
  ['numbers','Numbers','Start counting',[['un','one'],['deux','two'],['trois','three'],['quatre','four'],['cinq','five']]],
  ['colors','Colors','Describe what you see',[['rouge','red'],['bleu','blue'],['vert','green'],['jaune','yellow'],['blanc','white']]],
  ['drinks','Drinks','Ask for a drink',[['l’eau','water'],['le café','coffee'],['le thé','tea'],['le lait','milk'],['le jus','juice']]],
  ['food','Food','Everyday foods',[['le pain','bread'],['le fromage','cheese'],['le riz','rice'],['le poisson','fish'],['les fruits','fruit']]],
  ['market','At the Market','Shop for food',[['Combien ça coûte ?','How much does it cost?'],['Je voudrais ceci','I would like this'],['Vous avez des tomates ?','Do you have tomatoes?'],['C’est trop cher','It is too expensive'],['Un sac, s’il vous plaît','A bag, please']]],
  ['cafe','At a Café','Order politely',[['Un café, s’il vous plaît','A coffee, please'],['Vous avez du thé ?','Do you have tea?'],['Sans sucre','Without sugar'],['L’addition, s’il vous plaît','The bill, please'],['Merci beaucoup','Thank you very much']]],
  ['talkfamily','Talking About Family','Describe your family',[['Voici ma famille','This is my family'],['J’ai une sœur','I have a sister'],['J’ai un frère','I have a brother'],['Mes parents habitent ici','My parents live here'],['Nous sommes cinq','There are five of us']]],
  ['aboutme','About Me','Say a little about yourself',[['Je m’appelle…','My name is…'],['Je viens des États-Unis','I am from the United States'],['J’ai treize ans','I am thirteen years old'],['Je parle un peu français','I speak a little French'],['J’apprends le français','I am learning French']]],
  ['days','Days & Time','Talk about the week',[['lundi','Monday'],['mardi','Tuesday'],['mercredi','Wednesday'],['jeudi','Thursday'],['vendredi','Friday']]],
  ['outabout','Out & About','Useful phrases away from home',[['Où sont les toilettes ?','Where is the bathroom?'],['Je ne comprends pas','I do not understand'],['Vous parlez anglais ?','Do you speak English?'],['Vous pouvez répéter ?','Can you repeat that?'],['Plus lentement, s’il vous plaît','More slowly, please']]],
  ['weather','Weather','Talk about the weather',[['Il fait chaud','It is hot'],['Il fait froid','It is cold'],['Il pleut','It is raining'],['Il y a du soleil','It is sunny'],['Il y a du vent','It is windy']]],
  ['feelings','Feelings','Say how you feel',[['Je suis content','I am happy'],['Je suis fatigué','I am tired'],['Je suis triste','I am sad'],['J’ai peur','I am afraid'],['Je vais bien','I am well']]],
  ['home','Home','Things around the home',[['la maison','house'],['la chambre','room'],['la cuisine','kitchen'],['la porte','door'],['la fenêtre','window']]],
  ['clothes','Clothes','What people wear',[['la chemise','shirt'],['le pantalon','trousers'],['la robe','dress'],['les chaussures','shoes'],['la veste','jacket']]],
  ['body','Body & Health','Body and basic health',[['la tête','head'],['la main','hand'],['la jambe','leg'],['J’ai mal à la tête','My head hurts'],['J’ai besoin d’un médecin','I need a doctor']]],
  ['shopping','Shopping','Buy what you need',[['Je voudrais acheter ceci','I would like to buy this'],['C’est combien ?','How much is it?'],['Vous avez une autre taille ?','Do you have another size?'],['Je regarde seulement','I am just looking'],['Je paie par carte','I will pay by card']]],
  ['directions','Directions','Find your way',[['à gauche','to the left'],['à droite','to the right'],['tout droit','straight ahead'],['près','near'],['loin','far']]],
  ['coast','Coast & Summer','Enjoy the Mediterranean',[['la mer','sea'],['la plage','beach'],['le soleil','sun'],['nager','to swim'],['la crème solaire','sunscreen']]],
  ['time','Telling Time','Ask and tell the time',[['Quelle heure est-il ?','What time is it?'],['Il est une heure','It is one o’clock'],['Il est deux heures','It is two o’clock'],['le matin','in the morning'],['l’après-midi','in the afternoon']]],
  ['hobbies','Hobbies','Talk about free time',[['J’aime lire','I like to read'],['J’aime la musique','I like music'],['Je joue au football','I play football'],['J’aime nager','I like swimming'],['Je dessine','I draw']]],
  ['travel','Travel Essentials','Move around confidently',[['l’aéroport','airport'],['la gare','station'],['le billet','ticket'],['le passeport','passport'],['J’ai une réservation','I have a reservation']]],
  ['verbs','Core Verbs','Build useful sentences',[['je suis','I am'],['tu es','you are'],['il est','he is'],['j’ai','I have'],['tu as','you have']]],
  ['adjectives','Describing Things','Useful descriptions',[['grand','big'],['petit','small'],['bon','good'],['joli','pretty'],['nouveau','new']]],
  ['questionwords','Question Words','Ask useful questions',[['qui','who'],['quoi','what'],['où','where'],['quand','when'],['pourquoi','why']]],
  ['plans','Making Plans','Arrange time together',[['On fait quoi ?','What shall we do?'],['Tu viens ?','Are you coming?'],['À demain','See you tomorrow'],['À quelle heure ?','At what time?'],['D’accord !','Okay!']]],
  ['smalltalk','Small Talk','Get to know people',[['Tu viens d’où ?','Where are you from?'],['Ça va ?','How is it going?'],['Qu’est-ce que tu aimes ?','What do you like?'],['Tu restes combien de temps ?','How long are you staying?'],['Moi aussi','Me too']]],
  ['restaurant','At a Restaurant','Order a meal',[['Une table pour quatre','A table for four'],['Qu’est-ce que vous conseillez ?','What do you recommend?'],['Je vais prendre le poisson','I will have the fish'],['Sans viande, s’il vous plaît','Without meat, please'],['C’était délicieux','It was delicious']]],
  ['gathering','Family Gathering','Talk around the table',[['Bienvenue !','Welcome!'],['Asseyez-vous, s’il vous plaît','Sit down, please'],['Comment va la famille ?','How is the family?'],['Santé !','Cheers!'],['Merci pour le dîner','Thank you for dinner']]],
  ['past','Talking About the Past','Share what happened',[['J’étais à la maison','I was at home'],['Je suis allé en ville','I went downtown'],['J’ai mangé du riz','I ate rice'],['Je l’ai vu hier','I saw it yesterday'],['C’était une bonne journée','It was a good day']]],
  ['future','Talking About the Future','Say what will happen',[['Je viendrai demain','I will come tomorrow'],['Nous irons en ville','We will go downtown'],['Nous mangerons ensemble','We will eat together'],['Je t’appellerai','I will call you'],['À bientôt','See you soon']]],
  ['sounds','French Sounds','Recognize distinctive spelling',[['é','the closed e sound'],['è','the open e sound'],['ç','the cedilla spelling'],['ou','the ou sound'],['on','the nasal on sound']]],
];

const months = [['family','greetings','numbers'],['colors','drinks','food'],['market','cafe','talkfamily'],['aboutme','days','outabout'],['weather','feelings','home'],['clothes','body','shopping'],['directions','coast','time'],['hobbies','travel','verbs'],['adjectives','questionwords','plans'],['smalltalk','restaurant','gathering']];

export default buildRomancePack({ definitions, months, extras:['past','future','sounds'], config:{
  id:'french-france-en', code:'fr', name:'French · France', locale:'fr-FR', itemCode:'fr-fr', variety:'Metropolitan French (France)',
  journeyThemeId:'france-atlantic-to-mediterranean@0.1.0',
  note:'Metropolitan French pilot draft. Wording and pronunciation require fluent review.',
  source:'Original Nautilus France-French pilot draft; queued for fluent France-French review.',
  varietyPolicy:'Metropolitan French used in France. Regional and international variants should be labeled separately and require fluent review.',
  audioNote:'Device speech is an unreviewed preview and must use a fr-FR voice.',
} });
