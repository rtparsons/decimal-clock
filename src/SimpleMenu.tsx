import React from 'react';
import Button from '@material-ui/core/Button';
import { Menu as MenuIcon } from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton, Menu } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} color="inherit">
        <MenuIcon></MenuIcon>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/twentyfour">24 Hour</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/twelve">12 Hour</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/decimal">Decimal</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/fractional">Fractional</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
