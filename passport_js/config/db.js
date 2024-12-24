const { default: mongoose } = require("mongoose")
require('dotenv').config()
  url=process.env.url

  const db=async()=>{
    await mongoose.connect(url)
    console.log("Connected to MongoDB")
  }
  module.exports = db