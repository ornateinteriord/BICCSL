import { Button } from '../../components/ui/button';
import './navbar.scss';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" className="navbar" style={{ background: 'linear-gradient(170deg, #0f172a 43%, #071337 70%)' }}>
        <Toolbar className="navbar-toolbar">
          <Typography variant="h4" className="navbar-title" style={{ marginLeft: '12px' }}>
            BICCSL
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            <Button variant="ghost"style={{ marginRight: '8px' }}>
              Login
            </Button>
            <Button variant="secondary" style={{ marginRight: '8px' }}>
              Signup
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;