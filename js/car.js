// console.log('jj');                              
// alert('hii')

// car 
const carImgChange = document.querySelector('#carImgChange')
const tabToChangeCar =document.querySelectorAll('.tab-to-change-car')

tabToChangeCar[0].addEventListener('click',()=>{
    carImgChange.src='/assets/carrental/cars/SuzukiCiaz.png'
    tabToChangeCar[0].classList.add('bmw')
    tabToChangeCar[1].classList.remove('bmw')
    tabToChangeCar[2].classList.remove('bmw')
    tabToChangeCar[3].classList.remove('bmw')
    tabToChangeCar[4].classList.remove('bmw')
     
})
tabToChangeCar[1].addEventListener('click',()=>{
    carImgChange.src='/assets/carrental/cars/SuzukiDzire.png'
    tabToChangeCar[0].classList.remove('bmw')
    tabToChangeCar[1].classList.add('bmw')
    tabToChangeCar[2].classList.remove('bmw')
    tabToChangeCar[3].classList.remove('bmw')
    tabToChangeCar[4].classList.remove('bmw')
     
})
 
tabToChangeCar[2].addEventListener('click',()=>{
    carImgChange.src='/assets/carrental/cars/SuzukiErtiga.png'
      tabToChangeCar[0].classList.remove('bmw')
    tabToChangeCar[1].classList.remove('bmw')
    tabToChangeCar[2].classList.add('bmw')
    tabToChangeCar[3].classList.remove('bmw')
    tabToChangeCar[4].classList.remove('bmw')
     

})
tabToChangeCar[3].addEventListener('click',()=>{
    carImgChange.src='/assets/carrental/cars/ToyotaInnova.png'
      tabToChangeCar[0].classList.remove('bmw')
    tabToChangeCar[1].classList.remove('bmw')
    tabToChangeCar[2].classList.remove('bmw')
    tabToChangeCar[3].classList.add('bmw')
    tabToChangeCar[4].classList.remove('bmw')
     

})
tabToChangeCar[4].addEventListener('click',()=>{
    carImgChange.src='/assets/carrental/cars/HondaCity.png'
      tabToChangeCar[0].classList.remove('bmw')
    tabToChangeCar[1].classList.remove('bmw')
    tabToChangeCar[2].classList.remove('bmw')
    tabToChangeCar[3].classList.remove('bmw')
    tabToChangeCar[4].classList.add('bmw')
    

})
 

// closure
const rightIcon = document.querySelector('#rightIcon');
const leftIcon = document.querySelector('#leftIcon');
const carHeroImgCh = document.querySelector('#carHeroImgCh');
const carClosureContainer = document.querySelector('#carClosureContainer');
const carClosureItem = document.querySelectorAll('.car-closure-item');

// Total number of items
let totalItem = carClosureItem.length;
// Current index
let currentIndex = 0;

// Width of each item - assuming each item is 255px wide
const itemWidth = 255;

// Event listener for the right icon
rightIcon.addEventListener('click', () => {
  // Increment currentIndex or reset if at the last item
  currentIndex = (currentIndex + 1) % totalItem;
  carClosureContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});

// Event listener for the left icon
leftIcon.addEventListener('click', () => {
  // Decrement currentIndex or set to the last item if at the first item
  currentIndex = (currentIndex - 1 + totalItem) % totalItem;
  carClosureContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});


carClosureItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    carHeroImgCh.src = carClosureItem[index].src;
  });
});


