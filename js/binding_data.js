// http://serganbus.github.io/d3tutorials/binding_data.html
var dataset = [ 5, 10, 15, 20, 25 ];

d3
  .select('.binding_data')
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text("New paragraph!");
			