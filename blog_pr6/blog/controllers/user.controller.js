const User = require("../model/user.schema");
const bcrypt = require("bcrypt");
const signuppage=(req,res)=>{
    res.render("signup");
}
const loginpage=(req,res)=>{
    res.render("login");
}

const signup = async (req, res) => {
    const { username, email, password } = req.body; 
  
    try {
     
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ username: user.username, message: "User already exists" });
      }
  
    
      const hash = await bcrypt.hash(password, 10);
      req.body.password = hash;
  
    
      const newUser = await User.create(req.body);
  
      
      res.cookie("id", newUser.id);
      res.cookie("role", newUser.role);
  

      return res.status(201).json({ message: `Account created successfully ${newUser.username}` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  };
  

 const login=async(req,res)=>{
    const {email,password}=req.body;
    const  user = await User.findOne({email:email})
    if(!user){
        return res.status(404).send({message: "Invalid Credentials."});
    }

    const match= await bcrypt.compare(password,user.password)
    if(!match){
        return res.status(401).send({message: "Invalid password"});
    }
    res.cookie("id",user.id);
    res.cookie("role",user.role);

    return res.status(200).send({message: "Welcome User username"}, user.username);
}

module.exports={signuppage,signup,login,loginpage}

