(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const je={id:"montenegrin-en",version:"0.1.0"},Ie={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},Le=JSON.parse(`[{"id":"family","month":1,"title":"Family","subtitle":"Words for relatives","icon":"Fa","color":"#7dd3fc","note":"Your family speaks a Montenegrin-Dalmatian blend — words like dida and kukumar are your family's words, not mistakes. In Montenegrin, grandpa may also be deda.","items":[{"id":"family-item-001","targetText":"mama","supportText":"mom","emoji":"👩"},{"id":"family-item-002","targetText":"tata","supportText":"dad","emoji":"👨"},{"id":"family-item-003","targetText":"brat","supportText":"brother","emoji":"👦"},{"id":"family-item-004","targetText":"sestra","supportText":"sister","emoji":"👧"},{"id":"family-item-005","targetText":"baka","supportText":"grandma (also: baba)","emoji":"👵"},{"id":"family-item-006","targetText":"dida","supportText":"grandpa (Montenegrin: deda)","emoji":"👴"},{"id":"family-item-007","targetText":"sin","supportText":"son","emoji":"👦"},{"id":"family-item-008","targetText":"kćerka","supportText":"daughter (also: kći)","emoji":"👧"},{"id":"family-item-009","targetText":"porodica","supportText":"family","emoji":"👪"},{"id":"family-item-010","targetText":"roditelji","supportText":"parents"},{"id":"family-item-011","targetText":"dijete / djeca","supportText":"child / children","emoji":"👶"},{"id":"family-item-012","targetText":"ko","supportText":"who"}]},{"id":"greetings","month":1,"title":"Greetings","subtitle":"Say hello & introduce yourself","icon":"Zd","color":"#f472b6","items":[{"id":"greetings-item-001","targetText":"Zdravo","supportText":"Hello"},{"id":"greetings-item-002","targetText":"Dobar dan","supportText":"Good afternoon"},{"id":"greetings-item-003","targetText":"Dobro jutro","supportText":"Good morning"},{"id":"greetings-item-004","targetText":"Hvala","supportText":"Thank you"},{"id":"greetings-item-005","targetText":"Molim","supportText":"Please / You're welcome"},{"id":"greetings-item-006","targetText":"Da","supportText":"Yes"},{"id":"greetings-item-007","targetText":"Ne","supportText":"No"},{"id":"greetings-item-008","targetText":"Doviđenja","supportText":"Goodbye"},{"id":"greetings-item-009","targetText":"Ćao","supportText":"Bye / Hi (informal)"},{"id":"greetings-item-010","targetText":"Izvini","supportText":"Sorry / Excuse me"},{"id":"greetings-item-011","targetText":"Kako se zoveš?","supportText":"What's your name?"},{"id":"greetings-item-012","targetText":"Zovem se...","supportText":"My name is..."},{"id":"greetings-item-013","targetText":"Drago mi je","supportText":"Nice to meet you"}],"dialogue":{"roles":["You","New Friend"],"lines":[{"id":"greetings-dialogue-001","targetText":"Dobar dan! Kako se zoveš?","supportText":"Good afternoon! What is your name?","role":"You"},{"id":"greetings-dialogue-002","targetText":"Zovem se Lena. A ti?","supportText":"My name is Lena. And you?","role":"New Friend"},{"id":"greetings-dialogue-003","targetText":"Zovem se Sam. Drago mi je!","supportText":"My name is Sam. Nice to meet you!","role":"You"},{"id":"greetings-dialogue-004","targetText":"Drago mi je! Doviđenja.","supportText":"Nice to meet you too! Goodbye.","role":"New Friend"}]}},{"id":"numbers","month":2,"title":"Numbers","subtitle":"Counting 1–100","icon":"123","color":"#a3e635","items":[{"id":"numbers-item-001","targetText":"jedan","supportText":"one (1)"},{"id":"numbers-item-002","targetText":"dva","supportText":"two (2)"},{"id":"numbers-item-003","targetText":"tri","supportText":"three (3)"},{"id":"numbers-item-004","targetText":"četiri","supportText":"four (4)"},{"id":"numbers-item-005","targetText":"pet","supportText":"five (5)"},{"id":"numbers-item-006","targetText":"šest","supportText":"six (6)"},{"id":"numbers-item-007","targetText":"sedam","supportText":"seven (7)"},{"id":"numbers-item-008","targetText":"osam","supportText":"eight (8)"},{"id":"numbers-item-009","targetText":"devet","supportText":"nine (9)"},{"id":"numbers-item-010","targetText":"deset","supportText":"ten (10)"},{"id":"numbers-item-011","targetText":"dvadeset","supportText":"twenty (20)"},{"id":"numbers-item-012","targetText":"trideset","supportText":"thirty (30)"},{"id":"numbers-item-013","targetText":"pedeset","supportText":"fifty (50)"},{"id":"numbers-item-014","targetText":"sto","supportText":"one hundred (100)"}]},{"id":"colors","month":2,"title":"Colors","subtitle":"boje","icon":"Bo","color":"#7dd3fc","items":[{"id":"colors-item-001","targetText":"crvena","supportText":"red","emoji":"🔴"},{"id":"colors-item-002","targetText":"plava","supportText":"blue","emoji":"🔵"},{"id":"colors-item-003","targetText":"zelena","supportText":"green","emoji":"🟢"},{"id":"colors-item-004","targetText":"žuta","supportText":"yellow","emoji":"🟡"},{"id":"colors-item-005","targetText":"crna","supportText":"black","emoji":"⚫"},{"id":"colors-item-006","targetText":"bijela","supportText":"white","emoji":"⚪"}]},{"id":"drinks","month":3,"title":"Drinks","subtitle":"piće","icon":"Pi","color":"#f472b6","items":[{"id":"drinks-item-001","targetText":"voda","supportText":"water","emoji":"💧"},{"id":"drinks-item-002","targetText":"kafa","supportText":"coffee","emoji":"☕"},{"id":"drinks-item-003","targetText":"čaj","supportText":"tea","emoji":"🍵"},{"id":"drinks-item-004","targetText":"sok","supportText":"juice","emoji":"🧃"},{"id":"drinks-item-005","targetText":"mlijeko","supportText":"milk","emoji":"🥛"},{"id":"drinks-item-006","targetText":"pivo","supportText":"beer","emoji":"🍺"},{"id":"drinks-item-007","targetText":"vino","supportText":"wine","emoji":"🍷"},{"id":"drinks-item-008","targetText":"rakija","supportText":"rakija (homemade brandy)","emoji":"🥃"}]},{"id":"food","month":3,"title":"Food","subtitle":"hrana","icon":"Hr","color":"#a3e635","items":[{"id":"food-item-001","targetText":"kruh","supportText":"bread (also: hljeb)","emoji":"🍞"},{"id":"food-item-002","targetText":"sir","supportText":"cheese","emoji":"🧀"},{"id":"food-item-003","targetText":"meso","supportText":"meat","emoji":"🥩"},{"id":"food-item-004","targetText":"riba","supportText":"fish","emoji":"🐟"},{"id":"food-item-005","targetText":"jaje / jaja","supportText":"egg / eggs","emoji":"🥚"},{"id":"food-item-006","targetText":"salata","supportText":"salad","emoji":"🥗"},{"id":"food-item-007","targetText":"supa / čorba","supportText":"soup","emoji":"🍲"},{"id":"food-item-008","targetText":"sladoled","supportText":"ice cream","emoji":"🍦"},{"id":"food-item-009","targetText":"jabuka","supportText":"apple","emoji":"🍎"}]},{"id":"veg","month":4,"title":"Vegetables & Market","subtitle":"pijaca","icon":"Pj","color":"#7dd3fc","items":[{"id":"veg-item-001","targetText":"paradajz","supportText":"tomato","emoji":"🍅"},{"id":"veg-item-002","targetText":"kukumar","supportText":"cucumber","emoji":"🥒"},{"id":"veg-item-003","targetText":"krompir","supportText":"potato","emoji":"🥔"},{"id":"veg-item-004","targetText":"luk","supportText":"onion","emoji":"🧅"},{"id":"veg-item-005","targetText":"bijeli luk","supportText":"garlic (literally 'white onion')","emoji":"🧄"},{"id":"veg-item-006","targetText":"paprika","supportText":"pepper","emoji":"🫑"},{"id":"veg-item-007","targetText":"mrkva","supportText":"carrot","emoji":"🥕"},{"id":"veg-item-008","targetText":"kupus","supportText":"cabbage","emoji":"🥬"}]},{"id":"cafe","month":4,"title":"At a Café","subtitle":"Order like a local","icon":"Ka","color":"#f472b6","note":"Hoću = I want, Neću = I don't want.\\nWords ending in -a often change to -u after these: kafa → Hoću kafu, voda → Hoću vodu.","items":[{"id":"cafe-item-001","targetText":"Dobar dan!","supportText":"Good afternoon! (greeting)"},{"id":"cafe-item-002","targetText":"Izvolite?","supportText":"What can I get you?"},{"id":"cafe-item-003","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please."},{"id":"cafe-item-004","targetText":"Još nešto?","supportText":"Anything else?"},{"id":"cafe-item-005","targetText":"Hvala","supportText":"Thank you"},{"id":"cafe-item-006","targetText":"Račun, molim.","supportText":"The bill, please."}],"dialogue":{"roles":["Waiter","Customer"],"lines":[{"id":"cafe-dialogue-001","targetText":"Dobar dan! Izvolite?","supportText":"Good afternoon! What can I get you?","role":"Waiter"},{"id":"cafe-dialogue-002","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please.","role":"Customer"},{"id":"cafe-dialogue-003","targetText":"Još nešto?","supportText":"Anything else?","role":"Waiter"},{"id":"cafe-dialogue-004","targetText":"Hoću i vodu. Hvala.","supportText":"I'll also have water. Thanks.","role":"Customer"},{"id":"cafe-dialogue-005","targetText":"Izvolite.","supportText":"Here you go.","role":"Waiter"},{"id":"cafe-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"Customer"},{"id":"cafe-dialogue-007","targetText":"Račun, molim.","supportText":"The bill, please.","role":"Customer"},{"id":"cafe-dialogue-008","targetText":"Doviđenja!","supportText":"Goodbye!","role":"Waiter"}]}},{"id":"talkfamily","month":5,"title":"Talking About Family","subtitle":"\\"my brother\\", \\"I have a sister\\"","icon":"Mo","color":"#a3e635","items":[{"id":"talkfamily-item-001","targetText":"moj","supportText":"my (masculine)"},{"id":"talkfamily-item-002","targetText":"moja","supportText":"my (feminine)"},{"id":"talkfamily-item-003","targetText":"moj brat","supportText":"my brother"},{"id":"talkfamily-item-004","targetText":"moja sestra","supportText":"my sister"},{"id":"talkfamily-item-005","targetText":"moje dijete","supportText":"my child"},{"id":"talkfamily-item-006","targetText":"Imam brata.","supportText":"I have a brother."},{"id":"talkfamily-item-007","targetText":"Imam sestru.","supportText":"I have a sister."},{"id":"talkfamily-item-008","targetText":"Kako se zove tvoj brat?","supportText":"What's your brother's name?"},{"id":"talkfamily-item-009","targetText":"Moj brat se zove Sam.","supportText":"My brother is named Sam."},{"id":"talkfamily-item-010","targetText":"Ovo je moja porodica.","supportText":"This is my family."},{"id":"talkfamily-item-011","targetText":"A ko je ovo?","supportText":"And who is this?"}]},{"id":"aboutme","month":5,"title":"About Me","subtitle":"Simple sentences about yourself","icon":"Ja","color":"#7dd3fc","items":[{"id":"aboutme-item-001","targetText":"Ja se zovem ___.","supportText":"My name is ___."},{"id":"aboutme-item-002","targetText":"Koliko imaš godina?","supportText":"How old are you?"},{"id":"aboutme-item-003","targetText":"Imam ___ godina.","supportText":"I am ___ years old."},{"id":"aboutme-item-004","targetText":"Volim čokoladu.","supportText":"I love chocolate."},{"id":"aboutme-item-005","targetText":"Idem u školu.","supportText":"I am going to school."},{"id":"aboutme-item-006","targetText":"Idem na plažu.","supportText":"I'm going to the beach."},{"id":"aboutme-item-007","targetText":"Gdje živiš?","supportText":"Where do you live?"},{"id":"aboutme-item-008","targetText":"Živim u ___.","supportText":"I live in ___."}]},{"id":"days","month":6,"title":"Days & Time","subtitle":"dani u sedmici","icon":"Dn","color":"#f472b6","items":[{"id":"days-item-001","targetText":"ponedjeljak","supportText":"Monday"},{"id":"days-item-002","targetText":"utorak","supportText":"Tuesday"},{"id":"days-item-003","targetText":"srijeda","supportText":"Wednesday"},{"id":"days-item-004","targetText":"četvrtak","supportText":"Thursday"},{"id":"days-item-005","targetText":"petak","supportText":"Friday"},{"id":"days-item-006","targetText":"subota","supportText":"Saturday"},{"id":"days-item-007","targetText":"nedjelja","supportText":"Sunday"},{"id":"days-item-008","targetText":"danas","supportText":"today"},{"id":"days-item-009","targetText":"sutra","supportText":"tomorrow"},{"id":"days-item-010","targetText":"juče","supportText":"yesterday"}]},{"id":"outabout","month":6,"title":"Out & About","subtitle":"Travel phrases","icon":"Va","color":"#a3e635","items":[{"id":"outabout-item-001","targetText":"Gdje je...?","supportText":"Where is...?"},{"id":"outabout-item-002","targetText":"Koliko košta?","supportText":"How much does it cost?"},{"id":"outabout-item-003","targetText":"Ne razumijem.","supportText":"I don't understand."},{"id":"outabout-item-004","targetText":"Govorite li engleski?","supportText":"Do you speak English?"},{"id":"outabout-item-005","targetText":"Molim vas.","supportText":"Please (formal)"},{"id":"outabout-item-006","targetText":"Izvinite.","supportText":"Excuse me (formal)"},{"id":"outabout-item-007","targetText":"lijevo","supportText":"left"},{"id":"outabout-item-008","targetText":"desno","supportText":"right"},{"id":"outabout-item-009","targetText":"plaža","supportText":"beach"},{"id":"outabout-item-010","targetText":"more","supportText":"sea"}]},{"id":"weather","month":7,"title":"Weather","subtitle":"vrijeme","icon":"We","color":"#7dd3fc","items":[{"id":"weather-item-001","targetText":"sunce","supportText":"sun","emoji":"☀️"},{"id":"weather-item-002","targetText":"kiša","supportText":"rain","emoji":"🌧️"},{"id":"weather-item-003","targetText":"vjetar","supportText":"wind","emoji":"💨"},{"id":"weather-item-004","targetText":"oblačno","supportText":"cloudy","emoji":"☁️"},{"id":"weather-item-005","targetText":"toplo","supportText":"warm"},{"id":"weather-item-006","targetText":"hladno","supportText":"cold","emoji":"🥶"},{"id":"weather-item-007","targetText":"Kakvo je vrijeme?","supportText":"What's the weather like?"},{"id":"weather-item-008","targetText":"Sunčano je.","supportText":"It's sunny."}]},{"id":"emotions","month":7,"title":"Emotions & Feelings","subtitle":"osjećanja","icon":"Em","color":"#f472b6","items":[{"id":"emotions-item-001","targetText":"sretan / sretna","supportText":"happy"},{"id":"emotions-item-002","targetText":"tužan / tužna","supportText":"sad"},{"id":"emotions-item-003","targetText":"umoran / umorna","supportText":"tired"},{"id":"emotions-item-004","targetText":"gladan / gladna","supportText":"hungry"},{"id":"emotions-item-005","targetText":"žedan / žedna","supportText":"thirsty"},{"id":"emotions-item-006","targetText":"uzbuđen / uzbuđena","supportText":"excited"},{"id":"emotions-item-007","targetText":"Kako se osjećaš?","supportText":"How do you feel?"}]},{"id":"house","month":8,"title":"House & Home","subtitle":"kuća","icon":"Ho","color":"#a3e635","items":[{"id":"house-item-001","targetText":"kuća","supportText":"house","emoji":"🏠"},{"id":"house-item-002","targetText":"soba","supportText":"room"},{"id":"house-item-003","targetText":"kuhinja","supportText":"kitchen","emoji":"🍳"},{"id":"house-item-004","targetText":"kupatilo","supportText":"bathroom","emoji":"🚿"},{"id":"house-item-005","targetText":"krevet","supportText":"bed","emoji":"🛏️"},{"id":"house-item-006","targetText":"vrata","supportText":"door","emoji":"🚪"},{"id":"house-item-007","targetText":"prozor","supportText":"window","emoji":"🪟"},{"id":"house-item-008","targetText":"dvorište","supportText":"yard","emoji":"🌳"}]},{"id":"clothes","month":8,"title":"Clothes","subtitle":"odjeća","icon":"Cl","color":"#7dd3fc","items":[{"id":"clothes-item-001","targetText":"majica","supportText":"t-shirt","emoji":"👕"},{"id":"clothes-item-002","targetText":"pantalone","supportText":"pants","emoji":"👖"},{"id":"clothes-item-003","targetText":"haljina","supportText":"dress","emoji":"👗"},{"id":"clothes-item-004","targetText":"cipele","supportText":"shoes","emoji":"👟"},{"id":"clothes-item-005","targetText":"jakna","supportText":"jacket","emoji":"🧥"},{"id":"clothes-item-006","targetText":"kupaći kostim","supportText":"swimsuit","emoji":"🩱"},{"id":"clothes-item-007","targetText":"šešir","supportText":"hat","emoji":"👒"}]},{"id":"body","month":9,"title":"Body & Health","subtitle":"tijelo","icon":"Bd","color":"#f472b6","items":[{"id":"body-item-001","targetText":"glava","supportText":"head"},{"id":"body-item-002","targetText":"ruka","supportText":"hand / arm"},{"id":"body-item-003","targetText":"noga","supportText":"leg / foot"},{"id":"body-item-004","targetText":"stomak","supportText":"stomach"},{"id":"body-item-005","targetText":"Boli me glava.","supportText":"My head hurts."},{"id":"body-item-006","targetText":"Dobro sam.","supportText":"I'm fine."}]},{"id":"shopping","month":9,"title":"Shopping","subtitle":"kupovina","icon":"Sh","color":"#a3e635","items":[{"id":"shopping-item-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?"},{"id":"shopping-item-002","targetText":"Koliko košta ovo?","supportText":"How much is this?"},{"id":"shopping-item-003","targetText":"Hoću da kupim...","supportText":"I want to buy..."},{"id":"shopping-item-004","targetText":"Imate li...?","supportText":"Do you have...?"},{"id":"shopping-item-005","targetText":"Samo gledam.","supportText":"I'm just looking."},{"id":"shopping-item-006","targetText":"skupo","supportText":"expensive"},{"id":"shopping-item-007","targetText":"jeftino","supportText":"cheap"}],"dialogue":{"roles":["Shopkeeper","You"],"lines":[{"id":"shopping-dialogue-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?","role":"Shopkeeper"},{"id":"shopping-dialogue-002","targetText":"Koliko košta ovo?","supportText":"How much is this?","role":"You"},{"id":"shopping-dialogue-003","targetText":"Deset eura.","supportText":"Ten euros.","role":"Shopkeeper"},{"id":"shopping-dialogue-004","targetText":"To je malo skupo. Sedam?","supportText":"That's a bit expensive. Seven?","role":"You"},{"id":"shopping-dialogue-005","targetText":"Dobro, sedam.","supportText":"Okay, seven.","role":"Shopkeeper"},{"id":"shopping-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"You"}]}},{"id":"directions","month":10,"title":"Directions & Places","subtitle":"pravci","icon":"Di","color":"#7dd3fc","items":[{"id":"directions-item-001","targetText":"prodavnica","supportText":"store"},{"id":"directions-item-002","targetText":"banka","supportText":"bank"},{"id":"directions-item-003","targetText":"bolnica","supportText":"hospital"},{"id":"directions-item-004","targetText":"blizu","supportText":"near"},{"id":"directions-item-005","targetText":"daleko","supportText":"far"},{"id":"directions-item-006","targetText":"Idi pravo.","supportText":"Go straight."},{"id":"directions-item-007","targetText":"Skreni lijevo.","supportText":"Turn left."},{"id":"directions-item-008","targetText":"Skreni desno.","supportText":"Turn right."}]},{"id":"beach","month":10,"title":"Beach & Summer","subtitle":"plaža i ljeto","icon":"Bc","color":"#f472b6","items":[{"id":"beach-item-001","targetText":"pijesak","supportText":"sand"},{"id":"beach-item-002","targetText":"talas","supportText":"wave"},{"id":"beach-item-003","targetText":"kupanje","supportText":"swimming"},{"id":"beach-item-004","targetText":"peškir","supportText":"towel"},{"id":"beach-item-005","targetText":"sunčane naočare","supportText":"sunglasses"},{"id":"beach-item-006","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!"}],"dialogue":{"roles":["Friend","You"],"lines":[{"id":"beach-dialogue-001","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!","role":"Friend"},{"id":"beach-dialogue-002","targetText":"Odlično! Gdje su moje naočare?","supportText":"Great! Where are my sunglasses?","role":"You"},{"id":"beach-dialogue-003","targetText":"Evo ih, na peškiru.","supportText":"Here they are, on the towel.","role":"Friend"},{"id":"beach-dialogue-004","targetText":"Hvala! Je li voda hladna?","supportText":"Thanks! Is the water cold?","role":"You"},{"id":"beach-dialogue-005","targetText":"Ne, topla je!","supportText":"No, it's warm!","role":"Friend"}]}},{"id":"time","month":11,"title":"Telling Time","subtitle":"sati","icon":"Tm","color":"#a3e635","items":[{"id":"time-item-001","targetText":"Koliko je sati?","supportText":"What time is it?"},{"id":"time-item-002","targetText":"sat","supportText":"hour / o'clock"},{"id":"time-item-003","targetText":"minut","supportText":"minute"},{"id":"time-item-004","targetText":"podne","supportText":"noon"},{"id":"time-item-005","targetText":"ponoć","supportText":"midnight"},{"id":"time-item-006","targetText":"rano","supportText":"early"},{"id":"time-item-007","targetText":"kasno","supportText":"late"}]},{"id":"hobbies","month":11,"title":"Hobbies","subtitle":"hobiji","icon":"Hb","color":"#7dd3fc","items":[{"id":"hobbies-item-001","targetText":"plivati","supportText":"to swim","emoji":"🏊"},{"id":"hobbies-item-002","targetText":"čitati","supportText":"to read","emoji":"📖"},{"id":"hobbies-item-003","targetText":"igrati fudbal","supportText":"to play soccer","emoji":"⚽"},{"id":"hobbies-item-004","targetText":"slušati muziku","supportText":"to listen to music","emoji":"🎧"},{"id":"hobbies-item-005","targetText":"crtati","supportText":"to draw","emoji":"🎨"},{"id":"hobbies-item-006","targetText":"Šta voliš da radiš?","supportText":"What do you like to do?"}]},{"id":"travel","month":12,"title":"Travel Essentials","subtitle":"putovanje","icon":"Tr","color":"#f472b6","items":[{"id":"travel-item-001","targetText":"aerodrom","supportText":"airport","emoji":"✈️"},{"id":"travel-item-002","targetText":"pasoš","supportText":"passport","emoji":"🛂"},{"id":"travel-item-003","targetText":"kofer","supportText":"suitcase","emoji":"🧳"},{"id":"travel-item-004","targetText":"avion","supportText":"plane","emoji":"✈️"},{"id":"travel-item-005","targetText":"karta","supportText":"ticket","emoji":"🎫"},{"id":"travel-item-006","targetText":"Idemo u Crnu Goru!","supportText":"We're going to Montenegro!"}]},{"id":"capstone","month":12,"title":"Arriving in Montenegro","subtitle":"Put it all together","icon":"MG","color":"#a3e635","items":[{"id":"capstone-item-001","targetText":"Dobro došli!","supportText":"Welcome!"},{"id":"capstone-item-002","targetText":"Prijatan boravak.","supportText":"Enjoy your stay."},{"id":"capstone-item-003","targetText":"Jedva čekam.","supportText":"I can't wait."},{"id":"capstone-item-004","targetText":"Napokon smo ovdje!","supportText":"We're finally here!"}],"dialogue":{"roles":["Agent","You"],"lines":[{"id":"capstone-dialogue-001","targetText":"Dobro došli u Crnu Goru! Pasoš, molim.","supportText":"Welcome to Montenegro! Passport, please.","role":"Agent"},{"id":"capstone-dialogue-002","targetText":"Izvolite.","supportText":"Here you go.","role":"You"},{"id":"capstone-dialogue-003","targetText":"Hvala. Prijatan boravak!","supportText":"Thank you. Enjoy your stay!","role":"Agent"},{"id":"capstone-dialogue-004","targetText":"Hvala! Jedva čekam da vidim porodicu.","supportText":"Thank you! I can't wait to see my family.","role":"You"}]}},{"id":"verbs1","title":"Verbs: To Be & To Have","subtitle":"biti, imati","icon":"V1","color":"#7dd3fc","items":[{"id":"verbs1-item-001","targetText":"ja sam","supportText":"I am"},{"id":"verbs1-item-002","targetText":"ti si","supportText":"you are"},{"id":"verbs1-item-003","targetText":"on/ona je","supportText":"he/she is"},{"id":"verbs1-item-004","targetText":"mi smo","supportText":"we are"},{"id":"verbs1-item-005","targetText":"oni su","supportText":"they are"},{"id":"verbs1-item-006","targetText":"ja imam","supportText":"I have"},{"id":"verbs1-item-007","targetText":"ti imaš","supportText":"you have"},{"id":"verbs1-item-008","targetText":"mi imamo","supportText":"we have"}]},{"id":"adjectives","title":"Describing Things","subtitle":"pridjevi","icon":"Ad","color":"#f472b6","items":[{"id":"adjectives-item-001","targetText":"velik / velika","supportText":"big"},{"id":"adjectives-item-002","targetText":"mali / mala","supportText":"small"},{"id":"adjectives-item-003","targetText":"lijep / lijepa","supportText":"beautiful"},{"id":"adjectives-item-004","targetText":"ružan / ružna","supportText":"ugly"},{"id":"adjectives-item-005","targetText":"dobar / dobra","supportText":"good"},{"id":"adjectives-item-006","targetText":"loš / loša","supportText":"bad"},{"id":"adjectives-item-007","targetText":"nov / nova","supportText":"new"},{"id":"adjectives-item-008","targetText":"star / stara","supportText":"old"}]},{"id":"questionwords","title":"Question Words","subtitle":"šta, ko, gdje...","icon":"Qw","color":"#a3e635","items":[{"id":"questionwords-item-001","targetText":"šta","supportText":"what"},{"id":"questionwords-item-002","targetText":"ko","supportText":"who"},{"id":"questionwords-item-003","targetText":"gdje","supportText":"where"},{"id":"questionwords-item-004","targetText":"kada","supportText":"when"},{"id":"questionwords-item-005","targetText":"zašto","supportText":"why"},{"id":"questionwords-item-006","targetText":"kako","supportText":"how"},{"id":"questionwords-item-007","targetText":"koji / koja","supportText":"which"}]},{"id":"plans","title":"Making Plans","subtitle":"Hoćeš li..., Vidimo se!","icon":"Pl","color":"#7dd3fc","items":[{"id":"plans-item-001","targetText":"Hoćeš li...?","supportText":"Do you want to...?"},{"id":"plans-item-002","targetText":"Možemo li...?","supportText":"Can we...?"},{"id":"plans-item-003","targetText":"Kada se vidimo?","supportText":"When do we meet?"},{"id":"plans-item-004","targetText":"Vidimo se sutra.","supportText":"See you tomorrow."},{"id":"plans-item-005","targetText":"Dogovoreno!","supportText":"It's a deal! / Agreed!"}]},{"id":"smalltalk","title":"Small Talk","subtitle":"Getting to know people","icon":"St","color":"#f472b6","items":[{"id":"smalltalk-item-001","targetText":"Šta radiš?","supportText":"What are you doing?"},{"id":"smalltalk-item-002","targetText":"Odakle si?","supportText":"Where are you from?"},{"id":"smalltalk-item-003","targetText":"Koliko dugo si ovdje?","supportText":"How long have you been here?"},{"id":"smalltalk-item-004","targetText":"Sviđa mi se Crna Gora.","supportText":"I like Montenegro."},{"id":"smalltalk-item-005","targetText":"Ovo mi je prvi put ovdje.","supportText":"This is my first time here."}]},{"id":"pasttense","title":"Talking About the Past","subtitle":"bio sam, jučer...","icon":"Pt","color":"#a3e635","items":[{"id":"pasttense-item-001","targetText":"bio sam / bila sam","supportText":"I was"},{"id":"pasttense-item-002","targetText":"Jučer sam...","supportText":"Yesterday I..."},{"id":"pasttense-item-003","targetText":"Prošle godine...","supportText":"Last year..."},{"id":"pasttense-item-004","targetText":"Bilo je zabavno!","supportText":"It was fun!"},{"id":"pasttense-item-005","targetText":"Vidio sam / Vidjela sam","supportText":"I saw"}]},{"id":"futuretense","title":"Talking About the Future","subtitle":"sutra ću, sledeće godine...","icon":"Ft","color":"#7dd3fc","items":[{"id":"futuretense-item-001","targetText":"Sutra ću...","supportText":"Tomorrow I will..."},{"id":"futuretense-item-002","targetText":"Sledeće godine ćemo...","supportText":"Next year we will..."},{"id":"futuretense-item-003","targetText":"Vidjećemo se opet.","supportText":"We'll see each other again."},{"id":"futuretense-item-004","targetText":"Jedva čekam ljeto.","supportText":"I can't wait for summer."}]},{"id":"restaurant","title":"At a Restaurant","subtitle":"Beyond the café","icon":"Rs","color":"#f472b6","items":[{"id":"restaurant-item-001","targetText":"meni","supportText":"menu"},{"id":"restaurant-item-002","targetText":"konobar / konobarica","supportText":"waiter / waitress"},{"id":"restaurant-item-003","targetText":"Preporučujete li nešto?","supportText":"Do you recommend something?"},{"id":"restaurant-item-004","targetText":"Za piće?","supportText":"For drinks?"},{"id":"restaurant-item-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!"},{"id":"restaurant-item-006","targetText":"Bilo je ukusno.","supportText":"It was delicious."}],"dialogue":{"roles":["Waiter","You"],"lines":[{"id":"restaurant-dialogue-001","targetText":"Dobro veče! Izvolite meni.","supportText":"Good evening! Here is the menu.","role":"Waiter"},{"id":"restaurant-dialogue-002","targetText":"Hvala. Preporučujete li nešto?","supportText":"Thanks. Do you recommend something?","role":"You"},{"id":"restaurant-dialogue-003","targetText":"Riba je odlična danas.","supportText":"The fish is excellent today.","role":"Waiter"},{"id":"restaurant-dialogue-004","targetText":"Dobro, hoću ribu, molim.","supportText":"Okay, I'll have the fish, please.","role":"You"},{"id":"restaurant-dialogue-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!","role":"Waiter"},{"id":"restaurant-dialogue-006","targetText":"Hvala, bilo je ukusno!","supportText":"Thanks, it was delicious!","role":"You"}]}},{"id":"gathering","title":"Family Gathering","subtitle":"A full conversation at the table","icon":"Fg","color":"#a3e635","items":[{"id":"gathering-item-001","targetText":"Sjedi ovdje.","supportText":"Sit here."},{"id":"gathering-item-002","targetText":"Poslužite se.","supportText":"Help yourselves."},{"id":"gathering-item-003","targetText":"Živjeli!","supportText":"Cheers!"},{"id":"gathering-item-004","targetText":"Hvala na ručku.","supportText":"Thank you for lunch."},{"id":"gathering-item-005","targetText":"Bilo je divno vidjeti vas.","supportText":"It was wonderful to see you."}],"dialogue":{"roles":["Baka","You"],"lines":[{"id":"gathering-dialogue-001","targetText":"Sjedi ovdje, dijete. Poslužite se!","supportText":"Sit here, child. Help yourselves!","role":"Baka"},{"id":"gathering-dialogue-002","targetText":"Hvala, bako! Miriše odlično.","supportText":"Thanks, grandma! It smells great.","role":"You"},{"id":"gathering-dialogue-003","targetText":"Živjeli!","supportText":"Cheers!","role":"Baka"},{"id":"gathering-dialogue-004","targetText":"Živjeli! Hvala na ručku, bilo je divno.","supportText":"Cheers! Thank you for lunch, it was wonderful.","role":"You"}]}}]`),qe=[{id:"alphabet",title:"Alphabet",subtitle:"Latin & Cyrillic letters",icon:"Aa",color:"#7dd3fc",items:[{id:"alphabet-item-001",targetText:"A a",supportText:'Cyrillic: А а — "ah", as in auto (car)'},{id:"alphabet-item-002",targetText:"B b",supportText:'Cyrillic: Б б — "b", as in brat (brother)'},{id:"alphabet-item-003",targetText:"C c",supportText:'Cyrillic: Ц ц — "ts", as in cvijet (flower)'},{id:"alphabet-item-004",targetText:"Č č",supportText:'Cyrillic: Ч ч — hard "ch", as in čokolada'},{id:"alphabet-item-005",targetText:"Ć ć",supportText:'Cyrillic: Ћ ћ — soft "ch", as in ćevapi'},{id:"alphabet-item-006",targetText:"D d",supportText:'Cyrillic: Д д — "d", as in dijete'},{id:"alphabet-item-007",targetText:"Đ đ",supportText:'Cyrillic: Ђ ђ — soft "j", as in đak'},{id:"alphabet-item-008",targetText:"Dž dž",supportText:'Cyrillic: Џ џ — hard "j", as in džak'},{id:"alphabet-item-009",targetText:"Lj lj",supportText:'Cyrillic: Љ љ — "ly", as in ljubav'},{id:"alphabet-item-010",targetText:"Nj nj",supportText:'Cyrillic: Њ њ — "ny", as in njiva'},{id:"alphabet-item-011",targetText:"Š š",supportText:'Cyrillic: Ш ш — "sh", as in šuma'},{id:"alphabet-item-012",targetText:"Ž ž",supportText:'Cyrillic: Ж ж — "zh", as in žena'}]}],W={languagePack:je,curriculum:Ie,topics:Le,bonusTopics:qe},xe=W.languagePack,U=W.topics,he=W.bonusTopics,ze=[...U,...he],De=["Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"],ee=new Date(2026,7,10),Q=W.curriculum.months,Me=W.curriculum.extras,Ee=new Map(Q.flatMap((e,t)=>e.map(i=>[i,t+1]))),le=[{type:"discover",name:"Discover",detail:"Meet new words and hear them aloud"},{type:"recall",name:"Recall",detail:"Bring yesterday’s language back"},{type:"build",name:"Build",detail:"Put words into useful patterns"},{type:"use",name:"Use",detail:"Speak, listen, and role-play"},{type:"checkpoint",name:"Checkpoint",detail:"Show what you remember"}];function de(){return U}function Ce(){return he}function ce(){return Q.flat().map(T).filter(Boolean)}function _e(){return Me.map(T).filter(Boolean)}function pe(e){return Ee.get(e)||null}function T(e){return ze.find(t=>t.id===e)}const y=(()=>{const e=[];let t=1;for(let i=0;i<10;i++){const a=Q[i].map(T);for(let o=0;o<4;o++){const s=i*4+o+1;if(o<3){const r=a[o];for(let d=0;d<5;d++){const c=le[d];e.push({id:`voyage-${t}`,number:t,month:i,week:s,dayOfWeek:d+1,topicId:r.id,type:c.type,title:`${r.title}: ${c.name}`,detail:c.detail}),t++}}else for(let r=0;r<5;r++){const d=le[r];e.push({id:`voyage-${t}`,number:t,month:i,week:s,dayOfWeek:r+1,topicId:null,type:`integration-${d.type}`,title:`Integration: ${d.name}`,detail:`Review topics from Month ${i+1}`}),t++}}}return e})();function z(e){const t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function D(e){const t=e.slice();for(let i=t.length-1;i>0;i--){const a=Math.floor(Math.random()*(i+1));[t[i],t[a]]=[t[a],t[i]]}return t}function _(e,t=6){const i=Math.min(t,e.length),a=D(e).slice(0,i),o=[];return a.forEach((s,r)=>{o.push({id:`target-${r}`,pairId:r,text:s.targetText,kind:"target"}),o.push({id:`support-${r}`,pairId:r,text:s.supportText,kind:"support"})}),{tiles:D(o),selectedIds:[],matchedIds:[]}}function q(e,t=8){const i=Math.min(t,e.length);return{questions:D(e).slice(0,i).map(s=>{const r=e.filter(n=>n.targetText!==s.targetText),d=D(r).slice(0,Math.min(3,r.length)),c=D([s.targetText,...d.map(n=>n.targetText)]);return{promptText:s.supportText,correctAnswer:s.targetText,options:c}}),qIdx:0,score:0,selected:null,answered:!1}}function Pe(e,t){const i=[];if(e.topicId){const a=T(e.topicId),o=U[U.indexOf(a)-1]||null;o&&i.push({type:"warmup",title:"Warmup",subtitle:`Quick practice from ${o.title}`,items:o.items.slice(0,5)}),e.type==="discover"?(i.push({type:"discover",title:"New Vocabulary",subtitle:`Discover words for ${a.title}`,items:a.items}),i.push({type:"match",title:"Recall Match",subtitle:"Connect the translations",match:_(a.items,4)})):e.type==="recall"?(i.push({type:"recall-flash",title:"Vocabulary Recall",subtitle:"Self-assess your memory",items:D(a.items)}),i.push({type:"quiz",title:"Quick Quiz",subtitle:"Test your understanding",quiz:q(a.items,5)})):e.type==="build"?(i.push({type:"note",title:"Sentence Pattern",subtitle:"How sentences are structured",note:a.note||"Practice assembling phrases in this topic."}),i.push({type:"quiz",title:"Pattern Practice",subtitle:"Complete the sentences correctly",quiz:q(a.items,6)})):e.type==="use"?a.dialogue?i.push({type:"dialogue",title:"Dialogue Practice",subtitle:"Read the roles out loud",dialogue:a.dialogue}):i.push({type:"listen",title:"Listen & Repeat",subtitle:"Practice your pronunciation",items:a.items}):e.type==="checkpoint"&&(i.push({type:"quiz",title:"Topic Quiz",subtitle:"Show what you remember",quiz:q(a.items,8)}),i.push({type:"match",title:"Vocabulary Match",subtitle:"Match all pairs to complete the topic",match:_(a.items,6)}))}else{const o=Q[e.month].map(T).flatMap(s=>s.items);i.push({type:"quiz",title:"Integration Quiz",subtitle:`Review from Month ${e.month+1}`,quiz:q(o,8)}),i.push({type:"match",title:"Integration Match",subtitle:"Connect the words quickly",match:_(o,8)})}return i.push({type:"done",title:"Completed!",subtitle:"Awesome job!"}),i}async function Ae(){{alert("Supabase credentials are not configured in your environment variables. Please check the .env file.");return}}async function He(){}const ue=[{id:"local-Lena",name:"Lena",isGuide:!1},{id:"local-Sam",name:"Sam",isGuide:!1},{id:"local-Mario",name:"Mario",isGuide:!0},{id:"local-Kristina",name:"Kristina",isGuide:!0}],se=xe.id,fe=xe.version;function P(e,t,i=se){return`nautilus:${i}:${e}:${t}`}function Ge(e,t){return{stars:`mn_${e}_stars`,topics:`mn_${e}_completed`,lessons:`mn_${e}_voyage_lessons`,activity:`mn_${e}_activity_dates`,dialogues:`mn_${e}_dialogues`}[t]}function O(e,t,i){const a=P(e,t),o=localStorage.getItem(a);if(o!==null)return o;const s=Ge(e,t),r=s?localStorage.getItem(s):null;return r!==null?(localStorage.setItem(a,r),r):i}function R(){const e=localStorage.getItem("mn_profiles");if(e)try{return JSON.parse(e)}catch{}return localStorage.setItem("mn_profiles",JSON.stringify(ue)),ue}function Ne(e){localStorage.setItem("mn_profiles",JSON.stringify(e))}function Oe(){return localStorage.getItem("mn_active_profile")||null}function Be(e){e?localStorage.setItem("mn_active_profile",e):localStorage.removeItem("mn_active_profile")}function E(e){if(!e)return null;const i=R().find(n=>n.name===e)||{id:`local-${e}`,isGuide:!1},a=parseInt(O(e,"stars","0"),10)||0;let o=[];try{o=JSON.parse(O(e,"topics","[]"))}catch{}let s=[];try{s=JSON.parse(O(e,"lessons","[]"))}catch{}let r=[];try{r=JSON.parse(O(e,"activity","[]"))}catch{}const d=parseInt(O(e,"dialogues","0"),10)||0,c=We(r);return{id:i.id,profile:e,stars:a,streakDays:c,completedTopicIds:o,completedLessons:s,activityDates:r,dialoguesDone:d,isGuide:i.isGuide,packId:se,packVersion:fe}}function We(e){if(!e||e.length===0)return 0;const t=new Set(e);let i=0,a=new Date;a.setHours(0,0,0,0);const o=z(a);a.setDate(a.getDate()-1);const s=z(a);if(!t.has(o)&&!t.has(s))return 0;let r=t.has(o)?new Date:a;for(r.setHours(0,0,0,0);t.has(z(r));)i++,r.setDate(r.getDate()-1);return i}function Re(e,t){localStorage.setItem(P(e,"stars"),String(t))}function Fe(e,t){localStorage.setItem(P(e,"topics"),JSON.stringify(t))}function Ye(e,t){localStorage.setItem(P(e,"lessons"),JSON.stringify(t))}function Ve(e,t){localStorage.setItem(P(e,"activity"),JSON.stringify(t))}function Je(e,t){localStorage.setItem(P(e,"dialogues"),String(t))}function Ke(e,t){const i=E(e);if(i.isGuide)return;const a=i.stars+t;Re(e,a),ve(e),F(i.id,"awardStars",{name:e,stars:a})}function ve(e){const t=E(e);if(t.isGuide)return;const i=z(new Date);if(!t.activityDates.includes(i)){const a=[...t.activityDates,i];Ve(e,a),F(t.id,"recordActivity",{name:e,dateKey:i})}}function Ue(e,t){const i=E(e);if(!i.isGuide&&!i.completedLessons.includes(t)){const a=[...i.completedLessons,t];Ye(e,a),ve(e),F(i.id,"completeLesson",{name:e,lessonId:t})}}function me(e,t){const i=E(e);if(!i.isGuide&&!i.completedTopicIds.includes(t)){const a=[...i.completedTopicIds,t];Fe(e,a),F(i.id,"completeTopic",{name:e,topicId:t})}}function Qe(e){const t=E(e);if(t.isGuide)return;const i=t.dialoguesDone+1;Je(e,i),F(t.id,"incrementDialogues",{name:e,dialoguesDone:i})}function Ze(){return R().filter(i=>!i.isGuide).map(i=>{const a=E(i.name);return{name:i.name,stars:a.stars,streak:a.streakDays,completed:a.completedTopicIds.length}})}async function Xe(e,t){const i=R();if(i.some(a=>a.name.toLowerCase()===e.toLowerCase()))throw new Error("Profile name already exists");{const a=`local-${e}`,o=[...i,{id:a,name:e,isGuide:t}];Ne(o)}}function et(){try{return JSON.parse(localStorage.getItem("mn_sync_queue")||"[]")}catch{return[]}}function tt(e){localStorage.setItem("mn_sync_queue",JSON.stringify(e))}function F(e,t,i){var s,r;if(String(e).startsWith("local-"))return;const a=et(),o=((r=(s=globalThis.crypto)==null?void 0:s.randomUUID)==null?void 0:r.call(s))||`${Date.now()}-${Math.random().toString(16).slice(2)}`;a.push({operationId:o,profileId:e,packId:se,packVersion:fe,type:t,payload:i,timestamp:Date.now()}),tt(a),be()}async function be(){}function it(e,t,i){const a=R(),o=a.filter(m=>!m.isGuide),s=a.filter(m=>m.isGuide),r=`<div style="text-align: center; font-size: 12px; color: var(--text-muted); margin-bottom: 24px; border: 1px dashed var(--border-color); padding: 8px; border-radius: 8px;">
         ⚠️ Supabase is not configured (Local-Only Mode active)
       </div>`;e.innerHTML=`
    <div class="profile-selection">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <div class="logo-icon" style="width: 56px; height: 56px; font-size: 20px;">CG</div>
        <h1 style="font-size: 32px; letter-spacing: -0.5px;">Učimo Crnogorski</h1>
        <p style="color: var(--text-muted); font-size: 16px;">Who is ready to learn today?</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px; width: 100%; max-width: 480px;">
        ${r}

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
  `;const d=e.querySelector("#learners-grid"),c=e.querySelector("#guides-grid");o.forEach(m=>{const p=document.createElement("button");p.className="profile-btn",p.innerText=`I'm ${m.name}`,p.addEventListener("click",()=>i.switchProfile(m.name)),d.appendChild(p)}),s.forEach(m=>{const p=document.createElement("button");p.className="profile-btn",p.style.borderColor="var(--pink)",p.style.color="var(--text-main)",p.innerText=`${m.name}`,p.addEventListener("click",()=>i.switchProfile(m.name)),c.appendChild(p)});const n=document.createElement("button");n.className="profile-btn",n.style.borderStyle="dashed",n.style.borderColor="var(--border-color)",n.style.color="var(--text-muted)",n.style.fontSize="14px",n.innerText="+ Add Profile",n.addEventListener("click",async()=>{const m=prompt("Enter profile name:");if(!m||m.trim()==="")return;const p=confirm("Is this profile a Parent/Guide? (Cancel for Learner)");try{await Xe(m.trim(),p),i.refresh()}catch(x){alert(`Error creating profile: ${x.message}`)}}),d.appendChild(n);const u=e.querySelector("#login-btn");u&&u.addEventListener("click",async()=>{try{await Ae()}catch(m){alert(`Google login failed: ${m.message}`)}});const h=e.querySelector("#logout-btn");h&&h.addEventListener("click",async()=>{try{await He(),i.refresh()}catch(m){alert(`Logout failed: ${m.message}`)}})}function ot(e,t,i){const a=y.find(p=>!t.completedLessons.includes(p.id))||y[199],o=T(a.topicId)||de()[0],s=t.completedLessons.includes(a.id),d=[{id:"first",label:"First Steps",cond:t.completedTopicIds.length>=1},{id:"getting",label:"Getting Started",cond:t.completedTopicIds.length>=5},{id:"halfway",label:"Halfway Hero",cond:t.completedTopicIds.length>=17},{id:"fluent",label:"Fluent Enough",cond:t.completedTopicIds.length>=de().length},{id:"chatter",label:"Chatterbox",cond:t.dialoguesDone>=3},{id:"streak",label:"7-Day Streak",cond:t.streakDays>=7},{id:"pro",label:"Practice Pro",cond:t.stars>=50}].filter(p=>p.cond),c={};ce().forEach(p=>{const x=`Month ${pe(p.id)}`;c[x]||(c[x]=[]),c[x].push(p)});const n=Array.from({length:10},(p,x)=>{const b=x+1,k=ce().filter(w=>pe(w.id)===b),$=k.some(w=>t.completedTopicIds.includes(w.id)),f=k.length>0&&k.every(w=>t.completedTopicIds.includes(w.id));let S="timeline-circle";f?S+=" completed":($||a&&a.month===x)&&(S+=" unlocked");let A="timeline-line";return f&&(A+=" completed"),`
      <div class="timeline-node">
        <div class="${S}" title="Month ${b} progress">${b}</div>
        ${x<9?`<div class="${A}"></div>`:""}
      </div>
    `}).join("");let u="";e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
          <div class="logo-icon">CG</div>
          <div class="logo-title">Učimo Crnogorski</div>
        </button>
        ${u}
      </div>

      <div class="nav-actions">
        <!-- Profile switcher -->
        <div class="profile-pill-container" role="group" aria-label="Profiles">
          ${R().map(p=>`
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
            ${t.isGuide?`Voyage day ${a.number} · Preview ${o.title} before the kids sit down`:`Voyage day ${a.number} · ${a.detail} · about 10–15 minutes`}
          </p>
        </div>
        <button class="btn btn-primary" id="start-session-btn">
          ${t.isGuide?"Preview Session":s?"Replay Session":"Start Lesson"}
        </button>
      </section>

      <!-- Calendar Mount -->
      <section class="voyage-calendar" id="calendar-mount" aria-label="Learning Voyage Calendar"></section>

      <!-- 10-Month Timeline Progress -->
      <section style="margin-bottom: 32px;" aria-label="10-Month Progress Timeline">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
          <h3 class="section-title" style="margin: 0;">10-Month Journey</h3>
          <button class="btn btn-secondary btn-pill" id="view-voyage-btn">See entire voyage plan →</button>
        </div>
        <div class="timeline">${n}</div>
      </section>

      <!-- Guide Progress dashboard -->
      ${t.isGuide?`
        <section aria-label="Learner Progress Summary">
          <h3 class="section-title">Kids' Progress</h3>
          <div class="kids-progress-grid">
            ${Ze().map(p=>`
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
      ${!t.isGuide&&d.length>0?`
        <section aria-label="Earned Badges">
          <h3 class="section-title">Badges Earned</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px;">
            ${d.map(p=>`
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

        ${Object.keys(c).map(p=>`
          <div style="margin-bottom: 28px;">
            <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">${p}</h4>
            <div class="cards-grid">
              ${c[p].map(x=>{const b=t.completedTopicIds.includes(x.id);return`
                  <button type="button" class="topic-card" data-topic-id="${x.id}" aria-label="Practice ${x.title}">
                    <div class="topic-card__icon" style="background: ${x.color};">${x.icon}</div>
                    ${b?'<div class="topic-card__check">✓</div>':""}
                    <div>
                      <div class="topic-card__title">${x.title}</div>
                      <div class="topic-card__subtitle">${x.subtitle}</div>
                    </div>
                    <div class="topic-card__count">${x.items.length} words${x.dialogue?" · role-play":""}</div>
                  </button>
                `}).join("")}
            </div>
          </div>
        `).join("")}

        <!-- Anytime extras and advanced material -->
        <div style="margin-bottom: 28px;">
          <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Anytime Extras &amp; Capstones</h4>
          <div class="cards-grid">
            ${[..._e(),...Ce()].map(p=>`
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
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#start-session-btn").addEventListener("click",()=>i.startSession(a)),e.querySelector("#view-voyage-btn").addEventListener("click",i.goCurriculum),e.querySelectorAll(".profile-pill-btn").forEach(p=>{p.id!=="nav-add-profile-btn"&&p.addEventListener("click",x=>{i.switchProfile(x.target.dataset.profile)})}),e.querySelector("#nav-add-profile-btn").addEventListener("click",()=>{i.goProfileSelect()}),e.querySelectorAll(".topic-card").forEach(p=>{p.addEventListener("click",()=>{const x=p.dataset.topicId;x&&i.openTopic(x)})});const h=e.querySelector("#mixed-review-card");h&&h.addEventListener("click",i.startMixedReview);const m=e.querySelector("#dashboard-login-btn");m&&m.addEventListener("click",()=>{i.goProfileSelect()})}function at(e,t,i,a){const o=t.calendarMonth,s=new Date(ee.getFullYear(),ee.getMonth()+o,1),r=s.getFullYear(),d=s.getMonth(),c=(new Date(r,d,1).getDay()+6)%7,n=new Date(r,d+1,0).getDate(),u=new Map;let h=new Date(ee);for(let g=0;g<y.length;g++){for(;h.getDay()===0||h.getDay()===6;)h.setDate(h.getDate()+1);u.set(z(h),y[g]),h.setDate(h.getDate()+1)}const m=[];for(let g=0;g<c;g++)m.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const p=z(new Date);for(let g=1;g<=n;g++){const H=new Date(r,d,g),Z=z(H),j=u.get(Z),X=j&&t.completedLessons.includes(j.id),$e=t.activityDates.includes(Z),Se=Z===p;let G="state-rest",N="In harbor";j&&(G="state-planned",N="Charted"),$e&&!X&&(G="state-open-water",N="Open water"),Se&&j&&!X&&(G="state-making-way",N="Making way"),X&&(G="state-full-sail",N="Full sail"),m.push({label:String(g),stateClass:G,ariaLabel:`${H.toLocaleDateString("en-US",{month:"long",day:"numeric"})}: ${N}${j?`, Lesson ${j.number}: ${j.title}`:""}`})}for(;m.length%7!==0;)m.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const x=s.toLocaleDateString("en-US",{month:"long",year:"numeric"}),b=y.find(g=>!t.completedLessons.includes(g.id)),k=Math.round(t.completedLessons.length/y.length*100),$=b?b.number:200,f=new Date;f.setHours(0,0,0,0),f.setDate(f.getDate()-(f.getDay()+6)%7);const S=new Date(f);S.setDate(S.getDate()+7);const A=t.activityDates.filter(g=>{const H=new Date(`${g}T12:00:00`);return H>=f&&H<S}).length,w=t.activityDates.filter(g=>g.startsWith(`${r}-${String(d+1).padStart(2,"0")}-`)).length,we=m.filter(g=>g.label&&g.ariaLabel.includes("Lesson"));e.innerHTML=`
    <div class="voyage-calendar__head">
      <div>
        <div style="color: var(--cyan); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 4px;">Ten-month learning voyage</div>
        <h3 class="voyage-calendar__title">${x}</h3>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <div class="voyage-calendar__count" title="Voyage Progress">
          ${b?`Voyage day ${$} of 200`:"Voyage complete · 200 of 200"}
        </div>
        <div class="voyage-calendar__nav">
          <button id="cal-prev" aria-label="Previous month" ${o===0?'disabled style="opacity:0.3; cursor:default;"':""}>‹</button>
          <button id="cal-next" aria-label="Next month" ${o===9?'disabled style="opacity:0.3; cursor:default;"':""}>›</button>
        </div>
      </div>
    </div>

    <div class="voyage-calendar__grid" role="grid" aria-label="Calendar for ${x}">
      ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(g=>`
        <div class="voyage-calendar__weekday" role="columnheader" aria-label="${g}">${g}</div>
      `).join("")}

      ${m.map(g=>g.label===""?`<div class="voyage-calendar__day" style="${g.style}" aria-hidden="true"></div>`:`
          <div class="voyage-calendar__day ${g.stateClass}" role="gridcell" aria-label="${g.ariaLabel}" tabindex="0">
            ${g.label}
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
      <span>${t.completedLessons.length} lessons completed · ${k}%</span>
      <span>•</span>
      <span>${A} active ${A===1?"day":"days"} this week</span>
      <span>•</span>
      <span>${w} active ${w===1?"day":"days"} this month</span>
    </div>

    <details class="calendar-list">
      <summary>View this month as a list</summary>
      <ul>
        ${we.map(g=>`<li>${g.ariaLabel}</li>`).join("")}
      </ul>
    </details>
  `;const re=e.querySelector("#cal-prev"),ne=e.querySelector("#cal-next");re&&o>0&&re.addEventListener("click",i),ne&&o<9&&ne.addEventListener("click",a)}function ye(e,t,i){const a=T(t.topicId),o=t.completedTopicIds.includes(a.id),s=!o&&!t.isGuide,r=[{id:"flashcards",label:"Flashcards"},{id:"match",label:"Match"},{id:"quiz",label:"Quiz"},{id:"listen",label:"Listen"}];a.dialogue&&r.push({id:"dialogue",label:"Role-play"}),e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">CG</div>
        <div class="logo-title">Učimo Crnogorski</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main class="container" style="max-width: 720px;">
      <!-- Header info -->
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 8px;">
        <div>
          <h2 style="font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">${a.title}</h2>
          <p style="color: var(--text-muted); font-size: 14px;">${a.subtitle}</p>
        </div>
        <div>
          ${o?`
            <div style="color: var(--lime); font-weight: 800; font-size: 14px; display: flex; align-items: center; gap: 6px;">
              <span>✓</span> Completed Topic
            </div>
          `:""}
          ${s?`
            <button class="btn btn-secondary btn-pill" id="skip-btn" style="padding: 6px 14px; font-size: 12px; min-height: 32px;">Already know this — skip</button>
          `:""}
        </div>
      </div>

      ${a.note?`
        <div style="background: rgba(250, 204, 21, 0.08); border: 1px solid var(--amber); border-radius: 12px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #ffe58f; margin-bottom: 24px; white-space: pre-line;">
          ${a.note}
        </div>
      `:""}

      <!-- Activities Tabs -->
      <div style="display: flex; gap: 8px; margin: 16px 0 24px; flex-wrap: wrap;" role="tablist" aria-label="Topic Activities">
        ${r.map(n=>`
          <button class="btn btn-secondary btn-pill ${t.activity===n.id?"btn-active":""}" role="tab" aria-selected="${t.activity===n.id}" data-tab="${n.id}">${n.label}</button>
        `).join("")}
      </div>

      <!-- Activity Container -->
      <div id="activity-mount"></div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#back-btn").addEventListener("click",i.goDashboard);const d=e.querySelector("#skip-btn");d&&d.addEventListener("click",()=>{i.markTopicCompleted(a.id),ye(e,t,i)}),e.querySelectorAll("[data-tab]").forEach(n=>{n.addEventListener("click",u=>{const h=u.target.dataset.tab;i.setActivity(h)})});const c=e.querySelector("#activity-mount");st(c,a,t,i)}function st(e,t,i,a){i.activity==="flashcards"?V(e,t,i,a):i.activity==="match"?B(e,t,i,a):i.activity==="quiz"?J(e,t,i,a):i.activity==="listen"?M(e,t,i,a):i.activity==="dialogue"&&te(e,t,i,a)}function V(e,t,i,a){const o=i.flash,s=o.order||t.items.map((c,n)=>n),r=t.items[s[o.idx]];e.innerHTML=`
    <div class="flashcard-container">
      <div class="flashcard-hint" style="color: var(--text-muted); font-size: 13px; font-weight: 700;">
        Card ${o.idx+1} of ${t.items.length}
      </div>

      <button type="button" class="flashcard-wrapper" id="card-wrapper" aria-label="Flashcard, tap to flip">
        <div class="flashcard ${o.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${r.emoji?`<div class="flashcard-emoji">${r.emoji}</div>`:""}
            <div class="flashcard-text-mn">${r.targetText}</div>
            <div class="flashcard-hint">Tap to reveal translation</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en">${r.supportText}</div>
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
  `;const d=e.querySelector("#card-wrapper");d.addEventListener("click",()=>{o.flipped=!o.flipped,d.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#speak-btn").addEventListener("click",c=>{c.stopPropagation(),a.speak(r.targetText)}),e.querySelector("#prev-card-btn").addEventListener("click",()=>{o.idx=(o.idx-1+t.items.length)%t.items.length,o.flipped=!1,V(e,t,i,a)}),e.querySelector("#next-card-btn").addEventListener("click",()=>{o.idx=(o.idx+1)%t.items.length,o.flipped=!1,V(e,t,i,a)}),e.querySelector("#shuffle-btn").addEventListener("click",()=>{o.order=D(t.items.map((c,n)=>n)),o.idx=0,o.flipped=!1,V(e,t,i,a)})}function B(e,t,i,a){const o=i.match;(!o.tiles||o.tiles.length===0)&&(i.match=_(t.items));const s=i.match,r=s.matchedIds.length/2,d=s.tiles.length/2,c=r===d;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Pairs matched: ${r} / ${d}
      </div>

      ${c?`
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 40px; margin-bottom: 8px;">🎉</div>
          <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Well Done!</h4>
          <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">You matched all words correctly! +1 star</p>
        </div>
      `:`
        <div class="matching-grid">
          ${s.tiles.map(n=>{const u=s.matchedIds.includes(n.id),h=s.selectedIds.includes(n.id);let m="match-tile";return u?m+=" matched":h&&(m+=" selected"),`
              <button class="${m}" data-tile-id="${n.id}" ${u?"disabled":""}>
                ${n.text}
              </button>
            `}).join("")}
        </div>
      `}

      <button class="btn btn-secondary" id="reshuffle-match-btn">
        ${c?"Play Again":"New Round"}
      </button>
    </div>
  `,e.querySelector("#reshuffle-match-btn").addEventListener("click",()=>{i.match=_(t.items),B(e,t,i,a)}),e.querySelectorAll(".match-tile").forEach(n=>{n.addEventListener("click",()=>{const u=n.dataset.tileId;rt(u,e,t,i,a)})})}function rt(e,t,i,a,o){const s=a.match;if(!(s.matchedIds.includes(e)||s.selectedIds.includes(e)||s.selectedIds.length>=2)&&(s.selectedIds.push(e),B(t,i,a,o),s.selectedIds.length===2)){const[r,d]=s.selectedIds,c=s.tiles.find(u=>u.id===r),n=s.tiles.find(u=>u.id===d);c.pairId===n.pairId?(s.matchedIds.push(r,d),s.selectedIds=[],setTimeout(()=>{s.matchedIds.length===s.tiles.length&&(o.awardStars(1),o.markTopicCompleted(i.id)),B(t,i,a,o)},250)):setTimeout(()=>{s.selectedIds=[],B(t,i,a,o)},700)}}function J(e,t,i,a){const o=i.quiz;(!o.questions||o.questions.length===0)&&(i.quiz=q(t.items));const s=i.quiz,r=s.questions[s.qIdx];if(s.qIdx>=s.questions.length||s.questions.length===0){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Quiz Finished!</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          Your score: ${s.score} / ${s.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="restart-quiz-btn">Try Again</button>
      </div>
    `,e.querySelector("#restart-quiz-btn").addEventListener("click",()=>{i.quiz=q(t.items),J(e,t,i,a)});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${s.qIdx+1} of ${s.questions.length} · Score: ${s.score}
      </div>

      <div class="quiz-prompt">
        Translate to Montenegrin:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">"${r.promptText}"</span>
      </div>

      <div class="quiz-options">
        ${r.options.map(n=>{let u="quiz-option";return s.answered&&(n===r.correctAnswer?u+=" correct":n===s.selected?u+=" incorrect":u+=" disabled"),`
            <button class="${u}" data-option="${n}" ${s.answered?"disabled":""}>
              ${n}
            </button>
          `}).join("")}
      </div>

      ${s.answered?`
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          ${s.qIdx+1===s.questions.length?"Show Results":"Next Question →"}
        </button>
      `:""}
    </div>
  `,e.querySelectorAll(".quiz-option").forEach(n=>{n.addEventListener("click",()=>{if(s.answered)return;const u=n.dataset.option;s.selected=u,s.answered=!0,u===r.correctAnswer&&(s.score++,a.awardStars(1)),J(e,t,i,a)})});const c=e.querySelector("#next-question-btn");c&&c.addEventListener("click",()=>{s.qIdx++,s.answered=!1,s.selected=null,s.qIdx>=s.questions.length&&a.markTopicCompleted(t.id),J(e,t,i,a)})}function M(e,t,i,a){const o=i.listen,s=o.order||t.items.map((c,n)=>n),r=t.items[s[o.idx]],d=i.recording;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${o.idx+1} of ${t.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 32px; text-align: center;">
        ${r.targetText}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play pronunciation</button>

      <p style="font-size: 11px; color: var(--text-muted); max-width: 340px; text-align: center; line-height: 1.4;">
        Uses browser speech synthesis fallback voice.
      </p>

      <button class="btn btn-secondary" id="reveal-meaning-btn">
        ${o.revealed?"Hide Meaning":"Reveal Meaning"}
      </button>

      ${o.revealed?`
        <div style="font-size: 18px; color: var(--cyan); font-weight: 600; text-align: center; animation: fadeIn 0.2s;">
          "${r.supportText}"
        </div>
      `:""}

      <div style="height: 1px; width: 100%; max-width: 320px; background: var(--border-color); margin: 12px 0;"></div>

      <!-- Microphone recording feature -->
      <button class="btn btn-accent btn-pill" id="mic-record-btn" style="border-color: var(--pink); background: transparent; color: var(--pink);">
        ${d.status==="recording"?"■ Stop Recording":"🎙 Record Yourself"}
      </button>

      ${d.url?`
        <audio controls style="width: 280px; margin-top: 8px;" src="${d.url}"></audio>
      `:""}

      ${d.error?`
        <div style="font-size: 12px; color: var(--pink); max-width: 300px; text-align: center; margin-top: 6px;">
          ${d.error}
        </div>
      `:""}

      <div style="display: flex; gap: 12px; margin-top: 12px;">
        <button class="btn btn-secondary" id="prev-listen-btn">← Prev</button>
        <button class="btn btn-secondary" id="next-listen-btn">Next →</button>
      </div>
    </div>
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{a.speak(r.targetText)}),e.querySelector("#reveal-meaning-btn").addEventListener("click",()=>{o.revealed=!o.revealed,M(e,t,i,a)}),e.querySelector("#prev-listen-btn").addEventListener("click",()=>{o.idx=(o.idx-1+t.items.length)%t.items.length,o.revealed=!1,ge(i),M(e,t,i,a)}),e.querySelector("#next-listen-btn").addEventListener("click",()=>{o.idx=(o.idx+1)%t.items.length,o.revealed=!1,ge(i),M(e,t,i,a)}),e.querySelector("#mic-record-btn").addEventListener("click",()=>{nt(e,t,i,a)})}function ge(e){e.recording.url&&URL.revokeObjectURL(e.recording.url),e.recording={status:"idle",url:null,error:null,chunks:[],recorder:null}}async function nt(e,t,i,a){const o=i.recording;if(o.status==="recording"){o.recorder&&o.recorder.stop();return}try{const s=await navigator.mediaDevices.getUserMedia({audio:!0}),r=new MediaRecorder(s),d=[];r.ondataavailable=c=>{c.data.size>0&&d.push(c.data)},r.onstop=()=>{const c=new Blob(d,{type:"audio/webm"}),n=URL.createObjectURL(c);s.getTracks().forEach(u=>u.stop()),i.recording={status:"ready",url:n,error:null,chunks:[],recorder:null},M(e,t,i,a)},r.start(),i.recording={status:"recording",url:null,error:null,chunks:d,recorder:r},M(e,t,i,a)}catch{i.recording={status:"idle",url:null,error:"Microphone access denied or unavailable on this device.",chunks:[],recorder:null},M(e,t,i,a)}}function te(e,t,i,a){const o=i.dialogue,s=t.dialogue;o.readAs||(o.readAs=s.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${s.roles.map(r=>`
          <button class="btn btn-secondary btn-pill ${o.readAs===r?"btn-active":""}" data-role="${r}">
            Read as ${r}
          </button>
        `).join("")}
        <button class="btn btn-secondary btn-pill" id="toggle-translation-btn">
          ${o.showEn?"Hide Translations":"Show Translations"}
        </button>
      </div>

      <div class="dialogue-container">
        ${s.lines.map((r,d)=>`
            <div class="dialogue-bubble ${r.role===o.readAs?"active-reader":""}" style="animation: fadeIn 0.3s var(--transition-medium);">
              <div class="dialogue-header">
                <span>${r.role}</span>
                <button class="dialogue-play-btn" data-play-line="${d}">►</button>
              </div>
              <div style="font-size: 17px; font-weight: 600; margin-top: 4px; color: var(--text-main);">${r.targetText}</div>
              ${o.showEn?`
                <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">"${r.supportText}"</div>
              `:""}
            </div>
          `).join("")}
      </div>

      <button class="btn btn-primary" id="finish-dialogue-btn" style="width: 100%; max-width: 480px; margin-top: 12px;">
        Finish Dialogue Practice
      </button>
    </div>
  `,e.querySelectorAll("[data-role]").forEach(r=>{r.addEventListener("click",()=>{o.readAs=r.dataset.role,te(e,t,i,a)})}),e.querySelector("#toggle-translation-btn").addEventListener("click",()=>{o.showEn=!o.showEn,te(e,t,i,a)}),e.querySelectorAll("[data-play-line]").forEach(r=>{r.addEventListener("click",()=>{const d=parseInt(r.dataset.playLine),c=s.lines[d].targetText;a.speak(c)})}),e.querySelector("#finish-dialogue-btn").addEventListener("click",()=>{a.incrementDialogues(),a.markTopicCompleted(t.id),a.awardStars(2),a.goDashboard()})}function lt(e,t,i){const a=t.activeLesson;if(!t.session||t.session.lessonId!==a.id){const d=Pe(a,t.completedTopicIds);t.session={lessonId:a.id,stepIdx:0,steps:d,flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}}}const o=t.session,s=o.steps[o.stepIdx];e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">CG</div>
        <div class="logo-title">Učimo Crnogorski</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="exit-btn">← Exit Lesson</button>
      </div>
    </header>

    <main class="container" style="max-width: 640px;">
      <!-- Steps Progress Bar -->
      <div class="session-steps-bar" role="progressbar" aria-label="Lesson progress" aria-valuenow="${o.stepIdx+1}" aria-valuemin="1" aria-valuemax="${o.steps.length}">
        ${o.steps.map((d,c)=>`
          <div class="session-step-segment ${c<=o.stepIdx?"active":""}"></div>
        `).join("")}
      </div>

      <div id="session-step-mount"></div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#exit-btn").addEventListener("click",i.goDashboard);const r=e.querySelector("#session-step-mount");dt(r,s,t,i)}function dt(e,t,i,a){t.type==="warmup"?ct(e,t,i,a):t.type==="discover"?ie(e,t,i,a):t.type==="recall-flash"?Te(e,t,i,a):t.type==="note"?pt(e,t,i,a):t.type==="quiz"?oe(e,t,i,a):t.type==="match"?K(e,t,i,a):t.type==="dialogue"?ke(e,t,i,a):t.type==="listen"?ae(e,t,i,a):t.type==="done"&&mt(e,t,i,a)}function ct(e,t,i,a){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 6px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
        ${t.items.map((o,s)=>`
          <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; border-radius: 12px; padding: 14px 16px;">
            <div>
              <div style="font-weight: 700; font-size: 16px;">${o.targetText}</div>
              <div style="font-size: 13px; color: var(--text-muted);">${o.supportText}</div>
            </div>
            <button class="dialogue-play-btn" data-warmup-play="${s}">►</button>
          </div>
        `).join("")}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
    </div>
  `,e.querySelectorAll("[data-warmup-play]").forEach(o=>{o.addEventListener("click",()=>{const s=parseInt(o.dataset.warmup-play);a.speak(t.items[s].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{a.nextSessionStep()})}function ie(e,t,i,a){const o=i.session.flash,s=t.items[o.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Word ${o.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="discover-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Learning card, tap to flip">
        <div class="flashcard ${o.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${s.emoji?`<div class="flashcard-emoji">${s.emoji}</div>`:""}
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
        <button class="btn btn-secondary" id="disc-prev-btn" ${o.idx===0?'disabled style="opacity:0.3; cursor:default;"':""}>←</button>
        <button class="btn btn-primary" id="disc-speak-btn">► Say It</button>
        <button class="btn btn-secondary" id="disc-next-btn" ${o.idx+1===t.items.length?'disabled style="opacity:0.3; cursor:default;"':""}>→</button>
      </div>

      ${o.idx+1===t.items.length?`
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      `:""}
    </div>
  `;const r=e.querySelector("#discover-card-wrapper");r.addEventListener("click",()=>{o.flipped=!o.flipped,r.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#disc-speak-btn").addEventListener("click",c=>{c.stopPropagation(),a.speak(s.targetText)}),e.querySelector("#disc-prev-btn").addEventListener("click",()=>{o.idx>0&&(o.idx--,o.flipped=!1,ie(e,t,i,a))}),e.querySelector("#disc-next-btn").addEventListener("click",()=>{o.idx+1<t.items.length&&(o.idx++,o.flipped=!1,ie(e,t,i,a))});const d=e.querySelector("#next-step-btn");d&&d.addEventListener("click",()=>{a.nextSessionStep()})}function Te(e,t,i,a){const o=i.session.flash,s=t.items[o.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Card ${o.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="recall-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Recall card, tap to flip">
        <div class="flashcard ${o.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-hint" style="margin-bottom: 16px; color: var(--cyan);">Can you recall the translation?</div>
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
  `;const r=e.querySelector("#recall-card-wrapper");r.addEventListener("click",()=>{o.flipped=!o.flipped,r.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#recall-speak-btn").addEventListener("click",c=>{c.stopPropagation(),a.speak(s.targetText)});const d=()=>{o.idx+1<t.items.length?(o.idx++,o.flipped=!1,Te(e,t,i,a)):a.nextSessionStep()};e.querySelector("#recall-again-btn").addEventListener("click",()=>{t.items.push(s),d()}),e.querySelector("#recall-gotit-btn").addEventListener("click",()=>{d()})}function pt(e,t,i,a){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 12px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div class="glass" style="background: rgba(125, 211, 252, 0.08); border-color: var(--cyan); border-radius: 16px; padding: 20px; font-size: 16px; line-height: 1.6; color: var(--text-main); margin-bottom: 32px; white-space: pre-line;">
        ${t.note}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">I understand, start practice →</button>
    </div>
  `,e.querySelector("#next-step-btn").addEventListener("click",()=>{a.nextSessionStep()})}function oe(e,t,i,a){i.session.quiz||(i.session.quiz=t.quiz);const o=i.session.quiz,s=o.questions[o.qIdx];if(o.qIdx>=o.questions.length){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Practice Complete</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          You scored: ${o.score} / ${o.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
      </div>
    `,e.querySelector("#next-step-btn").addEventListener("click",()=>{i.session.quiz=null,a.nextSessionStep()});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${o.qIdx+1} of ${o.questions.length} · Score: ${o.score}
      </div>

      <div class="quiz-prompt">
        Translate to Montenegrin:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">"${s.promptText}"</span>
      </div>

      <div class="quiz-options">
        ${s.options.map(c=>{let n="quiz-option";return o.answered&&(c===s.correctAnswer?n+=" correct":c===o.selected?n+=" incorrect":n+=" disabled"),`
            <button class="${n}" data-option="${c}" ${o.answered?"disabled":""}>
              ${c}
            </button>
          `}).join("")}
      </div>

      ${o.answered?`
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          Next Question →
        </button>
      `:""}
    </div>
  `,e.querySelectorAll(".quiz-option").forEach(c=>{c.addEventListener("click",()=>{if(o.answered)return;const n=c.dataset.option;o.selected=n,o.answered=!0,n===s.correctAnswer&&(o.score++,a.awardStars(1)),oe(e,t,i,a)})});const d=e.querySelector("#next-question-btn");d&&d.addEventListener("click",()=>{o.qIdx++,o.answered=!1,o.selected=null,oe(e,t,i,a)})}function K(e,t,i,a){i.session.match||(i.session.match=t.match);const o=i.session.match,s=o.matchedIds.length/2,r=o.tiles.length/2,d=s===r;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Pairs matched: ${s} / ${r}
      </div>

      ${d?`
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 40px; margin-bottom: 8px;">🎉</div>
          <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Matched!</h4>
          <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">Complete. +1 star</p>
          <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
        </div>
      `:`
        <div class="matching-grid">
          ${o.tiles.map(n=>{const u=o.matchedIds.includes(n.id),h=o.selectedIds.includes(n.id);let m="match-tile";return u?m+=" matched":h&&(m+=" selected"),`
              <button class="${m}" data-tile-id="${n.id}" ${u?"disabled":""}>
                ${n.text}
              </button>
            `}).join("")}
        </div>
      `}
    </div>
  `,e.querySelectorAll(".match-tile").forEach(n=>{n.addEventListener("click",()=>{const u=n.dataset.tileId;ut(u,e,t,i,a)})});const c=e.querySelector("#next-step-btn");c&&c.addEventListener("click",()=>{i.session.match=null,a.nextSessionStep()})}function ut(e,t,i,a,o){const s=a.session.match;if(!(s.matchedIds.includes(e)||s.selectedIds.includes(e)||s.selectedIds.length>=2)&&(s.selectedIds.push(e),K(t,i,a,o),s.selectedIds.length===2)){const[r,d]=s.selectedIds,c=s.tiles.find(u=>u.id===r),n=s.tiles.find(u=>u.id===d);c.pairId===n.pairId?(s.matchedIds.push(r,d),s.selectedIds=[],setTimeout(()=>{s.matchedIds.length===s.tiles.length&&o.awardStars(1),K(t,i,a,o)},250)):setTimeout(()=>{s.selectedIds=[],K(t,i,a,o)},700)}}function ke(e,t,i,a){const o=i.session.dialogue,s=t.dialogue;o.readAs||(o.readAs=s.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${s.roles.map(r=>`
          <button class="btn btn-secondary btn-pill ${o.readAs===r?"btn-active":""}" data-role="${r}">
            Read as ${r}
          </button>
        `).join("")}
      </div>

      <div class="dialogue-container" style="width: 100%;">
        ${s.lines.map((r,d)=>`
            <div class="dialogue-bubble ${r.role===o.readAs?"active-reader":""}">
              <div class="dialogue-header">
                <span>${r.role}</span>
                <button class="dialogue-play-btn" data-play-line="${d}">►</button>
              </div>
              <div style="font-size: 17px; font-weight: 600; margin-top: 4px; color: var(--text-main);">${r.targetText}</div>
              <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">"${r.supportText}"</div>
            </div>
          `).join("")}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 12px;">
        Dialogue Complete →
      </button>
    </div>
  `,e.querySelectorAll("[data-role]").forEach(r=>{r.addEventListener("click",()=>{o.readAs=r.dataset.role,ke(e,t,i,a)})}),e.querySelectorAll("[data-play-line]").forEach(r=>{r.addEventListener("click",()=>{const d=parseInt(r.dataset.playLine);a.speak(s.lines[d].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{a.incrementDialogues(),a.awardStars(2),a.nextSessionStep()})}function ae(e,t,i,a){const o=i.session.flash,s=t.items[o.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${o.idx+1} of ${t.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 28px; text-align: center;">
        ${s.targetText}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play Pronunciation</button>

      <div style="font-size: 15px; color: var(--text-muted); text-align: center; margin: 4px 0;">
        Meaning: <span style="color: var(--cyan); font-weight: 600;">"${s.supportText}"</span>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 12px;">
        <button class="btn btn-secondary" id="listen-prev-btn" ${o.idx===0?'disabled style="opacity:0.3; cursor:default;"':""}>←</button>
        <button class="btn btn-secondary" id="listen-next-btn" ${o.idx+1===t.items.length?'disabled style="opacity:0.3; cursor:default;"':""}>→</button>
      </div>

      ${o.idx+1===t.items.length?`
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      `:""}
    </div>
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{a.speak(s.targetText)}),e.querySelector("#listen-prev-btn").addEventListener("click",()=>{o.idx>0&&(o.idx--,ae(e,t,i,a))}),e.querySelector("#listen-next-btn").addEventListener("click",()=>{o.idx+1<t.items.length&&(o.idx++,ae(e,t,i,a))});const r=e.querySelector("#next-step-btn");r&&r.addEventListener("click",()=>{a.nextSessionStep()})}function mt(e,t,i,a){const o=i.activeLesson,s=o.topicId?T(o.topicId):null;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center; padding: 40px 0;">
      <div style="font-size: 52px; animation: bounce 1s infinite alternate;">🎉</div>
      <h3 style="font-family: var(--font-display); font-weight: 800; font-size: 26px; letter-spacing: -0.5px;">Nailed It!</h3>
      <p style="color: var(--text-muted); font-size: 15px; max-width: 360px; line-height: 1.6;">
        You finished the lesson: <span style="color: var(--cyan); font-weight: 600;">"${o.title}"</span>.
        ${s&&o.type==="checkpoint"?`<br>Topic <strong>${s.title}</strong> has been marked as complete.`:""}
      </p>

      <div class="badge-pill" style="border-color: var(--lime); color: var(--lime); font-size: 14px; font-weight: 800; padding: 10px 20px;">
        ★ Voyage Lesson Completed!
      </div>

      <button class="btn btn-primary" id="finish-lesson-btn" style="margin-top: 12px; padding: 14px 32px;">
        Back to Dashboard
      </button>
    </div>
  `,e.querySelector("#finish-lesson-btn").addEventListener("click",()=>{a.completeLesson(o.id)})}function gt(e,t,i){const a={};for(let o=0;o<10;o++)a[o]=y.filter(s=>s.month===o);e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">CG</div>
        <div class="logo-title">Učimo Crnogorski</div>
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
        ${Object.keys(a).map(o=>{const s=parseInt(o)+1,r=a[o],d=r.every(u=>t.completedLessons.includes(u.id)),c=r.some(u=>t.completedLessons.includes(u.id));let n="var(--text-muted)";return d?n="var(--lime)":(c||t.completedLessons.length/20===s-1)&&(n="var(--cyan)"),`
            <div style="border-left: 2px solid ${n}; padding-left: 20px; margin-bottom: 8px;">
              <h3 style="font-size: 16px; margin-bottom: 12px; color: ${n}; text-transform: uppercase; letter-spacing: 0.05em;">
                Month ${s} — ${De[o]}
              </h3>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${r.filter(u=>u.number%5===1).map(u=>{const h=u.week,m=y.filter(f=>f.week===h),p=m.every(f=>t.completedLessons.includes(f.id)),x=m.some(f=>!t.completedLessons.includes(f.id))&&m[0].number<=t.completedLessons.length+1,b=u.topicId?T(u.topicId):null;let k="Planned",$="var(--text-muted)";return p?(k="✓ Completed",$="var(--lime)"):x&&(k="Active Week",$="var(--cyan)"),`
                    <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; border-radius: 12px; padding: 14px 18px; cursor: pointer; transition: all var(--transition-fast);" data-week="${h}">
                      <div>
                        <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 2px;">
                          Week ${h%4===0?"4 (Integration)":`Week ${h%4}: ${b?b.title:"Mixed review"}`}
                        </h4>
                        <p style="color: var(--text-muted); font-size: 13px;">
                          Lessons ${m[0].number} – ${m[4].number}
                        </p>
                      </div>
                      <div style="font-size: 13px; font-weight: 800; color: ${$};">${k}</div>
                    </div>
                  `}).join("")}
              </div>
            </div>
          `}).join("")}
      </div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#back-btn").addEventListener("click",i.goDashboard),e.querySelectorAll("[data-week]").forEach(o=>{o.addEventListener("click",()=>{const s=parseInt(o.dataset.week),r=y.filter(c=>c.week===s),d=r.find(c=>!t.completedLessons.includes(c.id))||r[0];i.startSession(d)})})}const l={profile:null,isGuide:!1,screen:"profile-select",sessionUser:null,stars:0,streakDays:0,completedTopicIds:[],completedLessons:[],activityDates:[],dialoguesDone:0,topicId:null,activity:"flashcards",calendarMonth:0,activeLesson:null,session:null,flash:{order:null,idx:0,flipped:!1},match:{tiles:[],selectedIds:[],matchedIds:[]},quiz:{questions:[],qIdx:0,score:0,selected:null,answered:!1},listen:{order:null,idx:0,revealed:!1},dialogue:{readAs:null,showEn:!1},recording:{status:"idle",url:null,error:null,chunks:[],recorder:null}},I=document.getElementById("app");function xt(e){if(!("speechSynthesis"in window))return;const t="hr-HR",i=new SpeechSynthesisUtterance(e);i.lang=t,i.rate=.85,window.speechSynthesis.cancel(),window.speechSynthesis.speak(i)}const C={goDashboard:()=>{l.screen="dashboard",Y(),v()},goCurriculum:()=>{l.screen="curriculum",Y(),v()},goProfileSelect:()=>{l.screen="profile-select",l.profile=null,Y(),v()},refresh:()=>{l.profile&&L(l.profile),v()},switchProfile:e=>{Be(e),l.profile=e,L(e),l.screen="dashboard",Y();const t=y.find(i=>!l.completedLessons.includes(i.id));t&&(l.calendarMonth=t.month),v()},openTopic:e=>{l.topicId=e,l.screen="topic",l.activity="flashcards",l.flash={order:null,idx:0,flipped:!1},l.match={tiles:[],selectedIds:[],matchedIds:[]},l.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},l.listen={order:null,idx:0,revealed:!1},l.dialogue={readAs:null,showEn:!0},v()},setActivity:e=>{l.activity=e,l.flash={order:null,idx:0,flipped:!1},l.match={tiles:[],selectedIds:[],matchedIds:[]},l.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},l.listen={order:null,idx:0,revealed:!1},l.dialogue={readAs:null,showEn:!0},v()},startSession:e=>{l.activeLesson=e,l.screen="session",l.session=null,v()},nextSessionStep:()=>{l.session&&(l.session.stepIdx++,l.session.flash={idx:0,flipped:!1},l.session.quiz=null,l.session.match=null,v())},completeLesson:e=>{Ue(l.profile,e);const t=l.activeLesson.topicId;t&&l.activeLesson.type==="checkpoint"&&me(l.profile,t),L(l.profile),C.goDashboard()},markTopicCompleted:e=>{me(l.profile,e),L(l.profile)},awardStars:e=>{Ke(l.profile,e),L(l.profile)},incrementDialogues:()=>{Qe(l.profile),L(l.profile)},speak:xt,startMixedReview:()=>{const t=l.completedTopicIds.map(i=>T(i)).filter(Boolean).flatMap(i=>i.items);t.length!==0&&(l.activeLesson={id:"mixed-review",title:"Mixed Review",detail:"Practice from all completed topics",topicId:null,month:0},l.screen="session",l.session={lessonId:"mixed-review",stepIdx:0,steps:[{type:"quiz",title:"Review Quiz",subtitle:"Test your retention",quiz:q(t,8)},{type:"match",title:"Review Match",subtitle:"Match terms quickly",match:_(t,8)},{type:"done",title:"Review Finished!",subtitle:"You completed your mixed review!"}],flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}},v())}};function Y(){l.activeLesson=null,l.session=null}function L(e){const t=E(e);t&&(l.stars=t.stars,l.streakDays=t.streakDays,l.completedTopicIds=t.completedTopicIds,l.completedLessons=t.completedLessons,l.activityDates=t.activityDates,l.dialoguesDone=t.dialoguesDone,l.isGuide=t.isGuide)}function v(){if(I.innerHTML="",!l.profile){l.screen="profile-select",it(I,l,C);return}if(l.screen==="dashboard"){ot(I,l,C);const e=I.querySelector("#calendar-mount");e&&at(e,l,()=>{l.calendarMonth=Math.max(0,l.calendarMonth-1),v()},()=>{l.calendarMonth=Math.min(9,l.calendarMonth+1),v()})}else l.screen==="topic"?ye(I,l,C):l.screen==="session"?lt(I,l,C):l.screen==="curriculum"&&gt(I,l,C)}async function ht(){window.addEventListener("online",()=>{be(),v()}),window.addEventListener("offline",()=>{v()});const e=Oe();if(e){l.profile=e,L(e),l.screen="dashboard";const t=y.find(i=>!l.completedLessons.includes(i.id));l.calendarMonth=t?t.month:0}else l.screen="profile-select";v()}window.addEventListener("DOMContentLoaded",ht);
