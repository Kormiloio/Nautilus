// Deployment-owned exporter: stdout SQL only; no credentials or DB connections.
import { createServer } from 'vite';
import { createHash } from 'node:crypto';
const options=Object.fromEntries(process.argv.slice(2).map(arg=>arg.replace(/^--/,"").split("=")));
const vite=await createServer({server:{middlewareMode:true},optimizeDeps:{noDiscovery:true,entries:[]},appType:'custom',logLevel:'error'});
try {
  const engine=await vite.ssrLoadModule('/engine/learning-engine.js');
  const {buildFamilyPlaySteps}=await vite.ssrLoadModule('/engine/family-play-session.js');
  const {toVerifiedExercises}=await vite.ssrLoadModule('/engine/verified-curriculum.js');
  const quote=value => value==null ? 'null' : "'"+String(value).replaceAll("'","''")+"'";
  const revision=2;
  const keyFor=(pack,lesson,mode)=>[pack.id,pack.version,lesson.id,mode,revision].join(':');
  function publish(pack,lesson,mode,steps) {
    const key=keyFor(pack,lesson,mode),hash=createHash('sha256').update(key).digest('hex');
    const id=[hash.slice(0,8),hash.slice(8,12),hash.slice(12,16),hash.slice(16,20),hash.slice(20,32)].join('-');
    const payload=quote(JSON.stringify(toVerifiedExercises(steps)));
    console.log(`do $catalog$ begin
      if exists(select 1 from public.verified_lesson_catalog where id='${id}' and
        (pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises,topic_id,is_checkpoint)
        is distinct from (${quote(pack.id)},${quote(pack.version)},${quote(lesson.id)},${revision},${quote(mode)},
          ${lesson.number||1},${payload}::jsonb,${quote(lesson.topicId)},${lesson.type==='checkpoint'}))
        then raise exception 'Content changed: publish a new revision for ${key}'; end if;
      insert into public.verified_lesson_catalog(id,pack_id,pack_version,lesson_id,revision,mode,voyage_position,exercises,topic_id,is_checkpoint)
      values('${id}',${quote(pack.id)},${quote(pack.version)},${quote(lesson.id)},${revision},${quote(mode)},${lesson.number||1},${payload},${quote(lesson.topicId)},${lesson.type==='checkpoint'})
      on conflict(pack_id,pack_version,lesson_id,revision,mode) do nothing;
    end $catalog$;`);
  }
  console.log('begin;');
  for(const pack of engine.getAvailableLanguagePacks()) {
    if(options.pack && pack.id!==options.pack) continue;
    engine.setActiveLanguagePack(pack.id);
    for(const lesson of engine.VOYAGE_LESSONS) for(const mode of ['individual','family']) {
      if(options.mode && options.mode!==mode) continue;
      if(options.start && (lesson.number||1)<Number(options.start)) continue;
      if(options.end && (lesson.number||1)>Number(options.end)) continue;
      const key=keyFor(pack,lesson,mode);
      const steps=mode==='family' ? buildFamilyPlaySteps(lesson,engine.getTopic(lesson.topicId)||engine.getTopics()[0],key)
        : engine.generateSession(lesson,[],{random:engine.createSeededRandom(key)});
      publish(pack,lesson,mode,steps);
    }
    if(!options.mode || options.mode==="practice") for(const topic of engine.ALL_TOPICS) for(const activity of ['flashcards','quiz','match','listen','dialogue']) {
      if(activity==='dialogue'&&!topic.dialogue) continue;
      const lesson={id:'practice:'+topic.id+':'+activity,topicId:topic.id};
      const random=engine.createSeededRandom(keyFor(pack,lesson,'practice'));
      const steps=activity==='quiz' ? [{type:'quiz',title:topic.title,quiz:engine.buildQuiz(topic.items,8,random)}]
        : activity==='match' ? [{type:'match',title:topic.title,match:engine.buildMatch(topic.items,6,random)}]
        : activity==='dialogue' ? [{type:'dialogue',title:topic.title,dialogue:topic.dialogue}]
        : topic.items.map(item=>({type:'discover',title:topic.title,items:[item]}));
      publish(pack,lesson,'practice',steps);
    }
  }
  console.log('commit;');
} finally { await vite.close(); }
