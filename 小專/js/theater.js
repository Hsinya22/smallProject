// 字體浮現
document.addEventListener("DOMContentLoaded", function() {
    const zoomTexts = document.querySelectorAll('.zoom-text,.zoom-text01');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // 添加浮現效果
            } else {
                entry.target.classList.remove('visible'); // 可選：若要在離開視窗時隱藏
            }
        });
    }, { threshold: 0.1 }); // 設置觸發比例，當 10% 進入視窗時觸發
    
    zoomTexts.forEach(text => {
        observer.observe(text); // 觀察每個 zoom-text 元素
    });
});
