import React from "react";
import { Sankey, Tooltip } from "recharts";

const SankeyChart = ({ classes, data, ...restProps }) => {
  return (
    <Sankey
      width={600}
      height={300}
      data={data}
      nodePading={50}
      link={{ stroke: "#77c878" }}
    >
      <Tooltip />
    </Sankey>
  );
};

export default SankeyChart;
