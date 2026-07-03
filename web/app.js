const COURSES_DATA = [
{id:"pronunciation",title:"粤语发音入门",icon:"🎙",color:"#FF6B6B",cat:"pronunciation",diff:"beginner",premium:false,order:1,desc:"掌握粤语六个声调和声韵母系统",lessons:[
{id:"pr1",title:"声调入门",order:1,dialogues:[{id:"d1",sp:"老师",ca:"粵語有六個聲調",jp:"Jyut6 jyu5 jau5 luk6 go3 seng1 diu6",zh:"粤语有六个声调"},{id:"d2",sp:"老师",ca:"第一聲係高平，第二聲係高升",zh:"第一声高平第二声高升"}],voc:[{ca:"詩",jp:"si1",zh:"诗",ex:"呢首詩寫得好好"},{ca:"史",jp:"si2",zh:"史",ex:"中國有悠久嘅歷史"}],tips:["粤语有六个声调","声调不同意思完全不同"],pr:[{ca:"你好",jp:"nei5 hou2",zh:"你好"},{ca:"早晨",jp:"zou2 san4",zh:"早上好"}]},
{id:"pr2",title:"声母学习",order:2,dialogues:[],voc:[],tips:[],pr:[]},{id:"pr3",title:"韵母学习",order:3,dialogues:[],voc:[],tips:[],pr:[]}]},
{id:"social",title:"社交礼仪",icon:"🤝",color:"#4ECDC4",cat:"social",diff:"beginner",premium:false,order:2,desc:"学会打招呼、介绍、道歉",lessons:[
{id:"sc1",title:"打招呼",order:1,dialogues:[{id:"sd1",sp:"A",ca:"你好！",jp:"nei5 hou2",zh:"你好！"},{id:"sd2",sp:"B",ca:"你叫咩名呀？",jp:"nei5 giu3 me1 meng2 aa3",zh:"你叫什么名字？"},{id:"sd3",sp:"A",ca:"我叫小明，好開心識到你",jp:"ngo5 giu3 siu2 ming4 hou2 hoi1 sam1 sik1 dou3 nei5",zh:"我叫小明很高兴认识你"},{id:"sd4",sp:"B",ca:"早晨！",jp:"zou2 san4",zh:"早上好！"}],
voc:[{ca:"你好",jp:"nei5 hou2",zh:"你好",ex:"你好請問你貴姓？"},{ca:"早晨",jp:"zou2 san4",zh:"早上好",ex:"早晨今日天氣幾好"},{ca:"唔該",jp:"m4 goi1",zh:"谢谢",ex:"唔該你幫我開門"},{ca:"對唔住",jp:"deoi3 m4 zyu6",zh:"对不起",ex:"對唔住我遲到咗"}],
tips:["早晨只在早上使用","唔該用于请求帮助的感谢"],pr:[{ca:"你好",jp:"nei5 hou2",zh:"你好"}]},
{id:"sc2",title:"道歉与感谢",order:2,dialogues:[{id:"sd5",sp:"A",ca:"對唔住我整爛咗你本書",jp:"deoi3 m4 zyu6 ngo5 zing2 laan6 zo2 nei5 bun2 syu1",zh:"对不起我弄坏了你的书"}],voc:[],tips:[],pr:[]},
{id:"sc3",title:"邀请与约会",order:3,dialogues:[{id:"sd6",sp:"A",ca:"你聽日得唔得閒？",jp:"nei5 ting1 jat6 dak1 m4 dak1 haan4",zh:"你明天有空吗？"}],voc:[],tips:[],pr:[]}]}
];
const CATS = ["pronunciation","social","daily","workplace","school","travel","phone","culture","slang","grammar"];
const CAT_NAMES = {pronunciation:"发音训练",social:"社交礼仪",daily:"生活用语",workplace:"职场粤语",school:"校园粤语",travel:"旅行粤语",phone:"电话聊天",culture:"香港文化",slang:"俚语俗语",grammar:"语法基础"};
const CAT_ICONS = {pronunciation:"🎙",social:"🤝",daily:"🏠",workplace:"💼",school:"📚",travel:"✈️",phone:"📞",culture:"⭐",slang:"💬",grammar:"📝"};
const AI_DLGS = {free:["你好！我係你嘅粵語AI陪練。","你今日做咗啲咩呀？","加油你越講越好！"],restaurant:["你想食啲咩呀？","要唔要杯凍奶茶？"],shopping:["呢件衫好襯你喎！","你想買啲咩？"],travel:["去香港旅行好正！","香港夜景好靚㗎！"],work:["返工辛唔辛苦呀？","開會要講粵語。"],phone:["喂請問你搵邊位？","唔好意思打錯電話。"],friend:["你聽日得唔得閒？","尋日我去咗行街。"]};
const VIP_PLANS=[{type:"trial",price:"¥1.00",display:"1元试用",desc:"3天试用全部课程和AI陪练"},{type:"monthly",price:"¥9.90",display:"9.9元/月",desc:"月度订阅·解锁全部课程"},{type:"lifetime",price:"¥99.00",display:"99元永久",desc:"一次性购买·永久解锁全部内容"}];
let S={isVip:false,cur:null,di:0,st:true,av:"female",as:"free",msgs:[],done:{},str:0,xp:0,lv:1,tt:0};
function sv(){try{localStorage.setItem("ys",JSON.stringify(S))}catch(e){}}
function ld(){try{const d=localStorage.getItem("ys");if(d)Object.assign(S,JSON.parse(d))}catch(e){}}
ld();
function rn(){
  rHome();rCourses();rProfile();rShop();
  document.getElementById("vipPromo").style.display=S.isVip?"none":"block";
  document.getElementById("streakText").textContent="🔥 已连续学习 "+S.str+" 天";
  if(S.isVip){document.getElementById("bannerTitle").textContent="VIP会员";document.getElementById("bannerDesc").textContent="尊享全部课程与AI陪练";}
}
function rHome(){
  const t=COURSES_DATA.reduce((s,c)=>s+c.lessons.length,0);const d=Object.keys(S.done).length;
  const statsHtml="<div class=\"stat-card\"><div class=\"num\">"+d+"</div><div class=\"lbl\">已学</div></div>"+
    "<div class=\"stat-card\"><div class=\"num\">"+S.xp+"</div><div class=\"lbl\">经验</div></div>"+
    "<div class=\"stat-card\"><div class=\"num\">"+S.str+"</div><div class=\"lbl\">连续</div></div>"+
    "<div class=\"stat-card\"><div class=\"num\">"+(t>0?Math.round(d/t*100):0)+"%</div><div class=\"lbl\">完成</div></div>";
  document.getElementById("statsRow").innerHTML=statsHtml;
  let gridHtml="";
  for(let i=0;i<8;i++){const c=CATS[i];gridHtml+="<div class=\"grid-item\" onclick=\"shC('"+c+"')\"><span class=\"emoji\">"+CAT_ICONS[c]+"</span><span>"+CAT_NAMES[c]+"</span></div>";}
  document.getElementById("categoryGrid").innerHTML=gridHtml;
}
function rCourses(f){
  let chips="<button class=\"scenario-chip "+(f?"":"active")+"\" onclick=\"shC('')\">全部</button>";
  for(let i=0;i<CATS.length;i++){const c=CATS[i];chips+="<button class=\"scenario-chip "+(c==f?"active":"")+"\" onclick=\"shC('"+c+"')\">"+CAT_NAMES[c]+"</button>";}
  document.getElementById("courseChips").innerHTML=chips;
  const cs=f?COURSES_DATA.filter(function(c){return c.cat===f;}):COURSES_DATA;
  let listHtml="";
  for(let i=0;i<cs.length;i++){const c=cs[i];listHtml+="<div class=\"course-card\" onclick=\"shCD('"+c.id+"')\"><div class=\"course-icon\" style=\"background:"+c.color+"22\">"+c.icon+"</div><div class=\"course-info\"><h3>"+c.title+(c.premium&&!S.isVip?"<span class=\"lock-badge\">🔒</span>":"")+"</h3><p>"+c.desc+"</p></div><div class=\"arrow\">›</div></div>";}
  document.getElementById("courseList").innerHTML=listHtml;
}
function shC(f){document.getElementById("headerTitle").textContent="全部课程";rCourses(f);shP("courses");}
function shCD(id){
  const c=COURSES_DATA.find(function(x){return x.id===id;});if(!c)return;
  document.getElementById("cdIcon").textContent=c.icon;
  document.getElementById("cdTitle").textContent=c.title;
  document.getElementById("cdDesc").textContent=c.desc;
  document.getElementById("courseDetailHeader").style.background="linear-gradient(135deg,"+c.color+","+c.color+"aa)";
  let lHtml="";
  for(let i=0;i<c.lessons.length;i++){const l=c.lessons[i];const lk=c.premium&&!S.isVip;const dn=S.done[l.id];
    lHtml+="<div class=\"lesson-row\" onclick=\""+(lk?"shP('shop')":"oL('"+c.id+"','"+l.id+"')")+"\" style=\"cursor:pointer\">"+
      "<div class=\"lesson-num\" style=\"border-color:"+c.color+";background:"+(dn?c.color:"transparent")+"\">"+(dn?"✓":l.order)+"</div>"+
      "<div class=\"lesson-info\"><h4 style=\"color:"+(lk?"#999":"#333")+"\">"+l.title+"</h4></div>"+
      (lk?"<span style=\"color:#FFA500\">🔒</span>":"<span style=\"color:"+c.color+"\">▶</span>")+"</div>";}
  document.getElementById("lessonList").innerHTML=lHtml;shP("course-detail");
}
function oL(cid,lid){
  const c=COURSES_DATA.find(function(x){return x.id===cid;});const l=c.lessons.find(function(x){return x.id===lid;});if(!l)return;
  S.cur={cid:cid,lid:lid};S.di=0;rL();
}
function rL(){
  const c=COURSES_DATA.find(function(x){return x.id===S.cur.cid;});const l=c.lessons.find(function(x){return x.id===S.cur.lid;});if(!l)return;
  document.getElementById("headerTitle").textContent=l.title;document.getElementById("headerControls").style.display="flex";
  let h="";
  if(l.dialogues&&l.dialogues.length>0){
    const d=l.dialogues[S.di];
    h="<div class=\"dialog-card\"><div style=\"display:flex;align-items:center;margin-bottom:8px\">"+
      "<div style=\"width:28px;height:28px;border-radius:50%;background:#FF6B6B22;display:flex;align-items:center;justify-content:center;font-size:12px;color:#FF6B6B;font-weight:600;margin-right:8px\">"+d.sp[0]+"</div>"+
      "<span style=\"font-size:13px;font-weight:500\">"+d.sp+"</span>"+
      "<button onclick=\"sp('"+d.ca.replace(/'/g,"\\'")+"')\" style=\"margin-left:auto;background:none;border:none;font-size:18px;cursor:pointer\">🔊</button></div>"+
      "<div class=\"dialog-cantonese\">"+d.ca+"</div><div class=\"dialog-jyutping\">"+d.jp+"</div>"+
      (S.st?"<div style=\"border-top:1px solid #eee;margin-top:10px;padding-top:10px;text-align:center;font-size:14px;color:#666\">"+d.zh+"</div>":"")+
      "<div class=\"dialog-nav\"><button onclick=\"cD(-1)\""+(S.di===0?" disabled":"")+">上一句</button>"+
      "<span style=\"font-size:11px;color:#999;align-self:center\">"+(S.di+1)+"/"+l.dialogues.length+"</span>"+
      "<button class=\"primary\" onclick=\"cD(1)\""+(S.di===l.dialogues.length-1?" disabled":"")+">下一句</button></div></div>";
  }
  document.getElementById("dialogSection").innerHTML=h;
  let v="";if(l.voc&&l.voc.length>0){v="<div class=\"section-title\">词汇</div>";for(let i=0;i<l.voc.length;i++){const x=l.voc[i];v+="<div class=\"vocab-item\"><h4>"+x.ca+" <button onclick=\"sp('"+x.ca.replace(/'/g,"\\'")+"')\" style=\"background:none;border:none;font-size:14px;cursor:pointer\">🔊</button></h4><div style=\"font-size:12px;color:#999;margin-top:2px\">"+x.jp+" | "+x.zh+"</div><div style=\"font-size:11px;color:#bbb;margin-top:4px\">例："+x.ex+"</div></div>";}}
  document.getElementById("vocabSection").innerHTML=v;
  let t="";if(l.tips&&l.tips.length>0){t="<div class=\"section-title\">语法提示</div>";for(let i=0;i<l.tips.length;i++){t+="<div class=\"tip-item\"><span style=\"font-size:16px\">💡</span><span>"+l.tips[i]+"</span></div>";}}
  document.getElementById("tipSection").innerHTML=t;
  let p="";if(l.pr&&l.pr.length>0){p="<div class=\"section-title\">练习句子</div>";for(let i=0;i<l.pr.length;i++){const x=l.pr[i];p+="<div class=\"practice-item\" onclick=\"sp('"+x.ca.replace(/'/g,"\\'")+"')\"><div style=\"flex:1\"><strong>"+x.ca+"</strong><br><span style=\"font-size:11px;color:#999\">"+x.jp+"</span><br><span style=\"font-size:12px;color:#666\">"+x.zh+"</span></div><span style=\"font-size:18px\">🔊</span></div>";}}
  document.getElementById("practiceSection").innerHTML=p;shP("lesson");
}
function cD(d){S.di+=d;rL();}
function tT(){S.st=!S.st;rL();}
function cL(){S.done[S.cur.lid]=true;S.xp+=9;S.lv=Math.floor(S.xp/100)+1;S.str+=1;S.tt+=600;sv();rn();alert("🎉 完成！XP+"+9);}
function gB(){S.cur=null;document.getElementById("headerTitle").textContent="粤语流利说";document.getElementById("headerControls").style.display="none";shP("home");}
function rAI(){
  const sc=["free","restaurant","shopping","travel","work","phone","friend"];
  const nm={free:"自由对话",restaurant:"茶餐厅",shopping:"购物",travel:"旅行",work:"职场",phone:"电话",friend:"朋友聊天"};
  if(!S.isVip){document.getElementById("aiContent").innerHTML="<div style=\"text-align:center;padding:40px 20px\"><div style=\"font-size:60px;margin-bottom:12px\">🎤</div><h2>AI粤语陪练</h2><p style=\"font-size:12px;color:#999;margin:8px 0 16px\">开通VIP即可与AI练习粤语对话</p><button onclick=\"shP('shop')\" style=\"background:#FFA500;color:#fff;border:none;padding:10px 24px;border-radius:10px;cursor:pointer;font-weight:600\">开通VIP · ¥9.90/月</button></div>";return;}
  let chips="";for(let i=0;i<sc.length;i++){const s=sc[i];chips+="<button class=\"scenario-chip "+(S.as===s?"active":"")+"\" onclick=\"sS('"+s+"')\">"+nm[s]+"</button>";}
  document.getElementById("aiContent").innerHTML=
    "<div class=\"scenario-chips\">"+chips+"</div>"+
    "<div id=\"aiMsgs\" style=\"flex:1;min-height:300px\"></div>"+
    "<div class=\"ai-input\"><button class=\"voice-toggle\" onclick=\"tV()\">"+(S.av==="female"?"👩":"👨")+"</button>"+
    "<input id=\"aiInp\" placeholder=\"输入粤语或普通话...\" onkeydown=\"if(event.key==='Enter')sAI()\"><button onclick=\"sAI()\">➤</button></div>";
  rAImsgs();
}
function sS(s){S.as=s;rAI();}
function tV(){S.av=S.av==="female"?"male":"female";rAI();}
function rAImsgs(){
  const c=document.getElementById("aiMsgs");if(!c)return;
  if(S.msgs.length===0){c.innerHTML="<div style=\"text-align:center;padding:40px\"><div style=\"font-size:50px\">🎤</div><h3>AI粤语陪练</h3><p style=\"font-size:12px;color:#999;margin-top:6px\">开始对话吧！</p></div>";return;}
  let h="";
  for(let i=0;i<S.msgs.length;i++){const m=S.msgs[i];h+="<div class=\"ai-message "+(m.u?"user":"ai")+"\"><div class=\"ai-bubble\">"+m.c+"</div>"+(!m.u?"<button class=\"ai-speaker-btn\" onclick=\"sp('"+m.c.replace(/'/g,"\\'")+"')\">🔊</button>":"")+"</div>";}
  c.innerHTML=h;
}
function sAI(){
  const i=document.getElementById("aiInp");if(!i||!i.value.trim())return;
  const t=i.value.trim();S.msgs.push({id:Date.now(),c:t,u:true});i.value="";
  setTimeout(function(){const d=AI_DLGS[S.as]||AI_DLGS.free;const r=d[Math.floor(Math.random()*d.length)];S.msgs.push({id:Date.now()+1,c:r,u:false});rAImsgs();sp(r);},600);
  rAImsgs();
}
function rProfile(){
  document.getElementById("profileVip").innerHTML=S.isVip?"<h3>👑 VIP会员</h3>":"<h3>开通VIP会员</h3><span style=\"font-size:10px\">解锁全部课程与AI陪练</span>";
  const statHtml="<div style=\"padding:0 4px\"><div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f0f0f0\"><span>📖 已完成课程</span><strong>"+Object.keys(S.done).length+"</strong></div>"+
    "<div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f0f0f0\"><span>⏱️ 学习时长</span><strong>"+Math.floor(S.tt/60)+"分钟</strong></div>"+
    "<div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f0f0f0\"><span>🔥 连续打卡</span><strong>"+S.str+" 天</strong></div>"+
    "<div style=\"display:flex;justify-content:space-between;padding:8px 0\"><span>⭐ Lv."+S.lv+"</span><strong>"+S.xp+" XP</strong></div></div>";
  document.getElementById("profileStats").innerHTML=statHtml;
  let catsHtml="";
  for(let i=0;i<CATS.length;i++){const c=CATS[i];const cc=COURSES_DATA.filter(function(co){return co.cat===c;});let t=0;let d=0;for(let j=0;j<cc.length;j++){t+=cc[j].lessons.length;for(let k=0;k<cc[j].lessons.length;k++){if(S.done[cc[j].lessons[k].id])d++;}}const p=t>0?(d/t)*100:0;catsHtml+="<div class=\"cat-progress\"><div style=\"display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px\"><span>"+CAT_ICONS[c]+" "+CAT_NAMES[c]+"</span><span>"+d+"/"+t+"</span></div><div class=\"bar\"><div class=\"fill\" style=\"width:"+p+"%\"></div></div></div>";}
  document.getElementById("profileCats").innerHTML=catsHtml;
}
function rShop(){
  document.getElementById("vipFeatures").innerHTML="<div style=\"margin-bottom:6px;font-size:13px\"><span style=\"color:#FFA500;margin-right:6px\">✓</span>十大分类课程系统学习</div>"+
    "<div style=\"margin-bottom:6px;font-size:13px\"><span style=\"color:#FFA500;margin-right:6px\">✓</span>AI陪练男女声切换</div>"+
    "<div style=\"margin-bottom:6px;font-size:13px\"><span style=\"color:#FFA500;margin-right:6px\">✓</span>每日挑战+打卡激励</div>"+
    "<div style=\"margin-bottom:6px;font-size:13px\"><span style=\"color:#FFA500;margin-right:6px\">✓</span>学习进度追踪</div>";
  let plansHtml="";
  for(let i=0;i<VIP_PLANS.length;i++){const p=VIP_PLANS[i];plansHtml+="<div class=\"vip-plan "+(i===1?"selected":"")+"\" onclick=\"slP("+i+")\"><div class=\"vip-radio\">"+(i===1?"<div class=\"vip-radio-inner\"></div>":"")+"</div><div style=\"flex:1\"><strong>"+p.display+"</strong><br><span style=\"font-size:11px;color:#999\">"+p.desc+"</span></div><strong style=\"color:#FFA500;font-size:18px\">"+p.price+"</strong></div>";}
  document.getElementById("vipPlans").innerHTML=plansHtml;
  document.getElementById("purchaseBtn").textContent="立即开通 · "+VIP_PLANS[1].price;
}
function slP(i){const plans=document.querySelectorAll(".vip-plan");for(let j=0;j<plans.length;j++){plans[j].classList.toggle("selected",j===i);plans[j].querySelector(".vip-radio").innerHTML=j===i?"<div class="vip-radio-inner"></div>":"""}document.getElementById("purchaseBtn").textContent="立即开通 · "+VIP_PLANS[i].price;}
function pV(){S.isVip=true;S.vipType="monthly";sv();rn();alert("🎉 VIP开通成功！");shP("home");}
function sp(t){if(window.speechSynthesis){const u=new SpeechSynthesisUtterance(t);u.lang="yue-HK";u.rate=0.7;u.pitch=S.av==="female"?1.3:0.8;window.speechSynthesis.speak(u);}}
function shP(n){
  document.querySelectorAll(".page").forEach(function(p){p.classList.remove("active");});
  document.querySelectorAll(".tab-bar button").forEach(function(b){b.classList.remove("active");});
  const pg=document.getElementById("page-"+n);if(pg)pg.classList.add("active");
  const tb=document.getElementById("tab-"+n);if(tb)tb.classList.add("active");
  if(n==="courses")rCourses();if(n==="ai")rAI();if(n==="profile")rProfile();
  if(n==="home"){document.getElementById("headerTitle").textContent="粤语流利说";document.getElementById("headerControls").style.display="none";}
}
rn();
if("serviceWorker" in navigator){navigator.serviceWorker.register("sw.js").catch(function(){});}
