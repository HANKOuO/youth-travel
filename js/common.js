// ==================================================
// 嘉義六腳青年壯遊點 - 全站共用邏輯 (common.js)
// ==================================================

// 側邊抽屜導覽列全域控制
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

document.addEventListener('DOMContentLoaded', () => {
    // 1. 手機漢堡選單與遮罩綁定
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

    // 2. 搜尋浮層控制 (Search Overlay)
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
                // 導向據點頁並預填檢索關鍵字
                window.location.href = `spots.html?search=${encodeURIComponent(query)}`;
            }
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                searchSubmit.click();
            }
        });
    }

    // 3. 語言切換選單 (中/英/日/越)
    const langBtn = document.getElementById('langBtn');
    const langWrap = document.querySelector('.lang-dropdown-wrapper');
    const langOpts = document.querySelectorAll('.lang-opt');
    const currentLangText = document.getElementById('currentLangText');

    if (langBtn && langWrap) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langWrap.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            langWrap.classList.remove('active');
        });

        langOpts.forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.preventDefault();
                langOpts.forEach(item => item.classList.remove('active'));
                opt.classList.add('active');

                if (currentLangText) {
                    currentLangText.textContent = opt.textContent.trim();
                }
                langWrap.classList.remove('active');
            });
        });
    }

    // 4. 按下鍵盤 ESC 關閉所有視窗與側邊欄
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSearch();
            if (langWrap) langWrap.classList.remove('active');
            window.closeSidebar();
        }
    });
});