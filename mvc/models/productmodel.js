const mongoose=require('mongoose');

const productschema= new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: true},
    category: {type: String, required: true}
})


let Product=mongoose.model("Product",productschema)
module.exports=Product