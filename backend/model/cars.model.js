const mongoose= require("mongoose")
const carSchema= mongoose.Schema({
    "img":String,
    "mil":String,
    "carname":String
  
})
const CarModel= mongoose.model("cars",carSchema)
module.exports={
    CarModel
}