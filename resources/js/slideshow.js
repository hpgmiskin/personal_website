app.directive("slideshow", function(){
	return {
		restrict: "E",
		templateUrl: "resources/html/slideshow.html",
		controller: "slideshowController",
		controllerAs: "slideshow"
	};
});

app.controller("slideshowController",function($scope){

	  $scope.myInterval = 10000;

	  $scope.slides = [
	  	{
	  		image: 'resources/images/lakedistrict.png',
	    	title: "Lake District"
	    },{
	  		image: 'resources/images/brighton.png',
	    	title: "Brighton"
	    },{
	  		image: 'resources/images/dubrovnik.png',
	    	title: "Dubrovnik"
	    },{
	  		image: 'resources/images/newyork.png',
	    	title: "New York"
	    }
	  ];

});