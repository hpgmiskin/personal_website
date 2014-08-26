app.service("technologiesService",function(){

	this.technologies = {
		html: {name: "HTML", imgSrc: "resources/images/html.png",description:"Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages"},
		css: {name: "CSS", imgSrc: "resources/images/css.png",description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language."},
		js: {name: "JavaScript", imgSrc: "resources/images/js.png", description:"JavaScript is an object-oriented computer programming language commonly used to create interactive effects within web browsers."},
		python: {name: "Python", imgSrc: "resources/images/python.png", description:"Python is a widely used general-purpose, high-level programming language. Its design philosophy emphasizes code readability, and syntax efficiency."},
		django: {name: "Django", imgSrc: "resources/images/django.png", description:"Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design."},
		java: {name: "JAVA", imgSrc: "resources/images/java.png", description: "Java is a computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible."},
		bootstrap: {name: "Bootstrap", imgSrc: "resources/images/bootstrap.png", description:"Bootstrap is a collection of tools for creating websites and web applications. It contains HTML and CSS-based design templates to create elegent interface components."},
		matlab: {name: "MATLAB", imgSrc: "resources/images/matlab.png", description:"MATLAB is a multi-paradigm numerical computing environment and fourth generation programming language."},
		jquery: {name: "jQuery", imgSrc: "resources/images/jquery.png", description:"jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML."},
		angular: {name:"AngularJS", imgSrc:"resources/images/angular.png", description:"AngularJS is an open-source JavaScript framework, that assists with running single-page applications."}
	};

	this.getTechnologies = function(){
		return this.technologies;
	};

	this.getTechnologiesList = function(){
		var keys = Object.keys(this.technologies);
		var values = []
		for (var i in keys){
			values.push(this.technologies[keys[i]]);
		};
		return values;
	};

});