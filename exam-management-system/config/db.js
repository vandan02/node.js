const mongoose = require("mongoose")


exports.dbconnect=async()=>{
   try {
     await mongoose.connect("mongodb://localhost:27017/exammodel")
     console.log("Connected to MongoDB")
   } catch (error) {
    
     console.error("Failed to connect to MongoDB", error)
   }
}