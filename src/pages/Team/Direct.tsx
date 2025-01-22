import DataTable from 'react-data-table-component';
import { Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DASHBOARD_CUTSOM_STYLE } from '../../utils/DataTableColumnsProvider';

const Direct = () => {
  const columns = [
    {
      name: 'S No',
      selector: (row: any) => row.sNo,
      sortable: true,
    },
    {
      name: 'Member',
      selector: (row: any) => row.member,
      sortable: true,
    },
    {
      name: 'Mobile No',
      selector: (row: any) => row.mobileNo,
      sortable: true,
    },
    {
      name: 'DOJ',
      selector: (row: any) => row.doj,
      sortable: true,
    },
    {
      name: 'Sponsor',
      selector: (row: any) => row.sponsor,
      sortable: true,
    },
  ];

  const data = [
    {
      sNo: '1',
      member: 'Shivananda C - BIC882898',
      mobileNo: '9696968585',
      doj: '18-Nov-2024',
      sponsor: 'BICCSL - SF000001',
    },
    {
      sNo: '2',
      member: 'Ggg - BIC192700',
      mobileNo: '9845044424',
      doj: '24-Dec-2024',
      sponsor: 'BICCSL - SF000001',
    },
    {
      sNo: '3',
      member: 'Nnn - BIC043465',
      mobileNo: '9100000000',
      doj: '07-Jan-2025',
      sponsor: 'MANJUNATH N - SF000001',
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
            List of Direct (3)
          </AccordionSummary>
          <AccordionDetails>
            <DataTable
              columns={columns}
              data={data}
              pagination
              paginationPerPage={25}
              paginationRowsPerPageOptions={[25, 50, 100]}
              highlightOnHover
              customStyles={DASHBOARD_CUTSOM_STYLE}
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

export default Direct;
