const express = require("express")
const {connection}=require("./config/db")
const { userRouter } = require("./routes/user")
const { carRouter } = require("./routes/car")
const { DelhiRouter } = require("./routes/DelhiRouter")
const { MumbaiRouter } = require("./routes/mumbaiRouter")
const { BangloreRouter } = require("./routes/bangloreRouter")
const { CarRouter } = require("./routes/carSpecificationRoute")
const { AdminRouter } = require("./routes/adminRouter")

require("dotenv").config()
const cors = require("cors")

const app=express()
app.use(express.json())
app.use(cors())

app.use("/user",userRouter)
app.use("/cars",carRouter)
app.use("/d",DelhiRouter)
app.use("/m",MumbaiRouter)
app.use("/b",BangloreRouter)
app.use("/zoom",CarRouter)
app.use("/admin", AdminRouter)
app.listen(process.env.port,async()=>{
    try {
        await connection
    } catch (error) {
       console.log(error)
    }
    console.log(`Server is Running on port ${process.env.port}`)
})