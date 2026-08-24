(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const At={id:"montenegrin-en",targetLanguage:{code:"cnr",name:"Montenegrin",scripts:["Latn","Cyrl"]},supportLanguage:{code:"en",name:"English"},version:"0.1.0",status:"draft"},zt={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},Ft=JSON.parse(`[{"id":"family","month":1,"title":"Family","subtitle":"Words for relatives","icon":"Fa","color":"#7dd3fc","note":"Your family speaks a Montenegrin-Dalmatian blend — words like dida and kukumar are your family's words, not mistakes. In Montenegrin, grandpa may also be deda.","items":[{"id":"family-item-001","targetText":"mama","supportText":"mom","emoji":"👩"},{"id":"family-item-002","targetText":"tata","supportText":"dad","emoji":"👨"},{"id":"family-item-003","targetText":"brat","supportText":"brother","emoji":"👦"},{"id":"family-item-004","targetText":"sestra","supportText":"sister","emoji":"👧"},{"id":"family-item-005","targetText":"baba","supportText":"grandma","emoji":"👵"},{"id":"family-item-006","targetText":"dida","supportText":"grandpa (Montenegrin: deda)","emoji":"👴"},{"id":"family-item-007","targetText":"sin","supportText":"son","emoji":"👦"},{"id":"family-item-008","targetText":"kćerka","supportText":"daughter (also: kći)","emoji":"👧"},{"id":"family-item-009","targetText":"porodica","supportText":"family","emoji":"👪"},{"id":"family-item-010","targetText":"roditelji","supportText":"parents"},{"id":"family-item-011","targetText":"dijete / djeca","supportText":"child / children","emoji":"👶"},{"id":"family-item-012","targetText":"ko","supportText":"who"}]},{"id":"greetings","month":1,"title":"Greetings","subtitle":"Say hello & introduce yourself","icon":"Zd","color":"#f472b6","items":[{"id":"greetings-item-001","targetText":"Zdravo","supportText":"Hello"},{"id":"greetings-item-002","targetText":"Dobar dan","supportText":"Good afternoon"},{"id":"greetings-item-003","targetText":"Dobro jutro","supportText":"Good morning"},{"id":"greetings-item-004","targetText":"Hvala","supportText":"Thank you"},{"id":"greetings-item-005","targetText":"Molim","supportText":"Please / You're welcome"},{"id":"greetings-item-006","targetText":"Da","supportText":"Yes"},{"id":"greetings-item-007","targetText":"Ne","supportText":"No"},{"id":"greetings-item-008","targetText":"Doviđenja","supportText":"Goodbye"},{"id":"greetings-item-009","targetText":"Ćao","supportText":"Bye / Hi (informal)"},{"id":"greetings-item-010","targetText":"Izvini","supportText":"Sorry / Excuse me"},{"id":"greetings-item-011","targetText":"Kako se zoveš?","supportText":"What's your name?"},{"id":"greetings-item-012","targetText":"Zovem se...","supportText":"My name is..."},{"id":"greetings-item-013","targetText":"Drago mi je","supportText":"Nice to meet you"}],"dialogue":{"roles":["You","New Friend"],"lines":[{"id":"greetings-dialogue-001","targetText":"Dobar dan! Kako se zoveš?","supportText":"Good afternoon! What is your name?","role":"You"},{"id":"greetings-dialogue-002","targetText":"Zovem se Lena. A ti?","supportText":"My name is Lena. And you?","role":"New Friend"},{"id":"greetings-dialogue-003","targetText":"Zovem se Sam. Drago mi je!","supportText":"My name is Sam. Nice to meet you!","role":"You"},{"id":"greetings-dialogue-004","targetText":"Drago mi je! Doviđenja.","supportText":"Nice to meet you too! Goodbye.","role":"New Friend"}]}},{"id":"numbers","month":2,"title":"Numbers","subtitle":"Counting 1–100","icon":"123","color":"#a3e635","items":[{"id":"numbers-item-001","targetText":"jedan","supportText":"one (1)"},{"id":"numbers-item-002","targetText":"dva","supportText":"two (2)"},{"id":"numbers-item-003","targetText":"tri","supportText":"three (3)"},{"id":"numbers-item-004","targetText":"četiri","supportText":"four (4)"},{"id":"numbers-item-005","targetText":"pet","supportText":"five (5)"},{"id":"numbers-item-006","targetText":"šest","supportText":"six (6)"},{"id":"numbers-item-007","targetText":"sedam","supportText":"seven (7)"},{"id":"numbers-item-008","targetText":"osam","supportText":"eight (8)"},{"id":"numbers-item-009","targetText":"devet","supportText":"nine (9)"},{"id":"numbers-item-010","targetText":"deset","supportText":"ten (10)"},{"id":"numbers-item-011","targetText":"dvadeset","supportText":"twenty (20)"},{"id":"numbers-item-012","targetText":"trideset","supportText":"thirty (30)"},{"id":"numbers-item-013","targetText":"pedeset","supportText":"fifty (50)"},{"id":"numbers-item-014","targetText":"sto","supportText":"one hundred (100)"}]},{"id":"colors","month":2,"title":"Colors","subtitle":"boje","icon":"Bo","color":"#7dd3fc","items":[{"id":"colors-item-001","targetText":"crvena","supportText":"red","emoji":"🔴"},{"id":"colors-item-002","targetText":"plava","supportText":"blue","emoji":"🔵"},{"id":"colors-item-003","targetText":"zelena","supportText":"green","emoji":"🟢"},{"id":"colors-item-004","targetText":"žuta","supportText":"yellow","emoji":"🟡"},{"id":"colors-item-005","targetText":"crna","supportText":"black","emoji":"⚫"},{"id":"colors-item-006","targetText":"bijela","supportText":"white","emoji":"⚪"}]},{"id":"drinks","month":3,"title":"Drinks","subtitle":"piće","icon":"Pi","color":"#f472b6","items":[{"id":"drinks-item-001","targetText":"voda","supportText":"water","emoji":"💧"},{"id":"drinks-item-002","targetText":"kafa","supportText":"coffee","emoji":"☕"},{"id":"drinks-item-003","targetText":"čaj","supportText":"tea","emoji":"🍵"},{"id":"drinks-item-004","targetText":"sok","supportText":"juice","emoji":"🧃"},{"id":"drinks-item-005","targetText":"mlijeko","supportText":"milk","emoji":"🥛"},{"id":"drinks-item-006","targetText":"pivo","supportText":"beer","emoji":"🍺"},{"id":"drinks-item-007","targetText":"vino","supportText":"wine","emoji":"🍷"},{"id":"drinks-item-008","targetText":"rakija","supportText":"rakija (homemade brandy)","emoji":"🥃"}]},{"id":"food","month":3,"title":"Food","subtitle":"hrana","icon":"Hr","color":"#a3e635","items":[{"id":"food-item-001","targetText":"kruh","supportText":"bread (also: hljeb)","emoji":"🍞"},{"id":"food-item-002","targetText":"sir","supportText":"cheese","emoji":"🧀"},{"id":"food-item-003","targetText":"meso","supportText":"meat","emoji":"🥩"},{"id":"food-item-004","targetText":"riba","supportText":"fish","emoji":"🐟"},{"id":"food-item-005","targetText":"jaje / jaja","supportText":"egg / eggs","emoji":"🥚"},{"id":"food-item-006","targetText":"salata","supportText":"salad","emoji":"🥗"},{"id":"food-item-007","targetText":"supa / čorba","supportText":"soup","emoji":"🍲"},{"id":"food-item-008","targetText":"sladoled","supportText":"ice cream","emoji":"🍦"},{"id":"food-item-009","targetText":"jabuka","supportText":"apple","emoji":"🍎"}]},{"id":"veg","month":4,"title":"Vegetables & Market","subtitle":"pijaca","icon":"Pj","color":"#7dd3fc","items":[{"id":"veg-item-001","targetText":"paradajz","supportText":"tomato","emoji":"🍅"},{"id":"veg-item-002","targetText":"kukumar","supportText":"cucumber","emoji":"🥒"},{"id":"veg-item-003","targetText":"krompir","supportText":"potato","emoji":"🥔"},{"id":"veg-item-004","targetText":"luk","supportText":"onion","emoji":"🧅"},{"id":"veg-item-005","targetText":"bijeli luk","supportText":"garlic (literally 'white onion')","emoji":"🧄"},{"id":"veg-item-006","targetText":"paprika","supportText":"pepper","emoji":"🫑"},{"id":"veg-item-007","targetText":"mrkva","supportText":"carrot","emoji":"🥕"},{"id":"veg-item-008","targetText":"kupus","supportText":"cabbage","emoji":"🥬"}]},{"id":"cafe","month":4,"title":"At a Café","subtitle":"Order like a local","icon":"Ka","color":"#f472b6","note":"Hoću = I want, Neću = I don't want.\\nWords ending in -a often change to -u after these: kafa → Hoću kafu, voda → Hoću vodu.","items":[{"id":"cafe-item-001","targetText":"Dobar dan!","supportText":"Good afternoon! (greeting)"},{"id":"cafe-item-002","targetText":"Izvolite?","supportText":"What can I get you?"},{"id":"cafe-item-003","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please."},{"id":"cafe-item-004","targetText":"Još nešto?","supportText":"Anything else?"},{"id":"cafe-item-005","targetText":"Hvala","supportText":"Thank you"},{"id":"cafe-item-006","targetText":"Račun, molim.","supportText":"The bill, please."}],"dialogue":{"roles":["Waiter","Customer"],"lines":[{"id":"cafe-dialogue-001","targetText":"Dobar dan! Izvolite?","supportText":"Good afternoon! What can I get you?","role":"Waiter"},{"id":"cafe-dialogue-002","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please.","role":"Customer"},{"id":"cafe-dialogue-003","targetText":"Još nešto?","supportText":"Anything else?","role":"Waiter"},{"id":"cafe-dialogue-004","targetText":"Hoću i vodu. Hvala.","supportText":"I'll also have water. Thanks.","role":"Customer"},{"id":"cafe-dialogue-005","targetText":"Izvolite.","supportText":"Here you go.","role":"Waiter"},{"id":"cafe-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"Customer"},{"id":"cafe-dialogue-007","targetText":"Račun, molim.","supportText":"The bill, please.","role":"Customer"},{"id":"cafe-dialogue-008","targetText":"Doviđenja!","supportText":"Goodbye!","role":"Waiter"}]}},{"id":"talkfamily","month":5,"title":"Talking About Family","subtitle":"\\"my brother\\", \\"I have a sister\\"","icon":"Mo","color":"#a3e635","items":[{"id":"talkfamily-item-001","targetText":"moj","supportText":"my (masculine)"},{"id":"talkfamily-item-002","targetText":"moja","supportText":"my (feminine)"},{"id":"talkfamily-item-003","targetText":"moj brat","supportText":"my brother"},{"id":"talkfamily-item-004","targetText":"moja sestra","supportText":"my sister"},{"id":"talkfamily-item-005","targetText":"moje dijete","supportText":"my child"},{"id":"talkfamily-item-006","targetText":"Imam brata.","supportText":"I have a brother."},{"id":"talkfamily-item-007","targetText":"Imam sestru.","supportText":"I have a sister."},{"id":"talkfamily-item-008","targetText":"Kako se zove tvoj brat?","supportText":"What's your brother's name?"},{"id":"talkfamily-item-009","targetText":"Moj brat se zove Sam.","supportText":"My brother is named Sam."},{"id":"talkfamily-item-010","targetText":"Ovo je moja porodica.","supportText":"This is my family."},{"id":"talkfamily-item-011","targetText":"A ko je ovo?","supportText":"And who is this?"}]},{"id":"aboutme","month":5,"title":"About Me","subtitle":"Simple sentences about yourself","icon":"Ja","color":"#7dd3fc","items":[{"id":"aboutme-item-001","targetText":"Ja se zovem ___.","supportText":"My name is ___."},{"id":"aboutme-item-002","targetText":"Koliko imaš godina?","supportText":"How old are you?"},{"id":"aboutme-item-003","targetText":"Imam ___ godina.","supportText":"I am ___ years old."},{"id":"aboutme-item-004","targetText":"Volim čokoladu.","supportText":"I love chocolate."},{"id":"aboutme-item-005","targetText":"Idem u školu.","supportText":"I am going to school."},{"id":"aboutme-item-006","targetText":"Idem na plažu.","supportText":"I'm going to the beach."},{"id":"aboutme-item-007","targetText":"Gdje živiš?","supportText":"Where do you live?"},{"id":"aboutme-item-008","targetText":"Živim u ___.","supportText":"I live in ___."}]},{"id":"days","month":6,"title":"Days & Time","subtitle":"dani u sedmici","icon":"Dn","color":"#f472b6","items":[{"id":"days-item-001","targetText":"ponedjeljak","supportText":"Monday"},{"id":"days-item-002","targetText":"utorak","supportText":"Tuesday"},{"id":"days-item-003","targetText":"srijeda","supportText":"Wednesday"},{"id":"days-item-004","targetText":"četvrtak","supportText":"Thursday"},{"id":"days-item-005","targetText":"petak","supportText":"Friday"},{"id":"days-item-006","targetText":"subota","supportText":"Saturday"},{"id":"days-item-007","targetText":"nedjelja","supportText":"Sunday"},{"id":"days-item-008","targetText":"danas","supportText":"today"},{"id":"days-item-009","targetText":"sutra","supportText":"tomorrow"},{"id":"days-item-010","targetText":"juče","supportText":"yesterday"}]},{"id":"outabout","month":6,"title":"Out & About","subtitle":"Travel phrases","icon":"Va","color":"#a3e635","items":[{"id":"outabout-item-001","targetText":"Gdje je...?","supportText":"Where is...?"},{"id":"outabout-item-002","targetText":"Koliko košta?","supportText":"How much does it cost?"},{"id":"outabout-item-003","targetText":"Ne razumijem.","supportText":"I don't understand."},{"id":"outabout-item-004","targetText":"Govorite li engleski?","supportText":"Do you speak English?"},{"id":"outabout-item-005","targetText":"Molim vas.","supportText":"Please (formal)"},{"id":"outabout-item-006","targetText":"Izvinite.","supportText":"Excuse me (formal)"},{"id":"outabout-item-007","targetText":"lijevo","supportText":"left"},{"id":"outabout-item-008","targetText":"desno","supportText":"right"},{"id":"outabout-item-009","targetText":"plaža","supportText":"beach"},{"id":"outabout-item-010","targetText":"more","supportText":"sea"}]},{"id":"weather","month":7,"title":"Weather","subtitle":"vrijeme","icon":"We","color":"#7dd3fc","items":[{"id":"weather-item-001","targetText":"sunce","supportText":"sun","emoji":"☀️"},{"id":"weather-item-002","targetText":"kiša","supportText":"rain","emoji":"🌧️"},{"id":"weather-item-003","targetText":"vjetar","supportText":"wind","emoji":"💨"},{"id":"weather-item-004","targetText":"oblačno","supportText":"cloudy","emoji":"☁️"},{"id":"weather-item-005","targetText":"toplo","supportText":"warm"},{"id":"weather-item-006","targetText":"hladno","supportText":"cold","emoji":"🥶"},{"id":"weather-item-007","targetText":"Kakvo je vrijeme?","supportText":"What's the weather like?"},{"id":"weather-item-008","targetText":"Sunčano je.","supportText":"It's sunny."}]},{"id":"emotions","month":7,"title":"Emotions & Feelings","subtitle":"osjećanja","icon":"Em","color":"#f472b6","items":[{"id":"emotions-item-001","targetText":"sretan / sretna","supportText":"happy"},{"id":"emotions-item-002","targetText":"tužan / tužna","supportText":"sad"},{"id":"emotions-item-003","targetText":"umoran / umorna","supportText":"tired"},{"id":"emotions-item-004","targetText":"gladan / gladna","supportText":"hungry"},{"id":"emotions-item-005","targetText":"žedan / žedna","supportText":"thirsty"},{"id":"emotions-item-006","targetText":"uzbuđen / uzbuđena","supportText":"excited"},{"id":"emotions-item-007","targetText":"Kako se osjećaš?","supportText":"How do you feel?"}]},{"id":"house","month":8,"title":"House & Home","subtitle":"kuća","icon":"Ho","color":"#a3e635","items":[{"id":"house-item-001","targetText":"kuća","supportText":"house","emoji":"🏠"},{"id":"house-item-002","targetText":"soba","supportText":"room"},{"id":"house-item-003","targetText":"kuhinja","supportText":"kitchen","emoji":"🍳"},{"id":"house-item-004","targetText":"kupatilo","supportText":"bathroom","emoji":"🚿"},{"id":"house-item-005","targetText":"krevet","supportText":"bed","emoji":"🛏️"},{"id":"house-item-006","targetText":"vrata","supportText":"door","emoji":"🚪"},{"id":"house-item-007","targetText":"prozor","supportText":"window","emoji":"🪟"},{"id":"house-item-008","targetText":"dvorište","supportText":"yard","emoji":"🌳"}]},{"id":"clothes","month":8,"title":"Clothes","subtitle":"odjeća","icon":"Cl","color":"#7dd3fc","items":[{"id":"clothes-item-001","targetText":"majica","supportText":"t-shirt","emoji":"👕"},{"id":"clothes-item-002","targetText":"pantalone","supportText":"pants","emoji":"👖"},{"id":"clothes-item-003","targetText":"haljina","supportText":"dress","emoji":"👗"},{"id":"clothes-item-004","targetText":"cipele","supportText":"shoes","emoji":"👟"},{"id":"clothes-item-005","targetText":"jakna","supportText":"jacket","emoji":"🧥"},{"id":"clothes-item-006","targetText":"kupaći kostim","supportText":"swimsuit","emoji":"🩱"},{"id":"clothes-item-007","targetText":"šešir","supportText":"hat","emoji":"👒"}]},{"id":"body","month":9,"title":"Body & Health","subtitle":"tijelo","icon":"Bd","color":"#f472b6","items":[{"id":"body-item-001","targetText":"glava","supportText":"head"},{"id":"body-item-002","targetText":"ruka","supportText":"hand / arm"},{"id":"body-item-003","targetText":"noga","supportText":"leg / foot"},{"id":"body-item-004","targetText":"stomak","supportText":"stomach"},{"id":"body-item-005","targetText":"Boli me glava.","supportText":"My head hurts."},{"id":"body-item-006","targetText":"Dobro sam.","supportText":"I'm fine."}]},{"id":"shopping","month":9,"title":"Shopping","subtitle":"kupovina","icon":"Sh","color":"#a3e635","items":[{"id":"shopping-item-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?"},{"id":"shopping-item-002","targetText":"Koliko košta ovo?","supportText":"How much is this?"},{"id":"shopping-item-003","targetText":"Hoću da kupim...","supportText":"I want to buy..."},{"id":"shopping-item-004","targetText":"Imate li...?","supportText":"Do you have...?"},{"id":"shopping-item-005","targetText":"Samo gledam.","supportText":"I'm just looking."},{"id":"shopping-item-006","targetText":"skupo","supportText":"expensive"},{"id":"shopping-item-007","targetText":"jeftino","supportText":"cheap"}],"dialogue":{"roles":["Shopkeeper","You"],"lines":[{"id":"shopping-dialogue-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?","role":"Shopkeeper"},{"id":"shopping-dialogue-002","targetText":"Koliko košta ovo?","supportText":"How much is this?","role":"You"},{"id":"shopping-dialogue-003","targetText":"Deset eura.","supportText":"Ten euros.","role":"Shopkeeper"},{"id":"shopping-dialogue-004","targetText":"To je malo skupo. Sedam?","supportText":"That's a bit expensive. Seven?","role":"You"},{"id":"shopping-dialogue-005","targetText":"Dobro, sedam.","supportText":"Okay, seven.","role":"Shopkeeper"},{"id":"shopping-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"You"}]}},{"id":"directions","month":10,"title":"Directions & Places","subtitle":"pravci","icon":"Di","color":"#7dd3fc","items":[{"id":"directions-item-001","targetText":"prodavnica","supportText":"store"},{"id":"directions-item-002","targetText":"banka","supportText":"bank"},{"id":"directions-item-003","targetText":"bolnica","supportText":"hospital"},{"id":"directions-item-004","targetText":"blizu","supportText":"near"},{"id":"directions-item-005","targetText":"daleko","supportText":"far"},{"id":"directions-item-006","targetText":"Idi pravo.","supportText":"Go straight."},{"id":"directions-item-007","targetText":"Skreni lijevo.","supportText":"Turn left."},{"id":"directions-item-008","targetText":"Skreni desno.","supportText":"Turn right."}]},{"id":"beach","month":10,"title":"Beach & Summer","subtitle":"plaža i ljeto","icon":"Bc","color":"#f472b6","items":[{"id":"beach-item-001","targetText":"pijesak","supportText":"sand"},{"id":"beach-item-002","targetText":"talas","supportText":"wave"},{"id":"beach-item-003","targetText":"kupanje","supportText":"swimming"},{"id":"beach-item-004","targetText":"peškir","supportText":"towel"},{"id":"beach-item-005","targetText":"sunčane naočare","supportText":"sunglasses"},{"id":"beach-item-006","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!"}],"dialogue":{"roles":["Friend","You"],"lines":[{"id":"beach-dialogue-001","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!","role":"Friend"},{"id":"beach-dialogue-002","targetText":"Odlično! Gdje su moje naočare?","supportText":"Great! Where are my sunglasses?","role":"You"},{"id":"beach-dialogue-003","targetText":"Evo ih, na peškiru.","supportText":"Here they are, on the towel.","role":"Friend"},{"id":"beach-dialogue-004","targetText":"Hvala! Je li voda hladna?","supportText":"Thanks! Is the water cold?","role":"You"},{"id":"beach-dialogue-005","targetText":"Ne, topla je!","supportText":"No, it's warm!","role":"Friend"}]}},{"id":"time","month":11,"title":"Telling Time","subtitle":"sati","icon":"Tm","color":"#a3e635","items":[{"id":"time-item-001","targetText":"Koliko je sati?","supportText":"What time is it?"},{"id":"time-item-002","targetText":"sat","supportText":"hour / o'clock"},{"id":"time-item-003","targetText":"minut","supportText":"minute"},{"id":"time-item-004","targetText":"podne","supportText":"noon"},{"id":"time-item-005","targetText":"ponoć","supportText":"midnight"},{"id":"time-item-006","targetText":"rano","supportText":"early"},{"id":"time-item-007","targetText":"kasno","supportText":"late"}]},{"id":"hobbies","month":11,"title":"Hobbies","subtitle":"hobiji","icon":"Hb","color":"#7dd3fc","items":[{"id":"hobbies-item-001","targetText":"plivati","supportText":"to swim","emoji":"🏊"},{"id":"hobbies-item-002","targetText":"čitati","supportText":"to read","emoji":"📖"},{"id":"hobbies-item-003","targetText":"igrati fudbal","supportText":"to play soccer","emoji":"⚽"},{"id":"hobbies-item-004","targetText":"slušati muziku","supportText":"to listen to music","emoji":"🎧"},{"id":"hobbies-item-005","targetText":"crtati","supportText":"to draw","emoji":"🎨"},{"id":"hobbies-item-006","targetText":"Šta voliš da radiš?","supportText":"What do you like to do?"}]},{"id":"travel","month":12,"title":"Travel Essentials","subtitle":"putovanje","icon":"Tr","color":"#f472b6","items":[{"id":"travel-item-001","targetText":"aerodrom","supportText":"airport","emoji":"✈️"},{"id":"travel-item-002","targetText":"pasoš","supportText":"passport","emoji":"🛂"},{"id":"travel-item-003","targetText":"kofer","supportText":"suitcase","emoji":"🧳"},{"id":"travel-item-004","targetText":"avion","supportText":"plane","emoji":"✈️"},{"id":"travel-item-005","targetText":"karta","supportText":"ticket","emoji":"🎫"},{"id":"travel-item-006","targetText":"Idemo u Crnu Goru!","supportText":"We're going to Montenegro!"}]},{"id":"capstone","month":12,"title":"Arriving in Montenegro","subtitle":"Put it all together","icon":"MG","color":"#a3e635","items":[{"id":"capstone-item-001","targetText":"Dobro došli!","supportText":"Welcome!"},{"id":"capstone-item-002","targetText":"Prijatan boravak.","supportText":"Enjoy your stay."},{"id":"capstone-item-003","targetText":"Jedva čekam.","supportText":"I can't wait."},{"id":"capstone-item-004","targetText":"Napokon smo ovdje!","supportText":"We're finally here!"}],"dialogue":{"roles":["Agent","You"],"lines":[{"id":"capstone-dialogue-001","targetText":"Dobro došli u Crnu Goru! Pasoš, molim.","supportText":"Welcome to Montenegro! Passport, please.","role":"Agent"},{"id":"capstone-dialogue-002","targetText":"Izvolite.","supportText":"Here you go.","role":"You"},{"id":"capstone-dialogue-003","targetText":"Hvala. Prijatan boravak!","supportText":"Thank you. Enjoy your stay!","role":"Agent"},{"id":"capstone-dialogue-004","targetText":"Hvala! Jedva čekam da vidim porodicu.","supportText":"Thank you! I can't wait to see my family.","role":"You"}]}},{"id":"verbs1","title":"Verbs: To Be & To Have","subtitle":"biti, imati","icon":"V1","color":"#7dd3fc","items":[{"id":"verbs1-item-001","targetText":"ja sam","supportText":"I am"},{"id":"verbs1-item-002","targetText":"ti si","supportText":"you are"},{"id":"verbs1-item-003","targetText":"on/ona je","supportText":"he/she is"},{"id":"verbs1-item-004","targetText":"mi smo","supportText":"we are"},{"id":"verbs1-item-005","targetText":"oni su","supportText":"they are"},{"id":"verbs1-item-006","targetText":"ja imam","supportText":"I have"},{"id":"verbs1-item-007","targetText":"ti imaš","supportText":"you have"},{"id":"verbs1-item-008","targetText":"mi imamo","supportText":"we have"}]},{"id":"adjectives","title":"Describing Things","subtitle":"pridjevi","icon":"Ad","color":"#f472b6","items":[{"id":"adjectives-item-001","targetText":"velik / velika","supportText":"big"},{"id":"adjectives-item-002","targetText":"mali / mala","supportText":"small"},{"id":"adjectives-item-003","targetText":"lijep / lijepa","supportText":"beautiful"},{"id":"adjectives-item-004","targetText":"ružan / ružna","supportText":"ugly"},{"id":"adjectives-item-005","targetText":"dobar / dobra","supportText":"good"},{"id":"adjectives-item-006","targetText":"loš / loša","supportText":"bad"},{"id":"adjectives-item-007","targetText":"nov / nova","supportText":"new"},{"id":"adjectives-item-008","targetText":"star / stara","supportText":"old"}]},{"id":"questionwords","title":"Question Words","subtitle":"šta, ko, gdje...","icon":"Qw","color":"#a3e635","items":[{"id":"questionwords-item-001","targetText":"šta","supportText":"what"},{"id":"questionwords-item-002","targetText":"ko","supportText":"who"},{"id":"questionwords-item-003","targetText":"gdje","supportText":"where"},{"id":"questionwords-item-004","targetText":"kada","supportText":"when"},{"id":"questionwords-item-005","targetText":"zašto","supportText":"why"},{"id":"questionwords-item-006","targetText":"kako","supportText":"how"},{"id":"questionwords-item-007","targetText":"koji / koja","supportText":"which"}]},{"id":"plans","title":"Making Plans","subtitle":"Hoćeš li..., Vidimo se!","icon":"Pl","color":"#7dd3fc","items":[{"id":"plans-item-001","targetText":"Hoćeš li...?","supportText":"Do you want to...?"},{"id":"plans-item-002","targetText":"Možemo li...?","supportText":"Can we...?"},{"id":"plans-item-003","targetText":"Kada se vidimo?","supportText":"When do we meet?"},{"id":"plans-item-004","targetText":"Vidimo se sutra.","supportText":"See you tomorrow."},{"id":"plans-item-005","targetText":"Dogovoreno!","supportText":"It's a deal! / Agreed!"}]},{"id":"smalltalk","title":"Small Talk","subtitle":"Getting to know people","icon":"St","color":"#f472b6","items":[{"id":"smalltalk-item-001","targetText":"Šta radiš?","supportText":"What are you doing?"},{"id":"smalltalk-item-002","targetText":"Odakle si?","supportText":"Where are you from?"},{"id":"smalltalk-item-003","targetText":"Koliko dugo si ovdje?","supportText":"How long have you been here?"},{"id":"smalltalk-item-004","targetText":"Sviđa mi se Crna Gora.","supportText":"I like Montenegro."},{"id":"smalltalk-item-005","targetText":"Ovo mi je prvi put ovdje.","supportText":"This is my first time here."}]},{"id":"pasttense","title":"Talking About the Past","subtitle":"bio sam, jučer...","icon":"Pt","color":"#a3e635","items":[{"id":"pasttense-item-001","targetText":"bio sam / bila sam","supportText":"I was"},{"id":"pasttense-item-002","targetText":"Jučer sam...","supportText":"Yesterday I..."},{"id":"pasttense-item-003","targetText":"Prošle godine...","supportText":"Last year..."},{"id":"pasttense-item-004","targetText":"Bilo je zabavno!","supportText":"It was fun!"},{"id":"pasttense-item-005","targetText":"Vidio sam / Vidjela sam","supportText":"I saw"}]},{"id":"futuretense","title":"Talking About the Future","subtitle":"sutra ću, sledeće godine...","icon":"Ft","color":"#7dd3fc","items":[{"id":"futuretense-item-001","targetText":"Sutra ću...","supportText":"Tomorrow I will..."},{"id":"futuretense-item-002","targetText":"Sledeće godine ćemo...","supportText":"Next year we will..."},{"id":"futuretense-item-003","targetText":"Vidjećemo se opet.","supportText":"We'll see each other again."},{"id":"futuretense-item-004","targetText":"Jedva čekam ljeto.","supportText":"I can't wait for summer."}]},{"id":"restaurant","title":"At a Restaurant","subtitle":"Beyond the café","icon":"Rs","color":"#f472b6","items":[{"id":"restaurant-item-001","targetText":"meni","supportText":"menu"},{"id":"restaurant-item-002","targetText":"konobar / konobarica","supportText":"waiter / waitress"},{"id":"restaurant-item-003","targetText":"Preporučujete li nešto?","supportText":"Do you recommend something?"},{"id":"restaurant-item-004","targetText":"Za piće?","supportText":"For drinks?"},{"id":"restaurant-item-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!"},{"id":"restaurant-item-006","targetText":"Bilo je ukusno.","supportText":"It was delicious."}],"dialogue":{"roles":["Waiter","You"],"lines":[{"id":"restaurant-dialogue-001","targetText":"Dobro veče! Izvolite meni.","supportText":"Good evening! Here is the menu.","role":"Waiter"},{"id":"restaurant-dialogue-002","targetText":"Hvala. Preporučujete li nešto?","supportText":"Thanks. Do you recommend something?","role":"You"},{"id":"restaurant-dialogue-003","targetText":"Riba je odlična danas.","supportText":"The fish is excellent today.","role":"Waiter"},{"id":"restaurant-dialogue-004","targetText":"Dobro, hoću ribu, molim.","supportText":"Okay, I'll have the fish, please.","role":"You"},{"id":"restaurant-dialogue-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!","role":"Waiter"},{"id":"restaurant-dialogue-006","targetText":"Hvala, bilo je ukusno!","supportText":"Thanks, it was delicious!","role":"You"}]}},{"id":"gathering","title":"Family Gathering","subtitle":"A full conversation at the table","icon":"Fg","color":"#a3e635","items":[{"id":"gathering-item-001","targetText":"Sjedi ovdje.","supportText":"Sit here."},{"id":"gathering-item-002","targetText":"Poslužite se.","supportText":"Help yourselves."},{"id":"gathering-item-003","targetText":"Živjeli!","supportText":"Cheers!"},{"id":"gathering-item-004","targetText":"Hvala na ručku.","supportText":"Thank you for lunch."},{"id":"gathering-item-005","targetText":"Bilo je divno vidjeti vas.","supportText":"It was wonderful to see you."}],"dialogue":{"roles":["Baba","You"],"lines":[{"id":"gathering-dialogue-001","targetText":"Sjedi ovdje, dijete. Poslužite se!","supportText":"Sit here, child. Help yourselves!","role":"Baba"},{"id":"gathering-dialogue-002","targetText":"Hvala, baba! Miriše odlično.","supportText":"Thanks, grandma! It smells great.","role":"You"},{"id":"gathering-dialogue-003","targetText":"Živjeli!","supportText":"Cheers!","role":"Baba"},{"id":"gathering-dialogue-004","targetText":"Živjeli! Hvala na ručku, bilo je divno.","supportText":"Cheers! Thank you for lunch, it was wonderful.","role":"You"}]}}]`),Nt=[{id:"alphabet",title:"Alphabet",subtitle:"Latin & Cyrillic letters",icon:"Aa",color:"#7dd3fc",items:[{id:"alphabet-item-001",targetText:"A a",supportText:'Cyrillic: А а — "ah", as in auto (car)'},{id:"alphabet-item-002",targetText:"B b",supportText:'Cyrillic: Б б — "b", as in brat (brother)'},{id:"alphabet-item-003",targetText:"C c",supportText:'Cyrillic: Ц ц — "ts", as in cvijet (flower)'},{id:"alphabet-item-004",targetText:"Č č",supportText:'Cyrillic: Ч ч — hard "ch", as in čokolada'},{id:"alphabet-item-005",targetText:"Ć ć",supportText:'Cyrillic: Ћ ћ — soft "ch", as in ćevapi'},{id:"alphabet-item-006",targetText:"D d",supportText:'Cyrillic: Д д — "d", as in dijete'},{id:"alphabet-item-007",targetText:"Đ đ",supportText:'Cyrillic: Ђ ђ — soft "j", as in đak'},{id:"alphabet-item-008",targetText:"Dž dž",supportText:'Cyrillic: Џ џ — hard "j", as in džak'},{id:"alphabet-item-009",targetText:"Lj lj",supportText:'Cyrillic: Љ љ — "ly", as in ljubav'},{id:"alphabet-item-010",targetText:"Nj nj",supportText:'Cyrillic: Њ њ — "ny", as in njiva'},{id:"alphabet-item-011",targetText:"Š š",supportText:'Cyrillic: Ш ш — "sh", as in šuma'},{id:"alphabet-item-012",targetText:"Ž ž",supportText:'Cyrillic: Ж ж — "zh", as in žena'}]}],Ae={languagePack:At,curriculum:zt,topics:Ft,bonusTopics:Nt},Ht=[["family","Family","People in your family",[["familja","family"],["nëna","mother"],["babai","father"],["motra","sister"],["vëllai","brother"]]],["greetings","Greetings","Say hello and introduce yourself",[["Përshëndetje!","Hello!"],["Mirëmëngjes!","Good morning!"],["Mirëmbrëma!","Good evening!"],["Si je?","How are you?"],["Mirupafshim!","Goodbye!"]]],["numbers","Numbers","Start counting",[["një","one"],["dy","two"],["tre","three"],["katër","four"],["pesë","five"]]],["colors","Colors","Describe colors",[["i kuq","red"],["blu","blue"],["i gjelbër","green"],["i verdhë","yellow"],["i zi","black"]]],["drinks","Drinks","Everyday drinks",[["ujë","water"],["kafe","coffee"],["çaj","tea"],["qumësht","milk"],["lëng","juice"]]],["food","Food","Everyday foods",[["bukë","bread"],["djathë","cheese"],["mish","meat"],["peshk","fish"],["fruta","fruit"]]],["veg","Vegetables & Market","Shop at the market",[["domate","tomato"],["kastravec","cucumber"],["patate","potato"],["qepë","onion"],["spec","pepper"]]],["cafe","At a Café","Order politely",[["Një kafe, ju lutem.","A coffee, please."],["A keni çaj?","Do you have tea?"],["Pa sheqer.","Without sugar."],["Sa kushton?","How much is it?"],["Faturën, ju lutem.","The bill, please."]]],["talkfamily","Talking About Family","Describe your family",[["Kjo është familja ime.","This is my family."],["Kam një motër.","I have a sister."],["Kam një vëlla.","I have a brother."],["Nëna ime quhet Ana.","My mother is named Ana."],["Ne jetojmë bashkë.","We live together."]]],["aboutme","About Me","Simple sentences about yourself",[["Unë quhem Lena.","My name is Lena."],["Jam trembëdhjetë vjeç.","I am thirteen years old."],["Jetoj në Amerikë.","I live in America."],["Më pëlqen muzika.","I like music."],["Po mësoj shqip.","I am learning Albanian."]]],["days","Days & Time","Days of the week",[["e hënë","Monday"],["e martë","Tuesday"],["e mërkurë","Wednesday"],["e enjte","Thursday"],["e premte","Friday"]]],["outabout","Out & About","Useful phrases away from home",[["Ku është banja?","Where is the bathroom?"],["Nuk e kuptoj.","I do not understand."],["Flisni anglisht?","Do you speak English?"],["Më ndihmoni, ju lutem.","Please help me."],["Faleminderit shumë.","Thank you very much."]]],["weather","Weather","Talk about the weather",[["Është ngrohtë.","It is warm."],["Është ftohtë.","It is cold."],["Po bie shi.","It is raining."],["Ka diell.","It is sunny."],["Fryn erë.","It is windy."]]],["emotions","Emotions & Feelings","Say how you feel",[["Jam i lumtur.","I am happy."],["Jam e lodhur.","I am tired."],["Jam i trishtuar.","I am sad."],["Kam frikë.","I am afraid."],["Jam mirë.","I am well."]]],["house","House & Home","Things around the home",[["shtëpi","house"],["dhomë","room"],["kuzhinë","kitchen"],["derë","door"],["dritare","window"]]],["clothes","Clothes","What people wear",[["këmishë","shirt"],["pantallona","trousers"],["fustan","dress"],["këpucë","shoes"],["xhaketë","jacket"]]],["body","Body & Health","Body and basic health",[["kokë","head"],["dorë","hand"],["këmbë","leg"],["Më dhemb koka.","My head hurts."],["Kam nevojë për një mjek.","I need a doctor."]]],["shopping","Shopping","Buy what you need",[["Dua këtë.","I want this."],["Sa kushton kjo?","How much does this cost?"],["Është shumë shtrenjtë.","It is too expensive."],["A keni një madhësi tjetër?","Do you have another size?"],["Do të paguaj me kartë.","I will pay by card."]]],["directions","Directions & Places","Find your way",[["majtas","left"],["djathtas","right"],["drejt","straight ahead"],["afër","near"],["larg","far"]]],["beach","Beach & Summer","Enjoy a summer day",[["det","sea"],["plazh","beach"],["diell","sun"],["not","swimming"],["krem kundër diellit","sunscreen"]]],["time","Telling Time","Ask and tell the time",[["Sa është ora?","What time is it?"],["Është ora një.","It is one o’clock."],["Është mesditë.","It is noon."],["në mëngjes","in the morning"],["në mbrëmje","in the evening"]]],["hobbies","Hobbies","Talk about free time",[["Më pëlqen të lexoj.","I like to read."],["Më pëlqen muzika.","I like music."],["Luaj futboll.","I play soccer."],["Noton.","He or she swims."],["Vizatoj.","I draw."]]],["travel","Travel Essentials","Move around confidently",[["aeroport","airport"],["stacion","station"],["biletë","ticket"],["pasaportë","passport"],["Ku është hoteli?","Where is the hotel?"]]],["capstone","Putting It Together","Use language in a full day",[["Sapo mbërritëm.","We just arrived."],["Gëzohem që ju takoj.","Nice to meet you."],["Ku do të shkojmë?","Where will we go?"],["Jam gati.","I am ready."],["Ishte një ditë e bukur.","It was a beautiful day."]]],["verbs1","Verbs: To Be & To Have","Core sentence building",[["jam","I am"],["je","you are"],["është","he, she, or it is"],["kam","I have"],["ke","you have"]]],["adjectives","Describing Things","Useful descriptions",[["i madh","big"],["i vogël","small"],["i mirë","good"],["i bukur","beautiful"],["i ri","new"]]],["questionwords","Question Words","Ask useful questions",[["kush","who"],["çfarë","what"],["ku","where"],["kur","when"],["pse","why"]]],["plans","Making Plans","Arrange time together",[["Çfarë do të bëjmë?","What will we do?"],["A do të vish?","Will you come?"],["Shihemi nesër.","See you tomorrow."],["Në çfarë ore?","At what time?"],["Ide e mirë!","Good idea!"]]],["smalltalk","Small Talk","Get to know people",[["Nga je?","Where are you from?"],["Si po kalon?","How is it going?"],["Çfarë të pëlqen?","What do you like?"],["Sa kohë do të rrish?","How long will you stay?"],["Edhe mua.","Me too."]]],["pasttense","Talking About the Past","Share what happened",[["Isha në shtëpi.","I was at home."],["Kisha kohë.","I had time."],["Shkova në qytet.","I went to town."],["Hëngra mëngjes.","I ate breakfast."],["Dje ishte bukur.","Yesterday was nice."]]],["futuretense","Talking About the Future","Say what will happen",[["Do të vij nesër.","I will come tomorrow."],["Do të shkojmë në plazh.","We will go to the beach."],["Do të hamë bashkë.","We will eat together."],["Do të të telefonoj.","I will call you."],["Shihemi javën tjetër.","See you next week."]]],["restaurant","At a Restaurant","Order a full meal",[["Një tavolinë për katër veta.","A table for four."],["Çfarë rekomandoni?","What do you recommend?"],["Do të marr peshkun.","I will have the fish."],["Pa mish, ju lutem.","Without meat, please."],["Ishte shumë e shijshme.","It was very delicious."]]],["gathering","Family Gathering","Talk around the table",[["Mirë se erdhët!","Welcome!"],["Uluni, ju lutem.","Please sit down."],["Si është familja?","How is the family?"],["Gëzuar!","Cheers!"],["Faleminderit për darkën.","Thank you for dinner."]]],["alphabet","Albanian Alphabet","Distinctive Albanian letters",[["ë","ë — a central vowel"],["ç","ç — like ch in chair"],["dh","dh — like th in this"],["gj","gj — a soft palatal sound"],["ll","ll — a strong l sound"]]]],Ot={family:[["gjyshja","grandmother"],["gjyshi","grandfather"],["tezja","aunt"],["kushëriri","male cousin"]],greetings:[["Mirë se vini!","Welcome!"],["Si quhesh?","What is your name?"],["Gëzohem që të njoh.","Nice to meet you."],["Natën e mirë!","Good night!"]],numbers:[["gjashtë","six"],["shtatë","seven"],["tetë","eight"],["nëntë","nine"],["dhjetë","ten"]],colors:[["i bardhë","white"],["portokalli","orange"],["vjollcë","purple"],["rozë","pink"]],food:[["vezë","egg"],["pulë","chicken"],["oriz","rice"],["supë","soup"]],cafe:[["Dua një ujë.","I would like a water."],["Me qumësht, ju lutem.","With milk, please."],["A mund të porosis?","May I order?"],["Faleminderit.","Thank you."]],aboutme:[["Jam nga Amerika.","I am from America."],["Kam dy vëllezër.","I have two brothers."],["Flas pak shqip.","I speak a little Albanian."],["Nuk flas mirë ende.","I do not speak well yet."]],outabout:[["Mund ta përsërisni?","Can you repeat that?"],["Më ngadalë, ju lutem.","More slowly, please."],["Ku jemi?","Where are we?"],["Jam humbur.","I am lost."]],directions:[["Ku është qendra?","Where is the center?"],["Kthehu majtas.","Turn left."],["Kthehu djathtas.","Turn right."],["Është këtu afër.","It is nearby."]],travel:[["Nisja","departure"],["Mbërritja","arrival"],["Ku është porta?","Where is the gate?"],["Kam një rezervim.","I have a reservation."]],restaurant:[["Menuja, ju lutem.","The menu, please."],["Jam vegjetarian.","I am vegetarian."],["Pa gluten, ju lutem.","Gluten-free, please."],["Ushqimi ishte shumë i mirë.","The food was very good."]],gathering:[["Na keni munguar.","We missed you."],["Hajde të hamë.","Let us eat."],["Si keni qenë?","How have you been?"],["Shihemi së shpejti.","See you soon."]]},Ie={greetings:{roles:["Learner","Friend"],lines:[["Learner","Përshëndetje! Si quhesh?","Hello! What is your name?"],["Friend","Unë quhem Arta. Po ti?","My name is Arta. And you?"],["Learner","Unë quhem Lena. Gëzohem që të njoh.","My name is Lena. Nice to meet you."],["Friend","Edhe unë. Mirupafshim!","Me too. Goodbye!"]]},cafe:{roles:["Guest","Server"],lines:[["Guest","Përshëndetje. A mund të porosis?","Hello. May I order?"],["Server","Po, sigurisht.","Yes, of course."],["Guest","Një kafe me qumësht, ju lutem.","A coffee with milk, please."],["Server","Patjetër.","Certainly."]]},directions:{roles:["Traveler","Local"],lines:[["Traveler","Më falni, ku është qendra?","Excuse me, where is the center?"],["Local","Shko drejt dhe kthehu majtas.","Go straight and turn left."],["Traveler","Është larg?","Is it far?"],["Local","Jo, është këtu afër.","No, it is nearby."]]},gathering:{roles:["Host","Guest"],lines:[["Host","Mirë se erdhët! Na keni munguar.","Welcome! We missed you."],["Guest","Faleminderit. Si keni qenë?","Thank you. How have you been?"],["Host","Shumë mirë. Hajde të hamë.","Very well. Let us eat."],["Guest","Gëzuar!","Cheers!"]]}},ht={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},Gt=new Map(ht.months.flatMap((e,t)=>e.map(a=>[a,t+1]))),et=["#7dd3fc","#f472b6","#a3e635"],tt=Ht.map(([e,t,a,i])=>{const s=Gt.get(e)||10,r=[...i,...Ot[e]||[]];return{id:e,month:s,bucket:s-1,title:t,subtitle:a,icon:e.slice(0,2).toUpperCase(),color:et[(s-1)%et.length],note:"Standard Albanian draft for fluent family review.",items:r.map(([o,l],d)=>({id:`${e}-sq-${String(d+1).padStart(3,"0")}`,targetText:o,supportText:l,reviewStatus:"draft"})),...Ie[e]?{dialogue:{roles:Ie[e].roles,lines:Ie[e].lines.map(([o,l,d],c)=>({id:`${e}-dialogue-sq-${String(c+1).padStart(3,"0")}`,role:o,targetText:l,supportText:d,reviewStatus:"draft"}))}}:{}}}),at={languagePack:{id:"albanian-en",targetLanguage:{code:"sq",name:"Albanian",scripts:["Latn"]},supportLanguage:{code:"en",name:"English"},version:"0.1.0",status:"review",audio:{locale:"sq-AL",delivery:"speech-synthesis-draft",reviewStatus:"draft",note:"Device voice is a temporary listening aid until a fluent Albanian reviewer approves recorded audio."}},curriculum:ht,topics:tt.filter(e=>e.id!=="alphabet"),bonusTopics:tt.filter(e=>e.id==="alphabet")},ft=new Map([[Ae.languagePack.id,Ae],[at.languagePack.id,at]]);let N=Ae,D=N.languagePack,ae=N.topics,$e=N.bonusTopics,vt=[...ae,...$e];const Wt=["Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"],Le=new Date(2026,7,10);let ie=N.curriculum.months,xt=N.curriculum.extras,bt=new Map(ie.flatMap((e,t)=>e.map(a=>[a,t+1])));const it=[{type:"discover",name:"Discover",detail:"Meet new words and hear them aloud"},{type:"recall",name:"Recall",detail:"Bring yesterday’s language back"},{type:"build",name:"Build",detail:"Put words into useful patterns"},{type:"use",name:"Use",detail:"Speak, listen, and role-play"},{type:"checkpoint",name:"Checkpoint",detail:"Show what you remember"}];function Rt(){return[...ft.values()].map(e=>e.languagePack)}function Bt(e){const t=ft.get(e);if(!t)throw new Error(`Unknown language pack: ${e}`);N=t,D=N.languagePack,ae=N.topics,$e=N.bonusTopics,vt=[...ae,...$e],ie=N.curriculum.months,xt=N.curriculum.extras,bt=new Map(ie.flatMap((a,i)=>a.map(s=>[s,i+1]))),z=Tt()}function st(){return ae}function Vt(){return $e}function Ut(){return ie.flat().map(O).filter(Boolean)}function Kt(){return xt.map(O).filter(Boolean)}function Yt(e){return bt.get(e)||null}function O(e){return vt.find(t=>t.id===e)}function Tt(){const e=[];let t=1;for(let a=0;a<10;a++){const i=ie[a].map(O);for(let s=0;s<4;s++){const r=a*4+s+1;if(s<3){const o=i[s];for(let l=0;l<5;l++){const d=it[l];e.push({id:`voyage-${t}`,number:t,month:a,week:r,dayOfWeek:l+1,topicId:o.id,type:d.type,title:`${o.title}: ${d.name}`,detail:d.detail}),t++}}else for(let o=0;o<5;o++){const l=it[o];e.push({id:`voyage-${t}`,number:t,month:a,week:r,dayOfWeek:o+1,topicId:null,type:`integration-${l.type}`,title:`Integration: ${l.name}`,detail:`Review topics from Month ${a+1}`}),t++}}}return e}let z=Tt();function Q(e){const t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function H(e,t=Math.random){const a=e.slice();for(let i=a.length-1;i>0;i--){const s=Math.floor(t()*(i+1));[a[i],a[s]]=[a[s],a[i]]}return a}function te(e,t=6,a=Math.random){const i=Math.min(t,e.length),s=H(e,a).slice(0,i),r=[];return s.forEach((o,l)=>{r.push({id:`target-${l}`,pairId:l,text:o.targetText,kind:"target"}),r.push({id:`support-${l}`,pairId:l,text:o.supportText,kind:"support"})}),{tiles:H(r,a),selectedIds:[],matchedIds:[]}}function Y(e,t=8,a=Math.random){const i=Math.min(t,e.length);return{questions:H(e,a).slice(0,i).map(o=>{const l=e.filter(u=>u.targetText!==o.targetText),d=H(l,a).slice(0,Math.min(3,l.length)),c=H([o.targetText,...d.map(u=>u.targetText)],a);return{promptText:o.supportText,correctAnswer:o.targetText,options:c}}),qIdx:0,score:0,selected:null,answered:!1}}function Jt(e){let t=[...String(e)].reduce((a,i)=>a*31+i.charCodeAt(0)>>>0,2166136261);return()=>{t=t+1831565813>>>0;let a=t;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}function Qt(e,t,a={}){const i=[],s=a.random||Math.random;if(e.topicId){const r=O(e.topicId),o=ae[ae.indexOf(r)-1]||null;o&&i.push({type:"warmup",title:"Warmup",subtitle:`Quick practice from ${o.title}`,items:o.items.slice(0,5)}),e.type==="discover"?(i.push({type:"discover",title:"New Vocabulary",subtitle:`Discover words for ${r.title}`,items:r.items}),i.push({type:"match",title:"Recall Match",subtitle:"Connect the translations",match:te(r.items,4,s)})):e.type==="recall"?(i.push({type:"recall-flash",title:"Vocabulary Recall",subtitle:"Self-assess your memory",items:H(r.items,s)}),i.push({type:"quiz",title:"Quick Quiz",subtitle:"Test your understanding",quiz:Y(r.items,5,s)})):e.type==="build"?(i.push({type:"note",title:"Sentence Pattern",subtitle:"How sentences are structured",note:r.note||"Practice assembling phrases in this topic."}),i.push({type:"quiz",title:"Pattern Practice",subtitle:"Complete the sentences correctly",quiz:Y(r.items,6,s)})):e.type==="use"?r.dialogue?i.push({type:"dialogue",title:"Dialogue Practice",subtitle:"Read the roles out loud",dialogue:r.dialogue}):i.push({type:"listen",title:"Listen & Repeat",subtitle:"Practice your pronunciation",items:r.items}):e.type==="checkpoint"&&(i.push({type:"quiz",title:"Topic Quiz",subtitle:"Show what you remember",quiz:Y(r.items,8,s)}),i.push({type:"match",title:"Vocabulary Match",subtitle:"Match all pairs to complete the topic",match:te(r.items,6,s)}))}else{const o=ie[e.month].map(O).flatMap(l=>l.items);i.push({type:"quiz",title:"Integration Quiz",subtitle:`Review from Month ${e.month+1}`,quiz:Y(o,8,s)}),i.push({type:"match",title:"Integration Match",subtitle:"Connect the words quickly",match:te(o,8,s)})}return i.push({type:"done",title:"Completed!",subtitle:"Awesome job!"}),i}const M=null;async function Zt(){{alert("Supabase credentials are not configured in your environment variables. Please check the .env file.");return}}async function rt(){}let je=D.id,Re=D.version;function Xt(){je=D.id,Re=D.version}function ea(e){return localStorage.getItem(`nautilus:${e}:active-pack`)||"montenegrin-en"}function ta(e,t){localStorage.setItem(`nautilus:${e}:active-pack`,t)}function re(e,t,a=je){return`nautilus:${a}:${e}:${t}`}function aa(e,t){return{stars:`mn_${e}_stars`,topics:`mn_${e}_completed`,lessons:`mn_${e}_voyage_lessons`,activity:`mn_${e}_activity_dates`,dialogues:`mn_${e}_dialogues`}[t]}function le(e,t,a){const i=re(e,t),s=localStorage.getItem(i);if(s!==null)return s;const r=aa(e,t),o=r?localStorage.getItem(r):null;return o!==null?(localStorage.setItem(i,o),o):a}function se(){const e=localStorage.getItem("mn_profiles");if(e)try{return JSON.parse(e).map(a=>String(a.id).startsWith("local-")?a:{...a,isGuide:!1})}catch{}return[]}function ia(e){localStorage.setItem("mn_profiles",JSON.stringify(e))}function sa(){return localStorage.getItem("mn_active_profile")||null}function ra(e){e?localStorage.setItem("mn_active_profile",e):localStorage.removeItem("mn_active_profile")}function X(e){if(!e)return null;const a=se().find(c=>c.name===e)||{id:`local-${e}`,isGuide:!1},i=parseInt(le(e,"stars","0"),10)||0;let s=[];try{s=JSON.parse(le(e,"topics","[]"))}catch{}let r=[];try{r=JSON.parse(le(e,"lessons","[]"))}catch{}let o=[];try{o=JSON.parse(le(e,"activity","[]"))}catch{}const l=parseInt(le(e,"dialogues","0"),10)||0,d=oa(o);return{id:a.id,profile:e,stars:i,streakDays:d,completedTopicIds:s,completedLessons:r,activityDates:o,dialoguesDone:l,isGuide:a.isGuide,packId:je,packVersion:Re}}function oa(e){if(!e||e.length===0)return 0;const t=new Set(e);let a=0,i=new Date;i.setHours(0,0,0,0);const s=Q(i);i.setDate(i.getDate()-1);const r=Q(i);if(!t.has(s)&&!t.has(r))return 0;let o=t.has(s)?new Date:i;for(o.setHours(0,0,0,0);t.has(Q(o));)a++,o.setDate(o.getDate()-1);return a}function na(e,t){localStorage.setItem(re(e,"stars"),String(t))}function la(e,t){localStorage.setItem(re(e,"topics"),JSON.stringify(t))}function da(e,t){localStorage.setItem(re(e,"lessons"),JSON.stringify(t))}function ca(e,t){localStorage.setItem(re(e,"activity"),JSON.stringify(t))}function pa(e,t){localStorage.setItem(re(e,"dialogues"),String(t))}function ua(e,t){const a=X(e);if(a.isGuide)return;const i=a.stars+t;na(e,i),wt(e),ye(a.id,"awardStars",{name:e,stars:i})}function wt(e){const t=X(e);if(t.isGuide)return;const a=Q(new Date);if(!t.activityDates.includes(a)){const i=[...t.activityDates,a];ca(e,i),ye(t.id,"recordActivity",{name:e,dateKey:a})}}function ma(e,t){const a=X(e);if(!a.isGuide&&!a.completedLessons.includes(t)){const i=[...a.completedLessons,t];da(e,i),wt(e),ye(a.id,"completeLesson",{name:e,lessonId:t})}}function ot(e,t){const a=X(e);if(!a.isGuide&&!a.completedTopicIds.includes(t)){const i=[...a.completedTopicIds,t];la(e,i),ye(a.id,"completeTopic",{name:e,topicId:t})}}function ga(e){const t=X(e);if(t.isGuide)return;const a=t.dialoguesDone+1;pa(e,a),ye(t.id,"incrementDialogues",{name:e,dialoguesDone:a})}function ya(){return se().filter(a=>!a.isGuide).map(a=>{const i=X(a.name);return{name:a.name,stars:i.stars,streak:i.streakDays,completed:i.completedTopicIds.length}})}async function nt(e,t){const a=se();if(a.some(i=>i.name.toLowerCase()===e.toLowerCase()))throw new Error("Profile name already exists");{const i=`local-${e}`,s=[...a,{id:i,name:e,isGuide:t}];ia(s)}}function ha(){try{return JSON.parse(localStorage.getItem("mn_sync_queue")||"[]")}catch{return[]}}function fa(e){localStorage.setItem("mn_sync_queue",JSON.stringify(e))}function ye(e,t,a){var r,o;if(String(e).startsWith("local-"))return;const i=ha(),s=((o=(r=globalThis.crypto)==null?void 0:r.randomUUID)==null?void 0:o.call(r))||`${Date.now()}-${Math.random().toString(16).slice(2)}`;i.push({operationId:s,profileId:e,packId:je,packVersion:Re,type:t,payload:a,timestamp:Date.now()}),fa(i),kt()}async function kt(){}async function lt(){}const va={cnr:["hr-HR","hr","sr-RS","sr","bs-BA","bs"],sq:["sq-AL","sq-XK","sq"]};function _e(e){return String(e||"").replace("_","-").toLowerCase()}function $t(e){return va[e]||[e]}function xa(e,t){const a=Array.isArray(e)?e:[];for(const i of $t(t)){const s=_e(i),r=a.find(o=>_e(o.lang)===s);if(r)return r;if(!s.includes("-")){const o=a.find(l=>_e(l.lang).split("-")[0]===s);if(o)return o}}return null}function ba(e,t,a,i){if(!a||!i||!e)return{spoken:!1,reason:"unsupported"};const s=xa(a.getVoices(),t);if(!s)return{spoken:!1,reason:"voice-missing",requestedLocales:$t(t)};const r=new i(e);return r.voice=s,r.lang=s.lang,r.rate=.82,r.pitch=1,a.cancel(),a.speak(r),{spoken:!0,voiceName:s.name,locale:s.lang}}function q(){throw new Error("Family cloud features are not configured.")}async function dt(){q();const{data:e,error:t}=await M.from("family_memberships").select("family_id, role, joined_at, families(id, name, learners_can_invite)").order("joined_at",{ascending:!0});if(t)throw t;return e||[]}async function de(e){q();const{data:t,error:a}=await M.rpc("get_family_overview",{target_family:e});if(a)throw a;return t}async function Ta(e){q();const t=e.trim();if(!t)throw new Error("Family name is required.");const{data:a,error:i}=await M.rpc("create_family",{family_name:t});if(i)throw i;return a}async function wa(e,t,a="learner"){q();const i=t.trim().toLowerCase();if(!i)throw new Error("Invitation email is required.");const{data:s,error:r}=await M.rpc("create_family_invitation",{target_family:e,invite_email:i,invite_role:a});if(r)throw r;return s}async function ka(e,t){q();const a=t.trim().toLowerCase();if(!a)throw new Error("Learner email is required.");const{data:i,error:s}=await M.rpc("create_learner_profile_invitation",{target_profile:e,invite_email:a});if(s)throw s;return i}async function $a(e,t){q();const a=t.trim().toLowerCase();if(!a)throw new Error("Learner email is required.");const{data:i,error:s}=await M.rpc("link_family_learner_account",{target_profile:e,learner_email:a});if(s)throw s;return i}function Sa(e=new Date){const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${i}`}async function St(e,t){q();const{data:a,error:i}=await M.rpc("get_family_play_state",{target_family:e,target_pack_id:t});if(i)throw i;return a||{completedDays:0,completedDates:[],activeSession:null}}async function ja({familyId:e,packId:t,packVersion:a,lessonId:i,voyageDay:s,participantProfileIds:r=[],date:o=new Date,timezone:l=Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}){q();const{data:d,error:c}=await M.rpc("start_family_play",{target_family:e,target_pack_id:t,target_pack_version:a,target_lesson_id:i,target_voyage_day:s,target_local_date:Sa(o),target_timezone:l,participant_profiles:r});if(c)throw c;return d}async function Ia(e,t,a=null){q();const{data:i,error:s}=await M.rpc("control_family_play",{target_session:e,requested_status:t,requested_segment:a});if(s)throw s;return i}async function La(e){q();const{data:t,error:a}=await M.rpc("join_family_play",{target_session:e});if(a)throw a;return t}async function _a(e){q();const{data:t,error:a}=await M.rpc("touch_family_play",{target_session:e});if(a)throw a;return t}async function Pa(e,t,a){q();const{data:i,error:s}=await M.rpc("submit_family_quiz_answer",{target_session:e,target_segment:t,selected_answer:a});if(s)throw s;return i}async function Ea(e,t){q();const{data:a,error:i}=await M.rpc("lock_family_final_challenge",{target_session:e,target_segment:t});if(i)throw i;return a}async function Ma(e,t){q();const{data:a,error:i}=await M.rpc("reconcile_family_quiz_round",{target_session:e,target_segment:t});if(i)throw i;return a}async function qa(e){q();const{data:t,error:a}=await M.rpc("complete_family_play",{target_session:e});if(a)throw a;return t}async function ct(e){q();const{data:t,error:a}=await M.rpc("claim_family_play_controller",{target_session:e});if(a)throw a;return t}async function Ca(e,t){q();const{data:a,error:i}=await M.rpc("handoff_family_play_controller",{target_session:e,next_adult:t});if(i)throw i;return a}async function Da(e){q();const{data:t,error:a}=await M.rpc("heartbeat_family_play",{target_session:e});if(a)throw a;return t}async function Aa(e,t){q();const{data:a,error:i}=await M.rpc("start_family_review",{source_session:e,participant_profiles:t});if(i)throw i;return a}async function Pe(e,t){q();const{data:a,error:i}=await M.rpc("get_family_progress_dashboard",{target_family:e,target_pack_id:t});if(i)throw i;return a||{shared:{completedDays:0,reviewSessions:0},learners:[],history:[]}}function za(e,t,a){var v,b,g,T;const s=se(),r=s.filter(f=>!f.isGuide),o=s.filter(f=>f.isGuide),l=(v=t.families)==null?void 0:v.some(f=>f.role==="owner"||f.role==="adult_guide"),d=`<div style="text-align: center; font-size: 12px; color: var(--text-muted); margin-bottom: 24px; border: 1px dashed var(--border-color); padding: 8px; border-radius: 8px;">
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
      </div>`,(b=e.querySelector("#family-setup-form"))==null||b.addEventListener("submit",async f=>{f.preventDefault();const k=e.querySelector("#family-name").value.trim();k&&await a.createFamily(k)}),(g=e.querySelector("#logout-btn"))==null||g.addEventListener("click",async()=>{await rt(),a.refresh()});return}e.innerHTML=`
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
  `;const w=e.querySelector("#learners-grid"),x=e.querySelector("#guides-grid");r.forEach(f=>{const k=document.createElement("div");k.style.display="flex",k.style.flexDirection="column",k.style.gap="8px";const C=document.createElement("button");if(C.className="profile-btn",C.innerText=`I'm ${f.name}`,C.addEventListener("click",()=>a.switchProfile(f.name)),k.appendChild(C),l&&!f.linkedUserId){const P=document.createElement("button");P.className="btn btn-secondary",P.style.fontSize="12px",P.style.padding="6px 10px",P.innerText=`Invite ${f.name} to Sign In`,P.addEventListener("click",async()=>{const _=prompt(`Enter ${f.name}'s Google account email:`);_!=null&&_.trim()&&await a.inviteLearner(f.id,f.name,_.trim())}),k.appendChild(P)}else if(f.linkedUserId){const P=document.createElement("span");P.style.cssText="font-size: 12px; color: var(--teal); text-align: center;",P.innerText="✓ Google sign-in linked",k.appendChild(P)}w.appendChild(k)}),o.forEach(f=>{const k=document.createElement("button");k.className="profile-btn",k.style.borderColor="var(--pink)",k.style.color="var(--text-main)",k.innerText=`${f.name}`,k.addEventListener("click",()=>a.switchProfile(f.name)),x.appendChild(k)});const j=document.createElement("button");if(j.className="profile-btn",j.style.borderStyle="dashed",j.style.borderColor="var(--border-color)",j.style.color="var(--text-muted)",j.style.fontSize="14px",j.innerText=t.sessionUser?"+ Add Learner":"+ Add Profile",j.addEventListener("click",async()=>{const f=prompt("Enter profile name:");if(!f||f.trim()==="")return;const k=t.sessionUser?!1:confirm("Is this profile a Parent/Guide? (Cancel for Learner)");try{await nt(f.trim(),k),a.refresh()}catch(C){alert(`Error creating profile: ${C.message}`)}}),w.appendChild(j),r.length===0){const f=document.createElement("button");f.className="profile-btn visual-preview-btn",f.innerHTML='<span aria-hidden="true">⛵</span><span>Explore the Visual Preview</span><small>Open the illustrated 200-day voyage</small>',f.addEventListener("click",async()=>{const k="Preview Learner";await nt(k,!1),a.switchProfile(k)}),w.prepend(f)}const m=e.querySelector("#login-btn");m&&m.addEventListener("click",async()=>{try{await Zt()}catch(f){alert(`Google login failed: ${f.message}`)}});const p=e.querySelector("#logout-btn");p&&p.addEventListener("click",async()=>{try{await rt(),a.refresh()}catch(f){alert(`Logout failed: ${f.message}`)}});const h=e.querySelector("#invite-partner-btn");h&&h.addEventListener("click",async()=>{const f=prompt("Enter your partner's Google account email:");f!=null&&f.trim()&&await a.invitePartner(f.trim())}),(T=e.querySelector("#family-overview-btn"))==null||T.addEventListener("click",a.goFamilyOverview)}function jt(e=[]){return[...new Set(e.filter(Boolean))].sort()}function oe(e=[]){return Math.min(200,jt(e).length)}function Fa(e=[]){const t=oe(e);return{completedDays:t,nextDay:t>=200?200:t+1,percent:Math.round(t/200*100)}}function Na(e=[]){const t=oe(e);return Array.from({length:10},(a,i)=>{const s=Math.max(0,Math.min(20,t-i*20));return{month:i+1,completedDays:s,earned:s===20}})}const Ha=[{id:"anchors-aweigh",label:"Anchors Aweigh",min:0,icon:"⚓"},{id:"making-headway",label:"Making Headway",min:50,icon:"⛵"},{id:"rounding-the-mark",label:"Rounding the Mark",min:100,icon:"🧭"},{id:"flying-colors",label:"Flying Colors",min:150,icon:"🚩"},{id:"shipshape-moored",label:"Shipshape · Moored",min:200,icon:"🏝️"}],xe="https://kormilo-nautilus.netlify.app/",It=[{min:1,icon:"🐠",name:"Reef Scout",note:"First lesson completed"},{min:25,icon:"🐬",name:"Bright Dolphin",note:"25 voyage days completed"},{min:75,icon:"🐢",name:"Steady Turtle",note:"75 voyage days completed"},{min:150,icon:"🐋",name:"Great Voyager",note:"150 voyage days completed"}],J=[{x:7,y:66,name:"Home Harbor",chapter:"Family & greetings"},{x:17,y:57,name:"Lantern Quay",chapter:"Names & introductions"},{x:28,y:63,name:"Echo Arch",chapter:"Numbers & sounds"},{x:39,y:51,name:"Color Cove",chapter:"Colors & descriptions"},{x:49,y:58,name:"Market Island",chapter:"Food & shopping"},{x:59,y:44,name:"Café Point",chapter:"Ordering & conversation"},{x:69,y:52,name:"Compass Rock",chapter:"Directions & travel"},{x:79,y:39,name:"Story Bay",chapter:"Sentences & stories"},{x:88,y:47,name:"Family Coast",chapter:"Visits & gatherings"},{x:95,y:32,name:"Sunrise Kotor",chapter:"Confident conversation"}],Ee=[{label:"Port 1",name:"Home Harbor",chapter:"Family",asset:"poster-family-v1.jpg",unlock:0},{label:"Port 2",name:"Lantern Quay",chapter:"Greetings",asset:"poster-greetings-v1.jpg",unlock:20},{label:"Port 3",name:"Echo Arch",chapter:"Numbers & sounds",asset:"poster-echo-arch-v1.jpg",unlock:40},{label:"Port 4",name:"Color Cove",chapter:"Colors",asset:"poster-colors-v1.jpg",unlock:60},{label:"Port 5",name:"Market Island",chapter:"Food",asset:"poster-food-v1.jpg",unlock:80},{label:"Port 6",name:"Café Point",chapter:"Conversation",asset:"poster-cafe-v1.jpg",unlock:100},{label:"Port 7",name:"Compass Rock",chapter:"Directions",asset:"poster-directions-v1.jpg",unlock:120},{label:"Port 8",name:"Story Bay",chapter:"Sentences & stories",asset:"poster-story-bay-v1.jpg",unlock:140},{label:"Port 9",name:"Family Coast",chapter:"Visits & gatherings",asset:"poster-family-coast-v1.jpg",unlock:160},{label:"Port 10",name:"Sunrise Kotor",chapter:"Confident conversation",asset:"poster-sunrise-kotor-v1.jpg",unlock:180},{label:"Voyage finale",name:"Homecoming Harbor",chapter:"The 200-day voyage",asset:"poster-homecoming-v1.jpg",unlock:200}];function Oa(e){const t=Math.max(0,Math.min(99.999,e))/100*(J.length-1),a=Math.floor(t),i=t-a,s=J[a],r=J[Math.min(a+1,J.length-1)];return{x:s.x+(r.x-s.x)*i,y:s.y+(r.y-s.y)*i}}function Lt(e){const t=Math.max(0,Math.min(200,Number(e)||0));return[...Ha].reverse().find(a=>t>=a.min)}function Ga(e){const t=Math.max(0,Number(e)||0);return It.filter(a=>t>=a.min)}function fe(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function Wa(e){var u,w,x,j;const t=((u=e.familyPlayState)==null?void 0:u.completedDays)??oe(e.activityDates),a=Lt(t),i=Ga(t),s=Na(((w=e.familyPlayState)==null?void 0:w.completedDates)||e.activityDates),r=It.find(m=>t<m.min),o=Math.round(t/200*100),l=((x=e.languagePacks.find(m=>m.id===e.activePackId))==null?void 0:x.targetLanguage.name)||"Language",d=Ee.map(m=>{const p=t>=m.unlock,h=t>=m.unlock&&t<m.unlock+20;return`<article class="destination-poster ${p?"unlocked":"charted"} ${h?"active":""}">
      <div class="destination-poster__plaque"><span>Nautilus · ${m.label}</span><b>${p?"Discovered":`Charts open day ${m.unlock}`}</b></div>
      <div class="destination-poster__art">
        <img src="${xe}assets/illustrations/${m.asset}" alt="Travel-poster illustration of ${m.name}">
        ${p?'<span class="destination-poster__stamp" aria-label="Destination discovered">⚓</span>':'<span class="destination-poster__lock" aria-hidden="true">✦</span>'}
      </div>
      <footer><small>${fe(m.chapter)}</small><strong>${fe(m.name)}</strong></footer>
    </article>`}).join(""),c=Array.from({length:10},(m,p)=>{const h=(p+1)*20,v=p*20,b=t>=h,g=t>=v&&t<h;return`<li class="voyage-port ${b?"reached":g?"current":"charted"}">
      <span class="voyage-port__marker">${b?"✓":g?"⛵":p+1}</span>
      <span class="voyage-port__label">Port ${p+1}</span>
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
        <img class="voyage-sea__art" src="${xe}assets/illustrations/nautilus-voyage-panorama-v3.jpg" alt="A vintage travel-poster voyage from a moonlit Adriatic harbor toward the mountains and coastal towns of Montenegro">
        <div class="voyage-sea__shade" aria-hidden="true"></div>
        <div class="voyage-route" aria-hidden="true"><span></span></div>
        <ol class="voyage-ports" aria-label="Ten voyage ports">${c}</ol>
      </div>
    </section>

    <section class="destination-collection" aria-labelledby="destination-collection-title">
      <div class="destination-collection__header">
        <div><div class="hero-tag">The destination collection</div><h3 id="destination-collection-title">Posters from your voyage</h3></div>
        <p>${Ee.filter(m=>t>=m.unlock).length} of ${Ee.length} discovered</p>
      </div>
      <div class="destination-poster-grid">${d}</div>
    </section>

    <section class="captains-quarters" aria-labelledby="quarters-title">
      <div class="quarters-profile">
        <div class="quarters-avatar" aria-hidden="true">${((j=i.at(-1))==null?void 0:j.icon)||"⛵"}</div>
        <div>
          <div class="hero-tag">Captain's Quarters</div>
          <h3 id="quarters-title">${fe(e.profile)}'s logbook</h3>
          <p>${a.label} · ${e.streakDays} day streak · ${e.stars} stars</p>
        </div>
      </div>
      <div class="quarters-grid">
        <div class="quarters-panel">
          <h4>${fe(l)} Passport</h4>
          <p class="quarters-help">Earn one stamp for every 20 learning days.</p>
          <div class="passport-stamps">
            ${s.map(m=>`<div class="passport-stamp ${m.earned?"earned":""}" title="Month ${m.month}: ${m.completedDays} of 20 learning days">
              <span>${m.earned?"⚓":m.month}</span><small>${m.completedDays}/20</small>
            </div>`).join("")}
          </div>
        </div>
        <div class="quarters-panel">
          <h4>Friends of the Sea</h4>
          <p class="quarters-help">Companions mark steady progress, never competition.</p>
          <img class="sea-friends__art ${i.length?"":"waiting"}" src="${xe}assets/illustrations/friends-of-the-sea.jpg" alt="A reef fish, dolphin, sea turtle, and whale swimming together as a voyage crew">
          <div class="sea-friends">
            ${i.length?i.map(m=>`<div class="sea-friend" title="${m.note}"><span>${m.icon}</span><small>${m.name}</small></div>`).join(""):'<p class="quarters-empty">Complete your first lesson to meet your Reef Scout.</p>'}
          </div>
          ${r?`<p class="next-friend">Next companion at voyage day ${r.min}.</p>`:'<p class="next-friend">Your whole crew is aboard!</p>'}
        </div>
      </div>
    </section>`}function Ra(e){var w;const t=((w=e.familyPlayState)==null?void 0:w.completedDays)??oe(e.activityDates),a=Math.round(t/200*100),i=Lt(t),s=Math.min(10,Math.floor(t/20)+1),r=Math.max(0,Math.min(20,s*20-t)),o=Math.max(0,Math.min(100,a)),l=Oa(a),d=J.map(x=>`${x.x},${x.y}`).join(" "),c=J.map((x,j)=>{const m=j+1<s?"reached":j+1===s?"current":"charted";return`<button class="voyage-landmark ${m}" style="--port-x:${x.x}%;--port-y:${x.y}%" aria-label="Port ${j+1}: ${x.name}, ${x.chapter}" data-port="${j+1}">
      <span class="voyage-landmark__beacon">${m==="reached"?"✓":j+1}</span>
      <span class="voyage-landmark__label"><strong>${x.name}</strong><small>${x.chapter}</small></span>
    </button>`}).join(""),u=J[s-1];return`<section class="immersive-voyage" style="--voyage-camera:${o}%;--voyage-progress:${a}%;--voyage-x:${l.x}%;--voyage-y:${l.y}%" aria-labelledby="immersive-voyage-title">
    <picture class="immersive-voyage__world-frame">
      <img class="immersive-voyage__world" src="${xe}assets/illustrations/nautilus-voyage-panorama-v3.jpg" alt="A vintage travel-poster Adriatic voyage from a moonlit family harbor through islands toward a sunlit Montenegrin mountain town">
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
      <span>Port ${s} of 10</span>
    </div>
    <div class="immersive-voyage__hud">
      <div class="hero-tag">Now sailing · Port ${s}</div>
      <h1 id="immersive-voyage-title">${u.name}</h1>
      <p><strong>${i.icon} ${i.label}</strong> · ${u.chapter}<br>${t} family days complete · ${r} to the next port</p>
      <div class="immersive-voyage__meter" aria-label="${a}% of family voyage complete"><span></span></div>
      <a class="btn btn-primary" href="#voyage-plan">Explore the route plan ↓</a>
    </div>
    <div class="immersive-voyage__vessel" aria-hidden="true"><span>⛵</span><i></i><b></b></div>
    <div class="immersive-voyage__hint">Choose a port to preview each chapter · move your pointer to look across the water</div>
  </section>`}function Ba(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function Va(e,t,a){var j,m,p,h,v,b;const i=t.sessionUser?se().filter(g=>!String(g.id).startsWith("local-")):se(),s=((j=t.familyPlayState)==null?void 0:j.completedDays)??oe(t.activityDates),r=z[Math.min(s,199)],o=O(r.topicId)||st()[0],l=t.completedLessons.includes(r.id),c=[{id:"first",label:"First Steps",cond:t.completedTopicIds.length>=1},{id:"getting",label:"Getting Started",cond:t.completedTopicIds.length>=5},{id:"halfway",label:"Halfway Hero",cond:t.completedTopicIds.length>=17},{id:"fluent",label:"Fluent Enough",cond:t.completedTopicIds.length>=st().length},{id:"chatter",label:"Chatterbox",cond:t.dialoguesDone>=3},{id:"streak",label:"7-Day Streak",cond:t.streakDays>=7},{id:"pro",label:"Practice Pro",cond:t.stars>=50}].filter(g=>g.cond),u={};Ut().forEach(g=>{const T=`Month ${Yt(g.id)}`;u[T]||(u[T]=[]),u[T].push(g)});let w="";e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
          <div class="logo-icon">${D.targetLanguage.code.toUpperCase()}</div>
          <div class="logo-title">Learn ${D.targetLanguage.name}</div>
        </button>
        ${w}
        ${!t.linkedLearnerProfileId&&((m=t.families)!=null&&m.some(g=>g.role==="owner"||g.role==="adult_guide"))?'<button class="btn btn-secondary" id="family-overview-btn" style="padding: 6px 12px; font-size: 12px;">Family Overview</button>':""}
      </div>

      <div class="nav-actions">
        <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted);">
          Language
          <select id="language-select" class="badge-pill" aria-label="Learning language" style="color: var(--text-main); min-height: 44px;">
            ${t.languagePacks.map(g=>`
              <option value="${g.id}" ${g.id===t.activePackId?"selected":""}>${g.targetLanguage.name}${g.status==="review"?" · Review":""}</option>
            `).join("")}
          </select>
        </label>
        <!-- Profile switcher -->
        <div class="profile-pill-container" role="group" aria-label="Profiles">
          ${i.map(g=>`
            <button class="profile-pill-btn ${t.profile===g.name?"active":""}" data-profile="${g.name}" aria-label="Switch to profile ${g.name}">${g.name}</button>
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
      ${t.familyError?`<p role="alert" class="dashboard-alert">${Ba(t.familyError)}</p>`:""}
      ${(p=t.familyPlayState)!=null&&p.activeSession?`
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
        </section>`:Wa(t)}

      <!-- Guide Progress dashboard -->
      ${t.isGuide?`
        <section aria-label="Learner Progress Summary">
          <h3 class="section-title">Kids' Progress</h3>
          <div class="kids-progress-grid">
            ${ya().map(g=>`
              <div class="kid-progress-card">
                <div class="kid-progress-header">${g.name}</div>
                <div class="kid-progress-stats">
                  <div>⭐ ${g.stars} stars</div>
                  <div>🔥 ${g.streak}d streak</div>
                  <div>📚 ${g.completed} topics done</div>
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
            ${c.map(g=>`
              <div class="badge-pill" style="border-color: var(--amber); color: var(--text-main);">
                <span style="color: var(--amber);">🎖</span> ${g.label}
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

        ${Object.keys(u).map(g=>`
          <div style="margin-bottom: 28px;">
            <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">${g}</h4>
            <div class="cards-grid">
              ${u[g].map(T=>{const f=t.completedTopicIds.includes(T.id);return`
                  <button type="button" class="topic-card" data-topic-id="${T.id}" aria-label="Practice ${T.title}">
                    <div class="topic-card__icon" style="background: ${T.color};">${T.icon}</div>
                    ${f?'<div class="topic-card__check">✓</div>':""}
                    <div>
                      <div class="topic-card__title">${T.title}</div>
                      <div class="topic-card__subtitle">${T.subtitle}</div>
                    </div>
                    <div class="topic-card__count">${T.items.length} words${T.dialogue?" · role-play":""}</div>
                  </button>
                `}).join("")}
            </div>
          </div>
        `).join("")}

        <!-- Anytime extras and advanced material -->
        <div style="margin-bottom: 28px;">
          <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Anytime Extras &amp; Capstones</h4>
          <div class="cards-grid">
            ${[...Kt(),...Vt()].map(g=>`
              <button type="button" class="topic-card" data-topic-id="${g.id}" aria-label="Practice ${g.title}">
                <div class="topic-card__icon" style="background: ${g.color};">${g.icon}</div>
                <div>
                  <div class="topic-card__title">${g.title}</div>
                  <div class="topic-card__subtitle">${g.subtitle}</div>
                </div>
                <div class="topic-card__count">${g.items.length} words</div>
              </button>
            `).join("")}
          </div>
        </div>
      </section>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#start-session-btn").addEventListener("click",()=>a.startSession(r)),e.querySelector("#view-voyage-btn").addEventListener("click",a.goCurriculum),e.querySelectorAll(".profile-pill-btn").forEach(g=>{g.id!=="nav-add-profile-btn"&&g.addEventListener("click",T=>{a.switchProfile(T.target.dataset.profile)})}),e.querySelector("#nav-add-profile-btn").addEventListener("click",()=>{a.goProfileSelect()}),(h=e.querySelector("#language-select"))==null||h.addEventListener("change",g=>{a.selectLanguage(g.target.value)}),(v=e.querySelector("#family-overview-btn"))==null||v.addEventListener("click",a.goFamilyOverview),(b=e.querySelector("#join-family-play-btn"))==null||b.addEventListener("click",a.openFamilySession),e.querySelectorAll(".topic-card").forEach(g=>{g.addEventListener("click",()=>{const T=g.dataset.topicId;T&&a.openTopic(T)})});const x=e.querySelector("#mixed-review-card");x&&x.addEventListener("click",a.startMixedReview)}function Ua(e,t,a,i){var _;const s=t.calendarMonth,r=new Date(Le.getFullYear(),Le.getMonth()+s,1),o=r.getFullYear(),l=r.getMonth(),d=(new Date(o,l,1).getDay()+6)%7,c=new Date(o,l+1,0).getDate(),u=new Map;let w=new Date(Le);for(let L=0;L<z.length;L++){for(;w.getDay()===0||w.getDay()===6;)w.setDate(w.getDate()+1);u.set(Q(w),z[L]),w.setDate(w.getDate()+1)}const x=[];for(let L=0;L<d;L++)x.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const j=Q(new Date),m=((_=t.familyPlayState)==null?void 0:_.completedDates)||t.activityDates,p=new Set(jt(m));for(let L=1;L<=c;L++){const W=new Date(o,l,L),ee=Q(W),R=u.get(ee),ne=p.has(ee),he=ee===j;let V="state-rest",U="In harbor";R&&(V="state-planned",U="Charted"),he&&R&&!ne&&(V="state-making-way",U="Making way"),ne&&(V="state-full-sail",U="Full sail"),x.push({label:String(L),stateClass:V,ariaLabel:`${W.toLocaleDateString("en-US",{month:"long",day:"numeric"})}: ${U}${R?`, Lesson ${R.number}: ${R.title}`:""}`})}for(;x.length%7!==0;)x.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const h=r.toLocaleDateString("en-US",{month:"long",year:"numeric"}),v=Fa(m),b=new Date;b.setHours(0,0,0,0),b.setDate(b.getDate()-(b.getDay()+6)%7);const g=new Date(b);g.setDate(g.getDate()+7);const T=t.activityDates.filter(L=>{const W=new Date(`${L}T12:00:00`);return W>=b&&W<g}).length,f=t.activityDates.filter(L=>L.startsWith(`${o}-${String(l+1).padStart(2,"0")}-`)).length,k=x.filter(L=>L.label&&L.ariaLabel.includes("Lesson"));e.innerHTML=`
    <div class="voyage-calendar__head">
      <div>
        <div style="color: var(--cyan); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 4px;">Ten-month learning voyage</div>
        <h3 class="voyage-calendar__title">${h}</h3>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <div class="voyage-calendar__count" title="Voyage Progress">
          ${v.completedDays<200?`${v.completedDays} of 200 learning days complete`:"Voyage complete · 200 of 200"}
        </div>
        <div class="voyage-calendar__nav">
          <button id="cal-prev" aria-label="Previous month" ${s===0?'disabled style="opacity:0.3; cursor:default;"':""}>‹</button>
          <button id="cal-next" aria-label="Next month" ${s===9?'disabled style="opacity:0.3; cursor:default;"':""}>›</button>
        </div>
      </div>
    </div>

    <div class="voyage-calendar__grid" role="grid" aria-label="Calendar for ${h}">
      ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(L=>`
        <div class="voyage-calendar__weekday" role="columnheader" aria-label="${L}">${L}</div>
      `).join("")}

      ${x.map(L=>L.label===""?`<div class="voyage-calendar__day" style="${L.style}" aria-hidden="true"></div>`:`
          <div class="voyage-calendar__day ${L.stateClass}" role="gridcell" aria-label="${L.ariaLabel}" tabindex="0">
            ${L.label}
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
      <span>${v.completedDays} learning ${v.completedDays===1?"day":"days"} completed · ${v.percent}%</span>
      <span>•</span>
      <span>${t.completedLessons.length} activities completed</span>
      <span>•</span>
      <span>${T} active ${T===1?"day":"days"} this week</span>
      <span>•</span>
      <span>${f} active ${f===1?"day":"days"} this month</span>
    </div>

    <details class="calendar-list">
      <summary>View this month as a list</summary>
      <ul>
        ${k.map(L=>`<li>${L.ariaLabel}</li>`).join("")}
      </ul>
    </details>
  `;const C=e.querySelector("#cal-prev"),P=e.querySelector("#cal-next");C&&s>0&&C.addEventListener("click",a),P&&s<9&&P.addEventListener("click",i)}const Ka=[{id:"red",hex:"#e53935",dark:!1,terms:["red","crvena","e kuqe"]},{id:"blue",hex:"#1976d2",dark:!1,terms:["blue","plava","blu"]},{id:"green",hex:"#2e7d32",dark:!1,terms:["green","zelena","e gjelbër"]},{id:"yellow",hex:"#f9c928",dark:!0,terms:["yellow","žuta","e verdhë"]},{id:"black",hex:"#111318",dark:!1,terms:["black","crna","e zezë"]},{id:"white",hex:"#f5f1e8",dark:!0,terms:["white","bijela","e bardhë"]}],_t="https://kormilo-nautilus.netlify.app/",Ya={greetings:{src:"assets/illustrations/poster-greetings-v1.jpg",place:"Lantern Quay",prompt:"Meet at the waterfront and practice the words that begin every conversation.",icon:"👋"},colors:{src:"assets/illustrations/poster-colors-v1.jpg",place:"Color Cove",prompt:"Look around the harbor. The vocabulary is already in the scene.",icon:"🎨"},family:{src:"assets/illustrations/poster-family-v1.jpg",place:"The Family Courtyard",prompt:"Take a seat at the table and bring the family words to life.",icon:"🏡"},food:{src:"assets/illustrations/poster-food-v1.jpg",place:"Market Island",prompt:"Explore the market and name what the family might bring to the table.",icon:"🍅"},cafe:{src:"assets/illustrations/poster-cafe-v1.jpg",place:"Café Point",prompt:"Take a seat by the water and practice ordering together.",icon:"☕"},directions:{src:"assets/illustrations/poster-directions-v1.jpg",place:"Compass Rock",prompt:"Follow the signs, choose a path, and help one another find the way.",icon:"🧭"}};function Pt(e){const t=Ya[e];return t?{...t,src:`${_t}${t.src}`}:null}function ze(e){const t=String(e||"").trim().toLocaleLowerCase();return Ka.find(a=>a.terms.includes(t))||null}function Ja(e,t){return e!=="colors"?null:ze(t==null?void 0:t.supportText)||ze(t==null?void 0:t.targetText)}function Be(e,t){const a=Ja(e,t);return a?`<div class="color-field color-field--${a.id}" style="--lesson-color:${a.hex}" aria-hidden="true">
    <span class="color-field__sun"></span><span class="color-field__sail"></span><span class="color-field__wave"></span>
  </div>`:t!=null&&t.emoji?`<div class="flashcard-emoji">${t.emoji}</div>`:""}function Et(e){const t=ze(e);return t?` style="--tile-color:${t.hex};--tile-text:${t.dark?"#111318":"#ffffff"}" data-color-tile="true"`:""}function Qa(e){return e!=="colors"?"":`<figure class="lesson-scene lesson-scene--colors">
    <img src="${_t}assets/illustrations/colors-harbor.jpg" alt="A Montenegro harbor with a red boat, blue sea, green shutters, yellow umbrella, black cat, and white church tower">
    <figcaption><strong>Find the colors in the harbor.</strong><span>Red boat · blue sea · green shutters · yellow umbrella · black cat · white tower</span></figcaption>
  </figure>`}function Mt(e,t,a){var c;const i=O(t.topicId),s=t.completedTopicIds.includes(i.id),r=!s&&!t.isGuide,o=[{id:"flashcards",label:"Flashcards"},{id:"match",label:"Match"},{id:"quiz",label:"Quiz"},{id:"listen",label:"Listen"}];i.dialogue&&o.push({id:"dialogue",label:"Role-play"}),e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar topic-navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${D.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${D.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main class="container topic-activity-page" style="max-width: 720px;">
      <!-- Header info -->
      <div class="topic-activity-heading">
        <div>
          <h2 style="font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">${i.title}</h2>
          <p style="color: var(--text-muted); font-size: 14px;">${i.subtitle}</p>
          ${((c=D.audio)==null?void 0:c.reviewStatus)==="draft"?'<span class="audio-review-badge">Voice preview · fluent audio review pending</span>':""}
        </div>
        <div>
          ${s?`
            <div style="color: var(--lime); font-weight: 800; font-size: 14px; display: flex; align-items: center; gap: 6px;">
              <span>✓</span> Completed Topic
            </div>
          `:""}
          ${r?`
            <button class="btn btn-secondary btn-pill" id="skip-btn" style="padding: 6px 14px; font-size: 12px; min-height: 32px;">Already know this — skip</button>
          `:""}
        </div>
      </div>

      ${i.note?`
        <div style="background: rgba(250, 204, 21, 0.08); border: 1px solid var(--amber); border-radius: 12px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #ffe58f; margin-bottom: 24px; white-space: pre-line;">
          ${i.note}
        </div>
      `:""}

      ${Qa(i.id)}

      <!-- Activities Tabs -->
      <div class="topic-activity-tabs" role="tablist" aria-label="Topic Activities">
        ${o.map(u=>`
          <button class="btn btn-secondary btn-pill ${t.activity===u.id?"btn-active":""}" role="tab" aria-selected="${t.activity===u.id}" data-tab="${u.id}">${u.label}</button>
        `).join("")}
      </div>

      <!-- Activity Container -->
      <div id="activity-mount"></div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#back-btn").addEventListener("click",a.goDashboard);const l=e.querySelector("#skip-btn");l&&l.addEventListener("click",()=>{a.markTopicCompleted(i.id),Mt(e,t,a)}),e.querySelectorAll("[data-tab]").forEach(u=>{u.addEventListener("click",w=>{const x=w.target.dataset.tab;a.setActivity(x)})});const d=e.querySelector("#activity-mount");Za(d,i,t,a)}function Za(e,t,a,i){a.activity==="flashcards"?be(e,t,a,i):a.activity==="match"?me(e,t,a,i):a.activity==="quiz"?Te(e,t,a,i):a.activity==="listen"?Z(e,t,a,i):a.activity==="dialogue"&&Fe(e,t,a,i)}function be(e,t,a,i){const s=a.flash,r=s.order||t.items.map((d,c)=>c),o=t.items[r[s.idx]];e.innerHTML=`
    <div class="flashcard-container">
      <div class="flashcard-hint" style="color: var(--text-muted); font-size: 13px; font-weight: 700;">
        Card ${s.idx+1} of ${t.items.length}
      </div>

      <button type="button" class="flashcard-wrapper" id="card-wrapper" aria-label="Flashcard, tap to flip">
        <div class="flashcard ${s.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${Be(t.id,o)}
            <div class="flashcard-text-mn">${o.targetText}</div>
            <div class="flashcard-hint">Tap to reveal translation</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en">${o.supportText}</div>
            <div class="flashcard-hint" style="margin-top: 24px; color: var(--pink);">Tap to flip back</div>
          </div>
        </div>
      </button>

      <div class="flashcard-action-dock" aria-label="Flashcard controls">
        <button class="btn btn-primary" id="speak-btn">► Say it out loud</button>
        <div class="flashcard-nav">
          <button class="btn btn-secondary" id="prev-card-btn">← Prev</button>
          <button class="btn btn-secondary" id="shuffle-btn">Shuffle</button>
          <button class="btn btn-secondary" id="next-card-btn">Next →</button>
        </div>
      </div>
    </div>
  `;const l=e.querySelector("#card-wrapper");l.addEventListener("click",()=>{s.flipped=!s.flipped,l.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#speak-btn").addEventListener("click",d=>{d.stopPropagation(),i.speak(o.targetText)}),e.querySelector("#prev-card-btn").addEventListener("click",()=>{s.idx=(s.idx-1+t.items.length)%t.items.length,s.flipped=!1,be(e,t,a,i)}),e.querySelector("#next-card-btn").addEventListener("click",()=>{s.idx=(s.idx+1)%t.items.length,s.flipped=!1,be(e,t,a,i)}),e.querySelector("#shuffle-btn").addEventListener("click",()=>{s.order=H(t.items.map((d,c)=>c)),s.idx=0,s.flipped=!1,be(e,t,a,i)})}function me(e,t,a,i){const s=a.match;(!s.tiles||s.tiles.length===0)&&(a.match=te(t.items));const r=a.match,o=r.matchedIds.length/2,l=r.tiles.length/2,d=o===l;e.innerHTML=`
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
          ${r.tiles.map(c=>{const u=r.matchedIds.includes(c.id),w=r.selectedIds.includes(c.id);let x="match-tile";return u?x+=" matched":w&&(x+=" selected"),`
              <button class="${x}" data-tile-id="${c.id}"${Et(c.text)} ${u?"disabled":""}>
                ${c.text}
              </button>
            `}).join("")}
        </div>
      `}

      <button class="btn btn-secondary" id="reshuffle-match-btn">
        ${d?"Play Again":"New Round"}
      </button>
    </div>
  `,e.querySelector("#reshuffle-match-btn").addEventListener("click",()=>{a.match=te(t.items),me(e,t,a,i)}),e.querySelectorAll(".match-tile").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.tileId;Xa(u,e,t,a,i)})})}function Xa(e,t,a,i,s){const r=i.match;if(!(r.matchedIds.includes(e)||r.selectedIds.includes(e)||r.selectedIds.length>=2)&&(r.selectedIds.push(e),me(t,a,i,s),r.selectedIds.length===2)){const[o,l]=r.selectedIds,d=r.tiles.find(u=>u.id===o),c=r.tiles.find(u=>u.id===l);d.pairId===c.pairId?(r.matchedIds.push(o,l),r.selectedIds=[],setTimeout(()=>{r.matchedIds.length===r.tiles.length&&(s.awardStars(1),s.markTopicCompleted(a.id)),me(t,a,i,s)},250)):setTimeout(()=>{r.selectedIds=[],me(t,a,i,s)},700)}}function Te(e,t,a,i){const s=a.quiz;(!s.questions||s.questions.length===0)&&(a.quiz=Y(t.items));const r=a.quiz,o=r.questions[r.qIdx];if(r.qIdx>=r.questions.length||r.questions.length===0){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Quiz Finished!</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          Your score: ${r.score} / ${r.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="restart-quiz-btn">Try Again</button>
      </div>
    `,e.querySelector("#restart-quiz-btn").addEventListener("click",()=>{a.quiz=Y(t.items),Te(e,t,a,i)});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${r.qIdx+1} of ${r.questions.length} · Score: ${r.score}
      </div>

      <div class="quiz-prompt">
        Translate to ${D.targetLanguage.name}:<br>
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
  `,e.querySelectorAll(".quiz-option").forEach(c=>{c.addEventListener("click",()=>{if(r.answered)return;const u=c.dataset.option;r.selected=u,r.answered=!0,u===o.correctAnswer&&(r.score++,i.awardStars(1)),Te(e,t,a,i)})});const d=e.querySelector("#next-question-btn");d&&d.addEventListener("click",()=>{r.qIdx++,r.answered=!1,r.selected=null,r.qIdx>=r.questions.length&&i.markTopicCompleted(t.id),Te(e,t,a,i)})}function Z(e,t,a,i){const s=a.listen,r=s.order||t.items.map((d,c)=>c),o=t.items[r[s.idx]],l=a.recording;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${s.idx+1} of ${t.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 32px; text-align: center;">
        ${o.targetText}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play pronunciation</button>

      <p style="font-size: 11px; color: var(--text-muted); max-width: 340px; text-align: center; line-height: 1.4;">
        Uses browser speech synthesis fallback voice.
      </p>

      <button class="btn btn-secondary" id="reveal-meaning-btn">
        ${s.revealed?"Hide Meaning":"Reveal Meaning"}
      </button>

      ${s.revealed?`
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
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{i.speak(o.targetText)}),e.querySelector("#reveal-meaning-btn").addEventListener("click",()=>{s.revealed=!s.revealed,Z(e,t,a,i)}),e.querySelector("#prev-listen-btn").addEventListener("click",()=>{s.idx=(s.idx-1+t.items.length)%t.items.length,s.revealed=!1,pt(a),Z(e,t,a,i)}),e.querySelector("#next-listen-btn").addEventListener("click",()=>{s.idx=(s.idx+1)%t.items.length,s.revealed=!1,pt(a),Z(e,t,a,i)}),e.querySelector("#mic-record-btn").addEventListener("click",()=>{ei(e,t,a,i)})}function pt(e){e.recording.url&&URL.revokeObjectURL(e.recording.url),e.recording={status:"idle",url:null,error:null,chunks:[],recorder:null}}async function ei(e,t,a,i){const s=a.recording;if(s.status==="recording"){s.recorder&&s.recorder.stop();return}try{const r=await navigator.mediaDevices.getUserMedia({audio:!0}),o=new MediaRecorder(r),l=[];o.ondataavailable=d=>{d.data.size>0&&l.push(d.data)},o.onstop=()=>{const d=new Blob(l,{type:"audio/webm"}),c=URL.createObjectURL(d);r.getTracks().forEach(u=>u.stop()),a.recording={status:"ready",url:c,error:null,chunks:[],recorder:null},Z(e,t,a,i)},o.start(),a.recording={status:"recording",url:null,error:null,chunks:l,recorder:o},Z(e,t,a,i)}catch{a.recording={status:"idle",url:null,error:"Microphone access denied or unavailable on this device.",chunks:[],recorder:null},Z(e,t,a,i)}}function Fe(e,t,a,i){const s=a.dialogue,r=t.dialogue;s.readAs||(s.readAs=r.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${r.roles.map(o=>`
          <button class="btn btn-secondary btn-pill ${s.readAs===o?"btn-active":""}" data-role="${o}">
            Read as ${o}
          </button>
        `).join("")}
        <button class="btn btn-secondary btn-pill" id="toggle-translation-btn">
          ${s.showEn?"Hide Translations":"Show Translations"}
        </button>
      </div>

      <div class="dialogue-container">
        ${r.lines.map((o,l)=>`
            <div class="dialogue-bubble ${o.role===s.readAs?"active-reader":""}" style="animation: fadeIn 0.3s var(--transition-medium);">
              <div class="dialogue-header">
                <span>${o.role}</span>
                <button class="dialogue-play-btn" data-play-line="${l}">►</button>
              </div>
              <div style="font-size: 17px; font-weight: 600; margin-top: 4px; color: var(--text-main);">${o.targetText}</div>
              ${s.showEn?`
                <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">"${o.supportText}"</div>
              `:""}
            </div>
          `).join("")}
      </div>

      <button class="btn btn-primary" id="finish-dialogue-btn" style="width: 100%; max-width: 480px; margin-top: 12px;">
        Finish Dialogue Practice
      </button>
    </div>
  `,e.querySelectorAll("[data-role]").forEach(o=>{o.addEventListener("click",()=>{s.readAs=o.dataset.role,Fe(e,t,a,i)})}),e.querySelector("#toggle-translation-btn").addEventListener("click",()=>{s.showEn=!s.showEn,Fe(e,t,a,i)}),e.querySelectorAll("[data-play-line]").forEach(o=>{o.addEventListener("click",()=>{const l=parseInt(o.dataset.playLine),d=r.lines[l].targetText;i.speak(d)})}),e.querySelector("#finish-dialogue-btn").addEventListener("click",()=>{i.incrementDialogues(),i.markTopicCompleted(t.id),i.awardStars(2),i.goDashboard()})}function ti(e,t,a){const i=t.activeLesson;if(!t.session||t.session.lessonId!==i.id){const c=Qt(i,t.completedTopicIds);t.session={lessonId:i.id,stepIdx:0,steps:c,flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}}}const s=t.session,r=s.steps[s.stepIdx],o=Pt(i.topicId),l=Math.round((s.stepIdx+1)/s.steps.length*100);e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${D.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${D.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="exit-btn">← Exit Lesson</button>
      </div>
    </header>

    <main class="${o?"immersive-lesson":"container"}" ${o?`style="--lesson-progress:${l}%;--lesson-shift:${Math.min(4,s.stepIdx)*-.35}%"`:'style="max-width:640px;"'}>
      ${o?`<img class="immersive-lesson__world" src="${o.src}" alt="${o.place}, an illustrated setting for this lesson">
        <div class="immersive-lesson__light" aria-hidden="true"></div>
        <div class="immersive-lesson__leaves" aria-hidden="true"></div>
        <aside class="immersive-lesson__location"><span>${o.icon}</span><div><small>Learning at</small><strong>${o.place}</strong><p>${o.prompt}</p></div></aside>`:""}
      <div class="${o?"immersive-lesson__workspace":""}">
        <!-- Steps Progress Bar -->
        <div class="session-steps-bar" role="progressbar" aria-label="Lesson progress" aria-valuenow="${s.stepIdx+1}" aria-valuemin="1" aria-valuemax="${s.steps.length}">
          ${s.steps.map((c,u)=>`
            <div class="session-step-segment ${u<=s.stepIdx?"active":""}" title="${c.title||c.type}"></div>
          `).join("")}
        </div>
        ${o?`<div class="immersive-lesson__trail" aria-hidden="true"><span></span><i>${o.icon}</i></div>`:""}
        <div id="session-step-mount" class="${o?"immersive-lesson__card":""}"></div>
      </div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#exit-btn").addEventListener("click",a.goDashboard);const d=e.querySelector("#session-step-mount");ai(d,r,t,a)}function ai(e,t,a,i){t.type==="warmup"?ii(e,t,a,i):t.type==="discover"?Ne(e,t,a,i):t.type==="recall-flash"?qt(e,t,a,i):t.type==="note"?si(e,t,a,i):t.type==="quiz"?He(e,t,a,i):t.type==="match"?we(e,t,a,i):t.type==="dialogue"?Ct(e,t,a,i):t.type==="listen"?Oe(e,t,a,i):t.type==="done"&&oi(e,t,a,i)}function ii(e,t,a,i){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 6px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
        ${t.items.map((s,r)=>`
          <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; border-radius: 12px; padding: 14px 16px;">
            <div>
              <div style="font-weight: 700; font-size: 16px;">${s.targetText}</div>
              <div style="font-size: 13px; color: var(--text-muted);">${s.supportText}</div>
            </div>
            <button class="dialogue-play-btn" data-warmup-play="${r}">►</button>
          </div>
        `).join("")}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
    </div>
  `,e.querySelectorAll("[data-warmup-play]").forEach(s=>{s.addEventListener("click",()=>{const r=parseInt(s.dataset.warmup-play);i.speak(t.items[r].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{i.nextSessionStep()})}function Ne(e,t,a,i){const s=a.session.flash,r=t.items[s.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Word ${s.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="discover-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Learning card, tap to flip">
        <div class="flashcard ${s.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${Be(a.activeLesson.topicId,r)}
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
        <button class="btn btn-secondary" id="disc-prev-btn" ${s.idx===0?'disabled style="opacity:0.3; cursor:default;"':""}>←</button>
        <button class="btn btn-primary" id="disc-speak-btn">► Say It</button>
        <button class="btn btn-secondary" id="disc-next-btn" ${s.idx+1===t.items.length?'disabled style="opacity:0.3; cursor:default;"':""}>→</button>
      </div>

      ${s.idx+1===t.items.length?`
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      `:""}
    </div>
  `;const o=e.querySelector("#discover-card-wrapper");o.addEventListener("click",()=>{s.flipped=!s.flipped,o.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#disc-speak-btn").addEventListener("click",d=>{d.stopPropagation(),i.speak(r.targetText)}),e.querySelector("#disc-prev-btn").addEventListener("click",()=>{s.idx>0&&(s.idx--,s.flipped=!1,Ne(e,t,a,i))}),e.querySelector("#disc-next-btn").addEventListener("click",()=>{s.idx+1<t.items.length&&(s.idx++,s.flipped=!1,Ne(e,t,a,i))});const l=e.querySelector("#next-step-btn");l&&l.addEventListener("click",()=>{i.nextSessionStep()})}function qt(e,t,a,i){const s=a.session.flash,r=t.items[s.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Card ${s.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="recall-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Recall card, tap to flip">
        <div class="flashcard ${s.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-hint" style="margin-bottom: 16px; color: var(--cyan);">Can you recall the translation?</div>
            ${Be(a.activeLesson.topicId,r)}
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
  `;const o=e.querySelector("#recall-card-wrapper");o.addEventListener("click",()=>{s.flipped=!s.flipped,o.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#recall-speak-btn").addEventListener("click",d=>{d.stopPropagation(),i.speak(r.targetText)});const l=()=>{s.idx+1<t.items.length?(s.idx++,s.flipped=!1,qt(e,t,a,i)):i.nextSessionStep()};e.querySelector("#recall-again-btn").addEventListener("click",()=>{t.items.push(r),l()}),e.querySelector("#recall-gotit-btn").addEventListener("click",()=>{l()})}function si(e,t,a,i){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 12px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div class="glass" style="background: rgba(125, 211, 252, 0.08); border-color: var(--cyan); border-radius: 16px; padding: 20px; font-size: 16px; line-height: 1.6; color: var(--text-main); margin-bottom: 32px; white-space: pre-line;">
        ${t.note}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">I understand, start practice →</button>
    </div>
  `,e.querySelector("#next-step-btn").addEventListener("click",()=>{i.nextSessionStep()})}function He(e,t,a,i){a.session.quiz||(a.session.quiz=t.quiz);const s=a.session.quiz,r=s.questions[s.qIdx];if(s.qIdx>=s.questions.length){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Practice Complete</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          You scored: ${s.score} / ${s.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
      </div>
    `,e.querySelector("#next-step-btn").addEventListener("click",()=>{a.session.quiz=null,i.nextSessionStep()});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${s.qIdx+1} of ${s.questions.length} · Score: ${s.score}
      </div>

      <div class="quiz-prompt">
        Translate to ${D.targetLanguage.name}:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">"${r.promptText}"</span>
      </div>

      <div class="quiz-options">
        ${r.options.map(d=>{let c="quiz-option";return s.answered&&(d===r.correctAnswer?c+=" correct":d===s.selected?c+=" incorrect":c+=" disabled"),`
            <button class="${c}" data-option="${d}" ${s.answered?"disabled":""}>
              ${d}
            </button>
          `}).join("")}
      </div>

      ${s.answered?`
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          Next Question →
        </button>
      `:""}
    </div>
  `,e.querySelectorAll(".quiz-option").forEach(d=>{d.addEventListener("click",()=>{if(s.answered)return;const c=d.dataset.option;s.selected=c,s.answered=!0,c===r.correctAnswer&&(s.score++,i.awardStars(1)),He(e,t,a,i)})});const l=e.querySelector("#next-question-btn");l&&l.addEventListener("click",()=>{s.qIdx++,s.answered=!1,s.selected=null,He(e,t,a,i)})}function we(e,t,a,i){a.session.match||(a.session.match=t.match);const s=a.session.match,r=s.matchedIds.length/2,o=s.tiles.length/2,l=r===o;e.innerHTML=`
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
          ${s.tiles.map(c=>{const u=s.matchedIds.includes(c.id),w=s.selectedIds.includes(c.id);let x="match-tile";return u?x+=" matched":w&&(x+=" selected"),`
              <button class="${x}" data-tile-id="${c.id}"${Et(c.text)} ${u?"disabled":""}>
                ${c.text}
              </button>
            `}).join("")}
        </div>
      `}
    </div>
  `,e.querySelectorAll(".match-tile").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.tileId;ri(u,e,t,a,i)})});const d=e.querySelector("#next-step-btn");d&&d.addEventListener("click",()=>{a.session.match=null,i.nextSessionStep()})}function ri(e,t,a,i,s){const r=i.session.match;if(!(r.matchedIds.includes(e)||r.selectedIds.includes(e)||r.selectedIds.length>=2)&&(r.selectedIds.push(e),we(t,a,i,s),r.selectedIds.length===2)){const[o,l]=r.selectedIds,d=r.tiles.find(u=>u.id===o),c=r.tiles.find(u=>u.id===l);d.pairId===c.pairId?(r.matchedIds.push(o,l),r.selectedIds=[],setTimeout(()=>{r.matchedIds.length===r.tiles.length&&s.awardStars(1),we(t,a,i,s)},250)):setTimeout(()=>{r.selectedIds=[],we(t,a,i,s)},700)}}function Ct(e,t,a,i){const s=a.session.dialogue,r=t.dialogue;s.readAs||(s.readAs=r.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${r.roles.map(o=>`
          <button class="btn btn-secondary btn-pill ${s.readAs===o?"btn-active":""}" data-role="${o}">
            Read as ${o}
          </button>
        `).join("")}
      </div>

      <div class="dialogue-container" style="width: 100%;">
        ${r.lines.map((o,l)=>`
            <div class="dialogue-bubble ${o.role===s.readAs?"active-reader":""}">
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
  `,e.querySelectorAll("[data-role]").forEach(o=>{o.addEventListener("click",()=>{s.readAs=o.dataset.role,Ct(e,t,a,i)})}),e.querySelectorAll("[data-play-line]").forEach(o=>{o.addEventListener("click",()=>{const l=parseInt(o.dataset.playLine);i.speak(r.lines[l].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{i.incrementDialogues(),i.awardStars(2),i.nextSessionStep()})}function Oe(e,t,a,i){const s=a.session.flash,r=t.items[s.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${s.idx+1} of ${t.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 28px; text-align: center;">
        ${r.targetText}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play Pronunciation</button>

      <div style="font-size: 15px; color: var(--text-muted); text-align: center; margin: 4px 0;">
        Meaning: <span style="color: var(--cyan); font-weight: 600;">"${r.supportText}"</span>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 12px;">
        <button class="btn btn-secondary" id="listen-prev-btn" ${s.idx===0?'disabled style="opacity:0.3; cursor:default;"':""}>←</button>
        <button class="btn btn-secondary" id="listen-next-btn" ${s.idx+1===t.items.length?'disabled style="opacity:0.3; cursor:default;"':""}>→</button>
      </div>

      ${s.idx+1===t.items.length?`
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      `:""}
    </div>
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{i.speak(r.targetText)}),e.querySelector("#listen-prev-btn").addEventListener("click",()=>{s.idx>0&&(s.idx--,Oe(e,t,a,i))}),e.querySelector("#listen-next-btn").addEventListener("click",()=>{s.idx+1<t.items.length&&(s.idx++,Oe(e,t,a,i))});const o=e.querySelector("#next-step-btn");o&&o.addEventListener("click",()=>{i.nextSessionStep()})}function oi(e,t,a,i){const s=a.activeLesson,r=s.topicId?O(s.topicId):null;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center; padding: 40px 0;">
      <div style="font-size: 52px; animation: bounce 1s infinite alternate;">🎉</div>
      <h3 style="font-family: var(--font-display); font-weight: 800; font-size: 26px; letter-spacing: -0.5px;">Nailed It!</h3>
      <p style="color: var(--text-muted); font-size: 15px; max-width: 360px; line-height: 1.6;">
        You finished the lesson: <span style="color: var(--cyan); font-weight: 600;">"${s.title}"</span>.
        ${r&&s.type==="checkpoint"?`<br>Topic <strong>${r.title}</strong> has been marked as complete.`:""}
      </p>

      <div class="badge-pill" style="border-color: var(--lime); color: var(--lime); font-size: 14px; font-weight: 800; padding: 10px 20px;">
        ★ Voyage Lesson Completed!
      </div>

      <button class="btn btn-primary" id="finish-lesson-btn" style="margin-top: 12px; padding: 14px 32px;">
        Back to Dashboard
      </button>
    </div>
  `,e.querySelector("#finish-lesson-btn").addEventListener("click",()=>{i.completeLesson(s.id)})}function ni(e,t,a){var o;const i=((o=t.familyPlayState)==null?void 0:o.completedDays)??oe(t.activityDates),s={};for(let l=0;l<10;l++)s[l]=z.filter(d=>d.month===l);e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${D.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${D.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main>
      ${Ra(t)}
      <div class="container voyage-plan-content" id="voyage-plan" style="max-width: 760px;">
      <h2 style="font-size: 28px; margin-bottom: 8px;">The 200-Day Family Voyage</h2>
      <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 32px; line-height: 1.6;">
        Ten months, five family learning days each week. Independent practice builds personal skill but does not move this shared route. Every fourth week brings the month's vocabulary and patterns together.
      </p>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        ${Object.keys(s).map(l=>{const d=parseInt(l)+1,c=s[l],u=c[0].number,w=c.at(-1).number,x=i>=w,j=i>=u;let m="var(--text-muted)";return x?m="var(--lime)":(j||i+1===u)&&(m="var(--cyan)"),`
            <div style="border-left: 2px solid ${m}; padding-left: 20px; margin-bottom: 8px;">
              <h3 style="font-size: 16px; margin-bottom: 12px; color: ${m}; text-transform: uppercase; letter-spacing: 0.05em;">
                Month ${d} — ${Wt[l]}
              </h3>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${c.filter(p=>p.number%5===1).map(p=>{const h=p.week,v=z.filter(C=>C.week===h),b=i>=v.at(-1).number,g=i+1>=v[0].number&&!b,T=p.topicId?O(p.topicId):null;let f="Planned",k="var(--text-muted)";return b?(f="✓ Completed",k="var(--lime)"):g&&(f="Active Week",k="var(--cyan)"),`
                    <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; border-radius: 12px; padding: 14px 18px; cursor: pointer; transition: all var(--transition-fast);" data-week="${h}">
                      <div>
                        <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 2px;">
                          ${h%4===0?"Week 4 (Integration)":`Week ${h%4}: ${T?T.title:"Mixed review"}`}
                        </h4>
                        <p style="color: var(--text-muted); font-size: 13px;">
                          Lessons ${v[0].number} – ${v[4].number}
                        </p>
                      </div>
                      <div style="font-size: 13px; font-weight: 800; color: ${k};">${f}</div>
                    </div>
                  `}).join("")}
              </div>
            </div>
          `}).join("")}
      </div>
      </div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#back-btn").addEventListener("click",a.goDashboard);const r=e.querySelector(".immersive-voyage");r==null||r.addEventListener("pointermove",l=>{const d=r.getBoundingClientRect();r.style.setProperty("--look-x",`${((l.clientX-d.left)/d.width-.5)*1.5}%`),r.style.setProperty("--look-y",`${((l.clientY-d.top)/d.height-.5)*1.2}%`)}),r==null||r.addEventListener("pointerleave",()=>{r.style.setProperty("--look-x","0%"),r.style.setProperty("--look-y","0%")}),e.querySelectorAll("[data-week]").forEach(l=>{l.addEventListener("click",()=>{const d=parseInt(l.dataset.week),c=z.filter(x=>x.week===d),u=z[Math.min(i,199)],w=c.find(x=>x.id===u.id)||c[0];a.startSession(w)})})}const li=45e3;function di(e,t=new Date){return e!=null&&e.linked?e.status==="credited"?"completed":e.lastSeenAt?t.getTime()-new Date(e.lastSeenAt).getTime()<=li?"connected":"reconnecting":e.status==="joined"?"reconnecting":"waiting":"unlinked"}function ci(e,t=[]){const a=e.filter(s=>t.includes(s.id)),i=a.filter(s=>!s.linked);return{selectedCount:a.length,linkedCount:a.length-i.length,unlinkedNames:i.map(s=>s.name),canStart:a.length>0&&i.length===0}}const ut={"montenegrin-en":"Montenegrin","albanian-en":"Albanian"};function E(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function mt(e){return{owner:"Owner",adult_guide:"Adult Partner",learner:"Learner"}[e]||e}function pi(e,t,a){var r,o,l,d,c,u,w,x,j,m;const i=t.familyOverview;e.innerHTML=`
    <header class="navbar">
      <button class="logo" id="family-back-btn" aria-label="Back to learners">
        <div class="logo-icon">N</div><div class="logo-title">Family Overview</div>
      </button>
      <button class="btn btn-secondary" id="choose-learner-btn">Choose a Learner</button>
    </header>
    <main class="container">
      ${t.familyOverviewLoading?"<p>Loading family…</p>":""}
      ${t.familyError?`<p role="alert" style="color: var(--pink);">${E(t.familyError)}</p>`:""}
      ${t.familyNotice?`<p role="status" style="color: var(--lime); margin-bottom: 16px;">${E(t.familyNotice)}</p>`:""}
      ${i?`
        <section class="hero-card" style="margin-bottom: 28px;">
          <div class="hero-text"><div class="hero-tag">Family workspace</div>
          <h1 class="hero-title">${E(i.family.name)}</h1>
          <p class="hero-subtitle">Members, invitations, and progress across every language.</p></div>
        </section>

        <section class="family-play-launch" aria-labelledby="family-play-launch-title">
          <div>
            <div class="hero-tag">Shared family voyage</div>
            <h2 id="family-play-launch-title">${(r=t.familyPlayState)!=null&&r.activeSession?"Family session in progress":`Ready for voyage day ${(((o=t.familyPlayState)==null?void 0:o.completedDays)||0)+1}`}</h2>
            <p>Independent practice stays personal. This shared position moves only when an adult chooses Complete for Family.</p>
          </div>
          ${(l=t.familyPlayState)!=null&&l.activeSession?`
            <div class="family-play-active-summary">
              <strong>Voyage day ${t.familyPlayState.activeSession.voyageDay}</strong>
              <span>${E(t.familyPlayState.activeSession.status)} · Part ${(t.familyPlayState.activeSession.currentSegment||0)+1}</span>
              <button class="btn btn-primary" id="continue-family-play-btn">Continue Family Play →</button>
            </div>`:`
            <div class="family-session-setup">
              <div class="family-setup-diagnostics" aria-label="Family Play preflight checks">
                <div class="setup-check ok"><span>✓</span><div><strong>Family cloud</strong><small>Connected as ${E(((d=t.sessionUser)==null?void 0:d.email)||"parent")}</small></div></div>
                <div class="setup-check ok"><span>✓</span><div><strong>Learning language</strong><small>${E(ut[t.activePackId]||"Selected language")} · voyage day ${(((c=t.familyPlayState)==null?void 0:c.completedDays)||0)+1}</small></div></div>
                <div class="setup-check" id="learner-link-check"><span>•</span><div><strong>Learner sign-ins</strong><small>Select your crew to run the check.</small></div></div>
              </div>
              <fieldset class="family-play-roster">
                <legend>Who is learning together?</legend>
                ${i.learners.map(p=>`<label class="family-roster-person ${p.linked?"linked":"unlinked"}">
                  <input type="checkbox" name="family-participant" value="${E(p.id)}" ${p.linked?"checked":""}>
                  <span><strong>${E(p.name)}</strong><small>${p.linked?"Google sign-in linked":"Sign-in must be linked first"}</small></span>
                  <i>${p.linked?"✓":"!"}</i>
                </label>`).join("")||"<p>Add a learner before starting Family Play.</p>"}
              </fieldset>
              <p class="family-setup-note">After you start, each selected learner opens Nautilus on their device and chooses <strong>Open Shared Lesson</strong>. The live lobby will confirm their connection.</p>
              <button class="btn btn-primary" id="start-family-play-btn" disabled>Start Family Session →</button>
            </div>`}
        </section>

        ${t.familyProgress?`<section class="family-progress-dashboard" aria-labelledby="family-progress-title">
          <div class="family-progress-heading">
            <div><div class="hero-tag">Shared and personal progress</div><h2 id="family-progress-title">Family voyage dashboard</h2></div>
            <div class="shared-day-medallion"><strong>${t.familyProgress.shared.completedDays}</strong><span>of 200 family days</span></div>
          </div>
          <div class="family-progress-comparison">
            ${t.familyProgress.learners.map(p=>{const h=Math.min(100,Math.round(p.completedLessons/200*100)),v=Math.min(100,Math.round(t.familyProgress.shared.completedDays/200*100));return`<article class="family-progress-row">
                <div><strong>${E(p.name)}</strong><span>${p.completedLessons} personal lessons · joined ${p.familyParticipations} family days</span></div>
                <div class="dual-progress"><i style="--progress:${v}%" title="Family ${v}%"></i><b style="--progress:${h}%" title="Personal ${h}%"></b></div>
                <small>Family ${v}% · Personal ${h}% · ${p.stars} stars</small>
              </article>`}).join("")}
          </div>
        </section>

        <section class="family-history" aria-labelledby="family-history-title">
          <div class="family-progress-heading"><div><div class="hero-tag">Captain's log</div><h2 id="family-history-title">Family session history</h2></div><span>${t.familyProgress.shared.reviewSessions} review sessions</span></div>
          <div class="family-history-list">
            ${t.familyProgress.history.map(p=>`<article class="family-history-item">
              <div class="history-day"><strong>${p.voyageDay}</strong><span>${p.isReview?"Review":"Voyage day"}</span></div>
              <div><strong>${E(p.lessonId)}</strong><span>${new Date(p.completedAt).toLocaleDateString()} · ${E((p.participants||[]).join(", "))} · led by ${E(p.controllerName)}</span></div>
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
            ${i.members.map(p=>`<article class="kid-progress-card">
              <div class="kid-progress-header">${E(p.name)}</div>
              <div class="kid-progress-stats"><div>${E(p.email)}</div><div>${E(mt(p.role))}</div></div>
            </article>`).join("")}
          </div>
          ${i.pendingInvitations.length?`<h3 class="section-title" style="margin-top:20px;">Pending invitations</h3>
            <div class="kids-progress-grid">${i.pendingInvitations.map(p=>`<article class="kid-progress-card">
              <div class="kid-progress-header">${E(p.email)}</div>
              <div class="kid-progress-stats"><div>${E(mt(p.role))}</div><div>Expires ${new Date(p.expiresAt).toLocaleDateString()}</div></div>
            </article>`).join("")}</div>`:""}
        </section>

        <section>
          <h2 class="section-title">Learner Progress</h2>
          <div class="kids-progress-grid">
            ${i.learners.map(p=>{const h=new Map(p.progress.map(v=>[v.packId,v]));return`<article class="kid-progress-card">
                <div class="kid-progress-header">${E(p.name)} ${p.linked?'<span style="color:var(--teal);font-size:12px;">✓ Sign-in linked</span>':""}</div>
                <div class="kid-progress-stats">
                  ${t.languagePacks.map(v=>{const b=h.get(v.id)||{stars:0,completedLessons:0,activeDays:0};return`<div><strong>${E(ut[v.id]||v.targetLanguage.name)}</strong>: ${b.completedLessons}/200 lessons · ${b.activeDays} active days · ${b.stars} stars</div>`}).join("")}
                </div>
                <button class="btn btn-secondary" data-repair-learner="${E(p.id)}" data-learner-name="${E(p.name)}" style="margin-top:12px;">Link or repair Google sign-in</button>
              </article>`}).join("")||"<p>No learners have been added yet.</p>"}
          </div>
        </section>`:""}
    </main>`,(u=e.querySelector("#family-back-btn"))==null||u.addEventListener("click",a.goProfileSelect),(w=e.querySelector("#choose-learner-btn"))==null||w.addEventListener("click",a.goProfileSelect),(x=e.querySelector("#overview-invite-partner-btn"))==null||x.addEventListener("click",async()=>{const p=prompt("Enter your partner's Google account email:");p!=null&&p.trim()&&await a.invitePartner(p.trim(),!0)}),(j=e.querySelector("#start-family-play-btn"))==null||j.addEventListener("click",async()=>{const p=[...e.querySelectorAll('input[name="family-participant"]:checked')].map(h=>h.value);if(!p.length){window.alert("Select at least one learner for Family Play.");return}await a.startFamilySession(p)});const s=()=>{const p=[...e.querySelectorAll('input[name="family-participant"]:checked')].map(g=>g.value),h=ci((i==null?void 0:i.learners)||[],p),v=e.querySelector("#learner-link-check"),b=e.querySelector("#start-family-play-btn");!v||!b||(v.className=`setup-check ${h.canStart?"ok":"warning"}`,v.innerHTML=h.canStart?`<span>✓</span><div><strong>Learner sign-ins</strong><small>${h.linkedCount} selected learner${h.linkedCount===1?"":"s"} ready to connect</small></div>`:`<span>!</span><div><strong>Learner sign-ins</strong><small>${h.unlinkedNames.length?`Link ${E(h.unlinkedNames.join(", "))} or remove from this session.`:"Select at least one learner."}</small></div>`,b.disabled=!h.canStart)};e.querySelectorAll('input[name="family-participant"]').forEach(p=>p.addEventListener("change",s)),s(),(m=e.querySelector("#continue-family-play-btn"))==null||m.addEventListener("click",a.openFamilySession),e.querySelectorAll("[data-review-session]").forEach(p=>{p.addEventListener("click",()=>a.reviewFamilySession(p.dataset.reviewSession))}),e.querySelectorAll("[data-repair-learner]").forEach(p=>{p.addEventListener("click",async()=>{const h=prompt(`Enter the Google email for ${p.dataset.learnerName}:`);h!=null&&h.trim()&&await a.repairLearnerSignIn(p.dataset.repairLearner,p.dataset.learnerName,h.trim())})})}function ve(e,t,a){return H(e,a).slice(0,Math.min(t,e.length))}function ui(e,t,a){const i=Jt(`${a}:${e.id}:family-full-session`),s=ve((t==null?void 0:t.items)||[],10,i),r=ve((t==null?void 0:t.items)||[],6,i),o=ve((t==null?void 0:t.items)||[],6,i);return[{type:"ready",title:"Is everyone ready?",subtitle:"Join on each device before setting sail together."},{type:"family-flashcards",title:"Discover Together",subtitle:`Learn ${s.length} words as a family`,items:s},(()=>{const d=s.slice(0,6);return{type:"family-match",title:"Match as a Crew",subtitle:"Take turns connecting each word to its meaning",items:d,targetItems:H(d,i),supportItems:H(d,i)}})(),...r.map((d,c)=>({type:"family-quiz",title:`Family Quiz · ${c+1} of ${r.length}`,subtitle:"Choose an answer together, then reveal it",item:d,options:H([d,...ve(((t==null?void 0:t.items)||[]).filter(u=>u.id!==d.id),3,i)],i)})),...o.map((d,c)=>({type:"family-conversation",title:`Talk Together · Round ${c+1}`,subtitle:"Ask, answer, and make the phrase your own",item:d})),{type:"family-reflection",title:"Bring It Home",subtitle:"Everyone completes one final speaking challenge",items:o}]}const ke=new Map,Me=new Map;function mi(e){var i;if(ke.has(e))return ke.get(e);let t=[];try{t=JSON.parse(((i=globalThis.sessionStorage)==null?void 0:i.getItem(e))||"[]")}catch{t=[]}const a=new Set(Array.isArray(t)?t:[]);return ke.set(e,a),a}function gi(e,t){var a;ke.set(e,t);try{(a=globalThis.sessionStorage)==null||a.setItem(e,JSON.stringify([...t]))}catch{}}function yi(e,t){var o;const a=(t==null?void 0:t.answers)||[],i=(t==null?void 0:t.expected)||0,s=(o=t==null?void 0:t.currentAnswer)==null?void 0:o.answerId;return{allLocked:i>0&&a.length>=i,currentAnswer:s,hasCurrentAnswer:!!s,currentCorrect:!!s&&s===e.item.id,correctAnswer:e.item.targetText}}function hi(e){const t=["lime","teal","blue","purple","pink","amber"];return t[Math.max(0,Number(e)||0)%t.length]}function S(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function fi(e,t,a=[]){var l;const i=(t==null?void 0:t.name)||"Learner 1",s=((l=a.find(d=>d.profileId!==(t==null?void 0:t.profileId)))==null?void 0:l.name)||"Learner 2",r=e.item.targetText,o=e.item.supportText;return[{person:i,label:"Say the new word",target:r,support:o},{person:s,label:`Ask ${i}`,target:`What does “${r}” mean?`,support:"Ask this in English for now."},{person:i,label:`Answer ${s}`,target:`“${r}” means “${o}.”`,support:`Say the Montenegrin word clearly: ${r}.`},{person:"Everyone",label:"Say it together",target:r,support:`Everyone repeats “${r}” once.`}]}function vi(e,t,a=null,i=[],s=[],r=null){var d,c,u,w,x,j;if(e.type==="ready")return`<div class="family-ready-call"><span aria-hidden="true">⚓</span><div><strong>Gather your crew</strong><p>Open Family Play on each learner's device. When everyone shows Ready, the parent can begin.</p></div></div>`;const o=t?`<div class="family-turn-prompt"><span>${S(t.name).slice(0,1)}</span><div><small>It’s your turn</small><strong>${S(t.name)}, lead this round—then everyone joins in.</strong></div></div>`:"";if(e.type==="family-flashcards")return`<div class="family-activity-instructions"><strong>How to play</strong><span>Everyone taps each card on their own screen, says the word, then reveals its meaning. The parent moves on when the family is ready.</span></div>
      <div class="family-vocabulary-grid">${e.items.map((m,p)=>`<article><span>${m.emoji||"✦"}</span><button class="family-vocab-reveal" data-family-reveal><strong>${S(m.targetText)}</strong><small>${S(m.supportText)}</small><em>Tap to reveal</em></button><button class="dialogue-play-btn" data-family-audio="${p}" aria-label="Play ${S(m.targetText)}">►</button></article>`).join("")}</div>`;if(e.type==="family-match"){const m=e.targetItems||e.items,p=e.supportItems||[...e.items].reverse(),h=(r==null?void 0:r.matched)||new Set,v=(b,g,T,f)=>{const k=h.has(b.id),C=e.items.findIndex(P=>P.id===b.id)+1;return`<button class="${k?"matched":""}" data-family-match="${S(b.id)}" data-family-match-side="${f}" data-family-match-number="${C}" data-match-color="${hi(C-1)}" ${k?"disabled":""} aria-pressed="${k}"><b>${g}</b>${S(T)}${k?`<span>✓ Pair ${C}</span>`:""}</button>`};return`${o}<div class="family-activity-instructions"><strong>Touch-and-match round</strong><span>On each device, tap one word and then its meaning. Say the pair aloud. Matched choices stay highlighted while the parent keeps the family together.</span></div>
      <div class="family-match-board"><div>${m.map((b,g)=>v(b,g+1,b.targetText,"target")).join("")}</div><div>${p.map((b,g)=>v(b,String.fromCharCode(65+g),b.supportText,"support")).join("")}</div></div>
      <p class="family-match-status" aria-live="polite"><strong>${h.size} of ${e.items.length}</strong> pairs complete${h.size===e.items.length?" · Great work!":""}</p>`}if(e.type==="family-quiz"){const m=(d=a==null?void 0:a.currentAnswer)==null?void 0:d.answerId,p=(a==null?void 0:a.answers)||[],h=yi(e,a),v=Math.max(0,((a==null?void 0:a.expected)||0)-p.length),b=h.allLocked?"Moving to the next question…":`Waiting for ${v} more…`,g=h.hasCurrentAnswer?h.currentCorrect?`✓ Correct! ${h.correctAnswer} is the answer. ${b}`:`Not quite. The correct answer is ${h.correctAnswer}. ${b}`:"Choose once to lock in your answer.";return`${o}<div class="family-quiz-card"><small>What is the best translation?</small><strong>${S(e.item.supportText)}</strong><div>${e.options.map(T=>{const f=h.hasCurrentAnswer&&T.id===e.item.id?"correct":h.hasCurrentAnswer&&m===T.id?"incorrect":"";return`<button type="button" class="family-answer ${m===T.id?"locked":""} ${f}" data-family-answer="${S(T.id)}" ${m?"disabled":""}>${S(T.targetText)}${m===T.id?`<span>${h.currentCorrect?"✓ Correct":"✕ Your answer"}</span>`:""}</button>`}).join("")}</div><div class="family-answer-status">${p.map(T=>{const f=h.allLocked?T.answerId===e.item.id?"correct":"incorrect":"locked",k=h.allLocked?T.answerId===e.item.id?"✓":"✕":"✓";return`<span class="${f}">${k} ${S(T.name)}</span>`}).join("")}${Array.from({length:v},()=>"<span>Waiting…</span>").join("")}</div><p class="family-answer-feedback ${h.hasCurrentAnswer?h.currentCorrect?"correct":"incorrect":""}" aria-live="polite">${S(g)}</p></div>`}if(e.type==="family-conversation"){const m=fi(e,t,i);return`<div class="family-conversation-card">${o}<div class="family-conversation-phrase"><small>Word for this round</small><strong>${S(e.item.targetText)}</strong><span>${S(e.item.supportText)}</span></div><div class="family-conversation-script"><strong>Follow this script</strong>${m.map((p,h)=>`<article><b>${h+1}</b><div><small>${S(p.person)} · ${S(p.label)}</small><strong>${S(p.target)}</strong><span>${S(p.support)}</span></div></article>`).join("")}</div><p class="family-conversation-tip"><strong>Parent:</strong> Help with pronunciation or explain a family wording such as <em>dida</em> versus standard Montenegrin <em>deda</em>. Then tap Next.</p></div>`}if(e.type==="family-reflection"){const m=s.length?s:[{name:"Everyone"}],p=(a==null?void 0:a.answers)||[];return`<div class="family-reflection-card"><strong>Final family challenge</strong><p>Complete your three actions, then lock in your own card. The family day finishes automatically when everyone is done.</p><div class="family-reflection-grid">${m.map((h,v)=>{const b=e.items[v%e.items.length],g=p.find(f=>h.profileId?f.profileId===h.profileId:!f.profileId),T=!!h.isCurrentUser;return`<button class="family-reflection-assignment ${g?"finished":""}" data-final-lock ${T&&!g?"":"disabled"}><small>${S(h.name)}’s word</small><strong>${S(b.targetText)}</strong><span>${S(b.supportText)}</span><em>1. Say it · 2. Translate it · 3. Use it in a family example</em><b>${g?"✓ Locked in":T?"Tap to lock in":"Waiting…"}</b></button>`}).join("")}</div><span>${p.length} of ${m.length} people locked in</span></div>`}const l=e.items||((c=e.dialogue)==null?void 0:c.lines)||[];return l.length?`${o}<div class="family-play-phrases">
      ${l.slice(0,8).map((m,p)=>{const h=m.targetText||m.target||m.text||m.line||"",v=m.supportText||m.support||m.translation||"";return`<article class="family-play-phrase">
          <div><strong>${S(h)}</strong>${v?`<small>${S(v)}</small>`:""}</div>
          ${h?`<button class="dialogue-play-btn" data-family-audio="${p}" aria-label="Play ${S(h)}">►</button>`:""}
        </article>`}).join("")}
    </div>`:e.note?`${o}<div class="family-play-note">${S(e.note)}</div>`:(w=(u=e.quiz)==null?void 0:u.questions)!=null&&w.length?`${o}<div class="family-play-challenge"><span>Family challenge</span><strong>${S(e.quiz.questions[0].promptText)}</strong><p>Take turns answering aloud. The parent can replay or discuss before moving on.</p></div>`:(j=(x=e.match)==null?void 0:x.tiles)!=null&&j.length?`${o}<div class="family-play-challenge"><span>Family challenge</span><strong>Match the words aloud together</strong><p>Each person chooses a pair and explains it before the parent moves forward.</p></div>`:`${o}<div class="family-play-challenge"><span>Speak together</span><strong>${S(e.subtitle||"Practice this section as a family.")}</strong></div>`}function xi(e,t,a){var L,W,ee,R,ne,he,V,U,Ve,Ue,Ke,Ye,Je,Qe,Ze,Xe;const i=(L=t.familyPlayState)==null?void 0:L.activeSession,s=t.activeLesson;if(!i||!s){e.innerHTML='<main class="container"><p role="alert">This Family Play session is no longer active.</p><button class="btn btn-secondary" id="family-play-back">Return</button></main>',e.querySelector("#family-play-back").addEventListener("click",a.goFamilyOverview);return}const r=O(s.topicId),o=ui(s,r,i.id),l=Math.min(i.currentSegment||0,o.length-1),d=o[l],c=!t.linkedLearnerProfileId&&(((ee=(W=t.families)==null?void 0:W[0])==null?void 0:ee.role)==="owner"||((ne=(R=t.families)==null?void 0:R[0])==null?void 0:ne.role)==="adult_guide"),u=c&&i.controllingAdult===((he=t.sessionUser)==null?void 0:he.id),w=(((V=t.familyOverview)==null?void 0:V.members)||[]).filter(y=>{var I;return(y.role==="owner"||y.role==="adult_guide")&&y.userId!==((I=t.sessionUser)==null?void 0:I.id)}),x=l===o.length-1,j=d.items||(d.item?[d.item]:[]),m=i.participants.map(y=>({...y,connectionState:di(y)})),p=m.filter(y=>y.connectionState==="connected"||y.connectionState==="completed"),h=p.length===i.participants.length&&p.length>0,v=d.type==="ready"||!i.participants.length?null:i.participants[(l-1)%i.participants.length],b=Pt(s.topicId),g=(b==null?void 0:b.src)||"https://kormilo-nautilus.netlify.app/assets/illustrations/nautilus-voyage-panorama-v3.jpg",T=[...i.participants,{name:i.controllerName||"Parent",isCurrentUser:i.controllingAdult===((U=t.sessionUser)==null?void 0:U.id)}],f=i.quizAnswers||[],k=d.type==="family-quiz"||d.type==="family-reflection"?{answers:f,expected:i.participants.length+1,currentAnswer:f.find(y=>y.isCurrentUser)}:null,C=`nautilus:family-match:${i.id}:${l}`,P=d.type==="family-match"?{key:C,matched:mi(C)}:null;e.innerHTML=`
    <header class="navbar family-play-nav">
      <button class="logo" id="family-play-exit" aria-label="Leave Family Play">
        <div class="logo-icon">${D.targetLanguage.code.toUpperCase()}</div>
        <div><div class="logo-title">Family Play</div><small>Voyage day ${i.voyageDay}</small></div>
      </button>
      <div class="family-play-live"><i></i>${i.status==="paused"?"Paused":"Together now"}</div>
    </header>
    <main class="family-play-stage ${b?`family-play-stage--${S(s.topicId)}`:""}" style="--family-step:${Math.round((l+1)/o.length*100)}%">
      <img class="family-play-scene" src="${g}" alt="" aria-hidden="true">
      <div class="family-play-atmosphere" aria-hidden="true"></div>
      <aside class="family-crew" aria-label="Family Play crew">
        <div class="family-crew__heading"><div><small>Family crew</small><strong>${p.length} of ${i.participants.length} ready</strong></div><span class="family-crew__signal ${h?"ready":""}"></span></div>
        <div class="family-crew__people">
          ${m.map(y=>{const I=y.connectionState==="connected"||y.connectionState==="completed",K=(v==null?void 0:v.profileId)===y.profileId,Dt={connected:"Connected · Ready",completed:"Completed",reconnecting:"Reconnecting…",waiting:"Open Shared Lesson",unlinked:"Google sign-in not linked"}[y.connectionState];return`<div class="family-crew-person ${I?"ready":""} ${y.connectionState} ${K?"speaking":""}"><span>${S(y.name).slice(0,1)}</span><div><strong>${S(y.name)}</strong><small>${K?"Speaking now":Dt}</small></div></div>`}).join("")}
        </div>
        <div class="family-crew__captain"><small>Controller</small><strong>🎛 ${S(i.controllerName||"Family guide")}</strong>${u?"<span>You are leading</span>":"<span>Following live</span>"}</div>
      </aside>
      <section class="family-play-panel" aria-labelledby="family-play-title">
        <div class="family-play-meta">
          <span>${S(s.title)}</span>
          <span>Part ${l+1} of ${o.length}</span>
        </div>
        <div class="session-steps-bar" role="progressbar" aria-valuenow="${l+1}" aria-valuemin="1" aria-valuemax="${o.length}">
          ${o.map((y,I)=>`<div class="session-step-segment ${I<=l?"active":""}"></div>`).join("")}
        </div>
        <p class="hero-tag">${u?"You are leading":`Following ${S(i.controllerName||"the family guide")}`}</p>
        ${t.familyError?`<div class="family-play-error" role="alert"><strong>Couldn’t save that action</strong><span>${S(t.familyError)}</span></div>`:""}
        <h1 id="family-play-title">${S(d.title)}</h1>
        <p class="family-play-subtitle">${S(d.subtitle)}</p>
        ${vi(d,v,k,i.participants,T,P)}
        ${u?`<div class="family-play-controls">
          <button class="btn btn-secondary" id="family-play-prev" ${l===0?"disabled":""}>← Back</button>
          <button class="btn btn-secondary" id="family-play-audio">► Play all</button>
          <button class="btn btn-secondary" id="family-play-pause">${i.status==="paused"?"Resume":"Pause"}</button>
          ${x?'<span class="family-quiz-auto-note">Completes when everyone locks in</span>':d.type==="family-quiz"?'<span class="family-quiz-auto-note">Advances when everyone locks in</span>':`<button class="btn btn-primary" id="family-play-next" ${d.type==="ready"&&!h?'disabled aria-describedby="family-ready-help"':""}>${d.type==="ready"?"Start Together →":"Next →"}</button>`}
          ${w.length?`<label class="family-handoff">Hand off to
            <select id="family-handoff-select"><option value="">Choose adult…</option>${w.map(y=>`<option value="${y.userId}">${S(y.name)}</option>`).join("")}</select>
          </label>`:""}
        </div>${d.type==="ready"&&!h?'<div class="family-ready-help" id="family-ready-help"><strong>Waiting for the crew</strong><span>On each learner device: sign in with the linked Google account → open Nautilus → choose Open Shared Lesson. Reconnecting devices will recover automatically.</span><button class="btn btn-secondary" id="family-refresh-status">Refresh connections</button></div>':""}`:'<p class="family-play-following"><strong>You are connected.</strong> The parent controls this shared lesson. Keep this page open; if the connection drops, Nautilus will rejoin automatically.</p>'}
        ${c&&!u&&i.canTakeControl?'<button class="btn btn-secondary family-take-control" id="family-take-control">Take Control</button>':""}
      </section>
    </main>`,e.querySelector("#family-play-exit").addEventListener("click",c?a.goFamilyOverview:a.goDashboard),e.querySelectorAll("[data-family-audio]").forEach(y=>{y.addEventListener("click",()=>{const I=j[Number(y.dataset.familyAudio)];a.speak((I==null?void 0:I.targetText)||(I==null?void 0:I.target)||(I==null?void 0:I.text)||(I==null?void 0:I.line)||"")})}),e.querySelectorAll("[data-reflection-audio]").forEach(y=>y.addEventListener("click",()=>a.speak(y.dataset.reflectionAudio))),e.querySelectorAll("[data-family-reveal]").forEach(y=>y.addEventListener("click",()=>y.classList.toggle("revealed")));let _=null;if(e.querySelectorAll("[data-family-match]").forEach(y=>y.addEventListener("click",()=>{if(!y.classList.contains("matched")){if(!_){_=y,y.classList.add("selected");return}if(_===y){y.classList.remove("selected"),_=null;return}if(_.dataset.familyMatchSide===y.dataset.familyMatchSide){_.classList.remove("selected"),_=y,y.classList.add("selected");return}if(_.dataset.familyMatch===y.dataset.familyMatch){_.classList.remove("selected"),_.classList.add("matched"),y.classList.add("matched"),_.disabled=!0,y.disabled=!0,_.setAttribute("aria-pressed","true"),y.setAttribute("aria-pressed","true");const I=y.dataset.familyMatchNumber;_.insertAdjacentHTML("beforeend",`<span>✓ Pair ${I}</span>`),y.insertAdjacentHTML("beforeend",`<span>✓ Pair ${I}</span>`),P.matched.add(y.dataset.familyMatch),gi(P.key,P.matched);const K=e.querySelector(".family-match-status");K&&(K.innerHTML=`<strong>${P.matched.size} of ${d.items.length}</strong> pairs complete${P.matched.size===d.items.length?" · Great work!":""}`)}else{const I=_;I.classList.add("incorrect"),y.classList.add("incorrect"),setTimeout(()=>{I.classList.remove("selected","incorrect"),y.classList.remove("incorrect")},550)}_=null}})),e.querySelectorAll("[data-final-lock]").forEach(y=>y.addEventListener("click",()=>{y.disabled=!0,y.classList.add("finished"),y.querySelector("b").textContent="Locking in…",a.finishFamilyChallenge(l)})),e.querySelectorAll("[data-family-answer]").forEach(y=>y.addEventListener("click",()=>{const I=y.closest(".family-quiz-card");I.querySelectorAll(".family-answer").forEach(K=>{K.disabled=!0}),y.classList.add("locked"),y.insertAdjacentHTML("beforeend","<span>✓ Locking in…</span>"),I.querySelector(".family-answer-feedback").textContent="Locking in your answer…",a.answerFamilyQuiz(y.dataset.familyAnswer,l)})),(Ve=e.querySelector("#family-play-audio"))==null||Ve.addEventListener("click",()=>{const y=j.map(I=>I.targetText||I.target||I.text||I.line).filter(Boolean).join(". ");y&&a.speak(y)}),(Ue=e.querySelector("#family-play-prev"))==null||Ue.addEventListener("click",()=>a.controlFamilySession("live",l-1)),(Ke=e.querySelector("#family-play-next"))==null||Ke.addEventListener("click",()=>a.controlFamilySession("live",l+1)),(Ye=e.querySelector("#family-play-pause"))==null||Ye.addEventListener("click",()=>a.controlFamilySession(i.status==="paused"?"live":"paused",l)),(Je=e.querySelector("#family-play-complete"))==null||Je.addEventListener("click",a.completeFamilySession),(Qe=e.querySelector("#family-refresh-status"))==null||Qe.addEventListener("click",a.refreshFamilySession),(Ze=e.querySelector("#family-take-control"))==null||Ze.addEventListener("click",a.claimFamilyController),(Xe=e.querySelector("#family-handoff-select"))==null||Xe.addEventListener("change",y=>{y.target.value&&a.handoffFamilyController(y.target.value)}),d.type==="family-quiz"&&k.answers.length>=k.expected){const y=`${i.id}:${l}`;Me.has(y)||Me.set(y,setTimeout(async()=>{try{await a.reconcileFamilyQuiz(l)}finally{Me.delete(y)}},2600))}}const n={profile:null,isGuide:!1,screen:"profile-select",sessionUser:null,families:null,familyError:null,familyNotice:null,familyOverview:null,familyOverviewLoading:!1,familyPlayState:null,familyProgress:null,linkedLearnerProfileId:null,activePackId:"montenegrin-en",languagePacks:Rt(),stars:0,streakDays:0,completedTopicIds:[],completedLessons:[],activityDates:[],dialoguesDone:0,topicId:null,activity:"flashcards",calendarMonth:0,activeLesson:null,session:null,flash:{order:null,idx:0,flipped:!1},match:{tiles:[],selectedIds:[],matchedIds:[]},quiz:{questions:[],qIdx:0,score:0,selected:null,answered:!1},listen:{order:null,idx:0,revealed:!1},dialogue:{readAs:null,showEn:!1},recording:{status:"idle",url:null,error:null,chunks:[],recorder:null}},F=document.getElementById("app");function Se(e){let t=document.getElementById("audio-device-notice");t||(t=document.createElement("div"),t.id="audio-device-notice",t.className="audio-device-notice",t.setAttribute("role","status"),document.body.appendChild(t)),t.textContent=e,t.classList.add("visible"),clearTimeout(Se.timer),Se.timer=setTimeout(()=>t.classList.remove("visible"),9e3)}function bi(e){if(!("speechSynthesis"in window)){Se("Speech playback is not supported by this browser.");return}const t=D.targetLanguage.code,a=ba(e,t,window.speechSynthesis,window.SpeechSynthesisUtterance);if(!a.spoken&&a.reason==="voice-missing"){const i=t==="sq"?"Albanian":"Croatian",s=/iPad|iPhone|iPod/.test(navigator.userAgent)?`On this iPhone or iPad, open Settings → Accessibility → Read & Speak → Voices and download a ${i} voice.`:`Install or enable a ${i} speech voice in this device's accessibility or speech settings.`;Se(`Nautilus stopped an incorrect English pronunciation. ${s}`)}}const G={selectLanguage:async e=>{if(n.profile){if(Ge(n.profile,e),n.sessionUser)try{await lt()}catch(t){n.familyError=t.message}if(B(n.profile),n.sessionUser)try{await A()}catch(t){n.familyError=t.message}n.screen="dashboard",ce(),$()}},createFamily:async e=>{n.familyError=null;try{await Ta(e),n.families=await dt(),await lt(),$()}catch(t){n.familyError=t.message,$()}},invitePartner:async(e,t=!1)=>{var i,s;const a=(s=(i=n.families)==null?void 0:i[0])==null?void 0:s.family_id;if(a){n.familyError=null,n.familyNotice=null;try{const r=await wa(a,e,"adult_guide"),o=new URL(`${window.location.origin}${window.location.pathname}`);o.searchParams.set("invite",r);try{await navigator.clipboard.writeText(o.toString())}catch{window.prompt("Copy this invitation link:",o.toString())}n.familyNotice=`Partner invitation copied. Send the link to ${e}; it expires in 7 days.`}catch(r){n.familyError=r.message}t?await G.goFamilyOverview():$()}},inviteLearner:async(e,t,a)=>{n.familyError=null,n.familyNotice=null;try{const i=await ka(e,a),s=new URL(`${window.location.origin}${window.location.pathname}`);s.searchParams.set("invite",i);try{await navigator.clipboard.writeText(s.toString())}catch{window.prompt("Copy this invitation link:",s.toString())}n.familyNotice=`${t}'s sign-in invitation was copied. Send it to ${a}; it expires in 7 days.`}catch(i){n.familyError=i.message}$()},repairLearnerSignIn:async(e,t,a)=>{var i,s;n.familyError=null,n.familyNotice=null;try{await $a(e,a),n.familyNotice=`${t} is now linked to ${a} as a learner.`,n.families=await dt(),n.familyOverview=await de((s=(i=n.families)==null?void 0:i[0])==null?void 0:s.family_id)}catch(r){n.familyError=r.message}$()},goDashboard:()=>{n.screen="dashboard",ce(),$(),window.scrollTo({top:0,behavior:"auto"})},goCurriculum:()=>{n.screen="curriculum",ce(),$(),window.scrollTo({top:0,behavior:"auto"})},goProfileSelect:()=>{n.screen="profile-select",n.profile=null,ce(),$()},goFamilyOverview:async()=>{var e,t;n.profile=null,n.screen="family-overview",n.familyOverviewLoading=!0,n.familyError=null,$();try{const a=(t=(e=n.families)==null?void 0:e[0])==null?void 0:t.family_id;n.familyOverview=await de(a),n.familyPlayState=await St(a,n.activePackId),n.familyProgress=await Pe(a,n.activePackId)}catch(a){n.familyError=a.message}finally{n.familyOverviewLoading=!1,$()}},startFamilySession:async e=>{var r,o,l;const t=(o=(r=n.families)==null?void 0:r[0])==null?void 0:o.family_id,a=n.languagePacks.find(d=>d.id===n.activePackId),i=((l=n.familyPlayState)==null?void 0:l.completedDays)||0,s=z[Math.min(i,199)];n.familyError=null;try{await ja({familyId:t,packId:a.id,packVersion:a.version,lessonId:s.id,voyageDay:i+1,participantProfileIds:e}),await A(),n.activeLesson=s,n.screen="family-play"}catch(d){n.familyError=d.message}$()},openFamilySession:async()=>{var t,a,i,s,r,o,l;const e=(t=n.familyPlayState)==null?void 0:t.activeSession;if(e){n.familyError=null;try{const d=!!n.linkedLearnerProfileId;!d&&((i=(a=n.families)==null?void 0:a[0])==null?void 0:i.role)!=="learner"&&!n.familyOverview&&(n.familyOverview=await de((r=(s=n.families)==null?void 0:s[0])==null?void 0:r.family_id)),d||((l=(o=n.families)==null?void 0:o[0])==null?void 0:l.role)==="learner"?await La(e.id):e.canTakeControl&&await ct(e.id),await A(),n.activeLesson=z.find(c=>c.id===e.lessonId)||z[e.voyageDay-1],n.screen="family-play"}catch(d){n.familyError=d.message}$()}},refreshFamilySession:async()=>{try{await We(),await A(),n.familyNotice="Connection status refreshed."}catch(e){n.familyError=e.message}$()},claimFamilyController:async()=>{var t,a;const e=(a=(t=n.familyPlayState)==null?void 0:t.activeSession)==null?void 0:a.id;if(e){try{await ct(e),await A()}catch(i){n.familyError=i.message}$()}},handoffFamilyController:async e=>{var a,i;const t=(i=(a=n.familyPlayState)==null?void 0:a.activeSession)==null?void 0:i.id;if(t){try{await Ca(t,e),await A()}catch(s){n.familyError=s.message}$()}},reviewFamilySession:async e=>{var a,i;const t=((i=(a=n.familyOverview)==null?void 0:a.learners)==null?void 0:i.map(s=>s.id))||[];try{await Aa(e,t),await A(),await G.openFamilySession()}catch(s){n.familyError=s.message,$()}},controlFamilySession:async(e,t)=>{var i,s;const a=(s=(i=n.familyPlayState)==null?void 0:i.activeSession)==null?void 0:s.id;if(a){try{await Ia(a,e,t),await A()}catch(r){n.familyError=r.message}$()}},answerFamilyQuiz:async(e,t)=>{var i,s;const a=(s=(i=n.familyPlayState)==null?void 0:i.activeSession)==null?void 0:s.id;if(a){try{await Pa(a,t,e),await A()}catch(r){n.familyError=r.message}$()}},reconcileFamilyQuiz:async e=>{var a,i;const t=(i=(a=n.familyPlayState)==null?void 0:a.activeSession)==null?void 0:i.id;if(t){try{await Ma(t,e),await A()}catch(s){n.familyError=s.message}$()}},finishFamilyChallenge:async e=>{var a,i,s,r,o,l;const t=(i=(a=n.familyPlayState)==null?void 0:a.activeSession)==null?void 0:i.id;if(t){try{n.familyError=null;const d=await Ea(t,e);await A(),d!=null&&d.completed&&(n.screen="family-overview",n.activeLesson=null,n.familyNotice="Everyone finished—the family voyage lesson is complete.",n.familyOverview=await de((r=(s=n.families)==null?void 0:s[0])==null?void 0:r.family_id),n.familyProgress=await Pe((l=(o=n.families)==null?void 0:o[0])==null?void 0:l.family_id,n.activePackId))}catch(d){n.familyError=d.message}$()}},completeFamilySession:async()=>{var t,a,i,s,r,o;const e=(a=(t=n.familyPlayState)==null?void 0:t.activeSession)==null?void 0:a.id;if(e){try{await qa(e),await A(),n.screen="family-overview",n.activeLesson=null,n.familyNotice="Family voyage day completed together.",n.familyOverview=await de((s=(i=n.families)==null?void 0:i[0])==null?void 0:s.family_id),n.familyProgress=await Pe((o=(r=n.families)==null?void 0:r[0])==null?void 0:o.family_id,n.activePackId)}catch(l){n.familyError=l.message}$()}},refresh:()=>{n.profile&&B(n.profile),$()},switchProfile:e=>{ra(e),n.profile=e,Ge(e),B(e),n.screen="dashboard",ce();const t=z.find(a=>!n.completedLessons.includes(a.id));t&&(n.calendarMonth=t.month),$()},openTopic:e=>{n.topicId=e,n.screen="topic",n.activity="flashcards",n.flash={order:null,idx:0,flipped:!1},n.match={tiles:[],selectedIds:[],matchedIds:[]},n.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},n.listen={order:null,idx:0,revealed:!1},n.dialogue={readAs:null,showEn:!0},$()},setActivity:e=>{n.activity=e,n.flash={order:null,idx:0,flipped:!1},n.match={tiles:[],selectedIds:[],matchedIds:[]},n.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},n.listen={order:null,idx:0,revealed:!1},n.dialogue={readAs:null,showEn:!0},$()},startSession:e=>{n.activeLesson=e,n.screen="session",n.session=null,$()},nextSessionStep:()=>{n.session&&(n.session.stepIdx++,n.session.flash={idx:0,flipped:!1},n.session.quiz=null,n.session.match=null,$())},completeLesson:e=>{ma(n.profile,e);const t=n.activeLesson.topicId;t&&n.activeLesson.type==="checkpoint"&&ot(n.profile,t),B(n.profile),G.goDashboard()},markTopicCompleted:e=>{ot(n.profile,e),B(n.profile)},awardStars:e=>{ua(n.profile,e),B(n.profile)},incrementDialogues:()=>{ga(n.profile),B(n.profile)},speak:bi,startMixedReview:()=>{const t=n.completedTopicIds.map(a=>O(a)).filter(Boolean).flatMap(a=>a.items);t.length!==0&&(n.activeLesson={id:"mixed-review",title:"Mixed Review",detail:"Practice from all completed topics",topicId:null,month:0},n.screen="session",n.session={lessonId:"mixed-review",stepIdx:0,steps:[{type:"quiz",title:"Review Quiz",subtitle:"Test your retention",quiz:Y(t,8)},{type:"match",title:"Review Match",subtitle:"Match terms quickly",match:te(t,8)},{type:"done",title:"Review Finished!",subtitle:"You completed your mixed review!"}],flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}},$())}};function ce(){n.activeLesson=null,n.session=null}function B(e){const t=X(e);t&&(n.stars=t.stars,n.streakDays=t.streakDays,n.completedTopicIds=t.completedTopicIds,n.completedLessons=t.completedLessons,n.activityDates=t.activityDates,n.dialoguesDone=t.dialoguesDone,n.isGuide=t.isGuide)}function Ge(e,t=null){const a=t||ea(e),s=n.languagePacks.some(r=>r.id===a)?a:"montenegrin-en";Bt(s),Xt(),ta(e,s),n.activePackId=s}async function A(){var t,a;const e=(a=(t=n.families)==null?void 0:t[0])==null?void 0:a.family_id;if(!e||!n.sessionUser){n.familyPlayState=null;return}n.familyPlayState=await St(e,n.activePackId)}let ge=null,pe=null,qe=null,ue=null,Ce=null,De=null;function Ti(){var t,a;clearInterval(ge),ge=null;const e=(t=n.familyPlayState)==null?void 0:t.activeSession;!e||e.controllingAdult!==((a=n.sessionUser)==null?void 0:a.id)||n.screen!=="family-play"||(ge=setInterval(()=>Da(e.id).catch(()=>{}),45e3))}async function We(){var a,i,s;const e=(a=n.familyPlayState)==null?void 0:a.activeSession,t=!!n.linkedLearnerProfileId||((s=(i=n.families)==null?void 0:i[0])==null?void 0:s.role)==="learner";!e||!t||n.screen!=="family-play"||await _a(e.id)}function gt(){var a,i,s;const e=(a=n.familyPlayState)==null?void 0:a.activeSession,t=!!n.linkedLearnerProfileId||((s=(i=n.families)==null?void 0:i[0])==null?void 0:s.role)==="learner";if(!e||!t||n.screen!=="family-play"){clearInterval(pe),pe=null,qe=null;return}pe&&qe===e.id||(clearInterval(pe),qe=e.id,We().then(A).then($).catch(r=>{n.familyError=`Reconnecting to Family Play: ${r.message}`,$()}),pe=setInterval(()=>We().catch(()=>{}),2e4))}function yt(){var t,a;const e=(a=(t=n.familyPlayState)==null?void 0:t.activeSession)==null?void 0:a.id;if(n.screen!=="family-play"||!e){clearInterval(ue),ue=null,Ce=null;return}ue&&Ce===e||(clearInterval(ue),Ce=e,ue=setInterval(async()=>{try{await A(),n.screen==="family-play"&&$()}catch{}},5e3))}function $(){var r;const e=(r=n.familyPlayState)==null?void 0:r.activeSession,t=e?`${e.id}:${e.currentSegment}`:null,a=F.querySelector(".family-play-panel"),i=(a==null?void 0:a.scrollTop)||0,s=n.screen==="family-play"&&t===De;if(F.innerHTML="",n.screen==="family-play"){Ti(),gt(),yt(),xi(F,n,G);const o=F.querySelector(".family-play-panel");o&&(o.scrollTop=s?i:0),De=t;return}if(De=null,clearInterval(ge),ge=null,gt(),yt(),!n.profile){n.screen==="family-overview"?pi(F,n,G):(n.screen="profile-select",za(F,n,G));return}if(n.screen==="dashboard"){Va(F,n,G);const o=F.querySelector("#calendar-mount");o&&Ua(o,n,()=>{n.calendarMonth=Math.max(0,n.calendarMonth-1),$()},()=>{n.calendarMonth=Math.min(9,n.calendarMonth+1),$()})}else n.screen==="topic"?Mt(F,n,G):n.screen==="session"?ti(F,n,G):n.screen==="curriculum"&&ni(F,n,G)}async function wi(){var t;(t=window.speechSynthesis)==null||t.getVoices(),window.addEventListener("online",()=>{kt(),$()}),window.addEventListener("offline",()=>{$()});const e=sa();if(e){n.profile=e,Ge(e),B(e),n.screen="dashboard";const a=z.find(i=>!n.completedLessons.includes(i.id));n.calendarMonth=a?a.month:0}else n.screen="profile-select";$()}window.addEventListener("DOMContentLoaded",wi);
