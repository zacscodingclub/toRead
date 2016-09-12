angular.module('toRead')
  .controller('ArticlesController', ['$scope', '$http', function($scope, $http) {
    $http.get('/articles').success(function(data) {
      $scope.articles = data;
    })
  }])

  .controller('ArticlesCategoryController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/articles/category/' + $routeParams.category_name).success(function(data) {
      $scope.categoryArticles = data;

      $scope.category = $routeParams.category_name;
    })
  }])

  .controller('ArticleShowController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/articles/' + $routeParams.id ).success(function(data) {
      $scope.article = data;
    })
  }])
