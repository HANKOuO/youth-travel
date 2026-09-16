/**
 * 戶外教育專案 (outdoor-detail.js) - A~D 方案動態渲染與互動切換腳本
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. 取得網址列參數 ?route=X，預設為 A
    const urlParams = new URLSearchParams(window.location.search);
    let currentRoute = urlParams.get('route') || 'A';
    currentRoute = currentRoute.toUpperCase();
    if (!OUTDOOR_ROUTES[currentRoute]) {
        currentRoute = 'A';
    }

    // 2. 方案內容渲染函式
    function renderOutdoorRoute(routeId) {
        const data = OUTDOOR_ROUTES[routeId];
        if (!data) return;

        // 更新上方標題與文案
        document.getElementById('activeRouteEyebrow').textContent = data.eyebrow;
        document.getElementById('activeRouteName').textContent = data.mainTitle;
        document.getElementById('activeRouteKeywords').textContent = data.keywords;
        document.getElementById('activeRouteSummary').textContent = data.summary;

        // 更新規格卡片
        document.getElementById('specTarget').innerHTML = `<span class="spec-icon">🎓</span> ${data.specs.target}`;
        document.getElementById('specSpots').innerHTML = `<span class="spec-icon">📍</span> ${data.specs.spots}`;
        document.getElementById('specTime').innerHTML = `<span class="spec-icon">🕒</span> ${data.specs.time}`;
        document.getElementById('specTransport').innerHTML = `<span class="spec-icon">🚶</span> ${data.specs.transport}`;

        // 更新時間軸清單 (Timeline)
        const timelineCol = document.getElementById('timelineItineraryCol');
        timelineCol.innerHTML = data.timeline.map(step => `
            <article class="timeline-step-item">
                <div class="step-time-badge">
                    <span class="time-range">${step.time.replace(' - ', '<br>')}</span>
                    <div class="step-circle-num">${step.num}</div>
                </div>
                <div class="step-content-card">
                    <div class="step-thumb">
                        <img src="${step.img}" alt="${step.title}">
                    </div>
                    <div class="step-text-detail">
                        <div class="step-title-line">
                            <h3 class="step-heading">${step.title}</h3>
                            <span class="step-type-pill">${step.pill}</span>
                        </div>
                        <div class="step-location-tag">${step.location}</div>
                        <p class="step-desc">${step.desc}</p>
                    </div>
                </div>
            </article>
        `).join('');

        // 更新手繪路線地圖 SVG 標記點
        const svgMap = document.getElementById('routeVectorMap');
        if (svgMap) {
            let pathD = "M 200,40 Q 140,110 180,160 T 220,220";
            let circlesHtml = data.mapMarkers.map(m => `
                <circle cx="${m.x}" cy="${m.y}" r="10" fill="#D96328" />
                <text x="${m.x}" y="${m.y + 4}" fill="#FFF" font-size="10" font-weight="bold" text-anchor="middle">${m.num}</text>
                <text x="${m.x < 150 ? m.x + 16 : m.x - 16}" y="${m.y + 4}" fill="#333" font-size="9" text-anchor="${m.x < 150 ? 'start' : 'end'}">${m.title}</text>
            `).join('');

            svgMap.innerHTML = `
                <rect x="10" y="10" width="260" height="240" rx="12" fill="#F8F6F0"/>
                <path d="${pathD}" stroke="#D96328" stroke-width="2" stroke-dasharray="4 4" opacity="0.8"/>
                ${circlesHtml}
            `;
        }

        // 更新上方 A~D 方案按鈕的 Active 狀態
        document.querySelectorAll('.scheme-tab-card').forEach(tab => {
            const tid = tab.getAttribute('data-route');
            if (tid === routeId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // 更新底部「其他戶外教育方案」推薦（排除當前選中的路線）
        const otherGrid = document.getElementById('otherRoutesGrid');
        if (otherGrid) {
            const others = Object.keys(OUTDOOR_ROUTES).filter(k => k !== routeId);
            otherGrid.innerHTML = others.map(k => {
                const r = OUTDOOR_ROUTES[k];
                return `
                    <a href="javascript:void(0);" class="other-route-card" data-route="${r.id}">
                        <div class="other-thumb">
                            <img src="${r.thumbImg}" alt="${r.mainTitle}">
                        </div>
                        <div class="other-info">
                            <strong>${r.id} ${r.tabTitle}</strong>
                            <span class="arrow">➔</span>
                        </div>
                    </a>
                `;
            }).join('');

            // 綁定底部推薦卡片切換事件
            otherGrid.querySelectorAll('.other-route-card').forEach(card => {
                card.addEventListener('click', () => {
                    const targetRoute = card.getAttribute('data-route');
                    history.pushState(null, '', `?route=${targetRoute}`);
                    renderOutdoorRoute(targetRoute);
                    document.getElementById('outdoorDetailAnchor').scrollIntoView({ behavior: 'smooth' });
                });
            });
        }
    }

    // 3. 綁定上方 A~D Tabs 點擊切換
    document.querySelectorAll('.scheme-tab-card').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetRoute = tab.getAttribute('data-route');
            history.pushState(null, '', `?route=${targetRoute}`);
            renderOutdoorRoute(targetRoute);
            document.getElementById('outdoorDetailAnchor').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 4. 初次載入渲染
    renderOutdoorRoute(currentRoute);

    // 支援上一頁/下一頁瀏覽歷程切換
    window.addEventListener('popstate', () => {
        const p = new URLSearchParams(window.location.search);
        const r = p.get('route') || 'A';
        renderOutdoorRoute(r.toUpperCase());
    });
});