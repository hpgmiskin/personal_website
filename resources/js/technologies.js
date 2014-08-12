app.directive("technologies",function(){
	return {
		restrict: "E",
		templateUrl: "resources/html/technologies.html",
		controller: "technologiesController",
		controllerAs: "technologies"
	};
});

app.controller("technologiesController",["$scope","technologiesService",function($scope,technologiesService){

	this.sortField = "description.length";
	this.sortFields = [
		{label:"Nothing",field:"description.length"},
		{label:"Name",field:"name"}
	];

	this.technologies = technologiesService.getTechnologiesList();

}]);