import './navbar.scss';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <AppBar position="static" className="navbar" style={{ backgroundColor: '#313e4b' }}>
        <Toolbar className="navbar-toolbar">
          <Typography variant="h4" style={{ flexGrow: 1 }} className="navbar-title">
            BICCSL
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuClick} className="navbar-menu-button" style={{ color: 'white' }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}

export default Navbar;