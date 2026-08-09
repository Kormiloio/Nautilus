(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();const ge={months:[["family","greetings","numbers"],["colors","drinks","food"],["veg","cafe","talkfamily"],["aboutme","days","outabout"],["weather","emotions","house"],["clothes","body","shopping"],["directions","beach","time"],["hobbies","travel","verbs1"],["adjectives","questionwords","plans"],["smalltalk","restaurant","gathering"]],extras:["pasttense","futuretense","capstone"]},xe=JSON.parse(`[{"id":"family","month":1,"title":"Family","subtitle":"Words for relatives","icon":"Fa","color":"#7dd3fc","note":"Your family speaks a Montenegrin-Dalmatian blend — words like đida and kukumar are your family's words, not mistakes.","items":[{"mn":"mama","en":"mom","emoji":"👩"},{"mn":"tata","en":"dad","emoji":"👨"},{"mn":"brat","en":"brother","emoji":"👦"},{"mn":"sestra","en":"sister","emoji":"👧"},{"mn":"baka","en":"grandma (also: baba)","emoji":"👵"},{"mn":"đida","en":"grandpa (also: đed)","emoji":"👴"},{"mn":"sin","en":"son","emoji":"👦"},{"mn":"kćerka","en":"daughter (also: kći)","emoji":"👧"},{"mn":"porodica","en":"family","emoji":"👪"},{"mn":"roditelji","en":"parents"},{"mn":"dijete / djeca","en":"child / children","emoji":"👶"},{"mn":"ko","en":"who"}]},{"id":"greetings","month":1,"title":"Greetings","subtitle":"Say hello & introduce yourself","icon":"Zd","color":"#f472b6","items":[{"mn":"Zdravo","en":"Hello"},{"mn":"Dobar dan","en":"Good afternoon"},{"mn":"Dobro jutro","en":"Good morning"},{"mn":"Hvala","en":"Thank you"},{"mn":"Molim","en":"Please / You're welcome"},{"mn":"Da","en":"Yes"},{"mn":"Ne","en":"No"},{"mn":"Doviđenja","en":"Goodbye"},{"mn":"Ćao","en":"Bye / Hi (informal)"},{"mn":"Izvini","en":"Sorry / Excuse me"},{"mn":"Kako se zoveš?","en":"What's your name?"},{"mn":"Zovem se...","en":"My name is..."},{"mn":"Drago mi je","en":"Nice to meet you"}],"dialogue":{"roles":["You","New Friend"],"lines":[{"role":"You","mn":"Dobar dan! Kako se zoveš?","en":"Good afternoon! What is your name?"},{"role":"New Friend","mn":"Zovem se Mia. A ti?","en":"My name is Mia. And you?"},{"role":"You","mn":"Zovem se Jake. Drago mi je!","en":"My name is Jake. Nice to meet you!"},{"role":"New Friend","mn":"Drago mi je! Doviđenja.","en":"Nice to meet you too! Goodbye."}]}},{"id":"numbers","month":2,"title":"Numbers","subtitle":"Counting 1–100","icon":"123","color":"#a3e635","items":[{"mn":"jedan","en":"one (1)"},{"mn":"dva","en":"two (2)"},{"mn":"tri","en":"three (3)"},{"mn":"četiri","en":"four (4)"},{"mn":"pet","en":"five (5)"},{"mn":"šest","en":"six (6)"},{"mn":"sedam","en":"seven (7)"},{"mn":"osam","en":"eight (8)"},{"mn":"devet","en":"nine (9)"},{"mn":"deset","en":"ten (10)"},{"mn":"dvadeset","en":"twenty (20)"},{"mn":"trideset","en":"thirty (30)"},{"mn":"pedeset","en":"fifty (50)"},{"mn":"sto","en":"one hundred (100)"}]},{"id":"colors","month":2,"title":"Colors","subtitle":"boje","icon":"Bo","color":"#7dd3fc","items":[{"mn":"crvena","en":"red","emoji":"🔴"},{"mn":"plava","en":"blue","emoji":"🔵"},{"mn":"zelena","en":"green","emoji":"🟢"},{"mn":"žuta","en":"yellow","emoji":"🟡"},{"mn":"crna","en":"black","emoji":"⚫"},{"mn":"bijela","en":"white","emoji":"⚪"}]},{"id":"drinks","month":3,"title":"Drinks","subtitle":"piće","icon":"Pi","color":"#f472b6","items":[{"mn":"voda","en":"water","emoji":"💧"},{"mn":"kafa","en":"coffee","emoji":"☕"},{"mn":"čaj","en":"tea","emoji":"🍵"},{"mn":"sok","en":"juice","emoji":"🧃"},{"mn":"mlijeko","en":"milk","emoji":"🥛"},{"mn":"pivo","en":"beer","emoji":"🍺"},{"mn":"vino","en":"wine","emoji":"🍷"},{"mn":"rakija","en":"rakija (homemade brandy)","emoji":"🥃"}]},{"id":"food","month":3,"title":"Food","subtitle":"hrana","icon":"Hr","color":"#a3e635","items":[{"mn":"kruh","en":"bread (also: hljeb)","emoji":"🍞"},{"mn":"sir","en":"cheese","emoji":"🧀"},{"mn":"meso","en":"meat","emoji":"🥩"},{"mn":"riba","en":"fish","emoji":"🐟"},{"mn":"jaje / jaja","en":"egg / eggs","emoji":"🥚"},{"mn":"salata","en":"salad","emoji":"🥗"},{"mn":"supa / čorba","en":"soup","emoji":"🍲"},{"mn":"sladoled","en":"ice cream","emoji":"🍦"},{"mn":"jabuka","en":"apple","emoji":"🍎"}]},{"id":"veg","month":4,"title":"Vegetables & Market","subtitle":"pijaca","icon":"Pj","color":"#7dd3fc","items":[{"mn":"paradajz","en":"tomato","emoji":"🍅"},{"mn":"kukumar","en":"cucumber","emoji":"🥒"},{"mn":"krompir","en":"potato","emoji":"🥔"},{"mn":"luk","en":"onion","emoji":"🧅"},{"mn":"bijeli luk","en":"garlic (literally 'white onion')","emoji":"🧄"},{"mn":"paprika","en":"pepper","emoji":"🫑"},{"mn":"mrkva","en":"carrot","emoji":"🥕"},{"mn":"kupus","en":"cabbage","emoji":"🥬"}]},{"id":"cafe","month":4,"title":"At a Café","subtitle":"Order like a local","icon":"Ka","color":"#f472b6","note":"Hoću = I want, Neću = I don't want.\\nWords ending in -a often change to -u after these: kafa → Hoću kafu, voda → Hoću vodu.","items":[{"mn":"Dobar dan!","en":"Good afternoon! (greeting)"},{"mn":"Izvolite?","en":"What can I get you?"},{"mn":"Hoću kafu, molim.","en":"I'd like a coffee, please."},{"mn":"Još nešto?","en":"Anything else?"},{"mn":"Hvala","en":"Thank you"},{"mn":"Račun, molim.","en":"The bill, please."}],"dialogue":{"roles":["Waiter","Customer"],"lines":[{"role":"Waiter","mn":"Dobar dan! Izvolite?","en":"Good afternoon! What can I get you?"},{"role":"Customer","mn":"Hoću kafu, molim.","en":"I'd like a coffee, please."},{"role":"Waiter","mn":"Još nešto?","en":"Anything else?"},{"role":"Customer","mn":"Hoću i vodu. Hvala.","en":"I'll also have water. Thanks."},{"role":"Waiter","mn":"Izvolite.","en":"Here you go."},{"role":"Customer","mn":"Hvala!","en":"Thank you!"},{"role":"Customer","mn":"Račun, molim.","en":"The bill, please."},{"role":"Waiter","mn":"Doviđenja!","en":"Goodbye!"}]}},{"id":"talkfamily","month":5,"title":"Talking About Family","subtitle":"\\"my brother\\", \\"I have a sister\\"","icon":"Mo","color":"#a3e635","items":[{"mn":"moj","en":"my (masculine)"},{"mn":"moja","en":"my (feminine)"},{"mn":"moj brat","en":"my brother"},{"mn":"moja sestra","en":"my sister"},{"mn":"moje dijete","en":"my child"},{"mn":"Imam brata.","en":"I have a brother."},{"mn":"Imam sestru.","en":"I have a sister."},{"mn":"Kako se zove tvoj brat?","en":"What's your brother's name?"},{"mn":"Moj brat se zove Jake.","en":"My brother is named Jake."},{"mn":"Ovo je moja porodica.","en":"This is my family."},{"mn":"A ko je ovo?","en":"And who is this?"}]},{"id":"aboutme","month":5,"title":"About Me","subtitle":"Simple sentences about yourself","icon":"Ja","color":"#7dd3fc","items":[{"mn":"Ja se zovem ___.","en":"My name is ___."},{"mn":"Koliko imaš godina?","en":"How old are you?"},{"mn":"Imam ___ godina.","en":"I am ___ years old."},{"mn":"Volim čokoladu.","en":"I love chocolate."},{"mn":"Idem u školu.","en":"I am going to school."},{"mn":"Idem na plažu.","en":"I'm going to the beach."},{"mn":"Gdje živiš?","en":"Where do you live?"},{"mn":"Živim u ___.","en":"I live in ___."}]},{"id":"days","month":6,"title":"Days & Time","subtitle":"dani u sedmici","icon":"Dn","color":"#f472b6","items":[{"mn":"ponedjeljak","en":"Monday"},{"mn":"utorak","en":"Tuesday"},{"mn":"srijeda","en":"Wednesday"},{"mn":"četvrtak","en":"Thursday"},{"mn":"petak","en":"Friday"},{"mn":"subota","en":"Saturday"},{"mn":"nedjelja","en":"Sunday"},{"mn":"danas","en":"today"},{"mn":"sutra","en":"tomorrow"},{"mn":"juče","en":"yesterday"}]},{"id":"outabout","month":6,"title":"Out & About","subtitle":"Travel phrases","icon":"Va","color":"#a3e635","items":[{"mn":"Gdje je...?","en":"Where is...?"},{"mn":"Koliko košta?","en":"How much does it cost?"},{"mn":"Ne razumijem.","en":"I don't understand."},{"mn":"Govorite li engleski?","en":"Do you speak English?"},{"mn":"Molim vas.","en":"Please (formal)"},{"mn":"Izvinite.","en":"Excuse me (formal)"},{"mn":"lijevo","en":"left"},{"mn":"desno","en":"right"},{"mn":"plaža","en":"beach"},{"mn":"more","en":"sea"}]},{"id":"weather","month":7,"title":"Weather","subtitle":"vrijeme","icon":"We","color":"#7dd3fc","items":[{"mn":"sunce","en":"sun","emoji":"☀️"},{"mn":"kiša","en":"rain","emoji":"🌧️"},{"mn":"vjetar","en":"wind","emoji":"💨"},{"mn":"oblačno","en":"cloudy","emoji":"☁️"},{"mn":"toplo","en":"warm"},{"mn":"hladno","en":"cold","emoji":"🥶"},{"mn":"Kakvo je vrijeme?","en":"What's the weather like?"},{"mn":"Sunčano je.","en":"It's sunny."}]},{"id":"emotions","month":7,"title":"Emotions & Feelings","subtitle":"osjećanja","icon":"Em","color":"#f472b6","items":[{"mn":"sretan / sretna","en":"happy"},{"mn":"tužan / tužna","en":"sad"},{"mn":"umoran / umorna","en":"tired"},{"mn":"gladan / gladna","en":"hungry"},{"mn":"žedan / žedna","en":"thirsty"},{"mn":"uzbuđen / uzbuđena","en":"excited"},{"mn":"Kako se osjećaš?","en":"How do you feel?"}]},{"id":"house","month":8,"title":"House & Home","subtitle":"kuća","icon":"Ho","color":"#a3e635","items":[{"mn":"kuća","en":"house","emoji":"🏠"},{"mn":"soba","en":"room"},{"mn":"kuhinja","en":"kitchen","emoji":"🍳"},{"mn":"kupatilo","en":"bathroom","emoji":"🚿"},{"mn":"krevet","en":"bed","emoji":"🛏️"},{"mn":"vrata","en":"door","emoji":"🚪"},{"mn":"prozor","en":"window","emoji":"🪟"},{"mn":"dvorište","en":"yard","emoji":"🌳"}]},{"id":"clothes","month":8,"title":"Clothes","subtitle":"odjeća","icon":"Cl","color":"#7dd3fc","items":[{"mn":"majica","en":"t-shirt","emoji":"👕"},{"mn":"pantalone","en":"pants","emoji":"👖"},{"mn":"haljina","en":"dress","emoji":"👗"},{"mn":"cipele","en":"shoes","emoji":"👟"},{"mn":"jakna","en":"jacket","emoji":"🧥"},{"mn":"kupaći kostim","en":"swimsuit","emoji":"🩱"},{"mn":"šešir","en":"hat","emoji":"👒"}]},{"id":"body","month":9,"title":"Body & Health","subtitle":"tijelo","icon":"Bd","color":"#f472b6","items":[{"mn":"glava","en":"head"},{"mn":"ruka","en":"hand / arm"},{"mn":"noga","en":"leg / foot"},{"mn":"stomak","en":"stomach"},{"mn":"Boli me glava.","en":"My head hurts."},{"mn":"Dobro sam.","en":"I'm fine."}]},{"id":"shopping","month":9,"title":"Shopping","subtitle":"kupovina","icon":"Sh","color":"#a3e635","items":[{"mn":"Izvolite, šta želite?","en":"Hello, what would you like?"},{"mn":"Koliko košta ovo?","en":"How much is this?"},{"mn":"Hoću da kupim...","en":"I want to buy..."},{"mn":"Imate li...?","en":"Do you have...?"},{"mn":"Samo gledam.","en":"I'm just looking."},{"mn":"skupo","en":"expensive"},{"mn":"jeftino","en":"cheap"}],"dialogue":{"roles":["Shopkeeper","You"],"lines":[{"role":"Shopkeeper","mn":"Izvolite, šta želite?","en":"Hello, what would you like?"},{"role":"You","mn":"Koliko košta ovo?","en":"How much is this?"},{"role":"Shopkeeper","mn":"Deset eura.","en":"Ten euros."},{"role":"You","mn":"To je malo skupo. Sedam?","en":"That's a bit expensive. Seven?"},{"role":"Shopkeeper","mn":"Dobro, sedam.","en":"Okay, seven."},{"role":"You","mn":"Hvala!","en":"Thank you!"}]}},{"id":"directions","month":10,"title":"Directions & Places","subtitle":"pravci","icon":"Di","color":"#7dd3fc","items":[{"mn":"prodavnica","en":"store"},{"mn":"banka","en":"bank"},{"mn":"bolnica","en":"hospital"},{"mn":"blizu","en":"near"},{"mn":"daleko","en":"far"},{"mn":"Idi pravo.","en":"Go straight."},{"mn":"Skreni lijevo.","en":"Turn left."},{"mn":"Skreni desno.","en":"Turn right."}]},{"id":"beach","month":10,"title":"Beach & Summer","subtitle":"plaža i ljeto","icon":"Bc","color":"#f472b6","items":[{"mn":"pijesak","en":"sand"},{"mn":"talas","en":"wave"},{"mn":"kupanje","en":"swimming"},{"mn":"peškir","en":"towel"},{"mn":"sunčane naočare","en":"sunglasses"},{"mn":"Idemo na plažu!","en":"Let's go to the beach!"}],"dialogue":{"roles":["Friend","You"],"lines":[{"role":"Friend","mn":"Idemo na plažu!","en":"Let's go to the beach!"},{"role":"You","mn":"Odlično! Gdje su moje naočare?","en":"Great! Where are my sunglasses?"},{"role":"Friend","mn":"Evo ih, na peškiru.","en":"Here they are, on the towel."},{"role":"You","mn":"Hvala! Je li voda hladna?","en":"Thanks! Is the water cold?"},{"role":"Friend","mn":"Ne, topla je!","en":"No, it's warm!"}]}},{"id":"time","month":11,"title":"Telling Time","subtitle":"sati","icon":"Tm","color":"#a3e635","items":[{"mn":"Koliko je sati?","en":"What time is it?"},{"mn":"sat","en":"hour / o'clock"},{"mn":"minut","en":"minute"},{"mn":"podne","en":"noon"},{"mn":"ponoć","en":"midnight"},{"mn":"rano","en":"early"},{"mn":"kasno","en":"late"}]},{"id":"hobbies","month":11,"title":"Hobbies","subtitle":"hobiji","icon":"Hb","color":"#7dd3fc","items":[{"mn":"plivati","en":"to swim","emoji":"🏊"},{"mn":"čitati","en":"to read","emoji":"📖"},{"mn":"igrati fudbal","en":"to play soccer","emoji":"⚽"},{"mn":"slušati muziku","en":"to listen to music","emoji":"🎧"},{"mn":"crtati","en":"to draw","emoji":"🎨"},{"mn":"Šta voliš da radiš?","en":"What do you like to do?"}]},{"id":"travel","month":12,"title":"Travel Essentials","subtitle":"putovanje","icon":"Tr","color":"#f472b6","items":[{"mn":"aerodrom","en":"airport","emoji":"✈️"},{"mn":"pasoš","en":"passport","emoji":"🛂"},{"mn":"kofer","en":"suitcase","emoji":"🧳"},{"mn":"avion","en":"plane","emoji":"✈️"},{"mn":"karta","en":"ticket","emoji":"🎫"},{"mn":"Idemo u Crnu Goru!","en":"We're going to Montenegro!"}]},{"id":"capstone","month":12,"title":"Arriving in Montenegro","subtitle":"Put it all together","icon":"MG","color":"#a3e635","items":[{"mn":"Dobro došli!","en":"Welcome!"},{"mn":"Prijatan boravak.","en":"Enjoy your stay."},{"mn":"Jedva čekam.","en":"I can't wait."},{"mn":"Napokon smo ovdje!","en":"We're finally here!"}],"dialogue":{"roles":["Agent","You"],"lines":[{"role":"Agent","mn":"Dobro došli u Crnu Goru! Pasoš, molim.","en":"Welcome to Montenegro! Passport, please."},{"role":"You","mn":"Izvolite.","en":"Here you go."},{"role":"Agent","mn":"Hvala. Prijatan boravak!","en":"Thank you. Enjoy your stay!"},{"role":"You","mn":"Hvala! Jedva čekam da vidim porodicu.","en":"Thank you! I can't wait to see my family."}]}},{"id":"verbs1","title":"Verbs: To Be & To Have","subtitle":"biti, imati","icon":"V1","color":"#7dd3fc","items":[{"mn":"ja sam","en":"I am"},{"mn":"ti si","en":"you are"},{"mn":"on/ona je","en":"he/she is"},{"mn":"mi smo","en":"we are"},{"mn":"oni su","en":"they are"},{"mn":"ja imam","en":"I have"},{"mn":"ti imaš","en":"you have"},{"mn":"mi imamo","en":"we have"}]},{"id":"adjectives","title":"Describing Things","subtitle":"pridjevi","icon":"Ad","color":"#f472b6","items":[{"mn":"velik / velika","en":"big"},{"mn":"mali / mala","en":"small"},{"mn":"lijep / lijepa","en":"beautiful"},{"mn":"ružan / ružna","en":"ugly"},{"mn":"dobar / dobra","en":"good"},{"mn":"loš / loša","en":"bad"},{"mn":"nov / nova","en":"new"},{"mn":"star / stara","en":"old"}]},{"id":"questionwords","title":"Question Words","subtitle":"šta, ko, gdje...","icon":"Qw","color":"#a3e635","items":[{"mn":"šta","en":"what"},{"mn":"ko","en":"who"},{"mn":"gdje","en":"where"},{"mn":"kada","en":"when"},{"mn":"zašto","en":"why"},{"mn":"kako","en":"how"},{"mn":"koji / koja","en":"which"}]},{"id":"plans","title":"Making Plans","subtitle":"Hoćeš li..., Vidimo se!","icon":"Pl","color":"#7dd3fc","items":[{"mn":"Hoćeš li...?","en":"Do you want to...?"},{"mn":"Možemo li...?","en":"Can we...?"},{"mn":"Kada se vidimo?","en":"When do we meet?"},{"mn":"Vidimo se sutra.","en":"See you tomorrow."},{"mn":"Dogovoreno!","en":"It's a deal! / Agreed!"}]},{"id":"smalltalk","title":"Small Talk","subtitle":"Getting to know people","icon":"St","color":"#f472b6","items":[{"mn":"Šta radiš?","en":"What are you doing?"},{"mn":"Odakle si?","en":"Where are you from?"},{"mn":"Koliko dugo si ovdje?","en":"How long have you been here?"},{"mn":"Sviđa mi se Crna Gora.","en":"I like Montenegro."},{"mn":"Ovo mi je prvi put ovdje.","en":"This is my first time here."}]},{"id":"pasttense","title":"Talking About the Past","subtitle":"bio sam, jučer...","icon":"Pt","color":"#a3e635","items":[{"mn":"bio sam / bila sam","en":"I was"},{"mn":"Jučer sam...","en":"Yesterday I..."},{"mn":"Prošle godine...","en":"Last year..."},{"mn":"Bilo je zabavno!","en":"It was fun!"},{"mn":"Vidio sam / Vidjela sam","en":"I saw"}]},{"id":"futuretense","title":"Talking About the Future","subtitle":"sutra ću, sledeće godine...","icon":"Ft","color":"#7dd3fc","items":[{"mn":"Sutra ću...","en":"Tomorrow I will..."},{"mn":"Sledeće godine ćemo...","en":"Next year we will..."},{"mn":"Vidjećemo se opet.","en":"We'll see each other again."},{"mn":"Jedva čekam ljeto.","en":"I can't wait for summer."}]},{"id":"restaurant","title":"At a Restaurant","subtitle":"Beyond the café","icon":"Rs","color":"#f472b6","items":[{"mn":"meni","en":"menu"},{"mn":"konobar / konobarica","en":"waiter / waitress"},{"mn":"Preporučujete li nešto?","en":"Do you recommend something?"},{"mn":"Za piće?","en":"For drinks?"},{"mn":"Dobar tek!","en":"Enjoy your meal!"},{"mn":"Bilo je ukusno.","en":"It was delicious."}],"dialogue":{"roles":["Waiter","You"],"lines":[{"role":"Waiter","mn":"Dobro veče! Izvolite meni.","en":"Good evening! Here is the menu."},{"role":"You","mn":"Hvala. Preporučujete li nešto?","en":"Thanks. Do you recommend something?"},{"role":"Waiter","mn":"Riba je odlična danas.","en":"The fish is excellent today."},{"role":"You","mn":"Dobro, hoću ribu, molim.","en":"Okay, I'll have the fish, please."},{"role":"Waiter","mn":"Dobar tek!","en":"Enjoy your meal!"},{"role":"You","mn":"Hvala, bilo je ukusno!","en":"Thanks, it was delicious!"}]}},{"id":"gathering","title":"Family Gathering","subtitle":"A full conversation at the table","icon":"Fg","color":"#a3e635","items":[{"mn":"Sjedi ovdje.","en":"Sit here."},{"mn":"Poslužite se.","en":"Help yourselves."},{"mn":"Živjeli!","en":"Cheers!"},{"mn":"Hvala na ručku.","en":"Thank you for lunch."},{"mn":"Bilo je divno vidjeti vas.","en":"It was wonderful to see you."}],"dialogue":{"roles":["Baka","You"],"lines":[{"role":"Baka","mn":"Sjedi ovdje, dijete. Poslužite se!","en":"Sit here, child. Help yourselves!"},{"role":"You","mn":"Hvala, bako! Miriše odlično.","en":"Thanks, grandma! It smells great."},{"role":"Baka","mn":"Živjeli!","en":"Cheers!"},{"role":"You","mn":"Živjeli! Hvala na ručku, bilo je divno.","en":"Cheers! Thank you for lunch, it was wonderful."}]}}]`),ke=[{id:"alphabet",title:"Alphabet",subtitle:"Latin & Cyrillic letters",icon:"Aa",color:"#7dd3fc",items:[{mn:"A a",en:'Cyrillic: А а — "ah", as in auto (car)'},{mn:"B b",en:'Cyrillic: Б б — "b", as in brat (brother)'},{mn:"C c",en:'Cyrillic: Ц ц — "ts", as in cvijet (flower)'},{mn:"Č č",en:'Cyrillic: Ч ч — hard "ch", as in čokolada'},{mn:"Ć ć",en:'Cyrillic: Ћ ћ — soft "ch", as in ćevapi'},{mn:"D d",en:'Cyrillic: Д д — "d", as in dijete'},{mn:"Đ đ",en:'Cyrillic: Ђ ђ — soft "j", as in đak'},{mn:"Dž dž",en:'Cyrillic: Џ џ — hard "j", as in džak'},{mn:"Lj lj",en:'Cyrillic: Љ љ — "ly", as in ljubav'},{mn:"Nj nj",en:'Cyrillic: Њ њ — "ny", as in njiva'},{mn:"Š š",en:'Cyrillic: Ш ш — "sh", as in šuma'},{mn:"Ž ž",en:'Cyrillic: Ж ж — "zh", as in žena'}]}],O={curriculum:ge,topics:xe,bonusTopics:ke},B=O.topics,me=O.bonusTopics,we=[...B,...me],$e=["Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"],U=new Date(2026,7,10),F=O.curriculum.months,je=O.curriculum.extras,Se=new Map(F.flatMap((e,t)=>e.map(i=>[i,t+1]))),ae=[{type:"discover",name:"Discover",detail:"Meet new words and hear them aloud"},{type:"recall",name:"Recall",detail:"Bring yesterday’s language back"},{type:"build",name:"Build",detail:"Put words into useful patterns"},{type:"use",name:"Use",detail:"Speak, listen, and role-play"},{type:"checkpoint",name:"Checkpoint",detail:"Show what you remember"}];function se(){return B}function Ie(){return me}function le(){return F.flat().map(y).filter(Boolean)}function Le(){return je.map(y).filter(Boolean)}function re(e){return Se.get(e)||null}function y(e){return we.find(t=>t.id===e)}const b=(()=>{const e=[];let t=1;for(let i=0;i<10;i++){const o=F[i].map(y);for(let n=0;n<4;n++){const a=i*4+n+1;if(n<3){const s=o[n];for(let l=0;l<5;l++){const c=ae[l];e.push({id:`voyage-${t}`,number:t,month:i,week:a,dayOfWeek:l+1,topicId:s.id,type:c.type,title:`${s.title}: ${c.name}`,detail:c.detail}),t++}}else for(let s=0;s<5;s++){const l=ae[s];e.push({id:`voyage-${t}`,number:t,month:i,week:a,dayOfWeek:s+1,topicId:null,type:`integration-${l.type}`,title:`Integration: ${l.name}`,detail:`Review topics from Month ${i+1}`}),t++}}}return e})();function q(e){const t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function z(e){const t=e.slice();for(let i=t.length-1;i>0;i--){const o=Math.floor(Math.random()*(i+1));[t[i],t[o]]=[t[o],t[i]]}return t}function C(e,t=6){const i=Math.min(t,e.length),o=z(e).slice(0,i),n=[];return o.forEach((a,s)=>{n.push({id:`mn-${s}`,pairId:s,text:a.mn,kind:"mn"}),n.push({id:`en-${s}`,pairId:s,text:a.en,kind:"en"})}),{tiles:z(n),selectedIds:[],matchedIds:[]}}function T(e,t=8){const i=Math.min(t,e.length);return{questions:z(e).slice(0,i).map(a=>{const s=e.filter(d=>d.mn!==a.mn),l=z(s).slice(0,Math.min(3,s.length)),c=z([a.mn,...l.map(d=>d.mn)]);return{promptText:a.en,correctAnswer:a.mn,options:c}}),qIdx:0,score:0,selected:null,answered:!1}}function Te(e,t){const i=[];if(e.topicId){const o=y(e.topicId),n=B[B.indexOf(o)-1]||null;n&&i.push({type:"warmup",title:"Warmup",subtitle:`Quick practice from ${n.title}`,items:n.items.slice(0,5)}),e.type==="discover"?(i.push({type:"discover",title:"New Vocabulary",subtitle:`Discover words for ${o.title}`,items:o.items}),i.push({type:"match",title:"Recall Match",subtitle:"Connect the translations",match:C(o.items,4)})):e.type==="recall"?(i.push({type:"recall-flash",title:"Vocabulary Recall",subtitle:"Self-assess your memory",items:z(o.items)}),i.push({type:"quiz",title:"Quick Quiz",subtitle:"Test your understanding",quiz:T(o.items,5)})):e.type==="build"?(i.push({type:"note",title:"Sentence Pattern",subtitle:"How sentences are structured",note:o.note||"Practice assembling phrases in this topic."}),i.push({type:"quiz",title:"Pattern Practice",subtitle:"Complete the sentences correctly",quiz:T(o.items,6)})):e.type==="use"?o.dialogue?i.push({type:"dialogue",title:"Dialogue Practice",subtitle:"Read the roles out loud",dialogue:o.dialogue}):i.push({type:"listen",title:"Listen & Repeat",subtitle:"Practice your pronunciation",items:o.items}):e.type==="checkpoint"&&(i.push({type:"quiz",title:"Topic Quiz",subtitle:"Show what you remember",quiz:T(o.items,8)}),i.push({type:"match",title:"Vocabulary Match",subtitle:"Match all pairs to complete the topic",match:C(o.items,6)}))}else{const n=F[e.month].map(y).flatMap(a=>a.items);i.push({type:"quiz",title:"Integration Quiz",subtitle:`Review from Month ${e.month+1}`,quiz:T(n,8)}),i.push({type:"match",title:"Integration Match",subtitle:"Connect the words quickly",match:C(n,8)})}return i.push({type:"done",title:"Completed!",subtitle:"Awesome job!"}),i}const ee=["Mia","Jake"],S=["Mario","Kristina"],qe=[...ee,...S];function ze(){return localStorage.getItem("mn_active_profile")||null}function De(e){e?localStorage.setItem("mn_active_profile",e):localStorage.removeItem("mn_active_profile")}function M(e){if(!e)return null;const t=parseInt(localStorage.getItem(`mn_${e}_stars`)||"0",10)||0;let i=[];try{i=JSON.parse(localStorage.getItem(`mn_${e}_completed`)||"[]")}catch{}let o=[];try{o=JSON.parse(localStorage.getItem(`mn_${e}_voyage_lessons`)||"[]")}catch{}let n=[];try{n=JSON.parse(localStorage.getItem(`mn_${e}_activity_dates`)||"[]")}catch{}const a=parseInt(localStorage.getItem(`mn_${e}_dialogues`)||"0",10)||0,s=Me(n);return{profile:e,stars:t,streakDays:s,completedTopicIds:i,completedLessons:o,activityDates:n,dialoguesDone:a,isGuide:S.includes(e)}}function Me(e){if(!e||e.length===0)return 0;const t=new Set(e);let i=0,o=new Date;o.setHours(0,0,0,0);const n=q(o);o.setDate(o.getDate()-1);const a=q(o);if(!t.has(n)&&!t.has(a))return 0;let s=t.has(n)?new Date:o;for(s.setHours(0,0,0,0);t.has(q(s));)i++,s.setDate(s.getDate()-1);return i}function Ee(e,t){localStorage.setItem(`mn_${e}_stars`,String(t))}function _e(e,t){localStorage.setItem(`mn_${e}_completed`,JSON.stringify(t))}function Ce(e,t){localStorage.setItem(`mn_${e}_voyage_lessons`,JSON.stringify(t))}function Ae(e,t){localStorage.setItem(`mn_${e}_activity_dates`,JSON.stringify(t))}function He(e,t){localStorage.setItem(`mn_${e}_dialogues`,String(t))}function Pe(e,t){if(S.includes(e))return;const o=M(e).stars+t;Ee(e,o),pe(e)}function pe(e){if(S.includes(e))return;const t=M(e),i=q(new Date);if(!t.activityDates.includes(i)){const o=[...t.activityDates,i];Ae(e,o)}}function Ne(e,t){if(S.includes(e))return;const i=M(e);if(!i.completedLessons.includes(t)){const o=[...i.completedLessons,t];Ce(e,o),pe(e)}}function de(e,t){if(S.includes(e))return;const i=M(e);if(!i.completedTopicIds.includes(t)){const o=[...i.completedTopicIds,t];_e(e,o)}}function Re(e){if(S.includes(e))return;const i=M(e).dialoguesDone+1;He(e,i)}function Ge(){return ee.map(e=>{const t=M(e);return{name:e,stars:t.stars,streak:t.streakDays,completed:t.completedTopicIds.length}})}function We(e,t){e.innerHTML=`
    <div class="profile-selection">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <div class="logo-icon" style="width: 56px; height: 56px; font-size: 20px;">CG</div>
        <h1 style="font-size: 32px; letter-spacing: -0.5px;">Učimo Crnogorski</h1>
        <p style="color: var(--text-muted); font-size: 16px;">Who is ready to learn today?</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px; width: 100%; max-width: 480px;">
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
  `;const i=e.querySelector("#learners-grid"),o=e.querySelector("#guides-grid");ee.forEach(n=>{const a=document.createElement("button");a.className="profile-btn",a.innerText=`I'm ${n}`,a.addEventListener("click",()=>t(n)),i.appendChild(a)}),S.forEach(n=>{const a=document.createElement("button");a.className="profile-btn",a.style.borderColor="var(--pink)",a.style.color="var(--text-main)",a.innerText=`${n}`,a.addEventListener("click",()=>t(n)),o.appendChild(a)})}function Be(e,t,i){const o=b.find(m=>!t.completedLessons.includes(m.id))||b[199],n=y(o.topicId)||se()[0],a=t.completedLessons.includes(o.id),l=[{id:"first",label:"First Steps",cond:t.completedTopicIds.length>=1},{id:"getting",label:"Getting Started",cond:t.completedTopicIds.length>=5},{id:"halfway",label:"Halfway Hero",cond:t.completedTopicIds.length>=17},{id:"fluent",label:"Fluent Enough",cond:t.completedTopicIds.length>=se().length},{id:"chatter",label:"Chatterbox",cond:t.dialoguesDone>=3},{id:"streak",label:"7-Day Streak",cond:t.streakDays>=7},{id:"pro",label:"Practice Pro",cond:t.stars>=50}].filter(m=>m.cond),c={};le().forEach(m=>{const u=`Month ${re(m.id)}`;c[u]||(c[u]=[]),c[u].push(m)});const d=Array.from({length:10},(m,u)=>{const g=u+1,w=le().filter(k=>re(k.id)===g),$=w.some(k=>t.completedTopicIds.includes(k.id)),j=w.length>0&&w.every(k=>t.completedTopicIds.includes(k.id));let x="timeline-circle";j?x+=" completed":($||o&&o.month===u)&&(x+=" unlocked");let v="timeline-line";return j&&(v+=" completed"),`
      <div class="timeline-node">
        <div class="${x}" title="Month ${g} progress">${g}</div>
        ${u<9?`<div class="${v}"></div>`:""}
      </div>
    `}).join("");e.innerHTML=`
    <!-- Top Nav bar -->
    <header class="navbar">
      <button class="logo" id="logo-btn" aria-label="Go to Dashboard">
        <div class="logo-icon">CG</div>
        <div class="logo-title">Učimo Crnogorski</div>
      </button>

      <div class="nav-actions">
        <!-- Profile switcher -->
        <div class="profile-pill-container" role="group" aria-label="Profiles">
          ${qe.map(m=>`
            <button class="profile-pill-btn ${t.profile===m?"active":""}" data-profile="${m}" aria-label="Switch to profile ${m}">${m}</button>
          `).join("")}
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
          <div class="hero-tag">${a?"Recommended Review":"Today's Target"}</div>
          <h2 class="hero-title" id="hero-title-id">${o.title}</h2>
          <p class="hero-subtitle">
            ${t.isGuide?`Voyage day ${o.number} · Preview ${n.title} before the kids sit down`:`Voyage day ${o.number} · ${o.detail} · about 10–15 minutes`}
          </p>
        </div>
        <button class="btn btn-primary" id="start-session-btn">
          ${t.isGuide?"Preview Session":a?"Replay Session":"Start Lesson"}
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
        <div class="timeline">${d}</div>
      </section>

      <!-- Guide Progress dashboard -->
      ${t.isGuide?`
        <section aria-label="Learner Progress Summary">
          <h3 class="section-title">Kids' Progress</h3>
          <div class="kids-progress-grid">
            ${Ge().map(m=>`
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
      ${!t.isGuide&&l.length>0?`
        <section aria-label="Earned Badges">
          <h3 class="section-title">Badges Earned</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px;">
            ${l.map(m=>`
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

        ${Object.keys(c).map(m=>`
          <div style="margin-bottom: 28px;">
            <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">${m}</h4>
            <div class="cards-grid">
              ${c[m].map(u=>{const g=t.completedTopicIds.includes(u.id);return`
                  <button type="button" class="topic-card" data-topic-id="${u.id}" aria-label="Practice ${u.title}">
                    <div class="topic-card__icon" style="background: ${u.color};">${u.icon}</div>
                    ${g?'<div class="topic-card__check">✓</div>':""}
                    <div>
                      <div class="topic-card__title">${u.title}</div>
                      <div class="topic-card__subtitle">${u.subtitle}</div>
                    </div>
                    <div class="topic-card__count">${u.items.length} words${u.dialogue?" · role-play":""}</div>
                  </button>
                `}).join("")}
            </div>
          </div>
        `).join("")}

        <!-- Anytime extras and advanced material -->
        <div style="margin-bottom: 28px;">
          <h4 style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Anytime Extras &amp; Capstones</h4>
          <div class="cards-grid">
            ${[...Le(),...Ie()].map(m=>`
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
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#start-session-btn").addEventListener("click",()=>i.startSession(o)),e.querySelector("#view-voyage-btn").addEventListener("click",i.goCurriculum),e.querySelectorAll(".profile-pill-btn").forEach(m=>{m.addEventListener("click",u=>{i.switchProfile(u.target.dataset.profile)})}),e.querySelectorAll(".topic-card").forEach(m=>{m.addEventListener("click",()=>{const u=m.dataset.topicId;u&&i.openTopic(u)})});const p=e.querySelector("#mixed-review-card");p&&p.addEventListener("click",i.startMixedReview)}function Oe(e,t,i,o){const n=t.calendarMonth,a=new Date(U.getFullYear(),U.getMonth()+n,1),s=a.getFullYear(),l=a.getMonth(),c=(new Date(s,l,1).getDay()+6)%7,d=new Date(s,l+1,0).getDate(),p=new Map;let m=new Date(U);for(let h=0;h<b.length;h++){for(;m.getDay()===0||m.getDay()===6;)m.setDate(m.getDate()+1);p.set(q(m),b[h]),m.setDate(m.getDate()+1)}const u=[];for(let h=0;h<c;h++)u.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const g=q(new Date);for(let h=1;h<=d;h++){const A=new Date(s,l,h),Y=q(A),I=p.get(Y),V=I&&t.completedLessons.includes(I.id),be=t.activityDates.includes(Y),ye=Y===g;let H="state-rest",P="In harbor";I&&(H="state-planned",P="Charted"),be&&!V&&(H="state-open-water",P="Open water"),ye&&I&&!V&&(H="state-making-way",P="Making way"),V&&(H="state-full-sail",P="Full sail"),u.push({label:String(h),stateClass:H,ariaLabel:`${A.toLocaleDateString("en-US",{month:"long",day:"numeric"})}: ${P}${I?`, Lesson ${I.number}: ${I.title}`:""}`})}for(;u.length%7!==0;)u.push({label:"",style:"background:transparent; cursor:default;",ariaLabel:"Empty cell"});const w=a.toLocaleDateString("en-US",{month:"long",year:"numeric"}),$=b.find(h=>!t.completedLessons.includes(h.id)),j=Math.round(t.completedLessons.length/b.length*100),x=$?$.number:200,v=new Date;v.setHours(0,0,0,0),v.setDate(v.getDate()-(v.getDay()+6)%7);const k=new Date(v);k.setDate(k.getDate()+7);const te=t.activityDates.filter(h=>{const A=new Date(`${h}T12:00:00`);return A>=v&&A<k}).length,ne=t.activityDates.filter(h=>h.startsWith(`${s}-${String(l+1).padStart(2,"0")}-`)).length,fe=u.filter(h=>h.label&&h.ariaLabel.includes("Lesson"));e.innerHTML=`
    <div class="voyage-calendar__head">
      <div>
        <div style="color: var(--cyan); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 4px;">Ten-month learning voyage</div>
        <h3 class="voyage-calendar__title">${w}</h3>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <div class="voyage-calendar__count" title="Voyage Progress">
          ${$?`Voyage day ${x} of 200`:"Voyage complete · 200 of 200"}
        </div>
        <div class="voyage-calendar__nav">
          <button id="cal-prev" aria-label="Previous month" ${n===0?'disabled style="opacity:0.3; cursor:default;"':""}>‹</button>
          <button id="cal-next" aria-label="Next month" ${n===9?'disabled style="opacity:0.3; cursor:default;"':""}>›</button>
        </div>
      </div>
    </div>

    <div class="voyage-calendar__grid" role="grid" aria-label="Calendar for ${w}">
      ${["Mo","Tu","We","Th","Fr","Sa","Su"].map(h=>`
        <div class="voyage-calendar__weekday" role="columnheader" aria-label="${h}">${h}</div>
      `).join("")}

      ${u.map(h=>h.label===""?`<div class="voyage-calendar__day" style="${h.style}" aria-hidden="true"></div>`:`
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
      <span>${t.completedLessons.length} lessons completed · ${j}%</span>
      <span>•</span>
      <span>${te} active ${te===1?"day":"days"} this week</span>
      <span>•</span>
      <span>${ne} active ${ne===1?"day":"days"} this month</span>
    </div>

    <details class="calendar-list">
      <summary>View this month as a list</summary>
      <ul>
        ${fe.map(h=>`<li>${h.ariaLabel}</li>`).join("")}
      </ul>
    </details>
  `;const ie=e.querySelector("#cal-prev"),oe=e.querySelector("#cal-next");ie&&n>0&&ie.addEventListener("click",i),oe&&n<9&&oe.addEventListener("click",o)}function ue(e,t,i){const o=y(t.topicId),n=t.completedTopicIds.includes(o.id),a=!n&&!t.isGuide,s=[{id:"flashcards",label:"Flashcards"},{id:"match",label:"Match"},{id:"quiz",label:"Quiz"},{id:"listen",label:"Listen"}];o.dialogue&&s.push({id:"dialogue",label:"Role-play"}),e.innerHTML=`
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
          <h2 style="font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">${o.title}</h2>
          <p style="color: var(--text-muted); font-size: 14px;">${o.subtitle}</p>
        </div>
        <div>
          ${n?`
            <div style="color: var(--lime); font-weight: 800; font-size: 14px; display: flex; align-items: center; gap: 6px;">
              <span>✓</span> Completed Topic
            </div>
          `:""}
          ${a?`
            <button class="btn btn-secondary btn-pill" id="skip-btn" style="padding: 6px 14px; font-size: 12px; min-height: 32px;">Already know this — skip</button>
          `:""}
        </div>
      </div>

      ${o.note?`
        <div style="background: rgba(250, 204, 21, 0.08); border: 1px solid var(--amber); border-radius: 12px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #ffe58f; margin-bottom: 24px; white-space: pre-line;">
          ${o.note}
        </div>
      `:""}

      <!-- Activities Tabs -->
      <div style="display: flex; gap: 8px; margin: 16px 0 24px; flex-wrap: wrap;" role="tablist" aria-label="Topic Activities">
        ${s.map(d=>`
          <button class="btn btn-secondary btn-pill ${t.activity===d.id?"btn-active":""}" role="tab" aria-selected="${t.activity===d.id}" data-tab="${d.id}">${d.label}</button>
        `).join("")}
      </div>

      <!-- Activity Container -->
      <div id="activity-mount"></div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#back-btn").addEventListener("click",i.goDashboard);const l=e.querySelector("#skip-btn");l&&l.addEventListener("click",()=>{i.markTopicCompleted(o.id),ue(e,t,i)}),e.querySelectorAll("[data-tab]").forEach(d=>{d.addEventListener("click",p=>{const m=p.target.dataset.tab;i.setActivity(m)})});const c=e.querySelector("#activity-mount");Fe(c,o,t,i)}function Fe(e,t,i,o){i.activity==="flashcards"?R(e,t,i,o):i.activity==="match"?N(e,t,i,o):i.activity==="quiz"?G(e,t,i,o):i.activity==="listen"?D(e,t,i,o):i.activity==="dialogue"&&Q(e,t,i,o)}function R(e,t,i,o){const n=i.flash,a=n.order||t.items.map((c,d)=>d),s=t.items[a[n.idx]];e.innerHTML=`
    <div class="flashcard-container">
      <div class="flashcard-hint" style="color: var(--text-muted); font-size: 13px; font-weight: 700;">
        Card ${n.idx+1} of ${t.items.length}
      </div>

      <button type="button" class="flashcard-wrapper" id="card-wrapper" aria-label="Flashcard, tap to flip">
        <div class="flashcard ${n.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${s.emoji?`<div class="flashcard-emoji">${s.emoji}</div>`:""}
            <div class="flashcard-text-mn">${s.mn}</div>
            <div class="flashcard-hint">Tap to reveal translation</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en">${s.en}</div>
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
  `;const l=e.querySelector("#card-wrapper");l.addEventListener("click",()=>{n.flipped=!n.flipped,l.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#speak-btn").addEventListener("click",c=>{c.stopPropagation(),o.speak(s.mn)}),e.querySelector("#prev-card-btn").addEventListener("click",()=>{n.idx=(n.idx-1+t.items.length)%t.items.length,n.flipped=!1,R(e,t,i,o)}),e.querySelector("#next-card-btn").addEventListener("click",()=>{n.idx=(n.idx+1)%t.items.length,n.flipped=!1,R(e,t,i,o)}),e.querySelector("#shuffle-btn").addEventListener("click",()=>{n.order=z(t.items.map((c,d)=>d)),n.idx=0,n.flipped=!1,R(e,t,i,o)})}function N(e,t,i,o){const n=i.match;(!n.tiles||n.tiles.length===0)&&(i.match=C(t.items));const a=i.match,s=a.matchedIds.length/2,l=a.tiles.length/2,c=s===l;e.innerHTML=`
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
          ${a.tiles.map(d=>{const p=a.matchedIds.includes(d.id),m=a.selectedIds.includes(d.id);let u="match-tile";return p?u+=" matched":m&&(u+=" selected"),`
              <button class="${u}" data-tile-id="${d.id}" ${p?"disabled":""}>
                ${d.text}
              </button>
            `}).join("")}
        </div>
      `}

      <button class="btn btn-secondary" id="reshuffle-match-btn">
        ${c?"Play Again":"New Round"}
      </button>
    </div>
  `,e.querySelector("#reshuffle-match-btn").addEventListener("click",()=>{i.match=C(t.items),N(e,t,i,o)}),e.querySelectorAll(".match-tile").forEach(d=>{d.addEventListener("click",()=>{const p=d.dataset.tileId;Ye(p,e,t,i,o)})})}function Ye(e,t,i,o,n){const a=o.match;if(!(a.matchedIds.includes(e)||a.selectedIds.includes(e)||a.selectedIds.length>=2)&&(a.selectedIds.push(e),N(t,i,o,n),a.selectedIds.length===2)){const[s,l]=a.selectedIds,c=a.tiles.find(p=>p.id===s),d=a.tiles.find(p=>p.id===l);c.pairId===d.pairId?(a.matchedIds.push(s,l),a.selectedIds=[],setTimeout(()=>{a.matchedIds.length===a.tiles.length&&(n.awardStars(1),n.markTopicCompleted(i.id)),N(t,i,o,n)},250)):setTimeout(()=>{a.selectedIds=[],N(t,i,o,n)},700)}}function G(e,t,i,o){const n=i.quiz;(!n.questions||n.questions.length===0)&&(i.quiz=T(t.items));const a=i.quiz,s=a.questions[a.qIdx];if(a.qIdx>=a.questions.length||a.questions.length===0){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Quiz Finished!</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          Your score: ${a.score} / ${a.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="restart-quiz-btn">Try Again</button>
      </div>
    `,e.querySelector("#restart-quiz-btn").addEventListener("click",()=>{i.quiz=T(t.items),G(e,t,i,o)});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${a.qIdx+1} of ${a.questions.length} · Score: ${a.score}
      </div>

      <div class="quiz-prompt">
        Translate to Montenegrin:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">"${s.promptText}"</span>
      </div>

      <div class="quiz-options">
        ${s.options.map(d=>{let p="quiz-option";return a.answered&&(d===s.correctAnswer?p+=" correct":d===a.selected?p+=" incorrect":p+=" disabled"),`
            <button class="${p}" data-option="${d}" ${a.answered?"disabled":""}>
              ${d}
            </button>
          `}).join("")}
      </div>

      ${a.answered?`
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          ${a.qIdx+1===a.questions.length?"Show Results":"Next Question →"}
        </button>
      `:""}
    </div>
  `,e.querySelectorAll(".quiz-option").forEach(d=>{d.addEventListener("click",()=>{if(a.answered)return;const p=d.dataset.option;a.selected=p,a.answered=!0,p===s.correctAnswer&&(a.score++,o.awardStars(1)),G(e,t,i,o)})});const c=e.querySelector("#next-question-btn");c&&c.addEventListener("click",()=>{a.qIdx++,a.answered=!1,a.selected=null,a.qIdx>=a.questions.length&&o.markTopicCompleted(t.id),G(e,t,i,o)})}function D(e,t,i,o){const n=i.listen,a=n.order||t.items.map((c,d)=>d),s=t.items[a[n.idx]],l=i.recording;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${n.idx+1} of ${t.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 32px; text-align: center;">
        ${s.mn}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play pronunciation</button>

      <p style="font-size: 11px; color: var(--text-muted); max-width: 340px; text-align: center; line-height: 1.4;">
        Uses browser speech synthesis fallback voice.
      </p>

      <button class="btn btn-secondary" id="reveal-meaning-btn">
        ${n.revealed?"Hide Meaning":"Reveal Meaning"}
      </button>

      ${n.revealed?`
        <div style="font-size: 18px; color: var(--cyan); font-weight: 600; text-align: center; animation: fadeIn 0.2s;">
          "${s.en}"
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
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{o.speak(s.mn)}),e.querySelector("#reveal-meaning-btn").addEventListener("click",()=>{n.revealed=!n.revealed,D(e,t,i,o)}),e.querySelector("#prev-listen-btn").addEventListener("click",()=>{n.idx=(n.idx-1+t.items.length)%t.items.length,n.revealed=!1,ce(i),D(e,t,i,o)}),e.querySelector("#next-listen-btn").addEventListener("click",()=>{n.idx=(n.idx+1)%t.items.length,n.revealed=!1,ce(i),D(e,t,i,o)}),e.querySelector("#mic-record-btn").addEventListener("click",()=>{Ve(e,t,i,o)})}function ce(e){e.recording.url&&URL.revokeObjectURL(e.recording.url),e.recording={status:"idle",url:null,error:null,chunks:[],recorder:null}}async function Ve(e,t,i,o){const n=i.recording;if(n.status==="recording"){n.recorder&&n.recorder.stop();return}try{const a=await navigator.mediaDevices.getUserMedia({audio:!0}),s=new MediaRecorder(a),l=[];s.ondataavailable=c=>{c.data.size>0&&l.push(c.data)},s.onstop=()=>{const c=new Blob(l,{type:"audio/webm"}),d=URL.createObjectURL(c);a.getTracks().forEach(p=>p.stop()),i.recording={status:"ready",url:d,error:null,chunks:[],recorder:null},D(e,t,i,o)},s.start(),i.recording={status:"recording",url:null,error:null,chunks:l,recorder:s},D(e,t,i,o)}catch{i.recording={status:"idle",url:null,error:"Microphone access denied or unavailable on this device.",chunks:[],recorder:null},D(e,t,i,o)}}function Q(e,t,i,o){const n=i.dialogue,a=t.dialogue;n.readAs||(n.readAs=a.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${a.roles.map(s=>`
          <button class="btn btn-secondary btn-pill ${n.readAs===s?"btn-active":""}" data-role="${s}">
            Read as ${s}
          </button>
        `).join("")}
        <button class="btn btn-secondary btn-pill" id="toggle-translation-btn">
          ${n.showEn?"Hide Translations":"Show Translations"}
        </button>
      </div>

      <div class="dialogue-container">
        ${a.lines.map((s,l)=>`
            <div class="dialogue-bubble ${s.role===n.readAs?"active-reader":""}" style="animation: fadeIn 0.3s var(--transition-medium);">
              <div class="dialogue-header">
                <span>${s.role}</span>
                <button class="dialogue-play-btn" data-play-line="${l}">►</button>
              </div>
              <div style="font-size: 17px; font-weight: 600; margin-top: 4px; color: var(--text-main);">${s.mn}</div>
              ${n.showEn?`
                <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">"${s.en}"</div>
              `:""}
            </div>
          `).join("")}
      </div>

      <button class="btn btn-primary" id="finish-dialogue-btn" style="width: 100%; max-width: 480px; margin-top: 12px;">
        Finish Dialogue Practice
      </button>
    </div>
  `,e.querySelectorAll("[data-role]").forEach(s=>{s.addEventListener("click",()=>{n.readAs=s.dataset.role,Q(e,t,i,o)})}),e.querySelector("#toggle-translation-btn").addEventListener("click",()=>{n.showEn=!n.showEn,Q(e,t,i,o)}),e.querySelectorAll("[data-play-line]").forEach(s=>{s.addEventListener("click",()=>{const l=parseInt(s.dataset.playLine),c=a.lines[l].mn;o.speak(c)})}),e.querySelector("#finish-dialogue-btn").addEventListener("click",()=>{o.incrementDialogues(),o.markTopicCompleted(t.id),o.awardStars(2),o.goDashboard()})}function Ue(e,t,i){const o=t.activeLesson;if(!t.session||t.session.lessonId!==o.id){const l=Te(o,t.completedTopicIds);t.session={lessonId:o.id,stepIdx:0,steps:l,flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}}}const n=t.session,a=n.steps[n.stepIdx];e.innerHTML=`
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
      <div class="session-steps-bar" role="progressbar" aria-label="Lesson progress" aria-valuenow="${n.stepIdx+1}" aria-valuemin="1" aria-valuemax="${n.steps.length}">
        ${n.steps.map((l,c)=>`
          <div class="session-step-segment ${c<=n.stepIdx?"active":""}"></div>
        `).join("")}
      </div>

      <div id="session-step-mount"></div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#exit-btn").addEventListener("click",i.goDashboard);const s=e.querySelector("#session-step-mount");Je(s,a,t,i)}function Je(e,t,i,o){t.type==="warmup"?Qe(e,t,i,o):t.type==="discover"?K(e,t,i,o):t.type==="recall-flash"?he(e,t,i,o):t.type==="note"?Ke(e,t,i,o):t.type==="quiz"?Z(e,t,i,o):t.type==="match"?W(e,t,i,o):t.type==="dialogue"?ve(e,t,i,o):t.type==="listen"?X(e,t,i,o):t.type==="done"&&Xe(e,t,i,o)}function Qe(e,t,i,o){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 6px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
        ${t.items.map((n,a)=>`
          <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; border-radius: 12px; padding: 14px 16px;">
            <div>
              <div style="font-weight: 700; font-size: 16px;">${n.mn}</div>
              <div style="font-size: 13px; color: var(--text-muted);">${n.en}</div>
            </div>
            <button class="dialogue-play-btn" data-warmup-play="${a}">►</button>
          </div>
        `).join("")}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
    </div>
  `,e.querySelectorAll("[data-warmup-play]").forEach(n=>{n.addEventListener("click",()=>{const a=parseInt(n.dataset.warmup-play);o.speak(t.items[a].mn)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{o.nextSessionStep()})}function K(e,t,i,o){const n=i.session.flash,a=t.items[n.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Word ${n.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="discover-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Learning card, tap to flip">
        <div class="flashcard ${n.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            ${a.emoji?`<div class="flashcard-emoji">${a.emoji}</div>`:""}
            <div class="flashcard-text-mn" style="font-size: 28px;">${a.mn}</div>
            <div class="flashcard-hint">Tap to flip</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en" style="font-size: 18px;">${a.en}</div>
            <div class="flashcard-hint" style="color: var(--pink);">Tap to flip back</div>
          </div>
        </div>
      </button>

      <div style="display: flex; gap: 12px; margin-top: 8px;">
        <button class="btn btn-secondary" id="disc-prev-btn" ${n.idx===0?'disabled style="opacity:0.3; cursor:default;"':""}>←</button>
        <button class="btn btn-primary" id="disc-speak-btn">► Say It</button>
        <button class="btn btn-secondary" id="disc-next-btn" ${n.idx+1===t.items.length?'disabled style="opacity:0.3; cursor:default;"':""}>→</button>
      </div>

      ${n.idx+1===t.items.length?`
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      `:""}
    </div>
  `;const s=e.querySelector("#discover-card-wrapper");s.addEventListener("click",()=>{n.flipped=!n.flipped,s.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#disc-speak-btn").addEventListener("click",c=>{c.stopPropagation(),o.speak(a.mn)}),e.querySelector("#disc-prev-btn").addEventListener("click",()=>{n.idx>0&&(n.idx--,n.flipped=!1,K(e,t,i,o))}),e.querySelector("#disc-next-btn").addEventListener("click",()=>{n.idx+1<t.items.length&&(n.idx++,n.flipped=!1,K(e,t,i,o))});const l=e.querySelector("#next-step-btn");l&&l.addEventListener("click",()=>{o.nextSessionStep()})}function he(e,t,i,o){const n=i.session.flash,a=t.items[n.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div class="flashcard-hint" style="font-weight: 700;">Card ${n.idx+1} of ${t.items.length}</div>

      <button type="button" class="flashcard-wrapper" id="recall-card-wrapper" style="height: 240px; max-width: 400px;" aria-label="Recall card, tap to flip">
        <div class="flashcard ${n.flipped?"flipped":""}">
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-hint" style="margin-bottom: 16px; color: var(--cyan);">Can you recall the translation?</div>
            <div class="flashcard-text-mn" style="font-size: 28px;">${a.mn}</div>
            <div class="flashcard-hint">Tap to check meaning</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-text-en" style="font-size: 18px;">${a.en}</div>
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
  `;const s=e.querySelector("#recall-card-wrapper");s.addEventListener("click",()=>{n.flipped=!n.flipped,s.querySelector(".flashcard").classList.toggle("flipped")}),e.querySelector("#recall-speak-btn").addEventListener("click",c=>{c.stopPropagation(),o.speak(a.mn)});const l=()=>{n.idx+1<t.items.length?(n.idx++,n.flipped=!1,he(e,t,i,o)):o.nextSessionStep()};e.querySelector("#recall-again-btn").addEventListener("click",()=>{t.items.push(a),l()}),e.querySelector("#recall-gotit-btn").addEventListener("click",()=>{l()})}function Ke(e,t,i,o){e.innerHTML=`
    <div>
      <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 12px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">${t.subtitle}</p>

      <div class="glass" style="background: rgba(125, 211, 252, 0.08); border-color: var(--cyan); border-radius: 16px; padding: 20px; font-size: 16px; line-height: 1.6; color: var(--text-main); margin-bottom: 32px; white-space: pre-line;">
        ${t.note}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">I understand, start practice →</button>
    </div>
  `,e.querySelector("#next-step-btn").addEventListener("click",()=>{o.nextSessionStep()})}function Z(e,t,i,o){i.session.quiz||(i.session.quiz=t.quiz);const n=i.session.quiz,a=n.questions[n.qIdx];if(n.qIdx>=n.questions.length){e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 8px;">📊</div>
        <h4 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">Practice Complete</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">
          You scored: ${n.score} / ${n.questions.length} correct.
        </p>
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%;">Continue →</button>
      </div>
    `,e.querySelector("#next-step-btn").addEventListener("click",()=>{i.session.quiz=null,o.nextSessionStep()});return}e.innerHTML=`
    <div class="quiz-container">
      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Question ${n.qIdx+1} of ${n.questions.length} · Score: ${n.score}
      </div>

      <div class="quiz-prompt">
        Translate to Montenegrin:<br>
        <span style="font-family: var(--font-display); font-size: 24px; color: var(--cyan); font-weight: 800;">"${a.promptText}"</span>
      </div>

      <div class="quiz-options">
        ${a.options.map(c=>{let d="quiz-option";return n.answered&&(c===a.correctAnswer?d+=" correct":c===n.selected?d+=" incorrect":d+=" disabled"),`
            <button class="${d}" data-option="${c}" ${n.answered?"disabled":""}>
              ${c}
            </button>
          `}).join("")}
      </div>

      ${n.answered?`
        <button class="btn btn-primary" id="next-question-btn" style="width: 100%; margin-top: 12px;">
          Next Question →
        </button>
      `:""}
    </div>
  `,e.querySelectorAll(".quiz-option").forEach(c=>{c.addEventListener("click",()=>{if(n.answered)return;const d=c.dataset.option;n.selected=d,n.answered=!0,d===a.correctAnswer&&(n.score++,o.awardStars(1)),Z(e,t,i,o)})});const l=e.querySelector("#next-question-btn");l&&l.addEventListener("click",()=>{n.qIdx++,n.answered=!1,n.selected=null,Z(e,t,i,o)})}function W(e,t,i,o){i.session.match||(i.session.match=t.match);const n=i.session.match,a=n.matchedIds.length/2,s=n.tiles.length/2,l=a===s;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Pairs matched: ${a} / ${s}
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
          ${n.tiles.map(d=>{const p=n.matchedIds.includes(d.id),m=n.selectedIds.includes(d.id);let u="match-tile";return p?u+=" matched":m&&(u+=" selected"),`
              <button class="${u}" data-tile-id="${d.id}" ${p?"disabled":""}>
                ${d.text}
              </button>
            `}).join("")}
        </div>
      `}
    </div>
  `,e.querySelectorAll(".match-tile").forEach(d=>{d.addEventListener("click",()=>{const p=d.dataset.tileId;Ze(p,e,t,i,o)})});const c=e.querySelector("#next-step-btn");c&&c.addEventListener("click",()=>{i.session.match=null,o.nextSessionStep()})}function Ze(e,t,i,o,n){const a=o.session.match;if(!(a.matchedIds.includes(e)||a.selectedIds.includes(e)||a.selectedIds.length>=2)&&(a.selectedIds.push(e),W(t,i,o,n),a.selectedIds.length===2)){const[s,l]=a.selectedIds,c=a.tiles.find(p=>p.id===s),d=a.tiles.find(p=>p.id===l);c.pairId===d.pairId?(a.matchedIds.push(s,l),a.selectedIds=[],setTimeout(()=>{a.matchedIds.length===a.tiles.length&&n.awardStars(1),W(t,i,o,n)},250)):setTimeout(()=>{a.selectedIds=[],W(t,i,o,n)},700)}}function ve(e,t,i,o){const n=i.session.dialogue,a=t.dialogue;n.readAs||(n.readAs=a.roles[0]),e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        ${a.roles.map(s=>`
          <button class="btn btn-secondary btn-pill ${n.readAs===s?"btn-active":""}" data-role="${s}">
            Read as ${s}
          </button>
        `).join("")}
      </div>

      <div class="dialogue-container" style="width: 100%;">
        ${a.lines.map((s,l)=>`
            <div class="dialogue-bubble ${s.role===n.readAs?"active-reader":""}">
              <div class="dialogue-header">
                <span>${s.role}</span>
                <button class="dialogue-play-btn" data-play-line="${l}">►</button>
              </div>
              <div style="font-size: 17px; font-weight: 600; margin-top: 4px; color: var(--text-main);">${s.mn}</div>
              <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">"${s.en}"</div>
            </div>
          `).join("")}
      </div>

      <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 12px;">
        Dialogue Complete →
      </button>
    </div>
  `,e.querySelectorAll("[data-role]").forEach(s=>{s.addEventListener("click",()=>{n.readAs=s.dataset.role,ve(e,t,i,o)})}),e.querySelectorAll("[data-play-line]").forEach(s=>{s.addEventListener("click",()=>{const l=parseInt(s.dataset.playLine);o.speak(a.lines[l].mn)})}),e.querySelector("#next-step-btn").addEventListener("click",()=>{o.incrementDialogues(),o.awardStars(2),o.nextSessionStep()})}function X(e,t,i,o){const n=i.session.flash,a=t.items[n.idx];e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
      <h3 style="font-size: 22px; font-weight: 800; text-align: center; margin-bottom: 4px;">${t.title}</h3>
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 8px;">${t.subtitle}</p>

      <div style="font-size: 13px; color: var(--text-muted); font-weight: 700;">
        Item ${n.idx+1} of ${t.items.length}
      </div>

      <div style="font-family: var(--font-display); font-weight: 800; font-size: 28px; text-align: center;">
        ${a.mn}
      </div>

      <button class="btn btn-primary" id="play-audio-btn">► Play Pronunciation</button>

      <div style="font-size: 15px; color: var(--text-muted); text-align: center; margin: 4px 0;">
        Meaning: <span style="color: var(--cyan); font-weight: 600;">"${a.en}"</span>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 12px;">
        <button class="btn btn-secondary" id="listen-prev-btn" ${n.idx===0?'disabled style="opacity:0.3; cursor:default;"':""}>←</button>
        <button class="btn btn-secondary" id="listen-next-btn" ${n.idx+1===t.items.length?'disabled style="opacity:0.3; cursor:default;"':""}>→</button>
      </div>

      ${n.idx+1===t.items.length?`
        <button class="btn btn-primary" id="next-step-btn" style="width: 100%; margin-top: 16px;">Continue →</button>
      `:""}
    </div>
  `,e.querySelector("#play-audio-btn").addEventListener("click",()=>{o.speak(a.mn)}),e.querySelector("#listen-prev-btn").addEventListener("click",()=>{n.idx>0&&(n.idx--,X(e,t,i,o))}),e.querySelector("#listen-next-btn").addEventListener("click",()=>{n.idx+1<t.items.length&&(n.idx++,X(e,t,i,o))});const s=e.querySelector("#next-step-btn");s&&s.addEventListener("click",()=>{o.nextSessionStep()})}function Xe(e,t,i,o){const n=i.activeLesson,a=n.topicId?y(n.topicId):null;e.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center; padding: 40px 0;">
      <div style="font-size: 52px; animation: bounce 1s infinite alternate;">🎉</div>
      <h3 style="font-family: var(--font-display); font-weight: 800; font-size: 26px; letter-spacing: -0.5px;">Nailed It!</h3>
      <p style="color: var(--text-muted); font-size: 15px; max-width: 360px; line-height: 1.6;">
        You finished the lesson: <span style="color: var(--cyan); font-weight: 600;">"${n.title}"</span>.
        ${a&&n.type==="checkpoint"?`<br>Topic <strong>${a.title}</strong> has been marked as complete.`:""}
      </p>

      <div class="badge-pill" style="border-color: var(--lime); color: var(--lime); font-size: 14px; font-weight: 800; padding: 10px 20px;">
        ★ Voyage Lesson Completed!
      </div>

      <button class="btn btn-primary" id="finish-lesson-btn" style="margin-top: 12px; padding: 14px 32px;">
        Back to Dashboard
      </button>
    </div>
  `,e.querySelector("#finish-lesson-btn").addEventListener("click",()=>{o.completeLesson(n.id)})}function et(e,t,i){const o={};for(let n=0;n<10;n++)o[n]=b.filter(a=>a.month===n);e.innerHTML=`
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
        ${Object.keys(o).map(n=>{const a=parseInt(n)+1,s=o[n],l=s.every(p=>t.completedLessons.includes(p.id)),c=s.some(p=>t.completedLessons.includes(p.id));let d="var(--text-muted)";return l?d="var(--lime)":(c||t.completedLessons.length/20===a-1)&&(d="var(--cyan)"),`
            <div style="border-left: 2px solid ${d}; padding-left: 20px; margin-bottom: 8px;">
              <h3 style="font-size: 16px; margin-bottom: 12px; color: ${d}; text-transform: uppercase; letter-spacing: 0.05em;">
                Month ${a} — ${$e[n]}
              </h3>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${s.filter(p=>p.number%5===1).map(p=>{const m=p.week,u=b.filter(v=>v.week===m),g=u.every(v=>t.completedLessons.includes(v.id)),w=u.some(v=>!t.completedLessons.includes(v.id))&&u[0].number<=t.completedLessons.length+1,$=p.topicId?y(p.topicId):null;let j="Planned",x="var(--text-muted)";return g?(j="✓ Completed",x="var(--lime)"):w&&(j="Active Week",x="var(--cyan)"),`
                    <div class="glass" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; border-radius: 12px; padding: 14px 18px; cursor: pointer; transition: all var(--transition-fast);" data-week="${m}">
                      <div>
                        <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 2px;">
                          Week ${m%4===0?"4 (Integration)":`Week ${m%4}: ${$?$.title:"Mixed review"}`}
                        </h4>
                        <p style="color: var(--text-muted); font-size: 13px;">
                          Lessons ${u[0].number} – ${u[4].number}
                        </p>
                      </div>
                      <div style="font-size: 13px; font-weight: 800; color: ${x};">${j}</div>
                    </div>
                  `}).join("")}
              </div>
            </div>
          `}).join("")}
      </div>
    </main>
  `,e.querySelector("#logo-btn").addEventListener("click",i.goDashboard),e.querySelector("#back-btn").addEventListener("click",i.goDashboard),e.querySelectorAll("[data-week]").forEach(n=>{n.addEventListener("click",()=>{const a=parseInt(n.dataset.week),s=b.filter(c=>c.week===a),l=s.find(c=>!t.completedLessons.includes(c.id))||s[0];i.startSession(l)})})}const r={profile:null,isGuide:!1,screen:"profile-select",stars:0,streakDays:0,completedTopicIds:[],completedLessons:[],activityDates:[],dialoguesDone:0,topicId:null,activity:"flashcards",calendarMonth:0,activeLesson:null,session:null,flash:{order:null,idx:0,flipped:!1},match:{tiles:[],selectedIds:[],matchedIds:[]},quiz:{questions:[],qIdx:0,score:0,selected:null,answered:!1},listen:{order:null,idx:0,revealed:!1},dialogue:{readAs:null,showEn:!1},recording:{status:"idle",url:null,error:null,chunks:[],recorder:null}},L=document.getElementById("app");function tt(e){if(!("speechSynthesis"in window))return;const t="hr-HR",i=new SpeechSynthesisUtterance(e);i.lang=t,i.rate=.85,window.speechSynthesis.cancel(),window.speechSynthesis.speak(i)}const E={goDashboard:()=>{r.screen="dashboard",J(),f()},goCurriculum:()=>{r.screen="curriculum",J(),f()},switchProfile:e=>{De(e),r.profile=e,_(e),r.screen="dashboard",J(),f()},openTopic:e=>{r.topicId=e,r.screen="topic",r.activity="flashcards",r.flash={order:null,idx:0,flipped:!1},r.match={tiles:[],selectedIds:[],matchedIds:[]},r.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},r.listen={order:null,idx:0,revealed:!1},r.dialogue={readAs:null,showEn:!0},f()},setActivity:e=>{r.activity=e,r.flash={order:null,idx:0,flipped:!1},r.match={tiles:[],selectedIds:[],matchedIds:[]},r.quiz={questions:[],qIdx:0,score:0,selected:null,answered:!1},r.listen={order:null,idx:0,revealed:!1},r.dialogue={readAs:null,showEn:!0},f()},startSession:e=>{r.activeLesson=e,r.screen="session",r.session=null,f()},nextSessionStep:()=>{r.session&&(r.session.stepIdx++,r.session.flash={idx:0,flipped:!1},r.session.quiz=null,r.session.match=null,f())},completeLesson:e=>{Ne(r.profile,e);const t=r.activeLesson.topicId;t&&r.activeLesson.type==="checkpoint"&&de(r.profile,t),_(r.profile),E.goDashboard()},markTopicCompleted:e=>{de(r.profile,e),_(r.profile)},awardStars:e=>{Pe(r.profile,e),_(r.profile)},incrementDialogues:()=>{Re(r.profile),_(r.profile)},speak:tt,startMixedReview:()=>{const t=r.completedTopicIds.map(i=>y(i)).filter(Boolean).flatMap(i=>i.items);t.length!==0&&(r.activeLesson={id:"mixed-review",title:"Mixed Review",detail:"Practice from all completed topics",topicId:null,month:0},r.screen="session",r.session={lessonId:"mixed-review",stepIdx:0,steps:[{type:"quiz",title:"Review Quiz",subtitle:"Test your retention",quiz:T(t,8)},{type:"match",title:"Review Match",subtitle:"Match terms quickly",match:C(t,8)},{type:"done",title:"Review Finished!",subtitle:"You completed your mixed review!"}],flash:{idx:0,flipped:!1},quiz:null,match:null,dialogue:{readAs:null,showEn:!0}},f())}};function J(){r.activeLesson=null,r.session=null}function _(e){const t=M(e);t&&(r.stars=t.stars,r.streakDays=t.streakDays,r.completedTopicIds=t.completedTopicIds,r.completedLessons=t.completedLessons,r.activityDates=t.activityDates,r.dialoguesDone=t.dialoguesDone,r.isGuide=t.isGuide)}function f(){if(L.innerHTML="",!r.profile){r.screen="profile-select",We(L,e=>{E.switchProfile(e)});return}if(r.screen==="dashboard"){Be(L,r,E);const e=L.querySelector("#calendar-mount");e&&Oe(e,r,()=>{r.calendarMonth=Math.max(0,r.calendarMonth-1),f()},()=>{r.calendarMonth=Math.min(9,r.calendarMonth+1),f()})}else r.screen==="topic"?ue(L,r,E):r.screen==="session"?Ue(L,r,E):r.screen==="curriculum"&&et(L,r,E)}function nt(){const e=ze();if(e){r.profile=e,_(e),r.screen="dashboard";const t=b.find(i=>!r.completedLessons.includes(i.id));r.calendarMonth=t?t.month:0}else r.screen="profile-select";f()}window.addEventListener("DOMContentLoaded",nt);
