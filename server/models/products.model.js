const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Title:{type: String},
    Price:{type: String},
    Description:{type: String},
},{timestamps:true})

const product = mongoose.model('Product',ProductSchema);

module.exports = product;
