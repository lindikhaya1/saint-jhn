let button = document.querySelector('.button');
let clickCounter = null;
let value = '';
const quantityValue = document.querySelector('.quantity-value');
let subQuantity = parseInt(quantityValue.textContent);

button.addEventListener('click', ()=> {
    let itemsInCart = document.querySelector('.cart-items');
    itemsInCart.style.display = 'inline-block';
   
    //checking items in the cart and if clickCounter has nothing yet
    if(itemsInCart.textContent === '1' && clickCounter === null){ 
      clickCounter+=1; //without it item number will need double click to reach 2 items **try commenting it
    }else{
      value = clickCounter.toString();
      itemsInCart.textContent = value;      
    }
    clickCounter+=1;
    
    //subtracting the quantity of instock products
    let subValue = subQuantity-= 1;
    subValue = subValue.toString();
    quantityValue.textContent = subValue;
    quantityValue.style.color= 'red';
    quantityValue.style.fontWeight = 'bold';
    

     
})