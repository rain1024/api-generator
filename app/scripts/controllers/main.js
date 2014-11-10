'use strict';

/**
 * @ngdoc function
 * @name apiGeneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apiGeneratorApp
 */
angular.module('apiGeneratorApp')
	.controller('MainCtrl', function ($scope) {
		$scope.api = {
			"description" : "This is api for Trend Module"
		}

		$scope.model = {
			'name' : 'owners',
			'properties' : [
				{
					'name' : 'name',
					'type' : 'string'
				},
				{
					'name' : 'age',
					'type' : 'int'
				}
			]
		};
	});
