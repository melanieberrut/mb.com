'use strict';

/**
 * @ngdoc function
 * @name melanieberrutApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the melanieberrutApp
 */
angular.module('melanieberrutApp')

	.controller('HomeCtrl', ['$scope', function($scope) {

		$scope.imagePath =  $scope.imagePath + 'tools/';
		$scope.tools = $scope.initialData.tools;

	}]);

