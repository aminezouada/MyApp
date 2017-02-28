var app = angular.module('myApp', []);
app.controller("UserController",function($scope,$http){
    $http.get('http://carbillet.net/api-digitalGrenoble/users')
      .then(function successCallback( response ) {
        $scope.users = response;

      }, function errorCallback(response) {
        console.log(response);

        alert('error');
      })

 });