'use strict';

//seting requiriments
var express = require('express'),
	todos = require('../../mock/todos.json'),
	Todo = require('../models/todo.js')
;

//creating a router
var router_api = express.Router();

//API
router_api.get('/todos', function(req, res) {
	Todo.find({}, function(err, todos) {
		if(err) {
			return res.status(500).json({ message : err.message});
		}
		res.send({ todos: todos });
	});
})

.post('/todos', function(req, res) {
	var todo = req.body;
})

;

module.exports = router_api;