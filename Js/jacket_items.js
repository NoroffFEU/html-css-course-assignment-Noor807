 
 let jackets = getFromStorage('jacketitem')
 const cartItems = document.querySelector('.local-storage')


 export function itemCartForCart(jackets){
    cartItems.innerHTML = ''
    if (jackets.length === 0 ){
        return []
    }
    if (jackets.length > 0 ){

    

 for(let i = 0; i < jackets.length; i++){

    const jacketwrape= document.createElement("div")
    jacketwrape.classList.add("single-product");


    const containerFirst = document.createElement("div")
    containerFirst.classList.add(ContFirst);
    jacketwrape.appendChild(containerFirst)

    const jacketImage = document.createElement('img')
    jacketImage.src = jackets[i].image 
    jacketImage.alt =jackets[i].title
    containerFirst.appendChild(jacketImage) 


   const jacketTitle = document.createElement("h2")
   jacketTitle.textContent = jackets[i].title 
   jacketTitle.classList.add = ("title")
   containerFirst.appendChild(jacketTitle) 


   const containerSecond = document.createElement("div")
   containerSecond.classList.add(ContSecond);
   jacketwrape.appendChild(containerSecond)


   const quantityWrape = document.createElement("p")
   quantityWrape.textContent = quantity;
   quantityWrape.classList.add('quantitywrape')
   containerSecond.appendChild(quantityWrape)


   const buttonRemove = document.createElement("button")
   buttonRemove.classList.add('remove')
   buttonRemove.textContent = "-"
   quantityWrape.appendChild(buttonRemove)
   buttonRemove.addEventListener("click", removeOneFromCart)


   const jacketprice = document.createElement("p")
   jacketprice .textContent = jackets[i].price
   containerSecond.appendChild(jacketprice)

   cartItems.appendChild( jacketwrape)


}


 return cartItems

} else{
    return []

}


}

function  removeOneFromCart(event){
   

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

   

    const html = itemCartForCart(localStorageList)

    cartItems.appendChild(html)
    



}








