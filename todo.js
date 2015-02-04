angular.module('TODO',[]).controller('TodoController', function($scope){

  $scope.todos = loadDB();

  $scope.getTotalTodos = function(){
    return $scope.todos.length
  };

  $scope.addTodo = function(){
    $scope.todos.push({ text: $scope.formTodoText, done: false });
    $scope.formTodoText = '';
    $scope.updateDB();
  };

  $scope.clearTodos = function(){
    $scope.todos = _.filter($scope.todos, function(todo){ return !todo.done });
    $scope.updateDB();
  }

  $scope.updateDB = function(){
    var todos = _.map($scope.todos, function(todo){
      return { text: todo.text, done: todo.done }
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function loadDB(){
    var todos = localStorage.getItem('todos');
    if(!todos) {
      todos = [
        { text: "Criar um app", done: false },
        { text: "Modificar um app", done: false },
        { text: "Apagar um app", done: false }
      ];
    } else {
      todos = JSON.parse(todos);
    }
    return todos;
  }

});
