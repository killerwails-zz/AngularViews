angular.module('angularViews')
  .controller('listController',['$scope','$http','List',function ($scope,$http,List) {
    $scope.items = List.query();
    $scope.listitem = "";
 // when submitting the add form, send the text to the node API
    $scope.sendToServer = function(){
      var newListItem = new List({value:$scope.listitem});
      newListItem.$save(function(){
        $scope.items.unshift(newListItem)
      });    
    }

    $scope.deleteListItem = function(id) {
      List.delete($scope.listitem.id,function (data) {
          $scope.items = data;
        });
        // .error(function(data) {
        //   console.log('Error: ' + data);
        // });
      };

}]);



