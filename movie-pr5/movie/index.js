const express=require('express');
const connect = require('./config/db');

const user_router = require('./routes/user.route');
const routes = require('./routes/movie.route');
require('dotenv').config();

const app=express();

app.use(express.json());
app.get('/',(req,res)=>{
res.send("Welcome to the movie API")
})
app.use("/user",user_router());
app.use("/movie",routes())


let port=process.env.PORT ||8090
app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`);
    connect()
})