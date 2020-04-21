import React from "react";
import { Box } from "@material-ui/core/";
import { DyLineChart, DyStackedBarChart } from "components/examples";

const DyBox = ({ classes, ...restProps }) => {
  return (
    <Box className={classes.container}>
      <DyLineChart />
      <DyStackedBarChart />
    </Box>
  );
};

export default DyBox;
