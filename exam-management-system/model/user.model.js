const mongoose= require('mongoose');

const userschames=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
})

const User=mongoose.model('User',userschames);

module.exports=User;

 