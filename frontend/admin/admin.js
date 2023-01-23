let username = document.querySelector("#name")
let password = document.querySelector("#pass")
let button = document.querySelector("#button")
button.addEventListener("click",()=>{
    if(username.value === "admin" && password.value === "admin123"){
alert("Login successfully")
location.href="/frontend/admin/admin2.html"
    }else{
        alert("You are not Authorised")
    }
})
