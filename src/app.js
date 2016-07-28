'use strict';

//seting requirements
var express = require('express'),
    router_api = require('./api')
;

//init our app
var app = express();

//defining static (public) folder as middleware
app.use('/', express.static('public'));

//routing
app.use('/api', router_api);

//localhost
app.listen(3000, function() {
	console.log("The app is running on port 3000");
});