const { router } = require("express");
const Product = require("../models/productmodel");
const {getproduct, getproductbyid, updateproduct, deleteproduct, creatproduct} = require("../controller/product.controller");
const productrouter = router();
productrouter.get('/',getproduct)
productrouter.get('/',getproductbyid)
productrouter.post('/',creatproduct)
productrouter.delete('/',deleteproduct)
productrouter.patch('/',updateproduct)
module.exports = productrouter;