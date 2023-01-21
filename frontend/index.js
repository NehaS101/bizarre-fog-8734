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