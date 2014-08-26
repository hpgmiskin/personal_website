app.directive("welcome",function(){
	return {
		restrict: "A",
		templateUrl: "resources/html/welcome.html",
		controller: "welcomeController",
		controllerAs: "welcome"
	}
});

app.controller("welcomeController",["$scope",function($scope){

	$scope.delay = 3000;

	$scope.pictures = [
		{
			image: 'resources/images/henryShirt.png',
		},{
			image: 'resources/images/henryBlue.png',
		},{
			image: 'resources/images/henryPort.png',
		},{
			image: 'resources/images/henryGreece.png',
		},{
			image: 'resources/images/henrySki.png',
		},
	];

}]);