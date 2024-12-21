const User = require("../models/user.schema");
const bcrypt=require("bcrypt");

const signuppage=(req,res) => {
    res.render("signup");
}
const loginpage=async(req,res) => {
    res.render("login");
}


const signup=async(req,res)=>{
    const{name,email,password}=req.body;
    let isexists=await User.findOne({email:email});
    if(isexists){
        return res.status(400).send({message: "user already exists"});
    }
    else{
 
        const hash = await bcrypt.hash(password, 10);
        req.body.password=hash
        req.body.userid=req.body.id
        const newUser = await User.create(req.body);
        res.cookie("username",newUser.name);
        res.cookie("id",newUser.id);
        return res.status(201).send({ message: "User created successfully", user: newUser });
    }
}

const login=async(req,res)=>{
    const {email,password}=req.body;
    const  user = await User.findOne({email:email})
    if(!user){
        return res.status(404).send({message: "User not found"});
    }
    if(!user.password){
        return res.status(401).send({message: "Invalid password"});
    }
    const match=await bcrypt.compare(password,user.password)
    if(!match){
        return res.status(401).send({message: "Invalid password"});
    }
    res.cookie("id",user.id);
    res.cookie("username",user.name);

    return res.status(200).send({message: "User logged in successfully"});
}
const logout = (req, res) => {
   
    res.clearCookie("username");
    res.clearCookie("id");
   
    return res.status(200).send({ message: "Logged out successfully" });
};

module.exports={
    signup,
    signuppage,
    login,
    loginpage,
    logout
}