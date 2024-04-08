//import { getToken, getApiKey } from "./api.js";
const jacketsContainer = document.querySelector(".jackets")

const baseURL = "https://api.noroff.dev/api/v1/rainy-days/"


async function getJackets() {

    

  const req = await fetch(baseURL )

  const result = await req.json()

  for (let i = 0; i < result.length; i++){
     jacketsContainer.innerHTML += `<a class="jacket-item" href="/html/product.Html?jacketid=${result[i].id}">
     <img src="${result[i].image}" alt="${result[i].title}"/>
      <h3> ${result[i].title}</h3>
      <p>${result[i].gender} </p>
      <p> ${result[i].sizes} </p>
      <p> ${result[i].price} </p>
     
     
                         
                       </a>` }
 
 console.log(result)
} 




getJackets()










 