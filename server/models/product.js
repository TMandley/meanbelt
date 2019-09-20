const mongoose = require('mongoose');
//gotta change it all..
const ProductSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true, minlength: 3},
    price: {type: Number, required: true, min: 1},
    quantity: {type: Number, required: true}
});
const Product = mongoose.model('product', ProductSchema);
module.exports = Product;