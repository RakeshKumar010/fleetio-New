const heroSliderImg =document.querySelectorAll('.hero-slider-img')
const homeHeroSection =document.querySelector('.home-hero-section')
const imageRightPng =document.querySelector('#imageRightPng')


heroSliderImg[0].addEventListener('click',()=>{
    homeHeroSection.style.transform='translateX(0)'
    heroSliderImg[0].classList.add('hero-slider-active')
    heroSliderImg[1].classList.remove('hero-slider-active')
    heroSliderImg[2].classList.remove('hero-slider-active')
})
heroSliderImg[1].addEventListener('click',()=>{
    homeHeroSection.style.transform='translateX(-100vw)'
    heroSliderImg[0].classList.remove('hero-slider-active')
    heroSliderImg[1].classList.add('hero-slider-active')
    heroSliderImg[2].classList.remove('hero-slider-active')

})
heroSliderImg[2].addEventListener('click',()=>{
    homeHeroSection.style.transform='translateX(-200vw)'
    heroSliderImg[0].classList.remove('hero-slider-active')
    heroSliderImg[1].classList.remove('hero-slider-active')
    heroSliderImg[2].classList.add('hero-slider-active')

})