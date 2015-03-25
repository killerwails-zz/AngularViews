
var mainmodule = angular.module('earnfrontend', ['ngRoute']);

mainmodule.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/app/home/views/list.html',
            controller: 'ListController'
        });
})

mainmodule.controller('ListController', function($scope, $http) {
  $scope.sendToServer = function(){
    // debugger
    console.log({item: $scope.listitem})
      $http.post('/api',{item: $scope.listitem})
           .success(function(res){
               getFromServer();
           });
  }
  getFromServer();
  function getFromServer(){
      $http.get('/api')
           .success(function(res){
               $scope.items = res;
               console.log(res);
           });
  }
});

