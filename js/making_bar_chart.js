var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

//Width and height
var chartWidth = 500;
var chartHeight = 100;
var barPadding = 1;

//Create SVG element
var svg = d3.select(".making_bar_chart")
  .append("svg")
  .attr("width", chartWidth)
  .attr("height", chartHeight);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * (w / dataset.length))  //Bar width of 20 plus 1 for padding
  .attr("width", w / dataset.length - barPadding)
  .attr("y", (d) => chartHeight - d * 4)
  .attr("height", (d) => d * 4)
  .attr("fill", (d) => `rgb(0, 0, ${(d * 10)})`);

