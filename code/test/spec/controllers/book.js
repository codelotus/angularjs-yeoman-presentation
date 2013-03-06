'use strict';

describe('Controller: BookCtrl', function() {

  // load the controller's module
  beforeEach(module('codeApp'));

  var BookCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    BookCtrl = $controller('BookCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
