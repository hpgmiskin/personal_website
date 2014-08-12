app.directive("projects",function(){
	return {
		restrict: "E",
		templateUrl: "resources/html/projects.html",
		controller: "projectsController",
		controllerAs: "projects"
	};
});

app.controller("projectsController",["$scope","$filter",function($scope,$filter){

	this.technologies = technologies;
	this.search = search;

	this.projects = [{
		name: "IBM Extreme Blue",
		date: new Date(2013,09,01),
		description: "In a team of 4 people we designed and developed a web application to deliver tailored updates to a number of IBM products. The application was written in python using the django web framework.",
		technologies: ["html","css","js","python","java","bootstrap","django"]
	},{
		name: "IBM Extreme Blue",
		date: new Date(2018,09,01),
		description: "In a team of 4 people we designed and developed a web application to deliver tailored updates to a number of IBM products. The application was written in python using the django web framework.",
		technologies: ["html","css","js","python","java","bootstrap","django"]
	},{
		name: "Code for Good",
		date: new Date(2013,11,01),
		description: "In a 6 person team over a weekend we developed a mobile app to improve education in partnership with Eneza Education. The solution we produced had the ability to deliver WolframAplha and Google through text message.",
		technologies: ["python","html","bootstrap","css"]
	},{
		name: "Atmospheric Data Collector",
		date: new Date(2014,3,1),
		description: "For my third year project I developed a route planner for an atmospheric data collector. This considered shortest path planning through a number of points and then developed on this to form a navigable path for a UAV.",
		technologies: ["python","matlab","html","css","bootstrap","django","js","jquery"]
	}];

	var orderBy = $filter('orderBy');
    this.order = function(predicate) {
    	this.projects = orderBy(this.projects, predicate, false);
    	console.log(predicate);
    };

    // this.order("title");

}]);