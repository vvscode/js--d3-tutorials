// http://serganbus.github.io/d3tutorials/drawing_divs.html
var dataset = [ 5, 10, 15, 20, 25 ];

d3
  .select('.drawing_divs')
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", (d) => `${d * 5}px`)
  // next can be resolved with css rule for .bar
  .style('display', 'inline-block')
  .style('width', '20px')
  .style('margin-right', '2px')
  .style('background-color', 'teal');