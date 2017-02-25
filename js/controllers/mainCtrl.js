/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular.module('OpenBaaS')
	.controller('MainCtrl', function TodoCtrl($scope, dataService) {
		'use strict';

		$scope.data = dataService.get();

	});
