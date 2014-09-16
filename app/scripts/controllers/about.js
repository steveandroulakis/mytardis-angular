'use strict';

/**
 * @ngdoc function
 * @name mytardisAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytardisAngularApp
 */
angular.module('mytardisAngularApp')
  .controller('AboutCtrl', ['$scope', '$http', '$log', '$templateCache', function ($scope, $http, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$http({method: 'GET', url: 'http://vera183.its.monash.edu.au/api/v1/experiment/?format=json'}).
	    success(function(data, status, headers, config) {
	      // this callback will be called asynchronously
	      // when the response is available
	      $scope.log = $log;
	      
	      $log.log('Hello World');
	      $log.log(data);
	    }).
	    error(function(data, status, headers, config) {
	      $scope.log = $log;

	      $log.error('Hello Error');
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	    });  

  }]);
