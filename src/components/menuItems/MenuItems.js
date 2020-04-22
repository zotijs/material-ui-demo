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
    <MenuItem component={RouterLink} to="/examples/table" onClick={handleClose}>
      Creating a Table
    </MenuItem>
    <MenuItem
      component={RouterLink}
      to="/examples/autocomplete"
      onClick={handleClose}
    >
      Creating an Autocomplete Combo
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
    <MenuItem
      component={RouterLink}
      to="/examples/recharts-grid"
      onClick={handleClose}
    >
      Using Recharts
    </MenuItem>
    <MenuItem
      component={RouterLink}
      to="/examples/recharts-responsive"
      onClick={handleClose}
    >
      Responsive Recharts
    </MenuItem>
    <MenuItem
      component={RouterLink}
      to="/examples/dashboard"
      onClick={handleClose}
    >
      Recharts in DashBoard
    </MenuItem>
    <MenuItem
      component={RouterLink}
      to="/examples/dygraphs"
      onClick={handleClose}
    >
      Using Dygraphs
    </MenuItem>
    <MenuItem component={RouterLink} to="/examples/nivo" onClick={handleClose}>
      Using Nivo
    </MenuItem>
    <MenuItem
      component={RouterLink}
      to="/examples/simple-map"
      onClick={handleClose}
    >
      Using Mapbox and Leaflet
    </MenuItem>
  </>
));

export default MenuItems;
