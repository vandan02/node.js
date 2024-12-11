const { Router} = require("express");
const { getuser, getuserbyid, updateuser, createuser, deleteuser } = require('../controller/user.controller')

const userroutes=Router()

userroutes.get('/',getuser)
userroutes.get('/:id',getuserbyid)
userroutes.post('/',createuser)
userroutes.patch('/:id',updateuser)
userroutes.delete('/:id',deleteuser)

module.exports=userroutes