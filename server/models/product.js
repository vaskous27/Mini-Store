console.log("model")
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new mongoose.Schema({
 name: String,
 img: String,
 desc: String,
 qty: Number
})
mongoose.model('Products', ProductSchema); 
var Products = mongoose.model('Products'); 