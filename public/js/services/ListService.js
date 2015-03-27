angular.module('angularViews')
  .factory('List',['$http','$resource', function ($http, $resource) {
    return $resource('/api/listitems'); 
 }]);
