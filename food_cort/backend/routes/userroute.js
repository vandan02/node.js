const {Router}=require('express')
const { registerUser, loginUser } = require("../controller/user.controller")



userrouter=Router()

userrouter.post('/register',registerUser)
userrouter.post('/login',loginUser)

module.exports=userrouter;