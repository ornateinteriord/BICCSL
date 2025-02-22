import DataTable from 'react-data-table-component';
import { Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DASHBOARD_CUTSOM_STYLE, getDirectColumns } from '../../../utils/DataTableColumnsProvider';
import { useGetSponsers } from '../../../api/Memeber';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import useSearch from '../../../hooks/SearchQuery';
import { CircularProgressLoader } from '../../../components/common/CustomLoader';

const Direct = () => {
   const { data: sponsers, isLoading, isError, error } = useGetSponsers();

   useEffect(() => {
       if (isError) toast.error(error.message);
     }, [isError, error]);

  const { searchQuery, setSearchQuery, filteredData } = useSearch(sponsers)
    

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
            {!isLoading && `List of Direct (${sponsers?.length})`}
          </AccordionSummary>
          <AccordionDetails>
            <DataTable
              columns={getDirectColumns()}
              data={filteredData}
              pagination
              progressPending={isLoading}
              progressComponent={
                <CircularProgressLoader />
              }
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
