import {escapeHtml,renderLanguageRun} from '../engine/language-runs.js';
import {LANGUAGE_PACK,getTopic} from '../engine/learning-engine.js';
import {getImmersiveLessonScene} from './lesson-visuals.js';
function getTopicForPractice(state){return getTopic(state.verifiedAttempt?.topicId);}
const interactions=new Map();
const colors=['#b6e746','#71d8dc','#8db8ff','#c8a4ff','#ffafd3','#ffd380'];
export function renderVerifiedLessonView(container,state,actions) {
  const attempt=state.verifiedAttempt, family=state.screen==='family-play';
  const session=state.familyPlayState?.activeSession;
  const feedback=state.verifiedFeedback?.attemptId===attempt?.id ? state.verifiedFeedback : null;
  const index=feedback ? feedback.index : attempt?.exerciseIndex || 0;
  const step=attempt?.exercises[index];
  const done=attempt?.status==='completed'&&!feedback;
  const receipt=attempt?.receipts.find(r=>r.index===index);
  const key=attempt?.id+':'+index+':'+state.sessionUser?.id;
  if(!interactions.has(key)) interactions.set(key,{pairs:{},selected:null,card:0,revealed:false});
  const ui=interactions.get(key);
  const scene=getImmersiveLessonScene(attempt?.topicId||state.activeLesson?.topicId);
  const disabled=state.verifiedBusy||Boolean(state.verifiedPending)||Boolean(receipt)||Boolean(feedback)||session?.status==='paused';
  const run=(text,side='target')=>renderLanguageRun(text||'',side,LANGUAGE_PACK);
  let content='';
  if(state.verifiedLoading) content='<h2>Loading verified lesson…</h2><p>Getting your saved exercise state.</p>';
  else if(!attempt&&!family) content='<h2>Lesson could not open</h2><p>Return to the dashboard and try again once the connection or published curriculum is available.</p>';
  else if(!attempt) content='<h2>Session needs a restart</h2><p>This older session has no verified exercise record. A parent can end it and start a fresh lesson. Previously earned progress is kept.</p>';
  else if(done) content='<h2>Lesson complete!</h2><p>Your results have been saved by the server.</p>';
  else if(step?.kind==='quiz') content='<h2>'+run(step.prompt,'support')+'</h2><div class="verified-choices">'+step.choices.map((choice,i)=>{
    const selected=(feedback?.answer??receipt?.answer)===choice;
    const correctAnswer=feedback?.correctAnswer??receipt?.correctAnswer;
    const result=correctAnswer===choice?'correct':selected?'incorrect':'';
    return '<button class="btn btn-secondary '+result+'" data-choice="'+i+'" '+(disabled?'disabled':'')+'>'+run(choice)+(selected?' <small>Your answer</small>':'')+'</button>';
  }).join('')+'</div>';
  else if(step?.kind==='match') {
    const matched=receipt?.answer||ui.pairs;
    content='<h2>'+escapeHtml(step.title||'Match the pairs')+'</h2><p>Tap a word, then its meaning. Submit when every pair is connected.</p><div class="verified-match">'+['targets','supports'].map(side=>'<div>'+step[side].map((tile,i)=>{
      const pair=side==='targets'?tile.id:Object.keys(matched).find(id=>matched[id]===tile.id);
      const n=step.targets.findIndex(t=>t.id===pair);
      const color=n>=0?colors[n%colors.length]:null;
      return '<button class="btn btn-secondary" data-tile="'+escapeHtml(tile.id)+'" data-side="'+side+'" '+(disabled?'disabled':'')+' style="'+(color?'border-color:'+color+';background:'+color+'22;':'')+(ui.selected===tile.id?'outline:3px solid #fff;':'')+'">'+run(tile.text,side==='targets'?'target':'support')+(pair?' <small>Pair '+(n+1)+'</small>':'')+'</button>';
    }).join('')+'</div>').join('')+'</div><p>'+Object.keys(matched).length+' / '+step.targets.length+' pairs selected. Tap a paired tile to change it.</p>';
  } else if(step) {
    const items=step.items||[],item=items[ui.card];
    content='<h2>'+escapeHtml(step.title||'Practice together')+'</h2>'+(step.note?'<p>'+escapeHtml(step.note)+'</p>':'');
    if(item) content+='<p>Card '+(ui.card+1)+' of '+items.length+'</p><button class="verified-card" data-reveal>'+run(item.targetText)+(ui.revealed?'<small>'+run(item.supportText,'support')+'</small>':'<small>Tap to reveal</small>')+'</button><div class="verified-card-controls"><button class="btn btn-secondary" data-prev '+(ui.card===0?'disabled':'')+'>Previous card</button><button class="btn btn-secondary" data-speak>Hear it</button><button class="btn btn-secondary" data-next '+(ui.card>=items.length-1?'disabled':'')+'>Next card</button></div>';
    content+='<p>'+escapeHtml(step.confirmation||'Confirm that you completed the practice.')+'</p>';
  }
  const feedbackCorrect=feedback?.correct??receipt?.correct;
  const showResult=Boolean(feedback||receipt)&&step?.kind!=='self_report';
  const status=showResult?'<p role="status" class="verified-feedback '+(feedbackCorrect?'correct':'incorrect')+'">'+(feedbackCorrect?'Correct!':step?.kind==='match'?'Not quite—check your pairs and try again.':'Not quite. Correct answer: '+escapeHtml(feedback?.correctAnswer??receipt?.correctAnswer))+'</p>':'';
  const people=attempt?.people||[];
  container.innerHTML='<style>.verified-world{min-height:calc(100dvh - 72px);padding:24px 16px 100px;background-size:cover;background-position:center}.verified-panel{max-width:900px;margin:auto;padding:clamp(16px,4vw,38px);background:#091822ed;border:1px solid #66818e;border-radius:24px}.verified-panel h2{font-size:clamp(24px,5vw,40px);margin:16px 0}.verified-panel p{margin:14px 0}.verified-choices,.verified-match{display:grid;grid-template-columns:1fr 1fr;gap:12px}.verified-match>div{display:grid;gap:10px}.verified-choices button,.verified-match button{white-space:normal;min-height:56px}.verified-card{display:block;width:100%;min-height:180px;background:#172534;color:white;border:1px solid #66818e;border-radius:20px;padding:20px;font-size:30px}.verified-card small{display:block;font-size:18px;margin-top:18px}.verified-card-controls,.verified-roster{display:flex;flex-wrap:wrap;gap:10px;margin:12px 0}.verified-footer{position:sticky;bottom:0;background:#0a141fee;padding:14px 0 calc(14px + env(safe-area-inset-bottom));display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}.verified-panel .correct{border-color:#b6e746;color:#b6e746}.verified-panel .incorrect{border-color:#ff91ab;color:#ff91ab}.verified-panel small{display:block}.verified-roster span{border:1px solid #66818e;padding:6px 12px;border-radius:18px}.verified-panel button:focus-visible{outline:3px solid white}@media(max-width:500px){.verified-world{padding:12px 8px 40px}.verified-card-controls .btn{font-size:13px;padding:10px}.verified-match .btn{font-size:14px;padding:10px}.verified-footer>.btn{flex:1}}</style>'+
    '<header class="navbar"><strong>Nautilus · '+(family?'Family Play':attempt?.mode==='practice'?'Practice':'Voyage lesson')+'</strong><button class="btn btn-secondary" data-exit>Dashboard</button></header>'+
    '<main class="verified-world" '+(scene?'style="background-image:url('+escapeHtml(scene.src)+')"':'')+'><section class="verified-panel">'+
    (attempt&&!done?'<p>Exercise '+(Math.min(index+1,attempt.exercises.length))+' of '+attempt.exercises.length+'</p>':'')+
    (attempt?.mode==='practice'?'<div class="verified-card-controls">'+['flashcards','match','quiz','listen',...(getTopicForPractice(state)?.dialogue?['dialogue']:[])].map(activity=>'<button class="btn btn-secondary" data-practice="'+activity+'">'+activity+'</button>').join('')+'</div>':'')+
    (family?'<div class="verified-roster">'+people.map(p=>'<span>'+escapeHtml(p.name)+(p.locked?' ✓ Locked in':' · Choosing')+'</span>').join('')+'</div>':'')+
    (state.verifiedError?'<p role="alert" class="incorrect">'+escapeHtml(state.verifiedError)+'</p>':'')+content+status+
    '<div class="verified-footer">'+(state.verifiedPending&&!state.verifiedBusy?'<button class="btn btn-primary" data-retry>Retry saved answer</button>':'')+(done?'<button class="btn btn-primary" data-exit>Back to dashboard</button>':!attempt?(session?.controllingAdult===state.sessionUser?.id?'<button class="btn btn-primary" data-cancel>End older session</button>':''):
      feedback?'<button class="btn btn-primary" data-continue>Continue</button>':receipt?'<span role="status">Locked in. Waiting for everyone…</span>':step?.kind==='quiz'?'':
      '<button class="btn btn-primary" data-submit '+(disabled||(step?.kind==='match'&&Object.keys(ui.pairs).length!==step.targets.length)?'disabled':'')+'>'+(state.verifiedBusy?'Saving…':step?.kind==='match'?'Check my matches':'I finished · Lock in')+'</button>')+
    (family&&attempt&&session?.controllingAdult===state.sessionUser?.id?'<button class="btn btn-secondary" data-pause>'+ (session.status==='paused'?'Resume':'Pause')+'</button>':'')+'</div></section></main>';
  container.querySelectorAll('[data-practice]').forEach(b=>b.onclick=()=>{state.topicId=attempt.topicId;actions.setActivity(b.dataset.practice);});
  container.querySelectorAll('[data-exit]').forEach(b=>b.onclick=actions.exitVerifiedLesson);
  container.querySelector('[data-cancel]')?.addEventListener('click',()=>actions.controlFamilySession('cancelled',null));
  container.querySelector('[data-pause]')?.addEventListener('click',()=>actions.controlFamilySession(session.status==='paused'?'live':'paused',null));
  container.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>actions.submitVerifiedAnswer(index,step.choices[Number(b.dataset.choice)]));
  container.querySelector('[data-retry]')?.addEventListener('click',()=>actions.submitVerifiedAnswer(state.verifiedPending.index,state.verifiedPending.response));
  container.querySelector('[data-submit]')?.addEventListener('click',()=>actions.submitVerifiedAnswer(index,step.kind==='match'?{...ui.pairs}:true));
  container.querySelector('[data-continue]')?.addEventListener('click',actions.continueVerifiedLesson);
  const redraw=()=>renderVerifiedLessonView(container,state,actions);
  container.querySelector('[data-reveal]')?.addEventListener('click',()=>{ui.revealed=!ui.revealed;redraw();});
  container.querySelector('[data-prev]')?.addEventListener('click',()=>{ui.card--;ui.revealed=false;redraw();});
  container.querySelector('[data-next]')?.addEventListener('click',()=>{ui.card++;ui.revealed=false;redraw();});
  container.querySelector('[data-speak]')?.addEventListener('click',()=>actions.speak(step.items[ui.card].targetText));
  container.querySelectorAll('[data-tile]').forEach(b=>b.onclick=()=>{
    const id=b.dataset.tile;
    if(b.dataset.side==='targets') {
      if(ui.pairs[id]) delete ui.pairs[id];
      ui.selected=id;
    } else {
      const old=Object.keys(ui.pairs).find(key=>ui.pairs[key]===id);
      if(old) delete ui.pairs[old];
      if(ui.selected){ui.pairs[ui.selected]=id;ui.selected=null;}
    }
    redraw();
  });
}
