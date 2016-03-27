//Width and height
var chartWidth = 500;
var chartHeight = 300;
var padding = 20;

//Dynamic, random dataset
var dataset = [];					//Initialize empty array
var numDataPoints = 50;				//Number of dummy data points to create
var xRange = Math.random() * 1000;	//Max range of new x values
var yRange = Math.random() * 1000;	//Max range of new y values
for (var i = 0; i < numDataPoints; i++) {					//Loop numDataPoints times
  var newNumber1 = Math.round(Math.random() * xRange);	//New random integer
  var newNumber2 = Math.round(Math.random() * yRange);	//New random integer
  dataset.push([newNumber1, newNumber2]);					//Add new number to array
}

var first = (d) => d[0];
var second = (d) => d[1];

var chain = (a, b) => (x) => b(a(x));

//Create scale functions
var xScale = d3.scale.linear()
  .domain([0, d3.max(dataset, first)])
  .range([padding, chartWidth - padding * 2]);

var yScale = d3.scale.linear()
  .domain([0, d3.max(dataset, second)])
  .range([chartHeight - padding, padding]);

var rScale = d3.scale.linear()
  .domain([0, d3.max(dataset, second)])
  .range([2, 5]);

//Define X axis
var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient("bottom");

//Define Y axis
var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient("left")
  .ticks(5);

//Create SVG element
var svg = d3.select(".axes")
  .append("svg")
  .attr("width", chartWidth)
  .attr("height", chartHeight);

//Create circles
svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", chain(first, xScale))
  .attr("cy", chain(second, yScale))
  .attr("r", chain(second, rScale));

//Create X axis
svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(0," + (chartHeight - padding) + ")")
  .call(xAxis);

//Create Y axis
svg.append("g")
  .attr("class", "axis")
  .attr("transform", `translate(${padding},0)`)
  .call(yAxis);