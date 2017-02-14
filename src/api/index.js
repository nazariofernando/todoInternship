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

	Todo.create(todo, function(err, todo) {
		if(err) {
			return res.status(500).json({ message: err.message });
		}
		res.json({'todo': todo, message: "Todo Created!"});
	});

})

.put('/todos/:id', function(req, res) {

	var id = req.params.id;
	var todo = req.body;

	if(todo && todo._id !== id){
		return res.status(500).json({message: "Ids don't match"});
	};

	Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
		if(err) {
			return res.status(500).json({ message: err.message });
		};
		res.json({'todo': todo, message: "Todo Created!"});
	});

})

.delete('/todos/:id', function(req, res) {

	var id = req.params.id;

	Todo.findByIdAndRemove(id, function(err, todo) {
		if(err){
			return res.status(500).json({ message: err.message });
		}
		res.json({'todo': todo, message: "Todo deleted!"})
	});

})	

;

module.exports = router_api;