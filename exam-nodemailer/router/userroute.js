const {Router}=require('express')

// const userRouter=require('./routes/user.route')
const { signup, login, sendotp, resetpassword } = require('../controller/user.controller')

const router=Router()
router.get('/signpage',(req,res)=>{
    res.render('signpage')
})
router.get('/login',(req,res)=>{
    res.render('loginpage')
})
router.get('/otp',(req,res)=>{
    res.render('otp')
})
router.get('/reset',(req,res)=>{
    res.render('resetingpassword')
})

router.post('/signup',signup)
router.post('/login',login)
router.post('/otpsend',sendotp)
router.post('/resetingpassword',resetpassword)

module.exports=router;