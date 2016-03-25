var dataset = [ 5, 10, 15, 20, 25 ];

d3.select(".using_your_data").selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text((d) => `New paragraph with ${d}`)
  .style('color', (d) => d > 15 ? 'red' : 'green');