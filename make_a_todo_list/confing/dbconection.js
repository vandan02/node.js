const { default: mongoose } = require("mongoose");

// Connect to MongoDB
const dbConnection = async () => {
    await mongoose.connect("mongodb+srv://vandanpatel493:vandan@cluster0.bm96r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
   console.log("Connected to MongoDB");
   
  };
  
module.exports = dbConnection;