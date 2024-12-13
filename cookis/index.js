
const express = require('express')
const connect = require('./config/db')
const path = require('path')
const cookieParser = require("cookie-parser");
const userrouter = require('./router/user.router');
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cookieParser())

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'view'))
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',)
app.use('/',userrouter)




let port=process.env.PORT||8090
app.listen(port,()=>{
    console.log("server listening on port"+port);
    connect()
})