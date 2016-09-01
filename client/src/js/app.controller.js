(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoCtrl', TodoCtrl);

    TodoCtrl.$inject = ['TodoFactory'];

    /* @ngInject */
    function TodoCtrl(TodoFactory) {
        var vm = this;
        vm.todo = {};
        vm.todos = [];
        vm.addTodo = addTodo;
        vm.editTodo = editTodo;
        vm.deleteTodo = deleteTodo;

        getTodos();
        ////////////////
        
        function addTodo(todo){
            TodoFactory.create(vm.todo).then(
                function(resolve){
                    vm.todos.push(resolve);
                    vm.todo = {};
                });
        }


        function getTodos() {
            TodoFactory.read().then(
                function(todos){
                    vm.todos = todos;
                });
        }

        function deleteTodo(todo) {
          if (confirm("Are you sure you want to remove this todo item?")) {
            // debugger;
            TodoFactory.delete(todo).then(
              function() {
                var index = vm.todos.indexOf(todo);
                vm.todos.splice(index, 1);
              }
            );
          }
        }

         function editTodo(todo) {
            // debugger;
          TodoFactory.update(todo).then(
            function() {
              todo.edit = false;  
            }
          );
        }

    }
})();