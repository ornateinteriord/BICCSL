import './dashboard.scss';
import { Box, Typography, Container } from '@mui/material';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Box
        sx={{
          background: 'linear-gradient(150deg, #283159 30%, #9d75add1 90%);',
          py: 2, 
          boxShadow: '0 3px 5px 2px #23303dc9',
        }}
      >
        <Container>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Welcome to MLM Dashboard
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              textAlign: 'center',
              mt: 2,
              opacity: 0.9
            }}
          >
            Manage your network and track your success
          </Typography>
        </Container>
      </Box>
    </div>
  )
}

export default Dashboard