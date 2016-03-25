var dataset = [ 5, 10, 15, 20, 25 ];
var h = 50;
var w = 500;

d3
  .select(".drawing_svgs")
  .append("svg")
  .attr("width", 500)
  .attr("height", 50)
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => (i * 50) + 25)
  .attr("cy", h/2)
  .attr("r", (d) => d)
  .attr("fill", "yellow")
  .attr("stroke", "orange")
  .attr("stroke-width", (d) =>d/2);
