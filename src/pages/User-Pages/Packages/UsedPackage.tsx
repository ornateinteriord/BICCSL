import DataTable from 'react-data-table-component';
import { Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DASHBOARD_CUTSOM_STYLE, getUsedPackageColumns } from '../../../utils/DataTableColumnsProvider';

const UsedPackage = () => {
  

  const data = [
    {
      date: '18/11/2024',
      memberCode: 'MANJUNATH N (SF000001)',
      packageCode: 'pZrqqSd',
      amount: '₹ 2000.0',
      usedFor: 'Shivananda C (BIC882898)',
      usedDate: '18/11/2024',
      status: 'used',
    },
  ];

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
            List of Used Package
          </AccordionSummary>
          <AccordionDetails>
            <DataTable
              columns={getUsedPackageColumns()}
              data={data}
              pagination
              customStyles={DASHBOARD_CUTSOM_STYLE}
              paginationPerPage={25}
              paginationRowsPerPageOptions={[25, 50, 100]}
              highlightOnHover
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
    </Card>
  );
};

export default UsedPackage;