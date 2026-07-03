import { Course, CourseCategory } from "../models/types";

// Context for text content
const T = { zh: (s: string) => s, en: (s: string) => s };

export const allCourses: Course[] = [
  // 发音训练
  { id:"pronunciation", title:"粤语发音入门", titleEn:"Cantonese Pronunciation", titleYue:"粵語發音入門",
    description:"掌握粤语六个声调和声韵母系统", descriptionEn:"Master the 6 tones and initial-final system",
    iconName:"🎙", colorHex:"#FF6B6B", category:"pronunciation", difficulty:"beginner",
    lessons:[
      { id:"pr1", title:"声调入门 - 六声九调", titleEn:"Tones Introduction", titleYue:"聲調入門",
        dialogues:[
          { id:"pd1", speaker:"老师", speakerEn:"Teacher", cantonese:"粵語有六個聲調", jyutping:"Jyut6 jyu5 jau5 luk6 go3 seng1 diu6", chinese:"粤语有六个声调", english:"Cantonese has six tones" },
          { id:"pd2", speaker:"老师", speakerEn:"Teacher", cantonese:"第一聲係高平，第二聲係高升", jyutping:"Dai6 jat1 seng1 hai6 gou1 ping4, dai6 ji6 seng1 hai6 gou1 sing1", chinese:"第一声是高平，第二声是高升", english:"First tone high level, second high rising" },
        ],
        vocabulary:[
          { id:"pv1", cantonese:"詩", jyutping:"si1", chinese:"诗", english:"poem", exampleSentence:"呢首詩寫得好好" },
          { id:"pv2", cantonese:"史", jyutping:"si2", chinese:"史", english:"history", exampleSentence:"中國有悠久嘅歷史" },
        ],
        grammarTips:["粤语有六个声调","声调不同意思完全不同"],
        practiceSentences:[
          { id:"pp1", cantonese:"你好", jyutping:"nei5 hou2", chinese:"你好" },
          { id:"pp2", cantonese:"早晨", jyutping:"zou2 san4", chinese:"早上好" },
        ], isCompleted:false, progress:0, order:1 },
      { id:"pr2", title:"声母学习", titleEn:"Initials", titleYue:"聲母學習",
        dialogues:[], vocabulary:[], grammarTips:[], practiceSentences:[], isCompleted:false, progress:0, order:2 },
      { id:"pr3", title:"韵母学习", titleEn:"Finals", titleYue:"韻母學習",
        dialogues:[], vocabulary:[], grammarTips:[], practiceSentences:[], isCompleted:false, progress:0, order:3 },
    ], isPremium:false, order:1 },

  // 社交礼仪
  { id:"social", title:"社交礼仪粤语", titleEn:"Social Cantonese", titleYue:"社交禮儀粵語",
    description:"学会打招呼、介绍、道歉、感谢", descriptionEn:"Learn greetings, introductions, apologies",
    iconName:"🤝", colorHex:"#4ECDC4", category:"social", difficulty:"beginner",
    lessons:[
      { id:"sc1", title:"打招呼与问候", titleEn:"Greetings", titleYue:"打招呼",
        dialogues:[
          { id:"sd1", speaker:"A", speakerEn:"A", cantonese:"你好！", jyutping:"nei5 hou2", chinese:"你好！", english:"Hello!" },
          { id:"sd2", speaker:"B", speakerEn:"B", cantonese:"你好！你叫咩名呀？", jyutping:"nei5 hou2 nei5 giu3 me1 meng2 aa3", chinese:"你叫什么名字？", english:"What is your name?" },
          { id:"sd3", speaker:"A", speakerEn:"A", cantonese:"我叫小明，好開心識到你", jyutping:"ngo5 giu3 siu2 ming4 hou2 hoi1 sam1 sik1 dou3 nei5", chinese:"我叫小明，很高兴认识你", english:"I am Xiaoming, nice to meet you" },
          { id:"sd4", speaker:"B", speakerEn:"B", cantonese:"早晨！", jyutping:"zou2 san4", chinese:"早上好！", english:"Good morning!" },
        ],
        vocabulary:[
          { id:"sv1", cantonese:"你好", jyutping:"nei5 hou2", chinese:"你好", english:"hello", exampleSentence:"你好，請問你貴姓？" },
          { id:"sv2", cantonese:"早晨", jyutping:"zou2 san4", chinese:"早上好", english:"good morning", exampleSentence:"早晨！今日天氣幾好" },
          { id:"sv3", cantonese:"唔該", jyutping:"m4 goi1", chinese:"谢谢", english:"thank you", exampleSentence:"唔該你幫我開門" },
          { id:"sv4", cantonese:"對唔住", jyutping:"deoi3 m4 zyu6", chinese:"对不起", english:"sorry", exampleSentence:"對唔住，我遲到咗" },
        ],
        grammarTips:["'早晨'只在早上使用","'唔該'用于请求帮助的感谢"],
        practiceSentences:[
          { id:"sp1", cantonese:"你好，好開心識到你", jyutping:"nei5 hou2 hou2 hoi1 sam1 sik1 dou3 nei5", chinese:"你好，很高兴认识你" },
          { id:"sp2", cantonese:"唔該你", jyutping:"m4 goi1 nei5", chinese:"谢谢你" },
        ], isCompleted:false, progress:0, order:1 },
      { id:"sc2", title:"道歉与感谢", titleEn:"Apologies & Thanks", titleYue:"道歉與感謝",
        dialogues:[
          { id:"sd5", speaker:"A", speakerEn:"A", cantonese:"對唔住，我整爛咗你本書", jyutping:"deoi3 m4 zyu6 ngo5 zing2 laan6 zo2 nei5 bun2 syu1", chinese:"对不起，我弄坏了你的书", english:"Sorry I damaged your book" },
          { id:"sd6", speaker:"B", speakerEn:"B", cantonese:"唔緊要，唔使介意", jyutping:"m4 gan2 jiu3 m4 sai2 gaai3 ji3", chinese:"不要紧，别介意", english:"It is okay" },
        ],
        vocabulary:[
          { id:"sv5", cantonese:"唔緊要", jyutping:"m4 gan2 jiu3", chinese:"不要紧", english:"it is okay", exampleSentence:"唔緊要，下次小心啲" },
        ],
        grammarTips:["'唔好意思'比'對唔住'程度轻"],
        practiceSentences:[], isCompleted:false, progress:0, order:2 },
      { id:"sc3", title:"邀请与约会", titleEn:"Invitations", titleYue:"邀請與約會",
        dialogues:[
          { id:"sd7", speaker:"A", speakerEn:"A", cantonese:"你聽日得唔得閒？", jyutping:"nei5 ting1 jat6 dak1 m4 dak1 haan4", chinese:"你明天有空吗？", english:"Are you free tomorrow?" },
          { id:"sd8", speaker:"B", speakerEn:"B", cantonese:"得閒呀，有咩事？", jyutping:"dak1 haan4 aa3 jau5 me1 si6", chinese:"有空，什么事？", english:"Yes, what is up?" },
        ],
        vocabulary:[
          { id:"sv6", cantonese:"得閒", jyutping:"dak1 haan4", chinese:"有空", english:"free", exampleSentence:"你得閒嘅話，一齊食飯" },
        ],
        grammarTips:["'得唔得閒'是询问是否有空的标准说法"],
        practiceSentences:[], isCompleted:false, progress:0, order:3 },
    ], isPremium:false, order:2 },

  // 生活用语
  { id:"daily", title:"日常生活粤语", titleEn:"Daily Life Cantonese", titleYue:"日常生活粵語",
    description:"涵盖饮食、购物、交通、天气等场景", descriptionEn:"Covers dining, shopping, transportation, weather",
    iconName:"🏠", colorHex:"#45B7D1", category:"daily", difficulty:"beginner",
    lessons:[
      { id:"dl1", title:"茶餐厅点餐", titleEn:"Ordering Food", titleYue:"茶餐廳點餐",
        dialogues:[
          { id:"dd1", speaker:"顾客", speakerEn:"Customer", cantonese:"唔該，睇下餐牌", jyutping:"m4 goi1 tai2 haa5 caan1 paai4", chinese:"看一下菜单", english:"Let me see the menu" },
          { id:"dd2", speaker:"侍应", speakerEn:"Waiter", cantonese:"你想食啲咩？", jyutping:"nei5 soeng2 sik6 di1 me1", chinese:"你想吃什么？", english:"What would you like?" },
          { id:"dd3", speaker:"顾客", speakerEn:"Customer", cantonese:"我要乾炒牛河同凍檸茶", jyutping:"ngo5 jiu3 gon1 caau2 ngau4 ho4 tung4 dung3 ning4 caa4", chinese:"干炒牛河和冻柠茶", english:"Beef chow fun and iced lemon tea" },
          { id:"dd4", speaker:"侍应", speakerEn:"Waiter", cantonese:"好嘅，等陣就好", jyutping:"hou2 ge3 dang2 zan6 zau6 hou2", chinese:"好的稍等", english:"Coming right up" },
          { id:"dd5", speaker:"顾客", speakerEn:"Customer", cantonese:"唔該，埋單", jyutping:"m4 goi1 maai4 daan1", chinese:"买单", english:"Check please" },
        ],
        vocabulary:[
          { id:"dv1", cantonese:"食嘢", jyutping:"sik6 je5", chinese:"吃东西", english:"eat", exampleSentence:"我肚餓想去食嘢" },
          { id:"dv2", cantonese:"埋單", jyutping:"maai4 daan1", chinese:"买单", english:"check please", exampleSentence:"唔該埋單" },
          { id:"dv3", cantonese:"凍飲", jyutping:"dung3 jam2", chinese:"冷饮", english:"cold drink", exampleSentence:"凍飲要加兩蚊" },
        ],
        grammarTips:["香港茶餐厅'冻饮'通常需加$2","'埋单'是结账的说法"],
        practiceSentences:[
          { id:"dp1", cantonese:"唔該，我要乾炒牛河", jyutping:"m4 goi1 ngo5 jiu3 gon1 caau2 ngau4 ho4", chinese:"我要干炒牛河" },
        ], isCompleted:false, progress:0, order:1 },
      { id:"dl2", title:"购物讲价", titleEn:"Bargaining", titleYue:"購物講價",
        dialogues:[
          { id:"dd6", speaker:"顾客", speakerEn:"Customer", cantonese:"呢件衫幾多錢？", jyutping:"ni1 gin6 saam1 gei2 do1 cin4", chinese:"这件多少钱？", english:"How much?" },
          { id:"dd7", speaker:"店员", speakerEn:"Shopkeeper", cantonese:"呢件兩百蚊", jyutping:"ni1 gin6 loeng5 baak3 man1", chinese:"两百块", english:"200 dollars" },
          { id:"dd8", speaker:"顾客", speakerEn:"Customer", cantonese:"有冇得平啲呀？", jyutping:"jau5 mou5 dak1 peng4 di1 aa3", chinese:"能便宜点吗？", english:"Any discount?" },
        ],
        vocabulary:[
          { id:"dv4", cantonese:"幾多錢", jyutping:"gei2 do1 cin4", chinese:"多少钱", english:"how much", exampleSentence:"呢個幾多錢？" },
          { id:"dv5", cantonese:"平啲", jyutping:"peng4 di1", chinese:"便宜点", english:"cheaper", exampleSentence:"可唔可以平啲？" },
          { id:"dv6", cantonese:"蚊", jyutping:"man1", chinese:"元", english:"dollar", exampleSentence:"十蚊" },
        ],
        grammarTips:["'蚊'是粤语中'元/块'的意思","'平'是便宜的意思"],
        practiceSentences:[
          { id:"dp2", cantonese:"呢個幾多錢？", jyutping:"ni1 go3 gei2 do1 cin4", chinese:"这个多少钱？" },
        ], isCompleted:false, progress:0, order:2 },
      { id:"dl3", title:"问路与交通", titleEn:"Asking Directions", titleYue:"問路與交通",
        dialogues:[
          { id:"dd9", speaker:"游客", speakerEn:"Tourist", cantonese:"唔該，地鐵站喺邊度？", jyutping:"m4 goi1 dei6 tit3 zaam6 hai2 bin1 dou6", chinese:"地铁站在哪？", english:"Where is the MTR?" },
          { id:"dd10", speaker:"路人", speakerEn:"Passerby", cantonese:"直行轉右就係", jyutping:"zik6 haang4 zyun2 jau6 zau6 hai6", chinese:"直走右转", english:"Go straight turn right" },
        ],
        vocabulary:[], grammarTips:["'喺'是'在'的意思"], practiceSentences:[], isCompleted:false, progress:0, order:3 },
      { id:"dl4", title:"天气与季节", titleEn:"Weather", titleYue:"天氣與季節",
        dialogues:[
          { id:"dd11", speaker:"A", speakerEn:"A", cantonese:"今日天氣點樣？", jyutping:"gam1 jat6 tin1 hei3 dim2 joeng2", chinese:"今天天气怎么样？", english:"How is the weather?" },
          { id:"dd12", speaker:"B", speakerEn:"B", cantonese:"好熱呀，成三十度", jyutping:"hou2 jit6 aa3 seng4 saam1 sap6 dou6", chinese:"很热三十度", english:"Very hot 30 degrees" },
        ],
        vocabulary:[], grammarTips:[], practiceSentences:[], isCompleted:false, progress:0, order:4 },
    ], isPremium:false, order:3 },

  // 职场粤语
  { id:"workplace", title:"职场粤语", titleEn:"Workplace Cantonese", titleYue:"職場粵語",
    description:"面试、会议、商务沟通等职场场景", descriptionEn:"Interviews, meetings, business",
    iconName:"💼", colorHex:"#96CEB4", category:"workplace", difficulty:"intermediate",
    lessons:[
      { id:"wk1", title:"面试会话", titleEn:"Job Interview", titleYue:"面試會話",
        dialogues:[
          { id:"wd1", speaker:"面试官", speakerEn:"Interviewer", cantonese:"請介紹下你自己", jyutping:"cing2 gaai3 siu6 haa5 nei5 zi6 gei2", chinese:"介绍你自己", english:"Introduce yourself" },
          { id:"wd2", speaker:"应征者", speakerEn:"Candidate", cantonese:"我畢業於香港大學", jyutping:"ngo5 bat1 jip6 jyu1 hoeng1 gong2 daai6 hok6", chinese:"我毕业于港大", english:"I graduated from HKU" },
        ],
        vocabulary:[
          { id:"wv1", cantonese:"畢業", jyutping:"bat1 jip6", chinese:"毕业", english:"graduate", exampleSentence:"我上年畢業" },
          { id:"wv2", cantonese:"人工", jyutping:"jan4 gung1", chinese:"薪资", english:"salary", exampleSentence:"期望人工係幾多？" },
        ],
        grammarTips:["'嚟'是'来'的意思","'人工'是'工资'的意思"],
        practiceSentences:[], isCompleted:false, progress:0, order:1 },
      { id:"wk2", title:"办公沟通", titleEn:"Office Talk", titleYue:"辦公溝通",
        dialogues:[
          { id:"wd3", speaker:"A", speakerEn:"A", cantonese:"幫我傳文件俾陳生", jyutping:"bong1 ngo5 cyun4 man4 gin6 bei2 can4 saang1", chinese:"把文件传给陈先生", english:"Pass this to Mr Chan" },
        ],
        vocabulary:[], grammarTips:[], practiceSentences:[], isCompleted:false, progress:0, order:2 },
      { id:"wk3", title:"商务社交", titleEn:"Business Social", titleYue:"商務社交",
        dialogues:[
          { id:"wd4", speaker:"老板", speakerEn:"Boss", cantonese:"今晚一齊食飯，我請", jyutping:"gam1 maan5 jat1 cai4 sik6 faan6 ngo5 ceng2", chinese:"今晚我请吃饭", english:"Dinner is on me" },
        ],
        vocabulary:[
          { id:"wv3", cantonese:"老細", jyutping:"lou5 sai3", chinese:"老板", english:"boss", exampleSentence:"老細今日唔喺度" },
        ],
        grammarTips:["'老細'是'老板'的意思"],
        practiceSentences:[], isCompleted:false, progress:0, order:3 },
    ], isPremium:false, order:4 },

  // 校园粤语
  { id:"school", title:"校园粤语", titleEn:"School Cantonese", titleYue:"校園粵語",
    description:"课堂用语、同学交流、校园生活", descriptionEn:"Classroom and campus life",
    iconName:"📚", colorHex:"#9B59B6", category:"school", difficulty:"beginner",
    lessons:[
      { id:"sk1", title:"课堂用语", titleEn:"Classroom", titleYue:"課堂用語",
        dialogues:[
          { id:"skd1", speaker:"老师", speakerEn:"Teacher", cantonese:"各位同學，早晨", jyutping:"gok3 wai2 tung4 hok6 zou2 san4", chinese:"同学们早上好", english:"Good morning class" },
          { id:"skd2", speaker:"学生", speakerEn:"Student", cantonese:"老師早晨", jyutping:"lou5 si1 zou2 san4", chinese:"老师早上好", english:"Good morning teacher" },
        ],
        vocabulary:[
          { id:"skv1", cantonese:"上堂", jyutping:"soeng5 tong4", chinese:"上课", english:"class", exampleSentence:"我哋上緊堂" },
          { id:"skv2", cantonese:"做功課", jyutping:"zou6 gung1 fo3", chinese:"做作业", english:"homework", exampleSentence:"我未做功課" },
        ],
        grammarTips:["'唔明'是'不明白'的意思"], practiceSentences:[], isCompleted:false, progress:0, order:1 },
      { id:"sk2", title:"同学交流", titleEn:"Friends Chat", titleYue:"同學交流",
        dialogues:[
          { id:"skd3", speaker:"A", speakerEn:"A", cantonese:"你食咗飯未？", jyutping:"nei5 sik6 zo2 faan6 mei6", chinese:"你吃饭了吗？", english:"Have you eaten?" },
          { id:"skd4", speaker:"B", speakerEn:"B", cantonese:"未呀，一齊去食？", jyutping:"mei6 aa3 jat1 cai4 heoi3 sik6", chinese:"还没一起去？", english:"Not yet let us go?" },
        ],
        vocabulary:[
          { id:"skv3", cantonese:"一齊", jyutping:"jat1 cai4", chinese:"一起", english:"together", exampleSentence:"一齊去玩" },
        ],
        grammarTips:[], practiceSentences:[], isCompleted:false, progress:0, order:2 },
    ], isPremium:false, order:5 },

  // 旅行粤语
  { id:"travel", title:"旅行粤语", titleEn:"Travel Cantonese", titleYue:"旅行粵語",
    description:"酒店入住、景点观光、紧急情况", descriptionEn:"Hotel, sightseeing, emergencies",
    iconName:"✈️", colorHex:"#F39C12", category:"travel", difficulty:"beginner",
    lessons:[
      { id:"tr1", title:"酒店入住", titleEn:"Hotel Check-in", titleYue:"酒店入住",
        dialogues:[
          { id:"td1", speaker:"客人", speakerEn:"Guest", cantonese:"我訂咗房，我姓張", jyutping:"ngo5 deng6 zo2 fong4 ngo5 sing3 zoeng1", chinese:"我订了房姓张", english:"I have a reservation" },
          { id:"td2", speaker:"職員", speakerEn:"Staff", cantonese:"張先生你好，房卡", jyutping:"zoeng1 sin1 saang1 nei5 hou2 fong4 kaa1", chinese:"张先生你好房卡", english:"Here is your key card" },
        ],
        vocabulary:[
          { id:"tv1", cantonese:"訂房", jyutping:"deng6 fong4", chinese:"订房", english:"book room", exampleSentence:"我想訂房" },
        ],
        grammarTips:["'訂咗'是'订了'的意思"], practiceSentences:[], isCompleted:false, progress:0, order:1 },
    ], isPremium:false, order:6 },

  // 电话聊天 (VIP)
  { id:"phone", title:"电话聊天", titleEn:"Phone Conversations", titleYue:"電話聊天",
    description:"电话预约、通话用语、煲电话粥", descriptionEn:"Phone calls and chatting",
    iconName:"📞", colorHex:"#E74C3C", category:"phone", difficulty:"intermediate",
    lessons:[
      { id:"ph1", title:"打电话预约", titleEn:"Phone Appointments", titleYue:"打電話預約",
        dialogues:[
          { id:"phd1", speaker:"你", speakerEn:"You", cantonese:"喂，請問係咪陳醫生診所？", jyutping:"wai3 cing2 man6 hai6 mai6 can4 ji1 sang1 can2 so2", chinese:"请问是陈医生诊所吗？", english:"Is this Dr Chan?" },
          { id:"phd2", speaker:"接待員", speakerEn:"Receptionist", cantonese:"係呀，有咩幫到你？", jyutping:"hai6 aa3 jau5 me1 bong1 dou3 nei5", chinese:"有什么可以帮您？", english:"How can I help?" },
          { id:"phd3", speaker:"你", speakerEn:"You", cantonese:"我想約聽日睇醫生", jyutping:"ngo5 soeng2 joek3 ting1 jat6 tai2 ji1 sang1", chinese:"我想约明天看医生", english:"Appointment tomorrow" },
        ],
        vocabulary:[
          { id:"phv1", cantonese:"喂", jyutping:"wai3", chinese:"喂", english:"hello", exampleSentence:"喂你搵邊位？" },
          { id:"phv2", cantonese:"搵", jyutping:"wan2", chinese:"找", english:"look for", exampleSentence:"我搵陳先生" },
        ],
        grammarTips:["'喂'是电话标准开头","'係咪'是'是不是'"],
        practiceSentences:[], isCompleted:false, progress:0, order:1 },
    ], isPremium:true, order:7 },

  // 香港文化 (VIP)
  { id:"culture", title:"香港文化", titleEn:"Hong Kong Culture", titleYue:"香港文化",
    description:"了解香港饮食、节庆、电影等", descriptionEn:"Explore HK food, festivals, movies",
    iconName:"⭐", colorHex:"#1ABC9C", category:"culture", difficulty:"intermediate",
    lessons:[
      { id:"cu1", title:"茶餐厅文化", titleEn:"Cha Chaan Teng", titleYue:"茶餐廳文化",
        dialogues:[
          { id:"cd1", speaker:"A", speakerEn:"A", cantonese:"茶餐廳嘢食好有特色", jyutping:"caa4 caan1 teng2 je5 sik6 hou2 jau5 dak6 sik1", chinese:"茶餐厅食物很有特色", english:"Cha chaan teng food is unique" },
          { id:"cd2", speaker:"B", speakerEn:"B", cantonese:"絲襪奶茶同蛋撻最出名", jyutping:"si1 mat6 naai5 caa4 tung4 daan6 taat3 zeoi3 ceot1 meng4", chinese:"丝袜奶茶和蛋挞最出名", english:"Milk tea and egg tarts are famous" },
        ],
        vocabulary:[
          { id:"cv1", cantonese:"絲襪奶茶", jyutping:"si1 mat6 naai5 caa4", chinese:"丝袜奶茶", english:"HK milk tea", exampleSentence:"我好鍾意絲襪奶茶" },
        ],
        grammarTips:[], practiceSentences:[], isCompleted:false, progress:0, order:1 },
    ], isPremium:true, order:8 },

  // 俚语俗语 (VIP)
  { id:"slang", title:"俚语俗语", titleEn:"Cantonese Slang", titleYue:"俚語俗語",
    description:"学习地道粤语俚语、俗语和潮语", descriptionEn:"Learn authentic Cantonese slang",
    iconName:"💬", colorHex:"#E67E22", category:"slang", difficulty:"advanced",
    lessons:[
      { id:"sl1", title:"常用俚语", titleEn:"Common Slang", titleYue:"常用俚語",
        dialogues:[
          { id:"sld1", speaker:"A", speakerEn:"A", cantonese:"你個樣好Hea喎", jyutping:"nei5 go3 joeng6 hou2 hea3 wo3", chinese:"你看上去很随性", english:"You look chill" },
          { id:"sld2", speaker:"B", speakerEn:"B", cantonese:"冇計今日Chill一日", jyutping:"mou5 gai3 gam1 jat6 chill1 jat1 jat6", chinese:"今天放松一天", english:"Chilling today" },
        ],
        vocabulary:[
          { id:"slv1", cantonese:"Hea", jyutping:"hea3", chinese:"随性", english:"chill", exampleSentence:"佢做嘢好Hea" },
        ],
        grammarTips:["不少粤语俚语来自英文"], practiceSentences:[], isCompleted:false, progress:0, order:1 },
    ], isPremium:true, order:9 },

  // 语法基础 (VIP)
  { id:"grammar", title:"粤语语法基础", titleEn:"Cantonese Grammar", titleYue:"粵語語法基礎",
    description:"掌握粤语句式、量词、助词等", descriptionEn:"Master structures, classifiers, particles",
    iconName:"📝", colorHex:"#3498DB", category:"grammar", difficulty:"intermediate",
    lessons:[
      { id:"gr1", title:"句式结构", titleEn:"Sentences", titleYue:"句式結構",
        dialogues:[
          { id:"gd1", speaker:"老师", speakerEn:"Teacher", cantonese:"粵語句子結構同普通話唔同", jyutping:"jyut6 jyu5 geoi3 zi2 git3 kau3 tung4 pou2 tung1 waa6 m4 tung4", chinese:"粤语句子结构不同", english:"Sentence structure differs" },
          { id:"gd2", speaker:"老师", speakerEn:"Teacher", cantonese:"例如：我俾本書你", jyutping:"jyut6 jyu4 ngo5 bei2 bun2 syu1 nei5", chinese:"例如我给你书", english:"E.g. I give you a book" },
        ],
        vocabulary:[
          { id:"gv1", cantonese:"俾", jyutping:"bei2", chinese:"给", english:"give", exampleSentence:"俾我睇下" },
        ],
        grammarTips:["粤语双宾语结构：动词+直接宾语+间接宾语"],
        practiceSentences:[], isCompleted:false, progress:0, order:1 },
    ], isPremium:true, order:10 },
];
