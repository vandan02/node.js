const todo = require("../model/todo.model")

let todo_get=async(req,res)=>{
    let data=await todo.find()
    res.send(data)
}

let todo_post=async(req,res)=>{
    let data=await todo.create(req.body)
}

let todo_put=async(req,res)=>{
    let {id}=req.params
    let data=await todo.findByIdAndUpdate(id,req.body,{new:true})
    res.send(data)
}
let todo_delete=async(req,res)=>{
    let {id}=req.params
    let data=await todo.findByIdAndDelete(id)
    res.send(data)
}

module.exports={todo_get,todo_post,todo_put,todo_delete}