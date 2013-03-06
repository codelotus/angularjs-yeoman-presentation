'use strict';

describe('Controller: BooksCtrl', function() {

  // load the controller's module
  beforeEach(module('codeApp'));

  var BooksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    BooksCtrl = $controller('BooksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.books.length).toBe(9);
  });
});
