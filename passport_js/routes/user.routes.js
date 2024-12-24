const {Router}=require('express')

const login = require('../middleware/userauth')
const passport = require('passport')
const { signuppage, loginpage, signup } = require('../controller/user.controller')

const router=Router()
router.get('/signuppage',signuppage)
router.get('/loginpage',loginpage)
router.post('/signup',signup)
router.post('/login',passport.authenticate("local"),(req,res)=>{
    res.json({message: 'Login success'})
})

module.exports = router