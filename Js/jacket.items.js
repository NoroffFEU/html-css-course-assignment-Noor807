
for(let i = 0; i < localStorageList.length; i++){

    const jacketwrape= document.createElement("div")
    jacketwrape.classList.add("single-product");


    const containerFirst = document.createElement8("div")
    containerFirst.classList.add(ContFirst);
    jacketwrape.appendChild(containerFirst)

    const jacketImage = document.createElement('img')
    jacketImage.src = localStorageList[i].image 
    jacketImage.alt = localStorageList[i].title
    containerFirst.appendChild(jacketImage) 


   const jacketTitle = document.createElement("p")
   jacketTitle.textContent = localStorageList[i].title 
   jacketTitle.classList.add = ("title")
   containerFirst.appendChild(jacketTitle) 


   const containerSecond = document.createElement("div")
   containerSecond.classList.add(ContSecond);
   jacketwrape.appendChild(containerSecond)


   const quantityWrape = document.createElement("div")
   quantityWrape.classList.add('quantitywrape')
   containerSecond.appendChild(quantityWrape)


   const buttonMinus = document.createElement("button")
   buttonMinus.classList.add('Minus')
   buttonMinus.textContent = "-"
   buttonMinus.dataset.action ='decrease'
   quantityWrape.appendChild(buttonMinus)
   buttonMinus.addEventListener("click", removeOneFromCart)


   const jacketQnty = document.createElement("p")
   jacketQnty.textContent = localStorageList[i].quantity 
   jacketQnty.dataset.quantity = localStorageList[i].quantity
   jacketQnty.dataset.title= localStorageList[i].title









}
