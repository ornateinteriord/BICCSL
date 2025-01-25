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

const Profile: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Male',
    email: '',
    mobile: '',
    profileImage: null as File | null,
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevData) => ({
      ...prevData,
      profileImage: file,
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);
    alert('Details Updated Successfully!');
  };

  return (
    <Card sx={{ margin: '2rem', mt: 10, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <CardContent>
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
            aria-controls="basic-details-content"
            id="basic-details-header"
            sx={{
              backgroundColor: '#04112f',
              color: '#fff',
              '& .MuiSvgIcon-root': {
                color: '#fff'
              }
            }}
          >
            Basic Details
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
              <FormControl>
                <FormLabel sx={{ color: '#04112f', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  Profile Image
                </FormLabel>
                <Button 
                  variant="outlined" 
                  component="label"
                  sx={{
                    width: 'fit-content',
                    color: '#04112f',
                    borderColor: '#04112f',
                    '&:hover': {
                      borderColor: '#04112f',
                      backgroundColor: 'rgba(4, 17, 47, 0.04)'
                    }
                  }}
                >
                  Choose File
                  <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                  />
                </Button>
                <span style={{ marginTop: '0.5rem', color: '#666' }}>
                  {formData.profileImage ? formData.profileImage.name : 'No file chosen'}
                </span>
              </FormControl>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  backgroundColor: '#04112f',
                  alignSelf: 'flex-end',
                  '&:hover': {
                    backgroundColor: '#0a1f4d'
                  }
                }}
              >
                Update
              </Button>
            </form>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default Profile;
