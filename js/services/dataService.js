/*global angular */

/**
 * Services that persists and retrieves todos from localStorage or a backend API
 * if available.
 *
 * They both follow the same API, returning promises for all changes to the
 * model.
 */
angular.module('OpenBaaS')
	.factory('dataService', function ($http) {

		var data = {foo:"baz"};

		$http.get('').then(function (response) {
			data = response.body
        })

		return {
			get: function () {
				return data;
            }
		}
	})

