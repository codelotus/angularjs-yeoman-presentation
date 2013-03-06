'use strict';

codeApp.controller('BooksCtrl', function($scope, $http, localStorageService) {

  $http({method: 'GET', url:'scripts/data/model.json'}).
    success(function(data, status, headers, config){
      $scope.books = data;
      _.each(data, function(item){
        localStorageService.add(item.id, JSON.stringify(item));
      });
    }).
    error(function(data, status, headers, config){
      $scope.awesomeThings = [ 'fail' ];
    });

});
