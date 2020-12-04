import React from 'react'
import * as d3 from 'd3';

const Chart = () => {
    const drawChart=()=>{
        const canvas = d3.select("#canvas");
            const width = 700;
            const height = 500;
            const margin = { top:10, left:50, bottom: 40, right: 10};
            const iwidth = width - margin.left - margin.right;
            const iheight = height - margin.top -margin.bottom;

            const svg = canvas.append("svg");
            svg.attr("width", width);
            svg.attr("height", height);

            let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

            d3.json("https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json").then(data => {
                const y = d3.scaleLinear() 
                .domain([0, 12])
                .range([iheight, 0]);

            const x = d3.scaleBand()
            .domain(data.map(d => d.name) ) 
            .range([0, iwidth])
            .padding(0.1); 

            const bars = g.selectAll("rect").data(data);

            bars.enter().append("rect")
            .attr("class", "bar")
            .style("fill", "orange")
            .attr("x", d => x(d.name))
            .attr("y", d => y(d.seasons))
            .attr("height", d => iheight - y(d.seasons))
            .attr("width", x.bandwidth())  

            g.append("g")
            .classed("x--axis", true)
            .call(d3.axisBottom(x))
            .attr("transform", `translate(0, ${iheight})`);  

            g.append("g")
            .classed("y--axis", true)
            .call(d3.axisLeft(y));
            });
      };

  return(
    <div>
      <div id="canvas">
          <h1>Seasons</h1>
      </div>
      {drawChart()}
    </div>
    
  )
}

export default Chart;
