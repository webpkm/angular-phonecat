'use strict';

/* App Module */
angular.module("myApp", [])

.controller('PhoneListCtrl', PhoneListCtrl);
function PhoneListCtrl(s){
	
	PhoneListCtrl.$inject = ['$scope'];
	 s.phones = [
	                  {'name': 'Nexus S',
	                   'snippet': 'Fast just got faster with Nexus S.'},
	                  {'name': 'Motorola XOOM™ with Wi-Fi',
	                   'snippet': 'The Next, Next Generation tablet.'},
	                  {'name': 'MOTOROLA XOOM™',
	                   'snippet': 'The Next, Next Generation tablet.'}
	                ];
	 
	s.appName = "This is the my app";	
}
PhoneListCtrl.$inject = ['$scope'];

angular.element(document).ready(function() {
	angular.bootstrap(document, ['myApp']);
});