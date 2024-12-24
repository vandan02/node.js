const User = require("../model/user.schema");
const bcrypt = require('bcrypt')
const signuppage=(req,res)=>{
    res.render('signup')
 
}
const loginpage=(req,res)=>{
    res.render('login')
}
 const signup=async(req,res)=>{
    const {name,email,password}=req.body;
    const user= await User.findOne({email:email})
    if(user) return res.status(400).json({message:'Email is already registered'})

        const hash = await bcrypt.hash(password, 10);
       req.body.password = hash
       const newuser = await User.create(req.body)
       res.status(201).json({message:'User registered successfully',user:newuser})

 }

 module.exports={
    signuppage,
    loginpage,
    signup
 };