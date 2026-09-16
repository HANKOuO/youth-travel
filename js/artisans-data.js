/**
 * 嘉義六腳與朴子 10 位職人完整專訪資料庫 (artisans-data.js)
 */
const ARTISANS_DATA = {
    1: {
        id: 1,
        index: "01",
        name: "黃憲章",
        role: "國寶級懸絲偶技師 ｜ 立青工作室創辦人",
        town: "六腳",
        category: "傳統技藝",
        categoryKey: "CRAFT",
        heroImg: "assets/笑咪咪懸絲偶劇團.jpg",
        stamp: "六腳 ‧ 懸絲偶",
        quote: "「不能讓這條線，<br>在我們這一代斷掉。」",
        bio: "2023年獲「嘉藝36技」榮譽。指導嘉義國中小及社區偶戲逾18年，以木工專長獨自研發改良近300尊提線木偶，是六腳懸絲偶技藝不輟的核心靈魂。",
        sideNote: "一雙手，<br>讓傳統繼續被看見。",
        topics: [
            { id: "ALL", name: "全部問題" },
            { id: "START", name: "關於開始" },
            { id: "CRAFT", name: "技藝傳承" },
            { id: "MEMORY", name: "地方與記憶" },
            { id: "YOUTH", name: "年輕世代" }
        ],
        qaList: [
            {
                num: "01",
                topicId: "START",
                topicName: "關於開始",
                question: "是什麼契機讓您開始接觸懸絲偶？",
                audioTime: "00:00 / 03:24",
                answer: "我從小就對木頭很有興趣，後來因緣際會接觸到懸絲偶，才發現這不只是木工，而是一門結合雕刻、結構、表演的綜合藝術。那時候覺得，這就是我想做一輩子的事。",
                photo: "assets/笑咪咪懸絲偶劇團.jpg"
            },
            {
                num: "02",
                topicId: "CRAFT",
                topicName: "技藝傳承",
                question: "製作一尊木偶需要多久時間？其中最困難的部分是什麼？",
                audioTime: "00:00 / 04:12",
                answer: "一尊偶大概需要幾個月，有時候甚至更久。最困難的是「平衡」，要讓木偶在提線下自然地動起來，每一個關節都要精準，不能太緊也不能太鬆。",
                photo: "assets/水道頭文創聚落.jpg"
            },
            {
                num: "03",
                topicId: "MEMORY",
                topicName: "地方與記憶",
                question: "您覺得懸絲偶對六腳來說，代表著怎樣的意義？",
                audioTime: "00:00 / 05:01",
                answer: "懸絲偶是六腳很重要的文化資產，它不只是表演，更是地方的記憶。以前農村社會，大家看戲是一種生活的寄託，現在雖然環境不同了，但這份情感還是存在的。",
                photo: "assets/笑咪咪懸絲偶劇團.jpg"
            },
            {
                num: "04",
                topicId: "YOUTH",
                topicName: "年輕世代",
                question: "您如何看待現在年輕人對懸絲偶的興趣？",
                audioTime: "00:00 / 03:18",
                answer: "現在願意學的人確實比較少，但我把在學校和社區教學時，還是看到有些年輕人眼睛會發光。他們可能一開始是好奇，但只要真的動手做，就會發現這門藝術的魅力。",
                photo: "assets/藍染體驗.jpg"
            }
        ]
    },
    2: {
        id: 2,
        index: "02",
        name: "黃哲永",
        role: "資深文史工作者 ｜ 蒜頭糖廠退休耆老",
        town: "六腳",
        category: "地方文史",
        categoryKey: "HISTORY",
        heroImg: "assets/水道頭文創聚落.jpg",
        stamp: "六腳 ‧ 糖鐵史",
        quote: "「地方的歷史，<br>需要一直有人說。」",
        bio: "在蒜頭糖廠工作超過40年，親身經歷台灣糖業外銷鼎盛期到轉型的完整歷程。退休後投身文史調查，出版多部糖鐵專著，用口述歷史留住地方發展史。",
        sideNote: "每一條鐵軌，<br>都是時代刻劃的痕跡。",
        topics: [
            { id: "ALL", name: "全部問題" },
            { id: "HISTORY", name: "糖業歷史" },
            { id: "MEMORY", name: "廠區回憶" },
            { id: "FUTURE", name: "未來展望" }
        ],
        qaList: [
            {
                num: "01",
                topicId: "HISTORY",
                topicName: "糖業歷史",
                question: "全盛時期的蒜頭糖廠是什麼樣的光景？",
                audioTime: "00:00 / 04:30",
                answer: "那時候糖廠就像一座獨立小城鎮，有自己的理髮廳、福利社、澡堂甚至小學。壓榨期日夜開工，全村都是濃郁的蔗糖香，五分車每天運送成千上萬噸甘蔗。",
                photo: "assets/水道頭文創聚落.jpg"
            },
            {
                num: "02",
                topicId: "MEMORY",
                topicName: "廠區回憶",
                question: "糖廠日式宿舍群對六腳人有著什麼樣的情感？",
                audioTime: "00:00 / 03:45",
                answer: "木造宿舍群不僅是建築群，更是好幾代家庭共同成長的家園。防空洞、林蔭道記錄了幾萬名糖廠子弟的青春。",
                photo: "assets/水道頭文創聚落.jpg"
            },
            {
                num: "03",
                topicId: "FUTURE",
                topicName: "未來展望",
                question: "您期待五分車延伸故宮南院後，能為六腳帶來什麼？",
                audioTime: "00:00 / 04:01",
                answer: "希望大家不只是來拍照打卡，而是能透過最慢速的火車，放慢心情，聽聽這片土地的故事，理解台灣農業如何撐起現代化。",
                photo: "assets/笑咪咪懸絲偶劇團.jpg"
            }
        ]
    },
    3: {
        id: 3,
        index: "03",
        name: "黃冠雅 (小修)",
        role: "好食作企業社創辦人 ｜ 地方社造青年",
        town: "六腳",
        category: "地方創生",
        categoryKey: "INNOVATION",
        heroImg: "assets/藍染體驗.jpg",
        stamp: "六腳 ‧ 木藍染",
        quote: "「地方的資源，<br>其實比想像中更豐富。」",
        bio: "返鄉青年代表，在蒜頭糖廠創立好食作企業社。結合天然植物染（木藍）、節氣飲食與農事體驗，將傳統農業廢棄物循環再造成高質感文創品。",
        sideNote: "以雙手向土地借色，<br>染出生活的純粹。",
        topics: [
            { id: "ALL", name: "全部問題" },
            { id: "RETURN", name: "返鄉初衷" },
            { id: "CRAFT", name: "藍染工藝" },
            { id: "SDGS", name: "永續實踐" }
        ],
        qaList: [
            {
                num: "01",
                topicId: "RETURN",
                topicName: "返鄉初衷",
                question: "是什麼原因讓您決定回到六腳創業？",
                audioTime: "00:00 / 03:10",
                answer: "在大城市工作幾年後，發現最安心的節奏還是在家鄉。六腳有很好的日照、乾淨的水與未被過度開發的純樸，這正是發展天然手作最棒的土壤。",
                photo: "assets/藍染體驗.jpg"
            },
            {
                num: "02",
                topicId: "CRAFT",
                topicName: "藍染工藝",
                question: "天然木藍染與一般化學染料最大的差異是什麼？",
                audioTime: "00:00 / 04:15",
                answer: "天然染是一門與微生物共處的藝術。每一缸染液都有生命，隨天氣溫濕度呈現出深淺不一的藍。它不傷土地、不傷皮膚，是真正對環境友善的生活方式。",
                photo: "assets/藍染體驗.jpg"
            },
            {
                num: "03",
                topicId: "SDGS",
                topicName: "永續實踐",
                question: "如何將甘蔗與黑糖轉化為循環體驗？",
                audioTime: "00:00 / 02:59",
                answer: "我們用現採甘蔗古法熬糖，剩餘的渣滓與黑糖結合冷製手工皂，讓遊客帶回一份看得見產地源頭的伴手禮。",
                photo: "assets/水道頭文創聚落.jpg"
            }
        ]
    },
    4: {
        id: 4,
        index: "04",
        name: "黃江正",
        role: "工廠村現任村長 ｜ 聚落生活活字典",
        town: "六腳",
        category: "地方創生",
        categoryKey: "INNOVATION",
        heroImg: "assets/水道頭文創聚落.jpg",
        stamp: "六腳 ‧ 工廠村",
        quote: "「地方人，<br>也守住這片土地。」",
        bio: "長期致力於工廠村社區營造，帶領平均高齡80歲的長者組建「笑瞇瞇懸絲偶天團」。積極推動青年寄宿家庭與文創基地進駐，讓老糖廠社區重新充滿生機。",
        sideNote: "社區的笑聲，<br>是最好的風景。",
        topics: [
            { id: "ALL", name: "全部問題" },
            { id: "VILLAGE", name: "工廠村故事" },
            { id: "SENIOR", name: "高齡共學" },
            { id: "FUTURE", name: "社造願景" }
        ],
        qaList: [
            {
                num: "01",
                topicId: "VILLAGE",
                topicName: "工廠村故事",
                question: "工廠村是個怎樣的聚落？",
                audioTime: "00:00 / 03:22",
                answer: "全村都在糖廠範圍內，是全台灣極少數與工業遺址共存的社區。居民很多都是老糖廠員工或第二代，人情味特別濃。",
                photo: "assets/水道頭文創聚落.jpg"
            },
            {
                num: "02",
                topicId: "SENIOR",
                topicName: "高齡共學",
                question: "笑瞇瞇懸絲偶劇團當初是如何成立的？",
                audioTime: "00:00 / 03:49",
                answer: "為了讓長輩走出家門動動手指，我們邀請黃憲章老師來教學。沒想到阿嬤們越練越厲害，現在還能巡迴全台登台演出！",
                photo: "assets/笑咪咪懸絲偶劇團.jpg"
            }
        ]
    },
    5: {
        id: 5,
        index: "05",
        name: "陳俊哲",
        role: "朴子文史名家 ｜ 歷史建築守護者",
        town: "朴子",
        category: "地方文史",
        categoryKey: "HISTORY",
        heroImg: "assets/水道頭文創聚落.jpg",
        stamp: "朴子 ‧ 文史考",
        quote: "「這些老街、老建築，<br>都是時間留下來的線索。」",
        bio: "深耕朴子文史考據數十年，長期進行田野採集、老照片蒐集與口述訪談。詳盡梳理朴子開元路蜈蚣陣街道、老西醫診所與刺繡產業脈絡。",
        sideNote: "腳踏實地，<br>讀懂老街的每塊磚石。",
        topics: [
            { id: "ALL", name: "全部問題" },
            { id: "PUZI", name: "朴子老街" },
            { id: "MEDICAL", name: "醫療重鎮" }
        ],
        qaList: [
            {
                num: "01",
                topicId: "PUZI",
                topicName: "朴子老街",
                question: "開元老街的「蜈蚣陣」格局有什麼特殊意涵？",
                audioTime: "00:00 / 04:18",
                answer: "開元路是朴子最早發展的商業軸線，兩側街屋狹長延伸，形成獨特的魚骨/蜈蚣型聚落，見證了早年河港轉運與農產集散的商業繁榮。",
                photo: "assets/水道頭文創聚落.jpg"
            },
            {
                num: "02",
                topicId: "MEDICAL",
                topicName: "醫療重鎮",
                question: "為什麼日治時期的朴子會有如此密集的西醫診所？",
                audioTime: "00:00 / 05:45",
                answer: "早年鼠疫流行推動了現代公衛意識，加上地方仕紳重視教育，培育出全台知名的高密度醫者家族，形成了像清木屋等兼具日洋風格的醫療空間資產。",
                photo: "assets/水道頭文創聚落.jpg"
            }
        ]
    },
    6: {
        id: 6,
        index: "06",
        name: "蕭英偉",
        role: "拾間文化負責人 ｜ 朴子好書室創辦人",
        town: "朴子",
        category: "青年生活",
        categoryKey: "LIFE",
        heroImg: "assets/水道頭文創聚落.jpg",
        stamp: "朴子 ‧ 好書室",
        quote: "「希望書店，<br>能成為地方的客廳。」",
        bio: "在老街開闢獨立文化空間「朴子好書室」，推動木藍種植復育計畫與社區閱讀推廣。讓返鄉與移居者在此交流地方學，為老街注入青年活力。",
        sideNote: "點一盞燈，<br>守候城鎮的思想窗口。",
        topics: [
            { id: "ALL", name: "全部問題" },
            { id: "BOOKSTORE", name: "獨立書店" },
            { id: "COMMUNITY", name: "社區客廳" }
        ],
        qaList: [
            {
                num: "01",
                topicId: "BOOKSTORE",
                topicName: "獨立書店",
                question: "在非都會區開獨立書店面臨的最大挑戰是什麼？",
                audioTime: "00:00 / 03:55",
                answer: "不是賣書，而是如何讓書成為人與人對話的媒介。我們舉辦講座、走讀、手作，讓這裡成為一個地方情報站。",
                photo: "assets/水道頭文創聚落.jpg"
            },
            {
                num: "02",
                topicId: "COMMUNITY",
                topicName: "社區客廳",
                question: "您如何看待朴子年輕人的回流趨勢？",
                audioTime: "00:00 / 04:33",
                answer: "越來越多年輕人想找回生活的掌控權。朴子的生活成本低、人文底蘊厚，只要有合適的平台，返鄉完全可以成為常態。",
                photo: "assets/水道頭文創聚落.jpg"
            }
        ]
    },
    7: {
        id: 7,
        index: "07",
        name: "張玉美",
        role: "成豐社區講堂執行長 ｜ 老屋活化推手",
        town: "朴子",
        category: "地方文史",
        categoryKey: "HISTORY",
        heroImg: "assets/水道頭文創聚落.jpg",
        stamp: "朴子 ‧ 成豐講堂",
        quote: "「老房子，<br>還可以繼續陪著我們。」",
        bio: "搶救修復大正年間創立之「成豐碾米廠」，保存檜木木構屋架與日治時期木製碾米機具。活化轉型為公民講堂與藝文展演空間，賦予老建築新生命。",
        sideNote: "老木梁的溫度，<br>承載百年米香故事。",
        topics: [
            { id: "ALL", name: "全部問題" },
            { id: "HERITAGE", name: "修復老屋" },
            { id: "PUBLIC", name: "公民講堂" }
        ],
        qaList: [
            {
                num: "01",
                topicId: "HERITAGE",
                topicName: "修復老屋",
                question: "修復成豐碾米廠最困難的堅持是什麼？",
                audioTime: "00:00 / 04:12",
                answer: "就是『整舊如舊』。我們盡可能保留原有的台灣檜木構件與碾米風鼓機，不增加過多現代裝潢，讓老屋的原汁原味呼吸。",
                photo: "assets/水道頭文創聚落.jpg"
            },
            {
                num: "02",
                topicId: "PUBLIC",
                topicName: "公民講堂",
                question: "成豐講堂扮演了地方上的什麼角色？",
                audioTime: "00:00 / 03:44",
                answer: "它是大家交流公共議題的地方。無論是新書分享、手作課程還是社區長輩聚會，老建築敞開大門接納所有人。",
                photo: "assets/水道頭文創聚落.jpg"
            }
        ]
    },
    8: {
        id: 8,
        index: "08",
        name: "楊菀婷 (Jolie)",
        role: "三人六腳創育坊創辦人 ｜ 青年培力導師",
        town: "六腳",
        category: "地方創生",
        categoryKey: "INNOVATION",
        heroImg: "assets/水道頭文創聚落.jpg",
        stamp: "六腳 ‧ 青實驗",
        quote: "「讓更多人，<br>看見六腳的可能。」",
        bio: "創辦「三人六腳創育坊」與「六腳青實驗事」，專注於青年創業孵化、特色商品包裝與田野體驗設計。串聯多位青年夥伴，把六腳打造成青年壯遊熱點。",
        sideNote: "創意落腳鄉野，<br>綻放嶄新生命力。",
        topics: [
            { id: "ALL", name: "全部問題" },
            { id: "STARTUP", name: "青年育成" },
            { id: "EXPERIMENT", name: "青實驗事" }
        ],
        qaList: [
            {
                num: "01",
                topicId: "STARTUP",
                topicName: "青年育成",
                question: "為什麼將團隊取名為『三人六腳』？",
                audioTime: "00:00 / 03:15",
                answer: "象徵三個人綁在一起同心齊步，更象徵青年前進六腳鄉。只有彼此互助協作，創生的路才能走得長遠。",
                photo: "assets/水道頭文創聚落.jpg"
            },
            {
                num: "02",
                topicId: "EXPERIMENT",
                topicName: "青實驗事",
                question: "您最希望青年壯遊者帶走什麼回憶？",
                audioTime: "00:00 / 04:28",
                answer: "希望大家發現鄉下不只有老人和荒田，這裡有一群非常認真且充滿活力的人，正在用最新鮮的方式讓地方發光。",
                photo: "assets/水道頭文創聚落.jpg"
            }
        ]
    },
    9: {
        id: 9,
        index: "09",
        name: "侯吉村",
        role: "潭墘墘窯休閒陶坊創辦人 ｜ 資深交趾陶名家",
        town: "六腳",
        category: "傳統技藝",
        categoryKey: "CRAFT",
        heroImg: "assets/藍染體驗.jpg",
        stamp: "六腳 ‧ 墘窯",
        quote: "「做陶，<br>是和土地對話。」",
        bio: "深耕交趾陶藝近40年。將傳統廟宇剪黏與交趾陶釉彩技術轉化為社區營造元素，主導潭墘村大型公共交趾陶壁畫創作，帶領偏鄉農村走向藝術村。",
        sideNote: "指尖泥土，<br>燒煉出廟宇流光。",
        topics: [
            { id: "ALL", name: "全部問題" },
            { id: "CERAMIC", name: "交趾陶藝" },
            { id: "VILLAGE", name: "農村壁畫" }
        ],
        qaList: [
            {
                num: "01",
                topicId: "CERAMIC",
                topicName: "交趾陶藝",
                question: "交趾陶釉彩最吸引人的地方是什麼？",
                audioTime: "00:00 / 04:50",
                answer: "是那種寶石般晶瑩剔透的低溫鉛釉色澤。古稱『嘉義燒』，每一道釉色在窯火中融化流動，展現出台灣廟宇特有的神韻。",
                photo: "assets/藍染體驗.jpg"
            },
            {
                num: "02",
                topicId: "VILLAGE",
                topicName: "農村壁畫",
                question: "如何讓長輩與村民一起參與陶藝壁畫製作？",
                audioTime: "00:00 / 04:07",
                answer: "我們設計大圖拼貼，讓老人家捏塑自己的記憶故事，燒製後鑲嵌在村子圍牆上。長輩看到自己的作品成為風景，成就感難以言喻。",
                photo: "assets/藍染體驗.jpg"
            }
        ]
    },
    10: {
        id: 10,
        index: "10",
        name: "陳美靜",
        role: "朴子在地烘焙青年 ｜ 甜點工作室負責人",
        town: "朴子",
        category: "青年生活",
        categoryKey: "LIFE",
        heroImg: "assets/水道頭文創聚落.jpg",
        stamp: "朴子 ‧ 甜點香",
        quote: "「把家鄉的味道，<br>做成日常的幸福。」",
        bio: "曾赴日本研習法式甜點，返鄉後嚴選嘉南平原當季花生、紅豆與芝麻入甜點。以細緻烘焙手法結合傳統食材，吸引眾多外地旅人前來尋味。",
        sideNote: "麥香甜蜜，<br>烘烤鄉土甘潤滋味。",
        topics: [
            { id: "ALL", name: "全部問題" },
            { id: "PASTRY", name: "烘焙理念" },
            { id: "LOCAL", name: "風土食材" }
        ],
        qaList: [
            {
                num: "01",
                topicId: "PASTRY",
                topicName: "烘焙理念",
                question: "為什麼想把法式甜點與朴子農產結合？",
                audioTime: "00:00 / 03:20",
                answer: "法式甜點講究風土（Terroir）。嘉義有最好的九號花生、極品麻油與新鮮水果，把這些食材融入慕斯和塔皮，能做出無可取代的台灣風味。",
                photo: "assets/水道頭文創聚落.jpg"
            },
            {
                num: "02",
                topicId: "LOCAL",
                topicName: "風土食材",
                question: "您認為在地小鎮的甜點店能為老城帶來什麼？",
                audioTime: "00:00 / 03:15",
                answer: "帶來停下腳步的理由。很多年輕朋友專程來吃甜點，順道逛了配天宮和開元老街，看見小鎮典雅慢活的另一面。",
                photo: "assets/水道頭文創聚落.jpg"
            }
        ]
    }
};