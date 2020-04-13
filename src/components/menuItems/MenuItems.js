import React from "react";
import { MenuItem } from "@material-ui/core/";
import { Link as RouterLink } from "react-router-dom";

const MenuItems = React.forwardRef(({ handleClose, ...restProps }, ref) => (
  <>
    <MenuItem
      component={RouterLink}
      to="/examples/with-styles"
      onClick={handleClose}
    >
      Using Styles HOC
    </MenuItem>
    <MenuItem component={RouterLink} to="/examples/card" onClick={handleClose}>
      Creating a Card
    </MenuItem>
    <MenuItem
      component={RouterLink}
      to="/examples/flexbox"
      onClick={handleClose}
    >
      Cards in FlexBox
    </MenuItem>
    <MenuItem
      component={RouterLink}
      to="/examples/css-grid"
      onClick={handleClose}
    >
      Cards in CSS-Grid
    </MenuItem>
    <MenuItem onClick={handleClose}>(TO-DO) Using Recharts</MenuItem>
    <MenuItem onClick={handleClose}>(TO-DO) Creating a DashBoard</MenuItem>
    <MenuItem onClick={handleClose}>(TO-DO) Recharts in DashBoard</MenuItem>
  </>
));

export default MenuItems;
