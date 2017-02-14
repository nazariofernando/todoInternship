'use strict';

var Todo = require('./models/todo.js');

var todos = [
	"Terminar o grid",
	"Terminar o ToDo",
	"Ser aceito no estágio"
];

todos.forEach(function(todo, index) {
	Todo.find({'name': todo}, function(err, todos) {
		if(!err && !todos.length){
			Todo.create({completed: false, name: todo, date: Date.now()});
		};
	});
});