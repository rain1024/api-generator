'use strict';

/**
 * @ngdoc function
 * @name apiGeneratorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apiGeneratorApp
 */
angular.module('apiGeneratorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
