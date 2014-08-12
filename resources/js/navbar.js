app.directive("navbar", function(){
	return {
		restrict: "E",
		templateUrl: "resources/html/navbar.html",
		controller: "navbarController",
		controllerAs: "navbar"
	};
});

app.controller("navbarController",["$scope",function($scope){
	
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