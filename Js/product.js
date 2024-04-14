

const baseURL = "https://v2.api.noroff.dev/rainy-days/" 
 
const jacketsContainer = document.querySelector(".jacket-detail")
 
const parameterString = window.location.search;

const searchParameters = new URLSearchParams(parameterString);
 
const jacketId = searchParameters.get("jacketid")
 
// console.log(jacketId)

 
async function getJacketDetail() {

  const completejacketUrl = baseURL  + jacketId
 
  const req = await fetch(completejacketUrl)
 
  const result = await req.json()

  console.log = (result)
 
  jacketsContainer.innerHTML += `<div class="info">
    
  <div class="image-box">
    <img src="${result.data.image.url}" alt="${result.data.title}"/>
    
   </div>
    <div class="info-box">
      <h2> ${result.data.title}</h2>
      <p>${result.data.description} </p>
      <p>${result.data.gender} </p>
      <p> ${result.data.sizes} </p>
      <p> ${result.data.price} </p>
    </div>   

            
   </div>`
}
 
getJacketDetail()
