let currentImageIndex = 0;
let interval;

const heroSliderImg = document.querySelectorAll('.hero-slider-img');
const homeHeroSection = document.querySelector('.home-hero-section');

function clickImage(index) {
    homeHeroSection.style.transform = `translateX(-${index * 100}vw)`;
    heroSliderImg.forEach((img, i) => {
        img.classList.remove('hero-slider-active');
        if (i === index) {
            img.classList.add('hero-slider-active');
        }
    });
}

function startInterval() {
    interval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % heroSliderImg.length;
        clickImage(currentImageIndex);
    }, 3000);
}

startInterval();

heroSliderImg.forEach((img, index) => {
    img.addEventListener('click', () => {
        clearInterval(interval);
        currentImageIndex = index;
        clickImage(currentImageIndex);
        startInterval();
    });
});
