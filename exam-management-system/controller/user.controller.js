
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
require('dotenv').config();
module.exports={
  create:async (req, res) => {
  console.log(req.body);

  try {
        const user = await User.findOne({email: req.body.email});
        if(user) throw new Error("Email already exists");

       const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword
       const users= await User.create(req.body);
      let token=await jwt.sign({
        id:users.id,
        username:users.username,
        email:users.email,
        role:users.role
      },
      process.env.jwt_secret
       );
   
        res.status(201).json({message: "User created successfully", users, token});
   
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
},
 login: async (req, res) => {
 const {email, password} = req.body;
 const user=await User.findOne({email:email})
if(!user){
  return res.status(400).json({message:"User not found"});
}

const isMatch=await bcrypt.compare(password,user.password);

if(!isMatch){
  return res.status(400).json({message:"Invalid credentials"});
}

let token=jwt.sign({
  id:user.id,
  username:user.username,
  email:user.email,
  role:user.role
},
process.env.jwt_secret
);

res.json({message:"Login successful", user, token});
},

getalluser: async (req, res) => {
  try {
    const users=await User.find();
    res.json(users);
  } catch (error) {
    console.log(error.message);
  }
}
};

