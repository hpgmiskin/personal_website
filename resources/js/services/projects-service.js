app.service("projectsService",function(){

	this.projects = [{
		name: "Bournemouth Capacity Management Tool",
		date: new Date(2014,08,01),
		description: "Working within a development team of graduates and interns at JPMorgan we are developing a web application to track headcount at the Bournemouth site. Within this project I have worked on the dashboard interface to view headcount metrics and download CSV reports",
		technologies: ["angular","html","css","js","python","java","bootstrap","django"]
	},{
		name: "Smarter Software Service",
		date: new Date(2013,09,01),
		description: "Working in a team of 4 people as part of IBM's Extreme Blue summer internship we designed and developed a web application to deliver tailored updates to a number of IBM products. The application was written in python using the django web framework to enable rapid development of a complex web application.",
		technologies: ["html","css","js","python","java","bootstrap","django"]
	},{
		name: "Code for Good",
		date: new Date(2013,11,01),
		description: "In a 6 person team over a weekend we worked to improve education in partnership with Eneza Education. We developed a smart phone application using web technologies and a corresponding text message server which had the ability to deliver WolframAplha and Google services through text message.",
		technologies: ["python","html","bootstrap","css","js"]
	},{
		name: "Atmospheric Data Collector",
		date: new Date(2014,3,1),
		description: "For my third year project I worked on a project that looked at collecting atmospheric data using an autonomous unmanned aerial vehicle. I developed a route planner which optimised the spread and depth of data collection while minimising the energy consumption. To achieve this I considered the shortest path through a sampling plan then developed on this to form a navigable path for a UAV.",
		technologies: ["python","matlab","html","css","bootstrap","django","js","jquery"]
	}];

	this.getProjects = function(){
		return this.projects
	};

});