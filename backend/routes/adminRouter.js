const express = require("express")
const { AdminModel } = require("../model/admin.model")

const AdminRouter = express.Router()
AdminRouter.post("/post",async(req,res)=>{
    try {
        const data = req.body
        const new_data = new AdminModel(data)
        await new_data.save()
        res.send({
            "Message":"Product added Successfully",
            "Data": new_data
        }) 
    } catch (error) {
        res.send("try again")
    }
    
})
AdminRouter.get("/Data",async(req,res)=>{
    try {
        const user = await AdminModel.find()
        res.send(user)
    } catch (error) {
        res.send("failed to get")
    }
})
AdminRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const id = req.params.id
    try {
            await AdminModel.findByIdAndUpdate({"_id":id},payload)
            res.send("updated")
    }catch (error) {
        res.send(error)
    }
})
AdminRouter.delete("/delete/:id",async(req,res)=>{
    
    const id = req.params.id
    console.log(id)
    try {
           const data= await AdminModel.findByIdAndDelete({"_id":id})
           console.log(data)
           res.send("deleted")
        
    }catch (error) {
        res.send(error)
    }
})
module.exports={
    AdminRouter
}