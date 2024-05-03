
 const baseURL = "https://api.noroff.dev/api/v1/rainy-days/" 
  

const divJackets = document.querySelector(".male-jackets")

async function getMaleJackets(){
    const req = await fetch(baseURL )

    const result = await req.json()

        

        const maleJackets = result.filter((jacket) => jacket.gender === "Male")

        for(let i = 0; i < maleJackets.length; i++)

    
    divJackets.innerHTML += `
       <a  class="jacket-item" href="../product/index.html?jacketid=${maleJackets[i].id} ">
       <img src="${maleJackets[i].image}" alt="${maleJackets[i].title}"/>
      <h2> ${maleJackets[i].title}</h2>
      <p>${maleJackets[i].baseColor} </p>
      <p>${maleJackets[i].gender} </p>
      <p> ${maleJackets[i].sizes} </p>
      <p>$ ${maleJackets[i].price} </p>
            
        </a>
         `
 

}


getMaleJackets()