'use strict';

/* App Module */
angular.module("myApp", [])

.controller('myCtrl', function($scope){
	$scope.appName = "This is the my app";	
});

angular.element(document).ready(function() {
	angular.bootstrap(document, ['myApp']);
});