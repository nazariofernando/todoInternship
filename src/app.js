'use strict';

//seting requirements
var express = require('express'),
    router_api = require('./api'),
    parser = require('body-parser')
;

//init our app
var app = express();

//requiring the database
require('./database.js');

//requiring seed data
require('./seed.js'); 

//using external modules
app.use(parser.json());

//defining static (public) folder as middleware
app.use('/', express.static('public'));

//routing
app.use('/api', router_api);

//localhost
var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("The app is running on port 3000");
});