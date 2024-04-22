

const baseURL = "https://api.noroff.dev/api/v1/rainy-days/"
 
const jacketsContainer = document.querySelector(".jacket-detail")

const img = document.querySelector(".product-img")

 const addCartButton =document.querySelector('.button')

const parameterString = window.location.search;

const searchParameters = new URLSearchParams(parameterString);
 
const jacketId = searchParameters.get("jacketid")

let localStorageList = getFromStorage('jacketitem')

let jacketDetail = {}

// console.log(jacketId)


async function getJacketDetail() {

  const completejacketUrl = baseURL  + jacketId
 
  const req = await fetch(completejacketUrl)
 
  const result = await req.json()
  jacketDetail = result
  console.log = (result)
  img.src = `${result.image}`
  img.alt = `${result.title}`
  
  jacketsContainer.innerHTML += `<div class="parent-div">
    
     <div class="child-div">
      <h2>  ${result.title}</h2>
      <p>Description:${result.description} </p>
      <p>Gender:  ${result.gender} </p>
      <p>Sizes:   ${result.sizes} </p>
      <p>Price:   $${result.price} </p>
      <p class="discount"> Discount:$${result.discountedPrice} </p>
      
      </div>        
   </div>`
}




///add to cart/////////////////////////
 
getJacketDetail()

addCartButton.addEventListener('click', addToCart)

function addToCart(){

  let quantity = 1

  let jacketToAdd = {
    image: jacketDetail.image,
    title: jacketDetail.title,
    price: jacketDetail.onSale ? jacketDetail .discountedPrice : jacketDetail.price,
    quantity : quantity,

  }

  ///const jacketInCart = itemInCart(localStorageList, jacketDetail.title)
 
 const jacketInCart = isItemincart(localStorageList, jacketDetail.title)


  if(!jacketInCart)  {

    localStorageList.push(jacketToAdd)

    localStorage.setItem("jacketitem", JSON.stringify(localStorageList) )
    

   }

   else {
    alert('Item is in cart')
    
 }



};


function isItemincart(item, titleToCheck){

  const found = item.some(jacket => jacket.title === titleToCheck);

  if(found) {
    return true
  }
}


function getFromStorage(key){
  const savedInStorage = localStorage.getItem(key)

  if(!savedInStorage) {
    return []
  }

  return JSON.parse(savedInStorage)
}



