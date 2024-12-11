const User = require("../model/user.model");

const createuser=async(req,res)=>{
const {email}=req.body;
let isexsist=await User.findone({email:email});
try {
    if(isexsist){
        return res.status(400).json({msg:"User already exist"})
    }
    else{
        let user=await User.create(req.body)
        return res.status(200).json(user)
    }
} catch (error) {
    res.status(500).json({error: error.message})
}
}

const getuser=async(req,res)=>{
 try {
       let user=await user.find()
       res.status(200).json(user)
 } catch (error) {
     res.status(500).json({error: error.message})
    
 }
}

const getuserbyid=async(req,res)=>{
    let {id}=req.params
    let user=await user.findById(id)
    if(!user){
        return res.status(404).json({msg:"User not found"})
    }
    else{
        return res.status(200).json(user)
    }
}

const updateuser=async(req,res)=>{
        let {id}=req.params
   try {
     let user=await User.findByIdAndUpdate(id,req.body,{new:true})
     res.status(200).json(user)
   } catch (error) {
    res.status(500).json({error: error.message})
   }
}

const deleteuser=async(req,res)=>{
    let {id}=req.params
try {
        let user =await User.findByIdAndDelete(id)
        res.status(200).json(user)
} catch (error) {
    res.status(500).json({error: error.message})
}
}

module.exports={createuser,getuser,getuserbyid,updateuser,deleteuser}