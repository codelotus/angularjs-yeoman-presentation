'use strict';

codeApp.controller('BookCtrl', function($scope, $http, $routeParams, localStorageService, $log) {


  var bookId = $routeParams.bookId;
  var bookJson = localStorageService.get(bookId);
  $scope.book = JSON.parse(bookJson);
  $log.log("Book: " + JSON.stringify($scope.book));

});
