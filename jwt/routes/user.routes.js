const {Router}=require('express')
const userimport=require('../controller/user.controller.js');

const router=Router();

router.get('/',userimport.alluser)
router.post('/signup',userimport.creat_user)
router.post('/login',userimport.login)

module.exports =router;






