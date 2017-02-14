'use strict';

angular.module('todoListApp')
.controller('todoCtrl', function($scope, dataService) {

  $scope.deleteTodo = function(todo, index) {
    $scope.todos.splice(index, 1);
    console.log(todo);
    dataService.deleteTodo(todo);
  };
  
  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo){
      if(todo.edited) {
        return todo
      };
    });
    dataService.saveTodos(filteredTodos)
    .finally($scope.resetTodoStates());
  }; 

  $scope.resetTodoStates = function() {
    $scope.todos.forEach(function(todo) {
      todo.edited = false;
    });
  };

});