/**
 * 嘉義六腳青年壯遊 - 職人故事 (journal.js)
 * 負責職人卡片篩選、排序、視圖切換與模擬語音播放器
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==================== 1. 職人完整資料集 (對齊計畫書 10 位在地達人) ====================
    const artisansData = [
        {
            id: 1,
            num: "01",
            name: "黃憲章",
            role: "國寶級懸絲偶技師 ｜ 立青工作室創辦人",
            quote: "「不能讓這條線，在我們這一代斷掉。」",
            town: "六腳",
            category: "CRAFT",
            categoryName: "傳統技藝",
            audioTime: "08:42",
            seconds: 522,
            image: "assets/笑咪咪懸絲偶劇團.jpg"
        },
        {
            id: 2,
            num: "02",
            name: "黃哲永",
            role: "資深文史工作者 ｜ 蒜頭糖廠退休耆老",
            quote: "「地方的歷史，需要一直有人說。」",
            town: "六腳",
            category: "HISTORY",
            categoryName: "地方文史",
            audioTime: "12:16",
            seconds: 736,
            image: "assets/水道頭文創聚落.jpg"
        },
        {
            id: 3,
            num: "03",
            name: "黃冠雅 (小修)",
            role: "好食作企業社創辦人 ｜ 地方社造青年",
            quote: "「地方的資源，其實比想像中更豐富。」",
            town: "六腳",
            category: "INNOVATION",
            categoryName: "地方創生",
            audioTime: "09:24",
            seconds: 564,
            image: "assets/藍染體驗.jpg"
        },
        {
            id: 4,
            num: "04",
            name: "黃江正",
            role: "工廠村現任村長 ｜ 聚落生活活字典",
            quote: "「地方人，也守住這片土地。」",
            town: "六腳",
            category: "INNOVATION",
            categoryName: "地方創生",
            audioTime: "07:11",
            seconds: 431,
            image: "assets/水道頭文創聚落.jpg"
        },
        {
            id: 5,
            num: "05",
            name: "陳俊哲",
            role: "朴子文史名家",
            quote: "「這些老街、老建築，都是時間留下來的線索。」",
            town: "朴子",
            category: "HISTORY",
            categoryName: "地方文史",
            audioTime: "10:03",
            seconds: 603,
            image: "assets/水道頭文創聚落.jpg"
        },
        {
            id: 6,
            num: "06",
            name: "蕭英偉",
            role: "拾間文化負責人 ｜ 朴子好書室創辦人",
            quote: "「希望書店，能成為地方的客廳。」",
            town: "朴子",
            category: "LIFE",
            categoryName: "青年生活",
            audioTime: "11:28",
            seconds: 688,
            image: "assets/水道頭文創聚落.jpg"
        },
        {
            id: 7,
            num: "07",
            name: "張玉美",
            role: "成豐社區講堂執行長",
            quote: "「老房子，還可以繼續陪著我們。」",
            town: "朴子",
            category: "HISTORY",
            categoryName: "地方文史",
            audioTime: "08:56",
            seconds: 536,
            image: "assets/水道頭文創聚落.jpg"
        },
        {
            id: 8,
            num: "08",
            name: "楊菀婷 (Jolie)",
            role: "三人六腳創育坊創辦人 ｜ 六腳青實驗事",
            quote: "「讓更多人，看見六腳的可能。」",
            town: "六腳",
            category: "INNOVATION",
            categoryName: "地方創生",
            audioTime: "07:43",
            seconds: 463,
            image: "assets/水道頭文創聚落.jpg"
        },
        {
            id: 9,
            num: "09",
            name: "侯吉村",
            role: "潭墘墘窯休閒陶坊創辦人 ｜ 資深交趾陶名家",
            quote: "「做陶，是和土地對話。」",
            town: "六腳",
            category: "CRAFT",
            categoryName: "傳統技藝",
            audioTime: "10:17",
            seconds: 617,
            image: "assets/藍染體驗.jpg"
        },
        {
            id: 10,
            num: "10",
            name: "陳美靜",
            role: "朴子在地烘焙青年 ｜ 甜點工作室負責人",
            quote: "「把家鄉的味道，做成日常的幸福。」",
            town: "朴子",
            category: "LIFE",
            categoryName: "青年生活",
            audioTime: "06:35",
            seconds: 395,
            image: "assets/水道頭文創聚落.jpg"
        }
    ];

    // ==================== 2. 分類標籤切換與即時篩選 ====================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const allCards = document.querySelectorAll('.journal-card');
    const tailRow = document.querySelector('.journal-tail-row');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 切換按鈕 Active 樣式
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedFilter = btn.getAttribute('data-filter');

            allCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (selectedFilter === 'ALL' || cardCategory === selectedFilter) {
                    card.style.display = 'flex';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });

            // 若第 10 張卡被篩選隱藏，保持第 4 排版面協調
            const card10 = tailRow ? tailRow.querySelector('.journal-card') : null;
            if (card10 && card10.style.display === 'none' && selectedFilter !== 'ALL' && selectedFilter !== 'LIFE') {
                card10.closest('.tail-card-col').style.visibility = 'hidden';
            } else if (card10) {
                card10.closest('.tail-card-col').style.visibility = 'visible';
            }
        });
    });

    // ==================== 3. 語音導覽播放器控制 (模擬播放與波形跳動) ====================
    const playButtons = document.querySelectorAll('.btn-thumb-play');
    let currentlyPlayingBtn = null;

    playButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();

            const card = btn.closest('.journal-card');
            const isCurrentPlaying = (currentlyPlayingBtn === btn);

            // 若點擊其他按鈕，先暫停上一個
            if (currentlyPlayingBtn && !isCurrentPlaying) {
                currentlyPlayingBtn.textContent = '▶';
                currentlyPlayingBtn.classList.remove('is-playing');
                const prevCard = currentlyPlayingBtn.closest('.journal-card');
                if (prevCard) prevCard.classList.remove('card-audio-active');
            }

            if (isCurrentPlaying) {
                // 暫停
                btn.textContent = '▶';
                btn.classList.remove('is-playing');
                card.classList.remove('card-audio-active');
                currentlyPlayingBtn = null;
            } else {
                // 播放
                btn.textContent = '⏸';
                btn.classList.add('is-playing');
                card.classList.add('card-audio-active');
                currentlyPlayingBtn = btn;
            }
        });
    });

    // ==================== 4. 網格 / 清單模式切換 ====================
    const viewModeBtns = document.querySelectorAll('.btn-view-mode');
    const mainStage = document.querySelector('.journal-main-stage');

    viewModeBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            viewModeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (index === 1) {
                // 清單模式 (List View)
                mainStage.classList.add('is-list-view');
            } else {
                // 網格模式 (Grid View)
                mainStage.classList.remove('is-list-view');
            }
        });
    });

    // ==================== 5. 排序切換選單 ====================
    const sortBtn = document.querySelector('.btn-sort-toggle');
    let isSortByDuration = false;

    if (sortBtn) {
        sortBtn.addEventListener('click', () => {
            isSortByDuration = !isSortByDuration;

            if (isSortByDuration) {
                sortBtn.textContent = '排序：時長優先 ˅';
                sortCardsByDuration();
            } else {
                sortBtn.textContent = '排序：最新上架 ˅';
                resetCardsOrder();
            }
        });
    }

    function sortCardsByDuration() {
        const grid = document.getElementById('journalCardsGrid');
        const cardsArray = Array.from(grid.querySelectorAll('.journal-card'));

        cardsArray.sort((a, b) => {
            const timeA = a.querySelector('.meta-audio-time').textContent;
            const timeB = b.querySelector('.meta-audio-time').textContent;
            return timeB.localeCompare(timeA); // 由長到短
        });

        cardsArray.forEach(card => grid.appendChild(card));
    }

    function resetCardsOrder() {
        const grid = document.getElementById('journalCardsGrid');
        const cardsArray = Array.from(grid.querySelectorAll('.journal-card'));

        cardsArray.sort((a, b) => {
            const numA = parseInt(a.querySelector('.card-num-stamp').textContent, 10);
            const numB = parseInt(b.querySelector('.card-num-stamp').textContent, 10);
            return numA - numB;
        });

        cardsArray.forEach(card => grid.appendChild(card));
    }

    // ==================== 6. 「載入更多職人」按鈕互動 ====================
    const loadMoreBtn = document.querySelector('.btn-load-more-artisans');
    const loadMoreSubtext = document.querySelector('.load-more-subtext');

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            loadMoreBtn.textContent = '已展示全數 10 位職人故事';
            loadMoreBtn.style.borderColor = '#111111';
            loadMoreBtn.style.color = '#111111';
            loadMoreBtn.style.cursor = 'default';
            if (loadMoreSubtext) {
                loadMoreSubtext.textContent = '六腳 ‧ 朴子 在地百大文化田野持續收錄中';
            }
        });
    }

});

// 在 journal.js 中加入卡片跳轉監聽
document.querySelectorAll('.journal-card .btn-round-arrow').forEach((arrowBtn) => {
    arrowBtn.addEventListener('click', (e) => {
        const card = arrowBtn.closest('.journal-card');
        const cardNum = card.querySelector('.card-num-stamp').textContent.trim();
        
        // 01 號直接進入黃憲章專訪頁，其餘可攜帶 ?id= 參數
        if (cardNum === '01') {
            arrowBtn.setAttribute('href', 'artisan-detail.html');
        } else {
            arrowBtn.setAttribute('href', `artisan-detail.html?id=${cardNum}`);
        }
    });
});

// 在 journal.js 的 DOMContentLoaded 內加入：
document.querySelectorAll('.journal-card').forEach((card) => {
    const numStamp = card.querySelector('.card-num-stamp');
    if (!numStamp) return;
    
    // 取出整數 id (例如 '01' 轉為 '1', '10' 轉為 '10')
    const artisanId = parseInt(numStamp.textContent.trim(), 10).toString();
    const detailUrl = `artisan-detail.html?id=${artisanId}`;

    // 1. 綁定卡片右下角箭頭
    const arrowBtn = card.querySelector('.btn-round-arrow');
    if (arrowBtn) arrowBtn.setAttribute('href', detailUrl);

    // 2. 綁定職人姓名標題
    const nameHeading = card.querySelector('.card-artisan-name');
    if (nameHeading) {
        nameHeading.style.cursor = 'pointer';
        nameHeading.onclick = () => { window.location.href = detailUrl; };
    }
});