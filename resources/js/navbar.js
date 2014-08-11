app.directive("navbar", function(){
	return {
		restrict: "E",
		templateUrl: "resources/html/navbar.html",
		controller: "navbarController",
		controllerAs: "navbar"
	};
});

app.controller("navbarController",function(){
	
	this.name = siteName;
	this.link = siteLink;

	this.left = [{
		label: "Personal",
		link: "#",
	},{
		label:"Projects",
		link: "#",
	},{
		label:"Travel",
		link: "#"
	}];

	this.right = [{
		label: "Links",
		link: "#"
	},{
		label: "Contact",
		link: "#"
	}];
});