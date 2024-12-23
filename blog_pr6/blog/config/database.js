const Mongoose= require("mongoose")
let url=process.env.url
const connection = async () => {
    try {
      await Mongoose.connect(url);
      console.log("Connected to database");
    } catch (error) {
      console.log(error);
    }
  };
module.exports=connection