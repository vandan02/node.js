const express = require('express');
const cors= require('cors');
const { dbconnect } = require('./config/db');
const router = require('./router/user.router');
require ('dotenv').config()
const app = express();
app.use(express.json());


app.use(express.urlencoded({ extended:true }));
app.use('/',router);




let PORT=process.env.PORT || 8090

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`)
    dbconnect()
})