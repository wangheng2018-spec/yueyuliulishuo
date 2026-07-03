import Foundation

extension CourseDataProvider {
    static let phone = Course(
        id: "phone", title: "电话聊天", titleEn: "Phone Conversations", titleYue: "電話聊天",
        description: "电话预约、通话用语、煲电话粥",
        descriptionEn: "Phone calls and chatting",
        iconName: "phone", colorHex: "E74C3C", category: .phone, difficulty: .intermediate,
        lessons: [
            Lesson(id: "ph1", title: "打电话预约", titleEn: "Phone Appointments", titleYue: "打電話預約",
                dialogues: [
                    Dialogue(id: "phd1", speaker: "你", speakerEn: "You", cantonese: "喂，請問係咪陳醫生診所？", jyutping: "wai3 cing2 man6 hai6 mai6 can4 ji1 sang1 can2 so2", chinese: "请问是陈医生诊所吗？", english: "Is this Dr Chan?", audioFileName: nil),
                    Dialogue(id: "phd2", speaker: "接待員", speakerEn: "Receptionist", cantonese: "係呀，有咩幫到你？", jyutping: "hai6 aa3 jau5 me1 bong1 dou3 nei5", chinese: "是的，有什么可以帮您？", english: "How can I help?", audioFileName: nil),
                    Dialogue(id: "phd3", speaker: "你", speakerEn: "You", cantonese: "我想約聽日睇醫生", jyutping: "ngo5 soeng2 joek3 ting1 jat6 tai2 ji1 sang1", chinese: "我想约明天看医生", english: "Appointment tomorrow", audioFileName: nil),
                    Dialogue(id: "phd4", speaker: "接待員", speakerEn: "Receptionist", cantonese: "下晝三點得唔得？", jyutping: "haa6 ng5 saam1 dim2 dak1 m4 dak1", chinese: "下午三点可以吗？", english: "3pm okay?", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "phv1", cantonese: "喂", jyutping: "wai3", chinese: "喂", english: "hello", exampleSentence: "喂，你搵邊位？"),
                    VocabularyItem(id: "phv2", cantonese: "搵", jyutping: "wan2", chinese: "找", english: "look for", exampleSentence: "我搵陳先生"),
                    VocabularyItem(id: "phv3", cantonese: "留口訊", jyutping: "lau4 hau2 seon3", chinese: "留言", english: "leave message", exampleSentence: "請留口訊"),
                ],
                grammarTips: ["'喂'是电话标准开头", "'係咪'是'是不是'的意思", "'搵'是'找'的意思"],
                practiceSentences: [
                    PracticeSentence(id: "php1", cantonese: "喂，請問陳生在嗎？", jyutping: "wai3 cing2 man6 can4 saang1 zoi6 maa1", chinese: "请问陈先生在吗？", audioFileName: nil),
                ], isCompleted: false, progress: 0, order: 1),
            Lesson(id: "ph2", title: "煲电话粥", titleEn: "Phone Chat", titleYue: "煲電話粥",
                dialogues: [
                    Dialogue(id: "phd5", speaker: "A", speakerEn: "A", cantonese: "你喺度做緊咩？", jyutping: "nei5 hai2 dou6 zou6 gan2 me1", chinese: "你在做什么？", english: "What are you doing?", audioFileName: nil),
                    Dialogue(id: "phd6", speaker: "B", speakerEn: "B", cantonese: "睇緊電視，你呢？", jyutping: "tai2 gan2 din6 si6 nei5 ne1", chinese: "在看电视，你呢？", english: "Watching TV, you?", audioFileName: nil),
                    Dialogue(id: "phd7", speaker: "A", speakerEn: "A", cantonese: "你尋日去咗邊度玩？", jyutping: "nei5 cam4 jat6 heoi3 zo2 bin1 dou6 waan2", chinese: "昨天去哪玩了？", english: "Where did you go yesterday?", audioFileName: nil),
                    Dialogue(id: "phd8", speaker: "B", speakerEn: "B", cantonese: "同朋友去咗行街", jyutping: "tung4 pang4 jau5 heoi3 zo2 haang4 gaai1", chinese: "和朋友去逛街", english: "Went shopping", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "phv4", cantonese: "尋日", jyutping: "cam4 jat6", chinese: "昨天", english: "yesterday", exampleSentence: "尋日好開心"),
                    VocabularyItem(id: "phv5", cantonese: "行街", jyutping: "haang4 gaai1", chinese: "逛街", english: "shopping", exampleSentence: "去行街買嘢"),
                    VocabularyItem(id: "phv6", cantonese: "瞓覺", jyutping: "fan3 gaau3", chinese: "睡觉", english: "sleep", exampleSentence: "早啲瞓覺"),
                ],
                grammarTips: ["'尋日'是'昨天'", "粤语用'緊'表示进行中"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 2),
            Lesson(id: "ph3", title: "电话常用语", titleEn: "Common Phone", titleYue: "電話常用語",
                dialogues: [
                    Dialogue(id: "phd9", speaker: "A", speakerEn: "A", cantonese: "佢唔喺度，遲啲打嚟", jyutping: "keoi5 m4 hai2 dou6 ci4 di1 daa2 lai4", chinese: "他不在，晚点打来", english: "He is out, call later", audioFileName: nil),
                    Dialogue(id: "phd10", speaker: "B", speakerEn: "B", cantonese: "聽唔清楚，大聲啲得唔得？", jyutping: "teng1 m4 cing1 co2 daai6 seng1 di1 dak1 m4 dak1", chinese: "听不清，能大声点吗？", english: "Can you speak up?", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "phv7", cantonese: "收線", jyutping: "sau1 sin3", chinese: "挂电话", english: "hang up", exampleSentence: "佢收咗線"),
                    VocabularyItem(id: "phv8", cantonese: "打錯", jyutping: "daa2 co3", chinese: "打错", english: "wrong number", exampleSentence: "你打錯電話啦"),
                ],
                grammarTips: ["'遲啲'是'晚一点'", "'大聲啲'是'大声一点'"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 3),
        ], isPremium: true, order: 7)
    
    static let culture = Course(
        id: "culture", title: "香港文化", titleEn: "Hong Kong Culture", titleYue: "香港文化",
        description: "了解香港饮食、节庆、电影等文化背景",
        descriptionEn: "Explore HK food, festivals, movies",
        iconName: "star", colorHex: "1ABC9C", category: .culture, difficulty: .intermediate,
        lessons: [
            Lesson(id: "cu1", title: "茶餐厅文化", titleEn: "Cha Chaan Teng", titleYue: "茶餐廳文化",
                dialogues: [
                    Dialogue(id: "cud1", speaker: "A", speakerEn: "A", cantonese: "茶餐廳嘢食好有特色", jyutping: "caa4 caan1 teng2 je5 sik6 hou2 jau5 dak6 sik1", chinese: "茶餐厅食物很有特色", english: "Cha chaan teng food is unique", audioFileName: nil),
                    Dialogue(id: "cud2", speaker: "B", speakerEn: "B", cantonese: "絲襪奶茶同蛋撻最出名", jyutping: "si1 mat6 naai5 caa4 tung4 daan6 taat3 zeoi3 ceot1 meng4", chinese: "丝袜奶茶和蛋挞最出名", english: "Milk tea and egg tarts are famous", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "cuv1", cantonese: "絲襪奶茶", jyutping: "si1 mat6 naai5 caa4", chinese: "丝袜奶茶", english: "HK milk tea", exampleSentence: "我好鍾意絲襪奶茶"),
                    VocabularyItem(id: "cuv2", cantonese: "蛋撻", jyutping: "daan6 taat3", chinese: "蛋挞", english: "egg tart", exampleSentence: "新鮮蛋撻最好食"),
                ],
                grammarTips: [], practiceSentences: [], isCompleted: false, progress: 0, order: 1),
            Lesson(id: "cu2", title: "粤语流行文化", titleEn: "Cantonese Pop", titleYue: "流行文化",
                dialogues: [
                    Dialogue(id: "cud3", speaker: "A", speakerEn: "A", cantonese: "你鍾意聽邊個歌手嘅歌？", jyutping: "nei5 zung1 ji3 teng1 bin1 go3 go1 sau2 ge3 go1", chinese: "你喜欢谁唱的歌？", english: "Which singer do you like?", audioFileName: nil),
                    Dialogue(id: "cud4", speaker: "B", speakerEn: "B", cantonese: "陳奕迅！佢啲歌好有意義", jyutping: "can4 jik6 seon3 keoi5 di1 go1 hou2 jau5 ji3 ji6", chinese: "陈奕迅！他的歌很有意义", english: "Eason Chan, his songs are meaningful", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "cuv3", cantonese: "睇戲", jyutping: "tai2 hei3", chinese: "看电影", english: "watch movie", exampleSentence: "聽晚一齊睇戲？"),
                    VocabularyItem(id: "cuv4", cantonese: "聽歌", jyutping: "teng1 go1", chinese: "听歌", english: "listen to music", exampleSentence: "我成日聽粵語歌"),
                ],
                grammarTips: [], practiceSentences: [], isCompleted: false, progress: 0, order: 2),
        ], isPremium: true, order: 8)
    
    static let slang = Course(
        id: "slang", title: "俚语俗语", titleEn: "Cantonese Slang", titleYue: "俚語俗語",
        description: "学习地道粤语俚语、俗语和潮语",
        descriptionEn: "Learn authentic Cantonese slang",
        iconName: "text.bubble", colorHex: "E67E22", category: .slang, difficulty: .advanced,
        lessons: [
            Lesson(id: "sl1", title: "常用俚语", titleEn: "Common Slang", titleYue: "常用俚語",
                dialogues: [
                    Dialogue(id: "sld1", speaker: "A", speakerEn: "A", cantonese: "你個樣好Hea喎", jyutping: "nei5 go3 joeng6 hou2 hea3 wo3", chinese: "你看上去很随性", english: "You look chill", audioFileName: nil),
                    Dialogue(id: "sld2", speaker: "B", speakerEn: "B", cantonese: "冇計，今日Chill一日", jyutping: "mou5 gai3 gam1 jat6 chill1 jat1 jat6", chinese: "今天放松一天", english: "Chilling today", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "slv1", cantonese: "Hea", jyutping: "hea3", chinese: "随性", english: "chill", exampleSentence: "佢做嘢好Hea"),
                    VocabularyItem(id: "slv2", cantonese: "Chill", jyutping: "chill1", chinese: "放松", english: "relax", exampleSentence: "今晚Chill下"),
                    VocabularyItem(id: "slv3", cantonese: "O嘴", jyutping: "o1 zeoi2", chinese: "目瞪口呆", english: "speechless", exampleSentence: "佢O晒嘴"),
                ],
                grammarTips: ["不少粤语俚语来自英文", "'Hea'是粤语特有词，表示随意"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 1),
            Lesson(id: "sl2", title: "传统俗语", titleEn: "Traditional Sayings", titleYue: "傳統俗語",
                dialogues: [
                    Dialogue(id: "sld3", speaker: "A", speakerEn: "A", cantonese: "佢咁懶，請佢係倒米", jyutping: "keoi5 gam3 laan5 cing2 keoi5 hai6 dou3 mai5", chinese: "他这么懒，请他等于搞砸", english: "Hiring him spoils business", audioFileName: nil),
                    Dialogue(id: "sld4", speaker: "B", speakerEn: "B", cantonese: "佢成日大想頭", jyutping: "keoi5 seng4 jat6 daai6 soeng2 tau4", chinese: "他老是异想天开", english: "He always has wishful thinking", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "slv4", cantonese: "倒米", jyutping: "dou3 mai5", chinese: "搞砸", english: "spoil", exampleSentence: "你唔好倒米啦"),
                    VocabularyItem(id: "slv5", cantonese: "大想頭", jyutping: "daai6 soeng2 tau4", chinese: "异想天开", english: "daydreaming", exampleSentence: "你咪大想頭啦"),
                ],
                grammarTips: ["'倒米'字面意思'倒掉米'，实际是'搞砸'"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 2),
        ], isPremium: true, order: 9)
    
    static let grammar = Course(
        id: "grammar", title: "粤语语法基础", titleEn: "Cantonese Grammar", titleYue: "粵語語法基礎",
        description: "掌握粤语句式、量词、助词等核心语法",
        descriptionEn: "Master structures, classifiers, particles",
        iconName: "textformat", colorHex: "3498DB", category: .grammar, difficulty: .intermediate,
        lessons: [
            Lesson(id: "gr1", title: "句式结构", titleEn: "Sentences", titleYue: "句式結構",
                dialogues: [
                    Dialogue(id: "grd1", speaker: "老师", speakerEn: "Teacher", cantonese: "粵語句子結構同普通話唔同", jyutping: "jyut6 jyu5 geoi3 zi2 git3 kau3 tung4 pou2 tung1 waa6 m4 tung4", chinese: "粤语句子结构不同", english: "Sentence structure differs", audioFileName: nil),
                    Dialogue(id: "grd2", speaker: "老师", speakerEn: "Teacher", cantonese: "例如：我俾本書你", jyutping: "jyut6 jyu4 ngo5 bei2 bun2 syu1 nei5", chinese: "例如：我给你书", english: "E.g. I give you a book", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "grv1", cantonese: "俾", jyutping: "bei2", chinese: "给", english: "give", exampleSentence: "俾我睇下"),
                ],
                grammarTips: ["粤语双宾语结构：动词+直接宾语+间接宾语"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 1),
            Lesson(id: "gr2", title: "量词学习", titleEn: "Classifiers", titleYue: "量詞學習",
                dialogues: [], vocabulary: [
                    VocabularyItem(id: "grv2", cantonese: "個", jyutping: "go3", chinese: "个", english: "general", exampleSentence: "一個人"),
                    VocabularyItem(id: "grv3", cantonese: "隻", jyutping: "zek3", chinese: "只", english: "animal", exampleSentence: "一隻狗"),
                    VocabularyItem(id: "grv4", cantonese: "條", jyutping: "tiu4", chinese: "条", english: "long", exampleSentence: "一條魚"),
                    VocabularyItem(id: "grv5", cantonese: "嚿", jyutping: "gau6", chinese: "块", english: "chunk", exampleSentence: "一嚿石頭"),
                ],
                grammarTips: ["粤语量词更丰富", "'嚿'是粤语特有量词"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 2),
            Lesson(id: "gr3", title: "语气助词", titleEn: "Particles", titleYue: "語氣助詞",
                dialogues: [
                    Dialogue(id: "grd3", speaker: "A", speakerEn: "A", cantonese: "你去唔去呀？", jyutping: "nei5 heoi3 m4 heoi3 aa3", chinese: "你去不去呀？", english: "Are you going?", audioFileName: nil),
                    Dialogue(id: "grd4", speaker: "B", speakerEn: "B", cantonese: "去啦", jyutping: "heoi3 laa1", chinese: "去咯", english: "Let us go", audioFileName: nil),
                    Dialogue(id: "grd5", speaker: "A", speakerEn: "A", cantonese: "好嘅，等陣見", jyutping: "hou2 ge3 dang2 zan6 gin3", chinese: "好的，等会见", english: "See you later", audioFileName: nil),
                ],
                vocabulary: [
                    VocabularyItem(id: "grv6", cantonese: "啦", jyutping: "laa1", chinese: "吧", english: "particle", exampleSentence: "一齊去啦"),
                    VocabularyItem(id: "grv7", cantonese: "呀", jyutping: "aa3", chinese: "呀", english: "question", exampleSentence: "你係邊個呀？"),
                ],
                grammarTips: ["粤语有大量语气助词", "'啦'用于提议或肯定", "'呀'是疑问助词"],
                practiceSentences: [], isCompleted: false, progress: 0, order: 3),
        ], isPremium: true, order: 10)
}
