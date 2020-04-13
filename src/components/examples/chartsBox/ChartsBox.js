import React from "react";
import { Box } from "@material-ui/core/";
import { ChartsCard } from "components/examples";

const ChartsBox = ({ classes, ...restProps }) => {
  return (
    <Box className={classes.container}>
      <ChartsCard />
      <ChartsCard />
      <ChartsCard />
      <ChartsCard />
    </Box>
  );
};

export default ChartsBox;
