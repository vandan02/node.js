const mongoose = require('mongoose')

const userschama=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
  });

  let User=mongoose.model('User',userschama)

  module.exports=User;