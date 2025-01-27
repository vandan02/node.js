const mongoose = require('mongoose');

const user=new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
   role:{
    type: String,
    enum:['admin','teacher','student'],
    default:'admin'
    
   },
  studentid:mongoose.Schema.Types.ObjectId,Ref:student,
  teacherid:mongoose.Schema.Types.ObjectId,Ref:teacher,
  adminid:mongoose.Schema.Types.ObjectId,Ref:admin
})

const User=mongoose.model('User',user)
module.exports=User