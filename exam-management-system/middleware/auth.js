const jwt = require("jsonwebtoken");

const auth=async(req,res,next)=>{
    let token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({message:"Token is required"});
    try {
        let decoded=await jwt.verify(token,process.env.jwt_secret)
        req.user=decoded;
        if(req.user.role=="teacher"){
           return next();
        }
        else{
            return res.status(403).json({message:"You are not authorized to perform this action"});
        }
    } catch (error) {
        return res.status(403).json({message:error.message});
    }

}

module.exports=auth;