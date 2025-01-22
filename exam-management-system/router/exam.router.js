const {Router}=require('express')
const auth = require('../middleware/auth')
const { createexam, getexams, updateexam, deleteexam } = require('../controller/exam.controller')

const exam_router=Router()
    exam_router.post('/createxam',auth,createexam)
    exam_router.get('/getexam',getexams)
    exam_router.patch('/upadeexam/:id',auth,updateexam)
    exam_router.delete('/delete/:id',auth,deleteexam)


    module.exports=exam_router