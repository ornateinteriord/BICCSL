import { Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DataTable from 'react-data-table-component';
import { useMediaQuery } from '@mui/material';

const PackageHistory = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const columns = [
    {
      name: 'Package ID',
      selector: (row: any) => row.id,
      sortable: true,
    },
    {
      name: 'Package Name',
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row: any) => row.status,
      sortable: true,
    },
    {
      name: 'Date',
      selector: (row: any) => row.date,
      sortable: true,
    },
    {
      name: 'Amount',
      selector: (row: any) => row.amount,
      sortable: true,
    }
  ];

  const DASHBOARD_CUTSOM_STYLE = {
    headRow: {
      style: {
        backgroundColor: '#04112f',
        color: '#ffffff'
      }
    },
    rows: {
      style: {
        minHeight: '60px',
        '&:nth-child(odd)': {
          backgroundColor: '#f5f5f5',
        }
      }
    }
  };

  // Sample data - replace with actual data
  const packages = [
    {
      id: '1',
      name: 'Basic Package',
      status: 'Active',
      date: '2024-01-15',
      amount: '$99'
    },
    // Add more package data as needed
  ];

  return (
    <Card sx={{ 
      margin: isMobile ? '1rem' : '2rem',
      backgroundColor: '#fff', 
      mt: 10 
    }}>
      <CardContent sx={{ padding: isMobile ? '12px' : '24px' }}>
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
            Package History
          </AccordionSummary>
          <AccordionDetails>
            <DataTable
              columns={columns}
              data={packages}
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

export default PackageHistory;
