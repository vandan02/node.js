const {Router}=require('express')
const { create } = require('../controller/user.controller')

const router=Router()

router.post("/create",create)

module.exports=router