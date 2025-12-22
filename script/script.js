// 1. 파일을 불러오는 함수 (수정 없음)
async function loadHTML(id, file) {
    const res = await fetch(file);
    document.getElementById(id).innerHTML = await res.text();
}

// 2. 헤더 로딩이 "끝난 후"에 실행되도록 .then() 사용
loadHTML('header-load', 'header.html').then(() => {
    // 이제 헤더가 화면에 그려졌으므로 버튼을 찾을 수 있습니다.
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
});

// 푸터 로딩
loadHTML('footer-load', 'footer.html');