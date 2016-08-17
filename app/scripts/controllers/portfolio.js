'use strict';

/**
 * @ngdoc function
 * @name melanieberrutApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the melanieberrutApp
 */
angular.module('melanieberrutApp')

	.controller('PortfolioCtrl', ['$scope', function($scope) {

		$scope.imagePath = $scope.imagePath + 'clients/';

		$scope.clients = $scope.initialData.clients;

	}]);
