const {Router}=require('express')
const {  deleteUser, login, getUser, getUserById, signup } = require('../controllers/user.controller')
const middleware = require('../middlewares/userdata')

const user_router=Router()

user_router.post('/signup',signup)
user_router.delete('/delete/:id',deleteUser)
user_router.post('/login',login)
user_router.get('/',getUser)
module.exports = user_router