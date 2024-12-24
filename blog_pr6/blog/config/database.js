const Mongoose= require("mongoose")
let url=process.env.url
const connection = async (req,res) => {
    try {
      await Mongoose.connect("mongodb://localhost:27017/blogs");
      console.log("Connected to database");
    } catch (error) {
      console.log(error);
    }
  };
module.exports=connection