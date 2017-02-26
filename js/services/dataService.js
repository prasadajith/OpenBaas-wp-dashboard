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


		return {
            get: function () {
                return $http.get('http://52.20.195.195/wordpress_wpbaas/?rest_route=/wp/v2/posts').then(function (response) {
                    return response
                })
            }
		}
	})

