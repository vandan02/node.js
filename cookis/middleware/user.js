const isLogin =(req,res,next) => {
    let {username}=req.cookies
    if(username){
        next()
    }
    else{
        res.redirect("/login");
    }
}

module.exports = {isLogin}