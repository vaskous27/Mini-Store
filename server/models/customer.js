console.log("model")
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CustomerSchema = new mongoose.Schema({
 name: String,
 date: {type: Date, default: Date.now}
})
mongoose.model('Customers', CustomerSchema); 
var Customers = mongoose.model('Customers'); 