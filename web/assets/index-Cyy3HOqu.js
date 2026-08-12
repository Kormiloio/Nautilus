(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const yt={id:"montenegrin-en",targetLanguage:{code:"cnr",name:"Montenegrin",scripts:["Latn","Cyrl"]},supportLanguage:{code:"en",name:"English"},version:"0.1.0",status:"draft"},ht={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},ft=JSON.parse(`[{"id":"family","month":1,"title":"Family","subtitle":"Words for relatives","icon":"Fa","color":"#7dd3fc","note":"Your family speaks a Montenegrin-Dalmatian blend — words like dida and kukumar are your family's words, not mistakes. In Montenegrin, grandpa may also be deda.","items":[{"id":"family-item-001","targetText":"mama","supportText":"mom","emoji":"👩"},{"id":"family-item-002","targetText":"tata","supportText":"dad","emoji":"👨"},{"id":"family-item-003","targetText":"brat","supportText":"brother","emoji":"👦"},{"id":"family-item-004","targetText":"sestra","supportText":"sister","emoji":"👧"},{"id":"family-item-005","targetText":"baka","supportText":"grandma (also: baba)","emoji":"👵"},{"id":"family-item-006","targetText":"dida","supportText":"grandpa (Montenegrin: deda)","emoji":"👴"},{"id":"family-item-007","targetText":"sin","supportText":"son","emoji":"👦"},{"id":"family-item-008","targetText":"kćerka","supportText":"daughter (also: kći)","emoji":"👧"},{"id":"family-item-009","targetText":"porodica","supportText":"family","emoji":"👪"},{"id":"family-item-010","targetText":"roditelji","supportText":"parents"},{"id":"family-item-011","targetText":"dijete / djeca","supportText":"child / children","emoji":"👶"},{"id":"family-item-012","targetText":"ko","supportText":"who"}]},{"id":"greetings","month":1,"title":"Greetings","subtitle":"Say hello & introduce yourself","icon":"Zd","color":"#f472b6","items":[{"id":"greetings-item-001","targetText":"Zdravo","supportText":"Hello"},{"id":"greetings-item-002","targetText":"Dobar dan","supportText":"Good afternoon"},{"id":"greetings-item-003","targetText":"Dobro jutro","supportText":"Good morning"},{"id":"greetings-item-004","targetText":"Hvala","supportText":"Thank you"},{"id":"greetings-item-005","targetText":"Molim","supportText":"Please / You're welcome"},{"id":"greetings-item-006","targetText":"Da","supportText":"Yes"},{"id":"greetings-item-007","targetText":"Ne","supportText":"No"},{"id":"greetings-item-008","targetText":"Doviđenja","supportText":"Goodbye"},{"id":"greetings-item-009","targetText":"Ćao","supportText":"Bye / Hi (informal)"},{"id":"greetings-item-010","targetText":"Izvini","supportText":"Sorry / Excuse me"},{"id":"greetings-item-011","targetText":"Kako se zoveš?","supportText":"What's your name?"},{"id":"greetings-item-012","targetText":"Zovem se...","supportText":"My name is..."},{"id":"greetings-item-013","targetText":"Drago mi je","supportText":"Nice to meet you"}],"dialogue":{"roles":["You","New Friend"],"lines":[{"id":"greetings-dialogue-001","targetText":"Dobar dan! Kako se zoveš?","supportText":"Good afternoon! What is your name?","role":"You"},{"id":"greetings-dialogue-002","targetText":"Zovem se Mia. A ti?","supportText":"My name is Mia. And you?","role":"New Friend"},{"id":"greetings-dialogue-003","targetText":"Zovem se Jake. Drago mi je!","supportText":"My name is Jake. Nice to meet you!","role":"You"},{"id":"greetings-dialogue-004","targetText":"Drago mi je! Doviđenja.","supportText":"Nice to meet you too! Goodbye.","role":"New Friend"}]}},{"id":"numbers","month":2,"title":"Numbers","subtitle":"Counting 1–100","icon":"123","color":"#a3e635","items":[{"id":"numbers-item-001","targetText":"jedan","supportText":"one (1)"},{"id":"numbers-item-002","targetText":"dva","supportText":"two (2)"},{"id":"numbers-item-003","targetText":"tri","supportText":"three (3)"},{"id":"numbers-item-004","targetText":"četiri","supportText":"four (4)"},{"id":"numbers-item-005","targetText":"pet","supportText":"five (5)"},{"id":"numbers-item-006","targetText":"šest","supportText":"six (6)"},{"id":"numbers-item-007","targetText":"sedam","supportText":"seven (7)"},{"id":"numbers-item-008","targetText":"osam","supportText":"eight (8)"},{"id":"numbers-item-009","targetText":"devet","supportText":"nine (9)"},{"id":"numbers-item-010","targetText":"deset","supportText":"ten (10)"},{"id":"numbers-item-011","targetText":"dvadeset","supportText":"twenty (20)"},{"id":"numbers-item-012","targetText":"trideset","supportText":"thirty (30)"},{"id":"numbers-item-013","targetText":"pedeset","supportText":"fifty (50)"},{"id":"numbers-item-014","targetText":"sto","supportText":"one hundred (100)"}]},{"id":"colors","month":2,"title":"Colors","subtitle":"boje","icon":"Bo","color":"#7dd3fc","items":[{"id":"colors-item-001","targetText":"crvena","supportText":"red","emoji":"🔴"},{"id":"colors-item-002","targetText":"plava","supportText":"blue","emoji":"🔵"},{"id":"colors-item-003","targetText":"zelena","supportText":"green","emoji":"🟢"},{"id":"colors-item-004","targetText":"žuta","supportText":"yellow","emoji":"🟡"},{"id":"colors-item-005","targetText":"crna","supportText":"black","emoji":"⚫"},{"id":"colors-item-006","targetText":"bijela","supportText":"white","emoji":"⚪"}]},{"id":"drinks","month":3,"title":"Drinks","subtitle":"piće","icon":"Pi","color":"#f472b6","items":[{"id":"drinks-item-001","targetText":"voda","supportText":"water","emoji":"💧"},{"id":"drinks-item-002","targetText":"kafa","supportText":"coffee","emoji":"☕"},{"id":"drinks-item-003","targetText":"čaj","supportText":"tea","emoji":"🍵"},{"id":"drinks-item-004","targetText":"sok","supportText":"juice","emoji":"🧃"},{"id":"drinks-item-005","targetText":"mlijeko","supportText":"milk","emoji":"🥛"},{"id":"drinks-item-006","targetText":"pivo","supportText":"beer","emoji":"🍺"},{"id":"drinks-item-007","targetText":"vino","supportText":"wine","emoji":"🍷"},{"id":"drinks-item-008","targetText":"rakija","supportText":"rakija (homemade brandy)","emoji":"🥃"}]},{"id":"food","month":3,"title":"Food","subtitle":"hrana","icon":"Hr","color":"#a3e635","items":[{"id":"food-item-001","targetText":"kruh","supportText":"bread (also: hljeb)","emoji":"🍞"},{"id":"food-item-002","targetText":"sir","supportText":"cheese","emoji":"🧀"},{"id":"food-item-003","targetText":"meso","supportText":"meat","emoji":"🥩"},{"id":"food-item-004","targetText":"riba","supportText":"fish","emoji":"🐟"},{"id":"food-item-005","targetText":"jaje / jaja","supportText":"egg / eggs","emoji":"🥚"},{"id":"food-item-006","targetText":"salata","supportText":"salad","emoji":"🥗"},{"id":"food-item-007","targetText":"supa / čorba","supportText":"soup","emoji":"🍲"},{"id":"food-item-008","targetText":"sladoled","supportText":"ice cream","emoji":"🍦"},{"id":"food-item-009","targetText":"jabuka","supportText":"apple","emoji":"🍎"}]},{"id":"veg","month":4,"title":"Vegetables & Market","subtitle":"pijaca","icon":"Pj","color":"#7dd3fc","items":[{"id":"veg-item-001","targetText":"paradajz","supportText":"tomato","emoji":"🍅"},{"id":"veg-item-002","targetText":"kukumar","supportText":"cucumber","emoji":"🥒"},{"id":"veg-item-003","targetText":"krompir","supportText":"potato","emoji":"🥔"},{"id":"veg-item-004","targetText":"luk","supportText":"onion","emoji":"🧅"},{"id":"veg-item-005","targetText":"bijeli luk","supportText":"garlic (literally 'white onion')","emoji":"🧄"},{"id":"veg-item-006","targetText":"paprika","supportText":"pepper","emoji":"🫑"},{"id":"veg-item-007","targetText":"mrkva","supportText":"carrot","emoji":"🥕"},{"id":"veg-item-008","targetText":"kupus","supportText":"cabbage","emoji":"🥬"}]},{"id":"cafe","month":4,"title":"At a Café","subtitle":"Order like a local","icon":"Ka","color":"#f472b6","note":"Hoću = I want, Neću = I don't want.\\nWords ending in -a often change to -u after these: kafa → Hoću kafu, voda → Hoću vodu.","items":[{"id":"cafe-item-001","targetText":"Dobar dan!","supportText":"Good afternoon! (greeting)"},{"id":"cafe-item-002","targetText":"Izvolite?","supportText":"What can I get you?"},{"id":"cafe-item-003","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please."},{"id":"cafe-item-004","targetText":"Još nešto?","supportText":"Anything else?"},{"id":"cafe-item-005","targetText":"Hvala","supportText":"Thank you"},{"id":"cafe-item-006","targetText":"Račun, molim.","supportText":"The bill, please."}],"dialogue":{"roles":["Waiter","Customer"],"lines":[{"id":"cafe-dialogue-001","targetText":"Dobar dan! Izvolite?","supportText":"Good afternoon! What can I get you?","role":"Waiter"},{"id":"cafe-dialogue-002","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please.","role":"Customer"},{"id":"cafe-dialogue-003","targetText":"Još nešto?","supportText":"Anything else?","role":"Waiter"},{"id":"cafe-dialogue-004","targetText":"Hoću i vodu. Hvala.","supportText":"I'll also have water. Thanks.","role":"Customer"},{"id":"cafe-dialogue-005","targetText":"Izvolite.","supportText":"Here you go.","role":"Waiter"},{"id":"cafe-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"Customer"},{"id":"cafe-dialogue-007","targetText":"Račun, molim.","supportText":"The bill, please.","role":"Customer"},{"id":"cafe-dialogue-008","targetText":"Doviđenja!","supportText":"Goodbye!","role":"Waiter"}]}},{"id":"talkfamily","month":5,"title":"Talking About Family","subtitle":"\\"my brother\\", \\"I have a sister\\"","icon":"Mo","color":"#a3e635","items":[{"id":"talkfamily-item-001","targetText":"moj","supportText":"my (masculine)"},{"id":"talkfamily-item-002","targetText":"moja","supportText":"my (feminine)"},{"id":"talkfamily-item-003","targetText":"moj brat","supportText":"my brother"},{"id":"talkfamily-item-004","targetText":"moja sestra","supportText":"my sister"},{"id":"talkfamily-item-005","targetText":"moje dijete","supportText":"my child"},{"id":"talkfamily-item-006","targetText":"Imam brata.","supportText":"I have a brother."},{"id":"talkfamily-item-007","targetText":"Imam sestru.","supportText":"I have a sister."},{"id":"talkfamily-item-008","targetText":"Kako se zove tvoj brat?","supportText":"What's your brother's name?"},{"id":"talkfamily-item-009","targetText":"Moj brat se zove Jake.","supportText":"My brother is named Jake."},{"id":"talkfamily-item-010","targetText":"Ovo je moja porodica.","supportText":"This is my family."},{"id":"talkfamily-item-011","targetText":"A ko je ovo?","supportText":"And who is this?"}]},{"id":"aboutme","month":5,"title":"About Me","subtitle":"Simple sentences about yourself","icon":"Ja","color":"#7dd3fc","items":[{"id":"aboutme-item-001","targetText":"Ja se zovem ___.","supportText":"My name is ___."},{"id":"aboutme-item-002","targetText":"Koliko imaš godina?","supportText":"How old are you?"},{"id":"aboutme-item-003","targetText":"Imam ___ godina.","supportText":"I am ___ years old."},{"id":"aboutme-item-004","targetText":"Volim čokoladu.","supportText":"I love chocolate."},{"id":"aboutme-item-005","targetText":"Idem u školu.","supportText":"I am going to school."},{"id":"aboutme-item-006","targetText":"Idem na plažu.","supportText":"I'm going to the beach."},{"id":"aboutme-item-007","targetText":"Gdje živiš?","supportText":"Where do you live?"},{"id":"aboutme-item-008","targetText":"Živim u ___.","supportText":"I live in ___."}]},{"id":"days","month":6,"title":"Days & Time","subtitle":"dani u sedmici","icon":"Dn","color":"#f472b6","items":[{"id":"days-item-001","targetText":"ponedjeljak","supportText":"Monday"},{"id":"days-item-002","targetText":"utorak","supportText":"Tuesday"},{"id":"days-item-003","targetText":"srijeda","supportText":"Wednesday"},{"id":"days-item-004","targetText":"četvrtak","supportText":"Thursday"},{"id":"days-item-005","targetText":"petak","supportText":"Friday"},{"id":"days-item-006","targetText":"subota","supportText":"Saturday"},{"id":"days-item-007","targetText":"nedjelja","supportText":"Sunday"},{"id":"days-item-008","targetText":"danas","supportText":"today"},{"id":"days-item-009","targetText":"sutra","supportText":"tomorrow"},{"id":"days-item-010","targetText":"juče","supportText":"yesterday"}]},{"id":"outabout","month":6,"title":"Out & About","subtitle":"Travel phrases","icon":"Va","color":"#a3e635","items":[{"id":"outabout-item-001","targetText":"Gdje je...?","supportText":"Where is...?"},{"id":"outabout-item-002","targetText":"Koliko košta?","supportText":"How much does it cost?"},{"id":"outabout-item-003","targetText":"Ne razumijem.","supportText":"I don't understand."},{"id":"outabout-item-004","targetText":"Govorite li engleski?","supportText":"Do you speak English?"},{"id":"outabout-item-005","targetText":"Molim vas.","supportText":"Please (formal)"},{"id":"outabout-item-006","targetText":"Izvinite.","supportText":"Excuse me (formal)"},{"id":"outabout-item-007","targetText":"lijevo","supportText":"left"},{"id":"outabout-item-008","targetText":"desno","supportText":"right"},{"id":"outabout-item-009","targetText":"plaža","supportText":"beach"},{"id":"outabout-item-010","targetText":"more","supportText":"sea"}]},{"id":"weather","month":7,"title":"Weather","subtitle":"vrijeme","icon":"We","color":"#7dd3fc","items":[{"id":"weather-item-001","targetText":"sunce","supportText":"sun","emoji":"☀️"},{"id":"weather-item-002","targetText":"kiša","supportText":"rain","emoji":"🌧️"},{"id":"weather-item-003","targetText":"vjetar","supportText":"wind","emoji":"💨"},{"id":"weather-item-004","targetText":"oblačno","supportText":"cloudy","emoji":"☁️"},{"id":"weather-item-005","targetText":"toplo","supportText":"warm"},{"id":"weather-item-006","targetText":"hladno","supportText":"cold","emoji":"🥶"},{"id":"weather-item-007","targetText":"Kakvo je vrijeme?","supportText":"What's the weather like?"},{"id":"weather-item-008","targetText":"Sunčano je.","supportText":"It's sunny."}]},{"id":"emotions","month":7,"title":"Emotions & Feelings","subtitle":"osjećanja","icon":"Em","color":"#f472b6","items":[{"id":"emotions-item-001","targetText":"sretan / sretna","supportText":"happy"},{"id":"emotions-item-002","targetText":"tužan / tužna","supportText":"sad"},{"id":"emotions-item-003","targetText":"umoran / umorna","supportText":"tired"},{"id":"emotions-item-004","targetText":"gladan / gladna","supportText":"hungry"},{"id":"emotions-item-005","targetText":"žedan / žedna","supportText":"thirsty"},{"id":"emotions-item-006","targetText":"uzbuđen / uzbuđena","supportText":"excited"},{"id":"emotions-item-007","targetText":"Kako se osjećaš?","supportText":"How do you feel?"}]},{"id":"house","month":8,"title":"House & Home","subtitle":"kuća","icon":"Ho","color":"#a3e635","items":[{"id":"house-item-001","targetText":"kuća","supportText":"house","emoji":"🏠"},{"id":"house-item-002","targetText":"soba","supportText":"room"},{"id":"house-item-003","targetText":"kuhinja","supportText":"kitchen","emoji":"🍳"},{"id":"house-item-004","targetText":"kupatilo","supportText":"bathroom","emoji":"🚿"},{"id":"house-item-005","targetText":"krevet","supportText":"bed","emoji":"🛏️"},{"id":"house-item-006","targetText":"vrata","supportText":"door","emoji":"🚪"},{"id":"house-item-007","targetText":"prozor","supportText":"window","emoji":"🪟"},{"id":"house-item-008","targetText":"dvorište","supportText":"yard","emoji":"🌳"}]},{"id":"clothes","month":8,"title":"Clothes","subtitle":"odjeća","icon":"Cl","color":"#7dd3fc","items":[{"id":"clothes-item-001","targetText":"majica","supportText":"t-shirt","emoji":"👕"},{"id":"clothes-item-002","targetText":"pantalone","supportText":"pants","emoji":"👖"},{"id":"clothes-item-003","targetText":"haljina","supportText":"dress","emoji":"👗"},{"id":"clothes-item-004","targetText":"cipele","supportText":"shoes","emoji":"👟"},{"id":"clothes-item-005","targetText":"jakna","supportText":"jacket","emoji":"🧥"},{"id":"clothes-item-006","targetText":"kupaći kostim","supportText":"swimsuit","emoji":"🩱"},{"id":"clothes-item-007","targetText":"šešir","supportText":"hat","emoji":"👒"}]},{"id":"body","month":9,"title":"Body & Health","subtitle":"tijelo","icon":"Bd","color":"#f472b6","items":[{"id":"body-item-001","targetText":"glava","supportText":"head"},{"id":"body-item-002","targetText":"ruka","supportText":"hand / arm"},{"id":"body-item-003","targetText":"noga","supportText":"leg / foot"},{"id":"body-item-004","targetText":"stomak","supportText":"stomach"},{"id":"body-item-005","targetText":"Boli me glava.","supportText":"My head hurts."},{"id":"body-item-006","targetText":"Dobro sam.","supportText":"I'm fine."}]},{"id":"shopping","month":9,"title":"Shopping","subtitle":"kupovina","icon":"Sh","color":"#a3e635","items":[{"id":"shopping-item-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?"},{"id":"shopping-item-002","targetText":"Koliko košta ovo?","supportText":"How much is this?"},{"id":"shopping-item-003","targetText":"Hoću da kupim...","supportText":"I want to buy..."},{"id":"shopping-item-004","targetText":"Imate li...?","supportText":"Do you have...?"},{"id":"shopping-item-005","targetText":"Samo gledam.","supportText":"I'm just looking."},{"id":"shopping-item-006","targetText":"skupo","supportText":"expensive"},{"id":"shopping-item-007","targetText":"jeftino","supportText":"cheap"}],"dialogue":{"roles":["Shopkeeper","You"],"lines":[{"id":"shopping-dialogue-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?","role":"Shopkeeper"},{"id":"shopping-dialogue-002","targetText":"Koliko košta ovo?","supportText":"How much is this?","role":"You"},{"id":"shopping-dialogue-003","targetText":"Deset eura.","supportText":"Ten euros.","role":"Shopkeeper"},{"id":"shopping-dialogue-004","targetText":"To je malo skupo. Sedam?","supportText":"That's a bit expensive. Seven?","role":"You"},{"id":"shopping-dialogue-005","targetText":"Dobro, sedam.","supportText":"Okay, seven.","role":"Shopkeeper"},{"id":"shopping-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"You"}]}},{"id":"directions","month":10,"title":"Directions & Places","subtitle":"pravci","icon":"Di","color":"#7dd3fc","items":[{"id":"directions-item-001","targetText":"prodavnica","supportText":"store"},{"id":"directions-item-002","targetText":"banka","supportText":"bank"},{"id":"directions-item-003","targetText":"bolnica","supportText":"hospital"},{"id":"directions-item-004","targetText":"blizu","supportText":"near"},{"id":"directions-item-005","targetText":"daleko","supportText":"far"},{"id":"directions-item-006","targetText":"Idi pravo.","supportText":"Go straight."},{"id":"directions-item-007","targetText":"Skreni lijevo.","supportText":"Turn left."},{"id":"directions-item-008","targetText":"Skreni desno.","supportText":"Turn right."}]},{"id":"beach","month":10,"title":"Beach & Summer","subtitle":"plaža i ljeto","icon":"Bc","color":"#f472b6","items":[{"id":"beach-item-001","targetText":"pijesak","supportText":"sand"},{"id":"beach-item-002","targetText":"talas","supportText":"wave"},{"id":"beach-item-003","targetText":"kupanje","supportText":"swimming"},{"id":"beach-item-004","targetText":"peškir","supportText":"towel"},{"id":"beach-item-005","targetText":"sunčane naočare","supportText":"sunglasses"},{"id":"beach-item-006","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!"}],"dialogue":{"roles":["Friend","You"],"lines":[{"id":"beach-dialogue-001","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!","role":"Friend"},{"id":"beach-dialogue-002","targetText":"Odlično! Gdje su moje naočare?","supportText":"Great! Where are my sunglasses?","role":"You"},{"id":"beach-dialogue-003","targetText":"Evo ih, na peškiru.","supportText":"Here they are, on the towel.","role":"Friend"},{"id":"beach-dialogue-004","targetText":"Hvala! Je li voda hladna?","supportText":"Thanks! Is the water cold?","role":"You"},{"id":"beach-dialogue-005","targetText":"Ne, topla je!","supportText":"No, it's warm!","role":"Friend"}]}},{"id":"time","month":11,"title":"Telling Time","subtitle":"sati","icon":"Tm","color":"#a3e635","items":[{"id":"time-item-001","targetText":"Koliko je sati?","supportText":"What time is it?"},{"id":"time-item-002","targetText":"sat","supportText":"hour / o'clock"},{"id":"time-item-003","targetText":"minut","supportText":"minute"},{"id":"time-item-004","targetText":"podne","supportText":"noon"},{"id":"time-item-005","targetText":"ponoć","supportText":"midnight"},{"id":"time-item-006","targetText":"rano","supportText":"early"},{"id":"time-item-007","targetText":"kasno","supportText":"late"}]},{"id":"hobbies","month":11,"title":"Hobbies","subtitle":"hobiji","icon":"Hb","color":"#7dd3fc","items":[{"id":"hobbies-item-001","targetText":"plivati","supportText":"to swim","emoji":"🏊"},{"id":"hobbies-item-002","targetText":"čitati","supportText":"to read","emoji":"📖"},{"id":"hobbies-item-003","targetText":"igrati fudbal","supportText":"to play soccer","emoji":"⚽"},{"id":"hobbies-item-004","targetText":"slušati muziku","supportText":"to listen to music","emoji":"🎧"},{"id":"hobbies-item-005","targetText":"crtati","supportText":"to draw","emoji":"🎨"},{"id":"hobbies-item-006","targetText":"Šta voliš da radiš?","supportText":"What do you like to do?"}]},{"id":"travel","month":12,"title":"Travel Essentials","subtitle":"putovanje","icon":"Tr","color":"#f472b6","items":[{"id":"travel-item-001","targetText":"aerodrom","supportText":"airport","emoji":"✈️"},{"id":"travel-item-002","targetText":"pasoš","supportText":"passport","emoji":"🛂"},{"id":"travel-item-003","targetText":"kofer","supportText":"suitcase","emoji":"🧳"},{"id":"travel-item-004","targetText":"avion","supportText":"plane","emoji":"✈️"},{"id":"travel-item-005","targetText":"karta","supportText":"ticket","emoji":"🎫"},{"id":"travel-item-006","targetText":"Idemo u Crnu Goru!","supportText":"We're going to Montenegro!"}]},{"id":"capstone","month":12,"title":"Arriving in Montenegro","subtitle":"Put it all together","icon":"MG","color":"#a3e635","items":[{"id":"capstone-item-001","targetText":"Dobro došli!","supportText":"Welcome!"},{"id":"capstone-item-002","targetText":"Prijatan boravak.","supportText":"Enjoy your stay."},{"id":"capstone-item-003","targetText":"Jedva čekam.","supportText":"I can't wait."},{"id":"capstone-item-004","targetText":"Napokon smo ovdje!","supportText":"We're finally here!"}],"dialogue":{"roles":["Agent","You"],"lines":[{"id":"capstone-dialogue-001","targetText":"Dobro došli u Crnu Goru! Pasoš, molim.","supportText":"Welcome to Montenegro! Passport, please.","role":"Agent"},{"id":"capstone-dialogue-002","targetText":"Izvolite.","supportText":"Here you go.","role":"You"},{"id":"capstone-dialogue-003","targetText":"Hvala. Prijatan boravak!","supportText":"Thank you. Enjoy your stay!","role":"Agent"},{"id":"capstone-dialogue-004","targetText":"Hvala! Jedva čekam da vidim porodicu.","supportText":"Thank you! I can't wait to see my family.","role":"You"}]}},{"id":"verbs1","title":"Verbs: To Be & To Have","subtitle":"biti, imati","icon":"V1","color":"#7dd3fc","items":[{"id":"verbs1-item-001","targetText":"ja sam","supportText":"I am"},{"id":"verbs1-item-002","targetText":"ti si","supportText":"you are"},{"id":"verbs1-item-003","targetText":"on/ona je","supportText":"he/she is"},{"id":"verbs1-item-004","targetText":"mi smo","supportText":"we are"},{"id":"verbs1-item-005","targetText":"oni su","supportText":"they are"},{"id":"verbs1-item-006","targetText":"ja imam","supportText":"I have"},{"id":"verbs1-item-007","targetText":"ti imaš","supportText":"you have"},{"id":"verbs1-item-008","targetText":"mi imamo","supportText":"we have"}]},{"id":"adjectives","title":"Describing Things","subtitle":"pridjevi","icon":"Ad","color":"#f472b6","items":[{"id":"adjectives-item-001","targetText":"velik / velika","supportText":"big"},{"id":"adjectives-item-002","targetText":"mali / mala","supportText":"small"},{"id":"adjectives-item-003","targetText":"lijep / lijepa","supportText":"beautiful"},{"id":"adjectives-item-004","targetText":"ružan / ružna","supportText":"ugly"},{"id":"adjectives-item-005","targetText":"dobar / dobra","supportText":"good"},{"id":"adjectives-item-006","targetText":"loš / loša","supportText":"bad"},{"id":"adjectives-item-007","targetText":"nov / nova","supportText":"new"},{"id":"adjectives-item-008","targetText":"star / stara","supportText":"old"}]},{"id":"questionwords","title":"Question Words","subtitle":"šta, ko, gdje...","icon":"Qw","color":"#a3e635","items":[{"id":"questionwords-item-001","targetText":"šta","supportText":"what"},{"id":"questionwords-item-002","targetText":"ko","supportText":"who"},{"id":"questionwords-item-003","targetText":"gdje","supportText":"where"},{"id":"questionwords-item-004","targetText":"kada","supportText":"when"},{"id":"questionwords-item-005","targetText":"zašto","supportText":"why"},{"id":"questionwords-item-006","targetText":"kako","supportText":"how"},{"id":"questionwords-item-007","targetText":"koji / koja","supportText":"which"}]},{"id":"plans","title":"Making Plans","subtitle":"Hoćeš li..., Vidimo se!","icon":"Pl","color":"#7dd3fc","items":[{"id":"plans-item-001","targetText":"Hoćeš li...?","supportText":"Do you want to...?"},{"id":"plans-item-002","targetText":"Možemo li...?","supportText":"Can we...?"},{"id":"plans-item-003","targetText":"Kada se vidimo?","supportText":"When do we meet?"},{"id":"plans-item-004","targetText":"Vidimo se sutra.","supportText":"See you tomorrow."},{"id":"plans-item-005","targetText":"Dogovoreno!","supportText":"It's a deal! / Agreed!"}]},{"id":"smalltalk","title":"Small Talk","subtitle":"Getting to know people","icon":"St","color":"#f472b6","items":[{"id":"smalltalk-item-001","targetText":"Šta radiš?","supportText":"What are you doing?"},{"id":"smalltalk-item-002","targetText":"Odakle si?","supportText":"Where are you from?"},{"id":"smalltalk-item-003","targetText":"Koliko dugo si ovdje?","supportText":"How long have you been here?"},{"id":"smalltalk-item-004","targetText":"Sviđa mi se Crna Gora.","supportText":"I like Montenegro."},{"id":"smalltalk-item-005","targetText":"Ovo mi je prvi put ovdje.","supportText":"This is my first time here."}]},{"id":"pasttense","title":"Talking About the Past","subtitle":"bio sam, jučer...","icon":"Pt","color":"#a3e635","items":[{"id":"pasttense-item-001","targetText":"bio sam / bila sam","supportText":"I was"},{"id":"pasttense-item-002","targetText":"Jučer sam...","supportText":"Yesterday I..."},{"id":"pasttense-item-003","targetText":"Prošle godine...","supportText":"Last year..."},{"id":"pasttense-item-004","targetText":"Bilo je zabavno!","supportText":"It was fun!"},{"id":"pasttense-item-005","targetText":"Vidio sam / Vidjela sam","supportText":"I saw"}]},{"id":"futuretense","title":"Talking About the Future","subtitle":"sutra ću, sledeće godine...","icon":"Ft","color":"#7dd3fc","items":[{"id":"futuretense-item-001","targetText":"Sutra ću...","supportText":"Tomorrow I will..."},{"id":"futuretense-item-002","targetText":"Sledeće godine ćemo...","supportText":"Next year we will..."},{"id":"futuretense-item-003","targetText":"Vidjećemo se opet.","supportText":"We'll see each other again."},{"id":"futuretense-item-004","targetText":"Jedva čekam ljeto.","supportText":"I can't wait for summer."}]},{"id":"restaurant","title":"At a Restaurant","subtitle":"Beyond the café","icon":"Rs","color":"#f472b6","items":[{"id":"restaurant-item-001","targetText":"meni","supportText":"menu"},{"id":"restaurant-item-002","targetText":"konobar / konobarica","supportText":"waiter / waitress"},{"id":"restaurant-item-003","targetText":"Preporučujete li nešto?","supportText":"Do you recommend something?"},{"id":"restaurant-item-004","targetText":"Za piće?","supportText":"For drinks?"},{"id":"restaurant-item-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!"},{"id":"restaurant-item-006","targetText":"Bilo je ukusno.","supportText":"It was delicious."}],"dialogue":{"roles":["Waiter","You"],"lines":[{"id":"restaurant-dialogue-001","targetText":"Dobro veče! Izvolite meni.","supportText":"Good evening! Here is the menu.","role":"Waiter"},{"id":"restaurant-dialogue-002","targetText":"Hvala. Preporučujete li nešto?","supportText":"Thanks. Do you recommend something?","role":"You"},{"id":"restaurant-dialogue-003","targetText":"Riba je odlična danas.","supportText":"The fish is excellent today.","role":"Waiter"},{"id":"restaurant-dialogue-004","targetText":"Dobro, hoću ribu, molim.","supportText":"Okay, I'll have the fish, please.","role":"You"},{"id":"restaurant-dialogue-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!","role":"Waiter"},{"id":"restaurant-dialogue-006","targetText":"Hvala, bilo je ukusno!","supportText":"Thanks, it was delicious!","role":"You"}]}},{"id":"gathering","title":"Family Gathering","subtitle":"A full conversation at the table","icon":"Fg","color":"#a3e635","items":[{"id":"gathering-item-001","targetText":"Sjedi ovdje.","supportText":"Sit here."},{"id":"gathering-item-002","targetText":"Poslužite se.","supportText":"Help yourselves."},{"id":"gathering-item-003","targetText":"Živjeli!","supportText":"Cheers!"},{"id":"gathering-item-004","targetText":"Hvala na ručku.","supportText":"Thank you for lunch."},{"id":"gathering-item-005","targetText":"Bilo je divno vidjeti vas.","supportText":"It was wonderful to see you."}],"dialogue":{"roles":["Baka","You"],"lines":[{"id":"gathering-dialogue-001","targetText":"Sjedi ovdje, dijete. Poslužite se!","supportText":"Sit here, child. Help yourselves!","role":"Baka"},{"id":"gathering-dialogue-002","targetText":"Hvala, bako! Miriše odlično.","supportText":"Thanks, grandma! It smells great.","role":"You"},{"id":"gathering-dialogue-003","targetText":"Živjeli!","supportText":"Cheers!","role":"Baka"},{"id":"gathering-dialogue-004","targetText":"Živjeli! Hvala na ručku, bilo je divno.","supportText":"Cheers! Thank you for lunch, it was wonderful.","role":"You"}]}}]`),vt=[{id:"alphabet",title:"Alphabet",subtitle:"Latin & Cyrillic letters",icon:"Aa",color:"#7dd3fc",items:[{id:"alphabet-item-001",targetText:"A a",supportText:'Cyrillic: А а — "ah", as in auto (car)'},{id:"alphabet-item-002",targetText:"B b",supportText:'Cyrillic: Б б — "b", as in brat (brother)'},{id:"alphabet-item-003",targetText:"C c",supportText:'Cyrillic: Ц ц — "ts", as in cvijet (flower)'},{id:"alphabet-item-004",targetText:"Č č",supportText:'Cyrillic: Ч ч — hard "ch", as in čokolada'},{id:"alphabet-item-005",targetText:"Ć ć",supportText:'Cyrillic: Ћ ћ — soft "ch", as in ćevapi'},{id:"alphabet-item-006",targetText:"D d",supportText:'Cyrillic: Д д — "d", as in dijete'},{id:"alphabet-item-007",targetText:"Đ đ",supportText:'Cyrillic: Ђ ђ — soft "j", as in đak'},{id:"alphabet-item-008",targetText:"Dž dž",supportText:'Cyrillic: Џ џ — hard "j", as in džak'},{id:"alphabet-item-009",targetText:"Lj lj",supportText:'Cyrillic: Љ љ — "ly", as in ljubav'},{id:"alphabet-item-010",targetText:"Nj nj",supportText:'Cyrillic: Њ њ — "ny", as in njiva'},{id:"alphabet-item-011",targetText:"Š š",supportText:'Cyrillic: Ш ш — "sh", as in šuma'},{id:"alphabet-item-012",targetText:"Ž ž",supportText:'Cyrillic: Ж ж — "zh", as in žena'}]}],ke={languagePack:yt,curriculum:ht,topics:ft,bonusTopics:vt},xt=[["family","Family","People in your family",[["familja","family"],["nëna","mother"],["babai","father"],["motra","sister"],["vëllai","brother"]]],["greetings","Greetings","Say hello and introduce yourself",[["Përshëndetje!","Hello!"],["Mirëmëngjes!","Good morning!"],["Mirëmbrëma!","Good evening!"],["Si je?","How are you?"],["Mirupafshim!","Goodbye!"]]],["numbers","Numbers","Start counting",[["një","one"],["dy","two"],["tre","three"],["katër","four"],["pesë","five"]]],["colors","Colors","Describe colors",[["i kuq","red"],["blu","blue"],["i gjelbër","green"],["i verdhë","yellow"],["i zi","black"]]],["drinks","Drinks","Everyday drinks",[["ujë","water"],["kafe","coffee"],["çaj","tea"],["qumësht","milk"],["lëng","juice"]]],["food","Food","Everyday foods",[["bukë","bread"],["djathë","cheese"],["mish","meat"],["peshk","fish"],["fruta","fruit"]]],["veg","Vegetables & Market","Shop at the market",[["domate","tomato"],["kastravec","cucumber"],["patate","potato"],["qepë","onion"],["spec","pepper"]]],["cafe","At a Café","Order politely",[["Një kafe, ju lutem.","A coffee, please."],["A keni çaj?","Do you have tea?"],["Pa sheqer.","Without sugar."],["Sa kushton?","How much is it?"],["Faturën, ju lutem.","The bill, please."]]],["talkfamily","Talking About Family","Describe your family",[["Kjo është familja ime.","This is my family."],["Kam një motër.","I have a sister."],["Kam një vëlla.","I have a brother."],["Nëna ime quhet Ana.","My mother is named Ana."],["Ne jetojmë bashkë.","We live together."]]],["aboutme","About Me","Simple sentences about yourself",[["Unë quhem Mia.","My name is Mia."],["Jam trembëdhjetë vjeç.","I am thirteen years old."],["Jetoj në Amerikë.","I live in America."],["Më pëlqen muzika.","I like music."],["Po mësoj shqip.","I am learning Albanian."]]],["days","Days & Time","Days of the week",[["e hënë","Monday"],["e martë","Tuesday"],["e mërkurë","Wednesday"],["e enjte","Thursday"],["e premte","Friday"]]],["outabout","Out & About","Useful phrases away from home",[["Ku është banja?","Where is the bathroom?"],["Nuk e kuptoj.","I do not understand."],["Flisni anglisht?","Do you speak English?"],["Më ndihmoni, ju lutem.","Please help me."],["Faleminderit shumë.","Thank you very much."]]],["weather","Weather","Talk about the weather",[["Është ngrohtë.","It is warm."],["Është ftohtë.","It is cold."],["Po bie shi.","It is raining."],["Ka diell.","It is sunny."],["Fryn erë.","It is windy."]]],["emotions","Emotions & Feelings","Say how you feel",[["Jam i lumtur.","I am happy."],["Jam e lodhur.","I am tired."],["Jam i trishtuar.","I am sad."],["Kam frikë.","I am afraid."],["Jam mirë.","I am well."]]],["house","House & Home","Things around the home",[["shtëpi","house"],["dhomë","room"],["kuzhinë","kitchen"],["derë","door"],["dritare","window"]]],["clothes","Clothes","What people wear",[["këmishë","shirt"],["pantallona","trousers"],["fustan","dress"],["këpucë","shoes"],["xhaketë","jacket"]]],["body","Body & Health","Body and basic health",[["kokë","head"],["dorë","hand"],["këmbë","leg"],["Më dhemb koka.","My head hurts."],["Kam nevojë për një mjek.","I need a doctor."]]],["shopping","Shopping","Buy what you need",[["Dua këtë.","I want this."],["Sa kushton kjo?","How much does this cost?"],["Është shumë shtrenjtë.","It is too expensive."],["A keni një madhësi tjetër?","Do you have another size?"],["Do të paguaj me kartë.","I will pay by card."]]],["directions","Directions & Places","Find your way",[["majtas","left"],["djathtas","right"],["drejt","straight ahead"],["afër","near"],["larg","far"]]],["beach","Beach & Summer","Enjoy a summer day",[["det","sea"],["plazh","beach"],["diell","sun"],["not","swimming"],["krem kundër diellit","sunscreen"]]],["time","Telling Time","Ask and tell the time",[["Sa është ora?","What time is it?"],["Është ora një.","It is one o’clock."],["Është mesditë.","It is noon."],["në mëngjes","in the morning"],["në mbrëmje","in the evening"]]],["hobbies","Hobbies","Talk about free time",[["Më pëlqen të lexoj.","I like to read."],["Më pëlqen muzika.","I like music."],["Luaj futboll.","I play soccer."],["Noton.","He or she swims."],["Vizatoj.","I draw."]]],["travel","Travel Essentials","Move around confidently",[["aeroport","airport"],["stacion","station"],["biletë","ticket"],["pasaportë","passport"],["Ku është hoteli?","Where is the hotel?"]]],["capstone","Putting It Together","Use language in a full day",[["Sapo mbërritëm.","We just arrived."],["Gëzohem që ju takoj.","Nice to meet you."],["Ku do të shkojmë?","Where will we go?"],["Jam gati.","I am ready."],["Ishte një ditë e bukur.","It was a beautiful day."]]],["verbs1","Verbs: To Be & To Have","Core sentence building",[["jam","I am"],["je","you are"],["është","he, she, or it is"],["kam","I have"],["ke","you have"]]],["adjectives","Describing Things","Useful descriptions",[["i madh","big"],["i vogël","small"],["i mirë","good"],["i bukur","beautiful"],["i ri","new"]]],["questionwords","Question Words","Ask useful questions",[["kush","who"],["çfarë","what"],["ku","where"],["kur","when"],["pse","why"]]],["plans","Making Plans","Arrange time together",[["Çfarë do të bëjmë?","What will we do?"],["A do të vish?","Will you come?"],["Shihemi nesër.","See you tomorrow."],["Në çfarë ore?","At what time?"],["Ide e mirë!","Good idea!"]]],["smalltalk","Small Talk","Get to know people",[["Nga je?","Where are you from?"],["Si po kalon?","How is it going?"],["Çfarë të pëlqen?","What do you like?"],["Sa kohë do të rrish?","How long will you stay?"],["Edhe mua.","Me too."]]],["pasttense","Talking About the Past","Share what happened",[["Isha në shtëpi.","I was at home."],["Kisha kohë.","I had time."],["Shkova në qytet.","I went to town."],["Hëngra mëngjes.","I ate breakfast."],["Dje ishte bukur.","Yesterday was nice."]]],["futuretense","Talking About the Future","Say what will happen",[["Do të vij nesër.","I will come tomorrow."],["Do të shkojmë në plazh.","We will go to the beach."],["Do të hamë bashkë.","We will eat together."],["Do të të telefonoj.","I will call you."],["Shihemi javën tjetër.","See you next week."]]],["restaurant","At a Restaurant","Order a full meal",[["Një tavolinë për katër veta.","A table for four."],["Çfarë rekomandoni?","What do you recommend?"],["Do të marr peshkun.","I will have the fish."],["Pa mish, ju lutem.","Without meat, please."],["Ishte shumë e shijshme.","It was very delicious."]]],["gathering","Family Gathering","Talk around the table",[["Mirë se erdhët!","Welcome!"],["Uluni, ju lutem.","Please sit down."],["Si është familja?","How is the family?"],["Gëzuar!","Cheers!"],["Faleminderit për darkën.","Thank you for dinner."]]],["alphabet","Albanian Alphabet","Distinctive Albanian letters",[["ë","ë — a central vowel"],["ç","ç — like ch in chair"],["dh","dh — like th in this"],["gj","gj — a soft palatal sound"],["ll","ll — a strong l sound"]]]],bt={family:[["gjyshja","grandmother"],["gjyshi","grandfather"],["tezja","aunt"],["kushëriri","male cousin"]],greetings:[["Mirë se vini!","Welcome!"],["Si quhesh?","What is your name?"],["Gëzohem që të njoh.","Nice to meet you."],["Natën e mirë!","Good night!"]],numbers:[["gjashtë","six"],["shtatë","seven"],["tetë","eight"],["nëntë","nine"],["dhjetë","ten"]],colors:[["i bardhë","white"],["portokalli","orange"],["vjollcë","purple"],["rozë","pink"]],food:[["vezë","egg"],["pulë","chicken"],["oriz","rice"],["supë","soup"]],cafe:[["Dua një ujë.","I would like a water."],["Me qumësht, ju lutem.","With milk, please."],["A mund të porosis?","May I order?"],["Faleminderit.","Thank you."]],aboutme:[["Jam nga Amerika.","I am from America."],["Kam dy vëllezër.","I have two brothers."],["Flas pak shqip.","I speak a little Albanian."],["Nuk flas mirë ende.","I do not speak well yet."]],outabout:[["Mund ta përsërisni?","Can you repeat that?"],["Më ngadalë, ju lutem.","More slowly, please."],["Ku jemi?","Where are we?"],["Jam humbur.","I am lost."]],directions:[["Ku është qendra?","Where is the center?"],["Kthehu majtas.","Turn left."],["Kthehu djathtas.","Turn right."],["Është këtu afër.","It is nearby."]],travel:[["Nisja","departure"],["Mbërritja","arrival"],["Ku është porta?","Where is the gate?"],["Kam një rezervim.","I have a reservation."]],restaurant:[["Menuja, ju lutem.","The menu, please."],["Jam vegjetarian.","I am vegetarian."],["Pa gluten, ju lutem.","Gluten-free, please."],["Ushqimi ishte shumë i mirë.","The food was very good."]],gathering:[["Na keni munguar.","We missed you."],["Hajde të hamë.","Let us eat."],["Si keni qenë?","How have you been?"],["Shihemi së shpejti.","See you soon."]]},be={greetings:{roles:["Learner","Friend"],lines:[["Learner","Përshëndetje! Si quhesh?","Hello! What is your name?"],["Friend","Unë quhem Arta. Po ti?","My name is Arta. And you?"],["Learner","Unë quhem Mia. Gëzohem që të njoh.","My name is Mia. Nice to meet you."],["Friend","Edhe unë. Mirupafshim!","Me too. Goodbye!"]]},cafe:{roles:["Guest","Server"],lines:[["Guest","Përshëndetje. A mund të porosis?","Hello. May I order?"],["Server","Po, sigurisht.","Yes, of course."],["Guest","Një kafe me qumësht, ju lutem.","A coffee with milk, please."],["Server","Patjetër.","Certainly."]]},directions:{roles:["Traveler","Local"],lines:[["Traveler","Më falni, ku është qendra?","Excuse me, where is the center?"],["Local","Shko drejt dhe kthehu majtas.","Go straight and turn left."],["Traveler","Është larg?","Is it far?"],["Local","Jo, është këtu afër.","No, it is nearby."]]},gathering:{roles:["Host","Guest"],lines:[["Host","Mirë se erdhët! Na keni munguar.","Welcome! We missed you."],["Guest","Faleminderit. Si keni qenë?","Thank you. How have you been?"],["Host","Shumë mirë. Hajde të hamë.","Very well. Let us eat."],["Guest","Gëzuar!","Cheers!"]]}},Je={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},Tt=new Map(Je.months.flatMap((e,t)=>e.map(a=>[a,t+1]))),Me=["#7dd3fc","#f472b6","#a3e635"],Ce=xt.map(([e,t,a,r])=>{const i=Tt.get(e)||10,s=[...r,...bt[e]||[]];return{id:e,month:i,bucket:i-1,title:t,subtitle:a,icon:e.slice(0,2).toUpperCase(),color:Me[(i-1)%Me.length],note:"Standard Albanian draft for fluent family review.",items:s.map(([o,l],d)=>({id:`${e}-sq-${String(d+1).padStart(3,"0")}`,targetText:o,supportText:l,reviewStatus:"draft"})),...be[e]?{dialogue:{roles:be[e].roles,lines:be[e].lines.map(([o,l,d],c)=>({id:`${e}-dialogue-sq-${String(c+1).padStart(3,"0")}`,role:o,targetText:l,supportText:d,reviewStatus:"draft"}))}}:{}}}),ze={languagePack:{id:"albanian-en",targetLanguage:{code:"sq",name:"Albanian",scripts:["Latn"]},supportLanguage:{code:"en",name:"English"},version:"0.1.0",status:"review",audio:{locale:"sq-AL",delivery:"speech-synthesis-draft",reviewStatus:"draft",note:"Device voice is a temporary listening aid until a fluent Albanian reviewer approves recorded audio."}},curriculum:Je,topics:Ce.filter(e=>e.id!=="alphabet"),bonusTopics:Ce.filter(e=>e.id==="alphabet")},Qe=new Map([[ke.languagePack.id,ke],[ze.languagePack.id,ze]]);let z=ke,_=z.languagePack,te=z.topics,ve=z.bonusTopics,Ze=[...te,...ve];const wt=["Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"],Te=new Date(2026,7,10);let ae=z.curriculum.months,Xe=z.curriculum.extras,et=new Map(ae.flatMap((e,t)=>e.map(a=>[a,t+1])));const Ae=[{type:"discover",name:"Discover",detail:"Meet new words and hear them aloud"},{type:"recall",name:"Recall",detail:"Bring yesterday’s language back"},{type:"build",name:"Build",detail:"Put words into useful patterns"},{type:"use",name:"Use",detail:"Speak, listen, and role-play"},{type:"checkpoint",name:"Checkpoint",detail:"Show what you remember"}];function kt(){return[...Qe.values()].map(e=>e.languagePack)}function $t(e){const t=Qe.get(e);if(!t)throw new Error(`Unknown language pack: ${e}`);z=t,_=z.languagePack,te=z.topics,ve=z.bonusTopics,Ze=[...te,...ve],ae=z.curriculum.months,Xe=z.curriculum.extras,et=new Map(ae.flatMap((a,r)=>a.map(i=>[i,r+1]))),C=tt()}function Fe(){return te}function St(){return ve}function jt(){return ae.flat().map(H).filter(Boolean)}function It(){return Xe.map(H).filter(Boolean)}function Lt(e){return et.get(e)||null}function H(e){return Ze.find(t=>t.id===e)}function tt(){const e=[];let t=1;for(let a=0;a<10;a++){const r=ae[a].map(H);for(let i=0;i<4;i++){const s=a*4+i+1;if(i<3){const o=r[i];for(let l=0;l<5;l++){const d=Ae[l];e.push({id:`voyage-${t}`,number:t,month:a,week:s,dayOfWeek:l+1,topicId:o.id,type:d.type,title:`${o.title}: ${d.name}`,detail:d.detail}),t++}}else for(let o=0;o<5;o++){const l=Ae[o];e.push({id:`voyage-${t}`,number:t,month:a,week:s,dayOfWeek:o+1,topicId:null,type:`integration-${l.type}`,title:`Integration: ${l.name}`,detail:`Review topics from Month ${a+1}`}),t++}}}return e}let C=tt();function K(e){const t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function J(e,t=Math.random){const a=e.slice();for(let r=a.length-1;r>0;r--){const i=Math.floor(t()*(r+1));[a[r],a[i]]=[a[i],a[r]]}return a}function ee(e,t=6,a=Math.random){const r=Math.min(t,e.length),i=J(e,a).slice(0,r),s=[];return i.forEach((o,l)=>{s.push({id:`target-${l}`,pairId:l,text:o.targetText,kind:"target"}),s.push({id:`support-${l}`,pairId:l,text:o.supportText,kind:"support"})}),{tiles:J(s,a),selectedIds:[],matchedIds:[]}}function V(e,t=8,a=Math.random){const r=Math.min(t,e.length);return{questions:J(e,a).slice(0,r).map(o=>{const l=e.filter(u=>u.targetText!==o.targetText),d=J(l,a).slice(0,Math.min(3,l.length)),c=J([o.targetText,...d.map(u=>u.targetText)],a);return{promptText:o.supportText,correctAnswer:o.targetText,options:c}}),qIdx:0,score:0,selected:null,answered:!1}}function _t(e){let t=[...String(e)].reduce((a,r)=>a*31+r.charCodeAt(0)>>>0,2166136261);return()=>{t=t+1831565813>>>0;let a=t;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}function at(e,t,a={}){const r=[],i=a.random||Math.random;if(e.topicId){const s=H(e.topicId),o=te[te.indexOf(s)-1]||null;o&&r.push({type:"warmup",title:"Warmup",subtitle:`Quick practice from ${o.title}`,items:o.items.slice(0,5)}),e.type==="discover"?(r.push({type:"discover",title:"New Vocabulary",subtitle:`Discover words for ${s.title}`,items:s.items}),r.push({type:"match",title:"Recall Match",subtitle:"Connect the translations",match:ee(s.items,4,i)})):e.type==="recall"?(r.push({type:"recall-flash",title:"Vocabulary Recall",subtitle:"Self-assess your memory",items:J(s.items,i)}),r.push({type:"quiz",title:"Quick Quiz",subtitle:"Test your understanding",quiz:V(s.items,5,i)})):e.type==="build"?(r.push({type:"note",title:"Sentence Pattern",subtitle:"How sentences are structured",note:s.note||"Practice assembling phrases in this topic."}),r.push({type:"quiz",title:"Pattern Practice",subtitle:"Complete the sentences correctly",quiz:V(s.items,6,i)})):e.type==="use"?s.dialogue?r.push({type:"dialogue",title:"Dialogue Practice",subtitle:"Read the roles out loud",dialogue:s.dialogue}):r.push({type:"listen",title:"Listen & Repeat",subtitle:"Practice your pronunciation",items:s.items}):e.type==="checkpoint"&&(r.push({type:"quiz",title:"Topic Quiz",subtitle:"Show what you remember",quiz:V(s.items,8,i)}),r.push({type:"match",title:"Vocabulary Match",subtitle:"Match all pairs to complete the topic",match:ee(s.items,6,i)}))}else{const o=ae[e.month].map(H).flatMap(l=>l.items);r.push({type:"quiz",title:"Integration Quiz",subtitle:`Review from Month ${e.month+1}`,quiz:V(o,8,i)}),r.push({type:"match",title:"Integration Match",subtitle:"Connect the words quickly",match:ee(o,8,i)})}return r.push({type:"done",title:"Completed!",subtitle:"Awesome job!"}),r}const E=null;async function Pt(){{alert("Supabase credentials are not configured in your environment variables. Please check the .env file.");return}}async function He(){}let xe=_.id,qe=_.version;function qt(){xe=_.id,qe=_.version}function Et(e){return localStorage.getItem(`nautilus:${e}:active-pack`)||"montenegrin-en"}function Dt(e,t){localStorage.setItem(`nautilus:${e}:active-pack`,t)}function re(e,t,a=xe){return`nautilus:${a}:${e}:${t}`}function Mt(e,t){return{stars:`mn_${e}_stars`,topics:`mn_${e}_completed`,lessons:`mn_${e}_voyage_lessons`,activity:`mn_${e}_activity_dates`,dialogues:`mn_${e}_dialogues`}[t]}function ne(e,t,a){const r=re(e,t),i=localStorage.getItem(r);if(i!==null)return i;const s=Mt(e,t),o=s?localStorage.getItem(s):null;return o!==null?(localStorage.setItem(r,o),o):a}function ie(){const e=localStorage.getItem("mn_profiles");if(e)try{return JSON.parse(e).map(a=>String(a.id).startsWith("local-")?a:{...a,isGuide:!1})}catch{}return[]}function Ct(e){localStorage.setItem("mn_profiles",JSON.stringify(e))}function zt(){return localStorage.getItem("mn_active_profile")||null}function At(e){e?localStorage.setItem("mn_active_profile",e):localStorage.removeItem("mn_active_profile")}function Z(e){if(!e)return null;const a=ie().find(c=>c.name===e)||{id:`local-${e}`,isGuide:!1},r=parseInt(ne(e,"stars","0"),10)||0;let i=[];try{i=JSON.parse(ne(e,"topics","[]"))}catch{}let s=[];try{s=JSON.parse(ne(e,"lessons","[]"))}catch{}let o=[];try{o=JSON.parse(ne(e,"activity","[]"))}catch{}const l=parseInt(ne(e,"dialogues","0"),10)||0,d=Ft(o);return{id:a.id,profile:e,stars:r,streakDays:d,completedTopicIds:i,completedLessons:s,activityDates:o,dialoguesDone:l,isGuide:a.isGuide,packId:xe,packVersion:qe}}function Ft(e){if(!e||e.length===0)return 0;const t=new Set(e);let a=0,r=new Date;r.setHours(0,0,0,0);const i=K(r);r.setDate(r.getDate()-1);const s=K(r);if(!t.has(i)&&!t.has(s))return 0;let o=t.has(i)?new Date:r;for(o.setHours(0,0,0,0);t.has(K(o));)a++,o.setDate(o.getDate()-1);return a}function Ht(e,t){localStorage.setItem(re(e,"stars"),String(t))}function Nt(e,t){localStorage.setItem(re(e,"topics"),JSON.stringify(t))}function Gt(e,t){localStorage.setItem(re(e,"lessons"),JSON.stringify(t))}function Ot(e,t){localStorage.setItem(re(e,"activity"),JSON.stringify(t))}function Wt(e,t){localStorage.setItem(re(e,"dialogues"),String(t))}function Rt(e,t){const a=Z(e);if(a.isGuide)return;const r=a.stars+t;Ht(e,r),it(e),ue(a.id,"awardStars",{name:e,stars:r})}function it(e){const t=Z(e);if(t.isGuide)return;const a=K(new Date);if(!t.activityDates.includes(a)){const r=[...t.activityDates,a];Ot(e,r),ue(t.id,"recordActivity",{name:e,dateKey:a})}}function Bt(e,t){const a=Z(e);if(!a.isGuide&&!a.completedLessons.includes(t)){const r=[...a.completedLessons,t];Gt(e,r),it(e),ue(a.id,"completeLesson",{name:e,lessonId:t})}}function Ne(e,t){const a=Z(e);if(!a.isGuide&&!a.completedTopicIds.includes(t)){const r=[...a.completedTopicIds,t];Nt(e,r),ue(a.id,"completeTopic",{name:e,topicId:t})}}function Ut(e){const t=Z(e);if(t.isGuide)return;const a=t.dialoguesDone+1;Wt(e,a),ue(t.id,"incrementDialogues",{name:e,dialoguesDone:a})}function Vt(){return ie().filter(a=>!a.isGuide).map(a=>{const r=Z(a.name);return{name:a.name,stars:r.stars,streak:r.streakDays,completed:r.completedTopicIds.length}})}async function Ge(e,t){const a=ie();if(a.some(r=>r.name.toLowerCase()===e.toLowerCase()))throw new Error("Profile name already exists");{const r=`local-${e}`,i=[...a,{id:r,name:e,isGuide:t}];Ct(i)}}function Yt(){try{return JSON.parse(localStorage.getItem("mn_sync_queue")||"[]")}catch{return[]}}function Kt(e){localStorage.setItem("mn_sync_queue",JSON.stringify(e))}function ue(e,t,a){var s,o;if(String(e).startsWith("local-"))return;const r=Yt(),i=((o=(s=globalThis.crypto)==null?void 0:s.randomUUID)==null?void 0:o.call(s))||`${Date.now()}-${Math.random().toString(16).slice(2)}`;r.push({operationId:i,profileId:e,packId:xe,packVersion:qe,type:t,payload:a,timestamp:Date.now()}),Kt(r),rt()}async function rt(){}async function Oe(){}function D(){throw new Error("Family cloud features are not configured.")}async function We(){D();const{data:e,error:t}=await E.from("family_memberships").select("family_id, role, joined_at, families(id, name, learners_can_invite)").order("joined_at",{ascending:!0});if(t)throw t;return e||[]}async function ge(e){D();const{data:t,error:a}=await E.rpc("get_family_overview",{target_family:e});if(a)throw a;return t}async function Jt(e){D();const t=e.trim();if(!t)throw new Error("Family name is required.");const{data:a,error:r}=await E.rpc("create_family",{family_name:t});if(r)throw r;return a}async function Qt(e,t,a="learner"){D();const r=t.trim().toLowerCase();if(!r)throw new Error("Invitation email is required.");const{data:i,error:s}=await E.rpc("create_family_invitation",{target_family:e,invite_email:r,invite_role:a});if(s)throw s;return i}async function Zt(e,t){D();const a=t.trim().toLowerCase();if(!a)throw new Error("Learner email is required.");const{data:r,error:i}=await E.rpc("create_learner_profile_invitation",{target_profile:e,invite_email:a});if(i)throw i;return r}async function Xt(e,t){D();const a=t.trim().toLowerCase();if(!a)throw new Error("Learner email is required.");const{data:r,error:i}=await E.rpc("link_family_learner_account",{target_profile:e,learner_email:a});if(i)throw i;return r}function ea(e=new Date){const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${r}`}async function st(e,t){D();const{data:a,error:r}=await E.rpc("get_family_play_state",{target_family:e,target_pack_id:t});if(r)throw r;return a||{completedDays:0,completedDates:[],activeSession:null}}async function ta({familyId:e,packId:t,packVersion:a,lessonId:r,voyageDay:i,participantProfileIds:s=[],date:o=new Date,timezone:l=Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}){D();const{data:d,error:c}=await E.rpc("start_family_play",{target_family:e,target_pack_id:t,target_pack_version:a,target_lesson_id:r,target_voyage_day:i,target_local_date:ea(o),target_timezone:l,participant_profiles:s});if(c)throw c;return d}async function aa(e,t,a=null){D();const{data:r,error:i}=await E.rpc("control_family_play",{target_session:e,requested_status:t,requested_segment:a});if(i)throw i;return r}async function ia(e){D();const{data:t,error:a}=await E.rpc("join_family_play",{target_session:e});if(a)throw a;return t}async function ra(e){D();const{data:t,error:a}=await E.rpc("complete_family_play",{target_session:e});if(a)throw a;return t}async function Re(e){D();const{data:t,error:a}=await E.rpc("claim_family_play_controller",{target_session:e});if(a)throw a;return t}async function sa(e,t){D();const{data:a,error:r}=await E.rpc("handoff_family_play_controller",{target_session:e,next_adult:t});if(r)throw r;return a}async function oa(e){D();const{data:t,error:a}=await E.rpc("heartbeat_family_play",{target_session:e});if(a)throw a;return t}async function na(e,t){D();const{data:a,error:r}=await E.rpc("start_family_review",{source_session:e,participant_profiles:t});if(r)throw r;return a}async function Be(e,t){D();const{data:a,error:r}=await E.rpc("get_family_progress_dashboard",{target_family:e,target_pack_id:t});if(r)throw r;return a||{shared:{completedDays:0,reviewSessions:0},learners:[],history:[]}}function la(e,t,a){var S,I,m,T;const i=ie(),s=i.filter(y=>!y.isGuide),o=i.filter(y=>y.isGuide),l=(S=t.families)==null?void 0:S.some(y=>y.role==="owner"||y.role==="adult_guide"),d=`<div style="text-align: center; font-size: 12px; color: var(--text-muted); margin-bottom: 24px; border: 1px dashed var(--border-color); padding: 8px; border-radius: 8px;">
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
              <input id="family-name" required maxlength="80" autocomplete="organization" placeholder="The Camaj Family" style="min-height: 48px; border-radius: 12px; border: 1px solid var(--border-color); background: var(--surface); color: var(--text-main); padding: 0 14px; font: inherit;">
              <button class="btn btn-primary" type="submit">Create Family Workspace</button>
            </form>`:""}
        </div>
      </div>`,(I=e.querySelector("#family-setup-form"))==null||I.addEventListener("submit",async y=>{y.preventDefault();const x=e.querySelector("#family-name").value.trim();x&&await a.createFamily(x)}),(m=e.querySelector("#logout-btn"))==null||m.addEventListener("click",async()=>{await He(),a.refresh()});return}e.innerHTML=`
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
  `;const h=e.querySelector("#learners-grid"),p=e.querySelector("#guides-grid");s.forEach(y=>{const x=document.createElement("div");x.style.display="flex",x.style.flexDirection="column",x.style.gap="8px";const M=document.createElement("button");if(M.className="profile-btn",M.innerText=`I'm ${y.name}`,M.addEventListener("click",()=>a.switchProfile(y.name)),x.appendChild(M),l&&!y.linkedUserId){const q=document.createElement("button");q.className="btn btn-secondary",q.style.fontSize="12px",q.style.padding="6px 10px",q.innerText=`Invite ${y.name} to Sign In`,q.addEventListener("click",async()=>{const A=prompt(`Enter ${y.name}'s Google account email:`);A!=null&&A.trim()&&await a.inviteLearner(y.id,y.name,A.trim())}),x.appendChild(q)}else if(y.linkedUserId){const q=document.createElement("span");q.style.cssText="font-size: 12px; color: var(--teal); text-align: center;",q.innerText="✓ Google sign-in linked",x.appendChild(q)}h.appendChild(x)}),o.forEach(y=>{const x=document.createElement("button");x.className="profile-btn",x.style.borderColor="var(--pink)",x.style.color="var(--text-main)",x.innerText=`${y.name}`,x.addEventListener("click",()=>a.switchProfile(y.name)),p.appendChild(x)});const g=document.createElement("button");if(g.className="profile-btn",g.style.borderStyle="dashed",g.style.borderColor="var(--border-color)",g.style.color="var(--text-muted)",g.style.fontSize="14px",g.innerText=t.sessionUser?"+ Add Learner":"+ Add Profile",g.addEventListener("click",async()=>{const y=prompt("Enter profile name:");if(!y||y.trim()==="")return;const x=t.sessionUser?!1:confirm("Is this profile a Parent/Guide? (Cancel for Learner)");try{await Ge(y.trim(),x),a.refresh()}catch(M){alert(`Error creating profile: ${M.message}`)}}),h.appendChild(g),s.length===0){const y=document.createElement("button");y.className="profile-btn visual-preview-btn",y.innerHTML='<span aria-hidden="true">⛵</span><span>Explore the Visual Preview</span><small>Open the illustrated 200-day voyage</small>',y.addEventListener("click",async()=>{const x="Preview Learner";await Ge(x,!1),a.switchProfile(x)}),h.prepend(y)}const f=e.querySelector("#login-btn");f&&f.addEventListener("click",async()=>{try{await Pt()}catch(y){alert(`Google login failed: ${y.message}`)}});const $=e.querySelector("#logout-btn");$&&$.addEventListener("click",async()=>{try{await He(),a.refresh()}catch(y){alert(`Logout failed: ${y.message}`)}});const j=e.querySelector("#invite-partner-btn");j&&j.addEventListener("click",async()=>{const y=prompt("Enter your partner's Google account email:");y!=null&&y.trim()&&await a.invitePartner(y.trim())}),(T=e.querySelector("#family-overview-btn"))==null||T.addEventListener("click",a.goFamilyOverview)}function ot(e=[]){return[...new Set(e.filter(Boolean))].sort()}function se(e=[]){return Math.min(200,ot(e).length)}function da(e=[]){const t=se(e);return{completedDays:t,nextDay:t>=200?200:t+1,percent:Math.round(t/200*100)}}function ca(e=[]){const t=se(e);return Array.from({length:10},(a,r)=>{const i=Math.max(0,Math.min(20,t-r*20));return{month:r+1,completedDays:i,earned:i===20}})}const pa=[{id:"anchors-aweigh",label:"Anchors Aweigh",min:0,icon:"⚓"},{id:"making-headway",label:"Making Headway",min:50,icon:"⛵"},{id:"rounding-the-mark",label:"Rounding the Mark",min:100,icon:"🧭"},{id:"flying-colors",label:"Flying Colors",min:150,icon:"🚩"},{id:"shipshape-moored",label:"Shipshape · Moored",min:200,icon:"🏝️"}],$e="https://kormilo-nautilus.netlify.app/",nt=[{min:1,icon:"🐠",name:"Reef Scout",note:"First lesson completed"},{min:25,icon:"🐬",name:"Bright Dolphin",note:"25 voyage days completed"},{min:75,icon:"🐢",name:"Steady Turtle",note:"75 voyage days completed"},{min:150,icon:"🐋",name:"Great Voyager",note:"150 voyage days completed"}],Y=[{x:7,y:66,name:"Home Harbor",chapter:"Family & greetings"},{x:17,y:57,name:"Lantern Quay",chapter:"Names & introductions"},{x:28,y:63,name:"Echo Arch",chapter:"Numbers & sounds"},{x:39,y:51,name:"Color Cove",chapter:"Colors & descriptions"},{x:49,y:58,name:"Market Island",chapter:"Food & shopping"},{x:59,y:44,name:"Café Point",chapter:"Ordering & conversation"},{x:69,y:52,name:"Compass Rock",chapter:"Directions & travel"},{x:79,y:39,name:"Story Bay",chapter:"Sentences & stories"},{x:88,y:47,name:"Family Coast",chapter:"Visits & gatherings"},{x:95,y:32,name:"Sunrise Kotor",chapter:"Confident conversation"}];function ua(e){const t=Math.max(0,Math.min(99.999,e))/100*(Y.length-1),a=Math.floor(t),r=t-a,i=Y[a],s=Y[Math.min(a+1,Y.length-1)];return{x:i.x+(s.x-i.x)*r,y:i.y+(s.y-i.y)*r}}function lt(e){const t=Math.max(0,Math.min(200,Number(e)||0));return[...pa].reverse().find(a=>t>=a.min)}function ma(e){const t=Math.max(0,Number(e)||0);return nt.filter(a=>t>=a.min)}function Ue(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function ga(e){var c,u,h,p;const t=((c=e.familyPlayState)==null?void 0:c.completedDays)??se(e.activityDates),a=lt(t),r=ma(t),i=ca(((u=e.familyPlayState)==null?void 0:u.completedDates)||e.activityDates),s=nt.find(g=>t<g.min),o=Math.round(t/200*100),l=((h=e.languagePacks.find(g=>g.id===e.activePackId))==null?void 0:h.targetLanguage.name)||"Language",d=Array.from({length:10},(g,f)=>{const $=(f+1)*20,j=f*20,S=t>=$,I=t>=j&&t<$;return`<li class="voyage-port ${S?"reached":I?"current":"charted"}">
      <span class="voyage-port__marker">${S?"✓":I?"⛵":f+1}</span>
      <span class="voyage-port__label">Port ${f+1}</span>
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
        <img class="voyage-sea__art" src="${$e}assets/illustrations/nautilus-voyage-map.jpg" alt="An illustrated sea route leading from a moonlit harbor toward the mountains and coastal towns of Montenegro">
        <div class="voyage-sea__shade" aria-hidden="true"></div>
        <div class="voyage-route" aria-hidden="true"><span></span></div>
        <ol class="voyage-ports" aria-label="Ten voyage ports">${d}</ol>
      </div>
    </section>

    <section class="captains-quarters" aria-labelledby="quarters-title">
      <div class="quarters-profile">
        <div class="quarters-avatar" aria-hidden="true">${((p=r.at(-1))==null?void 0:p.icon)||"⛵"}</div>
        <div>
          <div class="hero-tag">Captain's Quarters</div>
          <h3 id="quarters-title">${Ue(e.profile)}'s logbook</h3>
          <p>${a.label} · ${e.streakDays} day streak · ${e.stars} stars</p>
        </div>
      </div>
      <div class="quarters-grid">
        <div class="quarters-panel">
          <h4>${Ue(l)} Passport</h4>
          <p class="quarters-help">Earn one stamp for every 20 learning days.</p>
          <div class="passport-stamps">
            ${i.map(g=>`<div class="passport-stamp ${g.earned?"earned":""}" title="Month ${g.month}: ${g.completedDays} of 20 learning days">
              <span>${g.earned?"⚓":g.month}</span><small>${g.completedDays}/20</small>
            </div>`).join("")}
          </div>
        </div>
        <div class="quarters-panel">
          <h4>Friends of the Sea</h4>
          <p class="quarters-help">Companions mark steady progress, never competition.</p>
          <img class="sea-friends__art ${r.length?"":"waiting"}" src="${$e}assets/illustrations/friends-of-the-sea.jpg" alt="A reef fish, dolphin, sea turtle, and whale swimming together as a voyage crew">
          <div class="sea-friends">
            ${r.length?r.map(g=>`<div class="sea-friend" title="${g.note}"><span>${g.icon}</span><small>${g.name}</small></div>`).join(""):'<p class="quarters-empty">Complete your first lesson to meet your Reef Scout.</p>'}
          </div>
          ${s?`<p class="next-friend">Next companion at voyage day ${s.min}.</p>`:'<p class="next-friend">Your whole crew is aboard!</p>'}
        </div>
      </div>
    </section>`}function ya(e){var h;const t=((h=e.familyPlayState)==null?void 0:h.completedDays)??se(e.activityDates),a=Math.round(t/200*100),r=lt(t),i=Math.min(10,Math.floor(t/20)+1),s=Math.max(0,Math.min(20,i*20-t)),o=Math.max(0,Math.min(100,a)),l=ua(a),d=Y.map(p=>`${p.x},${p.y}`).join(" "),c=Y.map((p,g)=>{const f=g+1<i?"reached":g+1===i?"current":"charted";return`<button class="voyage-landmark ${f}" style="--port-x:${p.x}%;--port-y:${p.y}%" aria-label="Port ${g+1}: ${p.name}, ${p.chapter}" data-port="${g+1}">
      <span class="voyage-landmark__beacon">${f==="reached"?"✓":g+1}</span>
      <span class="voyage-landmark__label"><strong>${p.name}</strong><small>${p.chapter}</small></span>
    </button>`}).join(""),u=Y[i-1];return`<section class="immersive-voyage" style="--voyage-camera:${o}%;--voyage-progress:${a}%;--voyage-x:${l.x}%;--voyage-y:${l.y}%" aria-labelledby="immersive-voyage-title">
    <picture class="immersive-voyage__world-frame">
      <img class="immersive-voyage__world" src="${$e}assets/illustrations/nautilus-voyage-panorama-v2.jpg" alt="An Adriatic learning voyage from a moonlit family harbor through islands toward a sunlit Montenegrin mountain town">
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
      <p><strong>${r.icon} ${r.label}</strong> · ${u.chapter}<br>${t} family days complete · ${s} to the next port</p>
      <div class="immersive-voyage__meter" aria-label="${a}% of family voyage complete"><span></span></div>
      <a class="btn btn-primary" href="#voyage-plan">Explore the route plan ↓</a>
    </div>
    <div class="immersive-voyage__vessel" aria-hidden="true"><span>⛵</span><i></i><b></b></div>
    <div class="immersive-voyage__hint">Choose a port to preview each chapter · move your pointer to look across the water</div>
  </section>`}function ha(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function fa(e,t,a){var g,f,$,j,S,I;const r=t.sessionUser?ie().filter(m=>!String(m.id).startsWith("local-")):ie(),i=((g=t.familyPlayState)==null?void 0:g.completedDays)??se(t.activityDates),s=C[Math.min(i,199)],o=H(s.topicId)||Fe()[0],l=t.completedLessons.includes(s.id),c=[{id:"first",label:"First Steps",cond:t.completedTopicIds.length>=1},{id:"getting",label:"Getting Started",cond:t.completedTopicIds.length>=5},{id:"halfway",label:"Halfway Hero",cond:t.completedTopicIds.length>=17},{id:"fluent",label:"Fluent Enough",cond:t.completedTopicIds.length>=Fe().length},{id:"chatter",label:"Chatterbox",cond:t.dialoguesDone>=3},{id:"streak",label:"7-Day Streak",cond:t.streakDays>=7},{id:"pro",label:"Practice Pro",cond:t.stars>=50}].filter(m=>m.cond),u={};jt().forEach(m=>{const T=`Month ${Lt(m.id)}`;u[T]||(u[T]=[]),u[T].push(m)});let h="";e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
          <div class="logo-icon">${_.targetLanguage.code.toUpperCase()}</div>
          <div class="logo-title">Learn ${_.targetLanguage.name}</div>
        </button>
        ${h}
        ${!t.linkedLearnerProfileId&&((f=t.families)!=null&&f.some(m=>m.role==="owner"||m.role==="adult_guide"))?'<button class="btn btn-secondary" id="family-overview-btn" style="padding: 6px 12px; font-size: 12px;">Family Overview</button>':""}
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
          ${r.map(m=>`
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
      ${t.familyError?`<p role="alert" class="dashboard-alert">${ha(t.familyError)}</p>`:""}
      ${($=t.familyPlayState)!=null&&$.activeSession?`
        <section class="family-play-dashboard-banner" aria-label="Active Family Play session">
          <div><span>Family Play is ${t.familyPlayState.activeSession.status}</span><strong>Voyage day ${t.familyPlayState.activeSession.voyageDay} · Join your family</strong></div>
          <button class="btn btn-primary" id="join-family-play-btn">Open Shared Lesson →</button>
        </section>`:""}
      <!-- Tonight's Session Hero -->
      <section class="hero-card" aria-labelledby="hero-title-id">
        <div class="hero-text">
          <div class="hero-tag">${l?"Recommended Review":"Today's Target"}</div>
          <h2 class="hero-title" id="hero-title-id">${s.title}</h2>
          <p class="hero-subtitle">
            ${t.isGuide?`Voyage day ${s.number} · Preview ${o.title} before the kids sit down`:`Voyage day ${s.number} · ${s.detail} · about 10–15 minutes`}
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
        </section>`:ga(t)}

      <!-- Guide Progress dashboard -->
      ${t.isGuide?`
        <section aria-label="Learner Progress Summary">
          <h3 class="section-title">Kids' Progress</h3>
          <div class="kids-progress-grid">
            ${Vt().map(m=>`
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
              ${u[m].map(T=>{const y=t.completedTopicIds.includes(T.id);return`
                  <button type="button" class="topic-card" data-topic-id="${T.id}" aria-label="Practice ${T.title}">
                    <div class="topic-card__icon" style="background: ${T.color};">${T.icon}</div>
                    ${y?'<div class="topic-card__check">✓</div>':""}
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
            ${[...It(),...St()].map(m=>`
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
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#start-session-btn").addEventListener("click",()=>a.startSession(s)),e.querySelector("#view-voyage-btn").addEventListener("click",a.goCurriculum),e.querySelectorAll(".profile-pill-btn").forEach(m=>{m.id!=="nav-add-profile-btn"&&m.addEventListener("click",T=>{a.switchProfile(T.target.dataset.profile)})}),e.querySelector("#nav-add-profile-btn").addEventListener("click",()=>{a.goProfileSelect()}),(j=e.querySelector("#language-select"))==null||j.addEventListener("change",m=>{a.selectLanguage(m.target.value)}),(S=e.querySelector("#family-overview-btn"))==null||S.addEventListener("click",a.goFamilyOverview),(I=e.querySelector("#join-family-play-btn"))==null||I.addEventListener("click",a.openFamilySession),e.querySelectorAll(".topic-card").forEach(m=>{m.addEventListener("click",()=>{const T=m.dataset.topicId;T&&a.openTopic(T)})});const p=e.querySelector("#mixed-review-card");p&&p.addEventListener("click",a.startMixedReview)}function va(e,t,a,r){var A;const i=t.calendarMonth,s=new Date(Te.getFullYear(),Te.getMonth()+i,1),o=s.getFullYear(),l=s.getMonth(),d=(new Date(o,l,1).getDay()+6)%7,c=new Date(o,l+1,0).getDate(),u=new Map;let h=new Date(Te);for(let v=0;v<C.length;v++){for(;h.getDay()===0||h.getDay()===6;)h.setDate(h.getDate()+1);u.set(K(h),C[v]),h.setDate(h.getDate()+1)}const p=[];for(let v=0;v<d;v++)p.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const g=K(new Date),f=((A=t.familyPlayState)==null?void 0:A.completedDates)||t.activityDates,$=new Set(ot(f));for(let v=1;v<=c;v++){const O=new Date(o,l,v),X=K(O),W=u.get(X),oe=$.has(X),me=X===g;let B="state-rest",U="In harbor";W&&(B="state-planned",U="Charted"),me&&W&&!oe&&(B="state-making-way",U="Making way"),oe&&(B="state-full-sail",U="Full sail"),p.push({label:String(v),stateClass:B,ariaLabel:`${O.toLocaleDateString("en-US",{month:"long",day:"numeric"})}: ${U}${W?`, Lesson ${W.number}: ${W.title}`:""}`})}for(;p.length%7!==0;)p.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const j=s.toLocaleDateString("en-US",{month:"long",year:"numeric"}),S=da(f),I=new Date;I.setHours(0,0,0,0),I.setDate(I.getDate()-(I.getDay()+6)%7);const m=new Date(I);m.setDate(m.getDate()+7);const T=t.activityDates.filter(v=>{const O=new Date(`${v}T12:00:00`);return O>=I&&O<m}).length,y=t.activityDates.filter(v=>v.startsWith(`${o}-${String(l+1).padStart(2,"0")}-`)).length,x=p.filter(v=>v.label&&v.ariaLabel.includes("Lesson"));e.innerHTML=`
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
      ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(v=>`
        <div class="voyage-calendar__weekday" role="columnheader" aria-label="${v}">${v}</div>
      `).join("")}

      ${p.map(v=>v.label===""?`<div class="voyage-calendar__day" style="${v.style}" aria-hidden="true"></div>`:`
          <div class="voyage-calendar__day ${v.stateClass}" role="gridcell" aria-label="${v.ariaLabel}" tabindex="0">
            ${v.label}
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
      <span>${T} active ${T===1?"day":"days"} this week</span>
      <span>•</span>
      <span>${y} active ${y===1?"day":"days"} this month</span>
    </div>

    <details class="calendar-list">
      <summary>View this month as a list</summary>
      <ul>
        ${x.map(v=>`<li>${v.ariaLabel}</li>`).join("")}
      </ul>
    </details>
  `;const M=e.querySelector("#cal-prev"),q=e.querySelector("#cal-next");M&&i>0&&M.addEventListener("click",a),q&&i<9&&q.addEventListener("click",r)}const xa=[{id:"red",hex:"#e53935",dark:!1,terms:["red","crvena","e kuqe"]},{id:"blue",hex:"#1976d2",dark:!1,terms:["blue","plava","blu"]},{id:"green",hex:"#2e7d32",dark:!1,terms:["green","zelena","e gjelbër"]},{id:"yellow",hex:"#f9c928",dark:!0,terms:["yellow","žuta","e verdhë"]},{id:"black",hex:"#111318",dark:!1,terms:["black","crna","e zezë"]},{id:"white",hex:"#f5f1e8",dark:!0,terms:["white","bijela","e bardhë"]}],dt="https://kormilo-nautilus.netlify.app/",ba={colors:{src:"assets/illustrations/colors-harbor-lesson-v2.jpg",place:"Color Cove",prompt:"Look around the harbor. The vocabulary is already in the scene.",icon:"🎨"},family:{src:"assets/illustrations/family-courtyard-lesson-v1.jpg",place:"The Family Courtyard",prompt:"Take a seat at the table and bring the family words to life.",icon:"🏡"}};function ct(e){const t=ba[e];return t?{...t,src:`${dt}${t.src}`}:null}function Se(e){const t=String(e||"").trim().toLocaleLowerCase();return xa.find(a=>a.terms.includes(t))||null}function Ta(e,t){return e!=="colors"?null:Se(t==null?void 0:t.supportText)||Se(t==null?void 0:t.targetText)}function Ee(e,t){const a=Ta(e,t);return a?`<div class="color-field color-field--${a.id}" style="--lesson-color:${a.hex}" aria-hidden="true">
    <span class="color-field__sun"></span><span class="color-field__sail"></span><span class="color-field__wave"></span>
  </div>`:t!=null&&t.emoji?`<div class="flashcard-emoji">${t.emoji}</div>`:""}function pt(e){const t=Se(e);return t?` style="--tile-color:${t.hex};--tile-text:${t.dark?"#111318":"#ffffff"}" data-color-tile="true"`:""}function wa(e){return e!=="colors"?"":`<figure class="lesson-scene lesson-scene--colors">
    <img src="${dt}assets/illustrations/colors-harbor.jpg" alt="A Montenegro harbor with a red boat, blue sea, green shutters, yellow umbrella, black cat, and white church tower">
    <figcaption><strong>Find the colors in the harbor.</strong><span>Red boat · blue sea · green shutters · yellow umbrella · black cat · white tower</span></figcaption>
  </figure>`}function ut(e,t,a){var c;const r=H(t.topicId),i=t.completedTopicIds.includes(r.id),s=!i&&!t.isGuide,o=[{id:"flashcards",label:"Flashcards"},{id:"match",label:"Match"},{id:"quiz",label:"Quiz"},{id:"listen",label:"Listen"}];r.dialogue&&o.push({id:"dialogue",label:"Role-play"}),e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${_.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${_.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main class="container" style="max-width: 720px;">
      <!-- Header info -->
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 8px;">
        <div>
          <h2 style="font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">${r.title}</h2>
          <p style="color: var(--text-muted); font-size: 14px;">${r.subtitle}</p>
          ${((c=_.audio)==null?void 0:c.reviewStatus)==="draft"?'<span class="audio-review-badge">Voice preview · fluent audio review pending</span>':""}
        </div>
        <div>
          ${i?`
            <div style="color: var(--lime); font-weight: 800; font-size: 14px; display: flex; align-items: center; gap: 6px;">
              <span>✓</span> Completed Topic
            </div>
          `:""}
          ${s?`
            <button class="btn btn-secondary btn-pill" id="skip-btn" style="padding: 6px 14px; font-size: 12px; min-height: 32px;">Already know this — skip</button>
          `:""}
        </div>
      </div>

      ${r.note?`
        <div style="background: rgba(250, 204, 21, 0.08); border: 1px solid var(--amber); border-radius: 12px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #ffe58f; margin-bottom: 24px; white-space: pre-line;">
          ${r.note}
        </div>
      `:""}

      ${wa(r.id)}

      <!-- Activities Tabs -->
      <div style="display: flex; gap: 8px; margin: 16px 0 24px; flex-wrap: wrap;" role="tablist" aria-label="Topic Activities">
        ${o.map(u=>`
          <button class="btn btn-secondary btn-pill ${t.activity===u.id?"btn-active":""}" role="tab" aria-selected="${t.activity===u.id}" data-tab="${u.id}">${u.label}</button>
        `).join("")}
      </div>

      <!-- Activity Container -->
      <div id="activity-mount"></div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#back-btn").addEventListener("click",a.goDashboard);const l=e.querySelector("#skip-btn");l&&l.addEventListener("click",()=>{a.markTopicCompleted(r.id),ut(e,t,a)}),e.querySelectorAll("[data-tab]").forEach(u=>{u.addEventListener("click",h=>{const p=h.target.dataset.tab;a.setActivity(p)})});const d=e.querySelector("#activity-mount");ka(d,r,t,a)}function ka(e,t,a,r){a.activity==="flashcards"?ye(e,t,a,r):a.activity==="match"?ce(e,t,a,r):a.activity==="quiz"?he(e,t,a,r):a.activity==="listen"?Q(e,t,a,r):a.activity==="dialogue"&&je(e,t,a,r)}function ye(e,t,a,r){const i=a.flash,s=i.order||t.items.map((d,c)=>c),o=t.items[s[i.idx]];e.innerHTML=`
    <div class="flashcard-container">
      <div class="flashcard-hint" style="color: var(--text-muted); font-size: 13px; font-weight: 700;">
        Card ${i.idx+1} of ${t.items.length}
      </div>

      <button type="button" class="flashcard-wrapper" id="card-wrapper" aria-label="Flashcard, tap to flip">
        <div class="flashcard ${i.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${Ee(t.id,o)}
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
  `;const l=e.querySelector("#card-wrapper");l.addEventListener("click",()=>{i.flipped=!i.flipped,l.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#speak-btn").addEventListener("click",d=>{d.stopPropagation(),r.speak(o.targetText)}),e.querySelector("#prev-card-btn").addEventListener("click",()=>{i.idx=(i.idx-1+t.items.length)%t.items.length,i.flipped=!1,ye(e,t,a,r)}),e.querySelector("#next-card-btn").addEventListener("click",()=>{i.idx=(i.idx+1)%t.items.length,i.flipped=!1,ye(e,t,a,r)}),e.querySelector("#shuffle-btn").addEventListener("click",()=>{i.order=J(t.items.map((d,c)=>c)),i.idx=0,i.flipped=!1,ye(e,t,a,r)})}function ce(e,t,a,r){const i=a.match;(!i.tiles||i.tiles.length===0)&&(a.match=ee(t.items));const s=a.match,o=s.matchedIds.length/2,l=s.tiles.length/2,d=o===l;e.innerHTML=`
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
          ${s.tiles.map(c=>{const u=s.matchedIds.includes(c.id),h=s.selectedIds.includes(c.id);let p="match-tile";return u?p+=" matched":h&&(p+=" selected"),`
              <button class="${p}" data-tile-id="${c.id}"${pt(c.text)} ${u?"disabled":""}>
                ${c.text}
              </button>
            `}).join("")}
        </div>
      `}

      <button class="btn btn-secondary" id="reshuffle-match-btn">
        ${d?"Play Again":"New Round"}
      </button>
    </div>
  `,e.querySelector("#reshuffle-match-btn").addEventListener("click",()=>{a.match=ee(t.items),ce(e,t,a,r)}),e.querySelectorAll(".match-tile").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.tileId;$a(u,e,t,a,r)})})}function $a(e,t,a,r,i){const s=r.match;if(!(s.matchedIds.includes(e)||s.selectedIds.includes(e)||s.selectedIds.length>=2)&&(s.selectedIds.push(e),ce(t,a,r,i),s.selectedIds.length===2)){const[o,l]=s.selectedIds,d=s.tiles.find(u=>u.id===o),c=s.tiles.find(u=>u.id===l);d.pairId===c.pairId?(s.matchedIds.push(o,l),s.selectedIds=[],setTimeout(()=>{s.matchedIds.length===s.tiles.length&&(i.awardStars(1),i.markTopicCompleted(a.id)),ce(t,a,r,i)},250)):setTimeout(()=>{s.selectedIds=[],ce(t,a,r,i)},700)}}function he(e,t,a,r){const i=a.quiz;(!i.questions||i.questions.length===0)&&(a.quiz=V(t.items));const s=a.quiz,o=s.questions[s.qIdx];if(s.qIdx>=s.questions.length||s.questions.length===0){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Quiz Finished!</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          Your score: ${s.score} / ${s.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="restart-quiz-btn">Try Again</button>
      </div>
    `,e.querySelector("#restart-quiz-btn").addEventListener("click",()=>{a.quiz=V(t.items),he(e,t,a,r)});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${s.qIdx+1} of ${s.questions.length} · Score: ${s.score}
      </div>

      <div class="quiz-prompt">
        Translate to ${_.targetLanguage.name}:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">"${o.promptText}"</span>
      </div>

      <div class="quiz-options">
        ${o.options.map(c=>{let u="quiz-option";return s.answered&&(c===o.correctAnswer?u+=" correct":c===s.selected?u+=" incorrect":u+=" disabled"),`
            <button class="${u}" data-option="${c}" ${s.answered?"disabled":""}>
              ${c}
            </button>
          `}).join("")}
      </div>

      ${s.answered?`
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          ${s.qIdx+1===s.questions.length?"Show Results":"Next Question →"}
        </button>
      `:""}
    </div>
  `,e.querySelectorAll(".quiz-option").forEach(c=>{c.addEventListener("click",()=>{if(s.answered)return;const u=c.dataset.option;s.selected=u,s.answered=!0,u===o.correctAnswer&&(s.score++,r.awardStars(1)),he(e,t,a,r)})});const d=e.querySelector("#next-question-btn");d&&d.addEventListener("click",()=>{s.qIdx++,s.answered=!1,s.selected=null,s.qIdx>=s.questions.length&&r.markTopicCompleted(t.id),he(e,t,a,r)})}function Q(e,t,a,r){const i=a.listen,s=i.order||t.items.map((d,c)=>c),o=t.items[s[i.idx]],l=a.recording;e.innerHTML=`
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
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{r.speak(o.targetText)}),e.querySelector("#reveal-meaning-btn").addEventListener("click",()=>{i.revealed=!i.revealed,Q(e,t,a,r)}),e.querySelector("#prev-listen-btn").addEventListener("click",()=>{i.idx=(i.idx-1+t.items.length)%t.items.length,i.revealed=!1,Ve(a),Q(e,t,a,r)}),e.querySelector("#next-listen-btn").addEventListener("click",()=>{i.idx=(i.idx+1)%t.items.length,i.revealed=!1,Ve(a),Q(e,t,a,r)}),e.querySelector("#mic-record-btn").addEventListener("click",()=>{Sa(e,t,a,r)})}function Ve(e){e.recording.url&&URL.revokeObjectURL(e.recording.url),e.recording={status:"idle",url:null,error:null,chunks:[],recorder:null}}async function Sa(e,t,a,r){const i=a.recording;if(i.status==="recording"){i.recorder&&i.recorder.stop();return}try{const s=await navigator.mediaDevices.getUserMedia({audio:!0}),o=new MediaRecorder(s),l=[];o.ondataavailable=d=>{d.data.size>0&&l.push(d.data)},o.onstop=()=>{const d=new Blob(l,{type:"audio/webm"}),c=URL.createObjectURL(d);s.getTracks().forEach(u=>u.stop()),a.recording={status:"ready",url:c,error:null,chunks:[],recorder:null},Q(e,t,a,r)},o.start(),a.recording={status:"recording",url:null,error:null,chunks:l,recorder:o},Q(e,t,a,r)}catch{a.recording={status:"idle",url:null,error:"Microphone access denied or unavailable on this device.",chunks:[],recorder:null},Q(e,t,a,r)}}function je(e,t,a,r){const i=a.dialogue,s=t.dialogue;i.readAs||(i.readAs=s.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${s.roles.map(o=>`
          <button class="btn btn-secondary btn-pill ${i.readAs===o?"btn-active":""}" data-role="${o}">
            Read as ${o}
          </button>
        `).join("")}
        <button class="btn btn-secondary btn-pill" id="toggle-translation-btn">
          ${i.showEn?"Hide Translations":"Show Translations"}
        </button>
      </div>

      <div class="dialogue-container">
        ${s.lines.map((o,l)=>`
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
  `,e.querySelectorAll("[data-role]").forEach(o=>{o.addEventListener("click",()=>{i.readAs=o.dataset.role,je(e,t,a,r)})}),e.querySelector("#toggle-translation-btn").addEventListener("click",()=>{i.showEn=!i.showEn,je(e,t,a,r)}),e.querySelectorAll("[data-play-line]").forEach(o=>{o.addEventListener("click",()=>{const l=parseInt(o.dataset.playLine),d=s.lines[l].targetText;r.speak(d)})}),e.querySelector("#finish-dialogue-btn").addEventListener("click",()=>{r.incrementDialogues(),r.markTopicCompleted(t.id),r.awardStars(2),r.goDashboard()})}function ja(e,t,a){const r=t.activeLesson;if(!t.session||t.session.lessonId!==r.id){const c=at(r,t.completedTopicIds);t.session={lessonId:r.id,stepIdx:0,steps:c,flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}}}const i=t.session,s=i.steps[i.stepIdx],o=ct(r.topicId),l=Math.round((i.stepIdx+1)/i.steps.length*100);e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${_.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${_.targetLanguage.name}</div>
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
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#exit-btn").addEventListener("click",a.goDashboard);const d=e.querySelector("#session-step-mount");Ia(d,s,t,a)}function Ia(e,t,a,r){t.type==="warmup"?La(e,t,a,r):t.type==="discover"?Ie(e,t,a,r):t.type==="recall-flash"?mt(e,t,a,r):t.type==="note"?_a(e,t,a,r):t.type==="quiz"?Le(e,t,a,r):t.type==="match"?fe(e,t,a,r):t.type==="dialogue"?gt(e,t,a,r):t.type==="listen"?_e(e,t,a,r):t.type==="done"&&qa(e,t,a,r)}function La(e,t,a,r){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 6px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
        ${t.items.map((i,s)=>`
          <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; border-radius: 12px; padding: 14px 16px;">
            <div>
              <div style="font-weight: 700; font-size: 16px;">${i.targetText}</div>
              <div style="font-size: 13px; color: var(--text-muted);">${i.supportText}</div>
            </div>
            <button class="dialogue-play-btn" data-warmup-play="${s}">►</button>
          </div>
        `).join("")}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
    </div>
  `,e.querySelectorAll("[data-warmup-play]").forEach(i=>{i.addEventListener("click",()=>{const s=parseInt(i.dataset.warmup-play);r.speak(t.items[s].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{r.nextSessionStep()})}function Ie(e,t,a,r){const i=a.session.flash,s=t.items[i.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Word ${i.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="discover-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Learning card, tap to flip">
        <div class="flashcard ${i.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${Ee(a.activeLesson.topicId,s)}
            <div class="flashcard-text-mn" style="font-size: 28px;">${s.targetText}</div>
            <div class="flashcard-hint">Tap to flip</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en" style="font-size: 18px;">${s.supportText}</div>
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
  `;const o=e.querySelector("#discover-card-wrapper");o.addEventListener("click",()=>{i.flipped=!i.flipped,o.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#disc-speak-btn").addEventListener("click",d=>{d.stopPropagation(),r.speak(s.targetText)}),e.querySelector("#disc-prev-btn").addEventListener("click",()=>{i.idx>0&&(i.idx--,i.flipped=!1,Ie(e,t,a,r))}),e.querySelector("#disc-next-btn").addEventListener("click",()=>{i.idx+1<t.items.length&&(i.idx++,i.flipped=!1,Ie(e,t,a,r))});const l=e.querySelector("#next-step-btn");l&&l.addEventListener("click",()=>{r.nextSessionStep()})}function mt(e,t,a,r){const i=a.session.flash,s=t.items[i.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Card ${i.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="recall-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Recall card, tap to flip">
        <div class="flashcard ${i.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-hint" style="margin-bottom: 16px; color: var(--cyan);">Can you recall the translation?</div>
            ${Ee(a.activeLesson.topicId,s)}
            <div class="flashcard-text-mn" style="font-size: 28px;">${s.targetText}</div>
            <div class="flashcard-hint">Tap to check meaning</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en" style="font-size: 18px;">${s.supportText}</div>
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
  `;const o=e.querySelector("#recall-card-wrapper");o.addEventListener("click",()=>{i.flipped=!i.flipped,o.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#recall-speak-btn").addEventListener("click",d=>{d.stopPropagation(),r.speak(s.targetText)});const l=()=>{i.idx+1<t.items.length?(i.idx++,i.flipped=!1,mt(e,t,a,r)):r.nextSessionStep()};e.querySelector("#recall-again-btn").addEventListener("click",()=>{t.items.push(s),l()}),e.querySelector("#recall-gotit-btn").addEventListener("click",()=>{l()})}function _a(e,t,a,r){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 12px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div class="glass" style="background: rgba(125, 211, 252, 0.08); border-color: var(--cyan); border-radius: 16px; padding: 20px; font-size: 16px; line-height: 1.6; color: var(--text-main); margin-bottom: 32px; white-space: pre-line;">
        ${t.note}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">I understand, start practice →</button>
    </div>
  `,e.querySelector("#next-step-btn").addEventListener("click",()=>{r.nextSessionStep()})}function Le(e,t,a,r){a.session.quiz||(a.session.quiz=t.quiz);const i=a.session.quiz,s=i.questions[i.qIdx];if(i.qIdx>=i.questions.length){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Practice Complete</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          You scored: ${i.score} / ${i.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
      </div>
    `,e.querySelector("#next-step-btn").addEventListener("click",()=>{a.session.quiz=null,r.nextSessionStep()});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${i.qIdx+1} of ${i.questions.length} · Score: ${i.score}
      </div>

      <div class="quiz-prompt">
        Translate to ${_.targetLanguage.name}:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">"${s.promptText}"</span>
      </div>

      <div class="quiz-options">
        ${s.options.map(d=>{let c="quiz-option";return i.answered&&(d===s.correctAnswer?c+=" correct":d===i.selected?c+=" incorrect":c+=" disabled"),`
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
  `,e.querySelectorAll(".quiz-option").forEach(d=>{d.addEventListener("click",()=>{if(i.answered)return;const c=d.dataset.option;i.selected=c,i.answered=!0,c===s.correctAnswer&&(i.score++,r.awardStars(1)),Le(e,t,a,r)})});const l=e.querySelector("#next-question-btn");l&&l.addEventListener("click",()=>{i.qIdx++,i.answered=!1,i.selected=null,Le(e,t,a,r)})}function fe(e,t,a,r){a.session.match||(a.session.match=t.match);const i=a.session.match,s=i.matchedIds.length/2,o=i.tiles.length/2,l=s===o;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Pairs matched: ${s} / ${o}
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
              <button class="${p}" data-tile-id="${c.id}"${pt(c.text)} ${u?"disabled":""}>
                ${c.text}
              </button>
            `}).join("")}
        </div>
      `}
    </div>
  `,e.querySelectorAll(".match-tile").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.tileId;Pa(u,e,t,a,r)})});const d=e.querySelector("#next-step-btn");d&&d.addEventListener("click",()=>{a.session.match=null,r.nextSessionStep()})}function Pa(e,t,a,r,i){const s=r.session.match;if(!(s.matchedIds.includes(e)||s.selectedIds.includes(e)||s.selectedIds.length>=2)&&(s.selectedIds.push(e),fe(t,a,r,i),s.selectedIds.length===2)){const[o,l]=s.selectedIds,d=s.tiles.find(u=>u.id===o),c=s.tiles.find(u=>u.id===l);d.pairId===c.pairId?(s.matchedIds.push(o,l),s.selectedIds=[],setTimeout(()=>{s.matchedIds.length===s.tiles.length&&i.awardStars(1),fe(t,a,r,i)},250)):setTimeout(()=>{s.selectedIds=[],fe(t,a,r,i)},700)}}function gt(e,t,a,r){const i=a.session.dialogue,s=t.dialogue;i.readAs||(i.readAs=s.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${s.roles.map(o=>`
          <button class="btn btn-secondary btn-pill ${i.readAs===o?"btn-active":""}" data-role="${o}">
            Read as ${o}
          </button>
        `).join("")}
      </div>

      <div class="dialogue-container" style="width: 100%;">
        ${s.lines.map((o,l)=>`
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
  `,e.querySelectorAll("[data-role]").forEach(o=>{o.addEventListener("click",()=>{i.readAs=o.dataset.role,gt(e,t,a,r)})}),e.querySelectorAll("[data-play-line]").forEach(o=>{o.addEventListener("click",()=>{const l=parseInt(o.dataset.playLine);r.speak(s.lines[l].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{r.incrementDialogues(),r.awardStars(2),r.nextSessionStep()})}function _e(e,t,a,r){const i=a.session.flash,s=t.items[i.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${i.idx+1} of ${t.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 28px; text-align: center;">
        ${s.targetText}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play Pronunciation</button>

      <div style="font-size: 15px; color: var(--text-muted); text-align: center; margin: 4px 0;">
        Meaning: <span style="color: var(--cyan); font-weight: 600;">"${s.supportText}"</span>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 12px;">
        <button class="btn btn-secondary" id="listen-prev-btn" ${i.idx===0?'disabled style="opacity:0.3; cursor:default;"':""}>←</button>
        <button class="btn btn-secondary" id="listen-next-btn" ${i.idx+1===t.items.length?'disabled style="opacity:0.3; cursor:default;"':""}>→</button>
      </div>

      ${i.idx+1===t.items.length?`
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      `:""}
    </div>
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{r.speak(s.targetText)}),e.querySelector("#listen-prev-btn").addEventListener("click",()=>{i.idx>0&&(i.idx--,_e(e,t,a,r))}),e.querySelector("#listen-next-btn").addEventListener("click",()=>{i.idx+1<t.items.length&&(i.idx++,_e(e,t,a,r))});const o=e.querySelector("#next-step-btn");o&&o.addEventListener("click",()=>{r.nextSessionStep()})}function qa(e,t,a,r){const i=a.activeLesson,s=i.topicId?H(i.topicId):null;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center; padding: 40px 0;">
      <div style="font-size: 52px; animation: bounce 1s infinite alternate;">🎉</div>
      <h3 style="font-family: var(--font-display); font-weight: 800; font-size: 26px; letter-spacing: -0.5px;">Nailed It!</h3>
      <p style="color: var(--text-muted); font-size: 15px; max-width: 360px; line-height: 1.6;">
        You finished the lesson: <span style="color: var(--cyan); font-weight: 600;">"${i.title}"</span>.
        ${s&&i.type==="checkpoint"?`<br>Topic <strong>${s.title}</strong> has been marked as complete.`:""}
      </p>

      <div class="badge-pill" style="border-color: var(--lime); color: var(--lime); font-size: 14px; font-weight: 800; padding: 10px 20px;">
        ★ Voyage Lesson Completed!
      </div>

      <button class="btn btn-primary" id="finish-lesson-btn" style="margin-top: 12px; padding: 14px 32px;">
        Back to Dashboard
      </button>
    </div>
  `,e.querySelector("#finish-lesson-btn").addEventListener("click",()=>{r.completeLesson(i.id)})}function Ea(e,t,a){var o;const r=((o=t.familyPlayState)==null?void 0:o.completedDays)??se(t.activityDates),i={};for(let l=0;l<10;l++)i[l]=C.filter(d=>d.month===l);e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${_.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${_.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main>
      ${ya(t)}
      <div class="container voyage-plan-content" id="voyage-plan" style="max-width: 760px;">
      <h2 style="font-size: 28px; margin-bottom: 8px;">The 200-Day Family Voyage</h2>
      <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 32px; line-height: 1.6;">
        Ten months, five family learning days each week. Independent practice builds personal skill but does not move this shared route. Every fourth week brings the month's vocabulary and patterns together.
      </p>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        ${Object.keys(i).map(l=>{const d=parseInt(l)+1,c=i[l],u=c[0].number,h=c.at(-1).number,p=r>=h,g=r>=u;let f="var(--text-muted)";return p?f="var(--lime)":(g||r+1===u)&&(f="var(--cyan)"),`
            <div style="border-left: 2px solid ${f}; padding-left: 20px; margin-bottom: 8px;">
              <h3 style="font-size: 16px; margin-bottom: 12px; color: ${f}; text-transform: uppercase; letter-spacing: 0.05em;">
                Month ${d} — ${wt[l]}
              </h3>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${c.filter($=>$.number%5===1).map($=>{const j=$.week,S=C.filter(M=>M.week===j),I=r>=S.at(-1).number,m=r+1>=S[0].number&&!I,T=$.topicId?H($.topicId):null;let y="Planned",x="var(--text-muted)";return I?(y="✓ Completed",x="var(--lime)"):m&&(y="Active Week",x="var(--cyan)"),`
                    <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; border-radius: 12px; padding: 14px 18px; cursor: pointer; transition: all var(--transition-fast);" data-week="${j}">
                      <div>
                        <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 2px;">
                          ${j%4===0?"Week 4 (Integration)":`Week ${j%4}: ${T?T.title:"Mixed review"}`}
                        </h4>
                        <p style="color: var(--text-muted); font-size: 13px;">
                          Lessons ${S[0].number} – ${S[4].number}
                        </p>
                      </div>
                      <div style="font-size: 13px; font-weight: 800; color: ${x};">${y}</div>
                    </div>
                  `}).join("")}
              </div>
            </div>
          `}).join("")}
      </div>
      </div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#back-btn").addEventListener("click",a.goDashboard);const s=e.querySelector(".immersive-voyage");s==null||s.addEventListener("pointermove",l=>{const d=s.getBoundingClientRect();s.style.setProperty("--look-x",`${((l.clientX-d.left)/d.width-.5)*1.5}%`),s.style.setProperty("--look-y",`${((l.clientY-d.top)/d.height-.5)*1.2}%`)}),s==null||s.addEventListener("pointerleave",()=>{s.style.setProperty("--look-x","0%"),s.style.setProperty("--look-y","0%")}),e.querySelectorAll("[data-week]").forEach(l=>{l.addEventListener("click",()=>{const d=parseInt(l.dataset.week),c=C.filter(p=>p.week===d),u=C[Math.min(r,199)],h=c.find(p=>p.id===u.id)||c[0];a.startSession(h)})})}const Da={"montenegrin-en":"Montenegrin","albanian-en":"Albanian"};function L(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function Ye(e){return{owner:"Owner",adult_guide:"Adult Partner",learner:"Learner"}[e]||e}function Ma(e,t,a){var i,s,o,l,d,c,u,h;const r=t.familyOverview;e.innerHTML=`
    <header class="navbar">
      <button class="logo" id="family-back-btn" aria-label="Back to learners">
        <div class="logo-icon">N</div><div class="logo-title">Family Overview</div>
      </button>
      <button class="btn btn-secondary" id="choose-learner-btn">Choose a Learner</button>
    </header>
    <main class="container">
      ${t.familyOverviewLoading?"<p>Loading family…</p>":""}
      ${t.familyError?`<p role="alert" style="color: var(--pink);">${L(t.familyError)}</p>`:""}
      ${t.familyNotice?`<p role="status" style="color: var(--lime); margin-bottom: 16px;">${L(t.familyNotice)}</p>`:""}
      ${r?`
        <section class="hero-card" style="margin-bottom: 28px;">
          <div class="hero-text"><div class="hero-tag">Family workspace</div>
          <h1 class="hero-title">${L(r.family.name)}</h1>
          <p class="hero-subtitle">Members, invitations, and progress across every language.</p></div>
        </section>

        <section class="family-play-launch" aria-labelledby="family-play-launch-title">
          <div>
            <div class="hero-tag">Shared family voyage</div>
            <h2 id="family-play-launch-title">${(i=t.familyPlayState)!=null&&i.activeSession?"Family session in progress":`Ready for voyage day ${(((s=t.familyPlayState)==null?void 0:s.completedDays)||0)+1}`}</h2>
            <p>Independent practice stays personal. This shared position moves only when an adult chooses Complete for Family.</p>
          </div>
          ${(o=t.familyPlayState)!=null&&o.activeSession?`
            <div class="family-play-active-summary">
              <strong>Voyage day ${t.familyPlayState.activeSession.voyageDay}</strong>
              <span>${L(t.familyPlayState.activeSession.status)} · Part ${(t.familyPlayState.activeSession.currentSegment||0)+1}</span>
              <button class="btn btn-primary" id="continue-family-play-btn">Continue Family Play →</button>
            </div>`:`
            <fieldset class="family-play-roster">
              <legend>Who is learning together?</legend>
              ${r.learners.map(p=>`<label>
                <input type="checkbox" name="family-participant" value="${L(p.id)}" checked>
                <span>${L(p.name)}</span>
              </label>`).join("")||"<p>Add a learner before starting Family Play.</p>"}
            </fieldset>
            <button class="btn btn-primary" id="start-family-play-btn" ${r.learners.length?"":"disabled"}>Start Family Session →</button>`}
        </section>

        ${t.familyProgress?`<section class="family-progress-dashboard" aria-labelledby="family-progress-title">
          <div class="family-progress-heading">
            <div><div class="hero-tag">Shared and personal progress</div><h2 id="family-progress-title">Family voyage dashboard</h2></div>
            <div class="shared-day-medallion"><strong>${t.familyProgress.shared.completedDays}</strong><span>of 200 family days</span></div>
          </div>
          <div class="family-progress-comparison">
            ${t.familyProgress.learners.map(p=>{const g=Math.min(100,Math.round(p.completedLessons/200*100)),f=Math.min(100,Math.round(t.familyProgress.shared.completedDays/200*100));return`<article class="family-progress-row">
                <div><strong>${L(p.name)}</strong><span>${p.completedLessons} personal lessons · joined ${p.familyParticipations} family days</span></div>
                <div class="dual-progress"><i style="--progress:${f}%" title="Family ${f}%"></i><b style="--progress:${g}%" title="Personal ${g}%"></b></div>
                <small>Family ${f}% · Personal ${g}% · ${p.stars} stars</small>
              </article>`}).join("")}
          </div>
        </section>

        <section class="family-history" aria-labelledby="family-history-title">
          <div class="family-progress-heading"><div><div class="hero-tag">Captain's log</div><h2 id="family-history-title">Family session history</h2></div><span>${t.familyProgress.shared.reviewSessions} review sessions</span></div>
          <div class="family-history-list">
            ${t.familyProgress.history.map(p=>`<article class="family-history-item">
              <div class="history-day"><strong>${p.voyageDay}</strong><span>${p.isReview?"Review":"Voyage day"}</span></div>
              <div><strong>${L(p.lessonId)}</strong><span>${new Date(p.completedAt).toLocaleDateString()} · ${L((p.participants||[]).join(", "))} · led by ${L(p.controllerName)}</span></div>
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
            ${r.members.map(p=>`<article class="kid-progress-card">
              <div class="kid-progress-header">${L(p.name)}</div>
              <div class="kid-progress-stats"><div>${L(p.email)}</div><div>${L(Ye(p.role))}</div></div>
            </article>`).join("")}
          </div>
          ${r.pendingInvitations.length?`<h3 class="section-title" style="margin-top:20px;">Pending invitations</h3>
            <div class="kids-progress-grid">${r.pendingInvitations.map(p=>`<article class="kid-progress-card">
              <div class="kid-progress-header">${L(p.email)}</div>
              <div class="kid-progress-stats"><div>${L(Ye(p.role))}</div><div>Expires ${new Date(p.expiresAt).toLocaleDateString()}</div></div>
            </article>`).join("")}</div>`:""}
        </section>

        <section>
          <h2 class="section-title">Learner Progress</h2>
          <div class="kids-progress-grid">
            ${r.learners.map(p=>{const g=new Map(p.progress.map(f=>[f.packId,f]));return`<article class="kid-progress-card">
                <div class="kid-progress-header">${L(p.name)} ${p.linked?'<span style="color:var(--teal);font-size:12px;">✓ Sign-in linked</span>':""}</div>
                <div class="kid-progress-stats">
                  ${t.languagePacks.map(f=>{const $=g.get(f.id)||{stars:0,completedLessons:0,activeDays:0};return`<div><strong>${L(Da[f.id]||f.targetLanguage.name)}</strong>: ${$.completedLessons}/200 lessons · ${$.activeDays} active days · ${$.stars} stars</div>`}).join("")}
                </div>
                <button class="btn btn-secondary" data-repair-learner="${L(p.id)}" data-learner-name="${L(p.name)}" style="margin-top:12px;">Link or repair Google sign-in</button>
              </article>`}).join("")||"<p>No learners have been added yet.</p>"}
          </div>
        </section>`:""}
    </main>`,(l=e.querySelector("#family-back-btn"))==null||l.addEventListener("click",a.goProfileSelect),(d=e.querySelector("#choose-learner-btn"))==null||d.addEventListener("click",a.goProfileSelect),(c=e.querySelector("#overview-invite-partner-btn"))==null||c.addEventListener("click",async()=>{const p=prompt("Enter your partner's Google account email:");p!=null&&p.trim()&&await a.invitePartner(p.trim(),!0)}),(u=e.querySelector("#start-family-play-btn"))==null||u.addEventListener("click",async()=>{const p=[...e.querySelectorAll('input[name="family-participant"]:checked')].map(g=>g.value);if(!p.length){window.alert("Select at least one learner for Family Play.");return}await a.startFamilySession(p)}),(h=e.querySelector("#continue-family-play-btn"))==null||h.addEventListener("click",a.openFamilySession),e.querySelectorAll("[data-review-session]").forEach(p=>{p.addEventListener("click",()=>a.reviewFamilySession(p.dataset.reviewSession))}),e.querySelectorAll("[data-repair-learner]").forEach(p=>{p.addEventListener("click",async()=>{const g=prompt(`Enter the Google email for ${p.dataset.learnerName}:`);g!=null&&g.trim()&&await a.repairLearnerSignIn(p.dataset.repairLearner,p.dataset.learnerName,g.trim())})})}function P(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function Ca(e,t){var i,s,o,l,d;if(e.type==="ready")return`<div class="family-ready-call"><span aria-hidden="true">⚓</span><div><strong>Gather your crew</strong><p>Open Family Play on each learner's device. When everyone shows Ready, the parent can begin.</p></div></div>`;const a=e.items||((i=e.dialogue)==null?void 0:i.lines)||[],r=t?`<div class="family-turn-prompt"><span>${P(t.name).slice(0,1)}</span><div><small>It’s your turn</small><strong>${P(t.name)}, say it first—then everyone together.</strong></div></div>`:"";return a.length?`${r}<div class="family-play-phrases">
      ${a.slice(0,8).map((c,u)=>{const h=c.targetText||c.target||c.text||c.line||"",p=c.supportText||c.support||c.translation||"";return`<article class="family-play-phrase">
          <div><strong>${P(h)}</strong>${p?`<small>${P(p)}</small>`:""}</div>
          ${h?`<button class="dialogue-play-btn" data-family-audio="${u}" aria-label="Play ${P(h)}">►</button>`:""}
        </article>`}).join("")}
    </div>`:e.note?`${r}<div class="family-play-note">${P(e.note)}</div>`:(o=(s=e.quiz)==null?void 0:s.questions)!=null&&o.length?`${r}<div class="family-play-challenge"><span>Family challenge</span><strong>${P(e.quiz.questions[0].promptText)}</strong><p>Take turns answering aloud. The parent can replay or discuss before moving on.</p></div>`:(d=(l=e.match)==null?void 0:l.tiles)!=null&&d.length?`${r}<div class="family-play-challenge"><span>Family challenge</span><strong>Match the words aloud together</strong><p>Each person chooses a pair and explains it before the parent moves forward.</p></div>`:`${r}<div class="family-play-challenge"><span>Speak together</span><strong>${P(e.subtitle||"Practice this section as a family.")}</strong></div>`}function za(e,t,a){var m,T,y,x,M,q,A,v,O,X,W,oe,me,B,U;const r=(m=t.familyPlayState)==null?void 0:m.activeSession,i=t.activeLesson;if(!r||!i){e.innerHTML='<main class="container"><p role="alert">This Family Play session is no longer active.</p><button class="btn btn-secondary" id="family-play-back">Return</button></main>',e.querySelector("#family-play-back").addEventListener("click",a.goFamilyOverview);return}const s=at(i,[],{random:_t(`${r.id}:${i.id}`)}),o=[{type:"ready",title:"Is everyone ready?",subtitle:"Join on each device before setting sail together."},...s],l=Math.min(r.currentSegment||0,o.length-1),d=o[l],c=!t.linkedLearnerProfileId&&(((y=(T=t.families)==null?void 0:T[0])==null?void 0:y.role)==="owner"||((M=(x=t.families)==null?void 0:x[0])==null?void 0:M.role)==="adult_guide"),u=c&&r.controllingAdult===((q=t.sessionUser)==null?void 0:q.id),h=(((A=t.familyOverview)==null?void 0:A.members)||[]).filter(w=>{var k;return(w.role==="owner"||w.role==="adult_guide")&&w.userId!==((k=t.sessionUser)==null?void 0:k.id)}),p=l===o.length-1,g=d.items||((v=d.dialogue)==null?void 0:v.lines)||[],f=r.participants.filter(w=>w.status==="joined"||w.status==="credited"),$=f.length===r.participants.length&&f.length>0,j=d.type==="ready"||!r.participants.length?null:r.participants[(l-1)%r.participants.length],S=ct(i.topicId),I=(S==null?void 0:S.src)||"https://kormilo-nautilus.netlify.app/assets/illustrations/nautilus-voyage-panorama-v2.jpg";e.innerHTML=`
    <header class="navbar family-play-nav">
      <button class="logo" id="family-play-exit" aria-label="Leave Family Play">
        <div class="logo-icon">${_.targetLanguage.code.toUpperCase()}</div>
        <div><div class="logo-title">Family Play</div><small>Voyage day ${r.voyageDay}</small></div>
      </button>
      <div class="family-play-live"><i></i>${r.status==="paused"?"Paused":"Together now"}</div>
    </header>
    <main class="family-play-stage ${S?`family-play-stage--${P(i.topicId)}`:""}" style="--family-step:${Math.round((l+1)/o.length*100)}%">
      <img class="family-play-scene" src="${I}" alt="" aria-hidden="true">
      <div class="family-play-atmosphere" aria-hidden="true"></div>
      <aside class="family-crew" aria-label="Family Play crew">
        <div class="family-crew__heading"><div><small>Family crew</small><strong>${f.length} of ${r.participants.length} ready</strong></div><span class="family-crew__signal ${$?"ready":""}"></span></div>
        <div class="family-crew__people">
          ${r.participants.map(w=>{const k=w.status==="joined"||w.status==="credited",De=(j==null?void 0:j.profileId)===w.profileId;return`<div class="family-crew-person ${k?"ready":""} ${De?"speaking":""}"><span>${P(w.name).slice(0,1)}</span><div><strong>${P(w.name)}</strong><small>${De?"Speaking now":k?"Ready":"Connecting…"}</small></div></div>`}).join("")}
        </div>
        <div class="family-crew__captain"><small>Controller</small><strong>🎛 ${P(r.controllerName||"Family guide")}</strong>${u?"<span>You are leading</span>":"<span>Following live</span>"}</div>
      </aside>
      <section class="family-play-panel" aria-labelledby="family-play-title">
        <div class="family-play-meta">
          <span>${P(i.title)}</span>
          <span>Part ${l+1} of ${o.length}</span>
        </div>
        <div class="session-steps-bar" role="progressbar" aria-valuenow="${l+1}" aria-valuemin="1" aria-valuemax="${o.length}">
          ${o.map((w,k)=>`<div class="session-step-segment ${k<=l?"active":""}"></div>`).join("")}
        </div>
        <p class="hero-tag">${u?"You are leading":`Following ${P(r.controllerName||"the family guide")}`}</p>
        <h1 id="family-play-title">${P(d.title)}</h1>
        <p class="family-play-subtitle">${P(d.subtitle)}</p>
        ${Ca(d,j)}
        ${u?`<div class="family-play-controls">
          <button class="btn btn-secondary" id="family-play-prev" ${l===0?"disabled":""}>← Back</button>
          <button class="btn btn-secondary" id="family-play-audio">► Play all</button>
          <button class="btn btn-secondary" id="family-play-pause">${r.status==="paused"?"Resume":"Pause"}</button>
          ${p?'<button class="btn btn-primary family-complete-btn" id="family-play-complete">✓ Complete for Family</button>':`<button class="btn btn-primary" id="family-play-next" ${d.type==="ready"&&!$?'disabled aria-describedby="family-ready-help"':""}>${d.type==="ready"?"Start Together →":"Next →"}</button>`}
          ${h.length?`<label class="family-handoff">Hand off to
            <select id="family-handoff-select"><option value="">Choose adult…</option>${h.map(w=>`<option value="${w.userId}">${P(w.name)}</option>`).join("")}</select>
          </label>`:""}
        </div>${d.type==="ready"&&!$?'<p class="family-ready-help" id="family-ready-help">Waiting for every learner to open this Family Play session.</p>':""}`:'<p class="family-play-following">The parent controls this shared lesson. You can answer, read, and speak along.</p>'}
        ${c&&!u&&r.canTakeControl?'<button class="btn btn-secondary family-take-control" id="family-take-control">Take Control</button>':""}
      </section>
    </main>`,e.querySelector("#family-play-exit").addEventListener("click",c?a.goFamilyOverview:a.goDashboard),e.querySelectorAll("[data-family-audio]").forEach(w=>{w.addEventListener("click",()=>{const k=g[Number(w.dataset.familyAudio)];a.speak((k==null?void 0:k.targetText)||(k==null?void 0:k.target)||(k==null?void 0:k.text)||(k==null?void 0:k.line)||"")})}),(O=e.querySelector("#family-play-audio"))==null||O.addEventListener("click",()=>{const w=g.map(k=>k.targetText||k.target||k.text||k.line).filter(Boolean).join(". ");w&&a.speak(w)}),(X=e.querySelector("#family-play-prev"))==null||X.addEventListener("click",()=>a.controlFamilySession("live",l-1)),(W=e.querySelector("#family-play-next"))==null||W.addEventListener("click",()=>a.controlFamilySession("live",l+1)),(oe=e.querySelector("#family-play-pause"))==null||oe.addEventListener("click",()=>a.controlFamilySession(r.status==="paused"?"live":"paused",l)),(me=e.querySelector("#family-play-complete"))==null||me.addEventListener("click",a.completeFamilySession),(B=e.querySelector("#family-take-control"))==null||B.addEventListener("click",a.claimFamilyController),(U=e.querySelector("#family-handoff-select"))==null||U.addEventListener("change",w=>{w.target.value&&a.handoffFamilyController(w.target.value)})}const n={profile:null,isGuide:!1,screen:"profile-select",sessionUser:null,families:null,familyError:null,familyNotice:null,familyOverview:null,familyOverviewLoading:!1,familyPlayState:null,familyProgress:null,linkedLearnerProfileId:null,activePackId:"montenegrin-en",languagePacks:kt(),stars:0,streakDays:0,completedTopicIds:[],completedLessons:[],activityDates:[],dialoguesDone:0,topicId:null,activity:"flashcards",calendarMonth:0,activeLesson:null,session:null,flash:{order:null,idx:0,flipped:!1},match:{tiles:[],selectedIds:[],matchedIds:[]},quiz:{questions:[],qIdx:0,score:0,selected:null,answered:!1},listen:{order:null,idx:0,revealed:!1},dialogue:{readAs:null,showEn:!1},recording:{status:"idle",url:null,error:null,chunks:[],recorder:null}},N=document.getElementById("app");function Aa(e){if(!("speechSynthesis"in window))return;const t=_.targetLanguage.code==="sq"?"sq-AL":"hr-HR",a=new SpeechSynthesisUtterance(e);a.lang=t,a.rate=.85,window.speechSynthesis.cancel(),window.speechSynthesis.speak(a)}const F={selectLanguage:async e=>{if(n.profile){if(Pe(n.profile,e),n.sessionUser)try{await Oe()}catch(t){n.familyError=t.message}if(R(n.profile),n.sessionUser)try{await G()}catch(t){n.familyError=t.message}n.screen="dashboard",le(),b()}},createFamily:async e=>{n.familyError=null;try{await Jt(e),n.families=await We(),await Oe(),b()}catch(t){n.familyError=t.message,b()}},invitePartner:async(e,t=!1)=>{var r,i;const a=(i=(r=n.families)==null?void 0:r[0])==null?void 0:i.family_id;if(a){n.familyError=null,n.familyNotice=null;try{const s=await Qt(a,e,"adult_guide"),o=new URL(`${window.location.origin}${window.location.pathname}`);o.searchParams.set("invite",s);try{await navigator.clipboard.writeText(o.toString())}catch{window.prompt("Copy this invitation link:",o.toString())}n.familyNotice=`Partner invitation copied. Send the link to ${e}; it expires in 7 days.`}catch(s){n.familyError=s.message}t?await F.goFamilyOverview():b()}},inviteLearner:async(e,t,a)=>{n.familyError=null,n.familyNotice=null;try{const r=await Zt(e,a),i=new URL(`${window.location.origin}${window.location.pathname}`);i.searchParams.set("invite",r);try{await navigator.clipboard.writeText(i.toString())}catch{window.prompt("Copy this invitation link:",i.toString())}n.familyNotice=`${t}'s sign-in invitation was copied. Send it to ${a}; it expires in 7 days.`}catch(r){n.familyError=r.message}b()},repairLearnerSignIn:async(e,t,a)=>{var r,i;n.familyError=null,n.familyNotice=null;try{await Xt(e,a),n.familyNotice=`${t} is now linked to ${a} as a learner.`,n.families=await We(),n.familyOverview=await ge((i=(r=n.families)==null?void 0:r[0])==null?void 0:i.family_id)}catch(s){n.familyError=s.message}b()},goDashboard:()=>{n.screen="dashboard",le(),b(),window.scrollTo({top:0,behavior:"auto"})},goCurriculum:()=>{n.screen="curriculum",le(),b(),window.scrollTo({top:0,behavior:"auto"})},goProfileSelect:()=>{n.screen="profile-select",n.profile=null,le(),b()},goFamilyOverview:async()=>{var e,t;n.profile=null,n.screen="family-overview",n.familyOverviewLoading=!0,n.familyError=null,b();try{const a=(t=(e=n.families)==null?void 0:e[0])==null?void 0:t.family_id;n.familyOverview=await ge(a),n.familyPlayState=await st(a,n.activePackId),n.familyProgress=await Be(a,n.activePackId)}catch(a){n.familyError=a.message}finally{n.familyOverviewLoading=!1,b()}},startFamilySession:async e=>{var s,o,l;const t=(o=(s=n.families)==null?void 0:s[0])==null?void 0:o.family_id,a=n.languagePacks.find(d=>d.id===n.activePackId),r=((l=n.familyPlayState)==null?void 0:l.completedDays)||0,i=C[Math.min(r,199)];n.familyError=null;try{await ta({familyId:t,packId:a.id,packVersion:a.version,lessonId:i.id,voyageDay:r+1,participantProfileIds:e}),await G(),n.activeLesson=i,n.screen="family-play"}catch(d){n.familyError=d.message}b()},openFamilySession:async()=>{var t,a,r,i,s,o,l;const e=(t=n.familyPlayState)==null?void 0:t.activeSession;if(e){n.familyError=null;try{const d=!!n.linkedLearnerProfileId;!d&&((r=(a=n.families)==null?void 0:a[0])==null?void 0:r.role)!=="learner"&&!n.familyOverview&&(n.familyOverview=await ge((s=(i=n.families)==null?void 0:i[0])==null?void 0:s.family_id)),d||((l=(o=n.families)==null?void 0:o[0])==null?void 0:l.role)==="learner"?await ia(e.id):e.canTakeControl&&await Re(e.id),await G(),n.activeLesson=C.find(c=>c.id===e.lessonId)||C[e.voyageDay-1],n.screen="family-play"}catch(d){n.familyError=d.message}b()}},claimFamilyController:async()=>{var t,a;const e=(a=(t=n.familyPlayState)==null?void 0:t.activeSession)==null?void 0:a.id;if(e){try{await Re(e),await G()}catch(r){n.familyError=r.message}b()}},handoffFamilyController:async e=>{var a,r;const t=(r=(a=n.familyPlayState)==null?void 0:a.activeSession)==null?void 0:r.id;if(t){try{await sa(t,e),await G()}catch(i){n.familyError=i.message}b()}},reviewFamilySession:async e=>{var a,r;const t=((r=(a=n.familyOverview)==null?void 0:a.learners)==null?void 0:r.map(i=>i.id))||[];try{await na(e,t),await G(),await F.openFamilySession()}catch(i){n.familyError=i.message,b()}},controlFamilySession:async(e,t)=>{var r,i;const a=(i=(r=n.familyPlayState)==null?void 0:r.activeSession)==null?void 0:i.id;if(a){try{await aa(a,e,t),await G()}catch(s){n.familyError=s.message}b()}},completeFamilySession:async()=>{var t,a,r,i,s,o;const e=(a=(t=n.familyPlayState)==null?void 0:t.activeSession)==null?void 0:a.id;if(e){try{await ra(e),await G(),n.screen="family-overview",n.activeLesson=null,n.familyNotice="Family voyage day completed together.",n.familyOverview=await ge((i=(r=n.families)==null?void 0:r[0])==null?void 0:i.family_id),n.familyProgress=await Be((o=(s=n.families)==null?void 0:s[0])==null?void 0:o.family_id,n.activePackId)}catch(l){n.familyError=l.message}b()}},refresh:()=>{n.profile&&R(n.profile),b()},switchProfile:e=>{At(e),n.profile=e,Pe(e),R(e),n.screen="dashboard",le();const t=C.find(a=>!n.completedLessons.includes(a.id));t&&(n.calendarMonth=t.month),b()},openTopic:e=>{n.topicId=e,n.screen="topic",n.activity="flashcards",n.flash={order:null,idx:0,flipped:!1},n.match={tiles:[],selectedIds:[],matchedIds:[]},n.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},n.listen={order:null,idx:0,revealed:!1},n.dialogue={readAs:null,showEn:!0},b()},setActivity:e=>{n.activity=e,n.flash={order:null,idx:0,flipped:!1},n.match={tiles:[],selectedIds:[],matchedIds:[]},n.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},n.listen={order:null,idx:0,revealed:!1},n.dialogue={readAs:null,showEn:!0},b()},startSession:e=>{n.activeLesson=e,n.screen="session",n.session=null,b()},nextSessionStep:()=>{n.session&&(n.session.stepIdx++,n.session.flash={idx:0,flipped:!1},n.session.quiz=null,n.session.match=null,b())},completeLesson:e=>{Bt(n.profile,e);const t=n.activeLesson.topicId;t&&n.activeLesson.type==="checkpoint"&&Ne(n.profile,t),R(n.profile),F.goDashboard()},markTopicCompleted:e=>{Ne(n.profile,e),R(n.profile)},awardStars:e=>{Rt(n.profile,e),R(n.profile)},incrementDialogues:()=>{Ut(n.profile),R(n.profile)},speak:Aa,startMixedReview:()=>{const t=n.completedTopicIds.map(a=>H(a)).filter(Boolean).flatMap(a=>a.items);t.length!==0&&(n.activeLesson={id:"mixed-review",title:"Mixed Review",detail:"Practice from all completed topics",topicId:null,month:0},n.screen="session",n.session={lessonId:"mixed-review",stepIdx:0,steps:[{type:"quiz",title:"Review Quiz",subtitle:"Test your retention",quiz:V(t,8)},{type:"match",title:"Review Match",subtitle:"Match terms quickly",match:ee(t,8)},{type:"done",title:"Review Finished!",subtitle:"You completed your mixed review!"}],flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}},b())}};function le(){n.activeLesson=null,n.session=null}function R(e){const t=Z(e);t&&(n.stars=t.stars,n.streakDays=t.streakDays,n.completedTopicIds=t.completedTopicIds,n.completedLessons=t.completedLessons,n.activityDates=t.activityDates,n.dialoguesDone=t.dialoguesDone,n.isGuide=t.isGuide)}function Pe(e,t=null){const a=t||Et(e),i=n.languagePacks.some(s=>s.id===a)?a:"montenegrin-en";$t(i),qt(),Dt(e,i),n.activePackId=i}async function G(){var t,a;const e=(a=(t=n.families)==null?void 0:t[0])==null?void 0:a.family_id;if(!e||!n.sessionUser){n.familyPlayState=null;return}n.familyPlayState=await st(e,n.activePackId)}let pe=null,de=null,we=null;function Fa(){var t,a;clearInterval(pe),pe=null;const e=(t=n.familyPlayState)==null?void 0:t.activeSession;!e||e.controllingAdult!==((a=n.sessionUser)==null?void 0:a.id)||n.screen!=="family-play"||(pe=setInterval(()=>oa(e.id).catch(()=>{}),45e3))}function Ke(){var t,a;const e=(a=(t=n.familyPlayState)==null?void 0:t.activeSession)==null?void 0:a.id;if(n.screen!=="family-play"||!e){clearInterval(de),de=null,we=null;return}de&&we===e||(clearInterval(de),we=e,de=setInterval(async()=>{try{await G(),n.screen==="family-play"&&b()}catch{}},5e3))}function b(){if(N.innerHTML="",n.screen==="family-play"){Fa(),Ke(),za(N,n,F);return}if(clearInterval(pe),pe=null,Ke(),!n.profile){n.screen==="family-overview"?Ma(N,n,F):(n.screen="profile-select",la(N,n,F));return}if(n.screen==="dashboard"){fa(N,n,F);const e=N.querySelector("#calendar-mount");e&&va(e,n,()=>{n.calendarMonth=Math.max(0,n.calendarMonth-1),b()},()=>{n.calendarMonth=Math.min(9,n.calendarMonth+1),b()})}else n.screen==="topic"?ut(N,n,F):n.screen==="session"?ja(N,n,F):n.screen==="curriculum"&&Ea(N,n,F)}async function Ha(){window.addEventListener("online",()=>{rt(),b()}),window.addEventListener("offline",()=>{b()});const e=zt();if(e){n.profile=e,Pe(e),R(e),n.screen="dashboard";const t=C.find(a=>!n.completedLessons.includes(a.id));n.calendarMonth=t?t.month:0}else n.screen="profile-select";b()}window.addEventListener("DOMContentLoaded",Ha);
