app.directive("projects",function(){
	return {
		restrict: "E",
		templateUrl: "resources/html/projects.html",
		controller: "projectsController",
		controllerAs: "projects"
	};
});

app.controller("projectsController",["$scope",function($scope){

	this.technologies = technologies;

	searchQuery = "test";

	this.search = search;

	this.projects = [{
		name: "IBM Extreme Blue",
		date: new Date(2013,09,01),
		description: "In a team of 4 people we designed and developed a web application to deliver tailored updates to a number of IBM products. The application was written in python using the django web framework.",
		technologies: ["html","css","js","python","java","bootstrap","django"]
	},{
		name: "Code for Good",
		date: new Date(2013,11,01),
		description: "In a 6 person team over a weekend we developed ",
		technologies: ["python","html","bootstrap","css"]
	}];

}]);