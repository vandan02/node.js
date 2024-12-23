const {Router}=require('express');
const { loginpage, signuppage, signup, login } = require('../controllers/user.controller');

const userroute=Router();

userroute.get('/loginpage',loginpage)
userroute.get('/signuppage',signuppage)
userroute.post('/user/signup',signup)
userroute.post('/user/login',login)

module.exports=userroute;