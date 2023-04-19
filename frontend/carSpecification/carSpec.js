let url="http://localhost:3000"
let base=`${url}/zoom`
let baseUrl=`${base}/Cars`
let HightoLow = `${base}/priceSortHtoL`
let LowtoHigh = `${base}/priceSortLtoH`
let bestRating = `${base}/bestRate`
let km = `${base}/distance`
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
    cards.innerHTML=""
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
        price.innerText=`₹${el.Price}/hr`
        const km = document.createElement("p")
        km.id="kms"
        km.innerText=el.Kms_Driven
        const div2 = document.createElement("div")
        div2.id="div2"
        const div3 = document.createElement("div")
        div3.id="div3"
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
        div3.append(price,km)
        div.append(Image,name,rating,div2,div3)
        cards.append(div)
    })

}
async function getLow(){
    try {
        let res = await fetch(LowtoHigh,{
            method:"GET",
            'Content-Type':'application/json'
        })
        let data = await res.json();
        display(data)
    } catch (error) {
        alert(error);
    }
}

document.querySelector("#low").addEventListener("click",()=>{
    getLow();
})
async function getHigh(){
    try {
        let res = await fetch(HightoLow,{
            method:"GET",
            'Content-Type':'application/json'
        })
        let data = await res.json();
        display(data)
    } catch (error) {
        alert(error);
    }
}
document.querySelector("#high").addEventListener("click",()=>{
    getHigh()
})
async function getBest(){
    try {
        let res = await fetch(bestRating,{
            method:"GET",
            'Content-Type':'application/json'
        })
        let data = await res.json();
        display(data)
    } catch (error) {
        alert(error);
    }
}
document.querySelector("#best").addEventListener("click",()=>{
    getBest()
})
async function getDist(){
    try {
        let res = await fetch(km,{
            method:"GET",
            'Content-Type':'application/json'
        })
        let data = await res.json();
        display(data)
    } catch (error) {
        alert(error);
    }
}
document.querySelector("#distance").addEventListener("click",()=>{
    getDist()
})