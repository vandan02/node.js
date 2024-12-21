const {Router}=require('express')
const { signup, signuppage, login, loginpage, logout } = require('../controller/user.controller')

const router=Router()
router.get('/loginpage',loginpage)
router.get('/signuppage',signuppage)
router.post('/signup',signup)
router.post("/login",login)
router.get('/logout',logout)
module.exports=router