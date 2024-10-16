const mongoose= require('mongoose');

const userschema= new mongoose.Schema({
    name:String,
    email:String,
    Number:Number,
    password:String
})
let User=mongoose.model("user",userschema)
module.exports=User