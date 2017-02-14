'use strict';

angular.module('todoListApp')
.service('dataService', function($http, $q) {

  this.getTodos = function(cb) {
    $http.get('/api/todos').then(cb);
  };
  
  this.deleteTodo = function(todo) {
    $http.delete('/api/todos/' + todo._id).then(function(result){
      console.log("I deleted the " + todo.name + " todo!");
    }, function(result) {
      console.log(result)
    });
  };
  
  this.saveTodos = function(todos) {
  	var queue = [];
    
  	todos.forEach(function(todo) {
  		var request;

  		if(!todo._id){
  			request = $http.post('/api/todos', todo);
  		}
  		else {
  			request = $http.put('/api/todos/' + todo._id, todo).then(function(result) {
  				todo = result.data.todo;
  			});
  		};
  		
  		queue.push(request);

  	});

  	return $q.all(queue).then(function(results) {
  		console.log("I saved " + todos.length + " todos!");
  	});

  };
  
});
