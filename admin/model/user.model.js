const mongoose = require('mongoose')

let userschema=new mongoose.Schema({

    username:String,
    email:String,
    password:String,
    img:String,
})

let User=mongoose.model('User',userschema)
module.exports = User