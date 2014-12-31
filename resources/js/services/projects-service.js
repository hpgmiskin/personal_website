app.service("projectsService",function(){

	this.projects = [{
		name: "File Comparator",
		date: new Date(2013,10,1),
		description: "To assist in the combination of film collections from multiple folder I developed a python file comparator. This comparator firstly utilises regular expressions to sanitise the file names to there most basic form then produces a comparison table to outline which files can be found in both or are unique to the folder.",
		technologies: ["python"],
		gitLinks: [
					{name: "File Comparator", path:"https://github.com/miskinh/file_comparator"}
					]
	},{
		name: "Code for Good",
		date: new Date(2013,11,1),
		description: "In a 6 person team as part of JPMorgans Code for Good we worked to improve education in partnership with Eneza Education. Over a single weekend we developed a smart phone application using web technologies and a corresponding text message server which had the ability to deliver WolframAplha and Google services through text message. Upon completion of the project we presented the final solution and won best project.",
		technologies: ["python","html","bootstrap","css","js"],
		links: [
						{name: "Code for Good", path: "http://techcareers.jpmorgan.com/techcareers/jpmorgan/careers/europe/tech/opportunities/codeforgood"},
						],
		gitLinks: [
					{name: "Eneza Server", path: "https://github.com/wallarelvo/eneza-server"},
					{name: "Eneza Web Application", path: "https://github.com/vlttnv/eneza"}
					]
	// },{
	// 	name: "NightOut",
	// 	date: new Date(2014,3,1),
	// 	description: "As part of a startup weekend I developed the web application front end to enable users to plan, record and share there night out. Over the weekend a team of 6 people worked on a startup idea and presented at the end of the weekend.",
	// 	technologies: ["python","django","html","css","bootstrap"],
	// 	links: [
	// 				{name: "NightOut", path:"https://github.com/miskinh/nightout"}
	// 				]
	},{
		name: "Smarter Software Service",
		date: new Date(2013,09,1),
		description: "Working in a team of 4 people as part of IBM's Extreme Blue summer internship we designed and developed a web application to deliver tailored updates to a number of IBM products. The application was written in python using the django web framework to enable rapid development of a complex web application.",
		technologies: ["html","css","js","python","java","bootstrap","django","jquery"],
		links: [{name: "IBM Extreme Blue", path: "http://www-05.ibm.com/employment/uk/students/extreme-blue/"}]
	},{
		name: "Bournemouth Capacity Management Tool",
		date: new Date(2014,08,1),
		description: "Working within a development team of graduates and interns at JPMorgan we are developing a web application to track headcount at the Bournemouth site. Within this project I have worked on the dashboard interface to view headcount metrics and download CSV reports.",
		technologies: ["angular","html","css","js","python","java","bootstrap","spring"],
		links: [
						{name: "Site Improvements", path: "http://www.bournemouthecho.co.uk/news/11183634.JP_Morgan_announces___28_6m_improvements_to_Bournemouth_base/"},
						{name: "JPMorgan Intern Program", path: "http://techcareers.jpmorgan.com/techcareers/jpmorgan/careers/europe/tech/opportunities/internship"}
						]
	},{
		name: "Atmospheric Data Collector",
		date: new Date(2014,3,1),
		description: "For my third year project I worked on a project that looked at collecting atmospheric data using an autonomous unmanned aerial vehicle. I developed a route planner which optimised the spread and depth of data collection while minimising the energy consumption. To achieve this I considered the shortest path through a sampling plan then developed on this to form a navigable path for a UAV.",
		technologies: ["python","matlab","html","css","bootstrap","django","js","jquery"],
		links: [{name: "Project Write Up", path:"http://1drv.ms/1rAiTKQ"}],
		gitLinks: [
			{name: "Routing Logic", path: "https://github.com/miskinh/route_planner"},
			{name: "Web Application", path: "https://github.com/miskinh/atmospheric_data_collector"}
		]
	},{
		name: "Raspberry Pi",
		date: new Date(2014,12,1),
		description: "Using the Raspberry Pi as a RESTful web server I developed functionality to use the Pi as a remote light controller and network device observer. For this functionality the Restful Pi repository contains the back end functionality, Angular Pi repository contains the front end implementation and Dropbox Pi holds the code to keep the current public IP address up to date in dropbox.",
		technologies: ["python","bootstrap","angular","html","js","css"],
		links: [{name: "Front End Demo", path: "/angular_pi"}],
		gitLinks: [
			{name: "Restful Pi", path: "https://github.com/miskinh/restful_pi"},
			{name: "Angular Pi", path: "https://github.com/miskinh/angular_pi"},
			{name: "Dropbox Pi", path: "https://github.com/miskinh/raspberry_pi_web"}
		]
	}];

	this.getProjects = function(){
		return this.projects
	};

});