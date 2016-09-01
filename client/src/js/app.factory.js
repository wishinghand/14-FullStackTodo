(function() {
    'use strict';

    angular
        .module('app')
        .factory('TodoFactory', TodoFactory);

    TodoFactory.$inject = ['$http', '$q', 'apiUrl'];

    /* @ngInject */
    function TodoFactory($http, $q, apiUrl) {
        var service = {
           create: create,
           read: read,
           update: update,
           delete: deleteTodo
        };
        return service;

        ////////////////

        function create(todo){
            var defer = $q.defer();

            $http.post(apiUrl + 'todoes', todo)
            .then(
              function(response) {
                defer.resolve(response.data);
              },
              function(error) {
                defer.reject(error);
              }
            );

            return defer.promise;
        }
        
        function read(){
            var defer = $q.defer();

            $http.get( apiUrl + 'todoes')
            .then(function(response){
                defer.resolve(response.data);
            },function(response) {
                defer.reject("Todo not found");
            });

            return defer.promise;
        }
        
        function update(todo){
            var defer = $q.defer();

            $http.put(apiUrl + 'todoes/' + todo.id, todo)
            .then(function(response){
                defer.resolve(response.data);
            },function(response) {
                defer.reject(error);
            });

            return defer.promise;
        }
        
        function deleteTodo(todo){
            var defer = $q.defer();

            $http.delete(apiUrl + 'todoes/' + todo.id)
            .then(
              function(response) {
                defer.resolve(response.data);
              },
              function(error) {
                defer.reject(error);
              }
            );

            return defer.promise;
        }
        

    }
})();