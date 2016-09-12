var app = angular.module('toRead', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/categories', {
      templateUrl: 'views/categories.view.html',
      controller: 'CategoriesController'
    }).
    when('/articles', {
      templateUrl: 'views/articles.view.html',
      controller: 'ArticlesController'
    }).
    when('/articles/new', {
      templateUrl: 'views/new_article.view.html',
      controller: 'NewArticleController'
    }).
    when('/articles/category/:category_name', {
      templateUrl: 'views/category_articles.view.html',
      controller: 'ArticlesCategoryController'
    }).
    when('/articles/:id', {
      templateUrl: 'views/article.view.html',
      controller: 'ArticleShowController'
    }).
    when('/articles/edit/:id', {
      templateUrl: 'views/edit_article.view.html',
      controller: 'EditArticleController'
    }).
    otherwise({ redirectTo: '/categories' })
}]);
