console.log("model")
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({
 name: String,
 product: String,
 qty: Number,
 date: {type: Date, default: Date.now}
})
mongoose.model('Orders', OrderSchema); 
var Orders = mongoose.model('Orders'); 