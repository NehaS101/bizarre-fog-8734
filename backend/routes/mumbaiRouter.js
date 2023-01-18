const express = require("express");
const { MumbaiModel } = require("../model/mumbaiModel");

const MumbaiRouter = express.Router();

MumbaiRouter.get("/mumbai",async(req,res)=>{
    try {
        const data = await MumbaiModel.find();
        res.send(data);
    } catch (error) {
        console.log(`Error in /delhi : ${error}`);
        res.send({
            "Message":`${error}`
        })
    }
})

MumbaiRouter.post("/mumbai",async(req,res)=>{
    const payload = req.body;
    try {
        const data = await MumbaiModel.insertMany(req.body)
        res.send({
            "Message":"Data Successfully Added"
        });
    } catch (error) {
        console.log(`Error in /delhi : ${error}`);
        res.send({
            "Message":`${error}`
        })
    }
})
MumbaiRouter.get("/locTitle", async (req, res)=>{
    try {
     const query = req.query.q
     let data = await MumbaiModel.find({location: {$regex:`(?i)${query}`}})
     res.send(data)
    } catch (error) {
        console.log(`Error in locTitle : ${error}`);
        res.send({
            "Message":`${error}`
        })
    }
 })

module.exports={
    MumbaiRouter
}