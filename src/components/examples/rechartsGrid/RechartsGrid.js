import React from "react";
import { Box } from "@material-ui/core/";
import { LineChart, SankeyChart, BarChart } from "components/examples";

const ChartsGrid = ({ classes, ...restProps }) => {
  return (
    <Box className={classes.grid}>
      <LineChart />
      <SankeyChart />
      <BarChart />
      <p>End of Charts</p>
    </Box>
  );
};

export default ChartsGrid;
