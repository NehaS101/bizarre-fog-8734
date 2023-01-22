const { CarModel } = require("../model/carSpecificationmodel");
const express = require('express')

const CarRouter = express.Router();

CarRouter.get("/Cars",async (req,res)=>{
    try {
        const data = await CarModel.find();
        res.send(data);
    } catch (error) {
        console.log(`Error in /Cars : ${error}`);
        res.send({
            "Message":`Error in /Cars : ${error}`
        })
    }
})
CarRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    let id=req.params.id
    try {
        await CarModel.findByIdAndUpdate({"_id":id},payload)
        res.send(updated)
    } catch (error) {
        res.send(error)
    }
})
CarRouter.post("/PostCars",async (req,res)=>{
    const bodies = req.body
    try {
        const data = new CarModel(bodies);
        await data.save();
        res.send({
            "Message":"Product Added Successfully"
        });
    } catch (error) {
        console.log(`Error in /PostCars : ${error}`);
        res.send({
            "Message":`Error in /PostCars : ${error}`
        })
    }
})

CarRouter.get("/priceSortHtoL", async (req, res)=>{
    try {
     let data = await CarModel.find().sort({Price:-1})
     res.send(data)
    } catch (error) {
        console.log(`Error in locTitle : ${error}`);
        res.send({
            "Message":`${error}`
        })
    }
 })

 CarRouter.get("/priceSortLtoH", async (req, res)=>{
    try {
     let data = await CarModel.find().sort({Price:1})
     res.send(data)
    } catch (error) {
        console.log(`Error in locTitle : ${error}`);
        res.send({
            "Message":`${error}`
        })
    }
 })

 CarRouter.get("/bestRate", async (req, res)=>{
    try {
     const query = req.query.q
     let data = await CarModel.find({Rating:{$gte:4,$lte:5}})
     res.send(data)
    } catch (error) {
        console.log(`Error in locTitle : ${error}`);
        res.send({
            "Message":`${error}`
        })
    }
 })

 CarRouter.get("/distance", async (req, res)=>{
    try {
     let data = await CarModel.find().sort({Kms_Driven:1})
     res.send(data)
    } catch (error) {
        console.log(`Error in locTitle : ${error}`);
        res.send({
            "Message":`${error}`
        })
    }
 })

 CarRouter.get("/carname", async (req, res)=>{
    try {
     const query = req.query.q
     let data = await CarModel.find({CarName: {$regex:`(?i)${query}`}})
     res.send(data)
    } catch (error) {
        console.log(`Error in locTitle : ${error}`);
        res.send({
            "Message":`${error}`
        })
    }
 })
module.exports = {CarRouter}
