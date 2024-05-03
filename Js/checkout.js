

import { cartSumTotalPrice ,cartQtyTotalCount } from "./countStorage.js";
import { itemCartForCart } from "./jacket.items.js";


import { getFromStorage } from "./storage.js";

let localStorageList = getFromStorage('jacketitem')
const cartCount = document.querySelector('.cart-count')
 
cartCount.textContent = cartQtyTotalCount(localStorageList)
const cartItems = document.querySelector('.local-storage')
const totalAmount = document.querySelector('.price-holder')

if (localStorageList.length > 0){

    const html = itemCartForCart(localStorageList)

    cartItems.appendChild(html)
    
} else{
    cartItems.innerHTML = 'cart is empty'
}


totalAmount.textContent ='$'+ cartSumTotalPrice(localStorageList)




