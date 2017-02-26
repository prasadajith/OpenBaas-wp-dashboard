/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular.module('OpenBaaS')
	.controller('MainCtrl', function ($scope, dataService, $http) {
		'use strict';

        dataService.get().then(function (response) {
			$scope.data = response;
        })

	});
