app.directive("chart",function(){
	return {
		restrict: "E",
		templateUrl: "resources/html/chart.html",
		controller: "chartController",
		controllerAs: "chart"
	};
});

app.controller("chartController",function(){
	this.test = "chart test";
});

var newChart = function (container,title,subtitle,series) {
    $('#'+container).highcharts({
        title: {
            text: title
        },
        subtitle: {
            text: subtitle
        },
        xAxis: {
            title:{
                text: "X Axis"
            },
            labels: {
                align: "center"
            },
            tickInterval: 1
        },
        yAxis: {
            title: {
                text: "Y Axis",
                x: -15
            },
            labels: {
                align: 'left',
                x: -10
            },
            showFirstLabel: false
        },
        legend: {
            align: 'center'
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: series
    });
};