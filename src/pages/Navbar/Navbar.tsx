import { LogOutIcon, MenuIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import "./navbar.scss";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

const Navbar = ({
  toggelSideBar,
  shouldHide,
}: {
  toggelSideBar: () => void;
  shouldHide: boolean;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn , userRole } = useAuth();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <AppBar
        position="fixed"
        className="navbar"
        style={{
          background: "linear-gradient(170deg, #0f172a 43%, #071337 70%)",
        }}
      >
        <Toolbar className="navbar-toolbar">
          {!shouldHide && (
            <IconButton onClick={() => toggelSideBar()}>
              <MenuIcon color="white" />
            </IconButton>
          )}
          <Typography
            variant="h4"
            className="navbar-title"
            style={{ marginLeft: "12px", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            BICCSL
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            {isLoggedIn ? (
              location.pathname === '/' ? (
                <Button
                  variant="ghost"
                  style={{ marginRight: "8px" }}
                  onClick={() => navigate(`/${userRole?.toLowerCase()}/dashboard`)}
                >
                  Go to Dashboard
                </Button>
              ) : (
                <Button
                  className="logout-btn"
                  variant="ghost"
                  style={{ marginRight: "8px", fontSize: "50px" }}
                  onClick={handleLogout}
                >
                  <LogOutIcon />
                </Button>
              )
            ) : (
              <>
                <Button
                  variant="secondary"
                  style={{ marginRight: "8px" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                {/* temporarily removed signup button */}
                {/* <Button
                  variant="secondary"
                  style={{ marginRight: "8px" }}
                  onClick={() => navigate("/register")}
                >
                  Signup
                </Button> */}
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
