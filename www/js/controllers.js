angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout ) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})




.controller("ModelCtrl",function($scope){
   

              $scope.adress = "Your Adress";


 })


.controller('PlaylistCtrl', function($scope, $stateParams) {

})

.controller('UserController', function($scope, $cordovaGeolocation, service) {
  $scope.geo = false;
  var posOptions = {timeout: 10000, enableHighAccuracy: false};

  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {


      var lat  = position.coords.latitude
      var long = position.coords.longitude

      console.log(lat , long);


      $scope.marker = {
        position: [lat , long],
      }
      $scope.geo=true;
    })

    service.all().then(function successCallback( response  ) {
      $scope.users = response.data.users;
    }, function (error) {
     console.log('-____-');
    })
})
        



.controller("PutController",function($scope,$http,$stateParams){
    $http.get('http://carbillet.net/api-digitalGrenoble/users/')
      .then(function successCallback( response ) {

 

      }, function errorCallback(response) {
        console.log(response);

        console.log('-____-');
      })

 })


// .controller('MapCtrl', function($scope, $cordovaGeolocation) {

//     var posOptions = {timeout: 10000, enableHighAccuracy: false};
//     $cordovaGeolocation
//     .getCurrentPosition(posOptions)
//     .then(function (position) {

//       var lat  = position.coords.latitude
//       var long = position.coords.longitude

//         $scope.map = {
//         center: [lat , long
// ]
//       }

//         $scope.marker = {
//         position: [lat , long
// ],

//         options: function(){
//           return {
//             draggable: true
//           }
//         },
//         events: {
//           click: function(e) {
//             alert(e.latLng)
//           }
//         }
//       }
//     })



.controller("UController",function($scope,$http,$stateParams,service){
   
      service.all().then(function successCallback( response ) {
        
        for (var i = response.data.users.length - 1 ; i >= 0; i--) {
        
          if ( $stateParams.idUser === response.data.users[i].idUser ) 
         
          {
              $scope.user = response.data.users[i]
          }
       
        }

      }, function errorCallback(response) {
        console.log(response);

        console.log('-____-');
      })

 });


