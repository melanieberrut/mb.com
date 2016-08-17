'use strict';

/**
 * @ngdoc function
 * @name melanieberrutApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the melanieberrutApp
 */
angular.module('melanieberrutApp')

	.controller('NavigationCtrl', ['$scope', '$location','$route', '$anchorScroll', function($scope, $location, $route, $anchorScroll) {
		$scope.$route = $route;
		$scope.scrollTo = function(id) {
			$location.hash(id);
			$anchorScroll();
		};
	}]);
