const express= require('express')
const path= require('path')
const dbconnection = require('./config/db')
const router = require("./router/userroute.js")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set("views",path.join(__dirname,"views"))




app.use(router)
app.listen(8090,()=>{
    console.log("listening on port:8090");

    dbconnection()
})