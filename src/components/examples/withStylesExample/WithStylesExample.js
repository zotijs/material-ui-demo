import React from "react";
import { Button } from "@material-ui/core/";

const WithStylesExample = ({ classes, ...restProps }) => {
  return (
    <div className={classes.outterContainer}>
      <div className={classes.innerContainer}>
        <Button className={classes.styledButton}>WITH STYLES BUTTON</Button>
        <Button>WITHOUT STYLES BUTTON</Button>
      </div>
    </div>
  );
};

export default WithStylesExample;
