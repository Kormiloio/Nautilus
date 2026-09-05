import { buildRomancePack } from './romance-pack.js';

const SOURCE = 'Original Nautilus Castilian Spanish pilot draft; queued for fluent Spain-Spanish review.';

const definitions = [
  ['family','Family','People in your family',[['la familia','family'],['la madre','mother'],['el padre','father'],['la hermana','sister'],['el hermano','brother']]],
  ['greetings','Greetings','Meet someone politely',[['Hola','Hello'],['Buenos días','Good morning'],['Buenas tardes','Good afternoon'],['¿Cómo estás?','How are you?'],['Adiós','Goodbye']]],
  ['numbers','Numbers','Start counting',[['uno','one'],['dos','two'],['tres','three'],['cuatro','four'],['cinco','five']]],
  ['colors','Colors','Describe what you see',[['rojo','red'],['azul','blue'],['verde','green'],['amarillo','yellow'],['blanco','white']]],
  ['drinks','Drinks','Ask for a drink',[['el agua','water'],['el café','coffee'],['el té','tea'],['la leche','milk'],['el zumo','juice']]],
  ['food','Food','Everyday foods',[['el pan','bread'],['el queso','cheese'],['el arroz','rice'],['el pescado','fish'],['la fruta','fruit']]],
  ['market','At the Market','Shop for food',[['¿Cuánto cuesta?','How much does it cost?'],['Quiero esto','I want this'],['¿Tiene tomates?','Do you have tomatoes?'],['Es muy caro','It is very expensive'],['Una bolsa, por favor','A bag, please']]],
  ['cafe','At a Café','Order politely',[['Un café, por favor','A coffee, please'],['¿Tenéis té?','Do you have tea?'],['Sin azúcar','Without sugar'],['La cuenta, por favor','The bill, please'],['Muchas gracias','Thank you very much']]],
  ['talkfamily','Talking About Family','Describe your family',[['Esta es mi familia','This is my family'],['Tengo una hermana','I have a sister'],['Tengo un hermano','I have a brother'],['Mis padres viven aquí','My parents live here'],['Somos cinco','There are five of us']]],
  ['aboutme','About Me','Say a little about yourself',[['Me llamo…','My name is…'],['Soy de Estados Unidos','I am from the United States'],['Tengo trece años','I am thirteen years old'],['Hablo un poco de español','I speak a little Spanish'],['Estoy aprendiendo español','I am learning Spanish']]],
  ['days','Days & Time','Talk about the week',[['lunes','Monday'],['martes','Tuesday'],['miércoles','Wednesday'],['jueves','Thursday'],['viernes','Friday']]],
  ['outabout','Out & About','Useful phrases away from home',[['¿Dónde está el baño?','Where is the bathroom?'],['No entiendo','I do not understand'],['¿Habla inglés?','Do you speak English?'],['¿Puede repetirlo?','Can you repeat that?'],['Más despacio, por favor','More slowly, please']]],
  ['weather','Weather','Talk about the weather',[['Hace calor','It is hot'],['Hace frío','It is cold'],['Llueve','It is raining'],['Hace sol','It is sunny'],['Hace viento','It is windy']]],
  ['feelings','Feelings','Say how you feel',[['Estoy contento','I am happy'],['Estoy cansada','I am tired'],['Estoy triste','I am sad'],['Tengo miedo','I am afraid'],['Estoy bien','I am well']]],
  ['home','Home','Things around the home',[['la casa','house'],['la habitación','room'],['la cocina','kitchen'],['la puerta','door'],['la ventana','window']]],
  ['clothes','Clothes','What people wear',[['la camisa','shirt'],['los pantalones','trousers'],['el vestido','dress'],['los zapatos','shoes'],['la chaqueta','jacket']]],
  ['body','Body & Health','Body and basic health',[['la cabeza','head'],['la mano','hand'],['la pierna','leg'],['Me duele la cabeza','My head hurts'],['Necesito un médico','I need a doctor']]],
  ['shopping','Shopping','Buy what you need',[['Quiero comprar esto','I want to buy this'],['¿Cuánto vale?','How much is it?'],['¿Tiene otra talla?','Do you have another size?'],['Solo estoy mirando','I am just looking'],['Pago con tarjeta','I will pay by card']]],
  ['directions','Directions','Find your way',[['a la izquierda','to the left'],['a la derecha','to the right'],['todo recto','straight ahead'],['cerca','near'],['lejos','far']]],
  ['coast','Coast & Summer','Enjoy the Mediterranean',[['el mar','sea'],['la playa','beach'],['el sol','sun'],['nadar','to swim'],['la crema solar','sunscreen']]],
  ['time','Telling Time','Ask and tell the time',[['¿Qué hora es?','What time is it?'],['Es la una','It is one o’clock'],['Son las dos','It is two o’clock'],['por la mañana','in the morning'],['por la tarde','in the afternoon']]],
  ['hobbies','Hobbies','Talk about free time',[['Me gusta leer','I like to read'],['Me gusta la música','I like music'],['Juego al fútbol','I play football'],['Me gusta nadar','I like swimming'],['Dibujo','I draw']]],
  ['travel','Travel Essentials','Move around confidently',[['el aeropuerto','airport'],['la estación','station'],['el billete','ticket'],['el pasaporte','passport'],['Tengo una reserva','I have a reservation']]],
  ['verbs','Core Verbs','Build useful sentences',[['soy','I am'],['eres','you are'],['es','he, she, or it is'],['tengo','I have'],['tienes','you have']]],
  ['adjectives','Describing Things','Useful descriptions',[['grande','big'],['pequeño','small'],['bueno','good'],['bonito','pretty'],['nuevo','new']]],
  ['questionwords','Question Words','Ask useful questions',[['quién','who'],['qué','what'],['dónde','where'],['cuándo','when'],['por qué','why']]],
  ['plans','Making Plans','Arrange time together',[['¿Qué hacemos?','What shall we do?'],['¿Vienes?','Are you coming?'],['Nos vemos mañana','See you tomorrow'],['¿A qué hora?','At what time?'],['¡Vale!','Okay!']]],
  ['smalltalk','Small Talk','Get to know people',[['¿De dónde eres?','Where are you from?'],['¿Qué tal?','How is it going?'],['¿Qué te gusta?','What do you like?'],['¿Cuánto tiempo te quedas?','How long are you staying?'],['A mí también','Me too']]],
  ['restaurant','At a Restaurant','Order a meal',[['Una mesa para cuatro','A table for four'],['¿Qué recomienda?','What do you recommend?'],['Tomaré el pescado','I will have the fish'],['Sin carne, por favor','Without meat, please'],['Estaba muy rico','It was delicious']]],
  ['gathering','Family Gathering','Talk around the table',[['¡Bienvenidos!','Welcome!'],['Sentaos, por favor','Sit down, please'],['¿Cómo está la familia?','How is the family?'],['¡Salud!','Cheers!'],['Gracias por la cena','Thank you for dinner']]],
  ['past','Talking About the Past','Share what happened',[['Estuve en casa','I was at home'],['Fui al centro','I went downtown'],['Comí arroz','I ate rice'],['Lo vi ayer','I saw it yesterday'],['Fue un buen día','It was a good day']]],
  ['future','Talking About the Future','Say what will happen',[['Vendré mañana','I will come tomorrow'],['Iremos a la plaza','We will go to the square'],['Comeremos juntos','We will eat together'],['Te llamaré','I will call you'],['Nos vemos pronto','See you soon']]],
  ['alphabet','Spanish Sounds','Recognize distinctive spelling',[['ñ','the letter eñe'],['ll','the double-l spelling'],['rr','the strong r spelling'],['j','the Spanish jota spelling'],['z','the z spelling used with the Castilian distinction']]],
];

const dialogues = {
  greetings: { roles:['Learner','Friend'], lines:[['Learner','¡Hola! ¿Cómo estás?','Hello! How are you?'],['Friend','¡Hola! Muy bien, ¿y tú?','Hello! Very well, and you?'],['Learner','Me llamo Lena. Encantada.','My name is Lena. Nice to meet you.'],['Friend','Igualmente. ¡Hasta luego!','Likewise. See you later!']] },
  cafe: { roles:['Guest','Camarero'], lines:[['Guest','Buenas tardes. ¿Tenéis café?','Good afternoon. Do you have coffee?'],['Camarero','Sí, claro. ¿Cómo lo quiere?','Yes, of course. How would you like it?'],['Guest','Un café con leche, por favor.','A coffee with milk, please.'],['Camarero','Ahora mismo.','Right away.']] },
  shopping: { roles:['Cliente','Dependiente'], lines:[['Cliente','Hola, ¿cuánto cuesta esto?','Hello, how much does this cost?'],['Dependiente','Son diez euros.','It is ten euros.'],['Cliente','Me lo llevo, gracias.','I will take it, thank you.'],['Dependiente','A ti, ¡buen día!','Thank you, good day!']] },
  travel: { roles:['Pasajero','Agente'], lines:[['Pasajero','Disculpe, ¿dónde está la estación?','Excuse me, where is the station?'],['Agente','Siga todo recto dos calles.','Go straight ahead for two blocks.'],['Pasajero','Muchas gracias.','Thank you very much.'],['Agente','De nada, ¡buen viaje!','You are welcome, have a good trip!']] },
};

const curriculum = {
  months: [
    ['family','greetings','numbers'], ['colors','drinks','food'], ['market','cafe','talkfamily'],
    ['aboutme','days','outabout'], ['weather','feelings','home'], ['clothes','body','shopping'],
    ['directions','coast','time'], ['hobbies','travel','verbs'], ['adjectives','questionwords','plans'],
    ['smalltalk','restaurant','gathering'],
  ],
  extras: ['past','future','alphabet'],
};

export default buildRomancePack({
  definitions,
  months: curriculum.months,
  extras: curriculum.extras,
  dialogues,
  config: {
    id: 'spanish-spain-en', code: 'es', name: 'Spanish · Spain', locale: 'es-ES', itemCode: 'es-es', variety: 'Castilian Spanish (Spain)',
    journeyThemeId: 'iberian-journey@0.1.0',
    note: 'Castilian Spanish (Spain) pilot draft. Regional wording and pronunciation require fluent review.',
    source: SOURCE,
    varietyPolicy: 'Castilian Spanish for Spain. Region-specific vocabulary, vosotros forms, and pronunciation are labeled and require fluent Spain-Spanish review.',
    audioNote: 'Device speech is an unreviewed preview and must use an es-ES voice.',
  }
});
