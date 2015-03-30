angular.module('angularViews', ['ngRoute', 'ngResource'])

  .config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/js/views/list.html',
            controller: 'listController'
        });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }); 
      
  }]);                                      


