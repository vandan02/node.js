const express=require('express');
const dbconnect = require('./db');
const student = require('./student');
const app = express();
app.use(express.json());


app.get("/student",async (req, res) => {
    let data=await student.find()
    res.send(data)
})
app.get("student/:id",async (req, res) => {
    let {id}=req.params
    let data=await student.findById(id)
    res.send(data)
})
app.post("/student",async (req, res) => {
    let data=await student.create(req.body)
    res.send(data)
})
app.patch("/student/:id",async (req, res) => {
    let {id}=req.params
    let data=await student.findByIdAndUpdate(id,req.body,{new:true})
    res.send(data)
})
app.delete("/student/:id",async(req,res)=>{
    let {id}=req.params
    let data=await student.findByIdAndDelete(id)
    res.send(data)
    });

app.listen(8090,()=>{
    console.log("Server is running on port 8090")
    dbconnect()
})