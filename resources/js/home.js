const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close');
const tourDates = document.querySelector('.events');
let productList = ['img1','img2','img3','img4','img5'];

let events = ()=>{
    burger.addEventListener('click',()=>{
    mobileMenu.style.display = 'block';
    burger.style.display = 'none'   
    });

    closeMenu.addEventListener('click',()=> {
        mobileMenu.style.display = 'none'
        burger.style.display = 'block'
    });
}

//code for responsiveness
events();
