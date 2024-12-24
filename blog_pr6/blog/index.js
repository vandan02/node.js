const express = require('express')
const connection = require('./config/database')
const path = require('path')
const userroute = require('./routes/User.router')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));

app.use(userroute)
let port=process.env.PORT







app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
    connection()
})