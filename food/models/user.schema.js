const mongoose = require('mongoose');

const userschema= new mongoose.Schema({
    name:String,
    email: String,
    password:String,
   
});

let User=mongoose.model('User',userschema);

module.exports=User;