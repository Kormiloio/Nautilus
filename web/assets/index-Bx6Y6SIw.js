(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();const it={id:"montenegrin-en",targetLanguage:{code:"cnr",name:"Montenegrin",scripts:["Latn","Cyrl"]},supportLanguage:{code:"en",name:"English"},version:"0.1.0",status:"draft"},at={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},ot=JSON.parse(`[{"id":"family","month":1,"title":"Family","subtitle":"Words for relatives","icon":"Fa","color":"#7dd3fc","note":"Your family speaks a Montenegrin-Dalmatian blend — words like dida and kukumar are your family's words, not mistakes. In Montenegrin, grandpa may also be deda.","items":[{"id":"family-item-001","targetText":"mama","supportText":"mom","emoji":"👩"},{"id":"family-item-002","targetText":"tata","supportText":"dad","emoji":"👨"},{"id":"family-item-003","targetText":"brat","supportText":"brother","emoji":"👦"},{"id":"family-item-004","targetText":"sestra","supportText":"sister","emoji":"👧"},{"id":"family-item-005","targetText":"baka","supportText":"grandma (also: baba)","emoji":"👵"},{"id":"family-item-006","targetText":"dida","supportText":"grandpa (Montenegrin: deda)","emoji":"👴"},{"id":"family-item-007","targetText":"sin","supportText":"son","emoji":"👦"},{"id":"family-item-008","targetText":"kćerka","supportText":"daughter (also: kći)","emoji":"👧"},{"id":"family-item-009","targetText":"porodica","supportText":"family","emoji":"👪"},{"id":"family-item-010","targetText":"roditelji","supportText":"parents"},{"id":"family-item-011","targetText":"dijete / djeca","supportText":"child / children","emoji":"👶"},{"id":"family-item-012","targetText":"ko","supportText":"who"}]},{"id":"greetings","month":1,"title":"Greetings","subtitle":"Say hello & introduce yourself","icon":"Zd","color":"#f472b6","items":[{"id":"greetings-item-001","targetText":"Zdravo","supportText":"Hello"},{"id":"greetings-item-002","targetText":"Dobar dan","supportText":"Good afternoon"},{"id":"greetings-item-003","targetText":"Dobro jutro","supportText":"Good morning"},{"id":"greetings-item-004","targetText":"Hvala","supportText":"Thank you"},{"id":"greetings-item-005","targetText":"Molim","supportText":"Please / You're welcome"},{"id":"greetings-item-006","targetText":"Da","supportText":"Yes"},{"id":"greetings-item-007","targetText":"Ne","supportText":"No"},{"id":"greetings-item-008","targetText":"Doviđenja","supportText":"Goodbye"},{"id":"greetings-item-009","targetText":"Ćao","supportText":"Bye / Hi (informal)"},{"id":"greetings-item-010","targetText":"Izvini","supportText":"Sorry / Excuse me"},{"id":"greetings-item-011","targetText":"Kako se zoveš?","supportText":"What's your name?"},{"id":"greetings-item-012","targetText":"Zovem se...","supportText":"My name is..."},{"id":"greetings-item-013","targetText":"Drago mi je","supportText":"Nice to meet you"}],"dialogue":{"roles":["You","New Friend"],"lines":[{"id":"greetings-dialogue-001","targetText":"Dobar dan! Kako se zoveš?","supportText":"Good afternoon! What is your name?","role":"You"},{"id":"greetings-dialogue-002","targetText":"Zovem se Lena. A ti?","supportText":"My name is Lena. And you?","role":"New Friend"},{"id":"greetings-dialogue-003","targetText":"Zovem se Sam. Drago mi je!","supportText":"My name is Sam. Nice to meet you!","role":"You"},{"id":"greetings-dialogue-004","targetText":"Drago mi je! Doviđenja.","supportText":"Nice to meet you too! Goodbye.","role":"New Friend"}]}},{"id":"numbers","month":2,"title":"Numbers","subtitle":"Counting 1–100","icon":"123","color":"#a3e635","items":[{"id":"numbers-item-001","targetText":"jedan","supportText":"one (1)"},{"id":"numbers-item-002","targetText":"dva","supportText":"two (2)"},{"id":"numbers-item-003","targetText":"tri","supportText":"three (3)"},{"id":"numbers-item-004","targetText":"četiri","supportText":"four (4)"},{"id":"numbers-item-005","targetText":"pet","supportText":"five (5)"},{"id":"numbers-item-006","targetText":"šest","supportText":"six (6)"},{"id":"numbers-item-007","targetText":"sedam","supportText":"seven (7)"},{"id":"numbers-item-008","targetText":"osam","supportText":"eight (8)"},{"id":"numbers-item-009","targetText":"devet","supportText":"nine (9)"},{"id":"numbers-item-010","targetText":"deset","supportText":"ten (10)"},{"id":"numbers-item-011","targetText":"dvadeset","supportText":"twenty (20)"},{"id":"numbers-item-012","targetText":"trideset","supportText":"thirty (30)"},{"id":"numbers-item-013","targetText":"pedeset","supportText":"fifty (50)"},{"id":"numbers-item-014","targetText":"sto","supportText":"one hundred (100)"}]},{"id":"colors","month":2,"title":"Colors","subtitle":"boje","icon":"Bo","color":"#7dd3fc","items":[{"id":"colors-item-001","targetText":"crvena","supportText":"red","emoji":"🔴"},{"id":"colors-item-002","targetText":"plava","supportText":"blue","emoji":"🔵"},{"id":"colors-item-003","targetText":"zelena","supportText":"green","emoji":"🟢"},{"id":"colors-item-004","targetText":"žuta","supportText":"yellow","emoji":"🟡"},{"id":"colors-item-005","targetText":"crna","supportText":"black","emoji":"⚫"},{"id":"colors-item-006","targetText":"bijela","supportText":"white","emoji":"⚪"}]},{"id":"drinks","month":3,"title":"Drinks","subtitle":"piće","icon":"Pi","color":"#f472b6","items":[{"id":"drinks-item-001","targetText":"voda","supportText":"water","emoji":"💧"},{"id":"drinks-item-002","targetText":"kafa","supportText":"coffee","emoji":"☕"},{"id":"drinks-item-003","targetText":"čaj","supportText":"tea","emoji":"🍵"},{"id":"drinks-item-004","targetText":"sok","supportText":"juice","emoji":"🧃"},{"id":"drinks-item-005","targetText":"mlijeko","supportText":"milk","emoji":"🥛"},{"id":"drinks-item-006","targetText":"pivo","supportText":"beer","emoji":"🍺"},{"id":"drinks-item-007","targetText":"vino","supportText":"wine","emoji":"🍷"},{"id":"drinks-item-008","targetText":"rakija","supportText":"rakija (homemade brandy)","emoji":"🥃"}]},{"id":"food","month":3,"title":"Food","subtitle":"hrana","icon":"Hr","color":"#a3e635","items":[{"id":"food-item-001","targetText":"kruh","supportText":"bread (also: hljeb)","emoji":"🍞"},{"id":"food-item-002","targetText":"sir","supportText":"cheese","emoji":"🧀"},{"id":"food-item-003","targetText":"meso","supportText":"meat","emoji":"🥩"},{"id":"food-item-004","targetText":"riba","supportText":"fish","emoji":"🐟"},{"id":"food-item-005","targetText":"jaje / jaja","supportText":"egg / eggs","emoji":"🥚"},{"id":"food-item-006","targetText":"salata","supportText":"salad","emoji":"🥗"},{"id":"food-item-007","targetText":"supa / čorba","supportText":"soup","emoji":"🍲"},{"id":"food-item-008","targetText":"sladoled","supportText":"ice cream","emoji":"🍦"},{"id":"food-item-009","targetText":"jabuka","supportText":"apple","emoji":"🍎"}]},{"id":"veg","month":4,"title":"Vegetables & Market","subtitle":"pijaca","icon":"Pj","color":"#7dd3fc","items":[{"id":"veg-item-001","targetText":"paradajz","supportText":"tomato","emoji":"🍅"},{"id":"veg-item-002","targetText":"kukumar","supportText":"cucumber","emoji":"🥒"},{"id":"veg-item-003","targetText":"krompir","supportText":"potato","emoji":"🥔"},{"id":"veg-item-004","targetText":"luk","supportText":"onion","emoji":"🧅"},{"id":"veg-item-005","targetText":"bijeli luk","supportText":"garlic (literally 'white onion')","emoji":"🧄"},{"id":"veg-item-006","targetText":"paprika","supportText":"pepper","emoji":"🫑"},{"id":"veg-item-007","targetText":"mrkva","supportText":"carrot","emoji":"🥕"},{"id":"veg-item-008","targetText":"kupus","supportText":"cabbage","emoji":"🥬"}]},{"id":"cafe","month":4,"title":"At a Café","subtitle":"Order like a local","icon":"Ka","color":"#f472b6","note":"Hoću = I want, Neću = I don't want.\\nWords ending in -a often change to -u after these: kafa → Hoću kafu, voda → Hoću vodu.","items":[{"id":"cafe-item-001","targetText":"Dobar dan!","supportText":"Good afternoon! (greeting)"},{"id":"cafe-item-002","targetText":"Izvolite?","supportText":"What can I get you?"},{"id":"cafe-item-003","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please."},{"id":"cafe-item-004","targetText":"Još nešto?","supportText":"Anything else?"},{"id":"cafe-item-005","targetText":"Hvala","supportText":"Thank you"},{"id":"cafe-item-006","targetText":"Račun, molim.","supportText":"The bill, please."}],"dialogue":{"roles":["Waiter","Customer"],"lines":[{"id":"cafe-dialogue-001","targetText":"Dobar dan! Izvolite?","supportText":"Good afternoon! What can I get you?","role":"Waiter"},{"id":"cafe-dialogue-002","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please.","role":"Customer"},{"id":"cafe-dialogue-003","targetText":"Još nešto?","supportText":"Anything else?","role":"Waiter"},{"id":"cafe-dialogue-004","targetText":"Hoću i vodu. Hvala.","supportText":"I'll also have water. Thanks.","role":"Customer"},{"id":"cafe-dialogue-005","targetText":"Izvolite.","supportText":"Here you go.","role":"Waiter"},{"id":"cafe-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"Customer"},{"id":"cafe-dialogue-007","targetText":"Račun, molim.","supportText":"The bill, please.","role":"Customer"},{"id":"cafe-dialogue-008","targetText":"Doviđenja!","supportText":"Goodbye!","role":"Waiter"}]}},{"id":"talkfamily","month":5,"title":"Talking About Family","subtitle":"\\"my brother\\", \\"I have a sister\\"","icon":"Mo","color":"#a3e635","items":[{"id":"talkfamily-item-001","targetText":"moj","supportText":"my (masculine)"},{"id":"talkfamily-item-002","targetText":"moja","supportText":"my (feminine)"},{"id":"talkfamily-item-003","targetText":"moj brat","supportText":"my brother"},{"id":"talkfamily-item-004","targetText":"moja sestra","supportText":"my sister"},{"id":"talkfamily-item-005","targetText":"moje dijete","supportText":"my child"},{"id":"talkfamily-item-006","targetText":"Imam brata.","supportText":"I have a brother."},{"id":"talkfamily-item-007","targetText":"Imam sestru.","supportText":"I have a sister."},{"id":"talkfamily-item-008","targetText":"Kako se zove tvoj brat?","supportText":"What's your brother's name?"},{"id":"talkfamily-item-009","targetText":"Moj brat se zove Sam.","supportText":"My brother is named Sam."},{"id":"talkfamily-item-010","targetText":"Ovo je moja porodica.","supportText":"This is my family."},{"id":"talkfamily-item-011","targetText":"A ko je ovo?","supportText":"And who is this?"}]},{"id":"aboutme","month":5,"title":"About Me","subtitle":"Simple sentences about yourself","icon":"Ja","color":"#7dd3fc","items":[{"id":"aboutme-item-001","targetText":"Ja se zovem ___.","supportText":"My name is ___."},{"id":"aboutme-item-002","targetText":"Koliko imaš godina?","supportText":"How old are you?"},{"id":"aboutme-item-003","targetText":"Imam ___ godina.","supportText":"I am ___ years old."},{"id":"aboutme-item-004","targetText":"Volim čokoladu.","supportText":"I love chocolate."},{"id":"aboutme-item-005","targetText":"Idem u školu.","supportText":"I am going to school."},{"id":"aboutme-item-006","targetText":"Idem na plažu.","supportText":"I'm going to the beach."},{"id":"aboutme-item-007","targetText":"Gdje živiš?","supportText":"Where do you live?"},{"id":"aboutme-item-008","targetText":"Živim u ___.","supportText":"I live in ___."}]},{"id":"days","month":6,"title":"Days & Time","subtitle":"dani u sedmici","icon":"Dn","color":"#f472b6","items":[{"id":"days-item-001","targetText":"ponedjeljak","supportText":"Monday"},{"id":"days-item-002","targetText":"utorak","supportText":"Tuesday"},{"id":"days-item-003","targetText":"srijeda","supportText":"Wednesday"},{"id":"days-item-004","targetText":"četvrtak","supportText":"Thursday"},{"id":"days-item-005","targetText":"petak","supportText":"Friday"},{"id":"days-item-006","targetText":"subota","supportText":"Saturday"},{"id":"days-item-007","targetText":"nedjelja","supportText":"Sunday"},{"id":"days-item-008","targetText":"danas","supportText":"today"},{"id":"days-item-009","targetText":"sutra","supportText":"tomorrow"},{"id":"days-item-010","targetText":"juče","supportText":"yesterday"}]},{"id":"outabout","month":6,"title":"Out & About","subtitle":"Travel phrases","icon":"Va","color":"#a3e635","items":[{"id":"outabout-item-001","targetText":"Gdje je...?","supportText":"Where is...?"},{"id":"outabout-item-002","targetText":"Koliko košta?","supportText":"How much does it cost?"},{"id":"outabout-item-003","targetText":"Ne razumijem.","supportText":"I don't understand."},{"id":"outabout-item-004","targetText":"Govorite li engleski?","supportText":"Do you speak English?"},{"id":"outabout-item-005","targetText":"Molim vas.","supportText":"Please (formal)"},{"id":"outabout-item-006","targetText":"Izvinite.","supportText":"Excuse me (formal)"},{"id":"outabout-item-007","targetText":"lijevo","supportText":"left"},{"id":"outabout-item-008","targetText":"desno","supportText":"right"},{"id":"outabout-item-009","targetText":"plaža","supportText":"beach"},{"id":"outabout-item-010","targetText":"more","supportText":"sea"}]},{"id":"weather","month":7,"title":"Weather","subtitle":"vrijeme","icon":"We","color":"#7dd3fc","items":[{"id":"weather-item-001","targetText":"sunce","supportText":"sun","emoji":"☀️"},{"id":"weather-item-002","targetText":"kiša","supportText":"rain","emoji":"🌧️"},{"id":"weather-item-003","targetText":"vjetar","supportText":"wind","emoji":"💨"},{"id":"weather-item-004","targetText":"oblačno","supportText":"cloudy","emoji":"☁️"},{"id":"weather-item-005","targetText":"toplo","supportText":"warm"},{"id":"weather-item-006","targetText":"hladno","supportText":"cold","emoji":"🥶"},{"id":"weather-item-007","targetText":"Kakvo je vrijeme?","supportText":"What's the weather like?"},{"id":"weather-item-008","targetText":"Sunčano je.","supportText":"It's sunny."}]},{"id":"emotions","month":7,"title":"Emotions & Feelings","subtitle":"osjećanja","icon":"Em","color":"#f472b6","items":[{"id":"emotions-item-001","targetText":"sretan / sretna","supportText":"happy"},{"id":"emotions-item-002","targetText":"tužan / tužna","supportText":"sad"},{"id":"emotions-item-003","targetText":"umoran / umorna","supportText":"tired"},{"id":"emotions-item-004","targetText":"gladan / gladna","supportText":"hungry"},{"id":"emotions-item-005","targetText":"žedan / žedna","supportText":"thirsty"},{"id":"emotions-item-006","targetText":"uzbuđen / uzbuđena","supportText":"excited"},{"id":"emotions-item-007","targetText":"Kako se osjećaš?","supportText":"How do you feel?"}]},{"id":"house","month":8,"title":"House & Home","subtitle":"kuća","icon":"Ho","color":"#a3e635","items":[{"id":"house-item-001","targetText":"kuća","supportText":"house","emoji":"🏠"},{"id":"house-item-002","targetText":"soba","supportText":"room"},{"id":"house-item-003","targetText":"kuhinja","supportText":"kitchen","emoji":"🍳"},{"id":"house-item-004","targetText":"kupatilo","supportText":"bathroom","emoji":"🚿"},{"id":"house-item-005","targetText":"krevet","supportText":"bed","emoji":"🛏️"},{"id":"house-item-006","targetText":"vrata","supportText":"door","emoji":"🚪"},{"id":"house-item-007","targetText":"prozor","supportText":"window","emoji":"🪟"},{"id":"house-item-008","targetText":"dvorište","supportText":"yard","emoji":"🌳"}]},{"id":"clothes","month":8,"title":"Clothes","subtitle":"odjeća","icon":"Cl","color":"#7dd3fc","items":[{"id":"clothes-item-001","targetText":"majica","supportText":"t-shirt","emoji":"👕"},{"id":"clothes-item-002","targetText":"pantalone","supportText":"pants","emoji":"👖"},{"id":"clothes-item-003","targetText":"haljina","supportText":"dress","emoji":"👗"},{"id":"clothes-item-004","targetText":"cipele","supportText":"shoes","emoji":"👟"},{"id":"clothes-item-005","targetText":"jakna","supportText":"jacket","emoji":"🧥"},{"id":"clothes-item-006","targetText":"kupaći kostim","supportText":"swimsuit","emoji":"🩱"},{"id":"clothes-item-007","targetText":"šešir","supportText":"hat","emoji":"👒"}]},{"id":"body","month":9,"title":"Body & Health","subtitle":"tijelo","icon":"Bd","color":"#f472b6","items":[{"id":"body-item-001","targetText":"glava","supportText":"head"},{"id":"body-item-002","targetText":"ruka","supportText":"hand / arm"},{"id":"body-item-003","targetText":"noga","supportText":"leg / foot"},{"id":"body-item-004","targetText":"stomak","supportText":"stomach"},{"id":"body-item-005","targetText":"Boli me glava.","supportText":"My head hurts."},{"id":"body-item-006","targetText":"Dobro sam.","supportText":"I'm fine."}]},{"id":"shopping","month":9,"title":"Shopping","subtitle":"kupovina","icon":"Sh","color":"#a3e635","items":[{"id":"shopping-item-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?"},{"id":"shopping-item-002","targetText":"Koliko košta ovo?","supportText":"How much is this?"},{"id":"shopping-item-003","targetText":"Hoću da kupim...","supportText":"I want to buy..."},{"id":"shopping-item-004","targetText":"Imate li...?","supportText":"Do you have...?"},{"id":"shopping-item-005","targetText":"Samo gledam.","supportText":"I'm just looking."},{"id":"shopping-item-006","targetText":"skupo","supportText":"expensive"},{"id":"shopping-item-007","targetText":"jeftino","supportText":"cheap"}],"dialogue":{"roles":["Shopkeeper","You"],"lines":[{"id":"shopping-dialogue-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?","role":"Shopkeeper"},{"id":"shopping-dialogue-002","targetText":"Koliko košta ovo?","supportText":"How much is this?","role":"You"},{"id":"shopping-dialogue-003","targetText":"Deset eura.","supportText":"Ten euros.","role":"Shopkeeper"},{"id":"shopping-dialogue-004","targetText":"To je malo skupo. Sedam?","supportText":"That's a bit expensive. Seven?","role":"You"},{"id":"shopping-dialogue-005","targetText":"Dobro, sedam.","supportText":"Okay, seven.","role":"Shopkeeper"},{"id":"shopping-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"You"}]}},{"id":"directions","month":10,"title":"Directions & Places","subtitle":"pravci","icon":"Di","color":"#7dd3fc","items":[{"id":"directions-item-001","targetText":"prodavnica","supportText":"store"},{"id":"directions-item-002","targetText":"banka","supportText":"bank"},{"id":"directions-item-003","targetText":"bolnica","supportText":"hospital"},{"id":"directions-item-004","targetText":"blizu","supportText":"near"},{"id":"directions-item-005","targetText":"daleko","supportText":"far"},{"id":"directions-item-006","targetText":"Idi pravo.","supportText":"Go straight."},{"id":"directions-item-007","targetText":"Skreni lijevo.","supportText":"Turn left."},{"id":"directions-item-008","targetText":"Skreni desno.","supportText":"Turn right."}]},{"id":"beach","month":10,"title":"Beach & Summer","subtitle":"plaža i ljeto","icon":"Bc","color":"#f472b6","items":[{"id":"beach-item-001","targetText":"pijesak","supportText":"sand"},{"id":"beach-item-002","targetText":"talas","supportText":"wave"},{"id":"beach-item-003","targetText":"kupanje","supportText":"swimming"},{"id":"beach-item-004","targetText":"peškir","supportText":"towel"},{"id":"beach-item-005","targetText":"sunčane naočare","supportText":"sunglasses"},{"id":"beach-item-006","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!"}],"dialogue":{"roles":["Friend","You"],"lines":[{"id":"beach-dialogue-001","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!","role":"Friend"},{"id":"beach-dialogue-002","targetText":"Odlično! Gdje su moje naočare?","supportText":"Great! Where are my sunglasses?","role":"You"},{"id":"beach-dialogue-003","targetText":"Evo ih, na peškiru.","supportText":"Here they are, on the towel.","role":"Friend"},{"id":"beach-dialogue-004","targetText":"Hvala! Je li voda hladna?","supportText":"Thanks! Is the water cold?","role":"You"},{"id":"beach-dialogue-005","targetText":"Ne, topla je!","supportText":"No, it's warm!","role":"Friend"}]}},{"id":"time","month":11,"title":"Telling Time","subtitle":"sati","icon":"Tm","color":"#a3e635","items":[{"id":"time-item-001","targetText":"Koliko je sati?","supportText":"What time is it?"},{"id":"time-item-002","targetText":"sat","supportText":"hour / o'clock"},{"id":"time-item-003","targetText":"minut","supportText":"minute"},{"id":"time-item-004","targetText":"podne","supportText":"noon"},{"id":"time-item-005","targetText":"ponoć","supportText":"midnight"},{"id":"time-item-006","targetText":"rano","supportText":"early"},{"id":"time-item-007","targetText":"kasno","supportText":"late"}]},{"id":"hobbies","month":11,"title":"Hobbies","subtitle":"hobiji","icon":"Hb","color":"#7dd3fc","items":[{"id":"hobbies-item-001","targetText":"plivati","supportText":"to swim","emoji":"🏊"},{"id":"hobbies-item-002","targetText":"čitati","supportText":"to read","emoji":"📖"},{"id":"hobbies-item-003","targetText":"igrati fudbal","supportText":"to play soccer","emoji":"⚽"},{"id":"hobbies-item-004","targetText":"slušati muziku","supportText":"to listen to music","emoji":"🎧"},{"id":"hobbies-item-005","targetText":"crtati","supportText":"to draw","emoji":"🎨"},{"id":"hobbies-item-006","targetText":"Šta voliš da radiš?","supportText":"What do you like to do?"}]},{"id":"travel","month":12,"title":"Travel Essentials","subtitle":"putovanje","icon":"Tr","color":"#f472b6","items":[{"id":"travel-item-001","targetText":"aerodrom","supportText":"airport","emoji":"✈️"},{"id":"travel-item-002","targetText":"pasoš","supportText":"passport","emoji":"🛂"},{"id":"travel-item-003","targetText":"kofer","supportText":"suitcase","emoji":"🧳"},{"id":"travel-item-004","targetText":"avion","supportText":"plane","emoji":"✈️"},{"id":"travel-item-005","targetText":"karta","supportText":"ticket","emoji":"🎫"},{"id":"travel-item-006","targetText":"Idemo u Crnu Goru!","supportText":"We're going to Montenegro!"}]},{"id":"capstone","month":12,"title":"Arriving in Montenegro","subtitle":"Put it all together","icon":"MG","color":"#a3e635","items":[{"id":"capstone-item-001","targetText":"Dobro došli!","supportText":"Welcome!"},{"id":"capstone-item-002","targetText":"Prijatan boravak.","supportText":"Enjoy your stay."},{"id":"capstone-item-003","targetText":"Jedva čekam.","supportText":"I can't wait."},{"id":"capstone-item-004","targetText":"Napokon smo ovdje!","supportText":"We're finally here!"}],"dialogue":{"roles":["Agent","You"],"lines":[{"id":"capstone-dialogue-001","targetText":"Dobro došli u Crnu Goru! Pasoš, molim.","supportText":"Welcome to Montenegro! Passport, please.","role":"Agent"},{"id":"capstone-dialogue-002","targetText":"Izvolite.","supportText":"Here you go.","role":"You"},{"id":"capstone-dialogue-003","targetText":"Hvala. Prijatan boravak!","supportText":"Thank you. Enjoy your stay!","role":"Agent"},{"id":"capstone-dialogue-004","targetText":"Hvala! Jedva čekam da vidim porodicu.","supportText":"Thank you! I can't wait to see my family.","role":"You"}]}},{"id":"verbs1","title":"Verbs: To Be & To Have","subtitle":"biti, imati","icon":"V1","color":"#7dd3fc","items":[{"id":"verbs1-item-001","targetText":"ja sam","supportText":"I am"},{"id":"verbs1-item-002","targetText":"ti si","supportText":"you are"},{"id":"verbs1-item-003","targetText":"on/ona je","supportText":"he/she is"},{"id":"verbs1-item-004","targetText":"mi smo","supportText":"we are"},{"id":"verbs1-item-005","targetText":"oni su","supportText":"they are"},{"id":"verbs1-item-006","targetText":"ja imam","supportText":"I have"},{"id":"verbs1-item-007","targetText":"ti imaš","supportText":"you have"},{"id":"verbs1-item-008","targetText":"mi imamo","supportText":"we have"}]},{"id":"adjectives","title":"Describing Things","subtitle":"pridjevi","icon":"Ad","color":"#f472b6","items":[{"id":"adjectives-item-001","targetText":"velik / velika","supportText":"big"},{"id":"adjectives-item-002","targetText":"mali / mala","supportText":"small"},{"id":"adjectives-item-003","targetText":"lijep / lijepa","supportText":"beautiful"},{"id":"adjectives-item-004","targetText":"ružan / ružna","supportText":"ugly"},{"id":"adjectives-item-005","targetText":"dobar / dobra","supportText":"good"},{"id":"adjectives-item-006","targetText":"loš / loša","supportText":"bad"},{"id":"adjectives-item-007","targetText":"nov / nova","supportText":"new"},{"id":"adjectives-item-008","targetText":"star / stara","supportText":"old"}]},{"id":"questionwords","title":"Question Words","subtitle":"šta, ko, gdje...","icon":"Qw","color":"#a3e635","items":[{"id":"questionwords-item-001","targetText":"šta","supportText":"what"},{"id":"questionwords-item-002","targetText":"ko","supportText":"who"},{"id":"questionwords-item-003","targetText":"gdje","supportText":"where"},{"id":"questionwords-item-004","targetText":"kada","supportText":"when"},{"id":"questionwords-item-005","targetText":"zašto","supportText":"why"},{"id":"questionwords-item-006","targetText":"kako","supportText":"how"},{"id":"questionwords-item-007","targetText":"koji / koja","supportText":"which"}]},{"id":"plans","title":"Making Plans","subtitle":"Hoćeš li..., Vidimo se!","icon":"Pl","color":"#7dd3fc","items":[{"id":"plans-item-001","targetText":"Hoćeš li...?","supportText":"Do you want to...?"},{"id":"plans-item-002","targetText":"Možemo li...?","supportText":"Can we...?"},{"id":"plans-item-003","targetText":"Kada se vidimo?","supportText":"When do we meet?"},{"id":"plans-item-004","targetText":"Vidimo se sutra.","supportText":"See you tomorrow."},{"id":"plans-item-005","targetText":"Dogovoreno!","supportText":"It's a deal! / Agreed!"}]},{"id":"smalltalk","title":"Small Talk","subtitle":"Getting to know people","icon":"St","color":"#f472b6","items":[{"id":"smalltalk-item-001","targetText":"Šta radiš?","supportText":"What are you doing?"},{"id":"smalltalk-item-002","targetText":"Odakle si?","supportText":"Where are you from?"},{"id":"smalltalk-item-003","targetText":"Koliko dugo si ovdje?","supportText":"How long have you been here?"},{"id":"smalltalk-item-004","targetText":"Sviđa mi se Crna Gora.","supportText":"I like Montenegro."},{"id":"smalltalk-item-005","targetText":"Ovo mi je prvi put ovdje.","supportText":"This is my first time here."}]},{"id":"pasttense","title":"Talking About the Past","subtitle":"bio sam, jučer...","icon":"Pt","color":"#a3e635","items":[{"id":"pasttense-item-001","targetText":"bio sam / bila sam","supportText":"I was"},{"id":"pasttense-item-002","targetText":"Jučer sam...","supportText":"Yesterday I..."},{"id":"pasttense-item-003","targetText":"Prošle godine...","supportText":"Last year..."},{"id":"pasttense-item-004","targetText":"Bilo je zabavno!","supportText":"It was fun!"},{"id":"pasttense-item-005","targetText":"Vidio sam / Vidjela sam","supportText":"I saw"}]},{"id":"futuretense","title":"Talking About the Future","subtitle":"sutra ću, sledeće godine...","icon":"Ft","color":"#7dd3fc","items":[{"id":"futuretense-item-001","targetText":"Sutra ću...","supportText":"Tomorrow I will..."},{"id":"futuretense-item-002","targetText":"Sledeće godine ćemo...","supportText":"Next year we will..."},{"id":"futuretense-item-003","targetText":"Vidjećemo se opet.","supportText":"We'll see each other again."},{"id":"futuretense-item-004","targetText":"Jedva čekam ljeto.","supportText":"I can't wait for summer."}]},{"id":"restaurant","title":"At a Restaurant","subtitle":"Beyond the café","icon":"Rs","color":"#f472b6","items":[{"id":"restaurant-item-001","targetText":"meni","supportText":"menu"},{"id":"restaurant-item-002","targetText":"konobar / konobarica","supportText":"waiter / waitress"},{"id":"restaurant-item-003","targetText":"Preporučujete li nešto?","supportText":"Do you recommend something?"},{"id":"restaurant-item-004","targetText":"Za piće?","supportText":"For drinks?"},{"id":"restaurant-item-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!"},{"id":"restaurant-item-006","targetText":"Bilo je ukusno.","supportText":"It was delicious."}],"dialogue":{"roles":["Waiter","You"],"lines":[{"id":"restaurant-dialogue-001","targetText":"Dobro veče! Izvolite meni.","supportText":"Good evening! Here is the menu.","role":"Waiter"},{"id":"restaurant-dialogue-002","targetText":"Hvala. Preporučujete li nešto?","supportText":"Thanks. Do you recommend something?","role":"You"},{"id":"restaurant-dialogue-003","targetText":"Riba je odlična danas.","supportText":"The fish is excellent today.","role":"Waiter"},{"id":"restaurant-dialogue-004","targetText":"Dobro, hoću ribu, molim.","supportText":"Okay, I'll have the fish, please.","role":"You"},{"id":"restaurant-dialogue-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!","role":"Waiter"},{"id":"restaurant-dialogue-006","targetText":"Hvala, bilo je ukusno!","supportText":"Thanks, it was delicious!","role":"You"}]}},{"id":"gathering","title":"Family Gathering","subtitle":"A full conversation at the table","icon":"Fg","color":"#a3e635","items":[{"id":"gathering-item-001","targetText":"Sjedi ovdje.","supportText":"Sit here."},{"id":"gathering-item-002","targetText":"Poslužite se.","supportText":"Help yourselves."},{"id":"gathering-item-003","targetText":"Živjeli!","supportText":"Cheers!"},{"id":"gathering-item-004","targetText":"Hvala na ručku.","supportText":"Thank you for lunch."},{"id":"gathering-item-005","targetText":"Bilo je divno vidjeti vas.","supportText":"It was wonderful to see you."}],"dialogue":{"roles":["Baka","You"],"lines":[{"id":"gathering-dialogue-001","targetText":"Sjedi ovdje, dijete. Poslužite se!","supportText":"Sit here, child. Help yourselves!","role":"Baka"},{"id":"gathering-dialogue-002","targetText":"Hvala, bako! Miriše odlično.","supportText":"Thanks, grandma! It smells great.","role":"You"},{"id":"gathering-dialogue-003","targetText":"Živjeli!","supportText":"Cheers!","role":"Baka"},{"id":"gathering-dialogue-004","targetText":"Živjeli! Hvala na ručku, bilo je divno.","supportText":"Cheers! Thank you for lunch, it was wonderful.","role":"You"}]}}]`),rt=[{id:"alphabet",title:"Alphabet",subtitle:"Latin & Cyrillic letters",icon:"Aa",color:"#7dd3fc",items:[{id:"alphabet-item-001",targetText:"A a",supportText:'Cyrillic: А а — "ah", as in auto (car)'},{id:"alphabet-item-002",targetText:"B b",supportText:'Cyrillic: Б б — "b", as in brat (brother)'},{id:"alphabet-item-003",targetText:"C c",supportText:'Cyrillic: Ц ц — "ts", as in cvijet (flower)'},{id:"alphabet-item-004",targetText:"Č č",supportText:'Cyrillic: Ч ч — hard "ch", as in čokolada'},{id:"alphabet-item-005",targetText:"Ć ć",supportText:'Cyrillic: Ћ ћ — soft "ch", as in ćevapi'},{id:"alphabet-item-006",targetText:"D d",supportText:'Cyrillic: Д д — "d", as in dijete'},{id:"alphabet-item-007",targetText:"Đ đ",supportText:'Cyrillic: Ђ ђ — soft "j", as in đak'},{id:"alphabet-item-008",targetText:"Dž dž",supportText:'Cyrillic: Џ џ — hard "j", as in džak'},{id:"alphabet-item-009",targetText:"Lj lj",supportText:'Cyrillic: Љ љ — "ly", as in ljubav'},{id:"alphabet-item-010",targetText:"Nj nj",supportText:'Cyrillic: Њ њ — "ny", as in njiva'},{id:"alphabet-item-011",targetText:"Š š",supportText:'Cyrillic: Ш ш — "sh", as in šuma'},{id:"alphabet-item-012",targetText:"Ž ž",supportText:'Cyrillic: Ж ж — "zh", as in žena'}]}],ge={languagePack:it,curriculum:at,topics:ot,bonusTopics:rt},st=[["family","Family","People in your family",[["familja","family"],["nëna","mother"],["babai","father"],["motra","sister"],["vëllai","brother"]]],["greetings","Greetings","Say hello and introduce yourself",[["Përshëndetje!","Hello!"],["Mirëmëngjes!","Good morning!"],["Mirëmbrëma!","Good evening!"],["Si je?","How are you?"],["Mirupafshim!","Goodbye!"]]],["numbers","Numbers","Start counting",[["një","one"],["dy","two"],["tre","three"],["katër","four"],["pesë","five"]]],["colors","Colors","Describe colors",[["i kuq","red"],["blu","blue"],["i gjelbër","green"],["i verdhë","yellow"],["i zi","black"]]],["drinks","Drinks","Everyday drinks",[["ujë","water"],["kafe","coffee"],["çaj","tea"],["qumësht","milk"],["lëng","juice"]]],["food","Food","Everyday foods",[["bukë","bread"],["djathë","cheese"],["mish","meat"],["peshk","fish"],["fruta","fruit"]]],["veg","Vegetables & Market","Shop at the market",[["domate","tomato"],["kastravec","cucumber"],["patate","potato"],["qepë","onion"],["spec","pepper"]]],["cafe","At a Café","Order politely",[["Një kafe, ju lutem.","A coffee, please."],["A keni çaj?","Do you have tea?"],["Pa sheqer.","Without sugar."],["Sa kushton?","How much is it?"],["Faturën, ju lutem.","The bill, please."]]],["talkfamily","Talking About Family","Describe your family",[["Kjo është familja ime.","This is my family."],["Kam një motër.","I have a sister."],["Kam një vëlla.","I have a brother."],["Nëna ime quhet Ana.","My mother is named Ana."],["Ne jetojmë bashkë.","We live together."]]],["aboutme","About Me","Simple sentences about yourself",[["Unë quhem Lena.","My name is Lena."],["Jam trembëdhjetë vjeç.","I am thirteen years old."],["Jetoj në Amerikë.","I live in America."],["Më pëlqen muzika.","I like music."],["Po mësoj shqip.","I am learning Albanian."]]],["days","Days & Time","Days of the week",[["e hënë","Monday"],["e martë","Tuesday"],["e mërkurë","Wednesday"],["e enjte","Thursday"],["e premte","Friday"]]],["outabout","Out & About","Useful phrases away from home",[["Ku është banja?","Where is the bathroom?"],["Nuk e kuptoj.","I do not understand."],["Flisni anglisht?","Do you speak English?"],["Më ndihmoni, ju lutem.","Please help me."],["Faleminderit shumë.","Thank you very much."]]],["weather","Weather","Talk about the weather",[["Është ngrohtë.","It is warm."],["Është ftohtë.","It is cold."],["Po bie shi.","It is raining."],["Ka diell.","It is sunny."],["Fryn erë.","It is windy."]]],["emotions","Emotions & Feelings","Say how you feel",[["Jam i lumtur.","I am happy."],["Jam e lodhur.","I am tired."],["Jam i trishtuar.","I am sad."],["Kam frikë.","I am afraid."],["Jam mirë.","I am well."]]],["house","House & Home","Things around the home",[["shtëpi","house"],["dhomë","room"],["kuzhinë","kitchen"],["derë","door"],["dritare","window"]]],["clothes","Clothes","What people wear",[["këmishë","shirt"],["pantallona","trousers"],["fustan","dress"],["këpucë","shoes"],["xhaketë","jacket"]]],["body","Body & Health","Body and basic health",[["kokë","head"],["dorë","hand"],["këmbë","leg"],["Më dhemb koka.","My head hurts."],["Kam nevojë për një mjek.","I need a doctor."]]],["shopping","Shopping","Buy what you need",[["Dua këtë.","I want this."],["Sa kushton kjo?","How much does this cost?"],["Është shumë shtrenjtë.","It is too expensive."],["A keni një madhësi tjetër?","Do you have another size?"],["Do të paguaj me kartë.","I will pay by card."]]],["directions","Directions & Places","Find your way",[["majtas","left"],["djathtas","right"],["drejt","straight ahead"],["afër","near"],["larg","far"]]],["beach","Beach & Summer","Enjoy a summer day",[["det","sea"],["plazh","beach"],["diell","sun"],["not","swimming"],["krem kundër diellit","sunscreen"]]],["time","Telling Time","Ask and tell the time",[["Sa është ora?","What time is it?"],["Është ora një.","It is one o’clock."],["Është mesditë.","It is noon."],["në mëngjes","in the morning"],["në mbrëmje","in the evening"]]],["hobbies","Hobbies","Talk about free time",[["Më pëlqen të lexoj.","I like to read."],["Më pëlqen muzika.","I like music."],["Luaj futboll.","I play soccer."],["Noton.","He or she swims."],["Vizatoj.","I draw."]]],["travel","Travel Essentials","Move around confidently",[["aeroport","airport"],["stacion","station"],["biletë","ticket"],["pasaportë","passport"],["Ku është hoteli?","Where is the hotel?"]]],["capstone","Putting It Together","Use language in a full day",[["Sapo mbërritëm.","We just arrived."],["Gëzohem që ju takoj.","Nice to meet you."],["Ku do të shkojmë?","Where will we go?"],["Jam gati.","I am ready."],["Ishte një ditë e bukur.","It was a beautiful day."]]],["verbs1","Verbs: To Be & To Have","Core sentence building",[["jam","I am"],["je","you are"],["është","he, she, or it is"],["kam","I have"],["ke","you have"]]],["adjectives","Describing Things","Useful descriptions",[["i madh","big"],["i vogël","small"],["i mirë","good"],["i bukur","beautiful"],["i ri","new"]]],["questionwords","Question Words","Ask useful questions",[["kush","who"],["çfarë","what"],["ku","where"],["kur","when"],["pse","why"]]],["plans","Making Plans","Arrange time together",[["Çfarë do të bëjmë?","What will we do?"],["A do të vish?","Will you come?"],["Shihemi nesër.","See you tomorrow."],["Në çfarë ore?","At what time?"],["Ide e mirë!","Good idea!"]]],["smalltalk","Small Talk","Get to know people",[["Nga je?","Where are you from?"],["Si po kalon?","How is it going?"],["Çfarë të pëlqen?","What do you like?"],["Sa kohë do të rrish?","How long will you stay?"],["Edhe mua.","Me too."]]],["pasttense","Talking About the Past","Share what happened",[["Isha në shtëpi.","I was at home."],["Kisha kohë.","I had time."],["Shkova në qytet.","I went to town."],["Hëngra mëngjes.","I ate breakfast."],["Dje ishte bukur.","Yesterday was nice."]]],["futuretense","Talking About the Future","Say what will happen",[["Do të vij nesër.","I will come tomorrow."],["Do të shkojmë në plazh.","We will go to the beach."],["Do të hamë bashkë.","We will eat together."],["Do të të telefonoj.","I will call you."],["Shihemi javën tjetër.","See you next week."]]],["restaurant","At a Restaurant","Order a full meal",[["Një tavolinë për katër veta.","A table for four."],["Çfarë rekomandoni?","What do you recommend?"],["Do të marr peshkun.","I will have the fish."],["Pa mish, ju lutem.","Without meat, please."],["Ishte shumë e shijshme.","It was very delicious."]]],["gathering","Family Gathering","Talk around the table",[["Mirë se erdhët!","Welcome!"],["Uluni, ju lutem.","Please sit down."],["Si është familja?","How is the family?"],["Gëzuar!","Cheers!"],["Faleminderit për darkën.","Thank you for dinner."]]],["alphabet","Albanian Alphabet","Distinctive Albanian letters",[["ë","ë — a central vowel"],["ç","ç — like ch in chair"],["dh","dh — like th in this"],["gj","gj — a soft palatal sound"],["ll","ll — a strong l sound"]]]],Ae={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},nt=new Map(Ae.months.flatMap((e,t)=>e.map(i=>[i,t+1]))),$e=["#7dd3fc","#f472b6","#a3e635"],Se=st.map(([e,t,i,o])=>{const a=nt.get(e)||10;return{id:e,month:a,bucket:a-1,title:t,subtitle:i,icon:e.slice(0,2).toUpperCase(),color:$e[(a-1)%$e.length],note:"Standard Albanian draft for fluent family review.",items:o.map(([r,s],l)=>({id:`${e}-sq-${String(l+1).padStart(3,"0")}`,targetText:r,supportText:s,reviewStatus:"draft"}))}}),je={languagePack:{id:"albanian-en",targetLanguage:{code:"sq",name:"Albanian",scripts:["Latn"]},supportLanguage:{code:"en",name:"English"},version:"0.1.0",status:"review"},curriculum:Ae,topics:Se.filter(e=>e.id!=="alphabet"),bonusTopics:Se.filter(e=>e.id==="alphabet")},Fe=new Map([[ge.languagePack.id,ge],[je.languagePack.id,je]]);let _=ge,I=_.languagePack,U=_.topics,de=_.bonusTopics,He=[...U,...de];const lt=["Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"],me=new Date(2026,7,10);let V=_.curriculum.months,Ne=_.curriculum.extras,Ge=new Map(V.flatMap((e,t)=>e.map(i=>[i,t+1])));const Ie=[{type:"discover",name:"Discover",detail:"Meet new words and hear them aloud"},{type:"recall",name:"Recall",detail:"Bring yesterday’s language back"},{type:"build",name:"Build",detail:"Put words into useful patterns"},{type:"use",name:"Use",detail:"Speak, listen, and role-play"},{type:"checkpoint",name:"Checkpoint",detail:"Show what you remember"}];function dt(){return[...Fe.values()].map(e=>e.languagePack)}function ct(e){const t=Fe.get(e);if(!t)throw new Error(`Unknown language pack: ${e}`);_=t,I=_.languagePack,U=_.topics,de=_.bonusTopics,He=[...U,...de],V=_.curriculum.months,Ne=_.curriculum.extras,Ge=new Map(V.flatMap((i,o)=>i.map(a=>[a,o+1]))),D=Oe()}function Le(){return U}function pt(){return de}function ut(){return V.flat().map(P).filter(Boolean)}function mt(){return Ne.map(P).filter(Boolean)}function gt(e){return Ge.get(e)||null}function P(e){return He.find(t=>t.id===e)}function Oe(){const e=[];let t=1;for(let i=0;i<10;i++){const o=V[i].map(P);for(let a=0;a<4;a++){const r=i*4+a+1;if(a<3){const s=o[a];for(let l=0;l<5;l++){const c=Ie[l];e.push({id:`voyage-${t}`,number:t,month:i,week:r,dayOfWeek:l+1,topicId:s.id,type:c.type,title:`${s.title}: ${c.name}`,detail:c.detail}),t++}}else for(let s=0;s<5;s++){const l=Ie[s];e.push({id:`voyage-${t}`,number:t,month:i,week:r,dayOfWeek:s+1,topicId:null,type:`integration-${l.type}`,title:`Integration: ${l.name}`,detail:`Review topics from Month ${i+1}`}),t++}}}return e}let D=Oe();function G(e){const t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function O(e,t=Math.random){const i=e.slice();for(let o=i.length-1;o>0;o--){const a=Math.floor(t()*(o+1));[i[o],i[a]]=[i[a],i[o]]}return i}function R(e,t=6,i=Math.random){const o=Math.min(t,e.length),a=O(e,i).slice(0,o),r=[];return a.forEach((s,l)=>{r.push({id:`target-${l}`,pairId:l,text:s.targetText,kind:"target"}),r.push({id:`support-${l}`,pairId:l,text:s.supportText,kind:"support"})}),{tiles:O(r,i),selectedIds:[],matchedIds:[]}}function N(e,t=8,i=Math.random){const o=Math.min(t,e.length);return{questions:O(e,i).slice(0,o).map(s=>{const l=e.filter(p=>p.targetText!==s.targetText),c=O(l,i).slice(0,Math.min(3,l.length)),d=O([s.targetText,...c.map(p=>p.targetText)],i);return{promptText:s.supportText,correctAnswer:s.targetText,options:d}}),qIdx:0,score:0,selected:null,answered:!1}}function yt(e){let t=[...String(e)].reduce((i,o)=>i*31+o.charCodeAt(0)>>>0,2166136261);return()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function We(e,t,i={}){const o=[],a=i.random||Math.random;if(e.topicId){const r=P(e.topicId),s=U[U.indexOf(r)-1]||null;s&&o.push({type:"warmup",title:"Warmup",subtitle:`Quick practice from ${s.title}`,items:s.items.slice(0,5)}),e.type==="discover"?(o.push({type:"discover",title:"New Vocabulary",subtitle:`Discover words for ${r.title}`,items:r.items}),o.push({type:"match",title:"Recall Match",subtitle:"Connect the translations",match:R(r.items,4,a)})):e.type==="recall"?(o.push({type:"recall-flash",title:"Vocabulary Recall",subtitle:"Self-assess your memory",items:O(r.items,a)}),o.push({type:"quiz",title:"Quick Quiz",subtitle:"Test your understanding",quiz:N(r.items,5,a)})):e.type==="build"?(o.push({type:"note",title:"Sentence Pattern",subtitle:"How sentences are structured",note:r.note||"Practice assembling phrases in this topic."}),o.push({type:"quiz",title:"Pattern Practice",subtitle:"Complete the sentences correctly",quiz:N(r.items,6,a)})):e.type==="use"?r.dialogue?o.push({type:"dialogue",title:"Dialogue Practice",subtitle:"Read the roles out loud",dialogue:r.dialogue}):o.push({type:"listen",title:"Listen & Repeat",subtitle:"Practice your pronunciation",items:r.items}):e.type==="checkpoint"&&(o.push({type:"quiz",title:"Topic Quiz",subtitle:"Show what you remember",quiz:N(r.items,8,a)}),o.push({type:"match",title:"Vocabulary Match",subtitle:"Match all pairs to complete the topic",match:R(r.items,6,a)}))}else{const s=V[e.month].map(P).flatMap(l=>l.items);o.push({type:"quiz",title:"Integration Quiz",subtitle:`Review from Month ${e.month+1}`,quiz:N(s,8,a)}),o.push({type:"match",title:"Integration Match",subtitle:"Connect the words quickly",match:R(s,8,a)})}return o.push({type:"done",title:"Completed!",subtitle:"Awesome job!"}),o}const M=null;async function ht(){{alert("Supabase credentials are not configured in your environment variables. Please check the .env file.");return}}async function qe(){}let pe=I.id,Te=I.version;function ft(){pe=I.id,Te=I.version}function vt(e){return localStorage.getItem(`nautilus:${e}:active-pack`)||"montenegrin-en"}function xt(e,t){localStorage.setItem(`nautilus:${e}:active-pack`,t)}function K(e,t,i=pe){return`nautilus:${i}:${e}:${t}`}function bt(e,t){return{stars:`mn_${e}_stars`,topics:`mn_${e}_completed`,lessons:`mn_${e}_voyage_lessons`,activity:`mn_${e}_activity_dates`,dialogues:`mn_${e}_dialogues`}[t]}function X(e,t,i){const o=K(e,t),a=localStorage.getItem(o);if(a!==null)return a;const r=bt(e,t),s=r?localStorage.getItem(r):null;return s!==null?(localStorage.setItem(o,s),s):i}function Y(){const e=localStorage.getItem("mn_profiles");if(e)try{return JSON.parse(e).map(i=>String(i.id).startsWith("local-")?i:{...i,isGuide:!1})}catch{}return[]}function Tt(e){localStorage.setItem("mn_profiles",JSON.stringify(e))}function wt(){return localStorage.getItem("mn_active_profile")||null}function kt(e){e?localStorage.setItem("mn_active_profile",e):localStorage.removeItem("mn_active_profile")}function B(e){if(!e)return null;const i=Y().find(d=>d.name===e)||{id:`local-${e}`,isGuide:!1},o=parseInt(X(e,"stars","0"),10)||0;let a=[];try{a=JSON.parse(X(e,"topics","[]"))}catch{}let r=[];try{r=JSON.parse(X(e,"lessons","[]"))}catch{}let s=[];try{s=JSON.parse(X(e,"activity","[]"))}catch{}const l=parseInt(X(e,"dialogues","0"),10)||0,c=$t(s);return{id:i.id,profile:e,stars:o,streakDays:c,completedTopicIds:a,completedLessons:r,activityDates:s,dialoguesDone:l,isGuide:i.isGuide,packId:pe,packVersion:Te}}function $t(e){if(!e||e.length===0)return 0;const t=new Set(e);let i=0,o=new Date;o.setHours(0,0,0,0);const a=G(o);o.setDate(o.getDate()-1);const r=G(o);if(!t.has(a)&&!t.has(r))return 0;let s=t.has(a)?new Date:o;for(s.setHours(0,0,0,0);t.has(G(s));)i++,s.setDate(s.getDate()-1);return i}function St(e,t){localStorage.setItem(K(e,"stars"),String(t))}function jt(e,t){localStorage.setItem(K(e,"topics"),JSON.stringify(t))}function It(e,t){localStorage.setItem(K(e,"lessons"),JSON.stringify(t))}function Lt(e,t){localStorage.setItem(K(e,"activity"),JSON.stringify(t))}function qt(e,t){localStorage.setItem(K(e,"dialogues"),String(t))}function Dt(e,t){const i=B(e);if(i.isGuide)return;const o=i.stars+t;St(e,o),Be(e),ae(i.id,"awardStars",{name:e,stars:o})}function Be(e){const t=B(e);if(t.isGuide)return;const i=G(new Date);if(!t.activityDates.includes(i)){const o=[...t.activityDates,i];Lt(e,o),ae(t.id,"recordActivity",{name:e,dateKey:i})}}function _t(e,t){const i=B(e);if(!i.isGuide&&!i.completedLessons.includes(t)){const o=[...i.completedLessons,t];It(e,o),Be(e),ae(i.id,"completeLesson",{name:e,lessonId:t})}}function De(e,t){const i=B(e);if(!i.isGuide&&!i.completedTopicIds.includes(t)){const o=[...i.completedTopicIds,t];jt(e,o),ae(i.id,"completeTopic",{name:e,topicId:t})}}function Et(e){const t=B(e);if(t.isGuide)return;const i=t.dialoguesDone+1;qt(e,i),ae(t.id,"incrementDialogues",{name:e,dialoguesDone:i})}function Pt(){return Y().filter(i=>!i.isGuide).map(i=>{const o=B(i.name);return{name:i.name,stars:o.stars,streak:o.streakDays,completed:o.completedTopicIds.length}})}async function _e(e,t){const i=Y();if(i.some(o=>o.name.toLowerCase()===e.toLowerCase()))throw new Error("Profile name already exists");{const o=`local-${e}`,a=[...i,{id:o,name:e,isGuide:t}];Tt(a)}}function Mt(){try{return JSON.parse(localStorage.getItem("mn_sync_queue")||"[]")}catch{return[]}}function zt(e){localStorage.setItem("mn_sync_queue",JSON.stringify(e))}function ae(e,t,i){var r,s;if(String(e).startsWith("local-"))return;const o=Mt(),a=((s=(r=globalThis.crypto)==null?void 0:r.randomUUID)==null?void 0:s.call(r))||`${Date.now()}-${Math.random().toString(16).slice(2)}`;o.push({operationId:a,profileId:e,packId:pe,packVersion:Te,type:t,payload:i,timestamp:Date.now()}),zt(o),Re()}async function Re(){}async function Ee(){}function z(){throw new Error("Family cloud features are not configured.")}async function Ct(){z();const{data:e,error:t}=await M.from("family_memberships").select("family_id, role, joined_at, families(id, name, learners_can_invite)").order("joined_at",{ascending:!0});if(t)throw t;return e||[]}async function Pe(e){z();const{data:t,error:i}=await M.rpc("get_family_overview",{target_family:e});if(i)throw i;return t}async function At(e){z();const t=e.trim();if(!t)throw new Error("Family name is required.");const{data:i,error:o}=await M.rpc("create_family",{family_name:t});if(o)throw o;return i}async function Ft(e,t,i="learner"){z();const o=t.trim().toLowerCase();if(!o)throw new Error("Invitation email is required.");const{data:a,error:r}=await M.rpc("create_family_invitation",{target_family:e,invite_email:o,invite_role:i});if(r)throw r;return a}async function Ht(e,t){z();const i=t.trim().toLowerCase();if(!i)throw new Error("Learner email is required.");const{data:o,error:a}=await M.rpc("create_learner_profile_invitation",{target_profile:e,invite_email:i});if(a)throw a;return o}function Nt(e=new Date){const t=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${t}-${i}-${o}`}async function Ue(e,t){z();const{data:i,error:o}=await M.rpc("get_family_play_state",{target_family:e,target_pack_id:t});if(o)throw o;return i||{completedDays:0,completedDates:[],activeSession:null}}async function Gt({familyId:e,packId:t,packVersion:i,lessonId:o,voyageDay:a,participantProfileIds:r=[],date:s=new Date,timezone:l=Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}){z();const{data:c,error:d}=await M.rpc("start_family_play",{target_family:e,target_pack_id:t,target_pack_version:i,target_lesson_id:o,target_voyage_day:a,target_local_date:Nt(s),target_timezone:l,participant_profiles:r});if(d)throw d;return c}async function Ot(e,t,i=null){z();const{data:o,error:a}=await M.rpc("control_family_play",{target_session:e,requested_status:t,requested_segment:i});if(a)throw a;return o}async function Wt(e){z();const{data:t,error:i}=await M.rpc("join_family_play",{target_session:e});if(i)throw i;return t}async function Bt(e){z();const{data:t,error:i}=await M.rpc("complete_family_play",{target_session:e});if(i)throw i;return t}function Rt(e,t,i){var $,S,u,v;const a=Y(),r=a.filter(g=>!g.isGuide),s=a.filter(g=>g.isGuide),l=($=t.families)==null?void 0:$.some(g=>g.role==="owner"||g.role==="adult_guide"),c=`<div style="text-align: center; font-size: 12px; color: var(--text-muted); margin-bottom: 24px; border: 1px dashed var(--border-color); padding: 8px; border-radius: 8px;">
         ⚠️ Supabase is not configured (Local-Only Mode active)
       </div>`,d=t.sessionUser&&Array.isArray(t.families)&&t.families.length===0,p=t.sessionUser&&t.families===null&&!t.familyError;if(p||d){e.innerHTML=`
      <div class="profile-selection">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 16px; text-align: center;">
          <div class="logo-icon" style="width: 56px; height: 56px; font-size: 20px;">N</div>
          <h1 style="font-size: 32px; letter-spacing: -0.5px;">${p?"Loading your family…":"Create your family"}</h1>
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
      </div>`,(S=e.querySelector("#family-setup-form"))==null||S.addEventListener("submit",async g=>{g.preventDefault();const h=e.querySelector("#family-name").value.trim();h&&await i.createFamily(h)}),(u=e.querySelector("#logout-btn"))==null||u.addEventListener("click",async()=>{await qe(),i.refresh()});return}e.innerHTML=`
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
  `;const f=e.querySelector("#learners-grid"),m=e.querySelector("#guides-grid");r.forEach(g=>{const h=document.createElement("div");h.style.display="flex",h.style.flexDirection="column",h.style.gap="8px";const b=document.createElement("button");if(b.className="profile-btn",b.innerText=`I'm ${g.name}`,b.addEventListener("click",()=>i.switchProfile(g.name)),h.appendChild(b),l&&!g.linkedUserId){const L=document.createElement("button");L.className="btn btn-secondary",L.style.fontSize="12px",L.style.padding="6px 10px",L.innerText=`Invite ${g.name} to Sign In`,L.addEventListener("click",async()=>{const H=prompt(`Enter ${g.name}'s Google account email:`);H!=null&&H.trim()&&await i.inviteLearner(g.id,g.name,H.trim())}),h.appendChild(L)}else if(g.linkedUserId){const L=document.createElement("span");L.style.cssText="font-size: 12px; color: var(--teal); text-align: center;",L.innerText="✓ Google sign-in linked",h.appendChild(L)}f.appendChild(h)}),s.forEach(g=>{const h=document.createElement("button");h.className="profile-btn",h.style.borderColor="var(--pink)",h.style.color="var(--text-main)",h.innerText=`${g.name}`,h.addEventListener("click",()=>i.switchProfile(g.name)),m.appendChild(h)});const y=document.createElement("button");if(y.className="profile-btn",y.style.borderStyle="dashed",y.style.borderColor="var(--border-color)",y.style.color="var(--text-muted)",y.style.fontSize="14px",y.innerText=t.sessionUser?"+ Add Learner":"+ Add Profile",y.addEventListener("click",async()=>{const g=prompt("Enter profile name:");if(!g||g.trim()==="")return;const h=t.sessionUser?!1:confirm("Is this profile a Parent/Guide? (Cancel for Learner)");try{await _e(g.trim(),h),i.refresh()}catch(b){alert(`Error creating profile: ${b.message}`)}}),f.appendChild(y),r.length===0){const g=document.createElement("button");g.className="profile-btn visual-preview-btn",g.innerHTML='<span aria-hidden="true">⛵</span><span>Explore the Visual Preview</span><small>Open the illustrated 200-day voyage</small>',g.addEventListener("click",async()=>{const h="Preview Learner";await _e(h,!1),i.switchProfile(h)}),f.prepend(g)}const x=e.querySelector("#login-btn");x&&x.addEventListener("click",async()=>{try{await ht()}catch(g){alert(`Google login failed: ${g.message}`)}});const k=e.querySelector("#logout-btn");k&&k.addEventListener("click",async()=>{try{await qe(),i.refresh()}catch(g){alert(`Logout failed: ${g.message}`)}});const j=e.querySelector("#invite-partner-btn");j&&j.addEventListener("click",async()=>{const g=prompt("Enter your partner's Google account email:");g!=null&&g.trim()&&await i.invitePartner(g.trim())}),(v=e.querySelector("#family-overview-btn"))==null||v.addEventListener("click",i.goFamilyOverview)}function Ve(e=[]){return[...new Set(e.filter(Boolean))].sort()}function J(e=[]){return Math.min(200,Ve(e).length)}function Ut(e=[]){const t=J(e);return{completedDays:t,nextDay:t>=200?200:t+1,percent:Math.round(t/200*100)}}function Vt(e=[]){const t=J(e);return Array.from({length:10},(i,o)=>{const a=Math.max(0,Math.min(20,t-o*20));return{month:o+1,completedDays:a,earned:a===20}})}const Yt=[{id:"anchors-aweigh",label:"Anchors Aweigh",min:0,icon:"⚓"},{id:"making-headway",label:"Making Headway",min:50,icon:"⛵"},{id:"rounding-the-mark",label:"Rounding the Mark",min:100,icon:"🧭"},{id:"flying-colors",label:"Flying Colors",min:150,icon:"🚩"},{id:"shipshape-moored",label:"Shipshape · Moored",min:200,icon:"🏝️"}],ce="https://kormilo-nautilus.netlify.app/",Ye=[{min:1,icon:"🐠",name:"Reef Scout",note:"First lesson completed"},{min:25,icon:"🐬",name:"Bright Dolphin",note:"25 voyage days completed"},{min:75,icon:"🐢",name:"Steady Turtle",note:"75 voyage days completed"},{min:150,icon:"🐋",name:"Great Voyager",note:"150 voyage days completed"}];function Ke(e){const t=Math.max(0,Math.min(200,Number(e)||0));return[...Yt].reverse().find(i=>t>=i.min)}function Kt(e){const t=Math.max(0,Number(e)||0);return Ye.filter(i=>t>=i.min)}function Me(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function Jt(e){var d,p,f,m;const t=((d=e.familyPlayState)==null?void 0:d.completedDays)??J(e.activityDates),i=Ke(t),o=Kt(t),a=Vt(((p=e.familyPlayState)==null?void 0:p.completedDates)||e.activityDates),r=Ye.find(y=>t<y.min),s=Math.round(t/200*100),l=((f=e.languagePacks.find(y=>y.id===e.activePackId))==null?void 0:f.targetLanguage.name)||"Language",c=Array.from({length:10},(y,x)=>{const k=(x+1)*20,j=x*20,$=t>=k,S=t>=j&&t<k;return`<li class="voyage-port ${$?"reached":S?"current":"charted"}">
      <span class="voyage-port__marker">${$?"✓":S?"⛵":x+1}</span>
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
        <img class="voyage-sea__art" src="${ce}assets/illustrations/nautilus-voyage-map.jpg" alt="An illustrated sea route leading from a moonlit harbor toward the mountains and coastal towns of Montenegro">
        <div class="voyage-sea__shade" aria-hidden="true"></div>
        <div class="voyage-route" aria-hidden="true"><span></span></div>
        <ol class="voyage-ports" aria-label="Ten voyage ports">${c}</ol>
      </div>
    </section>

    <section class="captains-quarters" aria-labelledby="quarters-title">
      <div class="quarters-profile">
        <div class="quarters-avatar" aria-hidden="true">${((m=o.at(-1))==null?void 0:m.icon)||"⛵"}</div>
        <div>
          <div class="hero-tag">Captain's Quarters</div>
          <h3 id="quarters-title">${Me(e.profile)}'s logbook</h3>
          <p>${i.label} · ${e.streakDays} day streak · ${e.stars} stars</p>
        </div>
      </div>
      <div class="quarters-grid">
        <div class="quarters-panel">
          <h4>${Me(l)} Passport</h4>
          <p class="quarters-help">Earn one stamp for every 20 learning days.</p>
          <div class="passport-stamps">
            ${a.map(y=>`<div class="passport-stamp ${y.earned?"earned":""}" title="Month ${y.month}: ${y.completedDays} of 20 learning days">
              <span>${y.earned?"⚓":y.month}</span><small>${y.completedDays}/20</small>
            </div>`).join("")}
          </div>
        </div>
        <div class="quarters-panel">
          <h4>Friends of the Sea</h4>
          <p class="quarters-help">Companions mark steady progress, never competition.</p>
          <img class="sea-friends__art ${o.length?"":"waiting"}" src="${ce}assets/illustrations/friends-of-the-sea.jpg" alt="A reef fish, dolphin, sea turtle, and whale swimming together as a voyage crew">
          <div class="sea-friends">
            ${o.length?o.map(y=>`<div class="sea-friend" title="${y.note}"><span>${y.icon}</span><small>${y.name}</small></div>`).join(""):'<p class="quarters-empty">Complete your first lesson to meet your Reef Scout.</p>'}
          </div>
          ${r?`<p class="next-friend">Next companion at voyage day ${r.min}.</p>`:'<p class="next-friend">Your whole crew is aboard!</p>'}
        </div>
      </div>
    </section>`}function Qt(e){var l;const t=((l=e.familyPlayState)==null?void 0:l.completedDays)??J(e.activityDates),i=Math.round(t/200*100),o=Ke(t),a=Math.min(10,Math.floor(t/20)+1),r=Math.max(0,Math.min(20,a*20-t));return`<section class="immersive-voyage" style="--voyage-camera:${Math.max(0,Math.min(100,i))}%;--voyage-progress:${i}%" aria-labelledby="immersive-voyage-title">
    <picture class="immersive-voyage__world-frame">
      <source media="(min-width: 700px)" srcset="${ce}assets/illustrations/nautilus-journey-world-wide.jpg">
      <img class="immersive-voyage__world" src="${ce}assets/illustrations/nautilus-journey-world.jpg" alt="A winding Adriatic learning route from a moonlit family harbor through coastal villages to a bright mountain lookout">
    </picture>
    <div class="immersive-voyage__veil" aria-hidden="true"></div>
    <div class="immersive-voyage__masthead">
      <span class="immersive-voyage__eyebrow">The 200-day family voyage</span>
      <span>Port ${a} of 10</span>
    </div>
    <div class="immersive-voyage__hud">
      <div class="hero-tag">Together on the same route</div>
      <h1 id="immersive-voyage-title">${o.icon} ${o.label}</h1>
      <p>${t} family learning days complete · ${r} to the next port</p>
      <div class="immersive-voyage__meter" aria-label="${i}% of family voyage complete"><span></span></div>
      <a class="btn btn-primary" href="#voyage-plan">Explore the route plan ↓</a>
    </div>
    <div class="immersive-voyage__vessel" aria-hidden="true"><span>⛵</span><i></i></div>
    <div class="immersive-voyage__hint">The world climbs from moonlit harbor to mountain sunrise as your family learns together.</div>
  </section>`}function Zt(e,t,i){var y,x,k,j,$,S;const o=t.sessionUser?Y().filter(u=>!String(u.id).startsWith("local-")):Y(),a=((y=t.familyPlayState)==null?void 0:y.completedDays)??J(t.activityDates),r=D[Math.min(a,199)],s=P(r.topicId)||Le()[0],l=t.completedLessons.includes(r.id),d=[{id:"first",label:"First Steps",cond:t.completedTopicIds.length>=1},{id:"getting",label:"Getting Started",cond:t.completedTopicIds.length>=5},{id:"halfway",label:"Halfway Hero",cond:t.completedTopicIds.length>=17},{id:"fluent",label:"Fluent Enough",cond:t.completedTopicIds.length>=Le().length},{id:"chatter",label:"Chatterbox",cond:t.dialoguesDone>=3},{id:"streak",label:"7-Day Streak",cond:t.streakDays>=7},{id:"pro",label:"Practice Pro",cond:t.stars>=50}].filter(u=>u.cond),p={};ut().forEach(u=>{const v=`Month ${gt(u.id)}`;p[v]||(p[v]=[]),p[v].push(u)});let f="";e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
          <div class="logo-icon">${I.targetLanguage.code.toUpperCase()}</div>
          <div class="logo-title">Learn ${I.targetLanguage.name}</div>
        </button>
        ${f}
        ${(x=t.families)!=null&&x.some(u=>u.role==="owner"||u.role==="adult_guide")?'<button class="btn btn-secondary" id="family-overview-btn" style="padding: 6px 12px; font-size: 12px;">Family Overview</button>':""}
      </div>

      <div class="nav-actions">
        <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted);">
          Language
          <select id="language-select" class="badge-pill" aria-label="Learning language" style="color: var(--text-main); min-height: 44px;">
            ${t.languagePacks.map(u=>`
              <option value="${u.id}" ${u.id===t.activePackId?"selected":""}>${u.targetLanguage.name}${u.status==="review"?" · Review":""}</option>
            `).join("")}
          </select>
        </label>
        <!-- Profile switcher -->
        <div class="profile-pill-container" role="group" aria-label="Profiles">
          ${o.map(u=>`
            <button class="profile-pill-btn ${t.profile===u.name?"active":""}" data-profile="${u.name}" aria-label="Switch to profile ${u.name}">${u.name}</button>
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
      ${(k=t.familyPlayState)!=null&&k.activeSession?`
        <section class="family-play-dashboard-banner" aria-label="Active Family Play session">
          <div><span>Family Play is ${t.familyPlayState.activeSession.status}</span><strong>Voyage day ${t.familyPlayState.activeSession.voyageDay} · Join your family</strong></div>
          <button class="btn btn-primary" id="join-family-play-btn">Open Shared Lesson →</button>
        </section>`:""}
      <!-- Tonight's Session Hero -->
      <section class="hero-card" aria-labelledby="hero-title-id">
        <div class="hero-text">
          <div class="hero-tag">${l?"Recommended Review":"Today's Target"}</div>
          <h2 class="hero-title" id="hero-title-id">${r.title}</h2>
          <p class="hero-subtitle">
            ${t.isGuide?`Voyage day ${r.number} · Preview ${s.title} before the kids sit down`:`Voyage day ${r.number} · ${r.detail} · about 10–15 minutes`}
          </p>
        </div>
        <button class="btn btn-primary" id="start-session-btn">
          ${t.isGuide?"Preview Session":l?"Replay Session":"Start Lesson"}
        </button>
      </section>

      <!-- Calendar Mount -->
      <section class="voyage-calendar" id="calendar-mount" aria-label="Learning Voyage Calendar"></section>

      ${t.isGuide?`
        <section class="guide-voyage-link">
          <h3>200-day learning voyage</h3>
          <button class="btn btn-secondary btn-pill" id="view-voyage-btn">View voyage plan →</button>
        </section>`:Jt(t)}

      <!-- Guide Progress dashboard -->
      ${t.isGuide?`
        <section aria-label="Learner Progress Summary">
          <h3 class="section-title">Kids' Progress</h3>
          <div class="kids-progress-grid">
            ${Pt().map(u=>`
              <div class="kid-progress-card">
                <div class="kid-progress-header">${u.name}</div>
                <div class="kid-progress-stats">
                  <div>⭐ ${u.stars} stars</div>
                  <div>🔥 ${u.streak}d streak</div>
                  <div>📚 ${u.completed} topics done</div>
                </div>
              </div>
            `).join("")}
          </div>
        </section>
      `:""}

      <!-- Badges summary -->
      ${!t.isGuide&&d.length>0?`
        <section aria-label="Earned Badges">
          <h3 class="section-title">Badges Earned</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px;">
            ${d.map(u=>`
              <div class="badge-pill" style="border-color: var(--amber); color: var(--text-main);">
                <span style="color: var(--amber);">🎖</span> ${u.label}
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

        ${Object.keys(p).map(u=>`
          <div style="margin-bottom: 28px;">
            <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">${u}</h4>
            <div class="cards-grid">
              ${p[u].map(v=>{const g=t.completedTopicIds.includes(v.id);return`
                  <button type="button" class="topic-card" data-topic-id="${v.id}" aria-label="Practice ${v.title}">
                    <div class="topic-card__icon" style="background: ${v.color};">${v.icon}</div>
                    ${g?'<div class="topic-card__check">✓</div>':""}
                    <div>
                      <div class="topic-card__title">${v.title}</div>
                      <div class="topic-card__subtitle">${v.subtitle}</div>
                    </div>
                    <div class="topic-card__count">${v.items.length} words${v.dialogue?" · role-play":""}</div>
                  </button>
                `}).join("")}
            </div>
          </div>
        `).join("")}

        <!-- Anytime extras and advanced material -->
        <div style="margin-bottom: 28px;">
          <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Anytime Extras &amp; Capstones</h4>
          <div class="cards-grid">
            ${[...mt(),...pt()].map(u=>`
              <button type="button" class="topic-card" data-topic-id="${u.id}" aria-label="Practice ${u.title}">
                <div class="topic-card__icon" style="background: ${u.color};">${u.icon}</div>
                <div>
                  <div class="topic-card__title">${u.title}</div>
                  <div class="topic-card__subtitle">${u.subtitle}</div>
                </div>
                <div class="topic-card__count">${u.items.length} words</div>
              </button>
            `).join("")}
          </div>
        </div>
      </section>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#start-session-btn").addEventListener("click",()=>i.startSession(r)),e.querySelector("#view-voyage-btn").addEventListener("click",i.goCurriculum),e.querySelectorAll(".profile-pill-btn").forEach(u=>{u.id!=="nav-add-profile-btn"&&u.addEventListener("click",v=>{i.switchProfile(v.target.dataset.profile)})}),e.querySelector("#nav-add-profile-btn").addEventListener("click",()=>{i.goProfileSelect()}),(j=e.querySelector("#language-select"))==null||j.addEventListener("change",u=>{i.selectLanguage(u.target.value)}),($=e.querySelector("#family-overview-btn"))==null||$.addEventListener("click",i.goFamilyOverview),(S=e.querySelector("#join-family-play-btn"))==null||S.addEventListener("click",i.openFamilySession),e.querySelectorAll(".topic-card").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.topicId;v&&i.openTopic(v)})});const m=e.querySelector("#mixed-review-card");m&&m.addEventListener("click",i.startMixedReview)}function Xt(e,t,i,o){var H;const a=t.calendarMonth,r=new Date(me.getFullYear(),me.getMonth()+a,1),s=r.getFullYear(),l=r.getMonth(),c=(new Date(s,l,1).getDay()+6)%7,d=new Date(s,l+1,0).getDate(),p=new Map;let f=new Date(me);for(let T=0;T<D.length;T++){for(;f.getDay()===0||f.getDay()===6;)f.setDate(f.getDate()+1);p.set(G(f),D[T]),f.setDate(f.getDate()+1)}const m=[];for(let T=0;T<c;T++)m.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const y=G(new Date),x=((H=t.familyPlayState)==null?void 0:H.completedDates)||t.activityDates,k=new Set(Ve(x));for(let T=1;T<=d;T++){const Q=new Date(s,l,T),ue=G(Q),Z=p.get(ue),ke=k.has(ue),tt=ue===y;let oe="state-rest",re="In harbor";Z&&(oe="state-planned",re="Charted"),tt&&Z&&!ke&&(oe="state-making-way",re="Making way"),ke&&(oe="state-full-sail",re="Full sail"),m.push({label:String(T),stateClass:oe,ariaLabel:`${Q.toLocaleDateString("en-US",{month:"long",day:"numeric"})}: ${re}${Z?`, Lesson ${Z.number}: ${Z.title}`:""}`})}for(;m.length%7!==0;)m.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const j=r.toLocaleDateString("en-US",{month:"long",year:"numeric"}),$=Ut(x),S=new Date;S.setHours(0,0,0,0),S.setDate(S.getDate()-(S.getDay()+6)%7);const u=new Date(S);u.setDate(u.getDate()+7);const v=t.activityDates.filter(T=>{const Q=new Date(`${T}T12:00:00`);return Q>=S&&Q<u}).length,g=t.activityDates.filter(T=>T.startsWith(`${s}-${String(l+1).padStart(2,"0")}-`)).length,h=m.filter(T=>T.label&&T.ariaLabel.includes("Lesson"));e.innerHTML=`
    <div class="voyage-calendar__head">
      <div>
        <div style="color: var(--cyan); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 4px;">Ten-month learning voyage</div>
        <h3 class="voyage-calendar__title">${j}</h3>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <div class="voyage-calendar__count" title="Voyage Progress">
          ${$.completedDays<200?`${$.completedDays} of 200 learning days complete`:"Voyage complete · 200 of 200"}
        </div>
        <div class="voyage-calendar__nav">
          <button id="cal-prev" aria-label="Previous month" ${a===0?'disabled style="opacity:0.3; cursor:default;"':""}>‹</button>
          <button id="cal-next" aria-label="Next month" ${a===9?'disabled style="opacity:0.3; cursor:default;"':""}>›</button>
        </div>
      </div>
    </div>

    <div class="voyage-calendar__grid" role="grid" aria-label="Calendar for ${j}">
      ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(T=>`
        <div class="voyage-calendar__weekday" role="columnheader" aria-label="${T}">${T}</div>
      `).join("")}

      ${m.map(T=>T.label===""?`<div class="voyage-calendar__day" style="${T.style}" aria-hidden="true"></div>`:`
          <div class="voyage-calendar__day ${T.stateClass}" role="gridcell" aria-label="${T.ariaLabel}" tabindex="0">
            ${T.label}
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
      <span>${$.completedDays} learning ${$.completedDays===1?"day":"days"} completed · ${$.percent}%</span>
      <span>•</span>
      <span>${t.completedLessons.length} activities completed</span>
      <span>•</span>
      <span>${v} active ${v===1?"day":"days"} this week</span>
      <span>•</span>
      <span>${g} active ${g===1?"day":"days"} this month</span>
    </div>

    <details class="calendar-list">
      <summary>View this month as a list</summary>
      <ul>
        ${h.map(T=>`<li>${T.ariaLabel}</li>`).join("")}
      </ul>
    </details>
  `;const b=e.querySelector("#cal-prev"),L=e.querySelector("#cal-next");b&&a>0&&b.addEventListener("click",i),L&&a<9&&L.addEventListener("click",o)}const ei=[{id:"red",hex:"#e53935",dark:!1,terms:["red","crvena","e kuqe"]},{id:"blue",hex:"#1976d2",dark:!1,terms:["blue","plava","blu"]},{id:"green",hex:"#2e7d32",dark:!1,terms:["green","zelena","e gjelbër"]},{id:"yellow",hex:"#f9c928",dark:!0,terms:["yellow","žuta","e verdhë"]},{id:"black",hex:"#111318",dark:!1,terms:["black","crna","e zezë"]},{id:"white",hex:"#f5f1e8",dark:!0,terms:["white","bijela","e bardhë"]}],ti="https://kormilo-nautilus.netlify.app/";function ye(e){const t=String(e||"").trim().toLocaleLowerCase();return ei.find(i=>i.terms.includes(t))||null}function ii(e,t){return e!=="colors"?null:ye(t==null?void 0:t.supportText)||ye(t==null?void 0:t.targetText)}function we(e,t){const i=ii(e,t);return i?`<div class="color-field color-field--${i.id}" style="--lesson-color:${i.hex}" aria-hidden="true">
    <span class="color-field__sun"></span><span class="color-field__sail"></span><span class="color-field__wave"></span>
  </div>`:t!=null&&t.emoji?`<div class="flashcard-emoji">${t.emoji}</div>`:""}function Je(e){const t=ye(e);return t?` style="--tile-color:${t.hex};--tile-text:${t.dark?"#111318":"#ffffff"}" data-color-tile="true"`:""}function Qe(e){return e!=="colors"?"":`<figure class="lesson-scene lesson-scene--colors">
    <img src="${ti}assets/illustrations/colors-harbor.jpg" alt="A Montenegro harbor with a red boat, blue sea, green shutters, yellow umbrella, black cat, and white church tower">
    <figcaption><strong>Find the colors in the harbor.</strong><span>Red boat · blue sea · green shutters · yellow umbrella · black cat · white tower</span></figcaption>
  </figure>`}function Ze(e,t,i){const o=P(t.topicId),a=t.completedTopicIds.includes(o.id),r=!a&&!t.isGuide,s=[{id:"flashcards",label:"Flashcards"},{id:"match",label:"Match"},{id:"quiz",label:"Quiz"},{id:"listen",label:"Listen"}];o.dialogue&&s.push({id:"dialogue",label:"Role-play"}),e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${I.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${I.targetLanguage.name}</div>
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

      ${Qe(o.id)}

      <!-- Activities Tabs -->
      <div style="display: flex; gap: 8px; margin: 16px 0 24px; flex-wrap: wrap;" role="tablist" aria-label="Topic Activities">
        ${s.map(d=>`
          <button class="btn btn-secondary btn-pill ${t.activity===d.id?"btn-active":""}" role="tab" aria-selected="${t.activity===d.id}" data-tab="${d.id}">${d.label}</button>
        `).join("")}
      </div>

      <!-- Activity Container -->
      <div id="activity-mount"></div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#back-btn").addEventListener("click",i.goDashboard);const l=e.querySelector("#skip-btn");l&&l.addEventListener("click",()=>{i.markTopicCompleted(o.id),Ze(e,t,i)}),e.querySelectorAll("[data-tab]").forEach(d=>{d.addEventListener("click",p=>{const f=p.target.dataset.tab;i.setActivity(f)})});const c=e.querySelector("#activity-mount");ai(c,o,t,i)}function ai(e,t,i,o){i.activity==="flashcards"?se(e,t,i,o):i.activity==="match"?ie(e,t,i,o):i.activity==="quiz"?ne(e,t,i,o):i.activity==="listen"?W(e,t,i,o):i.activity==="dialogue"&&he(e,t,i,o)}function se(e,t,i,o){const a=i.flash,r=a.order||t.items.map((c,d)=>d),s=t.items[r[a.idx]];e.innerHTML=`
    <div class="flashcard-container">
      <div class="flashcard-hint" style="color: var(--text-muted); font-size: 13px; font-weight: 700;">
        Card ${a.idx+1} of ${t.items.length}
      </div>

      <button type="button" class="flashcard-wrapper" id="card-wrapper" aria-label="Flashcard, tap to flip">
        <div class="flashcard ${a.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${we(t.id,s)}
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
  `;const l=e.querySelector("#card-wrapper");l.addEventListener("click",()=>{a.flipped=!a.flipped,l.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#speak-btn").addEventListener("click",c=>{c.stopPropagation(),o.speak(s.targetText)}),e.querySelector("#prev-card-btn").addEventListener("click",()=>{a.idx=(a.idx-1+t.items.length)%t.items.length,a.flipped=!1,se(e,t,i,o)}),e.querySelector("#next-card-btn").addEventListener("click",()=>{a.idx=(a.idx+1)%t.items.length,a.flipped=!1,se(e,t,i,o)}),e.querySelector("#shuffle-btn").addEventListener("click",()=>{a.order=O(t.items.map((c,d)=>d)),a.idx=0,a.flipped=!1,se(e,t,i,o)})}function ie(e,t,i,o){const a=i.match;(!a.tiles||a.tiles.length===0)&&(i.match=R(t.items));const r=i.match,s=r.matchedIds.length/2,l=r.tiles.length/2,c=s===l;e.innerHTML=`
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
          ${r.tiles.map(d=>{const p=r.matchedIds.includes(d.id),f=r.selectedIds.includes(d.id);let m="match-tile";return p?m+=" matched":f&&(m+=" selected"),`
              <button class="${m}" data-tile-id="${d.id}"${Je(d.text)} ${p?"disabled":""}>
                ${d.text}
              </button>
            `}).join("")}
        </div>
      `}

      <button class="btn btn-secondary" id="reshuffle-match-btn">
        ${c?"Play Again":"New Round"}
      </button>
    </div>
  `,e.querySelector("#reshuffle-match-btn").addEventListener("click",()=>{i.match=R(t.items),ie(e,t,i,o)}),e.querySelectorAll(".match-tile").forEach(d=>{d.addEventListener("click",()=>{const p=d.dataset.tileId;oi(p,e,t,i,o)})})}function oi(e,t,i,o,a){const r=o.match;if(!(r.matchedIds.includes(e)||r.selectedIds.includes(e)||r.selectedIds.length>=2)&&(r.selectedIds.push(e),ie(t,i,o,a),r.selectedIds.length===2)){const[s,l]=r.selectedIds,c=r.tiles.find(p=>p.id===s),d=r.tiles.find(p=>p.id===l);c.pairId===d.pairId?(r.matchedIds.push(s,l),r.selectedIds=[],setTimeout(()=>{r.matchedIds.length===r.tiles.length&&(a.awardStars(1),a.markTopicCompleted(i.id)),ie(t,i,o,a)},250)):setTimeout(()=>{r.selectedIds=[],ie(t,i,o,a)},700)}}function ne(e,t,i,o){const a=i.quiz;(!a.questions||a.questions.length===0)&&(i.quiz=N(t.items));const r=i.quiz,s=r.questions[r.qIdx];if(r.qIdx>=r.questions.length||r.questions.length===0){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Quiz Finished!</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          Your score: ${r.score} / ${r.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="restart-quiz-btn">Try Again</button>
      </div>
    `,e.querySelector("#restart-quiz-btn").addEventListener("click",()=>{i.quiz=N(t.items),ne(e,t,i,o)});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${r.qIdx+1} of ${r.questions.length} · Score: ${r.score}
      </div>

      <div class="quiz-prompt">
        Translate to ${I.targetLanguage.name}:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">"${s.promptText}"</span>
      </div>

      <div class="quiz-options">
        ${s.options.map(d=>{let p="quiz-option";return r.answered&&(d===s.correctAnswer?p+=" correct":d===r.selected?p+=" incorrect":p+=" disabled"),`
            <button class="${p}" data-option="${d}" ${r.answered?"disabled":""}>
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
  `,e.querySelectorAll(".quiz-option").forEach(d=>{d.addEventListener("click",()=>{if(r.answered)return;const p=d.dataset.option;r.selected=p,r.answered=!0,p===s.correctAnswer&&(r.score++,o.awardStars(1)),ne(e,t,i,o)})});const c=e.querySelector("#next-question-btn");c&&c.addEventListener("click",()=>{r.qIdx++,r.answered=!1,r.selected=null,r.qIdx>=r.questions.length&&o.markTopicCompleted(t.id),ne(e,t,i,o)})}function W(e,t,i,o){const a=i.listen,r=a.order||t.items.map((c,d)=>d),s=t.items[r[a.idx]],l=i.recording;e.innerHTML=`
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
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{o.speak(s.targetText)}),e.querySelector("#reveal-meaning-btn").addEventListener("click",()=>{a.revealed=!a.revealed,W(e,t,i,o)}),e.querySelector("#prev-listen-btn").addEventListener("click",()=>{a.idx=(a.idx-1+t.items.length)%t.items.length,a.revealed=!1,ze(i),W(e,t,i,o)}),e.querySelector("#next-listen-btn").addEventListener("click",()=>{a.idx=(a.idx+1)%t.items.length,a.revealed=!1,ze(i),W(e,t,i,o)}),e.querySelector("#mic-record-btn").addEventListener("click",()=>{ri(e,t,i,o)})}function ze(e){e.recording.url&&URL.revokeObjectURL(e.recording.url),e.recording={status:"idle",url:null,error:null,chunks:[],recorder:null}}async function ri(e,t,i,o){const a=i.recording;if(a.status==="recording"){a.recorder&&a.recorder.stop();return}try{const r=await navigator.mediaDevices.getUserMedia({audio:!0}),s=new MediaRecorder(r),l=[];s.ondataavailable=c=>{c.data.size>0&&l.push(c.data)},s.onstop=()=>{const c=new Blob(l,{type:"audio/webm"}),d=URL.createObjectURL(c);r.getTracks().forEach(p=>p.stop()),i.recording={status:"ready",url:d,error:null,chunks:[],recorder:null},W(e,t,i,o)},s.start(),i.recording={status:"recording",url:null,error:null,chunks:l,recorder:s},W(e,t,i,o)}catch{i.recording={status:"idle",url:null,error:"Microphone access denied or unavailable on this device.",chunks:[],recorder:null},W(e,t,i,o)}}function he(e,t,i,o){const a=i.dialogue,r=t.dialogue;a.readAs||(a.readAs=r.roles[0]),e.innerHTML=`
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
  `,e.querySelectorAll("[data-role]").forEach(s=>{s.addEventListener("click",()=>{a.readAs=s.dataset.role,he(e,t,i,o)})}),e.querySelector("#toggle-translation-btn").addEventListener("click",()=>{a.showEn=!a.showEn,he(e,t,i,o)}),e.querySelectorAll("[data-play-line]").forEach(s=>{s.addEventListener("click",()=>{const l=parseInt(s.dataset.playLine),c=r.lines[l].targetText;o.speak(c)})}),e.querySelector("#finish-dialogue-btn").addEventListener("click",()=>{o.incrementDialogues(),o.markTopicCompleted(t.id),o.awardStars(2),o.goDashboard()})}function si(e,t,i){const o=t.activeLesson;if(!t.session||t.session.lessonId!==o.id){const l=We(o,t.completedTopicIds);t.session={lessonId:o.id,stepIdx:0,steps:l,flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}}}const a=t.session,r=a.steps[a.stepIdx];e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${I.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${I.targetLanguage.name}</div>
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
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#exit-btn").addEventListener("click",i.goDashboard);const s=e.querySelector("#session-step-mount");ni(s,r,t,i)}function ni(e,t,i,o){t.type==="warmup"?li(e,t,i,o):t.type==="discover"?fe(e,t,i,o):t.type==="recall-flash"?Xe(e,t,i,o):t.type==="note"?di(e,t,i,o):t.type==="quiz"?ve(e,t,i,o):t.type==="match"?le(e,t,i,o):t.type==="dialogue"?et(e,t,i,o):t.type==="listen"?xe(e,t,i,o):t.type==="done"&&pi(e,t,i,o)}function li(e,t,i,o){e.innerHTML=`
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
  `,e.querySelectorAll("[data-warmup-play]").forEach(a=>{a.addEventListener("click",()=>{const r=parseInt(a.dataset.warmup-play);o.speak(t.items[r].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{o.nextSessionStep()})}function fe(e,t,i,o){const a=i.session.flash,r=t.items[a.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      ${a.idx===0?Qe(i.activeLesson.topicId):""}
      <div class="flashcard-hint" style="font-weight: 700;">Word ${a.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="discover-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Learning card, tap to flip">
        <div class="flashcard ${a.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${we(i.activeLesson.topicId,r)}
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
  `;const s=e.querySelector("#discover-card-wrapper");s.addEventListener("click",()=>{a.flipped=!a.flipped,s.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#disc-speak-btn").addEventListener("click",c=>{c.stopPropagation(),o.speak(r.targetText)}),e.querySelector("#disc-prev-btn").addEventListener("click",()=>{a.idx>0&&(a.idx--,a.flipped=!1,fe(e,t,i,o))}),e.querySelector("#disc-next-btn").addEventListener("click",()=>{a.idx+1<t.items.length&&(a.idx++,a.flipped=!1,fe(e,t,i,o))});const l=e.querySelector("#next-step-btn");l&&l.addEventListener("click",()=>{o.nextSessionStep()})}function Xe(e,t,i,o){const a=i.session.flash,r=t.items[a.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Card ${a.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="recall-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Recall card, tap to flip">
        <div class="flashcard ${a.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-hint" style="margin-bottom: 16px; color: var(--cyan);">Can you recall the translation?</div>
            ${we(i.activeLesson.topicId,r)}
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
  `;const s=e.querySelector("#recall-card-wrapper");s.addEventListener("click",()=>{a.flipped=!a.flipped,s.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#recall-speak-btn").addEventListener("click",c=>{c.stopPropagation(),o.speak(r.targetText)});const l=()=>{a.idx+1<t.items.length?(a.idx++,a.flipped=!1,Xe(e,t,i,o)):o.nextSessionStep()};e.querySelector("#recall-again-btn").addEventListener("click",()=>{t.items.push(r),l()}),e.querySelector("#recall-gotit-btn").addEventListener("click",()=>{l()})}function di(e,t,i,o){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 12px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div class="glass" style="background: rgba(125, 211, 252, 0.08); border-color: var(--cyan); border-radius: 16px; padding: 20px; font-size: 16px; line-height: 1.6; color: var(--text-main); margin-bottom: 32px; white-space: pre-line;">
        ${t.note}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">I understand, start practice →</button>
    </div>
  `,e.querySelector("#next-step-btn").addEventListener("click",()=>{o.nextSessionStep()})}function ve(e,t,i,o){i.session.quiz||(i.session.quiz=t.quiz);const a=i.session.quiz,r=a.questions[a.qIdx];if(a.qIdx>=a.questions.length){e.innerHTML=`
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
        Translate to ${I.targetLanguage.name}:<br>
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
  `,e.querySelectorAll(".quiz-option").forEach(c=>{c.addEventListener("click",()=>{if(a.answered)return;const d=c.dataset.option;a.selected=d,a.answered=!0,d===r.correctAnswer&&(a.score++,o.awardStars(1)),ve(e,t,i,o)})});const l=e.querySelector("#next-question-btn");l&&l.addEventListener("click",()=>{a.qIdx++,a.answered=!1,a.selected=null,ve(e,t,i,o)})}function le(e,t,i,o){i.session.match||(i.session.match=t.match);const a=i.session.match,r=a.matchedIds.length/2,s=a.tiles.length/2,l=r===s;e.innerHTML=`
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
          ${a.tiles.map(d=>{const p=a.matchedIds.includes(d.id),f=a.selectedIds.includes(d.id);let m="match-tile";return p?m+=" matched":f&&(m+=" selected"),`
              <button class="${m}" data-tile-id="${d.id}"${Je(d.text)} ${p?"disabled":""}>
                ${d.text}
              </button>
            `}).join("")}
        </div>
      `}
    </div>
  `,e.querySelectorAll(".match-tile").forEach(d=>{d.addEventListener("click",()=>{const p=d.dataset.tileId;ci(p,e,t,i,o)})});const c=e.querySelector("#next-step-btn");c&&c.addEventListener("click",()=>{i.session.match=null,o.nextSessionStep()})}function ci(e,t,i,o,a){const r=o.session.match;if(!(r.matchedIds.includes(e)||r.selectedIds.includes(e)||r.selectedIds.length>=2)&&(r.selectedIds.push(e),le(t,i,o,a),r.selectedIds.length===2)){const[s,l]=r.selectedIds,c=r.tiles.find(p=>p.id===s),d=r.tiles.find(p=>p.id===l);c.pairId===d.pairId?(r.matchedIds.push(s,l),r.selectedIds=[],setTimeout(()=>{r.matchedIds.length===r.tiles.length&&a.awardStars(1),le(t,i,o,a)},250)):setTimeout(()=>{r.selectedIds=[],le(t,i,o,a)},700)}}function et(e,t,i,o){const a=i.session.dialogue,r=t.dialogue;a.readAs||(a.readAs=r.roles[0]),e.innerHTML=`
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
  `,e.querySelectorAll("[data-role]").forEach(s=>{s.addEventListener("click",()=>{a.readAs=s.dataset.role,et(e,t,i,o)})}),e.querySelectorAll("[data-play-line]").forEach(s=>{s.addEventListener("click",()=>{const l=parseInt(s.dataset.playLine);o.speak(r.lines[l].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{o.incrementDialogues(),o.awardStars(2),o.nextSessionStep()})}function xe(e,t,i,o){const a=i.session.flash,r=t.items[a.idx];e.innerHTML=`
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
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{o.speak(r.targetText)}),e.querySelector("#listen-prev-btn").addEventListener("click",()=>{a.idx>0&&(a.idx--,xe(e,t,i,o))}),e.querySelector("#listen-next-btn").addEventListener("click",()=>{a.idx+1<t.items.length&&(a.idx++,xe(e,t,i,o))});const s=e.querySelector("#next-step-btn");s&&s.addEventListener("click",()=>{o.nextSessionStep()})}function pi(e,t,i,o){const a=i.activeLesson,r=a.topicId?P(a.topicId):null;e.innerHTML=`
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
  `,e.querySelector("#finish-lesson-btn").addEventListener("click",()=>{o.completeLesson(a.id)})}function ui(e,t,i){var r;const o=((r=t.familyPlayState)==null?void 0:r.completedDays)??J(t.activityDates),a={};for(let s=0;s<10;s++)a[s]=D.filter(l=>l.month===s);e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${I.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${I.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main>
      ${Qt(t)}
      <div class="container voyage-plan-content" id="voyage-plan" style="max-width: 760px;">
      <h2 style="font-size: 28px; margin-bottom: 8px;">The 200-Day Family Voyage</h2>
      <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 32px; line-height: 1.6;">
        Ten months, five family learning days each week. Independent practice builds personal skill but does not move this shared route. Every fourth week brings the month's vocabulary and patterns together.
      </p>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        ${Object.keys(a).map(s=>{const l=parseInt(s)+1,c=a[s],d=c[0].number,p=c.at(-1).number,f=o>=p,m=o>=d;let y="var(--text-muted)";return f?y="var(--lime)":(m||o+1===d)&&(y="var(--cyan)"),`
            <div style="border-left: 2px solid ${y}; padding-left: 20px; margin-bottom: 8px;">
              <h3 style="font-size: 16px; margin-bottom: 12px; color: ${y}; text-transform: uppercase; letter-spacing: 0.05em;">
                Month ${l} — ${lt[s]}
              </h3>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${c.filter(x=>x.number%5===1).map(x=>{const k=x.week,j=D.filter(h=>h.week===k),$=o>=j.at(-1).number,S=o+1>=j[0].number&&!$,u=x.topicId?P(x.topicId):null;let v="Planned",g="var(--text-muted)";return $?(v="✓ Completed",g="var(--lime)"):S&&(v="Active Week",g="var(--cyan)"),`
                    <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; border-radius: 12px; padding: 14px 18px; cursor: pointer; transition: all var(--transition-fast);" data-week="${k}">
                      <div>
                        <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 2px;">
                          ${k%4===0?"Week 4 (Integration)":`Week ${k%4}: ${u?u.title:"Mixed review"}`}
                        </h4>
                        <p style="color: var(--text-muted); font-size: 13px;">
                          Lessons ${j[0].number} – ${j[4].number}
                        </p>
                      </div>
                      <div style="font-size: 13px; font-weight: 800; color: ${g};">${v}</div>
                    </div>
                  `}).join("")}
              </div>
            </div>
          `}).join("")}
      </div>
      </div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#back-btn").addEventListener("click",i.goDashboard),e.querySelectorAll("[data-week]").forEach(s=>{s.addEventListener("click",()=>{const l=parseInt(s.dataset.week),c=D.filter(f=>f.week===l),d=D[Math.min(o,199)],p=c.find(f=>f.id===d.id)||c[0];i.startSession(p)})})}const mi={"montenegrin-en":"Montenegrin","albanian-en":"Albanian"};function q(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function Ce(e){return{owner:"Owner",adult_guide:"Adult Partner",learner:"Learner"}[e]||e}function gi(e,t,i){var a,r,s,l,c,d,p,f;const o=t.familyOverview;e.innerHTML=`
    <header class="navbar">
      <button class="logo" id="family-back-btn" aria-label="Back to learners">
        <div class="logo-icon">N</div><div class="logo-title">Family Overview</div>
      </button>
      <button class="btn btn-secondary" id="choose-learner-btn">Choose a Learner</button>
    </header>
    <main class="container">
      ${t.familyOverviewLoading?"<p>Loading family…</p>":""}
      ${t.familyError?`<p role="alert" style="color: var(--pink);">${q(t.familyError)}</p>`:""}
      ${t.familyNotice?`<p role="status" style="color: var(--lime); margin-bottom: 16px;">${q(t.familyNotice)}</p>`:""}
      ${o?`
        <section class="hero-card" style="margin-bottom: 28px;">
          <div class="hero-text"><div class="hero-tag">Family workspace</div>
          <h1 class="hero-title">${q(o.family.name)}</h1>
          <p class="hero-subtitle">Members, invitations, and progress across every language.</p></div>
        </section>

        <section class="family-play-launch" aria-labelledby="family-play-launch-title">
          <div>
            <div class="hero-tag">Shared family voyage</div>
            <h2 id="family-play-launch-title">${(a=t.familyPlayState)!=null&&a.activeSession?"Family session in progress":`Ready for voyage day ${(((r=t.familyPlayState)==null?void 0:r.completedDays)||0)+1}`}</h2>
            <p>Independent practice stays personal. This shared position moves only when an adult chooses Complete for Family.</p>
          </div>
          ${(s=t.familyPlayState)!=null&&s.activeSession?`
            <div class="family-play-active-summary">
              <strong>Voyage day ${t.familyPlayState.activeSession.voyageDay}</strong>
              <span>${q(t.familyPlayState.activeSession.status)} · Part ${(t.familyPlayState.activeSession.currentSegment||0)+1}</span>
              <button class="btn btn-primary" id="continue-family-play-btn">Continue Family Play →</button>
            </div>`:`
            <fieldset class="family-play-roster">
              <legend>Who is learning together?</legend>
              ${o.learners.map(m=>`<label>
                <input type="checkbox" name="family-participant" value="${q(m.id)}" checked>
                <span>${q(m.name)}</span>
              </label>`).join("")||"<p>Add a learner before starting Family Play.</p>"}
            </fieldset>
            <button class="btn btn-primary" id="start-family-play-btn" ${o.learners.length?"":"disabled"}>Start Family Session →</button>`}
        </section>

        <section style="margin-bottom: 32px;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px;">
            <h2 class="section-title" style="margin:0;">Parents & Members</h2>
            <button class="btn btn-secondary" id="overview-invite-partner-btn">Invite Adult Partner</button>
          </div>
          <div class="kids-progress-grid">
            ${o.members.map(m=>`<article class="kid-progress-card">
              <div class="kid-progress-header">${q(m.name)}</div>
              <div class="kid-progress-stats"><div>${q(m.email)}</div><div>${q(Ce(m.role))}</div></div>
            </article>`).join("")}
          </div>
          ${o.pendingInvitations.length?`<h3 class="section-title" style="margin-top:20px;">Pending invitations</h3>
            <div class="kids-progress-grid">${o.pendingInvitations.map(m=>`<article class="kid-progress-card">
              <div class="kid-progress-header">${q(m.email)}</div>
              <div class="kid-progress-stats"><div>${q(Ce(m.role))}</div><div>Expires ${new Date(m.expiresAt).toLocaleDateString()}</div></div>
            </article>`).join("")}</div>`:""}
        </section>

        <section>
          <h2 class="section-title">Learner Progress</h2>
          <div class="kids-progress-grid">
            ${o.learners.map(m=>{const y=new Map(m.progress.map(x=>[x.packId,x]));return`<article class="kid-progress-card">
                <div class="kid-progress-header">${q(m.name)} ${m.linked?'<span style="color:var(--teal);font-size:12px;">✓ Sign-in linked</span>':""}</div>
                <div class="kid-progress-stats">
                  ${t.languagePacks.map(x=>{const k=y.get(x.id)||{stars:0,completedLessons:0,activeDays:0};return`<div><strong>${q(mi[x.id]||x.targetLanguage.name)}</strong>: ${k.completedLessons}/200 lessons · ${k.activeDays} active days · ${k.stars} stars</div>`}).join("")}
                </div>
              </article>`}).join("")||"<p>No learners have been added yet.</p>"}
          </div>
        </section>`:""}
    </main>`,(l=e.querySelector("#family-back-btn"))==null||l.addEventListener("click",i.goProfileSelect),(c=e.querySelector("#choose-learner-btn"))==null||c.addEventListener("click",i.goProfileSelect),(d=e.querySelector("#overview-invite-partner-btn"))==null||d.addEventListener("click",async()=>{const m=prompt("Enter your partner's Google account email:");m!=null&&m.trim()&&await i.invitePartner(m.trim(),!0)}),(p=e.querySelector("#start-family-play-btn"))==null||p.addEventListener("click",async()=>{const m=[...e.querySelectorAll('input[name="family-participant"]:checked')].map(y=>y.value);if(!m.length){window.alert("Select at least one learner for Family Play.");return}await i.startFamilySession(m)}),(f=e.querySelector("#continue-family-play-btn"))==null||f.addEventListener("click",i.openFamilySession)}function E(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function yi(e){var i,o,a,r,s;const t=e.items||((i=e.dialogue)==null?void 0:i.lines)||[];return t.length?`<div class="family-play-phrases">
      ${t.slice(0,8).map((l,c)=>{const d=l.targetText||l.target||l.text||l.line||"",p=l.supportText||l.support||l.translation||"";return`<article class="family-play-phrase">
          <div><strong>${E(d)}</strong>${p?`<small>${E(p)}</small>`:""}</div>
          ${d?`<button class="dialogue-play-btn" data-family-audio="${c}" aria-label="Play ${E(d)}">►</button>`:""}
        </article>`}).join("")}
    </div>`:e.note?`<div class="family-play-note">${E(e.note)}</div>`:(a=(o=e.quiz)==null?void 0:o.questions)!=null&&a.length?`<div class="family-play-challenge"><span>Family challenge</span><strong>${E(e.quiz.questions[0].promptText)}</strong><p>Take turns answering aloud. The parent can replay or discuss before moving on.</p></div>`:(s=(r=e.match)==null?void 0:r.tiles)!=null&&s.length?'<div class="family-play-challenge"><span>Family challenge</span><strong>Match the words aloud together</strong><p>Each person chooses a pair and explains it before the parent moves forward.</p></div>':`<div class="family-play-challenge"><span>Speak together</span><strong>${E(e.subtitle||"Practice this section as a family.")}</strong></div>`}function hi(e,t,i){var f,m,y,x,k,j,$,S,u,v,g;const o=(f=t.familyPlayState)==null?void 0:f.activeSession,a=t.activeLesson;if(!o||!a){e.innerHTML='<main class="container"><p role="alert">This Family Play session is no longer active.</p><button class="btn btn-secondary" id="family-play-back">Return</button></main>',e.querySelector("#family-play-back").addEventListener("click",i.goFamilyOverview);return}const r=We(a,[],{random:yt(`${o.id}:${a.id}`)}),s=Math.min(o.currentSegment||0,r.length-1),l=r[s],c=((y=(m=t.families)==null?void 0:m[0])==null?void 0:y.role)==="owner"||((k=(x=t.families)==null?void 0:x[0])==null?void 0:k.role)==="adult_guide",d=s===r.length-1,p=l.items||((j=l.dialogue)==null?void 0:j.lines)||[];e.innerHTML=`
    <header class="navbar family-play-nav">
      <button class="logo" id="family-play-exit" aria-label="Leave Family Play">
        <div class="logo-icon">${I.targetLanguage.code.toUpperCase()}</div>
        <div><div class="logo-title">Family Play</div><small>Voyage day ${o.voyageDay}</small></div>
      </button>
      <div class="family-play-live"><i></i>${o.status==="paused"?"Paused":"Together now"}</div>
    </header>
    <main class="family-play-stage">
      <div class="family-play-scene" aria-hidden="true"></div>
      <section class="family-play-panel" aria-labelledby="family-play-title">
        <div class="family-play-meta">
          <span>${E(a.title)}</span>
          <span>Part ${s+1} of ${r.length}</span>
        </div>
        <div class="session-steps-bar" role="progressbar" aria-valuenow="${s+1}" aria-valuemin="1" aria-valuemax="${r.length}">
          ${r.map((h,b)=>`<div class="session-step-segment ${b<=s?"active":""}"></div>`).join("")}
        </div>
        <p class="hero-tag">${c?"Lead this together":"Follow the family lesson"}</p>
        <h1 id="family-play-title">${E(l.title)}</h1>
        <p class="family-play-subtitle">${E(l.subtitle)}</p>
        ${yi(l)}
        <div class="family-play-participants" aria-label="Participants">
          ${o.participants.map(h=>`<span class="${h.status==="joined"||h.status==="credited"?"joined":""}">${E(h.name)} · ${E(h.status)}</span>`).join("")}
        </div>
        ${c?`<div class="family-play-controls">
          <button class="btn btn-secondary" id="family-play-prev" ${s===0?"disabled":""}>← Back</button>
          <button class="btn btn-secondary" id="family-play-audio">► Play all</button>
          <button class="btn btn-secondary" id="family-play-pause">${o.status==="paused"?"Resume":"Pause"}</button>
          ${d?'<button class="btn btn-primary family-complete-btn" id="family-play-complete">✓ Complete for Family</button>':'<button class="btn btn-primary" id="family-play-next">Next →</button>'}
        </div>`:'<p class="family-play-following">The parent controls this shared lesson. You can answer, read, and speak along.</p>'}
      </section>
    </main>`,e.querySelector("#family-play-exit").addEventListener("click",c?i.goFamilyOverview:i.goDashboard),e.querySelectorAll("[data-family-audio]").forEach(h=>{h.addEventListener("click",()=>{const b=p[Number(h.dataset.familyAudio)];i.speak((b==null?void 0:b.targetText)||(b==null?void 0:b.target)||(b==null?void 0:b.text)||(b==null?void 0:b.line)||"")})}),($=e.querySelector("#family-play-audio"))==null||$.addEventListener("click",()=>{const h=p.map(b=>b.targetText||b.target||b.text||b.line).filter(Boolean).join(". ");h&&i.speak(h)}),(S=e.querySelector("#family-play-prev"))==null||S.addEventListener("click",()=>i.controlFamilySession("live",s-1)),(u=e.querySelector("#family-play-next"))==null||u.addEventListener("click",()=>i.controlFamilySession("live",s+1)),(v=e.querySelector("#family-play-pause"))==null||v.addEventListener("click",()=>i.controlFamilySession(o.status==="paused"?"live":"paused",s)),(g=e.querySelector("#family-play-complete"))==null||g.addEventListener("click",i.completeFamilySession)}const n={profile:null,isGuide:!1,screen:"profile-select",sessionUser:null,families:null,familyError:null,familyNotice:null,familyOverview:null,familyOverviewLoading:!1,familyPlayState:null,activePackId:"montenegrin-en",languagePacks:dt(),stars:0,streakDays:0,completedTopicIds:[],completedLessons:[],activityDates:[],dialoguesDone:0,topicId:null,activity:"flashcards",calendarMonth:0,activeLesson:null,session:null,flash:{order:null,idx:0,flipped:!1},match:{tiles:[],selectedIds:[],matchedIds:[]},quiz:{questions:[],qIdx:0,score:0,selected:null,answered:!1},listen:{order:null,idx:0,revealed:!1},dialogue:{readAs:null,showEn:!1},recording:{status:"idle",url:null,error:null,chunks:[],recorder:null}},C=document.getElementById("app");function fi(e){if(!("speechSynthesis"in window))return;const t=I.targetLanguage.code==="sq"?"sq-AL":"hr-HR",i=new SpeechSynthesisUtterance(e);i.lang=t,i.rate=.85,window.speechSynthesis.cancel(),window.speechSynthesis.speak(i)}const A={selectLanguage:async e=>{if(n.profile){if(be(n.profile,e),n.sessionUser)try{await Ee()}catch(t){n.familyError=t.message}if(F(n.profile),n.sessionUser)try{await te()}catch(t){n.familyError=t.message}n.screen="dashboard",ee(),w()}},createFamily:async e=>{n.familyError=null;try{await At(e),n.families=await Ct(),await Ee(),w()}catch(t){n.familyError=t.message,w()}},invitePartner:async(e,t=!1)=>{var o,a;const i=(a=(o=n.families)==null?void 0:o[0])==null?void 0:a.family_id;if(i){n.familyError=null,n.familyNotice=null;try{const r=await Ft(i,e,"adult_guide"),s=new URL(`${window.location.origin}${window.location.pathname}`);s.searchParams.set("invite",r);try{await navigator.clipboard.writeText(s.toString())}catch{window.prompt("Copy this invitation link:",s.toString())}n.familyNotice=`Partner invitation copied. Send the link to ${e}; it expires in 7 days.`}catch(r){n.familyError=r.message}t?await A.goFamilyOverview():w()}},inviteLearner:async(e,t,i)=>{n.familyError=null,n.familyNotice=null;try{const o=await Ht(e,i),a=new URL(`${window.location.origin}${window.location.pathname}`);a.searchParams.set("invite",o);try{await navigator.clipboard.writeText(a.toString())}catch{window.prompt("Copy this invitation link:",a.toString())}n.familyNotice=`${t}'s sign-in invitation was copied. Send it to ${i}; it expires in 7 days.`}catch(o){n.familyError=o.message}w()},goDashboard:()=>{n.screen="dashboard",ee(),w(),window.scrollTo({top:0,behavior:"auto"})},goCurriculum:()=>{n.screen="curriculum",ee(),w(),window.scrollTo({top:0,behavior:"auto"})},goProfileSelect:()=>{n.screen="profile-select",n.profile=null,ee(),w()},goFamilyOverview:async()=>{var e,t;n.profile=null,n.screen="family-overview",n.familyOverviewLoading=!0,n.familyError=null,w();try{const i=(t=(e=n.families)==null?void 0:e[0])==null?void 0:t.family_id;n.familyOverview=await Pe(i),n.familyPlayState=await Ue(i,n.activePackId)}catch(i){n.familyError=i.message}finally{n.familyOverviewLoading=!1,w()}},startFamilySession:async e=>{var r,s,l;const t=(s=(r=n.families)==null?void 0:r[0])==null?void 0:s.family_id,i=n.languagePacks.find(c=>c.id===n.activePackId),o=((l=n.familyPlayState)==null?void 0:l.completedDays)||0,a=D[Math.min(o,199)];n.familyError=null;try{await Gt({familyId:t,packId:i.id,packVersion:i.version,lessonId:a.id,voyageDay:o+1,participantProfileIds:e}),await te(),n.activeLesson=a,n.screen="family-play"}catch(c){n.familyError=c.message}w()},openFamilySession:async()=>{var t,i,o;const e=(t=n.familyPlayState)==null?void 0:t.activeSession;if(e){n.familyError=null;try{((o=(i=n.families)==null?void 0:i[0])==null?void 0:o.role)==="learner"&&await Wt(e.id),await te(),n.activeLesson=D.find(a=>a.id===e.lessonId)||D[e.voyageDay-1],n.screen="family-play"}catch(a){n.familyError=a.message}w()}},controlFamilySession:async(e,t)=>{var o,a;const i=(a=(o=n.familyPlayState)==null?void 0:o.activeSession)==null?void 0:a.id;if(i){try{await Ot(i,e,t),await te()}catch(r){n.familyError=r.message}w()}},completeFamilySession:async()=>{var t,i,o,a;const e=(i=(t=n.familyPlayState)==null?void 0:t.activeSession)==null?void 0:i.id;if(e){try{await Bt(e),await te(),n.screen="family-overview",n.activeLesson=null,n.familyNotice="Family voyage day completed together.",n.familyOverview=await Pe((a=(o=n.families)==null?void 0:o[0])==null?void 0:a.family_id)}catch(r){n.familyError=r.message}w()}},refresh:()=>{n.profile&&F(n.profile),w()},switchProfile:e=>{kt(e),n.profile=e,be(e),F(e),n.screen="dashboard",ee();const t=D.find(i=>!n.completedLessons.includes(i.id));t&&(n.calendarMonth=t.month),w()},openTopic:e=>{n.topicId=e,n.screen="topic",n.activity="flashcards",n.flash={order:null,idx:0,flipped:!1},n.match={tiles:[],selectedIds:[],matchedIds:[]},n.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},n.listen={order:null,idx:0,revealed:!1},n.dialogue={readAs:null,showEn:!0},w()},setActivity:e=>{n.activity=e,n.flash={order:null,idx:0,flipped:!1},n.match={tiles:[],selectedIds:[],matchedIds:[]},n.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},n.listen={order:null,idx:0,revealed:!1},n.dialogue={readAs:null,showEn:!0},w()},startSession:e=>{n.activeLesson=e,n.screen="session",n.session=null,w()},nextSessionStep:()=>{n.session&&(n.session.stepIdx++,n.session.flash={idx:0,flipped:!1},n.session.quiz=null,n.session.match=null,w())},completeLesson:e=>{_t(n.profile,e);const t=n.activeLesson.topicId;t&&n.activeLesson.type==="checkpoint"&&De(n.profile,t),F(n.profile),A.goDashboard()},markTopicCompleted:e=>{De(n.profile,e),F(n.profile)},awardStars:e=>{Dt(n.profile,e),F(n.profile)},incrementDialogues:()=>{Et(n.profile),F(n.profile)},speak:fi,startMixedReview:()=>{const t=n.completedTopicIds.map(i=>P(i)).filter(Boolean).flatMap(i=>i.items);t.length!==0&&(n.activeLesson={id:"mixed-review",title:"Mixed Review",detail:"Practice from all completed topics",topicId:null,month:0},n.screen="session",n.session={lessonId:"mixed-review",stepIdx:0,steps:[{type:"quiz",title:"Review Quiz",subtitle:"Test your retention",quiz:N(t,8)},{type:"match",title:"Review Match",subtitle:"Match terms quickly",match:R(t,8)},{type:"done",title:"Review Finished!",subtitle:"You completed your mixed review!"}],flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}},w())}};function ee(){n.activeLesson=null,n.session=null}function F(e){const t=B(e);t&&(n.stars=t.stars,n.streakDays=t.streakDays,n.completedTopicIds=t.completedTopicIds,n.completedLessons=t.completedLessons,n.activityDates=t.activityDates,n.dialoguesDone=t.dialoguesDone,n.isGuide=t.isGuide)}function be(e,t=null){const i=t||vt(e),a=n.languagePacks.some(r=>r.id===i)?i:"montenegrin-en";ct(a),ft(),xt(e,a),n.activePackId=a}async function te(){var t,i;const e=(i=(t=n.families)==null?void 0:t[0])==null?void 0:i.family_id;if(!e||!n.sessionUser){n.familyPlayState=null;return}n.familyPlayState=await Ue(e,n.activePackId)}function w(){if(C.innerHTML="",n.screen==="family-play"){hi(C,n,A);return}if(!n.profile){n.screen==="family-overview"?gi(C,n,A):(n.screen="profile-select",Rt(C,n,A));return}if(n.screen==="dashboard"){Zt(C,n,A);const e=C.querySelector("#calendar-mount");e&&Xt(e,n,()=>{n.calendarMonth=Math.max(0,n.calendarMonth-1),w()},()=>{n.calendarMonth=Math.min(9,n.calendarMonth+1),w()})}else n.screen==="topic"?Ze(C,n,A):n.screen==="session"?si(C,n,A):n.screen==="curriculum"&&ui(C,n,A)}async function vi(){window.addEventListener("online",()=>{Re(),w()}),window.addEventListener("offline",()=>{w()});const e=wt();if(e){n.profile=e,be(e),F(e),n.screen="dashboard";const t=D.find(i=>!n.completedLessons.includes(i.id));n.calendarMonth=t?t.month:0}else n.screen="profile-select";w()}window.addEventListener("DOMContentLoaded",vi);
