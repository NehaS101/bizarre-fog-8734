let url="https://loggybackend.onrender.com"
let base=`${url}/admin`
let get = `${base}/Data`
let adminUrl = `${base}/post`
let deleted = `${base}/delete`
let update = `${base}/update`


async function getData(){
    try {
        let res = await fetch(get,{
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
        let data = await res.json();
        display(data)
    } catch (error) {
        alert(error);
    }
}

let view_button = document.querySelector("#view")
let right=document.querySelector("#right_container")
view_button.addEventListener("click",()=>{
    getData();
    right.style.display='block'
    right.style.display='grid'
    add_div.style.display='none'
})
function display(data){
    right.innerHTML=""
    data.forEach((el)=>{
        const div= document.createElement("div")
        div.id="div1"
        const Image=document.createElement("img")
        Image.src= el.img
        const name = document.createElement("h3")
        name.innerText=`Name : ${el.carname}`
        const fueled = document.createElement("p")
        fueled.id="fuel"
        fueled.innerText=  `Fuel-Tpye :  ${el.fuel}`
        const trans = document.createElement("p")
        trans.id="trans"
        trans.innerText=`Tansmission : ${el.transmission}`
        const cap = document.createElement("p")
        cap.id="cap"
        cap.innerText=`Capacity : ${el.capacity}`
        const Id = document.createElement("p")
        Id.innerText=`Id : ${el._id}`;
        Id.id="object_id"
        const deleted=document.createElement("button")
        deleted.innerText="Delete"
        deleted.id="deleted"
        deleted.addEventListener("click",()=>{
            let id=el._id
            let  val= id.split("(")
          let val2=val[0]
          console.log(val2)
            deletion(val2)   
        })
        div.append(Image,name,fueled,trans,cap,Id,deleted)
        right.append(div)
    })

}
let add_product=document.querySelector("#add")
let add_div = document.querySelector("#adding")
add_product.addEventListener("click",()=>{
    add_div.style.display='block'
    right.style.display='none'
})
let submit = document.querySelector("#submit")
submit.addEventListener("click",(e)=>{
    add_div.style.display='none'
    right.style.display='block'
    right.style.display='grid'
    e.preventDefault()
        const inputs = document.querySelectorAll("input")
        let obj={}
        for(let i=0;i<inputs.length;i++){
            obj[inputs[i].id]=inputs[i].value
        }
        console.log(obj);
        post(obj)
})
// post
const post = async (obj)=>{
    try {
        let res = await fetch(adminUrl,{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(obj)

        })
        const data = await res.json();

      if(data.Message==="Product added Successfully"){
            
           
            alert("Product Add successfully")
            getData()
      }else{
        alert("bhak")
      }
    } catch (error) {
        alert("signup failed2")
    }
}
// update
let up_date = document.querySelector("#update")
submit.addEventListener("click",(e)=>{
    add_div.style.display='none'
    right.style.display='block'
    right.style.display='grid'
})

const updated = async ()=>{
    try {
        let res = await fetch(update,{
            method:"PUT",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify()
        })
      display(res)
      alert("Product Updated successfully")
    } catch (error) {
        alert("Try Again Later ")
    }
}
//deletion

const deletion = async (id)=>{
    try {
        let res = await fetch(`${deleted}/${id}`,{
            method:"DELETE",
            headers:{
                'Content-Type':"application/json"
            }
        })
        // if(res.status==200){
        //     window.addEventListener("load",()=>{
        //         getData();
        //     })
            getData()
            alert("Product Deleted successfully")
           
        // }else{
        //     alert("try again later")
        // }
    } catch (error) {
        alert(error)
    }
}
