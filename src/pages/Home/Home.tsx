import { Button} from '../../components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'

const Home = ({role , setRole }: { role: string, setRole: (role: string) => void }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/login');
  }

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
      <Box sx={{ display: 'flex', width: '100%', gap: '1rem', justifyContent: 'center' , mt: 2 }}>
        <FormControl sx={{ marginBottom: '1rem', minWidth: 120 }}>
          <Select
            value={role}
            onChange={(e: SelectChangeEvent) => setRole(e.target.value)}
            size="small"
          >
            <MenuItem value="ADMIN">ADMIN</MenuItem>
            <MenuItem value="USER">USER</MenuItem>
          </Select>
        </FormControl>
        <Button variant="default" onClick={handleNavigate}>
          Go to Dashboard
        </Button>
      </Box>
        <Typography variant="body2" gutterBottom sx={{ color: 'red' }}>
          Note: Temporarily adding role selection for testing purposes.
        </Typography>
    </Box>
  )
}

export default Home