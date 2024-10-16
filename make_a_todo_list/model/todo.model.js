const { default: mongoose } = require("mongoose");
const { stringify } = require("querystring");

const todoschema=new mongoose.Schema({
    taskname:String,
    description:String,
    status:String,
})

const todo=mongoose.model('todo',todoschema)

module.exports=todo;