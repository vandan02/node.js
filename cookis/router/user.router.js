const { signupForm, getUser, getUserById, deleteUser, updateUser, loginForm, login, signup, index } = require("../controller/user.controller")

const {Router}=require('express')

const userrouter=Router()
userrouter.get('/',index)
userrouter.get('/login', login);
userrouter.get('/signup', signup);
userrouter.post('/signup',signupForm)
userrouter.get('/getuser',getUser)
userrouter.get('/find',getUserById)
userrouter.delete('/delete:id',deleteUser)
userrouter.patch('/update:id',updateUser)
userrouter.post('/login',loginForm)

module.exports=userrouter;