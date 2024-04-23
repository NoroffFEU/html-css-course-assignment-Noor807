
import { getFromStorage } from "./storage.js";

let localStorageList = getFromStorage('jacketitem')

const cartItems = document.querySelector('.local-storage')

if (localStorageList.length >0){
    for(let i= 0; i< localStorageList.length; i++)

    cartItems.innerHTML += `<div class="single-item">
    
     <div class="product-in-cart">
     <img class="cart-img" src="${localStorageList[i].image}" alt="${localStorageList[i].title}">
      <h2 class="cart-h2">  ${localStorageList[i].title}</h2>
      <p>qty:   $${localStorageList[i].quantity} </p>
      <p>Price:   $${localStorageList[i].price} </p>
      <button class="remove">Remove</button>
    
      
      </div>        
   </div>`

} else{
    cartItems.innerHTML = 'cart is empty'


}
const removeItem = document.querySelector('.remove')
removeItem.addEventListener('Click',removeItemfromList)

function removeItemfromList(event){
    cartItems.innerHTML = ""

   const title = event.target.dataset.title

   if(localStorageList.length === 1){

    cartItems.innerHTML =""
    localStorage.clear(jacketItem);
    cartItems.innerHTML = "your cart is empty";
   return

   }

   const filterOut = localStorageList.filter(jacket => jacket.title !== title)

   localStorageList = filterOut

   localStorageList.setItem("jacketitem", JSON.stringify(localStorageList))

   for(let i= 0; i< localStorageList.length; i++)

    cartItems.innerHTML += `<div class="single-item">
    
   <div class="product-in-cart">
   <img class="cart-img" src="${localStorageList[i].image}" alt="${localStorageList[i].title}">
    <h2 class="cart-h2">  ${localStorageList[i].title}</h2>
    <p>qty:   $${localStorageList[i].quantity} </p>
    <p>Price:   $${localStorageList[i].price} </p>
    <button class="remove">Remove</button>
  
    
    </div>        
 </div>`

   


}





