const mongoose= require("mongoose")
const AdminSchema= mongoose.Schema({
    img:String,
    carname:String,
    capacity:String,
    transmission:String,
    fuel:String
  
})
const AdminModel= mongoose.model("admin",AdminSchema)
module.exports={
    AdminModel
}