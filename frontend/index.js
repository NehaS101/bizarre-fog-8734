let menu = document.querySelector("#menu")
let nav = document.querySelector("#nav1")
let homepage = document.querySelector("#homepage")
nav.addEventListener("click",()=>{
    menu.style.width="400px"
    homepage.style.backgroundColor="(#000)"
    homepage.style.opacity="0.6"
    // homepage.style.backgroundSize="cover"
})
let remove = document.querySelector("#remove")
remove.addEventListener("click",()=>{
    menu.style.width="0px"
    homepage.style.opacity="1"
})

let city = document.getElementById("Ncr")
let button = document.getElementById("confirm")
let select = document.getElementById("select")
let change = document.getElementById("changing")
let cities = document.querySelector(".changes")
cities.addEventListener("click",()=>{
    change.style.display="block"
    // menu.style.opacity=0.6
})
button.addEventListener("click",()=>{
city.innerText=select.value
city.style.marginLeft="20px"
change.style.display="none"
menu.style.opacity="1"
})

let URL ="https://odd-kit-bass.cyclic.app"
let endpoint = `${URL}/cars`
let car = `${endpoint}/carData`
const Product = async ()=>{
try {
    const res = await fetch(car)
   const data = res.json()
   imported(data)
} catch (error) {
    alert("failed to upload")
}
}

function imported(data){

}