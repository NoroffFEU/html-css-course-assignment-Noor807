

const baseURL = "https://v2.api.noroff.dev/rainy-days/"
 
const jacketsContainer = document.querySelector(".jacket-detail")
let jacketDetail = []
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
  jacketDetail = result
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
      <p class="discount"> Discount:$${result.data.discountedPrice} </p>
      
      </div>        
   </div>`
}




///add to cart/////////////////////////
 
getJacketDetail()

addCartButton.addEventListener('click', addtocart)

function addtocart(){

  let quantity = 1

  let jacketToAdd = {
    image: jacketDetail.image.url,
    title: jacketDetail.title,
    price: jacketDetail.onSale ? jacketDetail .discountedPrice : jacketDetail.price,
    quantity : quantity,

  }

  const jacketInCart = itemInCart(localStorageList, jacketDetail.title)

  if(jacketInCart){
    localStorageList.push({...jacketToAdd, quantity:quantity+1})
    localStorage.setItem("jacketitem" , JSON.stringify(localStorageList))

  }
  else {
    const findIndex = localStorageList.findIndex(jacket => jacket.title === jacketDetail.title)

    localStorageList[findIndex].quantity++

    localStorageList.setItem(jacketitem , JSON.stringify(localStorageList))
  }



};



