// import { getToken, getApiKey } from "./api.js"
 
const baseURL = "https://api.noroff.dev/api/v1/rainy-days/"

const singleproductEndpoint = "rainy-days/"

const jacketsContainer = document.querySelector(".jackets-detail")

const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterstring);

const jacketId = searchParameters.get("jacketid")

console.log(jacketId)

// const apiKey = await getApiKey()
// const token = await getToken()
   
// const  options ={
//     headers : {
//         Authorization: `Bearer ${token}`,
//         "x-Noroff-API-Key" : apiKey
//     }
// }


const completejacketUrl = baseURL + singleproductEndpoint + jacketId
 
const req = await fetch(completejacketUrl, options)

const result = await req.json()
console.log = (result)

jacketsContainer.innerHTML += `<div class= "jacket-info">
                            
                             <div class= "flex-sale">
                            <p class= "${result.onsale ? "on-sale" : ""}">${result.onsale ? result.data.price : ""}</p>
                            <p class= "current-price">$ ${result.onsale ? result.discountedPrice :result.price}</p>
                            </div>

                            <img src ="${result.image.url}" alt= "$ {result.data.title}"/>
                        <p>$ {result.data.title}</p>
                        </div>´
}

getJacketDetail()


