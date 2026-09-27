/**
 * 壯遊據點地圖互動模組 (spots.js)
 * 涵蓋 14 大據點資料庫、Pin 標點點擊彈窗、相簿切換與分類過濾
 */

const SPOTS_INFO = {
    /* ==================== 1. 傳統手工藝 (craft) ==================== */
    "qianyao": {
        town: "六腳鄉 · 潭墘村",
        title: "墘窯休閒陶坊",
        tags: ["傳統手工藝", "臺灣工藝之家"],
        desc: "隱身六腳綠意田野間的工藝聚落，致力傳承交趾陶捏塑與柴燒技藝，在烈火淬鍊中重現大地與泥土渾厚質樸的生命力。",
        features: ["手捏交趾陶塑形與自然落灰柴燒", "陶藝大師侯春廷駐村創作基地"],
        photos: [
            "assets/水道頭文創聚落.jpg",
            "assets/笑咪咪懸絲偶劇團.jpg"
        ],
        link: "itinerary-detail.html?route=C"
    },
    "liqing": {
        town: "六腳鄉 · 蒜頭村",
        title: "六腳立青工作室",
        tags: ["傳統手工藝", "木偶雕刻"],
        desc: "國寶級木偶大師黃憲章的創作工坊，保存了近 300 尊細緻的提線木偶結構與雕琢技術，展現傳統偶戲工藝的精湛造詣。",
        features: ["黃憲章老師木偶結構專利展示", "近 300 尊手工提線懸絲偶陳列參觀"],
        photos: [
            "assets/笑咪咪懸絲偶劇團.jpg",
            "assets/水道頭文創聚落.jpg"
        ],
        link: "journal.html"
    },
    "xiaomimi": {
        town: "六腳鄉 · 工廠村",
        title: "笑咪咪懸絲偶劇團",
        tags: ["傳統手工藝", "偶藝薪傳"],
        desc: "由在地農村阿嬤與長輩自組的全國知名劇團，運用靈巧十指賦予木偶詼諧生命，把最純粹的鄉土歡笑傳遞給每一位旅人。",
        features: ["平均 70 歲社區長輩的熱情操演", "零距離親身體驗提線懸絲偶操作"],
        photos: [
            "assets/笑咪咪懸絲偶劇團.jpg",
            "assets/水道頭文創聚落.jpg"
        ],
        link: "journal.html"
    },
    "embroidery": {
        town: "朴子市",
        title: "朴子刺繡文化館",
        tags: ["傳統手工藝", "常民生活史"],
        desc: "見證朴子曾作為全台刺繡外銷重鎮的歷史記憶，館內珍藏華麗神明衣、八仙彩與精密針法，展示針線交織出的女性生活智慧。",
        features: ["日式木造官舍空間活化再利用", "傳統金蔥線刺繡針法與八仙彩典藏"],
        photos: [
            "assets/水道頭文創聚落.jpg",
            "assets/笑咪咪懸絲偶劇團.jpg"
        ],
        link: "creative-detail.html"
    },

    /* ==================== 2. 常民與市井 (life) ==================== */
    "yongjiu": {
        town: "六腳鄉 · 潭墘村",
        title: "潭墘用九柑仔店",
        tags: ["常民與市井", "影視文化 IP"],
        desc: "知名漫畫與金鐘戲劇的原型取景地，百年水圳旁的木造柑仔店凝聚了濃厚鄉里溫情，也是返鄉青年注入創意重生的風土座標。",
        features: ["電視劇原汁原味的復古拍攝現場", "潭墘聚落長輩熱情奉茶與人情故事"],
        photos: [
            "assets/水道頭文創聚落.jpg",
            "assets/藍染體驗.jpg"
        ],
        link: "itinerary-detail.html?route=A"
    },
    "suantou-market": {
        town: "六腳鄉 · 蒜頭村",
        title: "六腳公有零售市場",
        tags: ["常民與市井", "在地飲食"],
        desc: "蒜頭村清晨最熱絡的生活樞紐，百年來滋養著周邊村落的餐桌，攤商間親切的台語問候與道地熟食，訴說著樸質的庶民日常。",
        features: ["晨間限定的手作傳統小吃與蔬果熟食", "保留傳統市場木桁架結構與純樸人情"],
        photos: [
            "assets/水道頭文創聚落.jpg",
            "assets/藍染體驗.jpg"
        ],
        link: "twoday-detail.html"
    },
    "oldstreet": {
        town: "朴子市 · 開元路",
        title: "朴子老街／配天宮",
        tags: ["常民與市井", "廟口常民美食"],
        desc: "以開元路蜈蚣陣街廓與配天宮媽祖廟為核心，巷弄間飄散著傳承三代的鴨肉羹、麻糬與菜鴨香氣，是感受地方脈搏的最佳起點。",
        features: ["百年開元老街閩南長型街屋走讀", "配天宮四季蘭求子習俗與廟口小吃巡禮"],
        photos: [
            "assets/水道頭文創聚落.jpg",
            "assets/藍染體驗.jpg"
        ],
        link: "twoday-detail.html"
    },

    /* ==================== 3. 產業與歷史 (heritage) ==================== */
    "sugar": {
        town: "六腳鄉 · 工廠村",
        title: "蒜頭糖廠文化園區",
        tags: ["產業與歷史", "糖鐵文化遺產"],
        desc: "日治時期曾名列全台第三大製糖工場，如今轉型為糖鐵休閒園區，搭乘五分車穿梭在日式官舍群與老雀榕林蔭下，回望甜蜜記憶。",
        features: ["搭乘懷舊復古五分車探索糖廠工廠", "全台完整保留的日式黑瓦木造宿舍聚落"],
        photos: [
            "assets/水道頭文創聚落.jpg",
            "assets/笑咪咪懸絲偶劇團.jpg",
            "assets/藍染體驗.jpg"
        ],
        link: "itinerary-detail.html?route=A"
    },
    "npm-south": {
        town: "太保市 · 故宮大道",
        title: "國立故宮博物院南部院區",
        tags: ["產業與歷史", "亞洲藝術殿堂"],
        desc: "結合現代書法意象與綠建築構思的亞洲文化巨擘，人工雙湖環抱典雅流線展館，常態展出亞洲織品、陶瓷與茶文化珍稀藏品。",
        features: ["至善湖至德湖湖畔步道與綠建築景觀", "沉浸式亞洲各國多元文化藝術常設特展"],
        photos: [
            "assets/水道頭文創聚落.jpg",
            "assets/笑咪咪懸絲偶劇團.jpg"
        ],
        link: "outdoor-detail.html?route=B"
    },
    "dexing-dean": {
        town: "六腳鄉 · 德興村",
        title: "德興里德安宮",
        tags: ["產業與歷史", "信仰聚落中心"],
        desc: "雙溪口與德興聚落的守護公廟，主祀朱府千歲，廟宇殿堂內保存匠師精緻的傳統彩繪與泥塑剪黏，靜謐守望著嘉南平原的稻浪田園。",
        features: ["傳統木構廟宇彩繪與古樸石雕工藝", "見證雙溪口農耕拓墾的常民聚落傳奇"],
        photos: [
            "assets/水道頭文創聚落.jpg",
            "assets/藍染體驗.jpg"
        ],
        link: "outdoor-detail.html?route=D"
    },
    "shuidiaotou": {
        town: "朴子市 · 山通路",
        title: "嘉藝點水道頭文創聚落",
        tags: ["產業與歷史", "日式文創空間"],
        desc: "前身為日治時期朴子水道配水塔（水道頭）與自來水廠官舍群，現進駐多家手作工坊與獨立咖啡，化為悠閒的漫步聚落。",
        features: ["朴子歷史地標十角水塔與日式木屋群", "青年職人手作陶藝、金工與風格市集體驗"],
        photos: [
            "assets/水道頭文創聚落.jpg",
            "assets/藍染體驗.jpg"
        ],
        link: "creative-detail.html"
    },

    /* ==================== 4. 創新與社群 (innovation) ==================== */
    "chengfeng": {
        town: "六腳鄉 · 成豐村",
        title: "成豐社區講堂",
        tags: ["創新與社群", "地方青銀共創"],
        desc: "以地方老宅改造成的農村共學基地，串聯青年返鄉力量與社區長輩的人生智慧，開辦風土講堂、草編手作與記憶採集行動。",
        features: ["地方青銀共創系列沙龍與文化講堂", "在地長者生命記憶與農村口述歷史展覽"],
        photos: [
            "assets/水道頭文創聚落.jpg",
            "assets/笑咪咪懸絲偶劇團.jpg"
        ],
        link: "about.html"
    },
    "culx-hub": {
        town: "六腳鄉 · 蒜頭糖廠西倉庫",
        title: "嘉義文化科技創新基地",
        tags: ["創新與社群", "文化科技轉譯"],
        desc: "座落於蒜頭糖廠老倉庫的 5G XR 創新聚落，運用新媒體、虛擬動捕與數位轉譯技術，帶領傳統風土記憶跨步邁向元宇宙。",
        features: ["5G XR 沉浸式文化科技展演與互動體驗", "鏈結在地青年創業與跨界數位創作者空間"],
        photos: [
            "assets/水道頭文創聚落.jpg",
            "assets/藍染體驗.jpg"
        ],
        link: "itinerary-detail.html?route=A"
    },
    "bookstore": {
        town: "朴子市",
        title: "朴子好書室",
        tags: ["創新與社群", "獨立文化基地"],
        desc: "老街巷弄中的青年獨立基地，推動失落百年的天然木藍生態種植與手作染布生活，也是地方讀書會與文史講座的聚集地。",
        features: ["在地木藍生態復育與手作染布課程", "精選地方文史選書與獨立思考共讀沙龍"],
        photos: [
            "assets/藍染體驗.jpg",
            "assets/水道頭文創聚落.jpg"
        ],
        link: "journal.html"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const pins = document.querySelectorAll('.map-spot-pin');
    const modal = document.getElementById('spotModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalTown = document.getElementById('modalTown');
    const modalTitle = document.getElementById('modalTitle');
    const modalTags = document.getElementById('modalTags');
    const modalDesc = document.getElementById('modalDesc');
    const modalFeat1 = document.getElementById('modalFeat1');
    const modalFeat2 = document.getElementById('modalFeat2');
    const modalMainImg = document.getElementById('modalMainImg');
    const modalThumbsStrip = document.getElementById('modalThumbsStrip');
    const modalLink = document.getElementById('modalLink');
    const catButtons = document.querySelectorAll('.inline-cat-item');

    // 視圖切換元素
    const btnViewMap = document.getElementById('btnViewMap');
    const btnViewGrid = document.getElementById('btnViewGrid');
    const mapCanvas = document.getElementById('mapCanvas');
    const spotsGridView = document.getElementById('spotsGridView');
    const spotsCardsGrid = document.getElementById('spotsCardsGrid');
    const gridFilterTags = document.querySelectorAll('.grid-filter-tag');

    function showSpotCard(spotKey) {
        const data = SPOTS_INFO[spotKey];
        if (!data || !modal) return;

        modalTown.textContent = data.town;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;
        modalFeat1.textContent = data.features[0] || "";
        modalFeat2.textContent = data.features[1] || "";
        modalLink.href = data.link;

        modalTags.innerHTML = data.tags.map((tag, idx) => 
            `<span class="pop-tag ${idx === 0 ? 'tag-accent' : 'tag-sand'}">${tag}</span>`
        ).join('');

        if (data.photos && data.photos.length > 0) {
            modalMainImg.src = data.photos[0];
            modalThumbsStrip.innerHTML = data.photos.map((src, i) => `
                <div class="pop-thumb ${i === 0 ? 'active' : ''}" data-src="${src}">
                    <img src="${src}" alt="縮圖 ${i+1}">
                </div>
            `).join('');

            document.querySelectorAll('.pop-thumb').forEach(thumb => {
                thumb.addEventListener('click', (e) => {
                    e.stopPropagation();
                    document.querySelectorAll('.pop-thumb').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                    modalMainImg.src = thumb.dataset.src;
                });
            });
        }

        modal.classList.add('open');
    }

    // 點擊 Pin 點彈出卡片
    pins.forEach((pin) => {
        pin.addEventListener('click', (e) => {
            e.stopPropagation();
            pins.forEach(p => p.classList.remove('active'));
            pin.classList.add('active');
            showSpotCard(pin.dataset.spot);
        });
    });

    // 關閉卡片
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            modal.classList.remove('open');
            pins.forEach(p => p.classList.remove('active'));
        });
    }

    // 點擊畫布空白處關閉卡片
    document.addEventListener('click', (e) => {
        if (modal && modal.classList.contains('open')) {
            if (!modal.contains(e.target) && !e.target.closest('.map-spot-pin')) {
                modal.classList.remove('open');
                pins.forEach(p => p.classList.remove('active'));
            }
        }
    });

    // 4 大分類點選過濾（地圖模式）
    catButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            catButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const targetCat = btn.dataset.cat;
            pins.forEach((pin) => {
                const pinCat = pin.dataset.category;
                if (targetCat === 'all' || pinCat === targetCat) {
                    pin.style.opacity = '1';
                    pin.style.pointerEvents = 'auto';
                    pin.style.transform = 'translate(-50%, -50%) scale(1)';
                } else {
                    pin.style.opacity = '0.15';
                    pin.style.pointerEvents = 'none';
                    pin.style.transform = 'translate(-50%, -50%) scale(0.78)';
                }
            });
        });
    });

    // ===== 模式切換邏輯 (地圖 ⇄ 圖鑑) =====
    function renderSpotsGrid(category = 'all') {
        if (!spotsCardsGrid) return;
        spotsCardsGrid.innerHTML = '';

        pins.forEach(pin => {
            const spotKey = pin.dataset.spot;
            const spotCat = pin.dataset.category;
            const data = SPOTS_INFO[spotKey];
            if (!data) return;

            if (category !== 'all' && spotCat !== category) return;

            const card = document.createElement('div');
            card.className = 'spot-col-card';
            card.innerHTML = `
                <div class="spot-col-img">
                    <img src="${data.photos[0] || 'assets/水道頭文創聚落.jpg'}" alt="${data.title}">
                </div>
                <div class="spot-col-body">
                    <div class="spot-col-meta">
                        <span class="spot-col-town">📍 ${data.town}</span>
                        <span class="spot-col-tag">${data.tags[0] || ''}</span>
                    </div>
                    <h3 class="spot-col-title">${data.title}</h3>
                    <p class="spot-col-desc">${data.desc}</p>
                    <div class="spot-col-foot">在地圖上查看 ➔</div>
                </div>
            `;

            // 點擊卡片切回地圖並選中該點位
            card.addEventListener('click', () => {
                btnViewMap.click();
                setTimeout(() => {
                    pin.click();
                }, 200);
            });

            spotsCardsGrid.appendChild(card);
        });
    }

    if (btnViewMap && btnViewGrid) {
        btnViewMap.addEventListener('click', () => {
            btnViewMap.classList.add('active');
            btnViewGrid.classList.remove('active');
            mapCanvas.style.display = 'block';
            spotsGridView.style.display = 'none';
        });

        btnViewGrid.addEventListener('click', () => {
            btnViewGrid.classList.add('active');
            btnViewMap.classList.remove('active');
            mapCanvas.style.display = 'none';
            spotsGridView.style.display = 'block';
            renderSpotsGrid('all');
        });
    }

    // 圖鑑視圖中的分類過濾
    gridFilterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            gridFilterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            renderSpotsGrid(tag.dataset.cat);
        });
    });
});