//Width and height
var chartWidth = 500;
var chartHeight = 300;
var padding = 20;

var dataset = [
  [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
  [410, 12], [475, 44], [25, 67], [85, 21], [220, 88],
  [600, 150]
];

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

//Create labels
svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => `${first(d)},${second(d)}`)
  .attr("x", chain(first, xScale))
  .attr("y", chain(second, yScale))
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "red");


//Create X axis
svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(0," + (chartHeight - padding) + ")")
  .call(xAxis);