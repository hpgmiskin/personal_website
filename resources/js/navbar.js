app.directive("navbar", function(){
	return {
		restrict: "E",
		templateUrl: "resources/html/navbar.html",
		controller: "navbarController",
		controllerAs: "navbar"
	};
});

app.controller("navbarController",["$scope","$location","$anchorScroll",function($scope,$location,$anchorScroll){
	
	$scope.gotoElement = function(element){
		$location.hash(element);
		$anchorScroll();
	};

	this.name = siteName;
	this.icon = siteIcon;
	this.link = siteLink;

	this.left = [{
		name: "personal",
		label: "Personal"
	},{
		name: "projects",
		label:"Projects",
	},{
		name: "technologies",
		label:"Technologies",
	}];

	this.right = [{
		label: "Links",
		link: "#"
	},{
		label: "Contact",
		link: "#"
	}];
}]);