const mongoose= require('mongoose');
require('dotenv').config()
let url=process.env.url

const dbconnection= async () =>{
    await mongoose.connect(url)
    console.log("conected to datbase");
    
}

module.exports = dbconnection