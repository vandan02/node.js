const { default: mongoose } = require("mongoose")
require('dotenv').config()
let url=process.env.db_url

exports.db=async()=>{
    await mongoose.connect(url)
    console.log("Connected to MongoDB")
}