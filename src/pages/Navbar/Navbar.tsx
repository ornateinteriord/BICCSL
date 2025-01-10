import './navbar.scss';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <AppBar position="static" className="navbar" style={{ backgroundColor: '#313e4b' }}>
        <Toolbar className="navbar-toolbar">
          <Typography variant="h4" className="navbar-title" style={{ marginLeft: '12px' }}>
            BICCSL
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;