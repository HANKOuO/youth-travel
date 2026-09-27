// ==================================================
// 嘉義六腳青年壯遊點 - 全站共用邏輯 (common.js)
// ==================================================

// 1. 側邊抽屜導覽列全域控制
window.openSidebar = function() {
    const sidebarNav = document.getElementById('sidebarNav');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (sidebarNav) sidebarNav.classList.add('active');
    if (sidebarOverlay) sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeSidebar = function() {
    const sidebarNav = document.getElementById('sidebarNav');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (sidebarNav) sidebarNav.classList.remove('active');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

window.toggleSidebar = function() {
    const sidebarNav = document.getElementById('sidebarNav');
    if (sidebarNav && sidebarNav.classList.contains('active')) {
        window.closeSidebar();
    } else {
        window.openSidebar();
    }
};

// ==================================================
// 多國語言字典設定 (繁中 / EN / 日本語 / Tiếng Việt)
// ==================================================
const I18N_DICTS = {
    'zh-TW': {
        label: '繁中',
        nav_about: '關於我們',
        nav_spots: '壯遊據點',
        nav_routes: '走讀路線',
        nav_journal: '職人故事',
        nav_news: '最新消息',
        nav_cta: '開始規劃',
        route_1day: '一日遊規劃',
        route_1day_sub: '工藝、老街、科技等 A~F 方案',
        route_2day: '兩日遊規劃',
        route_2day_sub: '工廠村寄宿與雙城深度慢活',
        route_craft: '文創產業線',
        route_craft_sub: '日式官舍、刺繡館與木藍染',
        route_edu: '戶外教育專案',
        route_edu_sub: '嘉禮有糖高中職 A~D 走讀',
        route_global: '國際壯遊引力',
        route_global_sub: '跨國青年炒糖與雙偶文化體驗'
    },
    'en': {
        label: 'EN',
        nav_about: 'About',
        nav_spots: 'Spots',
        nav_routes: 'Routes',
        nav_journal: 'Artisans',
        nav_news: 'News',
        nav_cta: 'Plan Trip',
        route_1day: '1-Day Tour',
        route_1day_sub: 'Crafts, Historic Streets & Heritage A~F',
        route_2day: '2-Day Journey',
        route_2day_sub: 'Homestay in Factory Village & Slow Life',
        route_craft: 'Creative Craft',
        route_craft_sub: 'Official Dorms, Embroidery & Indigo Dye',
        route_edu: 'Education Route',
        route_edu_sub: 'Sugar Culture & Field Trips for Students',
        route_global: 'Global Travel',
        route_global_sub: 'Sugar Stirring & Puppetry Experience'
    },
    'ja': {
        label: '日本語',
        nav_about: '私たちについて',
        nav_spots: '拠点マップ',
        nav_routes: '散策ルート',
        nav_journal: '職人物語',
        nav_news: 'お知らせ',
        nav_cta: '旅を計画',
        route_1day: '日帰りプラン',
        route_1day_sub: '工芸・レトロ通り・テクノロジー A~F',
        route_2day: '一泊二日プラン',
        route_2day_sub: '工場村ホームステイと二都市巡り',
        route_craft: '文創工芸コース',
        route_craft_sub: '日本式官舎・刺繍館・藍染体験',
        route_edu: '教育研修コース',
        route_edu_sub: 'サトウキビ産業と学生フィールドワーク',
        route_global: '国際体験コース',
        route_global_sub: '黒糖作り＆伝統人形劇の特別体験'
    },
    'vi': {
        label: 'Tiếng Việt',
        nav_about: 'Về chúng tôi',
        nav_spots: 'Điểm khám phá',
        nav_routes: 'Lộ trình tham quan',
        nav_journal: 'Chuyện nghệ nhân',
        nav_news: 'Tin mới nhất',
        nav_cta: 'Lập kế hoạch',
        route_1day: 'Lịch trình 1 ngày',
        route_1day_sub: 'Thủ công mỹ nghệ, phố cổ A~F',
        route_2day: 'Hành trình 2 ngày',
        route_2day_sub: 'Trải nghiệm làng nghề & sống chậm',
        route_craft: 'Tuyến văn hóa sáng tạo',
        route_craft_sub: 'Khu nhà Nhật cổ, thêu & nhuộm chàm',
        route_edu: 'Dự án giáo dục dã ngoại',
        route_edu_sub: 'Khám phá văn hóa đường mía học đường',
        route_global: 'Sức hút quốc tế',
        route_global_sub: 'Trải nghiệm nấu đường & múa rối cổ truyền'
    }
};

// 套用指定語言
function applyLanguage(lang) {
    if (!I18N_DICTS[lang]) lang = 'zh-TW';
    const dict = I18N_DICTS[lang];

    // 更新導覽列按鈕顯示文字
    const labelElem = document.getElementById('currentLangLabel') || document.getElementById('currentLangText');
    if (labelElem) {
        labelElem.textContent = dict.label;
    }

    // 翻譯頁面上所有帶有 data-i18n 的元素
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (dict[key]) {
            elem.textContent = dict[key];
        }
    });

    // 更新下拉選單中的 active 狀態
    document.querySelectorAll('.lang-option, .lang-opt').forEach(opt => {
        const targetLang = opt.getAttribute('data-lang');
        if (targetLang === lang) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });

    // 儲存偏好並設定 HTML 屬性
    localStorage.setItem('user_preferred_lang', lang);
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    // ==================================================
    // 2. 頂部導覽列：滾動透明/毛玻璃切換監聽
    // ==================================================
    const siteHeader = document.getElementById('siteHeader');
    function checkHeaderScroll() {
        if (!siteHeader) return;
        // 滾動超過 30px 時加上 .scrolled 變白色半透明，回頂部變全透明
        if (window.scrollY > 30) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', checkHeaderScroll, { passive: true });
    checkHeaderScroll(); // 載入時先判定一次

    // ==================================================
    // 3. 手機漢堡選單與遮罩綁定
    // ==================================================
    const mobileToggle = document.getElementById('navMobileToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            window.toggleSidebar();
        });
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', window.closeSidebar);
    }

    // ==================================================
    // 4. 搜尋浮層控制 (Search Overlay)
    // ==================================================
    const searchBtn = document.getElementById('navSearchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchCloseBtn = document.getElementById('searchCloseBtn');
    const searchInput = document.getElementById('globalSearchInput');
    const searchSubmit = document.getElementById('globalSearchSubmit');

    function openSearch() {
        if (!searchOverlay) return;
        searchOverlay.classList.add('active');
        setTimeout(() => {
            if (searchInput) searchInput.focus();
        }, 120);
    }

    function closeSearch() {
        if (!searchOverlay) return;
        searchOverlay.classList.remove('active');
    }

    if (searchBtn) searchBtn.addEventListener('click', openSearch);
    if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);

    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) closeSearch();
        });
    }

    if (searchSubmit && searchInput) {
        searchSubmit.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `spots.html?search=${encodeURIComponent(query)}`;
            }
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                searchSubmit.click();
            }
        });
    }

    // ==================================================
    // 5. 語言切換選單 (相容 .open 與 .active)
    // ==================================================
    const langBtn = document.getElementById('langBtn');
    const langWrap = document.querySelector('.lang-dropdown-wrapper');
    const langOptions = document.querySelectorAll('.lang-option, .lang-opt');

    if (langBtn && langWrap) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langWrap.classList.toggle('open');
            langWrap.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            langWrap.classList.remove('open');
            langWrap.classList.remove('active');
        });

        langOptions.forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const targetLang = opt.getAttribute('data-lang');
                if (targetLang) {
                    applyLanguage(targetLang);
                }
                langWrap.classList.remove('open');
                langWrap.classList.remove('active');
            });
        });
    }

    // 載入先前的語言設定（預設繁中）
    const savedLang = localStorage.getItem('user_preferred_lang') || 'zh-TW';
    applyLanguage(savedLang);

    // ==================================================
    // 6. 按下鍵盤 ESC 關閉所有視窗與選單
    // ==================================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSearch();
            if (langWrap) {
                langWrap.classList.remove('open');
                langWrap.classList.remove('active');
            }
            window.closeSidebar();
        }
    });
});