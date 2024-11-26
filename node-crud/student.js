const mongoose= require('mongoose');

const studentschema=new mongoose.Schema({

   name:String,
   age:Number,
   contact:Number,
});

let student=mongoose.model('Student',studentschema);
module.exports = student