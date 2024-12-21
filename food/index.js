const cookieParser = require('cookie-parser');
const express=require('express');
require("dotenv").config()

const path=require('path');
const router = require('./routes/user.routes');
const db = require('./config/db');
const { urlencoded } = require('body-parser');
const islogin = require('./middleware/islogin');
const { log } = require('console');
const foodrouter = require('./routes/food.routes');

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser());

app.get('/',islogin,(req,res)=>{
    res.render('index')
})
app.use(router)
app.use('/food',foodrouter)


let PORT=process.env.PORT ||8090
app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
    db()
})