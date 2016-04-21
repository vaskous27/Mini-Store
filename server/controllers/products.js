var mongoose = require('mongoose');
var Products = mongoose.model('Products');

module.exports = (function() {
	return {

		new: function(req, res){
			    	Products.create(req.body, function(err, results) {
			    		if(err) {
			    			console.log(err);
			    		}
			    		else {
			    			res.json(results);
			    		}
	    	        })
				 },
		index: function(req, res){
					Products.find({}, function(err, data){
						if(err) {
							console.log(err);
						}
						else {
					    res.json(data);
						}
					})
		    },

		inventory: function(req, res) {
			console.log(req.body)
			Products.update({name: req.body.product}, {$inc: {qty:-req.body.qty}}, function (err, data) {
				if(err) {
					console.log(err);
				}
				else {
					res.json(true);
				}
			})
		}
    }
})();