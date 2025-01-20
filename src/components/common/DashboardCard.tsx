import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

interface DashboardCardProps {
  amount: number;
  title: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ amount, title }) => {
  return (
    <Card
      sx={{
        background: 'linear-gradient(to right, #4f9de8, #a67bd5)',
        color: '#fff',
        borderRadius: '10px',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: 3,
        width: '24rem',
        flexGrow: 1, 
        flexShrink: 1,
      }}
    >
      <Box
        sx={{
          width: 150,
          height: 150,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          marginRight: '10px',
        }}
      >
        <CurrencyRupeeIcon sx={{ color: '#fff' }} />
      </Box>
      <CardContent sx={{ padding: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '5px' }}>
          {amount}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: '500' }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
