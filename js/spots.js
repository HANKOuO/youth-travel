document.addEventListener('DOMContentLoaded', () => {

const spotsData = [
    {
        id: 1,
        num: "01",
        category: "LAND",
        categoryName: "土地風景",
        town: "六腳",
        title: "蒜頭糖廠蔗埕園區",
        titleEn: "SUANTOU SUGAR FACTORY",
        desc: "建於1906年，曾為全台第三大糖廠。保留完整的製糖機具、大型廠房與聳立煙囪，見證百年前推動全球貿易的甜蜜產業史。",
        locationDetail: "六腳鄉工廠村1號（蒜頭糖廠）",
        keywords: "糖業歷史 · 工業遺產 · 五分車鐵道",
        image: "assets/水道頭文創聚落.jpg",
        top: 48.0, left: 62.0
    },
    {
        id: 2,
        num: "02",
        category: "LAND",
        categoryName: "土地風景",
        town: "六腳",
        title: "日式宿舍群與防空洞",
        titleEn: "JAPANESE STYLE DORMITORY",
        desc: "近一世紀歷史的木造日式官舍群，隨處可見二戰防空洞遺跡。此處亦為公視旗艦大戲《一把青》的重要拍攝取景現場。",
        locationDetail: "六腳鄉工廠村糖廠日式宿舍區",
        keywords: "一把青取景 · 歷史建築 · 戰時防空洞",
        image: "assets/水道頭文創聚落.jpg",
        top: 44.5, left: 59.0
    },
    {
        id: 3,
        num: "03",
        category: "CRAFT",
        categoryName: "工藝職人",
        town: "六腳",
        title: "笑瞇瞇懸絲偶劇團",
        titleEn: "SMILING PUPPET TROUPE",
        desc: "由平均年齡80歲的「白金人口」爺奶組成的傳奇天團！以靈活十指操控懸絲細線，在掌中舞出全台罕見的傳統偶戲生命力。",
        locationDetail: "六腳鄉工廠村（蒜頭糖廠駐點站旁）",
        keywords: "白金天團 · 懸絲偶表演 · 操偶體驗",
        image: "assets/笑咪咪懸絲偶劇團.jpg",
        top: 51.0, left: 63.5
    },
    {
        id: 4,
        num: "04",
        category: "CRAFT",
        categoryName: "工藝職人",
        town: "六腳",
        title: "立青工作室（製偶基地）",
        titleEn: "LIQING PUPPET WORKSHOP",
        desc: "國寶大師黃憲章老師的創作工坊。憑藉精湛木工技藝自行鑽研改良，累積近三百件提線木偶，堪稱懸絲偶的微型博物館。",
        locationDetail: "六腳鄉蒜頭村",
        keywords: "黃憲章國寶 · 偶頭雕刻 · 木偶工藝",
        image: "assets/笑咪咪懸絲偶劇團.jpg",
        top: 57.5, left: 57.5
    },
    {
        id: 5,
        num: "05",
        category: "LAND",
        categoryName: "土地風景",
        town: "六腳",
        title: "成豐社區講堂",
        titleEn: "CHENGFENG COMMUNITY LECTURE",
        desc: "前身為1932年落成的成豐碾米廠，屹立逾90載。透過老建築保存再生計畫重修，轉型為地方文史推廣與青銀共創基地。",
        locationDetail: "六腳鄉南宮路140號（蒜頭老街）",
        keywords: "百年碾米廠 · 大正建築 · 地方創生",
        image: "assets/水道頭文創聚落.jpg",
        top: 54.0, left: 54.0
    },
    {
        id: 6,
        num: "06",
        category: "LIFE",
        categoryName: "在地生活",
        town: "六腳",
        title: "蒜頭傳統市場與老餅舖",
        titleEn: "SUANTOU TRADITIONAL MARKET",
        desc: "古稱「九萬二七千」的富庶市集。創立於1948年的興旺餅舖蒜頭餅飄香超過六十年，毗鄰搖滾巨星伍佰的故居舊址。",
        locationDetail: "六腳鄉蒜頭公有零售市場",
        keywords: "興旺蒜頭餅 · 伍佰舊居 · 庶民美食",
        image: "assets/水道頭文創聚落.jpg",
        top: 58.5, left: 61.0
    },
    {
        id: 7,
        num: "07",
        category: "CRAFT",
        categoryName: "工藝職人",
        town: "六腳",
        title: "潭墘墘窯交趾陶坊",
        titleEn: "QIANYAO COCHIN CERAMICS",
        desc: "社區規劃師侯吉村老師深耕近四十載的陶藝基地。將精湛的交趾陶技藝融入鄉村巷弄牆面，帶領學員體驗傳統上色工藝。",
        locationDetail: "六腳鄉潭墘村",
        keywords: "侯吉村老師 · 交趾陶體驗 · 社區營造",
        image: "assets/藍染體驗.jpg",
        top: 34.5, left: 58.5
    },
    {
        id: 8,
        num: "08",
        category: "LIFE",
        categoryName: "在地生活",
        town: "六腳",
        title: "用九柑仔店（存德中藥房）",
        titleEn: "YONG-JIU GROCERY STORE",
        desc: "同名知名影視原著與戲劇的核心拍攝主場景！原為潭墘百年「慶和柑仔店」與存德中藥房，充滿老鄉村的濃厚人情記憶。",
        locationDetail: "六腳鄉潭墘村",
        keywords: "用九柑仔店 · 影視朝聖 · 百年老藥房",
        image: "assets/水道頭文創聚落.jpg",
        top: 33.0, left: 55.5
    },
    {
        id: 9,
        num: "09",
        category: "LIFE",
        categoryName: "在地生活",
        town: "六腳",
        title: "東窯茶空間",
        titleEn: "DONGYAO TEA LIVING SPACE",
        desc: "隱身於田園的「泡生活」聚落。以柴燒陶器搭配阿里山高山茶與當季時令蔬食，在茶香與土香中感受農村節氣生活美學。",
        locationDetail: "六腳鄉田園聚落",
        keywords: "柴燒陶藝 · 節氣茶席 · 土地飲食",
        image: "assets/藍染體驗.jpg",
        top: 67.5, left: 50.0
    },
    {
        id: 10,
        num: "10",
        category: "CRAFT",
        categoryName: "工藝職人",
        town: "六腳",
        title: "好食作企業社（藍染炒糖）",
        titleEn: "GOOD FOOD WORKSHOP",
        desc: "返鄉青年黃冠雅（小修）進駐糖廠創辦。運用新鮮甘蔗汁進行古法炒糖與黑糖皂手作，並推廣大平原天然草木木藍染藝。",
        locationDetail: "蒜頭糖廠園區內（嘉大駐點站旁）",
        keywords: "小修老師 · 甘蔗炒糖 · 藍染手作",
        image: "assets/藍染體驗.jpg",
        top: 52.0, left: 60.5
    },
    {
        id: 11,
        num: "11",
        category: "CRAFT",
        categoryName: "工藝職人",
        town: "朴子",
        title: "朴子刺繡文化館",
        titleEn: "PUZI EMBROIDERY HERITAGE MUSEUM",
        desc: "朴子開元老街曾有全台四大「刺繡街」美譽。文化館設於歷史日式木造官舍中，完整典藏宗教繡品與婚嫁八仙彩的針線傳承。",
        locationDetail: "朴子市文明路10號",
        keywords: "刺繡街歷史 · 日式木造 · 八仙彩工藝",
        image: "assets/水道頭文創聚落.jpg",
        top: 19.5, left: 47.5
    },
    {
        id: 12,
        num: "12",
        category: "LAND",
        categoryName: "土地風景",
        town: "朴子",
        title: "嘉藝點水道頭文創聚落",
        titleEn: "SHUIDAOTOU CULTURAL CLUSTER",
        desc: "日治時期東石國中舊官舍群活化。園區聳立著日治公共衛生指標「朴子水道配水塔」，聚集青年工藝、陶藝與烘焙團隊進駐。",
        locationDetail: "朴子市山通路14號",
        keywords: "水道配水塔 · 日式官舍 · 朴通市集",
        image: "assets/水道頭文創聚落.jpg",
        top: 18.5, left: 45.0
    },
    {
        id: 13,
        num: "13",
        category: "LIFE",
        categoryName: "在地生活",
        town: "朴子",
        title: "清木屋せいもくや",
        titleEn: "SEIMOKUYA CLINIC CAFE",
        desc: "建於1930年的朴子公醫院與外科診所舊址。醫家後代自力修復黑瓦洋樓，延續朴子「醫療重鎮」風韻，為影集《阿叔》拍攝場景。",
        locationDetail: "朴子市市東路40號",
        keywords: "清木外科 · 老醫館再生 · 影劇阿叔拍攝地",
        image: "assets/水道頭文創聚落.jpg",
        top: 24.5, left: 42.5
    },
    {
        id: 14,
        num: "14",
        category: "LIFE",
        categoryName: "在地生活",
        town: "朴子",
        title: "朴子好書室",
        titleEn: "PUZI BOOK ROOM",
        desc: "由蕭英偉老師創辦之獨立文化空間。推動長照關懷與地方文史，並在戶外推廣朴子「木藍復育」種植，重現百年染布記憶。",
        locationDetail: "朴子市開元老街周邊",
        keywords: "蕭英偉老師 · 木藍復育 · 地方獨立書店",
        image: "assets/水道頭文創聚落.jpg",
        top: 26.5, left: 39.0
    }
];

    let activeIndex = 2; // 預設第三個：03 日式木造建築
    let currentCategory = "ALL";

    // DOM 節點
    const pinsLayer = document.getElementById('pinsLayer');
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselViewport = document.getElementById('carouselViewport');

    // 右側卡片節點
    const detailCard = document.getElementById('detailCard');
    const cardCounter = document.getElementById('cardCounter');
    const cardCategoryName = document.getElementById('cardCategoryName');
    const cardTownName = document.getElementById('cardTownName');
    const cardTitle = document.getElementById('cardTitle');
    const cardTitleEn = document.getElementById('cardTitleEn');
    const cardImage = document.getElementById('cardImage');
    const cardDescription = document.getElementById('cardDescription');
    const cardSpecificLocation = document.getElementById('cardSpecificLocation');
    const cardKeywords = document.getElementById('cardKeywords');

    // 1. 渲染地圖光點
    function renderPins() {
        pinsLayer.innerHTML = '';
        spotsData.forEach((spot, idx) => {
            const pin = document.createElement('div');
            pin.className = `map-spot-pin ${idx === activeIndex ? 'active' : ''}`;
            pin.style.top = `${spot.top}%`;
            pin.style.left = `${spot.left}%`;

            // 類別過濾
            if (currentCategory !== "ALL" && spot.category !== currentCategory) {
                pin.style.display = 'none';
            } else {
                pin.style.display = 'flex';
            }

            // 選中點包含波紋同心圓
            pin.innerHTML = `
                ${idx === activeIndex ? '<span class="spot-pin-ripple"></span>' : ''}
                <span class="spot-pin-core"></span>
            `;

            pin.addEventListener('click', () => switchSpot(idx));
            pinsLayer.appendChild(pin);
        });
    }

    // 2. 渲染底部輪播列卡片
    function renderCarousel() {
        carouselTrack.innerHTML = '';
        spotsData.forEach((spot, idx) => {
            const card = document.createElement('div');
            card.className = `thumb-card ${idx === activeIndex ? 'active' : ''}`;
            card.setAttribute('data-index', idx);

            card.innerHTML = `
                <img src="${spot.image}" class="thumb-card-img" alt="${spot.title}">
                <div class="thumb-card-info">
                    <span class="thumb-idx">${spot.num}</span>
                    <strong class="thumb-title">${spot.title}</strong>
                    <small class="thumb-town">📍 ${spot.town}</small>
                </div>
            `;

            card.addEventListener('click', () => switchSpot(idx));
            carouselTrack.appendChild(card);
        });
    }

    // 3. 切換選中據點
    function switchSpot(newIndex) {
        if (newIndex < 0) newIndex = spotsData.length - 1;
        if (newIndex >= spotsData.length) newIndex = 0;

        activeIndex = newIndex;
        const spot = spotsData[activeIndex];

        // 右側詳情卡淡入淡出
        detailCard.classList.add('is-fading');

        setTimeout(() => {
            cardCounter.textContent = spot.num;
            cardCategoryName.textContent = spot.categoryName;
            cardTownName.textContent = spot.town;
            cardTitle.textContent = spot.title;
            cardTitleEn.textContent = spot.titleEn;
            cardImage.src = spot.image;
            cardDescription.innerHTML = spot.desc.replace(/，/g, '，<br>');
            cardSpecificLocation.textContent = spot.locationDetail;
            cardKeywords.textContent = spot.keywords;

            detailCard.classList.remove('is-fading');
        }, 160);

        // 重新繪製光點與輪播樣式
        renderPins();

        // 更新底部卡片選中態並自動置中
        const allCards = carouselTrack.querySelectorAll('.thumb-card');
        allCards.forEach((c, i) => {
            if (i === activeIndex) {
                c.classList.add('active');
                c.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                c.classList.remove('active');
            }
        });
    }

    // 4. 左側分類按鈕切換
    const filterBtns = document.querySelectorAll('.filter-pill-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            renderPins();
        });
    });

    // 5. 上下一個切換
    document.getElementById('btnPrev').addEventListener('click', () => switchSpot(activeIndex - 1));
    document.getElementById('btnNext').addEventListener('click', () => switchSpot(activeIndex + 1));

    // 6. 輪播列左右滾動按鈕
    document.getElementById('btnScrollLeft').addEventListener('click', () => {
        carouselViewport.scrollBy({ left: -220, behavior: 'smooth' });
    });
    document.getElementById('btnScrollRight').addEventListener('click', () => {
        carouselViewport.scrollBy({ left: 220, behavior: 'smooth' });
    });

    // 初始化執行
    renderPins();
    renderCarousel();
});