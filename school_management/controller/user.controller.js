const User = require("../model/admin_model");
const bcrypt=require("bcrypt");

module.exports ={

  signup:async(req,res)=>{
    const {name,email,password}=req.body;
    const user= await User.findOne({email:email})
    if(user) return res.status(400).json({message:'Email is already registered'})

        const hash = await bcrypt.hash(password, 10);
       req.body.password = hash
       const newuser = await User.create(req.body)
       res.status(201).json({message:'User registered successfully',user:newuser})

 },

  login : async(req, res)=>{
    const {email,password}=req.body;
    const user= await User.findOne({email:email})
    if(!user) return res.status(400).json({message:'User not found'})
        const match = await bcrypt.compare(password, user.password)
        if(!match) return res.status(400).json({message:'Incorrect password'})
 }
}