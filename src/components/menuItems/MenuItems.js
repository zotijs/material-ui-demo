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
    <MenuItem onClick={handleClose}>(TO-DO) Creating a Card</MenuItem>
    <MenuItem onClick={handleClose}>(TO-DO) Cards in FlexBox</MenuItem>
    <MenuItem onClick={handleClose}>(TO-DO) Cards in CSS-Grid</MenuItem>
    <MenuItem onClick={handleClose}>(TO-DO) Creating a DashBoard</MenuItem>
    <MenuItem onClick={handleClose}>(TO-DO) Using Recharts</MenuItem>
    <MenuItem onClick={handleClose}>(TO-DO) Recharts in DashBoard</MenuItem>
  </>
));

export default MenuItems;
