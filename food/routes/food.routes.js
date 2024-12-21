const {Router}=require('express')
const { getfood, creatfood, pathchfoodById, foodpage } = require('../controller/food.controller')

let foodrouter=Router()
foodrouter.get('/foodpage',foodpage)
foodrouter.get('/allfood',getfood)
foodrouter.post('/create',creatfood)
foodrouter.patch('/updatefood',pathchfoodById)

module.exports=foodrouter