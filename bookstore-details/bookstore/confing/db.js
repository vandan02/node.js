const mongoose = require('mongoose')
let url=process.env.url
const db=async()=>{
    await mongoose.connect(url)
console.log("================");

}