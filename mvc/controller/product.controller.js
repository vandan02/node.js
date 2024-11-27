const Product=require('../models/productmodel')

const getproduct =async(req,res) => {
  try {
      let product=await Product.find()
  res.status(201).send(product)
  } catch (error) {
    res.status(500).send(error.message)
    
  }
}

const creatproduct =async(req,res) => {
    try {
        let product=await Product.create(req.body)
    res.status(201).send(product)
    } catch (error) {
      res.status(500).send(error.message)
      
    }
  }

  const getproductbyid =async(req,res) => {
    let {id}=req.params
    try {
        let product=await Product.findById(id)
    res.status(201).send(product)
    } catch (error) {
      res.status(500).send(error.message)
      
    }
  }

  const updateproduct =async(req,res) => {
    let {id}=req.params
    try {
        let product=await Product.findByIdAndUpdate(id,req.body,{new:true})
    res.status(201).send(product)
    } catch (error) {
      res.status(500).send(error.message)
      
    }
  }

  const deleteproduct =async(req,res) => {
    let {id}=req.params
    try {
        let product=await Product.findByIdAndDelete(id)
    res.status(201).send(product)
    } catch (error) {
      res.status(500).send(error.message)
      
    }
  }

  module.exports ={
    getproduct,
    creatproduct,
    getproductbyid,
    updateproduct,
    deleteproduct,
  }