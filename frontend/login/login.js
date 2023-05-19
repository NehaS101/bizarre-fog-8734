let mobile = document.getElementById("#mobile")
var button = document.querySelector("button")
let password = document.querySelector("#password")

let url="https://loggybackend.onrender.com";
let base=`${url}/user`;
let login=`${base}/login`

button.addEventListener("click",()=>{
    alert("Entered Email is not Registered, Please SignUp First")
    location.href="/frontend/signUp/signup.html"
})


