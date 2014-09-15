'use strict';

/**
 * @ngdoc overview
 * @name mytardisAngularApp
 * @description
 * # mytardisAngularApp
 *
 * Main module of the application.
 */
angular
  .module('mytardisAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activetab: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        activetab: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
