app.directive("personal", function(){
	return {
		restrict: "A",
		templateUrl: "resources/html/personal.html",
		controller: "personalController",
		controllerAs: "personal"
	};
});

app.controller("personalController",["$scope",function($scope){
	
	this.sortField = "";
	this.sortFields = [
		{label:"Nothing",field:""},
		{label:"Title",field:"title"},
		{label:"Content Type",field:"type"}
	];

	this.panels = [{
		title: "Introduction",
		type: "list",
		body: ["I am a technical and logical individual currently studying for a degree in mechanical engineering. Mechanical engineering provides for me a solid technical backing which I have chosen to develop in the direction of software engineering while maintaining a practical outlook.","Since my year in industry before university where I was exposed to programming I have had a keen interest in software engineering. This matured in my first and second years of university where I involved myself with a number of personal programming projects.","Now I am moving into the third year of my degree where my individual project is concerned with the collection of atmospheric data with an unmanned aerial vehicle, in particular the design and implementation of a web application to control the autonomous flight path and remotely collect the data readings."]
	},{
		title: "Education",
		type: "table",
		body: {
			head:["Date","Eductation","Grades"],
			body:[
				["January","Secondary","AA"],
				["February","Secondaryc","A"],
				["March","Secondaryf","AAA"]
				]
			}
	},{
		title: "Work",
		type: "text",
		body: "Aliquam et congue lectus, vel ullamcorper est. Proin mollis sodales nunc, non sagittis libero fringilla ut. Integer sit amet ante vitae mauris elementum venenatis non in justo. Proin mattis, ligula sit amet interdum semper, orci justo rhoncus metus, quis porta odio libero euismod magna. In sed lacinia lectus. Pellentesque vitae ipsum dui. Vestibulum sed sapien a felis sodales sollicitudin."
	},{
		title: "Experience",
		type: "text",
		body: "Nulla diam risus, dictum eget porta vitae, vestibulum ac magna. In nec porta ipsum. Suspendisse et faucibus nisi, ut adipiscing arcu. Nunc eleifend ut libero vitae aliquet. Fusce pretium accumsan neque ut scelerisque. Vestibulum dictum mi et consectetur ultricies. Phasellus vehicula ipsum quis ultrices accumsan. In ullamcorper accumsan vulputate. Aliquam ut nisl non nunc venenatis bibendum sollicitudin sit amet orci. Sed purus diam, commodo eget fringilla vel, elementum sed."
	}];

}]);