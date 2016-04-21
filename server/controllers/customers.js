var mongoose = require('mongoose');
var Customers = mongoose.model('Customers');

module.exports = (function() {
	return {
		index: function(req, res){
				Customers.find({}, function(err, data){
					if(err) {
						console.log(err);
					}
					else {
				    res.json(data);
					}
				})
	    },
	    new: function(req, res){
		    	Customers.create(req.body, function(err, results) {
		    		if(err) {
		    			console.log(err);
		    		}
		    		else {
		    			res.json(results);
		    		}
    	        })
			 },
	 //    },
	 //    findOne: function(req, res){
		// 	People.findOne({name: req.params.name}, function(err, data){
		// 		console.log(err, data);
		// 	    res.json(data);
		// 	})
	 //    },
		destroy: function(req, res, data) {
			console.log(data);
    	Customers.remove({name: data}, function(err) {
    		if(err) {
    			res.send(err);
    		}
    		else {
    			Customers.find({}, function(err, customers) {
    				if (err) {
    					console.log(err);
    				}
    				else{
    					res.json(customers);
    				}
    			})
    		}
    	})
    }
    }
})();