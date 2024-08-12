// 導覽列ＪＳ
document.getElementById('menuIcon').addEventListener('click', function() {
    var navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    } else {
        navLinks.classList.add('show');
    }
  });

// 簡單的輪播圖功能
const images = document.querySelectorAll('.carousel img');
const indicators = document.querySelectorAll('.carousel-indicators button');
let currentIndex = 0;

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
        indicators[i].classList.toggle('active', i === index);
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});

// 工作坊輪播圖
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".myCarousel");
    const arrowBtns = document.querySelectorAll(".myWrapper button");
    const wrapper = document.querySelector(".myWrapper");

    const firstCard = carousel.querySelector(".workshop-card");
    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false,
        startX,
        startScrollLeft,
        timeoutId;

    const dragStart = (e) => { 
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
    
        // Calculate the new scroll position
        const newScrollLeft = startScrollLeft - (e.pageX - startX);
    
        // Check if the new scroll position exceeds 
        // the carousel boundaries
        if (newScrollLeft <= 0 || newScrollLeft >= 
            carousel.scrollWidth - carousel.offsetWidth) {
            
            // If so, prevent further dragging
            isDragging = false;
            return;
        }
    
        // Otherwise, update the scroll position of the carousel
        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false; 
        carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
    
        // Return if window is smaller than 800
        if (window.innerWidth < 800) return; 
        
        // Calculate the total width of all cards
        const totalCardWidth = carousel.scrollWidth;
        
        // Calculate the maximum scroll position
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
        
        // If the carousel is at the end, stop autoplay
        if (carousel.scrollLeft >= maxScrollLeft) return;
        
        // Autoplay the carousel after every 2500ms
        timeoutId = setTimeout(() => 
            carousel.scrollLeft += firstCardWidth, 2500);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    wrapper.addEventListener("mouseenter", () => 
        clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    // Add event listeners for the arrow buttons to 
    // scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "Left" ? 
                -firstCardWidth : firstCardWidth;
        });
    });
});

// 展覽卡片跳新分頁
function openNewTabExhibit02() {
    window.open('exhibition_01.html', '_blank');
}
// 劇場表演卡片跳新分頁
function openNewTabShowcard02() {
    window.open('theater_01.html', '_blank');
}
//工作坊卡片跳新分頁
function openNewTabWorkshop02() {
    window.open('workshop_01.html', '_blank');
}