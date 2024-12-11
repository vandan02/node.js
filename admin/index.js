const express = require('express');
const connect = require('./confing/db');
const userroutes = require('./routes/user.router');
const path = require('path');
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));



app.use("/user",userroutes)

app.get("/", (req, res) => {
  try {
      res.render('index');
  } catch (error) {
    res.send('error', error);
  }
});




const port=process.env.port
app.listen(port,(req, res) => {
    console.log(`Server is running on port ${port}`);
    connect()
})