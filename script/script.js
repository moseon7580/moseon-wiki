// 1. 파일을 불러오는 함수
async function loadHTML(id, file) {
    const res = await fetch(file);
    const text = await res.text();
    document.getElementById(id).innerHTML = text;
}

// 2. 헤더 로딩 후 실행될 로직들
loadHTML('header-load', 'header.html').then(() => {
    // --- [A] 헤더 관련 변수 설정 (로딩 후에 찾아야 함) ---
    const header = document.getElementById('main-header');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let lastScrollY = window.scrollY;

    // --- [B] 스크롤 숨기기/보이기 기능 ---
    if (header) {
        window.addEventListener('scroll', () => {
            // 100px 이상 내려갔을 때만 작동
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                header.classList.add('header-hide'); // 숨김
            } else {
                header.classList.remove('header-hide'); // 보임
            }
            lastScrollY = window.scrollY;
        });
    }

    // --- [C] 모바일 메뉴 토글 기능 ---
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// 3. 푸터 로딩
loadHTML('footer-load', 'footer.html');




// 배너 HTML 태그 복사 함수
function copyHtmlTag() {
  // 1. 복사할 텍스트 정의
  const htmlCode = '<a href="https://chan.naru.pub/" target="_blank"><img src="https://r2.naru.pub/chan/src/img/banner/chan-naru-banner.png"></a>';

  // 2. 클립보드 복사 실행
  navigator.clipboard.writeText(htmlCode).then(() => {
    // 3. 복사 성공 시 알림 (선택 사항)
    alert("HTML 태그가 복사되었습니다!");
  }).catch(err => {
    console.error('복사 실패:', err);
  });
}