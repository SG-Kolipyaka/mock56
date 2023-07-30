const express=require("express")
require('dotenv').config()
const cors =require("cors")
const {connection}=require("./db")
const {userRouter}=require("./Routes/admin.routes")
const {mediaRouter}=require("./Routes/media.route")
const {auth}=require("./Middlewares/auth")



const app=express()
const path = require('path');

app.use(express.json()) // inbuild middleware
app.use(cors())   //community Middelware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use("/admin",userRouter)
app.get("/",(req,res)=>{
    res.send("HOME ROUTE")
})

app.use("/media",mediaRouter)





app.listen(process.env.PORT,async()=>{
    try{
await connection
console.log("Connected to DB")
    }catch(er){
console.log(er)
    }
console.log(`server is running at ${process.env.PORT}`)
})