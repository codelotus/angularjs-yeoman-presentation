'use strict';

describe('Controller: NewBookCtrl', function() {

  // load the controller's module
  beforeEach(module('codeApp'));

  var NewBookCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    NewBookCtrl = $controller('NewBookCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.title.length).toBe(0);
  });
});
