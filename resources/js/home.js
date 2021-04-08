const mobileMenu = document.querySelector('.mobile-menu');
const burger = document.querySelector('.burger');

burger.addEventListener('click', ()=>{
   if(mobileMenu.style.display === 'none'){
    mobileMenu.style.display = 'inline-block';
   }else{
       mobileMenu.style.display = 'none';
   }
})