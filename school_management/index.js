const express= require('express');
const  mongoose  = require('mongoose');
require ('dotenv').config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}))





app.listen(8090,()=>{
    console.log('Server started on port 8090');
   try {
     mongoose.connect(process.env.url);
     console.log("mongodb");
     
   } catch (error) {
     console.log("error",error);
   }
})