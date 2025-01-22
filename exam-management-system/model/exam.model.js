const  Mongoose  = require("mongoose");

const examschema=new Mongoose.Schema({  
    examname:String,
    qustions:String,
    a:String,
    b:String,
    c:String,
    d:String,
    answer:String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: User },

});

const Exam=Mongoose.model('Exam',examschema);
module.exports=Exam;