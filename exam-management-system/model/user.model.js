const mongoose= require('mongoose');

const userschames=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:'user',
        enum: ['admin', 'user',"teacher"]
    }
})

const User=mongoose.model('User',userschames);

module.exports=User;

 