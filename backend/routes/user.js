const express = require("express")
const userRouter = express.Router()
const bcrypt = require("bcrypt")
const { UserModel } = require("../model/user.model")
userRouter.post("/register", async(req,res)=>{
    const {name,email,pass,mob} = req.body
    try {
        bcrypt.hash(pass,5,async(err,secure)=>{
            if(err){
                res.send("error while hashing")
            }else{
                const new_data = new UserModel({email,name,pass:secure,mob}) 
                await new_data.save()
                res.send("registered")
            }
        })
    } catch (error) {
        res.send(`something wrong ${error}`)
    }
})
userRouter.post("/login",async(req,res)=>{
    const {email,pass} = req.body
    try {
        const user = await UserModel.find({email})
        const hashed = user[0].pass
        bcrypt.compare(pass,hashed,(err,result)=>{
            if(err){
                res.send("wrong credentials")
            }else{
                res.send("login successfully")
            }
        })
    } catch (error) {
        res.send("login failed")
    }
})
module.exports={
    userRouter
}