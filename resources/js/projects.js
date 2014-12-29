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
		{label:"Project Date",field:"-date"},
		{label:"# Technologies",field:"technologies.length"}
	];

	this.getLinkClass = function(linkCount){
		if (linkCount == 1){
			return "col-xs-10";
		} else if (linkCount == 2){
			return "col-xs-5";
		} else if (linkCount == 3){
			return "col-xs-3";
		} else {
			return "col-xs-2";
		}
	};

	this.projects = projectsService.getProjects();
	this.technologies = technologiesService.getTechnologies();

}]);