(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const Rt={id:"montenegrin-en",targetLanguage:{code:"cnr",name:"Montenegrin",scripts:["Latn","Cyrl"]},supportLanguage:{code:"en",name:"English"},version:"0.1.0",status:"draft",direction:"ltr",defaultScript:"Latn",locale:"cnr"},Wt={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},Bt=JSON.parse(`[{"id":"family","month":1,"title":"Family","subtitle":"Words for relatives","icon":"Fa","color":"#7dd3fc","note":"Your family speaks a Montenegrin-Dalmatian blend — words like dida and kukumar are your family's words, not mistakes. In Montenegrin, grandpa may also be deda.","items":[{"id":"family-item-001","targetText":"mama","supportText":"mom","emoji":"👩"},{"id":"family-item-002","targetText":"tata","supportText":"dad","emoji":"👨"},{"id":"family-item-003","targetText":"brat","supportText":"brother","emoji":"👦"},{"id":"family-item-004","targetText":"sestra","supportText":"sister","emoji":"👧"},{"id":"family-item-005","targetText":"baba","supportText":"grandma","emoji":"👵"},{"id":"family-item-006","targetText":"dida","supportText":"grandpa (Montenegrin: deda)","emoji":"👴"},{"id":"family-item-007","targetText":"sin","supportText":"son","emoji":"👦"},{"id":"family-item-008","targetText":"kćerka","supportText":"daughter (also: kći)","emoji":"👧"},{"id":"family-item-009","targetText":"porodica","supportText":"family","emoji":"👪"},{"id":"family-item-010","targetText":"roditelji","supportText":"parents"},{"id":"family-item-011","targetText":"dijete / djeca","supportText":"child / children","emoji":"👶"},{"id":"family-item-012","targetText":"ko","supportText":"who"}]},{"id":"greetings","month":1,"title":"Greetings","subtitle":"Say hello & introduce yourself","icon":"Zd","color":"#f472b6","items":[{"id":"greetings-item-001","targetText":"Zdravo","supportText":"Hello"},{"id":"greetings-item-002","targetText":"Dobar dan","supportText":"Good afternoon"},{"id":"greetings-item-003","targetText":"Dobro jutro","supportText":"Good morning"},{"id":"greetings-item-004","targetText":"Hvala","supportText":"Thank you"},{"id":"greetings-item-005","targetText":"Molim","supportText":"Please / You're welcome"},{"id":"greetings-item-006","targetText":"Da","supportText":"Yes"},{"id":"greetings-item-007","targetText":"Ne","supportText":"No"},{"id":"greetings-item-008","targetText":"Doviđenja","supportText":"Goodbye"},{"id":"greetings-item-009","targetText":"Ćao","supportText":"Bye / Hi (informal)"},{"id":"greetings-item-010","targetText":"Izvini","supportText":"Sorry / Excuse me"},{"id":"greetings-item-011","targetText":"Kako se zoveš?","supportText":"What's your name?"},{"id":"greetings-item-012","targetText":"Zovem se...","supportText":"My name is..."},{"id":"greetings-item-013","targetText":"Drago mi je","supportText":"Nice to meet you"}],"dialogue":{"roles":["You","New Friend"],"lines":[{"id":"greetings-dialogue-001","targetText":"Dobar dan! Kako se zoveš?","supportText":"Good afternoon! What is your name?","role":"You"},{"id":"greetings-dialogue-002","targetText":"Zovem se Lena. A ti?","supportText":"My name is Lena. And you?","role":"New Friend"},{"id":"greetings-dialogue-003","targetText":"Zovem se Sam. Drago mi je!","supportText":"My name is Sam. Nice to meet you!","role":"You"},{"id":"greetings-dialogue-004","targetText":"Drago mi je! Doviđenja.","supportText":"Nice to meet you too! Goodbye.","role":"New Friend"}]}},{"id":"numbers","month":2,"title":"Numbers","subtitle":"Counting 1–100","icon":"123","color":"#a3e635","items":[{"id":"numbers-item-001","targetText":"jedan","supportText":"one (1)"},{"id":"numbers-item-002","targetText":"dva","supportText":"two (2)"},{"id":"numbers-item-003","targetText":"tri","supportText":"three (3)"},{"id":"numbers-item-004","targetText":"četiri","supportText":"four (4)"},{"id":"numbers-item-005","targetText":"pet","supportText":"five (5)"},{"id":"numbers-item-006","targetText":"šest","supportText":"six (6)"},{"id":"numbers-item-007","targetText":"sedam","supportText":"seven (7)"},{"id":"numbers-item-008","targetText":"osam","supportText":"eight (8)"},{"id":"numbers-item-009","targetText":"devet","supportText":"nine (9)"},{"id":"numbers-item-010","targetText":"deset","supportText":"ten (10)"},{"id":"numbers-item-011","targetText":"dvadeset","supportText":"twenty (20)"},{"id":"numbers-item-012","targetText":"trideset","supportText":"thirty (30)"},{"id":"numbers-item-013","targetText":"pedeset","supportText":"fifty (50)"},{"id":"numbers-item-014","targetText":"sto","supportText":"one hundred (100)"}]},{"id":"colors","month":2,"title":"Colors","subtitle":"boje","icon":"Bo","color":"#7dd3fc","items":[{"id":"colors-item-001","targetText":"crvena","supportText":"red","emoji":"🔴"},{"id":"colors-item-002","targetText":"plava","supportText":"blue","emoji":"🔵"},{"id":"colors-item-003","targetText":"zelena","supportText":"green","emoji":"🟢"},{"id":"colors-item-004","targetText":"žuta","supportText":"yellow","emoji":"🟡"},{"id":"colors-item-005","targetText":"crna","supportText":"black","emoji":"⚫"},{"id":"colors-item-006","targetText":"bijela","supportText":"white","emoji":"⚪"}]},{"id":"drinks","month":3,"title":"Drinks","subtitle":"piće","icon":"Pi","color":"#f472b6","items":[{"id":"drinks-item-001","targetText":"voda","supportText":"water","emoji":"💧"},{"id":"drinks-item-002","targetText":"kafa","supportText":"coffee","emoji":"☕"},{"id":"drinks-item-003","targetText":"čaj","supportText":"tea","emoji":"🍵"},{"id":"drinks-item-004","targetText":"sok","supportText":"juice","emoji":"🧃"},{"id":"drinks-item-005","targetText":"mlijeko","supportText":"milk","emoji":"🥛"},{"id":"drinks-item-006","targetText":"pivo","supportText":"beer","emoji":"🍺"},{"id":"drinks-item-007","targetText":"vino","supportText":"wine","emoji":"🍷"},{"id":"drinks-item-008","targetText":"rakija","supportText":"rakija (homemade brandy)","emoji":"🥃"}]},{"id":"food","month":3,"title":"Food","subtitle":"hrana","icon":"Hr","color":"#a3e635","items":[{"id":"food-item-001","targetText":"kruh","supportText":"bread (also: hljeb)","emoji":"🍞"},{"id":"food-item-002","targetText":"sir","supportText":"cheese","emoji":"🧀"},{"id":"food-item-003","targetText":"meso","supportText":"meat","emoji":"🥩"},{"id":"food-item-004","targetText":"riba","supportText":"fish","emoji":"🐟"},{"id":"food-item-005","targetText":"jaje / jaja","supportText":"egg / eggs","emoji":"🥚"},{"id":"food-item-006","targetText":"salata","supportText":"salad","emoji":"🥗"},{"id":"food-item-007","targetText":"supa / čorba","supportText":"soup","emoji":"🍲"},{"id":"food-item-008","targetText":"sladoled","supportText":"ice cream","emoji":"🍦"},{"id":"food-item-009","targetText":"jabuka","supportText":"apple","emoji":"🍎"}]},{"id":"veg","month":4,"title":"Vegetables & Market","subtitle":"pijaca","icon":"Pj","color":"#7dd3fc","items":[{"id":"veg-item-001","targetText":"paradajz","supportText":"tomato","emoji":"🍅"},{"id":"veg-item-002","targetText":"kukumar","supportText":"cucumber","emoji":"🥒"},{"id":"veg-item-003","targetText":"krompir","supportText":"potato","emoji":"🥔"},{"id":"veg-item-004","targetText":"luk","supportText":"onion","emoji":"🧅"},{"id":"veg-item-005","targetText":"bijeli luk","supportText":"garlic (literally 'white onion')","emoji":"🧄"},{"id":"veg-item-006","targetText":"paprika","supportText":"pepper","emoji":"🫑"},{"id":"veg-item-007","targetText":"mrkva","supportText":"carrot","emoji":"🥕"},{"id":"veg-item-008","targetText":"kupus","supportText":"cabbage","emoji":"🥬"}]},{"id":"cafe","month":4,"title":"At a Café","subtitle":"Order like a local","icon":"Ka","color":"#f472b6","note":"Hoću = I want, Neću = I don't want.\\nWords ending in -a often change to -u after these: kafa → Hoću kafu, voda → Hoću vodu.","items":[{"id":"cafe-item-001","targetText":"Dobar dan!","supportText":"Good afternoon! (greeting)"},{"id":"cafe-item-002","targetText":"Izvolite?","supportText":"What can I get you?"},{"id":"cafe-item-003","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please."},{"id":"cafe-item-004","targetText":"Još nešto?","supportText":"Anything else?"},{"id":"cafe-item-005","targetText":"Hvala","supportText":"Thank you"},{"id":"cafe-item-006","targetText":"Račun, molim.","supportText":"The bill, please."}],"dialogue":{"roles":["Waiter","Customer"],"lines":[{"id":"cafe-dialogue-001","targetText":"Dobar dan! Izvolite?","supportText":"Good afternoon! What can I get you?","role":"Waiter"},{"id":"cafe-dialogue-002","targetText":"Hoću kafu, molim.","supportText":"I'd like a coffee, please.","role":"Customer"},{"id":"cafe-dialogue-003","targetText":"Još nešto?","supportText":"Anything else?","role":"Waiter"},{"id":"cafe-dialogue-004","targetText":"Hoću i vodu. Hvala.","supportText":"I'll also have water. Thanks.","role":"Customer"},{"id":"cafe-dialogue-005","targetText":"Izvolite.","supportText":"Here you go.","role":"Waiter"},{"id":"cafe-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"Customer"},{"id":"cafe-dialogue-007","targetText":"Račun, molim.","supportText":"The bill, please.","role":"Customer"},{"id":"cafe-dialogue-008","targetText":"Doviđenja!","supportText":"Goodbye!","role":"Waiter"}]}},{"id":"talkfamily","month":5,"title":"Talking About Family","subtitle":"\\"my brother\\", \\"I have a sister\\"","icon":"Mo","color":"#a3e635","items":[{"id":"talkfamily-item-001","targetText":"moj","supportText":"my (masculine)"},{"id":"talkfamily-item-002","targetText":"moja","supportText":"my (feminine)"},{"id":"talkfamily-item-003","targetText":"moj brat","supportText":"my brother"},{"id":"talkfamily-item-004","targetText":"moja sestra","supportText":"my sister"},{"id":"talkfamily-item-005","targetText":"moje dijete","supportText":"my child"},{"id":"talkfamily-item-006","targetText":"Imam brata.","supportText":"I have a brother."},{"id":"talkfamily-item-007","targetText":"Imam sestru.","supportText":"I have a sister."},{"id":"talkfamily-item-008","targetText":"Kako se zove tvoj brat?","supportText":"What's your brother's name?"},{"id":"talkfamily-item-009","targetText":"Moj brat se zove Sam.","supportText":"My brother is named Sam."},{"id":"talkfamily-item-010","targetText":"Ovo je moja porodica.","supportText":"This is my family."},{"id":"talkfamily-item-011","targetText":"A ko je ovo?","supportText":"And who is this?"}]},{"id":"aboutme","month":5,"title":"About Me","subtitle":"Simple sentences about yourself","icon":"Ja","color":"#7dd3fc","items":[{"id":"aboutme-item-001","targetText":"Ja se zovem ___.","supportText":"My name is ___."},{"id":"aboutme-item-002","targetText":"Koliko imaš godina?","supportText":"How old are you?"},{"id":"aboutme-item-003","targetText":"Imam ___ godina.","supportText":"I am ___ years old."},{"id":"aboutme-item-004","targetText":"Volim čokoladu.","supportText":"I love chocolate."},{"id":"aboutme-item-005","targetText":"Idem u školu.","supportText":"I am going to school."},{"id":"aboutme-item-006","targetText":"Idem na plažu.","supportText":"I'm going to the beach."},{"id":"aboutme-item-007","targetText":"Gdje živiš?","supportText":"Where do you live?"},{"id":"aboutme-item-008","targetText":"Živim u ___.","supportText":"I live in ___."}]},{"id":"days","month":6,"title":"Days & Time","subtitle":"dani u sedmici","icon":"Dn","color":"#f472b6","items":[{"id":"days-item-001","targetText":"ponedjeljak","supportText":"Monday"},{"id":"days-item-002","targetText":"utorak","supportText":"Tuesday"},{"id":"days-item-003","targetText":"srijeda","supportText":"Wednesday"},{"id":"days-item-004","targetText":"četvrtak","supportText":"Thursday"},{"id":"days-item-005","targetText":"petak","supportText":"Friday"},{"id":"days-item-006","targetText":"subota","supportText":"Saturday"},{"id":"days-item-007","targetText":"nedjelja","supportText":"Sunday"},{"id":"days-item-008","targetText":"danas","supportText":"today"},{"id":"days-item-009","targetText":"sutra","supportText":"tomorrow"},{"id":"days-item-010","targetText":"juče","supportText":"yesterday"}]},{"id":"outabout","month":6,"title":"Out & About","subtitle":"Travel phrases","icon":"Va","color":"#a3e635","items":[{"id":"outabout-item-001","targetText":"Gdje je...?","supportText":"Where is...?"},{"id":"outabout-item-002","targetText":"Koliko košta?","supportText":"How much does it cost?"},{"id":"outabout-item-003","targetText":"Ne razumijem.","supportText":"I don't understand."},{"id":"outabout-item-004","targetText":"Govorite li engleski?","supportText":"Do you speak English?"},{"id":"outabout-item-005","targetText":"Molim vas.","supportText":"Please (formal)"},{"id":"outabout-item-006","targetText":"Izvinite.","supportText":"Excuse me (formal)"},{"id":"outabout-item-007","targetText":"lijevo","supportText":"left"},{"id":"outabout-item-008","targetText":"desno","supportText":"right"},{"id":"outabout-item-009","targetText":"plaža","supportText":"beach"},{"id":"outabout-item-010","targetText":"more","supportText":"sea"}]},{"id":"weather","month":7,"title":"Weather","subtitle":"vrijeme","icon":"We","color":"#7dd3fc","items":[{"id":"weather-item-001","targetText":"sunce","supportText":"sun","emoji":"☀️"},{"id":"weather-item-002","targetText":"kiša","supportText":"rain","emoji":"🌧️"},{"id":"weather-item-003","targetText":"vjetar","supportText":"wind","emoji":"💨"},{"id":"weather-item-004","targetText":"oblačno","supportText":"cloudy","emoji":"☁️"},{"id":"weather-item-005","targetText":"toplo","supportText":"warm"},{"id":"weather-item-006","targetText":"hladno","supportText":"cold","emoji":"🥶"},{"id":"weather-item-007","targetText":"Kakvo je vrijeme?","supportText":"What's the weather like?"},{"id":"weather-item-008","targetText":"Sunčano je.","supportText":"It's sunny."}]},{"id":"emotions","month":7,"title":"Emotions & Feelings","subtitle":"osjećanja","icon":"Em","color":"#f472b6","items":[{"id":"emotions-item-001","targetText":"sretan / sretna","supportText":"happy"},{"id":"emotions-item-002","targetText":"tužan / tužna","supportText":"sad"},{"id":"emotions-item-003","targetText":"umoran / umorna","supportText":"tired"},{"id":"emotions-item-004","targetText":"gladan / gladna","supportText":"hungry"},{"id":"emotions-item-005","targetText":"žedan / žedna","supportText":"thirsty"},{"id":"emotions-item-006","targetText":"uzbuđen / uzbuđena","supportText":"excited"},{"id":"emotions-item-007","targetText":"Kako se osjećaš?","supportText":"How do you feel?"}]},{"id":"house","month":8,"title":"House & Home","subtitle":"kuća","icon":"Ho","color":"#a3e635","items":[{"id":"house-item-001","targetText":"kuća","supportText":"house","emoji":"🏠"},{"id":"house-item-002","targetText":"soba","supportText":"room"},{"id":"house-item-003","targetText":"kuhinja","supportText":"kitchen","emoji":"🍳"},{"id":"house-item-004","targetText":"kupatilo","supportText":"bathroom","emoji":"🚿"},{"id":"house-item-005","targetText":"krevet","supportText":"bed","emoji":"🛏️"},{"id":"house-item-006","targetText":"vrata","supportText":"door","emoji":"🚪"},{"id":"house-item-007","targetText":"prozor","supportText":"window","emoji":"🪟"},{"id":"house-item-008","targetText":"dvorište","supportText":"yard","emoji":"🌳"}]},{"id":"clothes","month":8,"title":"Clothes","subtitle":"odjeća","icon":"Cl","color":"#7dd3fc","items":[{"id":"clothes-item-001","targetText":"majica","supportText":"t-shirt","emoji":"👕"},{"id":"clothes-item-002","targetText":"pantalone","supportText":"pants","emoji":"👖"},{"id":"clothes-item-003","targetText":"haljina","supportText":"dress","emoji":"👗"},{"id":"clothes-item-004","targetText":"cipele","supportText":"shoes","emoji":"👟"},{"id":"clothes-item-005","targetText":"jakna","supportText":"jacket","emoji":"🧥"},{"id":"clothes-item-006","targetText":"kupaći kostim","supportText":"swimsuit","emoji":"🩱"},{"id":"clothes-item-007","targetText":"šešir","supportText":"hat","emoji":"👒"}]},{"id":"body","month":9,"title":"Body & Health","subtitle":"tijelo","icon":"Bd","color":"#f472b6","items":[{"id":"body-item-001","targetText":"glava","supportText":"head"},{"id":"body-item-002","targetText":"ruka","supportText":"hand / arm"},{"id":"body-item-003","targetText":"noga","supportText":"leg / foot"},{"id":"body-item-004","targetText":"stomak","supportText":"stomach"},{"id":"body-item-005","targetText":"Boli me glava.","supportText":"My head hurts."},{"id":"body-item-006","targetText":"Dobro sam.","supportText":"I'm fine."}]},{"id":"shopping","month":9,"title":"Shopping","subtitle":"kupovina","icon":"Sh","color":"#a3e635","items":[{"id":"shopping-item-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?"},{"id":"shopping-item-002","targetText":"Koliko košta ovo?","supportText":"How much is this?"},{"id":"shopping-item-003","targetText":"Hoću da kupim...","supportText":"I want to buy..."},{"id":"shopping-item-004","targetText":"Imate li...?","supportText":"Do you have...?"},{"id":"shopping-item-005","targetText":"Samo gledam.","supportText":"I'm just looking."},{"id":"shopping-item-006","targetText":"skupo","supportText":"expensive"},{"id":"shopping-item-007","targetText":"jeftino","supportText":"cheap"}],"dialogue":{"roles":["Shopkeeper","You"],"lines":[{"id":"shopping-dialogue-001","targetText":"Izvolite, šta želite?","supportText":"Hello, what would you like?","role":"Shopkeeper"},{"id":"shopping-dialogue-002","targetText":"Koliko košta ovo?","supportText":"How much is this?","role":"You"},{"id":"shopping-dialogue-003","targetText":"Deset eura.","supportText":"Ten euros.","role":"Shopkeeper"},{"id":"shopping-dialogue-004","targetText":"To je malo skupo. Sedam?","supportText":"That's a bit expensive. Seven?","role":"You"},{"id":"shopping-dialogue-005","targetText":"Dobro, sedam.","supportText":"Okay, seven.","role":"Shopkeeper"},{"id":"shopping-dialogue-006","targetText":"Hvala!","supportText":"Thank you!","role":"You"}]}},{"id":"directions","month":10,"title":"Directions & Places","subtitle":"pravci","icon":"Di","color":"#7dd3fc","items":[{"id":"directions-item-001","targetText":"prodavnica","supportText":"store"},{"id":"directions-item-002","targetText":"banka","supportText":"bank"},{"id":"directions-item-003","targetText":"bolnica","supportText":"hospital"},{"id":"directions-item-004","targetText":"blizu","supportText":"near"},{"id":"directions-item-005","targetText":"daleko","supportText":"far"},{"id":"directions-item-006","targetText":"Idi pravo.","supportText":"Go straight."},{"id":"directions-item-007","targetText":"Skreni lijevo.","supportText":"Turn left."},{"id":"directions-item-008","targetText":"Skreni desno.","supportText":"Turn right."}]},{"id":"beach","month":10,"title":"Beach & Summer","subtitle":"plaža i ljeto","icon":"Bc","color":"#f472b6","items":[{"id":"beach-item-001","targetText":"pijesak","supportText":"sand"},{"id":"beach-item-002","targetText":"talas","supportText":"wave"},{"id":"beach-item-003","targetText":"kupanje","supportText":"swimming"},{"id":"beach-item-004","targetText":"peškir","supportText":"towel"},{"id":"beach-item-005","targetText":"sunčane naočare","supportText":"sunglasses"},{"id":"beach-item-006","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!"}],"dialogue":{"roles":["Friend","You"],"lines":[{"id":"beach-dialogue-001","targetText":"Idemo na plažu!","supportText":"Let's go to the beach!","role":"Friend"},{"id":"beach-dialogue-002","targetText":"Odlično! Gdje su moje naočare?","supportText":"Great! Where are my sunglasses?","role":"You"},{"id":"beach-dialogue-003","targetText":"Evo ih, na peškiru.","supportText":"Here they are, on the towel.","role":"Friend"},{"id":"beach-dialogue-004","targetText":"Hvala! Je li voda hladna?","supportText":"Thanks! Is the water cold?","role":"You"},{"id":"beach-dialogue-005","targetText":"Ne, topla je!","supportText":"No, it's warm!","role":"Friend"}]}},{"id":"time","month":11,"title":"Telling Time","subtitle":"sati","icon":"Tm","color":"#a3e635","items":[{"id":"time-item-001","targetText":"Koliko je sati?","supportText":"What time is it?"},{"id":"time-item-002","targetText":"sat","supportText":"hour / o'clock"},{"id":"time-item-003","targetText":"minut","supportText":"minute"},{"id":"time-item-004","targetText":"podne","supportText":"noon"},{"id":"time-item-005","targetText":"ponoć","supportText":"midnight"},{"id":"time-item-006","targetText":"rano","supportText":"early"},{"id":"time-item-007","targetText":"kasno","supportText":"late"}]},{"id":"hobbies","month":11,"title":"Hobbies","subtitle":"hobiji","icon":"Hb","color":"#7dd3fc","items":[{"id":"hobbies-item-001","targetText":"plivati","supportText":"to swim","emoji":"🏊"},{"id":"hobbies-item-002","targetText":"čitati","supportText":"to read","emoji":"📖"},{"id":"hobbies-item-003","targetText":"igrati fudbal","supportText":"to play soccer","emoji":"⚽"},{"id":"hobbies-item-004","targetText":"slušati muziku","supportText":"to listen to music","emoji":"🎧"},{"id":"hobbies-item-005","targetText":"crtati","supportText":"to draw","emoji":"🎨"},{"id":"hobbies-item-006","targetText":"Šta voliš da radiš?","supportText":"What do you like to do?"}]},{"id":"travel","month":12,"title":"Travel Essentials","subtitle":"putovanje","icon":"Tr","color":"#f472b6","items":[{"id":"travel-item-001","targetText":"aerodrom","supportText":"airport","emoji":"✈️"},{"id":"travel-item-002","targetText":"pasoš","supportText":"passport","emoji":"🛂"},{"id":"travel-item-003","targetText":"kofer","supportText":"suitcase","emoji":"🧳"},{"id":"travel-item-004","targetText":"avion","supportText":"plane","emoji":"✈️"},{"id":"travel-item-005","targetText":"karta","supportText":"ticket","emoji":"🎫"},{"id":"travel-item-006","targetText":"Idemo u Crnu Goru!","supportText":"We're going to Montenegro!"}]},{"id":"capstone","month":12,"title":"Arriving in Montenegro","subtitle":"Put it all together","icon":"MG","color":"#a3e635","items":[{"id":"capstone-item-001","targetText":"Dobro došli!","supportText":"Welcome!"},{"id":"capstone-item-002","targetText":"Prijatan boravak.","supportText":"Enjoy your stay."},{"id":"capstone-item-003","targetText":"Jedva čekam.","supportText":"I can't wait."},{"id":"capstone-item-004","targetText":"Napokon smo ovdje!","supportText":"We're finally here!"}],"dialogue":{"roles":["Agent","You"],"lines":[{"id":"capstone-dialogue-001","targetText":"Dobro došli u Crnu Goru! Pasoš, molim.","supportText":"Welcome to Montenegro! Passport, please.","role":"Agent"},{"id":"capstone-dialogue-002","targetText":"Izvolite.","supportText":"Here you go.","role":"You"},{"id":"capstone-dialogue-003","targetText":"Hvala. Prijatan boravak!","supportText":"Thank you. Enjoy your stay!","role":"Agent"},{"id":"capstone-dialogue-004","targetText":"Hvala! Jedva čekam da vidim porodicu.","supportText":"Thank you! I can't wait to see my family.","role":"You"}]}},{"id":"verbs1","title":"Verbs: To Be & To Have","subtitle":"biti, imati","icon":"V1","color":"#7dd3fc","items":[{"id":"verbs1-item-001","targetText":"ja sam","supportText":"I am"},{"id":"verbs1-item-002","targetText":"ti si","supportText":"you are"},{"id":"verbs1-item-003","targetText":"on/ona je","supportText":"he/she is"},{"id":"verbs1-item-004","targetText":"mi smo","supportText":"we are"},{"id":"verbs1-item-005","targetText":"oni su","supportText":"they are"},{"id":"verbs1-item-006","targetText":"ja imam","supportText":"I have"},{"id":"verbs1-item-007","targetText":"ti imaš","supportText":"you have"},{"id":"verbs1-item-008","targetText":"mi imamo","supportText":"we have"}]},{"id":"adjectives","title":"Describing Things","subtitle":"pridjevi","icon":"Ad","color":"#f472b6","items":[{"id":"adjectives-item-001","targetText":"velik / velika","supportText":"big"},{"id":"adjectives-item-002","targetText":"mali / mala","supportText":"small"},{"id":"adjectives-item-003","targetText":"lijep / lijepa","supportText":"beautiful"},{"id":"adjectives-item-004","targetText":"ružan / ružna","supportText":"ugly"},{"id":"adjectives-item-005","targetText":"dobar / dobra","supportText":"good"},{"id":"adjectives-item-006","targetText":"loš / loša","supportText":"bad"},{"id":"adjectives-item-007","targetText":"nov / nova","supportText":"new"},{"id":"adjectives-item-008","targetText":"star / stara","supportText":"old"}]},{"id":"questionwords","title":"Question Words","subtitle":"šta, ko, gdje...","icon":"Qw","color":"#a3e635","items":[{"id":"questionwords-item-001","targetText":"šta","supportText":"what"},{"id":"questionwords-item-002","targetText":"ko","supportText":"who"},{"id":"questionwords-item-003","targetText":"gdje","supportText":"where"},{"id":"questionwords-item-004","targetText":"kada","supportText":"when"},{"id":"questionwords-item-005","targetText":"zašto","supportText":"why"},{"id":"questionwords-item-006","targetText":"kako","supportText":"how"},{"id":"questionwords-item-007","targetText":"koji / koja","supportText":"which"}]},{"id":"plans","title":"Making Plans","subtitle":"Hoćeš li..., Vidimo se!","icon":"Pl","color":"#7dd3fc","items":[{"id":"plans-item-001","targetText":"Hoćeš li...?","supportText":"Do you want to...?"},{"id":"plans-item-002","targetText":"Možemo li...?","supportText":"Can we...?"},{"id":"plans-item-003","targetText":"Kada se vidimo?","supportText":"When do we meet?"},{"id":"plans-item-004","targetText":"Vidimo se sutra.","supportText":"See you tomorrow."},{"id":"plans-item-005","targetText":"Dogovoreno!","supportText":"It's a deal! / Agreed!"}]},{"id":"smalltalk","title":"Small Talk","subtitle":"Getting to know people","icon":"St","color":"#f472b6","items":[{"id":"smalltalk-item-001","targetText":"Šta radiš?","supportText":"What are you doing?"},{"id":"smalltalk-item-002","targetText":"Odakle si?","supportText":"Where are you from?"},{"id":"smalltalk-item-003","targetText":"Koliko dugo si ovdje?","supportText":"How long have you been here?"},{"id":"smalltalk-item-004","targetText":"Sviđa mi se Crna Gora.","supportText":"I like Montenegro."},{"id":"smalltalk-item-005","targetText":"Ovo mi je prvi put ovdje.","supportText":"This is my first time here."}]},{"id":"pasttense","title":"Talking About the Past","subtitle":"bio sam, jučer...","icon":"Pt","color":"#a3e635","items":[{"id":"pasttense-item-001","targetText":"bio sam / bila sam","supportText":"I was"},{"id":"pasttense-item-002","targetText":"Jučer sam...","supportText":"Yesterday I..."},{"id":"pasttense-item-003","targetText":"Prošle godine...","supportText":"Last year..."},{"id":"pasttense-item-004","targetText":"Bilo je zabavno!","supportText":"It was fun!"},{"id":"pasttense-item-005","targetText":"Vidio sam / Vidjela sam","supportText":"I saw"}]},{"id":"futuretense","title":"Talking About the Future","subtitle":"sutra ću, sledeće godine...","icon":"Ft","color":"#7dd3fc","items":[{"id":"futuretense-item-001","targetText":"Sutra ću...","supportText":"Tomorrow I will..."},{"id":"futuretense-item-002","targetText":"Sledeće godine ćemo...","supportText":"Next year we will..."},{"id":"futuretense-item-003","targetText":"Vidjećemo se opet.","supportText":"We'll see each other again."},{"id":"futuretense-item-004","targetText":"Jedva čekam ljeto.","supportText":"I can't wait for summer."}]},{"id":"restaurant","title":"At a Restaurant","subtitle":"Beyond the café","icon":"Rs","color":"#f472b6","items":[{"id":"restaurant-item-001","targetText":"meni","supportText":"menu"},{"id":"restaurant-item-002","targetText":"konobar / konobarica","supportText":"waiter / waitress"},{"id":"restaurant-item-003","targetText":"Preporučujete li nešto?","supportText":"Do you recommend something?"},{"id":"restaurant-item-004","targetText":"Za piće?","supportText":"For drinks?"},{"id":"restaurant-item-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!"},{"id":"restaurant-item-006","targetText":"Bilo je ukusno.","supportText":"It was delicious."}],"dialogue":{"roles":["Waiter","You"],"lines":[{"id":"restaurant-dialogue-001","targetText":"Dobro veče! Izvolite meni.","supportText":"Good evening! Here is the menu.","role":"Waiter"},{"id":"restaurant-dialogue-002","targetText":"Hvala. Preporučujete li nešto?","supportText":"Thanks. Do you recommend something?","role":"You"},{"id":"restaurant-dialogue-003","targetText":"Riba je odlična danas.","supportText":"The fish is excellent today.","role":"Waiter"},{"id":"restaurant-dialogue-004","targetText":"Dobro, hoću ribu, molim.","supportText":"Okay, I'll have the fish, please.","role":"You"},{"id":"restaurant-dialogue-005","targetText":"Dobar tek!","supportText":"Enjoy your meal!","role":"Waiter"},{"id":"restaurant-dialogue-006","targetText":"Hvala, bilo je ukusno!","supportText":"Thanks, it was delicious!","role":"You"}]}},{"id":"gathering","title":"Family Gathering","subtitle":"A full conversation at the table","icon":"Fg","color":"#a3e635","items":[{"id":"gathering-item-001","targetText":"Sjedi ovdje.","supportText":"Sit here."},{"id":"gathering-item-002","targetText":"Poslužite se.","supportText":"Help yourselves."},{"id":"gathering-item-003","targetText":"Živjeli!","supportText":"Cheers!"},{"id":"gathering-item-004","targetText":"Hvala na ručku.","supportText":"Thank you for lunch."},{"id":"gathering-item-005","targetText":"Bilo je divno vidjeti vas.","supportText":"It was wonderful to see you."}],"dialogue":{"roles":["Baba","You"],"lines":[{"id":"gathering-dialogue-001","targetText":"Sjedi ovdje, dijete. Poslužite se!","supportText":"Sit here, child. Help yourselves!","role":"Baba"},{"id":"gathering-dialogue-002","targetText":"Hvala, baba! Miriše odlično.","supportText":"Thanks, grandma! It smells great.","role":"You"},{"id":"gathering-dialogue-003","targetText":"Živjeli!","supportText":"Cheers!","role":"Baba"},{"id":"gathering-dialogue-004","targetText":"Živjeli! Hvala na ručku, bilo je divno.","supportText":"Cheers! Thank you for lunch, it was wonderful.","role":"You"}]}}]`),Ut=[{id:"alphabet",title:"Alphabet",subtitle:"Latin & Cyrillic letters",icon:"Aa",color:"#7dd3fc",items:[{id:"alphabet-item-001",targetText:"A a",supportText:'Cyrillic: А а — "ah", as in auto (car)'},{id:"alphabet-item-002",targetText:"B b",supportText:'Cyrillic: Б б — "b", as in brat (brother)'},{id:"alphabet-item-003",targetText:"C c",supportText:'Cyrillic: Ц ц — "ts", as in cvijet (flower)'},{id:"alphabet-item-004",targetText:"Č č",supportText:'Cyrillic: Ч ч — hard "ch", as in čokolada'},{id:"alphabet-item-005",targetText:"Ć ć",supportText:'Cyrillic: Ћ ћ — soft "ch", as in ćevapi'},{id:"alphabet-item-006",targetText:"D d",supportText:'Cyrillic: Д д — "d", as in dijete'},{id:"alphabet-item-007",targetText:"Đ đ",supportText:'Cyrillic: Ђ ђ — soft "j", as in đak'},{id:"alphabet-item-008",targetText:"Dž dž",supportText:'Cyrillic: Џ џ — hard "j", as in džak'},{id:"alphabet-item-009",targetText:"Lj lj",supportText:'Cyrillic: Љ љ — "ly", as in ljubav'},{id:"alphabet-item-010",targetText:"Nj nj",supportText:'Cyrillic: Њ њ — "ny", as in njiva'},{id:"alphabet-item-011",targetText:"Š š",supportText:'Cyrillic: Ш ш — "sh", as in šuma'},{id:"alphabet-item-012",targetText:"Ž ž",supportText:'Cyrillic: Ж ж — "zh", as in žena'}]}],He={languagePack:Rt,curriculum:Wt,topics:Bt,bonusTopics:Ut},Vt=[["family","Family","People in your family",[["familja","family"],["nëna","mother"],["babai","father"],["motra","sister"],["vëllai","brother"]]],["greetings","Greetings","Say hello and introduce yourself",[["Përshëndetje!","Hello!"],["Mirëmëngjes!","Good morning!"],["Mirëmbrëma!","Good evening!"],["Si je?","How are you?"],["Mirupafshim!","Goodbye!"]]],["numbers","Numbers","Start counting",[["një","one"],["dy","two"],["tre","three"],["katër","four"],["pesë","five"]]],["colors","Colors","Describe colors",[["i kuq","red"],["blu","blue"],["i gjelbër","green"],["i verdhë","yellow"],["i zi","black"]]],["drinks","Drinks","Everyday drinks",[["ujë","water"],["kafe","coffee"],["çaj","tea"],["qumësht","milk"],["lëng","juice"]]],["food","Food","Everyday foods",[["bukë","bread"],["djathë","cheese"],["mish","meat"],["peshk","fish"],["fruta","fruit"]]],["veg","Vegetables & Market","Shop at the market",[["domate","tomato"],["kastravec","cucumber"],["patate","potato"],["qepë","onion"],["spec","pepper"]]],["cafe","At a Café","Order politely",[["Një kafe, ju lutem.","A coffee, please."],["A keni çaj?","Do you have tea?"],["Pa sheqer.","Without sugar."],["Sa kushton?","How much is it?"],["Faturën, ju lutem.","The bill, please."]]],["talkfamily","Talking About Family","Describe your family",[["Kjo është familja ime.","This is my family."],["Kam një motër.","I have a sister."],["Kam një vëlla.","I have a brother."],["Nëna ime quhet Ana.","My mother is named Ana."],["Ne jetojmë bashkë.","We live together."]]],["aboutme","About Me","Simple sentences about yourself",[["Unë quhem Lena.","My name is Lena."],["Jam trembëdhjetë vjeç.","I am thirteen years old."],["Jetoj në Amerikë.","I live in America."],["Më pëlqen muzika.","I like music."],["Po mësoj shqip.","I am learning Albanian."]]],["days","Days & Time","Days of the week",[["e hënë","Monday"],["e martë","Tuesday"],["e mërkurë","Wednesday"],["e enjte","Thursday"],["e premte","Friday"]]],["outabout","Out & About","Useful phrases away from home",[["Ku është banja?","Where is the bathroom?"],["Nuk e kuptoj.","I do not understand."],["Flisni anglisht?","Do you speak English?"],["Më ndihmoni, ju lutem.","Please help me."],["Faleminderit shumë.","Thank you very much."]]],["weather","Weather","Talk about the weather",[["Është ngrohtë.","It is warm."],["Është ftohtë.","It is cold."],["Po bie shi.","It is raining."],["Ka diell.","It is sunny."],["Fryn erë.","It is windy."]]],["emotions","Emotions & Feelings","Say how you feel",[["Jam i lumtur.","I am happy."],["Jam e lodhur.","I am tired."],["Jam i trishtuar.","I am sad."],["Kam frikë.","I am afraid."],["Jam mirë.","I am well."]]],["house","House & Home","Things around the home",[["shtëpi","house"],["dhomë","room"],["kuzhinë","kitchen"],["derë","door"],["dritare","window"]]],["clothes","Clothes","What people wear",[["këmishë","shirt"],["pantallona","trousers"],["fustan","dress"],["këpucë","shoes"],["xhaketë","jacket"]]],["body","Body & Health","Body and basic health",[["kokë","head"],["dorë","hand"],["këmbë","leg"],["Më dhemb koka.","My head hurts."],["Kam nevojë për një mjek.","I need a doctor."]]],["shopping","Shopping","Buy what you need",[["Dua këtë.","I want this."],["Sa kushton kjo?","How much does this cost?"],["Është shumë shtrenjtë.","It is too expensive."],["A keni një madhësi tjetër?","Do you have another size?"],["Do të paguaj me kartë.","I will pay by card."]]],["directions","Directions & Places","Find your way",[["majtas","left"],["djathtas","right"],["drejt","straight ahead"],["afër","near"],["larg","far"]]],["beach","Beach & Summer","Enjoy a summer day",[["det","sea"],["plazh","beach"],["diell","sun"],["not","swimming"],["krem kundër diellit","sunscreen"]]],["time","Telling Time","Ask and tell the time",[["Sa është ora?","What time is it?"],["Është ora një.","It is one o’clock."],["Është mesditë.","It is noon."],["në mëngjes","in the morning"],["në mbrëmje","in the evening"]]],["hobbies","Hobbies","Talk about free time",[["Më pëlqen të lexoj.","I like to read."],["Më pëlqen muzika.","I like music."],["Luaj futboll.","I play soccer."],["Noton.","He or she swims."],["Vizatoj.","I draw."]]],["travel","Travel Essentials","Move around confidently",[["aeroport","airport"],["stacion","station"],["biletë","ticket"],["pasaportë","passport"],["Ku është hoteli?","Where is the hotel?"]]],["capstone","Putting It Together","Use language in a full day",[["Sapo mbërritëm.","We just arrived."],["Gëzohem që ju takoj.","Nice to meet you."],["Ku do të shkojmë?","Where will we go?"],["Jam gati.","I am ready."],["Ishte një ditë e bukur.","It was a beautiful day."]]],["verbs1","Verbs: To Be & To Have","Core sentence building",[["jam","I am"],["je","you are"],["është","he, she, or it is"],["kam","I have"],["ke","you have"]]],["adjectives","Describing Things","Useful descriptions",[["i madh","big"],["i vogël","small"],["i mirë","good"],["i bukur","beautiful"],["i ri","new"]]],["questionwords","Question Words","Ask useful questions",[["kush","who"],["çfarë","what"],["ku","where"],["kur","when"],["pse","why"]]],["plans","Making Plans","Arrange time together",[["Çfarë do të bëjmë?","What will we do?"],["A do të vish?","Will you come?"],["Shihemi nesër.","See you tomorrow."],["Në çfarë ore?","At what time?"],["Ide e mirë!","Good idea!"]]],["smalltalk","Small Talk","Get to know people",[["Nga je?","Where are you from?"],["Si po kalon?","How is it going?"],["Çfarë të pëlqen?","What do you like?"],["Sa kohë do të rrish?","How long will you stay?"],["Edhe mua.","Me too."]]],["pasttense","Talking About the Past","Share what happened",[["Isha në shtëpi.","I was at home."],["Kisha kohë.","I had time."],["Shkova në qytet.","I went to town."],["Hëngra mëngjes.","I ate breakfast."],["Dje ishte bukur.","Yesterday was nice."]]],["futuretense","Talking About the Future","Say what will happen",[["Do të vij nesër.","I will come tomorrow."],["Do të shkojmë në plazh.","We will go to the beach."],["Do të hamë bashkë.","We will eat together."],["Do të të telefonoj.","I will call you."],["Shihemi javën tjetër.","See you next week."]]],["restaurant","At a Restaurant","Order a full meal",[["Një tavolinë për katër veta.","A table for four."],["Çfarë rekomandoni?","What do you recommend?"],["Do të marr peshkun.","I will have the fish."],["Pa mish, ju lutem.","Without meat, please."],["Ishte shumë e shijshme.","It was very delicious."]]],["gathering","Family Gathering","Talk around the table",[["Mirë se erdhët!","Welcome!"],["Uluni, ju lutem.","Please sit down."],["Si është familja?","How is the family?"],["Gëzuar!","Cheers!"],["Faleminderit për darkën.","Thank you for dinner."]]],["alphabet","Albanian Alphabet","Distinctive Albanian letters",[["ë","ë — a central vowel"],["ç","ç — like ch in chair"],["dh","dh — like th in this"],["gj","gj — a soft palatal sound"],["ll","ll — a strong l sound"]]]],Kt={family:[["gjyshja","grandmother"],["gjyshi","grandfather"],["tezja","aunt"],["kushëriri","male cousin"]],greetings:[["Mirë se vini!","Welcome!"],["Si quhesh?","What is your name?"],["Gëzohem që të njoh.","Nice to meet you."],["Natën e mirë!","Good night!"]],numbers:[["gjashtë","six"],["shtatë","seven"],["tetë","eight"],["nëntë","nine"],["dhjetë","ten"]],colors:[["i bardhë","white"],["portokalli","orange"],["vjollcë","purple"],["rozë","pink"]],food:[["vezë","egg"],["pulë","chicken"],["oriz","rice"],["supë","soup"]],cafe:[["Dua një ujë.","I would like a water."],["Me qumësht, ju lutem.","With milk, please."],["A mund të porosis?","May I order?"],["Faleminderit.","Thank you."]],aboutme:[["Jam nga Amerika.","I am from America."],["Kam dy vëllezër.","I have two brothers."],["Flas pak shqip.","I speak a little Albanian."],["Nuk flas mirë ende.","I do not speak well yet."]],outabout:[["Mund ta përsërisni?","Can you repeat that?"],["Më ngadalë, ju lutem.","More slowly, please."],["Ku jemi?","Where are we?"],["Jam humbur.","I am lost."]],directions:[["Ku është qendra?","Where is the center?"],["Kthehu majtas.","Turn left."],["Kthehu djathtas.","Turn right."],["Është këtu afër.","It is nearby."]],travel:[["Nisja","departure"],["Mbërritja","arrival"],["Ku është porta?","Where is the gate?"],["Kam një rezervim.","I have a reservation."]],restaurant:[["Menuja, ju lutem.","The menu, please."],["Jam vegjetarian.","I am vegetarian."],["Pa gluten, ju lutem.","Gluten-free, please."],["Ushqimi ishte shumë i mirë.","The food was very good."]],gathering:[["Na keni munguar.","We missed you."],["Hajde të hamë.","Let us eat."],["Si keni qenë?","How have you been?"],["Shihemi së shpejti.","See you soon."]]},Pe={greetings:{roles:["Learner","Friend"],lines:[["Learner","Përshëndetje! Si quhesh?","Hello! What is your name?"],["Friend","Unë quhem Arta. Po ti?","My name is Arta. And you?"],["Learner","Unë quhem Lena. Gëzohem që të njoh.","My name is Lena. Nice to meet you."],["Friend","Edhe unë. Mirupafshim!","Me too. Goodbye!"]]},cafe:{roles:["Guest","Server"],lines:[["Guest","Përshëndetje. A mund të porosis?","Hello. May I order?"],["Server","Po, sigurisht.","Yes, of course."],["Guest","Një kafe me qumësht, ju lutem.","A coffee with milk, please."],["Server","Patjetër.","Certainly."]]},directions:{roles:["Traveler","Local"],lines:[["Traveler","Më falni, ku është qendra?","Excuse me, where is the center?"],["Local","Shko drejt dhe kthehu majtas.","Go straight and turn left."],["Traveler","Është larg?","Is it far?"],["Local","Jo, është këtu afër.","No, it is nearby."]]},gathering:{roles:["Host","Guest"],lines:[["Host","Mirë se erdhët! Na keni munguar.","Welcome! We missed you."],["Guest","Faleminderit. Si keni qenë?","Thank you. How have you been?"],["Host","Shumë mirë. Hajde të hamë.","Very well. Let us eat."],["Guest","Gëzuar!","Cheers!"]]}},kt={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},Yt=new Map(kt.months.flatMap((e,t)=>e.map(a=>[a,t+1]))),rt=["#7dd3fc","#f472b6","#a3e635"],st=Vt.map(([e,t,a,i])=>{const r=Yt.get(e)||10,s=[...i,...Kt[e]||[]];return{id:e,month:r,bucket:r-1,title:t,subtitle:a,icon:e.slice(0,2).toUpperCase(),color:rt[(r-1)%rt.length],note:"Standard Albanian draft for fluent family review.",items:s.map(([o,l],d)=>({id:`${e}-sq-${String(d+1).padStart(3,"0")}`,targetText:o,supportText:l,reviewStatus:"draft"})),...Pe[e]?{dialogue:{roles:Pe[e].roles,lines:Pe[e].lines.map(([o,l,d],c)=>({id:`${e}-dialogue-sq-${String(c+1).padStart(3,"0")}`,role:o,targetText:l,supportText:d,reviewStatus:"draft"}))}}:{}}}),ot={languagePack:{id:"albanian-en",targetLanguage:{code:"sq",name:"Albanian",scripts:["Latn"]},supportLanguage:{code:"en",name:"English"},version:"0.1.0",status:"review",direction:"ltr",defaultScript:"Latn",locale:"sq-AL",audio:{locale:"sq-AL",delivery:"speech-synthesis-draft",reviewStatus:"draft",note:"Device voice is a temporary listening aid until a fluent Albanian reviewer approves recorded audio."}},curriculum:kt,topics:st.filter(e=>e.id!=="alphabet"),bonusTopics:st.filter(e=>e.id==="alphabet")},Jt="Nautilus Iraqi Arabic pilot draft; seed terminology cross-checked against DLI Iraqi materials and queued for community review.",Qt=[["family","Family","Talk about the people close to you",[["الأهل","il-ahal","family"],["أم","umm","mother"],["أب","ab","father"],["أخ","akh","brother"],["أخت","ukht","sister"]]],["greetings","Greetings","Meet someone and say hello",[["مرحبا","marhaba","hello"],["شلونك؟","shlonak?","how are you?"],["زين","zayn","good / fine"],["شكراً","shukran","thank you"],["مع السلامة","ma‘ as-salama","goodbye"]]],["numbers","Numbers","Start counting",[["واحد","wahid","one"],["اثنين","ithnayn","two"],["ثلاثة","thalatha","three"],["أربعة","arba‘a","four"],["خمسة","khamsa","five"]]],["colors","Colors","Describe what you see",[["أحمر","ahmar","red"],["أزرق","azraq","blue"],["أخضر","akhdar","green"],["أصفر","asfar","yellow"],["أبيض","abyad","white"]]],["drinks","Drinks","Ask for something to drink",[["مي","may","water"],["چاي","chay","tea"],["قهوة","gahwa","coffee"],["حليب","halib","milk"],["عصير","asir","juice"]]],["food","Food","Everyday foods",[["خبز","khubuz","bread"],["تمن","timman","rice"],["لحم","laham","meat"],["سمچ","simach","fish"],["دجاج","dajaj","chicken"]]],["market","At the Market","Ask and buy",[["شكد؟","shgadd?","how much?"],["غالي","ghali","expensive"],["رخيص","rakhis","inexpensive"],["أريد هذا","arid hatha","I want this"],["عندكم؟","indakum?","do you have?"]]],["cafe","At a Café","Order politely",[["أريد چاي","arid chay","I would like tea"],["قهوة لو سمحت","gahwa law samaht","coffee, please"],["بدون سكر","bidun sukkar","without sugar"],["الحساب لو سمحت","il-hisab law samaht","the bill, please"],["شكراً هواية","shukran hwaya","thank you very much"]]],["talkfamily","Talking About Family","Describe your family",[["هاي عائلتي","hay ‘a’ilti","this is my family"],["عندي أخ","indi akh","I have a brother"],["عندي أخت","indi ukht","I have a sister"],["شلون الأهل؟","shlon il-ahal?","how is the family?"],["كلهم زينين","killhum zaynin","they are all well"]]],["aboutme","About Me","Say a little about yourself",[["اسمي...","ismi...","my name is..."],["أنا من أمريكا","ana min Amrika","I am from America"],["أحچي شوية عربي","ahchi shwayya arabi","I speak a little Arabic"],["أتعلم عربي عراقي","ata‘allam arabi iraqi","I am learning Iraqi Arabic"],["ما أفهم","ma afham","I do not understand"]]],["days","Days & Time","Talk about today and tomorrow",[["اليوم","il-yom","today"],["باچر","bachir","tomorrow"],["أمس","ams","yesterday"],["هسه","hassa","now"],["بعدين","ba‘dayn","later"]]],["outabout","Out & About","Useful phrases away from home",[["وين الحمام؟","wayn il-hammam?","where is the bathroom?"],["تحچي إنكليزي؟","tihchi inglizi?","do you speak English?"],["ساعدني","sa‘idni","help me"],["عيدها لو سمحت","idha law samaht","repeat it, please"],["شوية شوية","shwayya shwayya","more slowly"]]],["weather","Weather","Talk about the weather",[["حار","harr","hot"],["بارد","barid","cold"],["الدنيا حارة","id-dinya harra","the weather is hot"],["أكو مطر","aku matar","there is rain"],["الجو زين","il-jaww zayn","the weather is nice"]]],["feelings","Feelings","Say how you feel",[["فرحان","farhan","happy"],["تعبان","ta‘ban","tired"],["زعلان","za‘lan","upset / sad"],["خايف","khayif","afraid"],["أنا زين","ana zayn","I am fine"]]],["home","Home","Things around the home",[["بيت","bayt","house / home"],["غرفة","ghurfa","room"],["مطبخ","matbakh","kitchen"],["باب","bab","door"],["شباچ","shubbach","window"]]],["clothes","Clothes","What people wear",[["قميص","qamis","shirt"],["بنطرون","bantarun","trousers"],["فستان","fustan","dress"],["جواتي","jawati","shoes"],["جاكيت","jaket","jacket"]]],["body","Body & Health","Body and basic health",[["راس","ras","head"],["إيد","id","hand"],["رجل","rijil","leg"],["راسي يوجعني","rasi yuwja‘ni","my head hurts"],["أحتاج دكتور","ahtaj doktor","I need a doctor"]]],["shopping","Shopping","Buy what you need",[["أريد أشتري","arid ashtari","I want to buy"],["شكد السعر؟","shgadd is-si‘ir?","what is the price?"],["كلش غالي","kilish ghali","very expensive"],["عندك غير لون؟","indak ghayr lon?","do you have another color?"],["أدفع كارت","adfa‘ kart","I will pay by card"]]],["directions","Directions","Find your way",[["يمين","yamin","right"],["يسار","yasar","left"],["سيدة","sida","straight ahead"],["قريب","qarib","near"],["بعيد","ba‘id","far"]]],["river","River & Water","Words from a river journey",[["نهر","nahr","river"],["مي","may","water"],["قارب","qarib","boat"],["جسر","jisr","bridge"],["ضفّة","diffa","riverbank"]]],["time","Telling Time","Ask and tell the time",[["شكد الساعة؟","shgadd is-sa‘a?","what time is it?"],["الساعة وحدة","is-sa‘a wahda","it is one o’clock"],["الصبح","is-subuh","morning"],["الظهر","idh-dhuhr","noon"],["بالليل","bil-layl","at night"]]],["hobbies","Hobbies","Talk about free time",[["أحب أقرا","ahibb aqra","I like to read"],["أحب الموسيقى","ahibb il-musiqa","I like music"],["ألعب كرة","al‘ab kura","I play soccer"],["أسبح","asbah","I swim"],["أرسم","arsum","I draw"]]],["travel","Travel Essentials","Move around confidently",[["مطار","matar","airport"],["محطة","mahatta","station"],["تذكرة","tathkara","ticket"],["جواز","jawaz","passport"],["وين الفندق؟","wayn il-funduq?","where is the hotel?"]]],["verbs1","Core Verbs","Build simple sentences",[["أريد","arid","I want"],["عندي","indi","I have"],["أروح","aruh","I go"],["آكل","akul","I eat"],["أشرب","ashrab","I drink"]]],["adjectives","Describing Things","Useful descriptions",[["چبير","chibir","big"],["صغير","sghir","small"],["زين","zayn","good"],["حلو","hilu","nice / beautiful"],["جديد","jadid","new"]]],["questionwords","Question Words","Ask useful questions",[["منو؟","minu?","who?"],["شنو؟","shinu?","what?"],["وين؟","wayn?","where?"],["إيمتى؟","emta?","when?"],["ليش؟","lesh?","why?"]]],["plans","Making Plans","Arrange time together",[["شنسوي؟","shnisawwi?","what shall we do?"],["تجي ويانا؟","tiji wayana?","will you come with us?"],["نشوفك باچر","nshofak bachir","see you tomorrow"],["أي ساعة؟","ayy sa‘a?","what time?"],["فكرة زينة","fikra zayna","good idea"]]],["smalltalk","Small Talk","Get to know people",[["إنت من وين؟","inta min wayn?","where are you from?"],["شكو ماكو؟","shaku maku?","what’s new?"],["شنو تحب؟","shinu tihibb?","what do you like?"],["أهلاً وسهلاً","ahlan wa sahlan","welcome"],["وأنا همين","w-ana hamayn","me too"]]],["restaurant","At a Restaurant","Order a meal",[["منيو لو سمحت","menu law samaht","the menu, please"],["شنو تنصح؟","shinu tinsah?","what do you recommend?"],["أريد السمچ","arid is-simach","I would like the fish"],["بدون لحم","bidun laham","without meat"],["الأكل كلش طيب","il-akil kilish tayyib","the food is very good"]]],["gathering","Family Gathering","Talk around the table",[["نورتونا","nawwartuna","welcome; you brightened our home"],["تفضلوا","tfaddalu","please come in / help yourselves"],["شلونكم؟","shlonkum?","how are you all?"],["صحة وعافية","sahha w-‘afiya","enjoy your meal / good health"],["تسلم إيدك","tislam idak","thank you for cooking"]]],["past","Talking About the Past","Share what happened",[["چنت بالبيت","chinit bil-bayt","I was at home"],["رحت للسوق","riht lis-suq","I went to the market"],["أكلت تمن","akalt timman","I ate rice"],["شفته أمس","shifta ams","I saw him yesterday"],["كان يوم حلو","kan yom hilu","it was a nice day"]]],["future","Talking About the Future","Say what will happen",[["أجي باچر","aji bachir","I will come tomorrow"],["نروح للسوق","nruh lis-suq","we will go to the market"],["ناكل سوه","nakul sawa","we will eat together"],["أدگلك","adigg-lak","I will call you"],["نشوفكم قريب","nshofkum qarib","we will see you soon"]]],["alphabet","Arabic Script Foundations","Recognize useful Iraqi Arabic letters",[["چ","ch","the ch sound used in Iraqi Arabic"],["گ","g","the g sound used in Iraqi Arabic"],["ش","sh","the sh sound"],["ع","‘","the Arabic ayn sound"],["خ","kh","the kh sound"]]]],xe={months:[["family","greetings","numbers"],["colors","drinks","food"],["market","cafe","talkfamily"],["aboutme","days","outabout"],["weather","feelings","home"],["clothes","body","shopping"],["directions","river","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["past","future","alphabet"]},Zt=new Map(xe.months.flatMap((e,t)=>e.map(a=>[a,t+1]))),nt=["#38bdf8","#22c55e","#f59e0b"],lt=Qt.map(([e,t,a,i])=>{const r=Zt.get(e)||10;return{id:e,month:r,bucket:r-1,title:t,subtitle:a,icon:e.slice(0,2).toUpperCase(),color:nt[(r-1)%nt.length],note:"Baghdad-oriented Iraqi Arabic pilot draft. Please report family wording, spelling, meaning, and pronunciation differences.",items:i.map(([s,o,l],d)=>({id:`${e}-ar-iq-${String(d+1).padStart(3,"0")}`,targetText:s,transliteration:o,supportText:l,languageTag:"ar-IQ",script:"Arab",direction:"rtl",variety:"Baghdad-oriented Iraqi Arabic pilot",register:"conversational",source:Jt,contributor:"Nautilus pilot team",reviewStatus:"draft"}))}}),dt={languagePack:{id:"iraqi-arabic-en",targetLanguage:{code:"ar",name:"Iraqi Arabic",scripts:["Arab"]},supportLanguage:{code:"en",name:"English"},version:"0.1.0",status:"pilot",direction:"rtl",defaultScript:"Arab",locale:"ar-IQ",varietyPolicy:"Baghdad-oriented conversational Iraqi Arabic; draft forms require community review and regional differences must be labeled.",journeyThemeId:"rivers-of-mesopotamia@0.1.0",audio:{locale:"ar-IQ",delivery:"speech-synthesis-draft",reviewStatus:"draft",note:"Compatible device speech is an unreviewed preview and may not reflect the intended Iraqi variety."}},curriculum:xe,topics:lt.filter(e=>!xe.extras.includes(e.id)),bonusTopics:lt.filter(e=>xe.extras.includes(e.id))},$t=new Map([[He.languagePack.id,He],[ot.languagePack.id,ot],[dt.languagePack.id,dt]]);let H=He,f=H.languagePack,re=H.topics,Ie=H.bonusTopics,St=[...re,...Ie];const Xt=["Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"],qe=new Date(2026,7,10);let se=H.curriculum.months,It=H.curriculum.extras,jt=new Map(se.flatMap((e,t)=>e.map(a=>[a,t+1])));const ct=[{type:"discover",name:"Discover",detail:"Meet new words and hear them aloud"},{type:"recall",name:"Recall",detail:"Bring yesterday’s language back"},{type:"build",name:"Build",detail:"Put words into useful patterns"},{type:"use",name:"Use",detail:"Speak, listen, and role-play"},{type:"checkpoint",name:"Checkpoint",detail:"Show what you remember"}];function ea(){return[...$t.values()].map(e=>e.languagePack)}function ta(e){const t=$t.get(e);if(!t)throw new Error(`Unknown language pack: ${e}`);H=t,f=H.languagePack,re=H.topics,Ie=H.bonusTopics,St=[...re,...Ie],se=H.curriculum.months,It=H.curriculum.extras,jt=new Map(se.flatMap((a,i)=>a.map(r=>[r,i+1]))),F=Lt()}function pt(){return re}function aa(){return Ie}function ia(){return se.flat().map(O).filter(Boolean)}function ra(){return It.map(O).filter(Boolean)}function sa(e){return jt.get(e)||null}function O(e){return St.find(t=>t.id===e)}function Lt(){const e=[];let t=1;for(let a=0;a<10;a++){const i=se[a].map(O);for(let r=0;r<4;r++){const s=a*4+r+1;if(r<3){const o=i[r];for(let l=0;l<5;l++){const d=ct[l];e.push({id:`voyage-${t}`,number:t,month:a,week:s,dayOfWeek:l+1,topicId:o.id,type:d.type,title:`${o.title}: ${d.name}`,detail:d.detail}),t++}}else for(let o=0;o<5;o++){const l=ct[o];e.push({id:`voyage-${t}`,number:t,month:a,week:s,dayOfWeek:o+1,topicId:null,type:`integration-${l.type}`,title:`Integration: ${l.name}`,detail:`Review topics from Month ${a+1}`}),t++}}}return e}let F=Lt();function X(e){const t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function G(e,t=Math.random){const a=e.slice();for(let i=a.length-1;i>0;i--){const r=Math.floor(t()*(i+1));[a[i],a[r]]=[a[r],a[i]]}return a}function ie(e,t=6,a=Math.random){const i=Math.min(t,e.length),r=G(e,a).slice(0,i),s=[];return r.forEach((o,l)=>{s.push({id:`target-${l}`,pairId:l,text:o.targetText,kind:"target",languageTag:o.languageTag,script:o.script,direction:o.direction}),s.push({id:`support-${l}`,pairId:l,text:o.supportText,kind:"support"})}),{tiles:G(s,a),selectedIds:[],matchedIds:[]}}function J(e,t=8,a=Math.random){const i=Math.min(t,e.length);return{questions:G(e,a).slice(0,i).map(o=>{const l=e.filter(m=>m.targetText!==o.targetText),d=G(l,a).slice(0,Math.min(3,l.length)),c=G([o.targetText,...d.map(m=>m.targetText)],a);return{promptText:o.supportText,correctAnswer:o.targetText,options:c,correctItem:o}}),qIdx:0,score:0,selected:null,answered:!1}}function oa(e){let t=[...String(e)].reduce((a,i)=>a*31+i.charCodeAt(0)>>>0,2166136261);return()=>{t=t+1831565813>>>0;let a=t;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}function na(e,t,a={}){const i=[],r=a.random||Math.random;if(e.topicId){const s=O(e.topicId),o=re[re.indexOf(s)-1]||null;o&&i.push({type:"warmup",title:"Warmup",subtitle:`Quick practice from ${o.title}`,items:o.items.slice(0,5)}),e.type==="discover"?(i.push({type:"discover",title:"New Vocabulary",subtitle:`Discover words for ${s.title}`,items:s.items}),i.push({type:"match",title:"Recall Match",subtitle:"Connect the translations",match:ie(s.items,4,r)})):e.type==="recall"?(i.push({type:"recall-flash",title:"Vocabulary Recall",subtitle:"Self-assess your memory",items:G(s.items,r)}),i.push({type:"quiz",title:"Quick Quiz",subtitle:"Test your understanding",quiz:J(s.items,5,r)})):e.type==="build"?(i.push({type:"note",title:"Sentence Pattern",subtitle:"How sentences are structured",note:s.note||"Practice assembling phrases in this topic."}),i.push({type:"quiz",title:"Pattern Practice",subtitle:"Complete the sentences correctly",quiz:J(s.items,6,r)})):e.type==="use"?s.dialogue?i.push({type:"dialogue",title:"Dialogue Practice",subtitle:"Read the roles out loud",dialogue:s.dialogue}):i.push({type:"listen",title:"Listen & Repeat",subtitle:"Practice your pronunciation",items:s.items}):e.type==="checkpoint"&&(i.push({type:"quiz",title:"Topic Quiz",subtitle:"Show what you remember",quiz:J(s.items,8,r)}),i.push({type:"match",title:"Vocabulary Match",subtitle:"Match all pairs to complete the topic",match:ie(s.items,6,r)}))}else{const o=se[e.month].map(O).flatMap(l=>l.items);i.push({type:"quiz",title:"Integration Quiz",subtitle:`Review from Month ${e.month+1}`,quiz:J(o,8,r)}),i.push({type:"match",title:"Integration Match",subtitle:"Connect the words quickly",match:ie(o,8,r)})}return i.push({type:"done",title:"Completed!",subtitle:"Awesome job!"}),i}const A=null;async function la(){{alert("Supabase credentials are not configured in your environment variables. Please check the .env file.");return}}async function ut(){}let _e=f.id,Ke=f.version;function da(){_e=f.id,Ke=f.version}function ca(e){return localStorage.getItem(`nautilus:${e}:active-pack`)||"montenegrin-en"}function pa(e,t){localStorage.setItem(`nautilus:${e}:active-pack`,t)}function ne(e,t,a=_e){return`nautilus:${a}:${e}:${t}`}function ua(e,t){return{stars:`mn_${e}_stars`,topics:`mn_${e}_completed`,lessons:`mn_${e}_voyage_lessons`,activity:`mn_${e}_activity_dates`,dialogues:`mn_${e}_dialogues`}[t]}function ce(e,t,a){const i=ne(e,t),r=localStorage.getItem(i);if(r!==null)return r;const s=ua(e,t),o=s?localStorage.getItem(s):null;return o!==null?(localStorage.setItem(i,o),o):a}function oe(){const e=localStorage.getItem("mn_profiles");if(e)try{return JSON.parse(e).map(a=>String(a.id).startsWith("local-")?a:{...a,isGuide:!1})}catch{}return[]}function ma(e){localStorage.setItem("mn_profiles",JSON.stringify(e))}function ga(){return localStorage.getItem("mn_active_profile")||null}function ya(e){e?localStorage.setItem("mn_active_profile",e):localStorage.removeItem("mn_active_profile")}function te(e){if(!e)return null;const a=oe().find(c=>c.name===e)||{id:`local-${e}`,isGuide:!1},i=parseInt(ce(e,"stars","0"),10)||0;let r=[];try{r=JSON.parse(ce(e,"topics","[]"))}catch{}let s=[];try{s=JSON.parse(ce(e,"lessons","[]"))}catch{}let o=[];try{o=JSON.parse(ce(e,"activity","[]"))}catch{}const l=parseInt(ce(e,"dialogues","0"),10)||0,d=ha(o);return{id:a.id,profile:e,stars:i,streakDays:d,completedTopicIds:r,completedLessons:s,activityDates:o,dialoguesDone:l,isGuide:a.isGuide,packId:_e,packVersion:Ke}}function ha(e){if(!e||e.length===0)return 0;const t=new Set(e);let a=0,i=new Date;i.setHours(0,0,0,0);const r=X(i);i.setDate(i.getDate()-1);const s=X(i);if(!t.has(r)&&!t.has(s))return 0;let o=t.has(r)?new Date:i;for(o.setHours(0,0,0,0);t.has(X(o));)a++,o.setDate(o.getDate()-1);return a}function fa(e,t){localStorage.setItem(ne(e,"stars"),String(t))}function va(e,t){localStorage.setItem(ne(e,"topics"),JSON.stringify(t))}function ba(e,t){localStorage.setItem(ne(e,"lessons"),JSON.stringify(t))}function xa(e,t){localStorage.setItem(ne(e,"activity"),JSON.stringify(t))}function wa(e,t){localStorage.setItem(ne(e,"dialogues"),String(t))}function Ta(e,t){const a=te(e);if(a.isGuide)return;const i=a.stars+t;fa(e,i),_t(e),fe(a.id,"awardStars",{name:e,stars:i})}function _t(e){const t=te(e);if(t.isGuide)return;const a=X(new Date);if(!t.activityDates.includes(a)){const i=[...t.activityDates,a];xa(e,i),fe(t.id,"recordActivity",{name:e,dateKey:a})}}function ka(e,t){const a=te(e);if(!a.isGuide&&!a.completedLessons.includes(t)){const i=[...a.completedLessons,t];ba(e,i),_t(e),fe(a.id,"completeLesson",{name:e,lessonId:t})}}function mt(e,t){const a=te(e);if(!a.isGuide&&!a.completedTopicIds.includes(t)){const i=[...a.completedTopicIds,t];va(e,i),fe(a.id,"completeTopic",{name:e,topicId:t})}}function $a(e){const t=te(e);if(t.isGuide)return;const a=t.dialoguesDone+1;wa(e,a),fe(t.id,"incrementDialogues",{name:e,dialoguesDone:a})}function Sa(){return oe().filter(a=>!a.isGuide).map(a=>{const i=te(a.name);return{name:a.name,stars:i.stars,streak:i.streakDays,completed:i.completedTopicIds.length}})}async function gt(e,t){const a=oe();if(a.some(i=>i.name.toLowerCase()===e.toLowerCase()))throw new Error("Profile name already exists");{const i=`local-${e}`,r=[...a,{id:i,name:e,isGuide:t}];ma(r)}}function Ia(){try{return JSON.parse(localStorage.getItem("mn_sync_queue")||"[]")}catch{return[]}}function ja(e){localStorage.setItem("mn_sync_queue",JSON.stringify(e))}function fe(e,t,a){var s,o;if(String(e).startsWith("local-"))return;const i=Ia(),r=((o=(s=globalThis.crypto)==null?void 0:s.randomUUID)==null?void 0:o.call(s))||`${Date.now()}-${Math.random().toString(16).slice(2)}`;i.push({operationId:r,profileId:e,packId:_e,packVersion:Ke,type:t,payload:a,timestamp:Date.now()}),ja(i),Pt()}async function Pt(){}async function yt(){}const La={cnr:["hr-HR","hr","sr-RS","sr","bs-BA","bs"],sq:["sq-AL","sq-XK","sq"],ar:["ar-IQ"]};function Ee(e){return String(e||"").replace("_","-").toLowerCase()}function qt(e){return La[e]||[e]}function _a(e,t){const a=Array.isArray(e)?e:[];for(const i of qt(t)){const r=Ee(i),s=a.find(o=>Ee(o.lang)===r);if(s)return s;if(!r.includes("-")){const o=a.find(l=>Ee(l.lang).split("-")[0]===r);if(o)return o}}return null}function Pa(e,t,a,i){if(!a||!i||!e)return{spoken:!1,reason:"unsupported"};const r=_a(a.getVoices(),t);if(!r)return{spoken:!1,reason:"voice-missing",requestedLocales:qt(t)};const s=new i(e);return s.voice=r,s.lang=r.lang,s.rate=.82,s.pitch=1,a.cancel(),a.speak(s),{spoken:!0,voiceName:r.name,locale:r.lang}}const qa=new Set(["ltr","rtl"]);function je(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function Ea(e,t,a={}){return e==="support"?{languageTag:t.supportLanguage.code,script:null,direction:"ltr"}:e==="transliteration"?{languageTag:`${t.targetLanguage.code}-Latn`,script:"Latn",direction:"ltr"}:{languageTag:a.languageTag||t.locale||t.targetLanguage.code,script:a.script||t.defaultScript||t.targetLanguage.scripts[0],direction:a.direction||t.direction||"ltr"}}function S(e,t,a,i={},r=""){const s=Ea(t,a,i),o=qa.has(s.direction)?s.direction:"ltr";return`<bdi class="${["language-run",`${t}-language-run`,s.script?`script-${s.script.toLowerCase()}`:"",r].filter(Boolean).join(" ")}" lang="${je(s.languageTag)}" dir="${o}">${je(e)}</bdi>`}function Ma(e,t=(a=>(a=globalThis.document)==null?void 0:a.documentElement)()){var i,r;!t||!e||(t.lang=((i=e.supportLanguage)==null?void 0:i.code)||"en",t.dir="ltr",t.dataset.targetLanguage=((r=e.targetLanguage)==null?void 0:r.code)||"",t.dataset.targetDirection=e.direction||"ltr",t.dataset.targetScript=e.defaultScript||"")}function C(){throw new Error("Family cloud features are not configured.")}async function ht(){C();const{data:e,error:t}=await A.from("family_memberships").select("family_id, role, joined_at, families(id, name, learners_can_invite)").order("joined_at",{ascending:!0});if(t)throw t;return e||[]}async function pe(e){C();const{data:t,error:a}=await A.rpc("get_family_overview",{target_family:e});if(a)throw a;return t}async function Aa(e){C();const t=e.trim();if(!t)throw new Error("Family name is required.");const{data:a,error:i}=await A.rpc("create_family",{family_name:t});if(i)throw i;return a}async function Ca(e,t,a="learner"){C();const i=t.trim().toLowerCase();if(!i)throw new Error("Invitation email is required.");const{data:r,error:s}=await A.rpc("create_family_invitation",{target_family:e,invite_email:i,invite_role:a});if(s)throw s;return r}async function Da(e,t){C();const a=t.trim().toLowerCase();if(!a)throw new Error("Learner email is required.");const{data:i,error:r}=await A.rpc("create_learner_profile_invitation",{target_profile:e,invite_email:a});if(r)throw r;return i}async function za(e,t){C();const a=t.trim().toLowerCase();if(!a)throw new Error("Learner email is required.");const{data:i,error:r}=await A.rpc("link_family_learner_account",{target_profile:e,learner_email:a});if(r)throw r;return i}function Fa(e=new Date){const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${i}`}async function Et(e,t){C();const{data:a,error:i}=await A.rpc("get_family_play_state",{target_family:e,target_pack_id:t});if(i)throw i;return a||{completedDays:0,completedDates:[],activeSession:null}}async function Na({familyId:e,packId:t,packVersion:a,lessonId:i,voyageDay:r,participantProfileIds:s=[],date:o=new Date,timezone:l=Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}){C();const{data:d,error:c}=await A.rpc("start_family_play",{target_family:e,target_pack_id:t,target_pack_version:a,target_lesson_id:i,target_voyage_day:r,target_local_date:Fa(o),target_timezone:l,participant_profiles:s});if(c)throw c;return d}async function Ha(e,t,a=null){C();const{data:i,error:r}=await A.rpc("control_family_play",{target_session:e,requested_status:t,requested_segment:a});if(r)throw r;return i}async function Ga(e){C();const{data:t,error:a}=await A.rpc("join_family_play",{target_session:e});if(a)throw a;return t}async function Oa(e){C();const{data:t,error:a}=await A.rpc("touch_family_play",{target_session:e});if(a)throw a;return t}async function Ra(e,t,a){C();const{data:i,error:r}=await A.rpc("submit_family_quiz_answer",{target_session:e,target_segment:t,selected_answer:a});if(r)throw r;return i}async function Wa(e,t){C();const{data:a,error:i}=await A.rpc("lock_family_final_challenge",{target_session:e,target_segment:t});if(i)throw i;return a}async function Ba(e,t){C();const{data:a,error:i}=await A.rpc("reconcile_family_quiz_round",{target_session:e,target_segment:t});if(i)throw i;return a}async function Ua(e){C();const{data:t,error:a}=await A.rpc("complete_family_play",{target_session:e});if(a)throw a;return t}async function ft(e){C();const{data:t,error:a}=await A.rpc("claim_family_play_controller",{target_session:e});if(a)throw a;return t}async function Va(e,t){C();const{data:a,error:i}=await A.rpc("handoff_family_play_controller",{target_session:e,next_adult:t});if(i)throw i;return a}async function Ka(e){C();const{data:t,error:a}=await A.rpc("heartbeat_family_play",{target_session:e});if(a)throw a;return t}async function Ya(e,t){C();const{data:a,error:i}=await A.rpc("start_family_review",{source_session:e,participant_profiles:t});if(i)throw i;return a}async function Me(e,t){C();const{data:a,error:i}=await A.rpc("get_family_progress_dashboard",{target_family:e,target_pack_id:t});if(i)throw i;return a||{shared:{completedDays:0,reviewSessions:0},learners:[],history:[]}}function Ja(e,t,a){var b,x,g,T;const r=oe(),s=r.filter(v=>!v.isGuide),o=r.filter(v=>v.isGuide),l=(b=t.families)==null?void 0:b.some(v=>v.role==="owner"||v.role==="adult_guide"),d=`<div style="text-align: center; font-size: 12px; color: var(--text-muted); margin-bottom: 24px; border: 1px dashed var(--border-color); padding: 8px; border-radius: 8px;">
         ⚠️ Supabase is not configured (Local-Only Mode active)
       </div>`,c=t.sessionUser&&Array.isArray(t.families)&&t.families.length===0,m=t.sessionUser&&t.families===null&&!t.familyError;if(m||c){e.innerHTML=`
      <div class="profile-selection">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 16px; text-align: center;">
          <div class="logo-icon" style="width: 56px; height: 56px; font-size: 20px;">N</div>
          <h1 style="font-size: 32px; letter-spacing: -0.5px;">${m?"Loading your family…":"Create your family"}</h1>
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
      </div>`,(x=e.querySelector("#family-setup-form"))==null||x.addEventListener("submit",async v=>{v.preventDefault();const $=e.querySelector("#family-name").value.trim();$&&await a.createFamily($)}),(g=e.querySelector("#logout-btn"))==null||g.addEventListener("click",async()=>{await ut(),a.refresh()});return}e.innerHTML=`
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
  `;const k=e.querySelector("#learners-grid"),w=e.querySelector("#guides-grid");s.forEach(v=>{const $=document.createElement("div");$.style.display="flex",$.style.flexDirection="column",$.style.gap="8px";const D=document.createElement("button");if(D.className="profile-btn",D.innerText=`I'm ${v.name}`,D.addEventListener("click",()=>a.switchProfile(v.name)),$.appendChild(D),l&&!v.linkedUserId){const E=document.createElement("button");E.className="btn btn-secondary",E.style.fontSize="12px",E.style.padding="6px 10px",E.innerText=`Invite ${v.name} to Sign In`,E.addEventListener("click",async()=>{const q=prompt(`Enter ${v.name}'s Google account email:`);q!=null&&q.trim()&&await a.inviteLearner(v.id,v.name,q.trim())}),$.appendChild(E)}else if(v.linkedUserId){const E=document.createElement("span");E.style.cssText="font-size: 12px; color: var(--teal); text-align: center;",E.innerText="✓ Google sign-in linked",$.appendChild(E)}k.appendChild($)}),o.forEach(v=>{const $=document.createElement("button");$.className="profile-btn",$.style.borderColor="var(--pink)",$.style.color="var(--text-main)",$.innerText=`${v.name}`,$.addEventListener("click",()=>a.switchProfile(v.name)),w.appendChild($)});const j=document.createElement("button");if(j.className="profile-btn",j.style.borderStyle="dashed",j.style.borderColor="var(--border-color)",j.style.color="var(--text-muted)",j.style.fontSize="14px",j.innerText=t.sessionUser?"+ Add Learner":"+ Add Profile",j.addEventListener("click",async()=>{const v=prompt("Enter profile name:");if(!v||v.trim()==="")return;const $=t.sessionUser?!1:confirm("Is this profile a Parent/Guide? (Cancel for Learner)");try{await gt(v.trim(),$),a.refresh()}catch(D){alert(`Error creating profile: ${D.message}`)}}),k.appendChild(j),s.length===0){const v=document.createElement("button");v.className="profile-btn visual-preview-btn",v.innerHTML='<span aria-hidden="true">⛵</span><span>Explore the Visual Preview</span><small>Open the illustrated 200-day voyage</small>',v.addEventListener("click",async()=>{const $="Preview Learner";await gt($,!1),a.switchProfile($)}),k.prepend(v)}const u=e.querySelector("#login-btn");u&&u.addEventListener("click",async()=>{try{await la()}catch(v){alert(`Google login failed: ${v.message}`)}});const p=e.querySelector("#logout-btn");p&&p.addEventListener("click",async()=>{try{await ut(),a.refresh()}catch(v){alert(`Logout failed: ${v.message}`)}});const y=e.querySelector("#invite-partner-btn");y&&y.addEventListener("click",async()=>{const v=prompt("Enter your partner's Google account email:");v!=null&&v.trim()&&await a.invitePartner(v.trim())}),(T=e.querySelector("#family-overview-btn"))==null||T.addEventListener("click",a.goFamilyOverview)}function Mt(e=[]){return[...new Set(e.filter(Boolean))].sort()}function le(e=[]){return Math.min(200,Mt(e).length)}function Qa(e=[]){const t=le(e);return{completedDays:t,nextDay:t>=200?200:t+1,percent:Math.round(t/200*100)}}function Za(e=[]){const t=le(e);return Array.from({length:10},(a,i)=>{const r=Math.max(0,Math.min(20,t-i*20));return{month:i+1,completedDays:r,earned:r===20}})}const Xa=[{id:"anchors-aweigh",label:"Anchors Aweigh",min:0,icon:"⚓"},{id:"making-headway",label:"Making Headway",min:50,icon:"⛵"},{id:"rounding-the-mark",label:"Rounding the Mark",min:100,icon:"🧭"},{id:"flying-colors",label:"Flying Colors",min:150,icon:"🚩"},{id:"shipshape-moored",label:"Shipshape · Moored",min:200,icon:"🏝️"}],we="https://kormilo-nautilus.netlify.app/",At=[{min:1,icon:"🐠",name:"Reef Scout",note:"First lesson completed"},{min:25,icon:"🐬",name:"Bright Dolphin",note:"25 voyage days completed"},{min:75,icon:"🐢",name:"Steady Turtle",note:"75 voyage days completed"},{min:150,icon:"🐋",name:"Great Voyager",note:"150 voyage days completed"}],Q=[{x:7,y:66,name:"Home Harbor",chapter:"Family & greetings"},{x:17,y:57,name:"Lantern Quay",chapter:"Names & introductions"},{x:28,y:63,name:"Echo Arch",chapter:"Numbers & sounds"},{x:39,y:51,name:"Color Cove",chapter:"Colors & descriptions"},{x:49,y:58,name:"Market Island",chapter:"Food & shopping"},{x:59,y:44,name:"Café Point",chapter:"Ordering & conversation"},{x:69,y:52,name:"Compass Rock",chapter:"Directions & travel"},{x:79,y:39,name:"Story Bay",chapter:"Sentences & stories"},{x:88,y:47,name:"Family Coast",chapter:"Visits & gatherings"},{x:95,y:32,name:"Sunrise Kotor",chapter:"Confident conversation"}],Ae=[{label:"Port 1",name:"Home Harbor",chapter:"Family",asset:"poster-family-v1.jpg",unlock:0},{label:"Port 2",name:"Lantern Quay",chapter:"Greetings",asset:"poster-greetings-v1.jpg",unlock:20},{label:"Port 3",name:"Echo Arch",chapter:"Numbers & sounds",asset:"poster-echo-arch-v1.jpg",unlock:40},{label:"Port 4",name:"Color Cove",chapter:"Colors",asset:"poster-colors-v1.jpg",unlock:60},{label:"Port 5",name:"Market Island",chapter:"Food",asset:"poster-food-v1.jpg",unlock:80},{label:"Port 6",name:"Café Point",chapter:"Conversation",asset:"poster-cafe-v1.jpg",unlock:100},{label:"Port 7",name:"Compass Rock",chapter:"Directions",asset:"poster-directions-v1.jpg",unlock:120},{label:"Port 8",name:"Story Bay",chapter:"Sentences & stories",asset:"poster-story-bay-v1.jpg",unlock:140},{label:"Port 9",name:"Family Coast",chapter:"Visits & gatherings",asset:"poster-family-coast-v1.jpg",unlock:160},{label:"Port 10",name:"Sunrise Kotor",chapter:"Confident conversation",asset:"poster-sunrise-kotor-v1.jpg",unlock:180},{label:"Voyage finale",name:"Homecoming Harbor",chapter:"The 200-day voyage",asset:"poster-homecoming-v1.jpg",unlock:200}];function ei(e){const t=Math.max(0,Math.min(99.999,e))/100*(Q.length-1),a=Math.floor(t),i=t-a,r=Q[a],s=Q[Math.min(a+1,Q.length-1)];return{x:r.x+(s.x-r.x)*i,y:r.y+(s.y-r.y)*i}}function Ct(e){const t=Math.max(0,Math.min(200,Number(e)||0));return[...Xa].reverse().find(a=>t>=a.min)}function ti(e){const t=Math.max(0,Number(e)||0);return At.filter(a=>t>=a.min)}function Z(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function ai(e){var m,k,w,j;const t=((m=e.familyPlayState)==null?void 0:m.completedDays)??le(e.activityDates),a=Ct(t),i=ti(t),r=Za(((k=e.familyPlayState)==null?void 0:k.completedDates)||e.activityDates),s=At.find(u=>t<u.min),o=Math.round(t/200*100),l=((w=e.languagePacks.find(u=>u.id===e.activePackId))==null?void 0:w.targetLanguage.name)||"Language";if(e.activePackId==="iraqi-arabic-en")return ii({completedCount:t,percent:o,stage:a,activeLanguage:l,state:e});const d=Ae.map(u=>{const p=t>=u.unlock,y=t>=u.unlock&&t<u.unlock+20;return`<article class="destination-poster ${p?"unlocked":"charted"} ${y?"active":""}">
      <div class="destination-poster__plaque"><span>Nautilus · ${u.label}</span><b>${p?"Discovered":`Charts open day ${u.unlock}`}</b></div>
      <div class="destination-poster__art">
        <img src="${we}assets/illustrations/${u.asset}" alt="Travel-poster illustration of ${u.name}">
        ${p?'<span class="destination-poster__stamp" aria-label="Destination discovered">⚓</span>':'<span class="destination-poster__lock" aria-hidden="true">✦</span>'}
      </div>
      <footer><small>${Z(u.chapter)}</small><strong>${Z(u.name)}</strong></footer>
    </article>`}).join(""),c=Array.from({length:10},(u,p)=>{const y=(p+1)*20,b=p*20,x=t>=y,g=t>=b&&t<y;return`<li class="voyage-port ${x?"reached":g?"current":"charted"}">
      <span class="voyage-port__marker">${x?"✓":g?"⛵":p+1}</span>
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
        <img class="voyage-sea__art" src="${we}assets/illustrations/nautilus-voyage-panorama-v3.jpg" alt="A vintage travel-poster voyage from a moonlit Adriatic harbor toward the mountains and coastal towns of Montenegro">
        <div class="voyage-sea__shade" aria-hidden="true"></div>
        <div class="voyage-route" aria-hidden="true"><span></span></div>
        <ol class="voyage-ports" aria-label="Ten voyage ports">${c}</ol>
      </div>
    </section>

    <section class="destination-collection" aria-labelledby="destination-collection-title">
      <div class="destination-collection__header">
        <div><div class="hero-tag">The destination collection</div><h3 id="destination-collection-title">Posters from your voyage</h3></div>
        <p>${Ae.filter(u=>t>=u.unlock).length} of ${Ae.length} discovered</p>
      </div>
      <div class="destination-poster-grid">${d}</div>
    </section>

    <section class="captains-quarters" aria-labelledby="quarters-title">
      <div class="quarters-profile">
        <div class="quarters-avatar" aria-hidden="true">${((j=i.at(-1))==null?void 0:j.icon)||"⛵"}</div>
        <div>
          <div class="hero-tag">Captain's Quarters</div>
          <h3 id="quarters-title">${Z(e.profile)}'s logbook</h3>
          <p>${a.label} · ${e.streakDays} day streak · ${e.stars} stars</p>
        </div>
      </div>
      <div class="quarters-grid">
        <div class="quarters-panel">
          <h4>${Z(l)} Passport</h4>
          <p class="quarters-help">Earn one stamp for every 20 learning days.</p>
          <div class="passport-stamps">
            ${r.map(u=>`<div class="passport-stamp ${u.earned?"earned":""}" title="Month ${u.month}: ${u.completedDays} of 20 learning days">
              <span>${u.earned?"⚓":u.month}</span><small>${u.completedDays}/20</small>
            </div>`).join("")}
          </div>
        </div>
        <div class="quarters-panel">
          <h4>Friends of the Sea</h4>
          <p class="quarters-help">Companions mark steady progress, never competition.</p>
          <img class="sea-friends__art ${i.length?"":"waiting"}" src="${we}assets/illustrations/friends-of-the-sea.jpg" alt="A reef fish, dolphin, sea turtle, and whale swimming together as a voyage crew">
          <div class="sea-friends">
            ${i.length?i.map(u=>`<div class="sea-friend" title="${u.note}"><span>${u.icon}</span><small>${u.name}</small></div>`).join(""):'<p class="quarters-empty">Complete your first lesson to meet your Reef Scout.</p>'}
          </div>
          ${s?`<p class="next-friend">Next companion at voyage day ${s.min}.</p>`:'<p class="next-friend">Your whole crew is aboard!</p>'}
        </div>
      </div>
    </section>`}function ii({completedCount:e,percent:t,stage:a,activeLanguage:i,state:r}){const s=["Family Landing","Greeting Bridge","Number Reeds","Color Garden","Market Bank","Tea Courtyard","Compass Bend","Story Boat","Gathering Place","Home Waters"],o=Math.min(9,Math.floor(e/20));return`
    <section class="voyage-map-card river-pilot-card" aria-labelledby="voyage-map-title">
      <div class="voyage-map__header">
        <div>
          <div class="hero-tag">Rivers of Mesopotamia · visual pilot</div>
          <h3 id="voyage-map-title">${a.icon} ${a.label}</h3>
          <p>${e} of 200 Iraqi Arabic voyage days complete · ${t}% along the river</p>
        </div>
        <button class="btn btn-secondary btn-pill" id="view-voyage-btn">View voyage plan →</button>
      </div>
      <div class="river-pilot-map" style="--voyage-progress:${t}%">
        <div class="river-pilot-sun" aria-hidden="true"></div>
        <div class="river-pilot-reeds" aria-hidden="true">⌇⌇⌇　⌇⌇　⌇⌇⌇</div>
        <div class="river-pilot-route" aria-hidden="true"><span></span></div>
        <ol aria-label="Ten river journey stops">
          ${s.map((l,d)=>`<li class="${d<o?"reached":d===o?"current":""}"><span>${d<o?"✓":d+1}</span><small>${Z(l)}</small></li>`).join("")}
        </ol>
        <p>This neutral river map prevents the Iraqi Arabic pilot from inheriting another language pack's imagery. Community-reviewed illustrated scenes will replace it in the next visual phase.</p>
      </div>
    </section>
    <section class="captains-quarters river-pilot-log" aria-labelledby="quarters-title">
      <div class="quarters-profile">
        <div class="quarters-avatar" aria-hidden="true">🛶</div>
        <div><div class="hero-tag">Family pilot log</div><h3 id="quarters-title">${Z(r.profile)}'s river journal</h3><p>${Z(i)} · ${r.streakDays} day streak · ${r.stars} stars</p></div>
      </div>
    </section>`}function ri(e){var k;const t=((k=e.familyPlayState)==null?void 0:k.completedDays)??le(e.activityDates),a=Math.round(t/200*100),i=Ct(t);if(e.activePackId==="iraqi-arabic-en")return`<section class="immersive-voyage river-immersive-pilot" aria-labelledby="immersive-voyage-title">
      <div class="river-pilot-sun" aria-hidden="true"></div>
      <div class="immersive-voyage__hud">
        <div class="hero-tag">Rivers of Mesopotamia · visual pilot</div>
        <h1 id="immersive-voyage-title">Family River Journey</h1>
        <p><strong>${i.icon} ${i.label}</strong><br>${t} Iraqi Arabic family days complete · ${a}% along the river</p>
        <div class="immersive-voyage__meter" aria-label="${a}% of family voyage complete"><span style="width:${a}%"></span></div>
        <a class="btn btn-primary" href="#voyage-plan">Explore the route plan ↓</a>
      </div>
      <p class="river-visual-review-note">Illustrated river scenes are intentionally withheld until community cultural review.</p>
    </section>`;const r=Math.min(10,Math.floor(t/20)+1),s=Math.max(0,Math.min(20,r*20-t)),o=Math.max(0,Math.min(100,a)),l=ei(a),d=Q.map(w=>`${w.x},${w.y}`).join(" "),c=Q.map((w,j)=>{const u=j+1<r?"reached":j+1===r?"current":"charted";return`<button class="voyage-landmark ${u}" style="--port-x:${w.x}%;--port-y:${w.y}%" aria-label="Port ${j+1}: ${w.name}, ${w.chapter}" data-port="${j+1}">
      <span class="voyage-landmark__beacon">${u==="reached"?"✓":j+1}</span>
      <span class="voyage-landmark__label"><strong>${w.name}</strong><small>${w.chapter}</small></span>
    </button>`}).join(""),m=Q[r-1];return`<section class="immersive-voyage" style="--voyage-camera:${o}%;--voyage-progress:${a}%;--voyage-x:${l.x}%;--voyage-y:${l.y}%" aria-labelledby="immersive-voyage-title">
    <picture class="immersive-voyage__world-frame">
      <img class="immersive-voyage__world" src="${we}assets/illustrations/nautilus-voyage-panorama-v3.jpg" alt="A vintage travel-poster Adriatic voyage from a moonlit family harbor through islands toward a sunlit Montenegrin mountain town">
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
      <span>Port ${r} of 10</span>
    </div>
    <div class="immersive-voyage__hud">
      <div class="hero-tag">Now sailing · Port ${r}</div>
      <h1 id="immersive-voyage-title">${m.name}</h1>
      <p><strong>${i.icon} ${i.label}</strong> · ${m.chapter}<br>${t} family days complete · ${s} to the next port</p>
      <div class="immersive-voyage__meter" aria-label="${a}% of family voyage complete"><span></span></div>
      <a class="btn btn-primary" href="#voyage-plan">Explore the route plan ↓</a>
    </div>
    <div class="immersive-voyage__vessel" aria-hidden="true"><span>⛵</span><i></i><b></b></div>
    <div class="immersive-voyage__hint">Choose a port to preview each chapter · move your pointer to look across the water</div>
  </section>`}function Ce(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function si(e,t,a){var j,u,p,y,b,x;const i=t.sessionUser?oe().filter(g=>!String(g.id).startsWith("local-")):oe(),r=((j=t.familyPlayState)==null?void 0:j.completedDays)??le(t.activityDates),s=F[Math.min(r,199)],o=O(s.topicId)||pt()[0],l=t.completedLessons.includes(s.id),c=[{id:"first",label:"First Steps",cond:t.completedTopicIds.length>=1},{id:"getting",label:"Getting Started",cond:t.completedTopicIds.length>=5},{id:"halfway",label:"Halfway Hero",cond:t.completedTopicIds.length>=17},{id:"fluent",label:"Fluent Enough",cond:t.completedTopicIds.length>=pt().length},{id:"chatter",label:"Chatterbox",cond:t.dialoguesDone>=3},{id:"streak",label:"7-Day Streak",cond:t.streakDays>=7},{id:"pro",label:"Practice Pro",cond:t.stars>=50}].filter(g=>g.cond),m={};ia().forEach(g=>{const T=`Month ${sa(g.id)}`;m[T]||(m[T]=[]),m[T].push(g)});let k="";e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
          <div class="logo-icon">${f.targetLanguage.code.toUpperCase()}</div>
          <div class="logo-title">Learn ${f.targetLanguage.name}</div>
        </button>
        ${k}
        ${!t.linkedLearnerProfileId&&((u=t.families)!=null&&u.some(g=>g.role==="owner"||g.role==="adult_guide"))?'<button class="btn btn-secondary" id="family-overview-btn" style="padding: 6px 12px; font-size: 12px;">Family Overview</button>':""}
      </div>

      <div class="nav-actions">
        <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted);">
          Language
          <select id="language-select" class="badge-pill" aria-label="Learning language" style="color: var(--text-main); min-height: 44px;">
            ${t.languagePacks.map(g=>`
              <option value="${g.id}" ${g.id===t.activePackId?"selected":""}>${g.targetLanguage.name}${g.status==="pilot"?" · Pilot":g.status==="review"?" · Review":""}</option>
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
      ${t.familyError?`<p role="alert" class="dashboard-alert">${Ce(t.familyError)}</p>`:""}
      ${f.status==="pilot"?`
        <section class="pilot-pack-banner" role="status">
          <div><strong>${Ce(f.targetLanguage.name)} family pilot</strong><span>Draft wording and pronunciation need community review. Please treat this as a course we are improving together.</span></div>
          <span>Version ${Ce(f.version)}</span>
        </section>`:""}
      ${(p=t.familyPlayState)!=null&&p.activeSession?`
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
        </section>`:ai(t)}

      <!-- Guide Progress dashboard -->
      ${t.isGuide?`
        <section aria-label="Learner Progress Summary">
          <h3 class="section-title">Kids' Progress</h3>
          <div class="kids-progress-grid">
            ${Sa().map(g=>`
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

        ${Object.keys(m).map(g=>`
          <div style="margin-bottom: 28px;">
            <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">${g}</h4>
            <div class="cards-grid">
              ${m[g].map(T=>{const v=t.completedTopicIds.includes(T.id);return`
                  <button type="button" class="topic-card" data-topic-id="${T.id}" aria-label="Practice ${T.title}">
                    <div class="topic-card__icon" style="background: ${T.color};">${T.icon}</div>
                    ${v?'<div class="topic-card__check">✓</div>':""}
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
            ${[...ra(),...aa()].map(g=>`
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
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#start-session-btn").addEventListener("click",()=>a.startSession(s)),e.querySelector("#view-voyage-btn").addEventListener("click",a.goCurriculum),e.querySelectorAll(".profile-pill-btn").forEach(g=>{g.id!=="nav-add-profile-btn"&&g.addEventListener("click",T=>{a.switchProfile(T.target.dataset.profile)})}),e.querySelector("#nav-add-profile-btn").addEventListener("click",()=>{a.goProfileSelect()}),(y=e.querySelector("#language-select"))==null||y.addEventListener("change",g=>{a.selectLanguage(g.target.value)}),(b=e.querySelector("#family-overview-btn"))==null||b.addEventListener("click",a.goFamilyOverview),(x=e.querySelector("#join-family-play-btn"))==null||x.addEventListener("click",a.openFamilySession),e.querySelectorAll(".topic-card").forEach(g=>{g.addEventListener("click",()=>{const T=g.dataset.topicId;T&&a.openTopic(T)})});const w=e.querySelector("#mixed-review-card");w&&w.addEventListener("click",a.startMixedReview)}function oi(e,t,a,i){var q;const r=t.calendarMonth,s=new Date(qe.getFullYear(),qe.getMonth()+r,1),o=s.getFullYear(),l=s.getMonth(),d=(new Date(o,l,1).getDay()+6)%7,c=new Date(o,l+1,0).getDate(),m=new Map;let k=new Date(qe);for(let _=0;_<F.length;_++){for(;k.getDay()===0||k.getDay()===6;)k.setDate(k.getDate()+1);m.set(X(k),F[_]),k.setDate(k.getDate()+1)}const w=[];for(let _=0;_<d;_++)w.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const j=X(new Date),u=((q=t.familyPlayState)==null?void 0:q.completedDates)||t.activityDates,p=new Set(Mt(u));for(let _=1;_<=c;_++){const W=new Date(o,l,_),ae=X(W),B=m.get(ae),de=p.has(ae),ve=ae===j;let V="state-rest",K="In harbor";B&&(V="state-planned",K="Charted"),ve&&B&&!de&&(V="state-making-way",K="Making way"),de&&(V="state-full-sail",K="Full sail"),w.push({label:String(_),stateClass:V,ariaLabel:`${W.toLocaleDateString("en-US",{month:"long",day:"numeric"})}: ${K}${B?`, Lesson ${B.number}: ${B.title}`:""}`})}for(;w.length%7!==0;)w.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const y=s.toLocaleDateString("en-US",{month:"long",year:"numeric"}),b=Qa(u),x=new Date;x.setHours(0,0,0,0),x.setDate(x.getDate()-(x.getDay()+6)%7);const g=new Date(x);g.setDate(g.getDate()+7);const T=t.activityDates.filter(_=>{const W=new Date(`${_}T12:00:00`);return W>=x&&W<g}).length,v=t.activityDates.filter(_=>_.startsWith(`${o}-${String(l+1).padStart(2,"0")}-`)).length,$=w.filter(_=>_.label&&_.ariaLabel.includes("Lesson"));e.innerHTML=`
    <div class="voyage-calendar__head">
      <div>
        <div style="color: var(--cyan); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 4px;">Ten-month learning voyage</div>
        <h3 class="voyage-calendar__title">${y}</h3>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <div class="voyage-calendar__count" title="Voyage Progress">
          ${b.completedDays<200?`${b.completedDays} of 200 learning days complete`:"Voyage complete · 200 of 200"}
        </div>
        <div class="voyage-calendar__nav">
          <button id="cal-prev" aria-label="Previous month" ${r===0?'disabled style="opacity:0.3; cursor:default;"':""}>‹</button>
          <button id="cal-next" aria-label="Next month" ${r===9?'disabled style="opacity:0.3; cursor:default;"':""}>›</button>
        </div>
      </div>
    </div>

    <div class="voyage-calendar__grid" role="grid" aria-label="Calendar for ${y}">
      ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(_=>`
        <div class="voyage-calendar__weekday" role="columnheader" aria-label="${_}">${_}</div>
      `).join("")}

      ${w.map(_=>_.label===""?`<div class="voyage-calendar__day" style="${_.style}" aria-hidden="true"></div>`:`
          <div class="voyage-calendar__day ${_.stateClass}" role="gridcell" aria-label="${_.ariaLabel}" tabindex="0">
            ${_.label}
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
      <span>${b.completedDays} learning ${b.completedDays===1?"day":"days"} completed · ${b.percent}%</span>
      <span>•</span>
      <span>${t.completedLessons.length} activities completed</span>
      <span>•</span>
      <span>${T} active ${T===1?"day":"days"} this week</span>
      <span>•</span>
      <span>${v} active ${v===1?"day":"days"} this month</span>
    </div>

    <details class="calendar-list">
      <summary>View this month as a list</summary>
      <ul>
        ${$.map(_=>`<li>${_.ariaLabel}</li>`).join("")}
      </ul>
    </details>
  `;const D=e.querySelector("#cal-prev"),E=e.querySelector("#cal-next");D&&r>0&&D.addEventListener("click",a),E&&r<9&&E.addEventListener("click",i)}const ni=[{id:"red",hex:"#e53935",dark:!1,terms:["red","crvena","e kuqe"]},{id:"blue",hex:"#1976d2",dark:!1,terms:["blue","plava","blu"]},{id:"green",hex:"#2e7d32",dark:!1,terms:["green","zelena","e gjelbër"]},{id:"yellow",hex:"#f9c928",dark:!0,terms:["yellow","žuta","e verdhë"]},{id:"black",hex:"#111318",dark:!1,terms:["black","crna","e zezë"]},{id:"white",hex:"#f5f1e8",dark:!0,terms:["white","bijela","e bardhë"]}],Dt="https://kormilo-nautilus.netlify.app/",li={greetings:{src:"assets/illustrations/poster-greetings-v1.jpg",place:"Lantern Quay",prompt:"Meet at the waterfront and practice the words that begin every conversation.",icon:"👋"},colors:{src:"assets/illustrations/poster-colors-v1.jpg",place:"Color Cove",prompt:"Look around the harbor. The vocabulary is already in the scene.",icon:"🎨"},family:{src:"assets/illustrations/poster-family-v1.jpg",place:"The Family Courtyard",prompt:"Take a seat at the table and bring the family words to life.",icon:"🏡"},food:{src:"assets/illustrations/poster-food-v1.jpg",place:"Market Island",prompt:"Explore the market and name what the family might bring to the table.",icon:"🍅"},cafe:{src:"assets/illustrations/poster-cafe-v1.jpg",place:"Café Point",prompt:"Take a seat by the water and practice ordering together.",icon:"☕"},directions:{src:"assets/illustrations/poster-directions-v1.jpg",place:"Compass Rock",prompt:"Follow the signs, choose a path, and help one another find the way.",icon:"🧭"}};function zt(e){const t=li[e];return t?{...t,src:`${Dt}${t.src}`}:null}function Ge(e){const t=String(e||"").trim().toLocaleLowerCase();return ni.find(a=>a.terms.includes(t))||null}function di(e,t){return e!=="colors"?null:Ge(t==null?void 0:t.supportText)||Ge(t==null?void 0:t.targetText)}function Ye(e,t){const a=di(e,t);return a?`<div class="color-field color-field--${a.id}" style="--lesson-color:${a.hex}" aria-hidden="true">
    <span class="color-field__sun"></span><span class="color-field__sail"></span><span class="color-field__wave"></span>
  </div>`:t!=null&&t.emoji?`<div class="flashcard-emoji">${t.emoji}</div>`:""}function Ft(e){const t=Ge(e);return t?` style="--tile-color:${t.hex};--tile-text:${t.dark?"#111318":"#ffffff"}" data-color-tile="true"`:""}function ci(e){return e!=="colors"?"":`<figure class="lesson-scene lesson-scene--colors">
    <img src="${Dt}assets/illustrations/colors-harbor.jpg" alt="A Montenegro harbor with a red boat, blue sea, green shutters, yellow umbrella, black cat, and white church tower">
    <figcaption><strong>Find the colors in the harbor.</strong><span>Red boat · blue sea · green shutters · yellow umbrella · black cat · white tower</span></figcaption>
  </figure>`}function Nt(e,t,a){var c;const i=O(t.topicId),r=t.completedTopicIds.includes(i.id),s=!r&&!t.isGuide,o=[{id:"flashcards",label:"Flashcards"},{id:"match",label:"Match"},{id:"quiz",label:"Quiz"},{id:"listen",label:"Listen"}];i.dialogue&&o.push({id:"dialogue",label:"Role-play"}),e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar topic-navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${f.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${f.targetLanguage.name}</div>
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
          ${((c=f.audio)==null?void 0:c.reviewStatus)==="draft"?'<span class="audio-review-badge">Voice preview · fluent audio review pending</span>':""}
          ${f.status==="pilot"?'<span class="audio-review-badge pilot">Pilot wording · community review pending</span>':""}
        </div>
        <div>
          ${r?`
            <div style="color: var(--lime); font-weight: 800; font-size: 14px; display: flex; align-items: center; gap: 6px;">
              <span>✓</span> Completed Topic
            </div>
          `:""}
          ${s?`
            <button class="btn btn-secondary btn-pill" id="skip-btn" style="padding: 6px 14px; font-size: 12px; min-height: 32px;">Already know this — skip</button>
          `:""}
        </div>
      </div>

      ${i.note?`
        <div style="background: rgba(250, 204, 21, 0.08); border: 1px solid var(--amber); border-radius: 12px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #ffe58f; margin-bottom: 24px; white-space: pre-line;">
          ${i.note}
        </div>
      `:""}

      ${ci(i.id)}

      <!-- Activities Tabs -->
      <div class="topic-activity-tabs" role="tablist" aria-label="Topic Activities">
        ${o.map(m=>`
          <button class="btn btn-secondary btn-pill ${t.activity===m.id?"btn-active":""}" role="tab" aria-selected="${t.activity===m.id}" data-tab="${m.id}">${m.label}</button>
        `).join("")}
      </div>

      <!-- Activity Container -->
      <div id="activity-mount"></div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#back-btn").addEventListener("click",a.goDashboard);const l=e.querySelector("#skip-btn");l&&l.addEventListener("click",()=>{a.markTopicCompleted(i.id),Nt(e,t,a)}),e.querySelectorAll("[data-tab]").forEach(m=>{m.addEventListener("click",k=>{const w=k.target.dataset.tab;a.setActivity(w)})});const d=e.querySelector("#activity-mount");pi(d,i,t,a)}function pi(e,t,a,i){a.activity==="flashcards"?Te(e,t,a,i):a.activity==="match"?ye(e,t,a,i):a.activity==="quiz"?ke(e,t,a,i):a.activity==="listen"?ee(e,t,a,i):a.activity==="dialogue"&&Oe(e,t,a,i)}function Te(e,t,a,i){const r=a.flash,s=r.order||t.items.map((d,c)=>c),o=t.items[s[r.idx]];e.innerHTML=`
    <div class="flashcard-container">
      <div class="flashcard-hint" style="color: var(--text-muted); font-size: 13px; font-weight: 700;">
        Card ${r.idx+1} of ${t.items.length}
      </div>

      <button type="button" class="flashcard-wrapper" id="card-wrapper" aria-label="Flashcard, tap to flip">
        <div class="flashcard ${r.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${Ye(t.id,o)}
            <div class="flashcard-text-mn">${S(o.targetText,"target",f,o)}</div>
            ${o.transliteration?`<div class="transliteration-text">${S(o.transliteration,"transliteration",f,o)}</div>`:""}
            <div class="flashcard-hint">Tap to reveal translation</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en">${S(o.supportText,"support",f,o)}</div>
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
  `;const l=e.querySelector("#card-wrapper");l.addEventListener("click",()=>{r.flipped=!r.flipped,l.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#speak-btn").addEventListener("click",d=>{d.stopPropagation(),i.speak(o.targetText)}),e.querySelector("#prev-card-btn").addEventListener("click",()=>{r.idx=(r.idx-1+t.items.length)%t.items.length,r.flipped=!1,Te(e,t,a,i)}),e.querySelector("#next-card-btn").addEventListener("click",()=>{r.idx=(r.idx+1)%t.items.length,r.flipped=!1,Te(e,t,a,i)}),e.querySelector("#shuffle-btn").addEventListener("click",()=>{r.order=G(t.items.map((d,c)=>c)),r.idx=0,r.flipped=!1,Te(e,t,a,i)})}function ye(e,t,a,i){const r=a.match;(!r.tiles||r.tiles.length===0)&&(a.match=ie(t.items));const s=a.match,o=s.matchedIds.length/2,l=s.tiles.length/2,d=o===l;e.innerHTML=`
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
          ${s.tiles.map(c=>{const m=s.matchedIds.includes(c.id),k=s.selectedIds.includes(c.id);let w="match-tile";return m?w+=" matched":k&&(w+=" selected"),`
              <button class="${w}" data-tile-id="${c.id}"${Ft(c.text)} ${m?"disabled":""}>
                ${S(c.text,c.kind,f,c)}
              </button>
            `}).join("")}
        </div>
      `}

      <button class="btn btn-secondary" id="reshuffle-match-btn">
        ${d?"Play Again":"New Round"}
      </button>
    </div>
  `,e.querySelector("#reshuffle-match-btn").addEventListener("click",()=>{a.match=ie(t.items),ye(e,t,a,i)}),e.querySelectorAll(".match-tile").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.tileId;ui(m,e,t,a,i)})})}function ui(e,t,a,i,r){const s=i.match;if(!(s.matchedIds.includes(e)||s.selectedIds.includes(e)||s.selectedIds.length>=2)&&(s.selectedIds.push(e),ye(t,a,i,r),s.selectedIds.length===2)){const[o,l]=s.selectedIds,d=s.tiles.find(m=>m.id===o),c=s.tiles.find(m=>m.id===l);d.pairId===c.pairId?(s.matchedIds.push(o,l),s.selectedIds=[],setTimeout(()=>{s.matchedIds.length===s.tiles.length&&(r.awardStars(1),r.markTopicCompleted(a.id)),ye(t,a,i,r)},250)):setTimeout(()=>{s.selectedIds=[],ye(t,a,i,r)},700)}}function ke(e,t,a,i){const r=a.quiz;(!r.questions||r.questions.length===0)&&(a.quiz=J(t.items));const s=a.quiz,o=s.questions[s.qIdx];if(s.qIdx>=s.questions.length||s.questions.length===0){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Quiz Finished!</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          Your score: ${s.score} / ${s.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="restart-quiz-btn">Try Again</button>
      </div>
    `,e.querySelector("#restart-quiz-btn").addEventListener("click",()=>{a.quiz=J(t.items),ke(e,t,a,i)});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${s.qIdx+1} of ${s.questions.length} · Score: ${s.score}
      </div>

      <div class="quiz-prompt">
        Translate to ${f.targetLanguage.name}:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">${S(o.promptText,"support",f)}</span>
      </div>

      <div class="quiz-options">
        ${o.options.map(c=>{let m="quiz-option";return s.answered&&(c===o.correctAnswer?m+=" correct":c===s.selected?m+=" incorrect":m+=" disabled"),`
            <button class="${m}" data-option="${je(c)}" ${s.answered?"disabled":""}>
              ${S(c,"target",f)}
            </button>
          `}).join("")}
      </div>

      ${s.answered?`
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          ${s.qIdx+1===s.questions.length?"Show Results":"Next Question →"}
        </button>
      `:""}
    </div>
  `,e.querySelectorAll(".quiz-option").forEach(c=>{c.addEventListener("click",()=>{if(s.answered)return;const m=c.dataset.option;s.selected=m,s.answered=!0,m===o.correctAnswer&&(s.score++,i.awardStars(1)),ke(e,t,a,i)})});const d=e.querySelector("#next-question-btn");d&&d.addEventListener("click",()=>{s.qIdx++,s.answered=!1,s.selected=null,s.qIdx>=s.questions.length&&i.markTopicCompleted(t.id),ke(e,t,a,i)})}function ee(e,t,a,i){const r=a.listen,s=r.order||t.items.map((d,c)=>c),o=t.items[s[r.idx]],l=a.recording;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${r.idx+1} of ${t.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 32px; text-align: center;">
        ${S(o.targetText,"target",f,o)}
        ${o.transliteration?`<div class="transliteration-text">${S(o.transliteration,"transliteration",f,o)}</div>`:""}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play pronunciation</button>

      <p style="font-size: 11px; color: var(--text-muted); max-width: 340px; text-align: center; line-height: 1.4;">
        Uses browser speech synthesis fallback voice.
      </p>

      <button class="btn btn-secondary" id="reveal-meaning-btn">
        ${r.revealed?"Hide Meaning":"Reveal Meaning"}
      </button>

      ${r.revealed?`
        <div style="font-size: 18px; color: var(--cyan); font-weight: 600; text-align: center; animation: fadeIn 0.2s;">
          ${S(o.supportText,"support",f,o)}
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
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{i.speak(o.targetText)}),e.querySelector("#reveal-meaning-btn").addEventListener("click",()=>{r.revealed=!r.revealed,ee(e,t,a,i)}),e.querySelector("#prev-listen-btn").addEventListener("click",()=>{r.idx=(r.idx-1+t.items.length)%t.items.length,r.revealed=!1,vt(a),ee(e,t,a,i)}),e.querySelector("#next-listen-btn").addEventListener("click",()=>{r.idx=(r.idx+1)%t.items.length,r.revealed=!1,vt(a),ee(e,t,a,i)}),e.querySelector("#mic-record-btn").addEventListener("click",()=>{mi(e,t,a,i)})}function vt(e){e.recording.url&&URL.revokeObjectURL(e.recording.url),e.recording={status:"idle",url:null,error:null,chunks:[],recorder:null}}async function mi(e,t,a,i){const r=a.recording;if(r.status==="recording"){r.recorder&&r.recorder.stop();return}try{const s=await navigator.mediaDevices.getUserMedia({audio:!0}),o=new MediaRecorder(s),l=[];o.ondataavailable=d=>{d.data.size>0&&l.push(d.data)},o.onstop=()=>{const d=new Blob(l,{type:"audio/webm"}),c=URL.createObjectURL(d);s.getTracks().forEach(m=>m.stop()),a.recording={status:"ready",url:c,error:null,chunks:[],recorder:null},ee(e,t,a,i)},o.start(),a.recording={status:"recording",url:null,error:null,chunks:l,recorder:o},ee(e,t,a,i)}catch{a.recording={status:"idle",url:null,error:"Microphone access denied or unavailable on this device.",chunks:[],recorder:null},ee(e,t,a,i)}}function Oe(e,t,a,i){const r=a.dialogue,s=t.dialogue;r.readAs||(r.readAs=s.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${s.roles.map(o=>`
          <button class="btn btn-secondary btn-pill ${r.readAs===o?"btn-active":""}" data-role="${o}">
            Read as ${o}
          </button>
        `).join("")}
        <button class="btn btn-secondary btn-pill" id="toggle-translation-btn">
          ${r.showEn?"Hide Translations":"Show Translations"}
        </button>
      </div>

      <div class="dialogue-container">
        ${s.lines.map((o,l)=>`
            <div class="dialogue-bubble ${o.role===r.readAs?"active-reader":""}" style="animation: fadeIn 0.3s var(--transition-medium);">
              <div class="dialogue-header">
                <span>${o.role}</span>
                <button class="dialogue-play-btn" data-play-line="${l}">►</button>
              </div>
              <div style="font-size: 17px; font-weight: 600; margin-top: 4px; color: var(--text-main);">${S(o.targetText,"target",f,o)}</div>
              ${r.showEn?`
                <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">${S(o.supportText,"support",f,o)}</div>
              `:""}
            </div>
          `).join("")}
      </div>

      <button class="btn btn-primary" id="finish-dialogue-btn" style="width: 100%; max-width: 480px; margin-top: 12px;">
        Finish Dialogue Practice
      </button>
    </div>
  `,e.querySelectorAll("[data-role]").forEach(o=>{o.addEventListener("click",()=>{r.readAs=o.dataset.role,Oe(e,t,a,i)})}),e.querySelector("#toggle-translation-btn").addEventListener("click",()=>{r.showEn=!r.showEn,Oe(e,t,a,i)}),e.querySelectorAll("[data-play-line]").forEach(o=>{o.addEventListener("click",()=>{const l=parseInt(o.dataset.playLine),d=s.lines[l].targetText;i.speak(d)})}),e.querySelector("#finish-dialogue-btn").addEventListener("click",()=>{i.incrementDialogues(),i.markTopicCompleted(t.id),i.awardStars(2),i.goDashboard()})}function gi(e,t,a){const i=t.activeLesson;if(!t.session||t.session.lessonId!==i.id){const c=na(i,t.completedTopicIds);t.session={lessonId:i.id,stepIdx:0,steps:c,flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}}}const r=t.session,s=r.steps[r.stepIdx],o=zt(i.topicId),l=Math.round((r.stepIdx+1)/r.steps.length*100);e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${f.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${f.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="exit-btn">← Exit Lesson</button>
      </div>
    </header>

    <main class="${o?"immersive-lesson":"container"}" ${o?`style="--lesson-progress:${l}%;--lesson-shift:${Math.min(4,r.stepIdx)*-.35}%"`:'style="max-width:640px;"'}>
      ${o?`<img class="immersive-lesson__world" src="${o.src}" alt="${o.place}, an illustrated setting for this lesson">
        <div class="immersive-lesson__light" aria-hidden="true"></div>
        <div class="immersive-lesson__leaves" aria-hidden="true"></div>
        <aside class="immersive-lesson__location"><span>${o.icon}</span><div><small>Learning at</small><strong>${o.place}</strong><p>${o.prompt}</p></div></aside>`:""}
      <div class="${o?"immersive-lesson__workspace":""}">
        <!-- Steps Progress Bar -->
        <div class="session-steps-bar" role="progressbar" aria-label="Lesson progress" aria-valuenow="${r.stepIdx+1}" aria-valuemin="1" aria-valuemax="${r.steps.length}">
          ${r.steps.map((c,m)=>`
            <div class="session-step-segment ${m<=r.stepIdx?"active":""}" title="${c.title||c.type}"></div>
          `).join("")}
        </div>
        ${o?`<div class="immersive-lesson__trail" aria-hidden="true"><span></span><i>${o.icon}</i></div>`:""}
        <div id="session-step-mount" class="${o?"immersive-lesson__card":""}"></div>
      </div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#exit-btn").addEventListener("click",a.goDashboard);const d=e.querySelector("#session-step-mount");yi(d,s,t,a)}function yi(e,t,a,i){t.type==="warmup"?hi(e,t,a,i):t.type==="discover"?Re(e,t,a,i):t.type==="recall-flash"?Ht(e,t,a,i):t.type==="note"?fi(e,t,a,i):t.type==="quiz"?We(e,t,a,i):t.type==="match"?$e(e,t,a,i):t.type==="dialogue"?Gt(e,t,a,i):t.type==="listen"?Be(e,t,a,i):t.type==="done"&&bi(e,t,a,i)}function hi(e,t,a,i){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 6px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
        ${t.items.map((r,s)=>`
          <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; border-radius: 12px; padding: 14px 16px;">
            <div>
              <div style="font-weight: 700; font-size: 16px;">${r.targetText}</div>
              <div style="font-size: 13px; color: var(--text-muted);">${r.supportText}</div>
            </div>
            <button class="dialogue-play-btn" data-warmup-play="${s}">►</button>
          </div>
        `).join("")}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
    </div>
  `,e.querySelectorAll("[data-warmup-play]").forEach(r=>{r.addEventListener("click",()=>{const s=parseInt(r.dataset.warmup-play);i.speak(t.items[s].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{i.nextSessionStep()})}function Re(e,t,a,i){const r=a.session.flash,s=t.items[r.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Word ${r.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="discover-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Learning card, tap to flip">
        <div class="flashcard ${r.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${Ye(a.activeLesson.topicId,s)}
            <div class="flashcard-text-mn" style="font-size: 28px;">${S(s.targetText,"target",f,s)}</div>
            ${s.transliteration?`<div class="transliteration-text">${S(s.transliteration,"transliteration",f,s)}</div>`:""}
            <div class="flashcard-hint">Tap to flip</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en" style="font-size: 18px;">${S(s.supportText,"support",f,s)}</div>
            <div class="flashcard-hint" style="color: var(--pink);">Tap to flip back</div>
          </div>
        </div>
      </button>

      <div style="display: flex; gap: 12px; margin-top: 8px;">
        <button class="btn btn-secondary" id="disc-prev-btn" ${r.idx===0?'disabled style="opacity:0.3; cursor:default;"':""}>←</button>
        <button class="btn btn-primary" id="disc-speak-btn">► Say It</button>
        <button class="btn btn-secondary" id="disc-next-btn" ${r.idx+1===t.items.length?'disabled style="opacity:0.3; cursor:default;"':""}>→</button>
      </div>

      ${r.idx+1===t.items.length?`
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      `:""}
    </div>
  `;const o=e.querySelector("#discover-card-wrapper");o.addEventListener("click",()=>{r.flipped=!r.flipped,o.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#disc-speak-btn").addEventListener("click",d=>{d.stopPropagation(),i.speak(s.targetText)}),e.querySelector("#disc-prev-btn").addEventListener("click",()=>{r.idx>0&&(r.idx--,r.flipped=!1,Re(e,t,a,i))}),e.querySelector("#disc-next-btn").addEventListener("click",()=>{r.idx+1<t.items.length&&(r.idx++,r.flipped=!1,Re(e,t,a,i))});const l=e.querySelector("#next-step-btn");l&&l.addEventListener("click",()=>{i.nextSessionStep()})}function Ht(e,t,a,i){const r=a.session.flash,s=t.items[r.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Card ${r.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="recall-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Recall card, tap to flip">
        <div class="flashcard ${r.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-hint" style="margin-bottom: 16px; color: var(--cyan);">Can you recall the translation?</div>
            ${Ye(a.activeLesson.topicId,s)}
            <div class="flashcard-text-mn" style="font-size: 28px;">${S(s.targetText,"target",f,s)}</div>
            ${s.transliteration?`<div class="transliteration-text">${S(s.transliteration,"transliteration",f,s)}</div>`:""}
            <div class="flashcard-hint">Tap to check meaning</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en" style="font-size: 18px;">${S(s.supportText,"support",f,s)}</div>
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
  `;const o=e.querySelector("#recall-card-wrapper");o.addEventListener("click",()=>{r.flipped=!r.flipped,o.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#recall-speak-btn").addEventListener("click",d=>{d.stopPropagation(),i.speak(s.targetText)});const l=()=>{r.idx+1<t.items.length?(r.idx++,r.flipped=!1,Ht(e,t,a,i)):i.nextSessionStep()};e.querySelector("#recall-again-btn").addEventListener("click",()=>{t.items.push(s),l()}),e.querySelector("#recall-gotit-btn").addEventListener("click",()=>{l()})}function fi(e,t,a,i){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 12px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div class="glass" style="background: rgba(125, 211, 252, 0.08); border-color: var(--cyan); border-radius: 16px; padding: 20px; font-size: 16px; line-height: 1.6; color: var(--text-main); margin-bottom: 32px; white-space: pre-line;">
        ${t.note}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">I understand, start practice →</button>
    </div>
  `,e.querySelector("#next-step-btn").addEventListener("click",()=>{i.nextSessionStep()})}function We(e,t,a,i){a.session.quiz||(a.session.quiz=t.quiz);const r=a.session.quiz,s=r.questions[r.qIdx];if(r.qIdx>=r.questions.length){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Practice Complete</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          You scored: ${r.score} / ${r.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
      </div>
    `,e.querySelector("#next-step-btn").addEventListener("click",()=>{a.session.quiz=null,i.nextSessionStep()});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${r.qIdx+1} of ${r.questions.length} · Score: ${r.score}
      </div>

      <div class="quiz-prompt">
        Translate to ${f.targetLanguage.name}:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">${S(s.promptText,"support",f)}</span>
      </div>

      <div class="quiz-options">
        ${s.options.map(d=>{let c="quiz-option";return r.answered&&(d===s.correctAnswer?c+=" correct":d===r.selected?c+=" incorrect":c+=" disabled"),`
            <button class="${c}" data-option="${je(d)}" ${r.answered?"disabled":""}>
              ${S(d,"target",f)}
            </button>
          `}).join("")}
      </div>

      ${r.answered?`
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          Next Question →
        </button>
      `:""}
    </div>
  `,e.querySelectorAll(".quiz-option").forEach(d=>{d.addEventListener("click",()=>{if(r.answered)return;const c=d.dataset.option;r.selected=c,r.answered=!0,c===s.correctAnswer&&(r.score++,i.awardStars(1)),We(e,t,a,i)})});const l=e.querySelector("#next-question-btn");l&&l.addEventListener("click",()=>{r.qIdx++,r.answered=!1,r.selected=null,We(e,t,a,i)})}function $e(e,t,a,i){a.session.match||(a.session.match=t.match);const r=a.session.match,s=r.matchedIds.length/2,o=r.tiles.length/2,l=s===o;e.innerHTML=`
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
          ${r.tiles.map(c=>{const m=r.matchedIds.includes(c.id),k=r.selectedIds.includes(c.id);let w="match-tile";return m?w+=" matched":k&&(w+=" selected"),`
              <button class="${w}" data-tile-id="${c.id}"${Ft(c.text)} ${m?"disabled":""}>
                ${S(c.text,c.kind,f,c)}
              </button>
            `}).join("")}
        </div>
      `}
    </div>
  `,e.querySelectorAll(".match-tile").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.tileId;vi(m,e,t,a,i)})});const d=e.querySelector("#next-step-btn");d&&d.addEventListener("click",()=>{a.session.match=null,i.nextSessionStep()})}function vi(e,t,a,i,r){const s=i.session.match;if(!(s.matchedIds.includes(e)||s.selectedIds.includes(e)||s.selectedIds.length>=2)&&(s.selectedIds.push(e),$e(t,a,i,r),s.selectedIds.length===2)){const[o,l]=s.selectedIds,d=s.tiles.find(m=>m.id===o),c=s.tiles.find(m=>m.id===l);d.pairId===c.pairId?(s.matchedIds.push(o,l),s.selectedIds=[],setTimeout(()=>{s.matchedIds.length===s.tiles.length&&r.awardStars(1),$e(t,a,i,r)},250)):setTimeout(()=>{s.selectedIds=[],$e(t,a,i,r)},700)}}function Gt(e,t,a,i){const r=a.session.dialogue,s=t.dialogue;r.readAs||(r.readAs=s.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${s.roles.map(o=>`
          <button class="btn btn-secondary btn-pill ${r.readAs===o?"btn-active":""}" data-role="${o}">
            Read as ${o}
          </button>
        `).join("")}
      </div>

      <div class="dialogue-container" style="width: 100%;">
        ${s.lines.map((o,l)=>`
            <div class="dialogue-bubble ${o.role===r.readAs?"active-reader":""}">
              <div class="dialogue-header">
                <span>${o.role}</span>
                <button class="dialogue-play-btn" data-play-line="${l}">►</button>
              </div>
              <div style="font-size: 17px; font-weight: 600; margin-top: 4px; color: var(--text-main);">${S(o.targetText,"target",f,o)}</div>
              <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">${S(o.supportText,"support",f,o)}</div>
            </div>
          `).join("")}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 12px;">
        Dialogue Complete →
      </button>
    </div>
  `,e.querySelectorAll("[data-role]").forEach(o=>{o.addEventListener("click",()=>{r.readAs=o.dataset.role,Gt(e,t,a,i)})}),e.querySelectorAll("[data-play-line]").forEach(o=>{o.addEventListener("click",()=>{const l=parseInt(o.dataset.playLine);i.speak(s.lines[l].targetText)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{i.incrementDialogues(),i.awardStars(2),i.nextSessionStep()})}function Be(e,t,a,i){const r=a.session.flash,s=t.items[r.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${r.idx+1} of ${t.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 28px; text-align: center;">
        ${S(s.targetText,"target",f,s)}
        ${s.transliteration?`<div class="transliteration-text">${S(s.transliteration,"transliteration",f,s)}</div>`:""}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play Pronunciation</button>

      <div style="font-size: 15px; color: var(--text-muted); text-align: center; margin: 4px 0;">
        Meaning: <span style="color: var(--cyan); font-weight: 600;">${S(s.supportText,"support",f,s)}</span>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 12px;">
        <button class="btn btn-secondary" id="listen-prev-btn" ${r.idx===0?'disabled style="opacity:0.3; cursor:default;"':""}>←</button>
        <button class="btn btn-secondary" id="listen-next-btn" ${r.idx+1===t.items.length?'disabled style="opacity:0.3; cursor:default;"':""}>→</button>
      </div>

      ${r.idx+1===t.items.length?`
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      `:""}
    </div>
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{i.speak(s.targetText)}),e.querySelector("#listen-prev-btn").addEventListener("click",()=>{r.idx>0&&(r.idx--,Be(e,t,a,i))}),e.querySelector("#listen-next-btn").addEventListener("click",()=>{r.idx+1<t.items.length&&(r.idx++,Be(e,t,a,i))});const o=e.querySelector("#next-step-btn");o&&o.addEventListener("click",()=>{i.nextSessionStep()})}function bi(e,t,a,i){const r=a.activeLesson,s=r.topicId?O(r.topicId):null;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center; padding: 40px 0;">
      <div style="font-size: 52px; animation: bounce 1s infinite alternate;">🎉</div>
      <h3 style="font-family: var(--font-display); font-weight: 800; font-size: 26px; letter-spacing: -0.5px;">Nailed It!</h3>
      <p style="color: var(--text-muted); font-size: 15px; max-width: 360px; line-height: 1.6;">
        You finished the lesson: <span style="color: var(--cyan); font-weight: 600;">"${r.title}"</span>.
        ${s&&r.type==="checkpoint"?`<br>Topic <strong>${s.title}</strong> has been marked as complete.`:""}
      </p>

      <div class="badge-pill" style="border-color: var(--lime); color: var(--lime); font-size: 14px; font-weight: 800; padding: 10px 20px;">
        ★ Voyage Lesson Completed!
      </div>

      <button class="btn btn-primary" id="finish-lesson-btn" style="margin-top: 12px; padding: 14px 32px;">
        Back to Dashboard
      </button>
    </div>
  `,e.querySelector("#finish-lesson-btn").addEventListener("click",()=>{i.completeLesson(r.id)})}function xi(e,t,a){var o;const i=((o=t.familyPlayState)==null?void 0:o.completedDays)??le(t.activityDates),r={};for(let l=0;l<10;l++)r[l]=F.filter(d=>d.month===l);e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">${f.targetLanguage.code.toUpperCase()}</div>
        <div class="logo-title">Learn ${f.targetLanguage.name}</div>
      </button>
      <div class="nav-actions">
        <button class="btn btn-secondary btn-pill" id="back-btn">← Back to Dashboard</button>
      </div>
    </header>

    <main>
      ${ri(t)}
      <div class="container voyage-plan-content" id="voyage-plan" style="max-width: 760px;">
      <h2 style="font-size: 28px; margin-bottom: 8px;">The 200-Day Family Voyage</h2>
      <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 32px; line-height: 1.6;">
        Ten months, five family learning days each week. Independent practice builds personal skill but does not move this shared route. Every fourth week brings the month's vocabulary and patterns together.
      </p>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        ${Object.keys(r).map(l=>{const d=parseInt(l)+1,c=r[l],m=c[0].number,k=c.at(-1).number,w=i>=k,j=i>=m;let u="var(--text-muted)";return w?u="var(--lime)":(j||i+1===m)&&(u="var(--cyan)"),`
            <div style="border-left: 2px solid ${u}; padding-left: 20px; margin-bottom: 8px;">
              <h3 style="font-size: 16px; margin-bottom: 12px; color: ${u}; text-transform: uppercase; letter-spacing: 0.05em;">
                Month ${d} — ${Xt[l]}
              </h3>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${c.filter(p=>p.number%5===1).map(p=>{const y=p.week,b=F.filter(D=>D.week===y),x=i>=b.at(-1).number,g=i+1>=b[0].number&&!x,T=p.topicId?O(p.topicId):null;let v="Planned",$="var(--text-muted)";return x?(v="✓ Completed",$="var(--lime)"):g&&(v="Active Week",$="var(--cyan)"),`
                    <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; border-radius: 12px; padding: 14px 18px; cursor: pointer; transition: all var(--transition-fast);" data-week="${y}">
                      <div>
                        <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 2px;">
                          ${y%4===0?"Week 4 (Integration)":`Week ${y%4}: ${T?T.title:"Mixed review"}`}
                        </h4>
                        <p style="color: var(--text-muted); font-size: 13px;">
                          Lessons ${b[0].number} – ${b[4].number}
                        </p>
                      </div>
                      <div style="font-size: 13px; font-weight: 800; color: ${$};">${v}</div>
                    </div>
                  `}).join("")}
              </div>
            </div>
          `}).join("")}
      </div>
      </div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",a.goDashboard),e.querySelector("#back-btn").addEventListener("click",a.goDashboard);const s=e.querySelector(".immersive-voyage");s==null||s.addEventListener("pointermove",l=>{const d=s.getBoundingClientRect();s.style.setProperty("--look-x",`${((l.clientX-d.left)/d.width-.5)*1.5}%`),s.style.setProperty("--look-y",`${((l.clientY-d.top)/d.height-.5)*1.2}%`)}),s==null||s.addEventListener("pointerleave",()=>{s.style.setProperty("--look-x","0%"),s.style.setProperty("--look-y","0%")}),e.querySelectorAll("[data-week]").forEach(l=>{l.addEventListener("click",()=>{const d=parseInt(l.dataset.week),c=F.filter(w=>w.week===d),m=F[Math.min(i,199)],k=c.find(w=>w.id===m.id)||c[0];a.startSession(k)})})}const wi=45e3;function Ti(e,t=new Date){return e!=null&&e.linked?e.status==="credited"?"completed":e.lastSeenAt?t.getTime()-new Date(e.lastSeenAt).getTime()<=wi?"connected":"reconnecting":e.status==="joined"?"reconnecting":"waiting":"unlinked"}function ki(e,t=[]){const a=e.filter(r=>t.includes(r.id)),i=a.filter(r=>!r.linked);return{selectedCount:a.length,linkedCount:a.length-i.length,unlinkedNames:i.map(r=>r.name),canStart:a.length>0&&i.length===0}}const bt={"montenegrin-en":"Montenegrin","albanian-en":"Albanian"};function M(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function xt(e){return{owner:"Owner",adult_guide:"Adult Partner",learner:"Learner"}[e]||e}function $i(e,t,a){var s,o,l,d,c,m,k,w,j,u;const i=t.familyOverview;e.innerHTML=`
    <header class="navbar">
      <button class="logo" id="family-back-btn" aria-label="Back to learners">
        <div class="logo-icon">N</div><div class="logo-title">Family Overview</div>
      </button>
      <button class="btn btn-secondary" id="choose-learner-btn">Choose a Learner</button>
    </header>
    <main class="container">
      ${t.familyOverviewLoading?"<p>Loading family…</p>":""}
      ${t.familyError?`<p role="alert" style="color: var(--pink);">${M(t.familyError)}</p>`:""}
      ${t.familyNotice?`<p role="status" style="color: var(--lime); margin-bottom: 16px;">${M(t.familyNotice)}</p>`:""}
      ${i?`
        <section class="hero-card" style="margin-bottom: 28px;">
          <div class="hero-text"><div class="hero-tag">Family workspace</div>
          <h1 class="hero-title">${M(i.family.name)}</h1>
          <p class="hero-subtitle">Members, invitations, and progress across every language.</p></div>
        </section>

        <section class="family-play-launch" aria-labelledby="family-play-launch-title">
          <div>
            <div class="hero-tag">Shared family voyage</div>
            <h2 id="family-play-launch-title">${(s=t.familyPlayState)!=null&&s.activeSession?"Family session in progress":`Ready for voyage day ${(((o=t.familyPlayState)==null?void 0:o.completedDays)||0)+1}`}</h2>
            <p>Independent practice stays personal. This shared position moves only when an adult chooses Complete for Family.</p>
          </div>
          ${(l=t.familyPlayState)!=null&&l.activeSession?`
            <div class="family-play-active-summary">
              <strong>Voyage day ${t.familyPlayState.activeSession.voyageDay}</strong>
              <span>${M(t.familyPlayState.activeSession.status)} · Part ${(t.familyPlayState.activeSession.currentSegment||0)+1}</span>
              <button class="btn btn-primary" id="continue-family-play-btn">Continue Family Play →</button>
            </div>`:`
            <div class="family-session-setup">
              <div class="family-setup-diagnostics" aria-label="Family Play preflight checks">
                <div class="setup-check ok"><span>✓</span><div><strong>Family cloud</strong><small>Connected as ${M(((d=t.sessionUser)==null?void 0:d.email)||"parent")}</small></div></div>
                <div class="setup-check ok"><span>✓</span><div><strong>Learning language</strong><small>${M(bt[t.activePackId]||"Selected language")} · voyage day ${(((c=t.familyPlayState)==null?void 0:c.completedDays)||0)+1}</small></div></div>
                <div class="setup-check" id="learner-link-check"><span>•</span><div><strong>Learner sign-ins</strong><small>Select your crew to run the check.</small></div></div>
              </div>
              <fieldset class="family-play-roster">
                <legend>Who is learning together?</legend>
                ${i.learners.map(p=>`<label class="family-roster-person ${p.linked?"linked":"unlinked"}">
                  <input type="checkbox" name="family-participant" value="${M(p.id)}" ${p.linked?"checked":""}>
                  <span><strong>${M(p.name)}</strong><small>${p.linked?"Google sign-in linked":"Sign-in must be linked first"}</small></span>
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
            ${t.familyProgress.learners.map(p=>{const y=Math.min(100,Math.round(p.completedLessons/200*100)),b=Math.min(100,Math.round(t.familyProgress.shared.completedDays/200*100));return`<article class="family-progress-row">
                <div><strong>${M(p.name)}</strong><span>${p.completedLessons} personal lessons · joined ${p.familyParticipations} family days</span></div>
                <div class="dual-progress"><i style="--progress:${b}%" title="Family ${b}%"></i><b style="--progress:${y}%" title="Personal ${y}%"></b></div>
                <small>Family ${b}% · Personal ${y}% · ${p.stars} stars</small>
              </article>`}).join("")}
          </div>
        </section>

        <section class="family-history" aria-labelledby="family-history-title">
          <div class="family-progress-heading"><div><div class="hero-tag">Captain's log</div><h2 id="family-history-title">Family session history</h2></div><span>${t.familyProgress.shared.reviewSessions} review sessions</span></div>
          <div class="family-history-list">
            ${t.familyProgress.history.map(p=>`<article class="family-history-item">
              <div class="history-day"><strong>${p.voyageDay}</strong><span>${p.isReview?"Review":"Voyage day"}</span></div>
              <div><strong>${M(p.lessonId)}</strong><span>${new Date(p.completedAt).toLocaleDateString()} · ${M((p.participants||[]).join(", "))} · led by ${M(p.controllerName)}</span></div>
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
              <div class="kid-progress-header">${M(p.name)}</div>
              <div class="kid-progress-stats"><div>${M(p.email)}</div><div>${M(xt(p.role))}</div></div>
            </article>`).join("")}
          </div>
          ${i.pendingInvitations.length?`<h3 class="section-title" style="margin-top:20px;">Pending invitations</h3>
            <div class="kids-progress-grid">${i.pendingInvitations.map(p=>`<article class="kid-progress-card">
              <div class="kid-progress-header">${M(p.email)}</div>
              <div class="kid-progress-stats"><div>${M(xt(p.role))}</div><div>Expires ${new Date(p.expiresAt).toLocaleDateString()}</div></div>
            </article>`).join("")}</div>`:""}
        </section>

        <section>
          <h2 class="section-title">Learner Progress</h2>
          <div class="kids-progress-grid">
            ${i.learners.map(p=>{const y=new Map(p.progress.map(b=>[b.packId,b]));return`<article class="kid-progress-card">
                <div class="kid-progress-header">${M(p.name)} ${p.linked?'<span style="color:var(--teal);font-size:12px;">✓ Sign-in linked</span>':""}</div>
                <div class="kid-progress-stats">
                  ${t.languagePacks.map(b=>{const x=y.get(b.id)||{stars:0,completedLessons:0,activeDays:0};return`<div><strong>${M(bt[b.id]||b.targetLanguage.name)}</strong>: ${x.completedLessons}/200 lessons · ${x.activeDays} active days · ${x.stars} stars</div>`}).join("")}
                </div>
                <button class="btn btn-secondary" data-repair-learner="${M(p.id)}" data-learner-name="${M(p.name)}" style="margin-top:12px;">Link or repair Google sign-in</button>
              </article>`}).join("")||"<p>No learners have been added yet.</p>"}
          </div>
        </section>`:""}
    </main>`,(m=e.querySelector("#family-back-btn"))==null||m.addEventListener("click",a.goProfileSelect),(k=e.querySelector("#choose-learner-btn"))==null||k.addEventListener("click",a.goProfileSelect),(w=e.querySelector("#overview-invite-partner-btn"))==null||w.addEventListener("click",async()=>{const p=prompt("Enter your partner's Google account email:");p!=null&&p.trim()&&await a.invitePartner(p.trim(),!0)}),(j=e.querySelector("#start-family-play-btn"))==null||j.addEventListener("click",async()=>{const p=[...e.querySelectorAll('input[name="family-participant"]:checked')].map(y=>y.value);if(!p.length){window.alert("Select at least one learner for Family Play.");return}await a.startFamilySession(p)});const r=()=>{const p=[...e.querySelectorAll('input[name="family-participant"]:checked')].map(g=>g.value),y=ki((i==null?void 0:i.learners)||[],p),b=e.querySelector("#learner-link-check"),x=e.querySelector("#start-family-play-btn");!b||!x||(b.className=`setup-check ${y.canStart?"ok":"warning"}`,b.innerHTML=y.canStart?`<span>✓</span><div><strong>Learner sign-ins</strong><small>${y.linkedCount} selected learner${y.linkedCount===1?"":"s"} ready to connect</small></div>`:`<span>!</span><div><strong>Learner sign-ins</strong><small>${y.unlinkedNames.length?`Link ${M(y.unlinkedNames.join(", "))} or remove from this session.`:"Select at least one learner."}</small></div>`,x.disabled=!y.canStart)};e.querySelectorAll('input[name="family-participant"]').forEach(p=>p.addEventListener("change",r)),r(),(u=e.querySelector("#continue-family-play-btn"))==null||u.addEventListener("click",a.openFamilySession),e.querySelectorAll("[data-review-session]").forEach(p=>{p.addEventListener("click",()=>a.reviewFamilySession(p.dataset.reviewSession))}),e.querySelectorAll("[data-repair-learner]").forEach(p=>{p.addEventListener("click",async()=>{const y=prompt(`Enter the Google email for ${p.dataset.learnerName}:`);y!=null&&y.trim()&&await a.repairLearnerSignIn(p.dataset.repairLearner,p.dataset.learnerName,y.trim())})})}function be(e,t,a){return G(e,a).slice(0,Math.min(t,e.length))}function Si(e,t,a){const i=oa(`${a}:${e.id}:family-full-session`),r=be((t==null?void 0:t.items)||[],10,i),s=be((t==null?void 0:t.items)||[],6,i),o=be((t==null?void 0:t.items)||[],6,i);return[{type:"ready",title:"Is everyone ready?",subtitle:"Join on each device before setting sail together."},{type:"family-flashcards",title:"Discover Together",subtitle:`Learn ${r.length} words as a family`,items:r},(()=>{const d=r.slice(0,6);return{type:"family-match",title:"Match as a Crew",subtitle:"Take turns connecting each word to its meaning",items:d,targetItems:G(d,i),supportItems:G(d,i)}})(),...s.map((d,c)=>({type:"family-quiz",title:`Family Quiz · ${c+1} of ${s.length}`,subtitle:"Choose an answer together, then reveal it",item:d,options:G([d,...be(((t==null?void 0:t.items)||[]).filter(m=>m.id!==d.id),3,i)],i)})),...o.map((d,c)=>({type:"family-conversation",title:`Talk Together · Round ${c+1}`,subtitle:"Ask, answer, and make the phrase your own",item:d})),{type:"family-reflection",title:"Bring It Home",subtitle:"Everyone completes one final speaking challenge",items:o}]}const Se=new Map,De=new Map;function Ii(e){var i;if(Se.has(e))return Se.get(e);let t=[];try{t=JSON.parse(((i=globalThis.sessionStorage)==null?void 0:i.getItem(e))||"[]")}catch{t=[]}const a=new Set(Array.isArray(t)?t:[]);return Se.set(e,a),a}function ji(e,t){var a;Se.set(e,t);try{(a=globalThis.sessionStorage)==null||a.setItem(e,JSON.stringify([...t]))}catch{}}function Li(e,t){var o;const a=(t==null?void 0:t.answers)||[],i=(t==null?void 0:t.expected)||0,r=(o=t==null?void 0:t.currentAnswer)==null?void 0:o.answerId;return{allLocked:i>0&&a.length>=i,currentAnswer:r,hasCurrentAnswer:!!r,currentCorrect:!!r&&r===e.item.id,correctAnswer:e.item.targetText}}function _i(e){const t=["lime","teal","blue","purple","pink","amber"];return t[Math.max(0,Number(e)||0)%t.length]}function P(e){return String(e??"").replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}function Pi(e,t,a=[]){var l;const i=(t==null?void 0:t.name)||"Learner 1",r=((l=a.find(d=>d.profileId!==(t==null?void 0:t.profileId)))==null?void 0:l.name)||"Learner 2",s=e.item.targetText,o=e.item.supportText;return[{person:i,label:"Say the new word",target:s,support:o},{person:r,label:`Ask ${i}`,target:`What does “${s}” mean?`,support:"Ask this in English for now."},{person:i,label:`Answer ${r}`,target:`“${s}” means “${o}.”`,support:`Say the Montenegrin word clearly: ${s}.`},{person:"Everyone",label:"Say it together",target:s,support:`Everyone repeats “${s}” once.`}]}function qi(e,t,a=null,i=[],r=[],s=null){var d,c,m,k,w,j;if(e.type==="ready")return`<div class="family-ready-call"><span aria-hidden="true">⚓</span><div><strong>Gather your crew</strong><p>Open Family Play on each learner's device. When everyone shows Ready, the parent can begin.</p></div></div>`;const o=t?`<div class="family-turn-prompt"><span>${P(t.name).slice(0,1)}</span><div><small>It’s your turn</small><strong>${P(t.name)}, lead this round—then everyone joins in.</strong></div></div>`:"";if(e.type==="family-flashcards")return`<div class="family-activity-instructions"><strong>How to play</strong><span>Everyone taps each card on their own screen, says the word, then reveals its meaning. The parent moves on when the family is ready.</span></div>
      <div class="family-vocabulary-grid">${e.items.map((u,p)=>`<article><span>${u.emoji||"✦"}</span><button class="family-vocab-reveal" data-family-reveal><strong>${S(u.targetText,"target",f,u)}</strong><small>${S(u.supportText,"support",f,u)}</small><em>Tap to reveal</em></button><button class="dialogue-play-btn" data-family-audio="${p}" aria-label="Play ${P(u.targetText)}">►</button></article>`).join("")}</div>`;if(e.type==="family-match"){const u=e.targetItems||e.items,p=e.supportItems||[...e.items].reverse(),y=(s==null?void 0:s.matched)||new Set,b=(x,g,T,v)=>{const $=y.has(x.id),D=e.items.findIndex(E=>E.id===x.id)+1;return`<button class="${$?"matched":""}" data-family-match="${P(x.id)}" data-family-match-side="${v}" data-family-match-number="${D}" data-match-color="${_i(D-1)}" ${$?"disabled":""} aria-pressed="${$}"><b>${g}</b>${S(T,v,f,x)}${$?`<span>✓ Pair ${D}</span>`:""}</button>`};return`${o}<div class="family-activity-instructions"><strong>Touch-and-match round</strong><span>On each device, tap one word and then its meaning. Say the pair aloud. Matched choices stay highlighted while the parent keeps the family together.</span></div>
      <div class="family-match-board"><div>${u.map((x,g)=>b(x,g+1,x.targetText,"target")).join("")}</div><div>${p.map((x,g)=>b(x,String.fromCharCode(65+g),x.supportText,"support")).join("")}</div></div>
      <p class="family-match-status" aria-live="polite"><strong>${y.size} of ${e.items.length}</strong> pairs complete${y.size===e.items.length?" · Great work!":""}</p>`}if(e.type==="family-quiz"){const u=(d=a==null?void 0:a.currentAnswer)==null?void 0:d.answerId,p=(a==null?void 0:a.answers)||[],y=Li(e,a),b=Math.max(0,((a==null?void 0:a.expected)||0)-p.length),x=y.allLocked?"Moving to the next question…":`Waiting for ${b} more…`,g=y.hasCurrentAnswer?y.currentCorrect?`✓ Correct! ${y.correctAnswer} is the answer. ${x}`:`Not quite. The correct answer is ${y.correctAnswer}. ${x}`:"Choose once to lock in your answer.";return`${o}<div class="family-quiz-card"><small>What is the best translation?</small><strong>${S(e.item.supportText,"support",f,e.item)}</strong><div>${e.options.map(T=>{const v=y.hasCurrentAnswer&&T.id===e.item.id?"correct":y.hasCurrentAnswer&&u===T.id?"incorrect":"";return`<button type="button" class="family-answer ${u===T.id?"locked":""} ${v}" data-family-answer="${P(T.id)}" ${u?"disabled":""}>${S(T.targetText,"target",f,T)}${u===T.id?`<span>${y.currentCorrect?"✓ Correct":"✕ Your answer"}</span>`:""}</button>`}).join("")}</div><div class="family-answer-status">${p.map(T=>{const v=y.allLocked?T.answerId===e.item.id?"correct":"incorrect":"locked",$=y.allLocked?T.answerId===e.item.id?"✓":"✕":"✓";return`<span class="${v}">${$} ${P(T.name)}</span>`}).join("")}${Array.from({length:b},()=>"<span>Waiting…</span>").join("")}</div><p class="family-answer-feedback ${y.hasCurrentAnswer?y.currentCorrect?"correct":"incorrect":""}" aria-live="polite">${P(g)}</p></div>`}if(e.type==="family-conversation"){const u=Pi(e,t,i);return`<div class="family-conversation-card">${o}<div class="family-conversation-phrase"><small>Word for this round</small><strong>${S(e.item.targetText,"target",f,e.item)}</strong><span>${S(e.item.supportText,"support",f,e.item)}</span></div><div class="family-conversation-script"><strong>Follow this script</strong>${u.map((p,y)=>`<article><b>${y+1}</b><div><small>${P(p.person)} · ${P(p.label)}</small><strong>${y===0||y===3?S(p.target,"target",f,e.item):S(p.target,"support",f)}</strong><span>${S(p.support,"support",f)}</span></div></article>`).join("")}</div><p class="family-conversation-tip"><strong>Parent:</strong> Help with pronunciation or explain family wording, then tap Next.</p></div>`}if(e.type==="family-reflection"){const u=r.length?r:[{name:"Everyone"}],p=(a==null?void 0:a.answers)||[];return`<div class="family-reflection-card"><strong>Final family challenge</strong><p>Complete your three actions, then lock in your own card. The family day finishes automatically when everyone is done.</p><div class="family-reflection-grid">${u.map((y,b)=>{const x=e.items[b%e.items.length],g=p.find(v=>y.profileId?v.profileId===y.profileId:!v.profileId),T=!!y.isCurrentUser;return`<button class="family-reflection-assignment ${g?"finished":""}" data-final-lock ${T&&!g?"":"disabled"}><small>${P(y.name)}’s word</small><strong>${S(x.targetText,"target",f,x)}</strong><span>${S(x.supportText,"support",f,x)}</span><em>1. Say it · 2. Translate it · 3. Use it in a family example</em><b>${g?"✓ Locked in":T?"Tap to lock in":"Waiting…"}</b></button>`}).join("")}</div><span>${p.length} of ${u.length} people locked in</span></div>`}const l=e.items||((c=e.dialogue)==null?void 0:c.lines)||[];return l.length?`${o}<div class="family-play-phrases">
      ${l.slice(0,8).map((u,p)=>{const y=u.targetText||u.target||u.text||u.line||"",b=u.supportText||u.support||u.translation||"";return`<article class="family-play-phrase">
          <div><strong>${S(y,"target",f,u)}</strong>${b?`<small>${S(b,"support",f,u)}</small>`:""}</div>
          ${y?`<button class="dialogue-play-btn" data-family-audio="${p}" aria-label="Play ${P(y)}">►</button>`:""}
        </article>`}).join("")}
    </div>`:e.note?`${o}<div class="family-play-note">${P(e.note)}</div>`:(k=(m=e.quiz)==null?void 0:m.questions)!=null&&k.length?`${o}<div class="family-play-challenge"><span>Family challenge</span><strong>${P(e.quiz.questions[0].promptText)}</strong><p>Take turns answering aloud. The parent can replay or discuss before moving on.</p></div>`:(j=(w=e.match)==null?void 0:w.tiles)!=null&&j.length?`${o}<div class="family-play-challenge"><span>Family challenge</span><strong>Match the words aloud together</strong><p>Each person chooses a pair and explains it before the parent moves forward.</p></div>`:`${o}<div class="family-play-challenge"><span>Speak together</span><strong>${P(e.subtitle||"Practice this section as a family.")}</strong></div>`}function Ei(e,t,a){var _,W,ae,B,de,ve,V,K,Je,Qe,Ze,Xe,et,tt,at,it;const i=(_=t.familyPlayState)==null?void 0:_.activeSession,r=t.activeLesson;if(!i||!r){e.innerHTML='<main class="container"><p role="alert">This Family Play session is no longer active.</p><button class="btn btn-secondary" id="family-play-back">Return</button></main>',e.querySelector("#family-play-back").addEventListener("click",a.goFamilyOverview);return}const s=O(r.topicId),o=Si(r,s,i.id),l=Math.min(i.currentSegment||0,o.length-1),d=o[l],c=!t.linkedLearnerProfileId&&(((ae=(W=t.families)==null?void 0:W[0])==null?void 0:ae.role)==="owner"||((de=(B=t.families)==null?void 0:B[0])==null?void 0:de.role)==="adult_guide"),m=c&&i.controllingAdult===((ve=t.sessionUser)==null?void 0:ve.id),k=(((V=t.familyOverview)==null?void 0:V.members)||[]).filter(h=>{var L;return(h.role==="owner"||h.role==="adult_guide")&&h.userId!==((L=t.sessionUser)==null?void 0:L.id)}),w=l===o.length-1,j=d.items||(d.item?[d.item]:[]),u=i.participants.map(h=>({...h,connectionState:Ti(h)})),p=u.filter(h=>h.connectionState==="connected"||h.connectionState==="completed"),y=p.length===i.participants.length&&p.length>0,b=d.type==="ready"||!i.participants.length?null:i.participants[(l-1)%i.participants.length],x=zt(r.topicId),g=(x==null?void 0:x.src)||"https://kormilo-nautilus.netlify.app/assets/illustrations/nautilus-voyage-panorama-v3.jpg",T=[...i.participants,{name:i.controllerName||"Parent",isCurrentUser:i.controllingAdult===((K=t.sessionUser)==null?void 0:K.id)}],v=i.quizAnswers||[],$=d.type==="family-quiz"||d.type==="family-reflection"?{answers:v,expected:i.participants.length+1,currentAnswer:v.find(h=>h.isCurrentUser)}:null,D=`nautilus:family-match:${i.id}:${l}`,E=d.type==="family-match"?{key:D,matched:Ii(D)}:null;e.innerHTML=`
    <header class="navbar family-play-nav">
      <button class="logo" id="family-play-exit" aria-label="Leave Family Play">
        <div class="logo-icon">${f.targetLanguage.code.toUpperCase()}</div>
        <div><div class="logo-title">Family Play</div><small>Voyage day ${i.voyageDay}</small></div>
      </button>
      <div class="family-play-live"><i></i>${i.status==="paused"?"Paused":"Together now"}</div>
    </header>
    <main class="family-play-stage ${x?`family-play-stage--${P(r.topicId)}`:""}" style="--family-step:${Math.round((l+1)/o.length*100)}%">
      <img class="family-play-scene" src="${g}" alt="" aria-hidden="true">
      <div class="family-play-atmosphere" aria-hidden="true"></div>
      <aside class="family-crew" aria-label="Family Play crew">
        <div class="family-crew__heading"><div><small>Family crew</small><strong>${p.length} of ${i.participants.length} ready</strong></div><span class="family-crew__signal ${y?"ready":""}"></span></div>
        <div class="family-crew__people">
          ${u.map(h=>{const L=h.connectionState==="connected"||h.connectionState==="completed",Y=(b==null?void 0:b.profileId)===h.profileId,Ot={connected:"Connected · Ready",completed:"Completed",reconnecting:"Reconnecting…",waiting:"Open Shared Lesson",unlinked:"Google sign-in not linked"}[h.connectionState];return`<div class="family-crew-person ${L?"ready":""} ${h.connectionState} ${Y?"speaking":""}"><span>${P(h.name).slice(0,1)}</span><div><strong>${P(h.name)}</strong><small>${Y?"Speaking now":Ot}</small></div></div>`}).join("")}
        </div>
        <div class="family-crew__captain"><small>Controller</small><strong>🎛 ${P(i.controllerName||"Family guide")}</strong>${m?"<span>You are leading</span>":"<span>Following live</span>"}</div>
      </aside>
      <section class="family-play-panel" aria-labelledby="family-play-title">
        <div class="family-play-meta">
          <span>${P(r.title)}</span>
          <span>Part ${l+1} of ${o.length}</span>
        </div>
        <div class="session-steps-bar" role="progressbar" aria-valuenow="${l+1}" aria-valuemin="1" aria-valuemax="${o.length}">
          ${o.map((h,L)=>`<div class="session-step-segment ${L<=l?"active":""}"></div>`).join("")}
        </div>
        <p class="hero-tag">${m?"You are leading":`Following ${P(i.controllerName||"the family guide")}`}</p>
        ${t.familyError?`<div class="family-play-error" role="alert"><strong>Couldn’t save that action</strong><span>${P(t.familyError)}</span></div>`:""}
        <h1 id="family-play-title">${P(d.title)}</h1>
        <p class="family-play-subtitle">${P(d.subtitle)}</p>
        ${qi(d,b,$,i.participants,T,E)}
        ${m?`<div class="family-play-controls">
          <button class="btn btn-secondary" id="family-play-prev" ${l===0?"disabled":""}>← Back</button>
          <button class="btn btn-secondary" id="family-play-audio">► Play all</button>
          <button class="btn btn-secondary" id="family-play-pause">${i.status==="paused"?"Resume":"Pause"}</button>
          ${w?'<span class="family-quiz-auto-note">Completes when everyone locks in</span>':d.type==="family-quiz"?'<span class="family-quiz-auto-note">Advances when everyone locks in</span>':`<button class="btn btn-primary" id="family-play-next" ${d.type==="ready"&&!y?'disabled aria-describedby="family-ready-help"':""}>${d.type==="ready"?"Start Together →":"Next →"}</button>`}
          ${k.length?`<label class="family-handoff">Hand off to
            <select id="family-handoff-select"><option value="">Choose adult…</option>${k.map(h=>`<option value="${h.userId}">${P(h.name)}</option>`).join("")}</select>
          </label>`:""}
        </div>${d.type==="ready"&&!y?'<div class="family-ready-help" id="family-ready-help"><strong>Waiting for the crew</strong><span>On each learner device: sign in with the linked Google account → open Nautilus → choose Open Shared Lesson. Reconnecting devices will recover automatically.</span><button class="btn btn-secondary" id="family-refresh-status">Refresh connections</button></div>':""}`:'<p class="family-play-following"><strong>You are connected.</strong> The parent controls this shared lesson. Keep this page open; if the connection drops, Nautilus will rejoin automatically.</p>'}
        ${c&&!m&&i.canTakeControl?'<button class="btn btn-secondary family-take-control" id="family-take-control">Take Control</button>':""}
      </section>
    </main>`,e.querySelector("#family-play-exit").addEventListener("click",c?a.goFamilyOverview:a.goDashboard),e.querySelectorAll("[data-family-audio]").forEach(h=>{h.addEventListener("click",()=>{const L=j[Number(h.dataset.familyAudio)];a.speak((L==null?void 0:L.targetText)||(L==null?void 0:L.target)||(L==null?void 0:L.text)||(L==null?void 0:L.line)||"")})}),e.querySelectorAll("[data-reflection-audio]").forEach(h=>h.addEventListener("click",()=>a.speak(h.dataset.reflectionAudio))),e.querySelectorAll("[data-family-reveal]").forEach(h=>h.addEventListener("click",()=>h.classList.toggle("revealed")));let q=null;if(e.querySelectorAll("[data-family-match]").forEach(h=>h.addEventListener("click",()=>{if(!h.classList.contains("matched")){if(!q){q=h,h.classList.add("selected");return}if(q===h){h.classList.remove("selected"),q=null;return}if(q.dataset.familyMatchSide===h.dataset.familyMatchSide){q.classList.remove("selected"),q=h,h.classList.add("selected");return}if(q.dataset.familyMatch===h.dataset.familyMatch){q.classList.remove("selected"),q.classList.add("matched"),h.classList.add("matched"),q.disabled=!0,h.disabled=!0,q.setAttribute("aria-pressed","true"),h.setAttribute("aria-pressed","true");const L=h.dataset.familyMatchNumber;q.insertAdjacentHTML("beforeend",`<span>✓ Pair ${L}</span>`),h.insertAdjacentHTML("beforeend",`<span>✓ Pair ${L}</span>`),E.matched.add(h.dataset.familyMatch),ji(E.key,E.matched);const Y=e.querySelector(".family-match-status");Y&&(Y.innerHTML=`<strong>${E.matched.size} of ${d.items.length}</strong> pairs complete${E.matched.size===d.items.length?" · Great work!":""}`)}else{const L=q;L.classList.add("incorrect"),h.classList.add("incorrect"),setTimeout(()=>{L.classList.remove("selected","incorrect"),h.classList.remove("incorrect")},550)}q=null}})),e.querySelectorAll("[data-final-lock]").forEach(h=>h.addEventListener("click",()=>{h.disabled=!0,h.classList.add("finished"),h.querySelector("b").textContent="Locking in…",a.finishFamilyChallenge(l)})),e.querySelectorAll("[data-family-answer]").forEach(h=>h.addEventListener("click",()=>{const L=h.closest(".family-quiz-card");L.querySelectorAll(".family-answer").forEach(Y=>{Y.disabled=!0}),h.classList.add("locked"),h.insertAdjacentHTML("beforeend","<span>✓ Locking in…</span>"),L.querySelector(".family-answer-feedback").textContent="Locking in your answer…",a.answerFamilyQuiz(h.dataset.familyAnswer,l)})),(Je=e.querySelector("#family-play-audio"))==null||Je.addEventListener("click",()=>{const h=j.map(L=>L.targetText||L.target||L.text||L.line).filter(Boolean).join(". ");h&&a.speak(h)}),(Qe=e.querySelector("#family-play-prev"))==null||Qe.addEventListener("click",()=>a.controlFamilySession("live",l-1)),(Ze=e.querySelector("#family-play-next"))==null||Ze.addEventListener("click",()=>a.controlFamilySession("live",l+1)),(Xe=e.querySelector("#family-play-pause"))==null||Xe.addEventListener("click",()=>a.controlFamilySession(i.status==="paused"?"live":"paused",l)),(et=e.querySelector("#family-play-complete"))==null||et.addEventListener("click",a.completeFamilySession),(tt=e.querySelector("#family-refresh-status"))==null||tt.addEventListener("click",a.refreshFamilySession),(at=e.querySelector("#family-take-control"))==null||at.addEventListener("click",a.claimFamilyController),(it=e.querySelector("#family-handoff-select"))==null||it.addEventListener("change",h=>{h.target.value&&a.handoffFamilyController(h.target.value)}),d.type==="family-quiz"&&$.answers.length>=$.expected){const h=`${i.id}:${l}`;De.has(h)||De.set(h,setTimeout(async()=>{try{await a.reconcileFamilyQuiz(l)}finally{De.delete(h)}},2600))}}const n={profile:null,isGuide:!1,screen:"profile-select",sessionUser:null,families:null,familyError:null,familyNotice:null,familyOverview:null,familyOverviewLoading:!1,familyPlayState:null,familyProgress:null,linkedLearnerProfileId:null,activePackId:"montenegrin-en",languagePacks:ea(),stars:0,streakDays:0,completedTopicIds:[],completedLessons:[],activityDates:[],dialoguesDone:0,topicId:null,activity:"flashcards",calendarMonth:0,activeLesson:null,session:null,flash:{order:null,idx:0,flipped:!1},match:{tiles:[],selectedIds:[],matchedIds:[]},quiz:{questions:[],qIdx:0,score:0,selected:null,answered:!1},listen:{order:null,idx:0,revealed:!1},dialogue:{readAs:null,showEn:!1},recording:{status:"idle",url:null,error:null,chunks:[],recorder:null}},N=document.getElementById("app");function Le(e){let t=document.getElementById("audio-device-notice");t||(t=document.createElement("div"),t.id="audio-device-notice",t.className="audio-device-notice",t.setAttribute("role","status"),document.body.appendChild(t)),t.textContent=e,t.classList.add("visible"),clearTimeout(Le.timer),Le.timer=setTimeout(()=>t.classList.remove("visible"),9e3)}function Mi(e){if(!("speechSynthesis"in window)){Le("Speech playback is not supported by this browser.");return}const t=f.targetLanguage.code,a=Pa(e,t,window.speechSynthesis,window.SpeechSynthesisUtterance);if(!a.spoken&&a.reason==="voice-missing"){const i=t==="sq"?"Albanian":t==="ar"?"Iraqi Arabic":"Croatian",r=/iPad|iPhone|iPod/.test(navigator.userAgent)?`On this iPhone or iPad, open Settings → Accessibility → Read & Speak → Voices and download a ${i} voice.`:`Install or enable a ${i} speech voice in this device's accessibility or speech settings.`;Le(`Nautilus stopped an incorrect English pronunciation. ${r}`)}}const R={selectLanguage:async e=>{if(!n.profile)return;const t=n.languagePacks.find(a=>a.id===e);if((t==null?void 0:t.status)==="pilot"){const a=`nautilus-pilot-consent:${t.id}:${t.version}`;if(localStorage.getItem(a)!=="accepted"){if(!window.confirm(`${t.targetLanguage.name} is an early family pilot. Its wording, transliteration, pronunciation, and cultural material have not completed community review. Use it for testing and report corrections; do not treat it as an authoritative course yet. Continue?`)){I();return}localStorage.setItem(a,"accepted")}}if(Ue(n.profile,e),n.sessionUser)try{await yt()}catch(a){n.familyError=a.message}if(U(n.profile),n.sessionUser)try{await z()}catch(a){n.familyError=a.message}n.screen="dashboard",ue(),I()},createFamily:async e=>{n.familyError=null;try{await Aa(e),n.families=await ht(),await yt(),I()}catch(t){n.familyError=t.message,I()}},invitePartner:async(e,t=!1)=>{var i,r;const a=(r=(i=n.families)==null?void 0:i[0])==null?void 0:r.family_id;if(a){n.familyError=null,n.familyNotice=null;try{const s=await Ca(a,e,"adult_guide"),o=new URL(`${window.location.origin}${window.location.pathname}`);o.searchParams.set("invite",s);try{await navigator.clipboard.writeText(o.toString())}catch{window.prompt("Copy this invitation link:",o.toString())}n.familyNotice=`Partner invitation copied. Send the link to ${e}; it expires in 7 days.`}catch(s){n.familyError=s.message}t?await R.goFamilyOverview():I()}},inviteLearner:async(e,t,a)=>{n.familyError=null,n.familyNotice=null;try{const i=await Da(e,a),r=new URL(`${window.location.origin}${window.location.pathname}`);r.searchParams.set("invite",i);try{await navigator.clipboard.writeText(r.toString())}catch{window.prompt("Copy this invitation link:",r.toString())}n.familyNotice=`${t}'s sign-in invitation was copied. Send it to ${a}; it expires in 7 days.`}catch(i){n.familyError=i.message}I()},repairLearnerSignIn:async(e,t,a)=>{var i,r;n.familyError=null,n.familyNotice=null;try{await za(e,a),n.familyNotice=`${t} is now linked to ${a} as a learner.`,n.families=await ht(),n.familyOverview=await pe((r=(i=n.families)==null?void 0:i[0])==null?void 0:r.family_id)}catch(s){n.familyError=s.message}I()},goDashboard:()=>{n.screen="dashboard",ue(),I(),window.scrollTo({top:0,behavior:"auto"})},goCurriculum:()=>{n.screen="curriculum",ue(),I(),window.scrollTo({top:0,behavior:"auto"})},goProfileSelect:()=>{n.screen="profile-select",n.profile=null,ue(),I()},goFamilyOverview:async()=>{var e,t;n.profile=null,n.screen="family-overview",n.familyOverviewLoading=!0,n.familyError=null,I();try{const a=(t=(e=n.families)==null?void 0:e[0])==null?void 0:t.family_id;n.familyOverview=await pe(a),n.familyPlayState=await Et(a,n.activePackId),n.familyProgress=await Me(a,n.activePackId)}catch(a){n.familyError=a.message}finally{n.familyOverviewLoading=!1,I()}},startFamilySession:async e=>{var s,o,l;const t=(o=(s=n.families)==null?void 0:s[0])==null?void 0:o.family_id,a=n.languagePacks.find(d=>d.id===n.activePackId),i=((l=n.familyPlayState)==null?void 0:l.completedDays)||0,r=F[Math.min(i,199)];n.familyError=null;try{await Na({familyId:t,packId:a.id,packVersion:a.version,lessonId:r.id,voyageDay:i+1,participantProfileIds:e}),await z(),n.activeLesson=r,n.screen="family-play"}catch(d){n.familyError=d.message}I()},openFamilySession:async()=>{var t,a,i,r,s,o,l;const e=(t=n.familyPlayState)==null?void 0:t.activeSession;if(e){n.familyError=null;try{const d=!!n.linkedLearnerProfileId;!d&&((i=(a=n.families)==null?void 0:a[0])==null?void 0:i.role)!=="learner"&&!n.familyOverview&&(n.familyOverview=await pe((s=(r=n.families)==null?void 0:r[0])==null?void 0:s.family_id)),d||((l=(o=n.families)==null?void 0:o[0])==null?void 0:l.role)==="learner"?await Ga(e.id):e.canTakeControl&&await ft(e.id),await z(),n.activeLesson=F.find(c=>c.id===e.lessonId)||F[e.voyageDay-1],n.screen="family-play"}catch(d){n.familyError=d.message}I()}},refreshFamilySession:async()=>{try{await Ve(),await z(),n.familyNotice="Connection status refreshed."}catch(e){n.familyError=e.message}I()},claimFamilyController:async()=>{var t,a;const e=(a=(t=n.familyPlayState)==null?void 0:t.activeSession)==null?void 0:a.id;if(e){try{await ft(e),await z()}catch(i){n.familyError=i.message}I()}},handoffFamilyController:async e=>{var a,i;const t=(i=(a=n.familyPlayState)==null?void 0:a.activeSession)==null?void 0:i.id;if(t){try{await Va(t,e),await z()}catch(r){n.familyError=r.message}I()}},reviewFamilySession:async e=>{var a,i;const t=((i=(a=n.familyOverview)==null?void 0:a.learners)==null?void 0:i.map(r=>r.id))||[];try{await Ya(e,t),await z(),await R.openFamilySession()}catch(r){n.familyError=r.message,I()}},controlFamilySession:async(e,t)=>{var i,r;const a=(r=(i=n.familyPlayState)==null?void 0:i.activeSession)==null?void 0:r.id;if(a){try{await Ha(a,e,t),await z()}catch(s){n.familyError=s.message}I()}},answerFamilyQuiz:async(e,t)=>{var i,r;const a=(r=(i=n.familyPlayState)==null?void 0:i.activeSession)==null?void 0:r.id;if(a){try{await Ra(a,t,e),await z()}catch(s){n.familyError=s.message}I()}},reconcileFamilyQuiz:async e=>{var a,i;const t=(i=(a=n.familyPlayState)==null?void 0:a.activeSession)==null?void 0:i.id;if(t){try{await Ba(t,e),await z()}catch(r){n.familyError=r.message}I()}},finishFamilyChallenge:async e=>{var a,i,r,s,o,l;const t=(i=(a=n.familyPlayState)==null?void 0:a.activeSession)==null?void 0:i.id;if(t){try{n.familyError=null;const d=await Wa(t,e);await z(),d!=null&&d.completed&&(n.screen="family-overview",n.activeLesson=null,n.familyNotice="Everyone finished—the family voyage lesson is complete.",n.familyOverview=await pe((s=(r=n.families)==null?void 0:r[0])==null?void 0:s.family_id),n.familyProgress=await Me((l=(o=n.families)==null?void 0:o[0])==null?void 0:l.family_id,n.activePackId))}catch(d){n.familyError=d.message}I()}},completeFamilySession:async()=>{var t,a,i,r,s,o;const e=(a=(t=n.familyPlayState)==null?void 0:t.activeSession)==null?void 0:a.id;if(e){try{await Ua(e),await z(),n.screen="family-overview",n.activeLesson=null,n.familyNotice="Family voyage day completed together.",n.familyOverview=await pe((r=(i=n.families)==null?void 0:i[0])==null?void 0:r.family_id),n.familyProgress=await Me((o=(s=n.families)==null?void 0:s[0])==null?void 0:o.family_id,n.activePackId)}catch(l){n.familyError=l.message}I()}},refresh:()=>{n.profile&&U(n.profile),I()},switchProfile:e=>{ya(e),n.profile=e,Ue(e),U(e),n.screen="dashboard",ue();const t=F.find(a=>!n.completedLessons.includes(a.id));t&&(n.calendarMonth=t.month),I()},openTopic:e=>{n.topicId=e,n.screen="topic",n.activity="flashcards",n.flash={order:null,idx:0,flipped:!1},n.match={tiles:[],selectedIds:[],matchedIds:[]},n.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},n.listen={order:null,idx:0,revealed:!1},n.dialogue={readAs:null,showEn:!0},I()},setActivity:e=>{n.activity=e,n.flash={order:null,idx:0,flipped:!1},n.match={tiles:[],selectedIds:[],matchedIds:[]},n.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},n.listen={order:null,idx:0,revealed:!1},n.dialogue={readAs:null,showEn:!0},I()},startSession:e=>{n.activeLesson=e,n.screen="session",n.session=null,I()},nextSessionStep:()=>{n.session&&(n.session.stepIdx++,n.session.flash={idx:0,flipped:!1},n.session.quiz=null,n.session.match=null,I())},completeLesson:e=>{ka(n.profile,e);const t=n.activeLesson.topicId;t&&n.activeLesson.type==="checkpoint"&&mt(n.profile,t),U(n.profile),R.goDashboard()},markTopicCompleted:e=>{mt(n.profile,e),U(n.profile)},awardStars:e=>{Ta(n.profile,e),U(n.profile)},incrementDialogues:()=>{$a(n.profile),U(n.profile)},speak:Mi,startMixedReview:()=>{const t=n.completedTopicIds.map(a=>O(a)).filter(Boolean).flatMap(a=>a.items);t.length!==0&&(n.activeLesson={id:"mixed-review",title:"Mixed Review",detail:"Practice from all completed topics",topicId:null,month:0},n.screen="session",n.session={lessonId:"mixed-review",stepIdx:0,steps:[{type:"quiz",title:"Review Quiz",subtitle:"Test your retention",quiz:J(t,8)},{type:"match",title:"Review Match",subtitle:"Match terms quickly",match:ie(t,8)},{type:"done",title:"Review Finished!",subtitle:"You completed your mixed review!"}],flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}},I())}};function ue(){n.activeLesson=null,n.session=null}function U(e){const t=te(e);t&&(n.stars=t.stars,n.streakDays=t.streakDays,n.completedTopicIds=t.completedTopicIds,n.completedLessons=t.completedLessons,n.activityDates=t.activityDates,n.dialoguesDone=t.dialoguesDone,n.isGuide=t.isGuide)}function Ue(e,t=null){const a=t||ca(e),r=n.languagePacks.some(s=>s.id===a)?a:"montenegrin-en";ta(r),da(),pa(e,r),n.activePackId=r}async function z(){var t,a;const e=(a=(t=n.families)==null?void 0:t[0])==null?void 0:a.family_id;if(!e||!n.sessionUser){n.familyPlayState=null;return}n.familyPlayState=await Et(e,n.activePackId)}let he=null,me=null,ze=null,ge=null,Fe=null,Ne=null;function Ai(){var t,a;clearInterval(he),he=null;const e=(t=n.familyPlayState)==null?void 0:t.activeSession;!e||e.controllingAdult!==((a=n.sessionUser)==null?void 0:a.id)||n.screen!=="family-play"||(he=setInterval(()=>Ka(e.id).catch(()=>{}),45e3))}async function Ve(){var a,i,r;const e=(a=n.familyPlayState)==null?void 0:a.activeSession,t=!!n.linkedLearnerProfileId||((r=(i=n.families)==null?void 0:i[0])==null?void 0:r.role)==="learner";!e||!t||n.screen!=="family-play"||await Oa(e.id)}function wt(){var a,i,r;const e=(a=n.familyPlayState)==null?void 0:a.activeSession,t=!!n.linkedLearnerProfileId||((r=(i=n.families)==null?void 0:i[0])==null?void 0:r.role)==="learner";if(!e||!t||n.screen!=="family-play"){clearInterval(me),me=null,ze=null;return}me&&ze===e.id||(clearInterval(me),ze=e.id,Ve().then(z).then(I).catch(s=>{n.familyError=`Reconnecting to Family Play: ${s.message}`,I()}),me=setInterval(()=>Ve().catch(()=>{}),2e4))}function Tt(){var t,a;const e=(a=(t=n.familyPlayState)==null?void 0:t.activeSession)==null?void 0:a.id;if(n.screen!=="family-play"||!e){clearInterval(ge),ge=null,Fe=null;return}ge&&Fe===e||(clearInterval(ge),Fe=e,ge=setInterval(async()=>{try{await z(),n.screen==="family-play"&&I()}catch{}},5e3))}function I(){var s;Ma(f);const e=(s=n.familyPlayState)==null?void 0:s.activeSession,t=e?`${e.id}:${e.currentSegment}`:null,a=N.querySelector(".family-play-panel"),i=(a==null?void 0:a.scrollTop)||0,r=n.screen==="family-play"&&t===Ne;if(N.innerHTML="",n.screen==="family-play"){Ai(),wt(),Tt(),Ei(N,n,R);const o=N.querySelector(".family-play-panel");o&&(o.scrollTop=r?i:0),Ne=t;return}if(Ne=null,clearInterval(he),he=null,wt(),Tt(),!n.profile){n.screen==="family-overview"?$i(N,n,R):(n.screen="profile-select",Ja(N,n,R));return}if(n.screen==="dashboard"){si(N,n,R);const o=N.querySelector("#calendar-mount");o&&oi(o,n,()=>{n.calendarMonth=Math.max(0,n.calendarMonth-1),I()},()=>{n.calendarMonth=Math.min(9,n.calendarMonth+1),I()})}else n.screen==="topic"?Nt(N,n,R):n.screen==="session"?gi(N,n,R):n.screen==="curriculum"&&xi(N,n,R)}async function Ci(){var t;(t=window.speechSynthesis)==null||t.getVoices(),window.addEventListener("online",()=>{Pt(),I()}),window.addEventListener("offline",()=>{I()});const e=ga();if(e){n.profile=e,Ue(e),U(e),n.screen="dashboard";const a=F.find(i=>!n.completedLessons.includes(i.id));n.calendarMonth=a?a.month:0}else n.screen="profile-select";I()}window.addEventListener("DOMContentLoaded",Ci);
