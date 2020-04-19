import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

const SeriesGroup = ({ classes, chart, setChart, ...restProps }) => {
  const handleChange = (e, type) => setChart(type);

  return (
    <div className={classes.buttonGroup}>
      <ToggleButtonGroup value={chart} exclusive onChange={handleChange}>
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="bar">Bar</ToggleButton>
        <ToggleButton value="area">Area</ToggleButton>
        <ToggleButton value="line">Line</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default SeriesGroup;
