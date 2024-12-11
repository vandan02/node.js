const mongoose = require('mongoose')
require("dotenv").config()
let url=process.env.url
// Connect to MongoDB
const connect=async()=>{
    try {
        await mongoose.connect(url)
        console.log("conected");
        
    } catch (error) {
        console.log(error.message);
        
    }
}
module.exports = connect