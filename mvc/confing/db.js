const { log } = require('console');
const mongoose = require('mongoose')
require("dotenv").config();
let db=process.env.db_conection

const dbconect=async()=>{
    try {
        await mongoose.connect(db)
        console.log("server started");
        
    } catch (error) {
      console.log(error.message);
        
    }
}

module.exports = dbconect