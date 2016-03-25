var dataset = "x".repeat(50).split('').map((item) => Math.random()*30);

d3.select(".power_of_data").selectAll("div")
  .data(dataset)  // <-- The answer is here!
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", (d) => `${d * 5}px`)
;