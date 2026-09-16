/**
 * 職人專訪問答詳情頁 - 動態渲染與互動切換腳本 (artisan-detail.js)
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. 取得網址列參數 ?id=X，預設為 1
    const urlParams = new URLSearchParams(window.location.search);
    let currentId = parseInt(urlParams.get('id'), 10) || 1;
    if (!ARTISANS_DATA[currentId]) {
        currentId = 1;
    }

    const totalArtisans = Object.keys(ARTISANS_DATA).length;

    // 2. 渲染指定職人詳情函式
    function renderArtisan(id) {
        const data = ARTISANS_DATA[id];
        if (!data) return;

        // 更新網頁標題
        document.title = `${data.name} ｜ 訪談問答 ｜ 職人故事 ｜ 嘉義青年壯遊`;

        // 更新頂部子導覽列分頁計數
        const counterEl = document.getElementById('artisanCounter');
        if (counterEl) {
            counterEl.textContent = `${data.index} / ${totalArtisans < 10 ? '0' + totalArtisans : totalArtisans}`;
        }

        // 更新上一位 / 下一位按鈕連結
        const prevId = id > 1 ? id - 1 : totalArtisans;
        const nextId = id < totalArtisans ? id + 1 : 1;

        const prevBtn = document.getElementById('prevArtisanBtn');
        const nextBtn = document.getElementById('nextArtisanBtn');
        if (prevBtn) {
            prevBtn.href = `?id=${prevId}`;
            prevBtn.onclick = (e) => {
                e.preventDefault();
                switchArtisan(prevId);
            };
        }
        if (nextBtn) {
            nextBtn.href = `?id=${nextId}`;
            nextBtn.onclick = (e) => {
                e.preventDefault();
                switchArtisan(nextId);
            };
        }

        // 更新左欄：職人肖像、姓名、稱號、標籤、簡介
        const photoBox = document.querySelector('.profile-photo-box img');
        if (photoBox) {
            photoBox.src = data.heroImg;
            photoBox.alt = data.name;
        }

        const nameEl = document.querySelector('.profile-name');
        if (nameEl) nameEl.textContent = data.name;

        const titleRoleEl = document.querySelector('.profile-title-role');
        if (titleRoleEl) titleRoleEl.innerHTML = data.role.replace(' ｜ ', '<br>');

        const locPill = document.querySelector('.profile-tag-pill.loc-pill');
        if (locPill) locPill.textContent = `📍 ${data.town}`;

        const craftPill = document.querySelector('.profile-tag-pill.craft-pill');
        if (craftPill) craftPill.textContent = `⭘ ${data.category}`;

        const bioEl = document.querySelector('.profile-biography-p');
        if (bioEl) bioEl.textContent = data.bio;

        const quoteEl = document.querySelector('.slanted-quote-text');
        if (quoteEl) quoteEl.innerHTML = data.quote;

        // 更新左欄：問題分類篩選按鈕 (依該職人實際擁有的主題生成)
        const filterNav = document.querySelector('.interview-topics-filter');
        if (filterNav && data.topics) {
            filterNav.innerHTML = data.topics.map((t, idx) => {
                const count = t.id === 'ALL' 
                    ? data.qaList.length 
                    : data.qaList.filter(q => q.topicId === t.id).length;
                return `
                    <button class="topic-filter-btn ${idx === 0 ? 'active' : ''}" data-topic="${t.id}">
                        ${t.name} (${count})
                    </button>
                `;
            }).join('');

            // 綁定篩選點擊事件
            filterNav.querySelectorAll('.topic-filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    filterNav.querySelectorAll('.topic-filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const topic = btn.getAttribute('data-topic');
                    filterQaCards(topic);
                });
            });
        }

        // 更新右欄：Q&A 卡片列表
        const qaContainer = document.querySelector('.qa-cards-list');
        if (qaContainer && data.qaList) {
            qaContainer.innerHTML = data.qaList.map(qa => `
                <article class="qa-card-box" data-topic="${qa.topicId}">
                    <div class="card-num-col">${qa.num}</div>
                    <div class="card-content-col">
                        <span class="qa-category-badge">${qa.topicName}</span>
                        <h4 class="qa-question-text">${qa.question}</h4>
                        
                        <div class="qa-audio-bar">
                            <button class="btn-play-audio" aria-label="播放音訊">▶</button>
                            <div class="waveform-graphic">
                                <span style="height:35%"></span><span style="height:65%"></span><span style="height:100%"></span><span style="height:45%"></span>
                                <span style="height:80%"></span><span style="height:55%"></span><span style="height:90%"></span><span style="height:30%"></span>
                                <span style="height:70%"></span><span style="height:50%"></span><span style="height:85%"></span><span style="height:40%"></span>
                                <span style="height:60%"></span><span style="height:75%"></span><span style="height:45%"></span><span style="height:30%"></span>
                            </div>
                            <span class="audio-time-label">${qa.audioTime}</span>
                        </div>

                        <blockquote class="qa-answer-quote">${qa.answer}</blockquote>
                    </div>
                    <div class="card-photo-col">
                        <img src="${qa.photo}" alt="${qa.question}">
                    </div>
                </article>
            `).join('');

            // 綁定音訊播放波形動畫互動
            qaContainer.querySelectorAll('.btn-play-audio').forEach(playBtn => {
                playBtn.addEventListener('click', () => {
                    const isPlaying = playBtn.classList.contains('is-playing');
                    qaContainer.querySelectorAll('.btn-play-audio').forEach(b => {
                        b.classList.remove('is-playing');
                        b.textContent = '▶';
                    });
                    if (!isPlaying) {
                        playBtn.classList.add('is-playing');
                        playBtn.textContent = '❚❚';
                    }
                });
            });
        }
    }

    // 3. 切換職人事件
    function switchArtisan(newId) {
        history.pushState(null, '', `?id=${newId}`);
        renderArtisan(newId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 4. 過濾問題卡片
    function filterQaCards(topic) {
        const cards = document.querySelectorAll('.qa-card-box');
        cards.forEach(card => {
            if (topic === 'ALL' || card.getAttribute('data-topic') === topic) {
                card.style.display = 'grid';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // 5. 初次載入渲染
    renderArtisan(currentId);

    // 6. 監聽瀏覽器上一頁 / 下一頁切換
    window.addEventListener('popstate', () => {
        const p = new URLSearchParams(window.location.search);
        const rId = parseInt(p.get('id'), 10) || 1;
        renderArtisan(rId);
    });
});