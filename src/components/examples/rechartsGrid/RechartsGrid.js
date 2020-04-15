import React from "react";
import { Box } from "@material-ui/core/";
import {
  LineChart,
  SankeyChart,
  BarChart,
  AdvLineChart,
  AdvBarChart,
  AdvBubbleChart,
} from "components/examples";

const ChartsGrid = ({ classes, ...restProps }) => {
  return (
    <Box className={classes.grid}>
      <LineChart />
      <SankeyChart />
      <BarChart />
      <AdvLineChart />
      <AdvBarChart />
      <AdvBubbleChart />
      <p>End of Charts</p>
    </Box>
  );
};

export default ChartsGrid;
