import DataTable from 'react-data-table-component';
import { Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Typography, Button, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DASHBOARD_CUTSOM_STYLE, getAdminPageTransactionColumns } from '../../../utils/DataTableColumnsProvider';
import DateFilterComponent from '../../../components/common/DateFilterComponent';

const Transactions = () => {
  return (
    <TransactionDataTable title="Transactions" summaryTitle="List of Transactions" data={data} columns={getAdminPageTransactionColumns()} />
  );
};

export default Transactions;



const data = [
  {
    date: '18-Nov-2024',
    member: 'BICCSL (SF000001)',
    description: 'Direct Benefits',
    type: 'payout',
    ewCredit: '₹ 180.0',
    ewDebit: '₹ 0.0',
  },
  // Add more sample data as needed
];

export const TransactionDataTable = ({title,summaryTitle, data, columns} : {title: string, summaryTitle: string, data: any, columns: any}) => {
  const handleFromDateSelect = (date: any) => {
    console.log(date);
  }

  const handleToDateSelect = (date: any) => {
    console.log(date);
  }

  return (
    <>
      <Grid display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '2rem', mt: 12 }}>
        <Typography variant="h4">
          {title}
        </Typography>
        <Grid display="flex" gap={2}>
          <TextField
            size="small"
            placeholder="Member Id"
            sx={{ minWidth: 200 }}
          />
          <DateFilterComponent onSelect={handleFromDateSelect} />
          <DateFilterComponent onSelect={handleToDateSelect} />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#04112f',
              '&:hover': { backgroundColor: '#04112f' }
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Card sx={{ margin: '2rem', mt: 2 }}>
        <CardContent>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: '#04112f',
                color: '#fff',
                '& .MuiSvgIcon-root': { color: '#fff' }
              }}
            >
              {summaryTitle}
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                <TextField
                  size="small"
                  placeholder="Search..."
                  sx={{ minWidth: 200 }}
                />
              </div>
              <DataTable
                columns={columns}
                data={data}
                pagination
                customStyles={DASHBOARD_CUTSOM_STYLE}
                paginationPerPage={25}
                paginationRowsPerPageOptions={[25, 50, 100]}
                highlightOnHover
              />
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </>
  )
}
