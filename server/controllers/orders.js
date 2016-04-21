var mongoose = require('mongoose');
var Orders = mongoose.model('Orders');

module.exports = (function() {
	return {

	new: function(req, res){
		    	Orders.create(req.body, function(err, results) {
		    		if(err) {
		    			console.log(err);
		    		}
		    		else {
		    			res.json(results);
		    		}
    	        })
			 },
	index: function(req, res){
				Orders.find({}, function(err, data){
					if(err) {
						console.log(err);
					}
					else {
				    res.json(data);
					}
				})
	    },
    }
})();