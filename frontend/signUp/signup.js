let url="http://localhost:3000";
let base=`${url}/user`;
let signup=`${base}/register`;

const continued = document.querySelector("#sign")
continued.addEventListener("click",(e)=>{
    e.preventDefault()
    const inputs = document.querySelectorAll("input")
    let obj={}
    for(let i=0;i<inputs.length;i++){
        obj[inputs[i].id]=inputs[i].value
    }
    console.log(obj);
    post(obj)
})
const post = async (obj)=>{
    try {
        let res = await fetch(signup,{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(obj)

        })
        console.log(res)
        alert("Registered Successfully")
        location.href=("/frontend/index.html")
      
    } catch (error) {
        alert("signup failed")
    }
}