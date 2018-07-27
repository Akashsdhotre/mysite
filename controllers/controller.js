
var app = angular.module('myapp' , []);

app.controller('myCtlr' , function($scope) {

	 $scope.cartValue = 0 ;

	$scope.increaseCartCount = function() {

		$scope.cartValue += 1;

		console.log($scope.cartValue);
	}
});