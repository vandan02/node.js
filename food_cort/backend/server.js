const express=require('express');
const cors=require('cors');
const db = require('./config/db');
const path = require('path');
const foodRouter = require('./routes/foodRoute');
const userrouter = require('./routes/userroute');



require('dotenv').config()

const app = express();

// Correct usage
app.use(express.json());  // Middleware for parsing JSON
app.use(express.static('public'));  
let port=process.env.port||8090
app.use(express.urlencoded({extended: true}))

app.use(cors())

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,"views"))

app.use('/api/food',foodRouter)
app.use('/api/user',userrouter)
app.get('/',(req,res)=>{
    res.send("hello world!");
})


app.use("/images",express.static('uploads'))
app.listen(8090,()=>{
    console.log(`server is running on port 8090`);  
    db()
})

