'use strict';

/**
 * @ngdoc function
 * @name melanieberrutApp.controller:SharedCtrl
 * @description
 * # SharedCtrl
 * Controller of the melanieberrutApp
 */
angular.module('melanieberrutApp')
	.controller('SharedCtrl', ['$scope','$http', function($scope, $http) {
		
		$scope.imagePath = '/images/';

		$http({
			method: 'GET',
			url: 'scripts/feeds/feed.json'
		}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available

		$scope.initialData = response.data;
		}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
		console.info('errorCallback response',response);
		});
	}]);

