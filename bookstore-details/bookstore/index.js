const express = require('express');
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.Router)


app.get('/', async (req, res) => {
    res.send('welcome to the book store')
})

let port=process.env.PORT||9090
app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)

})