(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const pt={id:"montenegrin-en",targetLanguage:{code:"cnr",name:"Montenegrin",scripts:["Latn","Cyrl"]},supportLanguage:{code:"en",name:"English"},version:"0.1.0",status:"draft"},ut={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},mt=JSON.parse(`[{"id":"family","month":1,"title":"Family","subtitle":"Words for relatives","icon":"Fa","color":"#7dd3fc","note":"Your family speaks a Montenegrin-Dalmatian blend — words like dida and kukumar are your family's words, not mistakes. In Montenegrin, grandpa may also be deda.","items":[{"id":"family-item-001","targetText":"mama","supportText":"mom","emoji":"👩"},{"id":"family-item-002","targetText":"tata","supportText":"dad","emoji":"👨"},{"id":"family-item-003","targetText":"brat","supportText":"brother","emoji":"👦"},{"id":"family-item-004","targetText":"sestra","supportText":"sister","emoji":"👧"},{"id":"family-item-005","targetText":"baka","supportText":"grandma (also: baba)","emoji":"👵"},{"id":"family-item-006","targetText":"dida","supportText":"grandpa (Montenegrin: deda)","emoji":"👴"},{"id":"family-item-007","targetText":"sin","supportText":"son","emoji":"👦"},{"id":"family-item-008","targetText":"kćerka","supportText":"daughter (also: kći)","emoji":"👧"},{"id":"family-item-009","targetText":"porodica","supportText":"family","emoji":"👪"},{"id":"family-item-010","targetText":"roditelji","supportText":"parents"},{"id":"family-item-011","targetText":"dijete / djeca","supportText":"child / children","emoji":"👶"},{"id":"family-item-012","targetText":"ko","supportText":"who"}]},{"id":"greetings","month":1,"title":"Greetings","subtitle":"Say hello & introduce yourself","icon":"Zd","color":"#f472b6","items":[{"id":"greetings-item-001","targetText":"Zdravo","supportText":"Hello"},{"id":"greetings-item-002","targetText":"Dobar dan","supportText":"Good afternoon"},{"id":"greetings-item-003","targetText":"Dobro jutro","supportText":"Good morning"},{"id":"greetings-item-004","targetText":"Hvala","supportText":"Thank you"},{"id":"greetings-item-005","targetText":"Molim","supportText":"Please / You're welcome"},{"id":"greetings-item-006","targetText":"Da","supportText":"Yes"},{"id":"greetings-item-007","targetText":"Ne","supportText":"No"},{"id":"greetings-item-008","targetText":"Doviđenja","supportText":"Goodbye"},{"id":"greetings-item-009","targetText":"Ćao","supportText":"Bye / Hi (informal)"},{"id":"greetings-item-010","targetText":"Izvini","supportText":"Sorry / Excuse me"},{"id":"greetings-item-011","targetText":"Kako se zoveš?","supportText":"What's your name?"},{"id":"greetings-item-012","targetText":"Zovem se...","supportText":"My name is..."},{"id":"greetings-item-013","targetText":"Drago mi je","supportText":"Nice to meet you"}],"dialogue":{"roles":["You","New Friend"],"lines":[{"id":"greetings-dialogue-001","targetText":"Dobar dan! Kako se zoveš?","supportText":"Good afternoon! What is your name?","role":"You"},{"id":"greetings-dialogue-002","targetText":"Zovem se Lena. A ti?","supportText":"My name is Lena. And you?","role":"New Friend"},{"id":"greetings-dialogue-003","targetText":"Zovem se Sam. Drago mi je!","supportText":"My name is Sam. Nice to meet you!","role":"You"},{"id":"greetings-dialogue-004","targetText":"Drago mi je! Doviđenja.","supportText":"Nice to meet you too! Goodbye.","role":"New Friend"}]}},{"id":"numbers","month":2,"title":"Numbers","subtitle":"Counting 1–100","icon":"123","color":"#a3e635","items":[{"id":"numbers-item-001","targetText":"jedan","supportText":"one (1)"},{"id":"numbers-item-002","targetText":"dva","supportText":"two (2)"},{"id":"numbers-item-003","targetText":"tri","supportText":"three (3)"},{"id":"numbers-item-004","targetText":"četiri","supportText":"four (4)"},{"id":"numbers-item-005","targetText":"pet","supportText":"five (5)"},{"id":"numbers-item-006","targetText":"šest","supportText":"six (6)"},{"id":"numbers-item-007","targetText":"sedam","supportText":"seven (7)"},{"id":"numbers-item-008","targetText":"osam","supportText":"eight (8)"},{"id":"numbers-item-009","targetText":"devet","supportText":"nine (9)"},{"id":"numbers-item-010","targetText":"deset","supportText":"ten (10)"},{"id":"numbers-item-011","targetText":"dvadeset","supportText":"twenty (20)"},{"id":"numbers-item-012","targetText":"trideset","supportText":"thirty (30)"},{"id":"numbers-item-013","targetText":"pedeset","supportText":"fifty (50)"},{"id":"numbers-item-014","targetText":"sto","supportText":"one hundred (100)"}]},{"id":"colors","month":2,"title":"Colors","subtitle":"boje","icon":"Bo","color":"#7dd3fc","items":[{"id":"colors-item-001","targetText":"crvena","supportText":"red","emoji":"🔴"},{"id":"colors-item-002","targetText":"plava","supportText":"blue","emoji":"🔵"},{"id":"colors-item-003","targetText":"zelena","supportText":"green","emoji":"🟢"},{"id":"colors-item-004","targetText":"žuta","supportText":"yellow","emoji":"🟡"},{"id":"colors-item-005","targetText":"crna","supportText":"black","emoji":"⚫"},{"id":"colors-item-006","targetText":"bijela","supportText":"white","emoji":"⚪"}]},{"id":"drinks","month":3,"title":"Drinks","subtitle":"piće","icon":"Pi","color":"#f472b6","items":[{"id":"drinks-item-001","targetText":"voda","supportText":"water","emoji":"💧"},{"id":"drinks-item-002","targetText":"kafa","supportText":"coffee","emoji":"☕"},{"id":"drinks-item-003","targetText":"čaj","supportText":"tea","emoji":"🍵"},{"id":"drinks-item-004","targetText":"sok","supportText":"juice","emoji":"🧃"},{"id":"drinks-item-005","targetText":"mlijeko","supportText":"milk","emoji":"🥛"},{"id":"drinks-item-006","targetText":"pivo","supportText":"beer","emoji":"🍺"},{"id":"drinks-item-007","targetText":"vino","supportText":"wine","emoji":"🍷"},{"id":"drinks-item-008","targetText":"rakija","supportText":"rakija (homemade brandy)","emoji":"🥃"}]},{"id":"food","month":3,"title":"Food","subtitle":"hrana","icon":"Hr","color":"#a3e635","items":[{"id":"food-item-001","targetText":"kruh","supportText":"bread (also: hljeb)","emoji":"🍞"},{"id":"food-item-002","targetText":"sir","supportText":"cheese","emoji":"🧀"},{"id":"food-item-003","targetText":"meso","supportText":"meat","emoji":"🥩"},{"id":"food-item-004","targetText":"riba","supportText":"fish","emoji":"🐟"},{"id":"food-item-005","targetText":"jaje / jaja","supportText":"egg / eggs","emoji":"🥚"},{"id":"food-item-006","targetText":"salata","supportText":"salad","emoji":"🥗"},{"id":"food-item-007","targetText":"supa / čorba","supportText":"soup","emoji":"🍲"},{"id":"food-item-008","targetText":"sladoled","supportText":"ice cream","emoji":"🍦"},{"id":"food-item-009","targetText":"jabuka","supportText":"apple","emoji":"🍎"}]},{"id":"veg","month":4,"title":"Vegetables & Market","subtitle":"pijaca","icon":"Pj","color":"#7dd3fc","items":[{"id":"veg-item-001","targetText":"paradajz","supportText":"tomato","emoji":"🍅"},{"id":"veg-item-002","targetText":"kukumar","supportText":"cucumber","emoji":"🥒"},{"id":"veg-item-003","targetText":"krompir","supportText":"potato","emoji":"🥔"},{"id":"veg-item-004","targetText":"luk","supportText":"onion","emoji":"🧅"},{"id":"veg-item-005","targetText":"bijeli luk","supportText":"garlic (literally 'white onion')","emoji":"🧄"},{"id":"veg-item-006","targetText":"paprika","supportText":"pepper","emoji":"🫑"},{"id":"veg-item-007","targetText":"mrkva","supportText":"carrot","emoji":"🥕"},{"id":"veg-item-008","targetText":"kupus","supportText":"cabbage","emoji":"🥬"}]},{"id":"cafe","month":4,"title":"At a Café","subtitle":"Order like a local","icon":"Ka","color":"#f472b6","note":"Hoću = I want, Neću = I don't want.\\nWords ending in -a often change to -u after these: kafa → Hoću kafu, voda → Hoću vodu.","items":[{"id":"cafe-item-001","targetText":"Dobar dan!","supportText":"Good afternoon! (greeting)"},{"id":"cafe-item-002","targetText":"Izvolite?","supportText":"What can I get you?"},{"id":"cafe-item-003","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please."},{"id":"cafe-item-004","targetText":"Još nešto?","supportText":"Anything else?"},{"id":"cafe-item-005","targetText":"Hvala","supportText":"Thank you"},{"id":"cafe-item-006","targetText":"Račun, molim.","supportText":"The bill, please."}],"dialogue":{"roles":["Waiter","Customer"],"lines":[{"id":"cafe-dialogue-001","targetText":"Dobar dan! Izvolite?","supportText":"Good afternoon! What can I get you?","role":"Waiter"},{"id":"cafe-dialogue-002","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please.","role":"Customer"},{"id":"cafe-dialogue-003","targetText":"Još nešto?","supportText":"Anything else?","role":"Waiter"},{"id":"cafe-dialogue-004","targetText":"Hoću i vodu. Hvala.","supportText":"I'll also have water. Thanks.","role":"Customer"},{"id":"cafe-dialogue-005","targetText":"Izvolite.","supportText":"Here you go.","role":"Waiter"},{"id":"cafe-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"Customer"},{"id":"cafe-dialogue-007","targetText":"Račun, molim.","supportText":"The bill, please.","role":"Customer"},{"id":"cafe-dialogue-008","targetText":"Doviđenja!","supportText":"Goodbye!","role":"Waiter"}]}},{"id":"talkfamily","month":5,"title":"Talking About Family","subtitle":"\\"my brother\\", \\"I have a sister\\"","icon":"Mo","color":"#a3e635","items":[{"id":"talkfamily-item-001","targetText":"moj","supportText":"my (masculine)"},{"id":"talkfamily-item-002","targetText":"moja","supportText":"my (feminine)"},{"id":"talkfamily-item-003","targetText":"moj brat","supportText":"my brother"},{"id":"talkfamily-item-004","targetText":"moja sestra","supportText":"my sister"},{"id":"talkfamily-item-005","targetText":"moje dijete","supportText":"my child"},{"id":"talkfamily-item-006","targetText":"Imam brata.","supportText":"I have a brother."},{"id":"talkfamily-item-007","targetText":"Imam sestru.","supportText":"I have a sister."},{"id":"talkfamily-item-008","targetText":"Kako se zove tvoj brat?","supportText":"What's your brother's name?"},{"id":"talkfamily-item-009","targetText":"Moj brat se zove Sam.","supportText":"My brother is named Sam."},{"id":"talkfamily-item-010","targetText":"Ovo je moja porodica.","supportText":"This is my family."},{"id":"talkfamily-item-011","targetText":"A ko je ovo?","supportText":"And who is this?"}]},{"id":"aboutme","month":5,"title":"About Me","subtitle":"Simple sentences about yourself","icon":"Ja","color":"#7dd3fc","items":[{"id":"aboutme-item-001","targetText":"Ja se zovem ___.","supportText":"My name is ___."},{"id":"aboutme-item-002","targetText":"Koliko imaš godina?","supportText":"How old are you?"},{"id":"aboutme-item-003","targetText":"Imam ___ godina.","supportText":"I am ___ years old."},{"id":"aboutme-item-004","targetText":"Volim čokoladu.","supportText":"I love chocolate."},{"id":"aboutme-item-005","targetText":"Idem u školu.","supportText":"I am going to school."},{"id":"aboutme-item-006","targetText":"Idem na plažu.","supportText":"I'm going to the beach."},{"id":"aboutme-item-007","targetText":"Gdje živiš?","supportText":"Where do you live?"},{"id":"aboutme-item-008","targetText":"Živim u ___.","supportText":"I live in ___."}]},{"id":"days","month":6,"title":"Days & Time","subtitle":"dani u sedmici","icon":"Dn","color":"#f472b6","items":[{"id":"days-item-001","targetText":"ponedjeljak","supportText":"Monday"},{"id":"days-item-002","targetText":"utorak","supportText":"Tuesday"},{"id":"days-item-003","targetText":"srijeda","supportText":"Wednesday"},{"id":"days-item-004","targetText":"četvrtak","supportText":"Thursday"},{"id":"days-item-005","targetText":"petak","supportText":"Friday"},{"id":"days-item-006","targetText":"subota","supportText":"Saturday"},{"id":"days-item-007","targetText":"nedjelja","supportText":"Sunday"},{"id":"days-item-008","targetText":"danas","supportText":"today"},{"id":"days-item-009","targetText":"sutra","supportText":"tomorrow"},{"id":"days-item-010","targetText":"juče","supportText":"yesterday"}]},{"id":"outabout","month":6,"title":"Out & About","subtitle":"Travel phrases","icon":"Va","color":"#a3e635","items":[{"id":"outabout-item-001","targetText":"Gdje je...?","supportText":"Where is...?"},{"id":"outabout-item-002","targetText":"Koliko košta?","supportText":"How much does it cost?"},{"id":"outabout-item-003","targetText":"Ne razumijem.","supportText":"I don't understand."},{"id":"outabout-item-004","targetText":"Govorite li engleski?","supportText":"Do you speak English?"},{"id":"outabout-item-005","targetText":"Molim vas.","supportText":"Please (formal)"},{"id":"outabout-item-006","targetText":"Izvinite.","supportText":"Excuse me (formal)"},{"id":"outabout-item-007","targetText":"lijevo","supportText":"left"},{"id":"outabout-item-008","targetText":"desno","supportText":"right"},{"id":"outabout-item-009","targetText":"plaža","supportText":"beach"},{"id":"outabout-item-010","targetText":"more","supportText":"sea"}]},{"id":"weather","month":7,"title":"Weather","subtitle":"vrijeme","icon":"We","color":"#7dd3fc","items":[{"id":"weather-item-001","targetText":"sunce","supportText":"sun","emoji":"☀️"},{"id":"weather-item-002","targetText":"kiša","supportText":"rain","emoji":"🌧️"},{"id":"weather-item-003","targetText":"vjetar","supportText":"wind","emoji":"💨"},{"id":"weather-item-004","targetText":"oblačno","supportText":"cloudy","emoji":"☁️"},{"id":"weather-item-005","targetText":"toplo","supportText":"warm"},{"id":"weather-item-006","targetText":"hladno","supportText":"cold","emoji":"🥶"},{"id":"weather-item-007","targetText":"Kakvo je vrijeme?","supportText":"What's the weather like?"},{"id":"weather-item-008","targetText":"Sunčano je.","supportText":"It's sunny."}]},{"id":"emotions","month":7,"title":"Emotions & Feelings","subtitle":"osjećanja","icon":"Em","color":"#f472b6","items":[{"id":"emotions-item-001","targetText":"sretan / sretna","supportText":"happy"},{"id":"emotions-item-002","targetText":"tužan / tužna","supportText":"sad"},{"id":"emotions-item-003","targetText":"umoran / umorna","supportText":"tired"},{"id":"emotions-item-004","targetText":"gladan / gladna","supportText":"hungry"},{"id":"emotions-item-005","targetText":"žedan / žedna","supportText":"thirsty"},{"id":"emotions-item-006","targetText":"uzbuđen / uzbuđena","supportText":"excited"},{"id":"emotions-item-007","targetText":"Kako se osjećaš?","supportText":"How do you feel?"}]},{"id":"house","month":8,"title":"House & Home","subtitle":"kuća","icon":"Ho","color":"#a3e635","items":[{"id":"house-item-001","targetText":"kuća","supportText":"house","emoji":"🏠"},{"id":"house-item-002","targetText":"soba","supportText":"room"},{"id":"house-item-003","targetText":"kuhinja","supportText":"kitchen","emoji":"🍳"},{"id":"house-item-004","targetText":"kupatilo","supportText":"bathroom","emoji":"🚿"},{"id":"house-item-005","targetText":"krevet","supportText":"bed","emoji":"🛏️"},{"id":"house-item-006","targetText":"vrata","supportText":"door","emoji":"🚪"},{"id":"house-item-007","targetText":"prozor","supportText":"window","emoji":"🪟"},{"id":"house-item-008","targetText":"dvorište","supportText":"yard","emoji":"🌳"}]},{"id":"clothes","month":8,"title":"Clothes","subtitle":"odjeća","icon":"Cl","color":"#7dd3fc","items":[{"id":"clothes-item-001","targetText":"majica","supportText":"t-shirt","emoji":"👕"},{"id":"clothes-item-002","targetText":"pantalone","supportText":"pants","emoji":"👖"},{"id":"clothes-item-003","targetText":"haljina","supportText":"dress","emoji":"👗"},{"id":"clothes-item-004","targetText":"cipele","supportText":"shoes","emoji":"👟"},{"id":"clothes-item-005","targetText":"jakna","supportText":"jacket","emoji":"🧥"},{"id":"clothes-item-006","targetText":"kupaći kostim","supportText":"swimsuit","emoji":"🩱"},{"id":"clothes-item-007","targetText":"šešir","supportText":"hat","emoji":"👒"}]},{"id":"body","month":9,"title":"Body & Health","subtitle":"tijelo","icon":"Bd","color":"#f472b6","items":[{"id":"body-item-001","targetText":"glava","supportText":"head"},{"id":"body-item-002","targetText":"ruka","supportText":"hand / arm"},{"id":"body-item-003","targetText":"noga","supportText":"leg / foot"},{"id":"body-item-004","targetText":"stomak","supportText":"stomach"},{"id":"body-item-005","targetText":"Boli me glava.","supportText":"My head hurts."},{"id":"body-item-006","targetText":"Dobro sam.","supportText":"I'm fine."}]},{"id":"shopping","month":9,"title":"Shopping","subtitle":"kupovina","icon":"Sh","color":"#a3e635","items":[{"id":"shopping-item-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?"},{"id":"shopping-item-002","targetText":"Koliko košta ovo?","supportText":"How much is this?"},{"id":"shopping-item-003","targetText":"Hoću da kupim...","supportText":"I want to buy..."},{"id":"shopping-item-004","targetText":"Imate li...?","supportText":"Do you have...?"},{"id":"shopping-item-005","targetText":"Samo gledam.","supportText":"I'm just looking."},{"id":"shopping-item-006","targetText":"skupo","supportText":"expensive"},{"id":"shopping-item-007","targetText":"jeftino","supportText":"cheap"}],"dialogue":{"roles":["Shopkeeper","You"],"lines":[{"id":"shopping-dialogue-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?","role":"Shopkeeper"},{"id":"shopping-dialogue-002","targetText":"Koliko košta ovo?","supportText":"How much is this?","role":"You"},{"id":"shopping-dialogue-003","targetText":"Deset eura.","supportText":"Ten euros.","role":"Shopkeeper"},{"id":"shopping-dialogue-004","targetText":"To je malo skupo. Sedam?","supportText":"That's a bit expensive. Seven?","role":"You"},{"id":"shopping-dialogue-005","targetText":"Dobro, sedam.","supportText":"Okay, seven.","role":"Shopkeeper"},{"id":"shopping-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"You"}]}},{"id":"directions","month":10,"title":"Directions & Places","subtitle":"pravci","icon":"Di","color":"#7dd3fc","items":[{"id":"directions-item-001","targetText":"prodavnica","supportText":"store"},{"id":"directions-item-002","targetText":"banka","supportText":"bank"},{"id":"directions-item-003","targetText":"bolnica","supportText":"hospital"},{"id":"directions-item-004","targetText":"blizu","supportText":"near"},{"id":"directions-item-005","targetText":"daleko","supportText":"far"},{"id":"directions-item-006","targetText":"Idi pravo.","supportText":"Go straight."},{"id":"directions-item-007","targetText":"Skreni lijevo.","supportText":"Turn left."},{"id":"directions-item-008","targetText":"Skreni desno.","supportText":"Turn right."}]},{"id":"beach","month":10,"title":"Beach & Summer","subtitle":"plaža i ljeto","icon":"Bc","color":"#f472b6","items":[{"id":"beach-item-001","targetText":"pijesak","supportText":"sand"},{"id":"beach-item-002","targetText":"talas","supportText":"wave"},{"id":"beach-item-003","targetText":"kupanje","supportText":"swimming"},{"id":"beach-item-004","targetText":"peškir","supportText":"towel"},{"id":"beach-item-005","targetText":"sunčane naočare","supportText":"sunglasses"},{"id":"beach-item-006","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!"}],"dialogue":{"roles":["Friend","You"],"lines":[{"id":"beach-dialogue-001","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!","role":"Friend"},{"id":"beach-dialogue-002","targetText":"Odlično! Gdje su moje naočare?","supportText":"Great! Where are my sunglasses?","role":"You"},{"id":"beach-dialogue-003","targetText":"Evo ih, na peškiru.","supportText":"Here they are, on the towel.","role":"Friend"},{"id":"beach-dialogue-004","targetText":"Hvala! Je li voda hladna?","supportText":"Thanks! Is the water cold?","role":"You"},{"id":"beach-dialogue-005","targetText":"Ne, topla je!","supportText":"No, it's warm!","role":"Friend"}]}},{"id":"time","month":11,"title":"Telling Time","subtitle":"sati","icon":"Tm","color":"#a3e635","items":[{"id":"time-item-001","targetText":"Koliko je sati?","supportText":"What time is it?"},{"id":"time-item-002","targetText":"sat","supportText":"hour / o'clock"},{"id":"time-item-003","targetText":"minut","supportText":"minute"},{"id":"time-item-004","targetText":"podne","supportText":"noon"},{"id":"time-item-005","targetText":"ponoć","supportText":"midnight"},{"id":"time-item-006","targetText":"rano","supportText":"early"},{"id":"time-item-007","targetText":"kasno","supportText":"late"}]},{"id":"hobbies","month":11,"title":"Hobbies","subtitle":"hobiji","icon":"Hb","color":"#7dd3fc","items":[{"id":"hobbies-item-001","targetText":"plivati","supportText":"to swim","emoji":"🏊"},{"id":"hobbies-item-002","targetText":"čitati","supportText":"to read","emoji":"📖"},{"id":"hobbies-item-003","targetText":"igrati fudbal","supportText":"to play soccer","emoji":"⚽"},{"id":"hobbies-item-004","targetText":"slušati muziku","supportText":"to listen to music","emoji":"🎧"},{"id":"hobbies-item-005","targetText":"crtati","supportText":"to draw","emoji":"🎨"},{"id":"hobbies-item-006","targetText":"Šta voliš da radiš?","supportText":"What do you like to do?"}]},{"id":"travel","month":12,"title":"Travel Essentials","subtitle":"putovanje","icon":"Tr","color":"#f472b6","items":[{"id":"travel-item-001","targetText":"aerodrom","supportText":"airport","emoji":"✈️"},{"id":"travel-item-002","targetText":"pasoš","supportText":"passport","emoji":"🛂"},{"id":"travel-item-003","targetText":"kofer","supportText":"suitcase","emoji":"🧳"},{"id":"travel-item-004","targetText":"avion","supportText":"plane","emoji":"✈️"},{"id":"travel-item-005","targetText":"karta","supportText":"ticket","emoji":"🎫"},{"id":"travel-item-006","targetText":"Idemo u Crnu Goru!","supportText":"We're going to Montenegro!"}]},{"id":"capstone","month":12,"title":"Arriving in Montenegro","subtitle":"Put it all together","icon":"MG","color":"#a3e635","items":[{"id":"capstone-item-001","targetText":"Dobro došli!","supportText":"Welcome!"},{"id":"capstone-item-002","targetText":"Prijatan boravak.","supportText":"Enjoy your stay."},{"id":"capstone-item-003","targetText":"Jedva čekam.","supportText":"I can't wait."},{"id":"capstone-item-004","targetText":"Napokon smo ovdje!","supportText":"We're finally here!"}],"dialogue":{"roles":["Agent","You"],"lines":[{"id":"capstone-dialogue-001","targetText":"Dobro došli u Crnu Goru! Pasoš, molim.","supportText":"Welcome to Montenegro! Passport, please.","role":"Agent"},{"id":"capstone-dialogue-002","targetText":"Izvolite.","supportText":"Here you go.","role":"You"},{"id":"capstone-dialogue-003","targetText":"Hvala. Prijatan boravak!","supportText":"Thank you. Enjoy your stay!","role":"Agent"},{"id":"capstone-dialogue-004","targetText":"Hvala! Jedva čekam da vidim porodicu.","supportText":"Thank you! I can't wait to see my family.","role":"You"}]}},{"id":"verbs1","title":"Verbs: To Be & To Have","subtitle":"biti, imati","icon":"V1","color":"#7dd3fc","items":[{"id":"verbs1-item-001","targetText":"ja sam","supportText":"I am"},{"id":"verbs1-item-002","targetText":"ti si","supportText":"you are"},{"id":"verbs1-item-003","targetText":"on/ona je","supportText":"he/she is"},{"id":"verbs1-item-004","targetText":"mi smo","supportText":"we are"},{"id":"verbs1-item-005","targetText":"oni su","supportText":"they are"},{"id":"verbs1-item-006","targetText":"ja imam","supportText":"I have"},{"id":"verbs1-item-007","targetText":"ti imaš","supportText":"you have"},{"id":"verbs1-item-008","targetText":"mi imamo","supportText":"we have"}]},{"id":"adjectives","title":"Describing Things","subtitle":"pridjevi","icon":"Ad","color":"#f472b6","items":[{"id":"adjectives-item-001","targetText":"velik / velika","supportText":"big"},{"id":"adjectives-item-002","targetText":"mali / mala","supportText":"small"},{"id":"adjectives-item-003","targetText":"lijep / lijepa","supportText":"beautiful"},{"id":"adjectives-item-004","targetText":"ružan / ružna","supportText":"ugly"},{"id":"adjectives-item-005","targetText":"dobar / dobra","supportText":"good"},{"id":"adjectives-item-006","targetText":"loš / loša","supportText":"bad"},{"id":"adjectives-item-007","targetText":"nov / nova","supportText":"new"},{"id":"adjectives-item-008","targetText":"star / stara","supportText":"old"}]},{"id":"questionwords","title":"Question Words","subtitle":"šta, ko, gdje...","icon":"Qw","color":"#a3e635","items":[{"id":"questionwords-item-001","targetText":"šta","supportText":"what"},{"id":"questionwords-item-002","targetText":"ko","supportText":"who"},{"id":"questionwords-item-003","targetText":"gdje","supportText":"where"},{"id":"questionwords-item-004","targetText":"kada","supportText":"when"},{"id":"questionwords-item-005","targetText":"zašto","supportText":"why"},{"id":"questionwords-item-006","targetText":"kako","supportText":"how"},{"id":"questionwords-item-007","targetText":"koji / koja","supportText":"which"}]},{"id":"plans","title":"Making Plans","subtitle":"Hoćeš li..., Vidimo se!","icon":"Pl","color":"#7dd3fc","items":[{"id":"plans-item-001","targetText":"Hoćeš li...?","supportText":"Do you want to...?"},{"id":"plans-item-002","targetText":"Možemo li...?","supportText":"Can we...?"},{"id":"plans-item-003","targetText":"Kada se vidimo?","supportText":"When do we meet?"},{"id":"plans-item-004","targetText":"Vidimo se sutra.","supportText":"See you tomorrow."},{"id":"plans-item-005","targetText":"Dogovoreno!","supportText":"It's a deal! / Agreed!"}]},{"id":"smalltalk","title":"Small Talk","subtitle":"Getting to know people","icon":"St","color":"#f472b6","items":[{"id":"smalltalk-item-001","targetText":"Šta radiš?","supportText":"What are you doing?"},{"id":"smalltalk-item-002","targetText":"Odakle si?","supportText":"Where are you from?"},{"id":"smalltalk-item-003","targetText":"Koliko dugo si ovdje?","supportText":"How long have you been here?"},{"id":"smalltalk-item-004","targetText":"Sviđa mi se Crna Gora.","supportText":"I like Montenegro."},{"id":"smalltalk-item-005","targetText":"Ovo mi je prvi put ovdje.","supportText":"This is my first time here."}]},{"id":"pasttense","title":"Talking About the Past","subtitle":"bio sam, jučer...","icon":"Pt","color":"#a3e635","items":[{"id":"pasttense-item-001","targetText":"bio sam / bila sam","supportText":"I was"},{"id":"pasttense-item-002","targetText":"Jučer sam...","supportText":"Yesterday I..."},{"id":"pasttense-item-003","targetText":"Prošle godine...","supportText":"Last year..."},{"id":"pasttense-item-004","targetText":"Bilo je zabavno!","supportText":"It was fun!"},{"id":"pasttense-item-005","targetText":"Vidio sam / Vidjela sam","supportText":"I saw"}]},{"id":"futuretense","title":"Talking About the Future","subtitle":"sutra ću, sledeće godine...","icon":"Ft","color":"#7dd3fc","items":[{"id":"futuretense-item-001","targetText":"Sutra ću...","supportText":"Tomorrow I will..."},{"id":"futuretense-item-002","targetText":"Sledeće godine ćemo...","supportText":"Next year we will..."},{"id":"futuretense-item-003","targetText":"Vidjećemo se opet.","supportText":"We'll see each other again."},{"id":"futuretense-item-004","targetText":"Jedva čekam ljeto.","supportText":"I can't wait for summer."}]},{"id":"restaurant","title":"At a Restaurant","subtitle":"Beyond the café","icon":"Rs","color":"#f472b6","items":[{"id":"restaurant-item-001","targetText":"meni","supportText":"menu"},{"id":"restaurant-item-002","targetText":"konobar / konobarica","supportText":"waiter / waitress"},{"id":"restaurant-item-003","targetText":"Preporučujete li nešto?","supportText":"Do you recommend something?"},{"id":"restaurant-item-004","targetText":"Za piće?","supportText":"For drinks?"},{"id":"restaurant-item-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!"},{"id":"restaurant-item-006","targetText":"Bilo je ukusno.","supportText":"It was delicious."}],"dialogue":{"roles":["Waiter","You"],"lines":[{"id":"restaurant-dialogue-001","targetText":"Dobro veče! Izvolite meni.","supportText":"Good evening! Here is the menu.","role":"Waiter"},{"id":"restaurant-dialogue-002","targetText":"Hvala. Preporučujete li nešto?","supportText":"Thanks. Do you recommend something?","role":"You"},{"id":"restaurant-dialogue-003","targetText":"Riba je odlična danas.","supportText":"The fish is excellent today.","role":"Waiter"},{"id":"restaurant-dialogue-004","targetText":"Dobro, hoću ribu, molim.","supportText":"Okay, I'll have the fish, please.","role":"You"},{"id":"restaurant-dialogue-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!","role":"Waiter"},{"id":"restaurant-dialogue-006","targetText":"Hvala, bilo je ukusno!","supportText":"Thanks, it was delicious!","role":"You"}]}},{"id":"gathering","title":"Family Gathering","subtitle":"A full conversation at the table","icon":"Fg","color":"#a3e635","items":[{"id":"gathering-item-001","targetText":"Sjedi ovdje.","supportText":"Sit here."},{"id":"gathering-item-002","targetText":"Poslužite se.","supportText":"Help yourselves."},{"id":"gathering-item-003","targetText":"Živjeli!","supportText":"Cheers!"},{"id":"gathering-item-004","targetText":"Hvala na ručku.","supportText":"Thank you for lunch."},{"id":"gathering-item-005","targetText":"Bilo je divno vidjeti vas.","supportText":"It was wonderful to see you."}],"dialogue":{"roles":["Baka","You"],"lines":[{"id":"gathering-dialogue-001","targetText":"Sjedi ovdje, dijete. Poslužite se!","supportText":"Sit here, child. Help yourselves!","role":"Baka"},{"id":"gathering-dialogue-002","targetText":"Hvala, bako! Miriše odlično.","supportText":"Thanks, grandma! It smells great.","role":"You"},{"id":"gathering-dialogue-003","targetText":"Živjeli!","supportText":"Cheers!","role":"Baka"},{"id":"gathering-dialogue-004","targetText":"Živjeli! Hvala na ručku, bilo je divno.","supportText":"Cheers! Thank you for lunch, it was wonderful.","role":"You"}]}}]`),gt=[{id:"alphabet",title:"Alphabet",subtitle:"Latin & Cyrillic letters",icon:"Aa",color:"#7dd3fc",items:[{id:"alphabet-item-001",targetText:"A a",supportText:'Cyrillic: А а — "ah", as in auto (car)'},{id:"alphabet-item-002",targetText:"B b",supportText:'Cyrillic: Б б — "b", as in brat (brother)'},{id:"alphabet-item-003",targetText:"C c",supportText:'Cyrillic: Ц ц — "ts", as in cvijet (flower)'},{id:"alphabet-item-004",targetText:"Č č",supportText:'Cyrillic: Ч ч — hard "ch", as in čokolada'},{id:"alphabet-item-005",targetText:"Ć ć",supportText:'Cyrillic: Ћ ћ — soft "ch", as in ćevapi'},{id:"alphabet-item-006",targetText:"D d",supportText:'Cyrillic: Д д — "d", as in dijete'},{id:"alphabet-item-007",targetText:"Đ đ",supportText:'Cyrillic: Ђ ђ — soft "j", as in đak'},{id:"alphabet-item-008",targetText:"Dž dž",supportText:'Cyrillic: Џ џ — hard "j", as in džak'},{id:"alphabet-item-009",targetText:"Lj lj",supportText:'Cyrillic: Љ љ — "ly", as in ljubav'},{id:"alphabet-item-010",targetText:"Nj nj",supportText:'Cyrillic: Њ њ — "ny", as in njiva'},{id:"alphabet-item-011",targetText:"Š š",supportText:'Cyrillic: Ш ш — "sh", as in šuma'},{id:"alphabet-item-012",targetText:"Ž ž",supportText:'Cyrillic: Ж ж — "zh", as in žena'}]}],Te={languagePack:pt,curriculum:ut,topics:mt,bonusTopics:gt},yt=[["family","Family","People in your family",[["familja","family"],["nëna","mother"],["babai","father"],["motra","sister"],["vëllai","brother"]]],["greetings","Greetings","Say hello and introduce yourself",[["Përshëndetje!","Hello!"],["Mirëmëngjes!","Good morning!"],["Mirëmbrëma!","Good evening!"],["Si je?","How are you?"],["Mirupafshim!","Goodbye!"]]],["numbers","Numbers","Start counting",[["një","one"],["dy","two"],["tre","three"],["katër","four"],["pesë","five"]]],["colors","Colors","Describe colors",[["i kuq","red"],["blu","blue"],["i gjelbër","green"],["i verdhë","yellow"],["i zi","black"]]],["drinks","Drinks","Everyday drinks",[["ujë","water"],["kafe","coffee"],["çaj","tea"],["qumësht","milk"],["lëng","juice"]]],["food","Food","Everyday foods",[["bukë","bread"],["djathë","cheese"],["mish","meat"],["peshk","fish"],["fruta","fruit"]]],["veg","Vegetables & Market","Shop at the market",[["domate","tomato"],["kastravec","cucumber"],["patate","potato"],["qepë","onion"],["spec","pepper"]]],["cafe","At a Café","Order politely",[["Një kafe, ju lutem.","A coffee, please."],["A keni çaj?","Do you have tea?"],["Pa sheqer.","Without sugar."],["Sa kushton?","How much is it?"],["Faturën, ju lutem.","The bill, please."]]],["talkfamily","Talking About Family","Describe your family",[["Kjo është familja ime.","This is my family."],["Kam një motër.","I have a sister."],["Kam një vëlla.","I have a brother."],["Nëna ime quhet Ana.","My mother is named Ana."],["Ne jetojmë bashkë.","We live together."]]],["aboutme","About Me","Simple sentences about yourself",[["Unë quhem Lena.","My name is Lena."],["Jam trembëdhjetë vjeç.","I am thirteen years old."],["Jetoj në Amerikë.","I live in America."],["Më pëlqen muzika.","I like music."],["Po mësoj shqip.","I am learning Albanian."]]],["days","Days & Time","Days of the week",[["e hënë","Monday"],["e martë","Tuesday"],["e mërkurë","Wednesday"],["e enjte","Thursday"],["e premte","Friday"]]],["outabout","Out & About","Useful phrases away from home",[["Ku është banja?","Where is the bathroom?"],["Nuk e kuptoj.","I do not understand."],["Flisni anglisht?","Do you speak English?"],["Më ndihmoni, ju lutem.","Please help me."],["Faleminderit shumë.","Thank you very much."]]],["weather","Weather","Talk about the weather",[["Është ngrohtë.","It is warm."],["Është ftohtë.","It is cold."],["Po bie shi.","It is raining."],["Ka diell.","It is sunny."],["Fryn erë.","It is windy."]]],["emotions","Emotions & Feelings","Say how you feel",[["Jam i lumtur.","I am happy."],["Jam e lodhur.","I am tired."],["Jam i trishtuar.","I am sad."],["Kam frikë.","I am afraid."],["Jam mirë.","I am well."]]],["house","House & Home","Things around the home",[["shtëpi","house"],["dhomë","room"],["kuzhinë","kitchen"],["derë","door"],["dritare","window"]]],["clothes","Clothes","What people wear",[["këmishë","shirt"],["pantallona","trousers"],["fustan","dress"],["këpucë","shoes"],["xhaketë","jacket"]]],["body","Body & Health","Body and basic health",[["kokë","head"],["dorë","hand"],["këmbë","leg"],["Më dhemb koka.","My head hurts."],["Kam nevojë për një mjek.","I need a doctor."]]],["shopping","Shopping","Buy what you need",[["Dua këtë.","I want this."],["Sa kushton kjo?","How much does this cost?"],["Është shumë shtrenjtë.","It is too expensive."],["A keni një madhësi tjetër?","Do you have another size?"],["Do të paguaj me kartë.","I will pay by card."]]],["directions","Directions & Places","Find your way",[["majtas","left"],["djathtas","right"],["drejt","straight ahead"],["afër","near"],["larg","far"]]],["beach","Beach & Summer","Enjoy a summer day",[["det","sea"],["plazh","beach"],["diell","sun"],["not","swimming"],["krem kundër diellit","sunscreen"]]],["time","Telling Time","Ask and tell the time",[["Sa është ora?","What time is it?"],["Është ora një.","It is one o’clock."],["Është mesditë.","It is noon."],["në mëngjes","in the morning"],["në mbrëmje","in the evening"]]],["hobbies","Hobbies","Talk about free time",[["Më pëlqen të lexoj.","I like to read."],["Më pëlqen muzika.","I like music."],["Luaj futboll.","I play soccer."],["Noton.","He or she swims."],["Vizatoj.","I draw."]]],["travel","Travel Essentials","Move around confidently",[["aeroport","airport"],["stacion","station"],["biletë","ticket"],["pasaportë","passport"],["Ku është hoteli?","Where is the hotel?"]]],["capstone","Putting It Together","Use language in a full day",[["Sapo mbërritëm.","We just arrived."],["Gëzohem që ju takoj.","Nice to meet you."],["Ku do të shkojmë?","Where will we go?"],["Jam gati.","I am ready."],["Ishte një ditë e bukur.","It was a beautiful day."]]],["verbs1","Verbs: To Be & To Have","Core sentence building",[["jam","I am"],["je","you are"],["është","he, she, or it is"],["kam","I have"],["ke","you have"]]],["adjectives","Describing Things","Useful descriptions",[["i madh","big"],["i vogël","small"],["i mirë","good"],["i bukur","beautiful"],["i ri","new"]]],["questionwords","Question Words","Ask useful questions",[["kush","who"],["çfarë","what"],["ku","where"],["kur","when"],["pse","why"]]],["plans","Making Plans","Arrange time together",[["Çfarë do të bëjmë?","What will we do?"],["A do të vish?","Will you come?"],["Shihemi nesër.","See you tomorrow."],["Në çfarë ore?","At what time?"],["Ide e mirë!","Good idea!"]]],["smalltalk","Small Talk","Get to know people",[["Nga je?","Where are you from?"],["Si po kalon?","How is it going?"],["Çfarë të pëlqen?","What do you like?"],["Sa kohë do të rrish?","How long will you stay?"],["Edhe mua.","Me too."]]],["pasttense","Talking About the Past","Share what happened",[["Isha në shtëpi.","I was at home."],["Kisha kohë.","I had time."],["Shkova në qytet.","I went to town."],["Hëngra mëngjes.","I ate breakfast."],["Dje ishte bukur.","Yesterday was nice."]]],["futuretense","Talking About the Future","Say what will happen",[["Do të vij nesër.","I will come tomorrow."],["Do të shkojmë në plazh.","We will go to the beach."],["Do të hamë bashkë.","We will eat together."],["Do të të telefonoj.","I will call you."],["Shihemi javën tjetër.","See you next week."]]],["restaurant","At a Restaurant","Order a full meal",[["Një tavolinë për katër veta.","A table for four."],["Çfarë rekomandoni?","What do you recommend?"],["Do të marr peshkun.","I will have the fish."],["Pa mish, ju lutem.","Without meat, please."],["Ishte shumë e shijshme.","It was very delicious."]]],["gathering","Family Gathering","Talk around the table",[["Mirë se erdhët!","Welcome!"],["Uluni, ju lutem.","Please sit down."],["Si është familja?","How is the family?"],["Gëzuar!","Cheers!"],["Faleminderit për darkën.","Thank you for dinner."]]],["alphabet","Albanian Alphabet","Distinctive Albanian letters",[["ë","ë — a central vowel"],["ç","ç — like ch in chair"],["dh","dh — like th in this"],["gj","gj — a soft palatal sound"],["ll","ll — a strong l sound"]]]],ht={family:[["gjyshja","grandmother"],["gjyshi","grandfather"],["tezja","aunt"],["kushëriri","male cousin"]],greetings:[["Mirë se vini!","Welcome!"],["Si quhesh?","What is your name?"],["Gëzohem që të njoh.","Nice to meet you."],["Natën e mirë!","Good night!"]],numbers:[["gjashtë","six"],["shtatë","seven"],["tetë","eight"],["nëntë","nine"],["dhjetë","ten"]],colors:[["i bardhë","white"],["portokalli","orange"],["vjollcë","purple"],["rozë","pink"]],food:[["vezë","egg"],["pulë","chicken"],["oriz","rice"],["supë","soup"]],cafe:[["Dua një ujë.","I would like a water."],["Me qumësht, ju lutem.","With milk, please."],["A mund të porosis?","May I order?"],["Faleminderit.","Thank you."]],aboutme:[["Jam nga Amerika.","I am from America."],["Kam dy vëllezër.","I have two brothers."],["Flas pak shqip.","I speak a little Albanian."],["Nuk flas mirë ende.","I do not speak well yet."]],outabout:[["Mund ta përsërisni?","Can you repeat that?"],["Më ngadalë, ju lutem.","More slowly, please."],["Ku jemi?","Where are we?"],["Jam humbur.","I am lost."]],directions:[["Ku është qendra?","Where is the center?"],["Kthehu majtas.","Turn left."],["Kthehu djathtas.","Turn right."],["Është këtu afër.","It is nearby."]],travel:[["Nisja","departure"],["Mbërritja","arrival"],["Ku është porta?","Where is the gate?"],["Kam një rezervim.","I have a reservation."]],restaurant:[["Menuja, ju lutem.","The menu, please."],["Jam vegjetarian.","I am vegetarian."],["Pa gluten, ju lutem.","Gluten-free, please."],["Ushqimi ishte shumë i mirë.","The food was very good."]],gathering:[["Na keni munguar.","We missed you."],["Hajde të hamë.","Let us eat."],["Si keni qenë?","How have you been?"],["Shihemi së shpejti.","See you soon."]]},fe={greetings:{roles:["Learner","Friend"],lines:[["Learner","Përshëndetje! Si quhesh?","Hello! What is your name?"],["Friend","Unë quhem Arta. Po ti?","My name is Arta. And you?"],["Learner","Unë quhem Lena. Gëzohem që të njoh.","My name is Lena. Nice to meet you."],["Friend","Edhe unë. Mirupafshim!","Me too. Goodbye!"]]},cafe:{roles:["Guest","Server"],lines:[["Guest","Përshëndetje. A mund të porosis?","Hello. May I order?"],["Server","Po, sigurisht.","Yes, of course."],["Guest","Një kafe me qumësht, ju lutem.","A coffee with milk, please."],["Server","Patjetër.","Certainly."]]},directions:{roles:["Traveler","Local"],lines:[["Traveler","Më falni, ku është qendra?","Excuse me, where is the center?"],["Local","Shko drejt dhe kthehu majtas.","Go straight and turn left."],["Traveler","Është larg?","Is it far?"],["Local","Jo, është këtu afër.","No, it is nearby."]]},gathering:{roles:["Host","Guest"],lines:[["Host","Mirë se erdhët! Na keni munguar.","Welcome! We missed you."],["Guest","Faleminderit. Si keni qenë?","Thank you. How have you been?"],["Host","Shumë mirë. Hajde të hamë.","Very well. Let us eat."],["Guest","Gëzuar!","Cheers!"]]}},Ue={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},vt=new Map(Ue.months.flatMap((e,t)=>e.map(a=>[a,t+1]))),Ee=["#7dd3fc","#f472b6","#a3e635"],De=yt.map(([e,t,a,s])=>{const i=vt.get(e)||10,r=[...s,...ht[e]||[]];return{id:e,month:i,bucket:i-1,title:t,subtitle:a,icon:e.slice(0,2).toUpperCase(),color:Ee[(i-1)%Ee.length],note:"Standard Albanian draft for fluent family review.",items:r.map(([o,l],d)=>({id:`${e}-sq-${String(d+1).padStart(3,"0")}`,targetText:o,supportText:l,reviewStatus:"draft"})),...fe[e]?{dialogue:{roles:fe[e].roles,lines:fe[e].lines.map(([o,l,d],c)=>({id:`${e}-dialogue-sq-${String(c+1).padStart(3,"0")}`,role:o,targetText:l,supportText:d,reviewStatus:"draft"}))}}:{}}}),Me={languagePack:{id:"albanian-en",targetLanguage:{code:"sq",name:"Albanian",scripts:["Latn"]},supportLanguage:{code:"en",name:"English"},version:"0.1.0",status:"review",audio:{locale:"sq-AL",delivery:"speech-synthesis-draft",reviewStatus:"draft",note:"Device voice is a temporary listening aid until a fluent Albanian reviewer approves recorded audio."}},curriculum:Ue,topics:De.filter(e=>e.id!=="alphabet"),bonusTopics:De.filter(e=>e.id==="alphabet")},Ve=new Map([[Te.languagePack.id,Te],[Me.languagePack.id,Me]]);let z=Te,L=z.languagePack,te=z.topics,he=z.bonusTopics,Ye=[...te,...he];const ft=["Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"],xe=new Date(2026,7,10);let ae=z.curriculum.months,Ke=z.curriculum.extras,Je=new Map(ae.flatMap((e,t)=>e.map(a=>[a,t+1])));const Ce=[{type:"discover",name:"Discover",detail:"Meet new words and hear them aloud"},{type:"recall",name:"Recall",detail:"Bring yesterday’s language back"},{type:"build",name:"Build",detail:"Put words into useful patterns"},{type:"use",name:"Use",detail:"Speak, listen, and role-play"},{type:"checkpoint",name:"Checkpoint",detail:"Show what you remember"}];function xt(){return[...Ve.values()].map(e=>e.languagePack)}function bt(e){const t=Ve.get(e);if(!t)throw new Error(`Unknown language pack: ${e}`);z=t,L=z.languagePack,te=z.topics,he=z.bonusTopics,Ye=[...te,...he],ae=z.curriculum.months,Ke=z.curriculum.extras,Je=new Map(ae.flatMap((a,s)=>a.map(i=>[i,s+1]))),C=Qe()}function ze(){return te}function Tt(){return he}function wt(){return ae.flat().map(H).filter(Boolean)}function kt(){return Ke.map(H).filter(Boolean)}function $t(e){return Je.get(e)||null}function H(e){return Ye.find(t=>t.id===e)}function Qe(){const e=[];let t=1;for(let a=0;a<10;a++){const s=ae[a].map(H);for(let i=0;i<4;i++){const r=a*4+i+1;if(i<3){const o=s[i];for(let l=0;l<5;l++){const d=Ce[l];e.push({id:`voyage-${t}`,number:t,month:a,week:r,dayOfWeek:l+1,topicId:o.id,type:d.type,title:`${o.title}: ${d.name}`,detail:d.detail}),t++}}else for(let o=0;o<5;o++){const l=Ce[o];e.push({id:`voyage-${t}`,number:t,month:a,week:r,dayOfWeek:o+1,topicId:null,type:`integration-${l.type}`,title:`Integration: ${l.name}`,detail:`Review topics from Month ${a+1}`}),t++}}}return e}let C=Qe();function K(e){const t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function J(e,t=Math.random){const a=e.slice();for(let s=a.length-1;s>0;s--){const i=Math.floor(t()*(s+1));[a[s],a[i]]=[a[i],a[s]]}return a}function ee(e,t=6,a=Math.random){const s=Math.min(t,e.length),i=J(e,a).slice(0,s),r=[];return i.forEach((o,l)=>{r.push({id:`target-${l}`,pairId:l,text:o.targetText,kind:"target"}),r.push({id:`support-${l}`,pairId:l,text:o.supportText,kind:"support"})}),{tiles:J(r,a),selectedIds:[],matchedIds:[]}}function V(e,t=8,a=Math.random){const s=Math.min(t,e.length);return{questions:J(e,a).slice(0,s).map(o=>{const l=e.filter(u=>u.targetText!==o.targetText),d=J(l,a).slice(0,Math.min(3,l.length)),c=J([o.targetText,...d.map(u=>u.targetText)],a);return{promptText:o.supportText,correctAnswer:o.targetText,options:c}}),qIdx:0,score:0,selected:null,answered:!1}}function St(e){let t=[...String(e)].reduce((a,s)=>a*31+s.charCodeAt(0)>>>0,2166136261);return()=>{t=t+1831565813>>>0;let a=t;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}function Ze(e,t,a={}){const s=[],i=a.random||Math.random;if(e.topicId){const r=H(e.topicId),o=te[te.indexOf(r)-1]||null;o&&s.push({type:"warmup",title:"Warmup",subtitle:`Quick practice from ${o.title}`,items:o.items.slice(0,5)}),e.type==="discover"?(s.push({type:"discover",title:"New Vocabulary",subtitle:`Discover words for ${r.title}`,items:r.items}),s.push({type:"match",title:"Recall Match",subtitle:"Connect the translations",match:ee(r.items,4,i)})):e.type==="recall"?(s.push({type:"recall-flash",title:"Vocabulary Recall",subtitle:"Self-assess your memory",items:J(r.items,i)}),s.push({type:"quiz",title:"Quick Quiz",subtitle:"Test your understanding",quiz:V(r.items,5,i)})):e.type==="build"?(s.push({type:"note",title:"Sentence Pattern",subtitle:"How sentences are structured",note:r.note||"Practice assembling phrases in this topic."}),s.push({type:"quiz",title:"Pattern Practice",subtitle:"Complete the sentences correctly",quiz:V(r.items,6,i)})):e.type==="use"?r.dialogue?s.push({type:"dialogue",title:"Dialogue Practice",subtitle:"Read the roles out loud",dialogue:r.dialogue}):s.push({type:"listen",title:"Listen & Repeat",subtitle:"Practice your pronunciation",items:r.items}):e.type==="checkpoint"&&(s.push({type:"quiz",title:"Topic Quiz",subtitle:"Show what you remember",quiz:V(r.items,8,i)}),s.push({type:"match",title:"Vocabulary Match",subtitle:"Match all pairs to complete the topic",match:ee(r.items,6,i)}))}else{const o=ae[e.month].map(H).flatMap(l=>l.items);s.push({type:"quiz",title:"Integration Quiz",subtitle:`Review from Month ${e.month+1}`,quiz:V(o,8,i)}),s.push({type:"match",title:"Integration Match",subtitle:"Connect the words quickly",match:ee(o,8,i)})}return s.push({type:"done",title:"Completed!",subtitle:"Awesome job!"}),s}const E=null;async function jt(){{alert("Supabase credentials are not configured in your environment variables. Please check the .env file.");return}}async function Ae(){}let ve=L.id,_e=L.version;function It(){ve=L.id,_e=L.version}function Lt(e){return localStorage.getItem(`nautilus:${e}:active-pack`)||"montenegrin-en"}function _t(e,t){localStorage.setItem(`nautilus:${e}:active-pack`,t)}function se(e,t,a=ve){return`nautilus:${a}:${e}:${t}`}function Pt(e,t){return{stars:`mn_${e}_stars`,topics:`mn_${e}_completed`,lessons:`mn_${e}_voyage_lessons`,activity:`mn_${e}_activity_dates`,dialogues:`mn_${e}_dialogues`}[t]}function ne(e,t,a){const s=se(e,t),i=localStorage.getItem(s);if(i!==null)return i;const r=Pt(e,t),o=r?localStorage.getItem(r):null;return o!==null?(localStorage.setItem(s,o),o):a}function ie(){const e=localStorage.getItem("mn_profiles");if(e)try{return JSON.parse(e).map(a=>String(a.id).startsWith("local-")?a:{...a,isGuide:!1})}catch{}return[]}function qt(e){localStorage.setItem("mn_profiles",JSON.stringify(e))}function Et(){return localStorage.getItem("mn_active_profile")||null}function Dt(e){e?localStorage.setItem("mn_active_profile",e):localStorage.removeItem("mn_active_profile")}function Z(e){if(!e)return null;const a=ie().find(c=>c.name===e)||{id:`local-${e}`,isGuide:!1},s=parseInt(ne(e,"stars","0"),10)||0;let i=[];try{i=JSON.parse(ne(e,"topics","[]"))}catch{}let r=[];try{r=JSON.parse(ne(e,"lessons","[]"))}catch{}let o=[];try{o=JSON.parse(ne(e,"activity","[]"))}catch{}const l=parseInt(ne(e,"dialogues","0"),10)||0,d=Mt(o);return{id:a.id,profile:e,stars:s,streakDays:d,completedTopicIds:i,completedLessons:r,activityDates:o,dialoguesDone:l,isGuide:a.isGuide,packId:ve,packVersion:_e}}function Mt(e){if(!e||e.length===0)return 0;const t=new Set(e);let a=0,s=new Date;s.setHours(0,0,0,0);const i=K(s);s.setDate(s.getDate()-1);const r=K(s);if(!t.has(i)&&!t.has(r))return 0;let o=t.has(i)?new Date:s;for(o.setHours(0,0,0,0);t.has(K(o));)a++,o.setDate(o.getDate()-1);return a}function Ct(e,t){localStorage.setItem(se(e,"stars"),String(t))}function zt(e,t){localStorage.setItem(se(e,"topics"),JSON.stringify(t))}function At(e,t){localStorage.setItem(se(e,"lessons"),JSON.stringify(t))}function Ft(e,t){localStorage.setItem(se(e,"activity"),JSON.stringify(t))}function Ht(e,t){localStorage.setItem(se(e,"dialogues"),String(t))}function Nt(e,t){const a=Z(e);if(a.isGuide)return;const s=a.stars+t;Ct(e,s),Xe(e),pe(a.id,"awardStars",{name:e,stars:s})}function Xe(e){const t=Z(e);if(t.isGuide)return;const a=K(new Date);if(!t.activityDates.includes(a)){const s=[...t.activityDates,a];Ft(e,s),pe(t.id,"recordActivity",{name:e,dateKey:a})}}function Gt(e,t){const a=Z(e);if(!a.isGuide&&!a.completedLessons.includes(t)){const s=[...a.completedLessons,t];At(e,s),Xe(e),pe(a.id,"completeLesson",{name:e,lessonId:t})}}function Fe(e,t){const a=Z(e);if(!a.isGuide&&!a.completedTopicIds.includes(t)){const s=[...a.completedTopicIds,t];zt(e,s),pe(a.id,"completeTopic",{name:e,topicId:t})}}function Ot(e){const t=Z(e);if(t.isGuide)return;const a=t.dialoguesDone+1;Ht(e,a),pe(t.id,"incrementDialogues",{name:e,dialoguesDone:a})}function Wt(){return ie().filter(a=>!a.isGuide).map(a=>{const s=Z(a.name);return{name:a.name,stars:s.stars,streak:s.streakDays,completed:s.completedTopicIds.length}})}async function He(e,t){const a=ie();if(a.some(s=>s.name.toLowerCase()===e.toLowerCase()))throw new Error("Profile name already exists");{const s=`local-${e}`,i=[...a,{id:s,name:e,isGuide:t}];qt(i)}}function Rt(){try{return JSON.parse(localStorage.getItem("mn_sync_queue")||"[]")}catch{return[]}}function Bt(e){localStorage.setItem("mn_sync_queue",JSON.stringify(e))}function pe(e,t,a){var r,o;if(String(e).startsWith("local-"))return;const s=Rt(),i=((o=(r=globalThis.crypto)==null?void 0:r.randomUUID)==null?void 0:o.call(r))||`${Date.now()}-${Math.random().toString(16).slice(2)}`;s.push({operationId:i,profileId:e,packId:ve,packVersion:_e,type:t,payload:a,timestamp:Date.now()}),Bt(s),et()}async function et(){}async function Ne(){}function D(){throw new Error("Family cloud features are not configured.")}async function Ut(){D();const{data:e,error:t}=await E.from("family_memberships").select("family_id, role, joined_at, families(id, name, learners_can_invite)").order("joined_at",{ascending:!0});if(t)throw t;return e||[]}async function be(e){D();const{data:t,error:a}=await E.rpc("get_family_overview",{target_family:e});if(a)throw a;return t}async function Vt(e){D();const t=e.trim();if(!t)throw new Error("Family name is required.");const{data:a,error:s}=await E.rpc("create_family",{family_name:t});if(s)throw s;return a}async function Yt(e,t,a="learner"){D();const s=t.trim().toLowerCase();if(!s)throw new Error("Invitation email is required.");const{data:i,error:r}=await E.rpc("create_family_invitation",{target_family:e,invite_email:s,invite_role:a});if(r)throw r;return i}async function Kt(e,t){D();const a=t.trim().toLowerCase();if(!a)throw new Error("Learner email is required.");const{data:s,error:i}=await E.rpc("create_learner_profile_invitation",{target_profile:e,invite_email:a});if(i)throw i;return s}function Jt(e=new Date){const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${s}`}async function tt(e,t){D();const{data:a,error:s}=await E.rpc("get_family_play_state",{target_family:e,target_pack_id:t});if(s)throw s;return a||{completedDays:0,completedDates:[],activeSession:null}}async function Qt({familyId:e,packId:t,packVersion:a,lessonId:s,voyageDay:i,participantProfileIds:r=[],date:o=new Date,timezone:l=Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}){D();const{data:d,error:c}=await E.rpc("start_family_play",{target_family:e,target_pack_id:t,target_pack_version:a,target_lesson_id:s,target_voyage_day:i,target_local_date:Jt(o),target_timezone:l,participant_profiles:r});if(c)throw c;return d}async function Zt(e,t,a=null){D();const{data:s,error:i}=await E.rpc("control_family_play",{target_session:e,requested_status:t,requested_segment:a});if(i)throw i;return s}async function Xt(e){D();const{data:t,error:a}=await E.rpc("join_family_play",{target_session:e});if(a)throw a;return t}async function ea(e){D();const{data:t,error:a}=await E.rpc("complete_family_play",{target_session:e});if(a)throw a;return t}async function Ge(e){D();const{data:t,error:a}=await E.rpc("claim_family_play_controller",{target_session:e});if(a)throw a;return t}async function ta(e,t){D();const{data:a,error:s}=await E.rpc("handoff_family_play_controller",{target_session:e,next_adult:t});if(s)throw s;return a}async function aa(e){D();const{data:t,error:a}=await E.rpc("heartbeat_family_play",{target_session:e});if(a)throw a;return t}async function ia(e,t){D();const{data:a,error:s}=await E.rpc("start_family_review",{source_session:e,participant_profiles:t});if(s)throw s;return a}async function Oe(e,t){D();const{data:a,error:s}=await E.rpc("get_family_progress_dashboard",{target_family:e,target_pack_id:t});if(s)throw s;return a||{shared:{completedDays:0,reviewSessions:0},learners:[],history:[]}}function sa(e,t,a){var S,I,m,b;const i=ie(),r=i.filter(g=>!g.isGuide),o=i.filter(g=>g.isGuide),l=(S=t.families)==null?void 0:S.some(g=>g.role==="owner"||g.role==="adult_guide"),d=`<div style="text-align: center; font-size: 12px; color: var(--text-muted); margin-bottom: 24px; border: 1px dashed var(--border-color); padding: 8px; border-radius: 8px;">
         ⚠️ Supabase is not configured (Local-Only Mode active)
       </div>`,c=t.sessionUser&&Array.isArray(t.families)&&t.families.length===0,u=t.sessionUser&&t.families===null&&!t.familyError;if(u||c){e.innerHTML=`
      <div class="profile-selection">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 16px; text-align: center;">
          <div class="logo-icon" style="width: 56px; height: 56px; font-size: 20px;">N</div>
          <h1 style="font-size: 32px; letter-spacing: -0.5px;">${u?"Loading your family…":"Create your family"}</h1>
          ${c?'<p style="color: var(--text-muted); font-size: 16px; max-width: 440px;">Your family workspace keeps learners, progress, and language preferences together.</p>':""}
        </div>
        <div style="width: 100%; max-width: 480px;">
          ${d}
          ${t.familyError?`<p role="alert" style="color: var(--pink); margin-bottom: 16px;">${t.familyError}</p>`:""}
          ${c?`
            <form id="family-setup-form" style="display: flex; flex-direction: column; gap: 12px;">
              <label for="family-name" style="font-weight: 700;">Family name</label>
              <input id="family-name" required maxlength="80" autocomplete="organization" placeholder="Your family name" style="min-height: 48px; border-radius: 12px; border: 1px solid var(--border-color); background: var(--surface); color: var(--text-main); padding: 0 14px; font: inherit;">
              <button class="btn btn-primary" type="submit">Create Family Workspace</button>
            </form>`:""}
        </div>
      </div>`,(I=e.querySelector("#family-setup-form"))==null||I.addEventListener("submit",async g=>{g.preventDefault();const x=e.querySelector("#family-name").value.trim();x&&await a.createFamily(x)}),(m=e.querySelector("#logout-btn"))==null||m.addEventListener("click",async()=>{await Ae(),a.refresh()});return}e.innerHTML=`
    <div class="profile-selection">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <div class="logo-icon" style="width: 56px; height: 56px; font-size: 20px;">N</div>
        <h1 style="font-size: 32px; letter-spacing: -0.5px;">Choose a Learner</h1>
        <p style="color: var(--text-muted); font-size: 16px;">Who is ready to learn today?</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px; width: 100%; max-width: 480px;">
        ${d}
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
  `;const h=e.querySelector("#learners-grid"),p=e.querySelector("#guides-grid");r.forEach(g=>{const x=document.createElement("div");x.style.display="flex",x.style.flexDirection="column",x.style.gap="8px";const M=document.createElement("button");if(M.className="profile-btn",M.innerText=`I'm ${g.name}`,M.addEventListener("click",()=>a.switchProfile(g.name)),x.appendChild(M),l&&!g.linkedUserId){const q=document.createElement("button");q.className="btn btn-secondary",q.style.fontSize="12px",q.style.padding="6px 10px",q.innerText=`Invite ${g.name} to Sign In`,q.addEventListener("click",async()=>{const A=prompt(`Enter ${g.name}'s Google account email:`);A!=null&&A.trim()&&await a.inviteLearner(g.id,g.name,A.trim())}),x.appendChild(q)}else if(g.linkedUserId){const q=document.createElement("span");q.style.cssText="font-size: 12px; color: var(--teal); text-align: center;",q.innerText="✓ Google sign-in linked",x.appendChild(q)}h.appendChild(x)}),o.forEach(g=>{const x=document.createElement("button");x.className="profile-btn",x.style.borderColor="var(--pink)",x.style.color="var(--text-main)",x.innerText=`${g.name}`,x.addEventListener("click",()=>a.switchProfile(g.name)),p.appendChild(x)});const y=document.createElement("button");if(y.className="profile-btn",y.style.borderStyle="dashed",y.style.borderColor="var(--border-color)",y.style.color="var(--text-muted)",y.style.fontSize="14px",y.innerText=t.sessionUser?"+ Add Learner":"+ Add Profile",y.addEventListener("click",async()=>{const g=prompt("Enter profile name:");if(!g||g.trim()==="")return;const x=t.sessionUser?!1:confirm("Is this profile a Parent/Guide? (Cancel for Learner)");try{await He(g.trim(),x),a.refresh()}catch(M){alert(`Error creating profile: ${M.message}`)}}),h.appendChild(y),r.length===0){const g=document.createElement("button");g.className="profile-btn visual-preview-btn",g.innerHTML='<span aria-hidden="true">⛵</span><span>Explore the Visual Preview</span><small>Open the illustrated 200-day voyage</small>',g.addEventListener("click",async()=>{const x="Preview Learner";await He(x,!1),a.switchProfile(x)}),h.prepend(g)}const v=e.querySelector("#login-btn");v&&v.addEventListener("click",async()=>{try{await jt()}catch(g){alert(`Google login failed: ${g.message}`)}});const $=e.querySelector("#logout-btn");$&&$.addEventListener("click",async()=>{try{await Ae(),a.refresh()}catch(g){alert(`Logout failed: ${g.message}`)}});const j=e.querySelector("#invite-partner-btn");j&&j.addEventListener("click",async()=>{const g=prompt("Enter your partner's Google account email:");g!=null&&g.trim()&&await a.invitePartner(g.trim())}),(b=e.querySelector("#family-overview-btn"))==null||b.addEventListener("click",a.goFamilyOverview)}function at(e=[]){return[...new Set(e.filter(Boolean))].sort()}function re(e=[]){return Math.min(200,at(e).length)}function ra(e=[]){const t=re(e);return{completedDays:t,nextDay:t>=200?200:t+1,percent:Math.round(t/200*100)}}function oa(e=[]){const t=re(e);return Array.from({length:10},(a,s)=>{const i=Math.max(0,Math.min(20,t-s*20));return{month:s+1,completedDays:i,earned:i===20}})}const na=[{id:"anchors-aweigh",label:"Anchors Aweigh",min:0,icon:"⚓"},{id:"making-headway",label:"Making Headway",min:50,icon:"⛵"},{id:"rounding-the-mark",label:"Rounding the Mark",min:100,icon:"🧭"},{id:"flying-colors",label:"Flying Colors",min:150,icon:"🚩"},{id:"shipshape-moored",label:"Shipshape · Moored",min:200,icon:"🏝️"}],we="https://kormilo-nautilus.netlify.app/",it=[{min:1,icon:"🐠",name:"Reef Scout",note:"First lesson completed"},{min:25,icon:"🐬",name:"Bright Dolphin",note:"25 voyage days completed"},{min:75,icon:"🐢",name:"Steady Turtle",note:"75 voyage days completed"},{min:150,icon:"🐋",name:"Great Voyager",note:"150 voyage days completed"}],Y=[{x:7,y:66,name:"Home Harbor",chapter:"Family & greetings"},{x:17,y:57,name:"Lantern Quay",chapter:"Names & introductions"},{x:28,y:63,name:"Echo Arch",chapter:"Numbers & sounds"},{x:39,y:51,name:"Color Cove",chapter:"Colors & descriptions"},{x:49,y:58,name:"Market Island",chapter:"Food & shopping"},{x:59,y:44,name:"Café Point",chapter:"Ordering & conversation"},{x:69,y:52,name:"Compass Rock",chapter:"Directions & travel"},{x:79,y:39,name:"Story Bay",chapter:"Sentences & stories"},{x:88,y:47,name:"Family Coast",chapter:"Visits & gatherings"},{x:95,y:32,name:"Sunrise Kotor",chapter:"Confident conversation"}];function la(e){const t=Math.max(0,Math.min(99.999,e))/100*(Y.length-1),a=Math.floor(t),s=t-a,i=Y[a],r=Y[Math.min(a+1,Y.length-1)];return{x:i.x+(r.x-i.x)*s,y:i.y+(r.y-i.y)*s}}function st(e){const t=Math.max(0,Math.min(200,Number(e)||0));return[...na].reverse().find(a=>t>=a.min)}function da(e){const t=Math.max(0,Number(e)||0);return it.filter(a=>t>=a.min)}function We(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function ca(e){var c,u,h,p;const t=((c=e.familyPlayState)==null?void 0:c.completedDays)??re(e.activityDates),a=st(t),s=da(t),i=oa(((u=e.familyPlayState)==null?void 0:u.completedDates)||e.activityDates),r=it.find(y=>t<y.min),o=Math.round(t/200*100),l=((h=e.languagePacks.find(y=>y.id===e.activePackId))==null?void 0:h.targetLanguage.name)||"Language",d=Array.from({length:10},(y,v)=>{const $=(v+1)*20,j=v*20,S=t>=$,I=t>=j&&t<$;return`<li class="voyage-port ${S?"reached":I?"current":"charted"}">
      <span class="voyage-port__marker">${S?"✓":I?"⛵":v+1}</span>
      <span class="voyage-port__label">Port ${v+1}</span>
    </li>`}).join("");return`
    <section class="voyage-map-card" aria-labelledby="voyage-map-title">
      <div class="voyage-map__header">
        <div>
          <div class="hero-tag">Your learning voyage</div>
          <h3 id="voyage-map-title">${a.icon} ${a.label}</h3>
          <p>${t} of 200 voyage days complete · ${o}% across the sea</p>
        </div>
        <button class="btn btn-secondary btn-pill" id="view-voyage-btn">View voyage plan →</button>
      </div>
      <div class="voyage-sea" style="--voyage-progress:${o}%">
        <img class="voyage-sea__art" src="${we}assets/illustrations/nautilus-voyage-map.jpg" alt="An illustrated sea route leading from a moonlit harbor toward the mountains and coastal towns of Montenegro">
        <div class="voyage-sea__shade" aria-hidden="true"></div>
        <div class="voyage-route" aria-hidden="true"><span></span></div>
        <ol class="voyage-ports" aria-label="Ten voyage ports">${d}</ol>
      </div>
    </section>

    <section class="captains-quarters" aria-labelledby="quarters-title">
      <div class="quarters-profile">
        <div class="quarters-avatar" aria-hidden="true">${((p=s.at(-1))==null?void 0:p.icon)||"⛵"}</div>
        <div>
          <div class="hero-tag">Captain's Quarters</div>
          <h3 id="quarters-title">${We(e.profile)}'s logbook</h3>
          <p>${a.label} · ${e.streakDays} day streak · ${e.stars} stars</p>
        </div>
      </div>
      <div class="quarters-grid">
        <div class="quarters-panel">
          <h4>${We(l)} Passport</h4>
          <p class="quarters-help">Earn one stamp for every 20 learning days.</p>
          <div class="passport-stamps">
            ${i.map(y=>`<div class="passport-stamp ${y.earned?"earned":""}" title="Month ${y.month}: ${y.completedDays} of 20 learning days">
              <span>${y.earned?"⚓":y.month}</span><small>${y.completedDays}/20</small>
            </div>`).join("")}
          </div>
        </div>
        <div class="quarters-panel">
          <h4>Friends of the Sea</h4>
          <p class="quarters-help">Companions mark steady progress, never competition.</p>
          <img class="sea-friends__art ${s.length?"":"waiting"}" src="${we}assets/illustrations/friends-of-the-sea.jpg" alt="A reef fish, dolphin, sea turtle, and whale swimming together as a voyage crew">
          <div class="sea-friends">
            ${s.length?s.map(y=>`<div class="sea-friend" title="${y.note}"><span>${y.icon}</span><small>${y.name}</small></div>`).join(""):'<p class="quarters-empty">Complete your first lesson to meet your Reef Scout.</p>'}
          </div>
          ${r?`<p class="next-friend">Next companion at voyage day ${r.min}.</p>`:'<p class="next-friend">Your whole crew is aboard!</p>'}
        </div>
      </div>
    </section>`}function pa(e){var h;const t=((h=e.familyPlayState)==null?void 0:h.completedDays)??re(e.activityDates),a=Math.round(t/200*100),s=st(t),i=Math.min(10,Math.floor(t/20)+1),r=Math.max(0,Math.min(20,i*20-t)),o=Math.max(0,Math.min(100,a)),l=la(a),d=Y.map(p=>`${p.x},${p.y}`).join(" "),c=Y.map((p,y)=>{const v=y+1<i?"reached":y+1===i?"current":"charted";return`<button class="voyage-landmark ${v}" style="--port-x:${p.x}%;--port-y:${p.y}%" aria-label="Port ${y+1}: ${p.name}, ${p.chapter}" data-port="${y+1}">
      <span class="voyage-landmark__beacon">${v==="reached"?"✓":y+1}</span>
      <span class="voyage-landmark__label"><strong>${p.name}</strong><small>${p.chapter}</small></span>
    </button>`}).join(""),u=Y[i-1];return`<section class="immersive-voyage" style="--voyage-camera:${o}%;--voyage-progress:${a}%;--voyage-x:${l.x}%;--voyage-y:${l.y}%" aria-labelledby="immersive-voyage-title">
    <picture class="immersive-voyage__world-frame">
      <img class="immersive-voyage__world" src="${we}assets/illustrations/nautilus-voyage-panorama-v2.jpg" alt="An Adriatic learning voyage from a moonlit family harbor through islands toward a sunlit Montenegrin mountain town">
    </picture>
    <div class="immersive-voyage__veil" aria-hidden="true"></div>
    <div class="immersive-voyage__clouds" aria-hidden="true"></div>
    <div class="immersive-voyage__sparkles" aria-hidden="true"></div>
    <div class="immersive-voyage__foreground" aria-hidden="true"></div>
    <div class="immersive-voyage__birds" aria-hidden="true">⌁　⌁　⌁</div>
    <svg class="immersive-voyage__route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <polyline class="immersive-voyage__route-shadow" points="${d}"></polyline>
      <polyline class="immersive-voyage__route-progress" pathLength="100" points="${d}"></polyline>
    </svg>
    <div class="immersive-voyage__landmarks">${c}</div>
    <div class="immersive-voyage__masthead">
      <span class="immersive-voyage__eyebrow">The 200-day family voyage</span>
      <span>Port ${i} of 10</span>
    </div>
    <div class="immersive-voyage__hud">
      <div class="hero-tag">Now sailing · Port ${i}</div>
      <h1 id="immersive-voyage-title">${u.name}</h1>
      <p><strong>${s.icon} ${s.label}</strong> · ${u.chapter}<br>${t} family days complete · ${r} to the next port</p>
      <div class="immersive-voyage__meter" aria-label="${a}% of family voyage complete"><span></span></div>
      <a class="btn btn-primary" href="#voyage-plan">Explore the route plan ↓</a>
    </div>
    <div class="immersive-voyage__vessel" aria-hidden="true"><span>⛵</span><i></i><b></b></div>
    <div class="immersive-voyage__hint">Choose a port to preview each chapter · move your pointer to look across the water</div>
  </section>`}function ua(e,t,a){var y,v,$,j,S,I;const s=t.sessionUser?ie().filter(m=>!String(m.id).startsWith("local-")):ie(),i=((y=t.familyPlayState)==null?void 0:y.completedDays)??re(t.activityDates),r=C[Math.min(i,199)],o=H(r.topicId)||ze()[0],l=t.completedLessons.includes(r.id),c=[{id:"first",label:"First Steps",cond:t.completedTopicIds.length>=1},{id:"getting",label:"Getting Started",cond:t.completedTopicIds.length>=5},{id:"halfway",label:"Halfway Hero",cond:t.completedTopicIds.length>=17},{id:"fluent",label:"Fluent Enough",cond:t.completedTopicIds.length>=ze().length},{id:"chatter",label:"Chatterbox",cond:t.dialoguesDone>=3},{id:"streak",label:"7-Day Streak",cond:t.streakDays>=7},{id:"pro",label:"Practice Pro",cond:t.stars>=50}].filter(m=>m.cond),u={};wt().forEach(m=>{const b=`Month ${$t(m.id)}`;u[b]||(u[b]=[]),u[b].push(m)});let h="";e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
          <div class="logo-icon">${L.targetLanguage.code.toUpperCase()}</div>
          <div class="logo-title">Learn ${L.targetLanguage.name}</div>
        </button>
        ${h}
        ${(v=t.families)!=null&&v.some(m=>m.role==="owner"||m.role==="adult_guide")?'<button class="btn btn-secondary" id="family-overview-btn" style="padding: 6px 12px; font-size: 12px;">Family Overview</button>':""}
      </div>

      <div class="nav-actions">
        <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted);">
          Language
          <select id="language-select" class="badge-pill" aria-label="Learning language" style="color: var(--text-main); min-height: 44px;">
            ${t.languagePacks.map(m=>`
              <option value="${m.id}" ${m.id===t.activePackId?"selected":""}>${m.targetLanguage.name}${m.status==="review"?" · Review":""}</option>
            `).join("")}
          </select>
        </label>
        <!-- Profile switcher -->
        <div class="profile-pill-container" role="group" aria-label="Profiles">
          ${s.map(m=>`
            <button class="profile-pill-btn ${t.profile===m.name?"active":""}" data-profile="${m.name}" aria-label="Switch to profile ${m.name}">${m.name}</button>
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
      ${($=t.familyPlayState)!=null&&$.activeSession?`
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
            ${t.isGuide?`Voyage day ${r.number} · Preview ${o.title} before the kids sit down`:`Voyage day ${r.number} · ${r.detail} · about 10–15 minutes`}
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
        </section>`:ca(t)}

      <!-- Guide Progress dashboard -->
      ${t.isGuide?`
        <section aria-label="Learner Progress Summary">
          <h3 class="section-title">Kids' Progress</h3>
          <div class="kids-progress-grid">
            ${Wt().map(m=>`
              <div class="kid-progress-card">
                <div class="kid-progress-header">${m.name}</div>
                <div class="kid-progress-stats">
                  <div>⭐ ${m.stars} stars</div>
                  <div>🔥 ${m.streak}d streak</div>
                  <div>📚 ${m.completed} topics done</div>
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
            ${c.map(m=>`
              <div class="badge-pill" style="border-color: var(--amber); color: var(--text-main);">
                <span style="color: var(--amber);">🎖</span> ${m.label}
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

        ${Object.keys(u).map(m=>`
          <div style="margin-bottom: 28px;">
            <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">${m}</h4>
            <div class="cards-grid">
              ${u[m].map(b=>{const g=t.completedTopicIds.includes(b.id);return`
                  <button type="button" class="topic-card" data-topic-id="${b.id}" aria-label="Practice ${b.title}">
                    <div class="topic-card__icon" style="background: ${b.color};">${b.icon}</div>
                    ${g?'<div class="topic-card__check">✓</div>':""}
                    <div>
                      <div class="topic-card__title">${b.title}</div>
                      <div class="topic-card__subtitle">${b.subtitle}</div>
                    </div>
                    <div class="topic-card__count">${b.items.length} words${b.dialogue?" · role-play":""}</div>
                  </button>
                `}).join("")}
            </div>
          </div>
        `).join("")}

        <!-- Anytime extras and advanced material -->
        <div style="margin-bottom: 28px;">
          <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Anytime Extras &amp; Capstones</h4>
          <div class="cards-grid">
            ${[...kt(),...Tt()].map(m=>`
              <button type="button" class="topic-card" data-topic-id="${m.id}" aria-label="Practice ${m.title}">
                <div class="topic-card__icon" style="background: ${m.color};">${m.icon}</div>
                <div>
                  <div class="topic-card__title">${m.title}</div>
                  <div class="topic-card__subtitle">${m.subtitle}</div>
                </div>
                <div class="topic-card__count">${m.items.length} words</div>
              </button>
            `).join("")}
          </div>
        </div>
      </section>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#start-session-btn").addEventListener("click",()=>a.startSession(r)),e.querySelector("#view-voyage-btn").addEventListener("click",a.goCurriculum),e.querySelectorAll(".profile-pill-btn").forEach(m=>{m.id!=="nav-add-profile-btn"&&m.addEventListener("click",b=>{a.switchProfile(b.target.dataset.profile)})}),e.querySelector("#nav-add-profile-btn").addEventListener("click",()=>{a.goProfileSelect()}),(j=e.querySelector("#language-select"))==null||j.addEventListener("change",m=>{a.selectLanguage(m.target.value)}),(S=e.querySelector("#family-overview-btn"))==null||S.addEventListener("click",a.goFamilyOverview),(I=e.querySelector("#join-family-play-btn"))==null||I.addEventListener("click",a.openFamilySession),e.querySelectorAll(".topic-card").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.topicId;b&&a.openTopic(b)})});const p=e.querySelector("#mixed-review-card");p&&p.addEventListener("click",a.startMixedReview)}function ma(e,t,a,s){var A;const i=t.calendarMonth,r=new Date(xe.getFullYear(),xe.getMonth()+i,1),o=r.getFullYear(),l=r.getMonth(),d=(new Date(o,l,1).getDay()+6)%7,c=new Date(o,l+1,0).getDate(),u=new Map;let h=new Date(xe);for(let f=0;f<C.length;f++){for(;h.getDay()===0||h.getDay()===6;)h.setDate(h.getDate()+1);u.set(K(h),C[f]),h.setDate(h.getDate()+1)}const p=[];for(let f=0;f<d;f++)p.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const y=K(new Date),v=((A=t.familyPlayState)==null?void 0:A.completedDates)||t.activityDates,$=new Set(at(v));for(let f=1;f<=c;f++){const G=new Date(o,l,f),X=K(G),O=u.get(X),oe=$.has(X),ue=X===y;let B="state-rest",U="In harbor";O&&(B="state-planned",U="Charted"),ue&&O&&!oe&&(B="state-making-way",U="Making way"),oe&&(B="state-full-sail",U="Full sail"),p.push({label:String(f),stateClass:B,ariaLabel:`${G.toLocaleDateString("en-US",{month:"long",day:"numeric"})}: ${U}${O?`, Lesson ${O.number}: ${O.title}`:""}`})}for(;p.length%7!==0;)p.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const j=r.toLocaleDateString("en-US",{month:"long",year:"numeric"}),S=ra(v),I=new Date;I.setHours(0,0,0,0),I.setDate(I.getDate()-(I.getDay()+6)%7);const m=new Date(I);m.setDate(m.getDate()+7);const b=t.activityDates.filter(f=>{const G=new Date(`${f}T12:00:00`);return G>=I&&G<m}).length,g=t.activityDates.filter(f=>f.startsWith(`${o}-${String(l+1).padStart(2,"0")}-`)).length,x=p.filter(f=>f.label&&f.ariaLabel.includes("Lesson"));e.innerHTML=`
    <div class="voyage-calendar__head">
      <div>
        <div style="color: var(--cyan); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 4px;">Ten-month learning voyage</div>
        <h3 class="voyage-calendar__title">${j}</h3>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <div class="voyage-calendar__count" title="Voyage Progress">
          ${S.completedDays<200?`${S.completedDays} of 200 learning days complete`:"Voyage complete · 200 of 200"}
        </div>
        <div class="voyage-calendar__nav">
          <button id="cal-prev" aria-label="Previous month" ${i===0?'disabled style="opacity:0.3; cursor:default;"':""}>‹</button>
          <button id="cal-next" aria-label="Next month" ${i===9?'disabled style="opacity:0.3; cursor:default;"':""}>›</button>
        </div>
      </div>
    </div>

    <div class="voyage-calendar__grid" role="grid" aria-label="Calendar for ${j}">
      ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(f=>`
        <div class="voyage-calendar__weekday" role="columnheader" aria-label="${f}">${f}</div>
      `).join("")}

      ${p.map(f=>f.label===""?`<div class="voyage-calendar__day" style="${f.style}" aria-hidden="true"></div>`:`
          <div class="voyage-calendar__day ${f.stateClass}" role="gridcell" aria-label="${f.ariaLabel}" tabindex="0">
            ${f.label}
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
      <span>${S.completedDays} learning ${S.completedDays===1?"day":"days"} completed · ${S.percent}%</span>
      <span>•</span>
      <span>${t.completedLessons.length} activities completed</span>
      <span>•</span>
      <span>${b} active ${b===1?"day":"days"} this week</span>
      <span>•</span>
      <span>${g} active ${g===1?"day":"days"} this month</span>
    </div>

    <details class="calendar-list">
      <summary>View this month as a list</summary>
      <ul>
        ${x.map(f=>`<li>${f.ariaLabel}</li>`).join("")}
      </ul>
    </details>
  `;const M=e.querySelector("#cal-prev"),q=e.querySelector("#cal-next");M&&i>0&&M.addEventListener("click",a),q&&i<9&&q.addEventListener("click",s)}const ga=[{id:"red",hex:"#e53935",dark:!1,terms:["red","crvena","e kuqe"]},{id:"blue",hex:"#1976d2",dark:!1,terms:["blue","plava","blu"]},{id:"green",hex:"#2e7d32",dark:!1,terms:["green","zelena","e gjelbër"]},{id:"yellow",hex:"#f9c928",dark:!0,terms:["yellow","žuta","e verdhë"]},{id:"black",hex:"#111318",dark:!1,terms:["black","crna","e zezë"]},{id:"white",hex:"#f5f1e8",dark:!0,terms:["white","bijela","e bardhë"]}],rt="https://kormilo-nautilus.netlify.app/",ya={colors:{src:"assets/illustrations/colors-harbor-lesson-v2.jpg",place:"Color Cove",prompt:"Look around the harbor. The vocabulary is already in the scene.",icon:"🎨"},family:{src:"assets/illustrations/family-courtyard-lesson-v1.jpg",place:"The Family Courtyard",prompt:"Take a seat at the table and bring the family words to life.",icon:"🏡"}};function ot(e){const t=ya[e];return t?{...t,src:`${rt}${t.src}`}:null}function ke(e){const t=String(e||"").trim().toLocaleLowerCase();return ga.find(a=>a.terms.includes(t))||null}function ha(e,t){return e!=="colors"?null:ke(t==null?void 0:t.supportText)||ke(t==null?void 0:t.targetText)}function Pe(e,t){const a=ha(e,t);return a?`<div class="color-field color-field--${a.id}" style="--lesson-color:${a.hex}" aria-hidden="true">
    <span class="color-field__sun"></span><span class="color-field__sail"></span><span class="color-field__wave"></span>
  </div>`:t!=null&&t.emoji?`<div class="flashcard-emoji">${t.emoji}</div>`:""}function nt(e){const t=ke(e);return t?` style="--tile-color:${t.hex};--tile-text:${t.dark?"#111318":"#ffffff"}" data-color-tile="true"`:""}function va(e){return e!=="colors"?"":`<figure class="lesson-scene lesson-scene--colors">
    <img src="${rt}assets/illustrations/colors-harbor.jpg" alt="A Montenegro harbor with a red boat, blue sea, green shutters, yellow umbrella, black cat, and white church tower">
    <figcaption><strong>Find the colors in the harbor.</strong><span>Red boat · blue sea · green shutters · yellow umbrella · black cat · white tower</span></figcaption>
  </figure>`}function lt(e,t,a){var c;const s=H(t.topicId),i=t.completedTopicIds.includes(s.id),r=!i&&!t.isGuide,o=[{id:"flashcards",label:"Flashcards"},{id:"match",label:"Match"},{id:"quiz",label:"Quiz"},{id:"listen",label:"Listen"}];s.dialogue&&o.push({id:"dialogue",label:"Role-play"}),e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${L.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${L.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main class="container" style="max-width: 720px;">
      <!-- Header info -->
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 8px;">
        <div>
          <h2 style="font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">${s.title}</h2>
          <p style="color: var(--text-muted); font-size: 14px;">${s.subtitle}</p>
          ${((c=L.audio)==null?void 0:c.reviewStatus)==="draft"?'<span class="audio-review-badge">Voice preview · fluent audio review pending</span>':""}
        </div>
        <div>
          ${i?`
            <div style="color: var(--lime); font-weight: 800; font-size: 14px; display: flex; align-items: center; gap: 6px;">
              <span>✓</span> Completed Topic
            </div>
          `:""}
          ${r?`
            <button class="btn btn-secondary btn-pill" id="skip-btn" style="padding: 6px 14px; font-size: 12px; min-height: 32px;">Already know this — skip</button>
          `:""}
        </div>
      </div>

      ${s.note?`
        <div style="background: rgba(250, 204, 21, 0.08); border: 1px solid var(--amber); border-radius: 12px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #ffe58f; margin-bottom: 24px; white-space: pre-line;">
          ${s.note}
        </div>
      `:""}

      ${va(s.id)}

      <!-- Activities Tabs -->
      <div style="display: flex; gap: 8px; margin: 16px 0 24px; flex-wrap: wrap;" role="tablist" aria-label="Topic Activities">
        ${o.map(u=>`
          <button class="btn btn-secondary btn-pill ${t.activity===u.id?"btn-active":""}" role="tab" aria-selected="${t.activity===u.id}" data-tab="${u.id}">${u.label}</button>
        `).join("")}
      </div>

      <!-- Activity Container -->
      <div id="activity-mount"></div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#back-btn").addEventListener("click",a.goDashboard);const l=e.querySelector("#skip-btn");l&&l.addEventListener("click",()=>{a.markTopicCompleted(s.id),lt(e,t,a)}),e.querySelectorAll("[data-tab]").forEach(u=>{u.addEventListener("click",h=>{const p=h.target.dataset.tab;a.setActivity(p)})});const d=e.querySelector("#activity-mount");fa(d,s,t,a)}function fa(e,t,a,s){a.activity==="flashcards"?me(e,t,a,s):a.activity==="match"?de(e,t,a,s):a.activity==="quiz"?ge(e,t,a,s):a.activity==="listen"?Q(e,t,a,s):a.activity==="dialogue"&&$e(e,t,a,s)}function me(e,t,a,s){const i=a.flash,r=i.order||t.items.map((d,c)=>c),o=t.items[r[i.idx]];e.innerHTML=`
    <div class="flashcard-container">
      <div class="flashcard-hint" style="color: var(--text-muted); font-size: 13px; font-weight: 700;">
        Card ${i.idx+1} of ${t.items.length}
      </div>

      <button type="button" class="flashcard-wrapper" id="card-wrapper" aria-label="Flashcard, tap to flip">
        <div class="flashcard ${i.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${Pe(t.id,o)}
            <div class="flashcard-text-mn">${o.targetText}</div>
            <div class="flashcard-hint">Tap to reveal translation</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en">${o.supportText}</div>
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
  `;const l=e.querySelector("#card-wrapper");l.addEventListener("click",()=>{i.flipped=!i.flipped,l.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#speak-btn").addEventListener("click",d=>{d.stopPropagation(),s.speak(o.targetText)}),e.querySelector("#prev-card-btn").addEventListener("click",()=>{i.idx=(i.idx-1+t.items.length)%t.items.length,i.flipped=!1,me(e,t,a,s)}),e.querySelector("#next-card-btn").addEventListener("click",()=>{i.idx=(i.idx+1)%t.items.length,i.flipped=!1,me(e,t,a,s)}),e.querySelector("#shuffle-btn").addEventListener("click",()=>{i.order=J(t.items.map((d,c)=>c)),i.idx=0,i.flipped=!1,me(e,t,a,s)})}function de(e,t,a,s){const i=a.match;(!i.tiles||i.tiles.length===0)&&(a.match=ee(t.items));const r=a.match,o=r.matchedIds.length/2,l=r.tiles.length/2,d=o===l;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Pairs matched: ${o} / ${l}
      </div>

      ${d?`
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 40px; margin-bottom: 8px;">🎉</div>
          <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Well Done!</h4>
          <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">You matched all words correctly! +1 star</p>
        </div>
      `:`
        <div class="matching-grid">
          ${r.tiles.map(c=>{const u=r.matchedIds.includes(c.id),h=r.selectedIds.includes(c.id);let p="match-tile";return u?p+=" matched":h&&(p+=" selected"),`
              <button class="${p}" data-tile-id="${c.id}"${nt(c.text)} ${u?"disabled":""}>
                ${c.text}
              </button>
            `}).join("")}
        </div>
      `}

      <button class="btn btn-secondary" id="reshuffle-match-btn">
        ${d?"Play Again":"New Round"}
      </button>
    </div>
  `,e.querySelector("#reshuffle-match-btn").addEventListener("click",()=>{a.match=ee(t.items),de(e,t,a,s)}),e.querySelectorAll(".match-tile").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.tileId;xa(u,e,t,a,s)})})}function xa(e,t,a,s,i){const r=s.match;if(!(r.matchedIds.includes(e)||r.selectedIds.includes(e)||r.selectedIds.length>=2)&&(r.selectedIds.push(e),de(t,a,s,i),r.selectedIds.length===2)){const[o,l]=r.selectedIds,d=r.tiles.find(u=>u.id===o),c=r.tiles.find(u=>u.id===l);d.pairId===c.pairId?(r.matchedIds.push(o,l),r.selectedIds=[],setTimeout(()=>{r.matchedIds.length===r.tiles.length&&(i.awardStars(1),i.markTopicCompleted(a.id)),de(t,a,s,i)},250)):setTimeout(()=>{r.selectedIds=[],de(t,a,s,i)},700)}}function ge(e,t,a,s){const i=a.quiz;(!i.questions||i.questions.length===0)&&(a.quiz=V(t.items));const r=a.quiz,o=r.questions[r.qIdx];if(r.qIdx>=r.questions.length||r.questions.length===0){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Quiz Finished!</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          Your score: ${r.score} / ${r.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="restart-quiz-btn">Try Again</button>
      </div>
    `,e.querySelector("#restart-quiz-btn").addEventListener("click",()=>{a.quiz=V(t.items),ge(e,t,a,s)});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${r.qIdx+1} of ${r.questions.length} · Score: ${r.score}
      </div>

      <div class="quiz-prompt">
        Translate to ${L.targetLanguage.name}:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">"${o.promptText}"</span>
      </div>

      <div class="quiz-options">
        ${o.options.map(c=>{let u="quiz-option";return r.answered&&(c===o.correctAnswer?u+=" correct":c===r.selected?u+=" incorrect":u+=" disabled"),`
            <button class="${u}" data-option="${c}" ${r.answered?"disabled":""}>
              ${c}
            </button>
          `}).join("")}
      </div>

      ${r.answered?`
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          ${r.qIdx+1===r.questions.length?"Show Results":"Next Question →"}
        </button>
      `:""}
    </div>
  `,e.querySelectorAll(".quiz-option").forEach(c=>{c.addEventListener("click",()=>{if(r.answered)return;const u=c.dataset.option;r.selected=u,r.answered=!0,u===o.correctAnswer&&(r.score++,s.awardStars(1)),ge(e,t,a,s)})});const d=e.querySelector("#next-question-btn");d&&d.addEventListener("click",()=>{r.qIdx++,r.answered=!1,r.selected=null,r.qIdx>=r.questions.length&&s.markTopicCompleted(t.id),ge(e,t,a,s)})}function Q(e,t,a,s){const i=a.listen,r=i.order||t.items.map((d,c)=>c),o=t.items[r[i.idx]],l=a.recording;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${i.idx+1} of ${t.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 32px; text-align: center;">
        ${o.targetText}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play pronunciation</button>

      <p style="font-size: 11px; color: var(--text-muted); max-width: 340px; text-align: center; line-height: 1.4;">
        Uses browser speech synthesis fallback voice.
      </p>

      <button class="btn btn-secondary" id="reveal-meaning-btn">
        ${i.revealed?"Hide Meaning":"Reveal Meaning"}
      </button>

      ${i.revealed?`
        <div style="font-size: 18px; color: var(--cyan); font-weight: 600; text-align: center; animation: fadeIn 0.2s;">
          "${o.supportText}"
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
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{s.speak(o.targetText)}),e.querySelector("#reveal-meaning-btn").addEventListener("click",()=>{i.revealed=!i.revealed,Q(e,t,a,s)}),e.querySelector("#prev-listen-btn").addEventListener("click",()=>{i.idx=(i.idx-1+t.items.length)%t.items.length,i.revealed=!1,Re(a),Q(e,t,a,s)}),e.querySelector("#next-listen-btn").addEventListener("click",()=>{i.idx=(i.idx+1)%t.items.length,i.revealed=!1,Re(a),Q(e,t,a,s)}),e.querySelector("#mic-record-btn").addEventListener("click",()=>{ba(e,t,a,s)})}function Re(e){e.recording.url&&URL.revokeObjectURL(e.recording.url),e.recording={status:"idle",url:null,error:null,chunks:[],recorder:null}}async function ba(e,t,a,s){const i=a.recording;if(i.status==="recording"){i.recorder&&i.recorder.stop();return}try{const r=await navigator.mediaDevices.getUserMedia({audio:!0}),o=new MediaRecorder(r),l=[];o.ondataavailable=d=>{d.data.size>0&&l.push(d.data)},o.onstop=()=>{const d=new Blob(l,{type:"audio/webm"}),c=URL.createObjectURL(d);r.getTracks().forEach(u=>u.stop()),a.recording={status:"ready",url:c,error:null,chunks:[],recorder:null},Q(e,t,a,s)},o.start(),a.recording={status:"recording",url:null,error:null,chunks:l,recorder:o},Q(e,t,a,s)}catch{a.recording={status:"idle",url:null,error:"Microphone access denied or unavailable on this device.",chunks:[],recorder:null},Q(e,t,a,s)}}function $e(e,t,a,s){const i=a.dialogue,r=t.dialogue;i.readAs||(i.readAs=r.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${r.roles.map(o=>`
          <button class="btn btn-secondary btn-pill ${i.readAs===o?"btn-active":""}" data-role="${o}">
            Read as ${o}
          </button>
        `).join("")}
        <button class="btn btn-secondary btn-pill" id="toggle-translation-btn">
          ${i.showEn?"Hide Translations":"Show Translations"}
        </button>
      </div>

      <div class="dialogue-container">
        ${r.lines.map((o,l)=>`
            <div class="dialogue-bubble ${o.role===i.readAs?"active-reader":""}" style="animation: fadeIn 0.3s var(--transition-medium);">
              <div class="dialogue-header">
                <span>${o.role}</span>
                <button class="dialogue-play-btn" data-play-line="${l}">►</button>
              </div>
              <div style="font-size: 17px; font-weight: 600; margin-top: 4px; color: var(--text-main);">${o.targetText}</div>
              ${i.showEn?`
                <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">"${o.supportText}"</div>
              `:""}
            </div>
          `).join("")}
      </div>

      <button class="btn btn-primary" id="finish-dialogue-btn" style="width: 100%; max-width: 480px; margin-top: 12px;">
        Finish Dialogue Practice
      </button>
    </div>
  `,e.querySelectorAll("[data-role]").forEach(o=>{o.addEventListener("click",()=>{i.readAs=o.dataset.role,$e(e,t,a,s)})}),e.querySelector("#toggle-translation-btn").addEventListener("click",()=>{i.showEn=!i.showEn,$e(e,t,a,s)}),e.querySelectorAll("[data-play-line]").forEach(o=>{o.addEventListener("click",()=>{const l=parseInt(o.dataset.playLine),d=r.lines[l].targetText;s.speak(d)})}),e.querySelector("#finish-dialogue-btn").addEventListener("click",()=>{s.incrementDialogues(),s.markTopicCompleted(t.id),s.awardStars(2),s.goDashboard()})}function Ta(e,t,a){const s=t.activeLesson;if(!t.session||t.session.lessonId!==s.id){const c=Ze(s,t.completedTopicIds);t.session={lessonId:s.id,stepIdx:0,steps:c,flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}}}const i=t.session,r=i.steps[i.stepIdx],o=ot(s.topicId),l=Math.round((i.stepIdx+1)/i.steps.length*100);e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${L.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${L.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="exit-btn">← Exit Lesson</button>
      </div>
    </header>

    <main class="${o?"immersive-lesson":"container"}" ${o?`style="--lesson-progress:${l}%;--lesson-shift:${Math.min(4,i.stepIdx)*-.35}%"`:'style="max-width:640px;"'}>
      ${o?`<img class="immersive-lesson__world" src="${o.src}" alt="${o.place}, an illustrated setting for this lesson">
        <div class="immersive-lesson__light" aria-hidden="true"></div>
        <div class="immersive-lesson__leaves" aria-hidden="true"></div>
        <aside class="immersive-lesson__location"><span>${o.icon}</span><div><small>Learning at</small><strong>${o.place}</strong><p>${o.prompt}</p></div></aside>`:""}
      <div class="${o?"immersive-lesson__workspace":""}">
        <!-- Steps Progress Bar -->
        <div class="session-steps-bar" role="progressbar" aria-label="Lesson progress" aria-valuenow="${i.stepIdx+1}" aria-valuemin="1" aria-valuemax="${i.steps.length}">
          ${i.steps.map((c,u)=>`
            <div class="session-step-segment ${u<=i.stepIdx?"active":""}" title="${c.title||c.type}"></div>
          `).join("")}
        </div>
        ${o?`<div class="immersive-lesson__trail" aria-hidden="true"><span></span><i>${o.icon}</i></div>`:""}
        <div id="session-step-mount" class="${o?"immersive-lesson__card":""}"></div>
      </div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#exit-btn").addEventListener("click",a.goDashboard);const d=e.querySelector("#session-step-mount");wa(d,r,t,a)}function wa(e,t,a,s){t.type==="warmup"?ka(e,t,a,s):t.type==="discover"?Se(e,t,a,s):t.type==="recall-flash"?dt(e,t,a,s):t.type==="note"?$a(e,t,a,s):t.type==="quiz"?je(e,t,a,s):t.type==="match"?ye(e,t,a,s):t.type==="dialogue"?ct(e,t,a,s):t.type==="listen"?Ie(e,t,a,s):t.type==="done"&&ja(e,t,a,s)}function ka(e,t,a,s){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 6px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
        ${t.items.map((i,r)=>`
          <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; border-radius: 12px; padding: 14px 16px;">
            <div>
              <div style="font-weight: 700; font-size: 16px;">${i.targetText}</div>
              <div style="font-size: 13px; color: var(--text-muted);">${i.supportText}</div>
            </div>
            <button class="dialogue-play-btn" data-warmup-play="${r}">►</button>
          </div>
        `).join("")}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
    </div>
  `,e.querySelectorAll("[data-warmup-play]").forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.dataset.warmup-play);s.speak(t.items[r].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{s.nextSessionStep()})}function Se(e,t,a,s){const i=a.session.flash,r=t.items[i.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Word ${i.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="discover-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Learning card, tap to flip">
        <div class="flashcard ${i.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${Pe(a.activeLesson.topicId,r)}
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
        <button class="btn btn-secondary" id="disc-prev-btn" ${i.idx===0?'disabled style="opacity:0.3; cursor:default;"':""}>←</button>
        <button class="btn btn-primary" id="disc-speak-btn">► Say It</button>
        <button class="btn btn-secondary" id="disc-next-btn" ${i.idx+1===t.items.length?'disabled style="opacity:0.3; cursor:default;"':""}>→</button>
      </div>

      ${i.idx+1===t.items.length?`
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      `:""}
    </div>
  `;const o=e.querySelector("#discover-card-wrapper");o.addEventListener("click",()=>{i.flipped=!i.flipped,o.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#disc-speak-btn").addEventListener("click",d=>{d.stopPropagation(),s.speak(r.targetText)}),e.querySelector("#disc-prev-btn").addEventListener("click",()=>{i.idx>0&&(i.idx--,i.flipped=!1,Se(e,t,a,s))}),e.querySelector("#disc-next-btn").addEventListener("click",()=>{i.idx+1<t.items.length&&(i.idx++,i.flipped=!1,Se(e,t,a,s))});const l=e.querySelector("#next-step-btn");l&&l.addEventListener("click",()=>{s.nextSessionStep()})}function dt(e,t,a,s){const i=a.session.flash,r=t.items[i.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Card ${i.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="recall-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Recall card, tap to flip">
        <div class="flashcard ${i.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-hint" style="margin-bottom: 16px; color: var(--cyan);">Can you recall the translation?</div>
            ${Pe(a.activeLesson.topicId,r)}
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
  `;const o=e.querySelector("#recall-card-wrapper");o.addEventListener("click",()=>{i.flipped=!i.flipped,o.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#recall-speak-btn").addEventListener("click",d=>{d.stopPropagation(),s.speak(r.targetText)});const l=()=>{i.idx+1<t.items.length?(i.idx++,i.flipped=!1,dt(e,t,a,s)):s.nextSessionStep()};e.querySelector("#recall-again-btn").addEventListener("click",()=>{t.items.push(r),l()}),e.querySelector("#recall-gotit-btn").addEventListener("click",()=>{l()})}function $a(e,t,a,s){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 12px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div class="glass" style="background: rgba(125, 211, 252, 0.08); border-color: var(--cyan); border-radius: 16px; padding: 20px; font-size: 16px; line-height: 1.6; color: var(--text-main); margin-bottom: 32px; white-space: pre-line;">
        ${t.note}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">I understand, start practice →</button>
    </div>
  `,e.querySelector("#next-step-btn").addEventListener("click",()=>{s.nextSessionStep()})}function je(e,t,a,s){a.session.quiz||(a.session.quiz=t.quiz);const i=a.session.quiz,r=i.questions[i.qIdx];if(i.qIdx>=i.questions.length){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Practice Complete</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          You scored: ${i.score} / ${i.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
      </div>
    `,e.querySelector("#next-step-btn").addEventListener("click",()=>{a.session.quiz=null,s.nextSessionStep()});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${i.qIdx+1} of ${i.questions.length} · Score: ${i.score}
      </div>

      <div class="quiz-prompt">
        Translate to ${L.targetLanguage.name}:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">"${r.promptText}"</span>
      </div>

      <div class="quiz-options">
        ${r.options.map(d=>{let c="quiz-option";return i.answered&&(d===r.correctAnswer?c+=" correct":d===i.selected?c+=" incorrect":c+=" disabled"),`
            <button class="${c}" data-option="${d}" ${i.answered?"disabled":""}>
              ${d}
            </button>
          `}).join("")}
      </div>

      ${i.answered?`
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          Next Question →
        </button>
      `:""}
    </div>
  `,e.querySelectorAll(".quiz-option").forEach(d=>{d.addEventListener("click",()=>{if(i.answered)return;const c=d.dataset.option;i.selected=c,i.answered=!0,c===r.correctAnswer&&(i.score++,s.awardStars(1)),je(e,t,a,s)})});const l=e.querySelector("#next-question-btn");l&&l.addEventListener("click",()=>{i.qIdx++,i.answered=!1,i.selected=null,je(e,t,a,s)})}function ye(e,t,a,s){a.session.match||(a.session.match=t.match);const i=a.session.match,r=i.matchedIds.length/2,o=i.tiles.length/2,l=r===o;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Pairs matched: ${r} / ${o}
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
          ${i.tiles.map(c=>{const u=i.matchedIds.includes(c.id),h=i.selectedIds.includes(c.id);let p="match-tile";return u?p+=" matched":h&&(p+=" selected"),`
              <button class="${p}" data-tile-id="${c.id}"${nt(c.text)} ${u?"disabled":""}>
                ${c.text}
              </button>
            `}).join("")}
        </div>
      `}
    </div>
  `,e.querySelectorAll(".match-tile").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.tileId;Sa(u,e,t,a,s)})});const d=e.querySelector("#next-step-btn");d&&d.addEventListener("click",()=>{a.session.match=null,s.nextSessionStep()})}function Sa(e,t,a,s,i){const r=s.session.match;if(!(r.matchedIds.includes(e)||r.selectedIds.includes(e)||r.selectedIds.length>=2)&&(r.selectedIds.push(e),ye(t,a,s,i),r.selectedIds.length===2)){const[o,l]=r.selectedIds,d=r.tiles.find(u=>u.id===o),c=r.tiles.find(u=>u.id===l);d.pairId===c.pairId?(r.matchedIds.push(o,l),r.selectedIds=[],setTimeout(()=>{r.matchedIds.length===r.tiles.length&&i.awardStars(1),ye(t,a,s,i)},250)):setTimeout(()=>{r.selectedIds=[],ye(t,a,s,i)},700)}}function ct(e,t,a,s){const i=a.session.dialogue,r=t.dialogue;i.readAs||(i.readAs=r.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${r.roles.map(o=>`
          <button class="btn btn-secondary btn-pill ${i.readAs===o?"btn-active":""}" data-role="${o}">
            Read as ${o}
          </button>
        `).join("")}
      </div>

      <div class="dialogue-container" style="width: 100%;">
        ${r.lines.map((o,l)=>`
            <div class="dialogue-bubble ${o.role===i.readAs?"active-reader":""}">
              <div class="dialogue-header">
                <span>${o.role}</span>
                <button class="dialogue-play-btn" data-play-line="${l}">►</button>
              </div>
              <div style="font-size: 17px; font-weight: 600; margin-top: 4px; color: var(--text-main);">${o.targetText}</div>
              <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">"${o.supportText}"</div>
            </div>
          `).join("")}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 12px;">
        Dialogue Complete →
      </button>
    </div>
  `,e.querySelectorAll("[data-role]").forEach(o=>{o.addEventListener("click",()=>{i.readAs=o.dataset.role,ct(e,t,a,s)})}),e.querySelectorAll("[data-play-line]").forEach(o=>{o.addEventListener("click",()=>{const l=parseInt(o.dataset.playLine);s.speak(r.lines[l].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{s.incrementDialogues(),s.awardStars(2),s.nextSessionStep()})}function Ie(e,t,a,s){const i=a.session.flash,r=t.items[i.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${i.idx+1} of ${t.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 28px; text-align: center;">
        ${r.targetText}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play Pronunciation</button>

      <div style="font-size: 15px; color: var(--text-muted); text-align: center; margin: 4px 0;">
        Meaning: <span style="color: var(--cyan); font-weight: 600;">"${r.supportText}"</span>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 12px;">
        <button class="btn btn-secondary" id="listen-prev-btn" ${i.idx===0?'disabled style="opacity:0.3; cursor:default;"':""}>←</button>
        <button class="btn btn-secondary" id="listen-next-btn" ${i.idx+1===t.items.length?'disabled style="opacity:0.3; cursor:default;"':""}>→</button>
      </div>

      ${i.idx+1===t.items.length?`
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      `:""}
    </div>
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{s.speak(r.targetText)}),e.querySelector("#listen-prev-btn").addEventListener("click",()=>{i.idx>0&&(i.idx--,Ie(e,t,a,s))}),e.querySelector("#listen-next-btn").addEventListener("click",()=>{i.idx+1<t.items.length&&(i.idx++,Ie(e,t,a,s))});const o=e.querySelector("#next-step-btn");o&&o.addEventListener("click",()=>{s.nextSessionStep()})}function ja(e,t,a,s){const i=a.activeLesson,r=i.topicId?H(i.topicId):null;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center; padding: 40px 0;">
      <div style="font-size: 52px; animation: bounce 1s infinite alternate;">🎉</div>
      <h3 style="font-family: var(--font-display); font-weight: 800; font-size: 26px; letter-spacing: -0.5px;">Nailed It!</h3>
      <p style="color: var(--text-muted); font-size: 15px; max-width: 360px; line-height: 1.6;">
        You finished the lesson: <span style="color: var(--cyan); font-weight: 600;">"${i.title}"</span>.
        ${r&&i.type==="checkpoint"?`<br>Topic <strong>${r.title}</strong> has been marked as complete.`:""}
      </p>

      <div class="badge-pill" style="border-color: var(--lime); color: var(--lime); font-size: 14px; font-weight: 800; padding: 10px 20px;">
        ★ Voyage Lesson Completed!
      </div>

      <button class="btn btn-primary" id="finish-lesson-btn" style="margin-top: 12px; padding: 14px 32px;">
        Back to Dashboard
      </button>
    </div>
  `,e.querySelector("#finish-lesson-btn").addEventListener("click",()=>{s.completeLesson(i.id)})}function Ia(e,t,a){var o;const s=((o=t.familyPlayState)==null?void 0:o.completedDays)??re(t.activityDates),i={};for(let l=0;l<10;l++)i[l]=C.filter(d=>d.month===l);e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${L.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${L.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main>
      ${pa(t)}
      <div class="container voyage-plan-content" id="voyage-plan" style="max-width: 760px;">
      <h2 style="font-size: 28px; margin-bottom: 8px;">The 200-Day Family Voyage</h2>
      <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 32px; line-height: 1.6;">
        Ten months, five family learning days each week. Independent practice builds personal skill but does not move this shared route. Every fourth week brings the month's vocabulary and patterns together.
      </p>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        ${Object.keys(i).map(l=>{const d=parseInt(l)+1,c=i[l],u=c[0].number,h=c.at(-1).number,p=s>=h,y=s>=u;let v="var(--text-muted)";return p?v="var(--lime)":(y||s+1===u)&&(v="var(--cyan)"),`
            <div style="border-left: 2px solid ${v}; padding-left: 20px; margin-bottom: 8px;">
              <h3 style="font-size: 16px; margin-bottom: 12px; color: ${v}; text-transform: uppercase; letter-spacing: 0.05em;">
                Month ${d} — ${ft[l]}
              </h3>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${c.filter($=>$.number%5===1).map($=>{const j=$.week,S=C.filter(M=>M.week===j),I=s>=S.at(-1).number,m=s+1>=S[0].number&&!I,b=$.topicId?H($.topicId):null;let g="Planned",x="var(--text-muted)";return I?(g="✓ Completed",x="var(--lime)"):m&&(g="Active Week",x="var(--cyan)"),`
                    <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; border-radius: 12px; padding: 14px 18px; cursor: pointer; transition: all var(--transition-fast);" data-week="${j}">
                      <div>
                        <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 2px;">
                          ${j%4===0?"Week 4 (Integration)":`Week ${j%4}: ${b?b.title:"Mixed review"}`}
                        </h4>
                        <p style="color: var(--text-muted); font-size: 13px;">
                          Lessons ${S[0].number} – ${S[4].number}
                        </p>
                      </div>
                      <div style="font-size: 13px; font-weight: 800; color: ${x};">${g}</div>
                    </div>
                  `}).join("")}
              </div>
            </div>
          `}).join("")}
      </div>
      </div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#back-btn").addEventListener("click",a.goDashboard);const r=e.querySelector(".immersive-voyage");r==null||r.addEventListener("pointermove",l=>{const d=r.getBoundingClientRect();r.style.setProperty("--look-x",`${((l.clientX-d.left)/d.width-.5)*1.5}%`),r.style.setProperty("--look-y",`${((l.clientY-d.top)/d.height-.5)*1.2}%`)}),r==null||r.addEventListener("pointerleave",()=>{r.style.setProperty("--look-x","0%"),r.style.setProperty("--look-y","0%")}),e.querySelectorAll("[data-week]").forEach(l=>{l.addEventListener("click",()=>{const d=parseInt(l.dataset.week),c=C.filter(p=>p.week===d),u=C[Math.min(s,199)],h=c.find(p=>p.id===u.id)||c[0];a.startSession(h)})})}const La={"montenegrin-en":"Montenegrin","albanian-en":"Albanian"};function _(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function Be(e){return{owner:"Owner",adult_guide:"Adult Partner",learner:"Learner"}[e]||e}function _a(e,t,a){var i,r,o,l,d,c,u,h;const s=t.familyOverview;e.innerHTML=`
    <header class="navbar">
      <button class="logo" id="family-back-btn" aria-label="Back to learners">
        <div class="logo-icon">N</div><div class="logo-title">Family Overview</div>
      </button>
      <button class="btn btn-secondary" id="choose-learner-btn">Choose a Learner</button>
    </header>
    <main class="container">
      ${t.familyOverviewLoading?"<p>Loading family…</p>":""}
      ${t.familyError?`<p role="alert" style="color: var(--pink);">${_(t.familyError)}</p>`:""}
      ${t.familyNotice?`<p role="status" style="color: var(--lime); margin-bottom: 16px;">${_(t.familyNotice)}</p>`:""}
      ${s?`
        <section class="hero-card" style="margin-bottom: 28px;">
          <div class="hero-text"><div class="hero-tag">Family workspace</div>
          <h1 class="hero-title">${_(s.family.name)}</h1>
          <p class="hero-subtitle">Members, invitations, and progress across every language.</p></div>
        </section>

        <section class="family-play-launch" aria-labelledby="family-play-launch-title">
          <div>
            <div class="hero-tag">Shared family voyage</div>
            <h2 id="family-play-launch-title">${(i=t.familyPlayState)!=null&&i.activeSession?"Family session in progress":`Ready for voyage day ${(((r=t.familyPlayState)==null?void 0:r.completedDays)||0)+1}`}</h2>
            <p>Independent practice stays personal. This shared position moves only when an adult chooses Complete for Family.</p>
          </div>
          ${(o=t.familyPlayState)!=null&&o.activeSession?`
            <div class="family-play-active-summary">
              <strong>Voyage day ${t.familyPlayState.activeSession.voyageDay}</strong>
              <span>${_(t.familyPlayState.activeSession.status)} · Part ${(t.familyPlayState.activeSession.currentSegment||0)+1}</span>
              <button class="btn btn-primary" id="continue-family-play-btn">Continue Family Play →</button>
            </div>`:`
            <fieldset class="family-play-roster">
              <legend>Who is learning together?</legend>
              ${s.learners.map(p=>`<label>
                <input type="checkbox" name="family-participant" value="${_(p.id)}" checked>
                <span>${_(p.name)}</span>
              </label>`).join("")||"<p>Add a learner before starting Family Play.</p>"}
            </fieldset>
            <button class="btn btn-primary" id="start-family-play-btn" ${s.learners.length?"":"disabled"}>Start Family Session →</button>`}
        </section>

        ${t.familyProgress?`<section class="family-progress-dashboard" aria-labelledby="family-progress-title">
          <div class="family-progress-heading">
            <div><div class="hero-tag">Shared and personal progress</div><h2 id="family-progress-title">Family voyage dashboard</h2></div>
            <div class="shared-day-medallion"><strong>${t.familyProgress.shared.completedDays}</strong><span>of 200 family days</span></div>
          </div>
          <div class="family-progress-comparison">
            ${t.familyProgress.learners.map(p=>{const y=Math.min(100,Math.round(p.completedLessons/200*100)),v=Math.min(100,Math.round(t.familyProgress.shared.completedDays/200*100));return`<article class="family-progress-row">
                <div><strong>${_(p.name)}</strong><span>${p.completedLessons} personal lessons · joined ${p.familyParticipations} family days</span></div>
                <div class="dual-progress"><i style="--progress:${v}%" title="Family ${v}%"></i><b style="--progress:${y}%" title="Personal ${y}%"></b></div>
                <small>Family ${v}% · Personal ${y}% · ${p.stars} stars</small>
              </article>`}).join("")}
          </div>
        </section>

        <section class="family-history" aria-labelledby="family-history-title">
          <div class="family-progress-heading"><div><div class="hero-tag">Captain's log</div><h2 id="family-history-title">Family session history</h2></div><span>${t.familyProgress.shared.reviewSessions} review sessions</span></div>
          <div class="family-history-list">
            ${t.familyProgress.history.map(p=>`<article class="family-history-item">
              <div class="history-day"><strong>${p.voyageDay}</strong><span>${p.isReview?"Review":"Voyage day"}</span></div>
              <div><strong>${_(p.lessonId)}</strong><span>${new Date(p.completedAt).toLocaleDateString()} · ${_((p.participants||[]).join(", "))} · led by ${_(p.controllerName)}</span></div>
              ${p.isReview?'<span class="history-review-badge">Reviewed</span>':`<button class="btn btn-secondary" data-review-session="${p.id}">Review together</button>`}
            </article>`).join("")||"<p>No completed family sessions yet.</p>"}
          </div>
        </section>`:""}

        <section style="margin-bottom: 32px;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px;">
            <h2 class="section-title" style="margin:0;">Parents & Members</h2>
            <button class="btn btn-secondary" id="overview-invite-partner-btn">Invite Adult Partner</button>
          </div>
          <div class="kids-progress-grid">
            ${s.members.map(p=>`<article class="kid-progress-card">
              <div class="kid-progress-header">${_(p.name)}</div>
              <div class="kid-progress-stats"><div>${_(p.email)}</div><div>${_(Be(p.role))}</div></div>
            </article>`).join("")}
          </div>
          ${s.pendingInvitations.length?`<h3 class="section-title" style="margin-top:20px;">Pending invitations</h3>
            <div class="kids-progress-grid">${s.pendingInvitations.map(p=>`<article class="kid-progress-card">
              <div class="kid-progress-header">${_(p.email)}</div>
              <div class="kid-progress-stats"><div>${_(Be(p.role))}</div><div>Expires ${new Date(p.expiresAt).toLocaleDateString()}</div></div>
            </article>`).join("")}</div>`:""}
        </section>

        <section>
          <h2 class="section-title">Learner Progress</h2>
          <div class="kids-progress-grid">
            ${s.learners.map(p=>{const y=new Map(p.progress.map(v=>[v.packId,v]));return`<article class="kid-progress-card">
                <div class="kid-progress-header">${_(p.name)} ${p.linked?'<span style="color:var(--teal);font-size:12px;">✓ Sign-in linked</span>':""}</div>
                <div class="kid-progress-stats">
                  ${t.languagePacks.map(v=>{const $=y.get(v.id)||{stars:0,completedLessons:0,activeDays:0};return`<div><strong>${_(La[v.id]||v.targetLanguage.name)}</strong>: ${$.completedLessons}/200 lessons · ${$.activeDays} active days · ${$.stars} stars</div>`}).join("")}
                </div>
              </article>`}).join("")||"<p>No learners have been added yet.</p>"}
          </div>
        </section>`:""}
    </main>`,(l=e.querySelector("#family-back-btn"))==null||l.addEventListener("click",a.goProfileSelect),(d=e.querySelector("#choose-learner-btn"))==null||d.addEventListener("click",a.goProfileSelect),(c=e.querySelector("#overview-invite-partner-btn"))==null||c.addEventListener("click",async()=>{const p=prompt("Enter your partner's Google account email:");p!=null&&p.trim()&&await a.invitePartner(p.trim(),!0)}),(u=e.querySelector("#start-family-play-btn"))==null||u.addEventListener("click",async()=>{const p=[...e.querySelectorAll('input[name="family-participant"]:checked')].map(y=>y.value);if(!p.length){window.alert("Select at least one learner for Family Play.");return}await a.startFamilySession(p)}),(h=e.querySelector("#continue-family-play-btn"))==null||h.addEventListener("click",a.openFamilySession),e.querySelectorAll("[data-review-session]").forEach(p=>{p.addEventListener("click",()=>a.reviewFamilySession(p.dataset.reviewSession))})}function P(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function Pa(e,t){var i,r,o,l,d;if(e.type==="ready")return`<div class="family-ready-call"><span aria-hidden="true">⚓</span><div><strong>Gather your crew</strong><p>Open Family Play on each learner's device. When everyone shows Ready, the parent can begin.</p></div></div>`;const a=e.items||((i=e.dialogue)==null?void 0:i.lines)||[],s=t?`<div class="family-turn-prompt"><span>${P(t.name).slice(0,1)}</span><div><small>It’s your turn</small><strong>${P(t.name)}, say it first—then everyone together.</strong></div></div>`:"";return a.length?`${s}<div class="family-play-phrases">
      ${a.slice(0,8).map((c,u)=>{const h=c.targetText||c.target||c.text||c.line||"",p=c.supportText||c.support||c.translation||"";return`<article class="family-play-phrase">
          <div><strong>${P(h)}</strong>${p?`<small>${P(p)}</small>`:""}</div>
          ${h?`<button class="dialogue-play-btn" data-family-audio="${u}" aria-label="Play ${P(h)}">►</button>`:""}
        </article>`}).join("")}
    </div>`:e.note?`${s}<div class="family-play-note">${P(e.note)}</div>`:(o=(r=e.quiz)==null?void 0:r.questions)!=null&&o.length?`${s}<div class="family-play-challenge"><span>Family challenge</span><strong>${P(e.quiz.questions[0].promptText)}</strong><p>Take turns answering aloud. The parent can replay or discuss before moving on.</p></div>`:(d=(l=e.match)==null?void 0:l.tiles)!=null&&d.length?`${s}<div class="family-play-challenge"><span>Family challenge</span><strong>Match the words aloud together</strong><p>Each person chooses a pair and explains it before the parent moves forward.</p></div>`:`${s}<div class="family-play-challenge"><span>Speak together</span><strong>${P(e.subtitle||"Practice this section as a family.")}</strong></div>`}function qa(e,t,a){var m,b,g,x,M,q,A,f,G,X,O,oe,ue,B,U;const s=(m=t.familyPlayState)==null?void 0:m.activeSession,i=t.activeLesson;if(!s||!i){e.innerHTML='<main class="container"><p role="alert">This Family Play session is no longer active.</p><button class="btn btn-secondary" id="family-play-back">Return</button></main>',e.querySelector("#family-play-back").addEventListener("click",a.goFamilyOverview);return}const r=Ze(i,[],{random:St(`${s.id}:${i.id}`)}),o=[{type:"ready",title:"Is everyone ready?",subtitle:"Join on each device before setting sail together."},...r],l=Math.min(s.currentSegment||0,o.length-1),d=o[l],c=((g=(b=t.families)==null?void 0:b[0])==null?void 0:g.role)==="owner"||((M=(x=t.families)==null?void 0:x[0])==null?void 0:M.role)==="adult_guide",u=c&&s.controllingAdult===((q=t.sessionUser)==null?void 0:q.id),h=(((A=t.familyOverview)==null?void 0:A.members)||[]).filter(w=>{var k;return(w.role==="owner"||w.role==="adult_guide")&&w.userId!==((k=t.sessionUser)==null?void 0:k.id)}),p=l===o.length-1,y=d.items||((f=d.dialogue)==null?void 0:f.lines)||[],v=s.participants.filter(w=>w.status==="joined"||w.status==="credited"),$=v.length===s.participants.length&&v.length>0,j=d.type==="ready"||!s.participants.length?null:s.participants[(l-1)%s.participants.length],S=ot(i.topicId),I=(S==null?void 0:S.src)||"https://kormilo-nautilus.netlify.app/assets/illustrations/nautilus-voyage-panorama-v2.jpg";e.innerHTML=`
    <header class="navbar family-play-nav">
      <button class="logo" id="family-play-exit" aria-label="Leave Family Play">
        <div class="logo-icon">${L.targetLanguage.code.toUpperCase()}</div>
        <div><div class="logo-title">Family Play</div><small>Voyage day ${s.voyageDay}</small></div>
      </button>
      <div class="family-play-live"><i></i>${s.status==="paused"?"Paused":"Together now"}</div>
    </header>
    <main class="family-play-stage ${S?`family-play-stage--${P(i.topicId)}`:""}" style="--family-step:${Math.round((l+1)/o.length*100)}%">
      <img class="family-play-scene" src="${I}" alt="" aria-hidden="true">
      <div class="family-play-atmosphere" aria-hidden="true"></div>
      <aside class="family-crew" aria-label="Family Play crew">
        <div class="family-crew__heading"><div><small>Family crew</small><strong>${v.length} of ${s.participants.length} ready</strong></div><span class="family-crew__signal ${$?"ready":""}"></span></div>
        <div class="family-crew__people">
          ${s.participants.map(w=>{const k=w.status==="joined"||w.status==="credited",qe=(j==null?void 0:j.profileId)===w.profileId;return`<div class="family-crew-person ${k?"ready":""} ${qe?"speaking":""}"><span>${P(w.name).slice(0,1)}</span><div><strong>${P(w.name)}</strong><small>${qe?"Speaking now":k?"Ready":"Connecting…"}</small></div></div>`}).join("")}
        </div>
        <div class="family-crew__captain"><small>Controller</small><strong>🎛 ${P(s.controllerName||"Family guide")}</strong>${u?"<span>You are leading</span>":"<span>Following live</span>"}</div>
      </aside>
      <section class="family-play-panel" aria-labelledby="family-play-title">
        <div class="family-play-meta">
          <span>${P(i.title)}</span>
          <span>Part ${l+1} of ${o.length}</span>
        </div>
        <div class="session-steps-bar" role="progressbar" aria-valuenow="${l+1}" aria-valuemin="1" aria-valuemax="${o.length}">
          ${o.map((w,k)=>`<div class="session-step-segment ${k<=l?"active":""}"></div>`).join("")}
        </div>
        <p class="hero-tag">${u?"You are leading":`Following ${P(s.controllerName||"the family guide")}`}</p>
        <h1 id="family-play-title">${P(d.title)}</h1>
        <p class="family-play-subtitle">${P(d.subtitle)}</p>
        ${Pa(d,j)}
        ${u?`<div class="family-play-controls">
          <button class="btn btn-secondary" id="family-play-prev" ${l===0?"disabled":""}>← Back</button>
          <button class="btn btn-secondary" id="family-play-audio">► Play all</button>
          <button class="btn btn-secondary" id="family-play-pause">${s.status==="paused"?"Resume":"Pause"}</button>
          ${p?'<button class="btn btn-primary family-complete-btn" id="family-play-complete">✓ Complete for Family</button>':`<button class="btn btn-primary" id="family-play-next" ${d.type==="ready"&&!$?'disabled aria-describedby="family-ready-help"':""}>${d.type==="ready"?"Start Together →":"Next →"}</button>`}
          ${h.length?`<label class="family-handoff">Hand off to
            <select id="family-handoff-select"><option value="">Choose adult…</option>${h.map(w=>`<option value="${w.userId}">${P(w.name)}</option>`).join("")}</select>
          </label>`:""}
        </div>${d.type==="ready"&&!$?'<p class="family-ready-help" id="family-ready-help">Waiting for every learner to open this Family Play session.</p>':""}`:'<p class="family-play-following">The parent controls this shared lesson. You can answer, read, and speak along.</p>'}
        ${c&&!u&&s.canTakeControl?'<button class="btn btn-secondary family-take-control" id="family-take-control">Take Control</button>':""}
      </section>
    </main>`,e.querySelector("#family-play-exit").addEventListener("click",c?a.goFamilyOverview:a.goDashboard),e.querySelectorAll("[data-family-audio]").forEach(w=>{w.addEventListener("click",()=>{const k=y[Number(w.dataset.familyAudio)];a.speak((k==null?void 0:k.targetText)||(k==null?void 0:k.target)||(k==null?void 0:k.text)||(k==null?void 0:k.line)||"")})}),(G=e.querySelector("#family-play-audio"))==null||G.addEventListener("click",()=>{const w=y.map(k=>k.targetText||k.target||k.text||k.line).filter(Boolean).join(". ");w&&a.speak(w)}),(X=e.querySelector("#family-play-prev"))==null||X.addEventListener("click",()=>a.controlFamilySession("live",l-1)),(O=e.querySelector("#family-play-next"))==null||O.addEventListener("click",()=>a.controlFamilySession("live",l+1)),(oe=e.querySelector("#family-play-pause"))==null||oe.addEventListener("click",()=>a.controlFamilySession(s.status==="paused"?"live":"paused",l)),(ue=e.querySelector("#family-play-complete"))==null||ue.addEventListener("click",a.completeFamilySession),(B=e.querySelector("#family-take-control"))==null||B.addEventListener("click",a.claimFamilyController),(U=e.querySelector("#family-handoff-select"))==null||U.addEventListener("change",w=>{w.target.value&&a.handoffFamilyController(w.target.value)})}const n={profile:null,isGuide:!1,screen:"profile-select",sessionUser:null,families:null,familyError:null,familyNotice:null,familyOverview:null,familyOverviewLoading:!1,familyPlayState:null,familyProgress:null,activePackId:"montenegrin-en",languagePacks:xt(),stars:0,streakDays:0,completedTopicIds:[],completedLessons:[],activityDates:[],dialoguesDone:0,topicId:null,activity:"flashcards",calendarMonth:0,activeLesson:null,session:null,flash:{order:null,idx:0,flipped:!1},match:{tiles:[],selectedIds:[],matchedIds:[]},quiz:{questions:[],qIdx:0,score:0,selected:null,answered:!1},listen:{order:null,idx:0,revealed:!1},dialogue:{readAs:null,showEn:!1},recording:{status:"idle",url:null,error:null,chunks:[],recorder:null}},N=document.getElementById("app");function Ea(e){if(!("speechSynthesis"in window))return;const t=L.targetLanguage.code==="sq"?"sq-AL":"hr-HR",a=new SpeechSynthesisUtterance(e);a.lang=t,a.rate=.85,window.speechSynthesis.cancel(),window.speechSynthesis.speak(a)}const F={selectLanguage:async e=>{if(n.profile){if(Le(n.profile,e),n.sessionUser)try{await Ne()}catch(t){n.familyError=t.message}if(R(n.profile),n.sessionUser)try{await W()}catch(t){n.familyError=t.message}n.screen="dashboard",le(),T()}},createFamily:async e=>{n.familyError=null;try{await Vt(e),n.families=await Ut(),await Ne(),T()}catch(t){n.familyError=t.message,T()}},invitePartner:async(e,t=!1)=>{var s,i;const a=(i=(s=n.families)==null?void 0:s[0])==null?void 0:i.family_id;if(a){n.familyError=null,n.familyNotice=null;try{const r=await Yt(a,e,"adult_guide"),o=new URL(`${window.location.origin}${window.location.pathname}`);o.searchParams.set("invite",r);try{await navigator.clipboard.writeText(o.toString())}catch{window.prompt("Copy this invitation link:",o.toString())}n.familyNotice=`Partner invitation copied. Send the link to ${e}; it expires in 7 days.`}catch(r){n.familyError=r.message}t?await F.goFamilyOverview():T()}},inviteLearner:async(e,t,a)=>{n.familyError=null,n.familyNotice=null;try{const s=await Kt(e,a),i=new URL(`${window.location.origin}${window.location.pathname}`);i.searchParams.set("invite",s);try{await navigator.clipboard.writeText(i.toString())}catch{window.prompt("Copy this invitation link:",i.toString())}n.familyNotice=`${t}'s sign-in invitation was copied. Send it to ${a}; it expires in 7 days.`}catch(s){n.familyError=s.message}T()},goDashboard:()=>{n.screen="dashboard",le(),T(),window.scrollTo({top:0,behavior:"auto"})},goCurriculum:()=>{n.screen="curriculum",le(),T(),window.scrollTo({top:0,behavior:"auto"})},goProfileSelect:()=>{n.screen="profile-select",n.profile=null,le(),T()},goFamilyOverview:async()=>{var e,t;n.profile=null,n.screen="family-overview",n.familyOverviewLoading=!0,n.familyError=null,T();try{const a=(t=(e=n.families)==null?void 0:e[0])==null?void 0:t.family_id;n.familyOverview=await be(a),n.familyPlayState=await tt(a,n.activePackId),n.familyProgress=await Oe(a,n.activePackId)}catch(a){n.familyError=a.message}finally{n.familyOverviewLoading=!1,T()}},startFamilySession:async e=>{var r,o,l;const t=(o=(r=n.families)==null?void 0:r[0])==null?void 0:o.family_id,a=n.languagePacks.find(d=>d.id===n.activePackId),s=((l=n.familyPlayState)==null?void 0:l.completedDays)||0,i=C[Math.min(s,199)];n.familyError=null;try{await Qt({familyId:t,packId:a.id,packVersion:a.version,lessonId:i.id,voyageDay:s+1,participantProfileIds:e}),await W(),n.activeLesson=i,n.screen="family-play"}catch(d){n.familyError=d.message}T()},openFamilySession:async()=>{var t,a,s,i,r,o,l;const e=(t=n.familyPlayState)==null?void 0:t.activeSession;if(e){n.familyError=null;try{((s=(a=n.families)==null?void 0:a[0])==null?void 0:s.role)!=="learner"&&!n.familyOverview&&(n.familyOverview=await be((r=(i=n.families)==null?void 0:i[0])==null?void 0:r.family_id)),((l=(o=n.families)==null?void 0:o[0])==null?void 0:l.role)==="learner"?await Xt(e.id):e.canTakeControl&&await Ge(e.id),await W(),n.activeLesson=C.find(d=>d.id===e.lessonId)||C[e.voyageDay-1],n.screen="family-play"}catch(d){n.familyError=d.message}T()}},claimFamilyController:async()=>{var t,a;const e=(a=(t=n.familyPlayState)==null?void 0:t.activeSession)==null?void 0:a.id;if(e){try{await Ge(e),await W()}catch(s){n.familyError=s.message}T()}},handoffFamilyController:async e=>{var a,s;const t=(s=(a=n.familyPlayState)==null?void 0:a.activeSession)==null?void 0:s.id;if(t){try{await ta(t,e),await W()}catch(i){n.familyError=i.message}T()}},reviewFamilySession:async e=>{var a,s;const t=((s=(a=n.familyOverview)==null?void 0:a.learners)==null?void 0:s.map(i=>i.id))||[];try{await ia(e,t),await W(),await F.openFamilySession()}catch(i){n.familyError=i.message,T()}},controlFamilySession:async(e,t)=>{var s,i;const a=(i=(s=n.familyPlayState)==null?void 0:s.activeSession)==null?void 0:i.id;if(a){try{await Zt(a,e,t),await W()}catch(r){n.familyError=r.message}T()}},completeFamilySession:async()=>{var t,a,s,i,r,o;const e=(a=(t=n.familyPlayState)==null?void 0:t.activeSession)==null?void 0:a.id;if(e){try{await ea(e),await W(),n.screen="family-overview",n.activeLesson=null,n.familyNotice="Family voyage day completed together.",n.familyOverview=await be((i=(s=n.families)==null?void 0:s[0])==null?void 0:i.family_id),n.familyProgress=await Oe((o=(r=n.families)==null?void 0:r[0])==null?void 0:o.family_id,n.activePackId)}catch(l){n.familyError=l.message}T()}},refresh:()=>{n.profile&&R(n.profile),T()},switchProfile:e=>{Dt(e),n.profile=e,Le(e),R(e),n.screen="dashboard",le();const t=C.find(a=>!n.completedLessons.includes(a.id));t&&(n.calendarMonth=t.month),T()},openTopic:e=>{n.topicId=e,n.screen="topic",n.activity="flashcards",n.flash={order:null,idx:0,flipped:!1},n.match={tiles:[],selectedIds:[],matchedIds:[]},n.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},n.listen={order:null,idx:0,revealed:!1},n.dialogue={readAs:null,showEn:!0},T()},setActivity:e=>{n.activity=e,n.flash={order:null,idx:0,flipped:!1},n.match={tiles:[],selectedIds:[],matchedIds:[]},n.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},n.listen={order:null,idx:0,revealed:!1},n.dialogue={readAs:null,showEn:!0},T()},startSession:e=>{n.activeLesson=e,n.screen="session",n.session=null,T()},nextSessionStep:()=>{n.session&&(n.session.stepIdx++,n.session.flash={idx:0,flipped:!1},n.session.quiz=null,n.session.match=null,T())},completeLesson:e=>{Gt(n.profile,e);const t=n.activeLesson.topicId;t&&n.activeLesson.type==="checkpoint"&&Fe(n.profile,t),R(n.profile),F.goDashboard()},markTopicCompleted:e=>{Fe(n.profile,e),R(n.profile)},awardStars:e=>{Nt(n.profile,e),R(n.profile)},incrementDialogues:()=>{Ot(n.profile),R(n.profile)},speak:Ea,startMixedReview:()=>{const t=n.completedTopicIds.map(a=>H(a)).filter(Boolean).flatMap(a=>a.items);t.length!==0&&(n.activeLesson={id:"mixed-review",title:"Mixed Review",detail:"Practice from all completed topics",topicId:null,month:0},n.screen="session",n.session={lessonId:"mixed-review",stepIdx:0,steps:[{type:"quiz",title:"Review Quiz",subtitle:"Test your retention",quiz:V(t,8)},{type:"match",title:"Review Match",subtitle:"Match terms quickly",match:ee(t,8)},{type:"done",title:"Review Finished!",subtitle:"You completed your mixed review!"}],flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}},T())}};function le(){n.activeLesson=null,n.session=null}function R(e){const t=Z(e);t&&(n.stars=t.stars,n.streakDays=t.streakDays,n.completedTopicIds=t.completedTopicIds,n.completedLessons=t.completedLessons,n.activityDates=t.activityDates,n.dialoguesDone=t.dialoguesDone,n.isGuide=t.isGuide)}function Le(e,t=null){const a=t||Lt(e),i=n.languagePacks.some(r=>r.id===a)?a:"montenegrin-en";bt(i),It(),_t(e,i),n.activePackId=i}async function W(){var t,a;const e=(a=(t=n.families)==null?void 0:t[0])==null?void 0:a.family_id;if(!e||!n.sessionUser){n.familyPlayState=null;return}n.familyPlayState=await tt(e,n.activePackId)}let ce=null;function Da(){var t,a;clearInterval(ce),ce=null;const e=(t=n.familyPlayState)==null?void 0:t.activeSession;!e||e.controllingAdult!==((a=n.sessionUser)==null?void 0:a.id)||n.screen!=="family-play"||(ce=setInterval(()=>aa(e.id).catch(()=>{}),45e3))}function T(){if(N.innerHTML="",n.screen==="family-play"){Da(),qa(N,n,F);return}if(clearInterval(ce),ce=null,!n.profile){n.screen==="family-overview"?_a(N,n,F):(n.screen="profile-select",sa(N,n,F));return}if(n.screen==="dashboard"){ua(N,n,F);const e=N.querySelector("#calendar-mount");e&&ma(e,n,()=>{n.calendarMonth=Math.max(0,n.calendarMonth-1),T()},()=>{n.calendarMonth=Math.min(9,n.calendarMonth+1),T()})}else n.screen==="topic"?lt(N,n,F):n.screen==="session"?Ta(N,n,F):n.screen==="curriculum"&&Ia(N,n,F)}async function Ma(){window.addEventListener("online",()=>{et(),T()}),window.addEventListener("offline",()=>{T()});const e=Et();if(e){n.profile=e,Le(e),R(e),n.screen="dashboard";const t=C.find(a=>!n.completedLessons.includes(a.id));n.calendarMonth=t?t.month:0}else n.screen="profile-select";T()}window.addEventListener("DOMContentLoaded",Ma);
