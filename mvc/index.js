const express = require('express');
const dbconect = require('./confing/db');
const productrouter = require('./routes/product.router');
const app = express();
app.use(express.json());
require("dotenv").config()

app.use("/product",productrouter)
const port = process.env.portno || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    dbconect()
});