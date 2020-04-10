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
    <MenuItem onClick={handleClose}>Example 1</MenuItem>
    <MenuItem onClick={handleClose}>Example 2</MenuItem>
  </>
));

export default MenuItems;
