import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./style.css";
import { AppBar, Toolbar, Typography, Box, Button, Tooltip, IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const items = [
  { path: '/profile', cname: 'link', name: 'Profle' },
  { path: '/orderlist', cname: 'link', name: 'Order List' },
  { path: '/admin', cname: 'link', name: 'Admin' },
  { path: '/login', cname: 'link', name: 'Log out' },
]

const Nav = () => {

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" style={{ backgroundColor: '#19697B', marginBottom: '50px' }}>
        <Toolbar>
          <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Link to="/login" className='link'>
            <Button color='inherit' style={{ color: '#fff', fontSize: '18px' }}>Login</Button>
          </Link>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpen}>
              <AccountCircle style={{ fontSize: '40px' }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={Boolean(anchorElUser)}
            center
            onClose={handleClose}
          >
            {items.map(({ path, cname, name }) => (
              <Link to={path} className={cname}>
                <MenuItem onClick={handleClose}>{name}</MenuItem>
              </Link>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
