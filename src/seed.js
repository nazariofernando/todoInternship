'use strict';

var Todo = require('./models/todo.js');

var todos = [
	"Finish the MongoDB Course",
	"Finish the Express Course",
	"Finish the AngularJS Course",
	"Finish the Node.js Course",
	"Finish the MEAN Stack Course"
];

todos.forEach(function(todo, index) {
	Todo.find({'name': todo}, function(err, todos) {
		if(!err && !todos.length){
			Todo.create({completed: false, name: todo});
		};
	});
});