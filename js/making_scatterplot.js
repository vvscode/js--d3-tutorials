var dataset = [
  [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
  [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
];
var chartWidth = 500;
var chartHeight = 100;

var svg = d3.select(".making_scatterplot")
  .append("svg")
  .attr("width", chartWidth)
  .attr("height", chartHeight);

svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d) => d[0])
  .attr("cy", (d) => d[1])
  .attr("r", (d) =>  Math.sqrt(chartHeight - d[1]));

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => `${d[0]}, ${d[1]}`)
  .attr("x", (d) => d[0])
  .attr("y", (d) => d[1])
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "red");