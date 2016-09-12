angular.module('toRead')
  .controller('ArticlesController', ['$scope', '$http', function($scope, $http) {
    $http.get('/articles').success(function(data) {
      $scope.articles = data;
    })
  }]);
