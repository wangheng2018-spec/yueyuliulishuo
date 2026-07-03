import Foundation

extension CourseDataProvider {
    static let daily = Course(
        id: "daily", title: "日常生活粤语", titleEn: "Daily Life Cantonese", titleYue: "日常生活粵語",
        description: "涵盖饮食、购物、交通、天气等日常生活场景",
        descriptionEn: "Covers dining, shopping, transportation, weather",
        iconName: "house", colorHex: "45B7D1", category: .daily, difficulty: .beginner,
        lessons: [
            Lesson(id: "dl1", title: "茶餐厅点餐", titleEn: "Ordering Food", titleYue: "茶餐廳點餐",
                dialogues: [
                    Dialogue(id: "dld1", speaker: "顾客", speakerEn: "Customer", cantonese: "唔該，睇下餐牌", jyutping: "m4 goi1 tai2 haa5 caan1 paai4", chinese: "看一下菜单", english: "Let me see the menu", audioFileName: nil),
                    Dialogue(id: "dld2", speaker: "侍应", speakerEn: "Waiter", cantonese: "你想食啲咩？", jyutping: "nei5 soeng2 sik6 di1 me1", chinese: "你想吃什么？", english: "What would you like?", audioFileName: nil),
                    Dialogue(id: "dld3", speaker: "顾客", speakerEn: "Customer", cantonese: "我要乾炒牛河同凍檸茶", jyutping: "ngo5 jiu3 gon1 caau2 ngau4 ho4 tung4 dung3 ning4 caa4", chinese: "干炒牛河和冻柠茶", english: "Beef chow fun and iced lemon tea", audioFileName: nil),
                    Dialogue(id: "dld4", speaker: "侍应", speakerEn: "Waiter", cantonese: "好嘅，等陣就好", jyutping: "hou2 ge3 dang2 zan6 zau6 hou2", chinese: "好的，稍等", english: "Coming right up", audioFileName: nil),
                    Dialogue(id: "dld5", speaker: "顾客", speakerEn: "Customer", cantonese: "唔該，埋單", jyutping: "m4 goi1 maai4 daan1", chinese: "买单", english: "Check please", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "dlv1", cantonese: "食嘢", jyutping: "sik6 je5", chinese: "吃东西", english: "eat", exampleSentence: "我肚餓，想去食嘢"),
                    VocabularyItem(id: "dlv2", cantonese: "埋單", jyutping: "maai4 daan1", chinese: "买单", english: "check please", exampleSentence: "唔該埋單"),
                    VocabularyItem(id: "dlv3", cantonese: "好味", jyutping: "hou2 mei6", chinese: "好吃", english: "delicious", exampleSentence: "呢碟嘢好好味"),
                    VocabularyItem(id: "dlv4", cantonese: "凍飲", jyutping: "dung3 jam2", chinese: "冷饮", english: "cold drink", exampleSentence: "凍飲要加兩蚊"),
                ],
                grammarTips: ["香港茶餐厅'冻饮'通常需加$2", "'埋单'是结账的说法"],
                practiceSentences: [
                    PracticeSentence(id: "dlp1", cantonese: "唔該，我要乾炒牛河", jyutping: "m4 goi1 ngo5 jiu3 gon1 caau2 ngau4 ho4", chinese: "我要干炒牛河", audioFileName: nil),
                ], isCompleted: false, progress: 0, order: 1),
            Lesson(id: "dl2", title: "购物讲价", titleEn: "Bargaining", titleYue: "購物講價",
                dialogues: [
                    Dialogue(id: "dld6", speaker: "顾客", speakerEn: "Customer", cantonese: "呢件衫幾多錢？", jyutping: "ni1 gin6 saam1 gei2 do1 cin4", chinese: "这件多少钱？", english: "How much?", audioFileName: nil),
                    Dialogue(id: "dld7", speaker: "店员", speakerEn: "Shopkeeper", cantonese: "呢件兩百蚊", jyutping: "ni1 gin6 loeng5 baak3 man1", chinese: "两百块", english: "200 dollars", audioFileName: nil),
                    Dialogue(id: "dld8", speaker: "顾客", speakerEn: "Customer", cantonese: "有冇得平啲呀？", jyutping: "jau5 mou5 dak1 peng4 di1 aa3", chinese: "能便宜点吗？", english: "Any discount?", audioFileName: nil),
                    Dialogue(id: "dld9", speaker: "店员", speakerEn: "Shopkeeper", cantonese: "好啦，俾你一百八", jyutping: "hou2 laa1 bei2 nei5 jat1 baak3 baat3", chinese: "给你一百八", english: "180 for you", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "dlv5", cantonese: "幾多錢", jyutping: "gei2 do1 cin4", chinese: "多少钱", english: "how much", exampleSentence: "呢個幾多錢？"),
                    VocabularyItem(id: "dlv6", cantonese: "平啲", jyutping: "peng4 di1", chinese: "便宜点", english: "cheaper", exampleSentence: "可唔可以平啲？"),
                    VocabularyItem(id: "dlv7", cantonese: "蚊", jyutping: "man1", chinese: "元", english: "dollar", exampleSentence: "十蚊"),
                ],
                grammarTips: ["'蚊'是粤语中'元/块'的意思", "'平'是便宜的意思"],
                practiceSentences: [
                    PracticeSentence(id: "dlp2", cantonese: "呢個幾多錢？", jyutping: "ni1 go3 gei2 do1 cin4", chinese: "这个多少钱？", audioFileName: nil),
                ], isCompleted: false, progress: 0, order: 2),
            Lesson(id: "dl3", title: "问路与交通", titleEn: "Asking Directions", titleYue: "問路與交通",
                dialogues: [
                    Dialogue(id: "dld10", speaker: "游客", speakerEn: "Tourist", cantonese: "唔該，地鐵站喺邊度？", jyutping: "m4 goi1 dei6 tit3 zaam6 hai2 bin1 dou6", chinese: "地铁站在哪？", english: "Where is the MTR?", audioFileName: nil),
                    Dialogue(id: "dld11", speaker: "路人", speakerEn: "Passerby", cantonese: "直行轉右就係", jyutping: "zik6 haang4 zyun2 jau6 zau6 hai6", chinese: "直走右转", english: "Go straight turn right", audioFileName: nil),
                    Dialogue(id: "dld12", speaker: "游客", speakerEn: "Tourist", cantonese: "遠唔遠㗎？", jyutping: "jyun5 m4 jyun5 gaa3", chinese: "远不远？", english: "Is it far?", audioFileName: nil),
                    Dialogue(id: "dld13", speaker: "路人", speakerEn: "Passerby", cantonese: "行五分鐘就到", jyutping: "haang4 ng5 fan1 zung1 zau6 dou3", chinese: "走五分钟就到", english: "Five minutes walk", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "dlv8", cantonese: "左轉", jyutping: "zo2 zyun2", chinese: "左转", english: "turn left", exampleSentence: "前面左轉"),
                    VocabularyItem(id: "dlv9", cantonese: "右轉", jyutping: "jau6 zyun2", chinese: "右转", english: "turn right", exampleSentence: "轉右"),
                ],
                grammarTips: ["'喺'是'在'的意思", "粤语中'行'是'走'的意思"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 3),
            Lesson(id: "dl4", title: "天气与季节", titleEn: "Weather", titleYue: "天氣與季節",
                dialogues: [
                    Dialogue(id: "dld14", speaker: "A", speakerEn: "A", cantonese: "今日天氣點樣？", jyutping: "gam1 jat6 tin1 hei3 dim2 joeng2", chinese: "今天天气怎么样？", english: "How is the weather?", audioFileName: nil),
                    Dialogue(id: "dld15", speaker: "B", speakerEn: "B", cantonese: "好熱呀，成三十度", jyutping: "hou2 jit6 aa3 seng4 saam1 sap6 dou6", chinese: "很热，三十度", english: "Very hot, 30 degrees", audioFileName: nil),
                    Dialogue(id: "dld16", speaker: "A", speakerEn: "A", cantonese: "聽日會唔會落雨？", jyutping: "ting1 jat6 wui5 m4 wui5 lok6 jyu5", chinese: "明天会下雨吗？", english: "Will it rain?", audioFileName: nil),
                    Dialogue(id: "dld17", speaker: "B", speakerEn: "B", cantonese: "會落雨，記得帶遮", jyutping: "wui5 lok6 jyu5 gei3 dak1 daai3 ze1", chinese: "会下雨，记得带伞", english: "It will rain, bring umbrella", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "dlv10", cantonese: "落雨", jyutping: "lok6 jyu5", chinese: "下雨", english: "rain", exampleSentence: "今日落好大雨"),
                    VocabularyItem(id: "dlv11", cantonese: "帶遮", jyutping: "daai3 ze1", chinese: "带伞", english: "bring umbrella", exampleSentence: "落雨要帶遮"),
                ],
                grammarTips: ["'成'表示'整整'的意思", "粤语中'遮'是伞的意思"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 4),
        ], isPremium: false, order: 3)
    
    static let workplace = Course(
        id: "workplace", title: "职场粤语", titleEn: "Workplace Cantonese", titleYue: "職場粵語",
        description: "掌握面试、会议、商务沟通等职场场景粤语",
        descriptionEn: "Master Cantonese for interviews and meetings",
        iconName: "briefcase", colorHex: "96CEB4", category: .workplace, difficulty: .intermediate,
        lessons: [
            Lesson(id: "wk1", title: "面试会话", titleEn: "Job Interview", titleYue: "面試會話",
                dialogues: [
                    Dialogue(id: "wkd1", speaker: "面试官", speakerEn: "Interviewer", cantonese: "請介紹下你自己", jyutping: "cing2 gaai3 siu6 haa5 nei5 zi6 gei2", chinese: "介绍你自己", english: "Introduce yourself", audioFileName: nil),
                    Dialogue(id: "wkd2", speaker: "应征者", speakerEn: "Candidate", cantonese: "我畢業於香港大學", jyutping: "ngo5 bat1 jip6 jyu1 hoeng1 gong2 daai6 hok6", chinese: "我毕业于港大", english: "I graduated from HKU", audioFileName: nil),
                    Dialogue(id: "wkd3", speaker: "面试官", speakerEn: "Interviewer", cantonese: "你點解想嚟我哋公司？", jyutping: "nei5 dim2 gaai2 soeng2 lai4 ngo5 dei6 gung1 si1", chinese: "为什么想来我们公司？", english: "Why join us?", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "wkv1", cantonese: "畢業", jyutping: "bat1 jip6", chinese: "毕业", english: "graduate", exampleSentence: "我上年畢業"),
                    VocabularyItem(id: "wkv2", cantonese: "經驗", jyutping: "ging1 jim6", chinese: "经验", english: "experience", exampleSentence: "我有五年經驗"),
                    VocabularyItem(id: "wkv3", cantonese: "人工", jyutping: "jan4 gung1", chinese: "薪资", english: "salary", exampleSentence: "期望人工係幾多？"),
                    VocabularyItem(id: "wkv4", cantonese: "返工", jyutping: "faan1 gung1", chinese: "上班", english: "work", exampleSentence: "你幾點返工？"),
                ],
                grammarTips: ["'嚟'是'来'的意思", "'我哋'是'我们'的意思", "'人工'是'工资'的意思"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 1),
            Lesson(id: "wk2", title: "办公沟通", titleEn: "Office Talk", titleYue: "辦公溝通",
                dialogues: [
                    Dialogue(id: "wkd4", speaker: "A", speakerEn: "A", cantonese: "幫我傳文件俾陳生", jyutping: "bong1 ngo5 cyun4 man4 gin6 bei2 can4 saang1", chinese: "把文件传给陈先生", english: "Pass this to Mr Chan", audioFileName: nil),
                    Dialogue(id: "wkd5", speaker: "B", speakerEn: "B", cantonese: "冇問題，等陣攞俾佢", jyutping: "mou5 man6 tai4 dang2 zan6 lo2 bei2 keoi5", chinese: "没问题，拿给他", english: "No problem", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "wkv5", cantonese: "開會", jyutping: "hoi1 wui6", chinese: "开会", english: "meeting", exampleSentence: "下晝三點開會"),
                    VocabularyItem(id: "wkv6", cantonese: "幫手", jyutping: "bong1 sau2", chinese: "帮忙", english: "help", exampleSentence: "唔該幫手"),
                ],
                grammarTips: ["'俾'是'给'的意思", "'攞'是'拿'的意思"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 2),
            Lesson(id: "wk3", title: "商务社交", titleEn: "Business Social", titleYue: "商務社交",
                dialogues: [
                    Dialogue(id: "wkd6", speaker: "老板", speakerEn: "Boss", cantonese: "今晚一齊食飯，我請", jyutping: "gam1 maan5 jat1 cai4 sik6 faan6 ngo5 ceng2", chinese: "今晚我请吃饭", english: "Dinner is on me", audioFileName: nil),
                    Dialogue(id: "wkd7", speaker: "同事", speakerEn: "Colleague", cantonese: "多謝老細！", jyutping: "do1 ze6 lou5 sai3", chinese: "谢谢老板！", english: "Thanks boss!", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "wkv7", cantonese: "老細", jyutping: "lou5 sai3", chinese: "老板", english: "boss", exampleSentence: "老細今日唔喺度"),
                    VocabularyItem(id: "wkv8", cantonese: "傾生意", jyutping: "king1 saang1 ji3", chinese: "谈生意", english: "business talk", exampleSentence: "聽日傾生意"),
                ],
                grammarTips: ["'老細'是'老板'的意思", "'傾'是'谈、聊'的意思"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 3),
        ], isPremium: false, order: 4)
    
    static let school = Course(
        id: "school", title: "校园粤语", titleEn: "School Cantonese", titleYue: "校園粵語",
        description: "课堂用语、同学交流、校园生活粤语",
        descriptionEn: "Classroom and campus life",
        iconName: "book", colorHex: "9B59B6", category: .school, difficulty: .beginner,
        lessons: [
            Lesson(id: "sk1", title: "课堂用语", titleEn: "Classroom", titleYue: "課堂用語",
                dialogues: [
                    Dialogue(id: "skd1", speaker: "老师", speakerEn: "Teacher", cantonese: "各位同學，早晨", jyutping: "gok3 wai2 tung4 hok6 zou2 san4", chinese: "同学们早上好", english: "Good morning class", audioFileName: nil),
                    Dialogue(id: "skd2", speaker: "学生", speakerEn: "Student", cantonese: "老師早晨", jyutping: "lou5 si1 zou2 san4", chinese: "老师早上好", english: "Good morning teacher", audioFileName: nil),
                    Dialogue(id: "skd3", speaker: "老师", speakerEn: "Teacher", cantonese: "打開書本第三頁", jyutping: "daa2 hoi1 syu1 bun2 dai6 saam1 jip6", chinese: "打开书第三页", english: "Open to page 3", audioFileName: nil),
                    Dialogue(id: "skd4", speaker: "学生", speakerEn: "Student", cantonese: "老師，我唔明", jyutping: "lou5 si1 ngo5 m4 ming4", chinese: "老师我不懂", english: "I do not understand", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "skv1", cantonese: "上堂", jyutping: "soeng5 tong4", chinese: "上课", english: "class", exampleSentence: "我哋上緊堂"),
                    VocabularyItem(id: "skv2", cantonese: "做功課", jyutping: "zou6 gung1 fo3", chinese: "做作业", english: "homework", exampleSentence: "我未做功課"),
                    VocabularyItem(id: "skv3", cantonese: "考試", jyutping: "haau2 si5", chinese: "考试", english: "exam", exampleSentence: "下個星期考試"),
                ],
                grammarTips: ["'唔明'是'不明白'的意思", "'邊個'是'谁'的意思"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 1),
            Lesson(id: "sk2", title: "同学交流", titleEn: "Chat with Classmates", titleYue: "同學交流",
                dialogues: [
                    Dialogue(id: "skd5", speaker: "A", speakerEn: "A", cantonese: "你食咗飯未？", jyutping: "nei5 sik6 zo2 faan6 mei6", chinese: "你吃饭了吗？", english: "Have you eaten?", audioFileName: nil),
                    Dialogue(id: "skd6", speaker: "B", speakerEn: "B", cantonese: "未呀，一齊去食？", jyutping: "mei6 aa3 jat1 cai4 heoi3 sik6", chinese: "还没，一起去？", english: "Not yet, let us go?", audioFileName: nil),
                    Dialogue(id: "skd7", speaker: "A", speakerEn: "A", cantonese: "好呀，去邊度？", jyutping: "hou2 aa3 heoi3 bin1 dou6", chinese: "好啊，去哪？", english: "Sure, where?", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "skv4", cantonese: "一齊", jyutping: "jat1 cai4", chinese: "一起", english: "together", exampleSentence: "一齊去玩"),
                ],
                grammarTips: ["'未'在句末表示疑问", "'去邊度'是'去哪里'"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 2),
        ], isPremium: false, order: 5)
    
    static let travel = Course(
        id: "travel", title: "旅行粤语", titleEn: "Travel Cantonese", titleYue: "旅行粵語",
        description: "酒店入住、景点观光、紧急情况等旅行场景",
        descriptionEn: "Hotel, sightseeing, emergencies",
        iconName: "airplane", colorHex: "F39C12", category: .travel, difficulty: .beginner,
        lessons: [
            Lesson(id: "tr1", title: "酒店入住", titleEn: "Hotel Check-in", titleYue: "酒店入住",
                dialogues: [
                    Dialogue(id: "trd1", speaker: "客人", speakerEn: "Guest", cantonese: "我訂咗房，我姓張", jyutping: "ngo5 deng6 zo2 fong4 ngo5 sing3 zoeng1", chinese: "我订了房，姓张", english: "I have a reservation", audioFileName: nil),
                    Dialogue(id: "trd2", speaker: "職員", speakerEn: "Staff", cantonese: "張先生你好，房卡", jyutping: "zoeng1 sin1 saang1 nei5 hou2 fong4 kaa1", chinese: "张先生你好，房卡", english: "Here is your key card", audioFileName: nil),
                    Dialogue(id: "trd3", speaker: "客人", speakerEn: "Guest", cantonese: "請問早餐幾點開始？", jyutping: "cing2 man6 zou2 caan1 gei2 dim2 hoi1 ci2", chinese: "早餐几点开始？", english: "Breakfast time?", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "trv1", cantonese: "訂房", jyutping: "deng6 fong4", chinese: "订房", english: "book room", exampleSentence: "我想訂房"),
                    VocabularyItem(id: "trv2", cantonese: "退房", jyutping: "teoi3 fong4", chinese: "退房", english: "check out", exampleSentence: "聽日中午退房"),
                ],
                grammarTips: ["'訂咗'是'订了'的意思", "'咗'表示动作完成"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 1),
            Lesson(id: "tr2", title: "紧急情况", titleEn: "Emergencies", titleYue: "緊急情況",
                dialogues: [
                    Dialogue(id: "trd4", speaker: "游客", speakerEn: "Tourist", cantonese: "唔該，我唔見咗護照", jyutping: "m4 goi1 ngo5 m4 gin3 zo2 wu6 ziu3", chinese: "我的护照丢了", english: "I lost my passport", audioFileName: nil),
                    Dialogue(id: "trd5", speaker: "警察", speakerEn: "Police", cantonese: "最後見喺邊度？", jyutping: "zeoi3 hau6 gin3 hai2 bin1 dou6", chinese: "最后在哪见的？", english: "Where last seen?", audioFileName: nil),
                ],
                vocabulary: [], grammarTips: [], practiceSentences: [], isCompleted: false, progress: 0, order: 2),
        ], isPremium: false, order: 6)
}
