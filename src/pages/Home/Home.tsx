import { Button } from '../../components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        textAlign: 'center' 
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is where you can find the latest updates and information.
      </Typography>
      <Button variant="default" onClick={() => navigate('/dashboard')}>
        Go to Dashboard
      </Button>
    </Box>
  )
}

export default Home