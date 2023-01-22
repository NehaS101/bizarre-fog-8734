let url="http://localhost:3000"
let base=`${url}/zoom`
let baseUrl=`${base}/Cars`
let cards = document.querySelector("#cards")
async function getData(){
    try {
        let res = await fetch(baseUrl,{
            method:"GET",
            'Content-Type':'application/json'
        })
        let data = await res.json();
        display(data)
    } catch (error) {
        alert(error);
    }
}
getData();

function display(data){
    data.forEach((el)=>{
        const div= document.createElement("div")
        const Image=document.createElement("img")
        Image.src= el.ImageUrl
        const name = document.createElement("h3")
        name.innerText=el.CarName
        const rating=document.createElement("div")
        rating.id="rate"
        rating.innerText=`★ ${el.Rating}`
        const price = document.createElement("h3")
        price.id="price"
        price.innerText=`₹${el.Price}`
        const km = document.createElement("p")
        km.id="kms"
        km.innerText=el.Kms_Driven
        const div2 = document.createElement("div")
        div2.id="div2"
        const fuel = document.createElement("p")
        fuel.id="fuel"
        fuel.innerText=el.Fuel_Type
        const trans = document.createElement("p")
        trans.id="trans"
        trans.innerText=` • ${el.Transmission}`
        const cap = document.createElement("p")
        cap.id="cap"
        cap.innerText=` • ${el.Capacity}`
        div2.append(fuel,trans,cap)
        div.append(Image,name,rating,div2,price,km)
        cards.append(div)
    })

}
