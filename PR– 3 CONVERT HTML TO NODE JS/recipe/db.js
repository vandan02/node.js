const mongoose = require('mongoose')

const db=async()=>{
    await mongoose.connect("mongodb://localhost:27017/")
    console.log("==============================");
    

}
module.exports = db