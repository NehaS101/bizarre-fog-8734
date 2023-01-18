const express = require("express")
const {connection}=require("./config/db")
const { userRouter } = require("./routes/user")
const { carRouter } = require("./routes/car")
const { locationRouter } = require("./routes/location")
require("dotenv").config()
const cors = require("cors")
const app=express()
app.use(express.json())
app.use(cors())
app.use("/user",userRouter)
app.use("/data",locationRouter)
app.use("/cars",carRouter)
app.listen(process.env.port,async()=>{
    try {
         connection
    } catch (error) {
       console.log(error)
    }
    console.log("Running")
})