var app = angular.module("home",['ui.bootstrap']);

var siteName = "Henry's Site";
var siteIcon = "resources/images/person.png";
var siteLink = "http://hpgmiskin.s3-website-eu-west-1.amazonaws.com/";

var searchQuery = "";
var search = function(newSearchQuery){
	alert(newSearchQuery);
	searchQuery = newSearchQuery;
};

var technologies = {
	html: {name: "HTML", imgSrc: "resources/images/html.png",description:"Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages"},
	css: {name: "CSS", imgSrc: "resources/images/css.png",description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language."},
	js: {name: "JavaScript", imgSrc: "resources/images/js.png", description:"an object-oriented computer programming language commonly used to create interactive effects within web browsers."},
	python: {name: "Python", imgSrc: "resources/images/python.png"},
	django: {name: "Django", imgSrc: "resources/images/django.png"},
	java: {name: "JAVA", imgSrc: "resources/images/java.png"},
	bootstrap: {name: "Bootstrap", imgSrc: "resources/images/bootstrap.png"} 
};