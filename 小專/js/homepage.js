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
let mySlideIndex = 1;
showSlide01(mySlideIndex);

function plusSlides(n) {
    showSlide01(mySlideIndex += n);
}
// 此處是給圓點的函式
function currentSlide(n) {
    showSlide01(mySlideIndex = n);
}

function showSlide01(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        mySlideIndex = 1;
    }
    if (n < 1) {
        mySlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[mySlideIndex - 1].style.display = "block";
    dots[mySlideIndex - 1].className += "active";
}

// 工作坊卡片功能
let currentCardIndex = 0;

function scrollLeft() {
    const cardWrapper = document.querySelector('.mycard-wrapper');
    const cards = document.querySelectorAll('.workshop-card');
    const cardWidth = cards[0].offsetWidth + 20; // Including margin
    if (currentCardIndex > 0) {
        currentCardIndex--;
        cardWrapper.style.transform = `translateX(-${currentCardIndex * cardWidth}px)`;
    }
}

function scrollRight() {
    const cardWrapper = document.getElementsByClassName('mycard-wrapper');
    const cards = document.getElementsByClassName('workshop-card');
    const cardWidth = cards[0].offsetWidth + 20; // Including margin
    if (currentCardIndex < cards.length - 1) {
        currentCardIndex++;
        cardWrapper.style.transform = `translateX(-${currentCardIndex * cardWidth}px)`;
    }
}





// let currentCardIndex = 0;

// function scrollLeft() {
//     const cardTrack = document.querySelector('.myCard-wrapper');
//     const cards = document.querySelectorAll('.workshopCard');
//     const cardWidth = cards[0].offsetWidth + 20; // Including margin
//     if (currentCardIndex > 0) {
//         currentCardIndex--;
//         cardTrack.style.transform = `translateX(-${currentCardIndex * cardWidth}px)`;
//     }
// }

// function scrollRight() {
//     const cardTrack = document.querySelector('.myCard-wrapper');
//     const cards = document.querySelectorAll('.workshopCard');
//     const cardWidth = cards[0].offsetWidth + 20; // Including margin
//     if (currentCardIndex < cards.length - 1) {
//         currentCardIndex++;
//         cardTrack.style.transform = `translateX(-${currentCardIndex * cardWidth}px)`;
//     }
// }

// let workshopIndex = 0;

// function slideLeft() {
//     const wrapper = document.querySelector('.myCard-wrapper');
//     const cards = document.querySelectorAll('.workshopCard');
//     const cardWidth = cards[0].offsetWidth + 20; // Inciuding margin
//     if (workshopIndex > 0) {
//         workshopIndex--;
//         wrapper.style.transform = `translateX(-${workshopIndex * cardWidth}px)`;
//     }
// }

// function slideRight() {
//     const wrapper = document.querySelector('.myCard-wrapper');
//     const cards = document.querySelectorAll('.workshopCard');
//     const cardWidth = cards[0].offsetWidth + 20; // Inciuding margin
//     if (workshopIndex < cards.length - 1) {
//         workshopIndex++;
//         wrapper.style.transform = `translateX(-${workshopIndex * cardWidth}px)`;
//     }
// }
