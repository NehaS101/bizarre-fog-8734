const mongoose= require("mongoose")

const BangloreSchema= mongoose.Schema({
    "location":String
})

const BangloreModel= mongoose.model("Banglore",BangloreSchema)

module.exports={
    BangloreModel
}
