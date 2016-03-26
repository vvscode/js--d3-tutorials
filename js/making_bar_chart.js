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
  .attr("x", (d, i) => i * (chartWidth / dataset.length))  //Bar width of 20 plus 1 for padding
  .attr("width", chartWidth / dataset.length - barPadding)
  .attr("y", (d) => chartHeight - d * 4)
  .attr("height", (d) => d * 4)
  .attr("fill", (d) => `rgb(0, 0, ${(d * 10)})`);

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * (chartWidth / dataset.length) + (chartWidth / dataset.length - barPadding) / 2)
  .attr("y", (d) => chartHeight - (d * 4) + 14)
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", (d) => `rgb(${(d * 10)}, 255, 255)`)
  .attr("text-anchor", "middle")
;