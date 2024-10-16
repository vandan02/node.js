const express= require('express');
const dbConnection = require('./confing/dbconection');
const todo_router = require('./routers/todo.rout');
const cors =require ("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.use('/',todo_router)


app.listen(8816,()=>{
    dbConnection()
    console.log("listening on http://localhost:8816");
})

