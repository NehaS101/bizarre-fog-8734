const mongoose= require("mongoose")

const MumbaiSchema= mongoose.Schema({
    "location":String
})

const MumbaiModel= mongoose.model("Mumbai",MumbaiSchema)

module.exports={
    MumbaiModel
}
