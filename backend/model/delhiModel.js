const mongoose= require("mongoose")

const DelhiSchema= mongoose.Schema({
    "location":String
})

const DelhiModel= mongoose.model("Delhi",DelhiSchema)

module.exports={
    DelhiModel
}
