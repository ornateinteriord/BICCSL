import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Card,
  CardContent,
  InputAdornment,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import BadgeIcon from '@mui/icons-material/Badge';
    
const KYC: React.FC = () => {
  const [formData, setFormData] = useState({
    accountName: '',
    accountNo: '',
    ifscCode: '',
    bankName: '',
    panNo: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
            Update Bank Account Details
          </AccordionSummary>
          <AccordionDetails sx={{ padding: '2rem' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <TextField
                label="Account Name"
                name="accountName"
                value={formData.accountName}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter account holder name"
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
                label="Account Number"
                name="accountNo"
                value={formData.accountNo}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter account number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountBalanceWalletIcon sx={{ color: '#04112f' }} />
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
                label="IFSC Code"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter IFSC code"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ConfirmationNumberIcon sx={{ color: '#04112f' }} />
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
                label="Bank Name"
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter bank name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountBalanceIcon sx={{ color: '#04112f' }} />
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
                label="PAN Number"
                name="panNo"
                value={formData.panNo}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter PAN number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BadgeIcon sx={{ color: '#04112f' }} />
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

export default KYC;
