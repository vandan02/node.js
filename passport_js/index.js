const express = require('express');
const db = require('./config/db');
const passport = require('passport');
const session = require('express-session');
const login = require('./middleware/userauth');
require('dotenv').config()
const path=require('path');
const router = require('./routes/user.routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
      secret: 'your', // Replace with a strong, secure secret
      resave: false, // Set to false to prevent unnecessary session saving
      saveUninitialized: false, // Set to false to avoid saving empty sessions
      cookie: { secure: false }, // Set secure to true if using HTTPS
    })
  );
app.use(passport.initialize());
app.use(passport.session());
login(passport)
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,'public')))

app.use(router)
let port=process.env.port 
app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
    db()
})