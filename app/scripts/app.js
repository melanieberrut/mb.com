'use strict';

/**
 * @ngdoc overview
 * @name melanieberrutApp
 * @description
 * # melanieberrutApp
 *
 * Main module of the application.
 */
angular
  .module('melanieberrutApp', [
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
    templateUrl: 'views/home.html'
    })
    .otherwise({
    redirectTo: '/'
    });
    // use the HTML5 History API
   $locationProvider.html5Mode(true);
  });
