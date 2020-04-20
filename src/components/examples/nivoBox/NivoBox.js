import React from "react";
import { Box } from "@material-ui/core/";
import { NivoBubbleChart, NivoBarChart } from "components/examples";

const NivoBox = ({ classes, ...restProps }) => {
  return (
    <Box className={classes.container}>
      <NivoBubbleChart />
      <NivoBarChart />
    </Box>
  );
};

export default NivoBox;
