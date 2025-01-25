import { Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Typography, Grid, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DataTable from 'react-data-table-component';
import { useMediaQuery } from '@mui/material';
import { DASHBOARD_CUTSOM_STYLE } from '../../../utils/DataTableColumnsProvider';

const Wallet = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const columns = [
    {
      name: 'Date',
      selector: (row: any) => row.date,
      sortable: true,
    },
    {
      name: 'Transaction ID',
      selector: (row: any) => row.transactionId,
      sortable: true,
    },
    {
      name: 'Type',
      selector: (row: any) => row.type,
      sortable: true,
    },
    {
      name: 'Amount',
      selector: (row: any) => row.amount,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row: any) => row.status,
      sortable: true,
    }
  ];

  // Sample data - replace with actual data
  const transactions = [
    {
      date: '2024-01-15',
      transactionId: 'TXN123456',
      type: 'Credit',
      amount: '₹5000',
      status: 'Completed'
    },
    // Add more transaction data as needed
  ];

  return (
    <Card sx={{ 
      margin: isMobile ? '1rem' : '2rem',
      backgroundColor: '#fff',
      mt: 10
    }}>
      <CardContent sx={{ padding: isMobile ? '12px' : '24px' }}>
        {/* Wallet Balance Section */}
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
              '& .MuiSvgIcon-root': { color: '#fff' },
              minHeight: isMobile ? '48px' : '64px',
            }}
          >
            Wallet Overview
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3} sx={{ mb: 3 }}>
              <Grid item xs={12} md={4}>
                <Box sx={{ 
                  p: 3, 
                  backgroundColor: '#f5f5f5', 
                  borderRadius: 2,
                  textAlign: 'center'
                }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    Available Balance
                  </Typography>
                  <Typography variant="h4" sx={{ color: '#04112f', mt: 1 }}>
                    ₹10,000
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ 
                  p: 3, 
                  backgroundColor: '#f5f5f5', 
                  borderRadius: 2,
                  textAlign: 'center'
                }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    Total Income
                  </Typography>
                  <Typography variant="h4" sx={{ color: '#04112f', mt: 1 }}>
                    ₹50,000
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ 
                  p: 3, 
                  backgroundColor: '#f5f5f5', 
                  borderRadius: 2,
                  textAlign: 'center'
                }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    Total Withdrawal
                  </Typography>
                  <Typography variant="h4" sx={{ color: '#04112f', mt: 1 }}>
                    ₹40,000
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* Transaction History Section */}
        <Accordion 
          defaultExpanded 
          sx={{ 
            mt: isMobile ? 2 : 4,
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
              '& .MuiSvgIcon-root': { color: '#fff' },
              minHeight: isMobile ? '48px' : '64px',
            }}
          >
            Transaction History
          </AccordionSummary>
          <AccordionDetails>
            <DataTable
              columns={columns}
              data={transactions}
              pagination
              customStyles={DASHBOARD_CUTSOM_STYLE}
              paginationPerPage={isMobile ? 10 : 25}
              paginationRowsPerPageOptions={isMobile ? [10, 20, 50] : [25, 50, 100]}
              highlightOnHover
              responsive
              subHeader
              subHeaderComponent={
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', padding: isMobile ? '0.25rem' : '0.5rem' }}>
                  <TextField
                    placeholder="Search"
                    variant="outlined"
                    size="small"
                  />
                </div>
              }
            />
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default Wallet;
