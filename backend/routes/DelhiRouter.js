const express = require("express");
const { DelhiModel } = require("../model/delhiModel");

const DelhiRouter = express.Router();

DelhiRouter.get("/delhi",async(req,res)=>{
    try {
        const data = await DelhiModel.find();
        res.send(data);
    } catch (error) {
        console.log(`Error in /delhi : ${error}`);
        res.send({
            "Message":`${error}`
        })
    }
})
DelhiRouter.get("/locTitle", async (req, res)=>{
    try {
     const query = req.query.q
     let data = await DelhiModel.find({location: {$regex:`(?i)${query}`}})
     res.send(data)
    } catch (error) {
        console.log(`Error in locTitle : ${error}`);
        res.send({
            "Message":`${error}`
        })
    }
 })
DelhiRouter.post("/delhi",async(req,res)=>{
    const payload = req.body;
    try {
        const data = await DelhiModel.insertMany(req.body)
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
module.exports={
    DelhiRouter
}

