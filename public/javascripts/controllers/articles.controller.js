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

  .controller('ArticleShowController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
    $http.get('/articles/' + $routeParams.id ).success(function(data) {
      $scope.article = data;
    });

    $scope.deleteArticle = function() {
      var deletePath = '/articles/' + $routeParams.id;
      
      $http.delete(deletePath).success(function(data) {
        console.log(data);
      });

      $location.path('/');
    }

  }])

  .controller('NewArticleController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
    $http.get('/categories').success(function(data) {
      $scope.categories = data;
    })

    $scope.addArticle = function() {
      var data = {
        title: $scope.title,
        body: $scope.body,
        category: $scope.category
      }

      $http.post('/articles', data).success(function(data, status) {
        console.log(status);
      });

      $location.path('/articles');
    }
  }])

  .controller('EditArticleController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
    $http.get('/articles/' + $routeParams.id ).success(function(data) {
      $scope.article = data;
    })
    $http.get('/categories').success(function(data) {
      $scope.categories = data;
    })

    $scope.updateArticle = function() {
      var data = {
        id: $routeParams.id,
        title: $scope.article.title,
        body: $scope.article.body,
        category: $scope.article.category
      }

      $http.put('/articles', data).success(function(data, status) {
        console.log(status);
      });

      $location.path('/articles');
    }
  }])
