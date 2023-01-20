const mongoose = require("mongoose")

const CarSchema = mongoose.Schema({
        ImageUrl: String,
        CarName: String,
        Price: Number,
        Kms_Driven: String,
        Fuel_Type: String,
        Transmission: String,
        Rating: Number,
        Capacity: String
})

const CarModel = mongoose.model('carspecification',CarSchema)

module.exports={CarModel};