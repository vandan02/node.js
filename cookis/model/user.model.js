const  mongoose = require('mongoose')
const { stringify } = require('querystring')

const userschema = new mongoose.Schema({
    username:String,
    email: String,
    password: String,
    token:String
})

let User=mongoose.model('User',userschema)

module.exports=User