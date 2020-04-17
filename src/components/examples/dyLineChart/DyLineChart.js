import React from "react";
import { DygraphComponent } from "components/dygraphs";
import Dygraph from "dygraphs";

const DyLineChart = ({ classes, data, ...restProps }) => {
  const { dataLabels, getArrayFromJSON } = data;
  const largeData = getArrayFromJSON();

  const xFormatter = (d) => d.toLocaleDateString("en-US", { month: "short" });

  const options = {
    customBars: true,
    connectSeparatedPoints: true,
    legend: "never",
    labels: dataLabels,
    axes: {
      x: {
        axisLabelFormatter: xFormatter,
        ticker: function (min, max, pixels, opts) {
          return Dygraph.getDateAxis(
            min,
            max,
            Dygraph.Granularity.MONTHLY,
            opts
          );
        },
      },
    },
    series: {
      Range: {
        color: "#666",
      },
      Average: {
        color: "#000",
        strokePattern: Dygraph.DASHED_LINE,
      },
      "2019": {
        color: "#38eeff",
      },
      "2020": {
        color: "#000",
        strokeWidth: 2,
        drawPoints: true,
        pointSize: 3,
      },
      Prediction: {
        color: "#000",
        strokeWidth: 2,
        drawPoints: true,
        pointSize: 3,
        strokePattern: Dygraph.DASHED_LINE,
      },
    },
  };

  return <DygraphComponent data={largeData} options={options} />;
};

export default DyLineChart;
