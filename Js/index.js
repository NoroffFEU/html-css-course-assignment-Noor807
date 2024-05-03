import { cartQtyTotalCount } from "./countStorage.js";

import { getFromStorage } from "./storage.js";
let localStorageList = getFromStorage('jacketitem')



const cartCount = document.querySelector('.cart-count')
const jacketsContainer = document.querySelector(".jackets")

const loaderDiv = document.getElementById('loader')




const baseURL = "https://api.noroff.dev/api/v1/rainy-days/"
cartCount.textContent = cartQtyTotalCount(localStorageList)

async function getJackets() {

  showLoader();
 
    
  const req = await fetch(baseURL )
  await delay(3000)
  const result = await req.json()
  hideLoader();

  for (let i = 0; i < result.length; i++){
     jacketsContainer.innerHTML += `<a class="jacket-item" href="./product/index.html?jacketid=${result[i].id}">
     
     
     <img src="${result[i].image}" alt="${result[i].title}"/>
      <h3> ${result[i].title}</h3>
      <p>${result[i].baseColor} </p>
      <p>${result[i].gender} </p>
      <p> ${result[i].sizes} </p>
      <p>$ ${result[i].price} </p>
      ${result[i].onSale ? `<p class='discount'> Discount:${result[i].discountedPrice }</p>` : '' }
      
      
     
   
                         
                       </a>` } 
                      
 
 
} 

function showLoader(){
  loaderDiv.classList.add('show')

}

function hideLoader(){
  loaderDiv.classList.remove('show')
}
function delay(ms) {
 
  return new Promise(resolve => setTimeout(resolve, ms));
}


getJackets()










 