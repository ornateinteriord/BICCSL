import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DateFilterComponent from '../../../components/common/DateFilterComponent';

const TransferPackage: React.FC = () => {
  const [formData, setFormData] = useState({
    date: '',
    packageQty: '1',
    transferedTo: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      date: date ? date.toISOString() : ''
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);
    alert('Package Transferred Successfully!');
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
            sx={{
              backgroundColor: '#04112f',
              color: '#fff',
              '& .MuiSvgIcon-root': { color: '#fff' }
            }}
          >
            Transfer Package Details
          </AccordionSummary>
          <AccordionDetails sx={{ padding: '2rem' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <DateFilterComponent onSelect={handleDateChange} width="100%" />
              <TextField
                label="Package Qty"
                name="packageQty"
                value={formData.packageQty}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
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
                label="Transfered To"
                name="transferedTo"
                value={formData.transferedTo}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter transfer recipient"
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
                Submit
              </Button>
            </form>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default TransferPackage;
