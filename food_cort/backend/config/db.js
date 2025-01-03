const mongoose = require('mongoose');
require('dotenv').config()
let url=process.env.url
const db=async()=>{
    await mongoose.connect(url)
   console.log("localhost:8090");
   
}

module.exports=db;