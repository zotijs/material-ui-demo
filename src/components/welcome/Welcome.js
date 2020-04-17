import React from "react";
import { Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const Welcome = ({ classes, ...restProps }) => {
  return (
    <div className={classes.container}>
      <Typography className={classes.typographyStyle} variant="h6">
        This is a Material-UI demo.
      </Typography>
      <Typography className={classes.typographyStyle}>
        In order to view the demo Components select an item from the pop-up menu
        (
        <MenuIcon />) on the left side of the App Bar.
      </Typography>
    </div>
  );
};

export default Welcome;
