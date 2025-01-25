import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  InputAdornment,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WcIcon from '@mui/icons-material/Wc';
import LockIcon from '@mui/icons-material/Lock';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const NewResgister: React.FC = () => {
  const [formData, setFormData] = useState({
    sponsorCode: 'SF000001',
    sponsorName: 'MANJUNATH N',
    name: '',
    gender: 'Male',
    email: '',
    mobile: '',
    pinCode: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);
    alert('Details Updated Successfully!');
  };

  return (
    <Card sx={{ margin: '2rem', mt: 10, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <CardContent>
        {/* First Accordion - Joining Details */}
        <Accordion 
          defaultExpanded
          sx={{
            boxShadow: 'none',
            '&.MuiAccordion-root': {
              backgroundColor: '#fff'
            }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: '#04112f',
              color: '#fff',
              '& .MuiSvgIcon-root': { color: '#fff' }
            }}
          >
            Joining Details
          </AccordionSummary>
          <AccordionDetails sx={{ padding: '2rem' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <TextField
                label="Sponsor Code"
                name="sponsorCode"
                value={formData.sponsorCode}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: '#04112f' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#04112f',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#04112f',
                    }
                  }
                }}
              />
              <TextField
                label="Sponsor Name"
                name="sponsorName"
                value={formData.sponsorName}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: '#04112f' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#04112f',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#04112f',
                    }
                  }
                }}
              />
            </form>
          </AccordionDetails>
        </Accordion>

        {/* Second Accordion - New Member Details */}
        <Accordion 
          defaultExpanded
          sx={{
            boxShadow: 'none',
            '&.MuiAccordion-root': {
              backgroundColor: '#fff'
            }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: '#04112f',
              color: '#fff',
              '& .MuiSvgIcon-root': { color: '#fff' }
            }}
          >
            New Member Details
          </AccordionSummary>
          <AccordionDetails sx={{ padding: '2rem' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter your name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: '#04112f' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#04112f',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#04112f',
                    }
                  }
                }}
              />
              <FormControl>
                <FormLabel sx={{ color: '#04112f', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <WcIcon sx={{ color: '#04112f' }} />
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={formData.gender}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel 
                    value="Male" 
                    control={<Radio sx={{
                      '&.Mui-checked': {
                        color: '#04112f',
                      }
                    }}/>} 
                    label="Male" 
                  />
                  <FormControlLabel 
                    value="Female" 
                    control={<Radio sx={{
                      '&.Mui-checked': {
                        color: '#04112f',
                      }
                    }}/>} 
                    label="Female" 
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: '#04112f' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#04112f',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#04112f',
                    }
                  }
                }}
              />
              <TextField
                label="Mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter your mobile number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon sx={{ color: '#04112f' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#04112f',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#04112f',
                    }
                  }
                }}
              />
              <TextField
                label="Pin Code"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter your pin code"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon sx={{ color: '#04112f' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#04112f',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#04112f',
                    }
                  }
                }}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter your password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: '#04112f' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#04112f',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#04112f',
                    }
                  }
                }}
              />
            </form>
          </AccordionDetails>
        </Accordion>

        {/* Register Button */}
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: '#04112f',
            margin: '1rem',
            float: 'right',
            '&:hover': {
              backgroundColor: '#0a1f4d'
            }
          }}
        >
          Register
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewResgister;
