/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('OpenBaaS', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'MainCtrl',
			templateUrl: 'main.html',
		};

		$routeProvider
			.when('/', routeConfig)
			// .when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	});
