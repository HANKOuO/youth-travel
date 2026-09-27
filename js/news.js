    // 最新消息分類過濾
    document.addEventListener('DOMContentLoaded', () => {
        const filterBtns = document.querySelectorAll('.news-pill-btn');
        const featuredCard = document.querySelector('.news-featured-card');
        const listRows = document.querySelectorAll('.news-list-row');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                // 過濾置頂卡
                const featuredCategory = featuredCard.getAttribute('data-category');
                if (filter === 'ALL' || featuredCategory === filter) {
                    featuredCard.style.display = 'grid';
                } else {
                    featuredCard.style.display = 'none';
                }

                // 過濾條列卡
                listRows.forEach(row => {
                    const rowCategory = row.getAttribute('data-category');
                    if (filter === 'ALL' || rowCategory === filter) {
                        row.style.display = 'grid';
                    } else {
                        row.style.display = 'none';
                    }
                });
            });
        });

        // 載入更多文章回饋
        const loadMoreBtn = document.getElementById('btnLoadMoreNews');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                loadMoreBtn.innerHTML = '已載入全部最新消息';
                loadMoreBtn.style.cursor = 'default';
                loadMoreBtn.style.opacity = '0.7';
            });
        }
    });