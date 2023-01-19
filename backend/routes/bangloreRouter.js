const express = require("express");
const { BangloreModel } = require("../model/BangloreModel");

const BangloreRouter = express.Router();

BangloreRouter.get("/banglore",async(req,res)=>{
    try {
        const data = await BangloreModel.find();
        res.send(data);
    } catch (error) {
        console.log(`Error in /delhi : ${error}`);
        res.send({
            "Message":`${error}`
        })
    }
})

BangloreRouter.post("/banglore",async(req,res)=>{
    const payload = req.body;
    try {
        const data = await BangloreModel.insertMany(req.body)
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
BangloreRouter.get("/locTitle", async (req, res)=>{
    try {
     const query = req.query.q
     let data = await BangloreModel.find({location: {$regex:`(?i)${query}`}})
     res.send(data)
    } catch (error) {
        console.log(`Error in locTitle : ${error}`);
        res.send({
            "Message":`${error}`
        })
    }
 })
module.exports={
  BangloreRouter
}
