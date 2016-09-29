'use strict';

var mongoose = require('mongoose');

var mongohost = process.env.MONGODB_URI;

mongoose.connect(mongohost || 'mongodb://localhost/busways', function(err) {
	if(err) {
		console.log("Failed connecting to MongoDB");
	}
	else {
		console.log("Suscessfuly connected with MongoDB");
	};
});