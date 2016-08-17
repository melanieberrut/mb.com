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
  'ui.router',
  'ngSanitize',
  'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
     .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      });
      // use the HTML5 History API
     // $locationProvider.html5Mode(false);
    });
