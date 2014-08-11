app.directive("technologies",function(){
	return {
		restrict: "E",
		templateUrl: "resources/html/technologies.html",
		controller: "technologiesController",
		controllerAs: "technologies"
	};
});

app.controller("technologiesController",function(){

	this.test = "testing";
	this.technologies = technologies;

});