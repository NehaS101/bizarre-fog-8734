const express = require("express")
const { LocationModel } = require("../model/location.model")
const locationRouter = express.Router()
locationRouter.post("/delhi",async(req,res)=>{
    const data = req.body
    try {
        const new_data = new LocationModel(data) 
        await new_data.save()
        res.send("location updated")
    } catch (error) {
        res.send("loctaion not updated")
    }
})
locationRouter.post("/mumbai",async(req,res)=>{
    const data = req.body
    try {
        const new_data = new LocationModel(data) 
        await new_data.save()
        res.send("location updated")
    } catch (error) {
        res.send("loctaion not updated")
    }
})
locationRouter.post("/bengalore",async(req,res)=>{
    const data = req.body
    try {
        const new_data = new LocationModel(data) 
        await new_data.save()
        res.send("location updated")
    } catch (error) {
        res.send("loctaion not updated")
    }
})

module.exports={
    locationRouter
}