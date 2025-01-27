const { signup, login } = require("../controller/user.controller")

const {Router}=('express')

const router=Router()

router.post('admin_singup',signup)
router.post('admin_login',login)

module.exports=router;