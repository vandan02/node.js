const {Router}=require('express')
const { createUser, deleteUser, login, getUser, getUserById } = require('../controllers/user.controller')
const middleware = require('../middlewares/userdata')

const user_router=Router()

user_router.post('/user/signup',middleware,createUser)
user_router.delete('/user/delete/:id',deleteUser)
user_router.post('/user/login',login)
user_router.get('/user/',getUser)
module.exports = user_router