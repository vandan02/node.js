const User = require("../model/user.model")

const index = (req, res) => {
    res.render('index');
};
const login = (req, res) => {
    res.render('login',{
        title: 'Login'
    });
};

const signup = (req, res) => {
    res.render('signup');
};

const signupForm =async(req,res)=>{
    const {email}=req.body
     let isexist=await User.findOne({email:email})
    try {
         if(!isexist){
            let user = await User.create(req.body)
            res.cookie("user",req.body.username)
             return res.status(201).json(user)
         }
            res.status(400).json("email already exists")
      
    } catch (error) {
        res.status(500).json(error)
        
    }
   
}

const loginForm = async(req,res)=>{
    let {email,password}=req.body
    let user=await User.findOne({email:email})
    if(!user){
        return res.redirect('/signup')
      
    }
   if(user.password != password){
    return res.status(401).json("incorrect password")
   }

   res.cookie("user",req.body.username)
res.status(200).json("login successful")
}

const getUser = async (req, res) => {
   try {
     let user=await User.find()
     res.status(200).json(user)
   } catch (error) {
    res.status(500).json(error)
   }
}

const getUserById = async (req, res) => {
    let {id}=req.params
 try {
       let user=await User.findOne(id)
       res.status(200).json(user)
 } catch (error) {
    res.status(500).json(error)
 }
}

const updateUser = async (req, res) => {
    let {id}=req.params
   try {
     let user=await User.findByIdAndUpdate(id,req.body,({new:true}))
     res.status(200).json(user)
   } catch (error) {
    res.status(500).json(error)
    
   }

}

const deleteUser = async (req, res) => {
    let {id}=req.params
    try {
      let user=await User.findByIdAndUpdate(id)
      res.status(200).json(user)
    } catch (error) {
     res.status(500).json(error)
     
    }
}
module.exports ={
    index,
    login,
    signup,
    signupForm,
    loginForm,
    getUser,
    getUserById,
    updateUser,
    deleteUser
}

