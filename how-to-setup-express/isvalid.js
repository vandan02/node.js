const isvalid=(req,res,next)=>{
    let {email,password,name} = req.body;
    if(!email ||!password ||!name){
        return res.status(400).json({error: "All fields are required"});
    }
    else{
        next();
    }
}
module.exports =isvalid;