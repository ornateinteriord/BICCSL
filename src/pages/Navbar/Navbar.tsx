import './navbar.scss';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <AppBar position="static" className="navbar" style={{ background: 'linear-gradient(170deg, #0f172a 43%, #071337 70%)' }}>
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