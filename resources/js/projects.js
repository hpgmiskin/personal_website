app.directive("projects",function(){
	return {
		restrict: "A",
		templateUrl: "resources/html/projects.html",
		controller: "projectsController",
		controllerAs: "projects"
	};
});

app.controller("projectsController",["$scope","$filter","projectsService","technologiesService",function($scope,$filter,projectsService,technologiesService){

	this.sortField = "";
	this.sortFields = [
		{label:"Nothing",field:""},
		{label:"Project Name",field:"name"},
		{label:"Project Date",field:"date"},
		{label:"# Technologies",field:"technologies.length"}
	];

	this.projects = projectsService.getProjects();
	this.technologies = technologiesService.getTechnologies();

}]);