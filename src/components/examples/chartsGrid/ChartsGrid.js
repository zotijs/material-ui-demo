import React from "react";
import { Box } from "@material-ui/core/";
import { ChartsCard } from "components/examples";

const ChartsGrid = ({ classes, ...restProps }) => {
  return (
    <Box className={classes.grid}>
      <ChartsCard />
      <ChartsCard />
      <ChartsCard />
      <ChartsCard />
    </Box>
  );
};

export default ChartsGrid;
