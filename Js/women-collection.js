
const baseURL = "https://api.noroff.dev/api/v1/rainy-days/" 
  

const divJackets = document.querySelector(".female-jackets")

async function getFemaleJackets(){
    const req = await fetch(baseURL )

    const result = await req.json()

       

        const femaleJackets = result.filter((jacket) => jacket.gender !== "Male")

        for(let i = 0; i < femaleJackets.length; i++)

    
    divJackets.innerHTML += `
       <a  class="jacket-item" href="../product/index.html?jacketid=${femaleJackets[i].id} ">
       <img src="${femaleJackets[i].image}" alt="${femaleJackets[i].title}"/>
      <h2> ${femaleJackets[i].title}</h2>
      <p>${femaleJackets[i].baseColor} </p>
      <p>${femaleJackets[i].gender} </p>
      <p> ${femaleJackets[i].sizes} </p>
      <p>$ ${femaleJackets[i].price} </p>
            
        </a>
         `


}


getFemaleJackets()