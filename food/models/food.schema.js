const mongoose = require('mongoose');

const foodschema= new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    description:String,
    createdBy:String
});

let Food=mongoose.model('Food',foodschema);

module.exports=Food;