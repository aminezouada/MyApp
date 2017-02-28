angular.module('starter.services', [])

.factory('service',function($http){
    return {
      all: function() {
       return $http.get('http://carbillet.net/api-digitalGrenoble/users/')

      }

    }  
 });
