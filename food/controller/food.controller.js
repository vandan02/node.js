const Food = require("../models/food.schema")

 const foodpage=(req,res)=>{
    res.render("food")
 }

 const creatfood=async(req,res)=>{
    try {
        let food=await Food.create(req.body)
        res.status(200).json({message:"food created",food:food})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
 }
 const getfood=async(req,res)=>{
    try {
        let food=await Food.find()
        res.status(200).json({food:food})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
 }
 const pathchfoodById=async(req,res)=>{
    let {id}=req.params
  try {
      let food=await Food.findByIdAndUpdate(id,req.body,{new:true})
      res.status(200).json({food:food})
  } catch (error) {
    res.status(500).json({error:error.message})
  }
 }
 module.exports={
    foodpage,
    creatfood,
    getfood,
    pathchfoodById
 }