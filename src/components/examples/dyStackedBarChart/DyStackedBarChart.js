import React from "react";
import { DygraphComponent } from "components/dygraphs";
import Dygraph from "dygraphs";

const DyStackedBarChart = ({ classes, data, ...restProps }) => {
  const { getData } = data;
  const graphData = getData();

  const darkenColor = (colorStr) => {
    // Defined in dygraph-utils.js
    let color = Dygraph.toRGB_(colorStr);
    color.r = Math.floor((255 + color.r) / 2);
    color.g = Math.floor((255 + color.g) / 2);
    color.b = Math.floor((255 + color.b) / 2);
    return "rgb(" + color.r + "," + color.g + "," + color.b + ")";
  };

  const drawZeroReference = (ctx, area, dygraph) => {
    //min max from dateWindow
    const xLeft = dygraph.toDomCoords(2019, 0);
    const xRight = dygraph.toDomCoords(2024, 0);

    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(xLeft[0], xLeft[1]);
    ctx.lineTo(xRight[0], xRight[1]);
    ctx.closePath();
    ctx.stroke();
  };

  const barChartPlotter = (e) => {
    const ctx = e.drawingContext;
    const points = e.points;
    const y_bottom = e.dygraph.toDomYCoord(0);

    ctx.fillStyle = darkenColor(e.color);

    // Find the minimum separation between x-values.
    // This determines the bar width.
    let min_sep = Infinity;
    for (let i = 1; i < points.length; i++) {
      const sep = points[i].canvasx - points[i - 1].canvasx;
      if (sep < min_sep) min_sep = sep;
    }
    const bar_width = Math.floor((2.0 / 3) * min_sep);

    // Do the actual plotting.
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      const center_x = p.canvasx;

      ctx.fillRect(
        center_x - bar_width / 2,
        p.canvasy,
        bar_width,
        y_bottom - p.canvasy
      );

      ctx.strokeRect(
        center_x - bar_width / 2,
        p.canvasy,
        bar_width,
        y_bottom - p.canvasy
      );
    }
  };

  const options = {
    legend: "always",
    includeZero: true,
    stackedGraph: true,
    valueRange: [-200, "auto"],
    dateWindow: [2019, 2024],
    plotter: barChartPlotter,
    underlayCallback: drawZeroReference,
  };

  return <DygraphComponent data={graphData} options={options} />;
};

export default DyStackedBarChart;
