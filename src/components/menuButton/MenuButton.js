import React, { useState, useRef } from "react";
import { IconButton, Menu, Fade } from "@material-ui/core/";
import { Menu as MenuIcon } from "@material-ui/icons";
import { MenuItems } from "components/menuItems";

const MenuButton = (props) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        ref={anchorRef}
        variant="contained"
        color="inherit"
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        anchorEl={anchorRef.current}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItems handleClose={handleClose} ref={anchorRef} />
      </Menu>
    </div>
  );
};

export default MenuButton;
