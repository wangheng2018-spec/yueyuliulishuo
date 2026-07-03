const COURSES_DATA = [{"id":"pronunciation","title":"粤语发音入门","icon":"🎙","color":"#FF6B6B","cat":"pronunciation","diff":"beginner","premium":false,"order":1,"desc":"掌握粤语六个声调和声韵母系统","lessons":[{"id":"pr1","title":"声调入门","order":1,"dialogues":[{"id":"d1","sp":"老师","ca":"粵語有六個聲調","jp":"Jyut6 jyu5 jau5 luk6 go3 seng1 diu6","zh":"粤语有六个声调"},{"id":"d2","sp":"老师","ca":"第一聲係高平，第二聲係高升","jp":"dai6 jat1 seng1 hai6 gou1 ping4, dai6 ji6 seng1 hai6 gou1 sing1","zh":"第一声高平第二声高升"},{"id":"d3","sp":"老师","ca":"第三聲係中平，第四聲係低降","jp":"dai6 saam1 seng1 hai6 zung1 ping4, dai6 sei3 seng1 hai6 dai1 gong3","zh":"第三声中平第四声低降"},{"id":"d4","sp":"老师","ca":"第五聲係低升，第六聲係低入","jp":"dai6 ng5 seng1 hai6 dai1 sing1, dai6 luk6 seng1 hai6 dai1 jap6","zh":"第五声低升第六声低入"}],"voc":[{"ca":"詩","jp":"si1","zh":"诗","ex":"呢首詩寫得好好"},{"ca":"史","jp":"si2","zh":"史","ex":"中國有悠久嘅歷史"},{"ca":"試","jp":"si3","zh":"试","ex":"我試下得唔得"},{"ca":"時","jp":"si4","zh":"时","ex":"幾點鐘？"},{"ca":"市","jp":"si5","zh":"市","ex":"去街市買餸"}],"tips":["粤语有六个声调，比普通话多两个","声调不同意思完全不同，例如「詩」「史」「試」"],"pr":[{"ca":"你好","jp":"nei5 hou2","zh":"你好"},{"ca":"早晨","jp":"zou2 san4","zh":"早上好"},{"ca":"多謝","jp":"do1 ze6","zh":"谢谢"}]},{"id":"pr2","title":"声母学习","order":2,"dialogues":[{"id":"d5","sp":"老师","ca":"粵語有十九個聲母","jp":"Jyut6 jyu5 jau5 sap6 gau2 go3 seng1 mou5","zh":"粤语有十九个声母"},{"id":"d6","sp":"老师","ca":"ng-聲母係粵語特色，普通話冇㗎","jp":"ng- seng1 mou5 hai6 jyut6 jyu5 dik6 sik1, pou2 tung1 waa2 mou5 gaa3","zh":"ng-声母是粤语特色，普通话没有"},{"id":"d7","sp":"学生","ca":"ng-要點樣發音㗎？","jp":"ng- jiu3 dim2 joeng2 faat3 jam1 gaa3","zh":"ng-要怎么发音？"},{"id":"d8","sp":"老师","ca":"好似「我」字，嘴巴張開，用鼻音發出ng","jp":"hou2 ci5 ngo5 zi6, zeoi4 baa1 zoeng1 hoi1, jung6 bei6 jam1 faat3 ceot1 ng","zh":"像「我」字，嘴巴张开，用鼻音发出ng"}],"voc":[{"ca":"我","jp":"ngo5","zh":"我","ex":"我係香港人"},{"ca":"你","jp":"nei5","zh":"你","ex":"你叫咩名？"},{"ca":"佢","jp":"keoi5","zh":"他/她","ex":"佢係我朋友"},{"ca":"唔","jp":"m4","zh":"不","ex":"唔好意思"},{"ca":"係","jp":"hai6","zh":"是","ex":"我係學生"}],"tips":["粤语保留古汉语的入声韵尾-p/-t/-k","声母ng-在普通话中已经消失"],"pr":[{"ca":"我係學生","jp":"ngo5 hai6 hok6 saang1","zh":"我是学生"},{"ca":"你係邊位？","jp":"nei5 hai6 bin1 wai2","zh":"你是哪位？"}]},{"id":"pr3","title":"韵母学习","order":3,"dialogues":[{"id":"d9","sp":"老师","ca":"粵語有超過五十個韻母","jp":"jyut6 jyu5 jau5 ciu1 gwo3 ng5 sap6 go3 wan5 mou5","zh":"粤语有超过五十个韵母"},{"id":"d10","sp":"老师","ca":"入聲韻尾-p,-t,-k係粵語特色","jp":"jap6 seng1 wan5 mei5 -p,-t,-k hai6 jyut6 jyu5 dik6 sik1","zh":"入声韵尾-p,-t,-k是粤语特色"},{"id":"d11","sp":"学生","ca":"可唔可以舉個例？","jp":"ho2 m4 ho2 ji5 geoi2 go3 lai6","zh":"可以举个例子吗？"},{"id":"d12","sp":"老师","ca":"「十」讀sap6，「一」讀jat1，「六」讀luk6","jp":"sap6, jat1, luk6","zh":"十读sap6，一读jat1，六读luk6"}],"voc":[{"ca":"十","jp":"sap6","zh":"十","ex":"十蚊一個"},{"ca":"一","jp":"jat1","zh":"一","ex":"一齊去啦"},{"ca":"六","jp":"luk6","zh":"六","ex":"六點鐘"},{"ca":"八","jp":"baat3","zh":"八","ex":"八個字"},{"ca":"百","jp":"baak3","zh":"百","ex":"一百蚊"}],"tips":["入声韵尾-p/-t/-k要短促有力不爆破","练习「濕」「失」「塞」感受三个入声尾音的区别"],"pr":[{"ca":"六點半","jp":"luk6 dim2 bun3","zh":"六点半"},{"ca":"八十蚊","jp":"baat3 sap6 man1","zh":"八十块"}]}]},{"id":"social","title":"社交礼仪","icon":"🤝","color":"#4ECDC4","cat":"social","diff":"beginner","premium":false,"order":2,"desc":"学会打招呼、介绍、道歉","lessons":[{"id":"sc1","title":"打招呼","order":1,"dialogues":[{"id":"sd1","sp":"A","ca":"你好！","jp":"nei5 hou2","zh":"你好！"},{"id":"sd2","sp":"B","ca":"你叫咩名呀？","jp":"nei5 giu3 me1 meng2 aa3","zh":"你叫什么名字？"},{"id":"sd3","sp":"A","ca":"我叫小明，好開心識到你","jp":"ngo5 giu3 siu2 ming4, hou2 hoi1 sam1 sik1 dou3 nei5","zh":"我叫小明，很高兴认识你"},{"id":"sd4","sp":"B","ca":"早晨！今日天氣幾好","jp":"zou2 san4! gam1 jat6 tin1 hei3 gei2 hou2","zh":"早上好！今天天气不错"}],"voc":[{"ca":"你好","jp":"nei5 hou2","zh":"你好","ex":"你好請問你貴姓？"},{"ca":"早晨","jp":"zou2 san4","zh":"早上好","ex":"早晨今日天氣幾好"},{"ca":"唔該","jp":"m4 goi1","zh":"谢谢(请求)","ex":"唔該你幫我開門"},{"ca":"多謝","jp":"do1 ze6","zh":"谢谢(受赠)","ex":"多謝你份禮物"},{"ca":"對唔住","jp":"deoi3 m4 zyu6","zh":"对不起","ex":"對唔住我遲到咗"}],"tips":["“早晨”只在早上使用","“唔該”用于请求帮助时的感谢，“多謝”用于收到礼物"],"pr":[{"ca":"你好","jp":"nei5 hou2","zh":"你好"},{"ca":"早晨","jp":"zou2 san4","zh":"早上好"}]},{"id":"sc2","title":"道歉与感谢","order":2,"dialogues":[{"id":"sd5","sp":"A","ca":"對唔住我整爛咗你本書","jp":"deoi3 m4 zyu6 ngo5 zing2 laan6 zo2 nei5 bun2 syu1","zh":"对不起我弄坏了你的书"},{"id":"sd6","sp":"B","ca":"唔緊要，本書舊㗎喇","jp":"m4 gan2 jiu3, bun2 syu1 gau6 gaa3 laa3","zh":"没关系，那本书旧的了"},{"id":"sd7","sp":"A","ca":"多謝你唔怪我","jp":"do1 ze6 nei5 m4 gwaai3 ngo5","zh":"谢谢你不怪我"},{"id":"sd8","sp":"B","ca":"唔使客氣，大家朋友嚟㗎嘛","jp":"m4 sai2 haak3 hei3, daai6 gaa1 pang4 jau5 lai4 gaa3 maa3","zh":"不客气，大家都是朋友"}],"voc":[{"ca":"整爛","jp":"zing2 laan6","zh":"弄坏","ex":"唔小心整爛咗"},{"ca":"唔緊要","jp":"m4 gan2 jiu3","zh":"没关系","ex":"唔緊要㗎"},{"ca":"唔怪","jp":"m4 gwaai3","zh":"不怪","ex":"佢冇怪我"},{"ca":"唔使客氣","jp":"m4 sai2 haak3 hei3","zh":"不客气","ex":"唔使客氣啦"}],"tips":["粤语中“唔緊要”=没关系","“唔使客氣”=不客气，回应感谢"],"pr":[{"ca":"對唔住我遲咗","jp":"deoi3 m4 zyu6 ngo5 ci4 zo2","zh":"对不起我迟到了"},{"ca":"多謝你帮忙","jp":"do1 ze6 nei5 bong1 mong6","zh":"谢谢你帮忙"}]},{"id":"sc3","title":"邀请与约会","order":3,"dialogues":[{"id":"sd9","sp":"A","ca":"你聽日得唔得閒？","jp":"nei5 ting1 jat6 dak1 m4 dak1 haan4","zh":"你明天有空吗？"},{"id":"sd10","sp":"B","ca":"得閒呀，做咩事？","jp":"dak1 haan4 aa3, zou6 me1 si6","zh":"有空呀，什么事？"},{"id":"sd11","sp":"A","ca":"我想約你一齊飲茶","jp":"ngo5 soeng2 joek3 nei5 jat1 cai4 jam2 caa4","zh":"我想约你一起喝茶"},{"id":"sd12","sp":"B","ca":"好呀！幾點？邊度等？","jp":"hou2 aa3! gei2 dim2? bin1 dou6 dang2","zh":"好呀！几点？在哪里等？"},{"id":"sd13","sp":"A","ca":"下晝三點，酒樓門口等啦","jp":"haa6 zau3 saam1 dim2, zau2 lau4 mun4 hau2 dang2 laa1","zh":"下午三点，酒楼门口等"}],"voc":[{"ca":"得閒","jp":"dak1 haan4","zh":"有空","ex":"你得唔得閒？"},{"ca":"約","jp":"joek3","zh":"约","ex":"我想約你"},{"ca":"飲茶","jp":"jam2 caa4","zh":"喝茶/早茶","ex":"一齊去飲茶"},{"ca":"等","jp":"dang2","zh":"等","ex":"我等你"}],"tips":["“飲茶”在粤语中不仅指喝茶，更指去酒楼吃点心","“得唔得閒”是粤语最常用的邀约方式"],"pr":[{"ca":"聽日得閒嗎？","jp":"ting1 jat6 dak1 haan4 maa3","zh":"明天有空吗？"},{"ca":"約咗朋友食飯","jp":"joek3 zo2 pang4 jau5 sik6 faan6","zh":"约了朋友吃饭"}]}]},{"id":"daily","title":"生活用语","icon":"🏠","color":"#45B7D1","cat":"daily","diff":"beginner","premium":false,"order":3,"desc":"日常生活中的实用粤语表达：吃饭购物问路天气","lessons":[{"id":"dl1","title":"食饭讲嘢","order":1,"dialogues":[{"id":"dd1","sp":"A","ca":"你食咗飯未呀？","jp":"nei5 sik6 zo2 faan6 mei6 aa3","zh":"你吃饭了吗？"},{"id":"dd2","sp":"B","ca":"未呀，一齊去食好唔好？","jp":"mei6 aa3 jat1 cai4 heoi3 sik6 hou2 m4 hou2","zh":"还没一起去吃好吗？"},{"id":"dd3","sp":"A","ca":"好呀！去邊度食？","jp":"hou2 aa3 heoi3 bin1 dou6 sik6","zh":"好啊去哪里吃？"},{"id":"dd4","sp":"B","ca":"樓下間茶餐廳唔錯㗎","jp":"lau4 haa6 gaan1 caa4 caan1 teng1 m4 co3 gaa3","zh":"楼下那家茶餐厅不错"}],"voc":[{"ca":"食飯","jp":"sik6 faan6","zh":"吃饭","ex":"你食咗飯未呀？"},{"ca":"一齊","jp":"jat1 cai4","zh":"一起","ex":"我哋一齊去啦"},{"ca":"茶餐廳","jp":"caa4 caan1 teng1","zh":"茶餐厅","ex":"樓下間茶餐廳好出名"}],"tips":["「食咗飯未」是粤语常见的打招呼方式"],"pr":[{"ca":"我食咗飯喇","jp":"ngo5 sik6 zo2 faan6 laa3","zh":"我吃过饭了"}]},{"id":"dl2","title":"买嘢讲价","order":2,"dialogues":[{"id":"dd5","sp":"A","ca":"呢個幾多錢呀？","jp":"ni1 go3 gei2 do1 cin2 aa3","zh":"这个多少钱？"},{"id":"dd6","sp":"B","ca":"一百蚊咋，好抵㗎！","jp":"jat1 baak3 man1 zaa3 hou2 dai2 gaa3","zh":"一百块而已很划算！"},{"id":"dd7","sp":"A","ca":"可唔可以平啲呀？","jp":"ho2 m4 ho2 ji5 peng4 di1 aa3","zh":"可以便宜点吗？"},{"id":"dd8","sp":"B","ca":"咁啦俾你八十蚊","jp":"gam2 laa1 bei2 nei5 baat3 sap6 man1","zh":"这样吧算你八十"}],"voc":[{"ca":"幾多錢","jp":"gei2 do1 cin2","zh":"多少钱","ex":"呢個幾多錢呀？"},{"ca":"蚊","jp":"man1","zh":"块元","ex":"十蚊就得啦"},{"ca":"平啲","jp":"peng4 di1","zh":"便宜点","ex":"可唔可以平啲？"}],"tips":["「蚊」在粤语中是「元」的意思"],"pr":[{"ca":"呢件衫幾錢？","jp":"ni1 gin6 saam1 gei2 cin2","zh":"这件衣服多少钱？"}]},{"id":"dl3","title":"问路搭车","order":3,"dialogues":[{"id":"dd9","sp":"A","ca":"唔該地鐵站點去呀？","jp":"m4 goi1 dei6 tit3 zaam6 dim2 heoi3 aa3","zh":"请问地铁站怎么走？"},{"id":"dd10","sp":"B","ca":"一直行轉右就見到","jp":"jat1 zik6 haang4 zyun2 jau6 zau6 gin3 dou3","zh":"直走右转就到了"},{"id":"dd11","sp":"A","ca":"要行幾耐呀？","jp":"jiu3 haang4 gei2 noi6 aa3","zh":"要走多久？"},{"id":"dd12","sp":"B","ca":"五分鐘左右","jp":"ng5 fan1 zung1 zo2 jau6","zh":"五分钟左右"}],"voc":[{"ca":"點去","jp":"dim2 heoi3","zh":"怎么去","ex":"車站點去㗎？"},{"ca":"一直行","jp":"jat1 zik6 haang4","zh":"直走","ex":"一直行就到"},{"ca":"轉右","jp":"zyun2 jau6","zh":"右转","ex":"前面轉右"},{"ca":"唔該晒","jp":"m4 goi1 saai3","zh":"非常感谢","ex":"唔該晒你幫手"}],"tips":["「唔該」用于请求帮助致谢"],"pr":[{"ca":"巴士站喺邊度？","jp":"baa1 si2 zaam6 hai2 bin1 dou6","zh":"公交站在哪里？"}]}]},{"id":"workplace","title":"职场粤语","icon":"💼","color":"#96CEB4","cat":"workplace","diff":"intermediate","premium":false,"order":4,"desc":"办公室沟通开会与同事客户交流","lessons":[{"id":"wp1","title":"返工打招呼","order":1,"dialogues":[{"id":"wd1","sp":"A","ca":"早晨！今日返工辛唔辛苦？","jp":"zou2 san4 gam1 jat6 faan1 gung1 san1 m4 san1 fu2","zh":"早上好今天上班辛苦吗？"},{"id":"wd2","sp":"B","ca":"都ok啦尋日開會到好夜","jp":"dou1 ok laa1 cam4 jat6 hoi1 wui5 dou3 hou2 je6","zh":"还行昨天开会到很晚"},{"id":"wd3","sp":"A","ca":"咁慘？今晚早啲收工啦","jp":"gam2 caam2 gam1 maan5 zou2 di1 sau1 gung1 laa1","zh":"这么惨今晚早点下班吧"}],"voc":[{"ca":"返工","jp":"faan1 gung1","zh":"上班","ex":"我九點返工"},{"ca":"開會","jp":"hoi1 wui6","zh":"开会","ex":"下晝要開會"},{"ca":"收工","jp":"sau1 gung1","zh":"下班","ex":"今晚幾點收工？"}],"tips":["OT在粤语中表示加班"],"pr":[{"ca":"我要OT","jp":"ngo5 jiu3 OT","zh":"我要加班"}]},{"id":"wp2","title":"开会倾嘢","order":2,"dialogues":[{"id":"wd4","sp":"A","ca":"大家早晨我哋開始開會","jp":"daai6 gaa1 zou2 san4 ngo5 dei6 hoi1 ci2 hoi1 wui5","zh":"大家早上好我们开始开会"},{"id":"wd5","sp":"B","ca":"我有一份報告要交","jp":"ngo5 jau5 jat1 fan6 bou3 gou3 jiu3 gaau1","zh":"我有一份报告要交"},{"id":"wd6","sp":"A","ca":"好你講兩句啦","jp":"hou2 nei5 gong2 loeng5 geoi3 laa1","zh":"好你来说两句"}],"voc":[{"ca":"我哋","jp":"ngo5 dei6","zh":"我们","ex":"我哋一齊努力"},{"ca":"報告","jp":"bou3 gou3","zh":"报告","ex":"份報告寫好未？"},{"ca":"傾","jp":"king1","zh":"聊谈论","ex":"傾下生意"}],"tips":["开会常说「大家有冇意見？」"],"pr":[{"ca":"大家點睇？","jp":"daai6 gaa1 dim2 tai2","zh":"大家怎么看？"}]}]},{"id":"school","title":"校园粤语","icon":"📚","color":"#DDA0DD","cat":"school","diff":"beginner","premium":false,"order":5,"desc":"校园生活中的粤语：上课考试交友","lessons":[{"id":"se1","title":"上课用语","order":1,"dialogues":[{"id":"se_d1","sp":"老师","ca":"上堂啦大家坐低","jp":"soeng5 tong4 laa1 daai6 gaa1 co5 dai1","zh":"上课了大家坐下"},{"id":"se_d2","sp":"学生","ca":"早晨老師！","jp":"zou2 san4 lou5 si1","zh":"老师早上好！"},{"id":"se_d3","sp":"老师","ca":"今日我哋教新一課","jp":"gam1 jat6 ngo5 dei6 gaau3 san1 jat1 fo3","zh":"今天我们教新课"},{"id":"se_d4","sp":"学生","ca":"我有問題想問","jp":"ngo5 jau5 man6 tai4 soeng2 man6","zh":"我有问题想问"}],"voc":[{"ca":"上堂","jp":"soeng5 tong4","zh":"上课","ex":"上堂啦"},{"ca":"老師","jp":"lou5 si1","zh":"老师","ex":"老師早晨"},{"ca":"教","jp":"gaau3","zh":"教","ex":"教新課"}],"tips":["「上堂」是上课的口语说法"],"pr":[{"ca":"我上堂去","jp":"ngo5 soeng5 tong4 heoi3","zh":"我去上课"}]},{"id":"se2","title":"考试准备","order":2,"dialogues":[{"id":"se_d5","sp":"A","ca":"聽日考試你溫咗書未？","jp":"ting1 jat6 haau2 si5 nei5 wan1 zo2 syu1 mei6","zh":"明天考试你复习了吗？"},{"id":"se_d6","sp":"B","ca":"溫咗少少但好驚唔合格","jp":"wan1 zo2 siu2 siu2 daan6 hou2 geng1 m4 hap6 gaak3","zh":"复习了一点但好怕不及格"},{"id":"se_d7","sp":"A","ca":"唔使驚一齊溫書啦","jp":"m4 sai2 geng1 jat1 cai4 wan1 syu1 laa1","zh":"别怕一起复习吧"}],"voc":[{"ca":"考試","jp":"haau2 si5","zh":"考试","ex":"聽日考試"},{"ca":"溫書","jp":"wan1 syu1","zh":"复习","ex":"溫咗書未？"},{"ca":"驚","jp":"geng1","zh":"怕","ex":"好驚"}],"tips":["「溫書」是复习的意思"],"pr":[{"ca":"我要溫書","jp":"ngo5 jiu3 wan1 syu1","zh":"我要复习"}]}]},{"id":"travel","title":"旅行粤语","icon":"✈️","color":"#F0E68C","cat":"travel","diff":"beginner","premium":false,"order":6,"desc":"旅行中需要的粤语：机场酒店景点餐厅","lessons":[{"id":"tr1","title":"机场入境","order":1,"dialogues":[{"id":"td1","sp":"A","ca":"請問登機閘口喺邊度？","jp":"cing2 man6 dang1 gei1 zaap6 hau2 hai2 bin1 dou6","zh":"请问登机口在哪里？"},{"id":"td2","sp":"B","ca":"喺左手邊行前啲就見到","jp":"hai2 zo2 sau2 bin1 haang4 cin4 di1 zau6 gin3 dou3","zh":"在左手边往前走就看到"},{"id":"td3","sp":"A","ca":"行李喺邊度拎？","jp":"hang4 lei5 hai2 bin1 dou6 ling1","zh":"行李在哪里取？"}],"voc":[{"ca":"登機","jp":"dang1 gei1","zh":"登机","ex":"幾點登機？"},{"ca":"行李","jp":"hang4 lei5","zh":"行李","ex":"拎行李"},{"ca":"喺","jp":"hai2","zh":"在","ex":"喺邊度？"}],"tips":["「喺」=在，如「喺邊度」=在哪里"],"pr":[{"ca":"行李喺度","jp":"hang4 lei5 hai2 dou6","zh":"行李在这里"}]},{"id":"tr2","title":"酒店入住","order":2,"dialogues":[{"id":"td4","sp":"A","ca":"我訂咗房想check in","jp":"ngo5 deng6 zo2 fong2 soeng2 check in","zh":"我订了房想办理入住"},{"id":"td5","sp":"B","ca":"好唔該俾你護照我","jp":"hou2 m4 goi1 bei2 nei5 wu6 ziu3 ngo5","zh":"好请给我您的护照"},{"id":"td6","sp":"A","ca":"房價包唔包早餐㗎？","jp":"fong2 gaa3 baau1 m4 baau1 zou2 caan1 gaa3","zh":"房价含早餐吗？"}],"voc":[{"ca":"訂房","jp":"deng6 fong2","zh":"订房","ex":"訂咗房"},{"ca":"護照","jp":"wu6 ziu3","zh":"护照","ex":"俾護照我"},{"ca":"早餐","jp":"zou2 caan1","zh":"早餐","ex":"包早餐嗎？"}],"tips":["香港酒店前台常用中英夹杂"],"pr":[{"ca":"有冇房？","jp":"jau5 mou5 fong2","zh":"有房间吗？"}]}]},{"id":"phone","title":"电话聊天","icon":"📞","color":"#FFA07A","cat":"phone","diff":"intermediate","premium":false,"order":7,"desc":"电话沟通中常用的粤语表达","lessons":[{"id":"ph1","title":"打电话","order":1,"dialogues":[{"id":"pd1","sp":"A","ca":"喂請問你搵邊位？","jp":"wai3 cing2 man6 nei5 wan2 bin1 wai2","zh":"喂请问你找哪位？"},{"id":"pd2","sp":"B","ca":"唔該我搵陳先生","jp":"m4 goi1 ngo5 wan2 can4 sin1 saang1","zh":"你好我找陈先生"},{"id":"pd3","sp":"A","ca":"請等一陣我幫你轉接","jp":"ceng2 dang2 jat1 zan6 ngo5 bong1 nei5 zyun2 zip3","zh":"请等一下我帮你转接"}],"voc":[{"ca":"喂","jp":"wai3","zh":"喂(电话开场)","ex":"喂你搵邊位？"},{"ca":"搵","jp":"wan2","zh":"找(人)","ex":"我搵陳生"},{"ca":"轉接","jp":"zyun2 zip3","zh":"转接","ex":"幫你轉接"}],"tips":["粤语电话开场几乎都用「喂」"],"pr":[{"ca":"喂係邊位？","jp":"wai3 hai6 bin1 wai2","zh":"喂是哪位？"}]},{"id":"ph2","title":"预约与留言","order":2,"dialogues":[{"id":"pd4","sp":"A","ca":"我想預約聽日下晝","jp":"ngo5 soeng2 jyu6 joek3 ting1 jat6 haa6 zau3","zh":"我想预约明天下午"},{"id":"pd5","sp":"B","ca":"唔好意思陳生唔喺度","jp":"m4 hou2 ji3 si1 can4 saang1 m4 hai2 dou6","zh":"不好意思陈先生不在"},{"id":"pd6","sp":"A","ca":"可唔可以留個口信？","jp":"ho2 m4 ho2 ji5 lau4 go3 hau2 seon3","zh":"可以留个口信吗？"}],"voc":[{"ca":"預約","jp":"jyu6 joek3","zh":"预约","ex":"我想預約"},{"ca":"留口信","jp":"lau4 hau2 seon3","zh":"留口信","ex":"留個口信"},{"ca":"唔喺度","jp":"m4 hai2 dou6","zh":"不在","ex":"佢唔喺度"}],"tips":["「唔喺度」表示不在"],"pr":[{"ca":"請留言","jp":"ceng2 lau4 jin4","zh":"请留言"}]}]},{"id":"culture","title":"香港文化","icon":"⭐","color":"#FFD700","cat":"culture","diff":"intermediate","premium":false,"order":8,"desc":"了解香港文化：饮茶节日地名美食","lessons":[{"id":"cu1","title":"饮茶文化","order":1,"dialogues":[{"id":"cd1","sp":"A","ca":"聽日一齊去飲茶好唔好？","jp":"ting1 jat6 jat1 cai4 heoi3 jam2 caa4 hou2 m4 hou2","zh":"明天一起去饮茶好吗？"},{"id":"cd2","sp":"B","ca":"好呀！去邊間酒樓？","jp":"hou2 aa3 heoi3 bin1 gaan1 zau2 lau4","zh":"好啊去哪家酒楼？"},{"id":"cd3","sp":"A","ca":"尖沙咀嗰間龍鳳樓啦","jp":"zim1 saa1 zeoi2 go2 gaan1 lung4 fung6 lau4 laa1","zh":"尖沙咀那间龙凤楼吧"}],"voc":[{"ca":"飲茶","jp":"jam2 caa4","zh":"喝茶/早茶","ex":"一齊飲茶"},{"ca":"酒樓","jp":"zau2 lau4","zh":"酒楼","ex":"去酒樓飲茶"},{"ca":"蝦餃","jp":"haa1 gaau2","zh":"虾饺","ex":"蝦餃好好味"}],"tips":["「飲茶」不仅是喝茶更是吃点心"],"pr":[{"ca":"一齊飲茶","jp":"jat1 cai4 jam2 caa4","zh":"一起喝早茶"}]},{"id":"cu2","title":"香港景点","order":2,"dialogues":[{"id":"cd4","sp":"A","ca":"香港有乜好玩嘅地方？","jp":"hoeng1 gong2 jau5 mat1 hou2 waan6 ge3 dei6 fong1","zh":"香港有什么好玩的地方？"},{"id":"cd5","sp":"B","ca":"太平山頂夜景好靚","jp":"taai3 ping4 saan1 deng2 je6 ging2 hou2 leng3","zh":"太平山顶夜景很漂亮"},{"id":"cd6","sp":"A","ca":"仲有呢？","jp":"zung6 jau5 ne1","zh":"还有呢？"},{"id":"cd7","sp":"B","ca":"維港星光大道都值得去","jp":"wai4 gong2 sing1 gwong1 daai6 dou6 dou1 zik6 dak1 heoi3","zh":"维港星光大道都值得去"}],"voc":[{"ca":"好玩","jp":"hou2 waan6","zh":"好玩","ex":"有乜好玩？"},{"ca":"夜景","jp":"je6 ging2","zh":"夜景","ex":"夜景好靚"},{"ca":"值得","jp":"zik6 dak1","zh":"值得","ex":"值得去"}],"tips":["香港人推荐景点常说「值得去」"],"pr":[{"ca":"香港好靚","jp":"hoeng1 gong2 hou2 leng3","zh":"香港很漂亮"}]}]},{"id":"slang","title":"俚语俗语","icon":"💬","color":"#B19CD9","cat":"slang","diff":"intermediate","premium":false,"order":9,"desc":"粤语常用俚语俗语和地道表达","lessons":[{"id":"sl1","title":"常用俚语","order":1,"dialogues":[{"id":"sld1","sp":"A","ca":"你個Friend好盞鬼喎！","jp":"nei5 go3 friend hou2 zaan2 gwai2 wo3","zh":"你朋友好有趣哦！"},{"id":"sld2","sp":"B","ca":"係呀佢成日搞搞震","jp":"hai6 aa3 keoi5 seng4 jat6 gaau2 gaau2 zan3","zh":"是啊他整天捣蛋"},{"id":"sld3","sp":"A","ca":"咁先好玩嘛","jp":"gam2 sin1 hou2 waan6 maa3","zh":"这样才好玩嘛"}],"voc":[{"ca":"盞鬼","jp":"zaan2 gwai2","zh":"有趣可爱","ex":"佢好盞鬼"},{"ca":"搞搞震","jp":"gaau2 gaau2 zan3","zh":"捣蛋","ex":"唔好搞搞震"},{"ca":"成日","jp":"seng4 jat6","zh":"整天","ex":"佢成日笑"}],"tips":["「盞鬼」形容事物有趣可爱"],"pr":[{"ca":"你好盞鬼","jp":"nei5 hou2 zaan2 gwai2","zh":"你好有趣"}]},{"id":"sl2","title":"地道口语","order":2,"dialogues":[{"id":"sld4","sp":"A","ca":"今日食咗啲乜嘢好西？","jp":"gam1 jat6 sik6 zo2 di1 mat1 je5 hou2 sai1","zh":"今天吃了什么好东西？"},{"id":"sld5","sp":"B","ca":"冇呀求其是但食啲","jp":"mou5 aa3 kau4 kei4 si6 daan6 sik6 di1","zh":"没有随便吃了点"},{"id":"sld6","sp":"A","ca":"咁hea都得嘅？","jp":"gam2 hea1 dou1 dak1 ge3","zh":"这么懒散也行？"}],"voc":[{"ca":"求其","jp":"kau4 kei4","zh":"随便","ex":"求其啦"},{"ca":"是但","jp":"si6 daan6","zh":"随便","ex":"是但啦"},{"ca":"hea","jp":"hea1","zh":"懒散混","ex":"好hea"}],"tips":["「求其」和「是但」都表示随便"],"pr":[{"ca":"求其啦","jp":"kau4 kei4 laa1","zh":"随便啦"}]}]},{"id":"grammar","title":"语法基础","icon":"📝","color":"#87CEEB","cat":"grammar","diff":"intermediate","premium":false,"order":10,"desc":"粤语语法结构量词句式","lessons":[{"id":"gr1","title":"量词用法","order":1,"dialogues":[{"id":"gd1","sp":"A","ca":"粵語量詞同普通話好唔同","jp":"jyut6 jyu5 loeng6 ci4 tung4 pou2 tung1 waa2 hou2 m4 tung4","zh":"粤语量词和普通话很不同"},{"id":"gd2","sp":"A","ca":"「一個人」粵語係「一個人」","jp":"jat1 go3 jan4","zh":"一个人"},{"id":"gd3","sp":"A","ca":"「一張枱」粵語係「一張枱」","jp":"jat1 zoeng1 toi2","zh":"一张桌子"},{"id":"gd4","sp":"B","ca":"「間」字點用㗎？","jp":"gaan1 zi6 dim2 jung6 gaa3","zh":"「間」字怎么用？"},{"id":"gd5","sp":"A","ca":"「一間屋」「一間公司」「一間學校」","jp":"jat1 gaan1 uk1 jat1 gaan1 gung1 si1 jat1 gaan1 hok6 haau6","zh":"一间屋一间公司一间学校"}],"voc":[{"ca":"個","jp":"go3","zh":"个(通用量词)","ex":"一個人"},{"ca":"張","jp":"zoeng1","zh":"张(平面物)","ex":"一張枱"},{"ca":"間","jp":"gaan1","zh":"间(场所)","ex":"一間屋"},{"ca":"隻","jp":"zek3","zh":"只(动物)","ex":"一隻貓"},{"ca":"條","jp":"tiu4","zh":"条(长形物)","ex":"一條魚"}],"tips":["粤语量词比普通话更丰富","「個」是最通用的量词"],"pr":[{"ca":"一隻狗","jp":"jat1 zek3 gau2","zh":"一只狗"},{"ca":"兩條魚","jp":"loeng5 tiu4 jyu4","zh":"两条鱼"}]},{"id":"gr2","title":"语气助词","order":2,"dialogues":[{"id":"gd6","sp":"A","ca":"粵語語氣助詞好多㗎","jp":"jyut6 jyu5 jyu5 hei3 zo6 ci4 hou2 do1 gaa3","zh":"粤语语气助词很多的"},{"id":"gd7","sp":"A","ca":"「啦」「㗎」「咩」「啫」都好常用","jp":"laa1 gaa3 me1 ze1 dou1 hou2 soeng4 jung6","zh":"啦㗎咩啫都很常用"},{"id":"gd8","sp":"B","ca":"「啦」同「㗎」有乜分別？","jp":"laa1 tung4 gaa3 jau5 mat1 fan1 bit6","zh":"啦和㗎有什么区别？"},{"id":"gd9","sp":"A","ca":"「啦」表示变化或肯定「㗎」表示事实或強調","jp":"laa1 biu2 si6 bin3 faa3 waak6 ding2, gaa3 biu2 si6 si6 sat6 waak6 koeng4 diu6","zh":"「啦」表示变化或肯定，「㗎」表示事实或强调"}],"voc":[{"ca":"啦","jp":"laa1","zh":"啦(语气)","ex":"好喇"},{"ca":"㗎","jp":"gaa3","zh":"㗎(语气)","ex":"係咁㗎"},{"ca":"咩","jp":"me1","zh":"吗(疑问)","ex":"係咩？"},{"ca":"啫","jp":"ze1","zh":"而已(语气)","ex":"係啫"}],"tips":["「㗎」是粤语独有的语气助词","语气助词决定句子的语气和态度"],"pr":[{"ca":"係咁㗎","jp":"hai6 gam2 gaa3","zh":"是这样的"},{"ca":"好嘅","jp":"hou2 ge3","zh":"好的"}]}]}];
const CATS = ["pronunciation","social","daily","workplace","school","travel","phone","culture","slang","grammar"];
const CAT_NAMES = {pronunciation:"发音训练",social:"社交礼仪",daily:"生活用语",workplace:"职场粤语",school:"校园粤语",travel:"旅行粤语",phone:"电话聊天",culture:"香港文化",slang:"俚语俗语",grammar:"语法基础"};
const CAT_ICONS = {pronunciation:"🎙",social:"🤝",daily:"🏠",workplace:"💼",school:"📚",travel:"✈️",phone:"📞",culture:"⭐",slang:"💬",grammar:"📝"};
const AI_DLGS = {
  greeting_morning: ["早晨！今日咁早起身練習真係勤力喎！","早晨呀！食咗早餐未呀？今日想學啲咩？","早唞…啊唔係早晨先啱！今日精神點呀？"],
  greeting_afternoon: ["你好！今日過得點呀？","你好呀！食咗 lunch 未？","哈囉！又見面啦你嘅粵語越嚟越好㗎！"],
  greeting_evening: ["晚上好！放工未呀？","黄昏好！今日有冇練習粵語呀？","夜麻麻仲喺度學粵語你好勤力！"],
  greeting_default: ["你好！我係你嘅粵語AI陪練放鬆啲就得㗎！","歡迎嚟到粵語練習！今日想學啲咩？","嗨！你最近有冇用粵語同人講嘢呀？"],
  q_what: ["好問題！等我慢慢解釋俾你聽⋯","你問得好好呢個係好多人都會搞錯嘅地方。","有好奇心先學得快！我話你知⋯"],
  q_how: ["呢個問題好實用！我可以教你幾種講法。","你觀察得好仔細！等我話你知點講。","好多人都有呢個疑問我一次過話你知。"],
  q_why: ["問到點解你已經唔係死背喇！好嘢！","有道理喎！其實呢個係歷史遺落嚟嘅講法。","你問到重點喇！我慢慢解釋。"],
  q_where: ["你想知邊度？等我話你知得唔得？","問路或者搵地方呢啲好重要㗎！","好實用嘅問題！香港好多地方都有趣㗎。"],
  q_when: ["時間好重要！等我教你用粵語講時間。","你問得好！呢個時間講法好常用。","記住：今日聽日尋日呢啲要分清。"],
  agree: ["係呀你講得啱！","冇錯啦！你嘅粵語越嚟越好！","好嘢！你完全明啦！","正確！繼續保持呢個進度！"],
  thanks: ["唔使客氣！幫到你我就開心㗎！","客氣啦！你咁努力係你應得㗎！","多謝你先啱！你肯學我已經好開心。"],
  sorry: ["唔緊要！錯過先會進步㗎！","冇問題㗎！學新語言實會有錯㗎。","冇事㗎！你已經好叻再試一次？"],
  confused: ["唔明一啲都唔緊要！我再講簡單啲⋯","呢個位好多學生都覺得難你唔孤單㗎！","慢慢嚟不如我舉個例俾你聽？"],
  food: ["香港茶餐廳必試：乾炒牛河凍檸茶菠蘿油！","你鍾意食甜定鹹？粵菜兩種都出色！","飲茶一定要叫蝦餃燒賣好好味㗎！"],
  num: ["粵語數字有啲特別規則例如「一」喺「一百」會讀成「呀」。","「二千」唔係「二仟」係「兩千」至啱㗎！","電話號碼要逐個讀例如5523讀「五五二三」。"],
  time: ["「三個字」=15分鐘「一粒鐘」=1小時好特別㗎！","上晝=早上下晝=下午夜晚=晚上。","今日聽日尋日呢三個時間詞最常用。"],
  loc: ["問路必講「唔該請問XX點去？」好有禮貌㗎！","左轉右轉直行過馬路記住呢啲方向詞。","推薦去尖沙咀海傍睇維港夜景！"],
  weather: ["今日天氣點呀？香港呢排成日落雨。","天文台話聽日會好天出去行下啦！","粵語講：「好翳焗」=好悶熱透唔到氣。"],
  work: ["你喺邊度返工？公司有冇人同你講粵語？","「做嘢」=工作；「放工」=下班；「OT」=加班。","聽日要返工早啲休息唔好捱夜！"],
  learn: ["每日練習10分鐘好過一星期練兩粒鐘細水長流！","睇港劇學粵語好快見效推薦《愛·回家》！","聲調係粵語靈魂先搞掂九聲六調！"],
  encourage: ["加油！你越講越好我好欣慰！","唔好放棄！你已經好叻㗎啦！","俾心機！每日進步少少好快見到成果！","哇！你講得好好繼續保持！"],
  fallback: ["有意思！不如我哋繼續學多啲？","收到！你想學啲咩新主題呀？","好！你講咩我陪你練習！","你講得幾好喎不如再講多啲？"],
  restaurant: ["你想食啲咩呀？我推薦乾炒牛河！","要唔要杯凍奶茶？茶餐廳必飲！","睇下餐牌先今日有特價午餐喎！"],
  shopping: ["呢件衫好襯你喎！而家做緊優惠！","你想買啲咩？我可以幫你俾意見。","講價可以話「平啲啦唔該！」"],
  travel_scene: ["去香港旅行梗係要試地道美食！","香港夜景好靚㗎一定要去太平山！","搭地鐵最方便買張八達通搞掂！"],
  phone: ["喂請問你搵邊位？","唔好意思打錯電話？唔緊要練習吓啫！","打電話要講「我係XXX請問XXX喺唔喺度？」"],
  friend_scene: ["你聽日得唔得閒？不如一齊去飲茶？","尋日我去咗行街見到好多嘢想同你分享！"]
};
const _AIctx = [];
function _detectLang(t) {
  const yueChars="嘅咗唔係佢啲咩嗰啱睇嚟俾咁噉喺嘢哋㗎啫喇咯咋啩添冇乜餸踎".split("");
  const en=(t.match(/[a-zA-Z]{3,}/g)||[]).length;
  const cn=(t.match(/[\u4e00-\u9fff]/g)||[]).length;
  const yue=[...t].filter(c=>yueChars.includes(c)).length;
  if(en>2&&cn<=en*0.5)return"en";
  if(yue>0)return"yue";
  if(cn>0){
    const mw=["谢谢","对不起","没关系","早上好","您好","什么","哪里","怎么","为什么"];
    const cw=["多謝","對唔住","唔緊要","早晨","咩","邊度","點樣","點解"];
    const ms=mw.filter(w=>t.includes(w)).length;
    const ys=cw.filter(w=>t.includes(w)).length;
    if(ms>ys)return"zh";
  }
  return cn>0?"mixed":"yue";
}
function _kws(t){
  const r={};
  if(/你[好早晨]|哈[囉佬]|hi\b|hey\b|morning/i.test(t))r.greet=true;
  if(/點解|點樣|做咩|乜[嘢事]|why\b/i.test(t))r.qWhy=true;
  if(/點[樣做講寫去搞]|how\b/i.test(t))r.qHow=true;
  if(/咩[嘢事叫做係]|什麼|what\b/i.test(t))r.qWhat=true;
  if(/邊[度位]|where\b/i.test(t))r.qWhere=true;
  if(/幾時|when\b/i.test(t))r.qWhen=true;
  if(/[？?]/.test(t)||/幾多|幾時|邊[個度]|咩|點[解樣]/.test(t))r.question=true;
  if(/食|飲|飯|麵|茶|菜|奶茶|咖啡|餸|肚餓|eat|food|drink/i.test(t))r.food=true;
  if(/[一二三四五六七八九十零百千萬\d]|幾多|幾錢|number/i.test(t))r.num=true;
  if(/唔該|多謝|thank|thanks|thx/i.test(t))r.thanks=true;
  if(/對唔住|唔好意思|sorry|抱歉/i.test(t))r.sorry=true;
  if(/咩意思|唔明|聽唔明|唔識|confus|help|教[我下]|解釋/i.test(t))r.confused=true;
  if(/好[嘅呀]|係[呀啦]|冇問題|明白|知道|啱|ok\b|yes|agree/i.test(t))r.agree=true;
  if(/今日|聽日|尋日|幾點|時間|now|time|today|tomorrow/i.test(t))r.time=true;
  if(/邊[度位]|去邊|點去|方向|where|location/i.test(t))r.loc=true;
  if(/天氣|熱|凍|暖|落雨|天晴|weather|hot|cold/i.test(t))r.weather=true;
  if(/返工|開會|做嘢|公司|辦公|OT|work|job|office/i.test(t))r.work=true;
  if(/學|練習|發音|聲調|拼音|jyut|粵語|廣東話|learn|study/i.test(t))r.learn=true;
  return r;
}
function _pick(a){return a[Math.floor(Math.random()*a.length)];}
function _greeting(){
  const h=new Date().getHours();
  if(h<12)return _pick(AI_DLGS.greeting_morning);
  if(h<19)return _pick(AI_DLGS.greeting_afternoon);
  return _pick(AI_DLGS.greeting_evening);
}
function _shouldGreet(){
  if(_AIctx.length<2)return true;
  return !_AIctx[_AIctx.length-1].u;
}
function _checkMistakes(t){
  const checks=[
    {pat:/謝謝/,fix:"「謝謝」係普通話粵語應該講「多謝」或者「唔該」㗎！"},
    {pat:/對不起/,fix:"「對不起」係普通話粵語應該講「對唔住」呀！"},
    {pat:/早上好/,fix:"「早上好」係普通話粵語係講「早晨」㗎！"},
    {pat:/什麼/,fix:"「什麼」係普通話用詞粵語要講「咩」或者「乜嘢」㗎！"},
    {pat:/哪裡/,fix:"「哪裡」係普通話粵語應該講「邊度」呀！"},
    {pat:/怎麼/,fix:"「怎麼」係普通話粵語要講「點」/「點樣」/「點解」㗎！"},
    {pat:/為什麼/,fix:"「為什麼」係普通話講法粵語係「點解」呀！"},
    {pat:/沒關係/,fix:"「沒關係」係普通話粵語要講「唔緊要」㗎！"},
    {pat:/很\b/,fix:"「很」係普通話常用粵語口語用「好」就得例如「好靚」唔係「很靚」。"}
  ];
  for(const c of checks){if(c.pat.test(t))return c.fix;}
  return"";
}
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
  const inp=document.getElementById("aiInp");
  if(!inp||!inp.value.trim())return;
  const text=inp.value.trim();
  inp.value="";
  S.msgs.push({id:Date.now(),c:text,u:true});
  _AIctx.push({c:text,u:true});
  if(_AIctx.length>6)_AIctx.shift();
  rAImsgs();
  setTimeout(function(){
    const lang=_detectLang(text);
    const kws=_kws(text);
    const scenario=S.as||"free";
    let resp="";
    let correction="";
    const sceneMap={free:"fallback",restaurant:"restaurant",shopping:"shopping",travel:"travel_scene",work:"work_scene",phone:"phone",friend:"friend_scene"};
    if(_shouldGreet()||kws.greet){
      resp=_greeting();
    }else if(kws.thanks){
      resp=_pick(AI_DLGS.thanks);
    }else if(kws.sorry){
      resp=_pick(AI_DLGS.sorry);
    }else if(kws.confused){
      resp=_pick(AI_DLGS.confused);
    }else if(kws.agree){
      resp=_pick(AI_DLGS.agree);
    }else if(kws.qWhy){
      resp=_pick(AI_DLGS.q_why);
    }else if(kws.qHow){
      resp=_pick(AI_DLGS.q_how);
    }else if(kws.qWhere){
      resp=_pick(AI_DLGS.q_where);
    }else if(kws.qWhen){
      resp=_pick(AI_DLGS.q_when);
    }else if(kws.qWhat){
      resp=_pick(AI_DLGS.q_what);
    }else if(kws.question){
      resp=_pick(AI_DLGS.fallback);
    }else if(kws.food){
      resp=_pick(AI_DLGS.food);
    }else if(kws.num){
      resp=_pick(AI_DLGS.num);
    }else if(kws.time){
      resp=_pick(AI_DLGS.time);
    }else if(kws.loc){
      resp=_pick(AI_DLGS.loc);
    }else if(kws.weather){
      resp=_pick(AI_DLGS.weather);
    }else if(kws.work){
      resp=_pick(AI_DLGS.work);
    }else if(kws.learn){
      resp=_pick(AI_DLGS.learn);
    }else{
      const sk=sceneMap[scenario]||"fallback";
      resp=AI_DLGS[sk]?_pick(AI_DLGS[sk]):_pick(AI_DLGS.fallback);
    }
    if(lang==="en"){
      resp="👋 I understand English. Try in Cantonese: "+resp;
    }else if(lang==="zh"){
      resp="👋 我明你講普通話。試下用粵語講⋯ "+resp;
    }
    correction=_checkMistakes(text);
    if(correction)correction="\n\n💡 "+correction;
    if(!kws.thanks&&!kws.sorry&&Math.random()<0.2){
      resp+=" "+_pick(AI_DLGS.encourage);
    }
    const finalResp=resp+correction;
    S.msgs.push({id:Date.now()+1,c:finalResp,u:false});
    _AIctx.push({c:finalResp,u:false});
    if(_AIctx.length>6)_AIctx.shift();
    rAImsgs();
    sp(finalResp);
  },600);
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
function slP(i){const plans=document.querySelectorAll(".vip-plan");for(let j=0;j<plans.length;j++){plans[j].classList.toggle("selected",j===i);plans[j].querySelector(".vip-radio").innerHTML=j===i?'<div class="vip-radio-inner"></div>':""}document.getElementById("purchaseBtn").textContent="立即开通 · "+VIP_PLANS[i].price;}
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

function showPage(n){ shP(n); }
function toggleTranslation(){ tT(); }
function goBack(){ gB(); }
function completeLesson(){ cL(); }
function purchaseVip(){ pV(); }

rn();
if("serviceWorker" in navigator){navigator.serviceWorker.register("sw.js").catch(function(){});}
