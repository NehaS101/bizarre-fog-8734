const mongoose= require("mongoose")
const carSchema= mongoose.Schema({
    "location":String
})
const LocationModel= mongoose.model("location",carSchema)
module.exports={
    LocationModel
}