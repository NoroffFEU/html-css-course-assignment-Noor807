
 const baseURL = "https://api.noroff.dev/api/v1/rainy-days/" 
  

const maleJackets = document.querySelector(".male-jackets")

async function getMaleJackets(){
    const req = await fetch(baseURL )

    const result = await req.json()

        console.log("male object" , result)

        const maleJackets = result.filter((jacket) => jacket.gender === "Male")

        for(let i = 0; i < maleJackets.length; i++)

    
    maleJackets.innerHTML += `
       <a href="">
            <div>
                <div class="img-const">
                    <img src="${maleJackets[i].image}" alt="">
                </div>
                <h2>${maleJackets[i].title.replace('Rainy Days', '')}</h2>
            </div>
        </a>
        
        `
 console.log("filter on Female" , maleJackets)

}


getMaleJackets()