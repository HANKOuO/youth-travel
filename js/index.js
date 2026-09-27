// ==================================================
// 嘉義六腳青年壯遊點 - 首頁專屬控制 (index.js)
// ==================================================

// 網頁重新整理時強制回到最頂部
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
    // 1. 點擊側邊抽屜導覽連結時自動收起選單
    const sidebarLinks = document.querySelectorAll('.sidebar-tabs .tab-item a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (typeof window.closeSidebar === 'function') {
                window.closeSidebar();
            }
        });
    });

    // 2. 首頁 Hero 頂部滾動視差
    const scrollParallaxText = document.getElementById('scrollParallaxText');
    const sugarTrain = document.getElementById('sugarTrainAnim');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        // 鏤空外框英文水平反向位移
        if (scrollParallaxText) {
            scrollParallaxText.style.transform = `translateX(${-scrollPosition * 0.8}px)`;
        }

        // 小火車圖示沿直線軌道前進
        if (sugarTrain) {
            sugarTrain.style.transform = `translateX(${scrollPosition * 0.85}px)`;
        }
    }, { passive: true });
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-bg-slide');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    const marquee = document.getElementById('heroMarquee');
    const textOverlay = document.getElementById('heroTextOverlay');
    const textBox = document.getElementById('heroTextBox');

    if (slides.length === 0) return;

    let currentIndex = 0;
    const slideDuration = 20000; // 20 秒切換一次
    let slideTimer = null;

    function goToSlide(index) {
        const nextIndex = (index + slides.length) % slides.length;
        const currentSlide = slides[currentIndex];
        const targetSlide = slides[nextIndex];

        // 讀取當前與目標對齊方向 (預設 right)
        const currentAlign = currentSlide.getAttribute('data-align') || 'right';
        const targetAlign = targetSlide.getAttribute('data-align') || 'right';

        // 1. 切換背景投影片
        currentSlide.classList.remove('active');
        targetSlide.classList.add('active');
        currentIndex = nextIndex;

        // 2. 若對齊方向改變 (右 -> 左 或 左 -> 右)，觸發淡入淡出溶解換邊
        if (textOverlay && textBox && currentAlign !== targetAlign) {
            textBox.classList.add('text-switching');

            setTimeout(() => {
                if (targetAlign === 'left') {
                    textOverlay.classList.add('align-left');
                } else {
                    textOverlay.classList.remove('align-left');
                }
                textBox.classList.remove('text-switching');
            }, 350); // 350ms 淡出後完成位置切換
        }
    }

    function startAutoSlide() {
        if (slideTimer) clearInterval(slideTimer);
        slideTimer = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, slideDuration);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
            startAutoSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
            startAutoSlide();
        });
    }

    startAutoSlide();

    window.addEventListener('scroll', () => {
        if (marquee) {
            marquee.style.transform = `translateX(${-window.scrollY * 0.4}px)`;
        }
    }, { passive: true });
});

// 監聽首頁滾動：控制頂部導覽列透明 / 半透白切換
const siteHeader = document.getElementById('siteHeader');

function updateHeaderBackground() {
    if (!siteHeader) return;
    if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
    } else {
        siteHeader.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateHeaderBackground, { passive: true });
updateHeaderBackground(); // 頁面載入時即時檢查一次

// ==================== 壯遊設計地圖與右側標籤連動 ====================
const mapWrapper = document.getElementById('interactiveMap');
const triggerCards = document.querySelectorAll('.design-trigger-card');
const mapPins = document.querySelectorAll('.map-spot-pin');
const mapTooltip = document.getElementById('mapTooltip');

// 1. 右側標籤連動觸發地圖狀態
triggerCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const filterType = card.getAttribute('data-filter');
        if (!mapWrapper) return;

        // 清除舊狀態後加入新篩選類別
        mapWrapper.classList.remove('filter-spots', 'filter-routes', 'filter-artisans');
        if (filterType === 'routes') {
            mapWrapper.classList.add('filter-routes');
        } else if (filterType === 'artisans') {
            mapWrapper.classList.add('filter-artisans');
        }
    });

    card.addEventListener('mouseleave', () => {
        if (!mapWrapper) return;
        mapWrapper.classList.remove('filter-spots', 'filter-routes', 'filter-artisans');
    });
});

// 2. 地圖光點懸停提示框 (Tooltip)
mapPins.forEach(pin => {
    pin.addEventListener('mouseenter', (e) => {
        if (!mapTooltip) return;
        const title = pin.getAttribute('data-title');
        const type = pin.getAttribute('data-type');

        mapTooltip.querySelector('.tooltip-title').textContent = title;
        mapTooltip.querySelector('.tooltip-tag').textContent = type;

        // 依光點座標動態定位
        mapTooltip.style.top = pin.style.top;
        mapTooltip.style.left = pin.style.left;
        mapTooltip.classList.add('is-active');
    });

    pin.addEventListener('mouseleave', () => {
        if (mapTooltip) {
            mapTooltip.classList.remove('is-active');
        }
    });
});