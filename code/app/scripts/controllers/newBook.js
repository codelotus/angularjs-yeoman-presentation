'use strict';

codeApp.controller('NewBookCtrl', function($scope) {
  $scope.title = "";
  $scope.author = "";
  $scope.image = "";

  $scope.submitNewBook = function() {
      alert("Title: " + $scope.title);
  }
});
