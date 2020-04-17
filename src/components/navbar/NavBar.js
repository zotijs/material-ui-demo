import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import { MenuButton } from "components/menuButton";

const NavBar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <AppBar position="static" color={isDarkMode ? "inherit" : "primary"}>
      <Toolbar>
        <MenuButton />
        <div style={{ flex: 1 }}>
          <Button size="large" color="inherit" component={RouterLink} to="/">
            Material-UI Demo
          </Button>
        </div>
        <FormControlLabel
          control={<Switch checked={isDarkMode} onChange={toggleDarkMode} />}
          label="Dark Mode"
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
