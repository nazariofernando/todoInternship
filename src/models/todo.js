'use strict';

//requiring mongoose
var mongoose = require('mongoose');

//schema needs to have:
//todo.name
//todo.completed

//schema construction
var todoSchema = new mongoose.Schema({
	name: String,
	completed: Boolean
});

//creating todo model
var model = mongoose.model('Todo', todoSchema);

module.exports = model;