const islogin=(req,res,next)=>{
  let username=req.cookies.username
  let id=req.cookies.id
  if(username && id){
    next()
  }
  else{
    res.redirect('/loginpage')
  }
}

module.exports=islogin