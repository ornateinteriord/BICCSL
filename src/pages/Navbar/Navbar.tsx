import './navbar.scss';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <AppBar position="static" className="navbar" style={{ backgroundColor: '#313e4b' }}>
        <Toolbar className="navbar-toolbar">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick} className="navbar-menu-button" style={{ color: 'white' }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className="navbar-title" style={{ marginLeft: '12px' }}>
            BICCSL
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={sidebarOpen} />
    </>
  );
}

export default Navbar;