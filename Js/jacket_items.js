 
 const cartItems = document.querySelector('.local-storage')
 const jacketWrape = document.createElement('div')
 jacketWrape.classList.add('Jacket-wrape');

 export function itemCartForCart(jackets){

    jacketWrape.innerHTML = ""

    if (jackets.length === 0 ){
        return []
    }

    if (jackets.length > 0 ){

    

 for(let i = 0; i < jackets.length; i++){

    const jacketwrape= document.createElement("div")
    jacketwrape.classList.add("single-product");


    const containerFirst = document.createElement("div")
    containerFirst.classList.add('ContFirst');
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
   containerSecond.classList.add('ContSecond');
   jacketwrape.appendChild(containerSecond)


   const quantityWrape = document.createElement("p")
   quantityWrape.textContent =  "Qty." + jackets[i].quantity;
   quantityWrape.classList.add('quantitywrape')
   containerSecond.appendChild(quantityWrape)


   const jacketprice = document.createElement("p")
   jacketprice .textContent = "$" + jackets[i].price
   containerSecond.appendChild(jacketprice)

   


   const buttonRemove = document.createElement("button")
   buttonRemove.classList.add('remove')
   buttonRemove.dataset.title = jackets[i].title
   buttonRemove.textContent = "remove"
   containerSecond.appendChild(buttonRemove)
    buttonRemove.addEventListener("click", removeOneFromCart)

   jacketWrape.appendChild( jacketwrape)
   

}


 return jacketWrape

} else{

     return []

}

}

function  removeOneFromCart(event){
   console.log("dataset" , event)

  cartItems. innerHTML = ""

   const title = event.target.dataset.title

   if(localStorageList.length === 1){

    cartItems.innerHTML =""
    localStorage.clear("jacketitem");
    cartItems.innerHTML = "your cart is empty";
   return

   }

   const filterOut = localStorageList.filter(item => item.title !== title)

   localStorageList = filterOut

   localStorage.setItem("jacketitem", JSON.stringify(localStorageList))

   

    const html = itemCartForCart(localStorageList)

    cartItems.appendChild(html)
    



}








