'use strict';

/**
 * @ngdoc function
 * @name mytardisAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytardisAngularApp
 */
angular.module('mytardisAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
