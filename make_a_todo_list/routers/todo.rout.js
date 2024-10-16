const router = require('express')
const todo = require('../model/todo.model')
const { todo_get, todo_post, todo_put, todo_delete } = require('../controller/todo.controller')

const todo_router=router()

todo_router.get('/',todo_get)

todo_router.post('/',todo_post)

todo_router.put('/:id',todo_put)

todo_router.delete('/:id',todo_delete)
module.exports = todo_router;