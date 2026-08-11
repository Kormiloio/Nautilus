(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();const Ye={id:"montenegrin-en",targetLanguage:{code:"cnr",name:"Montenegrin",scripts:["Latn","Cyrl"]},supportLanguage:{code:"en",name:"English"},version:"0.1.0",status:"draft"},Ke={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},Je=JSON.parse(`[{"id":"family","month":1,"title":"Family","subtitle":"Words for relatives","icon":"Fa","color":"#7dd3fc","note":"Your family speaks a Montenegrin-Dalmatian blend — words like dida and kukumar are your family's words, not mistakes. In Montenegrin, grandpa may also be deda.","items":[{"id":"family-item-001","targetText":"mama","supportText":"mom","emoji":"👩"},{"id":"family-item-002","targetText":"tata","supportText":"dad","emoji":"👨"},{"id":"family-item-003","targetText":"brat","supportText":"brother","emoji":"👦"},{"id":"family-item-004","targetText":"sestra","supportText":"sister","emoji":"👧"},{"id":"family-item-005","targetText":"baka","supportText":"grandma (also: baba)","emoji":"👵"},{"id":"family-item-006","targetText":"dida","supportText":"grandpa (Montenegrin: deda)","emoji":"👴"},{"id":"family-item-007","targetText":"sin","supportText":"son","emoji":"👦"},{"id":"family-item-008","targetText":"kćerka","supportText":"daughter (also: kći)","emoji":"👧"},{"id":"family-item-009","targetText":"porodica","supportText":"family","emoji":"👪"},{"id":"family-item-010","targetText":"roditelji","supportText":"parents"},{"id":"family-item-011","targetText":"dijete / djeca","supportText":"child / children","emoji":"👶"},{"id":"family-item-012","targetText":"ko","supportText":"who"}]},{"id":"greetings","month":1,"title":"Greetings","subtitle":"Say hello & introduce yourself","icon":"Zd","color":"#f472b6","items":[{"id":"greetings-item-001","targetText":"Zdravo","supportText":"Hello"},{"id":"greetings-item-002","targetText":"Dobar dan","supportText":"Good afternoon"},{"id":"greetings-item-003","targetText":"Dobro jutro","supportText":"Good morning"},{"id":"greetings-item-004","targetText":"Hvala","supportText":"Thank you"},{"id":"greetings-item-005","targetText":"Molim","supportText":"Please / You're welcome"},{"id":"greetings-item-006","targetText":"Da","supportText":"Yes"},{"id":"greetings-item-007","targetText":"Ne","supportText":"No"},{"id":"greetings-item-008","targetText":"Doviđenja","supportText":"Goodbye"},{"id":"greetings-item-009","targetText":"Ćao","supportText":"Bye / Hi (informal)"},{"id":"greetings-item-010","targetText":"Izvini","supportText":"Sorry / Excuse me"},{"id":"greetings-item-011","targetText":"Kako se zoveš?","supportText":"What's your name?"},{"id":"greetings-item-012","targetText":"Zovem se...","supportText":"My name is..."},{"id":"greetings-item-013","targetText":"Drago mi je","supportText":"Nice to meet you"}],"dialogue":{"roles":["You","New Friend"],"lines":[{"id":"greetings-dialogue-001","targetText":"Dobar dan! Kako se zoveš?","supportText":"Good afternoon! What is your name?","role":"You"},{"id":"greetings-dialogue-002","targetText":"Zovem se Lena. A ti?","supportText":"My name is Lena. And you?","role":"New Friend"},{"id":"greetings-dialogue-003","targetText":"Zovem se Sam. Drago mi je!","supportText":"My name is Sam. Nice to meet you!","role":"You"},{"id":"greetings-dialogue-004","targetText":"Drago mi je! Doviđenja.","supportText":"Nice to meet you too! Goodbye.","role":"New Friend"}]}},{"id":"numbers","month":2,"title":"Numbers","subtitle":"Counting 1–100","icon":"123","color":"#a3e635","items":[{"id":"numbers-item-001","targetText":"jedan","supportText":"one (1)"},{"id":"numbers-item-002","targetText":"dva","supportText":"two (2)"},{"id":"numbers-item-003","targetText":"tri","supportText":"three (3)"},{"id":"numbers-item-004","targetText":"četiri","supportText":"four (4)"},{"id":"numbers-item-005","targetText":"pet","supportText":"five (5)"},{"id":"numbers-item-006","targetText":"šest","supportText":"six (6)"},{"id":"numbers-item-007","targetText":"sedam","supportText":"seven (7)"},{"id":"numbers-item-008","targetText":"osam","supportText":"eight (8)"},{"id":"numbers-item-009","targetText":"devet","supportText":"nine (9)"},{"id":"numbers-item-010","targetText":"deset","supportText":"ten (10)"},{"id":"numbers-item-011","targetText":"dvadeset","supportText":"twenty (20)"},{"id":"numbers-item-012","targetText":"trideset","supportText":"thirty (30)"},{"id":"numbers-item-013","targetText":"pedeset","supportText":"fifty (50)"},{"id":"numbers-item-014","targetText":"sto","supportText":"one hundred (100)"}]},{"id":"colors","month":2,"title":"Colors","subtitle":"boje","icon":"Bo","color":"#7dd3fc","items":[{"id":"colors-item-001","targetText":"crvena","supportText":"red","emoji":"🔴"},{"id":"colors-item-002","targetText":"plava","supportText":"blue","emoji":"🔵"},{"id":"colors-item-003","targetText":"zelena","supportText":"green","emoji":"🟢"},{"id":"colors-item-004","targetText":"žuta","supportText":"yellow","emoji":"🟡"},{"id":"colors-item-005","targetText":"crna","supportText":"black","emoji":"⚫"},{"id":"colors-item-006","targetText":"bijela","supportText":"white","emoji":"⚪"}]},{"id":"drinks","month":3,"title":"Drinks","subtitle":"piće","icon":"Pi","color":"#f472b6","items":[{"id":"drinks-item-001","targetText":"voda","supportText":"water","emoji":"💧"},{"id":"drinks-item-002","targetText":"kafa","supportText":"coffee","emoji":"☕"},{"id":"drinks-item-003","targetText":"čaj","supportText":"tea","emoji":"🍵"},{"id":"drinks-item-004","targetText":"sok","supportText":"juice","emoji":"🧃"},{"id":"drinks-item-005","targetText":"mlijeko","supportText":"milk","emoji":"🥛"},{"id":"drinks-item-006","targetText":"pivo","supportText":"beer","emoji":"🍺"},{"id":"drinks-item-007","targetText":"vino","supportText":"wine","emoji":"🍷"},{"id":"drinks-item-008","targetText":"rakija","supportText":"rakija (homemade brandy)","emoji":"🥃"}]},{"id":"food","month":3,"title":"Food","subtitle":"hrana","icon":"Hr","color":"#a3e635","items":[{"id":"food-item-001","targetText":"kruh","supportText":"bread (also: hljeb)","emoji":"🍞"},{"id":"food-item-002","targetText":"sir","supportText":"cheese","emoji":"🧀"},{"id":"food-item-003","targetText":"meso","supportText":"meat","emoji":"🥩"},{"id":"food-item-004","targetText":"riba","supportText":"fish","emoji":"🐟"},{"id":"food-item-005","targetText":"jaje / jaja","supportText":"egg / eggs","emoji":"🥚"},{"id":"food-item-006","targetText":"salata","supportText":"salad","emoji":"🥗"},{"id":"food-item-007","targetText":"supa / čorba","supportText":"soup","emoji":"🍲"},{"id":"food-item-008","targetText":"sladoled","supportText":"ice cream","emoji":"🍦"},{"id":"food-item-009","targetText":"jabuka","supportText":"apple","emoji":"🍎"}]},{"id":"veg","month":4,"title":"Vegetables & Market","subtitle":"pijaca","icon":"Pj","color":"#7dd3fc","items":[{"id":"veg-item-001","targetText":"paradajz","supportText":"tomato","emoji":"🍅"},{"id":"veg-item-002","targetText":"kukumar","supportText":"cucumber","emoji":"🥒"},{"id":"veg-item-003","targetText":"krompir","supportText":"potato","emoji":"🥔"},{"id":"veg-item-004","targetText":"luk","supportText":"onion","emoji":"🧅"},{"id":"veg-item-005","targetText":"bijeli luk","supportText":"garlic (literally 'white onion')","emoji":"🧄"},{"id":"veg-item-006","targetText":"paprika","supportText":"pepper","emoji":"🫑"},{"id":"veg-item-007","targetText":"mrkva","supportText":"carrot","emoji":"🥕"},{"id":"veg-item-008","targetText":"kupus","supportText":"cabbage","emoji":"🥬"}]},{"id":"cafe","month":4,"title":"At a Café","subtitle":"Order like a local","icon":"Ka","color":"#f472b6","note":"Hoću = I want, Neću = I don't want.\\nWords ending in -a often change to -u after these: kafa → Hoću kafu, voda → Hoću vodu.","items":[{"id":"cafe-item-001","targetText":"Dobar dan!","supportText":"Good afternoon! (greeting)"},{"id":"cafe-item-002","targetText":"Izvolite?","supportText":"What can I get you?"},{"id":"cafe-item-003","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please."},{"id":"cafe-item-004","targetText":"Još nešto?","supportText":"Anything else?"},{"id":"cafe-item-005","targetText":"Hvala","supportText":"Thank you"},{"id":"cafe-item-006","targetText":"Račun, molim.","supportText":"The bill, please."}],"dialogue":{"roles":["Waiter","Customer"],"lines":[{"id":"cafe-dialogue-001","targetText":"Dobar dan! Izvolite?","supportText":"Good afternoon! What can I get you?","role":"Waiter"},{"id":"cafe-dialogue-002","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please.","role":"Customer"},{"id":"cafe-dialogue-003","targetText":"Još nešto?","supportText":"Anything else?","role":"Waiter"},{"id":"cafe-dialogue-004","targetText":"Hoću i vodu. Hvala.","supportText":"I'll also have water. Thanks.","role":"Customer"},{"id":"cafe-dialogue-005","targetText":"Izvolite.","supportText":"Here you go.","role":"Waiter"},{"id":"cafe-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"Customer"},{"id":"cafe-dialogue-007","targetText":"Račun, molim.","supportText":"The bill, please.","role":"Customer"},{"id":"cafe-dialogue-008","targetText":"Doviđenja!","supportText":"Goodbye!","role":"Waiter"}]}},{"id":"talkfamily","month":5,"title":"Talking About Family","subtitle":"\\"my brother\\", \\"I have a sister\\"","icon":"Mo","color":"#a3e635","items":[{"id":"talkfamily-item-001","targetText":"moj","supportText":"my (masculine)"},{"id":"talkfamily-item-002","targetText":"moja","supportText":"my (feminine)"},{"id":"talkfamily-item-003","targetText":"moj brat","supportText":"my brother"},{"id":"talkfamily-item-004","targetText":"moja sestra","supportText":"my sister"},{"id":"talkfamily-item-005","targetText":"moje dijete","supportText":"my child"},{"id":"talkfamily-item-006","targetText":"Imam brata.","supportText":"I have a brother."},{"id":"talkfamily-item-007","targetText":"Imam sestru.","supportText":"I have a sister."},{"id":"talkfamily-item-008","targetText":"Kako se zove tvoj brat?","supportText":"What's your brother's name?"},{"id":"talkfamily-item-009","targetText":"Moj brat se zove Sam.","supportText":"My brother is named Sam."},{"id":"talkfamily-item-010","targetText":"Ovo je moja porodica.","supportText":"This is my family."},{"id":"talkfamily-item-011","targetText":"A ko je ovo?","supportText":"And who is this?"}]},{"id":"aboutme","month":5,"title":"About Me","subtitle":"Simple sentences about yourself","icon":"Ja","color":"#7dd3fc","items":[{"id":"aboutme-item-001","targetText":"Ja se zovem ___.","supportText":"My name is ___."},{"id":"aboutme-item-002","targetText":"Koliko imaš godina?","supportText":"How old are you?"},{"id":"aboutme-item-003","targetText":"Imam ___ godina.","supportText":"I am ___ years old."},{"id":"aboutme-item-004","targetText":"Volim čokoladu.","supportText":"I love chocolate."},{"id":"aboutme-item-005","targetText":"Idem u školu.","supportText":"I am going to school."},{"id":"aboutme-item-006","targetText":"Idem na plažu.","supportText":"I'm going to the beach."},{"id":"aboutme-item-007","targetText":"Gdje živiš?","supportText":"Where do you live?"},{"id":"aboutme-item-008","targetText":"Živim u ___.","supportText":"I live in ___."}]},{"id":"days","month":6,"title":"Days & Time","subtitle":"dani u sedmici","icon":"Dn","color":"#f472b6","items":[{"id":"days-item-001","targetText":"ponedjeljak","supportText":"Monday"},{"id":"days-item-002","targetText":"utorak","supportText":"Tuesday"},{"id":"days-item-003","targetText":"srijeda","supportText":"Wednesday"},{"id":"days-item-004","targetText":"četvrtak","supportText":"Thursday"},{"id":"days-item-005","targetText":"petak","supportText":"Friday"},{"id":"days-item-006","targetText":"subota","supportText":"Saturday"},{"id":"days-item-007","targetText":"nedjelja","supportText":"Sunday"},{"id":"days-item-008","targetText":"danas","supportText":"today"},{"id":"days-item-009","targetText":"sutra","supportText":"tomorrow"},{"id":"days-item-010","targetText":"juče","supportText":"yesterday"}]},{"id":"outabout","month":6,"title":"Out & About","subtitle":"Travel phrases","icon":"Va","color":"#a3e635","items":[{"id":"outabout-item-001","targetText":"Gdje je...?","supportText":"Where is...?"},{"id":"outabout-item-002","targetText":"Koliko košta?","supportText":"How much does it cost?"},{"id":"outabout-item-003","targetText":"Ne razumijem.","supportText":"I don't understand."},{"id":"outabout-item-004","targetText":"Govorite li engleski?","supportText":"Do you speak English?"},{"id":"outabout-item-005","targetText":"Molim vas.","supportText":"Please (formal)"},{"id":"outabout-item-006","targetText":"Izvinite.","supportText":"Excuse me (formal)"},{"id":"outabout-item-007","targetText":"lijevo","supportText":"left"},{"id":"outabout-item-008","targetText":"desno","supportText":"right"},{"id":"outabout-item-009","targetText":"plaža","supportText":"beach"},{"id":"outabout-item-010","targetText":"more","supportText":"sea"}]},{"id":"weather","month":7,"title":"Weather","subtitle":"vrijeme","icon":"We","color":"#7dd3fc","items":[{"id":"weather-item-001","targetText":"sunce","supportText":"sun","emoji":"☀️"},{"id":"weather-item-002","targetText":"kiša","supportText":"rain","emoji":"🌧️"},{"id":"weather-item-003","targetText":"vjetar","supportText":"wind","emoji":"💨"},{"id":"weather-item-004","targetText":"oblačno","supportText":"cloudy","emoji":"☁️"},{"id":"weather-item-005","targetText":"toplo","supportText":"warm"},{"id":"weather-item-006","targetText":"hladno","supportText":"cold","emoji":"🥶"},{"id":"weather-item-007","targetText":"Kakvo je vrijeme?","supportText":"What's the weather like?"},{"id":"weather-item-008","targetText":"Sunčano je.","supportText":"It's sunny."}]},{"id":"emotions","month":7,"title":"Emotions & Feelings","subtitle":"osjećanja","icon":"Em","color":"#f472b6","items":[{"id":"emotions-item-001","targetText":"sretan / sretna","supportText":"happy"},{"id":"emotions-item-002","targetText":"tužan / tužna","supportText":"sad"},{"id":"emotions-item-003","targetText":"umoran / umorna","supportText":"tired"},{"id":"emotions-item-004","targetText":"gladan / gladna","supportText":"hungry"},{"id":"emotions-item-005","targetText":"žedan / žedna","supportText":"thirsty"},{"id":"emotions-item-006","targetText":"uzbuđen / uzbuđena","supportText":"excited"},{"id":"emotions-item-007","targetText":"Kako se osjećaš?","supportText":"How do you feel?"}]},{"id":"house","month":8,"title":"House & Home","subtitle":"kuća","icon":"Ho","color":"#a3e635","items":[{"id":"house-item-001","targetText":"kuća","supportText":"house","emoji":"🏠"},{"id":"house-item-002","targetText":"soba","supportText":"room"},{"id":"house-item-003","targetText":"kuhinja","supportText":"kitchen","emoji":"🍳"},{"id":"house-item-004","targetText":"kupatilo","supportText":"bathroom","emoji":"🚿"},{"id":"house-item-005","targetText":"krevet","supportText":"bed","emoji":"🛏️"},{"id":"house-item-006","targetText":"vrata","supportText":"door","emoji":"🚪"},{"id":"house-item-007","targetText":"prozor","supportText":"window","emoji":"🪟"},{"id":"house-item-008","targetText":"dvorište","supportText":"yard","emoji":"🌳"}]},{"id":"clothes","month":8,"title":"Clothes","subtitle":"odjeća","icon":"Cl","color":"#7dd3fc","items":[{"id":"clothes-item-001","targetText":"majica","supportText":"t-shirt","emoji":"👕"},{"id":"clothes-item-002","targetText":"pantalone","supportText":"pants","emoji":"👖"},{"id":"clothes-item-003","targetText":"haljina","supportText":"dress","emoji":"👗"},{"id":"clothes-item-004","targetText":"cipele","supportText":"shoes","emoji":"👟"},{"id":"clothes-item-005","targetText":"jakna","supportText":"jacket","emoji":"🧥"},{"id":"clothes-item-006","targetText":"kupaći kostim","supportText":"swimsuit","emoji":"🩱"},{"id":"clothes-item-007","targetText":"šešir","supportText":"hat","emoji":"👒"}]},{"id":"body","month":9,"title":"Body & Health","subtitle":"tijelo","icon":"Bd","color":"#f472b6","items":[{"id":"body-item-001","targetText":"glava","supportText":"head"},{"id":"body-item-002","targetText":"ruka","supportText":"hand / arm"},{"id":"body-item-003","targetText":"noga","supportText":"leg / foot"},{"id":"body-item-004","targetText":"stomak","supportText":"stomach"},{"id":"body-item-005","targetText":"Boli me glava.","supportText":"My head hurts."},{"id":"body-item-006","targetText":"Dobro sam.","supportText":"I'm fine."}]},{"id":"shopping","month":9,"title":"Shopping","subtitle":"kupovina","icon":"Sh","color":"#a3e635","items":[{"id":"shopping-item-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?"},{"id":"shopping-item-002","targetText":"Koliko košta ovo?","supportText":"How much is this?"},{"id":"shopping-item-003","targetText":"Hoću da kupim...","supportText":"I want to buy..."},{"id":"shopping-item-004","targetText":"Imate li...?","supportText":"Do you have...?"},{"id":"shopping-item-005","targetText":"Samo gledam.","supportText":"I'm just looking."},{"id":"shopping-item-006","targetText":"skupo","supportText":"expensive"},{"id":"shopping-item-007","targetText":"jeftino","supportText":"cheap"}],"dialogue":{"roles":["Shopkeeper","You"],"lines":[{"id":"shopping-dialogue-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?","role":"Shopkeeper"},{"id":"shopping-dialogue-002","targetText":"Koliko košta ovo?","supportText":"How much is this?","role":"You"},{"id":"shopping-dialogue-003","targetText":"Deset eura.","supportText":"Ten euros.","role":"Shopkeeper"},{"id":"shopping-dialogue-004","targetText":"To je malo skupo. Sedam?","supportText":"That's a bit expensive. Seven?","role":"You"},{"id":"shopping-dialogue-005","targetText":"Dobro, sedam.","supportText":"Okay, seven.","role":"Shopkeeper"},{"id":"shopping-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"You"}]}},{"id":"directions","month":10,"title":"Directions & Places","subtitle":"pravci","icon":"Di","color":"#7dd3fc","items":[{"id":"directions-item-001","targetText":"prodavnica","supportText":"store"},{"id":"directions-item-002","targetText":"banka","supportText":"bank"},{"id":"directions-item-003","targetText":"bolnica","supportText":"hospital"},{"id":"directions-item-004","targetText":"blizu","supportText":"near"},{"id":"directions-item-005","targetText":"daleko","supportText":"far"},{"id":"directions-item-006","targetText":"Idi pravo.","supportText":"Go straight."},{"id":"directions-item-007","targetText":"Skreni lijevo.","supportText":"Turn left."},{"id":"directions-item-008","targetText":"Skreni desno.","supportText":"Turn right."}]},{"id":"beach","month":10,"title":"Beach & Summer","subtitle":"plaža i ljeto","icon":"Bc","color":"#f472b6","items":[{"id":"beach-item-001","targetText":"pijesak","supportText":"sand"},{"id":"beach-item-002","targetText":"talas","supportText":"wave"},{"id":"beach-item-003","targetText":"kupanje","supportText":"swimming"},{"id":"beach-item-004","targetText":"peškir","supportText":"towel"},{"id":"beach-item-005","targetText":"sunčane naočare","supportText":"sunglasses"},{"id":"beach-item-006","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!"}],"dialogue":{"roles":["Friend","You"],"lines":[{"id":"beach-dialogue-001","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!","role":"Friend"},{"id":"beach-dialogue-002","targetText":"Odlično! Gdje su moje naočare?","supportText":"Great! Where are my sunglasses?","role":"You"},{"id":"beach-dialogue-003","targetText":"Evo ih, na peškiru.","supportText":"Here they are, on the towel.","role":"Friend"},{"id":"beach-dialogue-004","targetText":"Hvala! Je li voda hladna?","supportText":"Thanks! Is the water cold?","role":"You"},{"id":"beach-dialogue-005","targetText":"Ne, topla je!","supportText":"No, it's warm!","role":"Friend"}]}},{"id":"time","month":11,"title":"Telling Time","subtitle":"sati","icon":"Tm","color":"#a3e635","items":[{"id":"time-item-001","targetText":"Koliko je sati?","supportText":"What time is it?"},{"id":"time-item-002","targetText":"sat","supportText":"hour / o'clock"},{"id":"time-item-003","targetText":"minut","supportText":"minute"},{"id":"time-item-004","targetText":"podne","supportText":"noon"},{"id":"time-item-005","targetText":"ponoć","supportText":"midnight"},{"id":"time-item-006","targetText":"rano","supportText":"early"},{"id":"time-item-007","targetText":"kasno","supportText":"late"}]},{"id":"hobbies","month":11,"title":"Hobbies","subtitle":"hobiji","icon":"Hb","color":"#7dd3fc","items":[{"id":"hobbies-item-001","targetText":"plivati","supportText":"to swim","emoji":"🏊"},{"id":"hobbies-item-002","targetText":"čitati","supportText":"to read","emoji":"📖"},{"id":"hobbies-item-003","targetText":"igrati fudbal","supportText":"to play soccer","emoji":"⚽"},{"id":"hobbies-item-004","targetText":"slušati muziku","supportText":"to listen to music","emoji":"🎧"},{"id":"hobbies-item-005","targetText":"crtati","supportText":"to draw","emoji":"🎨"},{"id":"hobbies-item-006","targetText":"Šta voliš da radiš?","supportText":"What do you like to do?"}]},{"id":"travel","month":12,"title":"Travel Essentials","subtitle":"putovanje","icon":"Tr","color":"#f472b6","items":[{"id":"travel-item-001","targetText":"aerodrom","supportText":"airport","emoji":"✈️"},{"id":"travel-item-002","targetText":"pasoš","supportText":"passport","emoji":"🛂"},{"id":"travel-item-003","targetText":"kofer","supportText":"suitcase","emoji":"🧳"},{"id":"travel-item-004","targetText":"avion","supportText":"plane","emoji":"✈️"},{"id":"travel-item-005","targetText":"karta","supportText":"ticket","emoji":"🎫"},{"id":"travel-item-006","targetText":"Idemo u Crnu Goru!","supportText":"We're going to Montenegro!"}]},{"id":"capstone","month":12,"title":"Arriving in Montenegro","subtitle":"Put it all together","icon":"MG","color":"#a3e635","items":[{"id":"capstone-item-001","targetText":"Dobro došli!","supportText":"Welcome!"},{"id":"capstone-item-002","targetText":"Prijatan boravak.","supportText":"Enjoy your stay."},{"id":"capstone-item-003","targetText":"Jedva čekam.","supportText":"I can't wait."},{"id":"capstone-item-004","targetText":"Napokon smo ovdje!","supportText":"We're finally here!"}],"dialogue":{"roles":["Agent","You"],"lines":[{"id":"capstone-dialogue-001","targetText":"Dobro došli u Crnu Goru! Pasoš, molim.","supportText":"Welcome to Montenegro! Passport, please.","role":"Agent"},{"id":"capstone-dialogue-002","targetText":"Izvolite.","supportText":"Here you go.","role":"You"},{"id":"capstone-dialogue-003","targetText":"Hvala. Prijatan boravak!","supportText":"Thank you. Enjoy your stay!","role":"Agent"},{"id":"capstone-dialogue-004","targetText":"Hvala! Jedva čekam da vidim porodicu.","supportText":"Thank you! I can't wait to see my family.","role":"You"}]}},{"id":"verbs1","title":"Verbs: To Be & To Have","subtitle":"biti, imati","icon":"V1","color":"#7dd3fc","items":[{"id":"verbs1-item-001","targetText":"ja sam","supportText":"I am"},{"id":"verbs1-item-002","targetText":"ti si","supportText":"you are"},{"id":"verbs1-item-003","targetText":"on/ona je","supportText":"he/she is"},{"id":"verbs1-item-004","targetText":"mi smo","supportText":"we are"},{"id":"verbs1-item-005","targetText":"oni su","supportText":"they are"},{"id":"verbs1-item-006","targetText":"ja imam","supportText":"I have"},{"id":"verbs1-item-007","targetText":"ti imaš","supportText":"you have"},{"id":"verbs1-item-008","targetText":"mi imamo","supportText":"we have"}]},{"id":"adjectives","title":"Describing Things","subtitle":"pridjevi","icon":"Ad","color":"#f472b6","items":[{"id":"adjectives-item-001","targetText":"velik / velika","supportText":"big"},{"id":"adjectives-item-002","targetText":"mali / mala","supportText":"small"},{"id":"adjectives-item-003","targetText":"lijep / lijepa","supportText":"beautiful"},{"id":"adjectives-item-004","targetText":"ružan / ružna","supportText":"ugly"},{"id":"adjectives-item-005","targetText":"dobar / dobra","supportText":"good"},{"id":"adjectives-item-006","targetText":"loš / loša","supportText":"bad"},{"id":"adjectives-item-007","targetText":"nov / nova","supportText":"new"},{"id":"adjectives-item-008","targetText":"star / stara","supportText":"old"}]},{"id":"questionwords","title":"Question Words","subtitle":"šta, ko, gdje...","icon":"Qw","color":"#a3e635","items":[{"id":"questionwords-item-001","targetText":"šta","supportText":"what"},{"id":"questionwords-item-002","targetText":"ko","supportText":"who"},{"id":"questionwords-item-003","targetText":"gdje","supportText":"where"},{"id":"questionwords-item-004","targetText":"kada","supportText":"when"},{"id":"questionwords-item-005","targetText":"zašto","supportText":"why"},{"id":"questionwords-item-006","targetText":"kako","supportText":"how"},{"id":"questionwords-item-007","targetText":"koji / koja","supportText":"which"}]},{"id":"plans","title":"Making Plans","subtitle":"Hoćeš li..., Vidimo se!","icon":"Pl","color":"#7dd3fc","items":[{"id":"plans-item-001","targetText":"Hoćeš li...?","supportText":"Do you want to...?"},{"id":"plans-item-002","targetText":"Možemo li...?","supportText":"Can we...?"},{"id":"plans-item-003","targetText":"Kada se vidimo?","supportText":"When do we meet?"},{"id":"plans-item-004","targetText":"Vidimo se sutra.","supportText":"See you tomorrow."},{"id":"plans-item-005","targetText":"Dogovoreno!","supportText":"It's a deal! / Agreed!"}]},{"id":"smalltalk","title":"Small Talk","subtitle":"Getting to know people","icon":"St","color":"#f472b6","items":[{"id":"smalltalk-item-001","targetText":"Šta radiš?","supportText":"What are you doing?"},{"id":"smalltalk-item-002","targetText":"Odakle si?","supportText":"Where are you from?"},{"id":"smalltalk-item-003","targetText":"Koliko dugo si ovdje?","supportText":"How long have you been here?"},{"id":"smalltalk-item-004","targetText":"Sviđa mi se Crna Gora.","supportText":"I like Montenegro."},{"id":"smalltalk-item-005","targetText":"Ovo mi je prvi put ovdje.","supportText":"This is my first time here."}]},{"id":"pasttense","title":"Talking About the Past","subtitle":"bio sam, jučer...","icon":"Pt","color":"#a3e635","items":[{"id":"pasttense-item-001","targetText":"bio sam / bila sam","supportText":"I was"},{"id":"pasttense-item-002","targetText":"Jučer sam...","supportText":"Yesterday I..."},{"id":"pasttense-item-003","targetText":"Prošle godine...","supportText":"Last year..."},{"id":"pasttense-item-004","targetText":"Bilo je zabavno!","supportText":"It was fun!"},{"id":"pasttense-item-005","targetText":"Vidio sam / Vidjela sam","supportText":"I saw"}]},{"id":"futuretense","title":"Talking About the Future","subtitle":"sutra ću, sledeće godine...","icon":"Ft","color":"#7dd3fc","items":[{"id":"futuretense-item-001","targetText":"Sutra ću...","supportText":"Tomorrow I will..."},{"id":"futuretense-item-002","targetText":"Sledeće godine ćemo...","supportText":"Next year we will..."},{"id":"futuretense-item-003","targetText":"Vidjećemo se opet.","supportText":"We'll see each other again."},{"id":"futuretense-item-004","targetText":"Jedva čekam ljeto.","supportText":"I can't wait for summer."}]},{"id":"restaurant","title":"At a Restaurant","subtitle":"Beyond the café","icon":"Rs","color":"#f472b6","items":[{"id":"restaurant-item-001","targetText":"meni","supportText":"menu"},{"id":"restaurant-item-002","targetText":"konobar / konobarica","supportText":"waiter / waitress"},{"id":"restaurant-item-003","targetText":"Preporučujete li nešto?","supportText":"Do you recommend something?"},{"id":"restaurant-item-004","targetText":"Za piće?","supportText":"For drinks?"},{"id":"restaurant-item-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!"},{"id":"restaurant-item-006","targetText":"Bilo je ukusno.","supportText":"It was delicious."}],"dialogue":{"roles":["Waiter","You"],"lines":[{"id":"restaurant-dialogue-001","targetText":"Dobro veče! Izvolite meni.","supportText":"Good evening! Here is the menu.","role":"Waiter"},{"id":"restaurant-dialogue-002","targetText":"Hvala. Preporučujete li nešto?","supportText":"Thanks. Do you recommend something?","role":"You"},{"id":"restaurant-dialogue-003","targetText":"Riba je odlična danas.","supportText":"The fish is excellent today.","role":"Waiter"},{"id":"restaurant-dialogue-004","targetText":"Dobro, hoću ribu, molim.","supportText":"Okay, I'll have the fish, please.","role":"You"},{"id":"restaurant-dialogue-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!","role":"Waiter"},{"id":"restaurant-dialogue-006","targetText":"Hvala, bilo je ukusno!","supportText":"Thanks, it was delicious!","role":"You"}]}},{"id":"gathering","title":"Family Gathering","subtitle":"A full conversation at the table","icon":"Fg","color":"#a3e635","items":[{"id":"gathering-item-001","targetText":"Sjedi ovdje.","supportText":"Sit here."},{"id":"gathering-item-002","targetText":"Poslužite se.","supportText":"Help yourselves."},{"id":"gathering-item-003","targetText":"Živjeli!","supportText":"Cheers!"},{"id":"gathering-item-004","targetText":"Hvala na ručku.","supportText":"Thank you for lunch."},{"id":"gathering-item-005","targetText":"Bilo je divno vidjeti vas.","supportText":"It was wonderful to see you."}],"dialogue":{"roles":["Baka","You"],"lines":[{"id":"gathering-dialogue-001","targetText":"Sjedi ovdje, dijete. Poslužite se!","supportText":"Sit here, child. Help yourselves!","role":"Baka"},{"id":"gathering-dialogue-002","targetText":"Hvala, bako! Miriše odlično.","supportText":"Thanks, grandma! It smells great.","role":"You"},{"id":"gathering-dialogue-003","targetText":"Živjeli!","supportText":"Cheers!","role":"Baka"},{"id":"gathering-dialogue-004","targetText":"Živjeli! Hvala na ručku, bilo je divno.","supportText":"Cheers! Thank you for lunch, it was wonderful.","role":"You"}]}}]`),Qe=[{id:"alphabet",title:"Alphabet",subtitle:"Latin & Cyrillic letters",icon:"Aa",color:"#7dd3fc",items:[{id:"alphabet-item-001",targetText:"A a",supportText:'Cyrillic: А а — "ah", as in auto (car)'},{id:"alphabet-item-002",targetText:"B b",supportText:'Cyrillic: Б б — "b", as in brat (brother)'},{id:"alphabet-item-003",targetText:"C c",supportText:'Cyrillic: Ц ц — "ts", as in cvijet (flower)'},{id:"alphabet-item-004",targetText:"Č č",supportText:'Cyrillic: Ч ч — hard "ch", as in čokolada'},{id:"alphabet-item-005",targetText:"Ć ć",supportText:'Cyrillic: Ћ ћ — soft "ch", as in ćevapi'},{id:"alphabet-item-006",targetText:"D d",supportText:'Cyrillic: Д д — "d", as in dijete'},{id:"alphabet-item-007",targetText:"Đ đ",supportText:'Cyrillic: Ђ ђ — soft "j", as in đak'},{id:"alphabet-item-008",targetText:"Dž dž",supportText:'Cyrillic: Џ џ — hard "j", as in džak'},{id:"alphabet-item-009",targetText:"Lj lj",supportText:'Cyrillic: Љ љ — "ly", as in ljubav'},{id:"alphabet-item-010",targetText:"Nj nj",supportText:'Cyrillic: Њ њ — "ny", as in njiva'},{id:"alphabet-item-011",targetText:"Š š",supportText:'Cyrillic: Ш ш — "sh", as in šuma'},{id:"alphabet-item-012",targetText:"Ž ž",supportText:'Cyrillic: Ж ж — "zh", as in žena'}]}],ce={languagePack:Ye,curriculum:Ke,topics:Je,bonusTopics:Qe},Ze=[["family","Family","People in your family",[["familja","family"],["nëna","mother"],["babai","father"],["motra","sister"],["vëllai","brother"]]],["greetings","Greetings","Say hello and introduce yourself",[["Përshëndetje!","Hello!"],["Mirëmëngjes!","Good morning!"],["Mirëmbrëma!","Good evening!"],["Si je?","How are you?"],["Mirupafshim!","Goodbye!"]]],["numbers","Numbers","Start counting",[["një","one"],["dy","two"],["tre","three"],["katër","four"],["pesë","five"]]],["colors","Colors","Describe colors",[["i kuq","red"],["blu","blue"],["i gjelbër","green"],["i verdhë","yellow"],["i zi","black"]]],["drinks","Drinks","Everyday drinks",[["ujë","water"],["kafe","coffee"],["çaj","tea"],["qumësht","milk"],["lëng","juice"]]],["food","Food","Everyday foods",[["bukë","bread"],["djathë","cheese"],["mish","meat"],["peshk","fish"],["fruta","fruit"]]],["veg","Vegetables & Market","Shop at the market",[["domate","tomato"],["kastravec","cucumber"],["patate","potato"],["qepë","onion"],["spec","pepper"]]],["cafe","At a Café","Order politely",[["Një kafe, ju lutem.","A coffee, please."],["A keni çaj?","Do you have tea?"],["Pa sheqer.","Without sugar."],["Sa kushton?","How much is it?"],["Faturën, ju lutem.","The bill, please."]]],["talkfamily","Talking About Family","Describe your family",[["Kjo është familja ime.","This is my family."],["Kam një motër.","I have a sister."],["Kam një vëlla.","I have a brother."],["Nëna ime quhet Ana.","My mother is named Ana."],["Ne jetojmë bashkë.","We live together."]]],["aboutme","About Me","Simple sentences about yourself",[["Unë quhem Lena.","My name is Lena."],["Jam trembëdhjetë vjeç.","I am thirteen years old."],["Jetoj në Amerikë.","I live in America."],["Më pëlqen muzika.","I like music."],["Po mësoj shqip.","I am learning Albanian."]]],["days","Days & Time","Days of the week",[["e hënë","Monday"],["e martë","Tuesday"],["e mërkurë","Wednesday"],["e enjte","Thursday"],["e premte","Friday"]]],["outabout","Out & About","Useful phrases away from home",[["Ku është banja?","Where is the bathroom?"],["Nuk e kuptoj.","I do not understand."],["Flisni anglisht?","Do you speak English?"],["Më ndihmoni, ju lutem.","Please help me."],["Faleminderit shumë.","Thank you very much."]]],["weather","Weather","Talk about the weather",[["Është ngrohtë.","It is warm."],["Është ftohtë.","It is cold."],["Po bie shi.","It is raining."],["Ka diell.","It is sunny."],["Fryn erë.","It is windy."]]],["emotions","Emotions & Feelings","Say how you feel",[["Jam i lumtur.","I am happy."],["Jam e lodhur.","I am tired."],["Jam i trishtuar.","I am sad."],["Kam frikë.","I am afraid."],["Jam mirë.","I am well."]]],["house","House & Home","Things around the home",[["shtëpi","house"],["dhomë","room"],["kuzhinë","kitchen"],["derë","door"],["dritare","window"]]],["clothes","Clothes","What people wear",[["këmishë","shirt"],["pantallona","trousers"],["fustan","dress"],["këpucë","shoes"],["xhaketë","jacket"]]],["body","Body & Health","Body and basic health",[["kokë","head"],["dorë","hand"],["këmbë","leg"],["Më dhemb koka.","My head hurts."],["Kam nevojë për një mjek.","I need a doctor."]]],["shopping","Shopping","Buy what you need",[["Dua këtë.","I want this."],["Sa kushton kjo?","How much does this cost?"],["Është shumë shtrenjtë.","It is too expensive."],["A keni një madhësi tjetër?","Do you have another size?"],["Do të paguaj me kartë.","I will pay by card."]]],["directions","Directions & Places","Find your way",[["majtas","left"],["djathtas","right"],["drejt","straight ahead"],["afër","near"],["larg","far"]]],["beach","Beach & Summer","Enjoy a summer day",[["det","sea"],["plazh","beach"],["diell","sun"],["not","swimming"],["krem kundër diellit","sunscreen"]]],["time","Telling Time","Ask and tell the time",[["Sa është ora?","What time is it?"],["Është ora një.","It is one o’clock."],["Është mesditë.","It is noon."],["në mëngjes","in the morning"],["në mbrëmje","in the evening"]]],["hobbies","Hobbies","Talk about free time",[["Më pëlqen të lexoj.","I like to read."],["Më pëlqen muzika.","I like music."],["Luaj futboll.","I play soccer."],["Noton.","He or she swims."],["Vizatoj.","I draw."]]],["travel","Travel Essentials","Move around confidently",[["aeroport","airport"],["stacion","station"],["biletë","ticket"],["pasaportë","passport"],["Ku është hoteli?","Where is the hotel?"]]],["capstone","Putting It Together","Use language in a full day",[["Sapo mbërritëm.","We just arrived."],["Gëzohem që ju takoj.","Nice to meet you."],["Ku do të shkojmë?","Where will we go?"],["Jam gati.","I am ready."],["Ishte një ditë e bukur.","It was a beautiful day."]]],["verbs1","Verbs: To Be & To Have","Core sentence building",[["jam","I am"],["je","you are"],["është","he, she, or it is"],["kam","I have"],["ke","you have"]]],["adjectives","Describing Things","Useful descriptions",[["i madh","big"],["i vogël","small"],["i mirë","good"],["i bukur","beautiful"],["i ri","new"]]],["questionwords","Question Words","Ask useful questions",[["kush","who"],["çfarë","what"],["ku","where"],["kur","when"],["pse","why"]]],["plans","Making Plans","Arrange time together",[["Çfarë do të bëjmë?","What will we do?"],["A do të vish?","Will you come?"],["Shihemi nesër.","See you tomorrow."],["Në çfarë ore?","At what time?"],["Ide e mirë!","Good idea!"]]],["smalltalk","Small Talk","Get to know people",[["Nga je?","Where are you from?"],["Si po kalon?","How is it going?"],["Çfarë të pëlqen?","What do you like?"],["Sa kohë do të rrish?","How long will you stay?"],["Edhe mua.","Me too."]]],["pasttense","Talking About the Past","Share what happened",[["Isha në shtëpi.","I was at home."],["Kisha kohë.","I had time."],["Shkova në qytet.","I went to town."],["Hëngra mëngjes.","I ate breakfast."],["Dje ishte bukur.","Yesterday was nice."]]],["futuretense","Talking About the Future","Say what will happen",[["Do të vij nesër.","I will come tomorrow."],["Do të shkojmë në plazh.","We will go to the beach."],["Do të hamë bashkë.","We will eat together."],["Do të të telefonoj.","I will call you."],["Shihemi javën tjetër.","See you next week."]]],["restaurant","At a Restaurant","Order a full meal",[["Një tavolinë për katër veta.","A table for four."],["Çfarë rekomandoni?","What do you recommend?"],["Do të marr peshkun.","I will have the fish."],["Pa mish, ju lutem.","Without meat, please."],["Ishte shumë e shijshme.","It was very delicious."]]],["gathering","Family Gathering","Talk around the table",[["Mirë se erdhët!","Welcome!"],["Uluni, ju lutem.","Please sit down."],["Si është familja?","How is the family?"],["Gëzuar!","Cheers!"],["Faleminderit për darkën.","Thank you for dinner."]]],["alphabet","Albanian Alphabet","Distinctive Albanian letters",[["ë","ë — a central vowel"],["ç","ç — like ch in chair"],["dh","dh — like th in this"],["gj","gj — a soft palatal sound"],["ll","ll — a strong l sound"]]]],ze={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},Xe=new Map(ze.months.flatMap((e,t)=>e.map(i=>[i,t+1]))),ye=["#7dd3fc","#f472b6","#a3e635"],be=Ze.map(([e,t,i,o])=>{const a=Xe.get(e)||10;return{id:e,month:a,bucket:a-1,title:t,subtitle:i,icon:e.slice(0,2).toUpperCase(),color:ye[(a-1)%ye.length],note:"Standard Albanian draft for fluent family review.",items:o.map(([r,s],l)=>({id:`${e}-sq-${String(l+1).padStart(3,"0")}`,targetText:r,supportText:s,reviewStatus:"draft"}))}}),Te={languagePack:{id:"albanian-en",targetLanguage:{code:"sq",name:"Albanian",scripts:["Latn"]},supportLanguage:{code:"en",name:"English"},version:"0.1.0",status:"review"},curriculum:ze,topics:be.filter(e=>e.id!=="alphabet"),bonusTopics:be.filter(e=>e.id==="alphabet")},De=new Map([[ce.languagePack.id,ce],[Te.languagePack.id,Te]]);let I=ce,T=I.languagePack,O=I.topics,re=I.bonusTopics,_e=[...O,...re];const et=["Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"],de=new Date(2026,7,10);let W=I.curriculum.months,Pe=I.curriculum.extras,Ce=new Map(W.flatMap((e,t)=>e.map(i=>[i,t+1])));const ke=[{type:"discover",name:"Discover",detail:"Meet new words and hear them aloud"},{type:"recall",name:"Recall",detail:"Bring yesterday’s language back"},{type:"build",name:"Build",detail:"Put words into useful patterns"},{type:"use",name:"Use",detail:"Speak, listen, and role-play"},{type:"checkpoint",name:"Checkpoint",detail:"Show what you remember"}];function tt(){return[...De.values()].map(e=>e.languagePack)}function it(e){const t=De.get(e);if(!t)throw new Error(`Unknown language pack: ${e}`);I=t,T=I.languagePack,O=I.topics,re=I.bonusTopics,_e=[...O,...re],W=I.curriculum.months,Pe=I.curriculum.extras,Ce=new Map(W.flatMap((i,o)=>i.map(a=>[a,o+1]))),S=Ae()}function we(){return O}function at(){return re}function ot(){return W.flat().map(L).filter(Boolean)}function rt(){return Pe.map(L).filter(Boolean)}function st(e){return Ce.get(e)||null}function L(e){return _e.find(t=>t.id===e)}function Ae(){const e=[];let t=1;for(let i=0;i<10;i++){const o=W[i].map(L);for(let a=0;a<4;a++){const r=i*4+a+1;if(a<3){const s=o[a];for(let l=0;l<5;l++){const c=ke[l];e.push({id:`voyage-${t}`,number:t,month:i,week:r,dayOfWeek:l+1,topicId:s.id,type:c.type,title:`${s.title}: ${c.name}`,detail:c.detail}),t++}}else for(let s=0;s<5;s++){const l=ke[s];e.push({id:`voyage-${t}`,number:t,month:i,week:r,dayOfWeek:s+1,topicId:null,type:`integration-${l.type}`,title:`Integration: ${l.name}`,detail:`Review topics from Month ${i+1}`}),t++}}}return e}let S=Ae();function C(e){const t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function A(e){const t=e.slice();for(let i=t.length-1;i>0;i--){const o=Math.floor(Math.random()*(i+1));[t[i],t[o]]=[t[o],t[i]]}return t}function G(e,t=6){const i=Math.min(t,e.length),o=A(e).slice(0,i),a=[];return o.forEach((r,s)=>{a.push({id:`target-${s}`,pairId:s,text:r.targetText,kind:"target"}),a.push({id:`support-${s}`,pairId:s,text:r.supportText,kind:"support"})}),{tiles:A(a),selectedIds:[],matchedIds:[]}}function P(e,t=8){const i=Math.min(t,e.length);return{questions:A(e).slice(0,i).map(r=>{const s=e.filter(d=>d.targetText!==r.targetText),l=A(s).slice(0,Math.min(3,s.length)),c=A([r.targetText,...l.map(d=>d.targetText)]);return{promptText:r.supportText,correctAnswer:r.targetText,options:c}}),qIdx:0,score:0,selected:null,answered:!1}}function nt(e,t){const i=[];if(e.topicId){const o=L(e.topicId),a=O[O.indexOf(o)-1]||null;a&&i.push({type:"warmup",title:"Warmup",subtitle:`Quick practice from ${a.title}`,items:a.items.slice(0,5)}),e.type==="discover"?(i.push({type:"discover",title:"New Vocabulary",subtitle:`Discover words for ${o.title}`,items:o.items}),i.push({type:"match",title:"Recall Match",subtitle:"Connect the translations",match:G(o.items,4)})):e.type==="recall"?(i.push({type:"recall-flash",title:"Vocabulary Recall",subtitle:"Self-assess your memory",items:A(o.items)}),i.push({type:"quiz",title:"Quick Quiz",subtitle:"Test your understanding",quiz:P(o.items,5)})):e.type==="build"?(i.push({type:"note",title:"Sentence Pattern",subtitle:"How sentences are structured",note:o.note||"Practice assembling phrases in this topic."}),i.push({type:"quiz",title:"Pattern Practice",subtitle:"Complete the sentences correctly",quiz:P(o.items,6)})):e.type==="use"?o.dialogue?i.push({type:"dialogue",title:"Dialogue Practice",subtitle:"Read the roles out loud",dialogue:o.dialogue}):i.push({type:"listen",title:"Listen & Repeat",subtitle:"Practice your pronunciation",items:o.items}):e.type==="checkpoint"&&(i.push({type:"quiz",title:"Topic Quiz",subtitle:"Show what you remember",quiz:P(o.items,8)}),i.push({type:"match",title:"Vocabulary Match",subtitle:"Match all pairs to complete the topic",match:G(o.items,6)}))}else{const a=W[e.month].map(L).flatMap(r=>r.items);i.push({type:"quiz",title:"Integration Quiz",subtitle:`Review from Month ${e.month+1}`,quiz:P(a,8)}),i.push({type:"match",title:"Integration Match",subtitle:"Connect the words quickly",match:G(a,8)})}return i.push({type:"done",title:"Completed!",subtitle:"Awesome job!"}),i}const X=null;async function lt(){{alert("Supabase credentials are not configured in your environment variables. Please check the .env file.");return}}async function $e(){}let se=T.id,fe=T.version;function dt(){se=T.id,fe=T.version}function ct(e){return localStorage.getItem(`nautilus:${e}:active-pack`)||"montenegrin-en"}function pt(e,t){localStorage.setItem(`nautilus:${e}:active-pack`,t)}function R(e,t,i=se){return`nautilus:${i}:${e}:${t}`}function ut(e,t){return{stars:`mn_${e}_stars`,topics:`mn_${e}_completed`,lessons:`mn_${e}_voyage_lessons`,activity:`mn_${e}_activity_dates`,dialogues:`mn_${e}_dialogues`}[t]}function J(e,t,i){const o=R(e,t),a=localStorage.getItem(o);if(a!==null)return a;const r=ut(e,t),s=r?localStorage.getItem(r):null;return s!==null?(localStorage.setItem(o,s),s):i}function B(){const e=localStorage.getItem("mn_profiles");if(e)try{return JSON.parse(e).map(i=>String(i.id).startsWith("local-")?i:{...i,isGuide:!1})}catch{}return[]}function mt(e){localStorage.setItem("mn_profiles",JSON.stringify(e))}function gt(){return localStorage.getItem("mn_active_profile")||null}function ht(e){e?localStorage.setItem("mn_active_profile",e):localStorage.removeItem("mn_active_profile")}function N(e){if(!e)return null;const i=B().find(d=>d.name===e)||{id:`local-${e}`,isGuide:!1},o=parseInt(J(e,"stars","0"),10)||0;let a=[];try{a=JSON.parse(J(e,"topics","[]"))}catch{}let r=[];try{r=JSON.parse(J(e,"lessons","[]"))}catch{}let s=[];try{s=JSON.parse(J(e,"activity","[]"))}catch{}const l=parseInt(J(e,"dialogues","0"),10)||0,c=xt(s);return{id:i.id,profile:e,stars:o,streakDays:c,completedTopicIds:a,completedLessons:r,activityDates:s,dialoguesDone:l,isGuide:i.isGuide,packId:se,packVersion:fe}}function xt(e){if(!e||e.length===0)return 0;const t=new Set(e);let i=0,o=new Date;o.setHours(0,0,0,0);const a=C(o);o.setDate(o.getDate()-1);const r=C(o);if(!t.has(a)&&!t.has(r))return 0;let s=t.has(a)?new Date:o;for(s.setHours(0,0,0,0);t.has(C(s));)i++,s.setDate(s.getDate()-1);return i}function ft(e,t){localStorage.setItem(R(e,"stars"),String(t))}function vt(e,t){localStorage.setItem(R(e,"topics"),JSON.stringify(t))}function yt(e,t){localStorage.setItem(R(e,"lessons"),JSON.stringify(t))}function bt(e,t){localStorage.setItem(R(e,"activity"),JSON.stringify(t))}function Tt(e,t){localStorage.setItem(R(e,"dialogues"),String(t))}function kt(e,t){const i=N(e);if(i.isGuide)return;const o=i.stars+t;ft(e,o),He(e),ee(i.id,"awardStars",{name:e,stars:o})}function He(e){const t=N(e);if(t.isGuide)return;const i=C(new Date);if(!t.activityDates.includes(i)){const o=[...t.activityDates,i];bt(e,o),ee(t.id,"recordActivity",{name:e,dateKey:i})}}function wt(e,t){const i=N(e);if(!i.isGuide&&!i.completedLessons.includes(t)){const o=[...i.completedLessons,t];yt(e,o),He(e),ee(i.id,"completeLesson",{name:e,lessonId:t})}}function Se(e,t){const i=N(e);if(!i.isGuide&&!i.completedTopicIds.includes(t)){const o=[...i.completedTopicIds,t];vt(e,o),ee(i.id,"completeTopic",{name:e,topicId:t})}}function $t(e){const t=N(e);if(t.isGuide)return;const i=t.dialoguesDone+1;Tt(e,i),ee(t.id,"incrementDialogues",{name:e,dialoguesDone:i})}function St(){return B().filter(i=>!i.isGuide).map(i=>{const o=N(i.name);return{name:i.name,stars:o.stars,streak:o.streakDays,completed:o.completedTopicIds.length}})}async function je(e,t){const i=B();if(i.some(o=>o.name.toLowerCase()===e.toLowerCase()))throw new Error("Profile name already exists");{const o=`local-${e}`,a=[...i,{id:o,name:e,isGuide:t}];mt(a)}}function jt(){try{return JSON.parse(localStorage.getItem("mn_sync_queue")||"[]")}catch{return[]}}function It(e){localStorage.setItem("mn_sync_queue",JSON.stringify(e))}function ee(e,t,i){var r,s;if(String(e).startsWith("local-"))return;const o=jt(),a=((s=(r=globalThis.crypto)==null?void 0:r.randomUUID)==null?void 0:s.call(r))||`${Date.now()}-${Math.random().toString(16).slice(2)}`;o.push({operationId:a,profileId:e,packId:se,packVersion:fe,type:t,payload:i,timestamp:Date.now()}),It(o),Ne()}async function Ne(){}async function Ie(){}function te(){throw new Error("Family cloud features are not configured.")}async function Lt(){te();const{data:e,error:t}=await X.from("family_memberships").select("family_id, role, joined_at, families(id, name, learners_can_invite)").order("joined_at",{ascending:!0});if(t)throw t;return e||[]}async function qt(e){te();const{data:t,error:i}=await X.rpc("get_family_overview",{target_family:e});if(i)throw i;return t}async function Et(e){te();const t=e.trim();if(!t)throw new Error("Family name is required.");const{data:i,error:o}=await X.rpc("create_family",{family_name:t});if(o)throw o;return i}async function Mt(e,t,i="learner"){te();const o=t.trim().toLowerCase();if(!o)throw new Error("Invitation email is required.");const{data:a,error:r}=await X.rpc("create_family_invitation",{target_family:e,invite_email:o,invite_role:i});if(r)throw r;return a}async function zt(e,t){te();const i=t.trim().toLowerCase();if(!i)throw new Error("Learner email is required.");const{data:o,error:a}=await X.rpc("create_learner_profile_invitation",{target_profile:e,invite_email:i});if(a)throw a;return o}function Dt(e,t,i){var j,k,F,U;const a=B(),r=a.filter(g=>!g.isGuide),s=a.filter(g=>g.isGuide),l=(j=t.families)==null?void 0:j.some(g=>g.role==="owner"||g.role==="adult_guide"),c=`<div style="text-align: center; font-size: 12px; color: var(--text-muted); margin-bottom: 24px; border: 1px dashed var(--border-color); padding: 8px; border-radius: 8px;">
         ⚠️ Supabase is not configured (Local-Only Mode active)
       </div>`,d=t.sessionUser&&Array.isArray(t.families)&&t.families.length===0,u=t.sessionUser&&t.families===null&&!t.familyError;if(u||d){e.innerHTML=`
      <div class="profile-selection">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 16px; text-align: center;">
          <div class="logo-icon" style="width: 56px; height: 56px; font-size: 20px;">N</div>
          <h1 style="font-size: 32px; letter-spacing: -0.5px;">${u?"Loading your family…":"Create your family"}</h1>
          ${d?'<p style="color: var(--text-muted); font-size: 16px; max-width: 440px;">Your family workspace keeps learners, progress, and language preferences together.</p>':""}
        </div>
        <div style="width: 100%; max-width: 480px;">
          ${c}
          ${t.familyError?`<p role="alert" style="color: var(--pink); margin-bottom: 16px;">${t.familyError}</p>`:""}
          ${d?`
            <form id="family-setup-form" style="display: flex; flex-direction: column; gap: 12px;">
              <label for="family-name" style="font-weight: 700;">Family name</label>
              <input id="family-name" required maxlength="80" autocomplete="organization" placeholder="Your family name" style="min-height: 48px; border-radius: 12px; border: 1px solid var(--border-color); background: var(--surface); color: var(--text-main); padding: 0 14px; font: inherit;">
              <button class="btn btn-primary" type="submit">Create Family Workspace</button>
            </form>`:""}
        </div>
      </div>`,(k=e.querySelector("#family-setup-form"))==null||k.addEventListener("submit",async g=>{g.preventDefault();const v=e.querySelector("#family-name").value.trim();v&&await i.createFamily(v)}),(F=e.querySelector("#logout-btn"))==null||F.addEventListener("click",async()=>{await $e(),i.refresh()});return}e.innerHTML=`
    <div class="profile-selection">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <div class="logo-icon" style="width: 56px; height: 56px; font-size: 20px;">N</div>
        <h1 style="font-size: 32px; letter-spacing: -0.5px;">Choose a Learner</h1>
        <p style="color: var(--text-muted); font-size: 16px;">Who is ready to learn today?</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px; width: 100%; max-width: 480px;">
        ${c}
        ${t.familyError?`<p role="alert" style="color: var(--pink); margin-bottom: 16px;">${t.familyError}</p>`:""}
        ${t.familyNotice?`<p role="status" style="color: var(--teal); margin-bottom: 16px;">${t.familyNotice}</p>`:""}

        <div>
          <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 12px;">Learners</div>
          <div class="profile-grid" id="learners-grid"></div>
        </div>

        <div style="margin-top: 12px;">
          <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 12px;">Parents & Guides</div>
          <div class="profile-grid" id="guides-grid"></div>
        </div>
      </div>
    </div>
  `;const m=e.querySelector("#learners-grid"),x=e.querySelector("#guides-grid");r.forEach(g=>{const v=document.createElement("div");v.style.display="flex",v.style.flexDirection="column",v.style.gap="8px";const q=document.createElement("button");if(q.className="profile-btn",q.innerText=`I'm ${g.name}`,q.addEventListener("click",()=>i.switchProfile(g.name)),v.appendChild(q),l&&!g.linkedUserId){const w=document.createElement("button");w.className="btn btn-secondary",w.style.fontSize="12px",w.style.padding="6px 10px",w.innerText=`Invite ${g.name} to Sign In`,w.addEventListener("click",async()=>{const h=prompt(`Enter ${g.name}'s Google account email:`);h!=null&&h.trim()&&await i.inviteLearner(g.id,g.name,h.trim())}),v.appendChild(w)}else if(g.linkedUserId){const w=document.createElement("span");w.style.cssText="font-size: 12px; color: var(--teal); text-align: center;",w.innerText="✓ Google sign-in linked",v.appendChild(w)}m.appendChild(v)}),s.forEach(g=>{const v=document.createElement("button");v.className="profile-btn",v.style.borderColor="var(--pink)",v.style.color="var(--text-main)",v.innerText=`${g.name}`,v.addEventListener("click",()=>i.switchProfile(g.name)),x.appendChild(v)});const b=document.createElement("button");if(b.className="profile-btn",b.style.borderStyle="dashed",b.style.borderColor="var(--border-color)",b.style.color="var(--text-muted)",b.style.fontSize="14px",b.innerText=t.sessionUser?"+ Add Learner":"+ Add Profile",b.addEventListener("click",async()=>{const g=prompt("Enter profile name:");if(!g||g.trim()==="")return;const v=t.sessionUser?!1:confirm("Is this profile a Parent/Guide? (Cancel for Learner)");try{await je(g.trim(),v),i.refresh()}catch(q){alert(`Error creating profile: ${q.message}`)}}),m.appendChild(b),r.length===0){const g=document.createElement("button");g.className="profile-btn visual-preview-btn",g.innerHTML='<span aria-hidden="true">⛵</span><span>Explore the Visual Preview</span><small>Open the illustrated 200-day voyage</small>',g.addEventListener("click",async()=>{const v="Preview Learner";await je(v,!1),i.switchProfile(v)}),m.prepend(g)}const $=e.querySelector("#login-btn");$&&$.addEventListener("click",async()=>{try{await lt()}catch(g){alert(`Google login failed: ${g.message}`)}});const p=e.querySelector("#logout-btn");p&&p.addEventListener("click",async()=>{try{await $e(),i.refresh()}catch(g){alert(`Logout failed: ${g.message}`)}});const f=e.querySelector("#invite-partner-btn");f&&f.addEventListener("click",async()=>{const g=prompt("Enter your partner's Google account email:");g!=null&&g.trim()&&await i.invitePartner(g.trim())}),(U=e.querySelector("#family-overview-btn"))==null||U.addEventListener("click",i.goFamilyOverview)}const _t=[{id:"anchors-aweigh",label:"Anchors Aweigh",min:0,icon:"⚓"},{id:"making-headway",label:"Making Headway",min:50,icon:"⛵"},{id:"rounding-the-mark",label:"Rounding the Mark",min:100,icon:"🧭"},{id:"flying-colors",label:"Flying Colors",min:150,icon:"🚩"},{id:"shipshape-moored",label:"Shipshape · Moored",min:200,icon:"🏝️"}],Le="https://kormilo-nautilus.netlify.app/",Fe=[{min:1,icon:"🐠",name:"Reef Scout",note:"First lesson completed"},{min:25,icon:"🐬",name:"Bright Dolphin",note:"25 voyage days completed"},{min:75,icon:"🐢",name:"Steady Turtle",note:"75 voyage days completed"},{min:150,icon:"🐋",name:"Great Voyager",note:"150 voyage days completed"}];function Pt(e){const t=Math.max(0,Math.min(200,Number(e)||0));return[..._t].reverse().find(i=>t>=i.min)}function Ct(e){const t=Math.max(0,Number(e)||0);return Fe.filter(i=>t>=i.min)}function At(e){const t=new Set(e||[]);return Array.from({length:10},(i,o)=>{const a=o*20+1,s=Array.from({length:20},(l,c)=>`voyage-${a+c}`).filter(l=>t.has(l)).length;return{month:o+1,completedLessons:s,earned:s===20}})}function qe(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function Ht(e){var d,u;const t=Math.min(200,e.completedLessons.length),i=Pt(t),o=Ct(t),a=At(e.completedLessons),r=Fe.find(m=>t<m.min),s=Math.round(t/200*100),l=((d=e.languagePacks.find(m=>m.id===e.activePackId))==null?void 0:d.targetLanguage.name)||"Language",c=Array.from({length:10},(m,x)=>{const b=(x+1)*20,$=x*20,p=t>=b,f=t>=$&&t<b;return`<li class="voyage-port ${p?"reached":f?"current":"charted"}">
      <span class="voyage-port__marker">${p?"✓":f?"⛵":x+1}</span>
      <span class="voyage-port__label">Port ${x+1}</span>
    </li>`}).join("");return`
    <section class="voyage-map-card" aria-labelledby="voyage-map-title">
      <div class="voyage-map__header">
        <div>
          <div class="hero-tag">Your learning voyage</div>
          <h3 id="voyage-map-title">${i.icon} ${i.label}</h3>
          <p>${t} of 200 voyage days complete · ${s}% across the sea</p>
        </div>
        <button class="btn btn-secondary btn-pill" id="view-voyage-btn">View voyage plan →</button>
      </div>
      <div class="voyage-sea" style="--voyage-progress:${s}%">
        <img class="voyage-sea__art" src="${Le}assets/illustrations/nautilus-voyage-map.jpg" alt="An illustrated sea route leading from a moonlit harbor toward the mountains and coastal towns of Montenegro">
        <div class="voyage-sea__shade" aria-hidden="true"></div>
        <div class="voyage-route" aria-hidden="true"><span></span></div>
        <ol class="voyage-ports" aria-label="Ten voyage ports">${c}</ol>
      </div>
    </section>

    <section class="captains-quarters" aria-labelledby="quarters-title">
      <div class="quarters-profile">
        <div class="quarters-avatar" aria-hidden="true">${((u=o.at(-1))==null?void 0:u.icon)||"⛵"}</div>
        <div>
          <div class="hero-tag">Captain's Quarters</div>
          <h3 id="quarters-title">${qe(e.profile)}'s logbook</h3>
          <p>${i.label} · ${e.streakDays} day streak · ${e.stars} stars</p>
        </div>
      </div>
      <div class="quarters-grid">
        <div class="quarters-panel">
          <h4>${qe(l)} Passport</h4>
          <p class="quarters-help">Earn one stamp for every 20 voyage lessons.</p>
          <div class="passport-stamps">
            ${a.map(m=>`<div class="passport-stamp ${m.earned?"earned":""}" title="Month ${m.month}: ${m.completedLessons} of 20 lessons">
              <span>${m.earned?"⚓":m.month}</span><small>${m.completedLessons}/20</small>
            </div>`).join("")}
          </div>
        </div>
        <div class="quarters-panel">
          <h4>Friends of the Sea</h4>
          <p class="quarters-help">Companions mark steady progress, never competition.</p>
          <img class="sea-friends__art ${o.length?"":"waiting"}" src="${Le}assets/illustrations/friends-of-the-sea.jpg" alt="A reef fish, dolphin, sea turtle, and whale swimming together as a voyage crew">
          <div class="sea-friends">
            ${o.length?o.map(m=>`<div class="sea-friend" title="${m.note}"><span>${m.icon}</span><small>${m.name}</small></div>`).join(""):'<p class="quarters-empty">Complete your first lesson to meet your Reef Scout.</p>'}
          </div>
          ${r?`<p class="next-friend">Next companion at voyage day ${r.min}.</p>`:'<p class="next-friend">Your whole crew is aboard!</p>'}
        </div>
      </div>
    </section>`}function Nt(e,t,i){var x,b,$;const o=t.sessionUser?B().filter(p=>!String(p.id).startsWith("local-")):B(),a=S.find(p=>!t.completedLessons.includes(p.id))||S[199],r=L(a.topicId)||we()[0],s=t.completedLessons.includes(a.id),c=[{id:"first",label:"First Steps",cond:t.completedTopicIds.length>=1},{id:"getting",label:"Getting Started",cond:t.completedTopicIds.length>=5},{id:"halfway",label:"Halfway Hero",cond:t.completedTopicIds.length>=17},{id:"fluent",label:"Fluent Enough",cond:t.completedTopicIds.length>=we().length},{id:"chatter",label:"Chatterbox",cond:t.dialoguesDone>=3},{id:"streak",label:"7-Day Streak",cond:t.streakDays>=7},{id:"pro",label:"Practice Pro",cond:t.stars>=50}].filter(p=>p.cond),d={};ot().forEach(p=>{const f=`Month ${st(p.id)}`;d[f]||(d[f]=[]),d[f].push(p)});let u="";e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
          <div class="logo-icon">${T.targetLanguage.code.toUpperCase()}</div>
          <div class="logo-title">Learn ${T.targetLanguage.name}</div>
        </button>
        ${u}
        ${(x=t.families)!=null&&x.some(p=>p.role==="owner"||p.role==="adult_guide")?'<button class="btn btn-secondary" id="family-overview-btn" style="padding: 6px 12px; font-size: 12px;">Family Overview</button>':""}
      </div>

      <div class="nav-actions">
        <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted);">
          Language
          <select id="language-select" class="badge-pill" aria-label="Learning language" style="color: var(--text-main); min-height: 44px;">
            ${t.languagePacks.map(p=>`
              <option value="${p.id}" ${p.id===t.activePackId?"selected":""}>${p.targetLanguage.name}${p.status==="review"?" · Review":""}</option>
            `).join("")}
          </select>
        </label>
        <!-- Profile switcher -->
        <div class="profile-pill-container" role="group" aria-label="Profiles">
          ${o.map(p=>`
            <button class="profile-pill-btn ${t.profile===p.name?"active":""}" data-profile="${p.name}" aria-label="Switch to profile ${p.name}">${p.name}</button>
          `).join("")}
          <button class="profile-pill-btn" id="nav-add-profile-btn" style="font-size: 14px; opacity: 0.7;">+</button>
        </div>

        ${t.isGuide?`
          <div class="badge-pill" style="color: var(--pink); border-color: var(--pink);">🧑‍🏫 Guide Mode</div>
        `:`
          <div class="badge-pill" aria-label="Stars count">
            <span style="color: var(--amber);">★</span> ${t.stars} stars
          </div>
          <div class="badge-pill" aria-label="Streak count">
            <span style="color: var(--pink);">🔥</span> ${t.streakDays} day streak
          </div>
        `}
      </div>
    </header>

    <main class="container">
      <!-- Tonight's Session Hero -->
      <section class="hero-card" aria-labelledby="hero-title-id">
        <div class="hero-text">
          <div class="hero-tag">${s?"Recommended Review":"Today's Target"}</div>
          <h2 class="hero-title" id="hero-title-id">${a.title}</h2>
          <p class="hero-subtitle">
            ${t.isGuide?`Voyage day ${a.number} · Preview ${r.title} before the kids sit down`:`Voyage day ${a.number} · ${a.detail} · about 10–15 minutes`}
          </p>
        </div>
        <button class="btn btn-primary" id="start-session-btn">
          ${t.isGuide?"Preview Session":s?"Replay Session":"Start Lesson"}
        </button>
      </section>

      <!-- Calendar Mount -->
      <section class="voyage-calendar" id="calendar-mount" aria-label="Learning Voyage Calendar"></section>

      ${t.isGuide?`
        <section class="guide-voyage-link">
          <h3>200-day learning voyage</h3>
          <button class="btn btn-secondary btn-pill" id="view-voyage-btn">View voyage plan →</button>
        </section>`:Ht(t)}

      <!-- Guide Progress dashboard -->
      ${t.isGuide?`
        <section aria-label="Learner Progress Summary">
          <h3 class="section-title">Kids' Progress</h3>
          <div class="kids-progress-grid">
            ${St().map(p=>`
              <div class="kid-progress-card">
                <div class="kid-progress-header">${p.name}</div>
                <div class="kid-progress-stats">
                  <div>⭐ ${p.stars} stars</div>
                  <div>🔥 ${p.streak}d streak</div>
                  <div>📚 ${p.completed} topics done</div>
                </div>
              </div>
            `).join("")}
          </div>
        </section>
      `:""}

      <!-- Badges summary -->
      ${!t.isGuide&&c.length>0?`
        <section aria-label="Earned Badges">
          <h3 class="section-title">Badges Earned</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px;">
            ${c.map(p=>`
              <div class="badge-pill" style="border-color: var(--amber); color: var(--text-main);">
                <span style="color: var(--amber);">🎖</span> ${p.label}
              </div>
            `).join("")}
          </div>
        </section>
      `:""}

      <!-- Free practice Grid -->
      <section aria-label="Topics library">
        <h3 class="section-title">Practice on Your Own</h3>

        <!-- Mixed review card -->
        ${t.completedTopicIds.length>=2&&!t.isGuide?`
          <div style="margin-bottom: 24px;">
            <button type="button" class="topic-card" id="mixed-review-card" style="max-width: 320px; border-color: var(--pink);">
              <div class="topic-card__icon" style="background: var(--pink);">Mx</div>
              <div class="topic-card__title">Mixed Review</div>
              <div class="topic-card__subtitle">Random practice from all topics you've completed</div>
            </button>
          </div>
        `:""}

        ${Object.keys(d).map(p=>`
          <div style="margin-bottom: 28px;">
            <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">${p}</h4>
            <div class="cards-grid">
              ${d[p].map(f=>{const j=t.completedTopicIds.includes(f.id);return`
                  <button type="button" class="topic-card" data-topic-id="${f.id}" aria-label="Practice ${f.title}">
                    <div class="topic-card__icon" style="background: ${f.color};">${f.icon}</div>
                    ${j?'<div class="topic-card__check">✓</div>':""}
                    <div>
                      <div class="topic-card__title">${f.title}</div>
                      <div class="topic-card__subtitle">${f.subtitle}</div>
                    </div>
                    <div class="topic-card__count">${f.items.length} words${f.dialogue?" · role-play":""}</div>
                  </button>
                `}).join("")}
            </div>
          </div>
        `).join("")}

        <!-- Anytime extras and advanced material -->
        <div style="margin-bottom: 28px;">
          <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Anytime Extras &amp; Capstones</h4>
          <div class="cards-grid">
            ${[...rt(),...at()].map(p=>`
              <button type="button" class="topic-card" data-topic-id="${p.id}" aria-label="Practice ${p.title}">
                <div class="topic-card__icon" style="background: ${p.color};">${p.icon}</div>
                <div>
                  <div class="topic-card__title">${p.title}</div>
                  <div class="topic-card__subtitle">${p.subtitle}</div>
                </div>
                <div class="topic-card__count">${p.items.length} words</div>
              </button>
            `).join("")}
          </div>
        </div>
      </section>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#start-session-btn").addEventListener("click",()=>i.startSession(a)),e.querySelector("#view-voyage-btn").addEventListener("click",i.goCurriculum),e.querySelectorAll(".profile-pill-btn").forEach(p=>{p.id!=="nav-add-profile-btn"&&p.addEventListener("click",f=>{i.switchProfile(f.target.dataset.profile)})}),e.querySelector("#nav-add-profile-btn").addEventListener("click",()=>{i.goProfileSelect()}),(b=e.querySelector("#language-select"))==null||b.addEventListener("change",p=>{i.selectLanguage(p.target.value)}),($=e.querySelector("#family-overview-btn"))==null||$.addEventListener("click",i.goFamilyOverview),e.querySelectorAll(".topic-card").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.topicId;f&&i.openTopic(f)})});const m=e.querySelector("#mixed-review-card");m&&m.addEventListener("click",i.startMixedReview)}function Ft(e,t,i,o){const a=t.calendarMonth,r=new Date(de.getFullYear(),de.getMonth()+a,1),s=r.getFullYear(),l=r.getMonth(),c=(new Date(s,l,1).getDay()+6)%7,d=new Date(s,l+1,0).getDate(),u=new Map;let m=new Date(de);for(let h=0;h<S.length;h++){for(;m.getDay()===0||m.getDay()===6;)m.setDate(m.getDate()+1);u.set(C(m),S[h]),m.setDate(m.getDate()+1)}const x=[];for(let h=0;h<c;h++)x.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const b=C(new Date);for(let h=1;h<=d;h++){const V=new Date(s,l,h),ne=C(V),_=u.get(ne),le=_&&t.completedLessons.includes(_.id),Ue=t.activityDates.includes(ne),Ve=ne===b;let Y="state-rest",K="In harbor";_&&(Y="state-planned",K="Charted"),Ue&&!le&&(Y="state-open-water",K="Open water"),Ve&&_&&!le&&(Y="state-making-way",K="Making way"),le&&(Y="state-full-sail",K="Full sail"),x.push({label:String(h),stateClass:Y,ariaLabel:`${V.toLocaleDateString("en-US",{month:"long",day:"numeric"})}: ${K}${_?`, Lesson ${_.number}: ${_.title}`:""}`})}for(;x.length%7!==0;)x.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const $=r.toLocaleDateString("en-US",{month:"long",year:"numeric"}),p=S.find(h=>!t.completedLessons.includes(h.id)),f=Math.round(t.completedLessons.length/S.length*100),j=p?p.number:200,k=new Date;k.setHours(0,0,0,0),k.setDate(k.getDate()-(k.getDay()+6)%7);const F=new Date(k);F.setDate(F.getDate()+7);const U=t.activityDates.filter(h=>{const V=new Date(`${h}T12:00:00`);return V>=k&&V<F}).length,g=t.activityDates.filter(h=>h.startsWith(`${s}-${String(l+1).padStart(2,"0")}-`)).length,v=x.filter(h=>h.label&&h.ariaLabel.includes("Lesson"));e.innerHTML=`
    <div class="voyage-calendar__head">
      <div>
        <div style="color: var(--cyan); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 4px;">Ten-month learning voyage</div>
        <h3 class="voyage-calendar__title">${$}</h3>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <div class="voyage-calendar__count" title="Voyage Progress">
          ${p?`Voyage day ${j} of 200`:"Voyage complete · 200 of 200"}
        </div>
        <div class="voyage-calendar__nav">
          <button id="cal-prev" aria-label="Previous month" ${a===0?'disabled style="opacity:0.3; cursor:default;"':""}>‹</button>
          <button id="cal-next" aria-label="Next month" ${a===9?'disabled style="opacity:0.3; cursor:default;"':""}>›</button>
        </div>
      </div>
    </div>

    <div class="voyage-calendar__grid" role="grid" aria-label="Calendar for ${$}">
      ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(h=>`
        <div class="voyage-calendar__weekday" role="columnheader" aria-label="${h}">${h}</div>
      `).join("")}

      ${x.map(h=>h.label===""?`<div class="voyage-calendar__day" style="${h.style}" aria-hidden="true"></div>`:`
          <div class="voyage-calendar__day ${h.stateClass}" role="gridcell" aria-label="${h.ariaLabel}" tabindex="0">
            ${h.label}
          </div>
        `).join("")}
    </div>

    <div class="voyage-calendar__legend" aria-label="Calendar Legend">
      <span><i class="voyage-calendar__dot state-rest"></i>In harbor</span>
      <span><i class="voyage-calendar__dot state-planned"></i>Charted</span>
      <span><i class="voyage-calendar__dot state-making-way"></i>Making way</span>
      <span><i class="voyage-calendar__dot state-full-sail"></i>Full sail</span>
      <span><i class="voyage-calendar__dot state-open-water"></i>Open water</span>
    </div>

    <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:14px; color:var(--text-muted); font-size:12px; font-weight:700;">
      <span>${t.completedLessons.length} lessons completed · ${f}%</span>
      <span>•</span>
      <span>${U} active ${U===1?"day":"days"} this week</span>
      <span>•</span>
      <span>${g} active ${g===1?"day":"days"} this month</span>
    </div>

    <details class="calendar-list">
      <summary>View this month as a list</summary>
      <ul>
        ${v.map(h=>`<li>${h.ariaLabel}</li>`).join("")}
      </ul>
    </details>
  `;const q=e.querySelector("#cal-prev"),w=e.querySelector("#cal-next");q&&a>0&&q.addEventListener("click",i),w&&a<9&&w.addEventListener("click",o)}const Gt=[{id:"red",hex:"#e53935",dark:!1,terms:["red","crvena","e kuqe"]},{id:"blue",hex:"#1976d2",dark:!1,terms:["blue","plava","blu"]},{id:"green",hex:"#2e7d32",dark:!1,terms:["green","zelena","e gjelbër"]},{id:"yellow",hex:"#f9c928",dark:!0,terms:["yellow","žuta","e verdhë"]},{id:"black",hex:"#111318",dark:!1,terms:["black","crna","e zezë"]},{id:"white",hex:"#f5f1e8",dark:!0,terms:["white","bijela","e bardhë"]}],Ot="https://kormilo-nautilus.netlify.app/";function pe(e){const t=String(e||"").trim().toLocaleLowerCase();return Gt.find(i=>i.terms.includes(t))||null}function Wt(e,t){return e!=="colors"?null:pe(t==null?void 0:t.supportText)||pe(t==null?void 0:t.targetText)}function ve(e,t){const i=Wt(e,t);return i?`<div class="color-field color-field--${i.id}" style="--lesson-color:${i.hex}" aria-hidden="true">
    <span class="color-field__sun"></span><span class="color-field__sail"></span><span class="color-field__wave"></span>
  </div>`:t!=null&&t.emoji?`<div class="flashcard-emoji">${t.emoji}</div>`:""}function Ge(e){const t=pe(e);return t?` style="--tile-color:${t.hex};--tile-text:${t.dark?"#111318":"#ffffff"}" data-color-tile="true"`:""}function Oe(e){return e!=="colors"?"":`<figure class="lesson-scene lesson-scene--colors">
    <img src="${Ot}assets/illustrations/colors-harbor.jpg" alt="A Montenegro harbor with a red boat, blue sea, green shutters, yellow umbrella, black cat, and white church tower">
    <figcaption><strong>Find the colors in the harbor.</strong><span>Red boat · blue sea · green shutters · yellow umbrella · black cat · white tower</span></figcaption>
  </figure>`}function We(e,t,i){const o=L(t.topicId),a=t.completedTopicIds.includes(o.id),r=!a&&!t.isGuide,s=[{id:"flashcards",label:"Flashcards"},{id:"match",label:"Match"},{id:"quiz",label:"Quiz"},{id:"listen",label:"Listen"}];o.dialogue&&s.push({id:"dialogue",label:"Role-play"}),e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${T.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${T.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main class="container" style="max-width: 720px;">
      <!-- Header info -->
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 8px;">
        <div>
          <h2 style="font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">${o.title}</h2>
          <p style="color: var(--text-muted); font-size: 14px;">${o.subtitle}</p>
        </div>
        <div>
          ${a?`
            <div style="color: var(--lime); font-weight: 800; font-size: 14px; display: flex; align-items: center; gap: 6px;">
              <span>✓</span> Completed Topic
            </div>
          `:""}
          ${r?`
            <button class="btn btn-secondary btn-pill" id="skip-btn" style="padding: 6px 14px; font-size: 12px; min-height: 32px;">Already know this — skip</button>
          `:""}
        </div>
      </div>

      ${o.note?`
        <div style="background: rgba(250, 204, 21, 0.08); border: 1px solid var(--amber); border-radius: 12px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #ffe58f; margin-bottom: 24px; white-space: pre-line;">
          ${o.note}
        </div>
      `:""}

      ${Oe(o.id)}

      <!-- Activities Tabs -->
      <div style="display: flex; gap: 8px; margin: 16px 0 24px; flex-wrap: wrap;" role="tablist" aria-label="Topic Activities">
        ${s.map(d=>`
          <button class="btn btn-secondary btn-pill ${t.activity===d.id?"btn-active":""}" role="tab" aria-selected="${t.activity===d.id}" data-tab="${d.id}">${d.label}</button>
        `).join("")}
      </div>

      <!-- Activity Container -->
      <div id="activity-mount"></div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#back-btn").addEventListener("click",i.goDashboard);const l=e.querySelector("#skip-btn");l&&l.addEventListener("click",()=>{i.markTopicCompleted(o.id),We(e,t,i)}),e.querySelectorAll("[data-tab]").forEach(d=>{d.addEventListener("click",u=>{const m=u.target.dataset.tab;i.setActivity(m)})});const c=e.querySelector("#activity-mount");Bt(c,o,t,i)}function Bt(e,t,i,o){i.activity==="flashcards"?ie(e,t,i,o):i.activity==="match"?Z(e,t,i,o):i.activity==="quiz"?ae(e,t,i,o):i.activity==="listen"?H(e,t,i,o):i.activity==="dialogue"&&ue(e,t,i,o)}function ie(e,t,i,o){const a=i.flash,r=a.order||t.items.map((c,d)=>d),s=t.items[r[a.idx]];e.innerHTML=`
    <div class="flashcard-container">
      <div class="flashcard-hint" style="color: var(--text-muted); font-size: 13px; font-weight: 700;">
        Card ${a.idx+1} of ${t.items.length}
      </div>

      <button type="button" class="flashcard-wrapper" id="card-wrapper" aria-label="Flashcard, tap to flip">
        <div class="flashcard ${a.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${ve(t.id,s)}
            <div class="flashcard-text-mn">${s.targetText}</div>
            <div class="flashcard-hint">Tap to reveal translation</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en">${s.supportText}</div>
            <div class="flashcard-hint" style="margin-top: 24px; color: var(--pink);">Tap to flip back</div>
          </div>
        </div>
      </button>

      <button class="btn btn-primary" id="speak-btn">► Say it out loud</button>

      <div style="display: flex; gap: 12px;">
        <button class="btn btn-secondary" id="prev-card-btn">← Prev</button>
        <button class="btn btn-secondary" id="shuffle-btn">Shuffle</button>
        <button class="btn btn-secondary" id="next-card-btn">Next →</button>
      </div>
    </div>
  `;const l=e.querySelector("#card-wrapper");l.addEventListener("click",()=>{a.flipped=!a.flipped,l.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#speak-btn").addEventListener("click",c=>{c.stopPropagation(),o.speak(s.targetText)}),e.querySelector("#prev-card-btn").addEventListener("click",()=>{a.idx=(a.idx-1+t.items.length)%t.items.length,a.flipped=!1,ie(e,t,i,o)}),e.querySelector("#next-card-btn").addEventListener("click",()=>{a.idx=(a.idx+1)%t.items.length,a.flipped=!1,ie(e,t,i,o)}),e.querySelector("#shuffle-btn").addEventListener("click",()=>{a.order=A(t.items.map((c,d)=>d)),a.idx=0,a.flipped=!1,ie(e,t,i,o)})}function Z(e,t,i,o){const a=i.match;(!a.tiles||a.tiles.length===0)&&(i.match=G(t.items));const r=i.match,s=r.matchedIds.length/2,l=r.tiles.length/2,c=s===l;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Pairs matched: ${s} / ${l}
      </div>

      ${c?`
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 40px; margin-bottom: 8px;">🎉</div>
          <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Well Done!</h4>
          <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">You matched all words correctly! +1 star</p>
        </div>
      `:`
        <div class="matching-grid">
          ${r.tiles.map(d=>{const u=r.matchedIds.includes(d.id),m=r.selectedIds.includes(d.id);let x="match-tile";return u?x+=" matched":m&&(x+=" selected"),`
              <button class="${x}" data-tile-id="${d.id}"${Ge(d.text)} ${u?"disabled":""}>
                ${d.text}
              </button>
            `}).join("")}
        </div>
      `}

      <button class="btn btn-secondary" id="reshuffle-match-btn">
        ${c?"Play Again":"New Round"}
      </button>
    </div>
  `,e.querySelector("#reshuffle-match-btn").addEventListener("click",()=>{i.match=G(t.items),Z(e,t,i,o)}),e.querySelectorAll(".match-tile").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.tileId;Rt(u,e,t,i,o)})})}function Rt(e,t,i,o,a){const r=o.match;if(!(r.matchedIds.includes(e)||r.selectedIds.includes(e)||r.selectedIds.length>=2)&&(r.selectedIds.push(e),Z(t,i,o,a),r.selectedIds.length===2)){const[s,l]=r.selectedIds,c=r.tiles.find(u=>u.id===s),d=r.tiles.find(u=>u.id===l);c.pairId===d.pairId?(r.matchedIds.push(s,l),r.selectedIds=[],setTimeout(()=>{r.matchedIds.length===r.tiles.length&&(a.awardStars(1),a.markTopicCompleted(i.id)),Z(t,i,o,a)},250)):setTimeout(()=>{r.selectedIds=[],Z(t,i,o,a)},700)}}function ae(e,t,i,o){const a=i.quiz;(!a.questions||a.questions.length===0)&&(i.quiz=P(t.items));const r=i.quiz,s=r.questions[r.qIdx];if(r.qIdx>=r.questions.length||r.questions.length===0){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Quiz Finished!</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          Your score: ${r.score} / ${r.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="restart-quiz-btn">Try Again</button>
      </div>
    `,e.querySelector("#restart-quiz-btn").addEventListener("click",()=>{i.quiz=P(t.items),ae(e,t,i,o)});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${r.qIdx+1} of ${r.questions.length} · Score: ${r.score}
      </div>

      <div class="quiz-prompt">
        Translate to ${T.targetLanguage.name}:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">"${s.promptText}"</span>
      </div>

      <div class="quiz-options">
        ${s.options.map(d=>{let u="quiz-option";return r.answered&&(d===s.correctAnswer?u+=" correct":d===r.selected?u+=" incorrect":u+=" disabled"),`
            <button class="${u}" data-option="${d}" ${r.answered?"disabled":""}>
              ${d}
            </button>
          `}).join("")}
      </div>

      ${r.answered?`
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          ${r.qIdx+1===r.questions.length?"Show Results":"Next Question →"}
        </button>
      `:""}
    </div>
  `,e.querySelectorAll(".quiz-option").forEach(d=>{d.addEventListener("click",()=>{if(r.answered)return;const u=d.dataset.option;r.selected=u,r.answered=!0,u===s.correctAnswer&&(r.score++,o.awardStars(1)),ae(e,t,i,o)})});const c=e.querySelector("#next-question-btn");c&&c.addEventListener("click",()=>{r.qIdx++,r.answered=!1,r.selected=null,r.qIdx>=r.questions.length&&o.markTopicCompleted(t.id),ae(e,t,i,o)})}function H(e,t,i,o){const a=i.listen,r=a.order||t.items.map((c,d)=>d),s=t.items[r[a.idx]],l=i.recording;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${a.idx+1} of ${t.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 32px; text-align: center;">
        ${s.targetText}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play pronunciation</button>

      <p style="font-size: 11px; color: var(--text-muted); max-width: 340px; text-align: center; line-height: 1.4;">
        Uses browser speech synthesis fallback voice.
      </p>

      <button class="btn btn-secondary" id="reveal-meaning-btn">
        ${a.revealed?"Hide Meaning":"Reveal Meaning"}
      </button>

      ${a.revealed?`
        <div style="font-size: 18px; color: var(--cyan); font-weight: 600; text-align: center; animation: fadeIn 0.2s;">
          "${s.supportText}"
        </div>
      `:""}

      <div style="height: 1px; width: 100%; max-width: 320px; background: var(--border-color); margin: 12px 0;"></div>

      <!-- Microphone recording feature -->
      <button class="btn btn-accent btn-pill" id="mic-record-btn" style="border-color: var(--pink); background: transparent; color: var(--pink);">
        ${l.status==="recording"?"■ Stop Recording":"🎙 Record Yourself"}
      </button>

      ${l.url?`
        <audio controls style="width: 280px; margin-top: 8px;" src="${l.url}"></audio>
      `:""}

      ${l.error?`
        <div style="font-size: 12px; color: var(--pink); max-width: 300px; text-align: center; margin-top: 6px;">
          ${l.error}
        </div>
      `:""}

      <div style="display: flex; gap: 12px; margin-top: 12px;">
        <button class="btn btn-secondary" id="prev-listen-btn">← Prev</button>
        <button class="btn btn-secondary" id="next-listen-btn">Next →</button>
      </div>
    </div>
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{o.speak(s.targetText)}),e.querySelector("#reveal-meaning-btn").addEventListener("click",()=>{a.revealed=!a.revealed,H(e,t,i,o)}),e.querySelector("#prev-listen-btn").addEventListener("click",()=>{a.idx=(a.idx-1+t.items.length)%t.items.length,a.revealed=!1,Ee(i),H(e,t,i,o)}),e.querySelector("#next-listen-btn").addEventListener("click",()=>{a.idx=(a.idx+1)%t.items.length,a.revealed=!1,Ee(i),H(e,t,i,o)}),e.querySelector("#mic-record-btn").addEventListener("click",()=>{Ut(e,t,i,o)})}function Ee(e){e.recording.url&&URL.revokeObjectURL(e.recording.url),e.recording={status:"idle",url:null,error:null,chunks:[],recorder:null}}async function Ut(e,t,i,o){const a=i.recording;if(a.status==="recording"){a.recorder&&a.recorder.stop();return}try{const r=await navigator.mediaDevices.getUserMedia({audio:!0}),s=new MediaRecorder(r),l=[];s.ondataavailable=c=>{c.data.size>0&&l.push(c.data)},s.onstop=()=>{const c=new Blob(l,{type:"audio/webm"}),d=URL.createObjectURL(c);r.getTracks().forEach(u=>u.stop()),i.recording={status:"ready",url:d,error:null,chunks:[],recorder:null},H(e,t,i,o)},s.start(),i.recording={status:"recording",url:null,error:null,chunks:l,recorder:s},H(e,t,i,o)}catch{i.recording={status:"idle",url:null,error:"Microphone access denied or unavailable on this device.",chunks:[],recorder:null},H(e,t,i,o)}}function ue(e,t,i,o){const a=i.dialogue,r=t.dialogue;a.readAs||(a.readAs=r.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${r.roles.map(s=>`
          <button class="btn btn-secondary btn-pill ${a.readAs===s?"btn-active":""}" data-role="${s}">
            Read as ${s}
          </button>
        `).join("")}
        <button class="btn btn-secondary btn-pill" id="toggle-translation-btn">
          ${a.showEn?"Hide Translations":"Show Translations"}
        </button>
      </div>

      <div class="dialogue-container">
        ${r.lines.map((s,l)=>`
            <div class="dialogue-bubble ${s.role===a.readAs?"active-reader":""}" style="animation: fadeIn 0.3s var(--transition-medium);">
              <div class="dialogue-header">
                <span>${s.role}</span>
                <button class="dialogue-play-btn" data-play-line="${l}">►</button>
              </div>
              <div style="font-size: 17px; font-weight: 600; margin-top: 4px; color: var(--text-main);">${s.targetText}</div>
              ${a.showEn?`
                <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">"${s.supportText}"</div>
              `:""}
            </div>
          `).join("")}
      </div>

      <button class="btn btn-primary" id="finish-dialogue-btn" style="width: 100%; max-width: 480px; margin-top: 12px;">
        Finish Dialogue Practice
      </button>
    </div>
  `,e.querySelectorAll("[data-role]").forEach(s=>{s.addEventListener("click",()=>{a.readAs=s.dataset.role,ue(e,t,i,o)})}),e.querySelector("#toggle-translation-btn").addEventListener("click",()=>{a.showEn=!a.showEn,ue(e,t,i,o)}),e.querySelectorAll("[data-play-line]").forEach(s=>{s.addEventListener("click",()=>{const l=parseInt(s.dataset.playLine),c=r.lines[l].targetText;o.speak(c)})}),e.querySelector("#finish-dialogue-btn").addEventListener("click",()=>{o.incrementDialogues(),o.markTopicCompleted(t.id),o.awardStars(2),o.goDashboard()})}function Vt(e,t,i){const o=t.activeLesson;if(!t.session||t.session.lessonId!==o.id){const l=nt(o,t.completedTopicIds);t.session={lessonId:o.id,stepIdx:0,steps:l,flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}}}const a=t.session,r=a.steps[a.stepIdx];e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${T.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${T.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="exit-btn">← Exit Lesson</button>
      </div>
    </header>

    <main class="container" style="max-width: 640px;">
      <!-- Steps Progress Bar -->
      <div class="session-steps-bar" role="progressbar" aria-label="Lesson progress" aria-valuenow="${a.stepIdx+1}" aria-valuemin="1" aria-valuemax="${a.steps.length}">
        ${a.steps.map((l,c)=>`
          <div class="session-step-segment ${c<=a.stepIdx?"active":""}"></div>
        `).join("")}
      </div>

      <div id="session-step-mount"></div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#exit-btn").addEventListener("click",i.goDashboard);const s=e.querySelector("#session-step-mount");Yt(s,r,t,i)}function Yt(e,t,i,o){t.type==="warmup"?Kt(e,t,i,o):t.type==="discover"?me(e,t,i,o):t.type==="recall-flash"?Be(e,t,i,o):t.type==="note"?Jt(e,t,i,o):t.type==="quiz"?ge(e,t,i,o):t.type==="match"?oe(e,t,i,o):t.type==="dialogue"?Re(e,t,i,o):t.type==="listen"?he(e,t,i,o):t.type==="done"&&Zt(e,t,i,o)}function Kt(e,t,i,o){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 6px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
        ${t.items.map((a,r)=>`
          <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; border-radius: 12px; padding: 14px 16px;">
            <div>
              <div style="font-weight: 700; font-size: 16px;">${a.targetText}</div>
              <div style="font-size: 13px; color: var(--text-muted);">${a.supportText}</div>
            </div>
            <button class="dialogue-play-btn" data-warmup-play="${r}">►</button>
          </div>
        `).join("")}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
    </div>
  `,e.querySelectorAll("[data-warmup-play]").forEach(a=>{a.addEventListener("click",()=>{const r=parseInt(a.dataset.warmup-play);o.speak(t.items[r].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{o.nextSessionStep()})}function me(e,t,i,o){const a=i.session.flash,r=t.items[a.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      ${a.idx===0?Oe(i.activeLesson.topicId):""}
      <div class="flashcard-hint" style="font-weight: 700;">Word ${a.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="discover-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Learning card, tap to flip">
        <div class="flashcard ${a.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${ve(i.activeLesson.topicId,r)}
            <div class="flashcard-text-mn" style="font-size: 28px;">${r.targetText}</div>
            <div class="flashcard-hint">Tap to flip</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en" style="font-size: 18px;">${r.supportText}</div>
            <div class="flashcard-hint" style="color: var(--pink);">Tap to flip back</div>
          </div>
        </div>
      </button>

      <div style="display: flex; gap: 12px; margin-top: 8px;">
        <button class="btn btn-secondary" id="disc-prev-btn" ${a.idx===0?'disabled style="opacity:0.3; cursor:default;"':""}>←</button>
        <button class="btn btn-primary" id="disc-speak-btn">► Say It</button>
        <button class="btn btn-secondary" id="disc-next-btn" ${a.idx+1===t.items.length?'disabled style="opacity:0.3; cursor:default;"':""}>→</button>
      </div>

      ${a.idx+1===t.items.length?`
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      `:""}
    </div>
  `;const s=e.querySelector("#discover-card-wrapper");s.addEventListener("click",()=>{a.flipped=!a.flipped,s.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#disc-speak-btn").addEventListener("click",c=>{c.stopPropagation(),o.speak(r.targetText)}),e.querySelector("#disc-prev-btn").addEventListener("click",()=>{a.idx>0&&(a.idx--,a.flipped=!1,me(e,t,i,o))}),e.querySelector("#disc-next-btn").addEventListener("click",()=>{a.idx+1<t.items.length&&(a.idx++,a.flipped=!1,me(e,t,i,o))});const l=e.querySelector("#next-step-btn");l&&l.addEventListener("click",()=>{o.nextSessionStep()})}function Be(e,t,i,o){const a=i.session.flash,r=t.items[a.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Card ${a.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="recall-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Recall card, tap to flip">
        <div class="flashcard ${a.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-hint" style="margin-bottom: 16px; color: var(--cyan);">Can you recall the translation?</div>
            ${ve(i.activeLesson.topicId,r)}
            <div class="flashcard-text-mn" style="font-size: 28px;">${r.targetText}</div>
            <div class="flashcard-hint">Tap to check meaning</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en" style="font-size: 18px;">${r.supportText}</div>
            <div class="flashcard-hint" style="color: var(--pink);">Tap to flip back</div>
          </div>
        </div>
      </button>

      <button class="btn btn-primary" id="recall-speak-btn">► Listen</button>

      <div style="display: flex; gap: 12px; margin-top: 12px; width: 100%; max-width: 320px;">
        <button class="btn btn-secondary" id="recall-again-btn" style="flex: 1;">Again</button>
        <button class="btn btn-primary" id="recall-gotit-btn" style="flex: 1; background: var(--lime);">Got It</button>
      </div>
    </div>
  `;const s=e.querySelector("#recall-card-wrapper");s.addEventListener("click",()=>{a.flipped=!a.flipped,s.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#recall-speak-btn").addEventListener("click",c=>{c.stopPropagation(),o.speak(r.targetText)});const l=()=>{a.idx+1<t.items.length?(a.idx++,a.flipped=!1,Be(e,t,i,o)):o.nextSessionStep()};e.querySelector("#recall-again-btn").addEventListener("click",()=>{t.items.push(r),l()}),e.querySelector("#recall-gotit-btn").addEventListener("click",()=>{l()})}function Jt(e,t,i,o){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 12px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div class="glass" style="background: rgba(125, 211, 252, 0.08); border-color: var(--cyan); border-radius: 16px; padding: 20px; font-size: 16px; line-height: 1.6; color: var(--text-main); margin-bottom: 32px; white-space: pre-line;">
        ${t.note}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">I understand, start practice →</button>
    </div>
  `,e.querySelector("#next-step-btn").addEventListener("click",()=>{o.nextSessionStep()})}function ge(e,t,i,o){i.session.quiz||(i.session.quiz=t.quiz);const a=i.session.quiz,r=a.questions[a.qIdx];if(a.qIdx>=a.questions.length){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Practice Complete</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          You scored: ${a.score} / ${a.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
      </div>
    `,e.querySelector("#next-step-btn").addEventListener("click",()=>{i.session.quiz=null,o.nextSessionStep()});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${a.qIdx+1} of ${a.questions.length} · Score: ${a.score}
      </div>

      <div class="quiz-prompt">
        Translate to ${T.targetLanguage.name}:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">"${r.promptText}"</span>
      </div>

      <div class="quiz-options">
        ${r.options.map(c=>{let d="quiz-option";return a.answered&&(c===r.correctAnswer?d+=" correct":c===a.selected?d+=" incorrect":d+=" disabled"),`
            <button class="${d}" data-option="${c}" ${a.answered?"disabled":""}>
              ${c}
            </button>
          `}).join("")}
      </div>

      ${a.answered?`
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          Next Question →
        </button>
      `:""}
    </div>
  `,e.querySelectorAll(".quiz-option").forEach(c=>{c.addEventListener("click",()=>{if(a.answered)return;const d=c.dataset.option;a.selected=d,a.answered=!0,d===r.correctAnswer&&(a.score++,o.awardStars(1)),ge(e,t,i,o)})});const l=e.querySelector("#next-question-btn");l&&l.addEventListener("click",()=>{a.qIdx++,a.answered=!1,a.selected=null,ge(e,t,i,o)})}function oe(e,t,i,o){i.session.match||(i.session.match=t.match);const a=i.session.match,r=a.matchedIds.length/2,s=a.tiles.length/2,l=r===s;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Pairs matched: ${r} / ${s}
      </div>

      ${l?`
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 40px; margin-bottom: 8px;">🎉</div>
          <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Matched!</h4>
          <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">Complete. +1 star</p>
          <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
        </div>
      `:`
        <div class="matching-grid">
          ${a.tiles.map(d=>{const u=a.matchedIds.includes(d.id),m=a.selectedIds.includes(d.id);let x="match-tile";return u?x+=" matched":m&&(x+=" selected"),`
              <button class="${x}" data-tile-id="${d.id}"${Ge(d.text)} ${u?"disabled":""}>
                ${d.text}
              </button>
            `}).join("")}
        </div>
      `}
    </div>
  `,e.querySelectorAll(".match-tile").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.tileId;Qt(u,e,t,i,o)})});const c=e.querySelector("#next-step-btn");c&&c.addEventListener("click",()=>{i.session.match=null,o.nextSessionStep()})}function Qt(e,t,i,o,a){const r=o.session.match;if(!(r.matchedIds.includes(e)||r.selectedIds.includes(e)||r.selectedIds.length>=2)&&(r.selectedIds.push(e),oe(t,i,o,a),r.selectedIds.length===2)){const[s,l]=r.selectedIds,c=r.tiles.find(u=>u.id===s),d=r.tiles.find(u=>u.id===l);c.pairId===d.pairId?(r.matchedIds.push(s,l),r.selectedIds=[],setTimeout(()=>{r.matchedIds.length===r.tiles.length&&a.awardStars(1),oe(t,i,o,a)},250)):setTimeout(()=>{r.selectedIds=[],oe(t,i,o,a)},700)}}function Re(e,t,i,o){const a=i.session.dialogue,r=t.dialogue;a.readAs||(a.readAs=r.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${r.roles.map(s=>`
          <button class="btn btn-secondary btn-pill ${a.readAs===s?"btn-active":""}" data-role="${s}">
            Read as ${s}
          </button>
        `).join("")}
      </div>

      <div class="dialogue-container" style="width: 100%;">
        ${r.lines.map((s,l)=>`
            <div class="dialogue-bubble ${s.role===a.readAs?"active-reader":""}">
              <div class="dialogue-header">
                <span>${s.role}</span>
                <button class="dialogue-play-btn" data-play-line="${l}">►</button>
              </div>
              <div style="font-size: 17px; font-weight: 600; margin-top: 4px; color: var(--text-main);">${s.targetText}</div>
              <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">"${s.supportText}"</div>
            </div>
          `).join("")}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 12px;">
        Dialogue Complete →
      </button>
    </div>
  `,e.querySelectorAll("[data-role]").forEach(s=>{s.addEventListener("click",()=>{a.readAs=s.dataset.role,Re(e,t,i,o)})}),e.querySelectorAll("[data-play-line]").forEach(s=>{s.addEventListener("click",()=>{const l=parseInt(s.dataset.playLine);o.speak(r.lines[l].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{o.incrementDialogues(),o.awardStars(2),o.nextSessionStep()})}function he(e,t,i,o){const a=i.session.flash,r=t.items[a.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${a.idx+1} of ${t.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 28px; text-align: center;">
        ${r.targetText}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play Pronunciation</button>

      <div style="font-size: 15px; color: var(--text-muted); text-align: center; margin: 4px 0;">
        Meaning: <span style="color: var(--cyan); font-weight: 600;">"${r.supportText}"</span>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 12px;">
        <button class="btn btn-secondary" id="listen-prev-btn" ${a.idx===0?'disabled style="opacity:0.3; cursor:default;"':""}>←</button>
        <button class="btn btn-secondary" id="listen-next-btn" ${a.idx+1===t.items.length?'disabled style="opacity:0.3; cursor:default;"':""}>→</button>
      </div>

      ${a.idx+1===t.items.length?`
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      `:""}
    </div>
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{o.speak(r.targetText)}),e.querySelector("#listen-prev-btn").addEventListener("click",()=>{a.idx>0&&(a.idx--,he(e,t,i,o))}),e.querySelector("#listen-next-btn").addEventListener("click",()=>{a.idx+1<t.items.length&&(a.idx++,he(e,t,i,o))});const s=e.querySelector("#next-step-btn");s&&s.addEventListener("click",()=>{o.nextSessionStep()})}function Zt(e,t,i,o){const a=i.activeLesson,r=a.topicId?L(a.topicId):null;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center; padding: 40px 0;">
      <div style="font-size: 52px; animation: bounce 1s infinite alternate;">🎉</div>
      <h3 style="font-family: var(--font-display); font-weight: 800; font-size: 26px; letter-spacing: -0.5px;">Nailed It!</h3>
      <p style="color: var(--text-muted); font-size: 15px; max-width: 360px; line-height: 1.6;">
        You finished the lesson: <span style="color: var(--cyan); font-weight: 600;">"${a.title}"</span>.
        ${r&&a.type==="checkpoint"?`<br>Topic <strong>${r.title}</strong> has been marked as complete.`:""}
      </p>

      <div class="badge-pill" style="border-color: var(--lime); color: var(--lime); font-size: 14px; font-weight: 800; padding: 10px 20px;">
        ★ Voyage Lesson Completed!
      </div>

      <button class="btn btn-primary" id="finish-lesson-btn" style="margin-top: 12px; padding: 14px 32px;">
        Back to Dashboard
      </button>
    </div>
  `,e.querySelector("#finish-lesson-btn").addEventListener("click",()=>{o.completeLesson(a.id)})}function Xt(e,t,i){const o={};for(let a=0;a<10;a++)o[a]=S.filter(r=>r.month===a);e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${T.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${T.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main class="container" style="max-width: 760px;">
      <h2 style="font-size: 28px; margin-bottom: 8px;">The 200-Day Voyage</h2>
      <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 32px; line-height: 1.6;">
        Ten months, five learning days each week. Every fourth week is an integration week where we bring together the vocabulary and patterns from the month.
      </p>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        ${Object.keys(o).map(a=>{const r=parseInt(a)+1,s=o[a],l=s.every(u=>t.completedLessons.includes(u.id)),c=s.some(u=>t.completedLessons.includes(u.id));let d="var(--text-muted)";return l?d="var(--lime)":(c||t.completedLessons.length/20===r-1)&&(d="var(--cyan)"),`
            <div style="border-left: 2px solid ${d}; padding-left: 20px; margin-bottom: 8px;">
              <h3 style="font-size: 16px; margin-bottom: 12px; color: ${d}; text-transform: uppercase; letter-spacing: 0.05em;">
                Month ${r} — ${et[a]}
              </h3>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${s.filter(u=>u.number%5===1).map(u=>{const m=u.week,x=S.filter(k=>k.week===m),b=x.every(k=>t.completedLessons.includes(k.id)),$=x.some(k=>!t.completedLessons.includes(k.id))&&x[0].number<=t.completedLessons.length+1,p=u.topicId?L(u.topicId):null;let f="Planned",j="var(--text-muted)";return b?(f="✓ Completed",j="var(--lime)"):$&&(f="Active Week",j="var(--cyan)"),`
                    <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; border-radius: 12px; padding: 14px 18px; cursor: pointer; transition: all var(--transition-fast);" data-week="${m}">
                      <div>
                        <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 2px;">
                          Week ${m%4===0?"4 (Integration)":`Week ${m%4}: ${p?p.title:"Mixed review"}`}
                        </h4>
                        <p style="color: var(--text-muted); font-size: 13px;">
                          Lessons ${x[0].number} – ${x[4].number}
                        </p>
                      </div>
                      <div style="font-size: 13px; font-weight: 800; color: ${j};">${f}</div>
                    </div>
                  `}).join("")}
              </div>
            </div>
          `}).join("")}
      </div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#back-btn").addEventListener("click",i.goDashboard),e.querySelectorAll("[data-week]").forEach(a=>{a.addEventListener("click",()=>{const r=parseInt(a.dataset.week),s=S.filter(c=>c.week===r),l=s.find(c=>!t.completedLessons.includes(c.id))||s[0];i.startSession(l)})})}const ei={"montenegrin-en":"Montenegrin","albanian-en":"Albanian"};function E(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function Me(e){return{owner:"Owner",adult_guide:"Adult Partner",learner:"Learner"}[e]||e}function ti(e,t,i){var a,r,s;const o=t.familyOverview;e.innerHTML=`
    <header class="navbar">
      <button class="logo" id="family-back-btn" aria-label="Back to learners">
        <div class="logo-icon">N</div><div class="logo-title">Family Overview</div>
      </button>
      <button class="btn btn-secondary" id="choose-learner-btn">Choose a Learner</button>
    </header>
    <main class="container">
      ${t.familyOverviewLoading?"<p>Loading family…</p>":""}
      ${t.familyError?`<p role="alert" style="color: var(--pink);">${E(t.familyError)}</p>`:""}
      ${o?`
        <section class="hero-card" style="margin-bottom: 28px;">
          <div class="hero-text"><div class="hero-tag">Family workspace</div>
          <h1 class="hero-title">${E(o.family.name)}</h1>
          <p class="hero-subtitle">Members, invitations, and progress across every language.</p></div>
        </section>

        <section style="margin-bottom: 32px;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px;">
            <h2 class="section-title" style="margin:0;">Parents & Members</h2>
            <button class="btn btn-secondary" id="overview-invite-partner-btn">Invite Adult Partner</button>
          </div>
          <div class="kids-progress-grid">
            ${o.members.map(l=>`<article class="kid-progress-card">
              <div class="kid-progress-header">${E(l.name)}</div>
              <div class="kid-progress-stats"><div>${E(l.email)}</div><div>${E(Me(l.role))}</div></div>
            </article>`).join("")}
          </div>
          ${o.pendingInvitations.length?`<h3 class="section-title" style="margin-top:20px;">Pending invitations</h3>
            <div class="kids-progress-grid">${o.pendingInvitations.map(l=>`<article class="kid-progress-card">
              <div class="kid-progress-header">${E(l.email)}</div>
              <div class="kid-progress-stats"><div>${E(Me(l.role))}</div><div>Expires ${new Date(l.expiresAt).toLocaleDateString()}</div></div>
            </article>`).join("")}</div>`:""}
        </section>

        <section>
          <h2 class="section-title">Learner Progress</h2>
          <div class="kids-progress-grid">
            ${o.learners.map(l=>{const c=new Map(l.progress.map(d=>[d.packId,d]));return`<article class="kid-progress-card">
                <div class="kid-progress-header">${E(l.name)} ${l.linked?'<span style="color:var(--teal);font-size:12px;">✓ Sign-in linked</span>':""}</div>
                <div class="kid-progress-stats">
                  ${t.languagePacks.map(d=>{const u=c.get(d.id)||{stars:0,completedLessons:0,activeDays:0};return`<div><strong>${E(ei[d.id]||d.targetLanguage.name)}</strong>: ${u.completedLessons}/200 lessons · ${u.activeDays} active days · ${u.stars} stars</div>`}).join("")}
                </div>
              </article>`}).join("")||"<p>No learners have been added yet.</p>"}
          </div>
        </section>`:""}
    </main>`,(a=e.querySelector("#family-back-btn"))==null||a.addEventListener("click",i.goProfileSelect),(r=e.querySelector("#choose-learner-btn"))==null||r.addEventListener("click",i.goProfileSelect),(s=e.querySelector("#overview-invite-partner-btn"))==null||s.addEventListener("click",async()=>{const l=prompt("Enter your partner's Google account email:");l!=null&&l.trim()&&await i.invitePartner(l.trim(),!0)})}const n={profile:null,isGuide:!1,screen:"profile-select",sessionUser:null,families:null,familyError:null,familyNotice:null,familyOverview:null,familyOverviewLoading:!1,activePackId:"montenegrin-en",languagePacks:tt(),stars:0,streakDays:0,completedTopicIds:[],completedLessons:[],activityDates:[],dialoguesDone:0,topicId:null,activity:"flashcards",calendarMonth:0,activeLesson:null,session:null,flash:{order:null,idx:0,flipped:!1},match:{tiles:[],selectedIds:[],matchedIds:[]},quiz:{questions:[],qIdx:0,score:0,selected:null,answered:!1},listen:{order:null,idx:0,revealed:!1},dialogue:{readAs:null,showEn:!1},recording:{status:"idle",url:null,error:null,chunks:[],recorder:null}},M=document.getElementById("app");function ii(e){if(!("speechSynthesis"in window))return;const t=T.targetLanguage.code==="sq"?"sq-AL":"hr-HR",i=new SpeechSynthesisUtterance(e);i.lang=t,i.rate=.85,window.speechSynthesis.cancel(),window.speechSynthesis.speak(i)}const D={selectLanguage:async e=>{if(n.profile){if(xe(n.profile,e),n.sessionUser)try{await Ie()}catch(t){n.familyError=t.message}z(n.profile),n.screen="dashboard",Q(),y()}},createFamily:async e=>{n.familyError=null;try{await Et(e),n.families=await Lt(),await Ie(),y()}catch(t){n.familyError=t.message,y()}},invitePartner:async(e,t=!1)=>{var o,a;const i=(a=(o=n.families)==null?void 0:o[0])==null?void 0:a.family_id;if(i){n.familyError=null,n.familyNotice=null;try{const r=await Mt(i,e,"adult_guide"),s=new URL(`${window.location.origin}${window.location.pathname}`);s.searchParams.set("invite",r);try{await navigator.clipboard.writeText(s.toString())}catch{window.prompt("Copy this invitation link:",s.toString())}n.familyNotice=`Partner invitation copied. Send the link to ${e}; it expires in 7 days.`}catch(r){n.familyError=r.message}t?await D.goFamilyOverview():y()}},inviteLearner:async(e,t,i)=>{n.familyError=null,n.familyNotice=null;try{const o=await zt(e,i),a=new URL(`${window.location.origin}${window.location.pathname}`);a.searchParams.set("invite",o);try{await navigator.clipboard.writeText(a.toString())}catch{window.prompt("Copy this invitation link:",a.toString())}n.familyNotice=`${t}'s sign-in invitation was copied. Send it to ${i}; it expires in 7 days.`}catch(o){n.familyError=o.message}y()},goDashboard:()=>{n.screen="dashboard",Q(),y()},goCurriculum:()=>{n.screen="curriculum",Q(),y()},goProfileSelect:()=>{n.screen="profile-select",n.profile=null,Q(),y()},goFamilyOverview:async()=>{var e,t;n.profile=null,n.screen="family-overview",n.familyOverviewLoading=!0,n.familyError=null,y();try{n.familyOverview=await qt((t=(e=n.families)==null?void 0:e[0])==null?void 0:t.family_id)}catch(i){n.familyError=i.message}finally{n.familyOverviewLoading=!1,y()}},refresh:()=>{n.profile&&z(n.profile),y()},switchProfile:e=>{ht(e),n.profile=e,xe(e),z(e),n.screen="dashboard",Q();const t=S.find(i=>!n.completedLessons.includes(i.id));t&&(n.calendarMonth=t.month),y()},openTopic:e=>{n.topicId=e,n.screen="topic",n.activity="flashcards",n.flash={order:null,idx:0,flipped:!1},n.match={tiles:[],selectedIds:[],matchedIds:[]},n.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},n.listen={order:null,idx:0,revealed:!1},n.dialogue={readAs:null,showEn:!0},y()},setActivity:e=>{n.activity=e,n.flash={order:null,idx:0,flipped:!1},n.match={tiles:[],selectedIds:[],matchedIds:[]},n.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},n.listen={order:null,idx:0,revealed:!1},n.dialogue={readAs:null,showEn:!0},y()},startSession:e=>{n.activeLesson=e,n.screen="session",n.session=null,y()},nextSessionStep:()=>{n.session&&(n.session.stepIdx++,n.session.flash={idx:0,flipped:!1},n.session.quiz=null,n.session.match=null,y())},completeLesson:e=>{wt(n.profile,e);const t=n.activeLesson.topicId;t&&n.activeLesson.type==="checkpoint"&&Se(n.profile,t),z(n.profile),D.goDashboard()},markTopicCompleted:e=>{Se(n.profile,e),z(n.profile)},awardStars:e=>{kt(n.profile,e),z(n.profile)},incrementDialogues:()=>{$t(n.profile),z(n.profile)},speak:ii,startMixedReview:()=>{const t=n.completedTopicIds.map(i=>L(i)).filter(Boolean).flatMap(i=>i.items);t.length!==0&&(n.activeLesson={id:"mixed-review",title:"Mixed Review",detail:"Practice from all completed topics",topicId:null,month:0},n.screen="session",n.session={lessonId:"mixed-review",stepIdx:0,steps:[{type:"quiz",title:"Review Quiz",subtitle:"Test your retention",quiz:P(t,8)},{type:"match",title:"Review Match",subtitle:"Match terms quickly",match:G(t,8)},{type:"done",title:"Review Finished!",subtitle:"You completed your mixed review!"}],flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}},y())}};function Q(){n.activeLesson=null,n.session=null}function z(e){const t=N(e);t&&(n.stars=t.stars,n.streakDays=t.streakDays,n.completedTopicIds=t.completedTopicIds,n.completedLessons=t.completedLessons,n.activityDates=t.activityDates,n.dialoguesDone=t.dialoguesDone,n.isGuide=t.isGuide)}function xe(e,t=null){const i=t||ct(e),a=n.languagePacks.some(r=>r.id===i)?i:"montenegrin-en";it(a),dt(),pt(e,a),n.activePackId=a}function y(){if(M.innerHTML="",!n.profile){n.screen==="family-overview"?ti(M,n,D):(n.screen="profile-select",Dt(M,n,D));return}if(n.screen==="dashboard"){Nt(M,n,D);const e=M.querySelector("#calendar-mount");e&&Ft(e,n,()=>{n.calendarMonth=Math.max(0,n.calendarMonth-1),y()},()=>{n.calendarMonth=Math.min(9,n.calendarMonth+1),y()})}else n.screen==="topic"?We(M,n,D):n.screen==="session"?Vt(M,n,D):n.screen==="curriculum"&&Xt(M,n,D)}async function ai(){window.addEventListener("online",()=>{Ne(),y()}),window.addEventListener("offline",()=>{y()});const e=gt();if(e){n.profile=e,xe(e),z(e),n.screen="dashboard";const t=S.find(i=>!n.completedLessons.includes(i.id));n.calendarMonth=t?t.month:0}else n.screen="profile-select";y()}window.addEventListener("DOMContentLoaded",ai);
