'use strict';

/**
 * @ngdoc function
 * @name mytardisAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytardisAngularApp
 */
angular.module('mytardisAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
