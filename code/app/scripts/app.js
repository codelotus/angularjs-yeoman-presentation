'use strict';

var codeApp = angular.module('codeApp', ['LocalStorageModule'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/book/:bookId', {
        templateUrl: 'views/book.html',
        controller: 'BookCtrl'
      })
      .when('/', {
        templateUrl: 'views/books.html',
        controller: 'BooksCtrl'
      })
      .when('/newBook', {
        templateUrl: 'views/newBook.html',
        controller: 'NewBookCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
