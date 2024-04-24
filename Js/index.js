import { cartQtyTotalCount } from "./countStorage.js";

import { getFromStorage } from "./storage.js";
let localStorageList = getFromStorage('jacketitem')



const cartCount = document.querySelector('.cart-count')
const jacketsContainer = document.querySelector(".jackets")


const baseURL = "https://api.noroff.dev/api/v1/rainy-days/"
cartCount.textContent = cartQtyTotalCount(localStorageList)

async function getJackets() {

    

  const req = await fetch(baseURL )

  const result = await req.json()

  for (let i = 0; i < result.length; i++){
     jacketsContainer.innerHTML += `<a class="jacket-item" href="./product/index.html?jacketid=${result[i].id}">
     
     
     <img src="${result[i].image}" alt="${result[i].title}"/>
      <h3> ${result[i].title}</h3>
      <p>${result[i].baseColor} </p>
      <p>${result[i].gender} </p>
      <p> ${result[i].sizes} </p>
      <p>$ ${result[i].price} </p>
      
      
     
     
                         
                       </a>` }
                      
 
 console.log(result)
} 




getJackets()










 