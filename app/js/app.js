'use strict';

/* App Module */
angular.module("myApp", [])

.controller('PhoneListCtrl', PhoneListCtrl)
.controller('UserListCtrl', UserListCtrl)
.controller('ChildCtrl', ChildCtrl);

function ChildCtrl($scope){
	$scope.$on('someEvent', function(event, mass) {console.log(event);console.log(mass)});
	$scope.go = function(){
		$scope.$emit('myCustomEvent', $scope.data);
	};

}
function PhoneListCtrl(s,r){
	s.first_name = "Prem Kumar";
	s.$on('myCustomEvent', function (event, data) {
	  console.log(data); // 'Data to send'
	});
	
	r.name = "PREM KUMAR";
	s.sent = function(){
		s.$broadcast('someEvent', [1,2,3]);
	};
	
	s.phones = [
	            {'name': 'Nexus S',
	            	'snippet': 'Fast just got faster with Nexus S.'},
	            	{'name': 'Motorola XOOM™ with Wi-Fi',
	            		'snippet': 'The Next, Next Generation tablet.'},
	            		{'name': 'MOTOROLA XOOM™',
	            			'snippet': 'The Next, Next Generation tablet.'}
	            		];
	
	s.appName = "This is the my app";
	s.$watch('appName', function(oldAppName, newAppName){
		if(newAppName!=oldAppName){
			alert("You have changed the app Name: "+newAppName);
		}
	});
}

PhoneListCtrl.$inject = ['$scope','$rootScope'];

function UserListCtrl($scope, $rootScope){
	$scope.last_name = "Maurya";
	$scope.users = "This is the list of users";
	$rootScope.$on('someEvent', function(event, mass) {console.log(mass)});
	$scope.$on('someEvent', function(event, mass) {console.log(event);console.log(mass)});
}

angular.element(document).ready(function() {
	angular.bootstrap(document, ['myApp']);
});