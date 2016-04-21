// Require the Express Module
var express = require("express");
// Create an Express App
// Require path
var path = require("path");
var app = express();
// app.set('json spaces', 40);
// Require mongoose
var mongoose = require('mongoose');
// Require body-parser (to receive post data from clients)
var bodyParser = require("body-parser");

require('./server/config/mongoose.js');
app.use(bodyParser.json());
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);
app.use(express.static(path.join(__dirname, './client/static')));
app.listen(8000, function() {
    console.log("listening on port 8000");
})