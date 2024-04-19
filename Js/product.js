

const baseURL = "https://v2.api.noroff.dev/rainy-days/" 
 
const jacketsContainer = document.querySelector(".jacket-detail")

const img = document.querySelector(".product-img")

 const addCartButton =document.querySelector('.button')

const parameterString = window.location.search;

const searchParameters = new URLSearchParams(parameterString);
 
const jacketId = searchParameters.get("jacketid")
 
// console.log(jacketId)


async function getJacketDetail() {

  const completejacketUrl = baseURL  + jacketId
 
  const req = await fetch(completejacketUrl)
 
  const result = await req.json()

  console.log = (result)
  img.src = `${result.data.image.url}`
img.alt = `${result.data.title}`
  
  jacketsContainer.innerHTML += `<div class="parent-div">
    
     <div class="child-div">
      <h2>  ${result.data.title}</h2>
      <p>Description:${result.data.description} </p>
      <p>Gender:  ${result.data.gender} </p>
      <p>Sizes:   ${result.data.sizes} </p>
      <p>Price:   $${result.data.price} </p>
      <p>Discount:$${result.data.discountedPrice} </p>
      
      </div>        
   </div>`
}

 
getJacketDetail()

addCartButton.addEventListener('click', addtocart)
function addtocart(){

}

