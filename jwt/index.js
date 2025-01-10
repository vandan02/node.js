const express=require("express");
const { db } = require("./config/db");
const router = require("./routes/user.routes");

require('dotenv').config();
const app=express()

app.use(express.json())




app.use('/api/v1/users',router)

let PORT=process.env.PORT

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`)
    db()
})