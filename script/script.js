document.addEventListener("DOMContentLoaded", function() {
    const rollingList = document.getElementById('rolling-list');
    const items = rollingList.querySelectorAll('li');
    const itemHeight = 40; // li의 높이
    let currentIndex = 0;

    function startRolling() {
        setInterval(() => {
            currentIndex++;
            
            // 부드럽게 위로 이동
            rollingList.style.transition = "top 0.5s ease";
            rollingList.style.top = `-${currentIndex * itemHeight}px`;

            // 마지막 복사본에 도달했을 때
            if (currentIndex === items.length - 1) {
                setTimeout(() => {
                    // 애니메이션을 끄고 순식간에 진짜 1번으로 되돌림
                    rollingList.style.transition = "none";
                    rollingList.style.top = "0px";
                    currentIndex = 0;
                }, 500); // 애니메이션 시간(0.5초)이 끝난 뒤 실행
            }
        }, 3000); // 3초 간격
    }

    if (rollingList) {
        startRolling();
    }
});