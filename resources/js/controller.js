app.controller("HeadController", ["$scope",function($scope){
	$scope.siteName = siteName;
	$scope.siteIcon = siteIcon;
}]);

app.controller("MainController",["$scope","$location","$anchorScroll",function($scope,$location,$anchorScroll){
	$scope.siteName = siteName;
	$scope.siteIcon = siteIcon;
	$scope.siteLink = siteLink;

	$scope.searchQuery = "";

	$scope.gotoElement = function(element){
		$scope.search("");
		console.log(element);
		$location.hash(element);
		$anchorScroll();
	};

	$scope.keyUp = function(event){
		console.log(event.keyCode);
		if (event.keyCode == 27){
			this.search('');
		};
	};

	$scope.search = function(searchQuery){
		console.log(searchQuery);
		$scope.searchQuery = searchQuery;
	};

}]);