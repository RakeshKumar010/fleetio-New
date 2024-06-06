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
 