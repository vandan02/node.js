const {Router}=require('express')
const { create, login, getalluser } = require('../controller/user.controller')

const router=Router()

router.get("/getall",getalluser)
router.post("/create",create)
router.post("/login",login)

module.exports=router