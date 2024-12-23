const  mongoose = require("mongoose");


const userschema=new mongoose.Schema({
    
        username:String,
        password:String,
        email:String,
        role: {
          type: String,
          enum: ["user", "admin"], // Define allowed roles
          default: "user", // Default role is 'user'
        }
     
})

let User=mongoose.model("User",userschema);
module.exports = User;