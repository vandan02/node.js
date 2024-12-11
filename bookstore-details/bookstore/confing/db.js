const mongoose = require('mongoose')
require('dotenv').config()
let url=process.env.url
const db=async()=>{
    await mongoose.connect(url)
console.log("================");

}
module.exports =db