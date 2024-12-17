const mongoose = require('mongoose')

const userschama=new mongoose.Schema({
    username:String,
    passwor:String,
    email:String,
  });

  let User=mongoose.model('User',userschama)

  module.exports=User;