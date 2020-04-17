import React from "react";
import { Box } from "@material-ui/core/";
import { DyLineChart } from "components/examples";

const DyBox = ({ classes, ...restProps }) => {
  return (
    <Box className={classes.container}>
      <DyLineChart />
    </Box>
  );
};

export default DyBox;
