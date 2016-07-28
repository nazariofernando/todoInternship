'use strict';

//seting requiriments
var express = require('express'),
	todos = require('../../mock/todos.json')
;

//creating a router
var router_api = express.Router();

//API
router_api.get('/todos', function(req, res) {
	res.send({ todos: todos });
})

;

module.exports = router_api;