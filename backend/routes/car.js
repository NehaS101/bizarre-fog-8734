const express = require("express")
const { CarModel } = require("../model/cars.model")
const carRouter = express.Router()
carRouter.post("/post",async(req,res)=>{
    try {
        const data = req.body
        const new_data = new CarModel(data)
        await new_data.save()
        res.send("posted") 
    } catch (error) {
        res.send("try again")
    }
    
})

module.exports={
    carRouter
}