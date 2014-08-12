app.service("technologiesService",function(){

	this.technologies = {
		html: {name: "HTML", imgSrc: "resources/images/html.png",description:"Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages"},
		css: {name: "CSS", imgSrc: "resources/images/css.png",description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language."},
		js: {name: "JavaScript", imgSrc: "resources/images/js.png", description:"an object-oriented computer programming language commonly used to create interactive effects within web browsers."},
		python: {name: "Python", imgSrc: "resources/images/python.png"},
		django: {name: "Django", imgSrc: "resources/images/django.png"},
		java: {name: "JAVA", imgSrc: "resources/images/java.png"},
		bootstrap: {name: "Bootstrap", imgSrc: "resources/images/bootstrap.png"},
		matlab: {name: "MATLAB", imgSrc: "resources/images/matlab.png"},
		jquery: {name: "jQuery", imgSrc: "resources/images/jquery.png"}
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