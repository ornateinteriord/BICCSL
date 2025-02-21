import DataTable from 'react-data-table-component';
import { Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DASHBOARD_CUTSOM_STYLE, getDirectColumns } from '../../../utils/DataTableColumnsProvider';
import { useGetSponsers } from '../../../api/Memeber';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import useSearch from '../../../components/common/SearchQuery';

interface Sponser{
  sNo:string;
  Name:string;
  Member_id:string;
  mobileno:string;
  Date_of_joining:string;
  Sponsor_name:string;
  Sponsor_code:string;
}
const Direct = () => {
   const { data: sponsers, isLoading, isError, error } = useGetSponsers();

   useEffect(() => {
       if (isError) toast.error(error.message);
     }, [isError, error]);

  const data = Array.isArray(sponsers)?sponsers.map((sponser: Sponser,index)=>({
    sNo:index+1,
    Name:`${sponser.Name || "-"} - ${sponser.Member_id || "-"}`,
    mobileno:sponser. mobileno || "-",
    Date_of_joining:sponser. Date_of_joining || "-",
    Sponsor_name:`${sponser.Sponsor_name || "-"} - ${sponser.Sponsor_code || "-"}`,
  })) :[]
  const { searchQuery, setSearchQuery, filteredData } = useSearch(data,[
    "sNo",
    "Name",
    "mobileno",
    "Date_of_joining",
    "Sponsor_name"
  ])
    

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
            {`List of Direct (${data.length})`}
          </AccordionSummary>
          <AccordionDetails>
            <DataTable
              columns={getDirectColumns()}
              data={filteredData}
              pagination
              progressPending={isLoading}
              progressComponent={
                <CircularProgress size={"4rem"} sx={{ color: "#04112F" }} />
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
