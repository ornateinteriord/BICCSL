import DataTable from 'react-data-table-component';
import { Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DASHBOARD_CUTSOM_STYLE, getTransactionColumns } from '../../../utils/DataTableColumnsProvider';
import { useGetTransactionDetails } from '../../../api/Memeber';
import { LoadingComponent } from '../../../App';
import { useEffect } from 'react';


const Transaction = () => {
  const userId = localStorage.getItem('userId')
  const { data: transactions, isLoading,isError, error } = useGetTransactionDetails(userId!)
  
  interface Transaction {
    transaction_date: string;
    description: string;
    ew_credit: number;
    ew_debit: number;
    status: string;
  }
useEffect(()=>{
    if(isError){
     console.error(error?.message || 'Failed to fetch Transaction details')
    }
  },[isError , error])
  const data = transactions?.map((transaction: Transaction)=> ({
    date: transaction.transaction_date || "-",
    description: transaction.description || "-",
    credits: transaction.ew_credit || "-",
    debit: transaction.ew_debit || "-",
    status: transaction.status || "-",
  })) || [];
  

  const noDataComponent = <div style={{ padding: '24px' }}>No data available in table</div>;

  return (
    <Card sx={{ margin: '2rem', mt: 10 }}>
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
            List of Transaction
          </AccordionSummary>
          <AccordionDetails>
            <DataTable
              columns={getTransactionColumns()}
              data={data}
              pagination
              customStyles={DASHBOARD_CUTSOM_STYLE}
              paginationPerPage={25}
              paginationRowsPerPageOptions={[25, 50, 100]}
              highlightOnHover
              noDataComponent={noDataComponent}
              subHeader
              subHeaderComponent={
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', padding: '0.5rem' }}>
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
      {isLoading && <LoadingComponent/>}
    </Card>
    
  );
};

export default Transaction;
