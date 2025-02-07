import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is where you can find the latest updates and information.
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: "1rem",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Button variant="default" onClick={handleNavigate}>
          Go to Dashboard
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
